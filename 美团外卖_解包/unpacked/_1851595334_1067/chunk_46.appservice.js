$gwx_XC_41=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_41 || [];
function gz$gwx_XC_41_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_41=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_41=true;
var x=['./pages/transfer/transfer.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_41_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_41";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_41();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/transfer/transfer.wxml'] = [$gwx_XC_41, './pages/transfer/transfer.wxml'];else __wxAppCode__['pages/transfer/transfer.wxml'] = $gwx_XC_41( './pages/transfer/transfer.wxml' );
	;__wxRoute = "pages/transfer/transfer";__wxRouteBegin = true;__wxAppCurrentFile__="pages/transfer/transfer.js";define("pages/transfer/transfer.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=require("../../npm/babel/runtime7_2_0/helpers/interopRequireDefault"),r=e(require("../../npm/babel/runtime7_2_0/helpers/extends")),n=e(require("../../npm/qs6_9_1/lib/index")),t=require("../../npm/wmfe/mp-perf1_0_10/index"),i=require("../../npm/mtfe/wind-mini-sdk1_0_10/dist/index"),o=require("../../api/index"),a=require("../../utils/warden.config"),c="/pages/index/index",s=[c,"/pages/orders/orders","/pages/mine/mine"],u="c_group_ivjgl6rk",d="b_group_9tj7ej35_mc",l={pageName:"transfer",onLoad:function(e){void 0===e&&(e={});try{this.query=e;var r=this.getWindUrl(e);r?(this.initParams(e),this.reportPageView(),this.handleWindUrl(r)):this.handleSceneUrl(e)}catch(e){this.handleError({error:e})}},getLxInstance:function(){var e=getApp();return(null==e?void 0:e.lxInstance)||(null==e?void 0:e.lx)||null},track:function(e,r){void 0===r&&(r={});var n=this.getLxInstance();if(n)try{var t={category:"group"};e===u?n.pageView(e,r,t):n.moduleClick(e,r,t)}catch(e){}},setTrackingTag:function(e,n){void 0===n&&(n={});var t=this.getLxInstance();if(t)try{var i;t.setTag("group",((i={})[u]=(0,r.default)({bid:e},n),i))}catch(e){}},parseQuery:function(e){void 0===e&&(e="");try{var r=e.includes("?")?e.split("?")[1]:e;return r?r.split("&").reduce((function(e,r){var n=r.split("="),t=n[0],i=n[1];return t&&i&&(e[decodeURIComponent(t)]=decodeURIComponent(i)),e}),{}):{}}catch(e){return{}}},initParams:function(e){void 0===e&&(e={});try{if(e.q){var r=decodeURIComponent(e.q);this.params=this.parseQuery(r)}}catch(e){}},getWindUrl:function(e){if(void 0===e&&(e={}),!e.q)return null;var r=decodeURIComponent(e.q),n=/https:\/\/(scanq\.meituan\.com|scanq\.fe\.test\.sankuai\.com)\/qrcode/.test(r),t=/type=MINI_WM/.test(r),i=/code=[^&]*/.test(r);return n&&t&&i?r:null},reportPageView:function(){var e,r,n,t={custom:{open_type:(null===(e=this.params)||void 0===e?void 0:e.type)||"-999",qr_code_id:(null===(r=this.params)||void 0===r?void 0:r.code)||"-999",url:(null===(n=this.query)||void 0===n?void 0:n.q)||"-999"}};this.track(u,t)},reportJump:function(e){var r,n,t={open_type:(null===(r=this.params)||void 0===r?void 0:r.type)||"-999",open_url:e||"-999",qr_code_id:(null===(n=this.params)||void 0===n?void 0:n.code)||"-999"};this.setTrackingTag(d,t),this.track(d,t)},handleWindUrl:function(e){var r=this;(0,i.getMiniProgramUrl)({q:e,enableCache:!1}).then((function(e){var n=e.data,t=void 0===n?{}:n;if(200===e.code&&t){var i=t.url;if(t.expired)return wx.showToast({title:"二维码已过期",icon:"none",duration:2e3}),void setTimeout((function(){wx.reLaunch({url:c})}),2e3);if(i){var o=r.parseQuery(i),a=getApp(),s=function(){r.reportJump(i),r.redirect(i)};o.lch?a&&"function"==typeof a.lxReady?a.lxReady((function(e,r){r&&r.setEnv&&(r.setEnv("lch",o.lch),wx.setStorageSync("wx_scene",o.lch)),s()})):(wx.setStorageSync("wx_scene",o.lch),s()):s()}else r.handleError({error:"[wind]empty miniProgramUrl"})}else r.handleError({error:"[wind]invalid response"})})).catch((function(e){r.handleError({error:e})}))},handleSceneUrl:function(e){var r=this;void 0===e&&(e={});var n=this.parseScene(e);n?(0,o.getLongLink)({shortLink:n}).then((function(e){var n=e.longLink;n?r.redirect(n):r.handleError({error:"empty longUrl"})})).catch((function(e){r.handleError({error:e})})):this.handleError({error:"empty query"})},parseScene:function(e){if(void 0===e&&(e={}),e.q){var r=decodeURIComponent(e.q);return n.default.parse(r.split("?")[1]||"").scene}return e.scene?decodeURIComponent(e.scene):""},redirect:function(e){var r=this;e=e||c;for(var n=0;n<s.length;n++){var t=s[n];if(t===e||0===e.indexOf(t+"?"))return void wx.reLaunch({url:e})}wx.redirectTo({url:e,fail:function(n){r.handleError({error:n,path:e})}})},handleError:function(e){this.logError(e),wx.reLaunch({url:c})},logError:function(e){void 0===e&&(e={}),e.query=this.query,(0,a.customError)({error_level_sub:"transfer error",content:e})}};(0,t.page)(l);
},{isPage:true,isComponent:true,currentFile:'pages/transfer/transfer.js'});require("pages/transfer/transfer.js");