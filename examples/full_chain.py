# -*- coding: utf-8 -*-
"""美团外卖 纯协议全链路闭合示例 (YYB 铸码登录 + 业务接口)。

一条命令跑通:
  [0] YYB 会话铸原生 wx.login code (每个接口各铸一次, code 单次有效)
  [1] getWxIds      -> openId / unionId
  [2] silentLogin   -> token / userId   (短指纹 WX__ver1.2.0_TEST 可过)
  [3] getMtInfo     -> 用户资料
  [4] 业务接口      -> 首页 / 账号 / 地址 / 优惠券 ...

运行:
  /root/Knight/.venv/bin/python examples/full_chain.py [--prod]

默认走 st 域 (wx.waimai.st.meituan.com), 该域边缘 WAF 放行全部路径;
prod 域 (wx.waimai.meituan.com) 对部分路径 (poi/search/order/coupon 等) 有额外
403 拦截 (出口 IP 级, 与签名无关)。详见 docs/接口文档.md。

前置: pcyyb 账号登录态需具备 snsapi_runtime_pcsdk scope。
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, "..", "src"))

from meituan_waimai import (LoginClient, LoginConfig, Signer, LoginError,
                            WaimaiClient, UserState, get_wx_login_code)

APP_ID = "wx2c348cf579062e56"
SHORT_FP = "WX__ver1.2.0_TEST"   # 短指纹: 纯 Python 全量指纹会被 openresty WAF 403


def main():
    use_prod = "--prod" in sys.argv
    env = "online" if use_prod else "st"

    cfg = LoginConfig(
        app_name="waimai", app_id=APP_ID,
        risk_app=4, risk_platform=13, risk_partner=4,
        token_id="3agGXN9HaNKUsu64l_alrw", joinkey="100432_1577962114",
        sdk_version="6.18.2", version_name="15.15.15",
        platform="windows", model="PC", wx_version="3.9.12", env="prod",
    )
    lc = LoginClient(cfg=cfg, signer=Signer(app_id=APP_ID))

    # [1] getWxIds
    code = get_wx_login_code(APP_ID)
    print("[1] getWxIds code =", code)
    try:
        wx_ids = lc.get_wx_ids(code)
    except LoginError as e:
        print("    getWxIds 失败:", e)
        return
    print("    openId=%s unionId=%s" % (wx_ids.get("openId"), wx_ids.get("unionId")))

    # [2] silentLogin (再铸一次 code)
    code2 = get_wx_login_code(APP_ID)
    try:
        res = lc.silent_login(code2, SHORT_FP)
    except LoginError as e:
        print("[2] silentLogin 失败: code=%s type=%s" % (e.code, e.type))
        return
    print("[2] token=%s userId=%s"
          % (str(res.get("token"))[:24] + "...", res.get("userId")))

    # [3] getMtInfo
    try:
        info = lc.get_mt_info()
        print("[3] mtInfo =", {k: info.get(k) for k in ("id", "username", "mobile", "nickname")})
    except LoginError as e:
        print("[3] getMtInfo 失败:", e)

    # [4] 业务接口
    user = UserState(
        token=lc.auth.get("token"),
        user_id=str(res.get("userId") or ""),
        uuid="f3457391d7494fd4b52c6f7d09e6575f",
        longitude=116.3975, latitude=39.9087,
        model="iPhone 13", wx_version="8.0.40", platform="iphone",
        app_version="15.15.15", env=env,
        open_id=wx_ids.get("openId"), open_id_cipher=wx_ids.get("openIdCipher"),
        csec_version_name="15.15.15",
    )
    cli = WaimaiClient(signer=Signer(app_id=APP_ID), user=user)
    print("[4] base_url =", cli.base_url)
    calls = ["getMyAccount", "homeHead", "allCategory", "getcityList",
             "addrGet", "getCouponsList", "getNewUserRedpackInfo", "bottomTabBar"]
    for name in calls:
        try:
            r = cli.request(name, data={})
        except Exception as e:  # noqa: BLE001
            r = {"error": str(e)[:80]}
        if not isinstance(r, dict):
            r = {"raw": str(r)[:80]}
        print("    %-22s http=%-4s code=%-7s msg=%s"
              % (name, r.get("statusCode", 200), r.get("code"), str(r.get("msg"))[:36]))


if __name__ == "__main__":
    main()
