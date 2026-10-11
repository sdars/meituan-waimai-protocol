# -*- coding: utf-8 -*-
"""美团外卖 登录风控对照探测脚本 (纯协议)。

复现 docs/登录链路与风控.md 第 3 节的实测:
  - 用 YYB 铸原生 code, 打印每个请求的真实 HTTP 状态 + 响应体;
  - 对照不同 wechatFingerprint (短占位 / 随机 base64 / 真生成器) 的风控反应。

注意: 会真实打生产接口, 且可能给账号打上风控标记, 请低频使用。

运行:
    /root/Knight/.venv/bin/python examples/probe_login.py
"""
import base64
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, "..", "src"))

from meituan_waimai import LoginClient, LoginConfig, Signer, get_wx_login_code
from meituan_waimai.login import PATHS, _z
from urllib.parse import quote

APP_ID = "wx2c348cf579062e56"


def _cfg():
    return LoginConfig(
        app_name="waimai", app_id=APP_ID,
        risk_app=4, risk_platform=13, risk_partner=4,
        token_id="3agGXN9HaNKUsu64l_alrw", joinkey="100432_1577962114",
        sdk_version="6.18.2", version_name="15.15.15",
        platform="windows", model="PC", wx_version="3.9.12", env="prod",
    )


def post(client, path, data):
    """手动发一个已签名请求, 返回 (status_code, text)。"""
    url = _z("https://" + client.cfg.domain + path, client.cfg)
    body = dict(data)
    body["device_type"] = client.cfg.model
    body["device_os"] = "微信小程序"
    signed = client.signer.sign("POST", url, body,
                                {"content-type": "application/x-www-form-urlencoded"})
    payload = "&".join("%s=%s" % (quote(str(k), safe=""), quote(str(v), safe=""))
                       for k, v in signed["data"].items())
    r = client.http.request("POST", signed["url"], headers=signed["header"], data=payload)
    return r.status_code, r.text


def main():
    cfg = _cfg()
    client = LoginClient(cfg=cfg, signer=Signer(app_id=APP_ID))

    # --- 1) getWxIds ---
    code = get_wx_login_code(APP_ID)
    st, body = post(client, PATHS["getwxinfo"], {"code": code, "appName": cfg.app_name})
    print("[getwxinfo] HTTP %s openid? %s" % (st, "openidCipher" in body))

    # --- 2) silentLogin 对照 (两个分支都测) ---
    real_fp = client.build_wechat_fingerprint()
    rand_fp = base64.b64encode(os.urandom(180)).decode()
    cases = [
        ("fake-short", "WX__ver1.2.0_TEST"),
        ("random-b64-240", rand_fp),
        ("real-generator", real_fp),
    ]
    # wxslientlogin (weappsilentlogin) 与 newwxsilentlogin (weappsilentloginembedded)
    branches = [
        ("weappsilentlogin", PATHS["wxslientlogin"]),
        ("weappsilentloginembedded", PATHS["newwxsilentlogin"]),
    ]
    for pathname, path in branches:
        for tag, fp in cases:
            code = get_wx_login_code(APP_ID)
            st, body = post(client, path,
                            {"wechatFingerprint": fp, "code": code})
            err = None
            tok = False
            try:
                j = json.loads(body)
                err = j.get("error")
                tok = bool((j.get("data") or {}).get("token"))
            except Exception:  # noqa: BLE001
                pass
            print("[%s|%s] fp_len=%d HTTP %s token=%s error=%s"
                  % (pathname, tag, len(fp), st, tok, err))


if __name__ == "__main__":
    main()
