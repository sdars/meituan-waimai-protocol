,aRW)
if(_oz(z,0,e,s,gg)){aRW.wxVkey=1
var tSW=_v()
_(aRW,tSW)
if(_oz(z,1,e,s,gg)){tSW.wxVkey=1
}
tSW.wxXCkey=1
}
else{aRW.wxVkey=2
var eTW=_v()
_(aRW,eTW)
if(_oz(z,2,e,s,gg)){eTW.wxVkey=1
}
eTW.wxXCkey=1
}
aRW.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_XC_44_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_44";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_44();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/phoenix-img/index.wxml'] = [$gwx_XC_44, './components/phoenix-img/index.wxml'];else __wxAppCode__['components/phoenix-img/index.wxml'] = $gwx_XC_44( './components/phoenix-img/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/restaurant/restaurant.wxml'] = [$gwx_XC_44, './pages/restaurant/restaurant.wxml'];else __wxAppCode__['pages/restaurant/restaurant.wxml'] = $gwx_XC_44( './pages/restaurant/restaurant.wxml' );
	;__wxRoute = "components/phoenix-img/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/phoenix-img/index.js";define("components/phoenix-img/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var t=require("../../npm/wmfe/replace-component0_0_2/index").component,e=require("../../npm/babel/runtime7_2_0/helpers/interopRequireDefault")(require("../../npm/babel/runtime7_2_0/helpers/toConsumableArray")),r=require("../../utils/cdnPhoenixInit"),a=["p0.meituan.net","p1.meituan.net","img.meituan.net"],i=r.samplingRate;t({externalClasses:["class"],options:{virtualHost:r.isSupportVirtualHost},properties:{style:{type:String},lazyLoad:{type:Boolean,value:!1},mode:{type:String,value:"scaleToFill"},showMenuByLongpress:{type:Boolean,value:!1},src:{type:String,value:""},webp:{type:Boolean,value:!1},fadeIn:{type:Boolean,value:!1},fallbackImg:{type:String,value:r.fallbackImg},ancestralSrc:{type:String,value:""}},data:{phoenixTryCount:{},replaceFailedHosts:[],failedCodes:[],failedDelayTime:[],startTime:0,retryCount:0,phoenixImageSrc:"",originSrc:"",originDomain:"",isFailed:!1,isSupportVirtualHost:r.isSupportVirtualHost},observers:{src:function(t){try{if(""!==t.trim()){var e=this.checkVenusUrl(t,a),r=this.convertToHttps(t),i=this.occurredRecovery(r);this.setData({isFailed:!1,originSrc:t,originDomain:this.getDomain(t),phoenixImageSrc:e?i:t})}else this.setData({originSrc:t,phoenixImageSrc:t})}catch(e){this.setData({phoenixImageSrc:t})}}},attached:function(){this.data.startTime=Date.now()},methods:{handleError:function(t){try{if(this.errorMessageProcessing(t),this.replaceImageUrlDomain())return;this.logReport(!1,"error",null==t?void 0:t.detail)}catch(t){this.setData({phoenixImageSrc:this.data.originSrc}),this.logReport(!1,"error",t)}},handleLoad:function(t){this.updateCDNList(