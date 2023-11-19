import{a as w,j as o}from"./jsx-runtime-91db03d0.js";import{a as F}from"./chunk-GOSXJPAJ-7233c8d1.js";import"./chunk-AY7I2SME-ea41228b.js";import"./index-4139ccbc.js";import{g as u,h as T,i as q,j as E,b as J}from"./AMapMouseTool-373f5a33.js";import{w as P}from"./withAutoFitView-07c4e24b.js";import{w as j}from"./withAMap-22614cdd.js";import{w as D,a as H}from"./withAPIContainer-9fa863bd.js";const e=F("onShow","onHide","onClick","onDBLClick","onRightClick","onMousedown","onMouseup","onMouseover","onMouseout","onTouchstart","onTouchmove","onTouchend"),z={title:"组件(Components)/覆盖物(Overlay)/AMapOverlayGroup",decorators:[P,j(),D,H],args:{visible:!0,onShow:e.onShow,onHide:e.onHide},argTypes:{visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},options:{description:"修改覆盖物属性(包括线样式、样色等等)。注意：当前实现，嵌套使用时，父级组件会覆盖子组件的样式。",type:{required:!1,name:"object",value:{}},table:{type:{summary:"object",detail:"具体字段参考高德 JS API 文档"}}},onShow:{description:"显示，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onHide:{description:"隐藏，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onClick:{description:"左键单击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDBLClick:{description:"左键双击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onRightClick:{description:"右键单击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMousedown:{description:"鼠标按下，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseup:{description:"鼠标抬起，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseover:{description:"鼠标经过，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseout:{description:"鼠标移出，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchstart:{description:"触摸开始，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchmove:{description:"触摸移动，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchend:{description:"触摸结束，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1}}},p=c=>w(u,{...c,children:[o(J,{geoJSON:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[116.272781,39.98221],[116.274904,39.903107],[116.481254,39.907666],[116.464271,39.988716],[116.272781,39.98221]]]}}]}}),o(T,{center:[116.39,39.9],radius:1e4}),o(q,{center:[116.39,39.9],radius:[1e4,5e3]}),o(E,{position:[116.39,39.9]})]}),a=p.bind({});a.storyName="基本使用";a.args={};const r=p.bind({});r.storyName="自定义样式";r.args={options:{fillColor:"yellow",fillOpacity:.5,strokeColor:"red",strokeStyle:"dashed",strokeOpacity:.1,strokeWeight:20,strokeDasharray:[10,40]}};const n=c=>w(u,{children:[o(u,{...c,children:o(T,{center:[116.39,39.9],radius:1e4})}),o(q,{center:[116.39,39.9],radius:[1e4,5e3]}),o(E,{position:[116.39,39.9]})]});n.storyName="嵌套使用";n.args={options:r.args.options};const t=p.bind({});t.storyName="点击事件（左单/左双/右单）";t.args={onClick:e.onClick,onDBLClick:e.onDBLClick,onRightClick:e.onRightClick};const s=p.bind({});s.storyName="鼠标事件（按下/抬起/经过/移出）";s.args={onMousedown:e.onMousedown,onMouseup:e.onMouseup,onMouseover:e.onMouseover,onMouseout:e.onMouseout};const i=p.bind({});i.storyName="触摸事件（触摸开始/触摸移动/触摸结束）";i.args={onTouchstart:e.onTouchstart,onTouchmove:e.onTouchmove,onTouchend:e.onTouchend};var l,y,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => <AMapOverlayGroup {...args}>
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
  </AMapOverlayGroup>`,...(d=(y=a.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};var m,M,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => <AMapOverlayGroup {...args}>
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
  </AMapOverlayGroup>`,...(g=(M=r.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};var v,f,A;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => <AMapOverlayGroup>
    <AMapOverlayGroup {...args}>
      <AMapCircle center={[116.39, 39.9]} radius={10_000} />
    </AMapOverlayGroup>
    <AMapEllipse center={[116.39, 39.9]} radius={[10_000, 5_000]} />
    <AMapMarker position={[116.39, 39.9]} />
  </AMapOverlayGroup>`,...(A=(f=n.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var C,h,O;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => <AMapOverlayGroup {...args}>
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
  </AMapOverlayGroup>`,...(O=(h=t.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var b,k,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => <AMapOverlayGroup {...args}>
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
  </AMapOverlayGroup>`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var G,N,_;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`args => <AMapOverlayGroup {...args}>
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
  </AMapOverlayGroup>`,...(_=(N=i.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const K=["CommonUse","CustomStyle","NestedUse","ClickEvent","MouseEvent","TouchEvent"];export{t as ClickEvent,a as CommonUse,r as CustomStyle,s as MouseEvent,n as NestedUse,i as TouchEvent,K as __namedExportsOrder,z as default};
//# sourceMappingURL=AMapOverlayGroup.stories-1746124d.js.map
