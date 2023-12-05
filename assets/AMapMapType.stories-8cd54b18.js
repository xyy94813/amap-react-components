import{a as b}from"./chunk-WFFRPTHA-2a5dae90.js";import"./index-1b03fe98.js";import{g as h}from"./AMapMouseTool-39d8fedf.js";import{w as g}from"./withAMap-afed12e1.js";import{w as T,a as S}from"./withAPIContainer-a3816f75.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./jsx-runtime-86dfebf6.js";const t=b("onShow","onHide"),V={title:"组件(Components)/地图控件(Control)/AMapMapType",component:h,decorators:[g(),T,S],args:{defaultType:0,visible:!0,onShow:t.onShow,onHide:t.onHide},argTypes:{defaultType:{description:"初始化默认图层类型。 默认底图: 0; 卫星图: 1。",type:{required:!1,name:"enum",value:[0,1]},table:{type:{summary:"0|1"},defaultValue:{summary:"0"}},options:{"0(默认底图)":0,"1(卫星图)":1},control:{type:"select"}},showTraffic:{description:"叠加实时交通图层",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},showRoad:{description:"叠加路网图层",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},onShow:{description:"显示时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onHide:{description:"隐藏时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1}}},e={name:"一般使用"},a={name:"默认底图",args:{defaultType:1}},o={name:"默认开启路况",args:{showTraffic:!0}},r={name:"默认开启路网",args:{showRoad:!0}};var s,n,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '一般使用'
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '默认底图',
  args: {
    defaultType: 1
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var u,c,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '默认开启路况',
  args: {
    showTraffic: true
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var f,y,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '默认开启路网',
  args: {
    showRoad: true
  }
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const x=["CommonUse","DefaultType","DefaultShowTraffic","DefaultShowRoad"];export{e as CommonUse,r as DefaultShowRoad,o as DefaultShowTraffic,a as DefaultType,x as __namedExportsOrder,V as default};
