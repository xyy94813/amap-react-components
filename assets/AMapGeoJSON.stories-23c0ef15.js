import"./index-1b03fe98.js";import{d as A}from"./AMapRangingTool-92e6d381.js";import{c as P}from"./coordsOfGeoJSON2AMapPolygonPath-d0760c1b.js";import{w as S}from"./withAutoFitView-6bf2fa1c.js";import{w as f}from"./withAMap-fe20156d.js";import{w as C,a as J}from"./withAPIContainer-1833a990.js";import"./jsx-runtime-86dfebf6.js";const b={type:"Point",coordinates:[116.39,39.9]},k={type:"LineString",coordinates:[[116.388904,39.903423],[116.392122,39.901176]]},N={type:"Polygon",coordinates:[[[116.386069,39.898857],[116.386023,39.897477],[116.387719,39.897539],[116.386069,39.898857]]]},G={type:"Polygon",coordinates:[[[116.384595,39.901321],[116.383526,39.899865],[116.386284,39.900917],[116.384595,39.901321]],[[116.384594,39.901],[116.384,39.9003],[116.3861,39.900917],[116.384594,39.901]]]},h={type:"MultiPolygon",coordinates:[[[[116.388624,39.900055],[116.390452,39.898583],[116.391294,39.900003],[116.388624,39.900055]],[[116.389113,39.899924],[116.390251,39.898962],[116.391055,39.899899],[116.389113,39.899924]]],[[[116.387884,39.899645],[116.38796,39.898347],[116.390175,39.898394],[116.387884,39.899645]]]]},w={type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"GeometryCollection",geometries:[b,k,N,G,h]}}]},V={title:"组件(Components)/覆盖物(Overlay)/AMapGeoJSON",component:A,decorators:[S,f(),C,J],args:{geoJSON:w,visible:!0},argTypes:{geoJSON:{description:"要加载的标准 GeoJSON 对象",type:{required:!0,name:"object",value:{}},table:{type:{summary:"GeoJSON.FeatureCollection",detail:"AMap 暂时不支持 `Feature`，需要转换成 `FeatureCollection`"}}},visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},options:{description:"修改覆盖物属性(包括线样式、样色等等)",type:{required:!1,name:"object",value:{}},table:{type:{summary:"object",detail:"具体字段参考高德 JS API 文档"}},control:"object"},getMarker:{description:"指定点要素的绘制方式，缺省时为 Marker 的默认样式。",type:{required:!1,name:"function"},table:{type:{summary:"(geojson?: GeoJSON.GeoJSON, lnglat?: GeoJSON.Point, map?: AMap.Map | null, AMap?: AMap.AMap) => AMap.Overlay"}}},getPolyline:{description:"指定点要素的绘制方式，缺省时为 Polyline 的默认样式。",type:{required:!1,name:"function"},table:{type:{summary:"(geojson?: GeoJSON.GeoJSON, lnglat?: GeoJSON.Point, map?: AMap.Map | null, AMap?: AMap.AMap) => AMap.Overlay"}}},getPolygon:{description:"指定点要素的绘制方式，缺省时为 Polygon 的默认样式。",type:{required:!1,name:"function"},table:{type:{summary:"(geojson?: GeoJSON.GeoJSON, lnglat?: GeoJSON.Point, map?: AMap.Map | null, AMap?: AMap.AMap) => AMap.Overlay"}}}}},a={name:"基本使用"},v=(p,o,t,r)=>{const e={position:o,map:t,label:{offset:[],direction:"Top",content:"MyMarker"}};return new r.Marker(e)},j=(p,o,t,r)=>{const e={path:o,map:t};return new r.Polyline(e)},q=(p,o,t,r)=>{const e=new r.Polygon,O=P(o);return e.setPath(O),e.setOptions({strokeColor:"yellow"}),e.setMap(t),e},n={name:"自定义样式",args:{options:{strokeColor:"red",strokeWeight:4}}},s={name:"自定义覆盖物",args:{options:{strokeColor:"red",strokeWeight:4},getMarker:v,getPolyline:j,getPolygon:q}};var l,i,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '基本使用'
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,y,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '自定义样式',
  args: {
    options: {
      strokeColor: 'red',
      strokeWeight: 4
    }
  }
}`,...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var g,d,M;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '自定义覆盖物',
  args: {
    options: {
      strokeColor: 'red',
      strokeWeight: 4
    },
    getMarker,
    getPolyline,
    getPolygon
  }
}`,...(M=(d=s.parameters)==null?void 0:d.docs)==null?void 0:M.source}}};const D=["CommonUse","CustomStyle","CustomOverlay"];export{a as CommonUse,s as CustomOverlay,n as CustomStyle,D as __namedExportsOrder,V as default};
