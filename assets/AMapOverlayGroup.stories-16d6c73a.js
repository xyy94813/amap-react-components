import{R as o}from"./index-1b03fe98.js";import{a as q}from"./chunk-MZXVCX43-5a0a4bfb.js";import{i,d as O,A as S,b as B,j as H}from"./AMapRangingTool-ace20b91.js";import{w as D}from"./withAutoFitView-2c732b36.js";import{w as R}from"./withAMap-c0524fd3.js";import{w as G,a as L}from"./withAPIContainer-fba515ad.js";import"./v4-4a60fe23.js";const e=q("onShow","onHide","onClick","onDBLClick","onRightClick","onMousedown","onMouseup","onMouseover","onMouseout","onTouchstart","onTouchmove","onTouchend"),I={title:"组件(Components)/覆盖物(Overlay)/AMapOverlayGroup",component:i,render:c=>o.createElement(i,{...c},o.createElement(O,{geoJSON:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[116.272781,39.98221],[116.274904,39.903107],[116.481254,39.907666],[116.464271,39.988716],[116.272781,39.98221]]]}}]}}),o.createElement(S,{center:[116.39,39.9],radius:1e4}),o.createElement(B,{center:[116.39,39.9],radius:[1e4,5e3]}),o.createElement(H,{position:[116.39,39.9]})),decorators:[D,R(),G,L],args:{visible:!0,onShow:e.onShow,onHide:e.onHide},argTypes:{visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},options:{description:"修改覆盖物属性(包括线样式、样色等等)。注意：当前实现，嵌套使用时，父级组件会覆盖子组件的样式。",type:{required:!1,name:"object",value:{}},table:{type:{summary:"object",detail:"具体字段参考高德 JS API 文档"}}},onShow:{description:"显示，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onHide:{description:"隐藏，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onClick:{description:"左键单击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDBLClick:{description:"左键双击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onRightClick:{description:"右键单击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMousedown:{description:"鼠标按下，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseup:{description:"鼠标抬起，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseover:{description:"鼠标经过，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseout:{description:"鼠标移出，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchstart:{description:"触摸开始，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchmove:{description:"触摸移动，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchend:{description:"触摸结束，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1}}},r={name:"基本使用"},n={name:"自定义样式",args:{options:{fillColor:"yellow",fillOpacity:.5,strokeColor:"red",strokeStyle:"dashed",strokeOpacity:.1,strokeWeight:20,strokeDasharray:[10,40]}}},t={name:"嵌套使用",args:{options:n.args.options},render:c=>o.createElement(i,null,o.createElement(i,{...c},o.createElement(S,{center:[116.39,39.9],radius:1e4})),o.createElement(B,{center:[116.39,39.9],radius:[1e4,5e3]}),o.createElement(H,{position:[116.39,39.9]}))},a={name:"点击事件（左单/左双/右单）",args:{onClick:e.onClick,onDBLClick:e.onDBLClick,onRightClick:e.onRightClick}},s={name:"鼠标事件（按下/抬起/经过/移出）",args:{onMousedown:e.onMousedown,onMouseup:e.onMouseup,onMouseover:e.onMouseover,onMouseout:e.onMouseout}},u={name:"触摸事件（触摸开始/触摸移动/触摸结束）",args:{onTouchstart:e.onTouchstart,onTouchmove:e.onTouchmove,onTouchend:e.onTouchend}};var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '基本使用'
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,y,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '自定义样式',
  args: {
    options: {
      fillColor: 'yellow',
      fillOpacity: 0.5,
      strokeColor: 'red',
      strokeStyle: 'dashed',
      strokeOpacity: 0.1,
      strokeWeight: 20,
      strokeDasharray: [10, 40]
    }
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,g,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '嵌套使用',
  args: {
    options: CustomStyle.args!.options
  },
  render: args => <AMapOverlayGroup>
      <AMapOverlayGroup {...args}>
        <AMapCircle center={[116.39, 39.9]} radius={10_000} />
      </AMapOverlayGroup>
      <AMapEllipse center={[116.39, 39.9]} radius={[10_000, 5_000]} />
      <AMapMarker position={[116.39, 39.9]} />
    </AMapOverlayGroup>
}`,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var M,h,E;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '点击事件（左单/左双/右单）',
  args: {
    onClick: eventHandler.onClick,
    onDBLClick: eventHandler.onDBLClick,
    onRightClick: eventHandler.onRightClick
  }
}`,...(E=(h=a.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var F,k,A;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '鼠标事件（按下/抬起/经过/移出）',
  args: {
    onMousedown: eventHandler.onMousedown,
    onMouseup: eventHandler.onMouseup,
    onMouseover: eventHandler.onMouseover,
    onMouseout: eventHandler.onMouseout
  }
}`,...(A=(k=s.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var b,T,w;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '触摸事件（触摸开始/触摸移动/触摸结束）',
  args: {
    onTouchstart: eventHandler.onTouchstart,
    onTouchmove: eventHandler.onTouchmove,
    onTouchend: eventHandler.onTouchend
  }
}`,...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const V=["CommonUse","CustomStyle","NestedUse","ClickEvent","MouseEvent","TouchEvent"];export{a as ClickEvent,r as CommonUse,n as CustomStyle,s as MouseEvent,t as NestedUse,u as TouchEvent,V as __namedExportsOrder,I as default};
