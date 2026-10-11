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
tests/
  test_protocol.py   黄金向量逐字节比对 (27 项)
  fixtures/golden.json
docs/
  算法原理.md / 接口文档.md
examples/
  login_flow.py / business_api.py
```

## 快速开始

```bash
# 运行协议验证
/root/Knight/.venv/bin/python tests/test_protocol.py

# 依赖
/root/Knight/.venv/bin/pip install -r requirements.txt
```

## 说明

- `code` (wx.login 返回值) 是唯一需要真实微信环境的外部输入。
- `wechatFingerprint` 由 `finger.g()` 纯 Python 生成, 无需设备。
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
