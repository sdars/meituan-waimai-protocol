# -*- coding: utf-8 -*-
"""美团外卖业务接口客户端 (wx.waimai.meituan.com/weapp/*)。

复现 api/index.js + api/wmRequest.js + weapp-safety-request:
  - 请求头: R2X-Referer + content-type=application/x-www-form-urlencoded (+ x-env/swimlane/uuid)
  - 请求体: 合并 reducers/selectors/common-param.js 的公共参数 (wm_ctype 等) + 业务参数
    - 值为 object 的字段先 JSON.stringify
    - 值为 falsy (除 "0") 的字段删除
  - @mtfe/weapp-safety-request addCommonParams: url 注入 yodaReady/csecappid/... ,
    header 注入 token/csecuuid/csecuserid/openId/openIdCipher/...
  - 默认 User-Agent (缺 UA 会被 openresty 边缘 WAF 403)
  - 所有请求在发出前经 jsguard.sign 注入 header.mtgsig
接口路径取自 api/urls.js; 域由 api/domain-dispatcher.js 决定。

双域差异: prod 域 (wx.waimai.meituan.com) 约 31/88 路径被出口 IP 级边缘 WAF 403;
st 域 (wx.waimai.st.meituan.com) 全放行。详见 docs/接口文档.md §5。
"""
from __future__ import annotations

import json
import time
from dataclasses import dataclass, field
from typing import Any
from urllib.parse import quote, urlencode

import requests

from .signer import Signer

# --- 域 (api/domain-dispatcher.js) -------------------------------------------
DOMAINS = {
    "waimai": {
        "online": "https://wx.waimai.meituan.com",
        "st": "https://wx.waimai.st.meituan.com",
        "qa": "https://wx.waimai.test.meituan.com",
    },
    "market": {
        "online": "https://marketing.waimai.meituan.com",
    },
    "address": {
        "online": "https://addressapi.meituan.com",
    },
    "medicine": {
        "online": "https://hcapi-wx.waimai.meituan.com",
    },
}

WM_NAME = "wxapp"
WM_VERSION = "10.39.01"          # constants.VERSION (小程序版本号)
APP_ID = "wx2c348cf579062e56"

# openresty 边缘 WAF: 缺 UA / python-requests 默认 UA 会被 403 (与 fanfan 同款)
DEFAULT_UA = ("Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 "
              "(KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.40(0x18002832) "
              "NetType/WIFI Language/zh_CN miniProgram")

# @mtfe/weapp-safety-request3.0.1 addCommonParams 注入位置 (constants/common.js PARAMS_POS)
PARAMS_POS_URL = ["yodaReady", "csecappid", "csecplatform", "csecversionname", "csecversion"]
PARAMS_POS_HEADER = ["token", "csecuuid", "csecdpid", "csecuserid",
                     "openId", "openIdCipher", "eptoken", "csecepuid"]
# safety-request defaultInitParams = {csecversion: VERSION(3.0.0)} + envParams{yodaReady, csecplatform}
SAFETY_DEFAULT_PARAMS = {"csecversion": "3.0.0", "yodaReady": "wx", "csecplatform": 3}

