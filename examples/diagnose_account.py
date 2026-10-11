# -*- coding: utf-8 -*-
"""美团外卖 账号诊断 (YYB 会话 -> 美团登录链路).

在 pcyyb 账号体检 (rt/at 有效性 + 有效期 + scope + 授权能力) 的基础上,
追加美团侧最关键的判据: 该账号能否为目标 appid 铸出原生 wx.login code。

用法 (在仓库根目录运行):

    # 单个账号 (pcyyb 账号池内的 open_id, 或任意 json 路径)
    /root/Knight/.venv/bin/python examples/diagnose_account.py --account <open_id_or_json>

    # 一批账号
    /root/Knight/.venv/bin/python examples/diagnose_account.py -a A -a B

    # 全部账号 (pcyyb 账号池)
    /root/Knight/.venv/bin/python examples/diagnose_account.py --all

    # 机器可读
    /root/Knight/.venv/bin/python examples/diagnose_account.py --all --json

    # 只跑 pcyyb 侧体检, 不铸码
    /root/Knight/.venv/bin/python examples/diagnose_account.py --all --no-cast

依赖 (软):
  - /root/YYB/pcyyb/protocol   (SessionStore + account_diagnose)
  - /root/YYB/qqfarm/src       (getNativeWxLoginCode)
"""
from __future__ import annotations

import argparse
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, "..", "src"))

PCYYB_DIR = os.environ.get("PCYYB_PROTOCOL_DIR", "/root/YYB/pcyyb/protocol")
if PCYYB_DIR not in sys.path:
    sys.path.insert(0, PCYYB_DIR)

from account_diagnose import diagnose_one, resolve_stores  # noqa: E402
from meituan_waimai import (  # noqa: E402
    get_wx_login_code, try_get_wx_login_code)

APP_ID = "wx2c348cf579062e56"


def _cast_probe(store, deep: bool = True):
    """用该账号为 APP_ID 铸一个原生 wx.login code。"""
    if not store.path:
        return {"ok": False, "err": "无本地文件, 跳过铸码"}
    try:
        code = get_wx_login_code(APP_ID, account_path=store.path,
                                 refresh=deep, store=store)
        return {"ok": bool(code), "code_prefix": (code or "")[:16],
                "code_len": len(code or "")}
    except Exception as e:  # noqa: BLE001
        err = str(e)
        kind = None
        if "40188" in err or "invalid scope" in err:
            kind = "invalid_scope"
        elif "40001" in err or "not latest" in err:
            kind = "invalid_credential"
        return {"ok": False, "err": err[:200], "kind": kind}


def main():
    ap = argparse.ArgumentParser(
        description="美团外卖 账号诊断: pcyyb 体检 + 美团 appid 铸码能力")
    ap.add_argument("--account", "-a", action="append", default=[],
                    help="账号 open_id 或 json 路径 (可重复; 不填且无 --all 则默认全部)")
    ap.add_argument("--all", action="store_true", help="诊断账号池内全部账号")
    ap.add_argument("--pool", default=os.path.join(PCYYB_DIR, "accounts"),
                    help="账号池目录 (默认 pcyyb/protocol/accounts)")
    ap.add_argument("--no-deep", action="store_true", help="跳过 pcyyb check_login/refresh")
    ap.add_argument("--no-cast", action="store_true", help="跳过美团 appid 铸码探测")
    ap.add_argument("--save", action="store_true", help="回写轮换后的 token")
    ap.add_argument("--json", action="store_true", help="输出 JSON")
    args = ap.parse_args()

    stores = resolve_stores(args)
    if not stores:
        print("[!] 没有匹配到任何账号 (pool=%s)" % args.pool, file=sys.stderr)
        return 1

    results = []
    for s in stores:
        if not args.json:
            print("... 诊断 %s" % s.open_id, file=sys.stderr)
        r = diagnose_one(s, deep=not args.no_deep, save=args.save)
        r["meituan"] = {"app_id": APP_ID}
        if not args.no_cast:
            r["meituan"]["cast_code"] = _cast_probe(s, deep=not args.no_deep)
        results.append(r)

    if args.json:
        print(json.dumps(results, ensure_ascii=False, indent=2))
        return 0

    for r in results:
        mt = r.get("meituan", {})
        cast = mt.get("cast_code", {})
        if cast.get("ok"):
            cast_s = "OK %s... (len=%s)" % (cast.get("code_prefix"), cast.get("code_len"))
        elif cast:
            cast_s = "FAIL %s%s" % (cast.get("kind") or "",
                                    (" " + cast.get("err", ""))[:80])
        else:
            cast_s = "(skipped)"
        buf = r.get("authorize_buffer", {})
        print("%-28s scope_runtime=%-3s buffer=%-5s cast[%s]=%s"
              % (r["open_id"][:28],
                 "yes" if r.get("scope", {}).get("has_snsapi_runtime_pcsdk") else "no",
                 "OK" if buf.get("ok") else (buf.get("kind") or "FAIL"),
                 APP_ID, cast_s))
    return 0


if __name__ == "__main__":
    sys.exit(main())
