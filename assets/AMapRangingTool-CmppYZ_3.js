import{r as u,c as Ue,g as Le,R as Te}from"./index-RYns6xqu.js";const ke={__AMAP__:null,__AMAP_UI__:null},Ae=u.createContext(ke);var ye={exports:{}};(function(e,r){(function(a,i){e.exports=i()})(Ue,function(){function a(o){var f=[];return o.AMapUI&&f.push(i(o.AMapUI)),o.Loca&&f.push(d(o.Loca)),Promise.all(f)}function i(o){return new Promise(function(f,y){var g=[];if(o.plugins)for(var M=0;M<o.plugins.length;M+=1)l.AMapUI.plugins.indexOf(o.plugins[M])==-1&&g.push(o.plugins[M]);if(n.AMapUI===s.failed)y("前次请求 AMapUI 失败");else if(n.AMapUI===s.notload){n.AMapUI=s.loading,l.AMapUI.version=o.version||l.AMapUI.version,M=l.AMapUI.version;var I=document.body||document.head,A=document.createElement("script");A.type="text/javascript",A.src="https://webapi.amap.com/ui/"+M+"/main.js",A.onerror=function(v){n.AMapUI=s.failed,y("请求 AMapUI 失败")},A.onload=function(){if(n.AMapUI=s.loaded,g.length)window.AMapUI.loadUI(g,function(){for(var v=0,h=g.length;v<h;v++){var b=g[v].split("/").slice(-1)[0];window.AMapUI[b]=arguments[v]}for(f();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()});else for(f();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()},I.appendChild(A)}else n.AMapUI===s.loaded?o.version&&o.version!==l.AMapUI.version?y("不允许多个版本 AMapUI 混用"):g.length?window.AMapUI.loadUI(g,function(){for(var v=0,h=g.length;v<h;v++){var b=g[v].split("/").slice(-1)[0];window.AMapUI[b]=arguments[v]}f()}):f():o.version&&o.version!==l.AMapUI.version?y("不允许多个版本 AMapUI 混用"):p.AMapUI.push(function(v){v?y(v):g.length?window.AMapUI.loadUI(g,function(){for(var h=0,b=g.length;h<b;h++){var T=g[h].split("/").slice(-1)[0];window.AMapUI[T]=arguments[h]}f()}):f()})})}function d(o){return new Promise(function(f,y){if(n.Loca===s.failed)y("前次请求 Loca 失败");else if(n.Loca===s.notload){n.Loca=s.loading,l.Loca.version=o.version||l.Loca.version;var g=l.Loca.version,M=l.AMap.version.startsWith("2"),I=g.startsWith("2");if(M&&!I||!M&&I)y("JSAPI 与 Loca 版本不对应！！");else{M=l.key,I=document.body||document.head;var A=document.createElement("script");A.type="text/javascript",A.src="https://webapi.amap.com/loca?v="+g+"&key="+M,A.onerror=function(v){n.Loca=s.failed,y("请求 AMapUI 失败")},A.onload=function(){for(n.Loca=s.loaded,f();p.Loca.length;)p.Loca.splice(0,1)[0]()},I.appendChild(A)}}else n.Loca===s.loaded?o.version&&o.version!==l.Loca.version?y("不允许多个版本 Loca 混用"):f():o.version&&o.version!==l.Loca.version?y("不允许多个版本 Loca 混用"):p.Loca.push(function(v){v?y(v):y()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var s;(function(o){o.notload="notload",o.loading="loading",o.loaded="loaded",o.failed="failed"})(s||(s={}));var l={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},n={AMap:s.notload,AMapUI:s.notload,Loca:s.notload},p={AMap:[],AMapUI:[],Loca:[]},c=[],m=function(o){typeof o=="function"&&(n.AMap===s.loaded?o(window.AMap):c.push(o))};return{load:function(o){return new Promise(function(f,y){if(n.AMap==s.failed)y("");else if(n.AMap==s.notload){var g=o.key,M=o.version,I=o.plugins;g?(window.AMap&&location.host!=="lbs.amap.com"&&y("禁止多种API加载方式混用"),l.key=g,l.AMap.version=M||l.AMap.version,l.AMap.plugins=I||l.AMap.plugins,n.AMap=s.loading,M=document.body||document.head,window.___onAPILoaded=function(v){if(delete window.___onAPILoaded,v)n.AMap=s.failed,y(v);else for(n.AMap=s.loaded,a(o).then(function(){f(window.AMap)}).catch(y);c.length;)c.splice(0,1)[0]()},I=document.createElement("script"),I.type="text/javascript",I.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+l.AMap.version+"&key="+g+"&plugin="+l.AMap.plugins.join(","),I.onerror=function(v){n.AMap=s.failed,y(v)},M.appendChild(I)):y("请填写key")}else if(n.AMap==s.loaded)if(o.key&&o.key!==l.key)y("多个不一致的 key");else if(o.version&&o.version!==l.AMap.version)y("不允许多个版本 JSAPI 混用");else{if(g=[],o.plugins)for(M=0;M<o.plugins.length;M+=1)l.AMap.plugins.indexOf(o.plugins[M])==-1&&g.push(o.plugins[M]);g.length?window.AMap.plugin(g,function(){a(o).then(function(){f(window.AMap)}).catch(y)}):a(o).then(function(){f(window.AMap)}).catch(y)}else if(o.key&&o.key!==l.key)y("多个不一致的 key");else if(o.version&&o.version!==l.AMap.version)y("不允许多个版本 JSAPI 混用");else{var A=[];if(o.plugins)for(M=0;M<o.plugins.length;M+=1)l.AMap.plugins.indexOf(o.plugins[M])==-1&&A.push(o.plugins[M]);m(function(){A.length?window.AMap.plugin(A,function(){a(o).then(function(){f(window.AMap)}).catch(y)}):a(o).then(function(){f(window.AMap)}).catch(y)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,l={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},n={AMap:s.notload,AMapUI:s.notload,Loca:s.notload},p={AMap:[],AMapUI:[],Loca:[]}}}})})(ye);var Re=ye.exports;const Ne=Le(Re),W=()=>globalThis??global??window,xe="2.0",Ve="1.1",qe={version:xe},me=e=>{const{AMapUI:r,...a}=e,i=()=>Ne.load({...qe,...a,AMapUI:r&&{version:Ve,...r}});let{AMap:d,AMapUI:s}=W();return u.lazy(async()=>{var p;if(!d||!s)await i(),d=W().AMap,s=W().AMapUI;else{const c=[];(((p=a.plugins)==null?void 0:p.length)??0)>0&&c.push(new Promise(m=>{d.plugin(a.plugins,m)})),await Promise.all(c)}const l={__AMAP__:d,__AMAP_UI__:s};return{default:({children:c})=>Te.createElement(Ae.Provider,{value:l},c)}})};try{me.displayName="createAMapAPIContainer",me.__docgenInfo={description:"",displayName:"createAMapAPIContainer",props:{key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},plugins:{defaultValue:null,description:"",name:"plugins",required:!1,type:{name:"string[]"}},AMapUI:{defaultValue:null,description:"",name:"AMapUI",required:!1,type:{name:"{ version?: string; plugins?: string[]; } | undefined"}},Loca:{defaultValue:null,description:"",name:"Loca",required:!1,type:{name:"{ version?: string; }"}},version:{defaultValue:null,description:"",name:"version",required:!1,type:{name:"string"}}}}}catch{}const Me=()=>u.useContext(Ae),Oe=null,ge=u.createContext(Oe),P=(e,r,...a)=>{u.useEffect(()=>{var i;(i=e==null?void 0:e[r])==null||i.call(e,...a)},[e,r,...a])},Se={width:"100%",height:"100%"},$e={viewMode:"2D",features:["bg","point","road","building"]},_e=u.forwardRef(({children:e,center:r,cityName:a,zoom:i,features:d,mapStyle:s,viewMode:l,pitch:n},p)=>{const{__AMAP__:c}=Me(),m=u.useRef(null),[o,f]=u.useState(null);return u.useEffect(()=>{let y;return!m.current||!c||(()=>{const M=new c.Map(m.current,{viewMode:l}),I=new Proxy(M,{get(A,v){return v==="add"?b=>{const T=A.add(b);return M.emit("overlaysAdded",b),T}:v==="remove"?b=>{const T=A.remove(b);return M.emit("overlaysRemoved",b),T}:A[v]}});y=()=>{M.destroy()},f(I)})(),y},[c,l]),u.useImperativeHandle(p,()=>o,[o]),P(o,"setMapStyle",s),u.useEffect(()=>{a&&(o==null||o.setCity(a))},[a,o]),u.useEffect(()=>{i&&(o==null||o.setZoom(i))},[i,o]),u.useEffect(()=>{r&&(o==null||o.setCenter(r))},[r,o]),P(o,"setFeatures",d),P(o,"setPitch",n),u.createElement("div",{style:Se,ref:m},u.createElement(ge.Provider,{value:o},e))});_e.defaultProps=$e;const He=u.memo(_e);He.displayName="AMapMap";const Z=()=>{const{__AMAP__:e,__AMAP_UI__:r}=Me(),a=u.useContext(ge);return{__AMAP__:e,__AMAP_UI__:r,map:a}},he=u.createContext(null),G=e=>{const r=u.useContext(he),{map:a}=Z();u.useEffect(()=>{let i;return e&&(r?(r.addOverlay(e),i=()=>{try{r.removeOverlay(e)}catch{}}):a&&(a.add(e),i=()=>{try{a.remove(e)}catch{}})),i},[e,a,r])};function t(e,r,a){u.useEffect(()=>{let i;if(!e||!a)return i;e.on(r,a);const d=a;return i=()=>{d&&e&&e.off(r,d)},i},[e,r,a])}const k=(e,r)=>{const{__AMAP__:a,map:i}=Z(),[d,s]=u.useState(null);return u.useEffect(()=>{if(!a||!i)return;const l=()=>{const n=r(a,i);s(n)};a[e]?l():a.plugin([`AMap.${e}`],l)},[a,i,e,r]),d},j=e=>`${encodeURIComponent(e)}px`,Be=(e,r=[10,10])=>e==="LT"?`left:${j(r[0])};top:${j(r[1])};`:e==="RT"?`right:${j(r[0])};top:${j(r[1])};`:e==="LB"?`left:${j(r[0])};bottom:${j(r[1])};`:e==="RB"?`right:${j(r[0])};bottom:${j(r[1])};`:typeof e=="object"?["top","right","bottom","left"].reduce((a,i)=>{const d=e[i];return d?`${a}${i}:${j(d)};`:a},""):"",pe=(e,r,a=[10,10])=>{const i=Be(r,a);u.useLayoutEffect(()=>{if(!e||!i)return;const d=e._container;d.style.cssText=i},[e,i]),u.useEffect(()=>{e&&(e._config.position=r,e._config.offset=a)},[e,r,a])},Y=e=>{const{map:r}=Z();u.useEffect(()=>{let a;return!e||!r||(a=()=>{r.removeControl(e)},r.addControl(e)),a},[r,e])},N=(e,r)=>{u.useEffect(()=>{var a,i;r?(a=e==null?void 0:e.show)==null||a.call(e):(i=e==null?void 0:e.hide)==null||i.call(e)},[e,r])},je=(e,r)=>{u.useLayoutEffect(()=>{if(!e)return;e._config.showControlButton=r;const a=[e._pitchUp,e._pitchDown,e._rotateLeft,e._rotateRight],i=e._compass,d=e._luopan;i.classList.toggle("amap-compass-black",!r),r?(d.style.removeProperty("background"),a.forEach(s=>{s.style.removeProperty("display")})):(d.style.setProperty("background","rgba(0, 0, 0, 0)"),a.forEach(s=>{s.style.setProperty("display","none")}))},[e,r])},Ge={position:"LT",showControlButton:!0,visible:!0,onShow:void 0,onHide:void 0},we=({position:e,offset:r,showControlButton:a,visible:i,onHide:d,onShow:s})=>{const l=u.useCallback(p=>new p.ControlBar,[]),n=k("ControlBar",l);return pe(n,e,r??[10,10]),je(n,!!a),N(n,i),t(n,"show",s),t(n,"hide",d),Y(n),null};we.defaultProps=Ge;const De=u.memo(we);De.displayName="AMapControlBar";const Fe={showButton:!0,isOpen:!0,visible:!0,onShow:void 0,onHide:void 0},Pe=({autoMove:e,showRectangle:r,showButton:a,isOpen:i,mapStyle:d,width:s,height:l,offset:n,borderStyle:p,borderColor:c,borderRadius:m,borderWidth:o,buttonSize:f,visible:y,onShow:g,onHide:M})=>{const I=u.useMemo(()=>{const h={};return e!==void 0&&(h.autoMove=e),r!==void 0&&(h.showRectangle=r),a!==void 0&&(h.showButton=a),d!==void 0&&(h.mapStyle=d),s!==void 0&&(h.width=s),l!==void 0&&(h.height=l),n!==void 0&&(h.offset=n),p!==void 0&&(h.borderStyle=p),c!==void 0&&(h.borderColor=c),m!==void 0&&(h.borderRadius=m),o!==void 0&&(h.borderWidth=o),f!==void 0&&(h.buttonSize=f),h},[e,r,a,d,s,l,n,p,c,m,o,f]),A=u.useCallback(h=>new h.HawkEye(I),[I]),v=k("HawkEye",A);return u.useEffect(()=>{var h,b;i?(h=v==null?void 0:v.open)==null||h.call(v):(b=v==null?void 0:v.close)==null||b.call(v)},[v,i]),N(v,!!y),t(v,"show",g),t(v,"hide",M),Y(v),null};Pe.defaultProps=Fe;const Je=u.memo(Pe);Je.displayName="AMapHawkEye";const Ze={position:"LB",visible:!0,onShow:void 0,onHide:void 0},Xe=e=>new e.Scale,Ie=({position:e,offset:r,visible:a,onShow:i,onHide:d})=>{const s=k("Scale",Xe);return pe(s,e,r),N(s,a),t(s,"show",i),t(s,"hide",d),Y(s),null};Ie.defaultProps=Ze;const Ye=u.memo(Ie);Ye.displayName="AMapScale";const Ke={position:"LT",visible:!0,onShow:void 0,onHide:void 0},Ee=({position:e,offset:r,visible:a,onShow:i,onHide:d})=>{const s=u.useCallback(n=>new n.ToolBar,[]),l=k("ToolBar",s);return pe(l,e,r),N(l,a),t(l,"show",i),t(l,"hide",d),Y(l),null};Ee.defaultProps=Ke;const Qe=u.memo(Ee);Qe.displayName="AMapToolBar";const We={defaultType:0,showTraffic:!1,showRoad:!1,visible:!0,onShow:void 0,onHide:void 0},z=({defaultType:e,showTraffic:r,showRoad:a,visible:i,onHide:d,onShow:s})=>{const l=u.useCallback(p=>new p.MapType({defaultType:e,showTraffic:r,showRoad:a}),[e,a,r]),n=k("MapType",l);return N(n,!!i),t(n,"show",s),t(n,"hide",d),Y(n),null};z.defaultProps=We;try{z.displayName="AMapMapType",z.__docgenInfo={description:"",displayName:"AMapMapType",props:{}}}catch{}const ee=u.forwardRef(({children:e,visible:r,options:a,onShow:i,onHide:d,onClick:s,onDBLClick:l,onRightClick:n,onMousedown:p,onMouseup:c,onMouseover:m,onMouseout:o,onTouchstart:f,onTouchmove:y,onTouchend:g},M)=>{const I=u.useCallback(v=>new v.OverlayGroup,[]),A=k("OverlayGroup",I);return u.useImperativeHandle(M,()=>A,[A]),u.useEffect(()=>{a&&(A==null||A.setOptions(a))},[a,A]),N(A,!!r),t(A,"show",i),t(A,"hide",d),t(A,"click",s),t(A,"dblclick",l),t(A,"rightclick",n),t(A,"mousedown",p),t(A,"mouseup",c),t(A,"mouseover",m),t(A,"mouseout",o),t(A,"touchstart",f),t(A,"touchmove",y),t(A,"touchend",g),G(A),u.createElement(he.Provider,{value:A},e)});ee.defaultProps={visible:!0};try{ee.displayName="AMapOverlayGroup",ee.__docgenInfo={description:"",displayName:"AMapOverlayGroup",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"unknown"}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"Boolean"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"((event?: any) => void)"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"((event?: any) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event?: any) => void)"}},onDBLClick:{defaultValue:null,description:"",name:"onDBLClick",required:!1,type:{name:"((event?: any) => void)"}},onRightClick:{defaultValue:null,description:"",name:"onRightClick",required:!1,type:{name:"((event?: any) => void)"}},onMousedown:{defaultValue:null,description:"",name:"onMousedown",required:!1,type:{name:"((event?: any) => void)"}},onMouseup:{defaultValue:null,description:"",name:"onMouseup",required:!1,type:{name:"((event?: any) => void)"}},onMouseover:{defaultValue:null,description:"",name:"onMouseover",required:!1,type:{name:"((event?: any) => void)"}},onMouseout:{defaultValue:null,description:"",name:"onMouseout",required:!1,type:{name:"((event?: any) => void)"}},onTouchstart:{defaultValue:null,description:"",name:"onTouchstart",required:!1,type:{name:"((event?: any) => void)"}},onTouchmove:{defaultValue:null,description:"",name:"onTouchmove",required:!1,type:{name:"((event?: any) => void)"}},onTouchend:{defaultValue:null,description:"",name:"onTouchend",required:!1,type:{name:"((event?: any) => void)"}}}}}catch{}const ze={visible:!0},eo=()=>{const{__AMAP__:e,map:r}=Z();return u.useCallback(a=>typeof a!="function"?a:(i,d)=>a(i,d,r,e),[e,r])},oe=({geoJSON:e,getPolyline:r,getMarker:a,getPolygon:i,visible:d,options:s})=>{const l=u.useCallback(c=>new c.GeoJSON({}),[]),n=k("GeoJSON",l),p=eo();return u.useEffect(()=>{n&&(n._opts.getPolyline=p(r))},[n,r,p]),u.useEffect(()=>{n&&(n._opts.getMarker=p(a))},[n,a,p]),u.useEffect(()=>{n&&(n._opts.getPolygon=p(i))},[n,i,p]),u.useEffect(()=>{var c;(c=n==null?void 0:n.importData)==null||c.call(n,e)},[e,n]),u.useEffect(()=>{var c;s&&((c=n==null?void 0:n.setOptions)==null||c.call(n,s))},[s,n]),N(n,d),G(n),null};oe.defaultProps=ze;try{oe.displayName="AMapGeoJSON",oe.__docgenInfo={description:"",displayName:"AMapGeoJSON",props:{}}}catch{}const oo=e=>new e.Circle,ne=u.forwardRef(({center:e,radius:r,zIndex:a,bubble:i,cursor:d,fillColor:s,fillOpacity:l,strokeColor:n,strokeStyle:p,strokeOpacity:c,strokeWeight:m,strokeDasharray:o,extData:f,draggable:y,visible:g,onShow:M,onHide:I,onClick:A,onDBLClick:v,onRightClick:h,onMousedown:b,onMouseup:T,onMouseover:x,onMouseout:V,onTouchstart:q,onTouchmove:O,onTouchend:S},$)=>{const _=k("Circle",oo);u.useImperativeHandle($,()=>_,[_]);const E=u.useMemo(()=>Object.entries({zIndex:a,bubble:i,cursor:d,fillColor:s,fillOpacity:l,strokeColor:n,strokeStyle:p,strokeOpacity:c,strokeWeight:m,strokeDasharray:o,draggable:y}).filter(([,L])=>L!=null).reduce((L,[R,B])=>(L[R]=B,L),{}),[a,i,d,s,l,n,p,c,m,o,y]);return P(_,"setOptions",E),P(_,"setCenter",e),P(_,"setRadius",r),P(_,"setExtData",f),N(_,!!g),t(_,"show",M),t(_,"hide",I),t(_,"click",A),t(_,"dblclick",v),t(_,"rightclick",h),t(_,"mousedown",b),t(_,"mouseup",T),t(_,"mouseover",x),t(_,"mouseout",V),t(_,"touchstart",q),t(_,"touchmove",O),t(_,"touchend",S),G(_),null});ne.defaultProps={visible:!0};try{ne.displayName="AMapCircle",ne.__docgenInfo={description:"",displayName:"AMapCircle",props:{}}}catch{}const no={visible:!0,onShow:void 0,onHide:void 0},te=({center:e,radius:r,zIndex:a,draggable:i,extData:d,cursor:s,bubble:l,fillColor:n,fillOpacity:p,strokeColor:c,strokeOpacity:m,strokeWeight:o,strokeStyle:f,strokeDasharray:y,visible:g,onHide:M,onShow:I,onClick:A,onDBLClick:v,onRightClick:h,onMousedown:b,onMouseup:T,onMouseover:x,onMouseout:V,onTouchstart:q,onTouchmove:O,onTouchend:S})=>{const $=u.useCallback(H=>new H.Ellipse,[]),_=k("Ellipse",$);P(_,"setCenter",e),P(_,"setRadius",r),P(_,"setExtData",d);const E=u.useMemo(()=>Object.entries({zIndex:a,bubble:l,cursor:s,fillColor:n,fillOpacity:p,strokeColor:c,strokeStyle:f,strokeOpacity:m,strokeWeight:o,strokeDasharray:y,draggable:i}).filter(([,L])=>L!=null).reduce((L,[R,B])=>(L[R]=B,L),{}),[a,l,s,n,p,c,f,m,o,y,i]);return P(_,"setOptions",E),N(_,!!g),t(_,"show",I),t(_,"hide",M),t(_,"click",A),t(_,"dblclick",v),t(_,"rightclick",h),t(_,"mousedown",b),t(_,"mouseup",T),t(_,"mouseover",x),t(_,"mouseout",V),t(_,"touchstart",q),t(_,"touchmove",O),t(_,"touchend",S),G(_),null};te.defaultProps=no;try{te.displayName="AMapEllipse",te.__docgenInfo={description:"",displayName:"AMapEllipse",props:{}}}catch{}const to={visible:!0},ae=u.forwardRef(({path:e,extrusionHeight:r,extData:a,zIndex:i,bubble:d,cursor:s,strokeColor:l,strokeWeight:n,strokeOpacity:p,fillColor:c,fillOpacity:m,draggable:o,roofColor:f,wallColor:y,strokeStyle:g,strokeDasharray:M,zooms:I,visible:A,onHide:v,onShow:h,onClick:b,onDBLClick:T,onRightClick:x,onMousedown:V,onMouseup:q,onMouseover:O,onMouseout:S,onDragstart:$,onDragging:_,onDragend:E,onTouchstart:H,onTouchmove:L,onTouchend:R},B)=>{const D=u.useCallback(J=>new J.Polygon,[]),C=k("Polygon",D);u.useImperativeHandle(B,()=>C,[C]),P(C,"setExtData",a);const w=u.useMemo(()=>Object.entries({zIndex:i,bubble:d,cursor:s,fillColor:c,fillOpacity:m,strokeColor:l,strokeStyle:g,strokeOpacity:p,strokeWeight:n,strokeDasharray:M,draggable:o,zooms:I,roofColor:f,wallColor:y}).filter(([,F])=>F!=null).reduce((F,[U,Q])=>(F[U]=Q,F),{}),[i,d,s,c,m,l,g,p,n,M,o,I,f,y]);return P(C,"setOptions",w),P(C,"setExtrusionHeight",r),P(C,"setPath",e),N(C,!!A),t(C,"hide",v),t(C,"show",h),t(C,"click",b),t(C,"dblclick",T),t(C,"rightclick",x),t(C,"mousedown",V),t(C,"mouseup",q),t(C,"mouseover",O),t(C,"mouseout",S),t(C,"dragstart",$),t(C,"dragging",_),t(C,"dragend",E),t(C,"touchstart",H),t(C,"touchmove",L),t(C,"touchend",R),G(C),null});ae.defaultProps=to;try{ae.displayName="AMapPolygon",ae.__docgenInfo={description:"",displayName:"AMapPolygon",props:{}}}catch{}const ao={visible:!0},re=u.forwardRef(({path:e,extData:r,visible:a,zIndex:i,strokeColor:d,strokeWeight:s,strokeOpacity:l,strokeStyle:n,strokeDasharray:p,borderWeight:c,showDir:m,dirColor:o,dirImg:f,isOutline:y,outlineColor:g,cursor:M,lineJoin:I,lineCap:A,geodesic:v,draggable:h,bubble:b,zooms:T,onHide:x,onShow:V,onClick:q,onDBLClick:O,onRightClick:S,onMousedown:$,onMouseup:_,onMouseover:E,onMouseout:H,onDragstart:L,onDragging:R,onDragend:B,onTouchstart:D,onTouchmove:C,onTouchend:w},J)=>{const F=u.useCallback(fe=>new fe.Polyline,[]),U=k("Polyline",F);u.useImperativeHandle(J,()=>U,[U]),P(U,"setExtData",r);const Q=u.useMemo(()=>Object.entries({zIndex:i,strokeColor:d,strokeWeight:s,strokeOpacity:l,strokeStyle:n,strokeDasharray:p,borderWeight:c,showDir:m,dirColor:o,dirImg:f,isOutline:y,outlineColor:g,cursor:M,lineJoin:I,lineCap:A,geodesic:v,draggable:h,bubble:b,zooms:T}).filter(([,X])=>X!=null).reduce((X,[be,Ce])=>(X[be]=Ce,X),{}),[i,d,s,l,n,p,c,m,o,f,y,g,M,I,A,v,h,b,T]);return P(U,"setOptions",Q),P(U,"setPath",e),N(U,!!a),t(U,"hide",x),t(U,"show",V),t(U,"click",q),t(U,"dblclick",O),t(U,"rightclick",S),t(U,"mousedown",$),t(U,"mouseup",_),t(U,"mouseover",E),t(U,"mouseout",H),t(U,"dragstart",L),t(U,"dragging",R),t(U,"dragend",B),t(U,"touchstart",D),t(U,"touchmove",C),t(U,"touchend",w),G(U),null});re.defaultProps=ao;try{re.displayName="AMapPolyline",re.__docgenInfo={description:"",displayName:"AMapPolyline",props:{}}}catch{}const ro={anchor:"center",cursor:"pointer",angle:0,zIndex:12,clickable:!0,draggable:!1,visible:!0},se=({title:e,icon:r,zooms:a,label:i,clickable:d,draggable:s,cursor:l,extData:n,position:p,anchor:c,offset:m,angle:o,size:f,zIndex:y,content:g,visible:M,onHide:I,onShow:A,onClick:v,onDBLClick:h,onRightClick:b,onMousemove:T,onMousedown:x,onMouseup:V,onMouseover:q,onMouseout:O,onTouchstart:S,onTouchmove:$,onTouchend:_,onDragstart:E,onDragging:H,onDragend:L,onMoving:R,onMoveEnd:B,onMoveAlong:D})=>{const C=u.useCallback(J=>new J.Marker({zooms:a}),[a]),w=k("Marker",C);return N(w,!!M),P(w,"setPosition",p),P(w,"setTitle",e),P(w,"setIcon",r),P(w,"setLabel",i),P(w,"setClickable",d),P(w,"setDraggable",s),P(w,"setCursor",l),P(w,"setExtData",n),P(w,"setAnchor",c),P(w,"setOffset",m),P(w,"setAngle",o),P(w,"setSize",f),P(w,"setzIndex",y),P(w,"setContent",g),t(w,"show",A),t(w,"hide",I),t(w,"click",v),t(w,"dblclick",h),t(w,"rightclick",b),t(w,"mousemove",T),t(w,"mousedown",x),t(w,"mouseup",V),t(w,"mouseover",q),t(w,"mouseout",O),t(w,"touchstart",S),t(w,"touchmove",$),t(w,"touchend",_),t(w,"dragstart",E),t(w,"dragging",H),t(w,"dragend",L),t(w,"moving",R),t(w,"moveend",B),t(w,"movealong",D),G(w),null};se.defaultProps=ro;try{se.displayName="AMapMarker",se.__docgenInfo={description:"",displayName:"AMapMarker",props:{}}}catch{}const so={visible:!0},le=u.forwardRef(({bounds:e,zIndex:r,bubble:a,cursor:i,draggable:d,visible:s,extData:l,height:n,strokeColor:p,strokeOpacity:c,strokeWeight:m,strokeStyle:o,strokeDasharray:f,fillColor:y,fillOpacity:g,onShow:M,onHide:I,onClick:A,onDBLClick:v,onRightClick:h,onMousedown:b,onMouseup:T,onMouseover:x,onMouseout:V,onTouchstart:q,onTouchmove:O,onTouchend:S},$)=>{const _=u.useCallback(L=>new L.Rectangle,[]),E=k("Rectangle",_);u.useImperativeHandle($,()=>E,[E]),P(E,"setExtData",l);const H=u.useMemo(()=>Object.entries({zIndex:r,cursor:i,strokeColor:p,strokeOpacity:c,strokeWeight:m,strokeStyle:o,strokeDasharray:f,fillColor:y,fillOpacity:g,draggable:d,bubble:a}).filter(([,R])=>R!=null).reduce((R,[B,D])=>(R[B]=D,R),{}),[a,i,d,y,g,p,f,c,o,m,r]);return P(E,"setOptions",H),P(E,"setBounds",e),P(E,"setHeight",n||0),N(E,!!s),t(E,"show",M),t(E,"hide",I),t(E,"click",A),t(E,"dblclick",v),t(E,"rightclick",h),t(E,"mousedown",b),t(E,"mouseup",T),t(E,"mouseover",x),t(E,"mouseout",V),t(E,"touchstart",q),t(E,"touchmove",O),t(E,"touchend",S),G(E),null});le.defaultProps=so;try{le.displayName="AMapRectangle",le.__docgenInfo={description:"",displayName:"AMapRectangle",props:{}}}catch{}const K=e=>e.className==="Overlay.Polygon",ue=({computeTarget:e,disabled:r,computeAdsorbPolygons:a,onChange:i})=>{const d=u.useRef(i);d.current=i;const s=u.useCallback((m,o)=>new m.PolygonEditor(o),[]),l=k("PolygonEditor",s),{map:n}=Z(),p=u.useCallback(()=>{if(!n||!l)return;const m=n.getAllOverlays("polygon")||[],o=e(m)??void 0;l.setTarget(o)},[n,e,l]);u.useEffect(()=>{p()},[n,p]),u.useEffect(()=>{let m;if(!n)return m;const o=f=>{(K(f)||Array.isArray(f)&&f.some(K))&&p()};return m=()=>{n.off("overlaysRemoved",o),n.off("overlaysAdded",o)},n.on("overlaysRemoved",o),n.on("overlaysAdded",o),m},[n,p]);const c=u.useCallback(()=>{if(!n||!l)return;const m=n.getAllOverlays("polygon")||[],o=a==null?void 0:a(m);o?l.setAdsorbPolygons(o):l.clearAdsorbPolygons()},[n,a,l]);return u.useEffect(()=>{c()},[n,c]),u.useEffect(()=>{let m;if(!n)return m;const o=f=>{(K(f)||Array.isArray(f)&&f.some(K))&&c()};return m=()=>{n.off("overlaysRemoved",o),n.off("overlaysAdded",o)},n.on("overlaysRemoved",o),n.on("overlaysAdded",o),m},[n,c]),u.useEffect(()=>{let m;if(!l)return m;const o=y=>{var g;(g=d.current)==null||g.call(d,y)},f=l;return m=()=>{f.off("add",o),f.off("addnode",o),f.off("adjust",o),f.off("removenode",o)},f.on("add",o),f.on("addnode",o),f.on("adjust",o),f.on("removenode",o),m},[l]),u.useEffect(()=>{l&&(r?l.close():l.open())},[l,r]),null};ue.defaultProps={disabled:!1,computeAdsorbPolygons:e=>e};try{ue.displayName="AMapPolygonEditor",ue.__docgenInfo={description:"",displayName:"AMapPolygonEditor",props:{computeTarget:{defaultValue:null,description:"",name:"computeTarget",required:!0,type:{name:"(allPolygons: AMap.Polygon[]) => any"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},computeAdsorbPolygons:{defaultValue:{value:"(allPolygons) => allPolygons"},description:"",name:"computeAdsorbPolygons",required:!1,type:{name:"((allPolygons: AMap.Polygon[]) => AMap.Polygon[] | null) | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((obj: any) => void)"}}}}}catch{}const ve=e=>e.className==="Overlay.Polyline",ie=({computeTarget:e,disabled:r,onChange:a})=>{const i=u.useRef(a);i.current=a;const d=u.useCallback((p,c)=>new p.PolylineEditor(c),[]),s=k("PolylineEditor",d),{map:l}=Z(),n=u.useCallback(()=>{if(!l||!s)return;const p=l.getAllOverlays("polyline")||[],c=e(p)??null;s.setTarget(c)},[l,e,s]);return u.useEffect(()=>{n()},[n]),u.useEffect(()=>{let p;if(!l)return p;const c=m=>{(ve(m)||Array.isArray(m)&&m.some(ve))&&n()};return p=()=>{l.off("overlaysRemoved",c),l.off("overlaysAdded",c)},l.on("overlaysRemoved",c),l.on("overlaysAdded",c),p},[l,n]),u.useEffect(()=>{let p;if(!s)return p;const c=o=>{var f;(f=i.current)==null||f.call(i,o)},m=s;return p=()=>{m.off("add",c),m.off("addnode",c),m.off("adjust",c),m.off("removenode",c)},m.on("add",c),m.on("addnode",c),m.on("adjust",c),m.on("removenode",c),p},[s]),u.useEffect(()=>{s&&(r?s.close():s.open())},[s,r]),null};ie.defaultProps={disabled:!1};try{ie.displayName="AMapPolylineEditor",ie.__docgenInfo={description:"",displayName:"AMapPolylineEditor",props:{computeTarget:{defaultValue:null,description:"",name:"computeTarget",required:!0,type:{name:"(allPolyline: AMap.Polyline[]) => any"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((obj: any) => void)"}}}}}catch{}const lo=(e,r)=>new e.MouseTool(r),de=u.forwardRef(({type:e,options:r,onCompleted:a},i)=>{const d=k("MouseTool",lo);return u.useImperativeHandle(i,()=>d,[d]),t(d,"draw",a),u.useEffect(()=>{let s;return d&&(s=()=>d.close(!1),d[e](r??{})),s},[d,r,e]),null});de.defaultProps={options:{},onCompleted:void 0};try{de.displayName="AMapMouseTool",de.__docgenInfo={description:`
Origin Docs See:
https://lbs.amap.com/api/javascript-api/reference/plugin#AMap.MouseTool`,displayName:"AMapMouseTool",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"marker"'},{value:'"circle"'},{value:'"rectangle"'},{value:'"polyline"'},{value:'"polygon"'},{value:'"measureArea"'},{value:'"rule"'},{value:'"rectZoomIn"'},{value:'"rectZoomOut"'}]}},options:{defaultValue:{value:"{}"},description:"",name:"options",required:!1,type:{name:"any"}},onCompleted:{defaultValue:{value:"undefined"},description:"",name:"onCompleted",required:!1,type:{name:"((e: any) => void)"}}}}}catch{}const uo=(e,r)=>new e.RangingTool(r,{}),ce=({disabled:e,onNodeAdded:r,onNodeRemoved:a,onEnd:i})=>{const d=k("RangingTool",uo);return u.useEffect(()=>{d&&(e?d.turnOff():d.turnOn())},[e,d]),t(d,"addnode",r),t(d,"removenode",a),t(d,"end",i),null};ce.defaultProps={disabled:!1};try{ce.displayName="AMapRangingTool",ce.__docgenInfo={description:"",displayName:"AMapRangingTool",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onNodeAdded:{defaultValue:null,description:"",name:"onNodeAdded",required:!1,type:{name:"((event?: any) => void)"}},onNodeRemoved:{defaultValue:null,description:"",name:"onNodeRemoved",required:!1,type:{name:"((event?: any) => void)"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"((event?: any) => void)"}}}}}catch{}export{ne as A,De as a,te as b,me as c,oe as d,Je as e,He as f,z as g,de as h,ee as i,se as j,ae as k,ue as l,re as m,ie as n,ce as o,le as p,Ye as q,Qe as r,Z as s,Me as u};