f(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_45 || [];
function gz$gwx_XC_45_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_45_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_45_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_45_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isHomepage']])
Z([[2,'?:'],[[7],[3,'isAppStyle']],[1,'app-style-index-search-normal-wrapper'],[1,'index-search-normal-wrapper']])
Z([[2,'==='],[[7],[3,'searchpageABtest']],[1,'A']])
Z([3,'onLxSearchClick'])
Z([[7],[3,'recommendedSearchRollKeyword']])
Z([a,[3,'/packages/search-business/search-guide/index?keyword\x3d'],[[2,'||'],[[6],[[7],[3,'recommendedSearchRollKeyword']],[3,'view_keyword']],[1,'']],[3,'\x26entranceId\x3d'],[[2,'||'],[[7],[3,'entranceId']],[1,0]],[3,'\x26cateType\x3d'],[[2,'||'],[[7],[3,'cateType']],[1,0]],[3,'\x26subCateType\x3d'],[[2,'||'],[[7],[3,'subCateType']],[1,0]],[3,'\x26isFromHome\x3dtrue']])
Z([[2,'?:'],[[7],[3,'isAppStyle']],[1,'app-style-index-search-normal-bg-semicircle'],[1,'index-search-normal-bg-semicircle']])
Z([[2,'?:'],[[7],[3,'grayConfig']],[1,'border-color:#b9b9b9;'],[1,'']])
Z([[2,'&&'],[[6],[[7],[3,'words']],[3,'length']],[[2,'!'],[[7],[3,'isMt']]]])
Z([[7],[3,'autoplay']])
Z([3,'swiperChange'])
Z([3,'true'])
Z([3,'swiper-container'])
Z([[7],[3,'currentWordIndex']])
Z([3,'3000'])
Z([[7],[3,'words']])
Z([3,'unique'])
Z([[6],[[7],[3,'item']],[3,'animate']])
Z([3,'onLxSearchBtnClick'])
Z(z[4])
Z(z[3])
Z(z[4])
Z([a,[3,'/packages/index/search/search?keyword\x3d'],z[5][2],z[5][3],z[5][4],z[5][5],z[5][6],z[5][7],z[5][8]])
Z(z[18])
Z(z[4])
Z([a,z[22][1],z[5][2],z[5][3],z[5][4],z[5][5],z[5][6],z[5][7],z[5][8]])
Z(z[3])
Z([[7],[3,'recommendedSearchKeyword']])
Z([a,[[2,'?:'],[[2,'==='],[[7],[3,'searchpageABtest']],[1,'A']],[1,'/packages/search-business/search-guide/index'],[1,'/packages/index/search/search']],[3,'?keyword\x3d'],[[2,'||'],[[6],[[7],[3,'recommendedSearchKeyword']],[3,'view_keyword']],[1,'']],z[5][3],z[5][4],z[5][5],z[5][6],z[5][7],z[5][8]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_45_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_45_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_45=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_45=true;
var x=['./components/wm-index-search/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_45_1()
var xWW=_v()
_(r,xWW)
if(_oz(z,0,e,s,gg)){xWW.wxVkey=1
var oXW=_n('view')
_rz(z,oXW,'class',1,e,s,gg)
var fYW=_v()
_(oXW,fYW)
if(_oz(z,2,e,s,gg)){fYW.wxVkey=1
var cZW=_mz(z,'wm-navigator',['bind:navtap',3,'data-recommend',1,'url',2],[],e,s,gg)
var h1W=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var o2W=_v()
_(h1W,o2W)
if(_oz(z,8,e,s,gg)){o2W.wxVkey=1
var c3W=_mz(z,'swiper',['vertical',-1,'autoplay',9,'bindanimationfinish',1,'circular',2,'class',3,'current',4,'interval',5],[],e,s,gg)
var o4W=_v()
_(c3W,o4W)
var l5W=function(t7W,a6W,e8W,gg){
var o0W=_v()
_(e8W,o0W)
if(_oz(z,17,t7W,a6W,gg)){o0W.wxVkey=1
}
o0W.wxXCkey=1
return e8W
}
o4W.wxXCkey=2
_2z(z,15,l5W,e,s,gg,o4W,'item','index','unique')
_(o2W,c3W)
}
else{o2W.wxVkey=2
}
o2W.wxXCkey=1
_(cZW,h1W)
_(fYW,cZW)
var xAX=_mz(z,'wm-navigator',['bind:navtap',18,'data-recommend',1],[],e,s,gg)
_(fYW,xAX)
}
else{fYW.wxVkey=2
var oBX=_mz(z,'wm-navigator',['bind:navtap',20,'data-recommend',1,'url',2],[],e,s,gg)
_(fYW,oBX)
var fCX=_mz(z,'wm-navigator',['bind:navtap',23,'data-recommend',1,'url',2],[],e,s,gg)
_(fYW,fCX)
}
fYW.wxXCkey=1
fYW.wxXCkey=3
fYW.wxXCkey=3
_(xWW,oXW)
}
else{xWW.wxVkey=2
var cDX=_mz(z,'wm-navigator',['bind:navtap',26,'data-recommend',1,'url',2],[],e,s,gg)
_(xWW,cDX)
}
xWW.wxXCkey=1
xWW.wxXCkey=3
xWW.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_45";var main=e_[path].f
if 