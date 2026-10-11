{},(N,C)=>{if(C)L(N,"c_r-weakening-title")},u);E("text",{},(N,C)=>{if(C)L(N,"c_r-weakening-money")},v)},w,y=(C,T)=>{C||K||U.payType?T(Y(D.payType)):T()},x=(C,T,E)=>{if(w===1){E("view",{},(N,C)=>{if(C)L(N,"c_r-weakening-pay-type")},y)}},r=(C,T,E,B)=>{E("view",{},(N,C)=>{if(C)L(N,"c_r-weakening-title-line")},s);w=D.payType?1:0;B(w,x)},q=(C,T,E)=>{if(p===1){E("view",{},(N,C)=>{if(C)L(N,"c_r-weakening-header")},r)}},z,C0=(C,T)=>{C||K||U.haveDiscount?T(Y(D.haveDiscount)):T()},E0=(C,T)=>{C?T("查看"):T()},F0=(C)=>{},D0=(C,T,E)=>{E("text",{},(N,C)=>{},E0);E("text",{},(N,C)=>{var $A=D.showDiscountDetail;if(C||K||!!U.showDiscountDetail||($A?undefined:undefined))L(N,$A?"arrow reversal":"arrow")},F0)},B0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"number")},C0);E("view",{},(N,C)=>{if(C)L(N,"hot-zone");if(C)O(N,"bindtap","triggerDetail")},D0)},A0=(C,T,E)=>{if(z===1){E("view",{},(N,C)=>{if(C)L(N,"c_r-discount")},B0)}},G0,J0=(C,K0,L0,M0,N0,O0,T,E)=>{var Q0=(C,T)=>{C||K||Z(M0,"subText")?T(Y(X(K0).subText)):T()},R0=(C,T)=>{C||K||!!Z(M0,"reduce")||undefined?T(Y("-"+Y(X(K0).reduce))):T()},P0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"text")},Q0);E("text",{},(N,C)=>{if(C)L(N,"number")},R0)};E("view",{},(N,C)=>{var $A=L0>0;if(C||K||!!(N0||($A?undefined:undefined))||undefined)L(N,"c_r-detail "+Y($A?"c_r-detail-gap":""))},P0);N0=undefined;M0=undefined},I0=(C,T,E,B,F)=>{F(D.discount,"index",C||K?undefined:U.discount,[0,"discount"],J0)},H0=(C,T,E)=>{if(G0===1){E("view",{},(N,C)=>{if(C)L(N,"tiny-promotion")},I0)}},K0,N0=(C)=>{},M0=(C,T,E)=>{E("fup-ocr-cell",{},(N,C)=>{if(C||K||U.ocrData)O(N,"info",D.ocrData)},N0)},P0=(C)=>{},O0=(C,T,E)=>{E("fup-pgy-cell",{},(N,C)=>{if(C||K||U.walletSpaceMaterial)O(N,"info",D.walletSpaceMaterial)},P0)},L0=(C,T,E)=>{if(K0===1){E("view",{},(N,C)=>{var $A=D.haveDiscount;if(C||K||!!(U.haveDiscount||($A?undefined:undefined))||undefined)L(N,"c_r-mt-"+Y($A?24:80))},M0)}else if(K0===2){E("view",{},(N,C)=>{var $A=D.haveDiscount;if(C||K||!!(U.haveDiscount||($A?undefined:undefined))||undefined)L(N,"c_r-mt-"+Y($A?24:80))},O0)}},Q0=(C,R0,S0,T0,U0,V0,T,E,B)=>{var W0,Y0,b0=(C)=>{},a0=(C,T,E)=>{E("fup-pgy-cell",{},(N,C)=>{if(C||K||Q.a([T0]))O(N,"info",[R0])},b0)},d0=(C)=>{},c0=(C,T,E)=>{E("fup-financial-cell",{},(N,C)=>{if(C||K||T0)O(N,"info",R0);if(C||K||!!U0||undefined)O(N,"is-first",S0===0)},d0)},Z0=(C,T,E)=>{if(Y0===1){E("view",{},(N,C)=>{var $A=S0>0;if(C||K||!!(U0||($A?undefined:undefined))||undefined)L(N,"c_r-mt-"+Y($A?20:74))},a0)}else{E("view",{},(N,C)=>{var $A=S0>0;if(C||K||!!(U0||($A?undefined:undefined))||undefined)L(N,"c_r-mt-"+Y($A?20:74))},c0)}},X0=(C,T,E,B)=>{if(W0===1){Y0=X(R0).isSimple==="true"?1:0;B(Y0,Z0)}};W0=D.showFinancial?1:0;B(W0,X0);U0=undefined;T0=undefined},R0,U0=(C)=>{},T0=(C,T,E)=>{E("marketing-banner",{},(N,C)=>{if(C||K||U.miniPayBanner)O(N,"info",D.miniPayBanner)},U0)},S0=(C,T,E)=>{if(R0===1){E("view",{},(N,C)=>{var $A=D.showOcr||D.showWallet||D.showFinancial;if(C||K||!!(U.showOcr||U.showWallet||U.showFinancial||($A?undefined:undefined))||undefined)L(N,"c_r-mt-"+Y($A?20:80))},T0)}},V0,Y0=(C)=>{},X0=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"peace-mini-program-img");if(C||K||Z(U.peaceMiniProgram,"resourcesUrl"))O(N,"src",X(D.peaceMiniProgram).resourcesUrl);if(C)O(N,"bindtap","signWXPasswordFree");if(C)O(N,"mode","widthFix");if(C)O(N,"binderror","_onImageError")},Y0)},W0=(C,T,E)=>{if(V0===1){E("view",{},(N,C)=>{var $A=D.haveDiscount||D.showOcr||D.showWallet||D.showFinancial;if(C||K||!!(U.haveDiscount||U.showOcr||U.showWallet||U.showFinancial||($A?undefined:undefined))||undefined)L(N,"peace-mini-program c_r-mt-"+Y($A?20:80))},X0)}},Z0=(C)=>{},d=(C,T,E,B,F)=>{E("view",{},(N,C)=>{if(C)L(N,"c_r-padding-top")},e);f=!D.weakeningBtnStyle?1:0;B(f,g);p=D.weakeningBtnStyle?1:0;B(p,q);z=D.haveDiscount?1:0;B(z,A0);G0=D.haveDiscount&&D.showDiscountDetail?1:0;B(G0,H0);K0=D.showOcr?1:D.showWallet?2:0;B(K0,L0);F(D.miniFinancialRecommend,"index",C||K?undefined:U.miniFinancialRecommend,[0,"miniFinancialRecommend"],Q0);R0=D.showMarketingBanner?1:0;B(R0,S0);V0=D.showPeace?1:0;B(V0,W0);E("view",{},(N,C)=>{if(C)L(N,"c_r-padding-bottom")},Z0)},a0,c0=(C,T)=>{C?T("完成"):T()},b0=(C,T,E)=>{if(a0===1){E("view",{},(N,C)=>{var $A=D.weakeningBtnStyle;if(C||K||!!(U.weakeningBtnStyle||($A?undefined:undefined))||undefined)L(N,"c_r-button "+Y($A?"c_r-button-weakening":""));if(C||K||U.weakeningBtnStyle)R.y(N,D.weakeningBtnStyle);if(C)O(N,"bindtap","completeBtnHandler")},c0)}},d0,f0=(C,T)=>{C?T(" 完成 "):T()},e0=(C,T,E)=>{if(d0===1){E("button",{},(N,C)=>{if(C)L(N,"c_r-button");if(C||K||U.launchParams)O(N,"app-parameter",D.launchParams);if(C)O(N,"open-type","launchApp");if(C)O(N,"binderror","launchAppError");if(C)O(N,"bindtap","completeBtnClickTrack")},f0)}},b=(C,T,E,B)=>{E("nav-bar",{},(N,C)=>{},c);E("scroll-view",{},(N,C)=>{if(C)L(N,"c_r-scroll");if(C)O(N,"scroll-y",true)},d);a0=!D.isBackToApp?1:0;B(a0,b0);d0=D.isBackToApp?1:0;B(d0,e0)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C||K||!!U.renderer||undefined)L(N,"c_r-container tiny "+Y(D.renderer));A["renderer"][0]=(D,E,T)=>{L(N,"c_r-container tiny "+Y(D.renderer))};if(C)R.i(N,"page-root")},b);C=!1;U=Object.create(null);K=!1};A=A||{"renderer":new Array(1)};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packages/finance-pay/pages/promotion/components/fup-financial-cell/index.wxss']=setCssToHead([".",[1],"c_financial-box{-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-image:url(https://s3.meituan.net/static-prod01/com.sankuai.fspfepayresource.payresult-files/financial-img.png);background-size:100% 100%;border-radius:",[0,20],";display:-webkit-box;display:-webkit-flex;display:flex;height:",[0,132],";margin-left:",[0,24],";overflow:hidden;position:relative;width:",[0,702],"}\n.",[1],"c_financial-icon{-webkit-flex-shrink:0;flex-shrink:0;height:",[0,76],";margin-left:",[0,28],";width:",[0,76],"}\n.",[1],"c_financial-content{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:",[0,68],";min-width:0;overflow:hidden;padding-right:",[0,166],"}\n.",[1],"c_financial-title{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;font-family:PingFangSC-Medium;font-size:",[0,28],";font-weight:500;line-height:",[0,28],";overflow:hidden}\n.",[1],"c_financial-title-prefix{color:#191919;font-size:",[0,28],"}\n.",[1],"c_financial-title-prefix,.",[1],"c_financial-title-primary{-webkit-flex-shrink:0;flex-shrink:0;white-space:nowrap}\n.",[1],"c_financial-title-primary{color:#ff2d19}\n.",[1],"c_financial-title-suffix{-webkit-flex-shrink:1;flex-shrink:1;font-size:",[0,28],";min-width:0}\n.",[1],"c_financial-tag,.",[1],"c_financial-title-suffix{color:#191919;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"c_financial-tag{-webkit-box-align:center;-webkit-box-pack:center;-webkit-align-items:center;align-items:center;background:#fd0;border:1px solid #fff;border-radius:",[0,100],";bottom:",[0,28],";display:-webkit-box;display:-webkit-flex;display:flex;font-family:PingFang SC;font-size:",[0,20],";font-weight:400;height:",[0,28],";-webkit-justify-content:center;justify-content:center;left:",[0,24],";line-height:",[0,28],";position:absolute;width:",[0,76],";word-break:keep-all}\n.",[1],"c_financial-sub{color:#999;display:block;font-family:PingFangSC-Regular;font-size:",[0,22],";font-weight:400;line-height:",[0,22],";margin-top:",[0,16],";max-width:100%}\n.",[1],"c_financial-btn,.",[1],"c_financial-sub{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"c_financial-btn{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:-webkit-linear-gradient(336deg,#ff2e70,#f02);background:linear-gradient(114deg,#ff2e70,#f02);border-radius:",[0,40],";box-sizing:border-box;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;font-family:PingFangSC-Medium;font-size:",[0,26],";font-weight:500;height:",[0,52],";-webkit-justify-content:center;justify-content:center;line-height:",[0,36],";padding:",[0,8]," ",[0,20],";position:absolute;right:",[0,24],";top:",[0,40],";width:",[0,118],"}\n",],undefined,{path:"./packages/finance-pay/pages/promotion/components/fup-financial-cell/index.wxss"});__wxAppCode__['packages/finance-pay/pages/promotion/components/fup-ocr-cell/index.wxss']=setCssToHead([".",[1],"ocr-cell{background:-webkit-linear-gradient(right,#fff9d5,#fff 58%),#fff;background:linear-gradient(270deg,#fff9d5,#fff 58%),#fff;border-radius:",[0,24],";height:",[0,608],";margin-left:",[0,24],";overflow:hidden;position:relative;width:",[0,702],"}\n.",[1],"ocr-bg,.",[1],"ocr-bg-placeholder{height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}\n.",[1],"ocr-bg-placeholder{background:#fff}\n.",[1],"ocr-content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;padding:",[0,44]," ",[0,32],";position:relative;z-index:2}\n.",[1],"ocr-title{color:#111;font-size:",[0,40],";font-weight:500;margin-bottom:",[0,8],"}\n.",[1],"ocr-subtitle,.",[1],"ocr-title{font-family:PingFang SC,-apple-system,sans-serif;text-align:center}\n.",[1],"ocr-subtitle{color:#888;font-size:",[0,28],";margin-bottom:",[0,24],";max-width:",[0,600],";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"ocr-btn-wrapper{bottom:",[0,44],";left:0;right:0}\n.",[1],"ocr-btn-wrapper,.",[1],"ocr-bubble{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;position:absolute}\n.",[1],"ocr-bubble{-webkit-box-pack:center;background:#ff2d19;border-radius:",[0,16]," ",[0,16]," ",[0,16]," ",[0,2],";bottom:",[0,64],";color:#fff;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;font-family:PingFang SC,-apple-system,sans-serif;font-size:",[0,22],";font-weight:500;gap:",[0,10],";-webkit-justify-content:center;justify-content:center;line-height:",[0,31],";max-width:",[0,240],";padding:0 ",[0,10],";right:",[0,66],";z-index:1}\n.",[1],"ocr-bubble,.",[1],"ocr-bubble-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"ocr-bubble-text{max-width:100%;min-width:0}\n.",[1],"ocr-btn{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-pack:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:-webkit-linear-gradient(352deg,#ffe74d,#fd0);background:linear-gradient(98deg,#ffe74d,#fd0);border-radius:",[0,40],";display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;height:",[0,80],";-webkit-justify-content:center;justify-content:center;width:",[0,570],"}\n.",[1],"ocr-btn-text{color:#111;font-family:PingFang SC,-apple-system,sans-serif;font-size:",[0,30],";font-weight:500;line-height:",[0,44],";text-align:center}\n.",[1],"ocr-btn-image{border-radius:",[0,40],";height:",[0,80],";width:",[0,584],"}\n",],undefined,{path:"./packages/finance-pay/pages/promotion/components/fup-ocr-cell/index.wxss"});__wxAppCode__['packages/finance-pay/pages/promotion/components/fup-pgy-cell/index.wxss']=setCssToHead([".",[1],"c_fup-box{background:#fff;border-radius:",[0,20],";font-size:",[0,24],";height:",[0,136],";margin-left:",[0,24],";overflow:hidden;position:relative;width:",[0,702],"}\n.",[1],"c_fup-icon{height:",[0,36],";left:",[0,24],";position:absolute;top:",[0,32],";width:",[0,36],"}\n.",[1],"c_fup-tag{-webkit-box-align:center;-webkit-box-pack:center;-webkit-align-items:center;align-items:center;background:#ff411a;border-radius:",[0,18]," ",[0,18]," ",[0,18]," ",[0,2],";color:#fff;font-family:PingFangSC-Regular;font-size:",[0,20],";font-weight:400;height:",[0,36],";-webkit-justify-content:center;justify-content:center;line-height:",[0,20],";margin-top:",[0,-4],";padding:0 ",[0,10],";word-break:keep-all}\n.",[1],"c_fup-tag,.",[1],"c_fup-title{-webkit-box-orient:horizontal;-webkit-box-direction:normal;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row}\n.",[1],"c_fup-title{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;font-family:PingFangSC-Medium;font-size:",[0,28],";font-weight:500;height:",[0,28],";line-height:",[0,28],";padding:",[0,36]," ",[0,172]," 0 ",[0,72],"}\n.",[1],"c_fup-title-normal{color:#191919;margin-right:",[0,8],";word-break:keep-all}\n.",[1],"c_fup-title-primary{color:#ff2d19;margin-right:",[0,8],";word-break:keep-all}\n.",[1],"c_fup-sub{color:#999;padding:",[0,16]," ",[0,172]," 0 ",[0,72],";word-break:keep-all}\n.",[1],"c_fup-btn,.",[1],"c_fup-sub{font-family:PingFangSC-Regular;font-size:",[0,24],";font-weight:400;line-height:",[0,24],"}\n.",[1],"c_fup-btn{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#666;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;position:absolute;right:",[0,24],";top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}\n.",[1],"c_fup-arrow{background:url(\x22data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMATQI3RimhedAYAAAAVUlEQVQ4y2OgH2AKcVXAI80qKGiER5pFUFBYAZ80Xu2sgni1Mxni1648qn1UO220B+DX7kCONMJwMpyG8Nio5lHN5GlGFLlkFNiI4p6cygJR1dANAAAwoh2vYIgTcgAAAABJRU5ErkJggg\x3d\x3d\x22) no-repeat 50%;background-size:contain;display:block;height:",[0,20],";width:",[0,20],"}\n",],undefined,{path:"./packages/finance-pay/pages/promotion/components/fup-pgy-cell/index.wxss"});__wxAppCode__['packages/finance-pay/pages/promotion/components/marketing-banner/index.wxss']=setCssToHead([".",[1],"c_marketing-banner{border-radius:",[0,20],";margin-left:",[0,24],";overflow:hidden;width:",[0,702],"}\n.",[1],"c_marketing-banner-img{display:block;max-height:",[0,200],";width:",[0,702],"}\n",],undefined,{path:"./packages/finance-pay/pages/promotion/components/marketing-banner/index.wxss"});__wxAppCode__['packages/finance-pay/pages/promotion/index.wxss']=setCssToHead(["body{background-color:#f5f5f5;margin:0;padding:0}\n@font-face{font-family:MTfin;src:url(https://s3.meituan.net/static-prod01/com.sankuai.fspfepayresource.payresult-files/MeituanDigitalType-SemiBold.ttf)}\n.",[1],"c_r-container{-webkit-box-orient:vertical;-webkit-box-direction:normal;box-sizing:border-box;color:#222;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100vh;position:relative}\n.",[1],"c_r-scroll{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%}\n.",[1],"c_r-padding-top{height:",[0,82],"}\n.",[1],"c_r-padding-bottom{height:",[0,120],"}\n.",[1],"c_r-scroll .",[1],"c_r-icon{display:block;height:",[0,90],";margin:0 auto;width:",[0,90],"}\n.",[1],"c_r-title{-webkit-box-align:center;-webkit-box-pack:center;-webkit-align-items:center;align-items:center;color:#111;display:-webkit-box;display:-webkit-flex;display:flex;font-family:PingFangSC-Medium;font-size:",[0,40],";font-weight:500;-webkit-justify-content:center;justify-content:center;line-height:",[0,64],";margin-top:",[0,17],";text-align:center}\n.",[1],"c_r-title .",[1],"unit{margin-left:",[0,12],"}\n.",[1],"c_r-title .",[1],"money,.",[1],"c_r-title .",[1],"unit{font-family:MTfin;font-size:",[0,44],"}\n.",[1],"c_r-discount{-webkit-box-align:center;-webkit-box-pack:center;-webkit-align-items:center;align-items:center;color:#666;display:-webkit-box;display:-webkit-flex;display:flex;font-size:",[0,24],";font-weight:400;height:",[0,24],";-webkit-justify-content:center;justify-content:center;line-height:",[0,24],";margin-top:",[0,16],";text-align:center}\n.",[1],"c_r-discount .",[1],"number{margin-right:",[0,16],"}\n.",[1],"hot-zone{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex}\n.",[1],"arrow{background:url(\x22data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMATQI3RimhedAYAAAAVUlEQVQ4y2OgH2AKcVXAI80qKGiER5pFUFBYAZ80Xu2sgni1Mxni1648qn1UO220B+DX7kCONMJwMpyG8Nio5lHN5GlGFLlkFNiI4p6cygJR1dANAAAwoh2vYIgTcgAAAABJRU5ErkJggg\x3d\x3d\x22) no-repeat 50%;background-size:contain;-webkit-flex-shrink:0;flex-shrink:0;height:",[0,20],";margin-left:",[0,8],";-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;width:",[0,20],"}\n.",[1],"arrow.",[1],"reversal{-webkit-transform:rotate(-90deg) translateX(",[0,-8],");transform:rotate(-90deg) translateX(",[0,-8],");-webkit-transform-origin:50% 50%;transform-origin:50% 50%}\n.",[1],"tiny-promotion{background:rgba(0,0,0,.03);border-radius:",[0,24],";box-sizing:border-box;font-family:PingFangSC-Regular;margin:",[0,24]," auto 0;padding:",[0,42]," ",[0,24],";width:",[0,702],"}\n.",[1],"c_r-detail{-webkit-box-align:center;-webkit-box-pack:justify;-webkit-align-items:center;align-items:center;color:rgba(0,0,0,.9);display:-webkit-box;display:-webkit-flex;display:flex;font-size:",[0,28],";font-weight:400;-webkit-justify-content:space-between;justify-content:space-between;line-height:",[0,28],";margin:0;min-height:",[0,28],";padding:0}\n.",[1],"c_r-detail-gap{margin-top:",[0,30],"}\n.",[1],"c_r-detail .",[1],"text{-webkit-box-flex:1;-webkit-flex:1;flex:1}\n.",[1],"c_r-detail .",[1],"number{-webkit-flex-shrink:0;flex-shrink:0}\n.",[1],"c_r-mt-20{margin-top:",[0,20],"}\n.",[1],"c_r-mt-24{margin-top:",[0,24],"}\n.",[1],"c_r-mt-74{margin-top:",[0,74],"}\n.",[1],"c_r-mt-80{margin-top:",[0,80],"}\n.",[1],"peace-mini-program{padding:0 ",[0,24],";text-align:center}\n.",[1],"peace-mini-program-img{display:block;width:",[0,702],"}\n.",[1],"c_r-pay-type{font-family:PingFangSC-Regular;font-size:",[0,22],";height:",[0,32],";line-height:",[0,32],";margin-top:",[0,16],"}\n.",[1],"c_r-button,.",[1],"c_r-pay-type{color:#111;text-align:center}\n.",[1],"c_r-button{background-color:#ffd100;background-image:-webkit-linear-gradient(316deg,#ffe74d,#ffdd19);background-image:linear-gradient(134deg,#ffe74d,#ffdd19);border:0;border-radius:",[0,48],";-webkit-flex-shrink:0;flex-shrink:0;font-size:",[0,28],";font-weight:500;height:",[0,96],";line-height:",[0,96],";margin:0 ",[0,24]," calc(",[0,24]," + env(safe-area-inset-bottom) / 2);width:",[0,702],"}\n.",[1],"c_r-weakening-header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-webkit-box-pack:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;padding-top:",[0,9],"}\n.",[1],"c_r-weakening-icon{display:block;height:",[0,57],";margin-right:",[0,10],";width:",[0,57],"}\n.",[1],"c_r-weakening-title-line{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex}\n.",[1],"c_r-weakening-title{color:#111;font-size:",[0,40],";font-weight:500;line-height:",[0,56],"}\n.",[1],"c_r-weakening-money{color:#111;font-family:MTfin;font-size:",[0,44],";line-height:",[0,64],";margin-left:",[0,12],"}\n.",[1],"c_r-weakening-pay-type{color:#111;font-size:",[0,22],";line-height:",[0,32],";margin-top:",[0,6],"}\n.",[1],"c_r-button-weakening{background-image:none;font-size:",[0,32],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/pages/promotion/index.wxss:1:1)",{path:"./packages/finance-pay/pages/promotion/index.wxss"});
}$gwx42_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'_onImageError'])
Z([3,'c_signed-icon'])
Z([3,'heightFix'])
Z([[7],[3,'iconSuccess']])
Z([a,[3,'c_sign-title '],[[2,'?:'],[[7],[3,'signed']],[1,'c_signed-title'],[1,'']],[3,' f_w_500']])
Z([a,[3,' '],[[2,'?:'],[[7],[3,'signed']],[1,'已开通微信免密支付服务'],[1,'开通微信免密支付']],[3,' ']])
Z([3,'c_sign-des f_s_28'])
Z([a,z[10][1],[[2,'?:'],[[7],[3,'signed']],[1,'订单金额≤200元时无需验证密码'],[1,'单笔最高200元']],z[10][1]])
Z([3,'c_sign-info mb_100'])
Z([3,'c_sign-main-bg'])
Z(z[4])
Z([3,'c_signed-btn-wapper'])
Z([3,'goClose'])
Z([3,'c_sign-btn  c_sign-btn-close f_s_32 f_w_600'])
Z([3,' 关闭服务 '])
Z([3,'c_sign-tip f_s_24'])
Z([3,' 温馨提示：如需调整优先支付方式，可前往微信-我-服务-钱包-支付设置-免密支付-美团微信免密支付进行操作 '])
Z([3,'goSign'])
Z([a,[3,'c_sign-btn f_s_32 f_w_600 '],[[2,'?:'],[[7],[3,'loading']],[1,'c_loading'],[1,'']]])
Z([3,' 确认 '])
Z([3,'quit'])
Z([3,'f_s_28 c_sign-sub-btn'])
Z([3,' 不感兴趣 '])
Z([3,'c_sign-err'])
Z(z[5])
Z([3,'c_err-img'])
Z(z[7])
Z([3,'https://s3.meituan.net/static-prod01/com.sankuai.fspfepayresource.payresult-files/error.png'])
Z([3,'c_err-title f_s_32 f_w_500'])
Z([3,' 无法连接到网络 '])
Z([3,'c_err-des f_s_28'])
Z([3,' 请检查网络设置或稍后重试 '])
Z([3,'retry'])
Z([3,'c_err-btn'])
Z([3,' 重试 '])
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
var cF=_mz(z,'image',['binderror',5,'class',1,'mode',2,'src',3],[],e,s,gg)
_(oD,cF)
}
var hG=_n('view')
_rz(z,hG,'class',9,e,s,gg)
var oH=_oz(z,10,e,s,gg)
_(hG,oH)
_(xC,hG)
var cI=_n('view')
_rz(z,cI,'class',11,e,s,gg)
var oJ=_oz(z,12,e,s,gg)
_(cI,oJ)
_(xC,cI)
var lK=_n('view')
_rz(z,lK,'class',13,e,s,gg)
var aL=_n('view')
_rz(z,aL,'class',14,e,s,gg)
_(lK,aL)
_(xC,lK)
var fE=_v()
_(xC,fE)
if(_oz(z,15,e,s,gg)){fE.wxVkey=1
var tM=_n('view')
_rz(z,tM,'class',16,e,s,gg)
var eN=_mz(z,'button',['bindtap',17,'class',1],[],e,s,gg)
var bO=_oz(z,19,e,s,gg)
_(eN,bO)
_(tM,eN)
var oP=_n('view')
_rz(z,oP,'class',20,e,s,gg)
var xQ=_oz(z,21,e,s,gg)
_(oP,xQ)
_(tM,oP)
_(fE,tM)
}
else{fE.wxVkey=2
var oR=_n('view')
var fS=_mz(z,'button',['bindtap',22,'class',1],[],e,s,gg)
var cT=_oz(z,24,e,s,gg)
_(fS,cT)
_(oR,fS)
var hU=_mz(z,'view',['bindtap',25,'class',1],[],e,s,gg)
var oV=_oz(z,27,e,s,gg)
_(hU,oV)
_(oR,hU)
_(fE,oR)
}
oD.wxXCkey=1
fE.wxXCkey=1
}
else{xC.wxVkey=2
var cW=_n('view')
_rz(z,cW,'class',28,e,s,gg)
var oX=_mz(z,'image',['binderror',29,'class',1,'mode',2,'src',3],[],e,s,gg)
_(cW,oX)
var lY=_n('view')
_rz(z,lY,'class',33,e,s,gg)
var aZ=_oz(z,34,e,s,gg)
_(lY,aZ)
_(cW,lY)
var t1=_n('view')
_rz(z,t1,'class',35,e,s,gg)
var e2=_oz(z,36,e,s,gg)
_(t1,e2)
_(cW,t1)
var b3=_mz(z,'button',['bindtap',37,'class',1],[],e,s,gg)
var o4=_oz(z,39,e,s,gg)
_(b3,o4)
_(cW,b3)
_(xC,cW)
}
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx42_XC_0";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx42_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/sign/index.wxml'] = [$gwx42_XC_0, './packages/finance-pay/pages/sign/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/sign/index.wxml'] = $gwx42_XC_0( './packages/finance-pay/pages/sign/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packages/finance-pay/pages/sign/index.wxss']=setCssToHead([".",[1],"f_s_24{font-size:",[0,24],"}\n.",[1],"f_s_28{font-size:",[0,28],"}\n.",[1],"f_s_32{font-size:",[0,32],"}\n.",[1],"f_w_500{font-weight:500}\n.",[1],"f_w_600{font-weight:600}\n.",[1],"mb_100{margin-bottom:",[0,100],"}\n.",[1],"mb_144{margin-bottom:",[0,144],"}\n.",[1],"c_sign-wrapper{background:#fff;height:100%;min-height:100vh;padding:0 ",[0,60],";text-align:center}\n.",[1],"c_sign-title{color:#111;font-size:",[0,48],";line-height:",[0,48],";margin-bottom:",[0,22],";padding-top:",[0,100],"}\n.",[1],"c_signed-title{padding-top:",[0,0],"}\n.",[1],"c_sign-des{color:#555;line-height:",[0,30],";margin-bottom:",[0,57],"}\n.",[1],"c_sign-main-bg{background:url(https://s3plus.meituan.net/static-prod01/com.sankuai.fspfepayresource.front.passwordfree-files/nopass-main.png) 100%/contain no-repeat;display:inline-block;height:",[0,156],";margin-top:",[0,23],";width:",[0,296],"}\n.",[1],"c_sign-btn{background-image:-webkit-linear-gradient(352deg,#ffe74d,#ffdd19);background-image:linear-gradient(98deg,#ffe74d,#ffdd19);border:none;border-radius:",[0,45],";color:#191919;height:",[0,90],";line-height:",[0,90],"}\n.",[1],"c_sign-btn:after{border:none}\n.",[1],"c_sign-sub-btn{color:#191919;margin-top:",[0,40],"}\n.",[1],"c_sign-btn.",[1],"c_loading{background:#fef8de;color:#d3a300}\