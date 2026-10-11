# -*- coding: utf-8 -*-
"""Semantic re-implementation of jsguard VM x/cb/rc4 (derived from opcode trace)."""
import json

VC = "ZmserbBoHQtNP+wOcza/LpngG8yJq42KWYj0DSfdikx3VT16IlUAFM97hECvuRX5"


def rc4_prga(s, t):
    i = 0
    o = 0
    out = []
    b = 0
    u = len(t)
    while b < u:
        o = (o + 1) % 256
        i = (i + s[o]) % 256
        s[o], s[i] = s[i], s[o]
        out.append(ord(t[b]) ^ s[(s[o] + s[i]) % 256])
        b += 1
    return out


def cb(m, pc_json):
    s = list(range(256))
    o = 0
    for i in range(256):
        o = (o + s[i] + m[i % len(m)] + 31) % 256
        s[i], s[o] = s[o], s[i]
    return rc4_prga(s, pc_json)


def x_b64(e):
    out = []
    r = 0
    n = len(e)
    while r < n:
        rem = n - r
        if rem >= 3:
            c = (e[r] << 16) + (e[r + 1] << 8) + e[r + 2]
            out.append(VC[(c >> 18) & 63] + VC[(c >> 12) & 63] + VC[(c >> 6) & 63] + VC[c & 63])
            r += 3
        elif rem == 2:
            c = (e[r] << 8) + e[r + 1]
            out.append(VC[(c >> 10) & 63] + VC[(c >> 4) & 63] + VC[(c << 2) & 63] + "=")
            r += 2
        else:  # rem == 1
            c = e[r]
            out.append(VC[(c >> 2) & 63] + VC[(c << 4) & 63] + "==")
            r += 1
    return "".join(out)


_VC_IDX = {c: i for i, c in enumerate(VC)}


def x_b64_decode(s):
    """x_b64 的逆运算 (自检用)。"""
    s = s.rstrip("=")
    bits = 0
    nbits = 0
    out = bytearray()
    for ch in s:
        bits = (bits << 6) | _VC_IDX[ch]
        nbits += 6
        if nbits >= 8:
            nbits -= 8
            out.append((bits >> nbits) & 0xFF)
    return bytes(out)


if __name__ == "__main__":
    import os
    base = os.path.join(os.path.dirname(__file__), '..', '..', 'work', '逆向分析',
                        '2026-10-11', 'meituan_fanfan', 'analysis', 'node_harness')
    cap = json.load(open(os.path.join(base, 'vmcap.json')))
    m = cap['m']
    pc_json = json.dumps(cap['Pc'], separators=(',', ':'))
    out = cb(m, pc_json)
    e_in = m + out
    print('cb len', len(out), 'e_in match', e_in == cap['e_in'])
    a5 = x_b64(e_in)
    print('a5 match', a5 == json.loads(cap['mtgsig'])['a5'])
