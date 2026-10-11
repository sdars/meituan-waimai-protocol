Socket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../utils/utils/funcKit.js"),e=require("../../../../../../npm/wmfe/replace-component0_0_2/index").component,n=(0,t.isWXMP)();e({properties:{productData:{type:Object,value:{}}},data:{specAndAttrs:null,comboFoodDesc:null,isWX:n},ready:function(){if(this.data.productData.combo_type&&this.data.productData.combo_type>0)this.setData({comboFoodDesc:this.data.productData.product_desc});else{var t=this.getSpecAndAttrsStr(this.data.productData);this.setData({specAndAttrs:t})}},methods:{onTap:function(){},onMyEvent:function(t){},getSpecAndAttrsStr:function(t){if(t){var e="".concat(this.getAttrsStr(null==t?void 0:t.attrs)).concat(this.getPremiumAttrsStr(null==t?void 0:t.premium_attrs));return t.spec&&t.spec.length>0?e&&e.length>0?"".concat(t.spec,"+").concat(e):t.spec:e}return""},getAttrsStr:function(t){if(!t||0===t.length)return"";if(1===t.length)return t[0].value;for(var e="",n=0;n<t.length;n++){var r=t[n];e+=0===n?"".concat(r.value):"+".concat(r.value)}return e},getPremiumAttrsStr:function(t){var e=this;if(!t||0===(null==t?void 0:t.length))return"";var n="";return t.forEach((function(t,r){n+=e.getSinglePremiumAttr(t)?"+".concat(e.getSinglePremiumAttr(t)):""})),n},getSinglePremiumAttr:function(t){return!t||null!=t&&t.hidden?"":"".concat(t.value).concat(t.repeatable_choice?"*".concat(null==t?void 0:t.count).concat(t.unit):"")}}});
},{isPage:false,isComponent:true,currentFile:'packages/restaurant/pages/multiPersonBill/components/bill-boods-item/index.js'});require("packages/restaurant/pages/multiPersonBill/components/bill-boods-item/index.js");;__wxRoute = "packages/restaurant/pages/multiPersonBill/components/bill-error/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/restaurant/pages/multiPersonBill/components/bill-error/index.js";define("packages/restaurant/pages/multiPersonBill/components/bill-error/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(0,require("../../../../../../npm/wmfe/replace-component0_0_2/index").component)({properties:{},data:{},methods:{onReLoadData:function(){this.triggerEvent("reLoadData")},onMyEvent:function(e){}}});
},{isPage:false,isComponent:true,currentFile:'packages/restaurant/pages/multiPersonBill/components/bill-error/index.js'});require("packages/restaurant/pages/multiPersonBill/components/bill-error/index.js");;__wxRoute = "packages/restaurant/pages/multiPersonBill/components/bill-fee-item/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/restaurant/pages/multiPersonBill/components/bill-fee-item/index.js";define("packages/restaurant/pages/multiPersonBill/components/bill-fee-item/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(0,require("../../../../../../npm/wmfe/replace-component0_0_2/index").component)({properties:{billDetailName:{type:String,value:""},billDetailPrice:{type:String,value:""}},data:{},methods:{onTap:function(){},onMyEvent:function(e){}}});
},{isPage:false,isComponent:true,currentFile:'packages/restaurant/pages/multiPersonBill/components/bill-fee-item/index.js'});require("packages/restaurant/pages/multiPersonBill/components/bill-fee-item/index.js");;__wxRoute = "packages/restaurant/pages/multiPersonBill/components/bill-item/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/restaurant/pages/multiPersonBill/components/bill-item/index.js";define("packages/restaurant/pages/multiPersonBill/components/bill-item/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(0,require("../../../../../../npm/wmfe/replace-component0_0_2/index").component)({properties:{userInfo:{type:Object,value:{}},productList:{type:Array,value:[]},shoppingInfo:{type:Object,value:{}}},data:{},methods:{onTap:function(){},onMyEvent:function(e){}}});
},{isPage:false,isComponent:true,currentFile:'packages/restaurant/pages/multiPersonBill/components/bill-item/index.js'});require("packages/restaurant/pages/multiPersonBill/components/bill-item/index.js");;__wxRoute = "packages/restaurant/pages/multiPersonBill/components/loading-view/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/restaurant/pages/multiPersonBill/components/loading-view/index.js";define("packages/restaurant/pages/multiPersonBill/components/loading-view/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(0,require("../../../../../../npm/wmfe/replace-component0_0_2/index").component)({properties:{},data:{loadImg:"https://p1.meituan.net/travelcube/4096439c6189c60c5428a8b67e3266cf39507.gif",message:"努力加载中....."},methods:{}});
},{isPage:false,isComponent:true,currentFile:'packages/restaurant/pages/multiPersonBill/components/loading-view/index.js'});require("packages/restaurant/pages/multiPersonBill/components/loading-view/index.js");;__wxRoute = "packages/restaurant/pages/multiPersonBill/multiPersonBill";__wxRouteBegin = true;__wxAppCurrentFile__="packages/restaurant/pages/multiPersonBill/multiPersonBill.js";define("packages/restaurant/pages/multiPersonBill/multiPersonBill.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault").default,t=require("../../../../@babel/runtime/helpers/regeneratorRuntime"),i=require("../../../../@babel/runtime/helpers/asyncToGenerator"),r=require("../../utils/utils/api.js"),n=require("../../utils/utils/util.js"),a=e(require("../../npm/@analytics/wechat-sdk/lib/index.js")),o=(0,require("../../utils/utils/funcKit.js").isWXMP)();Page({data:{pageStatus:0,loading:!0,error:!1,data:null,orderViewID:"",isWX:o},created:function(){},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loadData(e).then()},loadData:function(e){var r=this;return i(t().mark((function i(){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.loadCartBill(e);case 3:n=t.sent,r.setData({loading:!1,data:n,error:!1,orderViewID:e.order_view_id||"1400814173631519129"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r.setData({loading:!1,data:{},error:!0,orderViewID:""});case 10:case"end":return t.stop()}}),i,null,[[0,7]])})))()},onShow:function(){o?global.mmb.lx.pv("c_tyr53cg"):a.default.pageView("c_tyr53cg",{})},onHide:function(){},detached:function(){},onUnload:function(){},loadCartBill:function(e){return i(t().mark((function i(){var n,a;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("loadCartBill"),n=e.order_view_id,t.next=4,(0,r.getCartBill)({order_view_id:n||"1400814173631519129"});case 4:return a=t.sent,console.log("this is res",a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),i)})))()},onShareAppMessage:function(e){var t="";o&&(t=(global.mmb.getLoginInfoSync()||{}).userId||"");return{imageUrl:"".concat(this.data.data.poi_info.icon),title:"拼单账单：已为每人计算好活动优惠和配送费【".concat(this.data.data.poi_info.name,"】"),path:"/packages/order/order-info/order-info?view_id=".concat(this.data.orderViewID,"&sponsor_user_id=").concat(t,"&shop_cart_id=&is_share_bill_url=1&order_type=1")}},onClickShareFriends:function(){o?global.mmb.lx.click("b_opZUG",{channel_id:2}):(a.default.moduleClick("b_opZUG",{channel_id:2}),wx.mtShare({type:1,appId:"gh_72a4eb2d4324",imageUrl:"".concat(this.data.data.poi_info.icon),title:"拼单账单：已为每人计算好活动优惠和配送费【".concat(this.data.data.poi_info.name,"】"),path:"/packages/order/order-info/order-info?view_id=".concat(this.data.orderViewID,"&sponsor_user_id=").concat(n.multiPersonBillSponsorUserID,"&shop_cart_id=null&is_share_bill_url=1&order_type=1"),success:function(e){console.log("mtShare success",JSON.stringify(e))},fail:function(e){console.log("mtShare fail",JSON.stringify(e))}}))},onClickShareCircle:function(){console.log("==onClickShareCircle"),a.default.moduleClick("b_opZUG",{channel_id:1}),wx.capture({success:function(e){console.log(e.tempFilePath),wx.mtShare({type:2,imageUrl:e.tempFilePath,title:"title",channel:"WXTimeline",success:function(e){console.log("mtShare success",JSON.stringify(e))},fail:function(e){console.log("mtShare fail",JSON.stringify(e))}})},fail:function(e){console.log(JSON.stringify(e))}}),wx.mtShare({type:2,title:"title",channel:"WXTimeline",success:function(e){console.log("mtShare success",JSON.stringify(e))},fail:function(e){console.log("mtShare fail",JSON.stringify(e))}})}});
},{isPage:true,isComponent:true,currentFile:'packages/restaurant/pages/multiPersonBill/multiPersonBill.js'});require("packages/restaurant/pages/multiPersonBill/multiPersonBill.js");$gwx33_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx33_XC_2 || [];
function gz$gwx33_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx33_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onScrollEnd'])
Z([3,'onScrollStart'])
Z([3,'onDragEnd'])
Z([3,'onPullDown'])
Z([[6],[[7],[3,'list']],[3,'onScroll']])
Z([3,'onPullUp'])
Z([3,'onScrollToUpper'])
Z([[7],[3,'bounces']])
Z([a,[3,'list-view '],[[7],[3,'clz']]])
Z([[7],[3,'loadMoreExtraHeight']])
Z([[7],[3,'scrollTop']])
Z([[2,'!'],[[7],[3,'disableScroll']]])
Z([[2,'!'],[[2,'!'],[[7],[3,'showScrollIndicator']]]])
Z([[6],[[7],[3,'list']],[3,'onChangeSections']])
Z([[6],[[7],[3,'list']],[3,'onChangeSticky']])
Z([3,'wrap'])
Z([[7],[3,'z']])
Z([[7],[3,'stickySectionHeaders']])
Z([[7],[3,'headerView']])
Z([[2,'||'],[[6],[[7],[3,'headerView']],[3,'c']],[1,'']])
Z([[6],[[7],[3,'headerView']],[3,'n']])
Z([[7],[3,'pid']])
Z([3,'custom-component'])
Z([[6],[[7],[3,'headerView']],[3,'l']])
Z([[2,'||'],[[6],[[7],[3,'headerView']],[3,'s']],[1,'']])
Z([3,'sec'])
Z([[7],[3,'s']])
Z([3,'k'])
Z([3,'block'])
Z([[6],[[7],[3,'sec']],[3,'c']])
Z(z[27])
Z([[2,'==='],[[6],[[6],[[7],[3,'z']],[[6],[[7],[3,'block']],[3,'i']]],[3,'type']],[1,'h']])
Z([[2,'||'],[[6],[[6],[[7],[3,'z']],[[6],[[7],[3,'block']],[3,'i']]],[3,'c']],[1,'']])
Z([[6],[[6],[[7],[3,'z']],[[6],[[7],[3,'block']],[3,'i']]],[3,'n']])
Z(z[21])
Z(z[22])
Z([[6],[[6],[[7],[3,'z']],[[6],[[7],[3,'block']],[3,'i']]],[3,'l']])
Z([[2,'||'],[[6],[[6],[[7],[3,'z']],[[6],[[7],[3,'block']],[3,'i']]],[3,'s']],[1,'']])
Z([[2,'==='],[[6],[[6],[[7],[3,'z']],[[6],[[7],[3,'block']],[3,'i']]],[3,'type']],[1,'f']])
Z(z[32])
Z(z[33])
Z(z[21])
Z(z[22])
Z(z[36])
Z(z[37])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'z']],[[6],[[7],[3,'block']],[3,'i']]])
Z([3,'n'])
Z([3,'li'])
Z([[6],[[7],[3,'item']],[3,'x']])
Z([[6],[[7],[3,'item']],[3,'y']])
Z([a,z[48],[[6],[[7],[3,'item']],[3,'n']]])
Z([[6],[[7],[3,'vb']],[[6],[[7],[3,'block']],[3,'i']]])
Z([[2,'||'],[[6],[[7],[3,'item']],[3,'c']],[1,'']])
Z(z[52][2])
Z(z[21])
Z(z[22])
Z([[6],[[7],[3,'item']],[3,'l']])
Z([[2,'||'],[[6],[[7],[3,'item']],[3,'s']],[1,'']])
Z([[7],[3,'footerView']])
Z([[6],[[7],[3,'footerView']],[3,'n']])
Z(z[21])
Z(z[22])
Z([[6],[[7],[3,'footerView']],[3,'l']])
Z([[7],[3,'enableRefreshControl']])
Z([[2,'||'],[[7],[3,'loading']],[[7],[3,'hasMore']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'hasMore']]],[[2,'!'],[[7],[3,'loading']]]],[[6],[[7],[3,'data']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx33_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_1
}
function gz$gwx33_XC_2_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_2)return __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_2
__WXML_GLOBAL__.ops_cached.$gwx33_XC_2_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'true'])
Z([3,'weui-sticky'])
Z([[12],[[6],[[7],[3,'computed']],[3,'containerStyle']],[[5],[[9],[[9],[[8],'fixed',[[7],[3,'fixed']]],[[8],'height',[[7],[3,'height']]]],[[8],'zIndex',[[7],[3,'zIndex']]]]]])
Z([[7],[3,'fixed']])
})(__WXML_GLOBAL__.ops_cached.$gwx33_XC_2_2);return __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_2
}
function gz$gwx33_XC_2_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_3)return __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_3
__WXML_GLOBAL__.ops_cached.$gwx33_XC_2_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx33_XC_2_3);return __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_3
}
function gz$gwx33_XC_2_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_4)return __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_4
__WXML_GLOBAL__.ops_cached.$gwx33_XC_2_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'container '],[[7],[3,'className']]])
Z([[7],[3,'style']])
Z([[2,'&&'],[[7],[3,'error']],[[7],[3,'e']]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'placeholder']],[[2,'!'],[[7],[3,'r']]]],[[2,'!'],[[7],[3,'e']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx33_XC_2_4);return __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_4
}
function gz$gwx33_XC_2_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_5)return __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_5
__WXML_GLOBAL__.ops_cached.$gwx33_XC_2_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[7],[3,'kboneCustomComponentName']],[1,'list']])
Z([3,'oncellAppear'])
Z([3,'oncellDisappear'])
Z([3,'ondragEnd'])
Z([3,'onlayout'])
Z([3,'onpullDown'])
Z([3,'onpullUp'])
Z([3,'onscroll'])
Z([3,'onscrollEnd'])
Z([3,'onscrollStart'])
Z([3,'onscrollToLower'])
Z([3,'onscrollToUpper'])
Z([3,'onsectionFooterAppear'])
Z([3,'onsectionFooterDisappear'])
Z([3,'onsectionHeaderAppear'])
Z([3,'onsectionHeaderDisappear'])
Z([[7],[3,'bounces']])
Z([[7],[3,'clz']])
Z([[7],[3,'class']])
Z([[7],[3,'data']])
Z([[7],[3,'enablePullDown']])
Z([[7],[3,'enableRefreshControl']])
Z([[7],[3,'footerView']])
Z([[7],[3,'hasMore']])
Z([[7],[3,'headerView']])
Z([[7],[3,'id']])
Z([[7],[3,'loadMoreExtraHeight']])
Z([[7],[3,'loading']])
Z([[7],[3,'name']])
Z([[7],[3,'noMoreTip']])
Z([[7],[3,'pid']])
Z([[7],[3,'scrollIntoView']])
Z([[7],[3,'showScrollIndicator']])
Z([[7],[3,'stickySectionHeaders']])
Z([[7],[3,'style']])
Z([[2,'==='],[[7],[3,'kboneCustomComponentName']],[1,'wximage']])
Z([3,'onLoadError'])
Z([3,'onLoadSuccess'])
Z([[7],[3,'className']])
Z([[7],[3,'nid']])
Z(z[30])
Z([[7],[3,'error']])
Z([[7],[3,'mode']])
Z([[7],[3,'placeholder']])
Z([[7],[3,'src']])
Z(z[34])
Z([[2,'==='],[[7],[3,'kboneCustomComponentName']],[1,'sticky']])
Z([3,'onchange'])
Z(z[17])
Z(z[17])
Z(z[39])
Z(z[30])
Z([[7],[3,'disabled']])
Z(z[25])
Z(z[39])
Z([[7],[3,'offsetTop']])
Z(z[30])
Z([[7],[3,'zIndex']])
Z([[2,'==='],[[7],[3,'kboneCustomComponentName']],[1,'wxswiper']])
Z([[7],[3,'autoplay']])
Z(z[47])
Z([3,'onclick'])
Z([[7],[3,'borderRadius']])
Z([[7],[3,'circular']])
Z(z[17])
Z(z[18])
Z([[7],[3,'current']])
Z(z[19])
Z(z[39])
Z(z[30])
Z([[7],[3,'duration']])
Z([[7],[3,'interval']])
Z(z[28])
Z([[7],[3,'picMode']])
Z(z[43])
Z([[7],[3,'scrollEnabled']])
Z(z[34])
Z([[7],[3,'vertical']])
})(__WXML_GLOBAL__.ops_cached.$gwx33_XC_2_5);return __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_5
}
function gz$gwx33_XC_2_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_6)return __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_6
__WXML_GLOBAL__.ops_cached.$gwx33_XC_2_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'pid']])
Z([[7],[3,'bodyClass']])
Z([3,'e-body'])
Z(z[0])
Z([3,'custom-component'])
Z([3,'container'])
Z([[7],[3,'bodyStyle']])
Z([[7],[3,'showInfo']])
})(__WXML_GLOBAL__.ops_cached.$gwx33_XC_2_6);return __WXML_GLOBAL__.ops_cached.$gwx33_XC_2_6
}
__WXML_GLOBAL__.ops_set.$gwx33_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx33_XC_2=true;
var x=['./packages/restaurant/restaurant/mach_pro_waimai_restaurant_page_new_next/custom-component/components/list.wxml','./packages/restaurant/restaurant/mach_pro_waimai_restaurant_page_new_next/custom-component/components/sticky/index.wxml','./packages/restaurant/restaurant/mach_pro_waimai_restaurant_page_new_next/custom-component/components/swiper/index.wxml','./packages/restaurant/restaurant/mach_pro_waimai_restaurant_page_new_next/custom-component/components/wximage/index.wxml','./packages/restaurant/restaurant/mach_pro_waimai_restaurant_page_new_next/custom-component/index.wxml','./packages/restaurant/restaurant/mach_pro_waimai_restaurant_page_new_next/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx33_XC_2_1()
var e2V=_mz(z,'scroll-view',['bindScrollEnd',0,'bindScrollStart',1,'binddragend',1,'bindrefresherpulling',2,'bindscroll',3,'bindscrolltolower',4,'bindscrolltoupper',5,'bounces',6,'class',7,'lowerThreshold',8,'scrollTop',9,'scrollY',10,'showScrollbar',11],[],e,s,gg)
var b3V=_mz(z,'view',['change:sections',13,'change:sticky',1,'id',2,'sections',3,'sticky',4],[],e,s,gg)
var o4V=_v()
_(b3V,o4V)
if(_oz(z,18,e,s,gg)){o4V.wxVkey=1
var f7V=_mz(z,'element',['class',19,'data-nid',1,'data-pid',2,'slot',4,'style',5],['wx-custom-component',3],e,s,gg)
_(o4V,f7V)
}
var c8V=_v()
_(b3V,c8V)
var h9V=function(cAW,o0V,oBW,gg){
var aDW=_v()
_(oBW,aDW)
var tEW=function(bGW,eFW,oHW,gg){
var oJW=_v()
_(oHW,oJW)
if(_oz(z,31,bGW,eFW,gg)){oJW.wxVkey=1
var fKW=_mz(z,'element',['class',32,'data-nid',1,'data-pid',2,'slot',4,'style',5],['wx-custom-component',3],bGW,eFW,gg)
_(oJW,fKW)
}
else if(_oz(z,38,bGW,eFW,gg)){oJW.wxVkey=2
var cLW=_mz(z,'element',['class',39,'data-nid',1,'data-pid',2,'slot',4,'style',5],['wx-custom-component',3],bGW,eFW,gg)
_(oJW,cLW)
}
else{oJW.wxVkey=3
var hMW=_v()
_(oJW,hMW)
var oNW=function(oPW,cOW,lQW,gg){
var tSW=_mz(z,'view',['class',49,'data-x',1,'data-y',2,'id',3],[],oPW,cOW,gg)
var eTW=_v()
_(tSW,eTW)
if(_oz(z,53,oPW,cOW,gg)){eTW.wxVkey=1
var bUW=_mz(z,'element',['class',54,'data-nid',1,'data-pid',2,'slot',4,'style',5],['wx-custom-component',3],oPW,cOW,gg)
_(eTW,bUW)
}
else{eTW.wxVkey=2
}
eTW.wxXCkey=1
eTW.wxXCkey=3
_(lQW,tSW)
return lQW
}
hMW.wxXCkey=4
_2z(z,47,oNW,bGW,eFW,gg,hMW,'item','index','n')
}
oJW.wxXCkey=1
oJW.wxXCkey=3
oJW.wxXCkey=3
oJW.wxXCkey=3
return oHW
}
aDW.wxXCkey=4
_2z(z,29,tEW,cAW,o0V,gg,aDW,'block','index','k')
return oBW
}
c8V.wxXCkey=4
_2z(z,26,h9V,e,s,gg,c8V,'sec','index','k')
var x5V=_v()
_(b3V,x5V)
if(_oz(z,60,e,s,gg)){x5V.wxVkey=1
var oVW=_mz(z,'element',['data-nid',61,'data-pid',1,'slot',3],['wx-custom-component',2],e,s,gg)
_(x5V,oVW)
}
var o6V=_v()
_(b3V,o6V)
if(_oz(z,65,e,s,gg