import{R as e}from"./index-BBkUAzwr.js";import{a as M}from"./chunk-MZXVCX43-BS0fyQMC.js";import{l,k as n,d as h}from"./AMapRangingTool-CbgZQGdK.js";import{c as s}from"./coordsOfGeoJSON2AMapPolygonPath-C3Fu46db.js";import{w as S}from"./withAutoFitView-D87HactE.js";import{w as F}from"./withAMap-ugFONEsn.js";import{w as O,a as C}from"./withAPIContainer-DqMC_Ql1.js";import"./v4-D8aEg3BZ.js";const J=M("onChange"),f={type:"Polygon",coordinates:[[[116.386069,39.898857],[116.386023,39.897477],[116.387719,39.897539],[116.386069,39.898857]]]},A={type:"Polygon",coordinates:[[[116.384595,39.901321],[116.383526,39.899865],[116.386284,39.900917],[116.384595,39.901321]],[[116.384594,39.901],[116.384,39.9003],[116.3861,39.900917],[116.384594,39.901]]]},E={type:"MultiPolygon",coordinates:[[[[116.388624,39.900055],[116.390452,39.898583],[116.391294,39.900003],[116.388624,39.900055]],[[116.389113,39.899924],[116.390251,39.898962],[116.391055,39.899899],[116.389113,39.899924]]],[[[116.387884,39.899645],[116.38796,39.898347],[116.390175,39.898394],[116.387884,39.899645]]]]},N={type:"FeatureCollection",features:[{type:"Feature",geometry:f,properties:{}},{type:"Feature",geometry:A,properties:{}},{type:"Feature",geometry:E,properties:{}}]},V={title:"组件(Components)/工具(Tools)/AMapPolygonEditor",component:l,render:o=>e.createElement(e.Fragment,null,e.createElement(n,{path:s(f.coordinates)}),e.createElement(n,{path:s(A.coordinates)}),e.createElement(n,{path:s(E.coordinates)}),e.createElement(l,{...o})),decorators:[S,F(),O,C],args:{computeTarget:o=>o[0],onChange:J.onChange},argTypes:{computeTarget:{description:"设置编辑对象",type:{required:!0,name:"function"},table:{type:{summary:"(allPolygons: AMap.Polygon[]) => AMap.Polygon[] | null | undefined"}},control:!1},disabled:{description:"禁用 PolygonEditor",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},computeAdsorbPolygons:{description:"设置吸附多边形。默认地图上所有多边形都可吸附",type:{required:!1,name:"function"},table:{type:{summary:"(allPolygons: AMap.Polygon[]) => AMap.Polygon[] | null | undefined"},defaultValue:{summary:"(allPolygons: AMap.Polygon[]) => allPolygons"}},control:!1},onChange:{description:"Target 变化时的回调",type:{required:!0,name:"function"},table:{type:{summary:"(event: any) => void"}},control:!1}}},a={name:"与AMapGeoJSON一同使用",args:{computeTarget:o=>o[1]},render:o=>e.createElement(e.Fragment,null,e.createElement(h,{geoJSON:N}),e.createElement(l,{...o}))},t={name:"自定义磁吸围栏",args:{computeAdsorbPolygons:o=>o.filter((w,b)=>b===1)}},r={name:"禁用编辑器",args:{disabled:!0}};var p,m,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '与AMapGeoJSON一同使用',
  args: {
    computeTarget: polygons => polygons[1]
  },
  render: args => <>
      <AMapGeoJSON geoJSON={mockData} />
      <AMapPolygonEditor {...args} />
    </>
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var c,u,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '自定义磁吸围栏',
  args: {
    computeAdsorbPolygons: polygons => polygons.filter((_, index) => index === 1)
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var d,y,P;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '禁用编辑器',
  args: {
    disabled: true
  }
}`,...(P=(y=r.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const W=["WithGeoJSON","SetAdsorbPolygons","DisablePolygonEditor"];export{r as DisablePolygonEditor,t as SetAdsorbPolygons,a as WithGeoJSON,W as __namedExportsOrder,V as default};
