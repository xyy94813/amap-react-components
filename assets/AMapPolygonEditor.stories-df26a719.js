import{a as f,F as A,j as e}from"./jsx-runtime-91db03d0.js";import{a as O}from"./chunk-GOSXJPAJ-7233c8d1.js";import"./chunk-AY7I2SME-ea41228b.js";import"./index-4139ccbc.js";import{e as l,f as n,d as J}from"./AMapMouseTool-cd485c74.js";import{c as s}from"./coordsOfGeoJSON2AMapPolygonPath-d0760c1b.js";import{w as N}from"./withAutoFitView-024448ed.js";import{w}from"./withAMap-c26d0ec0.js";import{w as C,a as E}from"./withAPIContainer-cce0a859.js";const F=O("onChange"),b={type:"Polygon",coordinates:[[[116.386069,39.898857],[116.386023,39.897477],[116.387719,39.897539],[116.386069,39.898857]]]},h={type:"Polygon",coordinates:[[[116.384595,39.901321],[116.383526,39.899865],[116.386284,39.900917],[116.384595,39.901321]],[[116.384594,39.901],[116.384,39.9003],[116.3861,39.900917],[116.384594,39.901]]]},M={type:"MultiPolygon",coordinates:[[[[116.388624,39.900055],[116.390452,39.898583],[116.391294,39.900003],[116.388624,39.900055]],[[116.389113,39.899924],[116.390251,39.898962],[116.391055,39.899899],[116.389113,39.899924]]],[[[116.387884,39.899645],[116.38796,39.898347],[116.390175,39.898394],[116.387884,39.899645]]]]},G={type:"FeatureCollection",features:[{type:"Feature",geometry:b,properties:{}},{type:"Feature",geometry:h,properties:{}},{type:"Feature",geometry:M,properties:{}}]},H={title:"组件(Components)/工具(Tools)/AMapPolygonEditor",component:l,render:o=>f(A,{children:[e(n,{path:s(b.coordinates)}),e(n,{path:s(h.coordinates)}),e(n,{path:s(M.coordinates)}),e(l,{...o})]}),decorators:[N,w(),C,E],args:{computeTarget:o=>o[0],onChange:F.onChange},argTypes:{computeTarget:{description:"设置编辑对象",type:{required:!0,name:"function"},table:{type:{summary:"(allPolygons: AMap.Polygon[]) => AMap.Polygon[] | null | undefined"}},control:!1},disabled:{description:"禁用 PolygonEditor",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},computeAdsorbPolygons:{description:"设置吸附多边形。默认地图上所有多边形都可吸附",type:{required:!1,name:"function"},table:{type:{summary:"(allPolygons: AMap.Polygon[]) => AMap.Polygon[] | null | undefined"},defaultValue:{summary:"(allPolygons: AMap.Polygon[]) => allPolygons"}},control:!1},onChange:{description:"Target 变化时的回调",type:{required:!0,name:"function"},table:{type:{summary:"(event: any) => void"}},control:!1}}},a={name:"与AMapGeoJSON一同使用",args:{computeTarget:o=>o[1]},render:o=>f(A,{children:[e(J,{geoJSON:G}),e(l,{...o})]})},r={name:"自定义磁吸围栏",args:{computeAdsorbPolygons:o=>o.filter((T,S)=>S===1)}},t={name:"禁用编辑器",args:{disabled:!0}};var p,i,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '与AMapGeoJSON一同使用',
  args: {
    computeTarget: polygons => polygons[1]
  },
  render: args => <>
      <AMapGeoJSON geoJSON={mockData} />
      <AMapPolygonEditor {...args} />
    </>
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '自定义磁吸围栏',
  args: {
    computeAdsorbPolygons: polygons => polygons.filter((_, index) => index === 1)
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var y,u,P;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '禁用编辑器',
  args: {
    disabled: true
  }
}`,...(P=(u=t.parameters)==null?void 0:u.docs)==null?void 0:P.source}}};const I=["WithGeoJSON","SetAdsorbPolygons","DisablePolygonEditor"];export{t as DisablePolygonEditor,r as SetAdsorbPolygons,a as WithGeoJSON,I as __namedExportsOrder,H as default};
//# sourceMappingURL=AMapPolygonEditor.stories-df26a719.js.map
