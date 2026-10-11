?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/badge-group/index',{"usingComponents":{"weapp-comp-privacy":"../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/ecny-wallet-half-drawer/index',{"usingComponents":{"pay-type":"../pay-type/index","weapp-comp-privacy":"../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/flatten-type/index',{"usingComponents":{"pre-pay-type-cell":"../pre-pay-type-cell/index","weapp-comp-privacy":"../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/half-drawer/index',{"usingComponents":{"weapp-comp-privacy":"../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/keyboard/index',{"usingComponents":{"weapp-comp-privacy":"../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/nav-bar/index',{"component":true,"styleIsolation":"isolated","usingComponents":{"weapp-comp-privacy":"../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/nopass-check-popup/index',{"usingComponents":{"weapp-comp-privacy":"../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/nopass-sign-popup/index',{"usingComponents":{"weapp-comp-privacy":"../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/pass-mt-pay/index',{"usingComponents":{"weapp-comp-privacy":"../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/password-input/index',{"usingComponents":{"weapp-comp-privacy":"../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/pay-type-cell/index',{"usingComponents":{"badge-group":"../badge-group/index","weapp-comp-privacy":"../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/pay-type/index',{"usingComponents":{"pay-type-cell":"../pay-type-cell/index","weapp-comp-privacy":"../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/pre-pay-type-cell/index',{"usingComponents":{"weapp-comp-privacy":"../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/preposition-payment-component/index',{"usingComponents":{"flatten-type":"../flatten-type/index","ecny-wallet-half-drawer":"../ecny-wallet-half-drawer/index","weixin-nopass-half-drawer":"../weixin-nopass-half-drawer/index","half-drawer":"../half-drawer/index","weapp-comp-privacy":"../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/risk-popup/index',{"usingComponents":{"weapp-comp-privacy":"../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/components/weixin-nopass-half-drawer/index',{"usingComponents":{"pay-type":"../pay-type/index","weapp-comp-privacy":"../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/index/index',{"usingComponents":{"weapp-comp-privacy":"../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/cashier/components/cashier-order-fee/index',{"usingComponents":{"pay-order-info":"../pay-order-info/index","suspend-menu":"../suspend-menu/index","weapp-comp-privacy":"../../../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/cashier/components/ecny-pay-type/index',{"usingComponents":{"pay-type-cell":"../../../../components/pay-type-cell/index","weapp-comp-privacy":"../../../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/cashier/components/ecny-wallet/index',{"usingComponents":{"weapp-comp-privacy":"../../../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/cashier/components/pass-verify/index',{"usingComponents":{"pass-mt-pay":"../../../../components/pass-mt-pay/index","password-input":"../../../../components/password-input/index","keyboard":"../../../../components/keyboard/index","weapp-comp-privacy":"../../../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/cashier/components/pay-order-info/index',{"usingComponents":{"weapp-comp-privacy":"../../../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/cashier/components/suspend-menu/index',{"usingComponents":{"weapp-comp-privacy":"../../../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/cashier/index',{"navigationBarBackgroundColor":"#f5f5f5","backgroundColorBottom":"#f5f5f5","backgroundColorTop":"#f5f5f5","navigationBarTextStyle":"black","navigationBarTitleText":"支付订单","usingComponents":{"cashier-order-fee":"./components/cashier-order-fee/index","pay-type":"../../components/pay-type/index","ecny-pay-type":"./components/ecny-pay-type/index","ecny-wallet":"./components/ecny-wallet/index","pass-verify":"./components/pass-verify/index","nopass-check-popup":"../../components/nopass-check-popup/index","nopass-sign-popup":"../../components/nopass-sign-popup/index","half-drawer":"../../components/half-drawer/index","risk-popup":"../../components/risk-popup/index","weapp-comp-privacy":"../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/debug/index',{"navigationStyle":"custom","lazyCodeLoading":"requiredComponents","renderer":"skyline","componentFramework":"glass-easel","rendererOptions":{"skyline":{"defaultDisplayBlock":true,"defaultContentBox":true,"tagNameStyleIsolation":"legacy","enableScrollViewAutoSize":true,"keyframeStyleIsolation":"legacy"}},"usingComponents":{"nav-bar":"../../components/nav-bar/index","preposition-payment-component":"../../components/preposition-payment-component/index","weapp-comp-privacy":"../../../../privacy/components/index"},"disableScroll":true,"glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/debug/result',{"lazyCodeLoading":"requiredComponents","renderer":"skyline","componentFramework":"glass-easel","navigationStyle":"custom","rendererOptions":{"skyline":{"defaultDisplayBlock":true,"defaultContentBox":true,"tagNameStyleIsolation":"legacy","enableScrollViewAutoSize":true,"keyframeStyleIsolation":"legacy"}},"usingComponents":{"nav-bar":"../../components/nav-bar/index","weapp-comp-privacy":"../../../../privacy/components/index"},"disableScroll":true,"glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/h5/index',{"navigationBarBackgroundColor":"#f5f5f5","backgroundColorBottom":"#f5f5f5","backgroundColorTop":"#f5f5f5","navigationBarTextStyle":"black","usingComponents":{"weapp-comp-privacy":"../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/pre-cashier/components/pass-verify/index',{"usingComponents":{"pass-mt-pay":"../../../../components/pass-mt-pay/index","password-input":"../../../../components/password-input/index","keyboard":"../../../../components/keyboard/index","weapp-comp-privacy":"../../../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/pre-cashier/components/pending-payment-page/index',{"usingComponents":{"flatten-type":"../../../../components/flatten-type/index","weapp-comp-privacy":"../../../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/pre-cashier/index',{"navigationBarBackgroundColor":"#f5f5f5","backgroundColorBottom":"#f5f5f5","backgroundColorTop":"#f5f5f5","navigationBarTextStyle":"black","usingComponents":{"half-drawer":"../../components/half-drawer/index","nopass-check-popup":"../../components/nopass-check-popup/index","nopass-sign-popup":"../../components/nopass-sign-popup/index","risk-popup":"../../components/risk-popup/index","pass-verify":"./components/pass-verify/index","pending-payment-page":"./components/pending-payment-page/index","ecny-wallet-half-drawer":"../../components/ecny-wallet-half-drawer/index","weixin-nopass-half-drawer":"../../components/weixin-nopass-half-drawer/index","weapp-comp-privacy":"../../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/promotion/components/fup-financial-cell/index',{"component":true,"usingComponents":{"weapp-comp-privacy":"../../../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/promotion/components/fup-ocr-cell/index',{"component":true,"usingComponents":{"weapp-comp-privacy":"../../../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/promotion/components/fup-pgy-cell/index',{"component":true,"usingComponents":{"weapp-comp-privacy":"../../../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/promotion/components/marketing-banner/index',{"component":true,"usingComponents":{"weapp-comp-privacy":"../../../../../../privacy/components/index"},"renderer":"skyline","glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/promotion/index',{"usingComponents":{"nav-bar":"../../components/nav-bar/index","fup-pgy-cell":"./components/fup-pgy-cell/index","fup-financial-cell":"./components/fup-financial-cell/index","fup-ocr-cell":"./components/fup-ocr-cell/index","marketing-banner":"./components/marketing-banner/index","weapp-comp-privacy":"../../../../privacy/components/index"},"navigationStyle":"custom","lazyCodeLoading":"requiredComponents","renderer":"skyline","componentFramework":"glass-easel","rendererOptions":{"skyline":{"defaultDisplayBlock":true,"defaultContentBox":true,"tagNameStyleIsolation":"legacy","enableScrollViewAutoSize":true,"keyframeStyleIsolation":"legacy"}},"disableScroll":true,"glassEaselCompatible":true});__wxCodeSpace__.addComponentStaticConfig('packages/finance-pay/pages/sign/index',{"navigationBarBackgroundColor":"#ffffff","backgroundColorBottom":"#f5f5f5","backgroundColorTop":"#f5f5f5","navigationBarTextStyle":"black","navigationBarTitleText":"微信免密支付","usingComponents":{"weapp-comp-privacy":"../../../../privacy/components/index"}});__wxCodeSpace__.setStyleScope('packages/finance-pay/components/badge-group/index','SE');__wxCodeSpace__.setStyleScope('packages/finance-pay/components/ecny-wallet-half-drawer/index','TE');__wxCodeSpace__.setStyleScope('packages/finance-pay/components/flatten-type/index','UE');__wxCodeSpace__.setStyleScope('packages/finance-pay/components/half-drawer/index','VE');__wxCodeSpace__.setStyleScope('packages/finance-pay/components/nav-bar/index','WE');__wxCodeSpace__.setStyleScope('packages/finance-pay/components/pay-type-cell/index','XE');__wxCodeSpace__.setStyleScope('packages/finance-pay/components/pay-type/index','YE');__wxCodeSpace__.setStyleScope('packages/finance-pay/components/pre-pay-type-cell/index','ZE');__wxCodeSpace__.setStyleScope('packages/finance-pay/components/preposition-payment-component/index','aE');__wxCodeSpace__.setStyleScope('packages/finance-pay/components/weixin-nopass-half-drawer/index','bE');__wxCodeSpace__.setStyleScope('packages/finance-pay/pages/debug/index',undefined);__wxCodeSpace__.setStyleScope('packages/finance-pay/pages/debug/result',undefined);__wxCodeSpace__.setStyleScope('packages/finance-pay/pages/promotion/components/fup-financial-cell/index','cE');__wxCodeSpace__.setStyleScope('packages/finance-pay/pages/promotion/components/fup-ocr-cell/index','dE');__wxCodeSpace__.setStyleScope('packages/finance-pay/pages/promotion/components/fup-pgy-cell/index','eE');__wxCodeSpace__.setStyleScope('packages/finance-pay/pages/promotion/components/marketing-banner/index','fE');__wxCodeSpace__.setStyleScope('packages/finance-pay/pages/promotion/index',undefined);__wxCodeSpace__.enableCodeChunk();__wxCodeSpace__.initializeCodeChunk("packages/finance-pay/chunk_0",["packages/finance-pay/components/badge-group/index","packages/finance-pay/components/half-drawer/index","packages/finance-pay/components/pay-type-cell/index","packages/finance-pay/components/pay-type/index"]);__wxCodeSpace__.initializeCodeChunk("packages/finance-pay/chunk_1",["packages/finance-pay/components/ecny-wallet-half-drawer/index","packages/finance-pay/components/flatten-type/index","packages/finance-pay/components/pre-pay-type-cell/index","packages/finance-pay/components/weixin-nopass-half-drawer/index"]);__wxCodeSpace__.initializeCodeChunk("packages/finance-pay/chunk_10",["packages/finance-pay/pages/promotion/components/fup-financial-cell/index","packages/finance-pay/pages/promotion/components/fup-ocr-cell/index","packages/finance-pay/pages/promotion/components/fup-pgy-cell/index","packages/finance-pay/pages/promotion/components/marketing-banner/index","packages/finance-pay/pages/promotion/index"]);__wxCodeSpace__.initializeCodeChunk("packages/finance-pay/chunk_11",["packages/finance-pay/pages/sign/index"]);__wxCodeSpace__.initializeCodeChunk("packages/finance-pay/chunk_2",["packages/finance-pay/components/keyboard/index","packages/finance-pay/components/nopass-check-popup/index","packages/finance-pay/components/nopass-sign-popup/index","packages/finance-pay/components/pass-mt-pay/index","packages/finance-pay/components/password-input/index","packages/finance-pay/components/risk-popup/index"]);__wxCodeSpace__.initializeCodeChunk("packages/finance-pay/chunk_3",["packages/finance-pay/components/nav-bar/index"]);__wxCodeSpace__.initializeCodeChunk("packages/finance-pay/chunk_4",["packages/finance-pay/components/preposition-payment-component/index","packages/finance-pay/pages/debug/index"]);__wxCodeSpace__.initializeCodeChunk("packages/finance-pay/chunk_5",["packages/finance-pay/index/index"]);__wxCodeSpace__.initializeCodeChunk("packages/finance-pay/chunk_6",["packages/finance-pay/pages/cashier/components/cashier-order-fee/index","packages/finance-pay/pages/cashier/components/ecny-pay-type/index","packages/finance-pay/pages/cashier/components/ecny-wallet/index","packages/finance-pay/pages/cashier/components/pass-verify/index","packages/finance-pay/pages/cashier/components/pay-order-info/index","packages/finance-pay/pages/cashier/components/suspend-menu/index","packages/finance-pay/pages/cashier/index"]);__wxCodeSpace__.initializeCodeChunk("packages/finance-pay/chunk_7",["packages/finance-pay/pages/debug/result"]);__wxCodeSpace__.initializeCodeChunk("packages/finance-pay/chunk_8",["packages/finance-pay/pages/h5/index"]);__wxCodeSpace__.initializeCodeChunk("packages/finance-pay/chunk_9",["packages/finance-pay/pages/pre-cashier/components/pass-verify/index","packages/finance-pay/pages/pre-cashier/components/pending-payment-page/index","packages/finance-pay/pages/pre-cashier/index"]);var __globalThis=(typeof __vd_version_info__!=='undefined'&&typeof __vd_version_info__.globalThis!=='undefined')?__vd_version_info__.globalThis:window;var __webviewId__=__webviewId__;var __wxAppCode__= __wxAppCode__||{};var __subPageFrameReady__=__globalThis.__subPageFrameReady__||function(){};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var __subPageFrameStartTime__=Date.now();;/*v0.5vv_20211229_syb_scopedata*/__globalThis.__wcc_version__='v0.5vv_20211229_syb_scopedata';__globalThis.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
var outerGlobal=typeof __globalThis==='undefined'?window:__globalThis;$gwx42=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
if (typeof $gwx === 'function') $gwx('init', global);
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
var z=__WXML_GLOBAL__.ops_set.$gwx42 || [];
__WXML_GLOBAL__.ops_set.$gwx42=z;
__WXML_GLOBAL__.ops_init.$gwx42=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=[];if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx42";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx42();__wxCodeSpace__.batchAddCompiledScripts(function(R,D,Q,gdc){;;});;var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__||{}
if (!__COMMON_STYLESHEETS__.hasOwnProperty('./packages/finance-pay/style/common.wxss'))__COMMON_STYLESHEETS__['./packages/finance-pay/style/common.wxss']=[".",[1],"flex-align,.",[1],"flex-center{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row}\n.",[1],"flex-center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\n.",[1],"space-between{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-pack:justify;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"pay-arrow{background-image:url(\x22data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAFN++nkAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACL3+lcAAAGIElEQVRoBe1bXWhcRRTu7maTresPxYf8vCj0qQ8qir6oUNvY0EqklYpFxJaY7CbRmL6I9UnjmwoGE/L/49KgRRcsom2sVqwtgiJYwb5UMA8V2sSgSUqj626SXb+j95SzN3N3596dzW5lL6TnZ2bOd765M3Nn595u2uTmGhkZGbTX90vH3Nzc4dHR0R+kT6mj0hIXZEVgJ+RtQs9W0TqT7RFWzkJRz4OaN7SrCireT6CLH1+XGcL2TUxM3KEq+B6FwXUFRXH4VFH7+/tvrampuZrJZE50dHSsT17VSOWjvsPfJVWZts8KkpINlGnLCmNjY4eR/jt+v//+SCSSNXodG6PRx2i0t7q6ektLS8v10SwDK3VKUVlQvs7h4eF7C0rbui3eeZdFgHShfZBQBVAtA6qhEFI58/o8d9wN1LCnp8ev6tm8nfP/q0BLGR4hj5li5rj8SQDq//r6+jXhO9be3v6MsF2rWsActbe3d3M4HP6LbchzSGC7sLVVV8AcVdEDF5HANi7XkZ6AZWDbFJhHArWy3EkvGJgDI4EV6FWWnUACN3GZSuqufKq2WT4ABfHwbrScm209kVWXDCOMMc0O+ny+oxwd+iPRaPQs2ypZEDBY9SDoayLwNjC/KGxH1RMwFpOj2OIc5Kjo4jrsj35jW0e6AgbDrxB0hwgcBkM5r0VRblULmDY2YHWeQ83OzgYwl9NsV2SlB268HojFYiFMpT6TmWut1alUKgHQblp/cWlNwXxJagFj7f2aA2HVSmMO81OI3a6ldvYA/AZsH2KEZDIZ6u7uTrLtVmoxpqB42jwMcYoB8DP878HBwZvZdiu1gSkw1uU9YB1nkKqqqmsDAwO3s+1GugKmwDhoOADwcQYJBoO/T05ONrCtK10DU2CARyHeYpDV1dXLGPFb2daRnoApMLr9CJi/IkB+Afhdws6pao9qpygAa0fZCJcjmQfRI9+y7SQLBqbA2HMdwFz/gEEA3gTw02yrpBFgCox5TiN+mkHS6fR9nZ2dP7Jtl57vsT0Q5vln8P3JfuxYnmddJY0xxr2mVazaAkli8OU8hTDCGKCrAnQ5HyglVzAwQOlwKkDBcC0A9Jb/1Nz/FgRsgTLCFYBqL5+cKTfWkhi9voaGBnkMNwPQO7UaW5VcD654PB5YXFyke8rXBYDezYaudNXVAK2WoGD+nRdQSk6b8dTUVDiRSCwLRl8CdJewXala93hoaGjL2traVRH5OECbhe1a1erqQCCwICLHALpf2J5ULWBEPmtFfxugz3lCqjSq9EClByo9YKQHtJ8Q+dDoAY1t5hnU2y7q0jL3krBLrhojbD+AszF7FwdykXI4kDNGmAjSIxtPz8+hPmAjzOZHUJ7GXafz9JJcRgkzA2uD9CnsHeyTEj/tTmMK7ANxT2e+MpZbvSiEOQnaji4tLcVBbi/7pKTtKcjvBnG5kZNVjOtFJczZWpv/GOxn2WeTF/A7+lH8jp63+Y2bG0KYs6aVfHx8vA/yRfbZ5AzWgMa2trZLNr8xc0MJy6xxTPM6hvOr0if0K9AbMdS13lyJdnnVkhHmzPDs/vdLIrZtcgEnN032L4xsdVyZJSfM2eIo4xD0SfypfrUuYzQ053s5yrFyybIhzEmC+D7oH+KPj8m4iGQSxJ8E8RPS6UYvO8KcPBa3nVi5P4EdZp+QE5jfEWFrq7pHANoBTVSko1+QPYlYKrIplA15xSmrO2wdsL8HMqoXaPR2j3ZnX3glS+3KgjDmbRS50GsMVT70OesendcaRCjfpQLI18ZYOe7oESxCbzgEnMcjaRceST85lHtyl4Qw7uibyPZlh4x/hX8nhu6MQ3lB7g0jTNtKLEY0bGn4qq6fsRg1Yj99WVVoyld0wvQGv66u7n0M3acckj6/srLS1NXV9YdDuVF30Qhb3y4eR7a7HTI+h3frza2trdccyoviNk6Y/qNAKBSaxhC+/qmELfOT+HRifyGfTtjiuTKNEcbQpc9h6Us2eYgnkzmGc61DqCdfisnyDdFVD3hPwLW1tfegoYrsMPa+L2AOZzwFNtzI2B2mvOgjKyxA9C3EVqy4p7BZmDacbyVcpQcqPZDdA/8A++U8W9GGqUUAAAAASUVORK5CYII\x3d\x22);background-origin:content-box;background-repeat:no-repeat;background-size:100% 100%;display:inline-block;height:",[0,20],";padding:",[0,4],";width:",[0,20],"}\n.",[1],"arrow-down{-webkit-transform:rotate(90deg);transform:rotate(90deg)}\nwx-scroll-view{text-align:left}\n.",[1],"pay-half-drawer-title{color:#191919;font-size:",[0,36],";font-weight:500;line-height:",[0,50],";padding:",[0,29]," 0 ",[0,48],";text-align:center}\n.",[1],"payment-btn{background-image:-webkit-linear-gradient(353deg,#ffe74d,#ffdd19);background-image:linear-gradient(97deg,#ffe74d,#ffdd19);border:none;border-radius:",[0,48],";color:#191919;font-size:",[0,32],";font-weight:600;height:",[0,96],";line-height:",[0,96],";text-align:center;width:",[0,686],"}\n.",[1],"payment-btn:after{display:none}\n.",[1],"safe-area-bottom{height:calc(constant(safe-area-inset-bottom) / 2);height:calc(env(safe-area-inset-bottom) / 2)}\n.",[1],"border-all-half-1px:after{border:1px solid;border-radius:6px;box-sizing:border-box;color:currentColor;content:\x22\x22;height:200%;left:0;pointer-events:none;position:absolute;top:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top;width:200%}\n",];
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C = __COMMON_STYLESHEETS__
function makeup(file, opt) {
var _n = typeof(file) === "string";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + (window.__convertRpxToVw__ ? "vw" : "px") + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var styleSheetManager = window.__styleSheetManager2__
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (styleSheetManager) {
var key = (info.path || Math.random()) + ':' + suffix
if (!style) {
styleSheetManager.addItem(key, info.path);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, true);
});
}
styleSheetManager.setCss(key, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead(["[is\x3d\x22npm/r2x/module-container/lib/container/index\x22]{position:relative}\n[is\x3d\x22outer_packages/mactivitydyna/pages/redpacket/components/redpacket-cell-compose/index\x22]{display:block}\n[is\x3d\x22outer_packages/mactivitydyna/pages/redpacket/components/redpacket-filter-compose/index\x22]{display:block}\n[is\x3d\x22packages/coupon_package/mach_pro_waimai_coupon_detail/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-index-template/mach_pro_waimai_homepage_b_list_wx/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-index-template/mach_pro_waimai_homepage_horizontal_double_windows/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-index-template/mach_pro_waimai_homepage_mix_windows/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-restaurant-template/coupon_exchange_goods/mach_pro_waimai_coupon_exchange_goods/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-restaurant-template/mach_pro_waimai_restaurant_combo_page_general/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-restaurant-template/mach_pro_waimai_restaurant_poi_detail_upgrade/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-restaurant-template/mach_pro_waimai_restaurant_shop_cart_main/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/member/machpro-components/mach_pro_waimai_restaurant_membership_float_layer_style_0/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/member/machpro-components/mach_pro_waimai_select_redpacket_style_0/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/mine/mine/mach_pro_waimai_mine/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/restaurant/restaurant/mach_pro_waimai_restaurant_food_list_page/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/restaurant/restaurant/mach_pro_waimai_restaurant_page_new_next/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/search-business/search-guide/mach_pro_waimai_search_guide/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/search-business/search-guide/mach_pro_waimai_search_suggest/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/search-business/search/mach_pro_waimai_search_result_list/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/shooter/mach_pro_waimai_coupon_package_sell/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/shooter/mach_pro_waimai_coupon_select/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/shooter/my_expire_coupon_list/mach_pro_waimai_my_expire_coupon_list/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/shooter/self_take_coupon_list/mach_pro_waimai_self_take_coupon_list/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/transaction/machpro-components/mach_pro_waimai_favorite_footprint/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/transaction/machpro-components/mach_pro_waimai_order_list/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/transaction/machpro-components/mach_pro_waimai_order_middle/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/transaction/machpro-components/mach_pro_waimai_order_search/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/transaction/machpro-components/mach_pro_waimai_similar_poi/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/waimai-self-pick/homepage/mach_pro_waimai_homepage_self_pick/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22pages/index/components/mt-back/mt-back\x22]{-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}\n[is\x3d\x22sub_medicine2/medicine2/pages/wmp/drug-poi/scroll-view/scroll-view\x22]{display:block;overflow:hidden;position:relative}\n[is\x3d\x22sub_pages/allowance-fission/npm_components/miniprogram-recycle-view/recycle-item\x22]{display:inline-block}\n[is\x3d\x22sub_pages/allowance-fission/npm_components/miniprogram-recycle-view/recycle-view\x22]{display:block;width:100%}\n[is\x3d\x22sub_shangou/sg/npm/r2x/module-container/lib/container/index\x22]{position:relative}\n[is\x3d\x22sub_shangou/sg/sub-trade/restaurant/sg-scroll-view/sg-scroll-view\x22]{display:block;overflow:hidden;position:relative}\n[is\x3d\x22waimai-bargain-sub2/_migration_/waimai-bargain-sub1/billSdk/components/phfSpecPopup/components/specPackage/foldPart/index\x22]{display:block;width:100%}\n[is\x3d\x22waimai-bargain-sub3/_migration_/waimai-bargain-sub1/billSdk/components/phfSpecPopup/components/specPackage/foldPart/index\x22]{display:block;width:100%}\n",])();setCssToHead([],undefined,{path:"./packages/finance-pay/app.wxss"})();;;}var __subPageFrameEndTime__=Date.now();__subPageFrameReady__('/packages/finance-pay/');__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packages/finance-pay/components/badge-group/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c=(C,d,e,f,g,h,T,E)=>{var j,l=(C)=>{},k=(C,T,E)=>{if(j===1){E("image",{},(N,C)=>{if(C)L(N,"badge-head-image");if(C||K||Z(f,"head"))O(N,"src",X(d).head);if(C)O(N,"binderror","_onImageError")},l)}},m,o=(C)=>{},n=(C,T,E)=>{if(m===1){E("view",{},(N,C)=>{if(C)L(N,"badge-head-color");if(C||K||!!Z(f,"backgroundColor")||undefined)R.y(N,"background-color: "+Y(X(d).backgroundColor))},o)}},p=(C,T)=>{C||K||!!Z(f,"content")||undefined?T(Y(" "+Y(X(d).content)+" ")):T()},i=(C,T,E,B)=>{j=X(d).type===0?1:0;B(j,k);m=X(d).type===2?1:0;B(m,n);E("view",{},(N,C)=>{if(C)L(N,"badge-content");if(C||K||!!Z(f,"contentColor")||undefined)R.y(N,"color: "+Y(X(d).contentColor))},p)};E("view",{},(N,C)=>{if(C)L(N,"badge border border-all-half-1px");if(C||K||!!Z(f,"color")||undefined)R.y(N,"color: "+Y(X(d).color))},i);g=undefined;f=undefined},b=(C,T,E,B,F)=>{F(D.labels,null,C||K?undefined:U.labels,[0,"labels"],c)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"badge-group-container ellipsis")},b);C=!1;U=Object.create(null);K=!1};A=A||{};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),'packages/finance-pay/components/half-drawer/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c=(C)=>{},f,h=(C,T)=>{C||K||!!U.payHalfDrawerTitle||undefined?T(Y(" "+Y(D.payHalfDrawerTitle)+" ")):T()},g=(C,T,E)=>{if(f===1){E("view",{},(N,C)=>{if(C)L(N,"pay-half-drawer-title")},h)}},i,k=(C)=>{},j=(C,T,E)=>{if(i===1){E("view",{},(N,C)=>{if(C)L(N,"pay-close");if(C)O(N,"bindtap","closeHalfDrawer")},k)}},e=(C,T,E,B)=>{f=D.payHalfDrawerTitle?1:0;B(f,g);i=D.needCloseBtn?1:0;B(i,j)},n=(C,T,E,B,F,S)=>{S("")},m=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"pay-half-drawer-content")},n)},l=(C,T,E)=>{E("scroll-view",{},(N,C)=>{if(C)R.y(N,"height: 100%");if(C)O(N,"scroll-y","true")},m)},d=(C,T,E)=>{E("view",{},(N,C)=>{},e);E("view",{},(N,C)=>{if(C)L(N,"pay-half-drawer-container")},l)},b=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"catch-touch-move")},c);E("view",{},(N,C)=>{var $A=D.showDrawer;if(C||K||!!(U.showDrawer||($A?undefined:undefined))||undefined)L(N,"pay-half-drawer-body "+Y($A?"show":""));A["showDrawer"][0]=(D,E,T)=>{var $B=D.showDrawer;L(N,"pay-half-drawer-body "+Y($B?"show":""))}},d)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"pay-half-drawer");if(C)O(N,"catchtouchmove",true)},b);C=!1;U=Object.create(null);K=!1};A=A||{"showDrawer":new Array(1)};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),'packages/finance-pay/components/pay-type-cell/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,d,f=(C)=>{},e=(C,T,E)=>{if(d===1){E("image",{},(N,C)=>{if(C)L(N,"pay-info-image");if(C||K||Z(U.payInfo,"iconUrl"))O(N,"src",X(D.payInfo).iconUrl);if(C)O(N,"binderror","_onImageError")},f)}},g=(C,T)=>{C||K||!!Z(U.payInfo,"name")||undefined?T(Y(" "+Y(X(D.payInfo).name)+" ")):T()},c=(C,T,E,B)=>{d=X(D.payInfo).iconUrl?1:0;B(d,e);E("view",{},(N,C)=>{if(C)L(N,"pay-info-name")},g)},h,k,m=(C)=>{},l=(C,T,E)=>{if(k===1){E("image",{},(N,C)=>{if(C)L(N,"pay-info-help");if(C)O(N,"src","https://p0.meituan.net/mpcashier/help.png");if(C)O(N,"mode","widthFix");if(C)O(N,"bindtap","openInstructionUrl");if(C)O(N,"binderror","_onImageError")},m)}},j=(C,T,E,B)=>{C||K||!!Z(U.payInfo,"payInfoDesc")||undefined?T(Y(" "+Y(X(D.payInfo).payInfoDesc)+" ")):T();k=X(D.payInfo).instruction_url?1:0;B(k,l)},i=(C,T,E)=>{if(h===1){E("view",{},(N,C)=>{var $A=X(D.payInfo).iconUrl;if(C||K||!!(Z(U.payInfo,"iconUrl")||($A?undefined:undefined))||undefined)L(N,"flex-align pay-info-desc "+Y($A?"pay-info-desc-left":""))},j)}},n,q=(C)=>{},p=(C,T,E)=>{E("badge-group",{},(N,C)=>{if(C||K||U.combineLabels)O(N,"combineLabels",D.combineLabels)},q)},o=(C,T,E)=>{if(n===1){E("view",{},(N,C)=>{},p)}},r,t=(C)=>{},s=(C,T,E)=>{if(r===1){E("view",{},(N,C)=>{if(C)L(N,"pay-info-line")},t)}},b=(C,T,E,B)=>{E("view",{},(N,C)=>{if(C)L(N,"flex-align pay-info-title")},c);h=X(D.payInfo).payInfoDesc?1:0;B(h,i);n=X(D.combineLabels).length?1:0;B(n,o);r=D.needLine?1:0;B(r,s)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C||K||!!U.customClass||undefined)L(N,"pay-info-left "+Y(D.customClass));A["customClass"][0]=(D,E,T)=>{L(N,"pay-info-left "+Y(D.customClass))}},b);C=!1;U=Object.create(null);K=!1};A=A||{"customClass":new Array(1)};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),'packages/finance-pay/components/pay-type/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,b,e=(C)=>{},g,k=(C,T)=>{C?T("¥"):T()},j=(C,T,E)=>{C?T("-"):T();E("view",{},(N,C)=>{if(C)L(N,"currency-cny")},k)},i=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"reduce-fee-prefix")},j);C||K||!!U.rightReduce||undefined?T(Y(" "+Y(D.rightReduce)+" ")):T()},h=(C,T,E)=>{if(g===1){E("view",{},(N,C)=>{if(C)L(N,"reduce-fee-container")},i)}},l=(C)=>{},f=(C,T,E,B)=>{g=D.isShowRightReduce&&D.rightReduce?1:0;B(g,h);E("view",{},(N,C)=>{var $A=D.selected;if(C||K||!!(U.selected||($A?undefined:undefined))||undefined)L(N,"pay-info-radio "+Y($A?"checked":""))},l)},d=(C,T,E)=>{E("pay-type-cell",{},(N,C)=>{if(C||K||U.needLine)O(N,"needLine",D.needLine);var $A=D.isUnusableStatus;if(C||K||!!(U.customClassForCell||U.isUnusableStatus||($A?undefined:undefined))||undefined)O(N,"customClass",Y(D.customClassForCell)+Y($A?"unusable-text":""));if(C||K||U.renderPayInfo)O(N,"payInfo",D.renderPayInfo);if(C||K||U.promotionLabels)O(N,"combineLabels",D.promotionLabels)},e);E("view",{},(N,C)=>{if(C)L(N,"pay-info-right")},f)},c=(C,T,E)=>{if(b===1){E("view",{},(N,C)=>{var $A=D.isUnusableStatus;var $B=X(D.promotionLabels).length;if(C||K||!!(U.customClass||U.isUnusableStatus||($A?undefined:undefined)||Z(U.promotionLabels,"length")||($B?undefined:undefined))||undefined)L(N,"flex-align space-between pay-info "+Y(D.customClass)+" "+Y($A?"pay-info-unusable":"")+" "+Y($B?"has-bottom-labels":""));if(C)O(N,"bindtap","selectPayTypeFun")},d)}},a=(C,T,E,B)=>{b=D.showPayInfo?1:0;B(b,c);C=!1;U=Object.create(null);K=!1};A=A||{};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packages/finance-pay/components/badge-group/index.wxss']=setCssToHead([[2,"./packages/finance-pay/style/common.wxss"],".",[1],"badge-group-container{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;font-size:0;height:",[0,30],";margin-left:",[0,44],";margin-top:",[0,2],";padding-bottom:",[0,2],"}\n.",[1],"badge-group-container .",[1],"badge{-webkit-box-flex:0;-webkit-flex:none;flex:none;position:relative}\n.",[1],"badge-group-container .",[1],"badge.",[1],"border{font-size:0;font-weight:400;line-height:1;margin-bottom:",[0,2],";text-align:center}\n.",[1],"badge-group-container .",[1],"badge:nth-child(n+2){margin-left:",[0,8],"}\n.",[1],"badge-group-container .",[1],"badge .",[1],"badge-head-image{height:",[0,28],";width:",[0,28],"}\n.",[1],"badge-group-container .",[1],"badge .",[1],"badge-head-color{background-color:currentColor;border-radius:",[0,6]," 0 0 ",[0,6],";box-sizing:border-box;color:#fff;display:inline-block;font-size:",[0,20],";line-height:",[0,28],";width:",[0,28],"}\n.",[1],"badge-group-container .",[1],"badge .",[1],"badge-content{font-size:",[0,20],";line-height:",[0,30],";padding:0 ",[0,6],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/components/badge-group/index.wxss:1:3175)",{path:"./packages/finance-pay/components/badge-group/index.wxss"});__wxAppCode__['packages/finance-pay/components/half-drawer/index.wxss']=setCssToHead([".",[1],"pay-half-drawer{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;background:rgba(0,0,0,.6);height:100vh;left:0;position:fixed;top:0;width:100%}\n.",[1],"pay-half-drawer,.",[1],"pay-half-drawer-body{display:-webkit-box;display:-webkit-flex;display:flex;z-index:999!important}\n.",[1],"pay-half-drawer-body{-webkit-box-orient:vertical;-webkit-box-direction:normal;background:#fafafa;border-top-left-radius:",[0,44],";border-top-right-radius:",[0,44],";-webkit-flex-direction:column;flex-direction:column;max-height:80vh;opacity:0;position:relative;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:opacity .3s cubic-bezier(.25,.46,.45,.94),height .3s cubic-bezier(.05,.7,.1,1),-webkit-transform .3s cubic-bezier(.25,.46,.45,.94);transition:opacity .3s cubic-bezier(.25,.46,.45,.94),height .3s cubic-bezier(.05,.7,.1,1),-webkit-transform .3s cubic-bezier(.25,.46,.45,.94);transition:transform .3s cubic-bezier(.25,.46,.45,.94),opacity .3s cubic-bezier(.25,.46,.45,.94),height .3s cubic-bezier(.05,.7,.1,1);transition:transform .3s cubic-bezier(.25,.46,.45,.94),opacity .3s cubic-bezier(.25,.46,.45,.94),height .3s cubic-bezier(.05,.7,.1,1),-webkit-transform .3s cubic-bezier(.25,.46,.45,.94);width:100vw}\n.",[1],"pay-half-drawer-body.",[1],"show{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}\n.",[1],"pay-half-drawer-title{color:#191919;font-size:",[0,36],";font-weight:500;line-height:",[0,36],";padding:",[0,36]," 0 ",[0,48],";text-align:center}\n.",[1],"pay-close{background-image:url(\x22data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAIVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt0UjBAAAAC3RSTlMAmW0EF2pAXAFuk8RE5RoAAADxSURBVHic7ZU9DsIwDEYr8bu6G2yIC6BubGysTMws7AwcgCsgTsBNaVqqJnHivrFDvfmz85omsV1MNmI7X19aXN+fvjv/yl4nVbI9ee5KpDzEObOdyMPzFyIaVdXixfOXtR+jHEhu/hadEKEcqAx+p1ECVAMK12lJL9NaAqTFFChWk6BYToNCPQMKAzmQH8mC/FAe1McMUB+0QF3UBHUoG9SiNm8T9EcNgFrUAKhD2aCiOLqkj52DktDnyMbREZDDRNdCLhg9FfLo0PMlhYBKihQnKnPSMFDrIU0MtUPSWFGLRs0ejQ00gNAoQ0NxspHZDzDiOYNUtT8/AAAAAElFTkSuQmCC\x22);background-size:",[0,36]," ",[0,36],";height:",[0,36],";position:absolute;right:",[0,32],";top:",[0,36],";width:",[0,36],";z-index:10}\n.",[1],"pay-half-drawer-container{-webkit-box-flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"pay-half-drawer-content{max-height:80vh}\n.",[1],"catch-touch-move{background-color:initial;height:100vh;left:0;position:fixed;top:0;width:100vw}\n",],undefined,{path:"./packages/finance-pay/components/half-drawer/index.wxss"});__wxAppCode__['packages/finance-pay/components/pay-type-cell/index.wxss']=setCssToHead([[2,"./packages/finance-pay/style/common.wxss"],".",[1],"pay-info{background:#fff;border-radius:",[0,18],";padding:",[0,32]," ",[0,24],";position:relative}\n.",[1],"pay-info-image{height:",[0,32],";margin-right:",[0,16],";width:",[0,32],"}\n.",[1],"pay-info-title{color:#111}\n.",[1],"pay-info-name{color:rgba(0,0,0,.9);font-size:",[0,28],";line-height:",[0,40],";margin-right:",[0,16],"}\n.",[1],"pay-info-more{color:#999;font-size:",[0,24],";font-weight:400;line-height:",[0,32],"}\n.",[1],"pay-info-desc{color:#999;font-size:",[0,24],";line-height:",[0,36],";margin-top:",[0,2],";max-width:",[0,480],";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"pay-info-desc-left{margin-left:",[0,48],"}\n.",[1],"pay-info-help{height:",[0,24],";margin-left:",[0,5],";width:",[0,24],"}\n.",[1],"pay-info-line{background-color:rgba(0,0,0,.06);bottom:0;height:",[0,1],";left:",[0,80],";position:absolute;-webkit-transform:scaleY(.5);transform:scaleY(.5);width:",[0,662],"}\n.",[1],"ecny-pay-type-cell .",[1],"pay-info-image{height:",[0,35],";margin-right:",[0,9],";width:",[0,35],"}\n.",[1],"ecny-pay-type-cell .",[1],"pay-info-desc{margin-left:",[0,64],"}\n.",[1],"ecny-pay-type-cell .",[1],"pay-info-name{color:#111;font-size:",[0,28],";font-weight:500;line-height:",[0,28],";max-width:",[0,500],";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"ecny-pay-type-cell .",[1],"pay-info-line{left:0}\n.",[1],"ecny-pay-type-banklist-cell .",[1],"pay-info-name{font-weight:400}\n.",[1],"weixin-nopass-half-drawer .",[1],"pay-info-line{left:",[0,24],"}\n.",[1],"unusable-text .",[1],"pay-info-desc,.",[1],"unusable-text .",[1],"pay-info-name{color:rgba(0,0,0,.35)}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/components/pay-type-cell/index.wxss:1:3175)",{path:"./packages/finance-pay/components/pay-type-cell/index.wxss"});__wxAppCode__['packages/finance-pay/components/pay-type/index.wxss']=setCssToHead([[2,"./packages/finance-pay/style/common.wxss"],".",[1],"pay-info{background:#fff;padding:",[0,35]," ",[0,24],";position:relative}\n.",[1],"pay-info.",[1],"has-bottom-labels{padding-bottom:",[0,30],"}\n.",[1],"reduce-fee-container{color:#ff2d19;display:inline-block;font-size:",[0,28],";line-height:",[0,30],";margin-right:",[0,28],";position:relative;top:",[0,-10],"}\n.",[1],"reduce-fee-prefix{bottom:",[0,6],";font-size:",[0,28],";left:",[0,-40],";line-height:",[0,20],";margin-right:",[0,4],";position:absolute}\n.",[1],"reduce-fee-prefix .",[1],"currency-cny{display:inline-block;margin-left:",[0,4],"}\n.",[1],"pay-info-right{height:",[0,40],"}\n.",[1],"pay-info-radio{background-image:url(https://p0.meituan.net/mpcashier/bd2e0c2c9a75ea7fde6d59a69da7972b5541.png);background-repeat:no-repeat;background-size:contain;display:inline-block;height:",[0,40],";width:",[0,40],"}\n.",[1],"pay-info-radio.",[1],"checked{background-image:url(https://p0.meituan.net/mpcashier/pay-info-radio-check-new.png)}\n.",[1],"pay-info-unusable .",[1],"pay-info-radio{background-image:url(https://p0.meituan.net/mpcashier/8155631563dcb6eba61a0b32c0911c0a3068.png)}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/components/pay-type/index.wxss:1:3175)",{path:"./packages/finance-pay/components/pay-type/index.wxss"});
}__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packages/finance-pay/components/ecny-wallet-half-drawer/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c=(C,T)=>{C||K||!!U.payHalfDrawerTitle||undefined?T(Y(" "+Y(D.payHalfDrawerTitle)+" "),(N)=>{A["payHalfDrawerTitle"][0]=(D,E,T)=>{T(N,Y(" "+Y(D.payHalfDrawerTitle)+" "))}}):T()},e=(C,f,g,h,i,j,T,E)=>{var k=(C)=>{};E("pay-type",{},(N,C)=>{if(C||K||h)O(N,"payInfo",f);if(C||K||i)O(N,"index",g);if(C)O(N,"exposureName","pay-info");if(C||K||!!(i||Z(U.dcepList,"length"))||undefined)O(N,"needLine",g<X(D.dcepList).length-1);if(C||K||!!(U.subPayTypeUniqueKey||Z(h,"pay_type_unique_key"))||undefined)O(N,"selected",D.subPayTypeUniqueKey===X(f).pay_type_unique_key);if(C||K||i)R.d(N,"index",g,!0);if(C)R.v(N,"selectPayTypeFun","selectEcnyPayTypeFun",!1,!1,!1,!1);if(C)R.v(N,"exposure","onProductExposure",!1,!1,!1,!1)},k);i=undefined;h=undefined},d=(C,T,E,B,F)=>{F(D.dcepList,"index",C||K?undefined:U.dcepList,[0,"dcepList"],e)},b=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"pay-half-drawer-title")},c);E("view",{},(N,C)=>{if(C)L(N,"ecny-half-drawer-container")},d)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"ecny-half-drawer")},b);C=!1;U=Object.create(null);K=!1};A=A||{"payHalfDrawerTitle":new Array(1)};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),'packages/finance-pay/components/flatten-type/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c=(C,d,e,f,g,h,T,E)=>{var i=(C)=>{};E("pre-pay-type-cell",{},(N,C)=>{if(C)O(N,"exposureName","pay-info");if(C||K||f)O(N,"payInfo",d);if(C||K||U.cashierType)O(N,"cashierType",D.cashierType);if(C||K||!!(U.payTypeUniqueKey||Z(f,"pay_type_unique_key"))||undefined)O(N,"selected",D.payTypeUniqueKey===X(d).pay_type_unique_key);if(C||K||g)R.d(N,"index",e,!0);if(C)R.v(N,"selectPayTypeFun","selectPayTypeFun",!1,!1,!1,!1);if(C)R.v(N,"selectSubPayType","selectSubPayType",!1,!1,!1,!1);if(C)R.v(N,"exposure","onProductExposure",!1,!1,!1,!1)},i);g=undefined;f=undefined},b=(C,T,E,B,F)=>{F(D.renderList,"index",C||K?undefined:U.renderList,[0,"renderList"],c)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"flatten-list")},b);C=!1;U=Object.create(null);K=!1};A=A||{};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),'packages/finance-pay/components/pre-pay-type-cell/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,e,g=(C)=>{},f=(C,T,E)=>{if(e===1){E("image",{},(N,C)=>{if(C)L(N,"pay-info-image");if(C||K||Z(U.renderPayInfo,"iconUrl"))O(N,"src",X(D.renderPayInfo).iconUrl);if(C)O(N,"binderror","_onImageError")},g)}},h=(C,T)=>{C||K||!!Z(U.renderPayInfo,"name")||undefined?T(Y(" "+Y(X(D.renderPayInfo).name)+" ")):T()},i,l=(C)=>{},m=(C,T)=>{C?T("修改"):T()},n=(C)=>{},k=(C,T,E)=>{C||K||!!Z(U.renderPayInfo,"desc")||undefined?T(Y(" "+Y(X(D.renderPayInfo).desc))):T();E("text",{},(N,C)=>{if(C)L(N,"vertica-line")},l);E("text",{},(N,C)=>{if(C)L(N,"desc-modify")},m);E("view",{},(N,C)=>{if(C)L(N,"pay-arrow")},n)},j=(C,T,E)=>{if(i===1){E("view",{},(N,C)=>{if(C)L(N,"flex-align pay-info-more");if(C)O(N,"catchtap","selectSubPayType")},k)}},d=(C,T,E,B)=>{e=X(D.renderPayInfo).iconUrl?1:0;B(e,f);E("view",{},(N,C)=>{if(C)L(N,"pay-info-name")},h);i=X(D.renderPayInfo).desc?1:0;B(i,j)},o,r=(C,T)=>{C||K||Z(U.renderPayInfo,"subTitle")?T(Y(X(D.renderPayInfo).subTitle)):T()},s,v=(C)=>{},u=(C,T,E)=>{C||K||!!Z(U.renderPayInfo,"switchChangeTitle")||undefined?T(Y(" "+Y(X(D.renderPayInfo).switchChangeTitle)+" ")):T();E("view",{},(N,C)=>{if(C)L(N,"pay-arrow")},v)},t=(C,T,E)=>{if(s===1){E("view",{},(N,C)=>{if(C)L(N,"flex-align pay-more");if(C)O(N,"catchtap","selectSubPayType")},u)}},q=(C,T,E,B)=>{E("view",{},(N,C)=>{},r);s=X(D.renderPayInfo).switchChangeTitle?1:0;B(s,t)},p=(C,T,E)=>{if(o===1){E("view",{},(N,C)=>{if(C)L(N,"flex-align pay-info-sub-title")},q)}},w,y=(C,T)=>{C||K||!!Z(U.renderPayInfo,"payInfoDesc")||undefined?T(Y(" "+Y(X(D.renderPayInfo).payInfoDesc)+" ")):T()},x=(C,T,E)=>{if(w===1){E("view",{},(N,C)=>{if(C)L(N,"pay-info-desc")},y)}},z,B0=(C)=>{},A0=(C,T,E)=>{if(z===1){E("view",{},(N,C)=>{if(C)L(N,"pay-info-line")},B0)}},c=(C,T,E,B)=>{E("view",{},(N,C)=>{if(C)L(N,"flex-align pay-info-title")},d);o=X(D.renderPayInfo).subTitle?1:0;B(o,p);w=X(D.renderPayInfo).payInfoDesc?1:0;B(w,x);z=D.needLine?1:0;B(z,A0)},C0=(C)=>{},b=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"pay-info-left")},c);E("view",{},(N,C)=>{var $A=D.selected;if(C||K||!!(U.selected||($A?undefined:undefined))||undefined)L(N,"pay-info-radio "+Y($A?"checked":""));A["selected"][0]=(D,E,T)=>{var $B=D.selected;L(N,"pay-info-radio "+Y($B?"checked":""))}},C0)},a=(C,T,E)=>{E("view",{},(N,C)=>{var $A=D.isUnusableStatus;if(C||K||!!(U.isUnusableStatus||($A?undefined:undefined))||undefined)L(N,"space-between pay-info "+Y($A?"pay-info-unusable":""));A["isUnusableStatus"][0]=(D,E,T)=>{var $B=D.isUnusableStatus;L(N,"space-between pay-info "+Y($B?"pay-info-unusable":""))};if(C)O(N,"bindtap","selectPayTypeFun")},b);C=!1;U=Object.create(null);K=!1};A=A||{"selected":new Array(1),"isUnusableStatus":new Array(1)};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),'packages/finance-pay/components/weixin-nopass-half-drawer/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c=(C,T)=>{C?T(" 支付方式 "):T()},e=(C,f,g,h,i,j,T,E)=>{var k=(C)=>{};E("pay-type",{},(N,C)=>{if(C||K||h)O(N,"payInfo",f);if(C||K||i)O(N,"index",g);if(C)O(N,"customClassForCell","weixin-nopass-half-drawer");if(C)O(N,"exposureName","pay-info");if(C||K||!!(i||Z(U.weixinNoPassList,"length"))||undefined)O(N,"needLine",g<X(D.weixinNoPassList).length-1);if(C||K||!!(U.noPasswordStatus||Z(h,"no_password_status"))||undefined)O(N,"selected",D.noPasswordStatus===X(f).no_password_status);if(C||K||i)R.d(N,"index",g,!0);if(C)R.v(N,"selectPayTypeFun","selectWeixinPayType",!1,!1,!1,!1);if(C)R.v(N,"exposure","onProductExposure",!1,!1,!1,!1)},k);i=undefined;h=undefined},d=(C,T,E,B,F)=>{F(D.weixinNoPassList,"index",C||K?undefined:U.weixinNoPassList,[0,"weixinNoPassList"],e)},b=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"pay-half-drawer-title")},c);E("view",{},(N,C)=>{if(C)L(N,"weixin-nopass-half-drawer-container")},d)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weixin-nopass-half-drawer")},b);C=!1;U=Object.create(null);K=!1};A=A||{};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packages/finance-pay/components/ecny-wallet-half-drawer/index.wxss']=setCssToHead([[2,"./packages/finance-pay/style/common.wxss"],".",[1],"ecny-half-drawer{margin-bottom:",[0,80],";padding:0 ",[0,32],"}\n.",[1],"ecny-half-drawer-container{background:#fff;border-radius:",[0,24],";overflow:hidden}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/components/ecny-wallet-half-drawer/index.wxss:1:3175)",{path:"./packages/finance-pay/components/ecny-wallet-half-drawer/index.wxss"});__wxAppCode__['packages/finance-pay/components/flatten-type/index.wxss']=setCssToHead([],undefined,{path:"./packages/finance-pay/components/flatten-type/index.wxss"});__wxAppCode__['packages/finance-pay/components/pre-pay-type-cell/index.wxss']=setCssToHead([[2,"./packages/finance-pay/style/common.wxss"],".",[1],"pay-info{background:#fff;border-radius:",[0,24],";padding:",[0,32]," ",[0,24],";position:relative}\n.",[1],"pay-info-radio{background-image:url(https://p0.meituan.net/mpcashier/bd2e0c2c9a75ea7fde6d59a69da7972b5541.png);background-repeat:no-repeat;background-size:contain;height:",[0,36],";width:",[0,36],"}\n.",[1],"pay-info-radio.",[1],"checked{background-image:url(https://p0.meituan.net/mpcashier/pay-info-radio-check-new.png)}\n.",[1],"pay-info-left{color:#111;max-width:",[0,480],";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"pay-info-image{height:",[0,32],";margin-right:",[0,8],";width:",[0,32],"}\n.",[1],"pay-info-name{font-size:",[0,28],";font-weight:500;line-height:",[0,40],";margin-right:",[0,16],"}\n.",[1],"pay-info-more{color:#999;font-size:",[0,24],";font-weight:400}\n.",[1],"pay-info-sub-title{color:#111;font-size:",[0,28],";margin:",[0,16]," 0 0 ",[0,40],"}\n.",[1],"pay-info-desc{line-height:",[0,32],";margin:",[0,4]," 0 0 ",[0,40],"}\n.",[1],"pay-info-desc,.",[1],"pay-more{color:#999;font-size:",[0,24],"}\n.",[1],"pay-more{margin-left:",[0,16],";position:relative}\n.",[1],"vertica-line{background-color:rgba(0,0,0,.2);display:inline-block;height:",[0,20],";margin:0 ",[0,10.5]," 0 ",[0,11.5],";-webkit-transform:scaleX(.5);transform:scaleX(.5);width:",[0,1],"}\n.",[1],"pay-info-line{background-color:rgba(0,0,0,.06);bottom:0;height:",[0,1],";left:",[0,64],";position:absolute;-webkit-transform:scaleY(.5);transform:scaleY(.5);width:87.7%}\n.",[1],"pay-info-unusable .",[1],"pay-info-desc,.",[1],"pay-info-unusable .",[1],"pay-info-name,.",[1],"pay-info-unusable .",[1],"pay-info-sub-title{color:rgba(0,0,0,.35)}\n.",[1],"pay-info-unusable .",[1],"pay-info-radio{background-image:url(https://p0.meituan.net/mpcashier/8155631563dcb6eba61a0b32c0911c0a3068.png)}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/components/pre-pay-type-cell/index.wxss:1:3175)",{path:"./packages/finance-pay/components/pre-pay-type-cell/index.wxss"});__wxAppCode__['packages/finance-pay/components/weixin-nopass-half-drawer/index.wxss']=setCssToHead([[2,"./packages/finance-pay/style/common.wxss"],".",[1],"weixin-nopass-half-drawer{margin-bottom:",[0,80],";padding:0 ",[0,32],"}\n.",[1],"weixin-nopass-half-drawer-container{background:#fff;border-radius:",[0,24],";overflow:hidden}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/components/weixin-nopass-half-drawer/index.wxss:1:3175)",{path:"./packages/finance-pay/components/weixin-nopass-half-drawer/index.wxss"});
}__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packages/finance-pay/pages/promotion/components/fup-financial-cell/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c=(C)=>{},f,h=(C,T)=>{C||K||U.titlePrefix?T(Y(D.titlePrefix)):T()},g=(C,T,E)=>{if(f===1){E("text",{},(N,C)=>{if(C)L(N,"c_financial-title-prefix")},h)}},i,k=(C,T)=>{C||K||U.titleHighlight?T(Y(D.titleHighlight)):T()},j=(C,T,E)=>{if(i===1){E("text",{},(N,C)=>{if(C)L(N,"c_financial-title-primary")},k)}},l,n=(C,T)=>{C||K||U.titleSuffix?T(Y(D.titleSuffix)):T()},m=(C,T,E)=>{if(l===1){E("text",{},(N,C)=>{if(C)L(N,"c_financial-title-suffix")},n)}},e=(C,T,E,B)=>{f=D.titlePrefix?1:0;B(f,g);i=D.titleHighlight?1:0;B(i,j);l=D.titleSuffix?1:0;B(l,m)},o=(C,T)=>{C||K||Z(U.materials,"subtitle")?T(Y(X(D.materials).subtitle)):T()},d=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"c_financial-title")},e);E("text",{},(N,C)=>{if(C)L(N,"c_financial-sub")},o)},p=(C,T)=>{C||K||Z(U.materials,"button")?T(Y(X(D.materials).button)):T()},q,s=(C,T)=>{C||K||Z(U.materials,"tag")?T(Y(X(D.materials).tag)):T()},r=(C,T,E)=>{if(q===1){E("view",{},(N,C)=>{if(C)L(N,"c_financial-tag")},s)}},b=(C,T,E,B)=>{E("image",{},(N,C)=>{if(C)L(N,"c_financial-icon");if(C||K||Z(U.materials,"icon"))O(N,"src",X(D.materials).icon);if(C)O(N,"mode","aspectFit");if(C)O(N,"binderror","_onImageError")},c);E("view",{},(N,C)=>{if(C)L(N,"c_financial-content")},d);E("view",{},(N,C)=>{if(C)L(N,"c_financial-btn")},p);q=X(D.materials).tag?1:0;B(q,r)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"c_financial-box");if(C)O(N,"bindtap","onClick")},b);C=!1;U=Object.create(null);K=!1};A=A||{};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),'packages/finance-pay/pages/promotion/components/fup-ocr-cell/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c,e=(C)=>{},f=(C)=>{},d=(C,T,E)=>{if(c===1){E("image",{},(N,C)=>{if(C)L(N,"ocr-bg");if(C||K||Z(U.materials,"backgroundImage_new"))O(N,"src",X(D.materials).backgroundImage_new);if(C)O(N,"mode","aspectFill");if(C)O(N,"binderror","_onImageError")},e)}else{E("view",{},(N,C)=>{if(C)L(N,"ocr-bg-placeholder")},f)}},h,j=(C)=>{},i=(C,T,E)=>{if(h===1){E("rich-text",{},(N,C)=>{if(C)L(N,"ocr-title");if(C||K||Z(U.materials,"textContents_new"))O(N,"nodes",X(D.materials).textContents_new)},j)}},k,m=(C,T)=>{C||K||Z(U.materials,"subTitle_new")?T(Y(X(D.materials).subTitle_new)):T()},l=(C,T,E)=>{if(k===1){E("view",{},(N,C)=>{if(C)L(N,"ocr-subtitle")},m)}},o,r=(C)=>{},q=(C,T,E)=>{E("rich-text",{},(N,C)=>{if(C)L(N,"ocr-bubble-text");if(C||K||Z(U.materials,"bubbleText_new"))O(N,"nodes",X(D.materials).bubbleText_new)},r)},p=(C,T,E)=>{if(o===1){E("view",{},(N,C)=>{if(C)L(N,"ocr-bubble")},q)}},s,u=(C)=>{},w=(C,T)=>{C?T("立即上传"):T()},v=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"ocr-btn-text")},w)},t=(C,T,E)=>{if(s===1){E("image",{},(N,C)=>{if(C)L(N,"ocr-btn-image");if(C||K||Z(U.materials,"albumButton_new"))O(N,"src",X(D.materials).albumButton_new);if(C)O(N,"mode","aspectFit");if(C)O(N,"binderror","_onImageError")},u)}else{E("view",{},(N,C)=>{if(C)L(N,"ocr-btn")},v)}},n=(C,T,E,B)=>{o=X(D.materials).bubbleText_new?1:0;B(o,p);s=X(D.materials).albumButton_new?1:0;B(s,t)},g=(C,T,E,B)=>{h=X(D.materials).textContents_new?1:0;B(h,i);k=X(D.materials).subTitle_new?1:0;B(k,l);E("view",{},(N,C)=>{if(C)L(N,"ocr-btn-wrapper")},n)},b=(C,T,E,B)=>{c=X(D.materials).backgroundImage_new?1:0;B(c,d);E("view",{},(N,C)=>{if(C)L(N,"ocr-content")},g)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"ocr-cell");if(C)O(N,"bindtap","onUploadTap")},b);C=!1;U=Object.create(null);K=!1};A=A||{};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),'packages/finance-pay/pages/promotion/components/fup-pgy-cell/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c=(C)=>{},e=(C,f,g,h,i,j,T,E)=>{var k=(C,T)=>{C||K||!!Z(h,"value")||undefined?T(Y(" "+Y(X(f).value)+" ")):T()};E("view",{},(N,C)=>{if(C||K||!!Z(h,"type")||undefined)L(N,"c_fup-title-"+Y(X(f).type))},k);i=undefined;h=undefined},f,h=(C,T)=>{C||K||Z(U.materials,"tag")?T(Y(X(D.materials).tag)):T()},g=(C,T,E)=>{if(f===1){E("view",{},(N,C)=>{if(C)L(N,"c_fup-tag")},h)}},d=(C,T,E,B,F)=>{F(D.titles,"index",C||K?undefined:U.titles,[0,"titles"],e);f=X(D.materials).tag?1:0;B(f,g)},i=(C,T)=>{C||K||Z(U.materials,"subtitle")?T(Y(X(D.materials).subtitle)):T()},k=(C,T)=>{C||K||Z(U.materials,"button")?T(Y(X(D.materials).button)):T()},l=(C)=>{},j=(C,T,E)=>{E("view",{},(N,C)=>{},k);E("text",{},(N,C)=>{if(C)L(N,"c_fup-arrow")},l)},b=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"c_fup-icon");if(C||K||Z(U.materials,"icon"))O(N,"src",X(D.materials).icon);if(C)O(N,"mode","aspectFit");if(C)O(N,"binderror","_onImageError")},c);E("view",{},(N,C)=>{if(C)L(N,"c_fup-title")},d);E("view",{},(N,C)=>{if(C)L(N,"c_fup-sub")},i);E("view",{},(N,C)=>{if(C)L(N,"c_fup-btn")},j)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"c_fup-box");if(C)O(N,"bindtap","onClick")},b);C=!1;U=Object.create(null);K=!1};A=A||{};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),'packages/finance-pay/pages/promotion/components/marketing-banner/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c=(C)=>{},b=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"c_marketing-banner-img");if(C||K||Z(U.materials,"bannerPic"))O(N,"src",X(D.materials).bannerPic);A["materials"][0]=(D,E,T)=>{O(N,"src",X(D.materials).bannerPic);E(N)};if(C)O(N,"mode","widthFix");if(C)O(N,"binderror","_onImageError")},c)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"c_marketing-banner");if(C)O(N,"bindtap","onClick")},b);C=!1;U=Object.create(null);K=!1};A=A||{"materials":new Array(1)};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),'packages/finance-pay/pages/promotion/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c=(C)=>{},e=(C)=>{},f,h=(C)=>{},j=(C,T)=>{C||K||U.pageTitle?T(Y(D.pageTitle)):T()},k=(C,T)=>{C?T("¥"):T()},l=(C,T)=>{C||K||U.finalMoney?T(Y(D.finalMoney)):T()},i=(C,T,E)=>{E("text",{},(N,C)=>{},j);E("text",{},(N,C)=>{if(C)L(N,"unit")},k);E("text",{},(N,C)=>{if(C)L(N,"money")},l)},m,o=(C,T)=>{C||K||U.payType?T(Y(D.payType)):T()},n=(C,T,E)=>{if(m===1){E("view",{},(N,C)=>{if(C)L(N,"c_r-pay-type")},o)}},g=(C,T,E,B)=>{if(f===1){E("image",{},(N,C)=>{if(C)L(N,"c_r-icon");if(C)O(N,"src","https://p0.meituan.net/scarlett/efb836ecbee465b7933485609f2df2553989.png");if(C)O(N,"binderror","_onImageError")},h);E("view",{},(N,C)=>{if(C)L(N,"c_r-title")},i);m=D.payType?1:0;B(m,n)}},p,t=(C)=>{},u=(C,T)=>{C||K||U.pageTitle?T(Y(D.pageTitle)):T()},v=(C,T)=>{C||K||!!U.finalMoney||undefined?T(Y("¥"+Y(D.finalMoney))):T()},s=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"c_r-weakening-icon");if(C)O(N,"src","https://p0.meituan.net/ingee/86f3af82b565d747b095acbbd35188711110.png");if(C)O(N,"binderror","_onImageError")},t);E("text",{},(N,C)=>{if(C)L(N,"c_r-weakening-title")},u);E("text",{},(N,C)=>{if(C)L(N,"c_r-weakening-money")},v)},w,y=(C,T)=>{C||K||U.payType?T(Y(D.payType)):T()},x=(C,T,E)=>{if(w===1){E("view",{},(N,C)=>{if(C)L(N,"c_r-weakening-pay-type")},y)}},r=(C,T,E,B)=>{E("view",{},(N,C)=>{if(C)L(N,"c_r-weakening-title-line")},s);w=D.payType?1:0;B(w,x)},q=(C,T,E)=>{if(p===1){E("view",{},(N,C)=>{if(C)L(N,"c_r-weakening-header")},r)}},z,C0=(C,T)=>{C||K||U.haveDiscount?T(Y(D.haveDiscount)):T()},E0=(C,T)=>{C?T("查看"):T()},F0=(C)=>{},D0=(C,T,E)=>{E("text",{},(N,C)=>{},E0);E("text",{},(N,C)=>{var $A=D.showDiscountDetail;if(C||K||!!U.showDiscountDetail||($A?undefined:undefined))L(N,$A?"arrow reversal":"arrow")},F0)},B0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"number")},C0);E("view",{},(N,C)=>{if(C)L(N,"hot-zone");if(C)O(N,"bindtap","triggerDetail")},D0)},A0=(C,T,E)=>{if(z===1){E("view",{},(N,C)=>{if(C)L(N,"c_r-discount")},B0)}},G0,J0=(C,K0,L0,M0,N0,O0,T,E)=>{var Q0=(C,T)=>{C||K||Z(M0,"subText")?T(Y(X(K0).subText)):T()},R0=(C,T)=>{C||K||!!Z(M0,"reduce")||undefined?T(Y("-"+Y(X(K0).reduce))):T()},P0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"text")},Q0);E("text",{},(N,C)=>{if(C)L(N,"number")},R0)};E("view",{},(N,C)=>{var $A=L0>0;if(C||K||!!(N0||($A?undefined:undefined))||undefined)L(N,"c_r-detail "+Y($A?"c_r-detail-gap":""))},P0);N0=undefined;M0=undefined},I0=(C,T,E,B,F)=>{F(D.discount,"index",C||K?undefined:U.discount,[0,"discount"],J0)},H0=(C,T,E)=>{if(G0===1){E("view",{},(N,C)=>{if(C)L(N,"tiny-promotion")},I0)}},K0,N0=(C)=>{},M0=(C,T,E)=>{E("fup-ocr-cell",{},(N,C)=>{if(C||K||U.ocrData)O(N,"info",D.ocrData)},N0)},P0=(C)=>{},O0=(C,T,E)=>{E("fup-pgy-cell",{},(N,C)=>{if(C||K||U.walletSpaceMaterial)O(N,"info",D.walletSpaceMaterial)},P0)},L0=(C,T,E)=>{if(K0===1){E("view",{},(N,C)=>{var $A=D.haveDiscount;if(C||K||!!(U.haveDiscount||($A?undefined:undefined))||undefined)L(N,"c_r-mt-"+Y($A?24:80))},M0)}else if(K0===2){E("view",{},(N,C)=>{var $A=D.haveDiscount;if(C||K||!!(U.haveDiscount||($A?undefined:undefined))||undefined)L(N,"c_r-mt-"+Y($A?24:80))},O0)}},Q0=(C,R0,S0,T0,U0,V0,T,E,B)=>{var W0,Y0,b0=(C)=>{},a0=(C,T,E)=>{E("fup-pgy-cell",{},(N,C)=>{if(C||K||Q.a([T0]))O(N,"info",[R0])},b0)},d0=(C)=>{},c0=(C,T,E)=>{E("fup-financial-cell",{},(N,C)=>{if(C||K||T0)O(N,"info",R0);if(C||K||!!U0||undefined)O(N,"is-first",S0===0)},d0)},Z0=(C,T,E)=>{if(Y0===1){E("view",{},(N,C)=>{var $A=S0>0;if(C||K||!!(U0||($A?undefined:undefined))||undefined)L(N,"c_r-mt-"+Y($A?20:74))},a0)}else{E("view",{},(N,C)=>{var $A=S0>0;if(C||K||!!(U0||($A?undefined:undefined))||undefined)L(N,"c_r-mt-"+Y($A?20:74))},c0)}},X0=(C,T,E,B)=>{if(W0===1){Y0=X(R0).isSimple==="true"?1:0;B(Y0,Z0)}};W0=D.showFinancial?1:0;B(W0,X0);U0=undefined;T0=undefined},R0,U0=(C)=>{},T0=(C,T,E)=>{E("marketing-banner",{},(N,C)=>{if(C||K||U.miniPayBanner)O(N,"info",D.miniPayBanner)},U0)},S0=(C,T,E)=>{if(R0===1){E("view",{},(N,C)=>{var $A=D.showOcr||D.showWallet||D.showFinancial;if(C||K||!!(U.showOcr||U.showWallet||U.showFinancial||($A?undefined:undefined))||undefined)L(N,"c_r-mt-"+Y($A?20:80))},T0)}},V0,Y0=(C)=>{},X0=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"peace-mini-program-img");if(C||K||Z(U.peaceMiniProgram,"resourcesUrl"))O(N,"src",X(D.peaceMiniProgram).resourcesUrl);if(C)O(N,"bindtap","signWXPasswordFree");if(C)O(N,"mode","widthFix");if(C)O(N,"binderror","_onImageError")},Y0)},W0=(C,T,E)=>{if(V0===1){E("view",{},(N,C)=>{var $A=D.haveDiscount||D.showOcr||D.showWallet||D.showFinancial;if(C||K||!!(U.haveDiscount||U.showOcr||U.showWallet||U.showFinancial||($A?undefined:undefined))||undefined)L(N,"peace-mini-program c_r-mt-"+Y($A?20:80))},X0)}},Z0=(C)=>{},d=(C,T,E,B,F)=>{E("view",{},(N,C)=>{if(C)L(N,"c_r-padding-top")},e);f=!D.weakeningBtnStyle?1:0;B(f,g);p=D.weakeningBtnStyle?1:0;B(p,q);z=D.haveDiscount?1:0;B(z,A0);G0=D.haveDiscount&&D.showDiscountDetail?1:0;B(G0,H0);K0=D.showOcr?1:D.showWallet?2:0;B(K0,L0);F(D.miniFinancialRecommend,"index",C||K?undefined:U.miniFinancialRecommend,[0,"miniFinancialRecommend"],Q0);R0=D.showMarketingBanner?1:0;B(R0,S0);V0=D.showPeace?1:0;B(V0,W0);E("view",{},(N,C)=>{if(C)L(N,"c_r-padding-bottom")},Z0)},a0,c0=(C,T)=>{C?T("完成"):T()},b0=(C,T,E)=>{if(a0===1){E("view",{},(N,C)=>{var $A=D.weakeningBtnStyle;if(C||K||!!(U.weakeningBtnStyle||($A?undefined:undefined))||undefined)L(N,"c_r-button "+Y($A?"c_r-button-weakening":""));if(C||K||U.weakeningBtnStyle)R.y(N,D.weakeningBtnStyle);if(C)O(N,"bindtap","completeBtnHandler")},c0)}},d0,f0=(C,T)=>{C?T(" 完成 "):T()},e0=(C,T,E)=>{if(d0===1){E("button",{},(N,C)=>{if(C)L(N,"c_r-button");if(C||K||U.launchParams)O(N,"app-parameter",D.launchParams);if(C)O(N,"open-type","launchApp");if(C)O(N,"binderror","launchAppError");if(C)O(N,"bindtap","completeBtnClickTrack")},f0)}},b=(C,T,E,B)=>{E("nav-bar",{},(N,C)=>{},c);E("scroll-view",{},(N,C)=>{if(C)L(N,"c_r-scroll");if(C)O(N,"scroll-y",true)},d);a0=!D.isBackToApp?1:0;B(a0,b0);d0=D.isBackToApp?1:0;B(d0,e0)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C||K||!!U.renderer||undefined)L(N,"c_r-container tiny "+Y(D.renderer));A["renderer"][0]=(D,E,T)=>{L(N,"c_r-container tiny "+Y(D.renderer))};if(C)R.i(N,"page-root")},b);C=!1;U=Object.create(null);K=!1};A=A||{"renderer":new Array(1)};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
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
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packages/finance-pay/pages/sign/index.wxss']=setCssToHead([".",[1],"f_s_24{font-size:",[0,24],"}\n.",[1],"f_s_28{font-size:",[0,28],"}\n.",[1],"f_s_32{font-size:",[0,32],"}\n.",[1],"f_w_500{font-weight:500}\n.",[1],"f_w_600{font-weight:600}\n.",[1],"mb_100{margin-bottom:",[0,100],"}\n.",[1],"mb_144{margin-bottom:",[0,144],"}\n.",[1],"c_sign-wrapper{background:#fff;height:100%;min-height:100vh;padding:0 ",[0,60],";text-align:center}\n.",[1],"c_sign-title{color:#111;font-size:",[0,48],";line-height:",[0,48],";margin-bottom:",[0,22],";padding-top:",[0,100],"}\n.",[1],"c_signed-title{padding-top:",[0,0],"}\n.",[1],"c_sign-des{color:#555;line-height:",[0,30],";margin-bottom:",[0,57],"}\n.",[1],"c_sign-main-bg{background:url(https://s3plus.meituan.net/static-prod01/com.sankuai.fspfepayresource.front.passwordfree-files/nopass-main.png) 100%/contain no-repeat;display:inline-block;height:",[0,156],";margin-top:",[0,23],";width:",[0,296],"}\n.",[1],"c_sign-btn{background-image:-webkit-linear-gradient(352deg,#ffe74d,#ffdd19);background-image:linear-gradient(98deg,#ffe74d,#ffdd19);border:none;border-radius:",[0,45],";color:#191919;height:",[0,90],";line-height:",[0,90],"}\n.",[1],"c_sign-btn:after{border:none}\n.",[1],"c_sign-sub-btn{color:#191919;margin-top:",[0,40],"}\n.",[1],"c_sign-btn.",[1],"c_loading{background:#fef8de;color:#d3a300}\n.",[1],"c_sign-info{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}\n.",[1],"c_signed-icon{display:block;height:",[0,120],";margin:0 auto ",[0,48],";padding-top:",[0,96],"}\n.",[1],"c_sign-err{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;-webkit-justify-content:center;justify-content:center}\n.",[1],"c_err-img{height:",[0,300],";margin:0 auto ",[0,30],"}\n.",[1],"c_err-title{height:",[0,45],";line-height:",[0,45],";margin-bottom:",[0,18],";opacity:.9}\n.",[1],"c_err-des{height:",[0,36],";line-height:",[0,36],";margin-bottom:",[0,60],";opacity:.5}\n.",[1],"c_err-btn{background:#ffd100;border-radius:",[0,12],";font-size:",[0,26],";height:",[0,62],";line-height:",[0,62],";opacity:.9;width:",[0,152],"}\n.",[1],"c_err-btn:after{display:none}\n.",[1],"c_sign-btn-close{background:#fff;border:1px solid rgba(0,0,0,.2);height:",[0,96],"}\n.",[1],"c_sign-tip{color:rgba(0,0,0,.5);line-height:",[0,36],";margin-top:",[0,28],";text-align:center}\n.",[1],"c_signed-btn-wapper{bottom:",[0,16],";bottom:calc(",[0,16]," + constant(safe-area-inset-bottom) / 2);bottom:calc(",[0,16]," + env(safe-area-inset-bottom) / 2);left:0;padding:0 ",[0,48],";position:fixed}\n",],undefined,{path:"./packages/finance-pay/pages/sign/index.wxss"});
}$gwx42_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([a,[3,'keyboard-wrap '],[[7],[3,'customClass']],[3,' '],[[2,'?:'],[[7],[3,'transformKeyboard']],[1,'transform-keyboard'],[1,'']]])
Z([[2,'!'],[[7],[3,'inputFocus']]])
Z([3,'keyboard-title'])
Z([3,'_onImageError'])
Z([3,'https://p1.meituan.net/pay/cf68119a3812a4e0c966dc8436d52efa2076.png'])
Z([[7],[3,'keynumber']])
Z([3,'index'])
Z([3,'keyboardTap'])
Z([a,[3,'num '],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[1,9]],[1,'blank'],[1,'']]])
Z([[7],[3,'item']])
Z([a,[3,' '],[[7],[3,'item']],[3,' ']])
Z(z[7])
Z([3,'delete'])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_1
}
function gz$gwx42_XC_1_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_2)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_2
__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[6],[[7],[3,'popData']],[3,'sub_title']],[[6],[[7],[3,'popData']],[3,'detail']]])
Z([3,'cashier-nopass-informed-container'])
Z([3,'_onImageError'])
Z([3,'cashier-nopass-informed-image'])
Z([3,'widthFix'])
Z([3,'https://s3.meituan.net/static-prod01/com.sankuai.fspfepayresource.icashier-files/wx-pay.png'])
Z([3,'cashier-nopass-informed-title'])
Z([a,[[6],[[7],[3,'popData']],[3,'title']]])
Z([3,'cashier-nopass-informed-des'])
Z([a,[[6],[[7],[3,'popData']],[3,'sub_title']]])
Z([3,'cashier-nopass-informed-tips'])
Z([a,[[6],[[7],[3,'popData']],[3,'detail']]])
Z([3,'cashier-nopass-button-line'])
Z([3,'beforePopClick'])
Z([3,'cashier-btn noborder primary'])
Z([3,'cashier-btn-active'])
Z([a,[3,' '],[[6],[[7],[3,'popData']],[3,'guide_button']],[3,' ']])
Z([[6],[[7],[3,'popData']],[3,'img']])
Z([3,'cashier-nopass-informed-container new'])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z([a,z[7][1]])
Z([3,'cashier-nopass-informed-content'])
Z(z[2])
Z([3,'cashier-nopass-informed-main-img'])
Z(z[4])
Z(z[17])
Z([3,'cashier-nopass-button-line btn-group'])
Z([3,'cancelAndPay'])
Z([3,'cashier-btn noborder cancel'])
Z(z[15])
Z([a,z[16][1],[[6],[[7],[3,'popData']],[3,'cancel_btn_text']],z[16][1]])
Z(z[13])
Z(z[14])
Z(z[15])
Z([a,z[16][1],[[6],[[7],[3,'popData']],[3,'confirm_btn_text']],z[16][1]])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_2);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_2
}
function gz$gwx42_XC_1_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_3)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_3
__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cashier-nopass-sign-container'])
Z([a,[3,'background: '],[[2,'||'],[[6],[[7],[3,'popData']],[3,'bgColor']],[1,'#ffffff']],[3,';']])
Z([3,'hidePopup'])
Z([3,'cashier-nopass-sign-close'])
Z([3,'_onImageError'])
Z([3,'heightFix'])
Z([3,'https://p0.meituan.net/travelcube/3b8518710edb17d5308ea79aeb1d1983648.png'])
Z(z[4])
Z([3,'cashier-nopass-sign-image'])
Z([3,'widthFix'])
Z([[6],[[7],[3,'popData']],[3,'background_image']])
Z([a,[3,'cashier-nopass-sign-group-button '],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'popData']],[3,'button_line']],[1,'vertical']],[1,'cashier-nopass-sign-button-vertical'],[1,'cashier-nopass-sign-button']]])
Z([3,'beforePopClick'])
Z([a,[3,'cashier-nopass-btn '],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'popData']],[3,'button_line']],[1,'vertical']],[1,'nopass-confirm-btn-vertical'],[1,'nopass-confirm-btn']]])
Z([3,'cashier-btn-active'])
Z([a,[3,' '],[[6],[[7],[3,'popData']],[3,'confirm_btn_text']],[3,' ']])
Z([[6],[[7],[3,'popData']],[3,'cancel_btn_text']])
Z([3,'cancelAndPay'])
Z([a,z[13][1],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'popData']],[3,'button_line']],[1,'vertical']],[1,'nopass-cancel-btn-vertical'],[1,'nopass-cancel-btn']]])
Z(z[14])
Z([a,z[15][1],[[6],[[7],[3,'popData']],[3,'cancel_btn_text']],z[15][1]])
Z([3,'safe-area-bottom'])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_3);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_3
}
function gz$gwx42_XC_1_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_4)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_4
__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'pass-mt-pay-container wallet-item '],[[7],[3,'customClass']]])
Z([3,'flex-align item-bank-info'])
Z([3,'_onImageError'])
Z([[7],[3,'imgSrc']])
Z([3,'display-name'])
Z([a,[[6],[[7],[3,'transInfo']],[3,'display_name']]])
Z([[6],[[7],[3,'transInfo']],[3,'showChangeText']])
Z([3,'change-text'])
Z([3,' 更换 '])
Z([[6],[[7],[3,'transInfo']],[3,'showArrow']])
Z([3,'pay-arrow'])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_4);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_4
}
function gz$gwx42_XC_1_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_5)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_5
__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'inputLength']])
Z([3,'index'])
Z([a,[3,'password-item '],[[7],[3,'customClass']]])
Z([[2,'>='],[[6],[[7],[3,'password']],[3,'length']],[[2,'+'],[[7],[3,'index']],[1,1]]])
Z([3,'hidden'])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_5);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_5
}
function gz$gwx42_XC_1_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_6)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_6
__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cashier-risk-popup'])
Z([3,'crp-mask'])
Z([3,'crp-container'])
Z([[6],[[7],[3,'popupData']],[3,'icon']])
Z([3,'_onImageError'])
Z([3,'crp-icon'])
Z(z[3])
Z([3,'crp-title'])
Z([a,[[6],[[7],[3,'popupData']],[3,'title']]])
Z([3,'crp-content'])
Z([a,[[6],[[7],[3,'popupData']],[3,'content']]])
Z([3,'crp-button-group'])
Z([[7],[3,'buttonList']])
Z([3,'buttonClick'])
Z([a,[3,'crp-button '],[[2,'?:'],[[2,'&&'],[[2,'==='],[[6],[[7],[3,'buttonList']],[3,'length']],[1,2]],[[2,'==='],[[7],[3,'index']],[1,0]]],[1,'crp-minor-button'],[1,'crp-main-button']],[3,' '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'cdtime']],[1,'crp-countdown'],[1,'']]])
Z([[7],[3,'item']])
Z([a,[[6],[[7],[3,'item']],[3,'content']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'cdtime']],[[2,'+'],[[2,'+'],[1,'('],[[6],[[7],[3,'item']],[3,'cdtime']]],[1,')']],[1,'']]])
Z([[2,'==='],[[6],[[7],[3,'buttonList']],[3,'length']],[1,1]])
Z(z[4])
Z([3,'hideModal'])
Z([3,'crp-close'])
Z([3,'https://p0.meituan.net/travelcube/43e4ef28e09ec772cce538367828c4b6325.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_1_6);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_1_6
}
__WXML_GLOBAL__.ops_set.$gwx42_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx42_XC_1=true;
var x=['./packages/finance-pay/components/keyboard/index.wxml','./packages/finance-pay/components/nopass-check-popup/index.wxml','./packages/finance-pay/components/nopass-sign-popup/index.wxml','./packages/finance-pay/components/pass-mt-pay/index.wxml','./packages/finance-pay/components/password-input/index.wxml','./packages/finance-pay/components/risk-popup/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx42_XC_1_1()
var o6=_mz(z,'view',['class',0,'hidden',1],[],e,s,gg)
var f7=_n('view')
_rz(z,f7,'class',2,e,s,gg)
var c8=_mz(z,'image',['binderror',3,'src',1],[],e,s,gg)
_(f7,c8)
_(o6,f7)
var h9=_v()
_(o6,h9)
var o0=function(oBB,cAB,lCB,gg){
var tEB=_mz(z,'view',['bindtap',7,'class',1,'data-value',2],[],oBB,cAB,gg)
var eFB=_oz(z,10,oBB,cAB,gg)
_(tEB,eFB)
_(lCB,tEB)
return lCB
}
h9.wxXCkey=2
_2z(z,5,o0,e,s,gg,h9,'item','index','index')
var bGB=_mz(z,'view',['bindtap',11,'class',1,'data-value',2],[],e,s,gg)
_(o6,bGB)
_(r,o6)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx42_XC_1_2()
var xIB=_v()
_(r,xIB)
if(_oz(z,0,e,s,gg)){xIB.wxVkey=1
var fKB=_n('view')
_rz(z,fKB,'class',1,e,s,gg)
var cLB=_mz(z,'image',['binderror',2,'class',1,'mode',2,'src',3],[],e,s,gg)
_(fKB,cLB)
var hMB=_n('view')
_rz(z,hMB,'class',6,e,s,gg)
var oNB=_oz(z,7,e,s,gg)
_(hMB,oNB)
_(fKB,hMB)
var cOB=_n('view')
_rz(z,cOB,'class',8,e,s,gg)
var oPB=_oz(z,9,e,s,gg)
_(cOB,oPB)
_(fKB,cOB)
var lQB=_n('view')
_rz(z,lQB,'class',10,e,s,gg)
var aRB=_oz(z,11,e,s,gg)
_(lQB,aRB)
_(fKB,lQB)
var tSB=_n('view')
_rz(z,tSB,'class',12,e,s,gg)
var eTB=_mz(z,'button',['bindtap',13,'class',1,'hoverClass',2],[],e,s,gg)
var bUB=_oz(z,16,e,s,gg)
_(eTB,bUB)
_(tSB,eTB)
_(fKB,tSB)
_(xIB,fKB)
}
var oJB=_v()
_(r,oJB)
if(_oz(z,17,e,s,gg)){oJB.wxVkey=1
var oVB=_n('view')
_rz(z,oVB,'class',18,e,s,gg)
var xWB=_mz(z,'image',['binderror',19,'class',1,'mode',2,'src',3],[],e,s,gg)
_(oVB,xWB)
var oXB=_n('view')
_rz(z,oXB,'class',23,e,s,gg)
var fYB=_oz(z,24,e,s,gg)
_(oXB,fYB)
_(oVB,oXB)
var cZB=_n('view')
_rz(z,cZB,'class',25,e,s,gg)
var h1B=_mz(z,'image',['binderror',26,'class',1,'mode',2,'src',3],[],e,s,gg)
_(cZB,h1B)
_(oVB,cZB)
var o2B=_n('view')
_rz(z,o2B,'class',30,e,s,gg)
var c3B=_mz(z,'button',['bindtap',31,'class',1,'hoverClass',2],[],e,s,gg)
var o4B=_oz(z,34,e,s,gg)
_(c3B,o4B)
_(o2B,c3B)
var l5B=_mz(z,'button',['bindtap',35,'class',1,'hoverClass',2],[],e,s,gg)
var a6B=_oz(z,38,e,s,gg)
_(l5B,a6B)
_(o2B,l5B)
_(oVB,o2B)
_(oJB,oVB)
}
xIB.wxXCkey=1
oJB.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx42_XC_1_3()
var e8B=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var b9B=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
var o0B=_mz(z,'image',['binderror',4,'mode',1,'src',2],[],e,s,gg)
_(b9B,o0B)
_(e8B,b9B)
var xAC=_mz(z,'image',['binderror',7,'class',1,'mode',2,'src',3],[],e,s,gg)
_(e8B,xAC)
var oBC=_n('view')
_rz(z,oBC,'class',11,e,s,gg)
var cDC=_mz(z,'button',['bindtap',12,'class',1,'hoverClass',2],[],e,s,gg)
var hEC=_oz(z,15,e,s,gg)
_(cDC,hEC)
_(oBC,cDC)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,16,e,s,gg)){fCC.wxVkey=1
var oFC=_mz(z,'button',['bindtap',17,'class',1,'hoverClass',2],[],e,s,gg)
var cGC=_oz(z,20,e,s,gg)
_(oFC,cGC)
_(fCC,oFC)
}
fCC.wxXCkey=1
_(e8B,oBC)
var oHC=_n('view')
_rz(z,oHC,'class',21,e,s,gg)
_(e8B,oHC)
_(r,e8B)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx42_XC_1_4()
var aJC=_n('view')
_rz(z,aJC,'class',0,e,s,gg)
var tKC=_n('view')
_rz(z,tKC,'class',1,e,s,gg)
var oNC=_mz(z,'image',['binderror',2,'src',1],[],e,s,gg)
_(tKC,oNC)
var xOC=_n('text')
_rz(z,xOC,'class',4,e,s,gg)
var oPC=_oz(z,5,e,s,gg)
_(xOC,oPC)
_(tKC,xOC)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,6,e,s,gg)){eLC.wxVkey=1
var fQC=_n('text')
_rz(z,fQC,'class',7,e,s,gg)
var cRC=_oz(z,8,e,s,gg)
_(fQC,cRC)
_(eLC,fQC)
}
var bMC=_v()
_(tKC,bMC)
if(_oz(z,9,e,s,gg)){bMC.wxVkey=1
var hSC=_n('text')
_rz(z,hSC,'class',10,e,s,gg)
_(bMC,hSC)
}
eLC.wxXCkey=1
bMC.wxXCkey=1
_(aJC,tKC)
_(r,aJC)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx42_XC_1_5()
var cUC=_v()
_(r,cUC)
var oVC=function(aXC,lWC,tYC,gg){
var b1C=_n('view')
_rz(z,b1C,'class',2,aXC,lWC,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,3,aXC,lWC,gg)){o2C.wxVkey=1
var x3C=_n('view')
_rz(z,x3C,'class',4,aXC,lWC,gg)
_(o2C,x3C)
}
o2C.wxXCkey=1
_(tYC,b1C)
return tYC
}
cUC.wxXCkey=2
_2z(z,0,oVC,e,s,gg,cUC,'item','index','index')
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx42_XC_1_6()
var f5C=_n('view')
_rz(z,f5C,'class',0,e,s,gg)
var c6C=_n('view')
_rz(z,c6C,'class',1,e,s,gg)
_(f5C,c6C)
var h7C=_n('view')
_rz(z,h7C,'class',2,e,s,gg)
var o8C=_v()
_(h7C,o8C)
if(_oz(z,3,e,s,gg)){o8C.wxVkey=1
var o0C=_mz(z,'image',['binderror',4,'class',1,'src',2],[],e,s,gg)
_(o8C,o0C)
}
var lAD=_n('view')
_rz(z,lAD,'class',7,e,s,gg)
var aBD=_oz(z,8,e,s,gg)
_(lAD,aBD)
_(h7C,lAD)
var tCD=_n('view')
_rz(z,tCD,'class',9,e,s,gg)
var eDD=_oz(z,10,e,s,gg)
_(tCD,eDD)
_(h7C,tCD)
var bED=_n('view')
_rz(z,bED,'class',11,e,s,gg)
var oFD=_v()
_(bED,oFD)
var xGD=function(fID,oHD,cJD,gg){
var oLD=_mz(z,'button',['bindtap',13,'class',1,'data-button',2],[],fID,oHD,gg)
var cMD=_oz(z,16,fID,oHD,gg)
_(oLD,cMD)
_(cJD,oLD)
return cJD
}
oFD.wxXCkey=2
_2z(z,12,xGD,e,s,gg,oFD,'item','index','')
_(h7C,bED)
var c9C=_v()
_(h7C,c9C)
if(_oz(z,17,e,s,gg)){c9C.wxVkey=1
var oND=_mz(z,'image',['binderror',18,'bindtap',1,'class',2,'src',3],[],e,s,gg)
_(c9C,oND)
}
o8C.wxXCkey=1
c9C.wxXCkey=1
_(f5C,h7C)
_(r,f5C)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx42_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx42_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/components/keyboard/index.wxml'] = [$gwx42_XC_1, './packages/finance-pay/components/keyboard/index.wxml'];else __wxAppCode__['packages/finance-pay/components/keyboard/index.wxml'] = $gwx42_XC_1( './packages/finance-pay/components/keyboard/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/components/nopass-check-popup/index.wxml'] = [$gwx42_XC_1, './packages/finance-pay/components/nopass-check-popup/index.wxml'];else __wxAppCode__['packages/finance-pay/components/nopass-check-popup/index.wxml'] = $gwx42_XC_1( './packages/finance-pay/components/nopass-check-popup/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/components/nopass-sign-popup/index.wxml'] = [$gwx42_XC_1, './packages/finance-pay/components/nopass-sign-popup/index.wxml'];else __wxAppCode__['packages/finance-pay/components/nopass-sign-popup/index.wxml'] = $gwx42_XC_1( './packages/finance-pay/components/nopass-sign-popup/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/components/pass-mt-pay/index.wxml'] = [$gwx42_XC_1, './packages/finance-pay/components/pass-mt-pay/index.wxml'];else __wxAppCode__['packages/finance-pay/components/pass-mt-pay/index.wxml'] = $gwx42_XC_1( './packages/finance-pay/components/pass-mt-pay/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/components/password-input/index.wxml'] = [$gwx42_XC_1, './packages/finance-pay/components/password-input/index.wxml'];else __wxAppCode__['packages/finance-pay/components/password-input/index.wxml'] = $gwx42_XC_1( './packages/finance-pay/components/password-input/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/components/risk-popup/index.wxml'] = [$gwx42_XC_1, './packages/finance-pay/components/risk-popup/index.wxml'];else __wxAppCode__['packages/finance-pay/components/risk-popup/index.wxml'] = $gwx42_XC_1( './packages/finance-pay/components/risk-popup/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packages/finance-pay/components/keyboard/index.wxss']=setCssToHead([".",[1],"keyboard-wrap{-webkit-box-align:center;-webkit-box-pack:center;-webkit-align-items:center;align-items:center;background:#eee;bottom:0;box-sizing:border-box;height:auto;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;padding:",[0,6]," ",[0,6]," calc(",[0,6]," + env(safe-area-inset-bottom)/2);position:absolute;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;width:100%;z-index:999}\n.",[1],"transform-keyboard{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}\n.",[1],"keyboard-title{text-align:center}\n.",[1],"keyboard-title\x3ewx-image{height:",[0,24],";padding:",[0,14]," 0;width:",[0,322],"}\n.",[1],"num{background:#fff;border-radius:",[0,12],";color:rgba(0,0,0,.9);float:left;font-size:",[0,48],";height:",[0,100],";line-height:",[0,100],";margin:",[0,6],";text-align:center;width:calc((100% - ",[0,36],") / 3)}\n.",[1],"blank{margin-left:calc(((100% - ",[0,36],") / 3) + ",[0,18],")}\n.",[1],"delete{background:url(\x22data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMi4zOSA4LjUzNiA5LjAxOSAxNWgxMC42MzRjMS42MTggMCAyLjk0MS0xLjM0NyAyLjk0MS0zVjVjMC0xLjY1NS0xLjMxOC0zLTIuOTQxLTNIOS4wMjJMMi4zOSA4LjUzNnpNOS4wNDcgMGgxMC42MDZjMi43MDggMCA0LjkwNSAyLjI0MSA0LjkwNSA1djdjMCAyLjc1OC0yLjIwMyA1LTQuOTA1IDVIOS4wNDRhMiAyIDAgMCAxLTEuMzk2LS41NjhsLTYuNjMtNi40NjNhMiAyIDAgMCAxLS4wMDctMi44NTdMNy42NDMuNTc2QTIgMiAwIDAgMSA5LjA0NyAweiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0ibTEzIDYgNSA1bTAtNS01IDUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48L2c+PC9zdmc+\x22) no-repeat;background-position:50%;float:left;height:",[0,100],";margin:",[0,6],";width:calc((100% - ",[0,36],") / 3)}\n.",[1],"pre-cashier-keyboard-class{bottom:auto;opacity:1;top:0;-webkit-transform:none;transform:none}\n.",[1],"pre-cashier-keyboard-class .",[1],"num{height:",[0,110],";line-height:",[0,110],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/components/keyboard/index.wxss:1:611)",{path:"./packages/finance-pay/components/keyboard/index.wxss"});__wxAppCode__['packages/finance-pay/components/nopass-check-popup/index.wxss']=setCssToHead([".",[1],"cashier-nopass-informed-container{background:#fff;border-radius:",[0,24]," ",[0,24]," 0 0;box-sizing:border-box;height:",[0,711],";padding:",[0,80]," ",[0,30]," ",[0,48],";position:relative}\n.",[1],"cashier-nopass-informed-container.",[1],"new{height:",[0,803],"}\n.",[1],"cashier-nopass-informed-image{display:block;margin:0 auto ",[0,43],";width:",[0,105],"}\n.",[1],"cashier-nopass-informed-title{font-size:",[0,44],";font-weight:600;line-height:",[0,64],";margin-bottom:",[0,42],";text-align:center}\n.",[1],"cashier-nopass-informed-des,.",[1],"cashier-nopass-informed-tips{color:rgba(0,0,0,.6);font-size:",[0,28],";font-weight:400;line-height:",[0,40],";padding-left:",[0,38],";padding-right:",[0,18],";position:relative}\n.",[1],"cashier-nopass-informed-des:before,.",[1],"cashier-nopass-informed-tips:before{background-color:#d5d5d5;border-radius:50%;content:\x22\x22;display:block;height:",[0,8],";left:",[0,18],";position:absolute;top:",[0,16],";width:",[0,8],"}\n.",[1],"cashier-nopass-informed-des{margin-bottom:",[0,10],"}\n.",[1],"cashier-btn{border:0;border-radius:",[0,45],";color:rgba(0,0,0,.9);font-size:",[0,30],";font-weight:500;height:",[0,80],";line-height:",[0,80],"}\n.",[1],"cashier-btn+.",[1],"cashier-btn{margin-left:",[0,16],"}\n.",[1],"cashier-btn.",[1],"primary{background-color:#ffd100;background-image:-webkit-linear-gradient(316deg,#ffe74d,#ffdd19);background-image:linear-gradient(134deg,#ffe74d,#ffdd19)}\n.",[1],"cashier-btn.",[1],"cancel,.",[1],"cashier-btn.",[1],"primary{-webkit-box-flex:1;-webkit-flex:1 0 ",[0,343],";flex:1 0 ",[0,343],"}\n.",[1],"cashier-btn.",[1],"cancel{background-color:#fff;border:",[0,1]," solid rgba(0,0,0,.1)}\n.",[1],"cashier-btn:after{display:none}\n.",[1],"cashier-nopass-button-line{bottom:",[0,16],";bottom:calc(",[0,16]," + constant(safe-area-inst-bottom));bottom:calc(",[0,16]," + env(safe-area-inset-bottom));left:",[0,24],";position:absolute;right:",[0,24],"}\n.",[1],"cashier-nopass-button-line.",[1],"btn-group{-webkit-box-pack:justify;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"cashier-nopass-informed-content{-webkit-box-pack:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.",[1],"cashier-nopass-informed-main-img{display:inline-block;height:",[0,202],";margin-top:",[0,14],";width:",[0,437],"}\n",],undefined,{path:"./packages/finance-pay/components/nopass-check-popup/index.wxss"});__wxAppCode__['packages/finance-pay/components/nopass-sign-popup/index.wxss']=setCssToHead([[2,"./packages/finance-pay/style/common.wxss"],".",[1],"cashier-nopass-sign-container{background:#fff;border-radius:",[0,44]," ",[0,44]," 0 0;box-sizing:border-box;height:auto;min-height:",[0,528],";overflow:hidden;position:relative;-webkit-transition:height .5s linear;transition:height .5s linear;width:100%}\n.",[1],"cashier-nopass-sign-close{padding:",[0,20],";position:absolute;right:",[0,12],";top:",[0,12],"}\n.",[1],"cashier-nopass-sign-close wx-image{height:",[0,32],"}\n.",[1],"cashier-nopass-sign-image{display:block;height:100%;object-fit:cover;width:100%}\n.",[1],"cashier-nopass-btn{border-radius:",[0,48.5],";color:rgba(0,0,0,.9);font-size:",[0,30],";font-weight:500;height:",[0,80],";line-height:",[0,80],";margin:0;width:",[0,335],"}\n.",[1],"cashier-nopass-btn:after{display:none}\n.",[1],"cashier-nopass-sign-group-button{bottom:0;bottom:calc(constant(safe-area-inst-bottom) / 2);bottom:calc(env(safe-area-inset-bottom) / 2);left:0;padding:0 ",[0,32],";position:absolute}\n.",[1],"cashier-nopass-sign-button{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-box-pack:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;bottom:",[0,16],";display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-justify-content:center;justify-content:center}\n.",[1],"cashier-nopass-sign-button-vertical{width:100vw}\n.",[1],"nopass-confirm-btn-vertical{background-color:#ffd100;background-image:-webkit-linear-gradient(315deg,#ffe74d,#ffdd19);background-image:linear-gradient(135deg,#ffe74d,#ffdd19);border-radius:",[0,48],";height:",[0,96],";line-height:",[0,96],";width:",[0,686],"}\n.",[1],"nopass-cancel-btn-vertical{background-color:initial;border:none;color:#191919;font-weight:400;height:",[0,104],";line-height:",[0,104],";width:",[0,686],"}\n.",[1],"nopass-confirm-btn{background-color:#ffd100;background-image:-webkit-linear-gradient(316deg,#ffe74d,#ffdd19);background-image:linear-gradient(134deg,#ffe74d,#ffdd19);margin-left:",[0,16],"}\n.",[1],"nopass-cancel-btn{background-color:#fff;border:",[0,1]," solid rgba(0,0,0,.1)}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/components/nopass-sign-popup/index.wxss:1:3175)",{path:"./packages/finance-pay/components/nopass-sign-popup/index.wxss"});__wxAppCode__['packages/finance-pay/components/pass-mt-pay/index.wxss']=setCssToHead([[2,"./packages/finance-pay/style/common.wxss"],".",[1],"wallet-item{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-flow:column;flex-flow:column;height:",[0,130],";-webkit-justify-content:center;justify-content:center;padding:0 ",[0,30],";position:relative;text-align:left}\n.",[1],"item-bank-info{height:",[0,30],";line-height:",[0,30],";position:relative}\n.",[1],"item-bank-info\x3ewx-image{display:inline-block;height:",[0,32],";margin-right:",[0,12],";vertical-align:middle;width:",[0,32],"}\n.",[1],"item-bank-info .",[1],"display-name{color:#111;display:inline-block;font-size:",[0,32],";line-height:",[0,32],";max-width:80%;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}\n.",[1],"change-text{color:#555;font-size:",[0,28],";line-height:",[0,28],";margin-left:",[0,20],"}\n.",[1],"pre-cashier-pass-mt-pay .",[1],"item-bank-info wx-img{height:",[0,36],";width:",[0,36],"}\n.",[1],"pre-cashier-pass-mt-pay .",[1],"item-bank-info .",[1],"change-text,.",[1],"pre-cashier-pass-mt-pay .",[1],"item-bank-info .",[1],"display-name{font-size:",[0,28],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/components/pass-mt-pay/index.wxss:1:3175)",{path:"./packages/finance-pay/components/pass-mt-pay/index.wxss"});__wxAppCode__['packages/finance-pay/components/password-input/index.wxss']=setCssToHead([".",[1],"password-item{background:rgba(0,0,0,.04);border-radius:",[0,9],";display:inline-block;height:",[0,86],";margin-right:",[0,6],";position:relative;text-align:center;width:",[0,86],"}\n.",[1],"hidden{background:rgba(0,0,0,.9);border-radius:50%;height:",[0,18],";left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:",[0,18],"}\n.",[1],"password-item:last-child{margin-right:0}\n.",[1],"pre-cashier-password-input{background:rgba(0,0,0,.04);border-radius:",[0,24],";height:0;margin-right:",[0,10],";padding-bottom:calc((100% - ",[0,50],") / 6);width:calc((100% - ",[0,50],") / 6)}\n.",[1],"pre-cashier-password-input .",[1],"hidden{height:",[0,20],";width:",[0,20],"}\n",],undefined,{path:"./packages/finance-pay/components/password-input/index.wxss"});__wxAppCode__['packages/finance-pay/components/risk-popup/index.wxss']=setCssToHead([".",[1],"cashier-risk-popup{height:100%;left:0;position:fixed;top:0;width:100%;z-index:999}\n.",[1],"crp-mask{background:rgba(0,0,0,.6);height:100%;width:100%}\n.",[1],"crp-container{background:#fff;border-radius:",[0,36],";box-sizing:border-box;left:50%;padding:",[0,32]," ",[0,36],";position:absolute;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);width:",[0,624],"}\n.",[1],"crp-icon{display:block;height:",[0,120],";margin:",[0,16]," auto ",[0,32],";width:",[0,120],"}\n.",[1],"crp-title{color:rgba(0,0,0,.9);font-size:",[0,36],";font-weight:500;line-height:",[0,68],";margin-bottom:",[0,10],";text-align:center}\n.",[1],"crp-content{color:rgba(0,0,0,.9);font-size:",[0,28],";line-height:",[0,40],";margin-bottom:",[0,42],"}\n.",[1],"crp-button-group{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"crp-button,.",[1],"crp-button-group{display:-webkit-box;display:-webkit-flex;display:flex}\n.",[1],"crp-button{-webkit-box-align:center;-webkit-box-pack:center;-webkit-box-flex:1;-webkit-align-items:center;align-items:center;border:none;border-radius:",[0,40],";box-sizing:border-box;color:rgba(0,0,0,.9);-webkit-flex:1;flex:1;font-size:",[0,30],";font-weight:500;height:",[0,80],";-webkit-justify-content:center;justify-content:center;margin:0;padding:0}\n.",[1],"crp-button:after{display:none}\n.",[1],"crp-minor-button{background:#fff;border:",[0,1]," solid #ccc;margin-right:",[0,16],"}\n.",[1],"crp-minor-button:active{background:#f5f5f5}\n.",[1],"crp-main-button{background:#ffdd19;background-image:-webkit-linear-gradient(315deg,#ffe74d,#ffdd19);background-image:linear-gradient(135deg,#ffe74d,#ffdd19)}\n.",[1],"crp-main-button.",[1],"crp-countdown{background:#fff6b8;color:rgba(0,0,0,.2)}\n.",[1],"crp-main-button:active{background:#ebcb00}\n.",[1],"crp-close{height:",[0,32],";position:absolute;right:",[0,20],";top:",[0,20],";width:",[0,32],"}\n",],undefined,{path:"./packages/finance-pay/components/risk-popup/index.wxss"});
}__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packages/finance-pay/components/nav-bar/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c=(C)=>{},d,g=(C,T)=>{C||K||U.title?T(Y(D.title)):T()},f=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"nav-bar__title-text")},g)},e=(C,T,E)=>{if(d===1){E("view",{},(N,C)=>{if(C)L(N,"nav-bar__title")},f)}},b=(C,T,E,B)=>{E("view",{},(N,C)=>{if(C)L(N,"nav-bar__back-icon");if(C)O(N,"bindtap","navigateBack")},c);d=D.title?1:0;B(d,e)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"nav-bar");if(C||K||!!(U.totalHeight||U.statusBarHeight||U.navBarPadding||U.navBarPadding||U.background)||undefined)R.y(N,"height: "+Y(D.totalHeight)+"rpx; padding-top: "+Y(D.statusBarHeight)+"rpx; padding-left: "+Y(D.navBarPadding)+"rpx; padding-right: "+Y(D.navBarPadding)+"rpx; background: "+Y(D.background)+";");A["totalHeight"][0]=A["statusBarHeight"][0]=A["navBarPadding"][0]=A["navBarPadding"][1]=A["background"][0]=(D,E,T)=>{R.y(N,"height: "+Y(D.totalHeight)+"rpx; padding-top: "+Y(D.statusBarHeight)+"rpx; padding-left: "+Y(D.navBarPadding)+"rpx; padding-right: "+Y(D.navBarPadding)+"rpx; background: "+Y(D.background)+";")}},b);C=!1;U=Object.create(null);K=!1};A=A||{"statusBarHeight":new Array(1),"navBarPadding":new Array(2),"totalHeight":new Array(1),"background":new Array(1)};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packages/finance-pay/components/nav-bar/index.wxss']=setCssToHead([".",[1],"nav-bar{-webkit-box-align:center;-webkit-box-pack:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;position:relative;width:100vw}\n.",[1],"nav-bar__back-icon{background-image:url(\x22data:image/svg+xml;charset\x3dutf8,%3Csvg xmlns\x3d\x27http://www.w3.org/2000/svg\x27 width\x3d\x2712\x27 height\x3d\x2724\x27 viewBox\x3d\x270 0 12 24\x27%3E%3Cpath fill\x3d\x27rgba(0%2C0%2C0%2C0.9)\x27 fill-rule\x3d\x27evenodd\x27 d\x3d\x27M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42L8.955 3.5 10 4.563 2.682 12 10 19.438z\x27/%3E%3C/svg%3E\x22);background-position:50%;background-repeat:no-repeat;background-size:",[0,20]," ",[0,35],";height:",[0,44],";left:",[0,24],";position:absolute;width:",[0,44],"}\n.",[1],"nav-bar__title{left:0;position:absolute;right:0;text-align:center}\n.",[1],"nav-bar__title-text{color:#111;display:block;font-size:",[0,34],";font-weight:500;margin:0 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n",],undefined,{path:"./packages/finance-pay/components/nav-bar/index.wxss"});
}__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packages/finance-pay/components/preposition-payment-component/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,d=(C,e,f,g,h,i,T,E)=>{var k,m=(C)=>{},l=(C,T,E)=>{if(k===1){E("flatten-type",{},(N,C)=>{if(C||K||g)O(N,"flattenList",e);if(C||K||h)O(N,"index",f);if(C||K||U.flatPayInfoList)O(N,"flatPayInfoList",D.flatPayInfoList);if(C||K||U.displayStrategy)O(N,"displayStrategy",D.displayStrategy);if(C||K||U.apiSelectedStatus)O(N,"selectedStatus",D.apiSelectedStatus);if(C||K||Z(Z(U.PreComponentsBids,"payInfoItem"),"mv"))O(N,"moduleBid",X(X(D.PreComponentsBids).payInfoItem).mv);if(C||K||h)R.d(N,"index",f,!0);if(C)R.v(N,"selectSubPayType","selectSubPayType",!1,!1,!1,!1);if(C)R.v(N,"setSelectedStatus","setSelectedStatus",!1,!1,!1,!1);if(C)R.v(N,"selectPayTypeFun","selectPayTypeFun",!1,!1,!1,!1);if(C)R.v(N,"setHalfDrawerData","setHalfDrawerData",!1,!1,!1,!1)},m)}},n,q=(C)=>{},p=(C,T,E)=>{C?T(" 展开更多 "):T();E("view",{},(N,C)=>{if(C)L(N,"pay-arrow arrow-down")},q)},s=(C,t,u,v,w,x,T,E)=>{var y=(C)=>{};E("flatten-type",{},(N,C)=>{if(C||K||w)O(N,"index",u);if(C||K||v)O(N,"flattenList",t);if(C||K||U.flatPayInfoList)O(N,"flatPayInfoList",D.flatPayInfoList);if(C||K||U.displayStrategy)O(N,"displayStrategy",D.displayStrategy);if(C||K||U.apiSelectedStatus)O(N,"selectedStatus",D.apiSelectedStatus);if(C||K||Z(Z(U.PreComponentsBids,"payInfoItem"),"mv"))O(N,"moduleBid",X(X(D.PreComponentsBids).payInfoItem).mv);if(C||K||w)R.d(N,"index",u,!0);if(C)R.v(N,"selectSubPayType","selectSubPayType",!1,!1,!1,!1);if(C)R.v(N,"setSelectedStatus","setSelectedStatus",!1,!1,!1,!1);if(C)R.v(N,"selectPayTypeFun","selectPayTypeFun",!1,!1,!1,!1);if(C)R.v(N,"setHalfDrawerData","setHalfDrawerData",!1,!1,!1,!1)},y);w=undefined;v=undefined},r=(C,T,E,B,F)=>{F(X(e).sort_strategy_list||[],"index",C||K?undefined:!!(Z(g,"sort_strategy_list")||Q.a([]))||undefined,null,s)},o=(C,T,E)=>{if(n===1){E("view",{},(N,C)=>{if(C)L(N,"flex-center fold-more");if(C||K||U.showMore)O(N,"hidden",D.showMore);if(C)O(N,"catchtap","foldMore")},p);E("view",{},(N,C)=>{var $A=D.showMore;if(C||K||!!U.showMore||($A?undefined:undefined))L(N,$A?"show":"hide");if(C||K||!!U.showMore||undefined)O(N,"hidden",!D.showMore)},r)}},j=(C,T,E,B)=>{k=X(e).show_type==="flatten"||X(e).show_type==="switch"?1:0;B(k,l);n=X(e).show_type==="fold"?1:0;B(n,o)};E("view",{},(N,C)=>{},j);h=undefined;g=undefined},c=(C,T,E,B,F)=>{F(D.renderSortStrategyList,"index",C||K?undefined:U.renderSortStrategyList,[0,"renderSortStrategyList"],d)},f,i,k=(C)=>{},j=(C,T,E)=>{if(i===1){E("ecny-wallet-half-drawer",{},(N,C)=>{if(C||K||U.dcepChangeHalfDrawerData)O(N,"halfDrawerData",D.dcepChangeHalfDrawerData);if(C||K||Z(U.apiSelectedStatus,"subPayTypeUniqueKey"))O(N,"subPayTypeUniqueKey",X(D.apiSelectedStatus).subPayTypeUniqueKey);if(C)R.v(N,"selectEcnyPayTypeFun","selectEcnyPayTypeFun",!1,!1,!1,!1)},k)}},l,n=(C)=>{},m=(C,T,E)=>{if(l===1){E("weixin-nopass-half-drawer",{},(N,C)=>{if(C||K||U.weixinNoPassChangeList)O(N,"halfDrawerData",D.weixinNoPassChangeList);if(C||K||U.apiNoPasswordStatus)O(N,"noPasswordStatus",D.apiNoPasswordStatus);if(C)R.v(N,"selectWeixinPayType","selectWeixinPayType",!1,!1,!1,!1)},n)}},h=(C,T,E,B)=>{i=X(D.showPayTypeChangeHalfDrawer).type==="dcep"?1:0;B(i,j);l=X(D.showPayTypeChangeHalfDrawer).type==="wxjspay"?1:0;B(l,m)},g=(C,T,E)=>{if(f===1){E("half-drawer",{},(N,C)=>{if(C)R.v(N,"closeHalfDrawer","closeHalfDrawer",!1,!1,!1,!1)},h)}},e=(C,T,E,B)=>{f=X(D.showPayTypeChangeHalfDrawer).show?1:0;B(f,g)},b=(C,T,E)=>{E("view",{},(N,C)=>{var $A=D.showGuide;if(C||K||!!U.showGuide||($A?undefined:undefined))L(N,$A?"scale-animation":"");A["showGuide"][1]=(D,E,T)=>{var $B=D.showGuide;L(N,$B?"scale-animation":"")}},c);E("root-portal",{},(N,C)=>{if(C)O(N,"enable","true")},e)},a=(C,T,E)=>{E("view",{},(N,C)=>{var $A=D.showGuide;if(C||K||!!(U.showGuide||($A?undefined:undefined))||undefined)L(N,"pay-preposition-payment-component "+Y($A?"border-wrapper":""));A["showGuide"][0]=(D,E,T)=>{var $B=D.showGuide;L(N,"pay-preposition-payment-component "+Y($B?"border-wrapper":""))};if(C||K||!!(U.showPreComponent||U.componentError)||undefined)O(N,"hidden",!D.showPreComponent||D.componentError);A["showPreComponent"][0]=A["componentError"][0]=(D,E,T)=>{O(N,"hidden",!D.showPreComponent||D.componentError);E(N)}},b);C=!1;U=Object.create(null);K=!1};A=A||{"showPreComponent":new Array(1),"componentError":new Array(1),"showGuide":new Array(2)};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),'packages/finance-pay/pages/debug/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c=(C)=>{},g=(C)=>{},f=(C,T,E)=>{E("radio",{},(N,C)=>{if(C)O(N,"value","sdk");if(C||K||!!Z(U.inputData,"radioGroup")||undefined)O(N,"checked",X(D.inputData).radioGroup==="sdk")},g);C?T(" Native调用 "):T()},i=(C)=>{},h=(C,T,E)=>{E("radio",{},(N,C)=>{if(C)O(N,"value","page");if(C||K||!!Z(U.inputData,"radioGroup")||undefined)O(N,"checked",X(D.inputData).radioGroup==="page")},i);C?T(" H5调用 "):T()},k=(C)=>{},j=(C,T,E)=>{E("radio",{},(N,C)=>{if(C)O(N,"value","remittancePay");if(C||K||!!Z(U.inputData,"radioGroup")||undefined)O(N,"checked",X(D.inputData).radioGroup==="remittancePay")},k);C?T(" 汇款支付 "):T()},m=(C)=>{},l=(C,T,E)=>{E("radio",{},(N,C)=>{if(C)O(N,"value","sign");if(C||K||!!Z(U.inputData,"radioGroup")||undefined)O(N,"checked",X(D.inputData).radioGroup==="sign")},m);C?T(" 微信免密签约 "):T()},o=(C)=>{},n=(C,T,E)=>{E("radio",{},(N,C)=>{if(C)O(N,"value","pre-component");if(C||K||!!Z(U.inputData,"radioGroup")||undefined)O(N,"checked",X(D.inputData).radioGroup==="pre-component")},o);C?T(" 前置支付组件 "):T()},q=(C)=>{},p=(C,T,E)=>{E("radio",{},(N,C)=>{if(C)O(N,"value","agent-cashier");if(C||K||!!Z(U.inputData,"radioGroup")||undefined)O(N,"checked",X(D.inputData).radioGroup==="agent-cashier")},q);C?T(" Agent 收银台 "):T()},e=(C,T,E)=>{E("label",{},(N,C)=>{if(C)L(N,"radio")},f);E("label",{},(N,C)=>{if(C)L(N,"radio")},h);E("label",{},(N,C)=>{if(C)L(N,"radio")},j);E("label",{},(N,C)=>{if(C)L(N,"radio")},l);E("label",{},(N,C)=>{if(C)L(N,"radio")},n);E("label",{},(N,C)=>{if(C)L(N,"radio")},p)},r,u=(C,T)=>{C?T("免密签约入口 entry"):T()},v=(C)=>{},t=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},u);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"entry"))O(N,"value",X(D.inputData).entry);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","entry",!0)},v)},x=(C,T)=>{C?T("泳道（仅test环境生效）"):T()},y=(C)=>{},w=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},x);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"swimlane"))O(N,"value",X(D.inputData).swimlane);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","swimlane",!0)},y)},A0=(C,T)=>{C?T("当前环境（请务必和当前实际环境保持一致）"):T()},B0=(C,T)=>{var $A=X(D.inputData).runtime;C||K||!!(Z(U.inputData,"runtime")||Z(Z(U.staticData,"runtimeList"),$A))||undefined?T(Y(" "+Y(X(X(D.staticData).runtimeList)[$A])+" ")):T()},z=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},A0);E("picker",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"runtime"))O(N,"value",X(D.inputData).runtime);if(C)O(N,"mode","selector");if(C||K||Z(U.staticData,"runtimeList"))O(N,"range",X(D.staticData).runtimeList);if(C)O(N,"bindchange","runtimeChange")},B0)},D0=(C,T)=>{C?T("是否自动唤起免密开通"):T()},E0=(C,T)=>{var $A=X(D.inputData).autoSign;C||K||!!(Z(U.inputData,"autoSign")||Z(Z(U.staticData,"autoSign"),$A))||undefined?T(Y(" "+Y(X(X(D.staticData).autoSign)[$A])+" ")):T()},C0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},D0);E("picker",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"autoSign"))O(N,"value",X(D.inputData).autoSign);if(C)O(N,"mode","selector");if(C||K||Z(U.staticData,"autoSign"))O(N,"range",X(D.staticData).autoSign);if(C)O(N,"bindchange","autoSignChange")},E0)},G0=(C,T)=>{C?T("回调方式"):T()},H0=(C)=>{},F0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},G0);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"getResultWay"))O(N,"value",X(D.inputData).getResultWay);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","getResultWay",!0)},H0)},s=(C,T,E)=>{if(r===1){E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},t);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},w);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},z);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},C0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},F0)}},I0,K0=(C)=>{},J0=(C,T,E)=>{if(I0===1){E("preposition-payment-component",{},(N,C)=>{if(C)O(N,"runtime","test");if(C)O(N,"swimlane","1944-tgowf");if(C||K||undefined)O(N,"needRequest",true);if(C)O(N,"sellerId","11000035261715");if(C)O(N,"payFeeCent","3438");if(C)O(N,"preCashierId","100000000012");if(C)O(N,"preCashierScene","10001001");if(C)O(N,"riskParam","{}");if(C)R.v(N,"onPrePaymentProductChange","onPrePaymentProductChange",!1,!1,!1,!1);if(C)R.v(N,"onError","onPrepositionPaymentComponentError",!1,!1,!1,!1)},K0)}},L0,O0=(C,T)=>{C?T("泳道（仅test环境生效）"):T()},P0=(C)=>{},N0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},O0);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"swimlane"))O(N,"value",X(D.inputData).swimlane);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","swimlane",!0)},P0)},R0=(C,T)=>{C?T("当前环境（请务必和当前实际环境保持一致）"):T()},S0=(C,T)=>{var $A=X(D.inputData).runtime;C||K||!!(Z(U.inputData,"runtime")||Z(Z(U.staticData,"runtimeList"),$A))||undefined?T(Y(" "+Y(X(X(D.staticData).runtimeList)[$A])+" ")):T()},Q0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},R0);E("picker",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"runtime"))O(N,"value",X(D.inputData).runtime);if(C)O(N,"mode","selector");if(C||K||Z(U.staticData,"runtimeList"))O(N,"range",X(D.staticData).runtimeList);if(C)O(N,"bindchange","cashierRuntimeChange")},S0)},U0=(C,T)=>{C?T("订单类型"):T()},V0=(C,T)=>{var $A=X(D.inputData).productType;C||K||!!(Z(U.inputData,"productType")||Z(Z(U.staticData,"productType"),$A))||undefined?T(Y(" "+Y(X(X(D.staticData).productType)[$A])+" ")):T()},T0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},U0);E("picker",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"productType"))O(N,"value",X(D.inputData).productType);if(C)O(N,"mode","selector");if(C||K||Z(U.staticData,"productType"))O(N,"range",X(D.staticData).productType);if(C)O(N,"bindchange","productTypeChange")},V0)},X0=(C,T)=>{C?T("root path"):T()},Y0=(C)=>{},W0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},X0);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"root_path"))O(N,"value",X(D.inputData).root_path);if(C)O(N,"mode","input");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","root_path",!0)},Y0)},a0=(C,T)=>{C?T("订单标题"):T()},b0=(C)=>{},Z0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},a0);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"productName"))O(N,"value",X(D.inputData).productName);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","productName",!0)},b0)},d0=(C,T)=>{C?T("金额（分）"):T()},e0=(C)=>{},c0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},d0);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"payFeeCent"))O(N,"value",X(D.inputData).payFeeCent);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","payFeeCent",!0)},e0)},g0=(C,T)=>{C?T("过期时间"):T()},h0=(C)=>{},f0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},g0);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"expireTime"))O(N,"value",X(D.inputData).expireTime);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","expireTime",!0)},h0)},j0=(C,T)=>{C?T("商户号"):T()},k0=(C)=>{},i0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},j0);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"sellerId"))O(N,"value",X(D.inputData).sellerId);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","sellerId",!0)},k0)},m0=(C,T)=>{C?T("子商户号"):T()},n0=(C)=>{},l0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},m0);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"subSellerId"))O(N,"value",X(D.inputData).subSellerId);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","subSellerId",!0)},n0)},p0=(C,T)=>{C?T("payType"):T()},q0=(C)=>{},o0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},p0);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"payType"))O(N,"value",X(D.inputData).payType);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","payType",!0)},q0)},s0=(C,T)=>{C?T("planId"):T()},t0=(C)=>{},r0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},s0);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"planId"))O(N,"value",X(D.inputData).planId);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","planId",!0)},t0)},v0=(C,T)=>{C?T("支付成功后跳转地址"):T()},w0=(C)=>{},u0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},v0);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"callback_path"))O(N,"value",X(D.inputData).callback_path);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","callback_path",!0)},w0)},y0=(C,T)=>{C?T("支付成功后跳转方式（navigateBack || redirectTo || backToApp）"):T()},z0=(C)=>{},x0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},y0);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"callback_type"))O(N,"value",X(D.inputData).callback_type);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","callback_type",!0)},z0)},B1=(C,T)=>{C?T("支付后跳转小程序appid"):T()},C1=(C)=>{},A1=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},B1);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"callback_app_id"))O(N,"value",X(D.inputData).callback_app_id);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","callback_app_id",!0)},C1)},E1=(C,T)=>{C?T("来源"):T()},F1=(C)=>{},D1=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},E1);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"from"))O(N,"value",X(D.inputData).from);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","from",!0)},F1)},H1=(C,T)=>{C?T("降级scheme"):T()},I1=(C)=>{},G1=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},H1);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"h5_scheme"))O(N,"value",X(D.inputData).h5_scheme);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","h5_scheme",!0)},I1)},K1=(C,T)=>{C?T("模版IDs"):T()},L1=(C)=>{},J1=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},K1);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"tmplIds"))O(N,"value",X(D.inputData).tmplIds);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","tmplIds",!0)},L1)},N1=(C,T)=>{C?T("前端扩展参数"):T()},O1=(C)=>{},M1=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},N1);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"ext_param"))O(N,"value",X(D.inputData).ext_param);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","ext_param",!0)},O1)},Q1=(C,T)=>{C?T("扩展参数"):T()},R1=(C)=>{},P1=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},Q1);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"extraInfo"))O(N,"value",X(D.inputData).extraInfo);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","extraInfo",!0)},R1)},T1=(C,T)=>{C?T("视频号场景"):T()},U1=(C)=>{},S1=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"demo-title")},T1);E("input",{},(N,C)=>{if(C)L(N,"demo-value");if(C||K||Z(U.inputData,"live_pay"))O(N,"value",X(D.inputData).live_pay);if(C)O(N,"type","text");if(C)O(N,"bindinput","onInputChange");if(C)R.d(N,"key","live_pay",!0)},U1)},M0=(C,T,E)=>{if(L0===1){E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},N0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},Q0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},T0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},W0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},Z0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},c0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},f0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},i0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},l0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},o0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},r0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},u0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},x0);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},A1);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},D1);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},G1);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},J1);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},M1);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},P1);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},S1)}},d=(C,T,E,B)=>{E("radio-group",{},(N,C)=>{if(C)L(N,"demo-wrapper-tab");if(C)O(N,"bindchange","onRadioGroupChange")},e);r=X(D.inputData).radioGroup==="sign"?1:0;B(r,s);I0=X(D.inputData).radioGroup==="pre-component"?1:0;B(I0,J0);L0=X(D.inputData).radioGroup!=="sign"?1:0;B(L0,M0)},V1=(C,T)=>{var $A=X(D.inputData).radioGroup==="sign";var $B=X(D.inputData).radioGroup==="agent-cashier";C||K||!!(Z(U.inputData,"radioGroup")||($A?undefined:!!Z(U.inputData,"radioGroup")||($B?undefined:undefined)))||undefined?T(Y(" 进入 "+Y($A?"免密签约页":$B?"Agent 收银台":"小程序收银台")+" ")):T()},b=(C,T,E)=>{E("nav-bar",{},(N,C)=>{if(C)L(N,"title-bar");if(C)O(N,"title","收银台调试")},c);E("scroll-view",{},(N,C)=>{if(C)L(N,"scroll-area");if(C)O(N,"type","list");if(C)O(N,"scroll-y",true)},d);E("button",{},(N,C)=>{if(C)L(N,"demo-btn");if(C)O(N,"hover-class","button-hover");if(C)O(N,"type","myType");if(C)O(N,"bindtap","onSubmit")},V1)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C||K||!!U.renderer||undefined)L(N,"demo-container "+Y(D.renderer));A["renderer"][0]=(D,E,T)=>{L(N,"demo-container "+Y(D.renderer))};if(C)R.i(N,"page-root")},b);C=!1;U=Object.create(null);K=!1};A=A||{"renderer":new Array(1)};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packages/finance-pay/components/preposition-payment-component/index.wxss']=setCssToHead([[2,"./packages/finance-pay/style/common.wxss"],".",[1],"fold-more{color:#999;font-size:",[0,24],";line-height:",[0,32],";padding:",[0,32]," 0}\n.",[1],"pay-preposition-payment-component{background:#fff;border-radius:",[0,24],"}\n.",[1],"scale-animation{-webkit-animation:scaleAnimation 2s ease 0s 1;animation:scaleAnimation 2s ease 0s 1}\n.",[1],"border-wrapper{position:relative}\n.",[1],"border-wrapper:before{-webkit-animation:opacityAnimation 2s ease 0s 1;animation:opacityAnimation 2s ease 0s 1;border:",[0,4]," solid #fd0;border-radius:",[0,24],";bottom:0;content:\x22\x22;left:0;pointer-events:none;position:absolute;right:0;top:0;z-index:1}\n@-webkit-keyframes opacityAnimation{0%{display:block;opacity:0}\n25%{opacity:1}\n50%{opacity:0}\n75%{opacity:1}\nto{display:none;opacity:0}\n}@keyframes opacityAnimation{0%{display:block;opacity:0}\n25%{opacity:1}\n50%{opacity:0}\n75%{opacity:1}\nto{display:none;opacity:0}\n}@-webkit-keyframes scaleAnimation{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}\n25%{-webkit-transform:scaleX(1.02) scaleY(1.02);transform:scaleX(1.02) scaleY(1.02)}\n50%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}\n75%{-webkit-transform:scaleX(1.02) scaleY(1.02);transform:scaleX(1.02) scaleY(1.02)}\nto{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}\n}@keyframes scaleAnimation{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}\n25%{-webkit-transform:scaleX(1.02) scaleY(1.02);transform:scaleX(1.02) scaleY(1.02)}\n50%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}\n75%{-webkit-transform:scaleX(1.02) scaleY(1.02);transform:scaleX(1.02) scaleY(1.02)}\nto{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}\n}",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/components/preposition-payment-component/index.wxss:1:3175)",{path:"./packages/finance-pay/components/preposition-payment-component/index.wxss"});__wxAppCode__['packages/finance-pay/pages/debug/index.wxss']=setCssToHead(["body{background-color:rgba(0,0,0,.04);height:auto;height:100vh;margin:0;padding:0 0 ",[0,50],"}\n.",[1],"demo-container{-webkit-box-orient:vertical;-webkit-box-direction:normal;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;font-size:",[0,28],";height:100vh;position:relative}\n.",[1],"demo-wrapper{padding-bottom:",[0,20],"}\n.",[1],"demo-wrapper,.",[1],"demo-wrapper-tab{padding-left:",[0,20],";padding-right:",[0,20],"}\n.",[1],"demo-wrapper-tab{-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.",[1],"demo-wrapper-tab,.",[1],"demo-wrapper-tab .",[1],"radio{display:-webkit-box;display:-webkit-flex;display:flex}\n.",[1],"demo-title{font-weight:700}\n.",[1],"demo-value{border:1px solid #ddd;height:",[0,30],";line-height:",[0,30],";padding:",[0,10],"}\n.",[1],"scroll-area{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}\n.",[1],"demo-btn{background-color:#ffd100;border-radius:",[0,18],";color:rgba(0,0,0,.7);-webkit-flex-shrink:0;flex-shrink:0;font-size:",[0,28],";font-weight:700;height:",[0,90],";line-height:",[0,90],";margin:",[0,20]," ",[0,24]," ",[0,40],";width:90%}\n.",[1],"radio{font-size:",[0,30],";margin-right:",[0,16],"}\nwx-input{border-radius:",[0,12],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/pages/debug/index.wxss:1:1027)",{path:"./packages/finance-pay/pages/debug/index.wxss"});
}$gwx42_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx42_XC_2 || [];
function gz$gwx42_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx42_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-root'])
Z([3,'test caster'])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx42_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx42_XC_2=true;
var x=['./packages/finance-pay/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx42_XC_2_1()
var aPD=_n('view')
_rz(z,aPD,'id',0,e,s,gg)
var tQD=_oz(z,1,e,s,gg)
_(aPD,tQD)
_(r,aPD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx42_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx42_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/index/index.wxml'] = [$gwx42_XC_2, './packages/finance-pay/index/index.wxml'];else __wxAppCode__['packages/finance-pay/index/index.wxml'] = $gwx42_XC_2( './packages/finance-pay/index/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packages/finance-pay/index/index.wxss']=setCssToHead([],undefined,{path:"./packages/finance-pay/index/index.wxss"});
}$gwx42_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx42_XC_3 || [];
function gz$gwx42_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'order'])
Z([3,'order-top'])
Z([3,'order-countdown'])
Z([[7],[3,'timeout']])
Z([3,'支付超时，请重新下单'])
Z([3,'支付剩余时间 '])
Z([3,'order-clock'])
Z([a,[3,' '],[[7],[3,'clock']]])
Z([3,'order-fee'])
Z([3,'order-fee-unit'])
Z([3,'¥'])
Z([3,'order-final-fee'])
Z([a,[[7],[3,'finalFee']]])
Z([[6],[[7],[3,'orderData']],[3,'showTotalFee']])
Z([3,'order-total-fee'])
Z([a,[[7],[3,'totalFee']]])
Z([3,'showOrderInfoModal'])
Z([3,'order-title'])
Z([a,z[7][1],[[6],[[7],[3,'orderData']],[3,'subject']],z[7][1]])
Z([[2,'?:'],[[7],[3,'orderTitleArrow']],[1,'order-title-arrow'],[1,'']])
Z([[7],[3,'showOrderInfoSuspend']])
Z([3,'订单详情'])
Z([[7],[3,'orderInfo']])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_1
}
function gz$gwx42_XC_3_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_2)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_2
__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'pay-info '],[[2,'?:'],[[7],[3,'isUnusableStatus']],[1,'pay-info-unusable'],[1,'']]])
Z([3,'pay-info-head'])
Z([[2,'?:'],[[7],[3,'isUnusableStatus']],[1,'ecny-pay-type-cell unusable-text'],[1,'ecny-pay-type-cell']])
Z([[7],[3,'ecnyPayInfo']])
Z([[7],[3,'isUnusableStatus']])
Z([[2,'?:'],[[7],[3,'selected']],[1,'pay-info-radio checked'],[1,'pay-info-radio']])
Z([[2,'!'],[[7],[3,'isUnusableStatus']]])
Z([3,'pay-info-banklist-content'])
Z([3,'bankIndex'])
Z([3,'bank'])
Z([[6],[[7],[3,'ecnyPayInfo']],[3,'banklist']])
Z(z[8])
Z([3,'selectPayTypeFun'])
Z([3,'pay-info-banklist-item'])
Z([[7],[3,'bankIndex']])
Z([[2,'?:'],[[7],[3,'isUnusableStatus']],[1,'ecny-pay-type-cell ecny-pay-type-banklist-cell unusable-text'],[1,'ecny-pay-type-cell ecny-pay-type-banklist-cell']])
Z([1,true])
Z([[7],[3,'bank']])
Z([[2,'?:'],[[2,'&&'],[[7],[3,'selected']],[[2,'==='],[[7],[3,'selectedBankIndex']],[[7],[3,'bankIndex']]]],[1,'pay-info-radio checked'],[1,'pay-info-radio']])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_2);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_2
}
function gz$gwx42_XC_3_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_3)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_3
__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'?:'],[[7],[3,'transformWallet']],[1,'ecny-wallet-front transform-wallet'],[1,'ecny-wallet-front']])
Z([3,'数字人民币钱包'])
Z([3,'showPassVerify'])
Z([3,'close-btn'])
Z([3,'ecny-wallet-content'])
Z([1,true])
Z([3,'bankIndex'])
Z([3,'bank'])
Z([[7],[3,'banklist']])
Z(z[6])
Z([3,'selectBank'])
Z([[2,'?:'],[[2,'==='],[[7],[3,'selectedBankIndex']],[[7],[3,'bankIndex']]],[1,'wallet-item checked'],[1,'wallet-item']])
Z([[7],[3,'bankIndex']])
Z([3,'item-bank-info'])
Z([3,'_onImageError'])
Z([[12],[[6],[[7],[3,'tools']],[3,'getBankIcon']],[[5],[[7],[3,'bank']]]])
Z([a,[[6],[[7],[3,'bank']],[3,'name']],[[6],[[6],[[7],[3,'bank']],[3,'card_info']],[3,'name_ext']]])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_3);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_3
}
function gz$gwx42_XC_3_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_4)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_4
__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'modal-front '],[[2,'?:'],[[7],[3,'transformModal']],[1,'transform-modal'],[1,'']],[3,' '],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'cashdeskInfo']],[3,'verify_type']],[1,8]],[1,'no-password-modal'],[1,'']]])
Z([a,[[2,'||'],[[6],[[7],[3,'cashdeskInfo']],[3,'page_title']],[1,'输入美团支付密码']]])
Z([3,'closePassVerify'])
Z([3,'close-btn'])
Z([3,'order-info'])
Z([3,'order-fee'])
Z([3,'$'])
Z([a,[[7],[3,'showFinalFee']]])
Z([[7],[3,'showCompareFee']])
Z([3,'order-original-fee'])
Z([a,[3,' ¥'],[[7],[3,'showOriginalFee']],[3,' ']])
Z([3,'showECNYWallet'])
Z([[7],[3,'passMtPayInfo']])
Z([[2,'==='],[[6],[[7],[3,'cashdeskInfo']],[3,'verify_type']],[1,8]])
Z([3,'formSubmit'])
Z([3,'cashier-btn'])
Z([a,z[10][3],[[2,'||'],[[6],[[7],[3,'cashdeskInfo']],[3,'pay_button']],[1,'确认支付']],z[10][3]])
Z([[2,'!=='],[[6],[[7],[3,'cashdeskInfo']],[3,'verify_type']],[1,8]])
Z([3,'showKeyboard'])
Z([[7],[3,'inputLength']])
Z([[7],[3,'password']])
Z(z[17])
Z([3,'password-bottom'])
Z([a,[3,'error-tip '],[[2,'?:'],[[2,'!'],[[7],[3,'showErrorTip']]],[1,'hide-tip'],[1,'']]])
Z([a,[[7],[3,'errorMessage']]])
Z([3,'findPassword'])
Z([3,'find-password'])
Z([3,'找回密码'])
Z([3,'keyboardTap'])
Z([[7],[3,'inputFocus']])
Z([[7],[3,'transformKeyboard']])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_4);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_4
}
function gz$gwx42_XC_3_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_5)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_5
__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'order-info'])
Z([3,'order-main-block'])
Z([3,'block'])
Z([[6],[[7],[3,'orderInfo']],[3,'block']])
Z([a,[3,'block-'],[[7],[3,'index']]])
Z([3,'order-block'])
Z([3,'order-block-title'])
Z([a,[3,' '],[[6],[[7],[3,'block']],[3,'title']],[3,' ']])
Z([3,'order-content-wrapper'])
Z([[6],[[7],[3,'block']],[3,'content']])
Z([a,[3,'content-'],z[4][2]])
Z([3,'order-content'])
Z([3,'block-left'])
Z([a,[[6],[[7],[3,'item']],[3,'item_name']]])
Z([[6],[[7],[3,'item']],[3,'item_value']])
Z([3,'block-right'])
Z([a,[[6],[[7],[3,'item']],[3,'item_value']]])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_5);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_5
}
function gz$gwx42_XC_3_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_6)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_6
__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'suspend-menu'])
Z(z[0])
Z([3,'suspend-menu-mask'])
Z([3,'suspend-menu-box'])
Z([[7],[3,'title']])
Z([3,'suspend-title'])
Z([a,[[7],[3,'title']]])
Z([3,'hideSuspend'])
Z([3,'suspend-title-close'])
Z([3,'suspend-title-border'])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_6);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_6
}
function gz$gwx42_XC_3_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_7)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_7
__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-root'])
Z([[7],[3,'showPage']])
Z([3,'mt-pay-container'])
Z([[7],[3,'alreadySucceed']])
Z([3,'triggerSetPayResultInfo'])
Z([[7],[3,'orderData']])
Z([3,'pay-type-scroll-container'])
Z([3,'pay-type-container'])
Z([[7],[3,'showRemittancePay']])
Z([3,'selectPayTypeFun'])
Z([[7],[3,'remittancePayInfo']])
Z([[2,'==='],[[7],[3,'selectedPayType']],[[6],[[7],[3,'PayType']],[3,'RemittancePay']]])
Z([3,'degradeAction'])
Z(z[9])
Z([[7],[3,'wxPayInfo']])
Z([[2,'||'],[[2,'==='],[[7],[3,'selectedPayType']],[[6],[[7],[3,'PayType']],[3,'WxJspay']]],[[2,'==='],[[7],[3,'selectedPayType']],[[6],[[7],[3,'PayType']],[3,'WxOfflinePay']]]])
Z([[7],[3,'showECNYPay']])
Z([3,'changeBankListFun'])
Z([[7],[3,'ecnyPayInfo']])
Z([[2,'==='],[[7],[3,'selectedPayType']],[[6],[[7],[3,'PayType']],[3,'EcnyPay']]])
Z([[7],[3,'selectedBankIndex']])
Z([[7],[3,'showCreditPay']])
Z(z[9])
Z([[7],[3,'creditPayInfo']])
Z([[2,'==='],[[7],[3,'selectedPayType']],[[6],[[7],[3,'PayType']],[3,'CreditPay']]])
Z([[7],[3,'showMTPay']])
Z(z[9])
Z([[7],[3,'mtPayInfo']])
Z([[2,'==='],[[7],[3,'selectedPayType']],[[6],[[7],[3,'PayType']],[3,'MtBackupPay']]])
Z([[2,'||'],[[7],[3,'showECNYWallet']],[[7],[3,'showPassVerify']]])
Z([3,'modal'])
Z([[7],[3,'showECNYWallet']])
Z([3,'triggerCloseECNYWallet'])
Z([3,'triggerSetECNYOrderInfo'])
Z([3,'triggerSetSelectedBank'])
Z([3,'triggerShowPassVerify'])
Z([[7],[3,'ecnyWalletInfo']])
Z([[7],[3,'originTotalFee']])
Z(z[20])
Z(z[31])
Z([[7],[3,'showPassVerify']])
Z([[7],[3,'bankLength']])
Z([3,'triggerClosePassVerify'])
Z([3,'triggerShowECNYWallet'])
Z([[7],[3,'ecnyOrderInfo']])
Z([[6],[[7],[3,'orderData']],[3,'final_fee']])
Z(z[37])
Z([[7],[3,'selectedBank']])
Z([[7],[3,'selectedPayType']])
Z([[7],[3,'showSubBtn']])
Z([3,'cashier-btn-group cashier-btn-line'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showBackToApp']]],[[7],[3,'showSubBtn']]])
Z([3,'submitNormalPay'])
Z([3,'cashier-btn noborder cancel'])
Z([3,'cashier-btn-active'])
Z([a,[3,' '],[[7],[3,'subBtnText']],[3,' ']])
Z([[2,'!'],[[7],[3,'showBackToApp']]])
Z([3,'submitNoPassPay'])
Z([3,'cashier-btn noborder primary'])
Z(z[54])
Z([a,z[55][1],[[7],[3,'mainBtnText']],z[55][1]])
Z([3,'cashier-btn-line'])
Z(z[56])
Z([3,'submitPay'])
Z(z[58])
Z(z[54])
Z([a,z[55][1],z[60][2],z[55][1]])
Z([[7],[3,'showBackToApp']])
Z([[7],[3,'launchParams']])
Z([3,'launchAppError'])
Z(z[58])
Z([3,'launchApp'])
Z([3,' 返回 '])
Z([[2,'||'],[[6],[[7],[3,'popWindowData']],[3,'showNopassCheckPopup']],[[6],[[7],[3,'popWindowData']],[3,'showNopassSignPopup']]])
Z([1,false])
Z([[6],[[7],[3,'popWindowData']],[3,'showNopassCheckPopup']])
Z([3,'normalPayClick'])
Z([3,'noPassPayClick'])
Z([[6],[[7],[3,'popWindowData']],[3,'data']])
Z([[6],[[7],[3,'popWindowData']],[3,'showNopassSignPopup']])
Z([3,'cancelAndPay'])
Z([3,'clickNoPassSignBtnCallback'])
Z([3,'hidePopup'])
Z(z[78])
Z([[7],[3,'showRiskPopup']])
Z([[7],[3,'payOrderNo']])
Z([[6],[[7],[3,'riskVerifyData']],[3,'popupData']])
Z(z[48])
Z([[7],[3,'isQuickpay']])
Z([[7],[3,'quickpayError']])
Z([3,'quickpay-tip'])
Z([3,'_onImageError'])
Z([3,'tip-icon'])
Z([3,'https://p1.meituan.net/mpcashier/cd2bc2a1022c11902d3582c6597b8ef5172714.png'])
Z([3,'tip-title'])
Z([a,[[7],[3,'quickpayErrorTitle']]])
Z([3,'tip-text'])
Z([a,[[7],[3,'quickpayError']]])
Z([[7],[3,'isLoading']])
Z([3,'quickpay-loading'])
Z(z[91])
Z([3,'loading-icon spin-animation'])
Z([3,'https://s3.meituan.net/static-prod01/com.sankuai.fspfepayresource.icashier-files/loading-ring.png'])
Z([3,'loading-text'])
Z([a,[3,'支付结果加载中（'],[[7],[3,'remainSecond']],[3,'S）']])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_3_7);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_3_7
}
__WXML_GLOBAL__.ops_set.$gwx42_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx42_XC_3=true;
var x=['./packages/finance-pay/pages/cashier/components/cashier-order-fee/index.wxml','./packages/finance-pay/pages/cashier/components/ecny-pay-type/index.wxml','./packages/finance-pay/pages/cashier/components/ecny-wallet/index.wxml','./packages/finance-pay/pages/cashier/components/pass-verify/index.wxml','./packages/finance-pay/pages/cashier/components/pay-order-info/index.wxml','./packages/finance-pay/pages/cashier/components/suspend-menu/index.wxml','./packages/finance-pay/pages/cashier/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx42_XC_3_1()
var bSD=_n('view')
_rz(z,bSD,'class',0,e,s,gg)
var xUD=_n('view')
_rz(z,xUD,'class',1,e,s,gg)
var fWD=_n('view')
_rz(z,fWD,'class',2,e,s,gg)
var cXD=_v()
_(fWD,cXD)
if(_oz(z,3,e,s,gg)){cXD.wxVkey=1
var hYD=_oz(z,4,e,s,gg)
_(cXD,hYD)
}
else{cXD.wxVkey=2
var oZD=_n('text')
var c1D=_oz(z,5,e,s,gg)
_(oZD,c1D)
_(cXD,oZD)
var o2D=_n('text')
_rz(z,o2D,'class',6,e,s,gg)
var l3D=_oz(z,7,e,s,gg)
_(o2D,l3D)
_(cXD,o2D)
}
cXD.wxXCkey=1
_(xUD,fWD)
var a4D=_n('view')
_rz(z,a4D,'class',8,e,s,gg)
var t5D=_n('text')
_rz(z,t5D,'class',9,e,s,gg)
var e6D=_oz(z,10,e,s,gg)
_(t5D,e6D)
_(a4D,t5D)
var b7D=_n('text')
_rz(z,b7D,'class',11,e,s,gg)
var o8D=_oz(z,12,e,s,gg)
_(b7D,o8D)
_(a4D,b7D)
_(xUD,a4D)
var oVD=_v()
_(xUD,oVD)
if(_oz(z,13,e,s,gg)){oVD.wxVkey=1
var x9D=_n('view')
_rz(z,x9D,'class',14,e,s,gg)
var o0D=_oz(z,15,e,s,gg)
_(x9D,o0D)
_(oVD,x9D)
}
var fAE=_mz(z,'view',['bindtap',16,'class',1],[],e,s,gg)
var cBE=_oz(z,18,e,s,gg)
_(fAE,cBE)
var hCE=_n('view')
_rz(z,hCE,'class',19,e,s,gg)
_(fAE,hCE)
_(xUD,fAE)
oVD.wxXCkey=1
_(bSD,xUD)
var oTD=_v()
_(bSD,oTD)
if(_oz(z,20,e,s,gg)){oTD.wxVkey=1
var oDE=_n('suspend-menu')
_rz(z,oDE,'title',21,e,s,gg)
var cEE=_n('view')
var oFE=_n('pay-order-info')
_rz(z,oFE,'orderInfo',22,e,s,gg)
_(cEE,oFE)
_(oDE,cEE)
_(oTD,oDE)
}
oTD.wxXCkey=1
oTD.wxXCkey=3
_(r,bSD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx42_XC_3_2()
var aHE=_n('view')
_rz(z,aHE,'class',0,e,s,gg)
var eJE=_n('view')
_rz(z,eJE,'class',1,e,s,gg)
var oLE=_mz(z,'pay-type-cell',['customClass',2,'payInfo',1],[],e,s,gg)
_(eJE,oLE)
var bKE=_v()
_(eJE,bKE)
if(_oz(z,4,e,s,gg)){bKE.wxVkey=1
var xME=_n('view')
_rz(z,xME,'class',5,e,s,gg)
_(bKE,xME)
}
bKE.wxXCkey=1
_(aHE,eJE)
var tIE=_v()
_(aHE,tIE)
if(_oz(z,6,e,s,gg)){tIE.wxVkey=1
var oNE=_n('view')
_rz(z,oNE,'class',7,e,s,gg)
var fOE=_v()
_(oNE,fOE)
var cPE=function(oRE,hQE,cSE,gg){
var lUE=_mz(z,'view',['bindtap',12,'class',1,'data-index',2],[],oRE,hQE,gg)
var aVE=_mz(z,'pay-type-cell',['customClass',15,'needLine',1,'payInfo',2],[],oRE,hQE,gg)
_(lUE,aVE)
var tWE=_n('view')
_rz(z,tWE,'class',18,oRE,hQE,gg)
_(lUE,tWE)
_(cSE,lUE)
return cSE
}
fOE.wxXCkey=4
_2z(z,10,cPE,e,s,gg,fOE,'bank','bankIndex','bankIndex')
_(tIE,oNE)
}
tIE.wxXCkey=1
tIE.wxXCkey=3
_(r,aHE)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx42_XC_3_3()
var bYE=_n('view')
_rz(z,bYE,'class',0,e,s,gg)
var oZE=_n('h1')
var x1E=_oz(z,1,e,s,gg)
_(oZE,x1E)
_(bYE,oZE)
var o2E=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
_(bYE,o2E)
var f3E=_mz(z,'scroll-view',['class',4,'scrollY',1],[],e,s,gg)
var c4E=_v()
_(f3E,c4E)
var h5E=function(c7E,o6E,o8E,gg){
var a0E=_mz(z,'view',['bindtap',10,'class',1,'data-index',2],[],c7E,o6E,gg)
var tAF=_n('view')
_rz(z,tAF,'class',13,c7E,o6E,gg)
var eBF=_mz(z,'image',['binderror',14,'src',1],[],c7E,o6E,gg)
_(tAF,eBF)
var bCF=_n('text')
var oDF=_oz(z,16,c7E,o6E,gg)
_(bCF,oDF)
_(tAF,bCF)
var xEF=_n('span')
_(tAF,xEF)
_(a0E,tAF)
_(o8E,a0E)
return o8E
}
c4E.wxXCkey=2
_2z(z,8,h5E,e,s,gg,c4E,'bank','bankIndex','bankIndex')
_(bYE,f3E)
_(r,bYE)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx42_XC_3_4()
var fGF=_n('view')
var cHF=_n('view')
_rz(z,cHF,'class',0,e,s,gg)
var oLF=_n('h1')
var lMF=_oz(z,1,e,s,gg)
_(oLF,lMF)
_(cHF,oLF)
var aNF=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
_(cHF,aNF)
var tOF=_n('view')
_rz(z,tOF,'class',4,e,s,gg)
var bQF=_n('view')
_rz(z,bQF,'class',5,e,s,gg)
var oRF=_n('text')
var xSF=_oz(z,6,e,s,gg)
_(oRF,xSF)
_(bQF,oRF)
var oTF=_n('h2')
var fUF=_oz(z,7,e,s,gg)
_(oTF,fUF)
_(bQF,oTF)
_(tOF,bQF)
var ePF=_v()
_(tOF,ePF)
if(_oz(z,8,e,s,gg)){ePF.wxVkey=1
var cVF=_n('view')
_rz(z,cVF,'class',9,e,s,gg)
var hWF=_oz(z,10,e,s,gg)
_(cVF,hWF)
_(ePF,cVF)
}
ePF.wxXCkey=1
_(cHF,tOF)
var oXF=_mz(z,'pass-mt-pay',['bindtap',11,'transInfo',1],[],e,s,gg)
_(cHF,oXF)
var hIF=_v()
_(cHF,hIF)
if(_oz(z,13,e,s,gg)){hIF.wxVkey=1
var cYF=_n('view')
var oZF=_mz(z,'button',['bindtap',14,'class',1],[],e,s,gg)
var l1F=_oz(z,16,e,s,gg)
_(oZF,l1F)
_(cYF,oZF)
_(hIF,cYF)
}
var oJF=_v()
_(cHF,oJF)
if(_oz(z,17,e,s,gg)){oJF.wxVkey=1
var a2F=_n('view')
_rz(z,a2F,'catchtap',18,e,s,gg)
var t3F=_mz(z,'password-input',['inputLength',19,'password',1],[],e,s,gg)
_(a2F,t3F)
_(oJF,a2F)
}
var cKF=_v()
_(cHF,cKF)
if(_oz(z,21,e,s,gg)){cKF.wxVkey=1
var e4F=_n('view')
_rz(z,e4F,'class',22,e,s,gg)
var b5F=_n('text')
_rz(z,b5F,'class',23,e,s,gg)
var o6F=_oz(z,24,e,s,gg)
_(b5F,o6F)
_(e4F,b5F)
var x7F=_mz(z,'view',['bindtap',25,'class',1],[],e,s,gg)
var o8F=_oz(z,27,e,s,gg)
_(x7F,o8F)
_(e4F,x7F)
_(cKF,e4F)
}
hIF.wxXCkey=1
oJF.wxXCkey=1
oJF.wxXCkey=3
cKF.wxXCkey=1
_(fGF,cHF)
var f9F=_mz(z,'keyboard',['bind:keyboardTap',28,'inputFocus',1,'transformKeyboard',2],[],e,s,gg)
_(fGF,f9F)
_(r,fGF)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx42_XC_3_5()
var hAG=_n('view')
_rz(z,hAG,'class',0,e,s,gg)
var oBG=_n('view')
_rz(z,oBG,'class',1,e,s,gg)
var cCG=_v()
_(oBG,cCG)
var oDG=function(aFG,lEG,tGG,gg){
var bIG=_n('view')
_rz(z,bIG,'class',5,aFG,lEG,gg)
var oJG=_n('view')
_rz(z,oJG,'class',6,aFG,lEG,gg)
var xKG=_oz(z,7,aFG,lEG,gg)
_(oJG,xKG)
_(bIG,oJG)
var oLG=_n('view')
_rz(z,oLG,'class',8,aFG,lEG,gg)
var fMG=_v()
_(oLG,fMG)
var cNG=function(oPG,hOG,cQG,gg){
var lSG=_n('view')
_rz(z,lSG,'class',11,oPG,hOG,gg)
var tUG=_n('view')
_rz(z,tUG,'class',12,oPG,hOG,gg)
var eVG=_oz(z,13,oPG,hOG,gg)
_(tUG,eVG)
_(lSG,tUG)
var aTG=_v()
_(lSG,aTG)
if(_oz(z,14,oPG,hOG,gg)){aTG.wxVkey=1
var bWG=_n('view')
_rz(z,bWG,'class',15,oPG,hOG,gg)
var oXG=_oz(z,16,oPG,hOG,gg)
_(bWG,oXG)
_(aTG,bWG)
}
aTG.wxXCkey=1
_(cQG,lSG)
return cQG
}
fMG.wxXCkey=2
_2z(z,9,cNG,aFG,lEG,gg,fMG,'item','index','content-{{index}}')
_(bIG,oLG)
_(tGG,bIG)
return tGG
}
cCG.wxXCkey=2
_2z(z,3,oDG,e,s,gg,cCG,'block','index','block-{{index}}')
_(hAG,oBG)
_(r,hAG)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx42_XC_3_6()
var oZG=_n('view')
_rz(z,oZG,'class',0,e,s,gg)
var f1G=_n('view')
_rz(z,f1G,'class',1,e,s,gg)
var c2G=_n('view')
_rz(z,c2G,'class',2,e,s,gg)
_(f1G,c2G)
var h3G=_n('view')
_rz(z,h3G,'class',3,e,s,gg)
var o4G=_v()
_(h3G,o4G)
if(_oz(z,4,e,s,gg)){o4G.wxVkey=1
var c5G=_n('view')
_rz(z,c5G,'class',5,e,s,gg)
var o6G=_n('text')
var l7G=_oz(z,6,e,s,gg)
_(o6G,l7G)
_(c5G,o6G)
var a8G=_mz(z,'view',['bindtap',7,'class',1],[],e,s,gg)
_(c5G,a8G)
var t9G=_n('view')
_rz(z,t9G,'class',9,e,s,gg)
_(c5G,t9G)
_(o4G,c5G)
}
var e0G=_n('slot')
_(h3G,e0G)
o4G.wxXCkey=1
_(f1G,h3G)
_(oZG,f1G)
_(r,oZG)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx42_XC_3_7()
var oBH=_n('view')
_rz(z,oBH,'id',0,e,s,gg)
var xCH=_v()
_(oBH,xCH)
if(_oz(z,1,e,s,gg)){xCH.wxVkey=1
var fEH=_n('view')
_rz(z,fEH,'class',2,e,s,gg)
var oJH=_mz(z,'cashier-order-fee',['alreadySucceed',3,'bind:updateresult',1,'orderData',2],[],e,s,gg)
_(fEH,oJH)
var lKH=_n('view')
_rz(z,lKH,'class',6,e,s,gg)
var aLH=_n('view')
_rz(z,aLH,'class',7,e,s,gg)
var tMH=_v()
_(aLH,tMH)
if(_oz(z,8,e,s,gg)){tMH.wxVkey=1
var xQH=_mz(z,'pay-type',['bind:selectPayTypeFun',9,'payInfo',1,'selected',2],[],e,s,gg)
_(tMH,xQH)
}
var oRH=_mz(z,'pay-type',['bind:degradeAction',12,'bind:selectPayTypeFun',1,'payInfo',2,'selected',3],[],e,s,gg)
_(aLH,oRH)
var eNH=_v()
_(aLH,eNH)
if(_oz(z,16,e,s,gg)){eNH.wxVkey=1
var fSH=_mz(z,'ecny-pay-type',['bind:changeBankListFun',17,'payInfo',1,'selected',2,'selectedBankIndex',3],[],e,s,gg)
_(eNH,fSH)
}
var bOH=_v()
_(aLH,bOH)
if(_oz(z,21,e,s,gg)){bOH.wxVkey=1
var cTH=_mz(z,'pay-type',['bind:selectPayTypeFun',22,'payInfo',1,'selected',2],[],e,s,gg)
_(bOH,cTH)
}
var oPH=_v()
_(aLH,oPH)
if(_oz(z,25,e,s,gg)){oPH.wxVkey=1
var hUH=_mz(z,'pay-type',['bind:selectPayTypeFun',26,'payInfo',1,'selected',2],[],e,s,gg)
_(oPH,hUH)
}
tMH.wxXCkey=1
tMH.wxXCkey=3
eNH.wxXCkey=1
eNH.wxXCkey=3
bOH.wxXCkey=1
bOH.wxXCkey=3
oPH.wxXCkey=1
oPH.wxXCkey=3
_(lKH,aLH)
_(fEH,lKH)
var cFH=_v()
_(fEH,cFH)
if(_oz(z,29,e,s,gg)){cFH.wxVkey=1
var oVH=_n('view')
_rz(z,oVH,'class',30,e,s,gg)
var cWH=_v()
_(oVH,cWH)
if(_oz(z,31,e,s,gg)){cWH.wxVkey=1
var lYH=_mz(z,'ecny-wallet',['bind:closeECNYWallet',32,'bind:setECNYOrderInfo',1,'bind:setSelectedBank',2,'bind:showPassVerify',3,'ecnyWalletInfo',4,'originalFee',5,'selectedBankIndex',6,'showECNYWallet',7],[],e,s,gg)
_(cWH,lYH)
}
var oXH=_v()
_(oVH,oXH)
if(_oz(z,40,e,s,gg)){oXH.wxVkey=1
var aZH=_mz(z,'pass-verify',['bankLength',41,'bind:closePassVerify',1,'bind:showECNYWallet',2,'ecnyOrderInfo',3,'finalFee',4,'originalFee',5,'selectedBank',6,'selectedPayType',7],[],e,s,gg)
_(oXH,aZH)
}
cWH.wxXCkey=1
cWH.wxXCkey=3
oXH.wxXCkey=1
oXH.wxXCkey=3
_(cFH,oVH)
}
var hGH=_v()
_(fEH,hGH)
if(_oz(z,49,e,s,gg)){hGH.wxVkey=1
var t1H=_n('view')
_rz(z,t1H,'class',50,e,s,gg)
var e2H=_v()
_(t1H,e2H)
if(_oz(z,51,e,s,gg)){e2H.wxVkey=1
var o4H=_mz(z,'button',['bindtap',52,'class',1,'hoverClass',2],[],e,s,gg)
var x5H=_oz(z,55,e,s,gg)
_(o4H,x5H)
_(e2H,o4H)
}
var b3H=_v()
_(t1H,b3H)
if(_oz(z,56,e,s,gg)){b3H.wxVkey=1
var o6H=_mz(z,'button',['bindtap',57,'class',1,'hoverClass',2],[],e,s,gg)
var f7H=_oz(z,60,e,s,gg)
_(o6H,f7H)
_(b3H,o6H)
}
e2H.wxXCkey=1
b3H.wxXCkey=1
_(hGH,t1H)
}
else{hGH.wxVkey=2
var c8H=_n('view')
_rz(z,c8H,'class',61,e,s,gg)
var h9H=_v()
_(c8H,h9H)
if(_oz(z,62,e,s,gg)){h9H.wxVkey=1
var cAI=_mz(z,'button',['bindtap',63,'class',1,'hoverClass',2],[],e,s,gg)
var oBI=_oz(z,66,e,s,gg)
_(cAI,oBI)
_(h9H,cAI)
}
var o0H=_v()
_(c8H,o0H)
if(_oz(z,67,e,s,gg)){o0H.wxVkey=1
var lCI=_mz(z,'button',['appParameter',68,'binderror',1,'class',2,'openType',3],[],e,s,gg)
var aDI=_oz(z,72,e,s,gg)
_(lCI,aDI)
_(o0H,lCI)
}
h9H.wxXCkey=1
o0H.wxXCkey=1
_(hGH,c8H)
}
var oHH=_v()
_(fEH,oHH)
if(_oz(z,73,e,s,gg)){oHH.wxVkey=1
var tEI=_n('half-drawer')
_rz(z,tEI,'needCloseBtn',74,e,s,gg)
var eFI=_v()
_(tEI,eFI)
if(_oz(z,75,e,s,gg)){eFI.wxVkey=1
var oHI=_mz(z,'nopass-check-popup',['bind:lBtnClick',76,'bind:rBtnClick',1,'popData',2],[],e,s,gg)
_(eFI,oHI)
}
var bGI=_v()
_(tEI,bGI)
if(_oz(z,79,e,s,gg)){bGI.wxVkey=1
var xII=_mz(z,'nopass-sign-popup',['bind:cancelAndPay',80,'bind:clickNoPassSignBtnCallback',1,'bind:hidePopup',2,'popData',3],[],e,s,gg)
_(bGI,xII)
}
eFI.wxXCkey=1
eFI.wxXCkey=3
bGI.wxXCkey=1
bGI.wxXCkey=3
_(oHH,tEI)
}
var cIH=_v()
_(fEH,cIH)
if(_oz(z,84,e,s,gg)){cIH.wxVkey=1
var oJI=_mz(z,'risk-popup',['payOrderNo',85,'popupData',1,'selectedPayType',2],[],e,s,gg)
_(cIH,oJI)
}
cFH.wxXCkey=1
cFH.wxXCkey=3
hGH.wxXCkey=1
oHH.wxXCkey=1
oHH.wxXCkey=3
cIH.wxXCkey=1
cIH.wxXCkey=3
_(xCH,fEH)
}
var oDH=_v()
_(oBH,oDH)
if(_oz(z,88,e,s,gg)){oDH.wxVkey=1
var fKI=_n('view')
var cLI=_v()
_(fKI,cLI)
if(_oz(z,89,e,s,gg)){cLI.wxVkey=1
var oNI=_n('view')
_rz(z,oNI,'class',90,e,s,gg)
var cOI=_mz(z,'image',['binderror',91,'class',1,'src',2],[],e,s,gg)
_(oNI,cOI)
var oPI=_n('text')
_rz(z,oPI,'class',94,e,s,gg)
var lQI=_oz(z,95,e,s,gg)
_(oPI,lQI)
_(oNI,oPI)
var aRI=_n('text')
_rz(z,aRI,'class',96,e,s,gg)
var tSI=_oz(z,97,e,s,gg)
_(aRI,tSI)
_(oNI,aRI)
_(cLI,oNI)
}
var hMI=_v()
_(fKI,hMI)
if(_oz(z,98,e,s,gg)){hMI.wxVkey=1
var eTI=_n('view')
_rz(z,eTI,'class',99,e,s,gg)
var bUI=_mz(z,'image',['binderror',100,'class',1,'src',2],[],e,s,gg)
_(eTI,bUI)
var oVI=_n('text')
_rz(z,oVI,'class',103,e,s,gg)
var xWI=_oz(z,104,e,s,gg)
_(oVI,xWI)
_(eTI,oVI)
_(hMI,eTI)
}
cLI.wxXCkey=1
hMI.wxXCkey=1
_(oDH,fKI)
}
xCH.wxXCkey=1
xCH.wxXCkey=3
oDH.wxXCkey=1
_(r,oBH)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx42_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx42_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/components/cashier-order-fee/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/components/cashier-order-fee/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/components/cashier-order-fee/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/components/cashier-order-fee/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/components/ecny-pay-type/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/components/ecny-pay-type/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/components/ecny-pay-type/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/components/ecny-pay-type/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/components/ecny-wallet/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/components/ecny-wallet/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/components/ecny-wallet/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/components/ecny-wallet/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/components/pass-verify/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/components/pass-verify/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/components/pass-verify/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/components/pass-verify/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/components/pay-order-info/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/components/pay-order-info/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/components/pay-order-info/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/components/pay-order-info/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/components/suspend-menu/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/components/suspend-menu/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/components/suspend-menu/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/components/suspend-menu/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/cashier/index.wxml'] = [$gwx42_XC_3, './packages/finance-pay/pages/cashier/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/cashier/index.wxml'] = $gwx42_XC_3( './packages/finance-pay/pages/cashier/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packages/finance-pay/pages/cashier/components/cashier-order-fee/index.wxss']=setCssToHead([".",[1],"order{font-size:",[0,24],";height:",[0,196],";padding:",[0,55]," 0 ",[0,60],"}\n.",[1],"order-top{color:rgba(0,0,0,.5);text-align:center}\n.",[1],"order-clock{padding-left:",[0,6],"}\n.",[1],"order-fee{color:rgba(0,0,0,.9);height:",[0,74],";line-height:",[0,74],"}\n.",[1],"order-fee-unit{font-size:",[0,48],";font-weight:700;padding-right:",[0,6],"}\n.",[1],"order-final-fee{font-family:MTfin,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:",[0,74],"}\n.",[1],"order-total-fee{padding:",[0,4]," 0 ",[0,8],";text-decoration:line-through}\n.",[1],"order-title{display:inline;position:relative}\n.",[1],"order-title-arrow{background-image:url(\x22data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMATQI3RimhedAYAAAAVUlEQVQ4y2OgH2AKcVXAI80qKGiER5pFUFBYAZ80Xu2sgni1Mxni1648qn1UO220B+DX7kCONMJwMpyG8Nio5lHN5GlGFLlkFNiI4p6cygJR1dANAAAwoh2vYIgTcgAAAABJRU5ErkJggg\x3d\x3d\x22);background-size:",[0,20]," ",[0,20],";height:",[0,20],";position:absolute;right:",[0,-20],";top:15%;width:",[0,20],"}\n",],undefined,{path:"./packages/finance-pay/pages/cashier/components/cashier-order-fee/index.wxss"});__wxAppCode__['packages/finance-pay/pages/cashier/components/ecny-pay-type/index.wxss']=setCssToHead([".",[1],"pay-info{background:#fff;border-radius:",[0,18],";margin-bottom:",[0,18],";overflow:hidden}\n.",[1],"pay-info-head{-webkit-box-pack:justify;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;height:",[0,130],";-webkit-justify-content:space-between;justify-content:space-between;padding:0 ",[0,40]," 0 ",[0,30],";position:relative}\n.",[1],"pay-info-head:after{background:rgba(0,0,0,.06);bottom:0;content:\x22\x22;display:block;height:",[0,1],";position:absolute;right:0;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 50%;transform-origin:0 50%;width:100%}\n.",[1],"pay-info-banklist-content{padding:0 ",[0,40]," 0 ",[0,92],"}\n.",[1],"pay-info-banklist-item{-webkit-box-pack:justify;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;height:",[0,130],";-webkit-justify-content:space-between;justify-content:space-between;position:relative}\n.",[1],"pay-info-radio{background-image:url(https://p0.meituan.net/mpcashier/bd2e0c2c9a75ea7fde6d59a69da7972b5541.png);background-size:contain;height:",[0,40],";width:",[0,40],"}\n.",[1],"pay-info-radio.",[1],"checked{background-image:url(https://p0.meituan.net/mpcashier/pay-info-radio-check-new.png)}\n.",[1],"pay-info-unusable .",[1],"pay-info-desc,.",[1],"pay-info-unusable .",[1],"pay-info-name{color:rgba(0,0,0,.35)}\n.",[1],"pay-info-unusable .",[1],"pay-info-radio{background-image:url(https://p0.meituan.net/mpcashier/8155631563dcb6eba61a0b32c0911c0a3068.png)}\n",],undefined,{path:"./packages/finance-pay/pages/cashier/components/ecny-pay-type/index.wxss"});__wxAppCode__['packages/finance-pay/pages/cashier/components/ecny-wallet/index.wxss']=setCssToHead([".",[1],"ecny-wallet-front{background:#fff;border-radius:",[0,24],";bottom:600;box-sizing:border-box;height:",[0,648],";left:50%;margin-left:",[0,-311],";margin-top:",[0,-440],";opacity:0;padding:",[0,43]," 0;position:absolute;text-align:center;top:50%;-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;width:",[0,622],";z-index:999}\n.",[1],"transform-wallet{opacity:1;-webkit-transform:scale(1);transform:scale(1)}\nwx-h1{color:#222;font-size:",[0,36],";font-weight:700;line-height:",[0,36],"}\n.",[1],"close-btn{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAntJREFUaAXtmk1uwjAQhUlVcQYu0N6DO6SLsOqGVXucsmLDiiyaO3CP9gKcAVWifggjN/Vv/MZqJUdCNo49876xY+yY2axeNQI1AjUCNQIJERiG4QGfhCaiVWP1ND4Vfd+/nc/nF9Rpmma3WCzWy+Xyy9dG6t7hcLg/Ho9bpecZPpSeTdd1ry5/TjBE5nQ6fZgNlbF3BbcqDXeF2iuoJ1PPfD5/bNv20yzT+TudiUlhWEVtD0cx9Rl1XFAh204wRALDb2ygJJwPCtpcvQXNTjDcxDOF4Ye8eZWAC0DhkVibmsZ55zOmK0Y4oD9zDJ9BMAAyHOlAhVKWryiwUnAsKOiNBpOGY0Ilg0nBsaEmgbHhJKAmg7HgpKCywHLhJKGywabCSUNRwFLhSkDRwGLhUA+L6PEq/SKEvHNI+h2DAN8V6I0BbRVUO7YhsR2igkGwD24MhO8SUBe7Nme5ZbFwUlBiYDB8hettQ+/iuGkGtfXopHbj3v0YBPzXSwTMGIq/JgodKPSk5GuGOnnoSPtSo6d+vE1CGzVRFJ3uaUMxAIV3FB0+mAnHwcEPNntYUoZiBNTtvUhK3XEAUr5ng00ROqVNChTqZoHlCMxpGwM5GYwhjGHDBTkJjCmIacuETAaTECJhMwlMQoCOMtt2NBjbsQYyU6aPKDCmQxPElmf5CoKxHNkgXGUMn14whgOX+FB5rm/vWlGt33Dma1vQih/ZYgOq1pYrz9py6wuOs8dsZ9AwJLmdtwn19RztDLo0FEB9PWcLhC5zDsXrGfRGV1RQ+DvEbZWuy0ukBtxO+1N6Nr4zaF3Pmcb+YcRpgHzjr+kh41VzNQI1AjUCQhH4BtoZMcNRdyjfAAAAAElFTkSuQmCC) no-repeat;background-position:50%;background-size:",[0,36]," ",[0,36],";height:",[0,24],";padding:",[0,24],";position:absolute;right:",[0,20],";top:",[0,28],";width:",[0,24],"}\n.",[1],"order-info{margin:",[0,84]," 0 ",[0,49],"}\n.",[1],"order-fee{color:#111;font-family:MTfin;font-size:",[0,74],";line-height:",[0,74],";margin-bottom:",[0,12],"}\n.",[1],"order-fee wx-text{color:#111;font-size:",[0,48],";line-height:",[0,48],";margin-right:",[0,6],"}\n.",[1],"order-original-fee{color:rgba(0,0,0,.5);font-size:",[0,24],";line-height:",[0,24],";text-decoration:line-through}\n.",[1],"ecny-wallet-content{height:",[0,500],";margin-top:",[0,36],";text-align:left}\n.",[1],"wallet-item{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:center;border-top:",[0,1]," solid rgba(0,0,0,.06);box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-flow:column;flex-flow:column;height:",[0,130],";-webkit-justify-content:center;justify-content:center;padding:0 ",[0,30],";position:relative}\n.",[1],"item-bank-info{height:",[0,30],";line-height:",[0,30],"}\n.",[1],"item-bank-info\x3ewx-image{display:inline-block;height:",[0,32],";margin-right:",[0,12],";vertical-align:middle;width:",[0,32],"}\n.",[1],"item-bank-info wx-text{color:rgba(0,0,0,.9);display:inline-block;font-size:",[0,32],";line-height:",[0,32],";max-width:80%;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}\n.",[1],"checked .",[1],"item-bank-info\x3ewx-span{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABAhJREFUaAXtl1uIVlUUx//b8ZL3C4YiopCQICjiBaIIFUsGR5QImfBBIh/yguaoFWGRgr6Il2xUSHpI8YbkSKOhE002kIIogvrim+AF0heNaNK8bH/74JGv495nvm++uXwP+7ycc9baZ+31W2vttfeR4hUjECMQIxAjECMQIxAjECMQI+CPgPGLK0tqv9F0PdZOGU3Esyuq0mqzWhfyvKx4MLtNs2V10kqvpCA4fU99NcGs0J+pLHvvkRVU0rvdrrfxp7EQyvnH+1D9q/l5vvbMU3anjky9oaf6GYh+7fGjIsHsVk0lLaeBGuiDMkb3KcxGny6VVVwp0igm0SR+AWpw6mThHaiHQH+Qt77c+IoCs99qgp7oV2s1rBAmfQbqEdALzTo1pbLQvWK6ImvqdTLRQqZG+pwF6gnyWrNWx3z6rKwiMmZ36DWgmoNQoo0YLS4WykF2O5jdqTHk4jegRmej7t7JlAVqiVmjQz59SNatYLZeo1g1DmpsyEHky8jUDzl6r6qodk+nGsHX49VH18wy3fVaKlGY2HyYQI0LfUoDWAXUdyF9nrzNjLH713FOu2Efq0WtusUi/zzPYDE69qnhlJ9bU+ND400PfUb3qw/p25LndkUW9RSW7UXa7//GUfcbieSGtoz79HYPx6HWJFOTfXonA+or1tSmkL4YeX7GrGZkoZxRZF+TyU+LmaBwDPvUIKCayFQYymhzuVBuznww6XahY4XP9qm2ALe8UJb3bHdrAI3iFFDTQ+OohK1UwpchfSnyfLD+Os5kl4MGrXax5j4M6p8rCEBfTuMnyPSbobHMUw9UyVUQspcLZj5OjjA1LLDrPgPPy/R74Gp9eiej/PqwE/1EpmaGxmB/r9bok5C+PfJcMGeQer+Na7OZ/JZvAuCqcPwAcC/9H9mj6q3/dIwx7/q+TexL+7RWS8kY7B13tQmWTL6SjPXUO0x+xzc1Hrn98Cht/AWAPYPspo6gq/F9k9g1OgzURx0NldgOTeqTs1YmEtffyUDo9N3KxlDN4egcUAcZFyxRKqCBv65aM4tdshMu7Jd2ATcNuGacHuT7EoN/A9eCfp5P72SMOcEv5PvJGg4NKlNeMpibj437LU4Obj/qX+r8lF2TemmBWcUPYydeRa2x7PymTmcJ+wKi8iCry3sH6gzfvdfZUM6HdmUsdZ5O6MqtgbLrlcpCd6D+0KuqNov1T2hMR8rblbHUATbUk5xdFuG0+7sNXkTvvIZobldBOUfKAnMGKMsfuQVbNtCX2OmqzRKaShdeZYM5X8ncfor6pXMjUFfZ3OcAf78LmZKpylpjWWfpljUU5Xog3Y9pE8feL2jpf2XHxfcYgRiBGIEYgRiBGIEYgRiBGIEYgU6IwDNv+v+vQdWpKAAAAABJRU5ErkJggg\x3d\x3d) no-repeat;background-size:100% 100%;height:",[0,44],";margin-top:",[0,-20],";position:absolute;right:",[0,30],";top:50%;width:",[0,44],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/pages/cashier/components/ecny-wallet/index.wxss:1:2741)",{path:"./packages/finance-pay/pages/cashier/components/ecny-wallet/index.wxss"});__wxAppCode__['packages/finance-pay/pages/cashier/components/pass-verify/index.wxss']=setCssToHead([".",[1],"modal-front{background:#fff;border-radius:",[0,24],";bottom:",[0,640],";box-sizing:border-box;left:50%;margin-left:",[0,-311],";opacity:0;padding:",[0,34]," 0 ",[0,16],";position:absolute;text-align:center;-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;width:",[0,600],";z-index:999}\n.",[1],"transform-modal{opacity:1;-webkit-transform:scale(1);transform:scale(1)}\n.",[1],"modal-front wx-h1{border-bottom:",[0,1]," solid rgba(0,0,0,.06);color:rgba(0,0,0,.9);display:block;font-size:",[0,32],";font-weight:400;letter-spacing:0;line-height:",[0,32],";padding-bottom:",[0,34],"}\n.",[1],"close-btn{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAntJREFUaAXtmk1uwjAQhUlVcQYu0N6DO6SLsOqGVXucsmLDiiyaO3CP9gKcAVWifggjN/Vv/MZqJUdCNo49876xY+yY2axeNQI1AjUCNQIJERiG4QGfhCaiVWP1ND4Vfd+/nc/nF9Rpmma3WCzWy+Xyy9dG6t7hcLg/Ho9bpecZPpSeTdd1ry5/TjBE5nQ6fZgNlbF3BbcqDXeF2iuoJ1PPfD5/bNv20yzT+TudiUlhWEVtD0cx9Rl1XFAh204wRALDb2ygJJwPCtpcvQXNTjDcxDOF4Ye8eZWAC0DhkVibmsZ55zOmK0Y4oD9zDJ9BMAAyHOlAhVKWryiwUnAsKOiNBpOGY0Ilg0nBsaEmgbHhJKAmg7HgpKCywHLhJKGywabCSUNRwFLhSkDRwGLhUA+L6PEq/SKEvHNI+h2DAN8V6I0BbRVUO7YhsR2igkGwD24MhO8SUBe7Nme5ZbFwUlBiYDB8hettQ+/iuGkGtfXopHbj3v0YBPzXSwTMGIq/JgodKPSk5GuGOnnoSPtSo6d+vE1CGzVRFJ3uaUMxAIV3FB0+mAnHwcEPNntYUoZiBNTtvUhK3XEAUr5ng00ROqVNChTqZoHlCMxpGwM5GYwhjGHDBTkJjCmIacuETAaTECJhMwlMQoCOMtt2NBjbsQYyU6aPKDCmQxPElmf5CoKxHNkgXGUMn14whgOX+FB5rm/vWlGt33Dma1vQih/ZYgOq1pYrz9py6wuOs8dsZ9AwJLmdtwn19RztDLo0FEB9PWcLhC5zDsXrGfRGV1RQ+DvEbZWuy0ukBtxO+1N6Nr4zaF3Pmcb+YcRpgHzjr+kh41VzNQI1AjUCQhH4BtoZMcNRdyjfAAAAAElFTkSuQmCC) no-repeat;background-position:50%;background-size:",[0,28]," ",[0,28],";height:",[0,24],";padding:",[0,24],";position:absolute;right:",[0,16],";top:",[0,16],";width:",[0,24],"}\n.",[1],"order-info{margin:",[0,30]," 0 0}\n.",[1],"order-fee{color:#111;font-family:MTfin;font-size:",[0,74],";line-height:",[0,74],";margin:0 auto;max-width:80%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"order-fee wx-text{color:#111;font-size:",[0,48],";line-height:",[0,48],";margin-right:",[0,6],"}\n.",[1],"order-original-fee{color:rgba(0,0,0,.5);display:inline-block;font-size:",[0,24],";line-height:",[0,24],";max-width:80%;overflow:hidden;text-decoration:line-through;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}\n.",[1],"item-bank-info{height:",[0,30],";line-height:",[0,30],";position:relative}\n.",[1],"item-bank-info\x3ewx-image{display:inline-block;height:",[0,30],";margin-right:",[0,12],";vertical-align:middle;width:",[0,30],"}\n.",[1],"item-bank-info wx-text{color:rgba(0,0,0,.9);display:inline-block;font-size:",[0,28],";line-height:",[0,28],";max-width:80%;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}\n.",[1],"item-bank-info\x3ewx-span{border:solid rgba(0,0,0,.3);border-width:",[0,1]," ",[0,1]," 0 0;display:inline-block;height:",[0,12],";margin-left:",[0,10],";position:relative;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:",[0,12],"}\n.",[1],"password-bottom{-webkit-box-pack:justify;-webkit-box-orient:horizontal;-webkit-box-direction:normal;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-flow:row;flex-flow:row;-webkit-justify-content:space-between;justify-content:space-between;padding:",[0,16]," ",[0,30],"}\n.",[1],"error-tip{color:#ff3e33;font-size:",[0,24],";line-height:",[0,24],"}\n.",[1],"hide-tip{visibility:hidden}\n.",[1],"find-password{color:#4c7ece;font-size:",[0,24],";line-height:",[0,24],"}\n.",[1],"no-password-modal{bottom:40%}\n.",[1],"cashier-btn{background-color:#ffd100;border:",[0,0],";border-radius:",[0,18],";color:rgba(0,0,0,.7);font-size:",[0,28],";font-weight:700;height:",[0,90],";line-height:",[0,90],";margin:",[0,15]," ",[0,24]," ",[0,10],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/pages/cashier/components/pass-verify/index.wxss:1:2584)",{path:"./packages/finance-pay/pages/cashier/components/pass-verify/index.wxss"});__wxAppCode__['packages/finance-pay/pages/cashier/components/pay-order-info/index.wxss']=setCssToHead([".",[1],"order-info{font-size:",[0,32],"}\n.",[1],"order-main-block{-webkit-overflow-scrolling:touch;max-height:70vh;overflow-y:auto;padding:",[0,12]," 0 ",[0,40],"}\n.",[1],"order-block{display:-webkit-box;display:-webkit-flex;display:flex;padding:",[0,36]," ",[0,48]," ",[0,8],"}\n.",[1],"order-block-title{color:rgba(0,0,0,.5);padding-right:",[0,20],";width:",[0,174],"}\n.",[1],"order-content-wrapper{-webkit-box-flex:1;-webkit-flex:1;flex:1}\n.",[1],"order-content{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;padding-bottom:",[0,20],"}\n.",[1],"block-right{padding-left:",[0,20],"}\n",],undefined,{path:"./packages/finance-pay/pages/cashier/components/pay-order-info/index.wxss"});__wxAppCode__['packages/finance-pay/pages/cashier/components/suspend-menu/index.wxss']=setCssToHead([".",[1],"suspend-menu{height:100%;left:0;position:fixed;top:0;-webkit-user-select:none;user-select:none;width:100%;z-index:99}\n.",[1],"suspend-menu-enter-active{-webkit-animation:fade-in .2s ease-in-out both;animation:fade-in .2s ease-in-out both}\n.",[1],"suspend-menu-leave-active{-webkit-animation:fade-out .2s both;animation:fade-out .2s both}\n.",[1],"suspend-menu-leave-active .",[1],"suspend-menu-box{-webkit-animation:slide-leave .2s ease-out both;animation:slide-leave .2s ease-out both}\n.",[1],"suspend-menu-mask{background-color:rgba(0,0,0,.6);height:100%;left:0;position:absolute;top:0;width:100%;z-index:99}\n.",[1],"suspend-menu-box{-webkit-animation:slide-enter .2s ease-out both;animation:slide-enter .2s ease-out both;background-color:#fff;border-radius:",[0,18]," ",[0,18]," 0 0;bottom:0;box-shadow:-1px 0 3px rgba(0,0,0,.2);left:0;position:absolute;width:100%;z-index:100}\n.",[1],"suspend-title{color:rgba(0,0,0,.9);font-size:",[0,36],";font-weight:700;padding:",[0,44]," 0;position:relative;text-align:center}\n.",[1],"suspend-title-border{background-color:rgba(0,0,0,.06);bottom:0;height:1px;left:0;position:absolute;-webkit-transform:scaleY(.5);transform:scaleY(.5);width:100%}\n.",[1],"suspend-title-close{background:url(\x22data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsBAMAAAB9SEr+AAAAFVBMVEUAAADAwMC/v7/AwMDBwcHDw8O/v7/qjJfvAAAABnRSTlMAEMyiZy9pTIiaAAABMUlEQVRYw+2YOQ7CUAwFQYIewQlo6GmoaegpOAFIvv8RgGoUWfrRmzKKS/s5E2Xx8jerrbYwez2M5lR1bbJ5za3qfRhnbS9Vn6lrXz87j9OOf81z4tpVdVyHVd1bWsM1WEvbV8N1GDfJIwE3gn2aF9wAdp5zDy/b/RGMQAYjEsEIZTBi0RUJZjCiEYxwBiMewRBkMBQRDEkGQxPBEGUwVBEMWQZDF8EQZjCUEQxpBkMbwRBnMNQRDBywCAcswgGLcMACHDCBAxbggAU4YCJN3qR8JPYFyNdtPy75KdsfR/6mtijIEmQLniyvtpjL1mEblWyLtgnLlm8HDDnO2OFJjmp2MJRjqB165YhtB3q5PthlRa5GchGza59cMuVKKxdoua7LwwF3FCEPPuQxy2qrLcu+/rJlMgGtD0UAAAAASUVORK5CYII\x3d\x22) no-repeat 50%;background-size:",[0,36]," ",[0,36],";height:",[0,44],";position:absolute;right:",[0,48],";top:",[0,48],";width:",[0,44],"}\n",],undefined,{path:"./packages/finance-pay/pages/cashier/components/suspend-menu/index.wxss"});__wxAppCode__['packages/finance-pay/pages/cashier/index.wxss']=setCssToHead([[2,"./packages/finance-pay/style/common.wxss"],"body{background-color:rgba(0,0,0,.04);margin:0;padding:0}\n@font-face{font-family:MTfin;font-style:normal;font-weight:400;src:url(data:application/x-font-ttf;charset\x3dutf-8;base64,AAEAAAAKAIAAAwAgT1MvMn7OWr4AAACsAAAAYGNtYXAWnyFMAAABDAAAAVpnbHlm0OjI6wAAAmgAAAdYaGVhZBDISAUAAAnAAAAANmhoZWEHYQLqAAAJ+AAAACRobXR4Hk8CkAAAChwAAAA8bG9jYQ0eDvgAAApYAAAAIG1heHAAFQBOAAAKeAAAACBuYW1lX0A3fgAACpgAAAMqcG9zdACYAKEAAA3EAAAAQAAEAgUBkAAFAAAAKAAoACgAKAAoACgAKAAoACgAyAAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAABCaXJkAEAAJAA5A/H/HwBkA/EA4QAAAAEAAAAAAfgD8QAAACAAAgAAAAMAAAADAAAAHAABAAAAAABUAAMAAQAAABwABAA4AAAACgAIAAIAAgAlACwALgA5//8AAAAkACwALgAw////3f/X/9b/1QABAAAAAAAAAAAAAAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECAAAAAAAAAwAEAAUGBwgJCgsMDQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAMwGaAqYACQARAAA3MjM0ESIjFBUUAzIhFBEiITQzZ8xmzTOJARGJ/u9mrwFeLFiDATrR/l7RAAABACn//QI/At4AMQAAEyYnMjMWFzIzNjcyMwYHMjMUFSIjFBUyMxQVIiMUFSIjIiM0NSIjNDUyMzQ1IiM0NTKvLVksWC1ZAQEtWSxYLFocOTRnNGc0Zx89ChY3bDZtN2weAW579Xv1e/V79SFAFCcgQSZOJ00hQBQnIEEABQAp//4DbgLfAAcAFwAnADcARwAABSIjNhMyMwYFIicmNTQ3NjMyFxYVFAcGJzI3NjU0JyYjIgcGFRQXFgEiJyY1NDc2MzIXFhUUBwYnMjc2NTQnJiMiBwYVFBcWAX4lSlmxJUpZ/qdIMjMzMkhHMzMzM0cYEBEREBgYEREREQIDRzMzMzNHSDIzMzJIGBEREREYGBARERAC8wHm818zM0dIMjMzMkhHMzN0ERAYGBEREREYGBAR/gUyM0hHMzIyM0dIMzJzEREYFxEREREXGBERAAABAD3/mACkAGEAKQAAFzAVMBUUBwYjMCMwIzAjNDU0NTIzMjMyNzY1NDE0NSIjNDU0NTQ1MjMUpB4cKQEBAgIBAQEUDg4RJCNEAwEBKR0dBwwKFA0PFAIBAREZCwsREyAAAAAAAQA9//0ApABjAA0AABc0NSIjFBUUFRQVFBUypBpNGgMZTQQGCAwOEhIWAAACACn//QHkAt4AGQAzAAATFBUUFRQVFhcWMzI3Njc0NTQ1NCcmIyIHBgc0NzYzMhcWFRQHBgcGIyInJic0NTQ1NDU0kgIiITAvIiECIiIwMSIiaUFBXFtBQQEGP0BXWEBABgIBGR8gJUtjLyAhISAvHz5FiTAiIyMiMFxAQUFAXGfPVzs8PDtXIkQMDSEuLgABACn//QEKAt4AFwAAARQVFBEiIzQRBgc0NTQ1NDU0NTQ1NjcyAQojRyhPJk0lAt5Llqv+q8wBlxw5Cg8PFAoOCQsMDBw3AAABACn//QHjAt4ANQAANzIzFBUUFRQVIiE0NTQ1NDU0NTY3Njc2NTQnJiMiBwYHIiM2NzYzMhcWFRQHBgcUIwYHBgcGuGPIk/7ZZ84NCAgiIzAtISEEI0YEQEBYXEFADg8aAQEBAgFPZhIjBAYQGgkLCw0KDBIVb98PFBQWMCIiHh4sVz09QUBcKiYlHQECAQECVgAAAQAw//sB5gLdAEsAAAEiIzQ1MjMyMzIzMjMyMzAzNjc2NTQnJiMiBwYVFBUUFSIjNDU0NTQ3NjMyFxYVFAcGBxYXFhUUBwYjIicmJzIzFhcWMzI3NjU0JyYBDQoUBQwBAQIBAgEBAgIlGhocHSgoHBwjRjs6UlM6Og8QGygXF0BBW1M+PgsjRwofHygwIiIhIQFNIkMDHBsnKBwdHRwoAgICAgIDAgNTOjs7OlMqJCQbHy0uNltBQTc3UCQZGCIiMDAiIgAAAAACADX//QIKAt8ABwAlAAA3MjM0NTQ1Bgc2EzIzFBUUETIzFBUUFSIjFBUiIzQ1IiM0NTQ1NK06dTvsYsUjRRguFy8iRmPEz0KGJElnzrABYAsWpf62EiMRIyNGI0YICwsOGgAAAQA2//0CDALeADcAABMyMxQVIiMUFTY3NjMyFxYXFhcWFRQHBgcGBwYjIicmJzIzFhcWMzI3NjU0JyYjIgcGByIjNBEyuF+9X70XGhobQDU2HxEJCgoJER82NUBVQUERJUkPISEpNycmJic3HxobEiNGIwLeI0Y8egsGBh8fMhsgHyMiHyAbMh8fNTVQJBcWJic2NycmDQ0WiwEWAAAAAAIAJP/9Ae0C3gAZACkAABM2EzIzBgc2MzYzMhcWFRQHBiMiJyY1NDc2FzI3NjU0JyYjIgcGFRQXFj4+fSdNLFgICAgHX0NDQ0NfXkNDBgfXNCQlJSQ0MyQlJSQBTIYBDF67AQFDQ19fQ0NDQ18dGxvPJCUzMyUkJCUzMyUkAAAAAQAk//0BxwLeABcAAAEwBwYDIiM2EyIjNDU0NTQ1MjMyMxQVFAHHAU2ZJUtNmmfMc+YYMgJ3AdP+WtMBpggMDRESJAoWFwAAAwAt//8B6ALgAB8ALwA/AAATJicmNTQ3NjMyFxYVFAcGBxYXFhUUBwYjIicmNTQ3NhMyNzY1NCcmIyIHBhUUFxYTMjc2NTQnJiMiBwYVFBcWgRwQETs6U1M7OhEQHSUWF0FBXFtBQRcXrzEiIiIiMTAiIiIiMCkcHBwcKSgcHR0cAYkcJCUqUzs6OjtTKiYlGx8sLTRbQUFBQVs1LS3+/SIiMDAjIiIjMDAiIgFNHRwoKRwdHRwpKBwdAAACADn//QIDAt4AGQApAAABBgMiIzY3BiMGIyInJjU0NzYzMhcWFRQHBiciBwYVFBcWMzI3NjU0JyYB6D59Jk4sWAgIBwhfQ0NDQ19eQ0QHB9c0JCUlJDQzJCUlJAGPhv70XrsBAUNEXl9DQ0NDXxwbG88lJDQzJCUlJDM0JCUAAAEAAAABAACR5J0HXw889QALBAAAAAAA1x7dtgAAAADXHCbbAAD/mANuAuAAAAAHAAIAAAAAAAAAAQAAA/H/HwAAA5cAAAAkA24AAQAAAAAAAAAAAAAAAAAAAA8CHwAAAmgAKQOXACkA4gA9AOIAPQINACkBcAApAhAAKQIUADACPQA1Aj4ANgIUACQB6wAkAhQALQI+ADkAAAAeAFwAxgD4AQ4BVgF6AcQCKAJaAqoC6gMOA2wDrAABAAAADwBMAAUAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAHgFuAAEAAAAAAAAAFQAAAAEAAAAAAAEACAAVAAEAAAAAAAIABwAdAAEAAAAAAAMAGAAkAAEAAAAAAAQAEAA8AAEAAAAAAAUABwBMAAEAAAAAAAYAEABTAAEAAAAAAAcAAABjAAEAAAAAAAgAAABjAAEAAAAAAAkAAgBjAAEAAAAAAAoAAABlAAEAAAAAAAsAAABlAAEAAAAAAAwAAABlAAEAAAAAAA0AFQBlAAEAAAAAAA4AGgB6AAMAAQQJAAAAKgCUAAMAAQQJAAEAEAC+AAMAAQQJAAIADgDOAAMAAQQJAAMAMADcAAMAAQQJAAQAIAEMAAMAAQQJAAUADgEsAAMAAQQJAAYAIAE6AAMAAQQJAAcAAAFaAAMAAQQJAAgAAAFaAAMAAQQJAAkABAFaAAMAAQQJAAoAAAFeAAMAAQQJAAsAAAFeAAMAAQQJAAwAAAFeAAMAAQQJAA0AKgFeAAMAAQQJAA4ANAGIU0lMIE9wZW4gRm9udCBMaWNlbnNlTVRmaW4yLjBSZWd1bGFyTVRmaW4tUmVndWxhcjE6MTE2NjgzNTc4TVRmaW4tUmVndWxhcjIuMDAwMS4wMDBNVGZpbi1SZWd1bGFyMi4wVEZTSUwgT3BlbiBGb250IExpY2Vuc2VodHRwOi8vc2NyaXB0cy5zaWwub3JnL09GTABTAEkATAAgAE8AcABlAG4AIABGAG8AbgB0ACAATABpAGMAZQBuAHMAZQBNAFQAZgBpAG4AMgAuADAAUgBlAGcAdQBsAGEAcgBNAFQAZgBpAG4ALQBSAGUAZwB1AGwAYQByADEAOgAxADEANgA2ADgAMwA1ADcAOABNAFQAZgBpAG4ALQBSAGUAZwB1AGwAYQByADIALgAwADAAMAAxAC4AMAAwADAATQBUAGYAaQBuAC0AUgBlAGcAdQBsAGEAcgAyAC4AMABUAEYAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUAaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAAAAAgAAAAAAAP/+AAEAAAAAAAAAAAAAAAAAAAAAAAAADwAPAAAABwAIAA8AEQATABQAFQAWABcAGAAZABoAGwAc) format(\x22truetype\x22)}\n.",[1],"mt-pay-container{display:block;overflow:hidden}\n.",[1],"pay-type-container{padding:0 ",[0,24],"}\n.",[1],"pay-type-scroll-container{height:calc(100vh - ",[0,488],");height:calc(100vh - ",[0,488]," - constant(safe-area-inset-bottom) / 2);height:calc(100vh - ",[0,488]," - env(safe-area-inset-bottom) / 2);overflow-y:auto;padding-bottom:",[0,139],"}\n.",[1],"pay-type-container .",[1],"pay-info{-webkit-box-pack:justify;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:",[0,18],";box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:",[0,18],";min-height:",[0,138],";padding:",[0,36]," ",[0,40]," ",[0,36]," ",[0,33],"}\n.",[1],"pay-info .",[1],"pay-info-left .",[1],"pay-info-title .",[1],"pay-info-image{height:",[0,35],";margin-right:",[0,9],";width:",[0,35],"}\n.",[1],"pay-info .",[1],"pay-info-left .",[1],"pay-info-desc{margin-left:",[0,44],";margin-top:",[0,6],"}\n.",[1],"pay-info .",[1],"pay-info-left .",[1],"pay-info-title .",[1],"pay-info-name{color:#111;font-size:",[0,28],";font-weight:500;line-height:",[0,28],";max-width:",[0,500],";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"pay-info .",[1],"pay-info-radio{height:",[0,40],";width:",[0,40],"}\n.",[1],"quickpay-loading,.",[1],"quickpay-tip{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;left:50%;position:absolute;right:0;top:40%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}\n.",[1],"quickpay-loading .",[1],"loading-icon{height:",[0,96],";width:",[0,96],"}\n.",[1],"quickpay-loading .",[1],"loading-text{color:#111;font-family:PingFangSC-Regular;font-size:",[0,30],";line-height:",[0,44],";margin-top:",[0,40],"}\n.",[1],"quickpay-tip .",[1],"tip-icon{height:",[0,270],";width:",[0,360],"}\n.",[1],"quickpay-tip .",[1],"tip-title{color:#191919;font-family:PingFangSC-Medium;font-size:",[0,32],";font-weight:500;line-height:",[0,44],";text-align:center}\n.",[1],"quickpay-tip .",[1],"tip-text{color:#999;font-family:PingFangSC-Regular;font-size:",[0,28],";font-weight:400;line-height:",[0,40],"}\n.",[1],"cashier-btn.",[1],"disabled{background-color:#fff8db;color:#d3a300}\n.",[1],"cashier-btn-line{bottom:",[0,30],";bottom:calc(",[0,30]," + constant(safe-area-inset-bottom) / 2);bottom:calc(",[0,30]," + env(safe-area-inset-bottom) / 2);left:",[0,32],";position:fixed;right:",[0,32],"}\n.",[1],"cashier-btn-group{-webkit-box-pack:justify;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"cashier-btn{border:0;border-radius:",[0,45],";color:rgba(0,0,0,.9);font-size:",[0,32],";font-weight:500;height:",[0,88],";line-height:",[0,88],"}\n.",[1],"cashier-btn+.",[1],"cashier-btn{margin-left:",[0,24],"}\n.",[1],"cashier-btn.",[1],"primary{-webkit-box-flex:0;background-color:#ffd100;background-image:-webkit-linear-gradient(316deg,#ffe74d,#ffdd19);background-image:linear-gradient(134deg,#ffe74d,#ffdd19);-webkit-flex:0 0 ",[0,386],";flex:0 0 ",[0,386],"}\n.",[1],"cashier-btn.",[1],"cancel{-webkit-box-flex:0;border:",[0,1]," solid #ccc;-webkit-flex:0 0 ",[0,276],";flex:0 0 ",[0,276],"}\n.",[1],"cashier-btn:after{display:none}\n.",[1],"modal{background:rgba(0,0,0,.6);bottom:0;height:100vh;left:0;position:fixed;width:100vw;z-index:99}\n@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}.",[1],"spin-animation{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/pages/cashier/index.wxss:1:3175)",{path:"./packages/finance-pay/pages/cashier/index.wxss"});
}__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packages/finance-pay/pages/debug/result':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U,A)=>{if(typeof R.setEventListenerWrapper==='function')R.setEventListenerWrapper(Q.C);var L=R.c,M=R.m,O=R.r,K=U===true,c=(C)=>{},e=(C,T)=>{C||K||!!Z(U.payResultInfo,"payResultStatus")||undefined?T(Y("支付结果："+Y(X(D.payResultInfo).payResultStatus)),(N)=>{A["payResultInfo"][0]=(D,E,T)=>{T(N,Y("支付结果："+Y(X(D.payResultInfo).payResultStatus)))}}):T()},f=(C,T)=>{C||K||!!Z(U.payResultInfo,"resultSouceType")||undefined?T(Y("支付来源 mt/wx: "+Y(X(D.payResultInfo).resultSouceType)),(N)=>{A["payResultInfo"][1]=(D,E,T)=>{T(N,Y("支付来源 mt/wx: "+Y(X(D.payResultInfo).resultSouceType)))}}):T()},g=(C,T)=>{C||K||!!Z(U.payResultInfo,"errorMsg")||undefined?T(Y("支付失支付失败对应的报错信息："+Y(X(D.payResultInfo).errorMsg)),(N)=>{A["payResultInfo"][2]=(D,E,T)=>{T(N,Y("支付失支付失败对应的报错信息："+Y(X(D.payResultInfo).errorMsg)))}}):T()},d=(C,T,E)=>{C?T(" 支付结果回调 "):T();E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},e);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},f);E("view",{},(N,C)=>{if(C)L(N,"demo-wrapper")},g)},b=(C,T,E)=>{E("nav-bar",{},(N,C)=>{if(C)O(N,"title","支付结果")},c);E("view",{},(N,C)=>{if(C)L(N,"demo-container")},d)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C||K||U.renderer)L(N,D.renderer);A["renderer"][0]=(D,E,T)=>{L(N,D.renderer)};if(C)R.i(N,"page-root")},b);C=!1;U=Object.create(null);K=!1};A=A||{"payResultInfo":new Array(3),"renderer":new Array(1)};return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packages/finance-pay/pages/debug/result.wxss']=setCssToHead(["body{background-color:rgba(0,0,0,.04);font-size:",[0,50],";margin:0;padding:0;text-align:center}\n.",[1],"demo-container{font-size:",[0,28],";padding:",[0,30]," ",[0,30]," ",[0,140],"}\n.",[1],"demo-wrapper{padding-bottom:",[0,20],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/pages/debug/result.wxss:1:1)",{path:"./packages/finance-pay/pages/debug/result.wxss"});
}$gwx42_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'page-root'])
Z([3,'handleWebviewMessage'])
Z([[7],[3,'weburl']])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx42_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx42_XC_4=true;
var x=['./packages/finance-pay/pages/h5/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx42_XC_4_1()
var fYI=_n('view')
_rz(z,fYI,'id',0,e,s,gg)
var cZI=_mz(z,'web-view',['bindmessage',1,'src',1],[],e,s,gg)
_(fYI,cZI)
_(r,fYI)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx42_XC_4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx42_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/h5/index.wxml'] = [$gwx42_XC_4, './packages/finance-pay/pages/h5/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/h5/index.wxml'] = $gwx42_XC_4( './packages/finance-pay/pages/h5/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packages/finance-pay/pages/h5/index.wxss']=setCssToHead(["body{background-color:#f5f5f5;height:100%;margin:0;padding:0;width:100%}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/pages/h5/index.wxss:1:1)",{path:"./packages/finance-pay/pages/h5/index.wxss"});
}$gwx42_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx42_XC_5 || [];
function gz$gwx42_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx42_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pay-half-drawer-title'])
Z([3,' 输入支付密码 '])
Z([3,'order-info'])
Z([3,'order-fee'])
Z([3,'currency'])
Z([3,'¥'])
Z([3,'amount'])
Z([a,[[6],[[7],[3,'transInfo']],[3,'order_money']]])
Z([3,'showECNYWallet'])
Z([3,'pre-cashier-pass-mt-pay'])
Z([[7],[3,'payType']])
Z([[7],[3,'passMtPay']])
Z([3,'pre-cashier-password'])
Z([3,'pre-cashier-password-input'])
Z([[7],[3,'inputLength']])
Z([[7],[3,'password']])
Z([3,'password-bottom'])
Z([a,[3,'error-tip '],[[2,'?:'],[[2,'!'],[[7],[3,'showErrorTip']]],[1,'hide-tip'],[1,'']]])
Z([a,[[7],[3,'errorMessage']]])
Z([3,'findPassword'])
Z([3,'find-password'])
Z([3,'找回密码'])
Z([3,'pre-cashier-keyboard-container'])
Z([3,'keyboardTap'])
Z([3,'pre-cashier-keyboard-class'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_5_1
}
function gz$gwx42_XC_5_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_5_2)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_5_2
__WXML_GLOBAL__.ops_cached.$gwx42_XC_5_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pending-payment-drawer-container'])
Z([3,'pending-payment-detail'])
Z([3,'pay-half-drawer-title'])
Z([a,[3,' 订单待支付，请在'],[[7],[3,'clock']],[3,'内支付 ']])
Z([3,'pending-payment-content'])
Z([3,'item'])
Z([[7],[3,'sortStrategyList']])
Z([3,'index'])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'show_type']],[1,'flatten']],[[2,'==='],[[6],[[7],[3,'item']],[3,'show_type']],[1,'switch']]])
Z([3,'selectPayTypeFun'])
Z([3,'selectSubPayType'])
Z([3,'setHalfDrawerData'])
Z([3,'setSelectedStatus'])
Z([[7],[3,'cashierType']])
Z([[7],[3,'index']])
Z([[7],[3,'displayStrategy']])
Z([[7],[3,'flatPayInfoList']])
Z([[7],[3,'item']])
Z(z[14])
Z([[6],[[6],[[7],[3,'PreCashierBids']],[3,'payInfoItem']],[3,'mv']])
Z([[7],[3,'selectedStatus']])
Z([3,'pendingPaymentFormSubmit'])
Z([3,'pending-payment-btn'])
Z([a,[3,' '],[[7],[3,'paymentPageButtonText']],[3,' ']])
Z([3,'safe-area-bottom'])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_5_2);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_5_2
}
function gz$gwx42_XC_5_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx42_XC_5_3)return __WXML_GLOBAL__.ops_cached.$gwx42_XC_5_3
__WXML_GLOBAL__.ops_cached.$gwx42_XC_5_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pre-cashier-container'])
Z([3,'page-root'])
Z([3,'closeHalfDrawer'])
Z([[7],[3,'showRiskPopup']])
Z([[2,'!=='],[[7],[3,'pageScene']],[[6],[[7],[3,'PageSceneType']],[3,'NoPassWeixinPopWindow']]])
Z([[2,'==='],[[7],[3,'pageScene']],[[6],[[7],[3,'PageSceneType']],[3,'NoPassWeixinPopWindow']]])
Z([[6],[[7],[3,'popWindowData']],[3,'showNopassCheckPopup']])
Z([3,'normalPayClick'])
Z([3,'noPassPayClick'])
Z([[6],[[7],[3,'pageCids']],[3,'preCashier']])
Z([[6],[[7],[3,'popWindowData']],[3,'data']])
Z([[6],[[7],[3,'popWindowData']],[3,'showNopassSignPopup']])
Z([3,'cancelAndPay'])
Z([3,'clickNoPassSignBtnCallback'])
Z(z[12])
Z(z[9])
Z(z[10])
Z([[2,'&&'],[[2,'==='],[[7],[3,'pageScene']],[[6],[[7],[3,'PageSceneType']],[3,'MtPayVerifyConfirmPage']]],[[2,'!'],[[6],[[7],[3,'showPayTypeChangeHalfDrawer']],[3,'show']]]])
Z([3,'triggerShowECNYWallet'])
Z([[7],[3,'selectedPayType']])
Z([[7],[3,'routeData']])
Z([[2,'==='],[[7],[3,'pageScene']],[[6],[[7],[3,'PageSceneType']],[3,'MtPayVerifyConfirmPage']]])
Z([[7],[3,'transInfo']])
Z([[7],[3,'verifyData']])
Z([[2,'&&'],[[2,'==='],[[7],[3,'pageScene']],[[6],[[7],[3,'PageSceneType']],[3,'PendingPaymentPage']]],[[2,'!'],[[6],[[7],[3,'showPayTypeChangeHalfDrawer']],[3,'show']]]])
Z([3,'closePendingPaymentPageHalfDrawer'])
Z([[7],[3,'renderSortStrategyList']])
Z([[7],[3,'showPayTypeChangeHalfDrawer']])
Z([[2,'==='],[[6],[[7],[3,'showPayTypeChangeHalfDrawer']],[3,'type']],[1,'dcep']])
Z(z[2])
Z([3,'selectEcnyPayTypeFun'])
Z([[7],[3,'dcepChangeHalfDrawerData']])
Z([[6],[[7],[3,'selectedStatus']],[3,'subPayTypeUniqueKey']])
Z([[2,'==='],[[6],[[7],[3,'showPayTypeChangeHalfDrawer']],[3,'type']],[1,'wxjspay']])
Z(z[2])
Z([3,'selectWeixinPayType'])
Z([[7],[3,'weixinNoPassChangeList']])
Z([[7],[3,'noPasswordStatus']])
Z(z[3])
Z([[6],[[7],[3,'riskVerifyData']],[3,'popupData']])
Z(z[19])
})(__WXML_GLOBAL__.ops_cached.$gwx42_XC_5_3);return __WXML_GLOBAL__.ops_cached.$gwx42_XC_5_3
}
__WXML_GLOBAL__.ops_set.$gwx42_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx42_XC_5=true;
var x=['./packages/finance-pay/pages/pre-cashier/components/pass-verify/index.wxml','./packages/finance-pay/pages/pre-cashier/components/pending-payment-page/index.wxml','./packages/finance-pay/pages/pre-cashier/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx42_XC_5_1()
var o2I=_n('view')
var c3I=_n('view')
_rz(z,c3I,'class',0,e,s,gg)
var o4I=_oz(z,1,e,s,gg)
_(c3I,o4I)
_(o2I,c3I)
var l5I=_n('view')
_rz(z,l5I,'class',2,e,s,gg)
var a6I=_n('view')
_rz(z,a6I,'class',3,e,s,gg)
var t7I=_n('text')
_rz(z,t7I,'class',4,e,s,gg)
var e8I=_oz(z,5,e,s,gg)
_(t7I,e8I)
_(a6I,t7I)
var b9I=_n('h2')
_rz(z,b9I,'class',6,e,s,gg)
var o0I=_oz(z,7,e,s,gg)
_(b9I,o0I)
_(a6I,b9I)
_(l5I,a6I)
_(o2I,l5I)
var xAJ=_mz(z,'pass-mt-pay',['bindtap',8,'customClass',1,'payType',2,'transInfo',3],[],e,s,gg)
_(o2I,xAJ)
var oBJ=_n('view')
_rz(z,oBJ,'class',12,e,s,gg)
var fCJ=_mz(z,'password-input',['customClass',13,'inputLength',1,'password',2],[],e,s,gg)
_(oBJ,fCJ)
_(o2I,oBJ)
var cDJ=_n('view')
_rz(z,cDJ,'class',16,e,s,gg)
var hEJ=_n('text')
_rz(z,hEJ,'class',17,e,s,gg)
var oFJ=_oz(z,18,e,s,gg)
_(hEJ,oFJ)
_(cDJ,hEJ)
var cGJ=_mz(z,'view',['bindtap',19,'class',1],[],e,s,gg)
var oHJ=_oz(z,21,e,s,gg)
_(cGJ,oHJ)
_(cDJ,cGJ)
_(o2I,cDJ)
var lIJ=_n('view')
_rz(z,lIJ,'class',22,e,s,gg)
var aJJ=_mz(z,'keyboard',['bind:keyboardTap',23,'customClass',1,'inputFocus',2],[],e,s,gg)
_(lIJ,aJJ)
_(o2I,lIJ)
_(r,o2I)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx42_XC_5_2()
var eLJ=_n('view')
_rz(z,eLJ,'class',0,e,s,gg)
var bMJ=_n('view')
_rz(z,bMJ,'class',1,e,s,gg)
var oNJ=_n('view')
_rz(z,oNJ,'class',2,e,s,gg)
var xOJ=_oz(z,3,e,s,gg)
_(oNJ,xOJ)
_(bMJ,oNJ)
var oPJ=_n('view')
_rz(z,oPJ,'class',4,e,s,gg)
var fQJ=_v()
_(oPJ,fQJ)
var cRJ=function(oTJ,hSJ,cUJ,gg){
var lWJ=_n('view')
var aXJ=_v()
_(lWJ,aXJ)
if(_oz(z,8,oTJ,hSJ,gg)){aXJ.wxVkey=1
var tYJ=_mz(z,'flatten-type',['bind:selectPayTypeFun',9,'bind:selectSubPayType',1,'bind:setHalfDrawerData',2,'bind:setSelectedStatus',3,'cashierType',4,'data-index',5,'displayStrategy',6,'flatPayInfoList',7,'flattenList',8,'index',9,'moduleBid',10,'selectedStatus',11],[],oTJ,hSJ,gg)
_(aXJ,tYJ)
}
aXJ.wxXCkey=1
aXJ.wxXCkey=3
_(cUJ,lWJ)
return cUJ
}
fQJ.wxXCkey=4
_2z(z,6,cRJ,e,s,gg,fQJ,'item','index','index')
_(bMJ,oPJ)
_(eLJ,bMJ)
var eZJ=_mz(z,'button',['bindtap',21,'class',1],[],e,s,gg)
var b1J=_oz(z,23,e,s,gg)
_(eZJ,b1J)
_(eLJ,eZJ)
var o2J=_n('view')
_rz(z,o2J,'class',24,e,s,gg)
_(eLJ,o2J)
_(r,eLJ)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx42_XC_5_3()
var o4J=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var c6J=_mz(z,'half-drawer',['bind:closeHalfDrawer',2,'hidden',1,'needCloseBtn',2],[],e,s,gg)
var h7J=_v()
_(c6J,h7J)
if(_oz(z,5,e,s,gg)){h7J.wxVkey=1
var lAK=_n('view')
lAK.attr['class']=true
var aBK=_v()
_(lAK,aBK)
if(_oz(z,6,e,s,gg)){aBK.wxVkey=1
var eDK=_mz(z,'nopass-check-popup',['bind:lBtnClick',7,'bind:rBtnClick',1,'cid',2,'popData',3],[],e,s,gg)
_(aBK,eDK)
}
var tCK=_v()
_(lAK,tCK)
if(_oz(z,11,e,s,gg)){tCK.wxVkey=1
var bEK=_mz(z,'nopass-sign-popup',['bind:cancelAndPay',12,'bind:clickNoPassSignBtnCallback',1,'bind:hidePopup',2,'cid',3,'popData',4],[],e,s,gg)
_(tCK,bEK)
}
aBK.wxXCkey=1
aBK.wxXCkey=3
tCK.wxXCkey=1
tCK.wxXCkey=3
_(h7J,lAK)
}
var o8J=_v()
_(c6J,o8J)
if(_oz(z,17,e,s,gg)){o8J.wxVkey=1
var oFK=_mz(z,'pass-verify',['bind:showECNYWallet',18,'payType',1,'routeData',2,'showPassVerify',3,'transInfo',4,'verifyData',5],[],e,s,gg)
_(o8J,oFK)
}
var c9J=_v()
_(c6J,c9J)
if(_oz(z,24,e,s,gg)){c9J.wxVkey=1
var xGK=_mz(z,'pending-payment-page',['bind:closePendingPaymentHalfDrawer',25,'halfDrawerData',1],[],e,s,gg)
_(c9J,xGK)
}
var o0J=_v()
_(c6J,o0J)
if(_oz(z,27,e,s,gg)){o0J.wxVkey=1
var oHK=_n('view')
var fIK=_v()
_(oHK,fIK)
if(_oz(z,28,e,s,gg)){fIK.wxVkey=1
var hKK=_mz(z,'ecny-wallet-half-drawer',['bind:closeHalfDrawer',29,'bind:selectEcnyPayTypeFun',1,'halfDrawerData',2,'subPayTypeUniqueKey',3],[],e,s,gg)
_(fIK,hKK)
}
var cJK=_v()
_(oHK,cJK)
if(_oz(z,33,e,s,gg)){cJK.wxVkey=1
var oLK=_mz(z,'weixin-nopass-half-drawer',['bind:closeHalfDrawer',34,'bind:selectWeixinPayType',1,'halfDrawerData',2,'noPasswordStatus',3],[],e,s,gg)
_(cJK,oLK)
}
fIK.wxXCkey=1
fIK.wxXCkey=3
cJK.wxXCkey=1
cJK.wxXCkey=3
_(o0J,oHK)
}
h7J.wxXCkey=1
h7J.wxXCkey=3
o8J.wxXCkey=1
o8J.wxXCkey=3
c9J.wxXCkey=1
c9J.wxXCkey=3
o0J.wxXCkey=1
o0J.wxXCkey=3
_(o4J,c6J)
var f5J=_v()
_(o4J,f5J)
if(_oz(z,38,e,s,gg)){f5J.wxVkey=1
var cMK=_mz(z,'risk-popup',['popupData',39,'selectedPayType',1],[],e,s,gg)
_(f5J,cMK)
}
f5J.wxXCkey=1
f5J.wxXCkey=3
_(r,o4J)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx42_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx42_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/pre-cashier/components/pass-verify/index.wxml'] = [$gwx42_XC_5, './packages/finance-pay/pages/pre-cashier/components/pass-verify/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/pre-cashier/components/pass-verify/index.wxml'] = $gwx42_XC_5( './packages/finance-pay/pages/pre-cashier/components/pass-verify/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/pre-cashier/components/pending-payment-page/index.wxml'] = [$gwx42_XC_5, './packages/finance-pay/pages/pre-cashier/components/pending-payment-page/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/pre-cashier/components/pending-payment-page/index.wxml'] = $gwx42_XC_5( './packages/finance-pay/pages/pre-cashier/components/pending-payment-page/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/finance-pay/pages/pre-cashier/index.wxml'] = [$gwx42_XC_5, './packages/finance-pay/pages/pre-cashier/index.wxml'];else __wxAppCode__['packages/finance-pay/pages/pre-cashier/index.wxml'] = $gwx42_XC_5( './packages/finance-pay/pages/pre-cashier/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packages/finance-pay/pages/pre-cashier/components/pass-verify/index.wxss']=setCssToHead([[2,"./packages/finance-pay/style/common.wxss"],".",[1],"modal-front{background:#fff;border-radius:",[0,24],";bottom:",[0,640],";box-sizing:border-box;left:50%;margin-left:",[0,-311],";opacity:0;padding:",[0,34]," 0 ",[0,16],";position:absolute;text-align:center;-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;width:",[0,600],";z-index:999}\n.",[1],"transform-modal{opacity:1;-webkit-transform:scale(1);transform:scale(1)}\n.",[1],"modal-front wx-h1{border-bottom:",[0,1]," solid rgba(0,0,0,.06);color:rgba(0,0,0,.9);display:block;font-size:",[0,32],";font-weight:400;letter-spacing:0;line-height:",[0,32],";padding-bottom:",[0,34],"}\n.",[1],"close-btn{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAntJREFUaAXtmk1uwjAQhUlVcQYu0N6DO6SLsOqGVXucsmLDiiyaO3CP9gKcAVWifggjN/Vv/MZqJUdCNo49876xY+yY2axeNQI1AjUCNQIJERiG4QGfhCaiVWP1ND4Vfd+/nc/nF9Rpmma3WCzWy+Xyy9dG6t7hcLg/Ho9bpecZPpSeTdd1ry5/TjBE5nQ6fZgNlbF3BbcqDXeF2iuoJ1PPfD5/bNv20yzT+TudiUlhWEVtD0cx9Rl1XFAh204wRALDb2ygJJwPCtpcvQXNTjDcxDOF4Ye8eZWAC0DhkVibmsZ55zOmK0Y4oD9zDJ9BMAAyHOlAhVKWryiwUnAsKOiNBpOGY0Ilg0nBsaEmgbHhJKAmg7HgpKCywHLhJKGywabCSUNRwFLhSkDRwGLhUA+L6PEq/SKEvHNI+h2DAN8V6I0BbRVUO7YhsR2igkGwD24MhO8SUBe7Nme5ZbFwUlBiYDB8hettQ+/iuGkGtfXopHbj3v0YBPzXSwTMGIq/JgodKPSk5GuGOnnoSPtSo6d+vE1CGzVRFJ3uaUMxAIV3FB0+mAnHwcEPNntYUoZiBNTtvUhK3XEAUr5ng00ROqVNChTqZoHlCMxpGwM5GYwhjGHDBTkJjCmIacuETAaTECJhMwlMQoCOMtt2NBjbsQYyU6aPKDCmQxPElmf5CoKxHNkgXGUMn14whgOX+FB5rm/vWlGt33Dma1vQih/ZYgOq1pYrz9py6wuOs8dsZ9AwJLmdtwn19RztDLo0FEB9PWcLhC5zDsXrGfRGV1RQ+DvEbZWuy0ukBtxO+1N6Nr4zaF3Pmcb+YcRpgHzjr+kh41VzNQI1AjUCQhH4BtoZMcNRdyjfAAAAAElFTkSuQmCC) no-repeat;background-position:50%;background-size:",[0,28]," ",[0,28],";height:",[0,24],";padding:",[0,24],";position:absolute;right:",[0,16],";top:",[0,16],";width:",[0,24],"}\n.",[1],"order-info{margin:",[0,16]," 0 0;text-align:center}\n.",[1],"order-fee{color:#0a0a0a;font-weight:700;margin:0 auto;max-width:80%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"amount{font-family:MTfin,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:",[0,64],";font-weight:500;line-height:",[0,64],"}\n.",[1],"currency{color:#111;font-size:",[0,38],";line-height:",[0,38],";margin-right:",[0,4],"}\n.",[1],"order-original-fee{color:rgba(0,0,0,.5);display:inline-block;font-size:",[0,24],";line-height:",[0,24],";max-width:80%;overflow:hidden;text-decoration:line-through;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}\n.",[1],"item-bank-info{height:",[0,30],";line-height:",[0,30],";position:relative}\n.",[1],"item-bank-info\x3ewx-image{display:inline-block;height:",[0,30],";margin-right:",[0,12],";vertical-align:middle;width:",[0,30],"}\n.",[1],"item-bank-info wx-text{color:rgba(0,0,0,.9);display:inline-block;font-size:",[0,28],";line-height:",[0,28],";max-width:80%;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}\n.",[1],"item-bank-info\x3ewx-span{border:solid rgba(0,0,0,.3);border-width:",[0,1]," ",[0,1]," 0 0;display:inline-block;height:",[0,12],";margin-left:",[0,10],";position:relative;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:",[0,12],"}\n.",[1],"password-bottom{-webkit-box-pack:justify;-webkit-box-orient:horizontal;-webkit-box-direction:normal;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-flow:row;flex-flow:row;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:",[0,50],";padding:",[0,4]," ",[0,32],"}\n.",[1],"error-tip{color:#ff3e33;font-size:",[0,24],";line-height:",[0,24],"}\n.",[1],"hide-tip{visibility:hidden}\n.",[1],"find-password{color:#0a77f5;font-size:",[0,24],";line-height:",[0,24],"}\n.",[1],"no-password-modal{bottom:40%}\n.",[1],"cashier-btn{background-color:#ffd100;border:",[0,0],";border-radius:",[0,18],";color:rgba(0,0,0,.7);font-size:",[0,28],";font-weight:700;height:",[0,90],";line-height:",[0,90],";margin:",[0,15]," ",[0,24]," ",[0,10],"}\n.",[1],"pre-cashier-password{margin:",[0,-11]," 0 ",[0,16],";padding:0 ",[0,32],"}\n.",[1],"pre-cashier-keyboard-container{height:calc(",[0,552]," + env(safe-area-inset-bottom)/2);position:relative}\n.",[1],"verify-btn{margin-bottom:",[0,32],";margin-top:",[0,175],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/pages/pre-cashier/components/pass-verify/index.wxss:1:3175)",{path:"./packages/finance-pay/pages/pre-cashier/components/pass-verify/index.wxss"});__wxAppCode__['packages/finance-pay/pages/pre-cashier/components/pending-payment-page/index.wxss']=setCssToHead([[2,"./packages/finance-pay/style/common.wxss"],".",[1],"pending-payment-container{background:#fafafa}\n.",[1],"pending-payment-drawer-container{padding:0 ",[0,32]," ",[0,32],"}\n.",[1],"pending-payment-detail{margin-bottom:",[0,80],"}\n.",[1],"pending-payment-btn{background-image:-webkit-linear-gradient(353deg,#ffe74d,#ffdd19);background-image:linear-gradient(97deg,#ffe74d,#ffdd19);border:none;border-radius:",[0,48],";color:#191919;font-size:",[0,32],";font-weight:600;height:",[0,96],";line-height:",[0,96],";text-align:center}\n.",[1],"pending-payment-btn:after{display:none}\n.",[1],"pending-payment-content{background:#fff;border-radius:",[0,24],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/pages/pre-cashier/components/pending-payment-page/index.wxss:1:3175)",{path:"./packages/finance-pay/pages/pre-cashier/components/pending-payment-page/index.wxss"});__wxAppCode__['packages/finance-pay/pages/pre-cashier/index.wxss']=setCssToHead(["body{background-color:#f5f5f5;height:100%;margin:0;padding:0;width:100%}\n.",[1],"show{display:block}\n.",[1],"hide{display:none}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/finance-pay/pages/pre-cashier/index.wxss:1:1)",{path:"./packages/finance-pay/pages/pre-cashier/index.wxss"});
}