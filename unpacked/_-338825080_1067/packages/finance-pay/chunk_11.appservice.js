"b_pay_5hiiyeev_mc",{source_type:this.data.backToPage?"返回进入":"引导进入"},{cid:this.pageCustomData.signCid}),this.setData({loading:!0});var u=(0,i.getOrigin)(n.default._envRuntime)+"/paycustomer/sign/nopass/lanchWxNopass";(0,e.default)(u,(0,a.default)({},n.default._commonParams,n.default._staticData,{mtPlanId:this.getMtPlanId(),subAppId:this.data.subAppId,wxScene:2,riskParams:this.data.riskParams,entry:n.default._utmSource})).then((function(a){if(a.outContractCode)t.setData({signed:!0,loading:!1,autoSign:!1});else{if(!a.signMpAppId||!a.signMpPath)return wx.showToast({title:"网络异常，请稍后重试",icon:"none",duration:2e3}),t.setData({loading:!1}),void(0,o.reportDetailJsError)("[免密支付独立签约]签约小程序字段下发异常",a);t.setData({outRequestNo:a.outRequestNo,loading:!1}),1!==wx.getStorageSync("processInterruption")&&wx.navigateToMiniProgram({appId:a.signMpAppId,path:a.signMpPath,extraData:{pre_entrustweb_id:a.signUrl,business_type:1},success:function(){t.setData({buttonClicked:!0})}})}})).catch((function(a){t.setData({loading:!1,autoSign:!1}),(0,r.handleCommonError)(a)}))}},goClose:function(){var t=this;(0,s.moduleClick)("b_pay_a4ri0kkt_mc",{},{cid:this.pageCustomData.signedCid});var o=(0,i.getOrigin)(this.data.runtime||"production")+"/paycustomer/sign/nopass/closeWxNopass";(0,s.moduleView)("b_pay_ba1523sz_mv",{},{cid:this.pageCustomData.signedCid}),wx.showModal({title:"确定要关闭服务吗？",content:"免密支付安全有保障，下单更便捷",showCancel:!0,confirmText:"确认关闭",confirmColor:"#191919",cancelText:"再想想",success:function(i){i.confirm&&((0,s.moduleClick)("b_pay_tpptl0fg_mc",{button_name:"确认关闭"},{cid:t.pageCustomData.signedCid}),(0,e.default)(o,(0,a.default)({},n.default.commonParams,n.default.staticData,{iphPayMerchantNo:"42211241703616473",riskParams:t.data.riskParams,mtPlanId:t.getMtPlanId()})).then((function(a){if(null==a||!a.result)throw new Error("关闭失败,，请稍后重试");wx.showToast({title:"关闭成功",icon:"none",duration:2e3,complete:function(){setTimeout((function(){t.getSignStatus()}),2e3)}})})).catch((function(t){(0,r.handleCommonError)(t)}))),i.cancel&&(0,s.moduleClick)("b_pay_tpptl0fg_mc",{button_name:"再想想"},{cid:t.pageCustomData.signedCid})}})},getMtPlanId:function(){var t="";switch(this.data.runtime){case"test":t="112573";break;case"staging":t="10120";break;default:t="10123"}return t},pollingQuery:function(){var t=this;wx.showLoading({title:"签约结果查询中",mask:!0}),(0,s.moduleView)("b_pay_ux0w0tw3_mv",{source_type:"返回进入",status:"查询中"},{cid:this.pageCustomData.signCid}),this.setData({pollingCount:this.data.pollingCount-1}),this.querySignStatusFromWx();var a=setInterval((function(){t.data.pollingCount<1||(t.setData({pollingCount:t.data.pollingCount-1}),t.data.querySignLoaded&&t.querySignStatusFromWx())}),500);this.setData({timer:a})},querySignStatusFromWx:function(){var t=this,s=(0,i.getOrigin)(n.default._envRuntime)+"/paycustomer/sign/nopass/querySignStatusFromWx";this.setData({querySignLoaded:!1}),(0,e.default)(s,(0,a.default)({},n.default._commonParams,n.default._staticData,{outRequestNo:this.data.outRequestNo,wxScene:2,riskParams:this.data.riskParams}),!1).then((function(a){1===a.status&&(t.setData({signed:!0}),"storage"===t.data.getResultWay&&(wx.setStorageSync("passwordFreeSignSuccess",1),t.quit()),t.clearInterval()),t.setData({querySignLoaded:!0}),t.data.pollingCount<1&&t.clearInterval()})).catch((function(a){t.setData({querySignLoaded:!0}),t.data.pollingCount<1&&t.clearInterval(),(0,o.reportDetailJsError)("签约结果轮询失败",{error:a})}))},clearInterval:function(t){function a(){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(){this.data.buttonClicked&&(0,s.pageView)(this.data.signed?this.pageCustomData.signedCid:this.pageCustomData.signCid,{source_type:"返回进入"}),clearInterval(this.data.timer),wx.hideLoading(),this.setData({pollingCount:6,timer:null,buttonClicked:!1}),this.data.signed||(wx.showToast({title:"未查到签约记录，您可尝试重新开通",icon:"none",duration:2e3}),(0,s.moduleView)("b_pay_ux0w0tw3_mv",{source_type:"返回进入",status:"无结果"},{cid:this.pageCustomData.signCid}),"storage"===this.data.getResultWay&&this.quit())})),retry:function(){this.getSignStatus()},quit:function(){wx.navigateBack({delta:1})}});
},{isPage:true,isComponent:true,currentFile:'packages/finance-pay/pages/sign/index.js'});require("packages/finance-pay/pages/sign/index.js");$gwx42_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx42_XC_1 || [];
function gz$gwx42_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_1
}
function gz$gwx42_XC_1_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_2)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_2
__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[6],[[7],[3,'popData']],[3,'sub_title']],[[6],[[7],[3,'popData']],[3,'detail']]])
Z([[6],[[7],[3,'popData']],[3,'img']])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_2);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_2
}
function gz$gwx42_XC_1_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_3)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_3
__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'popData']],[3,'cancel_btn_text']])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_3);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_3
}
function gz$gwx42_XC_1_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_4)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_4
__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'flex-align item-bank-info'])
Z([[6],[[7],[3,'transInfo']],[3,'showChangeText']])
Z([[6],[[7],[3,'transInfo']],[3,'showArrow']])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_4);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_4
}
function gz$gwx42_XC_1_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_5)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_5
__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'inputLength']])
Z([3,'index'])
Z([[2,'>='],[[6],[[7],[3,'password']],[3,'length']],[[2,'+'],[[7],[3,'index']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_5);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_5
}
function gz$gwx42_XC_1_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_6)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_6
__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'crp-container'])
Z([[6],[[7],[3,'popupData']],[3,'icon']])
Z([[2,'==='],[[6],[[7],[3,'buttonList']],[3,'length']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_6);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_6
}
__WXML_GLOBAL__.ops_set.$gwx42_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx42_XC_1=true;
var x=['./packages/finance-pay/components/keyboard/index.wxml','./packages/finance-pay/components/nopass-check-popup/index.wxml','./packages/finance-pay/components/nopass-sign-popup/index.wxml','./packages/finance-pay/components/pass-mt-pay/index.wxml','./packages/finance-pay/components/password-input/index.wxml','./packages/finance-pay/components/risk-popup/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx42_XC_1_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx42_XC_1_2()
var hG=_v()
_(r,hG)
if(_oz(z,0,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(r,oH)
if(_oz(z,1,e,s,gg)){oH.wxVkey=1
}
hG.wxXCkey=1
oH.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx42_XC_1_3()
var oJ=_v()
_(r,oJ)
if(_oz(z,0,e,s,gg)){oJ.wxVkey=1
}
oJ.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx42_XC_1_4()
var aL=_n('view')
_rz(z,aL,'class',0,e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,1,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,2,e,s,gg)){eN.wxVkey=1
}
tM.wxXCkey=1
eN.wxXCkey=1
_(r,aL)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx42_XC_1_5()
var oP=_v()
_(r,oP)
var xQ=function(fS,oR,cT,gg){
var oV=_v()
_(cT,oV)
if(_oz(z,2,fS,oR,gg)){oV.wxVkey=1
}
oV.wxXCkey=1
return cT
}
oP.wxXCkey=2
_2z(z,0,xQ,e,s,gg,oP,'item','index','index')
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx42_XC_1_6()
var oX=_n('view')
_rz(z,oX,'class',0,e,s,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,1,e,s,gg)){lY.wxVkey=1
}
var aZ=_v()
_(oX,aZ)
if(_oz(z,2,e,s,gg)){aZ.wxVkey=1
}
lY.wxXCkey=1
aZ.wxXCkey=1
_(r,oX)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx42_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx42_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/components/keyboard/index.wxml'] = [$gwx42_XC_1, './packages/finance-pay/components/keyboard/index.wxml'];else __wxAppCode__['packages/finance-pay/components/keyboard/index.wxml'] = $gwx42_XC_1( './packages/finance-pay/components/keyboard/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/components/nopass-check-popup/index.wxml'] = [$gwx42_XC_1, './packages/finance-pay/components/nopass-check-popup/index.wxml'];else __wxAppCode__['packages/finance-pay/components/nopass-check-popup/index.wxml'] = $gwx42_XC_1( './packages/finance-pay/components/nopass-check-popup/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/components/nopass-sign-popup/index.wxml'] = [$gwx42_XC_1, './packages/finance-pay/components/nopass-sign-popup/index.wxml'];else __wxAppCode__['packages/finance-pay/components/nopass-sign-popup/index.wxml'] = $gwx42_XC_1( './packages/finance-pay/components/nopass-sign-popup/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/components/pass-mt-pay/index.wxml'] = [$gwx42_XC_1, './packages/finance-pay/components/pass-mt-pay/index.wxml'];else __wxAppCode__['packages/finance-pay/components/pass-mt-pay/index.wxml'] = $gwx42_XC_1( './packages/finance-pay/components/pass-mt-pay/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/components/password-input/