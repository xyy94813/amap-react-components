import{a as c,F as d,j as r}from"./jsx-runtime-86dfebf6.js";import{a as y}from"./chunk-WFFRPTHA-2a5dae90.js";import"./index-1b03fe98.js";import{n as t,m as g,d as f}from"./AMapRangingTool-dba06f0e.js";import{w as A}from"./withAutoFitView-2245a5ce.js";import{w as h}from"./withAMap-36ece295.js";import{w as M,a as P}from"./withAPIContainer-559d3919.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const b=y("onChange"),u={type:"LineString",coordinates:[[116.386069,39.898857],[116.386023,39.897477],[116.387719,39.897539]]},S={type:"FeatureCollection",features:[{type:"Feature",geometry:u,properties:{}}]},x={title:"组件(Components)/工具(Tools)/AMapPolylineEditor",component:t,render:e=>c(d,{children:[r(g,{path:u.coordinates}),r(t,{...e})]}),decorators:[A,h(),M,P],args:{computeTarget:e=>e[0],onChange:b.onChange},argTypes:{computeTarget:{description:"设置编辑对象",type:{required:!0,name:"function"},table:{type:{summary:"(allPolyline: AMap.Polyline[]) => AMap.Polyline | null | undefined"}},control:!1},disabled:{description:"禁用 PolylineEditor",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},onChange:{description:"Target 变化时的回调",type:{required:!0,name:"function"},table:{type:{summary:"(event: any) => void"}},control:!1}}},o={name:"与AMapGeoJSON一同使用",args:{computeTarget:e=>e[0]},render:e=>c(d,{children:[r(f,{geoJSON:S}),r(t,{...e})]})},a={name:"禁用编辑器",args:{disabled:!0}};var n,s,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '与AMapGeoJSON一同使用',
  args: {
    computeTarget: polylineList => polylineList[0]
  },
  render: args => <>
      <AMapGeoJSON geoJSON={mockData} />
      <AMapPolylineEditor {...args} />
    </>
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '禁用编辑器',
  args: {
    disabled: true
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const D=["WithGeoJSON","DisablePolylineEditor"];export{a as DisablePolylineEditor,o as WithGeoJSON,D as __namedExportsOrder,x as default};
