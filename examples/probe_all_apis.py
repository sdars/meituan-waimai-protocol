# -*- coding: utf-8 -*-
"""全量业务接口探测 (纯协议, 88 个前端路径)。

逐个调用 api/urls.js 导出的全部业务接口, 记录 http/code/msg。
默认走 st 域 (wx.waimai.st.meituan.com), 该域边缘 WAF 放行全部路径;
prod 域 (wx.waimai.meituan.com) 对约 31/88 个路径 (poi/search/order/coupon/
商品详情等) 返回 403 (openresty, X-Forbid-Reason: .), 为出口 IP 级拦截。

运行:
  python examples/probe_all_apis.py [--prod] [<token>] [<user_id>]

环境变量:
  WAIMAI_TOKEN / WAIMAI_USER_ID / WAIMAI_UUID / WAIMAI_OPEN_ID
"""
import json
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "src"))

from meituan_waimai import Signer, WaimaiClient, UserState  # noqa: E402
from meituan_waimai.api import API_URL, APP_ID  # noqa: E402


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    use_prod = "--prod" in sys.argv
    env = "online" if use_prod else "st"
    token = args[0] if len(args) > 0 else os.environ.get("WAIMAI_TOKEN")
    user_id = args[1] if len(args) > 1 else os.environ.get("WAIMAI_USER_ID")
    uuid = os.environ.get("WAIMAI_UUID", "f3457391d7494fd4b52c6f7d09e6575f")
    open_id = os.environ.get("WAIMAI_OPEN_ID")

    user = UserState(token=token, user_id=user_id, uuid=uuid,
                     longitude=116.3975, latitude=39.9087,
                     model="iPhone 13", wx_version="8.0.40", platform="iphone",
                     app_version="15.15.15", env=env,
                     open_id=open_id, csec_version_name="15.15.15")
    cli = WaimaiClient(signer=Signer(app_id=APP_ID), user=user)
    print("[*] base_url = %s" % cli.base_url)

    results = []
    for key, path in API_URL.items():
        try:
            r = cli.request(key, data={})
        except Exception as e:  # noqa: BLE001
            r = {"statusCode": "ERR", "text": str(e)[:100]}
        if not isinstance(r, dict):
            r = {"raw": str(r)[:100]}
        http = r.get("statusCode", 200)
        code = r.get("code")
        msg = r.get("msg")
        results.append({"key": key, "path": path, "http": http,
                        "code": code, "msg": msg})
        print("%-30s http=%-4s code=%-8s msg=%s"
              % (key, http, code, str(msg)[:40] if msg is not None else ""))

    out = "/tmp/waimai_probe_all.json"
    with open(out, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=1)
    n403 = sum(1 for r in results if r["http"] == 403)
    print("\n[*] 共 %d 接口, 403 = %d, 结果 -> %s" % (len(results), n403, out))


if __name__ == "__main__":
    main()
