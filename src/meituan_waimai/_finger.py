# -*- coding: utf-8 -*-
"""jsguard 2.5.0 指纹 (siua / dfpId / localId / wechatFingerprint) 纯 Python 复现。

来源: 美团外卖小程序内置 jsguard 2.5.0 (utils/jsguard.js)。
  - finger.i()  -> siua 串 (mtgsig 的 a6), 前缀 'w1.6'
  - finger.d()  -> dfpId  (mtgsig 的 a3)
  - Sn()        -> localId 生成 (ts + randAZ7 + md5(json) + crc32 十进制前 4 位)
  - finger.g()  -> wechatFingerprint (weappsilentlogin 用, 前缀 'WX__ver1.2.0_CCCC_')
  - AES-128-CBC(key/iv 硬编码, 与 fanfan 1.6.5 完全一致)

与 fanfan 的差异:
  * SIUA_PREFIX = 'w1.6'  (fanfan 为 'w1.2')
  * FPV = '2.5.0'         (fanfan 为 '1.6.5')
  * DFP.system 字段更少 (43 项, 无 gyro/dp/StorageInfo 等), 见 SYSTEM_FIELDS
  * DFP.ext 默认 [0, 0, null, 0, 4]
"""
from __future__ import annotations

import gzip
import hashlib
import json
import random
import string
import zlib

from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

# --- 硬编码常量 (来自 M() 里的两段 hex, 首字节为异或 key) -------------------
# 与 fanfan 逐字节一致, 已用 waimai 黄金向量验证。
_KEY_HEX = "91EBA6DBE4E5A7C8E6E3A3C1F4A4DFF9E9"
_IV_HEX = "C5F5FDF5F2F5F3F5F0F5F1F5F6F5F7F5F4"


def _deobf_hex(s: str) -> bytes:
    key = int(s[0:2], 16)
    return bytes(int(s[i:i + 2], 16) ^ key for i in range(2, len(s), 2))


AES_KEY = _deobf_hex(_KEY_HEX)   # b'z7Jut6Ywr2Pe5Nhx'
AES_IV = _deobf_hex(_IV_HEX)    # b'0807060504030201'
SIUA_PREFIX = "w1.6"
FPV = "2.5.0"

# DFP 序列化时保留/排序的字段 (jsguard 里 yt.DFP)
DFP_FIELDS = ["app", "dfpid", "filetime", "fpv", "localid", "system",
              "timestamp", "ext", "sessionId"]

# system 子对象的字段顺序 (yt.system, 43 项)
SYSTEM_FIELDS = [
    "accelerometer", "albumAuthorized", "BatteryInfo", "batteryLevel", "Beacons",
    "benchmarkLevel", "bluetoothEnabled", "brand", "brightness", "cameraAuthorized",
    "compass", "deviceOrientation", "devicePixelRatio", "enableDebug", "errMsg",
    "fontSizeSetting", "language", "LaunchOptionsSync", "locationAuthorized",
    "locationEnabled", "locationReducedAccuracy", "microphoneAuthorized", "model",
    "networkType", "notificationAlertAuthorized", "notificationAuthorized",
    "notificationBadgeAuthorized", "notificationSoundAuthorized", "pixelRatio",
    "platform", "safeArea", "screenHeight", "screenTop", "screenWidth", "SDKVersion",
    "statusBarHeight", "system", "version", "wifiEnabled", "WifiInfo", "windowHeight",
    "windowWidth", "screenRecord", "isPrivacy", "hasSystemProxy", "captureRecord",
]


def _rand_az(n: int = 7, rng: random.Random | None = None) -> str:
    """Sn() 里 7 位随机大写字母 (A-Z)。"""
    r = rng or random
    return "".join(r.choice(string.ascii_uppercase) for _ in range(n))


def crc32_str(s: str) -> int:
    """wt.str(s) -> CRC-32 (无符号)。与 zlib.crc32 等价。"""
    return zlib.crc32(s.encode("utf-8")) & 0xFFFFFFFF


def build_local_id(ts: int, system: dict, rng: random.Random | None = None,
                   openid: str | None = None) -> str:
    """Sn(): localId = ts + randAZ7 + md5(json(n)) + crc32十进制前4位。

    n 的键序固定为 model(可选, 取 system.model) -> system -> timestamp -> openid(可选);
    值为 undefined 的键在 JSON.stringify 时被丢弃, 此处用 None 跳过。
    """
    rand7 = _rand_az(7, rng)
    n = {}
    if system.get("model") is not None:
        n["model"] = system["model"]
    n["system"] = system
    if openid is not None:
        n["openid"] = openid
    md5hex = hashlib.md5(json.dumps(n, separators=(",", ":"), ensure_ascii=False).encode("utf-8")).hexdigest()
    base = "%d%s%s" % (ts, rand7, md5hex)
    return base + str(crc32_str(base))[:4]


