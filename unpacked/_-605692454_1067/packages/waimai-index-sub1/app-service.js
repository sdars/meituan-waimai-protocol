:x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case"/":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";__wxCodeSpace__.addComponentStaticConfig('packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification',{"component":true,"usingComponents":{"weapp-comp-privacy":"../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/waimai-index-sub1/airdrop-container/airdrop-container',{"component":true,"usingComponents":{"airdrop-coupon":"../airdrop-coupon/airdrop-coupon","airdrop-layer":"../airdrop-layer/airdrop-layer","airdrop-popup":"../airdrop-popup/airdrop-popup","weapp-comp-privacy":"../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon',{"component":true,"usingComponents":{"midas":"../../../components/midas/index","ad-mach-container":"../../../pages/index/components/ad-mach-container/index","weapp-comp-privacy":"../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/waimai-index-sub1/airdrop-layer/airdrop-layer',{"component":true,"usingComponents":{"weapp-comp-privacy":"../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/waimai-index-sub1/airdrop-popup/airdrop-popup',{"component":true,"usingComponents":{"mach-user-container":"../../../pages/index/components/mach-user-container/index","ad-mach-container":"../../../pages/index/components/ad-mach-container/index","weapp-comp-privacy":"../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/waimai-index-sub1/airdrop-tips/airdrop-tips',{"component":true,"usingComponents":{"weapp-comp-privacy":"../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/waimai-index-sub1/bottom-guide/index',{"component":true,"usingComponents":{"weapp-comp-privacy":"../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/waimai-index-sub1/index',{"usingComponents":{"airdrop-container":"./airdrop-container/airdrop-container","airdrop-after-notification":"./airdrop-after-notification/airdrop-after-notification","airdrop-tips":"./airdrop-tips/airdrop-tips","sidebar":"./sidebar/index","bottom-guide":"./bottom-guide/index","weapp-comp-privacy":"../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/waimai-index-sub1/inflate-rule-popup/index',{"component":true,"usingComponents":{"weapp-comp-privacy":"../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/waimai-index-sub1/rolling-number/index',{"component":true,"usingComponents":{"weapp-comp-privacy":"../../../privacy/components/index"}});__wxCodeSpace__.addComponentStaticConfig('packages/waimai-index-sub1/sidebar/index',{"component":true,"usingComponents":{"weapp-comp-privacy":"../../../privacy/components/index"}});__wxCodeSpace__.enableCodeChunk();__wxCodeSpace__.initializeCodeChunk("packages/waimai-index-sub1/chunk_0",["packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification","packages/waimai-index-sub1/airdrop-container/airdrop-container","packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon","packages/waimai-index-sub1/airdrop-layer/airdrop-layer","packages/waimai-index-sub1/airdrop-popup/airdrop-popup","packages/waimai-index-sub1/airdrop-tips/airdrop-tips","packages/waimai-index-sub1/bottom-guide/index","packages/waimai-index-sub1/index","packages/waimai-index-sub1/sidebar/index"]);__wxCodeSpace__.initializeCodeChunk("packages/waimai-index-sub1/chunk_1",["packages/waimai-index-sub1/inflate-rule-popup/index"]);__wxCodeSpace__.initializeCodeChunk("packages/waimai-index-sub1/chunk_2",["packages/waimai-index-sub1/rolling-number/index"]);/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx46=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx46 || [];
__WXML_GLOBAL__.ops_set.$gwx46=z;
__WXML_GLOBAL__.ops_init.$gwx46=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=[];if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx46";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx46();$gwx46_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx46_XC_0 || [];
function gz$gwx46_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showNotification']])
})(__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_1
}
function gz$gwx46_XC_0_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_2)return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_2
__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showAirDropLayer']])
Z([3,'bgClick'])
Z([3,'move'])
Z([a,[3,'airdrop-mask '],[[7],[3,'couponContainerClass']],[3,'-mask '],[[2,'?:'],[[7],[3,'showTianjiangLayer']],[1,'airdrop-layer-mask'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'showHideAnimate']],[1,'airdrop-animate-hide'],[1,'']]])
Z([a,[3,'airdrop-container '],[[2,'||'],[[7],[3,'couponContainerClass']],[1,'airdrop-animate-show']]])
Z([a,[3,'padding-top: '],[[7],[3,'paddingTop']],[3,'px; padding-bottom: '],[[7],[3,'paddingBottom']],[3,'rpx; height: calc(100vh - '],[[7],[3,'paddingTop']],[3,'px - '],[[7],[3,'paddingBottom']],[3,'px);']])
Z([[7],[3,'showTianjiangCoupon']])
Z([[7],[3,'airdropCouponData']])
Z([3,'onClickAirdropLogin'])
Z([3,'showCloseAnimation'])
Z([[7],[3,'containerHeight']])
Z([[7],[3,'env']])
Z([3,'coupon'])
Z([[7],[3,'lch']])
Z([[7],[3,'userId']])
Z([[7],[3,'uuid']])
Z([[7],[3,'showTianjiangLayer']])
Z([[7],[3,'airdropLayerData']])
Z(z[9])
Z(z[10])
Z([3,'layer'])
Z([[7],[3,'airdropPopupData']])
})(__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_2);return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_2
}
function gz$gwx46_XC_0_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_3)return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_3
__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'||'],[[7],[3,'showAirDropLayer']],[[7],[3,'useSuperMach']]],[[7],[3,'useNestMach']]])
Z([3,'closeLayer'])
Z([3,'airdrop-coupon-container'])
Z([3,'1'])
Z([[7],[3,'needLogin']])
Z([[2,'||'],[[2,'||'],[[2,'&&'],[[7],[3,'hasCoupon']],[[2,'!'],[[7],[3,'needLogin']]]],[[7],[3,'useSuperMach']]],[[7],[3,'useNestMach']]])
Z(z[1])
Z([3,'airdrop-layer'])
Z([3,'2'])
Z([[2,'?:'],[[7],[3,'useNestMach']],[1,'width:100%;'],[[2,'?:'],[[7],[3,'useSuperMach']],[1,'width:100%;margin-top: -120rpx;'],[1,'']]])
Z([[7],[3,'useSuperMach']])
Z([[6],[[6],[[7],[3,'templateData']],[1,0]],[3,'templateId']])
Z(z[1])
Z(z[1])
Z([3,'c_m84bv26'])
Z([[8],'list',[[4],[[5],[[6],[[7],[3,'templateData']],[1,0]]]]])
Z(z[8])
Z([[7],[3,'isTestEnv']])
Z([[7],[3,'moduleIdStr']])
Z(z[11])
Z([[7],[3,'useNestMach']])
Z([[7],[3,'templateId']])
Z(z[1])
Z(z[1])
Z(z[14])
Z([[8],'list',[[7],[3,'templateData']]])
Z(z[8])
Z(z[17])
Z(z[18])
Z(z[21])
Z([3,'item'])
Z([[7],[3,'coupons']])
Z([3,'index'])
Z([[2,'<'],[[7],[3,'index']],[1,3]])
Z([3,'onClickUseCoupon'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'couponDirectLink']])
Z([[6],[[7],[3,'item']],[3,'useMach']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'templateFiltered']]])
Z([[6],[[7],[3,'item']],[3,'templateId']])
Z(z[1])
Z([3,'onMachError'])
Z(z[14])
Z([3,'inner-mach-template'])
Z([[6],[[7],[3,'item']],[3,'feUseData']])
Z(z[35])
Z(z[8])
Z(z[17])
Z(z[18])
Z(z[39])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'wmCouponSource']],[1,'ALLOWANCE']])
Z([1,15])
Z([a,[3,'api_pos\x3dP0_'],z[35],[3,'\x26event_id\x3db_am38wg1l']])
Z([[7],[3,'env']])
Z([[7],[3,'maiDianExtraIno']])
Z([[6],[[6],[[7],[3,'item']],[3,'maiDianInfo']],[3,'adPoiChargeInfo']])
Z([a,z[52][1],z[35],[3,'\x26event_id\x3db_8cv3w9au']])
Z([1,true])
Z([3,'meituan_waimai'])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'item']],[3,'wmCouponSource']],[1,'POI']],[[2,'!=='],[[6],[[6],[[7],[3,'item']],[3,'skuInfoList']],[3,'length']],[1,0]]])
Z([3,'coupon-item'])
Z([3,'money-area'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'wmCouponType']],[1,'MONEY']])
Z([[6],[[7],[3,'item']],[3,'pointMoney']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'wmCouponType']],[1,'DISCOUNT']])
Z(z[63])
Z([[6],[[7],[3,'item']],[3,'orderAmountLimitDoc']])
Z([[6],[[7],[3,'item']],[3,'mutexType']])
Z([3,'coupon-type-tip'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'mutexType']],[1,1]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'mutexType']],[1,2]])
Z([3,'left-content content-poi'])
Z([1,2])
Z([a,z[52][1],z[35],z[52][3]])
Z(z[53])
Z(z[54])
Z(z[55])
Z([a,z[52][1],z[35],z[56][3]])
Z(z[57])
Z(z[58])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'item']],[3,'wmCouponSource']],[1,'POI']],[[6],[[7],[3,'item']],[3,'brandCouponLogoUrl']]])
Z([[6],[[7],[3,'item']],[3,'skuInfoList']])
Z([3,'itemIndex'])
Z([3,'foodItem'])
Z(z[81])
Z(z[82])
Z([3,'gotoFood'])
Z(z[35])
Z([[7],[3,'foodItem']])
Z([[7],[3,'itemIndex']])
Z([[6],[[7],[3,'foodItem']],[3,'spuRedirectUrl']])
Z([[2,'<'],[[7],[3,'itemIndex']],[1,2]])
Z([a,z[52][1],z[35],[3,'\x26event_id\x3db_0w3urz8k\x26spu_id\x3d'],[[6],[[7],[3,'foodItem']],[3,'spuId']],[3,'\x26index\x3d'],z[89]])
Z(z[53])
Z(z[54])
Z(z[55])
Z([a,z[52][1],z[35],[3,'\x26event_id\x3db_3or27oso\x26spu_id\x3d'],z[92][4],z[92][5],z[89]])
Z(z[58])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'advertType']],[[2,'==='],[[7],[3,'itemIndex']],[1,0]]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'couponStyleType']],[1,1]])
Z([3,'coupon-item-bottom'])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'item']],[3,'couponType']],[1,2]],[[2,'==='],[[6],[[7],[3,'item']],[3,'couponAmountOrDiscount']],[1,0]]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'couponType']],[1,1]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'wmActCouponTemplateId']],[1,71]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'orderAmountLimit']],[1,0]])
Z(z[63])
Z([3,'coupon-item-discount'])
Z([[6],[[7],[3,'item']],[3,'pointLimit']])
Z(z[63])
Z(z[103])
Z(z[63])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'orderAmountLimit']],[1,0]])
Z(z[63])
Z(z[106])
Z(z[107])
Z(z[63])
Z(z[60])
Z(z[61])
Z(z[62])
Z(z[63])
Z(z[64])
Z(z[63])
Z(z[66])
Z(z[67])
Z(z[68])
Z(z[69])
Z(z[70])
Z([[2,'!=='],[[6],[[7],[3,'item']],[3,'wmCouponSource']],[1,'POI']])
Z([3,'item-right'])
Z(z[80])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'wmCouponLimitShippingType']],[1,'MEITUAN_SHIPPING']])
})(__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_3);return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_3
}
function gz$gwx46_XC_0_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_4)return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_4
__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showAirdropLayer']])
})(__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_4);return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_4
}
function gz$gwx46_XC_0_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_5)return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_5
__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'touchEnd'])
Z([3,'touchStart'])
Z([3,'touchMove'])
Z([3,'air-popup-container'])
Z([a,[3,'transform: translate3d(0, '],[[2,'?:'],[[7],[3,'translateDown']],[[7],[3,'top']],[1,0]],[3,'rpx, 0);'],[[2,'?:'],[[7],[3,'isGray']],[[7],[3,'grayString']],[1,'']],[3,';background: '],[[2,'||'],[[7],[3,'bjColor']],[1,'#FAFAFA']],[3,';padding: '],[[7],[3,'paddingTop']],[3,'rpx 0 0 0;top: -'],[[7],[3,'top']],[3,'rpx']])
Z([3,'item'])
Z([[7],[3,'machData']])
Z([3,'index'])
Z([[2,'<'],[[7],[3,'index']],[1,2]])
Z([3,'air-popup-content'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'machTemplateId']])
Z([3,'closePopup'])
Z([3,'onMachError'])
Z([3,'jumpUrl'])
Z([3,'c_m84bv26'])
Z([3,'inner-mach-template'])
Z([[7],[3,'item']])
Z(z[11])
Z([[7],[3,'isTestEnv']])
Z(z[12])
Z([[6],[[7],[3,'item']],[3,'templateId']])
Z(z[13])
Z(z[14])
Z(z[16])
Z(z[17])
Z([[6],[[7],[3,'item']],[3,'feUseData']])
Z(z[11])
Z(z[20])
Z([[7],[3,'moduleIdStr']])
Z(z[22])
})(__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_5);return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_5
}
function gz$gwx46_XC_0_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_6)return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_6
__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'show'])
})(__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_6);return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_6
}
function gz$gwx46_XC_0_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_7)return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_7
__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showGuide']])
})(__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_7);return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_7
}
function gz$gwx46_XC_0_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_8)return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_8
__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_8);return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_8
}
function gz$gwx46_XC_0_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_9)return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_9
__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showSideBar']])
})(__WXML_GLOBAL__.ops_cached.$gwx46_XC_0_9);return __WXML_GLOBAL__.ops_cached.$gwx46_XC_0_9
}
__WXML_GLOBAL__.ops_set.$gwx46_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx46_XC_0=true;
var x=['./packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification.wxml','./packages/waimai-index-sub1/airdrop-container/airdrop-container.wxml','./packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon.wxml','./packages/waimai-index-sub1/airdrop-layer/airdrop-layer.wxml','./packages/waimai-index-sub1/airdrop-popup/airdrop-popup.wxml','./packages/waimai-index-sub1/airdrop-tips/airdrop-tips.wxml','./packages/waimai-index-sub1/bottom-guide/index.wxml','./packages/waimai-index-sub1/index.wxml','./packages/waimai-index-sub1/sidebar/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx46_XC_0_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx46_XC_0_2()
var oD=_v()
_(r,oD)
if(_oz(z,0,e,s,gg)){oD.wxVkey=1
var fE=_mz(z,'view',['bind:tap',1,'catch:touchmove',1,'class',2],[],e,s,gg)
var cF=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,6,e,s,gg)){hG.wxVkey=1
var cI=_mz(z,'airdrop-coupon',['airdropCouponData',7,'bind:airdropLogin',1,'bind:closeLayer',2,'containerHeight',3,'env',4,'id',5,'lch',6,'userId',7,'uuid',8],[],e,s,gg)
_(hG,cI)
}
var oH=_v()
_(cF,oH)
if(_oz(z,16,e,s,gg)){oH.wxVkey=1
var oJ=_mz(z,'airdrop-layer',['airdropLayerData',17,'bind:closeLayer',1,'containerHeight',2,'id',3],[],e,s,gg)
_(oH,oJ)
}
hG.wxXCkey=1
hG.wxXCkey=3
oH.wxXCkey=1
oH.wxXCkey=3
_(fE,cF)
_(oD,fE)
}
var lK=_n('airdrop-popup')
_rz(z,lK,'airdropPopupData',21,e,s,gg)
var aL=_n('airdrop-popup')
_(lK,aL)
_(r,lK)
oD.wxXCkey=1
oD.wxXCkey=3
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx46_XC_0_3()
var eN=_v()
_(r,eN)
if(_oz(z,0,e,s,gg)){eN.wxVkey=1
var bO=_mz(z,'view',['catchtap',1,'class',1,'data-mask',2],[],e,s,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,4,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,5,e,s,gg)){xQ.wxVkey=1
var oR=_mz(z,'view',['catchtap',6,'class',1,'data-mask',2,'style',3],[],e,s,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,10,e,s,gg)){fS.wxVkey=1
var cT=_v()
_(fS,cT)
if(_oz(z,11,e,s,gg)){cT.wxVkey=1
var hU=_mz(z,'ad-mach-container',['catch:tap',-1,'bindclose',12,'binderror',1,'cid',2,'data',3,'data-mask',4,'debug',5,'moduleId',6,'templateId',7],[],e,s,gg)
_(cT,hU)
}
cT.wxXCkey=1
cT.wxXCkey=3
}
else if(_oz(z,20,e,s,gg)){fS.wxVkey=2
var oV=_v()
_(fS,oV)
if(_oz(z,21,e,s,gg)){oV.wxVkey=1
var cW=_mz(z,'ad-mach-container',['catch:tap',-1,'bindclose',22,'binderror',1,'cid',2,'data',3,'data-mask',4,'debug',5,'moduleId',6,'templateId',7],[],e,s,gg)
_(oV,cW)
}
oV.wxXCkey=1
oV.wxXCkey=3
}
else{fS.wxVkey=3
var oX=_v()
_(fS,oX)
var lY=function(t1,aZ,e2,gg){
var o4=_v()
_(e2,o4)
if(_oz(z,33,t1,aZ,gg)){o4.wxVkey=1
var x5=_mz(z,'view',['bindtap',34,'data-index',1,'data-url',2],[],t1,aZ,gg)
var o6=_v()
_(x5,o6)
if(_oz(z,37,t1,aZ,gg)){o6.wxVkey=1
var f7=_v()
_(o6,f7)
if(_oz(z,38,t1,aZ,gg)){f7.wxVkey=1
var c8=_v()
_(f7,c8)
if(_oz(z,39,t1,aZ,gg)){c8.wxVkey=1
var h9=_mz(z,'ad-mach-container',['bindclose',40,'binderror',1,'cid',2,'class',3,'data',4,'data-index',5,'data-mask',6,'debug',7,'moduleId',8,'templateId',9],[],t1,aZ,gg)
_(c8,h9)
}
c8.wxXCkey=1
c8.wxXCkey=3
}
f7.wxXCkey=1
f7.wxXCkey=3
}
else if(_oz(z,50,t1,aZ,gg)){o6.wxVkey=2
var o0=_mz(z,'midas',['adMonitorType',51,'clickExtra',1,'env',2,'extra',3,'feedback',4,'impressionExtra',5,'sendAdMonitor',6,'serverType',7],[],t1,aZ,gg)
_(o6,o0)
}
else if(_oz(z,59,t1,aZ,gg)){o6.wxVkey=3
var cAB=_n('view')
_rz(z,cAB,'class',60,t1,aZ,gg)
var oBB=_n('view')
_rz(z,oBB,'class',61,t1,aZ,gg)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,62,t1,aZ,gg)){lCB.wxVkey=1
var bGB=_v()
_(lCB,bGB)
if(_oz(z,63,t1,aZ,gg)){bGB.wxVkey=1
}
bGB.wxXCkey=1
}
var aDB=_v()
_(oBB,aDB)
if(_oz(z,64,t1,aZ,gg)){aDB.wxVkey=1
var oHB=_v()
_(aDB,oHB)
if(_oz(z,65,t1,aZ,gg)){oHB.wxVkey=1
}
oHB.wxXCkey=1
}
var tEB=_v()
_(oBB,tEB)
if(_oz(z,66,t1,aZ,gg)){tEB.wxVkey=1
}
var eFB=_v()
_(oBB,eFB)
if(_oz(z,67,t1,aZ,gg)){eFB.wxVkey=1
var xIB=_n('view')
_rz(z,xIB,'class',68,t1,aZ,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,69,t1,aZ,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(xIB,fKB)
if(_oz(z,70,t1,aZ,gg)){fKB.wxVkey=1
}
oJB.wxXCkey=1
fKB.wxXCkey=1
_(eFB,xIB)
}
lCB.wxXCkey=1
aDB.wxXCkey=1
tEB.wxXCkey=1
eFB.wxXCkey=1
_(cAB,oBB)
var cLB=_n('view')
_rz(z,cLB,'class',71,t1,aZ,gg)
var oNB=_mz(z,'midas',['adMonitorType',72,'clickExtra',1,'env',2,'extra',3,'feedback',4,'impressionExtra',5,'sendAdMonitor',6,'serverType',7],[],t1,aZ,gg)
var cOB=_v()
_(oNB,cOB)
if(_oz(z,80,t1,aZ,gg)){cOB.wxVkey=1
}
cOB.wxXCkey=1
_(cLB,oNB)
var hMB=_v()
_(cLB,hMB)
if(_oz(z,81,t1,aZ,gg)){hMB.wxVkey=1
var oPB=_v()
_(hMB,oPB)
var lQB=function(tSB,aRB,eTB,gg){
var oVB=_mz(z,'view',['catchtap',86,'data-index',1,'data-item',2,'data-skuindex',3,'data-url',4],[],tSB,aRB,gg)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,91,tSB,aRB,gg)){xWB.wxVkey=1
var oXB=_mz(z,'midas',['clickExtra',92,'env',1,'extra',2,'feedback',3,'impressionExtra',4,'serverType',5],[],tSB,aRB,gg)
var fYB=_v()
_(oXB,fYB)
if(_oz(z,98,tSB,aRB,gg)){fYB.wxVkey=1
}
fYB.wxXCkey=1
_(xWB,oXB)
}
xWB.wxXCkey=1
xWB.wxXCkey=3
_(eTB,oVB)
return eTB
}
oPB.wxXCkey=4
_2z(z,84,lQB,t1,aZ,gg,oPB,'foodItem','itemIndex','itemIndex')
}
hMB.wxXCkey=1
hMB.wxXCkey=3
_(cAB,cLB)
_(o6,cAB)
}
else{o6.wxVkey=4
var cZB=_v()
_(o6,cZB)
if(_oz(z,99,t1,aZ,gg)){cZB.wxVkey=1
var h1B=_n('view')
_rz(z,h1B,'class',100,t1,aZ,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,101,t1,aZ,gg)){o2B.wxVkey=1
}
else{o2B.wxVkey=2
var c3B=_v()
_(o2B,c3B)
if(_oz(z,102,t1,aZ,gg)){c3B.wxVkey=1
var o4B=_v()
_(c3B,o4B)
if(_oz(z,103,t1,aZ,gg)){o4B.wxVkey=1
}
else if(_oz(z,104,t1,aZ,gg)){o4B.wxVkey=2
var l5B=_v()
_(o4B,l5B)
if(_oz(z,105,t1,aZ,gg)){l5B.wxVkey=1
}
l5B.wxXCkey=1
}
else{o4B.wxVkey=3
var a6B=_n('view')
_rz(z,a6B,'class',106,t1,aZ,gg)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,107,t1,aZ,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(a6B,e8B)
if(_oz(z,108,t1,aZ,gg)){e8B.wxVkey=1
}
t7B.wxXCkey=1
e8B.wxXCkey=1
_(o4B,a6B)
}
o4B.wxXCkey=1
}
else{c3B.wxVkey=2
var b9B=_v()
_(c3B,b9B)
if(_oz(z,109,t1,aZ,gg)){b9B.wxVkey=1
var o0B=_v()
_(b9B,o0B)
if(_oz(z,110,t1,aZ,gg)){o0B.wxVkey=1
}
o0B.wxXCkey=1
}
else if(_oz(z,111,t1,aZ,gg)){b9B.wxVkey=2
var xAC=_v()
_(b9B,xAC)
if(_oz(z,112,t1,aZ,gg)){xAC.wxVkey=1
}
xAC.wxXCkey=1
}
else{b9B.wxVkey=3
var oBC=_n('view')
_rz(z,oBC,'class',113,t1,aZ,gg)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,114,t1,aZ,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(oBC,cDC)
if(_oz(z,115,t1,aZ,gg)){cDC.wxVkey=1
}
fCC.wxXCkey=1
cDC.wxXCkey=1
_(b9B,oBC)
}
b9B.wxXCkey=1
}
c3B.wxXCkey=1
}
o2B.wxXCkey=1
_(cZB,h1B)
}
else{cZB.wxVkey=2
var hEC=_n('view')
_rz(z,hEC,'class',116,t1,aZ,gg)
var cGC=_n('view')
_rz(z,cGC,'class',117,t1,aZ,gg)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,118,t1,aZ,gg)){oHC.wxVkey=1
var eLC=_v()
_(oHC,eLC)
if(_oz(z,119,t1,aZ,gg)){eLC.wxVkey=1
}
eLC.wxXCkey=1
}
var lIC=_v()
_(cGC,lIC)
if(_oz(z,120,t1,aZ,gg)){lIC.wxVkey=1
var bMC=_v()
_(lIC,bMC)
if(_oz(z,121,t1,aZ,gg)){bMC.wxVkey=1
}
bMC.wxXCkey=1
}
var aJC=_v()
_(cGC,aJC)
if(_oz(z,122,t1,aZ,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(cGC,tKC)
if(_oz(z,123,t1,aZ,gg)){tKC.wxVkey=1
var oNC=_n('view')
_rz(z,oNC,'class',124,t1,aZ,gg)
var xOC=_v()
_(oNC,xOC)
if(_oz(z,125,t1,aZ,gg)){xOC.wxVkey=1
}
var oPC=_v()
_(oNC,oPC)
if(_oz(z,126,t1,aZ,gg)){oPC.wxVkey=1
}
xOC.wxXCkey=1
oPC.wxXCkey=1
_(tKC,oNC)
}
oHC.wxXCkey=1
lIC.wxXCkey=1
aJC.wxXCkey=1
tKC.wxXCkey=1
_(hEC,cGC)
var oFC=_v()
_(hEC,oFC)
if(_oz(z,127,t1,aZ,gg)){oFC.wxVkey=1
var fQC=_n('view')
_rz(z,fQC,'class',128,t1,aZ,gg)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,129,t1,aZ,gg)){cRC.wxVkey=1
}
var hSC=_v()
_(fQC,hSC)
if(_oz(z,130,t1,aZ,gg)){hSC.wxVkey=1
}
cRC.wxXCkey=1
hSC.wxXCkey=1
_(oFC,fQC)
}
oFC.wxXCkey=1
_(cZB,hEC)
}
cZB.wxXCkey=1
}
o6.wxXCkey=1
o6.wxXCkey=3
o6.wxXCkey=3
o6.wxXCkey=3
_(o4,x5)
}
o4.wxXCkey=1
o4.wxXCkey=3
return e2
}
oX.wxXCkey=4
_2z(z,31,lY,e,s,gg,oX,'item','index','index')
}
fS.wxXCkey=1
fS.wxXCkey=3
fS.wxXCkey=3
fS.wxXCkey=3
_(xQ,oR)
}
oP.wxXCkey=1
xQ.wxXCkey=1
xQ.wxXCkey=3
_(eN,bO)
}
eN.wxXCkey=1
eN.wxXCkey=3
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx46_XC_0_4()
var cUC=_v()
_(r,cUC)
if(_oz(z,0,e,s,gg)){cUC.wxVkey=1
}
cUC.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx46_XC_0_5()
var lWC=_v()
_(r,lWC)
if(_oz(z,0,e,s,gg)){lWC.wxVkey=1
var aXC=_mz(z,'view',['bindtouchend',1,'bindtouchstart',1,'catchtouchmove',2,'class',3,'style',4],[],e,s,gg)
var tYC=_v()
_(aXC,tYC)
var eZC=function(o2C,b1C,x3C,gg){
var f5C=_v()
_(x3C,f5C)
if(_oz(z,9,o2C,b1C,gg)){f5C.wxVkey=1
var c6C=_mz(z,'view',['class',10,'data-index',1],[],o2C,b1C,gg)
var h7C=_v()
_(c6C,h7C)
if(_oz(z,12,o2C,b1C,gg)){h7C.wxVkey=1
var o8C=_mz(z,'mach-user-container',['bindclose',13,'binderror',1,'bindjumpUrl',2,'cid',3,'class',4,'data',5,'data-index',6,'debug',7,'templateId',8],[],o2C,b1C,gg)
_(h7C,o8C)
}
else if(_oz(z,22,o2C,b1C,gg)){h7C.wxVkey=2
var c9C=_mz(z,'ad-mach-container',['bindclose',23,'binderror',1,'cid',2,'class',3,'data',4,'data-index',5,'debug',6,'moduleId',7,'templateId',8],[],o2C,b1C,gg)
_(h7C,c9C)
}
h7C.wxXCkey=1
h7C.wxXCkey=3
h7C.wxXCkey=3
_(f5C,c6C)
}
f5C.wxXCkey=1
f5C.wxXCkey=3
return x3C
}
tYC.wxXCkey=4
_2z(z,7,eZC,e,s,gg,tYC,'item','index','index')
_(lWC,aXC)
}
lWC.wxXCkey=1
lWC.wxXCkey=3
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx46_XC_0_6()
var lAD=_v()
_(r,lAD)
if(_oz(z,0,e,s,gg)){lAD.wxVkey=1
}
lAD.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx46_XC_0_7()
var tCD=_v()
_(r,tCD)
if(_oz(z,0,e,s,gg)){tCD.wxVkey=1
}
tCD.wxXCkey=1
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx46_XC_0_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx46_XC_0_9()
var oFD=_v()
_(r,oFD)
if(_oz(z,0,e,s,gg)){oFD.wxVkey=1
}
oFD.wxXCkey=1
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx46_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx46_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification.wxml'] = [$gwx46_XC_0, './packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification.wxml'];else __wxAppCode__['packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification.wxml'] = $gwx46_XC_0( './packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/waimai-index-sub1/airdrop-container/airdrop-container.wxml'] = [$gwx46_XC_0, './packages/waimai-index-sub1/airdrop-container/airdrop-container.wxml'];else __wxAppCode__['packages/waimai-index-sub1/airdrop-container/airdrop-container.wxml'] = $gwx46_XC_0( './packages/waimai-index-sub1/airdrop-container/airdrop-container.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon.wxml'] = [$gwx46_XC_0, './packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon.wxml'];else __wxAppCode__['packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon.wxml'] = $gwx46_XC_0( './packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/waimai-index-sub1/airdrop-layer/airdrop-layer.wxml'] = [$gwx46_XC_0, './packages/waimai-index-sub1/airdrop-layer/airdrop-layer.wxml'];else __wxAppCode__['packages/waimai-index-sub1/airdrop-layer/airdrop-layer.wxml'] = $gwx46_XC_0( './packages/waimai-index-sub1/airdrop-layer/airdrop-layer.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/waimai-index-sub1/airdrop-popup/airdrop-popup.wxml'] = [$gwx46_XC_0, './packages/waimai-index-sub1/airdrop-popup/airdrop-popup.wxml'];else __wxAppCode__['packages/waimai-index-sub1/airdrop-popup/airdrop-popup.wxml'] = $gwx46_XC_0( './packages/waimai-index-sub1/airdrop-popup/airdrop-popup.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/waimai-index-sub1/airdrop-tips/airdrop-tips.wxml'] = [$gwx46_XC_0, './packages/waimai-index-sub1/airdrop-tips/airdrop-tips.wxml'];else __wxAppCode__['packages/waimai-index-sub1/airdrop-tips/airdrop-tips.wxml'] = $gwx46_XC_0( './packages/waimai-index-sub1/airdrop-tips/airdrop-tips.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/waimai-index-sub1/bottom-guide/index.wxml'] = [$gwx46_XC_0, './packages/waimai-index-sub1/bottom-guide/index.wxml'];else __wxAppCode__['packages/waimai-index-sub1/bottom-guide/index.wxml'] = $gwx46_XC_0( './packages/waimai-index-sub1/bottom-guide/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/waimai-index-sub1/index.wxml'] = [$gwx46_XC_0, './packages/waimai-index-sub1/index.wxml'];else __wxAppCode__['packages/waimai-index-sub1/index.wxml'] = $gwx46_XC_0( './packages/waimai-index-sub1/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/waimai-index-sub1/sidebar/index.wxml'] = [$gwx46_XC_0, './packages/waimai-index-sub1/sidebar/index.wxml'];else __wxAppCode__['packages/waimai-index-sub1/sidebar/index.wxml'] = $gwx46_XC_0( './packages/waimai-index-sub1/sidebar/index.wxml' );
	;__wxRoute = "packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification";__wxRouteBegin = true;__wxAppCurrentFile__="packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification.js";define("packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../npm/wmfe/replace-component0_0_2/index").imgComponent({data:{showNotification:!1},methods:{showNotification:function(t){this.setData({showNotification:t})}}});
},{isPage:false,isComponent:true,currentFile:'packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification.js'});require("packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification.js");;__wxRoute = "packages/waimai-index-sub1/airdrop-container/airdrop-container";__wxRouteBegin = true;__wxAppCurrentFile__="packages/waimai-index-sub1/airdrop-container/airdrop-container.js";define("packages/waimai-index-sub1/airdrop-container/airdrop-container.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../npm/babel/runtime7_2_0/helpers/interopRequireDefault");exports.__esModule=!0,exports.tjJson=exports.getUserType=exports.getAirdropDomain=void 0;var a=e(require("../../../npm/babel/runtime7_2_0/regenerator/index")),t=require("../../../components/login-sdkV2/index"),n=require("../../../common/ad/ad"),i=require("../../../constants"),r=require("../../../api/activity-api").request,o=require("../../../utils/change-url-arg"),s=require("../../../api/analytics").view;exports.getUserType=function(e){return e?"30_user"===e?2:"15_user"===e?1:e:-1};exports.tjJson=function(e){var a={group_name:-1,exp_id:-1};try{var t=JSON.parse(e),n=t.userPortraitExpId,i=void 0===n?-1:n,r=t.userPortraitTypeExpId;a={group_name:i,exp_id:void 0===r?-1:r}}catch(e){}return a};var p=function(){var e={qa:"http://yy.c.waimai.test.sankuai.com/",st:"https://marketing.waimai.st.meituan.com/",prod:"https://marketing.waimai.meituan.com/"};return e[getApp().store.getState().dev.env]||e.prod};exports.getAirdropDomain=p,require("../../../npm/wmfe/replace-component0_0_2/index").imgComponent({properties:{paddingTop:{value:0,type:Number},paddingBottom:{value:0,type:Number},ifOnPullDownRefresh:{value:!1,type:Boolean},userId:String,uuid:String,lch:String,env:String,customTabBar:Object},data:{airdropCouponData:null,airdropPopupData:null,airdropLayerData:null,showAirDropLayer:!1,wlwcParams:null},attached:function(){var e=this;getApp().eventBus.on(i.EVENT.INDEX_HIDE,(function(){e.setData({showAirDropLayer:!1})}))},detached:function(){getApp().eventBus.off(i.EVENT.INDEX_HIDE)},methods:{getType:function(){switch(!0){case!!this.data.airdropCouponData:return"coupon";case!!this.data.airdropLayerData:return"activity";case!!this.data.newUserDiscount:return"newuser";default:return""}},airdropLogin:function(){this.triggerEvent("airdropLogin",!0)},showCloseAnimation:function(e){var a=this;e&&e.detail?this.setData({showAirDropLayer:!1}):(this.setData({showHideAnimate:!0}),setTimeout((function(){a.setData({showAirDropLayer:!1},(function(){}))}),300))},bgClick:function(e){var a=this.data.showTianjiangLayer;this.showCloseAnimation(e),a&&getApp().eventBus.fire("airdrop:close")},onClickAirdropLogin:function(e){var a=this;t.loginPlugin.wxLogin().then((function(){a.loadAirDropCoupon(e).then((function(){var e=a.selectComponent("#coupon");e&&e.onInit()}))}))},move:function(){},navToRedpackPage:function(e){var a=global.mmb.getUserInfoSync()||{},t=a.nickName,n=a.avatarUrl;e=o.changeUrlArg(e,"nickName",t),e=o.changeUrlArg(e,"avatarUrl",n);var i=encodeURI(e);wx.navigateTo({url:"/pages/web-view/web-view?isHideShareMenu=1&type=REDIRECT&redirectUrl="+encodeURIComponent(i)})},loadAirDropCoupon:function(e,t){var o,u,c,d,g,h,l,w,m,v,f,D,T,y,_,x,b,L,k,C,A,E,I,j,S,U=this;return a.default.async((function(q){for(;;)switch(q.prev=q.next){case 0:if(void 0===t&&(t=!1),o=global.mmb.getIdInfoSync()||{},u=o.openId,(e||!this._airdrop_loaded)&&u){q.next=4;break}return q.abrupt("return");case 4:if(q.prev=4,this.data.ifOnPullDownRefresh){q.next=51;break}return this._airdrop_loaded=!0,(0,n.adMonitor)(1),c=!0,q.next=11,a.default.awrap(wx.getSetting());case 11:return(d=q.sent)&&d.authSetting&&d.authSetting["scope.userLocation"]&&(c=!1),q.next=15,a.default.awrap(r({domain:p(),url:"o/wxapp/resource/position/tianJiang",method:"POST",successCode:0,useRealAppVersion:!0,ignoreLocation:c,data:{isJustLogin:!!e,openId:u}}));case 15:if(g=q.sent,h=g.resourceType,l=g.couponInfo,w=void 0===l?{}:l,m=g.luckySkyInfo,v=g.commonJson,f=!1,v&&(v.code&&"entrance_wxxinketianjiang5_et_code"===v.code||(D=v.dataList,T=void 0===D?[]:D,y=v.firstDisCount,T&&T.length>=3&&y>0&&(f=!0,this.setData({"newUserDiscount.airdropData":v})))),!e||1!=+h){q.next=29;break}_=w.tianJiangUi||{},x=_.wxNewUserDirectLink,b=w.code,x?(this.navToRedpackPage(x),this.setData({showAirDropLayer:!1,showTianjiangCoupon:!1})):999==+b?(s("b_Trk2q",{channel_id:1,is_new:1===w.activityId?1:0,is_login:w.needLogin?0:1}),this.toast({message:"抱歉您不符合活动条件，无法参加活动"})):this.setData({airdropCouponData:w,showTianjiangCoupon:!f,showTianjiangLayer:!1}),q.next=46;break;case 29:if(!h){q.next=45;break}if(1!=+h){q.next=38;break}L=Boolean(w.useTianJiangNewStyle),k=!f&&!L,this.setData({airdropCouponData:w,airdropPopupData:w,showTianjiangCoupon:k,showTianjiangLayer:!1}),s("b_ng3k2pgg",{is_suc:1}),k&&getApp().eventBus.fire(i.EVENT.BOTTOM_GUIDE_CLOSE),q.next=43;break;case 38:if(2!=+h){q.next=43;break}if(!t){q.next=41;break}return q.abrupt("return");case 41:this.setData({airdropLayerData:m,showTianjiangLayer:!f,showTianjiangCoupon:!1}),getApp().eventBus.fire(i.EVENT.BOTTOM_GUIDE_CLOSE);case 43:q.next=46;break;case 45:this.setData({showTianjiangCoupon:!1,showTianjiangLayer:!1});case 46:(this.data.showTianjiangCoupon||this.data.showTianjiangLayer)&&this.setData({showAirDropLayer:!0}),C=(w||{}).popupView,E=(A=void 0===C?{}:C).couponContent,I=A.couponLinkText,j=A.couponLinkUrl,S=A.couponStatus,wx.nextTick((function(){1==+S?(s("b_waimai_0oqi4i20_mv",{coupons_status:1}),E&&U.triggerEvent("toast",{message:E||""})):0==+S&&E&&I&&U.triggerEvent("airdropTips",{title:E||"",banner:I||"",url:j||""})})),h||w||m||v||this.data.showTianjiangLayer||this.setData({showAirDropLayer:!1});case 51:q.next=57;break;case 53:q.prev=53,q.t0=q.catch(4),s("b_ng3k2pgg",{is_suc:0}),this.setData({showTianjiangCoupon:!1,showTianjiangLayer:!1});case 57:case"end":return q.stop()}}),null,this,[[4,53]])}}});
},{isPage:false,isComponent:true,currentFile:'packages/waimai-index-sub1/airdrop-container/airdrop-container.js'});require("packages/waimai-index-sub1/airdrop-container/airdrop-container.js");;__wxRoute = "packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon";__wxRouteBegin = true;__wxAppCurrentFile__="packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon.js";define("packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e=require("../../../npm/babel/runtime7_2_0/helpers/interopRequireDefault"),t=e(require("../../../npm/babel/runtime7_2_0/helpers/extends")),a=e(require("../../../npm/babel/runtime7_2_0/regenerator/index")),i=require("../../../utils/webview-link-generator"),n=require("../../../utils/openWxChannel"),o=require("../../../constants"),r=require("../../../utils/throttle"),u=require("../../../api/analytics").event,s=require("../../../utils/schema");require("../../../npm/wmfe/replace-component0_0_2/index").imgComponent({properties:{airdropCouponData:Object,uuid:String,lch:String,env:String,userId:String,paddingTop:{type:Number,value:0},paddingBottom:{type:Number,value:0}},data:{hasCoupon:!1,showAirDropLayer:!1,templateData:[],useSuperMach:!1,useNestMach:!1,defaultPic:"https://p0.meituan.net/ingee/fa09b080d9eb2fc4b533f190f9d83c7611047.png",useNewMach:!0,isTestEnv:["qa"].includes(getApp().store.getState().dev.env),moduleIdStr:"wx_homepage_tianjiangA"},couponCount:0,attached:function(){return a.default.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.default.awrap(this.onInit());case 2:case"end":return e.stop()}}),null,this)},created:function(){return a.default.async((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}))},methods:{onInit:function(){var e,i,o,s,c,p,d,l,h,m,_,g,v,y,f,C,b,w,I,D,L,x,T,U,k,A,S,j,P,M,O,N,E,B,q,R=this;return a.default.async((function(a){for(;;)switch(a.prev=a.next){case 0:try{if(e=this.data.airdropCouponData,i=e.needLogin,o=e.activityId,s=e.templateData,c=e.styleType,p=e.templateId,d=this.data.airdropCouponData.tianJiangUi||{},l=d.tjUnloginPicUrl,h=d.tjSuccessHeadPicUrl,m=d.tjBgColor,_=d.tjButtonText,g=d.tjButtonTextColor,v=d.tjButtonColor,y=d.tjButtonDirectLink,f=d.wxNewUserDirectLink,C=d.tjUseButtonColor,b=d.tjUseButtonTextColor,w=d.entry_item_id,I=d.activity_id,this.couponCount=0,D=this.data.airdropCouponData.coupons||[],this.jumpHandle=r((function(e){(0,n.openWxChannel)(e)}),500),s)try{L=JSON.parse(s),"Array"===this.getDataType(L)&&1===c?(x=D.filter((function(e){return"POI"!==e.wmCouponSource})),L.forEach((function(e,t){if(e.feUseData={ad_type:e.adType,extInfo:e.feUseData,index:t},e.feUseData.extInfo.ad_type=e.adType||e.ad_type,e.feUseData.extInfo.machTemplateIndex=e.feUseData.extInfo.machTemplateIndex||t,e.isForceDedencyCoupon){var a=D.find((function(t){return(t.wmPoiIdList||[])[0]==e.poiId}));if(a){var i={title:a.couponDisplayName,amount:a.couponAmountOrDiscount,price_limit:a.orderAmountLimitDoc,coupon_type:a.poiCouponType,logo_url:a.brandCouponLogoUrl,direct_link:a.couponDirectLink,mutex_type:a.mutexType,advert_type:a.advertType,poi_id:e.poiId,coupon_id:a.id,coupon_view_id:a.couponViewId};e.feUseData=Object.assign(e.feUseData,i)}else e.templateFiltered=!0}e.templateFiltered||x.push({useMach:!0,templateId:e.templateId,feUseData:e.feUseData,wmCouponSource:"POI"})})),D=x,this.couponCount=Math.min(3,D.length)):"Array"===this.getDataType(L)&&3===c?(this.setData({useSuperMach:!0,templateData:L}),this.couponCount=1):"Array"===this.getDataType(L)&&4===c&&p&&this.setData({templateId:p,styleType:c,useNestMach:!0,templateData:L}),T=L.allowance_style||{},U=T.adType,k=T.chargeInfo,A=T.price,S=T.schema_url,U&&D.unshift({couponAmountOrDiscount:A,couponDirectLink:S,wmCouponSource:"ALLOWANCE",maiDianInfo:{adType:U,adPoiChargeInfo:k}})}catch(e){}j=0!==D.length&&4!==c,1!==o||this.data.useSuperMach||u({event_type:"view",val_bid:"b_6SDBh",val_lab:this.getCusVal(o,i)}),P=0,M=[],O=[],N=[],E=D.map((function(e,t){var a={advertType:e.advertType,advertIcon:e.advertIcon,couponDisplayName:e.couponDisplayName,brandCouponLogoUrl:e.brandCouponLogoUrl,wmActCouponTemplateId:e.wmActCouponTemplateId,orderAmountLimitDoc:e.orderAmountLimitDoc,useAllLimitsDoc:e.useAllLimitsDoc,couponValidTimeDoc:e.couponValidTimeDoc,couponAmountOrDiscount:e.couponAmountOrDiscount,maiDianInfo:e.maiDianInfo,wmCouponSource:e.wmCouponSource,wmCouponType:e.wmCouponType,skuInfoList:e.skuInfoList||[],mutexType:e.mutexType,couponDirectLink:e.couponDirectLink,wmPoiIdList:e.wmPoiIdList,wmCouponLimitShippingType:e.wmCouponLimitShippingType,wmActCouponChannelConfigId:e.wmActCouponChannelConfigId,marketingActivityId:e.marketingActivityId,couponConfigId:e.couponConfigId,useMach:e.useMach,templateId:e.templateId,feUseData:e.feUseData,orderAmountLimit:e.orderAmountLimit,couponStyleType:e.couponStyleType,couponDetail:e.couponDetail,leftLogoUrl:e.leftLogoUrl,rightPicUrl:e.rightPicUrl,couponStyleTypeExpId:e.couponStyleTypeExpId,couponType:e.couponType};a.brandCouponLogoUrl=R.imgCrop(a.brandCouponLogoUrl,180,180),a.skuInfoList.forEach((function(e){e.spuPictureUrl=R.imgCrop(e.spuPictureUrl,180,180)}));var i=(""+a.couponAmountOrDiscount).split("."),n=i[0],o=0;i.length>1&&n<100&&(o="."+i[1]),a.intMoney=n,a.pointMoney=o;var r=(""+a.orderAmountLimit).split("."),s=r[0],c=0;if(r.length>1&&s<100&&(c="."+r[1]),a.intLimit=s,a.pointLimit=c,!("POI"!==a.wmCouponSource&&"ALLOWANCE"!==a.wmCouponSource||(P+=1,a.useMach||R.data.useSuperMach))){var p={ad:{adChargeInfo:{},adType:""}},d=a.maiDianInfo;if(d&&d.adPoiChargeInfo){p.ad.adType=d.adType,p.ad.adChargeInfo=R.getMaiDianInfoObj(d.adPoiChargeInfo),p.ad.adChargeInfo.api_pos="P0_"+t,p.poi_id=(a.wmPoiIdList||[])[0],a.val_lab=p,u({event_type:"view",val_bid:"b_8cv3w9au",val_lab:p}),u({event_type:"view",val_bid:"b_yazui6yd",val_lab:p});for(var l=0;l<a.skuInfoList.length;l++){var h=Object.assign({},p);h.spu_id=a.skuInfoList[l].spuId,h.index=l,h.poi_index=t,u({event_type:"view",val_bid:"b_3or27oso",val_lab:h})}}}return M.push(e.wmActCouponChannelConfigId||"null"),O.push(e.marketingActivityId||"null"),N.push(e.couponConfigId||"null"),a})),j&&!E[0].useMach&&"POI"===E[0].wmCouponSource&&0===E[0].skuInfoList.length&&(j=!1),1===o&&(j?B="background:"+C+";color:"+b:j=!!l),1===o&&(l?u({event_type:"view",val_bid:"b_ZZQPc",val_lab:(0,t.default)({ad_num:P},this.getCusVal(o,i))}):this.data.useSuperMach||u({event_type:"view",val_bid:"b_waimai_vc515bi2_mv",val_lab:(0,t.default)({ad_num:P},this.getCusVal(o,i))})),this.data.useSuperMach||this.data.useNestMach||u({event_type:"view",val_bid:"b_cTwkJ",val_lab:{ad_num:P,coupon_id:N.join(","),channel_id:1,is_login:this.data.needLogin?0:1,is_new:1===this.data.activityId?1:0,Redchannel_id:M.slice(0,3).join(","),entry_item_id:O.slice(0,3).join(","),page_style_tag:0}}),q=j||this.data.useSuperMach||this.data.useNestMach,4!==c||this.data.useNestMach||(q=!1),q||this.triggerEvent("closeLayer",!0),!j||i||this.data.useNestMach||this.data.useSuperMach||this.headerPicShowReport(h,y,o,I,w),this.setData({hasCoupon:j,showAirDropLayer:q,gotoUseBtnStyle:B,coupons:E,tianJiangUi:{tjUnloginPicUrl:l,tjSuccessHeadPicUrl:h,tjBgColor:m,tjButtonText:_,tjButtonColor:v,tjButtonDirectLink:y,tjButtonTextColor:g,wxNewUserDirectLink:f},needLogin:i,activityId:o,maiDianExtraIno:this.getMaiDianExtraInfo()})}catch(e){}case 1:case"end":return a.stop()}}),null,this)},onMachError:function(e){var t,a="coupons["+e.currentTarget.dataset.index+"].templateFiltered";this.setData(((t={})[a]=!0,t)),this.couponCount-=1,0===this.couponCount&&this.triggerEvent("closeLayer",!0)},getDataType:function(e){return e?e instanceof Array?"Array":e instanceof Object?"Object":"":""},imgCrop:function(e,t,a){return/(p0|p1|p2|img)/.test(e)&&-1===e.indexOf("@")?e+"@"+t+"w_"+a+"h_1e_1c":e||""},jumpUrl:function(e,t){var o;return a.default.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(void 0===t&&(t=!1),t||this.triggerEvent("closeLayer"),!(0,n.isWxChannel)(e)){r.next=6;break}this.jumpHandle(e),r.next=18;break;case 6:if(!s.isAppPage(e)){r.next=10;break}wx.navigateTo({url:s.getAppPageUrl(e)}),r.next=18;break;case 10:if(!(e.match("pages/index/index")||e.match("pages/orders/orders")||e.match("pages/mine/mine"))){r.next=14;break}wx.switchTab({url:e}),r.next=18;break;case 14:return r.next=16,a.default.awrap((0,i.linkGeneratorAsync)({url:e,useUUID:!0}));case 16:o=r.sent,wx.navigateTo({url:o});case 18:case"end":return r.stop()}}),null,this)},goToUse:function(){this.headerPicClickReport(),this.jumpUrl(this.data.tianJiangUi.tjButtonDirectLink)},gotoFood:function(e){var t=e.currentTarget.dataset.url,a=e.currentTarget.dataset.index,i=e.currentTarget.dataset.skuindex,n=e.currentTarget.dataset.item,o=this.data.coupons[a].val_lab||{};o.spu_id=n.spuId,o.index=i,o.poi_index=a,u({event_type:"click",val_bid:"b_0w3urz8k",val_lab:o}),this.jumpUrl(t)},onClickUseCoupon:function(e){var t=e.currentTarget.dataset.url,a=e.currentTarget.dataset.index,i=this.data.coupons[a]||{},n=i.val_lab||{},o=i.wmCouponSource;i.useMach||(u({event_type:"click",val_bid:"b_am38wg1l",val_lab:n}),"POI"!==o&&"ALLOWANCE"!==o&&u({event_type:"click",val_bid:"b_waimai_uefk9fqh_mc",val_lab:{coupon_id:i.couponConfigId,channel_id:1,is_login:this.data.needLogin?0:1,is_new:1===this.data.activityId?1:0,Redchannel_id:i.wmActCouponChannelConfigId,entry_item_id:i.marketingActivityId,page_style_tag:0}}),t?this.jumpUrl(t):(this.setData({showAirDropLayer:!1}),this.triggerEvent("closeLayer")))},goToMyCoupon:function(){this.jumpUrl("/pages/my-coupons/my-coupons",!0)},newCloseLayerReport:function(){var e=(0,t.default)({is_superstyle:this.data.useSuperMach?1:0},this.getCusVal());u({event_type:"click",val_bid:"b_lQR9G",val_lab:e})},reportClose:function(){u({event_type:"click",val_bid:"b_fbl7w69q"}),this.newCloseLayerReport()},closeLayer:function(e){var t=e.currentTarget.dataset.mask,a=this.data.activityId;1==+t&&this.reportClose(),3==+t&&(1===a||u({event_type:"click",val_bid:"b_0o5mwhu9"}),this.newCloseLayerReport()),this.triggerEvent("closeLayer"),1!=+t&&3!=+t||getApp().eventBus.fire("airdrop:close")},getMaiDianInfoObj:function(e){for(var t={},a=e.split("&"),i=0;i<a.length;i++){var n=a[i];if(n){var o=n.split("=");o.length>1&&o[0]&&o[1]&&(t[o[0]]=o[1])}}return this.data.adChargeInfo=t,t},getMaiDianExtraInfo:function(){var e=[],t=getApp().store.getState().wx.model;return e.push("wm_ctype="+o.NAME),e.push("lch="+(this.data.lch||"wx")),this.data.uuid&&e.push("wm_did="+this.data.uuid),t&&e.push("wm_dtype="+t),e.join("&")},onClickAirdropLogin:function(){u({event_type:"click",val_bid:"b_u8INK",val_lab:this.getCusVal()}),this.triggerEvent("airdropLogin",!0)},getCusVal:function(e,t){return void 0===e&&(e=this.data.activityId),void 0===t&&(t=this.data.needLogin),{channel_id:1,is_new:1===e?1:0,is_login:t?0:1}},headerPicShowReport:function(e,t,a,i,n){e&&t&&u({event_type:"view",cid:"c_m84bv26",val_bid:"b_waimai_wb16rgtx_mv",val_lab:this.getHeaderPicParams(a,i,n)})},headerPicClickReport:function(){var e=this.data.airdropCouponData.tianJiangUi||{},t=e.tjSuccessHeadPicUrl,a=e.tjButtonDirectLink,i=e.entry_item_id,n=e.activity_id,o=(this.data.airdropCouponData||{}).activityId;t&&a&&u({event_type:"click",cid:"c_m84bv26",val_bid:"b_waimai_wb16rgtx_mc",val_lab:this.getHeaderPicParams(o,n,i)})},getHeaderPicParams:function(e,t,a){return void 0===e&&(e=this.data.activityId),{is_new:1===e?1:0,activity_id:t,entry_item_id:a}}}});
},{isPage:false,isComponent:true,currentFile:'packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon.js'});require("packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon.js");;__wxRoute = "packages/waimai-index-sub1/airdrop-layer/airdrop-layer";__wxRouteBegin = true;__wxAppCurrentFile__="packages/waimai-index-sub1/airdrop-layer/airdrop-layer.js";define("packages/waimai-index-sub1/airdrop-layer/airdrop-layer.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../npm/babel/runtime7_2_0/helpers/interopRequireDefault"),r=e(require("../../../npm/babel/runtime7_2_0/regenerator/index")),t=e(require("../../../components/webp/webp")),i=require("../../../components/login-sdkV2/index"),a=require("../../../utils/lx"),n=require("../../../utils/webview-link-generator"),o=require("../../../utils/openWxChannel"),s=require("../../../utils/schema"),p=require("../../../utils/throttle");require("../../../npm/wmfe/replace-component0_0_2/index").imgComponent({properties:{container:{type:Number,value:0},paddingBottom:{type:Number,value:0},airdropLayerData:{type:Object,value:{}}},data:{showAirdropLayer:!1,airdropLayerBackground:""},ready:function(){var e=this;try{var r=this.data.airdropLayerData;this.jumpHandle=p((function(r){(0,o.isWxChannel)(r)?(0,o.openWxChannel)(r):wx.navigateTo({url:(0,n.linkGeneratorSync)({url:e.data.airdropLayerData.linkUrl}),fail:function(){}})}),500),r.picUrl&&this.setData({showAirdropLayer:!0,airdropLayerBackground:(0,t.default)(r.picUrl)}),this.report(a.lxMge.view,"b_waimai_b95dnrjp_mv")}catch(e){}},methods:{report:function(e,t){var a,n;return r.default.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a=this.data.airdropLayerData,o.next=3,r.default.awrap(i.loginPlugin.getToken());case 3:if(!o.sent){o.next=7;break}o.t0=1,o.next=8;break;case 7:o.t0=0;case 8:n=o.t0,e(t,{entry_item_id:a.resourceId,pop_type:a.popType||0,is_login:n,channel_id:0});case 10:case"end":return o.stop()}}),null,this)},closeLayer:function(){this.reportClose(),this.triggerEvent("closeLayer",{}),getApp().eventBus.fire("airdrop:close")},reportClose:function(){this.report(a.lxMge.click,"b_waimai_7x85f9qm_mc")},jumpPromotionTab:function(){getApp().eventBus.fire("airdrop:switchPromotionTab")},onClickLayer:function(){this.report(a.lxMge.click,"b_waimai_qk89hxg2_mc");var e=this.data.airdropLayerData.linkUrl;(0,s.isValidScheme)(e)||(0,o.isWxChannel)(e)?this.jumpHandle(e):this.jumpPromotionTab(),this.setData({showAirdropLayer:!1}),this.triggerEvent("closeLayer")}}});
},{isPage:false,isComponent:true,currentFile:'packages/waimai-index-sub1/airdrop-layer/airdrop-layer.js'});require("packages/waimai-index-sub1/airdrop-layer/airdrop-layer.js");;__wxRoute = "packages/waimai-index-sub1/airdrop-popup/airdrop-popup";__wxRouteBegin = true;__wxAppCurrentFile__="packages/waimai-index-sub1/airdrop-popup/airdrop-popup.js";define("packages/waimai-index-sub1/airdrop-popup/airdrop-popup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e=require("../../../npm/babel/runtime7_2_0/helpers/interopRequireDefault"),t=e(require("../../../npm/babel/runtime7_2_0/regenerator/index")),a=e(require("../../../npm/babel/runtime7_2_0/helpers/toConsumableArray")),n=require("../../../utils/webview-link-generator"),i=require("../../../api/analytics").event,o=require("../../../utils/schema");require("../../../npm/wmfe/replace-component0_0_2/index").imgComponent({properties:{airdropPopupData:{type:Object,value:{},observer:function(e){var t=this;if(e)try{var n=global.grayModeInfo||{},o=n.grayInfo,r=void 0===o?{}:o,s=n.homeConfig,u=void 0===s?{}:s;"0"!==r.grayness_type&&this.setData({isGray:!0,grayString:u.graystring});var c=Boolean(e.useTianJiangNewStyle),p=JSON.parse(e.templateData||"[]");p.forEach((function(e,t){e.feUseData={ad_type:e.adType,extInfo:e.feUseData,index:t},e.feUseData.extInfo.ad_type=e.adType||e.ad_type,e.feUseData.extInfo.machTemplateIndex=e.feUseData.extInfo.machTemplateIndex||t}));var h=e.coupons||[],l=[].concat((0,a.default)(h),(0,a.default)(p)),d=wx.getSystemInfoSync(),g=wx.getMenuButtonBoundingClientRect(),f=Number(d.statusBarHeight),m=f+g.height+(g.top-f)*d.pixelRatio+86,v=m+438;if(c&&l.length){this.setData({showPopup:!0,machData:l,bjColor:e.newStyleBackgroundColor,paddingTop:m,top:v},(function(){t.setData({translateDown:!0}),setTimeout((function(){t.closePopup(0)}),(e.newStyleDuration||4e3)+1e3)}));var y=[],_=[],D=[];h.forEach((function(e){y.push(e.wmActCouponChannelConfigId||"null"),_.push(e.marketingActivityId||"null"),D.push(e.couponConfigId||"null")})),i({event_type:"view",val_bid:"b_cTwkJ",val_lab:{position_count:e.positionCount,channel_id:1,is_login:e.needLogin?0:1,is_new:1===e.activityId?1:0,coupon_id:D.join(","),Redchannel_id:y.slice(0,3).join(","),entry_item_id:_.slice(0,3).join(","),page_style_tag:1}})}}catch(e){this.closePopup(0)}}}},data:{showPopup:!1,translateDown:!1,isGray:!1,grayString:"",machData:[],isTestEnv:["qa"].includes(getApp().store.getState().dev.env),bjColor:"",moduleIdStr:"wx_homepage_tianjiangA",paddingTop:174,top:526},attached:function(){this.touchData={trace:[],touching:!1}},methods:{touchStart:function(e){if(1!==e.touches.length)return this.touchData.touching=!1,void(this.touchData.trace=[]);var t=e.touches&&e.touches[0];t&&(this.touchData.touching=!0,this.touchData.trace=[{x:t.screenX||t.clientX||t.pageX,y:t.screenY||t.clientY||t.pageY}])},touchMove:function(e){if(this.touchData.touching){var t=e.touches&&e.touches[0];this.touchData.trace.push({x:t.screenX||t.clientX||t.pageX,y:t.screenY||t.clientY||t.pageY})}},touchEnd:function(){this.touchData.touching&&(this.touchData.touching=!1,1===this.isUpslide()&&this.closePopup(1),this.touchData.trace=[])},isUpslide:function(){var e=this.touchData.trace||[],t=e.length;if(t<2)return!1;var a=e[0],n=e[t-1];return!!(a&&n&&n.y&&a.y)&&(a.y>n.y+10?1:0)},closePopup:function(e){var t=this;void 0===e&&(e=0),this.data.showPopup&&(1===e&&i({event_type:"click",val_bid:"b_waimai_xvlr5qpi_mc",val_lab:{mode:e}}),this.setData({translateDown:!1},(function(){setTimeout((function(){t.setData({showPopup:!1})}),1e3)})))},jumpUrl:function(e){var a,i,r;return t.default.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(a=e.detail.url,i=void 0===a?"":a){s.next=3;break}return s.abrupt("return");case 3:if(!o.isAppPage(i)){s.next=7;break}wx.navigateTo({url:o.getAppPageUrl(i)}),s.next=15;break;case 7:if(!(i.match("pages/index/index")||i.match("pages/orders/orders")||i.match("pages/mine/mine"))){s.next=11;break}wx.switchTab({url:i}),s.next=15;break;case 11:return s.next=13,t.default.awrap((0,n.linkGeneratorAsync)({url:i,useUUID:!0}));case 13:r=s.sent,wx.navigateTo({url:r});case 15:case"end":return s.stop()}}))},onMachError:function(e){var t,a="coupons["+e.currentTarget.dataset.index+"].templateFiltered";this.setData(((t={})[a]=!0,t)),this.couponCount-=1,0===this.couponCount&&this.closePopup(0)}}});
},{isPage:false,isComponent:true,currentFile:'packages/waimai-index-sub1/airdrop-popup/airdrop-popup.js'});require("packages/waimai-index-sub1/airdrop-popup/airdrop-popup.js");;__wxRoute = "packages/waimai-index-sub1/airdrop-tips/airdrop-tips";__wxRouteBegin = true;__wxAppCurrentFile__="packages/waimai-index-sub1/airdrop-tips/airdrop-tips.js";define("packages/waimai-index-sub1/airdrop-tips/airdrop-tips.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../api/analytics"),i=e.view,t=e.click,a=0,o=1,n=0;require("../../../npm/wmfe/replace-component0_0_2/index").imgComponent({properties:{show:{type:Boolean,value:!1},airdropTipProps:Object},ready:function(){var e=this;this.data.show&&(i("b_waimai_0oqi4i20_mv",{coupons_status:0}),clearTimeout(a),this.setData({active:!0}),wx.nextTick((function(){a=setTimeout((function(){return e.hide()}),3e3)})))},data:{active:!1},methods:{hide:function(){var e=this;this.setData({active:!1}),clearTimeout(o),o=setTimeout((function(){wx.nextTick((function(){e.triggerEvent("hide")}))}),400)},goBannerLink:function(){t("b_waimai_0oqi4i20_mc",{coupons_status:0}),this.data.airdropTipProps.url&&wx.navigateTo({url:"/pages/web-view/web-view?type=DIRECT&webviewUrl="+encodeURIComponent(this.data.airdropTipProps.url)})},touchStart:function(e){n=e.touches[0].pageY},touchEnd:function(e){e.changedTouches[0].pageY-n<-10?this.hide():this.goBannerLink()}}});
},{isPage:false,isComponent:true,currentFile:'packages/waimai-index-sub1/airdrop-tips/airdrop-tips.js'});require("packages/waimai-index-sub1/airdrop-tips/airdrop-tips.js");;__wxRoute = "packages/waimai-index-sub1/bottom-guide/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/waimai-index-sub1/bottom-guide/index.js";define("packages/waimai-index-sub1/bottom-guide/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../utils/lx"),i=require("../../../constants"),t=require("../../../pages/index/constants"),a=null,o=-1!==getApp().globalData.system.phoneSystem.indexOf("iOS");require("../../../npm/wmfe/replace-component0_0_2/index").imgComponent({properties:{guideData:{type:Object,value:{display_msg:"",anim_url:"",wait_sec:"",back_wait_sec:"",gap_day:""}},indexPageOnHide:{type:Boolean,value:!1},noShowFlag:{type:Boolean,value:!1}},observers:{guideData:function(e){e&&this.setData({displayMsg:e.display_msg||"上滑发现更多美味",animUrl:o?t.GUIDE_ICON.gif:e.anim_url||t.GUIDE_ICON.webp})}},data:{showGuide:!1,hasShownGuide:!1,displayMsg:"",animUrl:""},lifetimes:{attached:function(){var e=this,t=getApp().eventBus;t.on(i.EVENT.BOTTOM_GUIDE,(function(i){e.data.showGuide&&"onShow"!==i?e.closeGuide():e.handleGuideShow()})),t.on(i.EVENT.BOTTOM_GUIDE_CLOSE,(function(i){e.closeGuide(),"pageScroll"!==i&&"gotoBList"!==i||(e.properties.noShowFlag=!0)})),t.on(i.EVENT.INDEX_HIDE,(function(){e.data.showGuide||a&&clearTimeout(a),e.properties.indexPageOnHide=!0})),t.on("airdrop:close",(function(){e.handleGuideShow()})),t.on(i.EVENT.MILI_GUIDE,(function(i){i?e.closeGuide():e.handleGuideShow()}))},detached:function(){a&&clearTimeout(a)}},methods:{handleGuideShow:function(){var i=this;if(!(this.properties.noShowFlag||this.data.hasShownGuide||this.data.showGuide)){var t=this.properties.guideData||{},o=t.wait_sec,n=t.back_wait_sec,s=t.gap_day;if(o&&n&&s&&this.checkGapDay()){var r=this.properties.indexPageOnHide?Number(n):Number(o);a&&clearTimeout(a),a=setTimeout((function(){i.setData({showGuide:!0},(function(){i.setData({hasShownGuide:!0})})),e.lxMge.view("b_waimai_0o68rol4_mv",{trigger_source:i.properties.indexPageOnHide?2:1}),i.setGuideStorage()}),1e3*r)}}},closeGuide:function(){this.setData({showGuide:!1}),a&&clearTimeout(a)},checkGapDay:function(){var e=!1,i=wx.getStorageSync("BOTTOM_GUIDE_SHOW_STORAGE");if(i){var t=(new Date).getTime(),a=i.endTime,o=i.hasShown;t>=a?e=!0:o||(e=!0)}else e=!0;return e},setGuideStorage:function(){var e=(new Date).getTime(),i=24*Number(this.properties.guideData.gap_day)*60*60*1e3;wx.setStorageSync("BOTTOM_GUIDE_SHOW_STORAGE",{hasShown:1,endTime:e+i})},clickBottomGuide:function(){this.triggerEvent("listScrollToTop"),e.lxMge.click("b_waimai_0o68rol4_mc",{trigger_source:this.properties.indexPageOnHide?2:1})}}});
},{isPage:false,isComponent:true,currentFile:'packages/waimai-index-sub1/bottom-guide/index.js'});require("packages/waimai-index-sub1/bottom-guide/index.js");;__wxRoute = "packages/waimai-index-sub1/sidebar/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/waimai-index-sub1/sidebar/index.js";define("packages/waimai-index-sub1/sidebar/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../npm/babel/runtime7_2_0/helpers/interopRequireDefault")(require("../../../npm/babel/runtime7_2_0/regenerator/index")),t=require("../../../api/index").sidebar,i=require("../../../api/analytics"),a=i.view,r=i.click,n=1,s=2;require("../../../npm/wmfe/replace-component0_0_2/index").imgComponent({data:{imageUrl:"",showSideBar:!1,aniStatus:n},properties:{resourceId:{type:String,value:""},activity_type:{type:String,value:""},common_url:{type:String,value:""}},attached:function(){this.getSidebarData()},methods:{getSidebarData:function(){var i,r,n,s,p,c,o,u,m;return e.default.async((function(_){for(;;)switch(_.prev=_.next){case 0:return _.prev=0,_.next=3,e.default.awrap(t());case 3:if(i=_.sent,!((r=i.positions)&&r.length>0)){_.next=17;break}if(!((n=r[0].resources)&&n.length>0)){_.next=17;break}if(s=n[0],p=s.config,c=s.resourceId,o=p.pic_url,u=p.activity_type,m=p.common_url,!o||!m){_.next=17;break}return this.setData({imageUrl:o,showSideBar:!0}),this.properties.common_url=m,this.properties.resourceId=c,this.properties.activity_type=u,a("b_waimai_91crs5ym_mv",{entry_item_id:c,activity_type:u,appname:"waimai_wxapp"}),_.abrupt("return",!0);case 17:return _.abrupt("return",!1);case 20:_.prev=20,_.t0=_.catch(0);case 22:case"end":return _.stop()}}),null,this,[[0,20]])},closeSideBar:function(){this.setData({showSideBar:!1}),r("b_waimai_xt732t2v_mc",{entry_item_id:this.properties.resourceId,activity_type:this.properties.activity_type,appname:"waimai_wxapp"})},setSideBarAni:function(e){this.data.showSideBar&&(1===e?this.data.aniStatus!==n&&this.setData({aniStatus:n}):this.data.aniStatus!==s&&this.setData({aniStatus:s}))},onClickSidebar:function(){r("b_waimai_91crs5ym_mc",{entry_item_id:this.properties.resourceId,activity_type:this.properties.activity_type,appname:"waimai_wxapp"}),wx.navigateTo({url:""+this.properties.common_url})}}});
},{isPage:false,isComponent:true,currentFile:'packages/waimai-index-sub1/sidebar/index.js'});require("packages/waimai-index-sub1/sidebar/index.js");;__wxRoute = "packages/waimai-index-sub1/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/waimai-index-sub1/index.js";define("packages/waimai-index-sub1/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Page({});
},{isPage:true,isComponent:true,currentFile:'packages/waimai-index-sub1/index.js'});require("packages/waimai-index-sub1/index.js");$gwx46_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx46_XC_1 || [];
function gz$gwx46_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx46_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx46_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx46_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx46_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx46_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx46_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx46_XC_1=true;
var x=['./packages/waimai-index-sub1/inflate-rule-popup/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx46_XC_1_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx46_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx46_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/waimai-index-sub1/inflate-rule-popup/index.wxml'] = [$gwx46_XC_1, './packages/waimai-index-sub1/inflate-rule-popup/index.wxml'];else __wxAppCode__['packages/waimai-index-sub1/inflate-rule-popup/index.wxml'] = $gwx46_XC_1( './packages/waimai-index-sub1/inflate-rule-popup/index.wxml' );
	;__wxRoute = "packages/waimai-index-sub1/inflate-rule-popup/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/waimai-index-sub1/inflate-rule-popup/index.js";define("packages/waimai-index-sub1/inflate-rule-popup/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../npm/wmfe/replace-component0_0_2/index").imgComponent({properties:{show:{type:Boolean,value:!1},title:{type:String,value:""},detail:{type:Array,value:[]}},methods:{onClose:function(){this.triggerEvent("close")},preventBubble:function(){}}});
},{isPage:false,isComponent:true,currentFile:'packages/waimai-index-sub1/inflate-rule-popup/index.js'});require("packages/waimai-index-sub1/inflate-rule-popup/index.js");$gwx46_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx46_XC_2 || [];
function gz$gwx46_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx46_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx46_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx46_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx46_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx46_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx46_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx46_XC_2=true;
var x=['./packages/waimai-index-sub1/rolling-number/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx46_XC_2_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx46_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx46_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/waimai-index-sub1/rolling-number/index.wxml'] = [$gwx46_XC_2, './packages/waimai-index-sub1/rolling-number/index.wxml'];else __wxAppCode__['packages/waimai-index-sub1/rolling-number/index.wxml'] = $gwx46_XC_2( './packages/waimai-index-sub1/rolling-number/index.wxml' );
	;__wxRoute = "packages/waimai-index-sub1/rolling-number/index";__wxRouteBegin = true;__wxAppCurrentFile__="packages/waimai-index-sub1/rolling-number/index.js";define("packages/waimai-index-sub1/rolling-number/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../npm/wmfe/replace-component0_0_2/index").imgComponent({properties:{customClassName:{type:String,value:""},startAmount:{type:Number,value:0,observer:"onStartAmountChange"},endAmount:{type:Number,value:0,observer:"onEndAmountChange"},numberTextSize:{type:Number,value:36},yuanSymbolSize:{type:Number,value:18},customFontFamily:{type:String,value:"MeituanDigitalType-Bold"},yuanMarginBottom:{type:Number,value:0},numberTextColor:{type:String,value:"#FF2D19"},yuanSymbolColor:{type:String,value:"#FF2D19"},startAnim:{type:Boolean,value:!1,observer:"onStartAnimChange"},duration:{type:Number,value:1e3}},data:{numbers:[],currentIndex:0},attached:function(){},methods:{generateNumberList:function(t,e){for(var n=[],r=0;r<9;r++){var a=Math.floor(90*Math.random())+10;n.push(a)}return n.push(e),n},onStartAmountChange:function(t){var e=this.generateNumberList(t,t);this.setData({numbers:e,currentIndex:0})},onEndAmountChange:function(t){this.data.startAnim&&this.startAnimation(t)},onStartAnimChange:function(t){t?this.startAnimation(this.properties.endAmount):this.setData({numbers:[this.properties.startAmount],currentIndex:0})},startAnimation:function(t){var e=this,n=this.generateNumberList(this.properties.startAmount,t);this.setData({numbers:n,currentIndex:0},(function(){wx.nextTick((function(){e.setData({currentIndex:n.length-1})}))}))}}});
},{isPage:false,isComponent:true,currentFile:'packages/waimai-index-sub1/rolling-number/index.js'});require("packages/waimai-index-sub1/rolling-number/index.js");<script>var __setCssStartTime__=Date.now();if(typeof __insertRootCompCss__==='function')__insertRootCompCss__('packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification');else __wxAppCode__['packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification.wxss']();;var __setCssEndTime__=Date.now();(function(){var gf=$gwx46_XC_0('./packages/waimai-index-sub1/airdrop-after-notification/airdrop-after-notification.wxml');if(window.__wxAppCodeReadyCallback__)window.__wxAppCodeReadyCallback__(gf);else document.dispatchEvent(new CustomEvent('generateFuncReady',{detail:{generateFunc:gf}}));})();</script><script>var __setCssStartTime__=Date.now();if(typeof __insertRootCompCss__==='function')__insertRootCompCss__('packages/waimai-index-sub1/airdrop-container/airdrop-container');else __wxAppCode__['packages/waimai-index-sub1/airdrop-container/airdrop-container.wxss']();;var __setCssEndTime__=Date.now();(function(){var gf=$gwx46_XC_0('./packages/waimai-index-sub1/airdrop-container/airdrop-container.wxml');if(window.__wxAppCodeReadyCallback__)window.__wxAppCodeReadyCallback__(gf);else document.dispatchEvent(new CustomEvent('generateFuncReady',{detail:{generateFunc:gf}}));})();</script><script>var __setCssStartTime__=Date.now();if(typeof __insertRootCompCss__==='function')__insertRootCompCss__('packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon');else __wxAppCode__['packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon.wxss']();;var __setCssEndTime__=Date.now();(function(){var gf=$gwx46_XC_0('./packages/waimai-index-sub1/airdrop-coupon/airdrop-coupon.wxml');if(window.__wxAppCodeReadyCallback__)window.__wxAppCodeReadyCallback__(gf);else document.dispatchEvent(new CustomEvent('generateFuncReady',{detail:{generateFunc:gf}}));})();</script><script>var __setCssStartTime__=Date.now();if(typeof __insertRootCompCss__==='function')__insertRootCompCss__('packages/waimai-index-sub1/airdrop-layer/airdrop-layer');else __wxAppCode__['packages/waimai-index-sub1/airdrop-layer/airdrop-layer.wxss']();;var __setCssEndTime__=Date.now();(function(){var gf=$gwx46_XC_0('./packages/waimai-in