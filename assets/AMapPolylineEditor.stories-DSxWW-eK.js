import{R as e}from"./index-RYns6xqu.js";import{a as d}from"./chunk-D5ZWXAHU-Clo15qMC.js";import{n as r,m as u,d as y}from"./AMapRangingTool-CmppYZ_3.js";import{w as g}from"./withAutoFitView-DYUITv1d.js";import{w as f}from"./withAMap-BxqpWTEs.js";import{w as A,a as E}from"./withAPIContainer-lROoAXKJ.js";import"./v4-CQkTLCs1.js";const M=d("onChange"),c={type:"LineString",coordinates:[[116.386069,39.898857],[116.386023,39.897477],[116.387719,39.897539]]},P={type:"FeatureCollection",features:[{type:"Feature",geometry:c,properties:{}}]},N={title:"组件(Components)/工具(Tools)/AMapPolylineEditor",component:r,render:a=>e.createElement(e.Fragment,null,e.createElement(u,{path:c.coordinates}),e.createElement(r,{...a})),decorators:[g,f(),A,E],args:{computeTarget:a=>a[0],onChange:M.onChange},argTypes:{computeTarget:{description:"设置编辑对象",type:{required:!0,name:"function"},table:{type:{summary:"(allPolyline: AMap.Polyline[]) => AMap.Polyline | null | undefined"}},control:!1},disabled:{description:"禁用 PolylineEditor",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},onChange:{description:"Target 变化时的回调",type:{required:!0,name:"function"},table:{type:{summary:"(event: any) => void"}},control:!1}}},o={name:"与AMapGeoJSON一同使用",args:{computeTarget:a=>a[0]},render:a=>e.createElement(e.Fragment,null,e.createElement(y,{geoJSON:P}),e.createElement(r,{...a}))},t={name:"禁用编辑器",args:{disabled:!0}};var n,s,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '与AMapGeoJSON一同使用',
  args: {
    computeTarget: polylineList => polylineList[0]
  },
  render: args => <>
      <AMapGeoJSON geoJSON={mockData} />
      <AMapPolylineEditor {...args} />
    </>
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '禁用编辑器',
  args: {
    disabled: true
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const T=["WithGeoJSON","DisablePolylineEditor"];export{t as DisablePolylineEditor,o as WithGeoJSON,T as __namedExportsOrder,N as default};
