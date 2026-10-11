# -*- coding: utf-8 -*-
"""mtgsig 签名 (jsguard ee / signWithSiua) 的纯 Python 复现。

来源: npm/@mtfe/wx-jsguard/dist/jsguard.js 的 ee(n, t) 函数。
签名写入请求 header.mtgsig (JSON 字符串), 用于 offsiteact/open/passport 等接口。

字段:
  a1 = "1.2"                 协议版本
  a2 = i                     毫秒时间戳 (Date.now + serverTimeDiff)
  a3 = dfpId                 设备指纹 ID (finger.d())
  a4 = D                     48 hex 摘要
  a5 = x                     主密文 (x 自定义 base64)
  a6 = y                     siua 指纹串
  a7 = appId
  x0 = 3
  d1 = md5 混淆摘要
"""
from __future__ import annotations

import hashlib

from . import _vm

MASK = 0xFFFFFFFF


def _u32(x: int) -> int:
    return x & MASK


# --- encodeURIComponent -> 字节 -------------------------------------------------
def W(e: str) -> list[int]:
    """等价 JS encodeURIComponent 的字节序列。"""
    from urllib.parse import quote
    s = quote(e, safe="~()*!.'-")
    out = []
    i = 0
    while i < len(s):
        c = s[i]
        if c == "%":
            out.append(int(s[i + 1:i + 3], 16))
            i += 3
        else:
            out.append(ord(c))
            i += 1
    return out


def K(e: int) -> list[int]:
    """32 位整数 -> 4 字节大端。"""
    e = _u32(e)
    return [(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, e & 255]


def H(e: str) -> list[int]:
    """hex 字符串 -> 字节列表。"""
    return [int(e[n:n + 2], 16) for n in range(0, len(e), 2)]


def X(e: list[int]) -> list[int]:
    return e[:16200] if len(e) > 16200 else e


def md5_hex(b) -> str:
    return hashlib.md5(bytes(b)).hexdigest()


def md5_array(b) -> list[int]:
    """jsguard md5Array: 4 个小端 int32。"""
    d = hashlib.md5(bytes(b)).digest()
    return [int.from_bytes(d[0:4], "little"), int.from_bytes(d[4:8], "little"),
            int.from_bytes(d[8:12], "little"), int.from_bytes(d[12:16], "little")]


_HEX = "0123456789abcdef"


def md5ToHex(arr) -> str:
    """jsguard md5ToHex: 每 32 位字按字节小端拆 4 字节, 每字节低半字节在前。"""
    out = []
    for a in arr:
        a = _u32(a)
        for f in range(4):
            out.append(_HEX[(a >> (8 * f + 4)) & 15] + _HEX[(a >> (8 * f)) & 15])
    return "".join(out)


# --- CRC32 (jsguard Zc) ---------------------------------------------------------
# 注意: 源码多项式是十进制 3988292384 (=0xEDB88320), 返回异或的常量是十进制 306674911。
def _crc_table() -> list[int]:
    t = [0] * 256
    for i in range(256):
        c = i
        for _ in range(8):
            c = (c >> 1) ^ 3988292384 if (c & 1) else (c >> 1)
        t[i] = _u32(c)
    return t


_CRCT = _crc_table()


def Zc(e) -> int:
    t = _u32(-1)
    for b in e:
        t = _CRCT[(t & 255) ^ b] ^ (t >> 8)
    return _u32(306674911 ^ _u32(t))


# --- murmur2 (jsguard ne) -------------------------------------------------------
def ne(e, c: int) -> int:
    n = len(e)
    c = _u32(c ^ n)
    t = 0
    while n >= 4:
        f = (e[t] & 255) | ((e[t + 1] & 255) << 8) | ((e[t + 2] & 255) << 16) | ((e[t + 3] & 255) << 24)
        f = _u32(f)
        f = _u32(1540483477 * (f & 65535) + ((_u32(1540483477 * (f >> 16)) & 65535) << 16))
        c = _u32(1540483477 * (c & 65535) + ((_u32(1540483477 * (c >> 16)) & 65535) << 16))
        c = _u32(c ^ _u32(1540483477 * ((f ^ (f >> 24)) & 65535) + ((_u32(1540483477 * (((f ^ (f >> 24)) & MASK) >> 16)) & 65535) << 16)))
        n -= 4
        t += 4
    if n == 3:
        c ^= (e[t + 2] & 255) << 16
    if n >= 2:
        c ^= (e[t + 1] & 255) << 8
    if n >= 1:
        c = _u32(c ^ (e[t] & 255))
        c = _u32(1540483477 * (c & 65535) + ((_u32(1540483477 * (c >> 16)) & 65535) << 16))
    c = _u32(c ^ (c >> 13))
    c = _u32(1540483477 * (c & 65535) + ((_u32(1540483477 * (c >> 16)) & 65535) << 16))
    c = _u32(c ^ (c >> 15))
    return _u32(c ^ 1540483477)


def b2h(bs) -> str:
    return "".join("%02x" % b for b in bs)


def sign(y: str, i: int, f: int, w, pc_json: str, x0: int = 3, a1: str = "1.2",
         a3: str = "", a7: str = "") -> dict:
    """计算 mtgsig。

    y   = siua 串 (finger.i())
    i   = 毫秒时间戳
    f   = 环境位 (jsguard 自检得到的 zc.env; 微信真机/小程序取运行值)
    w   = 待签名数据字节 (方法 + 路径 + 排序 query + body)
    pc_json = Pc 对象 JSON (b7=秒, b1=账号信息, b8=请求序号, b2=页面路由)
    a3  = dfpId (finger.d()), a7 = appId
    """
    l = K(_u32(i))
    g = W(y) + l
    v = md5_hex(g)
    m = H(v[:15])
    m[7] = (f ^ Zc(l)) & 255
    m += l
    m += K(_u32(Zc(m)))
    x = _vm.x_b64(m + _vm.cb(m, pc_json))
    S = ne(w, i)
    A = ne(W(x), i)
    d = _u32(i)
    I = H(md5ToHex([S, A, _u32(S ^ d), _u32(S ^ A ^ d)]))
    D = b2h(K(S) + K(A) + I)
    o = A & MASK
    T = a1 + str(i) + a3 + D + str(o) + v + a7
    j = md5_array(W(T))
    N = _u32((d << x0) | (d << (32 - x0)))
    j[0] = _u32(j[0] ^ N)
    j[1] = _u32(j[1] ^ o)
    j[2] = _u32(j[2] ^ o ^ N)
    j[3] = _u32(j[3] ^ j[0])
    d1 = md5ToHex(j)
    return {"a1": a1, "a2": i, "a3": a3, "a4": D, "a5": x, "a6": y, "a7": a7, "x0": x0, "d1": d1}