# --- api/urls.js (精选: 登录/用户/地址/首页/搜索/订单/支付/优惠券等) ----------
API_URL = {
    # 登录 / 账号
    "login": "/weapp/v1/account/login",
    "accountLogin": "/weapp/v1/account/login",
    "accountLoginV2": "/weapp/v2/account/login",
    "logout": "/weapp/v2/account/logout",
    "uuid": "/weapp/v1/user/uuid/register",
    "Muuid": "/weapp/v1/uuid",
    "uuidGray": "/weapp/v2/uuidgray",
    "verifyCodeSend": "/weapp/v1/account/sendverifycode",
    "verifyCodeCheck": "/weapp/v1/account/checkverifycode",
    "getMyAccount": "/weapp/v1/account/getmyaccount",
    "getMyAccountV2": "/weapp/v2/account/getmyaccount",
    "getMobile": "/wxapp/v1/account/mobile",
    "mobileLogin": "/weapp/v2/account/getwxmobilelogin",
    "bindMobileV2": "/weapp/v2/account/bindmobilelogin",
    "appleMobileV2": "/weapp/v2/account/applybindmobile",
    "ticketLoginV2": "/weapp/v2/account/ticketlogin",
    # 首页 / 推荐
    "homeHead": "/weapp/v1/v8/home/head",
    "rcmdboard": "/weapp/v9/home/rcmdboard",
    "indexRecommendBoardContainer": "/weapp/v10/home/rcmdboard",
    "indexModuleRefresh": "/weapp/v10/home/moduleRefresh",
    "bottomTabBar": "/weapp/v6/home/bottom/tabs",
    "bottomCoupon": "/weapp/v6/home/bottom/resources",
    "domesticService": "/weapp/v1/home/lifeservice",
    "allCategory": "/weapp/v6/home/all_category",
    "sidebar": "/weapp/api/v6/home/sidebar",
    # 门店 / 商品
    "poiFilter": "/weapp/v2/poi/homepage",
    "poiInfo": "/weapp/v1/poi/info",
    "poiFood": "/weapp/v1/poi/food",
    "poiFoodList": "/weapp/shop/v1/poi/productlist",
    "productInfo": "/weapp/v2/poi/product/info",
    "productDetail": "/weapp/v7/poi/product/detail",
    "getFoodMultiSpu": "/weapp/v6/poi/food/multispu",
    "getMultiSkuPrice": "/weapp/v6/poi/price",
    "poiCommentInfo": "/weapp/v1/comment/poi",
    "similarPoiList": "/weapp/v2/poi/similarpoilist",
    # 搜索
    "searchRcmdWord": "/weapp/search/home/rcmd/word",
    "searchPoi": "/weapp/v2/search/v9/poi",
    "searchPoiWithFilter": "/weapp/v2/search/v9/poiwithfilter",
    "searchSuggestV8": "/weapp/v1/search/v8/suggest",
    "searchHot": "/weapp/v1/search/home/hotlabelandhistory",
    "innerShopHotProducts": "/weapp/v1/search/inshop/hotproducts",
    "innerShopSearchProducts": "/weapp/v1/search/inshop/product",
    # 购物车 / 下单
    "calculatePrice": "/weapp/weapp/v6/shoppingcart/calculatePrice",
    "orderPreview": "/weapp/v1/order/preview",
    "orderPreviewContainer": "/weapp/v1/order/preview/container",
    "v8OrderPreview": "/weapp/v8/order/preview",
    "orderSubmit": "/weapp/v1/order/submit",
    "orderUpdate": "/weapp/v1/order/update",
    "orderCollection": "/weapp/v1/order/collect",
    "orderDeliverTime": "/weapp/v1/order/getdeliverytime",
    "tablewareSetting": "/weapp/v1/order/preview/tablewaresetting",
    "orderGetValidateCode": "/weapp/v1/order/getvalidatecode",
    "orderValidate": "/weapp/v1/order/validate",
    # 订单
    "orders": "/weapp/v1/order/getuserorders",
    "r2xOrders": "/r2x/waimai/order/getuserorders",
    "orderDetail": "/weapp/v1/order/detail",
    "orderStatus": "/weapp/v2/order/status",
    "orderStatusV10": "/weapp/v3/order/status",
    "orderHistoryStatus": "/weapp/v2/order/historystatus",
    "orderConfirmReceive": "/weapp/v1/order/confirmreceive",
    "orderCancel": "/weapp/v1/order/cancel",
    "deleteOrder": "/weapp/v1/order/deleteorder",
    "getFoodlist": "/weapp/v1/order/getfoodlist",
    # 支付
    "pay": "/weapp/v1/payment/pay",
    "refundPreview": "/weapp/v1/payment/refund/preview",
    "refundSubmit": "/weapp/v1/payment/refund/submit",
    "refundDetail": "/weapp/v1/payment/refund/detail",
    "refundStatus": "/weapp/v2/payment/refundstatus",
    # 地址
    "addrGet": "/weapp/v1/user/address/getaddr",
    "addrEdit": "/weapp/v1/user/address/edit",
    "addrSearch": "/weapp/v1/user/address/search",
    "addrSuggest": "/weapp/v1/user/address/suggest",
    "addrNear": "/weapp/v1/user/address/nearby",
    "homeAddr": "/weapp/v1/user/address/locateuseraddr",
    "homeBackAddr": "/weapp/v1/user/address/backupaddr",
    "cityName": "/weapp/v1/user/address/cityname",
    "getcityList": "/weapp/v1/user/address/opencities",
    # 优惠券 / 权益
    "getCouponsList": "/weapp/v1/user/coupons/list",
    "getValidCoupons": "/weapp/v1/user/coupons/getvalid",
    "getPoiCouponsList": "/weapp/v1/user/poicoupons/list",
    "getUserPoiCoupon": "/weapp/v2/user/poi/getvalid",
    "getGoodsCoupons": "/weapp/v1/user/poi/goodscoupon/list",
    "getBusCouponNum": "/weapp/v2/user/poi/num",
    # 营销 / 活动
    "bannerInfo": "/o/wxapp/home/marketing",
    "getNewUserRedpackInfo": "/weapp/v2/newuser/entry",
    "getSubscribeTemplate": "/weapp/v1/subscription/template",
    "sendSubscribeResult": "/weapp/v1/subscription/result",
    "abfront2back": "/weapp/v1/abtest/frontendQuery",
}


@dataclass
class UserState:
    """stores/ 的运行时字段 (业务请求需要的凭据/参数)。"""

    token: str | None = None           # wm_logintoken / userToken
    user_id: str | None = None         # userid
    uuid: str | None = None            # wm_uuid / lxcuid
    longitude: float = 0.0
    latitude: float = 0.0
    model: str = ""                    # wm_dtype
    wx_version: str = ""               # wm_dversion
    platform: str = ""                 # wm_dplatform
    visit_id: str = ""                 # wm_visitid
    lch: int = 0
    app_version: str = WM_VERSION      # wm_appversion
    env: str = "online"                # online|st|qa
    # --- safety-request 层注入 (addCommonParams) ---
    open_id: str | None = None         # header.openId
    open_id_cipher: str | None = None  # header.openIdCipher
    csec_uuid: str | None = None       # header.csecuuid (= wm_uuid/lxcuid)
    csec_version_name: str | None = None  # url.csecversionname (小程序版本)
    csec_version: str = "3.0.0"        # url.csecversion (sdk 版本)
    csec_platform: int = 3             # url.csecplatform (3=WX)
    csec_app_id: str | None = None     # url.csecappid
    csec_dp_id: str | None = None      # header.csecdpid
    ep_token: str | None = None        # header.eptoken
    csec_ep_uid: str | None = None     # header.csecepuid
    extra: dict = field(default_factory=dict)

    def safety_params(self) -> dict:
        """合并 safety-request 层的 url/header 待注入参数 (addCommonParams)。"""
        p = dict(SAFETY_DEFAULT_PARAMS)
        p["csecappid"] = self.csec_app_id or APP_ID
        p["csecversion"] = self.csec_version
        p["csecplatform"] = self.csec_platform
        if self.csec_version_name:
            p["csecversionname"] = self.csec_version_name
        if self.token:
            p["token"] = self.token
        csecuuid = self.csec_uuid or self.uuid
        if csecuuid:
            p["csecuuid"] = csecuuid
        if self.user_id:
            p["csecuserid"] = str(self.user_id)
        if self.open_id:
            p["openId"] = self.open_id
        if self.open_id_cipher:
            p["openIdCipher"] = self.open_id_cipher
        if self.csec_dp_id:
            p["csecdpid"] = self.csec_dp_id
        if self.ep_token:
            p["eptoken"] = self.ep_token
        if self.csec_ep_uid:
            p["csecepuid"] = self.csec_ep_uid
        return p