def aes_gzip(plaintext: str, mtime: int | None = None) -> str:
    """M(): base64(AES-128-CBC(key, iv, PKCS7(gzip(utf8(plaintext)))))。

    crypto-js 默认 PKCS7 填充。gzip 头按 fflate 习惯 XFL=0/OS=3。
    """
    import base64
    if mtime is None:
        import time
        mtime = int(time.time())
    gz = bytearray(gzip.compress(plaintext.encode("utf-8"), mtime=mtime))
    gz[8] = 0   # XFL
    gz[9] = 3   # OS = unix
    gz = bytes(gz)
    pad = 16 - (len(gz) % 16)
    gz = gz + bytes([pad]) * pad
    enc = Cipher(algorithms.AES(AES_KEY), modes.CBC(AES_IV)).encryptor()
    ct = enc.update(gz) + enc.finalize()
    return base64.b64encode(ct).decode("ascii")


def build_siua(dfp_array: list, mtime: int | None = None) -> str:
    """finger.i(): 'w1.6' + base64(AES-CBC(gzip(JSON(DFP 数组))))。"""
    raw = json.dumps(dfp_array, separators=(",", ":"), ensure_ascii=False)
    return SIUA_PREFIX + aes_gzip(raw, mtime=mtime)


def decrypt_siua(y: str) -> str:
    """还原 siua 明文 (用于自检)。"""
    import base64
    ct = base64.b64decode(y[4:])
    pt = Cipher(algorithms.AES(AES_KEY), modes.CBC(AES_IV)).decryptor().update(ct)
    return gzip.decompress(pt[:-pt[-1]]).decode("utf-8")


def build_dfp_array(appid: str, local_id: str, ts: int, system_arr: list,
                    filetime: int | None = None, ext: list | None = None,
                    session_id: str | None = None, dfpid: str | None = None) -> list:
    """按 yt.DFP 键序拼 DFP 数组。system_arr 已按 yt.system 键序展开 (缺失为 null)。

    注意 jsguard 里 filetime=dfpId.timestamp(毫秒) 而 timestamp=Dc.timestamp(秒);
    ext 默认 [0, 0, null, 0, 4] (waimai 比 fanfan 多一位)。
    """
    return [
        appid,                                    # app
        dfpid if dfpid is not None else local_id,  # dfpid
        ts if filetime is None else filetime,      # filetime (毫秒)
        FPV,                                      # fpv
        local_id,                                 # localid
        system_arr,                               # system
        ts // 1000,                               # timestamp (秒)
        ext if ext is not None else [0, 0, None, 0, 4],  # ext
        session_id if session_id is not None else "6666666666664666a66666666666666609",  # sessionId
    ]


def empty_system_arr() -> list:
    """全 null 的 system 数组 (缺省设备信息场景)。"""
    return [None] * len(SYSTEM_FIELDS)


def build_wechat_fingerprint(system: dict, appid: str = "", dfpid: str = "",
                             local_id: str = "", ts: int | None = None,
                             session_id: str | None = None, ext: list | None = None,
                             openid: str = "", unionid: str = "", mchid: str = "",
                             mtime: int | None = None) -> str:
    """复现 finger.g() 生成的 wechatFingerprint (登录接口 weappsilentlogin 用)。

    与 siua 共用 AES-CBC(key,iv) + gzip, 仅前缀与序列化前字段变换不同。
    waimai 2.5.0 的变换: 删除 fsmode/e/ext/dp/sessionId,
    并删除 system 的 screenRecord/wifiList/isPrivacy/hasSystemProxy/signalStrength/
    localip/captureRecord/existWmpf/motion/click; 若 system.StorageInfo 存在则清空 keys。
    """
    import copy
    import time
    if ts is None:
        ts = int(time.time() * 1000)
    obj = {
        "system": copy.deepcopy(system),
        "fpv": FPV,
        "app": appid,
        "openid": openid,
        "unionid": unionid,
        "mchid": mchid,
        "sessionId": session_id if session_id is not None
        else "6666666666664666a66666666666666609",
        "dfpid": dfpid or local_id,
        "localid": local_id,
        "filetime": ts,
        "ext": ext if ext is not None else [0, 0, None, 0, 4],
    }
    t = copy.deepcopy(obj)
    for k in ("fsmode", "e", "ext", "dp", "sessionId"):
        t.pop(k, None)
    for k in ("gyro", "screenRecord", "wifiList", "isPrivacy", "hasSystemProxy",
              "signalStrength", "localip", "captureRecord", "existWmpf", "motion", "click"):
        t["system"].pop(k, None)
    si = t["system"].get("StorageInfo")
    if isinstance(si, str):
        try:
            d = json.loads(si)
            d["keys"] = []
            t["system"]["StorageInfo"] = json.dumps(d, separators=(",", ":"), ensure_ascii=False)
        except Exception:
            pass
    raw = json.dumps(t, separators=(",", ":"), ensure_ascii=False)
    return WECHAT_FP_PREFIX + aes_gzip(raw, mtime=mtime)


WECHAT_FP_PREFIX = "WX__ver1.2.0_CCCC_"
