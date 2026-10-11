# -*- coding: utf-8 -*-
"""美团外卖 业务接口示例 (纯协议, 离线只打印签名结果)。

运行:
    /root/Knight/.venv/bin/python examples/business_api.py
"""
import json
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "src"))

from meituan_waimai import Signer, UserState, WaimaiClient


def main():
    user = UserState(
        token="<user token>",
        user_id="<user id>",
        uuid="1791000000000KKKKKKK60e593ce0a815b08d658526270cd17d63728",
        longitude=116.397128,
        latitude=39.916527,
        model="iPhone14,2",
        wx_version="8.0.49",
        platform="ios",
        env="online",
    )
    client = WaimaiClient(signer=Signer(), user=user)

    # 离线演示: 构造一个业务请求并打印最终签名头 (不实际发送)
    body = client._build_body({"poi_id_str": "123456", "pageNum": 1})
    print("公共参数+业务参数:")
    print(json.dumps(body, ensure_ascii=False, indent=2)[:600], "...")

    signed = client.signer.sign(
        "POST",
        client.base_url + "/weapp/v2/poi/homepage",
        body,
        {"R2X-Referer": "https://servicewechat.com/wx2c348cf579062e56/0/page-frame.html",
         "content-type": "application/x-www-form-urlencoded"},
    )
    sig = json.loads(signed["header"]["mtgsig"])
    print("mtgsig 字段:", sorted(sig.keys()))
    print("a1=%s x0=%s a7=%s" % (sig["a1"], sig["x0"], sig["a7"]))
    print("a3 (dfpId) =", sig["a3"])

    # 实际调用 (需要有效登录态):
    # resp = client.request("homeHead", {"poi_id_str": "123456"})
    # print(resp)


if __name__ == "__main__":
    main()
