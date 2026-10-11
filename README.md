# 美团外卖小程序 纯协议逆向 (wx2c348cf579062e56)

美团外卖微信小程序 (AppID `wx2c348cf579062e56`, appName `waimai`) 的
**mtgsig 签名 + 设备指纹 + 登录链路 + 全量业务接口** 纯 Python 复现。

- **零 adb / Frida / 真机 / RPC**: 所有签名在 Python 侧静态生成。
- 算法来源: 小程序内置 `utils/jsguard.js` (jsguard **2.5.0**) + `copy/account/account-core`
  + `@mtfe/weapp-safety-request3.0.1`。
- 黄金向量: 在 Node `vm` 中加载真实 `jsguard.js`, 固定 `Date.now`/`Math.random`,
  对真实请求签名得到快照, 与纯 Python 逐字节比对 (见 `tests/`)。

## 目录

```
src/meituan_waimai/
  _vm.py         jsguard 自定义 VM (cb / rc4_prga / x_b64)
  _mtgsig.py     mtgsig 请求签名 (ee / signWithSiua)
  _finger.py     设备指纹 siua / dfpId / localId / wechatFingerprint
  signer.py      请求规范化 (build_w) + 签名器 Signer
  login.py       登录链路 (getWxIds / silentLogin / getMtInfo)
  api.py         业务接口客户端 (wx.waimai.meituan.com/weapp/*)
  yyb_code.py    YYB(应用宝) 会话 -> 原生 wx.login code 铸码桥接 (软依赖)
tests/
  test_protocol.py   黄金向量逐字节比对 + 登录分支/降级 (34 项)
  fixtures/golden.json
docs/
  算法原理.md / 接口文档.md / 登录链路与风控.md
examples/
  login_flow.py / login_via_yyb.py / probe_login.py / business_api.py
  diagnose_account.py   账号诊断 (YYB 会话 rt/at/scope + 美团 appid 铸码能力)
```

## 快速开始

```bash
# 运行协议验证
/root/Knight/.venv/bin/python tests/test_protocol.py

# 依赖
/root/Knight/.venv/bin/pip install -r requirements.txt
```

## 账号诊断

`examples/diagnose_account.py` 对「指定 / 批量 / 全部」YYB 账号做体检, 在 pcyyb
的 rt/at 有效性 + 有效期 + scope + 授权能力之上, 追加本仓库最关键的判据:
**该账号能否为外卖 appid `wx2c348cf579062e56` 铸出原生 wx.login code**。

```bash
cd /root/YYB/meituan-waimai
# 单个账号 (open_id 或 json 路径)
/root/Knight/.venv/bin/python examples/diagnose_account.py -a <open_id_or_json>
# 一批 / 全部
/root/Knight/.venv/bin/python examples/diagnose_account.py -a A -a B
/root/Knight/.venv/bin/python examples/diagnose_account.py --all
# 机器可读 / 只跑 pcyyb 侧
/root/Knight/.venv/bin/python examples/diagnose_account.py --all --json
/root/Knight/.venv/bin/python examples/diagnose_account.py --all --no-cast
```

输出: `open_id  scope_runtime=yes/no  buffer=OK/失效码  cast[<appid>]=OK <code>...`

> pcyyb 侧完整诊断能力见 `pcyyb/protocol/docs/账号诊断.md`。

## 说明

- `code` (wx.login 返回值) 是唯一需要真实微信环境的外部输入。
- `wechatFingerprint` 由 `finger.g()` 纯 Python 生成, 无需设备。
- **登录闭环实测**: 用 YYB 会话可铸出原生 `wx.login` code, `getWxIds` 稳定通过;
  `silentLogin` 受美团行为风控 (`101144 user_has_risk`) 限制。详见
  [`docs/登录链路与风控.md`](docs/登录链路与风控.md)。
- 逆向分析原始产物见 `/root/YYB/work/逆向分析/2026-10-11/meituan_waimai/`。
- 解包后的代码包见本仓库 `美团外卖_解包/` (含 `general/` 原始 wxapkg 与 `unpacked/` 解包结果)。

## 与美团返返 (fanfan) 的差异

| 项 | 外卖 (waimai) | 返返 (fanfan) |
|---|---|---|
| jsguard 版本 | 2.5.0 | 1.6.5 |
| siua 前缀 | `w1.6` | `w1.2` |
| DFP.fpv | `2.5.0` | `1.6.5` |
| DFP.ext | `[0,0,null,0,4]` | `[0,0,null,0]` |
| env_flag | `123` | `6` |
| appName | `waimai` | `foodtaster` |
| 业务域 | `wx.waimai.meituan.com` | `offsiteact.meituan.com` |
