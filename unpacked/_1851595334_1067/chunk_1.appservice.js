N,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
function gz$gwx_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'web-view-component'])
Z([[7],[3,'showSlot']])
Z([3,'before'])
Z([[7],[3,'showWebView']])
Z(z[1])
Z([3,'after'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
function gz$gwx_XC_2_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_2)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_2
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-root'])
Z([[7],[3,'locLoading']])
Z([3,'onTap'])
Z([3,'onTouchMove'])
Z([3,'page-container'])
Z([[2,'&&'],[[2,'==='],[[7],[3,'xmlType']],[1,'ORIGIN']],[[7],[3,'webviewData']]])
Z([3,'onErrorWebview'])
Z([3,'onLoadWebview'])
Z([3,'onMessage'])
Z([[7],[3,'defaultType']])
Z([[7],[3,'webviewData']])
Z([[2,'&&'],[[2,'==='],[[7],[3,'xmlType']],[1,'REFRESH']],[[7],[3,'webviewData']]])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[7],[3,'showCustomTabbar']])
Z([3,'tab-bar-box'])
Z([1,1])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_2);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_2
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./npm/wmfe/wxapp-component-webview0_9_17/src/components/webview.wxml','./pages/web-view/web-view.wxml','../base.wxml','../../components/compat/compat.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
var aDI=_n('view')
_rz(z,aDI,'class',0,e,s,gg)
var tEI=_v()
_(aDI,tEI)
if(_oz(z,1,e,s,gg)){tEI.wxVkey=1
var oHI=_n('slot')
_rz(z,oHI,'name',2,e,s,gg)
_(tEI,oHI)
}
var eFI=_v()
_(aDI,eFI)
if(_oz(z,3,e,s,gg)){eFI.wxVkey=1
}
var bGI=_v()
_(aDI,bGI)
if(_oz(z,4,e,s,gg)){bGI.wxVkey=1
var xII=_n('slot')
_rz(z,xII,'name',5,e,s,gg)
_(bGI,xII)
}
tEI.wxXCkey=1
eFI.wxXCkey=1
bGI.wxXCkey=1
_(r,aDI)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_XC_2_2()
var fKI=_n('view')
_rz(z,fKI,'id',0,e,s,gg)
var cLI=e_[x[1]].j
_ic(x[2],e_,x[1],e,s,fKI,gg);
var hMI=_v()
_(fKI,hMI)
if(_oz(z,1,e,s,gg)){hMI.wxVkey=1
}
else{hMI.wxVkey=2
var cOI=_mz(z,'view',['bindtap',2,'bindtouchmove',1,'class',2],[],e,s,gg)
var oPI=e_[x[1]].i
_ai(oPI,x[3],e_,x[1],1,395)
var lQI=_v()
_(cOI,lQI)
if(_oz(z,5,e,s,gg)){lQI.wxVkey=1
var tSI=_mz(z,'wm-webview',['bind:onBindError',6,'bind:onBindLoad',1,'bind:onBindMessage',2,'defaultType',3,'wmData',4],[],e,s,gg)
_(lQI,tSI)
}
var aRI=_v()
_(cOI,aRI)
if(_oz(z,11,e,s,gg)){aRI.wxVkey=1
var eTI=_mz(z,'wm-webview',['bind:onBindError',12,'bind:onBindLoad',1,'bind:onBindMessage',2,'defaultType',3,'wmData',4],[],e,s,gg)
_(aRI,eTI)
}
lQI.wxXCkey=1
lQI.wxXCkey=3
aRI.wxXCkey=1
aRI.wxXCkey=3
oPI.pop()
_(hMI,cOI)
}
var oNI=_v()
_(fKI,oNI)
if(_oz(z,17,e,s,gg)){oNI.wxVkey=1
var bUI=_mz(z,'custom-tab-bar',['id',18,'selected',1],[],e,s,gg)
_(oNI,bUI)
}
var oVI=_n('tm')
_(fKI,oVI)
hMI.wxXCkey=1
hMI.wxXCkey=3
oNI.wxXCkey=1
oNI.wxXCkey=3
cLI.pop()
_(r,fKI)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['npm/wmfe/wxapp-component-webview0_9_17/src/components/webview.wxml'] = [$gwx_XC_2, './npm/wmfe/wxapp-component-webview0_9_17/src/components/webview.wxml'];else __wxAppCode__['npm/wmfe/wxapp-component-webview0_9_17/src/components/webview.wxml'] = $gwx_XC_2( './npm/wmfe/wxapp-component-webview0_9_17/src/components/webview.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/web-view/web-view.wxml'] = [$gwx_XC_2, './pages/web-view/web-view.wxml'];else __wxAppCode__['pages/web-view/web-view.wxml'] = $gwx_XC_2( './pages/web-view/web-view.wxml' );
	;__wxRoute = "npm/wmfe/wxapp-component-webview0_9_17/src/components/webview";__wxRouteBegin = true;__wxAppCurrentFile__="npm/wmfe/wxapp-component-webview0_9_17/src/components/webview.js";define("npm/wmfe/wxapp-component-webview0_9_17/src/components/webview.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../../@babel/runtime/helpers/typeof"),t=require("../../../replace-component0_0_2/index").component,r=require("../../../../babel/runtime7_2_0/helpers/interopRequireDefault")(require("../../../../babel/runtime7_2_0/helpers/extends")),i=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!=e(t)&&"function"!=typeof t)return{default:t};var i=n(r);if(i&&i.has(t))return i.get(t);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if("default"!==s&&Object.prototype.hasOwnProperty.call(t,s)){var l=o?Object.getOwnPropertyDescriptor(t,s):null;l&&(l.get||l.set)?Object.defineProperty(a,s,l):a[s]=t[s]}return a.default=t,i&&i.set(t,a),a}(require("./lib/constant")),a=require("./lib/middleware");function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}var o=require("../../../wxapp-component-monitor1_0_5/dist/components/index").default({project:"takeaway-waimai-wxapp-webview",name:"webview",dev:!1,time:10});t({options:{multipleSlots:!0},properties:{defaultType:{type:String,value:""},wmData:{type:Object,value:i.defaultState,observer:function(){this.data.inited&&this.resolveUrl()}}},data:{showWebView:!1,showSlot:!1,showLoading:!0,inited:!1,url:"",redirectUrl:""},attached:function(){var e=wx.getSystemInfoSync().SDKVersion;wx.canIUse("web-view")&&(0,a.compareVersion)(e,i.minVersion)>=0||this.setData({showWebView:!1,showSlot:!0})},ready:function(){this.initRedirectUrl(),this.initType(),this.resolveUrl(),this.setData({inited:!0}),wx.hideNavigationBarLoading()},moved:function(){},detached:function(){},methods:{initType:function(){var e=this.properties,t=e.wmData,a=e.defaultType;t.type||this.setData({wmData:(0,r.default)({},t,{type:a||i.REDIRECT})})},initRedirectUrl:function(){var e=this.properties.wmData,t=e.env,r=e.redirectUrl;this.setData({redirectUrl:r||(0,a.getDefaultRedirectUrl)(t)})},showLoading:function(){wx.showLoading({title:"加载中"})},hideLoading:function(){wx.hideLoading()},onMessageWebview:function(e){var t=e.detail;if(this.triggerEvent("onBindMessage",t),t&&t.data){var r={};try{r=t.data[t.data.length-1]||{}}catch(e){}this.resolveShareConfig(r)}},onLoadWebview:function(e){var t=e.detail;this.triggerEvent("onBindLoad",t)},onErrorWebview:function(e){var t=e.detail;this.triggerEvent("onBindError",t)},resolveShareConfig:function(e){var t=e.type;(void 0===t?"":t)===i.SHARE&&wx.setStorageSync(i.WEBVIEW_SHARE_CONFIG,JSON.stringify(e))},delayBack:function(e,t){void 0===e&&(e=""),void 0===t&&(t=0),wx.showToast({title:e}),setTimeout((function(){wx.navigateBack()}),t)},showModle:function(e,t){void 0===t&&(t=""),wx.showModal({title:e,content:t})},resolveUrl:function(){var e=this.properties.wmData,t=e.loginData,n=e.baseData,s=e.webviewUrl,l=e.type,c=e.q,u=e.ctype,d=e.wm_ctype,p=e.isTicketWhitelisted,w=this.properties.wmData.queryData;w=w||{};var h=this.data.redirectUrl;if(s&&l){var f=(0,a.decodeUrl)(s);if(f=this.removeQueryParam(f,"wm_ctype"),this.targetUrl){if(this.targetUrl===f)return}else this.targetUrl=f;var g=getCurrentPages()&&getCurrentPages().length?getCurrentPages().length:0,v=i.MAX_PAGE_COUNT-g,m=(0,a.checkValidUrl)(f);m&&(o.addError({sign:"CHECK_URL_VALID",name:"webviewUrl校验错误",message:{errMsg:m,url:s,type:l}},!0),o.onceReport());var y=(0,a.getHash)(f,!0).url,b=t||{};if(l!==i.REDIRECT||b.token||(b=(0,a.getLoginData)()),l===i.DIRECT&&!c)return this.setData({url:(0,a.serialize)(f,n,Object.assign(w,{other:!0,ctype:u,wm_ctype:d,webview_source:c?i.SOURCE_QRCODE:i.SOURCE_NATIVE,page_remain:v})),showWebView:!0,showSlot:!1});p&&delete b.token;var _,E=(0,a.getCommonParam)(b),D=Object.assign({},(0,r.default)({},E,{wm_ctype:d,logindata:b||{},redirecturl:(0,a.serialize)(y,n,Object.assign(w,{other:!0,ctype:u,wm_ctype:d,webview_source:c?i.SOURCE_QRCODE:i.SOURCE_NATIVE,page_remain:v}))}));if(c){var O=(0,a.filterParam)(c,D);_=(0,a.serialize)(s,O,Object.assign(w,{hash:!0,other:!0,ctype:u,webview_source:c?i.SOURCE_QRCODE:i.SOURCE_NATIVE,page_remain:v}))}else D.redirecturl=D.redirecturl+(0,a.getHash)(f,!0).hash,_=D.redirecturl&&-1!==D.redirecturl.indexOf("mp.weixin.qq.com")?D.redirecturl:(0,a.serialize)(l===i.REDIRECT&&h||s,D,{hash:!0});this.setData({url:_,showWebView:!0,showSlot:!1})}},removeQueryParam:function(e,t){var r=new RegExp("&?"+t+"=[^&]*","i");return e.replace(r,"")}}});
},{isPage:false,isComponent:true,currentFile:'npm/wmfe/wxapp-component-webview0_9_17/src/components/webview.js'});require("npm/wmfe/wxapp-component-webview0_9_17/src/components/webview.js");;__wxRoute = "pages/web-view/web-view";__wxRouteBegin = true;__wxAppCurrentFile__="pages/web-view/web-view.js";define("pages/web-view/web-view.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=require("../../npm/babel/runtime7_2_0/helpers/interopRequireDefault"),t=e(require("../../npm/babel/runtime7_2_0/regenerator/index")),a=e(require("../../npm/babel/runtime7_2_0/helpers/toConsumableArray")),r=e(require("../../npm/babel/runtime7_2_0/helpers/extends")),n=require("../../npm/wmfe/mp-perf1_0_10/index"),i=e(require("../../npm/url0_11_0/url")),o=e(require("../../api/uuid-inject")),s=e(require("../../api/trace-id")),u=require("../../components/login-sdkV2/index"),l=require("../../npm/analytics/wechat-sdk3_17_6/lib/index"),c=require("../../npm/wmfe/wxapp-component-abtest0_4_4/src/components/abtest/index"),d=require("../../actions/web-view"),p=require("../../actions/purchase"),f=e(require("./util/block-check")),w=e(require("./util/query-data")),h=require("../../utils/warden.config"),g=require("../../api/wx"),b=require("../../npm/wmfe/wxapp-component-webview0_9_17/src/components/lib/constant"),v=require("../../constants"),m=require("../../privacy-config/personalized"),_=e(require("./util/query-string")),x=e(require("../../utils/core-target-report")),y=require("../../npm/promise-polyfill6_0_2/promise.js"),k=require("../../api/index").pay,D=require("../../reducers/selectors/common-param").async,I=require("../../common/follow-order/follow-order"),S=require("../../weapp-redux/index").connect,q=require("../../utils/mix"),T=require("../base"),U=function(){return getApp().store.getState()},C=(0,o.default)(),R=wx.getMenuButtonBoundingClientRect(),O=0;if(R){var P=R.top;O=P+R.height+P}var E="afterLoginAction",W="ORIGIN",A="REFRESH",L=require("../../components/rohr/rohr"),M=null,H=["loginData","redirectUrl"],N=function(){},j=function(e){return"function"==typeof e},Q=function(e){var t=i.default.parse(e,!1);return!!(t.host.endsWith(".meituan.com")||t.host.endsWith(".meituan.net")||t.host.endsWith(".jchunuo.com")||t.host.endsWith(".dianping.com")||"meituan.com"===t.host||t.host.endsWith(".sankuai.com"))},B="",J="release"===(__wxConfig.envVersion||"release"),z=S((function(e){var t=e.user,a=void 0===t?{}:t,r=e.webview,n=r.loginData,i=r.baseData,o=r.shareConfig,s=r.webviewUrl,u=r.q,l=r.webviewType,c=r.preQrcode,d=r.queryData,p=r.inited,f=r.isTicketWhitelisted;return{shareConfig:o,user:a,webviewData:{loginData:n,baseData:i,webviewUrl:s,q:u,preQrcode:c,ctype:"wm_wxapp",wm_ctype:"wxapp",type:l,queryData:d,env:"qa"===e.dev.env?0:1,inited:p,isTicketWhitelisted:f},defaultType:""}}),(function(e){return{updateWebview:function(t){return e((0,d.updateWebview)(t))},rollbackWebview:function(t){return e((0,d.rollbackWebview)(t))},setInvoice:function(t){return e((0,p.setInvoice)(t))},setPatient:function(t){return e((0,p.setPatient)(t))}}}),(function(e,t,a){return!t.inited&&a&&a.fromWebview?(0,r.default)({},e,{webviewData:(0,r.default)({},e.webviewData,{webviewUrl:""})}):e})),F=function(e){var t="qa"===U().dev.env,a=e?decodeURIComponent(e):null;if(t&&a){var r=a.indexOf("?"),n=a.substring(r);n&&"undefined"!==n&&(a="https://wx.waimai.test.meituan.com/weapp/short/transfer/wm"+n)}return function(e,t){var a=decodeURIComponent(e),r=i.default.parse(a,!0),n=r.query,o=void 0===n?{}:n;for(var s in t)void 0===t[s]?delete o[s]:o[s]=t[s];return delete r.search,i.default.format(r)}(a,{s:void 0})};function G(e){var a,r,n,i,o,s,u,l;return t.default.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=require("../../npm/mtfe/passport-standard-mp1_0_1-beta_58/dist/cjs/index").checkWhitelist(e),global.mmb.logInfo("[web-view] [checkTicketWhitelist] result",a),c.abrupt("return",a);case 4:if(c.prev=4,null!=(s=null===(r=getApp())||void 0===r||null===(n=r.getOriginApp)||void 0===n?void 0:n.call(r))&&s.getPassportStandardMp){c.next=8;break}return c.abrupt("return",!1);case 8:return c.next=10,t.default.awrap(s.getPassportStandardMp());case 10:return u=c.sent,l=null!==(i=null==u||null===(o=u.checkWhitelist)||void 0===o?void 0:o.call(u,e))&&void 0!==i&&i,global.mmb.logInfo("[web-view] [checkTicketWhitelist] result",l),c.abrupt("return",l);case 16:return c.prev=16,c.t0=c.catch(4),global.mmb.logError("[web-view] [checkTicketWhitelist] error",c.t0),c.abrupt("return",!1);case 20:case"end":return c.stop()}}),null,null,[[4,16]])}var V={pageName:"web-view",inited:!1,data:{xmlType:W,scenes:null,_type:W,preQrcode:"",loaded:!1,lxPassData:"",navBarHeight:O,showCustomTabbar:!1,grayString:"",from:""},addParameterToSharePath:function(e){if(!this.banShare||e.includes("banShare"))return e;var t=e.split("?"),a=t[0],r=t[1],n=void 0===r?"":r;return a+"?banShare="+Number(this.banShare)+"&"+n},reportShare:function(e){try{var t=e||{},a=t.bid,n=t.cid,i=t.val_lab;if(a&&n){var o=JSON.parse(i||"{}");global.mmb.lx.click(a,(0,r.default)({},o,{cid:n}))}}catch(e){}},onShareAppMessage:function(){var e=this.data,t=e.shareConfig,a=e.webviewData,n=-1!=(a.webviewUrl||"").indexOf("mp.weixin.qq.com"),o=wx.getStorageSync("webviewShareConfig"),s=o&&!n?JSON.parse(o):{};try{this.reportShare(s)}catch(e){}this.banShare&&wx.updateShareMenu({isPrivateMessage:!0});var u="";if(a.q)u=(0,r.default)({},s||{},{path:"/pages/web-view/web-view?q="+a.q});else{var l=decodeURIComponent(a.webviewUrl),c=i.default.parse(l,!0).query,d=void 0===c?{}:c;if(d.title||d.image){var p={};p.title=d.title||void 0,p.imageUrl=d.image||void 0;var f="/pages/web-view/web-view?type=DIRECT&webviewUrl="+a.webviewUrl;return p.path=this.addParameterToSharePath(f),p}if(o)return s.path=this.addParameterToSharePath(s.path),this.updateWebview((0,r.default)({},a,{shareConfig:s})),s;var w=a.webviewUrl;w=this.deleteUrlPersonalInfo(w),/%/.test(w)||(w=encodeU