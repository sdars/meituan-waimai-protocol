# -*- coding: utf-8 -*-
"""美团外卖小程序 纯协议闭合链路验证: 用 golden.json 黄金向量逐字节比对。

黄金向量来源: 在 Node vm 中加载小程序内置 utils/jsguard.js (2.5.0),
固定 Date.now=1791000000000 与 Math.random=0.42424242, 对
POST https://open.meituan.com/user/thirdinfo/getweappuserinfo
  body {code:TESTCODE, appName:waimai} 签名得到的 mtgsig 快照。

运行: /root/Knight/.venv/bin/python tests/test_protocol.py
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "..", "src")
FX = os.path.join(HERE, "fixtures")
sys.path.insert(0, os.path.abspath(SRC))

from meituan_waimai import _mtgsig, _vm, _finger, signer  # noqa: E402

PASS, FAIL = [], []


def load(name):
    with open(os.path.join(FX, name), encoding="utf-8") as f:
        return json.load(f)


def check(name, cond, detail=""):
    (PASS if cond else FAIL).append(name)
    print("[%s] %s%s" % ("OK" if cond else "FAIL", name,
                          (" -> " + str(detail)) if (detail and not cond) else ""))


def test_vm():
    """jsguard 自定义 VM: a5 = x_b64(m + cb(m, pc_json)); 验证编码器可逆。

    (cb 的正确性由 test_mtgsig 的 a5 逐字节比对覆盖。)
    """
    g = load("golden.json")
    gm = json.loads(g["mtgsig"])
    check("vm.a5 非空", isinstance(gm["a5"], str) and len(gm["a5"]) > 0)
    raw = _vm.x_b64_decode(gm["a5"])
    check("vm.x_b64 可逆", _vm.x_b64(raw) == gm["a5"])


def test_mtgsig():
    """核心: 用 golden 的 y/i/f/z/In 逐字节复现 mtgsig 的 a4/a5/d1。"""
    g = load("golden.json")
    gm = json.loads(g["mtgsig"])
    sig = _mtgsig.sign(g["y"], g["FIXED"], g["env_flag"], bytes(g["z"]),
                       json.dumps(g["In"], separators=(",", ":")),
                       x0=3, a1="1.2", a3=gm["a3"], a7=gm["a7"])
    check("mtgsig.a1", sig["a1"] == gm["a1"])
    check("mtgsig.a2", sig["a2"] == gm["a2"], sig["a2"])
    check("mtgsig.a3", sig["a3"] == gm["a3"])
    check("mtgsig.a4", sig["a4"] == gm["a4"], sig["a4"])
    check("mtgsig.a5", sig["a5"] == gm["a5"])
    check("mtgsig.a6", sig["a6"] == gm["a6"])
    check("mtgsig.a7", sig["a7"] == gm["a7"])
    check("mtgsig.x0", sig["x0"] == gm["x0"])
    check("mtgsig.d1", sig["d1"] == gm["d1"], sig["d1"])


def test_build_w():
    """请求规范化: POST 表单 body 拼成 'METHOD path k=v&k=v' 的字节串。"""
    g = load("golden.json")
    r = g["req"]
    w = signer.build_w(r["method"], r["url"], r["data"], r["header"])
    check("build_w", list(w) == list(g["z"]), list(w))


def test_signer_end_to_end():
    """Signer 全链路: 注入黄金 siua/dfp + 固定时间戳, 复现完整 mtgsig。"""
    g = load("golden.json")
    gm = json.loads(g["mtgsig"])
    s = signer.Signer(app_id="wx2c348cf579062e56")
    s.siua = gm["a6"]
    s.dfp_id = gm["a3"]
    s.env_flag = g["env_flag"]
    s.server_time_diff = 0
    r = g["req"]
    out = s.sign(r["method"], r["url"], r["data"], r["header"], now_ms=g["FIXED"])
    m = json.loads(out["header"]["mtgsig"])
    for k in ("a1", "a2", "a3", "a4", "a5", "a6", "a7", "x0", "d1"):
        check("signer.%s" % k, m[k] == gm[k], m[k])


def test_siua_roundtrip():
    """siua 解密: 'w1.6' 前缀 + base64(AES-CBC(gzip(json)))。"""
    g = load("golden.json")
    plain = _finger.decrypt_siua(g["y"])
    check("siua 前缀 w1.6", g["y"].startswith("w1.6"))
    check("siua 解密为 JSON", plain.startswith("[") or plain.startswith("{"), plain[:40])


def test_local_id():
    g = load("golden.json")
    check("dfp 前缀 == ts", g["dfp"].startswith(str(g["FIXED"])), g["dfp"])
    check("dfp 长度", len(g["dfp"]) == len(str(g["FIXED"])) + 7 + 32 + 4, len(g["dfp"]))


def test_wechat_fingerprint():
    fp = _finger.build_wechat_fingerprint({}, appid="wx2c348cf579062e56",
                                          dfpid="dfp123", local_id="dfp123",
                                          ts=1791000000000)
    check("wechatFingerprint 前缀", fp.startswith(_finger.WECHAT_FP_PREFIX))
    import base64
    import gzip
    from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
    ct = base64.b64decode(fp[len(_finger.WECHAT_FP_PREFIX):])
    pt = Cipher(algorithms.AES(_finger.AES_KEY), modes.CBC(_finger.AES_IV)).decryptor().update(ct)
    obj = json.loads(gzip.decompress(pt[:-pt[-1]]).decode())
    check("wechatFingerprint 字段变换",
          "ext" not in obj and "sessionId" not in obj and obj["localid"] == "dfp123")


if __name__ == "__main__":
    test_vm()
    test_mtgsig()
    test_build_w()
    test_signer_end_to_end()
    test_siua_roundtrip()
    test_local_id()
    test_wechat_fingerprint()
    print("\n==== %d PASS / %d FAIL ====" % (len(PASS), len(FAIL)))
    if FAIL:
        print("FAILED:", FAIL)
        sys.exit(1)
    print("ALL PASS ✅")
