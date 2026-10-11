.q);return n.default.parse(r.split("?")[1]||"").scene}return e.scene?decodeURIComponent(e.scene):""},redirect:function(e){var r=this;e=e||c;for(var n=0;n<s.length;n++){var t=s[n];if(t===e||0===e.indexOf(t+"?"))return void wx.reLaunch({url:e})}wx.redirectTo({url:e,fail:function(n){r.handleError({error:n,path:e})}})},handleError:function(e){this.logError(e),wx.reLaunch({url:c})},logError:function(e){void 0===e&&(e={}),e.query=this.query,(0,a.customError)({error_level_sub:"transfer error",content:e})}};(0,t.page)(l);
},{isPage:true,isComponent:true,currentFile:'pages/transfer/transfer.js'});require("pages/transfer/transfer.js");$gwx_XC_42=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_42 || [];
function gz$gwx_XC_42_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_42_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-root'])
Z([3,'load'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_42_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_42=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_42=true;
var x=['./pages/verify-phone/verify-phone.wxml','../../components/sub_inner_nav/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_42_1()
var xIW=_n('view')
_rz(z,xIW,'id',0,e,s,gg)
var oJW=e_[x[0]].i
_ai(oJW,x[1],e_,x[0],1,22)
var fKW=_v()
_(xIW,fKW)
var cLW=_oz(z,1,e,s,gg)
var hMW=_gd(x[0],cLW,e_,d_)
if(hMW){
var oNW={}
var cur_globalf=gg.f
fKW.wxXCkey=3
hMW(oNW,oNW,fKW,gg)
gg.f=cur_globalf
}
else _w(cLW,x[0],1,99)
oJW.pop()
_(r,xIW)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_42";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_42();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/verify-phone/verify-phone.wxml'] = [$gwx_XC_42, './pages/verify-phone/verify-phone.wxml'];else __wxAppCode__['pages/verify-phone/verify-phone.wxml'] = $gwx_XC_42( './pages/verify-phone/verify-phone.wxml' )