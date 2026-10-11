# -*- coding: utf-8 -*-
"""请求签名器: 复现 waimai jsguard 2.5.0 的请求规范化 + mtgsig 生成。

来源: utils/jsguard.js 的 be()/signWithSiua, 以及 weapp-safety-request3.0.1 的
addCommonParams 包装。

与 fanfan 的差异:
  * Pc(In) 结构: {b7(秒), b1(账号信息), b8(请求序号), b12(appId), b2(页面路由), b9('00102')}
    - b6 是 qn.p() 每次调用生成, 不参与最终签名 (In 快照发生在 b6 之后), 见 be()
  * env_flag = 123 (真实小程序环境; fanfan 为 6)
  * In 在每次请求里原地更新, 但 a4/a5/d1 只依赖快照时的 In JSON。
"""
from __future__ import annotations

import json
import re
import time
from dataclasses import dataclass, field
from urllib.parse import quote

from . import _mtgsig
from . import _finger

# 与 jsguard F()/Y() 等价的 url 解析 (协议/主机/端口/路径/查询/哈希)
_URL_RE = re.compile(
    r"^(?:([A-Za-z]+):)?(/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$"
)


def _enc(s) -> str:
    """等价 JS encodeURIComponent 的额外转义 (jsguard Y)。"""
    return quote(str(s), safe="~!*'()-_.").replace("!", "%21").replace("'", "%27").replace(
        "(", "%28").replace(")", "%29").replace("*", "%2A")


def _parse_url(url: str):
    m = _URL_RE.match(url)
    if not m:
        return None
    proto, _, host, port, path, query, _hash = m.groups()
    pathname = "/" + (path or "")
    return {"protocol": proto or "", "host": host or "", "port": port, "pathname": pathname,
            "query": query or ""}


def _parse_query(qs: str, keep_empty: bool = False):
    """jsguard F(): 解析 query 为 [key, value] 对 (已 decode)。"""
    from urllib.parse import unquote
    out = []
    if not qs:
        return out
    for part in qs.split("&"):
        if "=" in part:
            k, v = part.split("=", 1)
            out.append([unquote(k.replace("+", " ")), unquote(v.replace("+", " "))])
        elif part:
            out.append([unquote(part.replace("+", " ")), "undefined" if keep_empty else ""])
    return out


def _push_obj(pairs, obj, keep_undefined=False):
    """jsguard q(): 把对象/数组展开成 [enc(k), enc(v)] 对。"""
    if isinstance(obj, dict):
        for k, v in obj.items():
            if v is None:
                pairs.append([_enc(k), "undefined" if keep_undefined else "null"])
            elif isinstance(v, (dict, list)):
                pairs.append([_enc(k), _enc(json.dumps(v, separators=(",", ":"), ensure_ascii=False))])
            else:
                pairs.append([_enc(k), _enc(v)])
    elif isinstance(obj, list):
        for k, v in obj:
            pairs.append([_enc(k), _enc(v)])


def _sort_pairs(pairs):
    """jsguard Q(): 先按 key 再按 value 排序。"""
    return sorted(pairs, key=lambda e: (e[0], e[1]))


def build_w(method: str, url: str, data, header: dict | None = None) -> bytes:
    """复现 be() 里构造的待签名串 w。返回 encodeURIComponent 后的字节。"""
    header = header or {}
    method = method.upper()
    ct = ""
    for k, v in header.items():
        if k.lower() == "content-type":
            ct = str(v).lower()
    is_form = ct.startswith("application/x-www-form-urlencoded")

    info = _parse_url(url) or {"pathname": "/", "query": ""}
    pathname = info["pathname"]
    query_pairs = _parse_query(info["query"])

    h = []
    body = ""
    if method == "GET":
        if isinstance(data, dict) and data:
            _push_obj(h, data, keep_undefined=True)
            if query_pairs:
                extra = {}
                for k, v in _parse_query(info["query"], keep_empty=True):
                    if not (isinstance(data, dict) and k in data):
                        extra[k] = v
                _push_obj(h, extra, keep_undefined=True)
        else:
            _push_obj(h, query_pairs)
    else:
        _push_obj(h, query_pairs)
        if is_form:
            if isinstance(data, str):
                body = data
            elif isinstance(data, dict):
                parts = []
                for k, v in data.items():
                    if v is None:
                        parts.append([quote(str(k)), "undefined"])
                    else:
                        parts.append([quote(str(k)), quote(str(v))])
                body = "&".join("%s=%s" % (k, v) for k, v in parts)

    h = _sort_pairs(h)
    w = _mtgsig.W(method + " " + pathname + " " + "&".join("%s=%s" % (k, v) for k, v in h))
    if is_form:
        if body:
            w += _mtgsig.X(_mtgsig.W(body))
    else:
        if isinstance(data, str):
            w += _mtgsig.X(_mtgsig.W(data))
        elif data is not None:
            w += _mtgsig.X(_mtgsig.W(json.dumps(data, separators=(",", ":"), ensure_ascii=False)))
    return w


