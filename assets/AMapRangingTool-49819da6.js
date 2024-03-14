import{r as u,c as Le,g as Te}from"./index-1b03fe98.js";import{j as Q}from"./jsx-runtime-86dfebf6.js";const ke={__AMAP__:null,__AMAP_UI__:null},Ae=u.createContext(ke);var ye={exports:{}};(function(e,r){(function(t,i){e.exports=i()})(Le,function(){function t(o){var f=[];return o.AMapUI&&f.push(i(o.AMapUI)),o.Loca&&f.push(d(o.Loca)),Promise.all(f)}function i(o){return new Promise(function(f,y){var _=[];if(o.plugins)for(var M=0;M<o.plugins.length;M+=1)l.AMapUI.plugins.indexOf(o.plugins[M])==-1&&_.push(o.plugins[M]);if(n.AMapUI===s.failed)y("前次请求 AMapUI 失败");else if(n.AMapUI===s.notload){n.AMapUI=s.loading,l.AMapUI.version=o.version||l.AMapUI.version,M=l.AMapUI.version;var P=document.body||document.head,A=document.createElement("script");A.type="text/javascript",A.src="https://webapi.amap.com/ui/"+M+"/main.js",A.onerror=function(v){n.AMapUI=s.failed,y("请求 AMapUI 失败")},A.onload=function(){if(n.AMapUI=s.loaded,_.length)window.AMapUI.loadUI(_,function(){for(var v=0,h=_.length;v<h;v++){var b=_[v].split("/").slice(-1)[0];window.AMapUI[b]=arguments[v]}for(f();c.AMapUI.length;)c.AMapUI.splice(0,1)[0]()});else for(f();c.AMapUI.length;)c.AMapUI.splice(0,1)[0]()},P.appendChild(A)}else n.AMapUI===s.loaded?o.version&&o.version!==l.AMapUI.version?y("不允许多个版本 AMapUI 混用"):_.length?window.AMapUI.loadUI(_,function(){for(var v=0,h=_.length;v<h;v++){var b=_[v].split("/").slice(-1)[0];window.AMapUI[b]=arguments[v]}f()}):f():o.version&&o.version!==l.AMapUI.version?y("不允许多个版本 AMapUI 混用"):c.AMapUI.push(function(v){v?y(v):_.length?window.AMapUI.loadUI(_,function(){for(var h=0,b=_.length;h<b;h++){var L=_[h].split("/").slice(-1)[0];window.AMapUI[L]=arguments[h]}f()}):f()})})}function d(o){return new Promise(function(f,y){if(n.Loca===s.failed)y("前次请求 Loca 失败");else if(n.Loca===s.notload){n.Loca=s.loading,l.Loca.version=o.version||l.Loca.version;var _=l.Loca.version,M=l.AMap.version.startsWith("2"),P=_.startsWith("2");if(M&&!P||!M&&P)y("JSAPI 与 Loca 版本不对应！！");else{M=l.key,P=document.body||document.head;var A=document.createElement("script");A.type="text/javascript",A.src="https://webapi.amap.com/loca?v="+_+"&key="+M,A.onerror=function(v){n.Loca=s.failed,y("请求 AMapUI 失败")},A.onload=function(){for(n.Loca=s.loaded,f();c.Loca.length;)c.Loca.splice(0,1)[0]()},P.appendChild(A)}}else n.Loca===s.loaded?o.version&&o.version!==l.Loca.version?y("不允许多个版本 Loca 混用"):f():o.version&&o.version!==l.Loca.version?y("不允许多个版本 Loca 混用"):c.Loca.push(function(v){v?y(v):y()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var s;(function(o){o.notload="notload",o.loading="loading",o.loaded="loaded",o.failed="failed"})(s||(s={}));var l={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},n={AMap:s.notload,AMapUI:s.notload,Loca:s.notload},c={AMap:[],AMapUI:[],Loca:[]},p=[],m=function(o){typeof o=="function"&&(n.AMap===s.loaded?o(window.AMap):p.push(o))};return{load:function(o){return new Promise(function(f,y){if(n.AMap==s.failed)y("");else if(n.AMap==s.notload){var _=o.key,M=o.version,P=o.plugins;_?(window.AMap&&location.host!=="lbs.amap.com"&&y("禁止多种API加载方式混用"),l.key=_,l.AMap.version=M||l.AMap.version,l.AMap.plugins=P||l.AMap.plugins,n.AMap=s.loading,M=document.body||document.head,window.___onAPILoaded=function(v){if(delete window.___onAPILoaded,v)n.AMap=s.failed,y(v);else for(n.AMap=s.loaded,t(o).then(function(){f(window.AMap)}).catch(y);p.length;)p.splice(0,1)[0]()},P=document.createElement("script"),P.type="text/javascript",P.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+l.AMap.version+"&key="+_+"&plugin="+l.AMap.plugins.join(","),P.onerror=function(v){n.AMap=s.failed,y(v)},M.appendChild(P)):y("请填写key")}else if(n.AMap==s.loaded)if(o.key&&o.key!==l.key)y("多个不一致的 key");else if(o.version&&o.version!==l.AMap.version)y("不允许多个版本 JSAPI 混用");else{if(_=[],o.plugins)for(M=0;M<o.plugins.length;M+=1)l.AMap.plugins.indexOf(o.plugins[M])==-1&&_.push(o.plugins[M]);_.length?window.AMap.plugin(_,function(){t(o).then(function(){f(window.AMap)}).catch(y)}):t(o).then(function(){f(window.AMap)}).catch(y)}else if(o.key&&o.key!==l.key)y("多个不一致的 key");else if(o.version&&o.version!==l.AMap.version)y("不允许多个版本 JSAPI 混用");else{var A=[];if(o.plugins)for(M=0;M<o.plugins.length;M+=1)l.AMap.plugins.indexOf(o.plugins[M])==-1&&A.push(o.plugins[M]);m(function(){A.length?window.AMap.plugin(A,function(){t(o).then(function(){f(window.AMap)}).catch(y)}):t(o).then(function(){f(window.AMap)}).catch(y)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,l={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},n={AMap:s.notload,AMapUI:s.notload,Loca:s.notload},c={AMap:[],AMapUI:[],Loca:[]}}}})})(ye);var Ne=ye.exports;const xe=Te(Ne),z=()=>globalThis??global??window,Ve="2.0",qe="1.1",Re={version:Ve},me=e=>{const{AMapUI:r,...t}=e,i=()=>xe.load({...Re,...t,AMapUI:r&&{version:qe,...r}});let{AMap:d,AMapUI:s}=z();return u.lazy(async()=>{var n;if(!d||!s)await i(),d=z().AMap,s=z().AMapUI;else{const c=[];(((n=t.plugins)==null?void 0:n.length)??0)>0&&c.push(new Promise(p=>{d.plugin(t.plugins,p)})),await Promise.all(c)}return{default:({children:c})=>Q(Ae.Provider,{value:{__AMAP__:d,__AMAP_UI__:s},children:c})}})};try{me.displayName="createAMapAPIContainer",me.__docgenInfo={description:"",displayName:"createAMapAPIContainer",props:{key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},plugins:{defaultValue:null,description:"",name:"plugins",required:!1,type:{name:"string[]"}},AMapUI:{defaultValue:null,description:"",name:"AMapUI",required:!1,type:{name:"{ version?: string; plugins?: string[]; } | undefined"}},Loca:{defaultValue:null,description:"",name:"Loca",required:!1,type:{name:"{ version?: string; }"}},version:{defaultValue:null,description:"",name:"version",required:!1,type:{name:"string"}}}}}catch{}const Me=()=>u.useContext(Ae),Oe=null,ge=u.createContext(Oe),I=(e,r,...t)=>{u.useEffect(()=>{var i;(i=e==null?void 0:e[r])==null||i.call(e,...t)},[e,r,...t])},Se={width:"100%",height:"100%"},$e={viewMode:"2D",features:["bg","point","road","building"]},_e=u.forwardRef(({children:e,center:r,cityName:t,zoom:i,features:d,mapStyle:s,viewMode:l,pitch:n},c)=>{const{__AMAP__:p}=Me(),m=u.useRef(null),[o,f]=u.useState(null);return u.useEffect(()=>{let y;return!m.current||!p||(()=>{const M=new p.Map(m.current,{viewMode:l}),P=new Proxy(M,{get(A,v){return v==="add"?b=>{const L=A.add(b);return M.emit("overlaysAdded",b),L}:v==="remove"?b=>{const L=A.remove(b);return M.emit("overlaysRemoved",b),L}:A[v]}});y=()=>{M.destroy()},f(P)})(),y},[p,l]),u.useImperativeHandle(c,()=>o,[o]),I(o,"setMapStyle",s),u.useEffect(()=>{t&&(o==null||o.setCity(t))},[t,o]),u.useEffect(()=>{i&&(o==null||o.setZoom(i))},[i,o]),u.useEffect(()=>{r&&(o==null||o.setCenter(r))},[r,o]),I(o,"setFeatures",d),I(o,"setPitch",n),Q("div",{style:Se,ref:m,children:Q(ge.Provider,{value:o,children:e})})});_e.defaultProps=$e;const He=u.memo(_e);He.displayName="AMapMap";const J=()=>{const{__AMAP__:e,__AMAP_UI__:r}=Me(),t=u.useContext(ge);return{__AMAP__:e,__AMAP_UI__:r,map:t}},he=u.createContext(null),D=e=>{const r=u.useContext(he),{map:t}=J();u.useEffect(()=>{let i;return e&&(r?(r.addOverlay(e),i=()=>{try{r.removeOverlay(e)}catch{}}):t&&(t.add(e),i=()=>{try{t.remove(e)}catch{}})),i},[e,t,r])};function a(e,r,t){u.useEffect(()=>{let i;if(!e||!t)return i;e.on(r,t);const d=t;return i=()=>{d&&e&&e.off(r,d)},i},[e,r,t])}const T=(e,r)=>{const{__AMAP__:t,map:i}=J(),[d,s]=u.useState(null);return u.useEffect(()=>{if(!t||!i)return;const l=()=>{const n=r(t,i);s(n)};t[e]?l():t.plugin([`AMap.${e}`],l)},[t,i,e,r]),d},j=e=>`${encodeURIComponent(e)}px`,Be=(e,r=[10,10])=>e==="LT"?`left:${j(r[0])};top:${j(r[1])};`:e==="RT"?`right:${j(r[0])};top:${j(r[1])};`:e==="LB"?`left:${j(r[0])};bottom:${j(r[1])};`:e==="RB"?`right:${j(r[0])};bottom:${j(r[1])};`:typeof e=="object"?["top","right","bottom","left"].reduce((t,i)=>{const d=e[i];return d?`${t}${i}:${j(d)};`:t},""):"",pe=(e,r,t=[10,10])=>{const i=Be(r,t);u.useLayoutEffect(()=>{if(!e||!i)return;const d=e._container;d.style.cssText=i},[e,i]),u.useEffect(()=>{e&&(e._config.position=r,e._config.offset=t)},[e,r,t])},Y=e=>{const{map:r}=J();u.useEffect(()=>{let t;return!e||!r||(t=()=>{r.removeControl(e)},r.addControl(e)),t},[r,e])},k=(e,r)=>{u.useEffect(()=>{var t,i;r?(t=e==null?void 0:e.show)==null||t.call(e):(i=e==null?void 0:e.hide)==null||i.call(e)},[e,r])},je=(e,r)=>{u.useLayoutEffect(()=>{if(!e)return;e._config.showControlButton=r;const t=[e._pitchUp,e._pitchDown,e._rotateLeft,e._rotateRight],i=e._compass,d=e._luopan;i.classList.toggle("amap-compass-black",!r),r?(d.style.removeProperty("background"),t.forEach(s=>{s.style.removeProperty("display")})):(d.style.setProperty("background","rgba(0, 0, 0, 0)"),t.forEach(s=>{s.style.setProperty("display","none")}))},[e,r])},Ge={position:"LT",showControlButton:!0,visible:!0,onShow:void 0,onHide:void 0},we=({position:e,offset:r,showControlButton:t,visible:i,onHide:d,onShow:s})=>{const l=u.useCallback(c=>new c.ControlBar,[]),n=T("ControlBar",l);return pe(n,e,r??[10,10]),je(n,!!t),k(n,i),a(n,"show",s),a(n,"hide",d),Y(n),null};we.defaultProps=Ge;const De=u.memo(we);De.displayName="AMapControlBar";const Fe={showButton:!0,isOpen:!0,visible:!0,onShow:void 0,onHide:void 0},Pe=({autoMove:e,showRectangle:r,showButton:t,isOpen:i,mapStyle:d,width:s,height:l,offset:n,borderStyle:c,borderColor:p,borderRadius:m,borderWidth:o,buttonSize:f,visible:y,onShow:_,onHide:M})=>{const P=u.useMemo(()=>{const h={};return e!==void 0&&(h.autoMove=e),r!==void 0&&(h.showRectangle=r),t!==void 0&&(h.showButton=t),d!==void 0&&(h.mapStyle=d),s!==void 0&&(h.width=s),l!==void 0&&(h.height=l),n!==void 0&&(h.offset=n),c!==void 0&&(h.borderStyle=c),p!==void 0&&(h.borderColor=p),m!==void 0&&(h.borderRadius=m),o!==void 0&&(h.borderWidth=o),f!==void 0&&(h.buttonSize=f),h},[e,r,t,d,s,l,n,c,p,m,o,f]),A=u.useCallback(h=>new h.HawkEye(P),[P]),v=T("HawkEye",A);return u.useEffect(()=>{var h,b;i?(h=v==null?void 0:v.open)==null||h.call(v):(b=v==null?void 0:v.close)==null||b.call(v)},[v,i]),k(v,!!y),a(v,"show",_),a(v,"hide",M),Y(v),null};Pe.defaultProps=Fe;const Ie=u.memo(Pe);Ie.displayName="AMapHawkEye";const io=Ie,Je={position:"LB",visible:!0,onShow:void 0,onHide:void 0},Ze=e=>new e.Scale,Ee=({position:e,offset:r,visible:t,onShow:i,onHide:d})=>{const s=T("Scale",Ze);return pe(s,e,r),k(s,t),a(s,"show",i),a(s,"hide",d),Y(s),null};Ee.defaultProps=Je;const Xe=u.memo(Ee);Xe.displayName="AMapScale";const Ye={position:"LT",visible:!0,onShow:void 0,onHide:void 0},be=({position:e,offset:r,visible:t,onShow:i,onHide:d})=>{const s=u.useCallback(n=>new n.ToolBar,[]),l=T("ToolBar",s);return pe(l,e,r),k(l,t),a(l,"show",i),a(l,"hide",d),Y(l),null};be.defaultProps=Ye;const Ke=u.memo(be);Ke.displayName="AMapToolBar";const Qe={defaultType:0,showTraffic:!1,showRoad:!1,visible:!0,onShow:void 0,onHide:void 0},ee=({defaultType:e,showTraffic:r,showRoad:t,visible:i,onHide:d,onShow:s})=>{const l=u.useCallback(c=>new c.MapType({defaultType:e,showTraffic:r,showRoad:t}),[e,t,r]),n=T("MapType",l);return k(n,!!i),a(n,"show",s),a(n,"hide",d),Y(n),null};ee.defaultProps=Qe;try{ee.displayName="AMapMapType",ee.__docgenInfo={description:"",displayName:"AMapMapType",props:{}}}catch{}const oe=u.forwardRef(({children:e,visible:r,options:t,onShow:i,onHide:d,onClick:s,onDBLClick:l,onRightClick:n,onMousedown:c,onMouseup:p,onMouseover:m,onMouseout:o,onTouchstart:f,onTouchmove:y,onTouchend:_},M)=>{const P=u.useCallback(v=>new v.OverlayGroup,[]),A=T("OverlayGroup",P);return u.useImperativeHandle(M,()=>A,[A]),u.useEffect(()=>{t&&(A==null||A.setOptions(t))},[t,A]),k(A,!!r),a(A,"show",i),a(A,"hide",d),a(A,"click",s),a(A,"dblclick",l),a(A,"rightclick",n),a(A,"mousedown",c),a(A,"mouseup",p),a(A,"mouseover",m),a(A,"mouseout",o),a(A,"touchstart",f),a(A,"touchmove",y),a(A,"touchend",_),D(A),Q(he.Provider,{value:A,children:e})});oe.defaultProps={visible:!0};try{oe.displayName="AMapOverlayGroup",oe.__docgenInfo={description:"",displayName:"AMapOverlayGroup",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"unknown"}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"Boolean"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"((event?: any) => void)"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"((event?: any) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event?: any) => void)"}},onDBLClick:{defaultValue:null,description:"",name:"onDBLClick",required:!1,type:{name:"((event?: any) => void)"}},onRightClick:{defaultValue:null,description:"",name:"onRightClick",required:!1,type:{name:"((event?: any) => void)"}},onMousedown:{defaultValue:null,description:"",name:"onMousedown",required:!1,type:{name:"((event?: any) => void)"}},onMouseup:{defaultValue:null,description:"",name:"onMouseup",required:!1,type:{name:"((event?: any) => void)"}},onMouseover:{defaultValue:null,description:"",name:"onMouseover",required:!1,type:{name:"((event?: any) => void)"}},onMouseout:{defaultValue:null,description:"",name:"onMouseout",required:!1,type:{name:"((event?: any) => void)"}},onTouchstart:{defaultValue:null,description:"",name:"onTouchstart",required:!1,type:{name:"((event?: any) => void)"}},onTouchmove:{defaultValue:null,description:"",name:"onTouchmove",required:!1,type:{name:"((event?: any) => void)"}},onTouchend:{defaultValue:null,description:"",name:"onTouchend",required:!1,type:{name:"((event?: any) => void)"}}}}}catch{}const We={visible:!0},ze=()=>{const{__AMAP__:e,map:r}=J();return u.useCallback(t=>typeof t!="function"?t:(i,d)=>t(i,d,r,e),[e,r])},ne=({geoJSON:e,getPolyline:r,getMarker:t,getPolygon:i,visible:d,options:s})=>{const l=u.useCallback(p=>new p.GeoJSON({}),[]),n=T("GeoJSON",l),c=ze();return u.useEffect(()=>{n&&(n._opts.getPolyline=c(r))},[n,r,c]),u.useEffect(()=>{n&&(n._opts.getMarker=c(t))},[n,t,c]),u.useEffect(()=>{n&&(n._opts.getPolygon=c(i))},[n,i,c]),u.useEffect(()=>{var p;(p=n==null?void 0:n.importData)==null||p.call(n,e)},[e,n]),u.useEffect(()=>{var p;s&&((p=n==null?void 0:n.setOptions)==null||p.call(n,s))},[s,n]),k(n,d),D(n),null};ne.defaultProps=We;try{ne.displayName="AMapGeoJSON",ne.__docgenInfo={description:"",displayName:"AMapGeoJSON",props:{}}}catch{}const eo=e=>new e.Circle,te=u.forwardRef(({center:e,radius:r,zIndex:t,bubble:i,cursor:d,fillColor:s,fillOpacity:l,strokeColor:n,strokeStyle:c,strokeOpacity:p,strokeWeight:m,strokeDasharray:o,extData:f,draggable:y,visible:_,onShow:M,onHide:P,onClick:A,onDBLClick:v,onRightClick:h,onMousedown:b,onMouseup:L,onMouseover:N,onMouseout:x,onTouchstart:V,onTouchmove:q,onTouchend:R},O)=>{const g=T("Circle",eo);u.useImperativeHandle(O,()=>g,[g]);const S=u.useMemo(()=>Object.entries({zIndex:t,bubble:i,cursor:d,fillColor:s,fillOpacity:l,strokeColor:n,strokeStyle:c,strokeOpacity:p,strokeWeight:m,strokeDasharray:o,draggable:y}).filter(([,U])=>U!=null).reduce((U,[H,B])=>(U[H]=B,U),{}),[t,i,d,s,l,n,c,p,m,o,y]);return I(g,"setOptions",S),I(g,"setCenter",e),I(g,"setRadius",r),I(g,"setExtData",f),k(g,!!_),a(g,"show",M),a(g,"hide",P),a(g,"click",A),a(g,"dblclick",v),a(g,"rightclick",h),a(g,"mousedown",b),a(g,"mouseup",L),a(g,"mouseover",N),a(g,"mouseout",x),a(g,"touchstart",V),a(g,"touchmove",q),a(g,"touchend",R),D(g),null});te.defaultProps={visible:!0};try{te.displayName="AMapCircle",te.__docgenInfo={description:"",displayName:"AMapCircle",props:{}}}catch{}const oo={visible:!0,onShow:void 0,onHide:void 0},ae=({center:e,radius:r,zIndex:t,draggable:i,extData:d,cursor:s,bubble:l,fillColor:n,fillOpacity:c,strokeColor:p,strokeOpacity:m,strokeWeight:o,strokeStyle:f,strokeDasharray:y,visible:_,onHide:M,onShow:P,onClick:A,onDBLClick:v,onRightClick:h,onMousedown:b,onMouseup:L,onMouseover:N,onMouseout:x,onTouchstart:V,onTouchmove:q,onTouchend:R})=>{const O=u.useCallback($=>new $.Ellipse,[]),g=T("Ellipse",O);I(g,"setCenter",e),I(g,"setRadius",r),I(g,"setExtData",d);const S=u.useMemo(()=>Object.entries({zIndex:t,bubble:l,cursor:s,fillColor:n,fillOpacity:c,strokeColor:p,strokeStyle:f,strokeOpacity:m,strokeWeight:o,strokeDasharray:y,draggable:i}).filter(([,U])=>U!=null).reduce((U,[H,B])=>(U[H]=B,U),{}),[t,l,s,n,c,p,f,m,o,y,i]);return I(g,"setOptions",S),k(g,!!_),a(g,"show",P),a(g,"hide",M),a(g,"click",A),a(g,"dblclick",v),a(g,"rightclick",h),a(g,"mousedown",b),a(g,"mouseup",L),a(g,"mouseover",N),a(g,"mouseout",x),a(g,"touchstart",V),a(g,"touchmove",q),a(g,"touchend",R),D(g),null};ae.defaultProps=oo;try{ae.displayName="AMapEllipse",ae.__docgenInfo={description:"",displayName:"AMapEllipse",props:{}}}catch{}const no={visible:!0},re=u.forwardRef(({path:e,extrusionHeight:r,extData:t,zIndex:i,bubble:d,cursor:s,strokeColor:l,strokeWeight:n,strokeOpacity:c,fillColor:p,fillOpacity:m,draggable:o,roofColor:f,wallColor:y,strokeStyle:_,strokeDasharray:M,zooms:P,visible:A,onHide:v,onShow:h,onClick:b,onDBLClick:L,onRightClick:N,onMousedown:x,onMouseup:V,onMouseover:q,onMouseout:R,onDragstart:O,onDragging:g,onDragend:S,onTouchstart:$,onTouchmove:U,onTouchend:H},B)=>{const Z=u.useCallback(F=>new F.Polygon,[]),E=T("Polygon",Z);u.useImperativeHandle(B,()=>E,[E]),I(E,"setExtData",t);const w=u.useMemo(()=>Object.entries({zIndex:i,bubble:d,cursor:s,fillColor:p,fillOpacity:m,strokeColor:l,strokeStyle:_,strokeOpacity:c,strokeWeight:n,strokeDasharray:M,draggable:o,zooms:P,roofColor:f,wallColor:y}).filter(([,G])=>G!=null).reduce((G,[C,W])=>(G[C]=W,G),{}),[i,d,s,p,m,l,_,c,n,M,o,P,f,y]);return I(E,"setOptions",w),I(E,"setExtrusionHeight",r),I(E,"setPath",e),k(E,!!A),a(E,"hide",v),a(E,"show",h),a(E,"click",b),a(E,"dblclick",L),a(E,"rightclick",N),a(E,"mousedown",x),a(E,"mouseup",V),a(E,"mouseover",q),a(E,"mouseout",R),a(E,"dragstart",O),a(E,"dragging",g),a(E,"dragend",S),a(E,"touchstart",$),a(E,"touchmove",U),a(E,"touchend",H),D(E),null});re.defaultProps=no;try{re.displayName="AMapPolygon",re.__docgenInfo={description:"",displayName:"AMapPolygon",props:{}}}catch{}const to={visible:!0},se=u.forwardRef(({path:e,extData:r,visible:t,zIndex:i,strokeColor:d,strokeWeight:s,strokeOpacity:l,strokeStyle:n,strokeDasharray:c,borderWeight:p,showDir:m,dirColor:o,dirImg:f,isOutline:y,outlineColor:_,cursor:M,lineJoin:P,lineCap:A,geodesic:v,draggable:h,bubble:b,zooms:L,onHide:N,onShow:x,onClick:V,onDBLClick:q,onRightClick:R,onMousedown:O,onMouseup:g,onMouseover:S,onMouseout:$,onDragstart:U,onDragging:H,onDragend:B,onTouchstart:Z,onTouchmove:E,onTouchend:w},F)=>{const G=u.useCallback(fe=>new fe.Polyline,[]),C=T("Polyline",G);u.useImperativeHandle(F,()=>C,[C]),I(C,"setExtData",r);const W=u.useMemo(()=>Object.entries({zIndex:i,strokeColor:d,strokeWeight:s,strokeOpacity:l,strokeStyle:n,strokeDasharray:c,borderWeight:p,showDir:m,dirColor:o,dirImg:f,isOutline:y,outlineColor:_,cursor:M,lineJoin:P,lineCap:A,geodesic:v,draggable:h,bubble:b,zooms:L}).filter(([,X])=>X!=null).reduce((X,[Ce,Ue])=>(X[Ce]=Ue,X),{}),[i,d,s,l,n,c,p,m,o,f,y,_,M,P,A,v,h,b,L]);return I(C,"setOptions",W),I(C,"setPath",e),k(C,!!t),a(C,"hide",N),a(C,"show",x),a(C,"click",V),a(C,"dblclick",q),a(C,"rightclick",R),a(C,"mousedown",O),a(C,"mouseup",g),a(C,"mouseover",S),a(C,"mouseout",$),a(C,"dragstart",U),a(C,"dragging",H),a(C,"dragend",B),a(C,"touchstart",Z),a(C,"touchmove",E),a(C,"touchend",w),D(C),null});se.defaultProps=to;try{se.displayName="AMapPolyline",se.__docgenInfo={description:"",displayName:"AMapPolyline",props:{}}}catch{}const ao={anchor:"center",cursor:"pointer",angle:0,zIndex:12,clickable:!0,draggable:!1,visible:!0},le=({title:e,icon:r,zooms:t,label:i,clickable:d,draggable:s,cursor:l,extData:n,position:c,anchor:p,offset:m,angle:o,size:f,zIndex:y,content:_,visible:M,onHide:P,onShow:A,onClick:v,onDBLClick:h,onRightClick:b,onMousemove:L,onMousedown:N,onMouseup:x,onMouseover:V,onMouseout:q,onTouchstart:R,onTouchmove:O,onTouchend:g,onDragstart:S,onDragging:$,onDragend:U,onMoving:H,onMoveEnd:B,onMoveAlong:Z})=>{const E=u.useCallback(F=>new F.Marker({zooms:t}),[t]),w=T("Marker",E);return k(w,!!M),I(w,"setPosition",c),I(w,"setTitle",e),I(w,"setIcon",r),I(w,"setLabel",i),I(w,"setClickable",d),I(w,"setDraggable",s),I(w,"setCursor",l),I(w,"setExtData",n),I(w,"setAnchor",p),I(w,"setOffset",m),I(w,"setAngle",o),I(w,"setSize",f),I(w,"setzIndex",y),I(w,"setContent",_),a(w,"show",A),a(w,"hide",P),a(w,"click",v),a(w,"dblclick",h),a(w,"rightclick",b),a(w,"mousemove",L),a(w,"mousedown",N),a(w,"mouseup",x),a(w,"mouseover",V),a(w,"mouseout",q),a(w,"touchstart",R),a(w,"touchmove",O),a(w,"touchend",g),a(w,"dragstart",S),a(w,"dragging",$),a(w,"dragend",U),a(w,"moving",H),a(w,"moveend",B),a(w,"movealong",Z),D(w),null};le.defaultProps=ao;try{le.displayName="AMapMarker",le.__docgenInfo={description:"",displayName:"AMapMarker",props:{}}}catch{}const K=e=>e.className==="Overlay.Polygon",ue=({computeTarget:e,disabled:r,computeAdsorbPolygons:t,onChange:i})=>{const d=u.useRef(i);d.current=i;const s=u.useCallback((m,o)=>new m.PolygonEditor(o),[]),l=T("PolygonEditor",s),{map:n}=J(),c=u.useCallback(()=>{if(!n||!l)return;const m=n.getAllOverlays("polygon")||[],o=e(m)??void 0;l.setTarget(o)},[n,e,l]);u.useEffect(()=>{c()},[n,c]),u.useEffect(()=>{let m;if(!n)return m;const o=f=>{(K(f)||Array.isArray(f)&&f.some(K))&&c()};return m=()=>{n.off("overlaysRemoved",o),n.off("overlaysAdded",o)},n.on("overlaysRemoved",o),n.on("overlaysAdded",o),m},[n,c]);const p=u.useCallback(()=>{if(!n||!l)return;const m=n.getAllOverlays("polygon")||[],o=t==null?void 0:t(m);o?l.setAdsorbPolygons(o):l.clearAdsorbPolygons()},[n,t,l]);return u.useEffect(()=>{p()},[n,p]),u.useEffect(()=>{let m;if(!n)return m;const o=f=>{(K(f)||Array.isArray(f)&&f.some(K))&&p()};return m=()=>{n.off("overlaysRemoved",o),n.off("overlaysAdded",o)},n.on("overlaysRemoved",o),n.on("overlaysAdded",o),m},[n,p]),u.useEffect(()=>{let m;if(!l)return m;const o=y=>{var _;(_=d.current)==null||_.call(d,y)},f=l;return m=()=>{f.off("add",o),f.off("addnode",o),f.off("adjust",o),f.off("removenode",o)},f.on("add",o),f.on("addnode",o),f.on("adjust",o),f.on("removenode",o),m},[l]),u.useEffect(()=>{l&&(r?l.close():l.open())},[l,r]),null};ue.defaultProps={disabled:!1,computeAdsorbPolygons:e=>e};try{ue.displayName="AMapPolygonEditor",ue.__docgenInfo={description:"",displayName:"AMapPolygonEditor",props:{computeTarget:{defaultValue:null,description:"",name:"computeTarget",required:!0,type:{name:"(allPolygons: AMap.Polygon[]) => any"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},computeAdsorbPolygons:{defaultValue:{value:"(allPolygons) => allPolygons"},description:"",name:"computeAdsorbPolygons",required:!1,type:{name:"((allPolygons: AMap.Polygon[]) => AMap.Polygon[] | null) | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((obj: any) => void)"}}}}}catch{}const ve=e=>e.className==="Overlay.Polyline",ie=({computeTarget:e,disabled:r,onChange:t})=>{const i=u.useRef(t);i.current=t;const d=u.useCallback((c,p)=>new c.PolylineEditor(p),[]),s=T("PolylineEditor",d),{map:l}=J(),n=u.useCallback(()=>{if(!l||!s)return;const c=l.getAllOverlays("polyline")||[],p=e(c)??null;s.setTarget(p)},[l,e,s]);return u.useEffect(()=>{n()},[n]),u.useEffect(()=>{let c;if(!l)return c;const p=m=>{(ve(m)||Array.isArray(m)&&m.some(ve))&&n()};return c=()=>{l.off("overlaysRemoved",p),l.off("overlaysAdded",p)},l.on("overlaysRemoved",p),l.on("overlaysAdded",p),c},[l,n]),u.useEffect(()=>{let c;if(!s)return c;const p=o=>{var f;(f=i.current)==null||f.call(i,o)},m=s;return c=()=>{m.off("add",p),m.off("addnode",p),m.off("adjust",p),m.off("removenode",p)},m.on("add",p),m.on("addnode",p),m.on("adjust",p),m.on("removenode",p),c},[s]),u.useEffect(()=>{s&&(r?s.close():s.open())},[s,r]),null};ie.defaultProps={disabled:!1};try{ie.displayName="AMapPolylineEditor",ie.__docgenInfo={description:"",displayName:"AMapPolylineEditor",props:{computeTarget:{defaultValue:null,description:"",name:"computeTarget",required:!0,type:{name:"(allPolyline: AMap.Polyline[]) => any"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((obj: any) => void)"}}}}}catch{}const ro=(e,r)=>new e.MouseTool(r),de=u.forwardRef(({type:e,options:r,onCompleted:t},i)=>{const d=T("MouseTool",ro);return u.useImperativeHandle(i,()=>d,[d]),a(d,"draw",t),u.useEffect(()=>{let s;return d&&(s=()=>d.close(!1),d[e](r??{})),s},[d,r,e]),null});de.defaultProps={options:{},onCompleted:void 0};try{de.displayName="AMapMouseTool",de.__docgenInfo={description:`
Origin Docs See:
https://lbs.amap.com/api/javascript-api/reference/plugin#AMap.MouseTool`,displayName:"AMapMouseTool",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"marker"'},{value:'"circle"'},{value:'"rectangle"'},{value:'"polyline"'},{value:'"polygon"'},{value:'"measureArea"'},{value:'"rule"'},{value:'"rectZoomIn"'},{value:'"rectZoomOut"'}]}},options:{defaultValue:{value:"{}"},description:"",name:"options",required:!1,type:{name:"any"}},onCompleted:{defaultValue:{value:"undefined"},description:"",name:"onCompleted",required:!1,type:{name:"((e: any) => void)"}}}}}catch{}const so=(e,r)=>new e.RangingTool(r,{}),ce=({disabled:e,onNodeAdded:r,onNodeRemoved:t,onEnd:i})=>{const d=T("RangingTool",so);return u.useEffect(()=>{d&&(e?d.turnOff():d.turnOn())},[e,d]),a(d,"addnode",r),a(d,"removenode",t),a(d,"end",i),null};ce.defaultProps={disabled:!1};try{ce.displayName="AMapRangingTool",ce.__docgenInfo={description:"",displayName:"AMapRangingTool",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onNodeAdded:{defaultValue:null,description:"",name:"onNodeAdded",required:!1,type:{name:"((event?: any) => void)"}},onNodeRemoved:{defaultValue:null,description:"",name:"onNodeRemoved",required:!1,type:{name:"((event?: any) => void)"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"((event?: any) => void)"}}}}}catch{}export{te as A,De as a,ae as b,me as c,ne as d,io as e,He as f,ee as g,de as h,oe as i,le as j,re as k,ue as l,se as m,ie as n,ce as o,Xe as p,Ke as q,J as r,Me as u};
