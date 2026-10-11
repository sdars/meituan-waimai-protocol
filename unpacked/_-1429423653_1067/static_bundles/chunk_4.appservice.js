eturn!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=i(e);if(r){var o=i(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return c(this,t)}}var f=function(){return(f=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},l=function(e,r){return t.forwardRef((function(e,r){var n=e.children,o=void 0===n?[]:n;return t.createElement("view",f(f({},e),{ref:r}),o)}))}();l.defaultProps={hoverClass:"none",hoverStopPropagation:!1,hoverStartTime:50,hoverStayTime:400};var p,s=getApp().__modules__,v=s.Merlin.warden.customError,d=function(e){var r,t=null==s||null===(r=s.Perf)||void 0===r?void 0:r.Page;return t?(t(e.prototype),e):void 0}(p=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&u(e,r)}(f,r.Component);var t,i,c=a(f);function f(e){var r;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,f),(r=c.call(this,e)).perfSetCurrentRoute&&r.perfSetCurrentRoute("mprn/waimai_wmmp_poicoupons/expired"),r}return t=f,(i=[{key:"componentDidMount",value:function(){var e,r,t=getCurrentPages(),n=(null===(e=t[t.length-1])||void 0===e?void 0:e.route)||"none",o=(null===(r=t[t.length-2])||void 0===r?void 0:r.route)||"none";(function(e){var r=e.error_code,t=e.content;if(v)try{v({project:"com.sankuai.wmmp.main",error_level_sub:"外卖代金券mprn工程",error_code:r,content:t,level:"info",sampleAll:!0,reportNow:!0})}catch(e){console.log(e)}})({error_code:n,content:"跳转到mprn工程的".concat(n,"，上游页面").concat(o)}),wx.redirectTo({url:"/sub_inner_pages/my-poi-coupons-expired/my-poi-coupons-expired"})}},{key:"render",value:function(){return n.default.createElement(l,null)}}])&&o(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),f}())||p,y=Page(r.createPageConfig(d));exports.default=y;
},{isPage:true,isComponent:true,currentFile:'static_bundles/poi-coupons-expired/poi-coupons-expired.js'});require("static_bundles/poi-coupons-expired/poi-coupons-expired.js");$gwx52_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx52_XC_5 || [];
function gz$gwx52_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx52_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx52_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx52_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[8],'root',[[7],[3,'root']]])
Z([3,'TPL'])
})(__WXML_GLOBAL__.ops_cached.$gwx52_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx52_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx52_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx52_XC_5=true;
var x=['./static_bundles/refund-appeal/index.wxml','../base-template.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx52_XC_5_1()
var c8=e_[x[0]].i
_ai(c8,x[1],e_,x[0],1,1)
var h9=_v()
_(r,h9)
var o0=_oz(z,1,e,s,gg)
var cAB=_gd(x[0],o0,e_,d_)
if(cAB){
var oBB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
h9.wxXCkey=3
cAB(oBB,oBB,h9,gg)
gg.f=cur_globalf
}
else _w(o0,x[0],1,51)
c8.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx52_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx52_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['static_bundles/refund-appeal/index.wxml'] = [$gwx52_XC_5, './static_bundles/refund-appeal/index.wxml'];else __wxAppCode__['static_bundles/refund-appeal/index.wxml'] = $gwx52_XC_5( './static_bundles/refund-appeal/index.wxml' );
	;__wxRoute = "static_bundles/refund-appeal/index";__wxRouteBegin = true;__wxAppCurrentFile__="static_bundles/refund-appeal/index.js";define("static_bundles/refund-appeal/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../mprn-runtime/index.js");var r=function(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}(t),n=function(t){return t&&"object"==e(t)&&"default"in t?t:{default:t}}(t);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(t){return(i="function"==typeof Symbol&&"symbol"==e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)})(t)}function c(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){c(a,n,o,i,s,"next",e)}function s(e){c(a,n,o,i,s,"throw",e)}i(void 0)}))}}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!