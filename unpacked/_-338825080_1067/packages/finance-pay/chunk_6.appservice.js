ckages/finance-pay/pages/cashier/components/cashier-order-fee/index.wxml','./packages/finance-pay/pages/cashier/components/ecny-pay-type/index.wxml','./packages/finance-pay/pages/cashier/components/ecny-wallet/index.wxml','./packages/finance-pay/pages/cashier/components/pass-verify/index.wxml','./packages/finance-pay/pages/cashier/components/pay-order-info/index.wxml','./packages/finance-pay/pages/cashier/components/suspend-menu/index.wxml','./packages/finance-pay/pages/cashier/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx42_XC_3_1()
var b3=_n('view')
_rz(z,b3,'class',0,e,s,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,1,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(b3,x5)
if(_oz(z,2,e,s,gg)){x5.wxVkey=1
var o6=_n('suspend-menu')
_rz(z,o6,'title',3,e,s,gg)
var f7=_n('pay-order-info')
_rz(z,f7,'orderInfo',4,e,s,gg)
_(o6,f7)
_(x5,o6)
}
o4.wxXCkey=1
x5.wxXCkey=1
x5.wxXCkey=3
_(r,b3)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx42_XC_3_2()
var h9=_n('view')
_rz(z,h9,'class',0,e,s,gg)
var cAB=_n('view')
_rz(z,cAB,'class',1,e,s,gg)
var lCB=_mz(z,'pay-type-cell',['customClass',2,'payInfo',1],[],e,s,gg)
_(cAB,lCB)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,4,e,s,gg)){oBB.wxVkey=1
}
oBB.wxXCkey=1
_(h9,cAB)
var o0=_v()
_(h9,o0)
if(_oz(z,5,e,s,gg)){o0.wxVkey=1
var aDB=_v()
_(o0,aDB)
var tEB=function(bGB,eFB,oHB,gg){
var oJB=_mz(z,'view',['bindtap',10,'class',1,'data-index',2],[],bGB,eFB,gg)
var fKB=_mz(z,'pay-type-cell',['customClass',13,'needLine',1,'payInfo',2],[],bGB,eFB,gg)
_(oJB,fKB)
_(oHB,oJB)
return oHB
}
aDB.wxXCkey=4
_2z(z,8,tEB,e,s,gg,aDB,'bank','bankIndex','bankIndex')
}
o0.wxXCkey=1
o0.wxXCkey=3
_(r,h9)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx42_XC_3_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx42_XC_3_4()
var oNB=_n('view')
var cOB=_n('view')
_rz(z,cOB,'class',0,e,s,gg)
var oPB=_v()
_(cOB,oPB)
if(_oz(z,1,e,s,gg)){oPB.wxVkey=1
}
var eTB=_mz(z,'pass-mt-pay',['bindtap',2,'transInfo',1],[],e,s,gg)
_(cOB,eTB)
var lQB=_v()
_(cOB,lQB)
if(_oz(z,4,e,s,gg)){lQB.wxVkey=1
}
var aRB=_v()
_(cOB,aRB)
if(_oz(z,5,e,s,gg)){aRB.wxVkey=1
var bUB=_n('view')
_rz(z,bUB,'catchtap',6,e,s,gg)
var oVB=_mz(z,'password-input',['inputLength',7,'password',1],[],e,s,gg)
_(bUB,oVB)
_(aRB,bUB)
}
var tSB=_v()
_(cOB,tSB)
if(_oz(z,9,e,s,gg)){tSB.wxVkey=1
}
oPB.wxXCkey=1
lQB.wxXCkey=1
aRB.wxXCkey=1
aRB.wxXCkey=3
tSB.wxXCkey=1
_(oNB,cOB)
var xWB=_mz(z,'keyboard',['bind:keyboardTap',10,'inputFocus',1,'transformKeyboard',2],[],e,s,gg)
_(oNB,xWB)
_(r,oNB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx42_XC_3_5()
var fYB=_v()
_(r,fYB)
var cZB=function(o2B,h1B,c3B,gg){
var l5B=_v()
_(c3B,l5B)
var a6B=function(e8B,t7B,b9B,gg){
var xAC=_v()
_(b9B,xAC)
if(_oz(z,5,e8B,t7B,gg)){xAC.wxVkey=1
}
xAC.wxXCkey=1
return b9B
}
l5B.wxXCkey=2
_2z(z,3,a6B,o2B,h1B,gg,l5B,'item','index','content-{{index}}')
return c3B
}
fYB.wxXCkey=2
_2z(z,1,cZB,e,s,gg,fYB,'block','index','block-{{index}}')
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx42_XC_3_6()
var fCC=_n('view')
_rz(z,fCC,'class',0,e,s,gg)
var cDC=_v()
_(fCC,cDC)
if(_oz(z,1,e,s,gg)){cDC.wxVkey=1
}
var hEC=_n('slot')
_(fCC,hEC)
cDC.wxXCkey=1
_(r,fCC)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx42_XC_3_7()
var cGC=_n('view')
_rz(z,cGC,'id',0,e,s,gg)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,1,e,s,gg)){oHC.wxVkey=1
var aJC=_n('view')
_rz(z,aJC,'class',2,e,s,gg)
var xOC=_mz(z,'cashier-order-fee',['alreadySucceed',3,'bind:updateresult',1,'orderData',2],[],e,s,gg)
_(aJC,xOC)
var oPC=_n('view')
_rz(z,oPC,'class',6,e,s,gg)
var fQC=_v()
_(oPC,fQC)
if(_oz(z,7,e,s,gg)){fQC.wxVkey=1
var cUC=_mz(z,'pay-type',['bind:selectPayTypeFun',8,'payInfo',1,'selected',2],[],e,s,gg)
_(fQC,cUC)
}
var oVC=_mz(z,'pay-type',['bind:degradeAction',11,'bind:selectPayTypeFun',1,'payInfo',2,'selected',3],[],e,s,gg)
_(oPC,oVC)
var cRC=_v()
_(oPC,cRC)
if(_oz(z,15,e,s,gg)){cRC.wxVkey=1
var lWC=_mz(z,'ecny-pay-type',['bind:changeBankListFun',16,'payInfo',1,'selected',2,'selectedBankIndex',3],[],e,s,gg)
_(cRC,lWC)
}
var hSC=_v()
_(oPC,hSC)
if(_oz(z,20,e,s,gg)){hSC.wxVkey=1
var aXC=_mz(z,'pay-type',['bind:selectPayTypeFun',21,'payInfo',1,'selected',2],[],e,s,gg)
_(hSC,aXC)
}
var oTC=_v()
_(oPC,oTC)
if(_oz(z,24,e,s,gg)){oTC.wxVkey=1
var tYC=_mz(z,'pay-type',['bind:selectPayTypeFun',25,'payInfo',1,'selected',2],[],e,s,gg)
_(oTC,tYC)
}
fQC.wxXCkey=1
fQC.wxXCkey=3
cRC.wxXCkey=1
cRC.wxXCkey=3
hSC.wxXCkey=1
hSC.wxXCkey=3
oTC.wxXCkey=1
oTC.wxXCkey=3
_(aJC,oPC)
var tKC=_v()
_(aJC,tKC)
if(_oz(z,28,e,s,gg)){tKC.wxVkey=1
var eZC=_n('view')
_rz(z,eZC,'class',29,e,s,gg)
var b1C=_v()
_(eZC,b1C)
if(_oz(z,30,e,s,gg)){b1C.wxVkey=1
var x3C=_mz(z,'ecny-wallet',['bind:closeECNYWallet',31,'bind:setECNYOrderInfo',1,'bind:setSelectedBank',2,'bind:showPassVerify',3,'ecnyWalletInfo',4,'originalFee',5,'selectedBankIndex',6,'showECNYWallet',7],[],e,s,gg)
_(b1C,x3C)
}
var o2C=_v()
_(eZC,o2C)
if(_oz(z,39,e,s,gg)){o2C.wxVkey=1
var o4C=_mz(z,'pass-verify',['bankLength',40,'bind:closePassVerify',1,'bind:showECNYWallet',2,'ecnyOrderInfo',3,'finalFee',4,'originalFee',5,'selectedBank',6,'selectedPayType',7],[],e,s,gg)
_(o2C,o4C)
}
b1C.wxXCkey=1
b1C.wxXCkey=3
o2C.wxXCkey=1
o2C.wxXCkey=3
_(tKC,eZC)
}
var eLC=_v()
_(aJC,eLC)
if(_oz(z,48,e,s,gg)){eLC.wxVkey=1
var f5C=_n('view')
_rz(z,f5C,'class',49,e,s,gg)
var c6C=_v()
_(f5C,c6C)
if(_oz(z,50,e,s,gg)){c6C.wxVkey=1
}
var h7C=_v()
_(f5C,h7C)
if(_oz(z,51,e,s,gg)){h7C.wxVkey=1
}
c6C.wxXCkey=1
h7C.wxXCkey=1
_(eLC,f5C)
}
else{eLC.wxVkey=2
var o8C=_n('view')
_rz(z,o8C,'class',52,e,s,gg)
var c9C=_v()
_(o8C,c9C)
if(_oz(z,53,e,s,gg)){c9C.wxVkey=1
}
var o0C=_v()
_(o8C,o0C)
if(_oz(z,54,e,s,gg)){o0C.wxVkey=1
}
c9C.wxXCkey=1
o0C.wxXCkey=1
_(eLC,o8C)
}
var bMC=_v()
_(aJC,bMC)
if(_oz(z,55,e,s,gg)){bMC.wxVkey=1
var lAD=_n('half-drawer')
_rz(z,lAD,'needCloseBtn',56,e,s,gg)
var aBD=_v()
_(lAD,aBD)
if(_oz(z,57,e,s,gg)){aBD.wxVkey=1
var eDD=_mz(z,'nopass-check-popup',['bind:lBtnClick',58,'bind:rBtnClick',1,'popData',2],[],e,s,gg)
_(aBD,eDD)
}
var tCD=_v()
_(lAD,tCD)
if(_oz(z,61,e,s,gg)){tCD.wxVkey=1
var bED=_mz(z,'nopass-sign-popup',['bind:cancelAndPay',62,'bind:clickNoPassSignBtnCallback',1,'bind:hidePopup',2,'popData',3],[],e,s,gg)
_(tCD,bED)
}
aBD.wxXCkey=1
aBD.wxXCkey=3
tCD.wxXCkey=1
tCD.wxXCkey=3
_(bMC,lAD)
}
var oNC=_v()
_(aJC,oNC)
if(_oz(z,66,e,s,gg)){oNC.wxVkey=1
var oFD=_mz(z,'risk-popup',['payOrderNo',67,'popupData',1,'selectedPayType',2],[],e,s,gg)
_(oNC,oFD)
}
tKC.wxXCkey=1
tKC.wxXCkey=3
eLC.wxXCkey=1
bMC.wxXCkey=1
bMC.wxXCkey=3
oNC.wxXCkey=1
oNC.wxXCkey=3
_(oHC,aJC)
}
var lIC=_v()
_(cGC,lIC)
if(_oz(z,70,e,s,gg)){lIC.wxVkey=1
var xGD=_n('view')
var oHD=_v()
_(xGD,oHD)
if(_oz(z,71,e,s,gg)){oHD.wxVkey=1
}
var fID=_v()
_(xGD,fID)
if(_oz(z,72,e,s,gg)){fID.wxVkey=1
}
oHD.wxXCkey=1
fID.wxXCkey=1
_(lIC,xGD)
}
oHC.wxXCkey=1
oHC.wxXCkey=3
lIC.wxXCkey=1
_(r,cGC)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx42_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx42_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/components/cashier-order-fee/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/components/cashier-order-fee/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/components/cashier-order-fee/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/components/cashier-order-fee/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/components/ecny-pay-type/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/components/ecny-pay-type/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/components/ecny-pay-type/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/components/ecny-pay-type/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/components/ecny-wallet/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/components/ecny-wallet/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/components/ecny-wallet/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/components/ecny-wallet/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/components/pass-verify/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/components/pass-verify/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/components/pass-verify/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/components/pass-verify/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/components/pay-order-info/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/components/pay-order-info/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/components/pay-order-info/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/components/pay-order-info/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/components/suspend-menu/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/components/suspend-menu/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/components/suspend-menu/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/components/suspend-menu/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/index.wxml' );
	;__wxRoute = "packages/finance-pay/pages/cashier/components/cashier-order-fee/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/finance-pay/pages/cashier/components/cashier-order-fee/index.js";define("packages/finance-pay/pages/cashier/components/cashier-order-fee/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=require("../../../../../../npm/babel/runtime7_2_0/helpers/interopRequireDefault"),o=t(require("../../../../common/mitt")),r=require("../../../../common/util"),s=t(require("../../../../action/countdown")),a=require("../../../../business/common-callback"),i=require("../../../../common/monitor"),n=require("../../../../common/constants");require("../../../../../../npm/wmfe/replace-component0_0_2/index").imgComponent({properties:{orderData:{type:Object,observer:"getOrderData"},alreadySucceed:{type:Boolean,value:!1}},data:{timeout:!1,clock:"00:00:00",orderTitleArrow:!1,orderInfo:{},showOrderInfoSuspend:!1,shouldShowModal:!0,finalFee:"",total_fee:""},pageLifetimes:{show:function(){this.setData({shouldShowModal:!0})},hide:function(){this.setData({shouldShowModal:!1})}},attached:function(){this.onHideListener(),this.onOrderSuccessListener()},detached:function(){o.default.off(n.EventType.OnHideEvent),o.default.off(n.EventType.OnOrderSuccess),e&&(e.clearTimer(),e=null)},methods:{getOrderData:function(){var t=this.properties.orderData.order_info;this.setData({finalFee:Number.parseFloat(this.properties.orderData.final_fee||0).toFixed(2),totalFee:Number.parseFloat(this.properties.orderData.total_fee).toFixed(2)}),(0,r.isValidObject)(t)&&this.setData({orderInfo:t,orderTitleArrow:!0});var o=this.properties.orderData,a=o.current_time,i=void 0===a?0:a,n=o.expire_time,u=void 0===n?0:n;u&&!e&&(e=new s.default(i,u,this.countDownTimeout.bind(this),this.onCountDown.bind(this)))},showOrderInfoModal:function(){this.data.orderTitleArrow&&this.setData({showOrderInfoSuspend:!0})},countDownTimeout:function(){var e=this;this.setData({timeout:!0}),this.data.shouldShowModal&&(wx.showModal({title:"支付超时",content:"订单已取消，请重新下单",showCancel:!1,confirmText:"知道了",confirmColor:"#222222",success:function(t){t.confirm&&(e.resetResultStorageSync(),(0,a.backMiniprogram)())}}),this.triggerEvent("updateresult",{payResultStatus:n.PayResult.Fail,resultSouceType:n.PayTypeForBusiness.Wxpay,errorMessage:{message:"支付超时, 订单已取消，请重新下单（前端）"}}),(0,i.reportDetailJsError)("收银台支付超时",{data:"支付超时"}))},onCountDown:function(e){this.setData({clock:e})},onOrderSuccessListener:function(){var e=this;o.default.on(n.EventType.OnOrderSuccess,(function(){e.setData({shouldShowModal:!1})}))},onHideListener:function(){var e=this;o.default.on(n.EventType.OnHideEvent,(function(){e.setData({showOrderInfoSuspend:!1})}))},resetResultStorageSync:function(){this.properties.alreadySucceed?this.triggerEvent("updateresult",{payResultStatus:n.PayResult.Success,resultSouceType:n.PayTypeForBusiness.Wxpay}):this.triggerEvent("updateresult",{payResultStatus:n.PayResult.Fail,resultSouceType:n.PayTypeForBusiness.Mtpay,errorMessage:{message:"支付超时, 订单已取消，请重新下单（前端）"}})}}});
},{isPage:false,isComponent:true,currentFile:'packages/finance-pay/pages/cashier/components/cashier-order-fee/index.js'});require("packages/finance-pay/pages/cashier/components/cashier-order-fee/index.js");;__wxRoute = "packages/finance-pay/pages/cashier/components/ecny-pay-type/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/finance-pay/pages/cashier/components/ecny-pay-type/index.js";define("packages/finance-pay/pages/cashier/components/ecny-pay-type/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../common/monitor"),t=require("../../../../common/constants");require("../../../../../../npm/wmfe/replace-component0_0_2/index").imgComponent({properties:{banklist:{type:Array},selectedBankIndex:{type:Number},payInfo:{type:Object,observer:"getECNYPayInfo"},selected:{type:Boolean}},data:{ecnyPayInfo:{},isUnusableStatus:!1},ready:function(){(0,e.reportMetric)("show_ecny_pay")},methods:{getECNYPayInfo:function(){var e=this.properties.payInfo,a=e.icon,n=e.name,s=e.exceed_desc,i=e.status_info,y=e.status,o=e.pay_type,r=e.banklist,p=i;y===t.PayTypeStatue.ExceedLimit&&(p=s);var c=!1,u=a.enable;y!==t.PayTypeStatue.Weak&&y!==t.PayTypeStatue.ExceedLimit||(u=a.disable,c=!0),this.setUnstableStatus(c),this.setData({ecnyPayInfo:{name:n,iconUrl:u,payInfoDesc:p,payType:o,banklist:r}})},setUnstableStatus:function(e){this.setData({isUnusableStatus:e})},selectPayTypeFun:function(e){this.data.isUnusableStatus||this.triggerEvent("changeBankListFun",{payType:this.data.ecnyPayInfo.payType,bankIndex:e.currentTarget.dataset.index})}}});
},{isPage:false,isComponent:true,currentFile:'packages/finance-pay/pages/cashier/components/ecny-pay-type/index.js'});require("packages/finance-pay/pages/cashier/components/ecny-pay-type/index.js");;__wxRoute = "packages/finance-pay/pages/cashier/components/ecny-wallet/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/finance-pay/pages/cashier/components/ecny-wallet/index.js";define("packages/finance-pay/pages/cashier/components/ecny-wallet/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../common/util");require("../../../../../../npm/wmfe/replace-component0_0_2/index").imgComponent({properties:{originalFee:{type:Number,value:0},ecnyWalletInfo:{type:Object,value:{}},showECNYWallet:{type:Boolean,value:!1},selectedBankIndex:{type:Number,value:0}},data:{totalFee:0,banklist:[],selectedBank:{},transformWallet:!1},ready:function(){this.setSelectedBank(),this.setFee(),this.setData({transformWallet:this.properties.showECNYWallet})},methods:{submitECNYPay:function(){this.triggerEvent("submitECNYPay")},showPassVerify:function(){this.triggerEvent("showPassVerify")},closeECNYWallet:function(){this.triggerEvent("closeECNYWallet")},getBankIcon:function(t){return void 0===t&&(t={}),t&&1==+t.status?(0,e.getProp)(t,["icon","disable"],""):(0,e.getProp)(t,["icon","enable"],"")},selectBank:function(t){var s=t.currentTarget.dataset.index,n=(0,e.getProp)(this.properties,["ecnyWalletInfo","banklist"],[]);this.setData({selectedBank:n[s]}),this.setFee(),this.closeECNYWallet(),this.triggerEvent("setSelectedBank",{selectedBankIndex:s,selectedBank:this.data.selectedBank})},setSelectedBank:function(){var t=(0,e.getProp)(this.properties,["ecnyWalletInfo","banklist"],[]);this.setData({selectedBank:t[this.properties.selectedBankIndex]})},setFee:function(){var t,s=(0,e.getProp)(this.properties,["ecnyWalletInfo","banklist"],[]),n=(0,e.getProp)(this.data,["selectedBank","discounts","no_balance","reduce"],0),a=this.properties.originalFee||0;t=a-n>0?(a-n).toFixed(2):0,this.setData({banklist:s,totalFee:t}),this.triggerEvent("setECNYOrderInfo",{ecnyOrderInfo:{totalFee:t}})}}});
},{isPage:false,isComponent:true,currentFile:'packages/finance-pay/pages/cashier/components/ecny-wallet/index.js'});require("packages/finance-pay/pages/cashier/components/ecny-wallet/index.js");;__wxRoute = "packages/finance-pay/pages/cashier/components/pass-verify/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/finance-pay/pages/cashier/components/pass-verify/index.js";define("packages/finance-pay/pages/cashier/components/pass-verify/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../../../npm/babel/runtime7_2_0/helpers/interopRequireDefault"),t=e(require("../../../../../../npm/babel/runtime7_2_0/helpers/extends")),a=require("../../../../mobx-miniprogram-bindings/index"),s=e(require("../../../../common/env")),r=e(require("../../../../common/cashier-env")),i=require("../../../../common/util"),o=require("../../../../common/constants"),n=require("../../../../common/monitor"),c=require("../../../../business/common-callback"),d=require("../../../../store/standard-cashier"),l=e(require("../../../../common/mitt")),u=[];require("../../../../../../npm/wmfe/replace-component0_0_2/index").imgComponent({behaviors:[a.storeBindingsBehavior],storeBindings:{store:d.store,fields:{cashdeskInfo:"cashdeskInfo",transInfo:"transInfo",showPassVerify:"showPassVerify"},actions:[]},properties:{bankLength:{type:Number,value:0},selectedPayType:{type:String,value:""},originalFee:{type:Number,value:{}},finalFee:{type:Number,value:{}},ecnyOrderInfo:{type:Object,value:{}},selectedBank:{type:Object,value:{}},inputLength:{type:Number,value:6}},data:{showErrorTip:!1,errorMessage:"",inputFocus:!0,password:"",transformModal:!1,transformKeyboard:!1,showFinalFee:0,passMtPayInfo:{}},observers:{"selectedPayType, transInfo, selectedBank":function(e,a,s){if(e&&a){var r={};if(e===o.PayType.EcnyPay){var i,n,c;if(!s)return;r=(0,t.default)({},this.properties.selectedBank,{display_name:""+((null===(i=this.properties.selectedBank)||void 0===i?void 0:i.name)||"")+((null===(n=this.properties.selectedBank)||void 0===n||null===(c=n.card_info)||void 0===c?void 0:c.name_ext)||""),showArrow:this.properties.bankLength>1})}else r=a;this.setData({passMtPayInfo:r})}}},attached:function(){var e=this,t=0;d.store.cashier.selectedPayType===o.PayType.EcnyPay?t=this.properties.ecnyOrderInfo.totalFee:d.store.cashier.selectedPayType!==o.PayType.CreditPay&&d.store.cashier.selectedPayType!==o.PayType.RemittancePay||(t=this.properties.finalFee);var a=Number.parseFloat(t||0).toFixed(2),s=Number.parseFloat(this.properties.originalFee||0).toFixed(2);this.setData({showFinalFee:a,showOriginalFee:s,showCompareFee:Number(s||0)>Number(a||0)}),l.default.off("close-verify-modal"),l.default.on("close-verify-modal",(function(){e.closePassVerify()}))},ready:function(){this.setData({transformKeyboard:this.data.showPassVerify,transformModal:this.data.showPassVerify})},methods:{closePassVerify:function(){var e=this;this.setData({transformKeyboard:!1}),setTimeout((function(){e.triggerEvent("closePassVerify"),u=[]}),120)},getBankIcon:function(e){return void 0===e&&(e={}),e&&1==+e.status?(0,i.getProp)(e,["icon","disable"],""):(0,i.getProp)(e,["icon","enable"],"")},findPassword:function(){this.hideError();var e=(0,t.default)({close_miniprogram_webview:1,riskScene:o.FindPasswordParams.RiskScene,scene:o.FindPasswordParams.Scene},s.default._commonParams,s.default._staticData);delete e.nb_fingerprint;var a=(0,i.getOrigin)(s.default._envRuntime)+"/resource/iwallet/verify.html?"+(0,i.stringify)(e),r=(s.default._rootPath||"")+"/finance-pay/pages/h5/index?f_token=1&weburl="+encodeURIComponent(a);wx.navigateTo({url:r})},showECNYWallet:function(){d.store.cashier.selectedPayType===o.PayType.EcnyPay&&this.triggerEvent("showECNYWallet")},formSubmit:function(){var e=this,t=d.store.cashier.selectedPayType,a=this.data.cashdeskInfo;if(t===o.PayType.CreditPay||t===o.PayType.RemittancePay){var s=a.submit_url,r={verify_type:a.verify_type};this.data.password&&(r.pay_password=this.data.password),d.store.mtPay.startPay(s,r,(function(){e.closePassVerify()}),(function(t){e.verifyFailed(t)}))}else if(t===o.PayType.EcnyPay){var i={pay_password:this.data.password};d.store.thirdPay.ecnyPay(i,(function(){e.verifySuccess()}),(function(t){e.verifyFailed(t,!0)}))}else(0,n.reportDetailJsError)("[异常流程节点]未知支付方式弹密码验证弹窗")},verifySuccess:function(){this.closePassVerify()},verifyFailed:function(e,t){this.clearPassword(),+e.level===c.CommonErrorLevel.INLINE?this.showError(e.message):118013==+e.code||965001==+e.code?this.showError("密码错误次数过多，请找回密码后重试"):120051==+e.code?this.setPassword():t?(this.hideError(),wx.showToast({title:e.message||"服务器忙，请稍后再试",icon:"none",duration:2e3})):this.closePassVerify()},setPassword:function(){wx.showModal({title:"提示",content:"为了您的账户安全，请设置美团支付密码（非微信支付密码）",confirmText:"去设置",showCancel:!0,success:function(e){if(e.confirm){var a=(0,t.default)({scene:o.FindPasswordParams.Scene,verifyNo:o.VerifyParams.VerifyNo,partnerId:o.VerifyParams.Partnerid,close_miniprogram_webview:1,closeWebview:1,nb_nav_back:1,merchantNo:"",tradeno:r.default._inpayBasicBusinessParams.tradeno},s.default._commonParams,s.default._staticData);delete a.nb_fingerprint;var n=(0,i.getOrigin)(s.default._envRuntime)+"/resource/pass-verify/setting.html?"+(0,i.stringify)(a),c=(s.default._rootPath||"")+"/finance-pay/pages/h5/index?f_token=1&weburl="+encodeURIComponent(n);wx.navigateTo({url:c})}}})},showError:function(e){this.setData({errorMessage:e||"",showErrorTip:!0})},hideError:function(){this.setData({errorMessage:"",showErrorTip:!1})},keyboardTap:function(e){var t=e.detail.target.dataset.value;switch(t){case"delete":u.pop(),this.setData({password:u.join("")}),this.triggerEvent("delete");break;case"cancle":this.triggerEvent("cancle"),u=[],this.setData({password:""});break;case"submit":if(""===this.data.password)return wx.showToast({title:"数据为空"}),!0;this.triggerEvent("submit",this.data.password),u=[],this.setData({password:""});break;default:u.push(t);var a=u.join("").replace(/^\./g,"").replace(".","#").replace(/\./g,"").replace("#",".").replace("X","*").replace(/\X/g,"").replace("*","x");this.setData({password:a}),a.length>=this.data.inputLength&&(this.setData({password:this.data.password.substr(0,this.data.inputLength)}),a.length===this.data.inputLength&&this.inputComplete())}},showKeyboard:function(){this.setData({inputFocus:!0})},hideKeyboard:function(){this.setData({inputFocus:!1})},inputComplete:function(){var e=this;setTimeout((function(){wx.showLoading({title:"加载中",mask:!0}),e.clearErrorMessage(),e.formSubmit()}),200)},clearPassword:function(){u=[],this.setData({password:""})},clearErrorMessage:function(){this.setData({errorMessage:""})}}});
},{isPage:false,isComponent:true,currentFile:'packages/finance-pay/pages/cashier/components/pass-verify/index.js'});require("packages/finance-pay/pages/cashier/components/pass-verify/index.js");;__wxRoute = "packages/finance-pay/pages/cashier/components/pay-order-info/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/finance-pay/pages/cashier/components/pay-order-info/index.js";define("packages/finance-pay/pages/cashier/components/pay-order-info/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../../../../npm/wmfe/replace-component0_0_2/index").imgComponent({properties:{orderInfo:{type:Object}}});
},{isPage:false,isComponent:true,currentFile:'packages/finance-pay/pages/cashier/components/pay-order-info/index.js'});require("packages/finance-pay/pages/cashier/components/pay-order-info/index.js");;__wxRoute = "packages/finance-pay/pages/cashier/components/suspend-menu/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/finance-pay/pages/cashier/components/suspend-menu/index.js";define("packages/finance-pay/pages/cashier/components/suspend-menu/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../../../npm/babel/runtime7_2_0/helpers/interopRequireDefault")(require("../../../../common/mitt")),t=require("../../../../common/constants");require("../../../../../../npm/wmfe/replace-component0_0_2/index").imgComponent({properties:{title:{type:String}},methods:{hideSuspend:function(){e.default.emit(t.EventType.OnHideEvent)}}});
},{isPage:false,isComponent:true,currentFile:'packages/finance-pay/pages/cashier/components/suspend-menu/index.js'});require("packages/finance-pay/pages/cashier/components/suspend-menu/index.js");;__wxRoute = "packages/finance-pay/pages/cashier/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/finance-pay/pages/cashier/index.js";define("packages/finance-pay/pages/cashier/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../npm/babel/runtime7_2_0/helpers/interopRequireDefault"),a=e(require("../../../../npm/babel/runtime7_2_0/helpers/extends")),t=require("../../mobx-miniprogram-bindings/index"),r=e(require("../../common/mitt")),s=require("../../common/app-login"),i=require("../../common/cashier-initialize"),o=e(require("../../common/cashier-env")),n=e(require("../../common/env")),c=require("../../common/util"),u=require("../../common/analytics"),l=require("../../store/standard-cashier"),h=require("../../business/common-callback"),y=require("../../common/monitor"),d=require("../../common/constants");Page({data:{PayType:d.PayType},onShow:function(){if(l.store.cashier.hasClickNoPassSign){var e=wx.getStorageSync("passwordFreeSignSuccess");wx.removeStorageSync("passwordFreeSignSuccess");var a=0;e?l.store.cashier.setNoPasswordStatus(!0):(wx.showToast({title:"未查询到开通结果或开通失败，将正常使用验密支付",icon:"none",duration:3e3,mask:!0}),a=3e3),setTimeout((function(){l.store.thirdPay.requestThirdDirectpay()}),a),l.store.cashier.setHasClickNoPassSign(!1)}if(o.default._verifyToken&&(r.default.emit("risk-pay",{verifyToken:o.default._verifyToken}),o.default._setVerifyToken("")),"1"===o.default._verifyResult&&(r.default.emit("risk-pay",{}),o.default._setVerifyResult("2")),this.data.hasJumpRemittancePage){var t,s=o.default.webviewCallBackData;o.default.setWebviewCallBackData({}),"remittancePay"===(null==s?void 0:s.action)&&1===(null==s||null===(t=s.result)||void 0===t?void 0:t.handleClosePage)?(0,h.backMiniprogram)():(this.setHasJumpRemittancePage(!1),this.fetchPageData())}},onLoad:function(e){var a=this;this.storeBindings=(0,t.createStoreBindings)(this,{store:l.store,fields:{popWindowData:function(){return l.store.cashier.popWindowData},selectedPayType:function(){return l.store.cashier.selectedPayType},alreadySucceed:function(){return l.store.cashier.alreadySucceed},showRiskPopup:function(){return l.store.cashier.showRiskPopup},riskVerifyData:function(){return l.store.cashier.riskVerifyData},showBackToApp:function(){return l.store.cashier.showBackToApp},showPage:"showPage",orderData:"orderData",wxPayInfo:"wxPayInfo",showECNYPay:"showECNYPay",ecnyPayInfo:"ecnyPayInfo",selectedBankIndex:"selectedBankIndex",showCreditPay:"showCreditPay",creditPayInfo:"creditPayInfo",showMTPay:"showMTPay",mtPayInfo:"mtPayInfo",showECNYWallet:"showECNYWallet",showPassVerify:"showPassVerify",originTotalFee:"originTotalFee",ecnyWalletInfo:"ecnyWalletInfo",bankLength:"bankLength",ecnyOrderInfo:"ecnyOrderInfo",cashdeskInfo:"cashdeskInfo",transInfo:"transInfo",selectedBank:"selectedBank",launchParams:"launchParams",isQuickpay:"isQuickpay",quickpayError:"quickpayError",quickpayErrorTitle:"quickpayErrorTitle",isLoading:"isLoading",remainSecond:"remainSecond",showSubBtn:"showSubBtn",subBtnText:"subBtnText",mainBtnText:"mainBtnText",remittancePayInfo:"remittancePayInfo",showRemittancePay:"showRemittancePay",hasJumpRemittancePage:"hasJumpRemittancePage",remittancePayOpenedAndNotEnoughFlag:"remittancePayOpenedAndNotEnoughFlag"},actions:["resetStore","fetchPageData","wxOfflineFromAppDirectPay","submitPay","changeBankListFun","setShowPassVerify","setShowECNYWallet","setEcnyOrderInfo","failToShowMTPay","callXhsQuickpay","selectPayTypeFun","submitNormalPay","submitNoPassPay","setHasJumpRemittancePage"]}),l.store.cashier.setPageUnload(!1),l.store.cashier.setCashierType(d.CashierType.StandardCashier);var r=e.fromSDK||"0";if((0,i.cashierInit)(e),(0,y.setOwlCommonParams)({cashierType:d.CashierType.StandardCashier,degrade:n.default._queryUrlParams.degrade||0}),(0,y.reportMetric)(d.MetricPoint.CashierOnloadStart,{fromSDK:r}),(0,u.systemCheck)("b_pay_77f1ad4y_sc",{entry:r}),(0,y.reportMetric)(d.MetricPoint.Start),(0,y.reportPageLoad)(),this.removeResultStorageSync(),n.default._miniProgramType===d.MiniProgramType.Xhs)return this.callXhsQuickpay();n.default._commonParams.userid?this.checkParamsAndStartPay(e):(0,s.userLogin)().then((function(){a.checkParamsAndStartPay(e)})).catch((function(){a.checkParamsAndStartPay(e)}))},onReady:function(){(0,y.reportMetric)(d.MetricPoint.CashierOnReady),(0,u.systemCheck)("b_pay_9vinmi13_sc",{entry:o.default._fromSDK,duration:Date.now()-n.default._speedStartTime})},onUnload:function(){l.store.cashier.setPageUnload(!0),r.default.offNamespace();var e=o.default._payResultInfo,t=e.payResultStatus,s=e.resultSouceType,i=void 0===s?"":s,n=e.errorMessage;t||(t=d.PayResult.Default),(0,h.setResultStorageSync)(t),o.default.setWebviewCallBackData({});var c=Object.keys(o.default._promotion||{}).length>0;if(!l.store.cashier.degradeOtherCashier&&!c){var u=o.default._subscribeMessage,f=(0,a.default)({},n,{resultSouceType:i,cashierType:d.CashierTypeForBusiness.StandardMiniprogramCashier});Object.keys(u).length>0&&(f.subscribeMessage=u),1!==o.default._isInvitePay&&(0,h.callbackSDKPay)(t,f),(0,y.owlDestroy)()}this.resetStore()},checkParamsAndStartPay:function(e){this.checkParams(e),"backToApp"===o.default._merchantQueryParams.callbackType&&n.default._queryUrlParams.pay_type===d.PayType.WxOfflinePay?this.wxOfflineFromAppDirectPay():this.fetchPageData()},triggerCloseECNYWallet:function(){this.setShowECNYWallet(!1)},triggerShowPassVerify:function(){this.setShowPassVerify(!0),this.setShowECNYWallet(!1)},triggerClosePassVerify:function(){this.setShowPassVerify(!1)},triggerSetSelectedBank:function(e){var a=this;this.changeBankListFun({payType:l.store.cashier.selectedPayType,bankIndex:e.detail.selectedBankIndex}),this.setShowECNYWallet(!1),wx.showLoading({title:"加载中"}),setTimeout((function(){wx.hideLoading(),a.triggerShowPassVerify(),l.store.thirdPay.requestThirdDirectpay({sw:2})}),300)},triggerSetECNYOrderInfo:function(e){this.setEcnyOrderInfo(e.detail.ecnyOrderInfo)},triggerShowECNYWallet:function(){(0,c.getProp)(this.data,["ecnyWalletInfo","banklist"],[]).length<2||(this.setShowPassVerify(!1),this.setShowECNYWallet(!0))},degradeAction:function(){this.failToShowMTPay()},checkParams:function(e){["tradeno","pay_token","callback_app_id","from"].forEach((function(a){e[a]||(n.default._envRuntime===d.EnvRuntime.Staging&&wx.showModal({content:"接入参数错误 "+a+" 字段未传",confirmText:"知道了",showCancel:!1}),(0,y.reportDetailJsError)("接入参数错误 "+a+" 未传",{params:e}))}))},removeResultStorageSync:function(){wx.removeStorageSync("FINANCE_PAY_RESULT"),n.default._setWxAppScene(),o.default._setSubscribeMessage(),o.default._setPayResultInfo(),o.default._setPromotion()},triggerSetPayResultInfo:function(e){void 0===e&&(e={}),o.default._setPayResultInfo(e.detail.payResultStatus,e.detail.resultSouceType,e.detail.errorMessage)},noPassPayClick:function(){(0,u.moduleClick)("b_pay_6objva15_mc",{button_name:l.store.cashier.popWindowData.data.confirm_btn_text||"知道了"}),this.hidePopup(),this.submitNoPassPay(),l.store.cashier.actionProcess(d.WxPayVerifyType.NOPASS_PAY)},normalPayClick:function(){(0,u.moduleClick)("b_pay_6objva15_mc",{button_name:l.store.cashier.popWindowData.data.cancel_btn_text||"普通支付"}),this.hidePopup(),this.submitNormalPay(),l.store.cashier.actionProcess(d.WxPayVerifyType.NORMAL_PAY)},clickNoPassSignBtnCallback:function(){this.hidePopup(),l.store.cashier.setHasClickNoPassSign(!0)},cancelAndPay:function(){this.hidePopup(),l.store.thirdPay.requestThirdDirectpay()},hidePopup:function(){l.store.cashier.hidePopWindow()},launchAppError:function(e){(0,y.reportDetailJsError)("backToAppError",e,"error")}});
},{isPage:true,isComponent:true,currentFile:'packages/finance-pay/pages/cashier/index.js'});require("packages/finance-pay/pages/cashier/index.js");__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packages/finance-pay/pages/debug/result':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c=(C)=>{},e=(C,T)=>{C||K||!!Z(U.payResultInfo,"payResultStatus")||undefined?T(Y("支付结果："+Y(X(D.payResultInfo).payResultStatus)),(N)=>{A["payResultInfo"][0]=(D,E,T)=>{T(N,Y("支付结果："+Y(X(D.payResultInfo).payResultStatus)))}}):T()},f=(C,T)=>{C||K||!!Z(U.payResultInfo,"resultSouceType")||undefined?T(Y("支付来源 mt/wx: "+Y(X(D.payResultInfo).resultSouceType)),(N)=>{A["payResultInfo"][1]=(D,E,T)=>{T(N,Y("支付来源 mt/wx: "+Y(X(D.payResultInfo).resultSouceType)))}}):T()},g=(C,T)=>{C||K||!!Z(U.payResultInfo,"errorMsg")||undefined?T(Y("支付失支付失败对应的报错信息："+Y(X(D.payResultInfo).errorMsg)),(N)=>{A["payResultInfo"][2]=(D,E,T)=>{T(N,Y("支付失支付失败对应的报错信息："+Y(X(D.payResultInfo).errorMsg)))}}):T()},d=(C,T,E)=>{C?T(" 支付结果回调 "):T();E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},e);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},f);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},g)},b=(C,T,E)=>{E("nav-bar",{},(N,C)=>{if(C)O(N,"title","支付结果")},c);E("view",{},(N,C)=>{if(C)L(N,"demo-container")},d)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C||K||U.renderer)L(N,D.renderer);A["renderer"][0]=(D,E,T)=>{L(N,D.renderer)};if(C)R.i(N,"page-root")},b);C=!1;U=Object.create(null);K=!1};A=A||{"payResultInfo":new Array(3),"renderer":new Array(1)};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});;__wxRoute = "packages/finance-pay/pages/debug/result";__wxRouteBegin = true;__wxAppCurrentFile__="packages/finance-pay/pages/debug/result.js";define("packages/finance-pay/pages/debug/result.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../npm/babel/runtime7_2_0/helpers/interopRequireDefault"),r=require("../../common/initialize"),t=e(require("../../common/cashier-env"));Page({data:{payResultInfo:{},renderer:"webview"},onLoad:function(e){this.setData({renderer:this.renderer}),(0,r.init)(e),this.setData({payResultInfo:t.default._payResultInfo})}});
},{isPage:true,isComponent:true,currentFile:'packages/finance-pay/pages/debug/result.js'});require("packages/finance-pay/pages/debug/result.js");$gwx42_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx42_XC_4 || [];
function gz$gwx42_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx42_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx42_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx42_XC_4=true;
var x=['./packages/finance-pay/pages/h5/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx42_XC_4_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx42_XC_4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx42_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/h5/index.wxml'] = [$gwx42_XC_4, './packages/finance-pay/pages/h5/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/h5/index.wxml'] = $gwx42_XC_4( './packages/finance-pay/pages/h5/index.wxml' );
	;__wxRoute = "packages/finance-pay/pages/h5/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/finance-pay/pages/h5/index.js";define("packages/finance-pay/pages/h5/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../npm/babel/runtime7_2_0/helpers/interopRequireDefault"),a=e(require("../../../../npm/babel/runtime7_2_0/helpers/extends")),t=require("../../common/initialize"),s=e(require("../../common/cashier-env"));Page({data:{weburl:"",icashier:!1},customPageData:{hasMessage:!1},onLoad:function(e){(0,t.h5Init)(e);var a=decodeURIComponent(e.weburl);this.setData({weburl:a,icashier:!!e.icashier})},handleWebviewMessage:function(e){var a=e.detail.data,t=a&&a.length&&a[a.length-1];t.payResultStatus&&(this.customPageData.hasMessage=!0,this.callbackSDKPay(t.payResultStatus,{cashierType:"standard-h5-cashier",resultSouceType:t.resultSouceType,message:t.message||""})),"publicVerify"===t.action&&0===t.code&&t.result.payToken&&s.default._setVerifyToken(t.result.payToken),"jumpAndPay"===t.action&&0===t.code&&t.result.resultData&&s.default._setVerifyResult(t.result.resultData),"remittancePay"===t.action&&s.default.setWebviewCallBackData(t)},onUnload:function(){!this.customPageData.hasMessage&&this.data.icashier&&(this.callbackSDKPay("cancel",{cashierType:"standard-h5-cashier",resultSouceType:"mtpay"}),this.setData({icashier:!1}))},callbackSDKPay:function(e,t){void 0===e&&(e=""),void 0===t&&(t={});var i=getApp();i.financePay&&i.financePay.callbackSDKPay&&i.financePay.callbackSDKPay(e,(0,a.default)({},t,{tradeNo:s.default._inpayBasicBusinessParams.tradeno}))}});
},{isPage:true,isComponent:true,currentFile:'packages/finance-pay/pages/h5/index.js'});require("packages/finance-pay/pages/h5/index.js");$gwx42_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (