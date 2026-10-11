var __wxAppData=__wxAppData||{};var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};if(this&&this.__g===undefined)Object.defineProperty(this,"__g",{configurable:false,enumerable:false,writable:false,value:function(){function D(e,t){if(typeof t!="undefined")e.children.push(t)}function S(e){if(typeof e!="undefined")return{tag:"virtual",wxKey:e,children:[]};return{tag:"virtual",children:[]}}function v(e){return{tag:"wx-"+e,attr:{},children:[],n:[],raw:{},generics:{}}}function e(e,t){t&&e.properities.push(t)}function t(e,t,r){return typeof e[r]!="undefined"?e[r]:t[r]}function u(e){console.warn("WXMLRT_"+g+":"+e)}function r(e,t){u(t+":-1:-1:-1: Template `"+e+"` is being called recursively, will be stop.")}var s=console.warn;var n=console.log;function o(){function e(){}e.prototype={hn:function(e,t){if(typeof e=="object"){var r=0;var n=false,o=false;for(var a in e){n=n|a==="__value__";o=o|a==="__wxspec__";r++;if(r>2)break}return r==2&&n&&o&&(t||e.__wxspec__!=="m"||this.hn(e.__value__)==="h")?"h":"n"}return"n"},nh:function(e,t){return{__value__:e,__wxspec__:t?t:true}},rv:function(e){return this.hn(e,true)==="n"?e:this.rv(e.__value__)},hm:function(e){if(typeof e=="object"){var t=0;var r=false,n=false;for(var o in e){r=r|o==="__value__";n=n|o==="__wxspec__";t++;if(t>2)break}return t==2&&r&&n&&(e.__wxspec__==="m"||this.hm(e.__value__))}return false}};return new e}var A=o();function T(e){var t=e.split("\n "+" "+" "+" ");for(var r=0;r<t.length;++r){if(0==r)continue;if(")"===t[r][t[r].length-1])t[r]=t[r].replace(/\s\(.*\)$/,"");else t[r]="at anonymous function"}return t.join("\n "+" "+" "+" ")}function a(M){function m(e,t,r,n,o){var a=false;var i=e[0][1];var p,u,l,f,v,c;switch(i){case"?:":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case"/":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";__wxCodeSpace__.addComponentStaticConfig('touchmatrix_bundles/index',{"component":true,"usingComponents":{"weapp-comp-privacy":"../privacy/components/index"}});__wxCodeSpace__.enableCodeChunk();__wxCodeSpace__.initializeCodeChunk("touchmatrix_bundles/chunk_0",["touchmatrix_bundles/index"]);var __globalThis=(typeof __vd_version_info__!=='undefined'&&typeof __vd_version_info__.globalThis!=='undefined')?__vd_version_info__.globalThis:window;var __webviewId__=__webviewId__;var __wxAppCode__= __wxAppCode__||{};var __subPageFrameReady__=__globalThis.__subPageFrameReady__||function(){};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var __subPageFrameStartTime__=Date.now();;/*v0.5vv_20211229_syb_scopedata*/__globalThis.__wcc_version__='v0.5vv_20211229_syb_scopedata';__globalThis.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
var outerGlobal=typeof __globalThis==='undefined'?window:__globalThis;$gwx45=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx45 || [];
__WXML_GLOBAL__.ops_set.$gwx45=z;
__WXML_GLOBAL__.ops_init.$gwx45=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=[];if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx45";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx45();;var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){var BASE_DEVICE_WIDTH = 750;
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
setCssToHead(["[is\x3d\x22npm/r2x/module-container/lib/container/index\x22]{position:relative}\n[is\x3d\x22outer_packages/mactivitydyna/pages/redpacket/components/redpacket-cell-compose/index\x22]{display:block}\n[is\x3d\x22outer_packages/mactivitydyna/pages/redpacket/components/redpacket-filter-compose/index\x22]{display:block}\n[is\x3d\x22packages/coupon_package/mach_pro_waimai_coupon_detail/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-index-template/mach_pro_waimai_homepage_b_list_wx/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-index-template/mach_pro_waimai_homepage_horizontal_double_windows/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-index-template/mach_pro_waimai_homepage_mix_windows/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-restaurant-template/coupon_exchange_goods/mach_pro_waimai_coupon_exchange_goods/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-restaurant-template/mach_pro_waimai_restaurant_combo_page_general/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-restaurant-template/mach_pro_waimai_restaurant_poi_detail_upgrade/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/machpro-restaurant-template/mach_pro_waimai_restaurant_shop_cart_main/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/member/machpro-components/mach_pro_waimai_restaurant_membership_float_layer_style_0/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/member/machpro-components/mach_pro_waimai_select_redpacket_style_0/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/mine/mine/mach_pro_waimai_mine/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/restaurant/restaurant/mach_pro_waimai_restaurant_food_list_page/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/restaurant/restaurant/mach_pro_waimai_restaurant_page_new_next/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/search-business/search-guide/mach_pro_waimai_search_guide/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/search-business/search-guide/mach_pro_waimai_search_suggest/custom-component/components/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/search-business/search/mach_pro_waimai_search_result_list/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/shooter/mach_pro_waimai_coupon_package_sell/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/shooter/mach_pro_waimai_coupon_select/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/shooter/my_expire_coupon_list/mach_pro_waimai_my_expire_coupon_list/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/shooter/self_take_coupon_list/mach_pro_waimai_self_take_coupon_list/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/transaction/machpro-components/mach_pro_waimai_favorite_footprint/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/transaction/machpro-components/mach_pro_waimai_order_list/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/transaction/machpro-components/mach_pro_waimai_order_middle/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/transaction/machpro-components/mach_pro_waimai_order_search/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/transaction/machpro-components/mach_pro_waimai_similar_poi/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22packages/waimai-self-pick/homepage/mach_pro_waimai_homepage_self_pick/custom-component/components/list/list\x22]{height:100%;width:100%}\n[is\x3d\x22pages/index/components/mt-back/mt-back\x22]{-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}\n[is\x3d\x22sub_medicine2/medicine2/pages/wmp/drug-poi/scroll-view/scroll-view\x22]{display:block;overflow:hidden;position:relative}\n[is\x3d\x22sub_pages/allowance-fission/npm_components/miniprogram-recycle-view/recycle-item\x22]{display:inline-block}\n[is\x3d\x22sub_pages/allowance-fission/npm_components/miniprogram-recycle-view/recycle-view\x22]{display:block;width:100%}\n[is\x3d\x22sub_shangou/sg/npm/r2x/module-container/lib/container/index\x22]{position:relative}\n[is\x3d\x22sub_shangou/sg/sub-trade/restaurant/sg-scroll-view/sg-scroll-view\x22]{display:block;overflow:hidden;position:relative}\n[is\x3d\x22waimai-bargain-sub2/_migration_/waimai-bargain-sub1/billSdk/components/phfSpecPopup/components/specPackage/foldPart/index\x22]{display:block;width:100%}\n[is\x3d\x22waimai-bargain-sub3/_migration_/waimai-bargain-sub1/billSdk/components/phfSpecPopup/components/specPackage/foldPart/index\x22]{display:block;width:100%}\n",])();setCssToHead([],undefined,{path:"./touchmatrix_bundles/app.wxss"})();;;}var __subPageFrameEndTime__=Date.now();__subPageFrameReady__('/touchmatrix_bundles/');$gwx45_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx45_XC_0 || [];
function gz$gwx45_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx45_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx45_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx45_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTouchEnd'])
Z([3,'onTouchMove'])
Z([3,'onTouchStart'])
Z([3,'index'])
Z([a,[3,'transform: translate3d(0, '],[[7],[3,'translateY']],[3,', 0);transition:'],[[2,'?:'],[[7],[3,'isPageChange']],[1,'none'],[1,'all .5s ease-in;']]])
Z([[2,'?:'],[[2,'!=='],[[7],[3,'matrixViewType']],[1,'waimai-mach-marketing-push-style-1-module']],[1,'container-width hide'],[1,'container-width']])
Z([3,'superalter'])
Z([3,'header'])
Z([3,'kangarooimg'])
Z([3,'https://p0.meituan.net/travelcube/ca275ebaab7d2a813dc9f3ed0a4b39582140.png'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'matrixViewData']],[3,'title']]])
Z([3,'footer'])
Z([3,'descripition'])
Z([a,[[6],[[7],[3,'matrixViewData']],[3,'text']]])
Z([3,'more'])
Z([3,'rectangle'])
Z([3,'rightarrow'])
Z([3,'https://s3plus.meituan.net/v1/mss_1ada830d56584ddeae1b0899c231c552/source/INGEE_SOURCEFILE/2285031/ingeetemp/1582874105180/assets/%E7%AE%AD%E5%A4%B4%402x.png'])
Z([[2,'?:'],[[2,'!=='],[[7],[3,'matrixViewType']],[1,'waimai-mach-marketing-push-style-2-module']],[1,'container-width hide'],[1,'container-width']])
Z([3,'superalter_withimg'])
Z([3,'imgbig'])
Z([3,'true'])
Z([[6],[[7],[3,'matrixViewData']],[3,'picUrl']])
Z([3,'col'])
Z(z[10])
Z([a,z[11][1]])
Z(z[12])
Z(z[13])
Z([a,z[14][1]])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[18])
Z([[2,'?:'],[[2,'!=='],[[7],[3,'matrixViewType']],[1,'mach_waimai-marketing-home-page-touch-matrix-redpacket-module']],[1,'container-width hide'],[1,'container-width']])
Z([3,'redenvelope'])
Z(z[10])
Z([a,[[6],[[7],[3,'matrixViewData']],[3,'hint']]])
Z([3,'voucher'])
Z([3,'col1'])
Z([3,'price'])
Z([3,'sign'])
Z([a,[[2,'?:'],[[2,'=='],[[6],[[7],[3,'matrixViewData']],[3,'couponType']],[1,'1']],[1,'￥'],[1,'']]])
Z([a,[[6],[[7],[3,'matrixViewData']],[3,'amount']]])
Z(z[41])
Z([a,[[2,'?:'],[[2,'=='],[[6],[[7],[3,'matrixViewData']],[3,'couponType']],[1,'2']],[1,'折'],[1,'']]])
Z([3,'rule'])
Z([a,[[6],[[7],[3,'matrixViewData']],[3,'threshold']]])
Z([3,'col2'])
Z([3,'type'])
Z([a,[[6],[[7],[3,'matrixViewData']],[3,'name']]])
Z([3,'deadline'])
Z([a,[[6],[[7],[3,'matrixViewData']],[3,'validPeriod']]])
Z([3,'usebtn'])
Z([a,[[2,'||'],[[6],[[7],[3,'matrixViewData']],[3,'buttonName']],[1,'去使用']]])
Z([[2,'?:'],[[2,'!=='],[[7],[3,'matrixViewType']],[1,'waimai-mach-marketing-push-no-goods-module']],[1,'container-width hide'],[1,'container-width']])
Z([3,'live-push__content'])
Z([3,'live-push__poi-image__wrapper'])
Z([3,'live-push__poi-image'])
Z(z[22])
Z(z[23])
Z([3,'live-push__poi-image__border'])
Z([3,'live-push__poi-image__icon-live__wrapper'])
Z([3,'live-push__poi-image__icon-live'])
Z([3,'https://s3plus.meituan.net/v1/mss_0e4451a82e1d428f9fc3b99c0b3ebf15/pic-manager/7332ab2269877106/icon.gif'])
Z([3,'live-push__center'])
Z([3,'live-push__title'])
Z([a,z[11][1]])
Z([3,'live-push__subtitle'])
Z([a,z[14][1]])
Z([3,'live-push__btn'])
Z([3,'去看看'])
Z([[2,'?:'],[[2,'!=='],[[7],[3,'matrixViewType']],[1,'waimai-mach-marketing-push-has-goods-module']],[1,'container-width hide'],[1,'container-width']])
Z(z[56])
Z(z[57])
Z(z[58])
Z(z[22])
Z(z[23])
Z(z[61])
Z(z[62])
Z(z[63])
Z(z[64])
Z(z[65])
Z(z[66])
Z([a,z[11][1]])
Z(z[68])
Z([3,'margin-top: 6rpx'])
Z([3,'color-red font-family-PingFangSC'])
Z([3,'font-weight: 500'])
Z([3,'直播价 '])
Z([3,'color-red text-weight-700 font-family-AvenirLTPro'])
Z([3,'¥'])
Z([3,'color-red text-20 text-weight-700 font-family-AvenirLTPro'])
Z([3,'margin-bottom: 6rpx'])
Z([a,[[2,'||'],[[6],[[7],[3,'matrixViewData']],[3,'currentPriceInteger']],[1,'']]])
Z([[6],[[7],[3,'matrixViewData']],[3,'currentPriceDecimal']])
Z(z[90])
Z([a,[[2,'+'],[1,'.'],[[6],[[7],[3,'matrixViewData']],[3,'currentPriceDecimal']]]])
Z([3,'color-gray text-weight-500 font-family-AvenirLTPro'])
Z([a,[[2,'||'],[[2,'+'],[1,' ¥'],[[6],[[7],[3,'matrixViewData']],[3,'originPrice']]],[1,'']]])
Z(z[70])
Z(z[71])
})(__WXML_GLOBAL__.ops_cached.$gwx45_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx45_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx45_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx45_XC_0=true;
var x=['./touchmatrix_bundles/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx45_XC_0_1()
var oB=_mz(z,'view',['catchtouchend',0,'catchtouchmove',1,'catchtouchstart',1,'class',2,'style',3],[],e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',5,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',6,e,s,gg)
var fE=_n('view')
_rz(z,fE,'class',7,e,s,gg)
var cF=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(fE,cF)
var hG=_n('text')
_rz(z,hG,'class',10,e,s,gg)
var oH=_oz(z,11,e,s,gg)
_(hG,oH)
_(fE,hG)
_(oD,fE)
var cI=_n('view')
_rz(z,cI,'class',12,e,s,gg)
var oJ=_n('text')
_rz(z,oJ,'class',13,e,s,gg)
var lK=_oz(z,14,e,s,gg)
_(oJ,lK)
_(cI,oJ)
var aL=_n('view')
_rz(z,aL,'class',15,e,s,gg)
var tM=_n('view')
_rz(z,tM,'class',16,e,s,gg)
_(aL,tM)
var eN=_mz(z,'image',['class',17,'src',1],[],e,s,gg)
_(aL,eN)
_(cI,aL)
_(oD,cI)
_(xC,oD)
_(oB,xC)
var bO=_n('view')
_rz(z,bO,'class',19,e,s,gg)
var oP=_n('view')
_rz(z,oP,'class',20,e,s,gg)
var xQ=_mz(z,'image',['class',21,'forceHttps',1,'src',2],[],e,s,gg)
_(oP,xQ)
var oR=_n('view')
_rz(z,oR,'class',24,e,s,gg)
var fS=_n('text')
_rz(z,fS,'class',25,e,s,gg)
var cT=_oz(z,26,e,s,gg)
_(fS,cT)
_(oR,fS)
var hU=_n('view')
_rz(z,hU,'class',27,e,s,gg)
var oV=_n('text')
_rz(z,oV,'class',28,e,s,gg)
var cW=_oz(z,29,e,s,gg)
_(oV,cW)
_(hU,oV)
var oX=_n('view')
_rz(z,oX,'class',30,e,s,gg)
var lY=_n('view')
_rz(z,lY,'class',31,e,s,gg)
_(oX,lY)
var aZ=_mz(z,'image',['class',32,'src',1],[],e,s,gg)
_(oX,aZ)
_(hU,oX)
_(oR,hU)
_(oP,oR)
_(bO,oP)
_(oB,bO)
var t1=_n('view')
_rz(z,t1,'class',34,e,s,gg)
var e2=_n('view')
_rz(z,e2,'class',35,e,s,gg)
var b3=_n('view')
_rz(z,b3,'class',36,e,s,gg)
var o4=_oz(z,37,e,s,gg)
_(b3,o4)
_(e2,b3)
var x5=_n('view')
_rz(z,x5,'class',38,e,s,gg)
var o6=_n('view')
_rz(z,o6,'class',39,e,s,gg)
var f7=_n('view')
_rz(z,f7,'class',40,e,s,gg)
var c8=_n('text')
_rz(z,c8,'class',41,e,s,gg)
var h9=_oz(z,42,e,s,gg)
_(c8,h9)
_(f7,c8)
var o0=_n('text')
var cAB=_oz(z,43,e,s,gg)
_(o0,cAB)
_(f7,o0)
var oBB=_n('text')
_rz(z,oBB,'class',44,e,s,gg)
var lCB=_oz(z,45,e,s,gg)
_(oBB,lCB)
_(f7,oBB)
_(o6,f7)
var aDB=_n('text')
_rz(z,aDB,'class',46,e,s,gg)
var tEB=_oz(z,47,e,s,gg)
_(aDB,tEB)
_(o6,aDB)
_(x5,o6)
var eFB=_n('view')
_rz(z,eFB,'class',48,e,s,gg)
var bGB=_n('text')
_rz(z,bGB,'class',49,e,s,gg)
var oHB=_oz(z,50,e,s,gg)
_(bGB,oHB)
_(eFB,bGB)
var xIB=_n('text')
_rz(z,xIB,'class',51,e,s,gg)
var oJB=_oz(z,52,e,s,gg)
_(xIB,oJB)
_(eFB,xIB)
_(x5,eFB)
var fKB=_n('view')
_rz(z,fKB,'class',53,e,s,gg)
var cLB=_oz(z,54,e,s,gg)
_(fKB,cLB)
_(x5,fKB)
_(e2,x5)
_(t1,e2)
_(oB,t1)
var hMB=_n('view')
_rz(z,hMB,'class',55,e,s,gg)
var oNB=_n('view')
_rz(z,oNB,'class',56,e,s,gg)
var cOB=_n('view')
_rz(z,cOB,'class',57,e,s,gg)
var oPB=_mz(z,'image',['class',58,'forceHttps',1,'src',2],[],e,s,gg)
_(cOB,oPB)
var lQB=_n('view')
_rz(z,lQB,'class',61,e,s,gg)
_(cOB,lQB)
var aRB=_n('view')
_rz(z,aRB,'class',62,e,s,gg)
var tSB=_mz(z,'image',['class',63,'src',1],[],e,s,gg)
_(aRB,tSB)
_(cOB,aRB)
_(oNB,cOB)
var eTB=_n('view')
_rz(z,eTB,'class',65,e,s,gg)
var bUB=_n('view')
_rz(z,bUB,'class',66,e,s,gg)
var oVB=_oz(z,67,e,s,gg)
_(bUB,oVB)
_(eTB,bUB)
var xWB=_n('view')
_rz(z,xWB,'class',68,e,s,gg)
var oXB=_oz(z,69,e,s,gg)
_(xWB,oXB)
_(eTB,xWB)
_(oNB,eTB)
var fYB=_n('text')
_rz(z,fYB,'class',70,e,s,gg)
var cZB=_oz(z,71,e,s,gg)
_(fYB,cZB)
_(oNB,fYB)
_(hMB,oNB)
_(oB,hMB)
var h1B=_n('view')
_rz(z,h1B,'class',72,e,s,gg)
var o2B=_n('view')
_rz(z,o2B,'class',73,e,s,gg)
var c3B=_n('view')
_rz(z,c3B,'class',74,e,s,gg)
var o4B=_mz(z,'image',['class',75,'forceHttps',1,'src',2],[],e,s,gg)
_(c3B,o4B)
var l5B=_n('view')
_rz(z,l5B,'class',78,e,s,gg)
_(c3B,l5B)
var a6B=_n('view')
_rz(z,a6B,'class',79,e,s,gg)
var t7B=_mz(z,'image',['class',80,'src',1],[],e,s,gg)
_(a6B,t7B)
_(c3B,a6B)
_(o2B,c3B)
var e8B=_n('view')
_rz(z,e8B,'class',82,e,s,gg)
var b9B=_n('view')
_rz(z,b9B,'class',83,e,s,gg)
var o0B=_oz(z,84,e,s,gg)
_(b9B,o0B)
_(e8B,b9B)
var xAC=_mz(z,'view',['class',85,'style',1],[],e,s,gg)
var fCC=_mz(z,'text',['class',87,'style',1],[],e,s,gg)
var cDC=_oz(z,89,e,s,gg)
_(fCC,cDC)
_(xAC,fCC)
var hEC=_n('text')
_rz(z,hEC,'class',90,e,s,gg)
var oFC=_oz(z,91,e,s,gg)
_(hEC,oFC)
_(xAC,hEC)
var cGC=_mz(z,'text',['class',92,'style',1],[],e,s,gg)
var oHC=_oz(z,94,e,s,gg)
_(cGC,oHC)
_(xAC,cGC)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,95,e,s,gg)){oBC.wxVkey=1
var lIC=_n('text')
_rz(z,lIC,'class',96,e,s,gg)
var aJC=_oz(z,97,e,s,gg)
_(lIC,aJC)
_(oBC,lIC)
}
var tKC=_n('text')
_rz(z,tKC,'class',98,e,s,gg)
var eLC=_oz(z,99,e,s,gg)
_(tKC,eLC)
_(xAC,tKC)
oBC.wxXCkey=1
_(e8B,xAC)
_(o2B,e8B)
var bMC=_n('text')
_rz(z,bMC,'class',100,e,s,gg)
var oNC=_oz(z,101,e,s,gg)
_(bMC,oNC)
_(o2B,bMC)
_(h1B,o2B)
_(oB,h1B)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx45_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx45_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['touchmatrix_bundles/index.wxml'] = [$gwx45_XC_0, './touchmatrix_bundles/index.wxml'];else __wxAppCode__['touchmatrix_bundles/index.wxml'] = $gwx45_XC_0( './touchmatrix_bundles/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['touchmatrix_bundles/index.wxss']=setCssToHead([".",[1],"index{left:0;position:fixed;top:0;z-index:9999999999}\n.",[1],"logo{height:220px;width:100%}\n.",[1],"txt{color:green;margin-top:30px;text-align:center}\n.",[1],"container-width{width:",[0,750],"}\n.",[1],"hide{display:none!important}\n.",[1],"btn-group{display:flex;justify-content:space-between;margin-top:70px}\n.",[1],"button{background-color:#ffc300;width:40%!important}\n.",[1],"matrixwrap_notIhx{left:0;position:fixed;top:",[0,83],"}\n.",[1],"superalter{background:#fff;border-radius:",[0,24],";box-shadow:0 ",[0,5]," ",[0,30]," 0 rgba(0,0,0,.18);box-sizing:initial;display:flex;flex-direction:column;margin:",[0,32]," auto;padding:",[0,24],";width:",[0,622],"}\n.",[1],"header{align-items:center;display:flex;height:",[0,44],";margin-bottom:",[0,14],"}\n.",[1],"title{color:#666;font-family:PingFangSC-Regular;font-size:",[0,28],";font-weight:400;letter-spacing:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:90%}\n.",[1],"kangarooimg{border:1px #f2f2f2;height:",[0,44],";margin-right:",[0,12],";min-width:",[0,44],";width:",[0,44],"}\n.",[1],"footer{display:flex;flex-wrap:wrap;justify-content:space-between}\n.",[1],"descripition{-webkit-box-orient:vertical;-webkit-line-clamp:2;color:#333;display:-webkit-box;flex:1;font-family:PingFangSC-Regular;font-size:",[0,32],";font-weight:400;letter-spacing:0;line-height:normal;overflow:hidden;text-overflow:ellipsis}\n.",[1],"more{align-items:center;display:flex}\n.",[1],"rectangle{height:",[0,27],";width:",[0,24],"}\n.",[1],"rightarrow{height:",[0,16],";width:",[0,10],"}\n.",[1],"superalter_withimg{background:#fff;border-radius:",[0,24],";box-shadow:0 ",[0,5]," ",[0,30]," 0 rgba(0,0,0,.18);box-sizing:initial;display:flex;justify-content:flex-start;margin:",[0,32]," auto;padding:",[0,32],";width:",[0,622],"}\n.",[1],"superalter_withimg .",[1],"col{display:flex;flex:1;flex-direction:column;justify-content:center;width:",[0,478],"}\n.",[1],"imgbig{height:",[0,144],";margin-right:",[0,16],";min-width:",[0,144],";width:",[0,144],"}\n.",[1],"redenvelope{background:#ffece9;border-radius:",[0,24],";box-shadow:0 ",[0,5]," ",[0,30]," 0 rgba(0,0,0,.18);box-sizing:initial;display:flex;flex-direction:column;height:",[0,190],";margin:",[0,32]," auto ",[0,24],";padding:",[0,24]," ",[0,24]," ",[0,32],";width:",[0,658],"}\n.",[1],"redenvelope .",[1],"title{color:#333;font-family:PingFangSC-Medium;font-size:",[0,28],";font-weight:500;letter-spacing:0;line-height:",[0,34],";margin-bottom:",[0,16],"}\n.",[1],"voucher{background:#fff;border-radius:",[0,24],";justify-content:space-between;width:90%;width:",[0,654],"}\n.",[1],"col1,.",[1],"voucher{align-items:center;display:flex;height:",[0,140],"}\n.",[1],"col1{flex-direction:column;justify-content:center;margin-right:",[0,2],";width:",[0,178],"}\n.",[1],"col1 .",[1],"price{color:#ff4a26;font-family:Avenir-Medium;font-size:",[0,60],";font-weight:500;line-height:",[0,60],"}\n.",[1],"price .",[1],"sign{font-family:Avenir-Heavy;font-size:",[0,28],";line-height:",[0,28],"}\n.",[1],"col1 .",[1],"rule{color:#575859;font-family:PingFangSC-Regular;font-size:",[0,24],";font-weight:400;height:",[0,32],";letter-spacing:0;line-height:",[0,32],";text-align:center}\n.",[1],"col2{display:flex;flex-direction:column;justify-content:center;width:",[0,322],"}\n.",[1],"col2 .",[1],"type{color:#222426;font-family:PingFangSC-Medium;font-size:",[0,32],";font-weight:500;height:",[0,60],";letter-spacing:0;line-height:",[0,60],";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"col2 .",[1],"deadline{color:#575859;font-family:PingFangSC-Regular;font-weight:400;height:",[0,32],";line-height:",[0,32],"}\n.",[1],"col2 .",[1],"deadline,.",[1],"usebtn{font-size:",[0,24],";letter-spacing:0}\n.",[1],"usebtn{background-image:linear-gradient(-45deg,#ffc34d,#ffe14d);border-radius:",[0,12],";box-sizing:border-box;color:#222426;font-family:PingFangSC-Medium;font-weight:500;height:",[0,48],";line-height:1;margin:0 ",[0,24],";padding:",[0,12]," ",[0,16],";text-align:center;width:",[0,106],"}\n.",[1],"live-push__content{align-items:center;background-color:#fff;border-radius:",[0,24],";box-shadow:0 ",[0,5]," ",[0,30]," 0 rgba(0,0,0,.18);display:flex;margin:",[0,32]," auto;padding:",[0,20],";width:",[0,658],"}\n.",[1],"live-push__poi-image__wrapper{align-items:center;display:flex;flex-shrink:0;height:",[0,100],";justify-content:center;position:relative;width:",[0,100],"}\n.",[1],"live-push__poi-image__border{animation:LiveIcon;animation-duration:1.2s;animation-iteration-count:999;animation-timing-function:linear;border:",[0,1]," solid #ff265c;border-radius:50%;height:",[0,97],";position:absolute;width:",[0,97],"}\n.",[1],"live-push__poi-image{resize-mode:cover;background-color:#fff;border:",[0,2]," solid #ff265c;border-radius:50%;height:",[0,90],";width:",[0,90],"}\n.",[1],"live-push__poi-image__icon-live__wrapper{align-items:center;background-color:#ff265c;border:",[0,1]," solid #fff;border-radius:50%;bottom:",[0,2],";display:flex;height:",[0,40],";justify-content:center;position:absolute;right:",[0,0],";width:",[0,40],"}\n.",[1],"live-push__poi-image__icon-live{height:",[0,20],";width:",[0,18],"}\n.",[1],"live-push__center{display:flex;flex-direction:column;flex-grow:1;justify-content:between;margin-left:",[0,16],";margin-right:",[0,18],";width:",[0,410],"}\n.",[1],"live-push__title{color:#222426;font-family:PingFangSC-Medium;font-size:",[0,32],";font-weight:500}\n.",[1],"live-push__subtitle,.",[1],"live-push__title{letter-spacing:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"live-push__subtitle{color:#858687;font-family:PingFangSC-Regular;font-size:",[0,24],";font-weight:400;line-height:",[0,32],";margin-top:",[0,12],"}\n.",[1],"live-push__btn{border:1px solid #f70;border-radius:",[0,28],";color:#f70;flex-shrink:0;font-size:",[0,24],";font-weight:500;padding:",[0,8]," ",[0,18],";text-align:center}\n.",[1],"font-family-PingFangSC,.",[1],"live-push__btn{font-family:PingFangSC-Medium}\n.",[1],"font-family-AvenirLTPro{font-family:AvenirLTPro-Heavy}\n.",[1],"color-red{color:#ff3c26}\n.",[1],"color-gray{color:#858687;text-decoration:line-through}\n.",[1],"text-20{font-size:",[0,40],"}\n.",[1],"text-weight-500{font-weight:500}\n.",[1],"text-weight-700{font-weight:700}\n@keyframes LiveIcon{0%{opacity:1;transform:scaleX(1) scaleY(1)}\n50%{opacity:0;transform:scaleX(1.04) scaleY(1.04)}\n100%{opacity:1;transform:scaleX(1) scaleY(1)}\n}",],undefined,{path:"./touchmatrix_bundles/index.wxss"});
}