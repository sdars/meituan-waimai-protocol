RIComponent(w)),u=n?(0,r.default)({path:"/pages/web-view/web-view?defaultType=DIRECT&onHideRemain=1&type=DIRECT&webviewUrl="+a.webviewUrl},t||{}):(0,r.default)({path:"/pages/web-view/web-view?redirectUrl="+w},t||{})}return u.path=this.addParameterToSharePath(u.path),this.updateWebview((0,r.default)({},a,{shareConfig:u})),u},deleteUrlPersonalInfo:function(e){if(!decodeURIComponent(e).includes("/node/doubletwelve/detail"))return e;var t=i.default.parse(decodeURIComponent(e),!0);return delete t.query.token,delete t.query.wm_logintoken,delete t.query.userId,delete t.query.wm_actual_latitude,delete t.query.wm_actual_longitude,delete t.query.user_id,delete t.query.wx_pay_params,delete t.query.openid,delete t.query.__lxsdk_params,delete t.query._lx_ver,delete t.wxapp_login_status,delete t.search,i.default.format(t)},resetQrcodeType:function(){var e,a,r,n=this;return t.default.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e=getApp(),a=e[E],!this.data.webviewData.q||a||this.onHideRemain){i.next=9;break}return i.next=6,t.default.awrap(this.getRefreshWebviewData(a));case 6:return r=i.sent,clearTimeout(M),i.abrupt("return",this.setData({xmlType:null},(function(){M=setTimeout((function(){n.setData({xmlType:A,webviewData:r})}),100)})));case 9:return i.abrupt("return",null);case 10:case"end":return i.stop()}}),null,this)},onShow:function(){this.banReload||this.checkSceneToHome()},onLoadHandler:function(e){var a,n,o,u,l,c,d,p,f,k,S,q,T,R,O,P,E,W,A,L,M,H,N,j,z,V,K,X,Y,Z,$,ee,te,ae,re,ne,ie,oe,se,ue,le,ce,de,pe,fe,we,he,ge,be,ve,me,_e,xe,ye,ke,De,Ie,Se,qe,Te,Ue,Ce,Re,Oe,Pe,Ee,We,Ae,Le,Me,He,Ne,je,Qe,Be,Je,ze,Fe,Ge,Ve,Ke,Xe,Ye,Ze,$e;return t.default.async((function(et){for(;;)switch(et.prev=et.next){case 0:return this.handlePresetOptions(e),a=e.q,n=e.from,o=e.login_benefit_text,u=e.banShare,this.banShare="1"===u||!1,decodeURIComponent(o||""),l=e.preQrcode,c=e.banReload,d=void 0!==c&&c,this.banReload=d,p=this.data.webviewData,f=p.preQrcode,k=e.type||p.type||"REDIRECT",S=e.webviewUrl||e.redirectUrl||p.webviewUrl,q={},T={},R=this.data.webviewData.loginData,O=e.checkInited||"",q=e.baseData||p.baseData||{},I(decodeURIComponent(S)),this.lxMge.view({val_bid:"b_waimai_5gy1z6a9_mv",webviewOpt:e}),""===a&&f&&(a=f),this.isActivity(S)&&(P=String(wx.getStorageSync("wx_scene")||0),q.wx_scene=P,e.wxapp_force_loc="1",e.wxapp_h5_payment="1",k="REDIRECT"),E=String(wx.getStorageSync("wx_scene")||0),q.wm_wxapp_scene=E,W=U()||{},S=this.deleteUrlPersonalInfo(S),A=decodeURIComponent(S),-1===S.indexOf("?")&&A!==S||(A=S),et.next=29,t.default.awrap(G(A));case 29:L=et.sent,M=null,a?(S=F(a),A=S,S.indexOf("onHideRemain=true")>-1&&this.checkOnHideReset({onHideRemain:!0})):S&&(H=s.default.getTraceId("",S,{}),N=H.ref_list_id,-1===A.indexOf("ref_list_id")&&(j=A.split("#"),-1!==(A=j[0]).indexOf("?")?A+="&ref_list_id="+N:A+="?ref_list_id="+N,j.length>1&&(A+="#"+j[1])),A.indexOf("onHideRemain=true")>-1&&this.checkOnHideReset({onHideRemain:!0})),z=W.dev.env,B=A,(V=i.default.parse(A,!1)).query=(0,_.default)(V);try{(0,x.default)("webview-load-start",{domain:V.host,path:V.pathname,originUrl:B},1)}catch(e){}if(K=V&&V.query||{},wx.setNavigationBarTitle({title:decodeURIComponent(e.wxapp_force_title||K.wxapp_force_title||"")||"美团外卖"}),e.setGray&&1===Number(e.setGray)?this.setData({grayString:"filter: grayscale(0.95)"}):this.setData({grayString:""}),X=!1,!K.wxapp_force_loc&&!e.wxapp_force_loc){et.next=80;break}return Y=null,Z=null,X&&($=getApp().getOriginApp().globalData||{},ee=$.cityInfo||{},Y=Math.round(1e6*(ee.lat||0)),Z=Math.round(1e6*(ee.lng||0))),et.next=48,t.default.awrap(this.setData({locLoading:!0}));case 48:return te=0,ae=W.wx,re=ae.latitude,ne=ae.longitude,ie="",oe="",et.prev=52,et.next=55,t.default.awrap((0,g.getLocation)({_mt:{sceneToken:"dj-b61006569ae2989c"}}));case 55:se=et.sent,ue=se.latitude,le=se.longitude,ie=ue,oe=le,et.next=65;break;case 62:et.prev=62,et.t0=et.catch(52),te="auth"===et.t0.errtype?2:1;case 65:if(getApp().bargain_locMock&&!J&&(ie=W.recipient.latitude,oe=W.recipient.longitude),ce=!1,!J&&(de=wx.getStorageSync("WmLocMock")))try{ce=!0,pe=de.split(","),oe=1e6*pe[0],ie=1e6*pe[1]}catch(e){ce=!1}return K.wxapp_loc_status=te,K.wm_latitude=ce?ie:Y||W.recipient.latitude||ie||re,K.wm_longitude=ce?oe:Z||W.recipient.longitude||oe||ne,K.wm_actual_latitude=ie||re,K.wm_actual_longitude=oe||ne,delete K.wxapp_force_loc,delete K.prefer_mt_geo,et.next=78,t.default.awrap(this.setData({locLoading:!1}));case 78:et.next=81;break;case 80:"*"===K.location&&(K.wm_actual_latitude=W.wx.latitude,K.wm_actual_longitude=W.wx.longitude,K.wm_latitude=W.recipient.latitude,K.wm_longitude=W.recipient.longitude,delete K.location,delete V.search);case 81:if(!K.wxapp_force_login&&!e.wxapp_force_login||!Q(A)){et.next=153;break}if(k=b.DIRECT,"1"!==K.wxapp_force_login&&"1"!==e.wxapp_force_login){et.next=92;break}return et.next=86,t.default.awrap(this.setData({locLoading:!0}));case 86:return et.next=88,t.default.awrap(this.forceLogin());case 88:return fe=et.sent,K.wxapp_login_status=fe?"0":"1",et.next=92,t.default.awrap(this.setData({locLoading:!1}));case 92:return et.next=94,t.default.awrap(global.mmb.getLoginInfo());case 94:if(et.t1=et.sent,et.t1){et.next=97;break}et.t1={};case 97:return we=et.t1,he=we.token,ge=we.userId,et.next=102,t.default.awrap(global.mmb.getUserInfo());case 102:return be=et.sent,ve=be.nickName,me=void 0===ve?"":ve,_e=be.avatarUrl,xe=void 0===_e?"":_e,et.next=109,t.default.awrap(global.mmb.getIdInfo());case 109:if(et.t2=et.sent,et.t2){et.next=112;break}et.t2={};case 112:if(ye=et.t2,ke=ye.openId,De=ye.openIdCipher,K.wm_logintoken=he,K.token=he,!(K.used_pay_scene||e.used_pay_scene||e.wxapp_h5_payment||K.rice_school_scene||e.rice_school_scene)){et.next=150;break}return et.next=120,t.default.awrap(C());case 120:return Ie=et.sent,getApp().globalData.token=he,getApp().globalData.userId=ge,getApp().globalData.openId=ke,getApp().globalData.uuid=Ie,getApp().globalData.appid="wx2c348cf579062e56",getApp().globalData.sysInfo=wx.getSystemInfoSync(),getApp().globalData.mt_localCity={},Se=W.wx||{},getApp().globalData.location=Se,getApp().globalData.cityInfo={},K.mp_type="waimai",K.wm_ctype=v.appnm,K.user_id=ge,(qe=wx.getStorageSync("wx_set_info")||"")&&(Te=qe.split(",")||[,""],Ue=Te[0],Ce=Te[1],Re=void 0===Ce?"":Ce,Oe=Ue.split("=")||[,""],Pe=Oe[1],K.region_id=Pe,K.region_version=Re),Ee={openid:ke,app_id:"wx2c348cf579062e56",avatar_url:xe,nickname:me,open_id:ke,openIdCipher:De},et.next=139,t.default.awrap(D(W));case 139:We=et.sent,K.wx_pay_params=encodeURIComponent(JSON.stringify(Ee)),K.utm_term=v.VERSION,K.utm_campaign="AwaimaiBwaimai",K.utm_medium=We.wm_dtype,K.utm_source=K.utm_source||"5000",K.wm_uuid=Ie,K.userId=ge,K.used_pay_scene&&"1"===K.used_pay_scene&&(K.wm_dversion=We.wm_dversion),!X&&We.wm_latitude&&We.wm_actual_latitude||(delete We.wm_latitude,delete We.wm_longitude,delete We.wm_actual_latitude,delete We.wm_actual_longitude),K=Object.assign(K,We,Ee);case 150:delete V.search,et.next=195;break;case 153:if(!(e.used_pay_scene||e.wxapp_h5_payment||K.used_pay_scene||K.wxapp_h5_payment)){et.next=195;break}return et.next=157,t.default.awrap(this.forceLogin({}));case 157:if(et.sent){et.next=161;break}return et.abrupt("return");case 161:return et.next=163,t.default.awrap(global.mmb.getLoginInfo());case 163:if(et.t3=et.sent,et.t3){et.next=166;break}et.t3={};case 166:return Ae=et.t3,Le=Ae.token,Me=Ae.userId,et.next=171,t.default.awrap(global.mmb.getIdInfo());case 171:if(et.t4=et.sent,et.t4){et.next=174;break}et.t4={};case 174:return He=et.t4,Ne=He.openId,je=He.openIdCipher,et.next=179,t.default.awrap(C());case 179:Qe=et.sent,K.wm_logintoken=Le,K.token=Le,Be={openid:Ne,app_id:"wx2c348cf579062e56",open_id:Ne,openIdCipher:je,userid:Me},Ne||(0,h.customError)({level:"error",tracer_type:"open_id为空",error_level_sub:"webview里的cookie没有open_id",content:""}),getApp().globalData.token=Le,getApp().globalData.userId=Me,getApp().globalData.openId=Ne,getApp().globalData.uuid=Qe,getApp().globalData.appid="wx2c348cf579062e56",getApp().globalData.sysInfo=wx.getSystemInfoSync(),getApp().globalData.mt_localCity={},Je=W.wx||{},getApp().globalData.location=Je,getApp().globalData.cityInfo={},K=Object.assign(K,Be);case 195:if(k!==b.DIRECT){et.next=207;break}if(!K.wxapp_force_openid&&!e.wxapp_force_openid){et.next=207;break}return et.next=199,t.default.awrap(global.mmb.getIdInfo());case 199:if(et.t5=et.sent,et.t5){et.next=202;break}et.t5={};case 202:ze=et.t5,Fe=ze.openId,Ge=ze.openIdCipher,K.openid=Fe,K.openIdCipher=Ge;case 207:if(!K.f_fingerg){et.next=213;break}if(Ve=global&&global.jsguardInstance||{},"function"!=typeof(Ke=Ve.finger||{}).g){et.next=213;break}return et.next=213,t.default.awrap(new y((function(e){Ke.g((function(t){K.f_fingerg=t,e()}))})));case 213:try{Xe=(0,m.getPersonalizedDataSync)(),K.privacySwitches=encodeURIComponent(JSON.stringify(Xe)),delete V.search,A=i.default.format(V)}catch(e){(0,h.customError)({level:"info",tracer_type:"个性化推荐",error_level_sub:"webview获取个性化推荐失败",content:""})}return et.next=216,t.default.awrap(this.loginDataNeedUpdate(R));case 216:if(Ye=et.sent,!(k&&"REDIRECT"===k&&Ye||a)){et.next=221;break}return et.next=220,t.default.awrap(this.updateLoginData());case 220:T.loginData=et.sent;case 221:if(!L){et.next=228;break}return et.next=224,t.default.awrap(global.mmb.convertTokenToTicket());case 224:(Ze=et.sent)&&Ze.ticket&&(M=Ze.ticket),K.mtcp_ticket=M;case 228:return et.next=230,t.default.awrap(this.addLxUrlEnv(A,V,K));case 230:A=et.sent,S=A,this.storeWebviewUrl(),$e=Object.assign(p,(0,r.default)({},T,{env:"qa"===z?0:1,redirectUrl:null,webviewUrl:S,baseData:q,q:a||null,webviewType:k,preQrcode:l||null,type:k,queryData:(0,w.default)(S,!a),inited:1,checkInited:O,isTicketWhitelisted:L})),this.inited=!0,this.updateWebview((0,r.default)({},$e)),this.setData({preQrcode:l||"",q:a||null,showCustomTabbar:"tab"===n&&!0,from:n}),"tab"===n&&wx.hideHomeButton();case 238:case"end":return et.stop()}}),null,this,[[52,62]])},onLoad:function(e){return t.default.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.default.awrap(this.onLoadHandler(e));case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),(0,h.customError)({level:"error",tracer_type:"webview load error",error_level_sub:"webview load parse error",error_code:a.t0.message,content:{options:e,error:a.t0}});case 8:case"end":return a.stop()}}),null,this,[[0,5]])},onLoadWebview:function(e){var t=e.detail.src;"ORIGIN"===this.data.xmlType&&n.metrics.addWebview("load",{url:t});var a=(0,f.default)(t),r=a.tracer_type,i=a.error_level_sub,o=a.error_code,s=a.content;r&&(Object.assign(s,{wxUrl:t,option:this.options}),(0,h.customError)({tracer_type:r,error_level_sub:i,error_code:o,content:s,reportNow:!0}))},onErrorWebview:function(e){var t=e.detail,a=t.src,r=void 0===a?"":a,n=t.errMsg,o=i.default.parse(r),s=o.host,u=o.pathname,l=i.default.parse(B),c=l.host,d=l.pathname;(0,h.customError)({tracer_type:"webview binderror",error_level_sub:s,error_code:s+u,content:{url:r,errMsg:n},reportNow:!0});try{(0,x.default)("webview-load-error",{domain:s||c,path:u||d,originUrl:B,finalUrl:r,finalUrlLength:r.length,errMsg:n},1)}catch(e){}},onMessage:function(e){var t=e.detail.data;if(t.length>0&&"order-data"===t[0].msgId&&this.getOpenerEventChannel().emit("acceptDataFromWebviewPage",t[0]),t.length>0&&"order-data-default-remark"===t[t.length-1].msgId&&this.getOpenerEventChannel().emit("acceptDataFromWebviewPage",t[t.length-1]),t.length>0&&"invoice-data"===t[0].msgId&&(this.setInvoice({data:t[0].invoice||{}}),this.getOpenerEventChannel().emit("acceptDataFromWebviewPage",t[0])),t.length>0&&"patient-data"===t[0].msgId&&this.setPatient({data:t[0].patient_id}),t.length>0){var r=t[0];"sg_payNormal"===r.msgId&&this.normalPay(r)}t.length>0&&"share"===t[0].type&&(this.data.shareConfig=t[0]);var n=t.length>0?t[t.length-1]:{};if("privacyConfig"===(n.msgId||"")){var i=n.config||[];(0,m.updatePersonalizedConfig)(i,(function(e){}))}this.commonMsgStore((0,a.default)(t),["shooter","gstar","mtim","drone-im"])},commonMsgStore:function(e,t){void 0===e&&(e=[]),global.webviewMsg=global.webviewMsg||{},e.forEach((function(e){void 0===e&&(e={});var a=e,r=a.type,n=a.business,i=a.key;"store"===r&&t.includes(n)&&(global.webviewMsg[n+"_"+i]=e)}))},normalPay:function(e){var a;return t.default.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.default.awrap(k({wm_order_id_view:e.viewId,touchPoint:9,no_yb_pay:1}));case 3:return a=r.sent,r.next=6,t.default.awrap((0,g.requestPayment)(a));case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0);case 11:e.setTime&&e.setTime>0&&setTimeout((function(){wx.navigateTo({url:"/pages/order-info/order-info?order_id="+e.order_id+"&view_id="+e.viewId+"&poi_id="+e.poi_id})}),e.setTime);case 12:case"end":return r.stop()}}),null,null,[[0,8]])},forceLogin:function(e){var a;return t.default.async((function(r){for(;;)switch(r.prev=r.next){case 0:return void 0===e&&(e={}),r.next=3,t.default.awrap(global.mmb.isLogin());case 3:if(!r.sent){r.next=5;break}return r.abrupt("return",!0);case 5:return r.prev=5,r.next=8,t.default.awrap(global.mmb.login({options:e}));case 8:if(a=r.sent){r.next=12;break}return r.abrupt("return",!1);case 12:if(!a.token){r.next=14;break}return r.abrupt("return",!0);case 14:r.next=20;break;case 16:return r.prev=16,r.t0=r.catch(5),r.abrupt("return",!1);case 20:case"end":return r.stop()}}),null,null,[[5,16]])},loginDataNeedUpdate:function(e){var a,r,n,i;return t.default.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a=!e||!e.token,o.next=3,t.default.awrap(global.mmb.getLoginInfo());case 3:if(o.t0=o.sent,o.t0){o.next=6;break}o.t0={};case 6:return r=o.t0,n=r.token,i=r.userId,o.abrupt("return",a||e.token!==n||e.userid!==i||!(e.userInfo||{}).avatarUrl);case 10:case"end":return o.stop()}}))},storeWebviewUrl:function(){var e=this.data.webviewData.webviewUrl;e&&this.needStoreUrl(e)&&wx.setStorageSync("webviewUrl",e)},needStoreUrl:function(e){return e&&-1===e.indexOf(E)},updateLoginData:function(e){var a,r,n,i,o,s,l,c;return t.default.async((function(d){for(;;)switch(d.prev=d.next){case 0:return e=e||{},d.next=3,t.default.awrap(global.mmb.getIdInfo());case 3:if(d.t0=d.sent,d.t0){d.next=6;break}d.t0={};case 6:return a=d.t0,r=a.openId,d.next=10,t.default.awrap(global.mmb.getLoginInfo());case 10:if(d.t1=d.sent,d.t1){d.next=13;break}d.t1={};case 13:return n=d.t1,i=n.token,o=n.userId,s={},s={openid:r,token:i,userid:o},d.prev=18,d.next=21,t.default.awrap(C());case 21:return l=d.sent,d.next=24,t.default.awrap(u.loginPlugin.getUserInfo());case 24:c=d.sent,s.iuuid=l,s.userInfo=c,d.next=32;break;case 29:d.prev=29,d.t2=d.catch(18);case 32:return d.abrupt("return",s);case 33:case"end":return d.stop()}}),null,null,[[18,29]])},isActivity:function(e){return/market\.waimai\.(st\.meituan|test\.sankuai|meituan)\.com|market\.meituan\.com/g.test(decodeURIComponent(e))},handlePresetOptions:function(e){void 0===e&&(e={}),this.checkTrueType(e),this.checkShareMenu(e),this.checkOnHideReset(e),this.checkScene(e)},checkTrueType:function(e){var t=e.defaultType;this.setData({defaultType:t||""})},checkOnHideReset:function(e){var t=e.onHideRemain,a=void 0!==t&&t;return this.onHideRemain=!!a,this},checkShareMenu:function(e){var t=e.isHideShareMenu;void 0!==t&&t&&wx.hideShareMenu()},checkScene:function(e){var t=e.scenes,a=void 0===t?"":t;if(a=a||null)try{a=a.split(/\s*,\s*/),this.setData({scenes:a})}catch(e){this.delayBack("场景值："+a+"有误",2e3,e)}},getRefreshWebviewData:function(e){var a,r,n,i,o,s,u;return t.default.async((function(l){for(;;)switch(l.prev=l.next){case 0:return a=this.data.webviewData,r=U(),n=wx.getStorageSync("webviewUrl")||a.webviewUrl,i=n.indexOf("#"),o=-1!==decodeURIComponent(n).indexOf("?")?"&":"?",s="",u=a,-1!==i&&(s=n.substr(i),n=n.substring(0,i)),Object.assign(u,{webviewUrl:""+n+o+E+"="+e+s}),l.next=11,t.default.awrap(this.updateLoginData());case 11:return u.loginData=l.sent,u.env="qa"===r.dev.env?0:1,u.type="REDIRECT",l.abrupt("return",u);case 15:case"end":return l.stop()}}),null,this)},resetEnv:function(){var e=this.data.webviewData,t=(U()||{}).dev.env;this.setData({webviewData:(0,r.default)({},e,{env:"qa"===t?0:1})})},resolveLoginTag:function(){var e,a,r,n,i=this;return t.default.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=this.data._type,a=getApp(),r=a[E],this.resetEnv(),r){o.next=8;break}if(!this.onHideRemain){o.next=7;break}return o.abrupt("return",!1);case 7:return o.abrupt("return",this.setData({xmlType:e}));case 8:return o.next=10,t.default.awrap(this.getRefreshWebviewData(r));case 10:return n=o.sent,a[E]=null,o.abrupt("return",this.setData({xmlType:null},(function(){clearTimeout(M),M=setTimeout((function(){i.setData({xmlType:A,webviewData:n})}),120)})));case 13:case"end":return o.stop()}}),null,this)},checkSceneToHome:function(){if(this.data.loaded){var e=this.data.scenes,t=void 0===e?null:e,a=String(wx.getStorageSync("wx_scene")||0);a&&t&&t.length&&-1!==t.indexOf(a)&&wx.switchTab({url:"/pages/index/index"}),this.resolveLoginTag(),this.resetQrcodeType()}else this.setData({loaded:!0})},clearShareConfig:function(){wx.removeStorageSync("webviewShareConfig")},updatePartData:function(e){var t=this.data.webviewData,a=JSON.parse(JSON.stringify(t),(function(e,t){if(-1===H.indexOf(e))return t}));"REDIRECT"!==e||a.loginData||this.updateLoginData(a),this.updateWebview(a)},storeDataIfNeed:function(e,t){void 0===t&&(t=N);var a=this.data.webviewData;if(!a)return!1;var r=a.webviewUrl;j(e)&&(t=e,e=a.type),r&&this.needStoreUrl(r)&&wx.setStorageSync("webviewUrl",r),this.updatePartData(e),j(t)&&t.call(this)},onHide:function(){var e=this;this.storeDataIfNeed((function(){e.onHideRemain||e.setData({xmlType:null})})),this.banShare&&wx.updateShareMenu({isPrivateMessage:!1})},onUnload:function(){this.clearShareConfig(),this.rollbackWebview(),this.banShare&&wx.updateShareMenu({isPrivateMessage:!1}),"paySdk"===this.data.from&&this.handlePageClose()},handlePageClose:function(){try{var e=this.getOpenerEventChannel();e&&"function"==typeof e.emit&&e.emit("webviewClosed")}catch(e){}},addLxPassData:function(){var e;return t.default.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!this.data.lxPassData){a.next=2;break}return a.abrupt("return");case 2:return e=["appnm"],"A"===c.abtest.getCache("wm_webview_add_uid_gray")&&e.push("uid"),a.next=6,t.default.awrap((0,l.setURLEnv)({withEnvKeys:e}));case 6:this.data.lxPassData=a.sent;case 7:case"end":return a.stop()}}),null,this)},addLxUrlEnv:function(e,a,r){var n,o;return t.default.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,n=e,["acstatic/merchantcoupon"].find((function(e){return(""+a.pathname).includes(e)}))){s.next=10;break}return s.next=6,t.default.awrap(this.addLxPassData());case 6:o=this.data.lxPassData.split("&").reduce((function(e,t){if(-1===(""+t).indexOf("="))e.__lxsdk_params=t;else{var a=(""+t).split("="),r=a[0],n=a[1];e[r]=n}return e}),{}),Object.keys(o).forEach((function(e){r[e]=o[e]})),delete a.search,n=i.default.format(a);case 10:return s.abrupt("return",n);case 13:return s.prev=13,s.t0=s.catch(0),s.abrupt("return",e);case 16:case"end":return s.stop()}}),null,this,[[0,13]])}};(0,n.page)(q(V,T,z,L));
},{isPage:true,isComponent:true,currentFile:'pages/web-view/web-view.js'});require("pages/web-view/web-view.js");$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];
function gz$gwx_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-root'])
Z([3,'load'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./pages/activity-invite/activity-invite.wxml','../../components/sub_inner_nav/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var oXI=_n('view')
_rz(z,oXI,'id',0,e,s,gg)
var fYI=e_[x[0]].i
_ai(fYI,x[1],e_,x[0],1,22)
var cZI=_v()
_(oXI,cZI)
var h1I=_oz(z,1,e,s,gg)
var o2I=_gd(x[0],h1I,e_,d_)
if(o2I){
var c3I={}
var cur_globalf=gg.f
cZI.wxXCkey=3
o2I(c3I,c3I,cZI,gg)
gg.f=cur_globalf
}
else _w(h1I,x[0],1,99)
fYI.pop()
_(r,oXI)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/activity-invite/activity-invite.wxml'] = [$gwx_XC_3, './pages/activity-invite/activity-invite.wxml'];else __wxAppCode__['pages/activity-invite/activity-invite.wxml'] = $gwx_XC_3( './pages/activity-invite/activity-invite.wxml' );
	;__wxRoute = "pages/activity-invite/activity-invite";__wxRouteBegin = true;__wxAppCurrentFile__="pages/activity-invite/activity-invite.js";define("pages/activity-invite/activity-invite.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var n=require("../../components/sub_inner_nav/index");Page({onLoad:function(){n()}});
},{isPage:true,isComponent:true,currentFile:'pages/activity-invite/activity-invite.js'});require("pages/activity-invite/activity-invite.js");$gwx_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];
function gz$gwx_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_4=true;
var x=['./pages/addr-add/addr-add.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_4_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/addr-add/addr-add.wxml'] = [$gwx_XC_4, './pages/addr-add/addr-add.wxml'];else __wxAppCode__['pages/addr-add/addr-add.wxml'] = $gwx_XC_4( './pages/addr-add/addr-add.wxml' );
	;__wxRoute = "pages/addr-add/addr-add";__wxRouteBegin = true;__wxAppCurrentFile__="pages/addr-add/addr-add.js";define("pages/addr-add/addr-add.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var r=require("../../utils/redirParam");Page({onLoad:function(a){wx.redirectTo({url:"/packages/loc/addr-add/addr-add?"+r(a)})}});
},{isPage:true,isComponent:true,currentFile:'pages/addr-add/addr-add.js'});require("pages/addr-add/addr-add.js");$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./pages/channel-page/channel-page.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/channel-page/channel-page.wxml'] = [$gwx_XC_5, './pages/channel-page/channel-page.wxml'];else __wxAppCode__['pages/channel-page/channel-page.wxml'] = $gwx_XC_5( './pages/channel-page/channel-page.wxml' );
	;__wxRoute = "pages/channel-page/channel-page";__wxRouteBegin = true;__wxAppCurrentFile__="pages/channel-page/channel-page.js";define("pages/channel-page/channel-page.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../utils/redirParam");Page({onLoad:function(a){wx.redirectTo({url:"/packages/index/channel-page/channel-page?"+e(a)})}});
},{isPage:true,isComponent:true,currentFile:'pages/channel-page/channel-page.js'});require("pages/channel-page/channel-page.js");$gwx_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];
function gz$gwx_XC_6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-root'])
Z([3,'load'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_6=true;
var x=['./pages/complain/complain.wxml','../../components/sub_inner_nav/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_6_1()
var t7I=_n('view')
_rz(z,t7I,'id',0,e,s,gg)
var e8I=e_[x[0]].i
_ai(e8I,x[1],e_,x[0],1,22)
var b9I=_v()
_(t7I,b9I)
var o0I=_oz(z,1,e,s,gg)
var xAJ=_gd(x[0],o0I,e_,d_)
if(xAJ){
var oBJ={}
var cur_globalf=gg.f
b9I.wxXCkey=3
xAJ(oBJ,oBJ,b9I,gg)
gg.f=cur_globalf
}
else _w(o0I,x[0],1,99)
e8I.pop()
_(r,t7I)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_6";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/complain/complain.wxml'] = [$gwx_XC_6, './pages/complain/complain.wxml'];else __wxAppCode__['pages/complain/complain.wxml'] = $gwx_XC_6( './pages/complain/complain.wxml' );
	;__wxRoute = "pages/complain/complain";__wxRouteBegin = true;__wxAppCurrentFile__="pages/complain/complain.js";define("pages/complain/complain.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var n=require("../../components/sub_inner_nav/index");Page({onLoad:function(){n()}});
},{isPage:true,isComponent:true,currentFile:'pages/complain/complain.js'});require("pages/complain/complain.js");$gwx_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];
function gz$gwx_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_7=true;
var x=['./pages/external/brand.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_7_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_7";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/external/brand.wxml'] = [$gwx_XC_7, './pages/external/brand.wxml'];else __wxAppCode__['pages/external/brand.wxml'] = $gwx_XC_7( './pages/external/brand.wxml' );
	;__wxRoute = "pages/external/brand";__wxRouteBegin = true;__wxAppCurrentFile__="pages/external/brand.js";define("pages/external/brand.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var r=require("../../utils/redirParam");Page({onLoad:function(e){w