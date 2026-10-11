# -*- coding: utf-8 -*-
"""美团外卖 登录链路示例 (纯协议)。

唯一外部输入是 wx.login 返回的 code。

    code = "<wx.login 返回的 code>"

运行:
    /root/Knight/.venv/bin/python examples/login_flow.py
"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "src"))

from meituan_waimai import LoginClient, LoginConfig, Signer


def main(code: str = "TESTCODE"):
    cfg = LoginConfig(
        app_name="waimai",
        app_id="wx2c348cf579062e56",
        risk_app=4, risk_platform=13, risk_partner=4,
        token_id="3agGXN9HaNKUsu64l_alrw",
        joinkey="100432_1577962114",
        sdk_version="6.18.2",
        version_name="15.15.15",
        platform="ios", model="iPhone14,2", wx_version="8.0.49",
        env="prod",
    )
    signer = Signer(app_id=cfg.app_id)
    client = LoginClient(cfg=cfg, signer=signer)

    # 1) 纯 Python 生成 wechatFingerprint (finger.g())
    fp = client.build_wechat_fingerprint()
    print("wechatFingerprint:", fp[:40], "...")

    # 2) 登录链路
    #    getWxIds(code) -> silentLogin(code, fp) -> getMtInfo()
    try:
        ids = client.get_wx_ids(code)
        print("getWxIds:", ids)
        result = client.silent_login(code, fp)
        print("silentLogin token:", result.get("token"))
        if client.auth.get("token"):
            print("getMtInfo:", client.get_mt_info())
    except Exception as e:  # noqa: BLE001
        print("登录失败 (离线/无效 code 属正常):", e)


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "TESTCODE")
