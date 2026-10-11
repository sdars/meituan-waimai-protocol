# -*- coding: utf-8 -*-
"""美团外卖 完整登录示例 (YYB 铸码版, 纯协议)。

链路:
  1. 从 pcyyb 登录态铸出原生 wx.login code (每个接口各铸一次, code 单次有效)
  2. LoginClient.get_wx_ids(code)     -> openId/unionId
  3. LoginClient.silent_login(code,fp)-> token/userId   (可能被 101144 风控)
  4. LoginClient.get_mt_info()        -> 用户资料

依赖 pcyyb + qqfarm (见 src/meituan_waimai/yyb_code.py)。

运行:
    /root/Knight/.venv/bin/python examples/login_via_yyb.py
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, "..", "src"))

from meituan_waimai import (LoginClient, LoginConfig, Signer, LoginError,
                            get_wx_login_code)

APP_ID = "wx2c348cf579062e56"


def main():
    cfg = LoginConfig(
        app_name="waimai", app_id=APP_ID,
        risk_app=4, risk_platform=13, risk_partner=4,
        token_id="3agGXN9HaNKUsu64l_alrw", joinkey="100432_1577962114",
        sdk_version="6.18.2", version_name="15.15.15",
        platform="windows", model="PC", wx_version="3.9.12", env="prod",
    )
    client = LoginClient(cfg=cfg, signer=Signer(app_id=APP_ID))

    # 1) getWxIds: 铸一个新 code
    code = get_wx_login_code(APP_ID)
    print("[1] getWxIds code =", code)
    try:
        print("    ->", client.get_wx_ids(code))
    except LoginError as e:
        print("    getWxIds 失败:", e)
        return

    # 2) silentLogin: 再铸一个新 code + 短指纹
    #    短指纹 (WX__ver1.2.0_TEST) 可过 silentLogin 风控; 纯 Python 全量指纹
    #    (254B 生成器) 会被 openresty WAF 403。详见 docs/登录链路与风控.md。
    code = get_wx_login_code(APP_ID)
    fp = "WX__ver1.2.0_TEST"
    print("[2] silentLogin code =", code)
    print("    wechatFingerprint =", fp)
    try:
        result = client.silent_login(code, fp)
        print("    token?", bool(result.get("token")), "userId?", result.get("userId"))
    except LoginError as e:
        # 常见: 101144 user_has_risk (行为风控)
        print("    silentLogin 失败: code=%s type=%s" % (e.code, e.type))
        print("   ", str(e)[:200])
        return

    # 3) getMtInfo
    if client.auth.get("token"):
        try:
            print("[3] mtInfo =", client.get_mt_info())
        except LoginError as e:
            print("    getMtInfo 失败:", e)


if __name__ == "__main__":
    main()
