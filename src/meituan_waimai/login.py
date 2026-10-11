# -*- coding: utf-8 -*-
"""美团外卖账号登录链路纯协议复现 (account/account-core)。

链路 (silentLogin):
  1. getWxIds(code):  POST open.meituan.com/user/thirdinfo/getweappuserinfo
                       form {code, appName}  -> {openId, openIdCipher, unionId}
  2. silentLogin:     POST open.meituan.com/user/v1/weappsilentlogin
                       form {wechatFingerprint, code}
                       -> {token, userId, openId, openIdCipher, unionId, ...}
  3. getMtInfo:       GET  open.meituan.com/user/v1/info?token=&fields=...

请求包装 (z):
  - url 追加 sdkVersion/utm_medium/joinkey/sdkType=wxmp/login_sdk_version/
    appName/risk_app/risk_partner/risk_platform/risk_smsPrefixId/risk_smsTemplateId/
    version_name/token_id/uuid 等 query 参数;
  - data 合并 device_type(=model)/device_os="微信小程序";
  - 再经 jsguard.sign 注入 header.mtgsig。

红线: 唯一需要外部输入的是 wx.login 的 code (真实微信环境);
      wechatFingerprint 由 finger.g() 纯 Python 生成, 无 adb/Frida/RPC。
"""
from __future__ import annotations

import json
from dataclasses import dataclass, field
from urllib.parse import quote

import requests

from .signer import Signer

PROD_DOMAIN = "open.meituan.com"
TEST_DOMAIN = "open.wpt.test.sankuai.com"

PATHS = {
    "getmtuserinfo": "/user/v1/info",
    "getwxinfo": "/user/thirdinfo/getweappuserinfo",
    "getwxuserinfo": "/user/thirdinfo/getwechatuserinfo",
    "updatemtuserinfo": "/user/settings",
    "wxmobilelogin": "/user/v2/weappgetmobilelogin",
    "wxbindapply": "/user/v2/weappbindmobileloginapply",
    "wxbind": "/user/v2/weappbindmobilelogin",
    "wxslientlogin": "/user/v1/weappsilentlogin",
    "newwxsilentlogin": "/user/v1/weappsilentloginembedded",
    "logout": "/thirdlogin/wechatapplogout",
    "generateticket": "/thirdlogin/user/h5/sharelogin/generateTicket",
}

GET_MT_INFO_FIELDS = ["id", "username", "avatarurl", "avatartype", "mobile",
                      "city", "cityid", "nickname"]


class LoginError(RuntimeError):
    """登录链路业务错误 (携带服务端原始响应, 便于区分 风控 / code / 签名)。"""

    def __init__(self, message: str, resp: dict | None = None):
        super().__init__(message)
        self.resp = resp or {}

    @property
    def code(self):
        return ((self.resp.get("error") or {}).get("code"))

    @property
    def type(self):
        return ((self.resp.get("error") or {}).get("type"))


@dataclass
class LoginConfig:
    """来自 components/login-sdkV2/config.js + account-core init 的常量。"""

    app_name: str = "waimai"
    app_id: str = "wx2c348cf579062e56"
    risk_app: int = 4
    risk_platform: int = 13          # RistPlatform
    risk_partner: int = 4            # RistPartner
    risk_sms_template_id: int = 0
    risk_sms_prefix_id: int = 0
    token_id: str = "3agGXN9HaNKUsu64l_alrw"
    joinkey: str = "100432_1577962114"
    sdk_version: str = "6.18.2"
    # 设备相关 (真机由 wx.getSystemInfoSync 提供)
    wx_version: str = ""             # wx.version -> sdkVersion query
    platform: str = ""               # "iphone"/"android"/"devtools" -> utm_medium
    model: str = ""                  # device_type
    version_name: str = "15.15.15"   # 小程序版本
    uuid: str = ""                   # lxcuid
    env: str = "prod"                # prod | test

    @property
    def domain(self) -> str:
        return PROD_DOMAIN if self.env == "prod" else TEST_DOMAIN


