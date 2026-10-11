try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}var f=function(){return(f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){return r.forwardRef((function(e,t){var n=e.children,o=void 0===n?[]:n;return r.createElement("view",f(f({},e),{ref:t}),o)}))}();l.defaultProps={hoverClass:"none",hoverStopPropagation:!1,hoverStartTime:50,hoverStayTime:400};var p,s=getApp().__modules__,v=s.Merlin.warden.customError,d=function(e){var t,r=null==s||null===(t=s.Perf)||void 0===t?void 0:t.Page;return r?(r(e.prototype),e):void 0}(p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(f,t.Component);var r,i,c=a(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=c.call(this,e)).state={},t.perfSetCurrentRoute&&t.perfSetCurrentRoute("mprn/waimai_wmmp_poicoupons/default"),t}return r=f,(i=[{key:"componentDidMount",value:function(){var e,t,r=getCurrentPages(),n=(null===(e=r[r.length-1])||void 0===e?void 0:e.route)||"none",o=(null===(t=r[r.length-2])||void 0===t?void 0:t.route)||"none";(function(e){var t=e.error_code,r=e.content;if(v)try{v({project:"com.sankuai.wmmp.main",error_level_sub:"外卖代金券mprn工程",error_code:t,content:r,level:"info",sampleAll:!0,reportNow:!0})}catch(e){console.log(e)}})({error_code:n,content:"跳转到mprn工程的".concat(n,"，上游页面").concat(o)}),wx.redirectTo({url:"/sub_inner_pages/my-poi-coupons/my-poi-coupons"})}},{key:"render",value:function(){return n.default.createElement(l,null)}}])&&o(r.prototype,i),Object.defineProperty(r,"prototype",{writable:!1}),f}())||p,y=Page(t.createPageConfig(d));exports.default=y;
},{isPage:true,isComponent:true,currentFile:'static_bundles/my-poi-coupons/my-poi-coupons.js'});require("static_bundles/my-poi-coupons/my-poi-coupons.js");$gwx52_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx52_XC_1 || [];
function gz$gwx52_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx52_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx52_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx52_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[8],'root',[[7],[3,'root']]])
Z([3,'TPL'])
})(__WXML_GLOBAL__.ops_cached.$gwx52_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx52_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx52_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx52_XC_1=true;
var x=['./static_bundles/order-address-modify/orderAddressModify.wxml','../base-template.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx52_XC_1_1()
var oJ=e_[x[0]].i
_ai(oJ,x[1],e_,x[0],1,1)
var lK=_v()
_(r,lK)
var aL=_oz(z,1,e,s,gg)
var tM=_gd(x[0],aL,e_,d_)
if(tM){
var eN=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[0],1,51)
oJ.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx52_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx52_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['static_bundles/order-address-modify/orderAddressModify.wxml'] = [$gwx52_XC_1, './static_bundles/order-address-modify/orderAddressModify.wxml'];else __wxAppCode__['static_bundles/order-address-modify/orderAddressModify.wxml'] = $gwx52_XC_1( './static_bundles/order-address-modify/orderAddressModify.wxml' );
	;__wxRoute = "static_bundles/order-address-modify/orderAddressModify";__wxRouteBegin = true;__wxAppCurrentFile__="static_bundles/order-address-modify/orderAddressModify.js";define("static_bundles/order-address-modify/orderAddressModify.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../mprn-runtime/index.js");var n=function(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}(t),r=function(t){return t&&"object"==e(t)&&"default"in t?t:{default:t}}(t);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(t){return(i="function"==typeof Symbol&&"symbol"==e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)})(t)}function s(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){s(o,r,a,i,c,"next",e)}function c(e){s(o,r,a,i,c,