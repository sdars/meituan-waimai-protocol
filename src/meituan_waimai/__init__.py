# -*- coding: utf-8 -*-
"""美团外卖小程序 纯协议实现 (零 adb / Frida / 真机 / RPC)。

AppID: wx2c348cf579062e56
模块:
  _vm        jsguard 自定义 VM (cb / rc4_prga / x_b64)
  _mtgsig    mtgsig 请求签名 (ee / signWithSiua)
  _finger    设备指纹 siua / dfpId / localId / wechatFingerprint
  signer     请求规范化 + 签名器 Signer
  login      登录链路 (getWxIds / silentLogin / getMtInfo)
  api        业务接口客户端 (wx.waimai.meituan.com/weapp/*)
"""
from .signer import Signer, build_w, build_pc
from .api import WaimaiClient, UserState, API_URL, DOMAINS
from .login import LoginClient, LoginConfig

__all__ = [
    "Signer", "build_w", "build_pc",
    "WaimaiClient", "UserState", "API_URL", "DOMAINS",
    "LoginClient", "LoginConfig",
]

__version__ = "1.0.0"
