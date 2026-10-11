#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
美团外卖微信小程序 (appid wx2c348cf579062e56) 纯协议签名链路实现。

还原自 utils/jsguard.js 的 mtgsig 生成算法 (函数 be) 与 siua 指纹 (finger.i/d)。
不依赖小程序运行时。

mtgsig 结构 (JSON 字符串):
  a1: "1.2"
  a2: 秒级时间戳 (含服务端时间差 std)
  a3: dfpId
  a4: hex(oe(x) + oe(_) + md5digest([x,_,x^o,x^_^o]))
  a5: customB64(y + rc4(y, utf8(In)))   <- 行为指纹密文
  a6: siua 指纹 (finger.i())
  a7: appid
  x0: 3
  d1: md5Array 变体结果 hex
"""

import base64
import gzip
import hashlib
import json
import time
import zlib

# ---------------------------------------------------------------------------
# 常量
# ---------------------------------------------------------------------------

APPID = "wx2c348cf579062e56"
APP_NAME = "waimai"
VERSION_NAME = "15.15.15"
SDK_VERSION = "6.18.2"

# 自定义 base64 表 (Wn)
B64_TABLE = "ZmserbBoHQtNP+wOcza/LpngG8yJq42KWYj0DSfdikx3VT16IlUAFM97hECvuRX5"
STD_TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
HEX_TABLE = "0123456789abcdef"

# F() 的 AES 密钥/IV (由 hex 表异或还原)
_F_KEY = b"z7Jut6Ywr2Pe5Nhx"
_F_IV = b"0807060504030201"

# mtgsig 版本
_KN = "1.2"
_XN = "application/x-www-form-urlencoded"  # 需要 body 的 content-type
_GN = "application/json"


# ---------------------------------------------------------------------------
# 基础编码工具
# ---------------------------------------------------------------------------

def ae(s):
    """JS 版 encodeURIComponent + charCodeAt -> 字节数组。
    等价于对字符串做 percent-encode 后再取字节；对 base64 字符集等价于 ASCII 字节。
    """
    if isinstance(s, (bytes, bytearray)):
        return bytes(s)
    # 模拟 JS: encodeURIComponent 不编码 A-Za-z0-9 - _ . ! ~ * ' ( )
    out = bytearray()
    for ch in s:
        o = ord(ch)
        if (0x41 <= o <= 0x5A or 0x61 <= o <= 0x7A or 0x30 <= o <= 0x39 or
                ch in "-_.!~*'()"):
            out.append(o)
        else:
            for b in ch.encode("utf-8"):
                out.append(b)
    return bytes(out)


def se(s):
    """签名里用于 query 值编码: encodeURIComponent + 若干 replace。"""
    import urllib.parse
    r = urllib.parse.quote(s, safe="-_.!~*'()")
    return (r.replace("!", "%21").replace("'", "%27").replace("(", "%28")
            .replace(")", "%29").replace("*", "%2A"))


def oe(v):
    """uint32 -> 大端 4 字节"""
    v &= 0xFFFFFFFF
    return bytes([(v >> 24) & 0xFF, (v >> 16) & 0xFF, (v >> 8) & 0xFF, v & 0xFF])


def ie(hexstr):
    """hex 字符串 -> 字节"""
    return bytes(int(hexstr[i:i + 2], 16) for i in range(0, len(hexstr) - 1, 2))


def fe(bytearr):
    """字节 -> 小写 hex 字符串"""
    return "".join(HEX_TABLE[(b >> 4) & 15] + HEX_TABLE[b & 15] for b in bytearr)


def re_(b):
    """截断到 16200 字节"""
    return b[:16200]


def md5(data):
    return hashlib.md5(data).digest()


def md5_hex(data):
    return hashlib.md5(data).hexdigest()


def md5_array_words(data):
    """返回 md5 的 4 个 uint32 小端字"""
    d = hashlib.md5(data).digest()
    return [int.from_bytes(d[i:i + 4], "little") for i in range(0, 16, 4)]


def words_to_hex(words):
    """4 个 uint32 字 (小端) -> hex"""
    return "".join(fe(oe(w)[::-1]) for w in words)


# ---------------------------------------------------------------------------
# MurmurHash2 (JS 函数 he)
# ---------------------------------------------------------------------------

def murmur2(data, seed):
    """MurmurHash2 32-bit, 与 jsguard he() 完全一致。返回 uint32。"""
    m = 0x5bd1e995
    length = len(data)
    h = (seed ^ length) & 0xFFFFFFFF
    i = 0
    while length >= 4:
        k = (data[i] | (data[i + 1] << 8) | (data[i + 2] << 16) | (data[i + 3] << 24)) & 0xFFFFFFFF
        k = (k * m) & 0xFFFFFFFF
        k ^= k >> 24
        k = (k * m) & 0xFFFFFFFF
        h = (h * m) & 0xFFFFFFFF
        h ^= k
        i += 4
        length -= 4
    if length == 3:
        h ^= data[i + 2] << 16
    if length == 2:
        h ^= data[i + 1] << 8
    if length == 1:
        h ^= data[i]
        h = (h * m) & 0xFFFFFFFF
    h ^= h >> 13
    h = (h * m) & 0xFFFFFFFF
    h ^= h >> 15
    return (h ^ m) & 0xFFFFFFFF


# ---------------------------------------------------------------------------
# CRC32 变种 (JS 函数 Qn)  —— 返回 uint32
# ---------------------------------------------------------------------------

_QN_TABLE = []
for _c in range(256):
    _t = _c
    for _ in range(8):
        _t = (_t >> 1) ^ (0xEDB88320 if (_t & 1) else 0)
    _QN_TABLE.append(_t & 0xFFFFFFFF)


def qn(data):
    """CRC32 变种: 与 jsguard Qn() 一致, 返回 uint32 (未取反)。"""
    if isinstance(data, str):
        data = data.encode("utf-8")
    c = 0xFFFFFFFF
    for b in data:
        c = _QN_TABLE[(c ^ b) & 0xFF] ^ (c >> 8)
        c &= 0xFFFFFFFF
    return (0x1247_0000 | 0) ^ c if False else (306674911 ^ c) & 0xFFFFFFFF


# ---------------------------------------------------------------------------
# 自定义 base64 编码 (Wn)
# ---------------------------------------------------------------------------

def b64_custom_encode(data):
    out = []
    n = len(data)
    i = 0
    while i < n:
        b0 = data[i]
        b1 = data[i + 1] if i + 1 < n else 0
        b2 = data[i + 2] if i + 2 < n else 0
        out.append(B64_TABLE[b0 >> 2])
        out.append(B64_TABLE[((b0 << 4) | (b1 >> 4)) & 63])
        if i + 1 < n:
            out.append(B64_TABLE[((b1 << 2) | (b2 >> 6)) & 63])
        else:
            out.append("=")
        if i + 2 < n:
            out.append(B64_TABLE[b2 & 63])
        else:
            out.append("=")
        i += 3
    return "".join(out)


def b64_custom_decode(s):
    idx = {c: i for i, c in enumerate(B64_TABLE)}
    s = s.rstrip("=")
    bits = 0
    nbits = 0
    out = bytearray()
    for ch in s:
        bits = (bits << 6) | idx[ch]
        nbits += 6
        if nbits >= 8:
            nbits -= 8
            out.append((bits >> nbits) & 0xFF)
    return bytes(out)


# ---------------------------------------------------------------------------
# F(): AES-128-CBC + base64 (siua 编码核心)
# ---------------------------------------------------------------------------

def _aes_cbc_encrypt(key, iv, data):
    from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
    pad = (-len(data)) % 16
    data = data + bytes([pad]) * pad  # 不会走到 (调用方已对齐), 保险
    c = Cipher(algorithms.AES(key), modes.CBC(iv)).encryptor()
    return c.update(data) + c.finalize()


def F(bits):
    """bits: bytes -> base64(AES-CBC)。"""
    ct = _aes_cbc_encrypt(_F_KEY, _F_IV, bits)
    return base64.b64encode(ct).decode()


# ---------------------------------------------------------------------------
# 设备指纹 Dn / siua (finger.i) / dfpId (finger.d)
# ---------------------------------------------------------------------------

DEFAULT_SYSTEM = {
    "platform": "ios",
    "model": "iPhone 14",
    "system": "iOS 17.0",
    "brand": "Apple",
    "version": "8.0.49",
    "SDKVersion": "3.0.0",
    "screenWidth": 390,
    "screenHeight": 844,
    "pixelRatio": 3,
    "windowWidth": 390,
    "windowHeight": 844,
    "statusBarHeight": 47,
    "language": "zh_CN",
    "fontSizeSetting": 16,
    "benchmarkLevel": 50,
    "memorySize": 2048,
    "errMsg": "getSystemInfoSync:ok",
    "networkType": "wifi",
    "signalStrength": 0,
    "hasSystemProxy": 0,
    "brightness": 80,
    "Beacons": "[]",
    "LaunchOptionsSync": json.dumps({"path": "pages/index/index", "scene": 1001, "query": {}, "referrerInfo": {}}, separators=(",", ":")),
    "BatteryInfo": json.dumps({"level": 80, "isCharging": False}, separators=(",", ":")),
    "screenRecord": [],
    "isPrivacy": 1,
    "captureRecord": "[]",
}

# DFP 序列化时被删除的字段
_DFP_DROP = ["fsmode", "e", "ext", "dp", "sessionId"]
_SYS_DROP = ["screenRecord", "wifiList", "isPrivacy", "hasSystemProxy",
             "signalStrength", "localip", "captureRecord", "existWmpf",
             "motion", "click"]


def build_dn(appid=APPID, openid="", unionid="", dfpid="", localid="",
             timestamp=None, system=None):
    ts = timestamp if timestamp is not None else int(time.time())
    sysd = dict(DEFAULT_SYSTEM)
    if system:
        sysd.update(system)
    return {
        "system": sysd,
        "fpv": "2.5.0",
        "timestamp": ts,
        "ext": [0, 0, 0, 0, 4],
        "app": appid,
        "openid": openid,
        "unionid": unionid,
        "sessionId": "",
        "dfpid": dfpid,
        "localid": localid,
        "filetime": ts * 1000,
    }


def _arrayify_dn(dn):
    """把 Dn 按 yt.DFP / yt.system 的 schema 转成数组 (保留键序)。"""
    import copy
    a = copy.deepcopy(dn)
    for k in _DFP_DROP:
        a.pop(k, None)
    sysd = a.get("system", {})
    for k in _SYS_DROP:
        sysd.pop(k, None)
    if "StorageInfo" in sysd:
        try:
            r = json.loads(sysd["StorageInfo"])
            r["keys"] = []
            sysd["StorageInfo"] = json.dumps(r, separators=(",", ":"))
        except Exception:
            pass
    # 按 yt schema 排序: 这里用固定顺序近似, 保持与真实一致
    dfp_order = ["app", "dfpid", "filetime", "fpv", "localid", "system", "timestamp", "ext", "sessionId"]
    out = []
    for k in dfp_order:
        if k == "system":
            out.append(_arrayify_system(sysd))
        else:
            out.append(a.get(k))
    return out


_SYS_ORDER = ["accelerometer", "albumAuthorized", "BatteryInfo", "batteryLevel", "Beacons",
              "benchmarkLevel", "bluetoothEnabled", "brand", "brightness", "cameraAuthorized",
              "compass", "deviceOrientation", "devicePixelRatio", "enableDebug", "errMsg",
              "fontSizeSetting", "language", "LaunchOptionsSync", "locationAuthorized",
              "locationEnabled", "locationReducedAccuracy", "microphoneAuthorized", "model",
              "networkType", "notificationAlertAuthorized", "notificationAuthorized",
              "notificationBadgeAuthorized", "notificationSoundAuthorized", "pixelRatio",
              "platform", "safeArea", "screenHeight", "screenTop", "screenWidth", "SDKVersion",
              "statusBarHeight", "system", "version", "wifiEnabled", "WifiInfo", "windowHeight",
              "windowWidth", "screenRecord", "isPrivacy", "hasSystemProxy", "captureRecord"]


def _arrayify_system(sysd):
    out = []
    for k in _SYS_ORDER:
        v = sysd.get(k)
        if k == "BatteryInfo" and isinstance(v, str):
            try:
                v = json.loads(v)
            except Exception:
                pass
        if k == "WifiInfo" and isinstance(v, str):
            try:
                v = json.loads(v)
            except Exception:
                pass
        out.append(v)
    return out


def finger_i(dn):
    """siua 指纹: 'w1.6' + F(gzip(arrayify(Dn)))。"""
    arr = _arrayify_dn(dn)
    payload = json.dumps(arr, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    gz = gzip.compress(payload, mtime=0)
    return "w1.6" + F(gz)


def _rand_upper(n):
    import random
    return "".join(random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZ") for _ in range(n))


def finger_d(system=None, openid="", now_ms=None):
    """dfpId 生成 (finger.d / Sn)。"""
    now = now_ms if now_ms is not None else int(time.time() * 1000)
    sysd = system or DEFAULT_SYSTEM
    n = {
        "model": sysd.get("model"),
        "system": sysd.get("system"),
        "timestamp": now,
        "openid": openid,
    }
    base = str(now) + _rand_upper(7) + md5_hex(json.dumps(n, ensure_ascii=False, separators=(",", ":")).encode("utf-8"))
    crc = fe(oe(qn(base.encode("utf-8"))))[:4]
    return base + crc


# ---------------------------------------------------------------------------
# RC4 变种 (KSA 带 +31)
# ---------------------------------------------------------------------------

def _rc4_variant(key, data):
    S = list(range(256))
    j = 0
    for i in range(256):
        j = (j + S[i] + key[i % len(key)] + 31) % 256
        S[i], S[j] = S[j], S[i]
    out = bytearray()
    i = j = 0
    for ch in data:
        i = (i + 1) % 256
        j = (j + S[i]) % 256
        S[i], S[j] = S[j], S[i]
        out.append(ch ^ S[(S[i] + S[j]) % 256])
    return bytes(out)


# ---------------------------------------------------------------------------
# mtgsig 主算法 (JS 函数 be)
# ---------------------------------------------------------------------------

def _env_flag():
    """环境检测值 c (JS 里 Tn.en 的位掩码)。小程序真机一般取 0。"""
    return 0


def build_z(method, url, data, content_type, m):
    """构造签名参与串 z 与 v。"""
    from urllib.parse import urlsplit, parse_qsl
    sp = urlsplit(url)
    path = sp.path or "/"
    q = parse_qsl(sp.query, keep_blank_values=True)
    method = (method or "GET").upper()

    needs_body = (method != "GET" and content_type and
                  content_type.lower().startswith(_XN))

    h = []
    l = ""
    if method == "GET":
        if isinstance(data, dict) and data:
            for k, v in data.items():
                h.append([se(k), se(str(v))])
            qd = dict(q)
            for k, v in q:
                if k not in data:
                    h.append([se(k), se(v)])
        else:
            for k, v in q:
                h.append([se(k), se(v)])
    else:
        for k, v in q:
            h.append([se(k), se(v)])
        if needs_body:
            if isinstance(data, str):
                l = data
            elif isinstance(data, dict):
                import urllib.parse
                l = "&".join(urllib.parse.quote(str(k)) + "=" + urllib.parse.quote(str(v))
                             for k, v in data.items())
    h.sort(key=lambda e: (e[0], e[1]))
    qs = "&".join(k + "=" + v for k, v in h)
    z = bytearray(ae(method + " " + path + " " + qs))
    if needs_body or method == "GET" or data is None:
        if needs_body and isinstance(data, str):
            z += re_(ae(data))
        elif method == "GET" or data is None:
            pass
    if not needs_body and method != "GET" and data is not None and not isinstance(data, str):
        z += re_(ae(json.dumps(data, separators=(",", ":"))))
    if l:
        z += re_(ae(l))
    return bytes(z)


def sign(url, method, data=None, header=None, appid=APPID, siua=None, dfpid=None,
         now_ms=None, in_extra=None, seq=1, page_route="pages/index/index",
         env_flag=None, o=0):
    """生成 mtgsig。返回 dict, 含 mtgsig 与中间值。

    - siua: 若为空则需外部提供 (来自 finger_i)。
    - dfpid: 若为空则外部提供。
    - now_ms: 毫秒时间戳 (冻结用于测试)。
    """
    if now_ms is None:
        now_ms = int(time.time() * 1000)
    s = now_ms  # 秒级 (Date.now() 在 js 里是毫秒, 但 a2 用秒) —— 见下
    # js: s = (new Date).valueOf() + std ; a2 = s。valueOf 是毫秒。
    s = now_ms
    if env_flag is None:
        env_flag = _env_flag()

    header = dict(header or {})
    content_type = header.get("content-type") or header.get("Content-Type") or ""

    # 行为指纹 In
    In = {
        "b7": s // 1000,
        "b1": {"miniProgram": {"appId": appid, "envVersion": "release", "version": VERSION_NAME}},
        "b8": seq,
        "b12": appid,
        "b2": page_route,
        "b9": "00102",
    }
    if in_extra:
        In.update(in_extra)

    z = build_z(method, url, data, content_type, siua or "")

    l = oe(o)                                   # 4 字节随机数
    m = siua or ""
    p = ae(m) + l
    v = md5_hex(p)                              # 32 hex
    y = bytearray(ie(v[:30]))                   # 前 15 字节
    y[7] = 0xFF & (env_flag ^ qn(l))
    y += l
    y += oe(qn(bytes(y)) & 0xFFFFFFFF)
    w = b64_custom_encode(bytes(y) + _rc4_variant(bytes(y), json.dumps(In, separators=(",", ":")).encode("utf-8")))

    x = murmur2(z, s)
    C = oe(x)
    _ = murmur2(ae(w), s)
    D = oe(_)
    A = md5(bytes(_le_words([x, _, x ^ o, x ^ _ ^ o])))
    S = fe(C + D + A)

    f = _ & 0xFFFFFFFF
    M = _KN + str(s) + (dfpid or "") + S + str(f) + v + appid
    B = md5_array_words(M.encode("utf-8"))
    j = ((o << 3) | (o << (32 - 3))) & 0xFFFFFFFF
    B[0] = (B[0] ^ j) & 0xFFFFFFFF
    B[1] = (B[1] ^ f) & 0xFFFFFFFF
    B[2] = (B[2] ^ f ^ j) & 0xFFFFFFFF
    B[3] = (B[3] ^ B[0]) & 0xFFFFFFFF
    d1 = words_to_hex(B)

    out = {"a1": _KN, "a2": s, "a3": dfpid, "a4": S, "a5": w,
           "a6": m, "a7": appid, "x0": 3, "d1": d1}
    return out


def _le_words(words):
    b = bytearray()
    for w in words:
        b += (w & 0xFFFFFFFF).to_bytes(4, "little")
    return bytes(b)


def mtgsig_json(sig):
    return json.dumps(sig, separators=(",", ":"))


if __name__ == "__main__":
    dn = build_dn(timestamp=1700000000, dfpid="1700000000000SSICYIG60e593ce0a815b08d658526270cd17d61491",
                  localid="1700000000000SSICYIG60e593ce0a815b08d658526270cd17d61491")
    print("siua:", finger_i(dn)[:60], "...")