def _z(url: str, cfg: LoginConfig) -> str:
    """account-core z(): 追加签名相关 query 参数 (仅非 null 值)。"""
    params = {
        "sdkVersion": cfg.wx_version,
        "utm_medium": cfg.platform,
        "joinkey": cfg.joinkey,
        "sdkType": "wxmp",
        "login_sdk_version": cfg.sdk_version,
        "appName": cfg.app_name,
        "risk_app": cfg.risk_app,
        "risk_partner": cfg.risk_partner,
        "risk_platform": cfg.risk_platform,
        "risk_smsPrefixId": cfg.risk_sms_prefix_id,
        "risk_smsTemplateId": cfg.risk_sms_template_id,
        "version_name": cfg.version_name,
        "token_id": cfg.token_id,
        "uuid": cfg.uuid,
    }
    pairs = ["%s=%s" % (quote(str(k), safe=""), quote(str(v), safe=""))
             for k, v in params.items() if v is not None and v != ""]
    if not pairs:
        return url
    return url + ("&" if "?" in url else "?") + "&".join(pairs)


class LoginClient:
    def __init__(self, cfg: LoginConfig | None = None, signer: Signer | None = None,
                 session: requests.Session | None = None):
        self.cfg = cfg or LoginConfig()
        self.signer = signer or Signer(app_id=self.cfg.app_id)
        self.http = session or requests.Session()
        # 登录态缓存
        self.auth: dict = {}       # {userId, token}
        self.wx_ids: dict = {}     # {openId, openIdCipher, unionId}
        self.mt_info: dict = {}

    # --- 表单请求 G() ----------------------------------------------------------
    def _g_form(self, path: str, data: dict, method: str = "POST") -> dict:
        url = _z("https://" + self.cfg.domain + path, self.cfg)
        body = dict(data)
        body["device_type"] = self.cfg.model
        body["device_os"] = "微信小程序"
        header = {"content-type": "application/x-www-form-urlencoded"}
        signed = self.signer.sign(method, url, body, header)
        req = self.http.request(signed["method"], signed["url"],
                                headers=signed["header"],
                                data="&".join("%s=%s" % (quote(str(k), safe=""), quote(str(v), safe=""))
                                              for k, v in signed["data"].items()))
        try:
            return req.json()
        except Exception:
            return {"statusCode": req.status_code, "text": req.text}

    # --- 业务链路 --------------------------------------------------------------
    def get_wx_ids(self, code: str) -> dict:
        """de(): wx.login code -> {openId, openIdCipher, unionId}。"""
        resp = self._g_form(PATHS["getwxinfo"], {"code": code, "appName": self.cfg.app_name})
        openid = resp.get("openid") or resp.get("openId")
        openid_cipher = resp.get("openidCipher") or resp.get("openIdCipher")
        unionid = resp.get("unionid") or resp.get("unionId")
        unionid_cipher = resp.get("unionIdCipher")
        if openid and openid_cipher and unionid:
            self.wx_ids = {"openId": openid, "openIdCipher": openid_cipher, "unionId": unionid}
            if unionid_cipher:
                self.wx_ids["unionIdCipher"] = unionid_cipher
            return self.wx_ids
        raise LoginError("getwxinfo 失败: %s" % json.dumps(resp, ensure_ascii=False), resp)

    def silent_login(self, code: str, wechat_fingerprint: str,
                     token: str | None = None, net_check: bool = False) -> dict:
        """silentLogin(): POST weappsilentlogin {wechatFingerprint, code[, token]}。

        对应 account-core silentLogin(e) 内层闭包:
          - net_check=True 时走 newwxsilentlogin (weappsilentloginembedded),
            否则走 wxslientlogin (weappsilentlogin);
          - 已登录 (换绑/续期) 时附带 token;
          - code 来自 wx.login (ce()), wechatFingerprint 来自 finger.g() ($())。

        成功且返回 token/userId 时写入 self.auth; 服务端业务错误
        (如 101144 user_has_risk) 以 LoginError 抛出, 携带原始响应。
        """
        path = PATHS["newwxsilentlogin"] if net_check else PATHS["wxslientlogin"]
        data = {"wechatFingerprint": wechat_fingerprint, "code": code}
        if token:
            data["token"] = token
        resp = self._g_form(path, data)
        openid = resp.get("openId") or resp.get("openid")
        unionid = resp.get("unionId") or resp.get("unionid")
        data = resp.get("data") or {}
        merged = {"openId": openid, "unionId": unionid,
                  "openIdCipher": resp.get("openIdCipher"), **(data if isinstance(data, dict) else {})}
        if resp.get("unionIdCipher"):
            merged["unionIdCipher"] = resp["unionIdCipher"]
        if not openid and not unionid:
            raise LoginError("weappsilentlogin 失败: %s" % json.dumps(resp, ensure_ascii=False), resp)
        if resp.get("error") and not merged.get("token"):
            # 典型: {"code":101144,"type":"user_has_risk"} 行为风控
            raise LoginError("weappsilentlogin 业务错误: %s" % json.dumps(resp, ensure_ascii=False), resp)
        if merged.get("token") and merged.get("userId"):
            self.auth = {"userId": merged["userId"], "token": merged["token"]}
            if openid:
                self.wx_ids = {k: v for k, v in merged.items()
                               if k in ("openId", "openIdCipher", "unionId", "unionIdCipher")}
        return merged

    def new_wx_silent_login(self, code: str, wechat_fingerprint: str,
                            token: str | None = None) -> dict:
        """newwxsilentlogin 分支 (netCheck=True), 走 weappsilentloginembedded。"""
        return self.silent_login(code, wechat_fingerprint, token=token, net_check=True)

    def get_mt_info(self, token: str | None = None) -> dict:
        """ge(): GET getmtuserinfo?token=&fields=...。"""
        tok = token or self.auth.get("token")
        q = "token=%s&fields=%s" % (quote(str(tok), safe=""), quote(",".join(GET_MT_INFO_FIELDS), safe=""))
        resp = self._g_form(PATHS["getmtuserinfo"] + "?" + q, {}, method="GET")
        user = (resp or {}).get("user") or {}
        if user.get("id"):
            self.mt_info = {k: user.get(k) for k in
                            ("id", "username", "avatarurl", "mobile", "city", "cityid", "nickname")}
            return self.mt_info
        raise LoginError("getmtuserinfo 失败: %s" % json.dumps(resp, ensure_ascii=False), resp)

    def build_wechat_fingerprint(self, **kw) -> str:
        """纯 Python 生成 wechatFingerprint (finger.g())。"""
        from . import _finger
        ts = kw.pop("ts", None)
        import time
        if ts is None:
            ts = int(time.time() * 1000)
        local_id = kw.pop("local_id", None) or _finger.build_local_id(ts, {})
        return _finger.build_wechat_fingerprint(
            kw.pop("system", {}), appid=self.cfg.app_id,
            dfpid=kw.pop("dfpid", "") or local_id, local_id=local_id, ts=ts, **kw)

    def login(self, code: str, wechat_fingerprint: str, fetch_mt_info: bool = True,
              skip_wx_ids: bool = False) -> dict:
        """完整静默登录: getWxIds -> silentLogin -> (可选) getMtInfo。

        skip_wx_ids=True 时跳过 getWxIds (真机流程中 silentLogin 前不单独调
        getweappuserinfo, 直接拿 wx.login code 换 token)。
        """
        if not skip_wx_ids:
            self.get_wx_ids(code)
        result = self.silent_login(code, wechat_fingerprint)
        if fetch_mt_info and self.auth.get("token"):
            try:
                result["mtInfo"] = self.get_mt_info()
            except Exception as e:  # noqa: BLE001
                result["mtInfoError"] = str(e)
        return result
