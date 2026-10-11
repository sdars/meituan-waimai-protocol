$gwx42_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx42_XC_0 || [];
function gz$gwx42_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx42_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'c_sign-wrapper'])
Z([[2,'||'],[[2,'!'],[[7],[3,'showPage']]],[[2,'&&'],[[7],[3,'autoSign']],[[2,'!'],[[7],[3,'backToPage']]]]])
Z([3,'page-root'])
Z([[2,'!'],[[7],[3,'queryError']]])
Z([[7],[3,'signed']])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx42_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx42_XC_0=true;
var x=['./packages/finance-pay/pages/sign/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx42_XC_0_1()
var oB=_mz(z,'view',['class',0,'hidden',1,'id',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,3,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
if(_oz(z,4,e,s,gg)){oD.wxVkey=1
}
oD.wxXCkey=1
}
else{xC.wxVkey=2
}
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx42_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx42_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/sign/index.wxml'] = [$gwx42_XC_0, './packages/finance-pay/pages/sign/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/sign/index.wxml'] = $gwx42_XC_0( './packages/finance-pay/pages/sign/index.wxml' );
	;__wxRoute = "packages/finance-pay/pages/sign/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/finance-pay/pages/sign/index.js";define("packages/finance-pay/pages/sign/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../npm/babel/runtime7_2_0/helpers/interopRequireDefault"),a=t(require("../../../../npm/babel/runtime7_2_0/helpers/extends")),e=t(require("../../api/ajax")),i=require("../../common/util"),n=t(require("../../common/env")),s=require("../../common/analytics"),o=require("../../common/monitor"),r=require("../../business/common-callback"),u=require("../../common/app-login"),d=require("../../common/constants"),c=getApp();Page({data:{showPage:!1,iconSuccess:"https://p0.meituan.net/mpcashier/sign-success-icon.png",runtime:"",subAppId:"",signed:!1,outRequestNo:"",querySignLoaded:!0,pollingCount:6,timer:null,riskParams:"",loading:!1,buttonClicked:!1,backToPage:!1,queryError:!1,autoSign:!1,getResultWay:"",retry:!1},pageCustomData:{signCid:"c_pay_0md27nxb",signedCid:"c_pay_2eilt15d"},onShow:function(){!this.data.signed&&this.data.buttonClicked&&("storage"===this.data.getResultWay&&this.setData({showPage:!1}),this.setData({backToPage:!0,autoSign:!1}),this.pollingQuery())},onLoad:function(t){var a=this;wx.removeStorageSync("processInterruption"),n.default._setIsSameMiniprogram(!0),n.default._setEnvRuntime(t.runtime||"production"),(0,o.owlStart)(t.runtime===d.EnvRuntime.Test),n.default._setUtmSource(t.utm_source||"-999");var e=(0,u.getLoginInfo)(),i=e.userId,s=e.token,r=c.globalData,g=r.openId,l=r.uuid,m=r.cityId,p=r.appid,h=r.location,f=void 0===h?{}:h,y=r.sysInfo,S=void 0===y?{}:y,_=r.mt_localCity,C=void 0===_?{}:_,w=r.mtpayCityId;n.default._setCommonParams({token:s,userid:i||"",openid:g,app_id:p,nb_uuid:l,nb_ci:w||C&&C.id||m||"",nb_location:f?(f.latitude||0)+"_"+(f.longitude||0):"0_0",nb_appversion:S.version,wxSDKVersion:S.SDKVersion}),n.default._setSwimlane(t.swimlane),this.setData({runtime:t.runtime,subAppId:p,autoSign:t.lanch_sign,getResultWay:t.get_result_way}),this.setRiskParams(g,p),(0,u.userLogin)().then((function(t){t?a.getFingerPrint():a.setData({autoSign:!1,queryError:!0,showPage:!0})})).catch((function(){}))},onHide:function(){this.data.timer&&this.clearInterval()},onUnload:function(){this.data.timer&&this.clearInterval(),(0,o.owlDestroy)(),"storage"===this.data.getResultWay&&(wx.setStorageSync("processInterruption",1),this.data.signed&&wx.setStorageSync("passwordFreeSignSuccess",1))},setRiskParams:function(t,a){try{var e=JSON.stringify({openId:t,wechatAppId:a,tatooineEventName:"wechatmicroexemptpwd"});this.setData({riskParams:e})}catch(t){(0,o.reportDetailJsError)("[免密支付独立签约]风控入参格式化异常",{message:t.message,stack:t.stack})}},getFingerPrint:function(){var t=this;(0,i.getFingerPrint)().then((function(a){var e=JSON.parse(t.data.riskParams);e.fingerprint=a,t.setData({riskParams:JSON.stringify(e)}),t.getSignStatus()})).catch((function(a){t.getSignStatus(),(0,o.reportDetailJsError)("[免密支付独立签约]finger print 格式化异常",{message:a.message,stack:a.stack})}))},getSignStatus:function(){var t=this,d=(0,i.getOrigin)(n.default._envRuntime)+"/nopass/getSignList";(0,e.default)(d,(0,a.default)({},n.default._commonParams,n.default._staticData,{iphPayMerchantNo:"42211241703616473",riskParams:this.data.riskParams,mtPlanId:this.getMtPlanId()})).then((function(a){a.payTypeList&&a.payTypeList.length&&a.payTypeList.forEach((function(a){1===a.payTypeCode&&t.setData({signed:a.signed})})),t.setData({queryError:!1,showPage:!0}),(0,s.pageView)(t.data.signed?t.pageCustomData.signedCid:t.pageCustomData.signCid,{source_type:"引导进入"}),(0,o.reportPageLoad)(),!t.data.signed&&t.data.autoSign?t.goSign():t.data.signed&&t.setData({autoSign:!1})})).catch((function(a){t.setData({queryError:!0,showPage:!0,autoSign:!1}),(0,r.handleCommonError)(a);var e=Number(a.code);500010!==e&&500011!==e&&400!==e||(0,u.userLogin)(!0).then((function(a){a&&!t.data.retry?(t.setDate({retry:!0}),t.getFingerPrint()):t.setData({autoSign:!1,queryError:!0,showPage:!0})})).catch((function(){}))}))},goSign:function(){var t=this;if(this.data.signed)return"storage"===this.data.getResultWay&&wx.setStorageSync("passwordFreeSignSuccess",1),(0,s.moduleClick)("b_pay_0t2aacxq_mc",{source_type:"引导进入"}),void this.quit();if(!this.data.timer&&!this.data.loading){(0,s.moduleClick)("b_pay_5hiiyeev_mc",{source_type:this.data.backToPage?"返回进入":"引导进入"},{cid:this.pageCustomData.signCid}),this.setData({loading:!0});var u=(0,i.getOrigin)(n.default._envRuntime)+"/paycustomer/sign/nopass/lanchWxNopass";(0,e.default)(u,(0,a.default)({},n.default._commonParams,n.default._staticData,{mtPlanId:this.getMtPlanId(),subAppId:this.data.subAppId,wxScene:2,riskParams:this.data.riskParams,entry:n.default._utmSource})).then((function(a){if(a.outContractCode)t.setData({signed:!0,loading:!1,autoSign:!1});else{if(!a.signMpAppId||!a.signMpPath)return wx.showToast({title:"网络异常，请稍后重试",icon:"none",duration:2e3}),t.setData({loading:!1}),void(0,o.reportDetailJsError)("[免密支付独立签约]签约小程序字段下发异常",a);t.setData({outRequestNo:a.outRequestNo,loading:!1}),1!==wx.getStorageSync("processInterruption")&&wx.navigateToMiniProgram({appId:a.signMpAppId,path:a.signMpPath,extraData:{pre_entrustweb_id:a.signUrl,business_type:1},success:function(){t.setData({buttonClicked:!0})}})}})).catch((function(a){t.setData({loading:!1,autoSign:!1}),(0,r.handleCommonError)(a)}))}},goClose:function(){var t=this;(0,s.moduleClick)("b_pay_a4ri0kkt_mc",{},{cid:this.pageCustomData.signedCid});var o=(0,i.getOrigin)(this.data.runtime||"production")+"/paycustomer/sign/nopass/closeWxNopass";(0,s.moduleView)("b_pay_ba1523sz_mv",{},{cid:this.pageCustomData.signedCid}),wx.showModal({title:"确定要关闭服务吗？",content:"免密支付安全有保障，下单更便捷",showCancel:!0,confirmText:"确认关闭",confirmColor:"#191919",cancelText:"再想想",success:function(i){i.confirm&&((0,s.moduleClick)("b_pay_tpptl0fg_mc",{button_name:"确认关闭"},{cid:t.pageCustomData.signedCid}),(0,e.default)(o,(0,a.default)({},n.default.commonParams,n.default.staticData,{iphPayMerchantNo:"42211241703616473",riskParams:t.data.riskParams,mtPlanId:t.getMtPlanId()})).then((function(a){if(null==a||!a.result)throw new Error("关闭失败,，请稍后重试");wx.showToast({title:"关闭成功",icon:"none",duration:2e3,complete:function(){setTimeout((function(){t.getSignStatus()}),2e3)}})})).catch((function(t){(0,r.handleCommonError)(t)}))),i.cancel&&(0,s.moduleClick)("b_pay_tpptl0fg_mc",{button_name:"再想想"},{cid:t.pageCustomData.signedCid})}})},getMtPlanId:function(){var t="";switch(this.data.runtime){case"test":t="112573";break;case"staging":t="10120";break;default:t="10123"}return t},pollingQuery:function(){var t=this;wx.showLoading({title:"签约结果查询中",mask:!0}),(0,s.moduleView)("b_pay_ux0w0tw3_mv",{source_type:"返回进入",status:"查询中"},{cid:this.pageCustomData.signCid}),this.setData({pollingCount:this.data.pollingCount-1}),this.querySignStatusFromWx();var a=setInterval((function(){t.data.pollingCount<1||(t.setData({pollingCount:t.data.pollingCount-1}),t.data.querySignLoaded&&t.querySignStatusFromWx())}),500);this.setData({timer:a})},querySignStatusFromWx:function(){var t=this,s=(0,i.getOrigin)(n.default._envRuntime)+"/paycustomer/sign/nopass/querySignStatusFromWx";this.setData({querySignLoaded:!1}),(0,e.default)(s,(0,a.default)({},n.default._commonParams,n.default._staticData,{outRequestNo:this.data.outRequestNo,wxScene:2,riskParams:this.data.riskParams}),!1).then((function(a){1===a.status&&(t.setData({signed:!0}),"storage"===t.data.getResultWay&&(wx.setStorageSync("passwordFreeSignSuccess",1),t.quit()),t.clearInterval()),t.setData({querySignLoaded:!0}),t.data.pollingCount<1&&t.clearInterval()})).catch((function(a){t.setData({querySignLoaded:!0}),t.data.pollingCount<1&&t.clearInterval(),(0,o.reportDetailJsError)("签约结果轮询失败",{error:a})}))},clearInterval:function(t){function a(){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(){this.data.buttonClicked&&(0,s.pageView)(this.data.signed?this.pageCustomData.signedCid:this.pageCustomData.signCid,{source_type:"返回进入"}),clearInterval(this.data.timer),wx.hideLoading(),this.setData({pollingCount:6,timer:null,buttonClicked:!1}),this.data.signed||(wx.showToast({title:"未查到签约记录，您可尝试重新开通",icon:"none",duration:2e3}),(0,s.moduleView)("b_pay_ux0w0tw3_mv",{source_type:"返回进入",status:"无结果"},{cid:this.pageCustomData.signCid}),"storage"===this.data.getResultWay&&this.quit())})),retry:function(){this.getSignStatus()},quit:function(){wx.navigateBack({delta:1})}});
},{isPage:true,isComponent:true,currentFile:'packages/finance-pay/pages/sign/index.js'});require("packages/finance-pay/pages/sign/index.js");