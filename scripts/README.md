# scripts/ — 登录风控探测原始脚本

这些是 2026-10-11 对生产环境实测时用的**原始探测脚本**（未整理，供复现参考）。
整理后的、可直接运行的版本见 `examples/`：

- `examples/login_via_yyb.py` — YYB 铸码 → 完整登录（对应 `probe_full_login.py`）
- `examples/probe_login.py`   — 指纹对照探测（对应 `probe_http_status.py` / `probe_order.py`）
- `examples/full_chain.py`     — 全链路闭合（铸码 → 登录 → 业务接口，默认 st 域）
- `examples/probe_all_apis.py`— 全量 88 接口双域探测（对应 `scripts/probe_*` 的业务侧扩展）

## 原始脚本

| 脚本 | 作用 |
|---|---|
| `probe_full_login.py` | getWxIds + silentLogin 全链路，打印结果 |
| `probe_http_status.py` | 打印每个请求的真实 HTTP 状态码 + 响应体 |
| `probe_order.py` | 验证「先 getWxIds 再 silentLogin」的顺序影响 |

## 运行前

脚本硬编码引用 `/root/YYB/pcyyb/protocol` 与 `/root/YYB/qqfarm/src`，
需存在可用 pcyyb 账号（`accounts/owNAX6txE4vcGLryGW-ptHb5JrcY.json`）。

> ⚠️ 会真实打生产接口，且可能给账号打上风控标记，请低频使用。