def build_pc(b7: int, b1: dict, b8: int, b12: str, b2: str = "", b9: str = "00102") -> str:
    """按 be() 里 In 的真实键序构造 Pc JSON 字符串。

    键序 (与黄金向量一致): b7, b1, b8, b12, b2, b9。
    """
    pc = {"b7": b7, "b1": b1, "b8": b8, "b12": b12, "b2": b2, "b9": b9}
    return json.dumps(pc, separators=(",", ":"), ensure_ascii=False)


@dataclass
class Signer:
    """持有 jsguard 运行时状态 (Pc / siua / dfpId / appId)。"""

    app_id: str = "wx2c348cf579062e56"
    siua: str = ""                       # finger.i(); 为空则惰性生成
    dfp_id: str = ""                      # finger.d()
    env_flag: int = 123                   # jsguard 自检 (微信小程序真机 = 123)
    server_time_diff: int = 0             # finger.std()
    pc_b1: dict = field(default_factory=dict)   # 账号信息 (getAccountInfoSync / getAppBaseInfo)
    pc_b2: str = ""                       # 页面路由
    _seq: int = 0

    def _ensure_siua(self):
        if not self.siua:
            ts = int(time.time() * 1000)
            local_id = _finger.build_local_id(ts, {})
            arr = _finger.build_dfp_array(self.app_id, local_id, ts, _finger.empty_system_arr())
            self.siua = _finger.build_siua(arr)
        if not self.dfp_id:
            self.dfp_id = self.siua[4:]

    def _default_b1(self) -> dict:
        return {"miniProgram": {"appId": self.app_id, "envVersion": "release", "version": "15.15.15"}}

    def sign(self, method: str, url: str, data=None, header: dict | None = None,
             now_ms: int | None = None) -> dict:
        """返回 {'url','header','data'} 的最终请求 (header 含 mtgsig)。"""
        self._ensure_siua()
        i = int(time.time() * 1000 if now_ms is None else now_ms) + self.server_time_diff
        self._seq += 1
        b1 = self.pc_b1 if self.pc_b1 else self._default_b1()
        pc_json = build_pc(i // 1000, b1, self._seq, self.app_id, self.pc_b2)
        w = build_w(method, url, data, header)
        sig = _mtgsig.sign(self.siua, i, self.env_flag, w, pc_json,
                           a3=self.dfp_id, a7=self.app_id)
        out_header = dict(header or {})
        out_header["mtgsig"] = json.dumps(sig, separators=(",", ":"), ensure_ascii=False)
        return {"url": url, "header": out_header, "data": data, "method": method.upper()}

    def sign_with_siua(self, options: dict, wx_ids: dict | None = None,
                       token: str | None = None, user_id: str | None = None) -> dict:
        """复现 @mtfe/weapp-safety-request addCommonParams + jsguard.signWithSiua。

        options: {'url','method','header','data'}。
        wx_ids: {'openId','openIdCipher'} 会作为 header 注入;
        token/user_id 会作为 header 'token'/'csecuserid' 注入。
        """
        opts = dict(options)
        header = dict(opts.get("header") or {})
        if wx_ids:
            if wx_ids.get("openId"):
                header.setdefault("openId", wx_ids["openId"])
            if wx_ids.get("openIdCipher"):
                header.setdefault("openIdCipher", wx_ids["openIdCipher"])
        if token:
            header.setdefault("token", token)
        if user_id:
            header.setdefault("csecuserid", user_id)
        opts["header"] = header
        signed = self.sign(opts.get("method", "GET"), opts["url"],
                           opts.get("data"), header)
        opts["header"] = signed["header"]
        opts["method"] = signed["method"]
        return opts
