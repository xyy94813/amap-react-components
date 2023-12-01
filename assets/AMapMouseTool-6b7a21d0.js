import{r as u,c as Ue,g as Le}from"./index-4139ccbc.js";import{j as Q}from"./jsx-runtime-91db03d0.js";const ke={__AMAP__:null,__AMAP_UI__:null},ve=u.createContext(ke);var Ae={exports:{}};(function(e,s){(function(t,i){e.exports=i()})(Ue,function(){function t(o){var f=[];return o.AMapUI&&f.push(i(o.AMapUI)),o.Loca&&f.push(d(o.Loca)),Promise.all(f)}function i(o){return new Promise(function(f,y){var _=[];if(o.plugins)for(var M=0;M<o.plugins.length;M+=1)l.AMapUI.plugins.indexOf(o.plugins[M])==-1&&_.push(o.plugins[M]);if(n.AMapUI===r.failed)y("前次请求 AMapUI 失败");else if(n.AMapUI===r.notload){n.AMapUI=r.loading,l.AMapUI.version=o.version||l.AMapUI.version,M=l.AMapUI.version;var P=document.body||document.head,A=document.createElement("script");A.type="text/javascript",A.src="https://webapi.amap.com/ui/"+M+"/main.js",A.onerror=function(v){n.AMapUI=r.failed,y("请求 AMapUI 失败")},A.onload=function(){if(n.AMapUI=r.loaded,_.length)window.AMapUI.loadUI(_,function(){for(var v=0,h=_.length;v<h;v++){var b=_[v].split("/").slice(-1)[0];window.AMapUI[b]=arguments[v]}for(f();c.AMapUI.length;)c.AMapUI.splice(0,1)[0]()});else for(f();c.AMapUI.length;)c.AMapUI.splice(0,1)[0]()},P.appendChild(A)}else n.AMapUI===r.loaded?o.version&&o.version!==l.AMapUI.version?y("不允许多个版本 AMapUI 混用"):_.length?window.AMapUI.loadUI(_,function(){for(var v=0,h=_.length;v<h;v++){var b=_[v].split("/").slice(-1)[0];window.AMapUI[b]=arguments[v]}f()}):f():o.version&&o.version!==l.AMapUI.version?y("不允许多个版本 AMapUI 混用"):c.AMapUI.push(function(v){v?y(v):_.length?window.AMapUI.loadUI(_,function(){for(var h=0,b=_.length;h<b;h++){var L=_[h].split("/").slice(-1)[0];window.AMapUI[L]=arguments[h]}f()}):f()})})}function d(o){return new Promise(function(f,y){if(n.Loca===r.failed)y("前次请求 Loca 失败");else if(n.Loca===r.notload){n.Loca=r.loading,l.Loca.version=o.version||l.Loca.version;var _=l.Loca.version,M=l.AMap.version.startsWith("2"),P=_.startsWith("2");if(M&&!P||!M&&P)y("JSAPI 与 Loca 版本不对应！！");else{M=l.key,P=document.body||document.head;var A=document.createElement("script");A.type="text/javascript",A.src="https://webapi.amap.com/loca?v="+_+"&key="+M,A.onerror=function(v){n.Loca=r.failed,y("请求 AMapUI 失败")},A.onload=function(){for(n.Loca=r.loaded,f();c.Loca.length;)c.Loca.splice(0,1)[0]()},P.appendChild(A)}}else n.Loca===r.loaded?o.version&&o.version!==l.Loca.version?y("不允许多个版本 Loca 混用"):f():o.version&&o.version!==l.Loca.version?y("不允许多个版本 Loca 混用"):c.Loca.push(function(v){v?y(v):y()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var r;(function(o){o.notload="notload",o.loading="loading",o.loaded="loaded",o.failed="failed"})(r||(r={}));var l={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},n={AMap:r.notload,AMapUI:r.notload,Loca:r.notload},c={AMap:[],AMapUI:[],Loca:[]},p=[],m=function(o){typeof o=="function"&&(n.AMap===r.loaded?o(window.AMap):p.push(o))};return{load:function(o){return new Promise(function(f,y){if(n.AMap==r.failed)y("");else if(n.AMap==r.notload){var _=o.key,M=o.version,P=o.plugins;_?(window.AMap&&location.host!=="lbs.amap.com"&&y("禁止多种API加载方式混用"),l.key=_,l.AMap.version=M||l.AMap.version,l.AMap.plugins=P||l.AMap.plugins,n.AMap=r.loading,M=document.body||document.head,window.___onAPILoaded=function(v){if(delete window.___onAPILoaded,v)n.AMap=r.failed,y(v);else for(n.AMap=r.loaded,t(o).then(function(){f(window.AMap)}).catch(y);p.length;)p.splice(0,1)[0]()},P=document.createElement("script"),P.type="text/javascript",P.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+l.AMap.version+"&key="+_+"&plugin="+l.AMap.plugins.join(","),P.onerror=function(v){n.AMap=r.failed,y(v)},M.appendChild(P)):y("请填写key")}else if(n.AMap==r.loaded)if(o.key&&o.key!==l.key)y("多个不一致的 key");else if(o.version&&o.version!==l.AMap.version)y("不允许多个版本 JSAPI 混用");else{if(_=[],o.plugins)for(M=0;M<o.plugins.length;M+=1)l.AMap.plugins.indexOf(o.plugins[M])==-1&&_.push(o.plugins[M]);_.length?window.AMap.plugin(_,function(){t(o).then(function(){f(window.AMap)}).catch(y)}):t(o).then(function(){f(window.AMap)}).catch(y)}else if(o.key&&o.key!==l.key)y("多个不一致的 key");else if(o.version&&o.version!==l.AMap.version)y("不允许多个版本 JSAPI 混用");else{var A=[];if(o.plugins)for(M=0;M<o.plugins.length;M+=1)l.AMap.plugins.indexOf(o.plugins[M])==-1&&A.push(o.plugins[M]);m(function(){A.length?window.AMap.plugin(A,function(){t(o).then(function(){f(window.AMap)}).catch(y)}):t(o).then(function(){f(window.AMap)}).catch(y)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,l={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},n={AMap:r.notload,AMapUI:r.notload,Loca:r.notload},c={AMap:[],AMapUI:[],Loca:[]}}}})})(Ae);var Te=Ae.exports;const xe=Le(Te),z=()=>globalThis??global??window,Ne="2.0",Ve="1.1",qe={version:Ne},fe=e=>{const{AMapUI:s,...t}=e,i=()=>xe.load({...qe,...t,AMapUI:s&&{version:Ve,...s}});let{AMap:d,AMapUI:r}=z();return u.lazy(async()=>{var n;if(!d||!r)await i(),d=z().AMap,r=z().AMapUI;else{const c=[];(((n=t.plugins)==null?void 0:n.length)??0)>0&&c.push(new Promise(p=>{d.plugin(t.plugins,p)})),await Promise.all(c)}return{default:({children:c})=>Q(ve.Provider,{value:{__AMAP__:d,__AMAP_UI__:r},children:c})}})};try{fe.displayName="createAMapAPIContainer",fe.__docgenInfo={description:"",displayName:"createAMapAPIContainer",props:{key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},plugins:{defaultValue:null,description:"",name:"plugins",required:!1,type:{name:"string[]"}},AMapUI:{defaultValue:null,description:"",name:"AMapUI",required:!1,type:{name:"{ version?: string; plugins?: string[]; } | undefined"}},Loca:{defaultValue:null,description:"",name:"Loca",required:!1,type:{name:"{ version?: string; }"}},version:{defaultValue:null,description:"",name:"version",required:!1,type:{name:"string"}}}}}catch{}const ye=()=>u.useContext(ve),Oe=null,Me=u.createContext(Oe),I=(e,s,...t)=>{u.useEffect(()=>{var i;(i=e==null?void 0:e[s])==null||i.call(e,...t)},[e,s,...t])},Se={width:"100%",height:"100%"},Re={viewMode:"2D",features:["bg","point","road","building"]},ge=u.forwardRef(({children:e,center:s,cityName:t,zoom:i,features:d,mapStyle:r,viewMode:l,pitch:n},c)=>{const{__AMAP__:p}=ye(),m=u.useRef(null),[o,f]=u.useState(null);return u.useEffect(()=>{let y;return!m.current||!p||(()=>{const M=new p.Map(m.current,{viewMode:l}),P=new Proxy(M,{get(A,v){return v==="add"?b=>{const L=A.add(b);return M.emit("overlaysAdded",b),L}:v==="remove"?b=>{const L=A.remove(b);return M.emit("overlaysRemoved",b),L}:A[v]}});y=()=>{M.destroy()},f(P)})(),y},[p,l]),u.useImperativeHandle(c,()=>o,[o]),I(o,"setMapStyle",r),u.useEffect(()=>{t&&(o==null||o.setCity(t,()=>{}))},[t,o]),u.useEffect(()=>{i&&(o==null||o.setZoom(i))},[i,o]),u.useEffect(()=>{s&&(o==null||o.setCenter(s))},[s,o]),I(o,"setFeatures",d),I(o,"setPitch",n),Q("div",{style:Se,ref:m,children:Q(Me.Provider,{value:o,children:e})})});ge.defaultProps=Re;const $e=u.memo(ge);$e.displayName="AMapMap";const J=()=>{const{__AMAP__:e,__AMAP_UI__:s}=ye(),t=u.useContext(Me);return{__AMAP__:e,__AMAP_UI__:s,map:t}},_e=u.createContext(null),D=e=>{const s=u.useContext(_e),{map:t}=J();u.useEffect(()=>{let i;return e&&(s?(s.addOverlay(e),i=()=>{try{s.removeOverlay(e)}catch{}}):t&&(t.add(e),i=()=>{try{t.remove(e)}catch{}})),i},[e,t,s])};function a(e,s,t){u.useEffect(()=>{let i;if(!e||!t)return i;e.on(s,t);const d=t;return i=()=>{d&&e&&e.off(s,d)},i},[e,s,t])}const k=(e,s)=>{const{__AMAP__:t,map:i}=J(),[d,r]=u.useState(null);return u.useEffect(()=>{if(!t||!i)return;const l=()=>{const n=s(t,i);r(n)};t[e]?l():t.plugin([`AMap.${e}`],l)},[t,i,e,s]),d},j=e=>`${encodeURIComponent(e)}px`,He=(e,s=[10,10])=>e==="LT"?`left:${j(s[0])};top:${j(s[1])};`:e==="RT"?`right:${j(s[0])};top:${j(s[1])};`:e==="LB"?`left:${j(s[0])};bottom:${j(s[1])};`:e==="RB"?`right:${j(s[0])};bottom:${j(s[1])};`:typeof e=="object"?["top","right","bottom","left"].reduce((t,i)=>{const d=e[i];return d?`${t}${i}:${j(d)};`:t},""):"",ce=(e,s,t=[10,10])=>{const i=He(s,t);u.useLayoutEffect(()=>{if(!e||!i)return;const d=e._container;d.style.cssText=i},[e,i]),u.useEffect(()=>{e&&(e._config.position=s,e._config.offset=t)},[e,s,t])},Y=e=>{const{map:s}=J();u.useEffect(()=>{let t;return!e||!s||(t=()=>{s.removeControl(e)},s.addControl(e)),t},[s,e])},T=(e,s)=>{u.useEffect(()=>{var t,i;s?(t=e==null?void 0:e.show)==null||t.call(e):(i=e==null?void 0:e.hide)==null||i.call(e)},[e,s])},Be=(e,s)=>{u.useLayoutEffect(()=>{if(!e)return;e._config.showControlButton=s;const t=[e._pitchUp,e._pitchDown,e._rotateLeft,e._rotateRight],i=e._compass,d=e._luopan;i.classList.toggle("amap-compass-black",!s),s?(d.style.removeProperty("background"),t.forEach(r=>{r.style.removeProperty("display")})):(d.style.setProperty("background","rgba(0, 0, 0, 0)"),t.forEach(r=>{r.style.setProperty("display","none")}))},[e,s])},je={position:"LT",showControlButton:!0,visible:!0,onShow:void 0,onHide:void 0},he=({position:e,offset:s,showControlButton:t,visible:i,onHide:d,onShow:r})=>{const l=u.useCallback(c=>new c.ControlBar,[]),n=k("ControlBar",l);return ce(n,e,s??[10,10]),Be(n,!!t),T(n,i),a(n,"show",r),a(n,"hide",d),Y(n),null};he.defaultProps=je;const Ge=u.memo(he);Ge.displayName="AMapControlBar";const De={showButton:!0,isOpen:!0,visible:!0,onShow:void 0,onHide:void 0},we=({autoMove:e,showRectangle:s,showButton:t,isOpen:i,mapStyle:d,width:r,height:l,offset:n,borderStyle:c,borderColor:p,borderRadius:m,borderWidth:o,buttonSize:f,visible:y,onShow:_,onHide:M})=>{const P=u.useMemo(()=>{const h={};return e!==void 0&&(h.autoMove=e),s!==void 0&&(h.showRectangle=s),t!==void 0&&(h.showButton=t),d!==void 0&&(h.mapStyle=d),r!==void 0&&(h.width=r),l!==void 0&&(h.height=l),n!==void 0&&(h.offset=n),c!==void 0&&(h.borderStyle=c),p!==void 0&&(h.borderColor=p),m!==void 0&&(h.borderRadius=m),o!==void 0&&(h.borderWidth=o),f!==void 0&&(h.buttonSize=f),h},[e,s,t,d,r,l,n,c,p,m,o,f]),A=u.useCallback(h=>new h.HawkEye(P),[P]),v=k("HawkEye",A);return u.useEffect(()=>{var h,b;i?(h=v==null?void 0:v.open)==null||h.call(v):(b=v==null?void 0:v.close)==null||b.call(v)},[v,i]),T(v,!!y),a(v,"show",_),a(v,"hide",M),Y(v),null};we.defaultProps=De;const Pe=u.memo(we);Pe.displayName="AMapHawkEye";const lo=Pe,Fe={position:"LB",visible:!0,onShow:void 0,onHide:void 0},Je=e=>new e.Scale,Ie=({position:e,offset:s,visible:t,onShow:i,onHide:d})=>{const r=k("Scale",Je);return ce(r,e,s),T(r,t),a(r,"show",i),a(r,"hide",d),Y(r),null};Ie.defaultProps=Fe;const Ze=u.memo(Ie);Ze.displayName="AMapScale";const Xe={position:"LT",visible:!0,onShow:void 0,onHide:void 0},Ee=({position:e,offset:s,visible:t,onShow:i,onHide:d})=>{const r=u.useCallback(n=>new n.ToolBar,[]),l=k("ToolBar",r);return ce(l,e,s),T(l,t),a(l,"show",i),a(l,"hide",d),Y(l),null};Ee.defaultProps=Xe;const Ye=u.memo(Ee);Ye.displayName="AMapToolBar";const Ke={defaultType:0,showTraffic:!1,showRoad:!1,visible:!0,onShow:void 0,onHide:void 0},ee=({defaultType:e,showTraffic:s,showRoad:t,visible:i,onHide:d,onShow:r})=>{const l=u.useCallback(c=>new c.MapType({defaultType:e,showTraffic:s,showRoad:t}),[e,t,s]),n=k("MapType",l);return T(n,!!i),a(n,"show",r),a(n,"hide",d),Y(n),null};ee.defaultProps=Ke;try{ee.displayName="AMapMapType",ee.__docgenInfo={description:"",displayName:"AMapMapType",props:{}}}catch{}const oe=u.forwardRef(({children:e,visible:s,options:t,onShow:i,onHide:d,onClick:r,onDBLClick:l,onRightClick:n,onMousedown:c,onMouseup:p,onMouseover:m,onMouseout:o,onTouchstart:f,onTouchmove:y,onTouchend:_},M)=>{const P=u.useCallback(v=>new v.OverlayGroup,[]),A=k("OverlayGroup",P);return u.useImperativeHandle(M,()=>A,[A]),u.useEffect(()=>{t&&(A==null||A.setOptions(t))},[t,A]),T(A,!!s),a(A,"show",i),a(A,"hide",d),a(A,"click",r),a(A,"dblclick",l),a(A,"rightclick",n),a(A,"mousedown",c),a(A,"mouseup",p),a(A,"mouseover",m),a(A,"mouseout",o),a(A,"touchstart",f),a(A,"touchmove",y),a(A,"touchend",_),D(A),Q(_e.Provider,{value:A,children:e})});oe.defaultProps={visible:!0};try{oe.displayName="AMapOverlayGroup",oe.__docgenInfo={description:"",displayName:"AMapOverlayGroup",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"any"}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"Boolean"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"((event?: any) => void)"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"((event?: any) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event?: any) => void)"}},onDBLClick:{defaultValue:null,description:"",name:"onDBLClick",required:!1,type:{name:"((event?: any) => void)"}},onRightClick:{defaultValue:null,description:"",name:"onRightClick",required:!1,type:{name:"((event?: any) => void)"}},onMousedown:{defaultValue:null,description:"",name:"onMousedown",required:!1,type:{name:"((event?: any) => void)"}},onMouseup:{defaultValue:null,description:"",name:"onMouseup",required:!1,type:{name:"((event?: any) => void)"}},onMouseover:{defaultValue:null,description:"",name:"onMouseover",required:!1,type:{name:"((event?: any) => void)"}},onMouseout:{defaultValue:null,description:"",name:"onMouseout",required:!1,type:{name:"((event?: any) => void)"}},onTouchstart:{defaultValue:null,description:"",name:"onTouchstart",required:!1,type:{name:"((event?: any) => void)"}},onTouchmove:{defaultValue:null,description:"",name:"onTouchmove",required:!1,type:{name:"((event?: any) => void)"}},onTouchend:{defaultValue:null,description:"",name:"onTouchend",required:!1,type:{name:"((event?: any) => void)"}}}}}catch{}const Qe={visible:!0},We=()=>{const{__AMAP__:e,map:s}=J();return u.useCallback(t=>typeof t!="function"?t:(i,d)=>t(i,d,s,e),[e,s])},ne=({geoJSON:e,getPolyline:s,getMarker:t,getPolygon:i,visible:d,options:r})=>{const l=u.useCallback(p=>new p.GeoJSON({}),[]),n=k("GeoJSON",l),c=We();return u.useEffect(()=>{n&&(n._opts.getPolyline=c(s))},[n,s,c]),u.useEffect(()=>{n&&(n._opts.getMarker=c(t))},[n,t,c]),u.useEffect(()=>{n&&(n._opts.getPolygon=c(i))},[n,i,c]),u.useEffect(()=>{var p;(p=n==null?void 0:n.importData)==null||p.call(n,e)},[e,n]),u.useEffect(()=>{var p;r&&((p=n==null?void 0:n.setOptions)==null||p.call(n,r))},[r,n]),T(n,d),D(n),null};ne.defaultProps=Qe;try{ne.displayName="AMapGeoJSON",ne.__docgenInfo={description:"",displayName:"AMapGeoJSON",props:{}}}catch{}const ze=e=>new e.Circle,te=u.forwardRef(({center:e,radius:s,zIndex:t,bubble:i,cursor:d,fillColor:r,fillOpacity:l,strokeColor:n,strokeStyle:c,strokeOpacity:p,strokeWeight:m,strokeDasharray:o,extData:f,draggable:y,visible:_,onShow:M,onHide:P,onClick:A,onDBLClick:v,onRightClick:h,onMousedown:b,onMouseup:L,onMouseover:x,onMouseout:N,onTouchstart:V,onTouchmove:q,onTouchend:O},S)=>{const g=k("Circle",ze);u.useImperativeHandle(S,()=>g,[g]);const R=u.useMemo(()=>Object.entries({zIndex:t,bubble:i,cursor:d,fillColor:r,fillOpacity:l,strokeColor:n,strokeStyle:c,strokeOpacity:p,strokeWeight:m,strokeDasharray:o,draggable:y}).filter(([,U])=>U!=null).reduce((U,[H,B])=>(U[H]=B,U),{}),[t,i,d,r,l,n,c,p,m,o,y]);return I(g,"setOptions",R),I(g,"setCenter",e),I(g,"setRadius",s),I(g,"setExtData",f),T(g,!!_),a(g,"show",M),a(g,"hide",P),a(g,"click",A),a(g,"dblclick",v),a(g,"rightclick",h),a(g,"mousedown",b),a(g,"mouseup",L),a(g,"mouseover",x),a(g,"mouseout",N),a(g,"touchstart",V),a(g,"touchmove",q),a(g,"touchend",O),D(g),null});te.defaultProps={visible:!0};try{te.displayName="AMapCircle",te.__docgenInfo={description:"",displayName:"AMapCircle",props:{}}}catch{}const eo={visible:!0,onShow:void 0,onHide:void 0},ae=({center:e,radius:s,zIndex:t,draggable:i,extData:d,cursor:r,bubble:l,fillColor:n,fillOpacity:c,strokeColor:p,strokeOpacity:m,strokeWeight:o,strokeStyle:f,strokeDasharray:y,visible:_,onHide:M,onShow:P,onClick:A,onDBLClick:v,onRightClick:h,onMousedown:b,onMouseup:L,onMouseover:x,onMouseout:N,onTouchstart:V,onTouchmove:q,onTouchend:O})=>{const S=u.useCallback($=>new $.Ellipse,[]),g=k("Ellipse",S);I(g,"setCenter",e),I(g,"setRadius",s),I(g,"setExtData",d);const R=u.useMemo(()=>Object.entries({zIndex:t,bubble:l,cursor:r,fillColor:n,fillOpacity:c,strokeColor:p,strokeStyle:f,strokeOpacity:m,strokeWeight:o,strokeDasharray:y,draggable:i}).filter(([,U])=>U!=null).reduce((U,[H,B])=>(U[H]=B,U),{}),[t,l,r,n,c,p,f,m,o,y,i]);return I(g,"setOptions",R),T(g,!!_),a(g,"show",P),a(g,"hide",M),a(g,"click",A),a(g,"dblclick",v),a(g,"rightclick",h),a(g,"mousedown",b),a(g,"mouseup",L),a(g,"mouseover",x),a(g,"mouseout",N),a(g,"touchstart",V),a(g,"touchmove",q),a(g,"touchend",O),D(g),null};ae.defaultProps=eo;try{ae.displayName="AMapEllipse",ae.__docgenInfo={description:"",displayName:"AMapEllipse",props:{}}}catch{}const oo={visible:!0},re=u.forwardRef(({path:e,extrusionHeight:s,extData:t,zIndex:i,bubble:d,cursor:r,strokeColor:l,strokeWeight:n,strokeOpacity:c,fillColor:p,fillOpacity:m,draggable:o,roofColor:f,wallColor:y,strokeStyle:_,strokeDasharray:M,zooms:P,visible:A,onHide:v,onShow:h,onClick:b,onDBLClick:L,onRightClick:x,onMousedown:N,onMouseup:V,onMouseover:q,onMouseout:O,onDragstart:S,onDragging:g,onDragend:R,onTouchstart:$,onTouchmove:U,onTouchend:H},B)=>{const Z=u.useCallback(F=>new F.Polygon,[]),E=k("Polygon",Z);u.useImperativeHandle(B,()=>E,[E]),I(E,"setExtData",t);const w=u.useMemo(()=>Object.entries({zIndex:i,bubble:d,cursor:r,fillColor:p,fillOpacity:m,strokeColor:l,strokeStyle:_,strokeOpacity:c,strokeWeight:n,strokeDasharray:M,draggable:o,zooms:P,roofColor:f,wallColor:y}).filter(([,G])=>G!=null).reduce((G,[C,W])=>(G[C]=W,G),{}),[i,d,r,p,m,l,_,c,n,M,o,P,f,y]);return I(E,"setOptions",w),I(E,"setExtrusionHeight",s),I(E,"setPath",e),T(E,!!A),a(E,"hide",v),a(E,"show",h),a(E,"click",b),a(E,"dblclick",L),a(E,"rightclick",x),a(E,"mousedown",N),a(E,"mouseup",V),a(E,"mouseover",q),a(E,"mouseout",O),a(E,"dragstart",S),a(E,"dragging",g),a(E,"dragend",R),a(E,"touchstart",$),a(E,"touchmove",U),a(E,"touchend",H),D(E),null});re.defaultProps=oo;try{re.displayName="AMapPolygon",re.__docgenInfo={description:"",displayName:"AMapPolygon",props:{}}}catch{}const no={visible:!0},se=u.forwardRef(({path:e,extData:s,visible:t,zIndex:i,strokeColor:d,strokeWeight:r,strokeOpacity:l,strokeStyle:n,strokeDasharray:c,borderWeight:p,showDir:m,dirColor:o,dirImg:f,isOutline:y,outlineColor:_,cursor:M,lineJoin:P,lineCap:A,geodesic:v,draggable:h,bubble:b,zooms:L,onHide:x,onShow:N,onClick:V,onDBLClick:q,onRightClick:O,onMousedown:S,onMouseup:g,onMouseover:R,onMouseout:$,onDragstart:U,onDragging:H,onDragend:B,onTouchstart:Z,onTouchmove:E,onTouchend:w},F)=>{const G=u.useCallback(pe=>new pe.Polyline,[]),C=k("Polyline",G);u.useImperativeHandle(F,()=>C,[C]),I(C,"setExtData",s);const W=u.useMemo(()=>Object.entries({zIndex:i,strokeColor:d,strokeWeight:r,strokeOpacity:l,strokeStyle:n,strokeDasharray:c,borderWeight:p,showDir:m,dirColor:o,dirImg:f,isOutline:y,outlineColor:_,cursor:M,lineJoin:P,lineCap:A,geodesic:v,draggable:h,bubble:b,zooms:L}).filter(([,X])=>X!=null).reduce((X,[be,Ce])=>(X[be]=Ce,X),{}),[i,d,r,l,n,c,p,m,o,f,y,_,M,P,A,v,h,b,L]);return I(C,"setOptions",W),I(C,"setPath",e),T(C,!!t),a(C,"hide",x),a(C,"show",N),a(C,"click",V),a(C,"dblclick",q),a(C,"rightclick",O),a(C,"mousedown",S),a(C,"mouseup",g),a(C,"mouseover",R),a(C,"mouseout",$),a(C,"dragstart",U),a(C,"dragging",H),a(C,"dragend",B),a(C,"touchstart",Z),a(C,"touchmove",E),a(C,"touchend",w),D(C),null});se.defaultProps=no;try{se.displayName="AMapPolyline",se.__docgenInfo={description:"",displayName:"AMapPolyline",props:{}}}catch{}const to={anchor:"center",cursor:"pointer",angle:0,zIndex:12,clickable:!0,draggable:!1,visible:!0},le=({title:e,icon:s,zooms:t,label:i,clickable:d,draggable:r,cursor:l,extData:n,position:c,anchor:p,offset:m,angle:o,size:f,zIndex:y,content:_,visible:M,onHide:P,onShow:A,onClick:v,onDBLClick:h,onRightClick:b,onMousemove:L,onMousedown:x,onMouseup:N,onMouseover:V,onMouseout:q,onTouchstart:O,onTouchmove:S,onTouchend:g,onDragstart:R,onDragging:$,onDragend:U,onMoving:H,onMoveEnd:B,onMoveAlong:Z})=>{const E=u.useCallback(F=>new F.Marker({zooms:t}),[t]),w=k("Marker",E);return T(w,!!M),I(w,"setPosition",c),I(w,"setTitle",e),I(w,"setIcon",s),I(w,"setLabel",i),I(w,"setClickable",d),I(w,"setDraggable",r),I(w,"setCursor",l),I(w,"setExtData",n),I(w,"setAnchor",p),I(w,"setOffset",m),I(w,"setAngle",o),I(w,"setSize",f),I(w,"setzIndex",y),I(w,"setContent",_),a(w,"show",A),a(w,"hide",P),a(w,"click",v),a(w,"dblclick",h),a(w,"rightclick",b),a(w,"mousemove",L),a(w,"mousedown",x),a(w,"mouseup",N),a(w,"mouseover",V),a(w,"mouseout",q),a(w,"touchstart",O),a(w,"touchmove",S),a(w,"touchend",g),a(w,"dragstart",R),a(w,"dragging",$),a(w,"dragend",U),a(w,"moving",H),a(w,"moveend",B),a(w,"movealong",Z),D(w),null};le.defaultProps=to;try{le.displayName="AMapMarker",le.__docgenInfo={description:"",displayName:"AMapMarker",props:{}}}catch{}const K=e=>e.className==="Overlay.Polygon",ue=({computeTarget:e,disabled:s,computeAdsorbPolygons:t,onChange:i})=>{const d=u.useRef(i);d.current=i;const r=u.useCallback((m,o)=>new m.PolygonEditor(o),[]),l=k("PolygonEditor",r),{map:n}=J(),c=u.useCallback(()=>{if(!n||!l)return;const m=n.getAllOverlays("polygon")||[],o=e(m)??null;l.setTarget(o)},[n,e,l]);u.useEffect(()=>{c()},[n,c]),u.useEffect(()=>{let m;if(!n)return m;const o=f=>{(K(f)||Array.isArray(f)&&f.some(K))&&c()};return m=()=>{n.off("overlaysRemoved",o),n.off("overlaysAdded",o)},n.on("overlaysRemoved",o),n.on("overlaysAdded",o),m},[n,c]);const p=u.useCallback(()=>{if(!n||!l)return;const m=n.getAllOverlays("polygon")||[],o=t==null?void 0:t(m);o?l.setAdsorbPolygons(o):l.clearAdsorbPolygons()},[n,t,l]);return u.useEffect(()=>{p()},[n,p]),u.useEffect(()=>{let m;if(!n)return m;const o=f=>{(K(f)||Array.isArray(f)&&f.some(K))&&p()};return m=()=>{n.off("overlaysRemoved",o),n.off("overlaysAdded",o)},n.on("overlaysRemoved",o),n.on("overlaysAdded",o),m},[n,p]),u.useEffect(()=>{let m;if(!l)return m;const o=y=>{var _;(_=d.current)==null||_.call(d,y)},f=l;return m=()=>{f.off("add",o),f.off("addnode",o),f.off("adjust",o),f.off("removenode",o)},f.on("add",o),f.on("addnode",o),f.on("adjust",o),f.on("removenode",o),m},[l]),u.useEffect(()=>{l&&(s?l.close():l.open())},[l,s]),null};ue.defaultProps={disabled:!1,computeAdsorbPolygons:e=>e};try{ue.displayName="AMapPolygonEditor",ue.__docgenInfo={description:"",displayName:"AMapPolygonEditor",props:{computeTarget:{defaultValue:null,description:"",name:"computeTarget",required:!0,type:{name:"(allPolygons: AMap.Polygon[]) => any"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},computeAdsorbPolygons:{defaultValue:{value:"(allPolygons) => allPolygons"},description:"",name:"computeAdsorbPolygons",required:!1,type:{name:"((allPolygons: AMap.Polygon[]) => AMap.Polygon[] | null) | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((obj: any) => void)"}}}}}catch{}const me=e=>e.className==="Overlay.Polyline",ie=({computeTarget:e,disabled:s,onChange:t})=>{const i=u.useRef(t);i.current=t;const d=u.useCallback((c,p)=>new c.PolylineEditor(p),[]),r=k("PolylineEditor",d),{map:l}=J(),n=u.useCallback(()=>{if(!l||!r)return;const c=l.getAllOverlays("polyline")||[],p=e(c)??null;r.setTarget(p)},[l,e,r]);return u.useEffect(()=>{n()},[n]),u.useEffect(()=>{let c;if(!l)return c;const p=m=>{(me(m)||Array.isArray(m)&&m.some(me))&&n()};return c=()=>{l.off("overlaysRemoved",p),l.off("overlaysAdded",p)},l.on("overlaysRemoved",p),l.on("overlaysAdded",p),c},[l,n]),u.useEffect(()=>{let c;if(!r)return c;const p=o=>{var f;(f=i.current)==null||f.call(i,o)},m=r;return c=()=>{m.off("add",p),m.off("addnode",p),m.off("adjust",p),m.off("removenode",p)},m.on("add",p),m.on("addnode",p),m.on("adjust",p),m.on("removenode",p),c},[r]),u.useEffect(()=>{r&&(s?r.close():r.open())},[r,s]),null};ie.defaultProps={disabled:!1};try{ie.displayName="AMapPolylineEditor",ie.__docgenInfo={description:"",displayName:"AMapPolylineEditor",props:{computeTarget:{defaultValue:null,description:"",name:"computeTarget",required:!0,type:{name:"(allPolyline: AMap.Polyline[]) => any"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((obj: any) => void)"}}}}}catch{}const ao=(e,s)=>new e.MouseTool(s),de=u.forwardRef(({type:e,options:s,onCompleted:t},i)=>{const d=k("MouseTool",ao);return u.useImperativeHandle(i,()=>d,[d]),a(d,"draw",t),u.useEffect(()=>{let r;return d&&(r=()=>d.close(!1),d[e](s??{})),r},[d,s,e]),null});de.defaultProps={options:{},onCompleted:void 0};try{de.displayName="AMapMouseTool",de.__docgenInfo={description:`
Origin Docs See:
https://lbs.amap.com/api/javascript-api/reference/plugin#AMap.MouseTool`,displayName:"AMapMouseTool",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"marker"'},{value:'"circle"'},{value:'"rectangle"'},{value:'"polyline"'},{value:'"polygon"'},{value:'"measureArea"'},{value:'"rule"'},{value:'"rectZoomIn"'},{value:'"rectZoomOut"'}]}},options:{defaultValue:{value:"{}"},description:"",name:"options",required:!1,type:{name:"any"}},onCompleted:{defaultValue:{value:"undefined"},description:"",name:"onCompleted",required:!1,type:{name:"((e: any) => void)"}}}}}catch{}export{Ye as A,Ze as a,ie as b,se as c,ne as d,ue as e,re as f,oe as g,te as h,ae as i,le as j,de as k,ee as l,$e as m,lo as n,Ge as o,fe as p,J as q,ye as u};
//# sourceMappingURL=AMapMouseTool-6b7a21d0.js.map