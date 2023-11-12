import{a as T,j as o}from"./jsx-runtime-91db03d0.js";import{a as F}from"./chunk-GOSXJPAJ-7233c8d1.js";import"./chunk-AY7I2SME-ea41228b.js";import"./index-4139ccbc.js";import{g as l,h as q,i as E,j as b,b as J}from"./AMapMouseTool-86d4ae06.js";import{w as P}from"./withAutoFitView-8e686ab4.js";import{w as j}from"./withAMap-baa9b750.js";import{w as D,a as H}from"./withAPIContainer-0d6951f4.js";const e=F("onShow","onHide","onClick","onDBLClick","onRightClick","onMousedown","onMouseup","onMouseover","onMouseout","onTouchstart","onTouchmove","onTouchend"),z={title:"组件(Components)/覆盖物(Overlay)/AMapOverlayGroup",decorators:[P,j(),D,H],args:{visible:!0,onShow:e.onShow,onHide:e.onHide},argTypes:{visible:{description:"显示或隐藏",type:{required:!1,summary:"boolean",defaultValue:!0},table:{defaultValue:!0},control:{type:"boolean"}},options:{description:"修改覆盖物属性(包括线样式、样色等等)。注意：当前实现，嵌套使用时，父级组件会覆盖子组件的样式。",type:{name:"other",value:"",required:!1},table:{type:{summary:"Object",detail:"具体字段参考高德 JS API 文档"}}},onShow:{description:"显示，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onHide:{description:"隐藏，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onClick:{description:"左键单击，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onDBLClick:{description:"左键双击，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onRightClick:{description:"右键单击，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onMousedown:{description:"鼠标按下，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onMouseup:{description:"鼠标抬起，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onMouseover:{description:"鼠标经过，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onMouseout:{description:"鼠标移出，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onTouchstart:{description:"触摸开始，回调函数，仅移动设备有效",type:{required:!1,summary:"(event: any) => void"},control:!1},onTouchmove:{description:"触摸移动，回调函数，仅移动设备有效",type:{required:!1,summary:"(event: any) => void"},control:!1},onTouchend:{description:"触摸结束，回调函数，仅移动设备有效",type:{required:!1,summary:"(event: any) => void"},control:!1}}},p=u=>T(l,{...u,children:[o(J,{geoJSON:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[116.272781,39.98221],[116.274904,39.903107],[116.481254,39.907666],[116.464271,39.988716],[116.272781,39.98221]]]}}]}}),o(q,{center:[116.39,39.9],radius:1e4}),o(E,{center:[116.39,39.9],radius:[1e4,5e3]}),o(b,{position:[116.39,39.9]})]}),a=p.bind({});a.storyName="基本使用";a.args={};const r=p.bind({});r.storyName="自定义样式";r.args={options:{fillColor:"yellow",fillOpacity:.5,strokeColor:"red",strokeStyle:"dashed",strokeOpacity:.1,strokeWeight:20,strokeDasharray:[10,40]}};const n=u=>T(l,{children:[o(l,{...u,children:o(q,{center:[116.39,39.9],radius:1e4})}),o(E,{center:[116.39,39.9],radius:[1e4,5e3]}),o(b,{position:[116.39,39.9]})]});n.storyName="嵌套使用";n.args={options:r.args.options};const s=p.bind({});s.storyName="点击事件（左单/左双/右单）";s.args={onClick:e.onClick,onDBLClick:e.onDBLClick,onRightClick:e.onRightClick};const t=p.bind({});t.storyName="鼠标事件（按下/抬起/经过/移出）";t.args={onMousedown:e.onMousedown,onMouseup:e.onMouseup,onMouseover:e.onMouseover,onMouseout:e.onMouseout};const i=p.bind({});i.storyName="触摸事件（触摸开始/触摸移动/触摸结束）";i.args={onTouchstart:e.onTouchstart,onTouchmove:e.onTouchmove,onTouchend:e.onTouchend};var c,d,y;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => <AMapOverlayGroup {...args}>
    <AMapGeoJSON geoJSON={{
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [[[116.272781, 39.98221], [116.274904, 39.903107], [116.481254, 39.907666], [116.464271, 39.988716], [116.272781, 39.98221]]]
      }
    }]
  }} />
    <AMapCircle center={[116.39, 39.9]} radius={10_000} />
    <AMapEllipse center={[116.39, 39.9]} radius={[10_000, 5_000]} />
    <AMapMarker position={[116.39, 39.9]} />
  </AMapOverlayGroup>`,...(y=(d=a.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var m,M,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => <AMapOverlayGroup {...args}>
    <AMapGeoJSON geoJSON={{
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [[[116.272781, 39.98221], [116.274904, 39.903107], [116.481254, 39.907666], [116.464271, 39.988716], [116.272781, 39.98221]]]
      }
    }]
  }} />
    <AMapCircle center={[116.39, 39.9]} radius={10_000} />
    <AMapEllipse center={[116.39, 39.9]} radius={[10_000, 5_000]} />
    <AMapMarker position={[116.39, 39.9]} />
  </AMapOverlayGroup>`,...(v=(M=r.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var g,A,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => <AMapOverlayGroup>
    <AMapOverlayGroup {...args}>
      <AMapCircle center={[116.39, 39.9]} radius={10_000} />
    </AMapOverlayGroup>
    <AMapEllipse center={[116.39, 39.9]} radius={[10_000, 5_000]} />
    <AMapMarker position={[116.39, 39.9]} />
  </AMapOverlayGroup>`,...(f=(A=n.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var C,h,O;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => <AMapOverlayGroup {...args}>
    <AMapGeoJSON geoJSON={{
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [[[116.272781, 39.98221], [116.274904, 39.903107], [116.481254, 39.907666], [116.464271, 39.988716], [116.272781, 39.98221]]]
      }
    }]
  }} />
    <AMapCircle center={[116.39, 39.9]} radius={10_000} />
    <AMapEllipse center={[116.39, 39.9]} radius={[10_000, 5_000]} />
    <AMapMarker position={[116.39, 39.9]} />
  </AMapOverlayGroup>`,...(O=(h=s.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var k,S,G;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`args => <AMapOverlayGroup {...args}>
    <AMapGeoJSON geoJSON={{
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [[[116.272781, 39.98221], [116.274904, 39.903107], [116.481254, 39.907666], [116.464271, 39.988716], [116.272781, 39.98221]]]
      }
    }]
  }} />
    <AMapCircle center={[116.39, 39.9]} radius={10_000} />
    <AMapEllipse center={[116.39, 39.9]} radius={[10_000, 5_000]} />
    <AMapMarker position={[116.39, 39.9]} />
  </AMapOverlayGroup>`,...(G=(S=t.parameters)==null?void 0:S.docs)==null?void 0:G.source}}};var _,N,w;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`args => <AMapOverlayGroup {...args}>
    <AMapGeoJSON geoJSON={{
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [[[116.272781, 39.98221], [116.274904, 39.903107], [116.481254, 39.907666], [116.464271, 39.988716], [116.272781, 39.98221]]]
      }
    }]
  }} />
    <AMapCircle center={[116.39, 39.9]} radius={10_000} />
    <AMapEllipse center={[116.39, 39.9]} radius={[10_000, 5_000]} />
    <AMapMarker position={[116.39, 39.9]} />
  </AMapOverlayGroup>`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const K=["CommonUse","CustomStyle","NestedUse","ClickEvent","MouseEvent","TouchEvent"];export{s as ClickEvent,a as CommonUse,r as CustomStyle,t as MouseEvent,n as NestedUse,i as TouchEvent,K as __namedExportsOrder,z as default};
//# sourceMappingURL=AMapOverlayGroup.stories-64c0a204.js.map