class WaimaiClient:
    def __init__(self, signer: Signer | None = None, user: UserState | None = None,
                 session: requests.Session | None = None, domain: str = "waimai"):
        self.signer = signer or Signer()
        self.user = user or UserState()
        self.http = session or requests.Session()
        self.domain_key = domain

    @property
    def base_url(self) -> str:
        d = DOMAINS.get(self.domain_key, DOMAINS["waimai"])
        return d.get(self.user.env, d["online"])

    def build_common_params(self, now_ms: int | None = None) -> dict:
        """reducers/selectors/common-param.js 的公共参数。"""
        u = self.user
        return {
            "wm_ctype": WM_NAME,
            "wm_dtype": u.model,
            "wm_dversion": u.wx_version,
            "wm_dplatform": u.platform,
            "wm_uuid": u.uuid,
            "wm_longitude": u.longitude,
            "wm_latitude": u.latitude,
            "wm_visitid": u.visit_id,
            "wm_appversion": u.app_version,
            "wm_channel": "",
            "wm_did": "",
            "wm_logintoken": u.token or "",
            "userToken": u.token or "",
            "req_time": int(time.time() * 1000 if now_ms is None else now_ms),
            "waimai_sign": "/",
            "wm_actual_longitude": u.longitude,
            "wm_actual_latitude": u.latitude,
            "userid": u.user_id,
            "user_id": u.user_id,
            "wm_mac": "",
            "lch": u.lch,
            "uuidCanceled": -1,
            "userIdCanceled": -1,
            "content_personalized_switch": 2,
            "ad_personalized_switch": 2,
        }

    def _build_body(self, data: Any, now_ms: int | None = None) -> dict:
        """合并公共参数 + 业务参数, 并按 Q() 规则清洗 (stringify object, 删 falsy)。"""
        common = self.build_common_params(now_ms)
        body = dict(common)
        if isinstance(data, dict):
            body.update(data)
        body.update(self.user.extra)
        # Q(): 值为 object 的字段 JSON.stringify
        for k, v in list(body.items()):
            if isinstance(v, (dict, list)):
                body[k] = json.dumps(v, separators=(",", ":"), ensure_ascii=False)
        # ke.map(): 删 falsy ("0" 保留)
        for k, v in list(body.items()):
            if not v and v != "0":
                del body[k]
        return body

    def request(self, api: str, data: dict | None = None, method: str | None = None,
                raw_path: str | None = None, now_ms: int | None = None,
                apply_safety: bool = True) -> dict:
        path = raw_path if raw_path is not None else API_URL.get(api, api)
        url = self.base_url + path
        if method is None:
            method = "GET" if data is None and api in ("getcityList", "sidebar") else "POST"
        header = {
            "R2X-Referer": "https://servicewechat.com/%s/0/page-frame.html" % APP_ID,
            "content-type": "application/x-www-form-urlencoded",
            "User-Agent": DEFAULT_UA,
        }
        if self.user.uuid:
            header["uuid"] = self.user.uuid
        # @mtfe/weapp-safety-request addCommonParams: url query + header 注入
        if apply_safety:
            sp = self.user.safety_params()
            q = [(k, sp[k]) for k in PARAMS_POS_URL if sp.get(k) is not None]
            if q:
                url = url + ("&" if "?" in url else "?") + urlencode(q)
            for k in PARAMS_POS_HEADER:
                if sp.get(k) is not None:
                    header.setdefault(k, sp[k])
        body = self._build_body(data, now_ms)
        signed = self.signer.sign(method, url, body, header, now_ms=now_ms)
        if signed["method"].upper() == "GET":
            resp = self.http.request("GET", signed["url"], headers=signed["header"],
                                     params={k: v for k, v in signed["data"].items() if v is not None})
        else:
            resp = self.http.request(signed["method"], signed["url"], headers=signed["header"],
                                     data="&".join("%s=%s" % (quote(str(k), safe=""), quote(str(v), safe=""))
                                                   for k, v in signed["data"].items()))
        try:
            result = resp.json()
        except Exception:
            return {"statusCode": resp.status_code, "text": resp.text}
        if isinstance(result, dict) and result.get("code") in (401, 408):
            result["_needLogin"] = True
        return result

    def __getattr__(self, name):
        if name in API_URL:
            def _call(data=None, **kw):
                return self.request(name, data=data, **kw)
            return _call
        raise AttributeError(name)
