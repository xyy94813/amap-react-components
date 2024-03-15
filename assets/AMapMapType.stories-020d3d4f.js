import{a as b}from"./chunk-MZXVCX43-5a0a4bfb.js";import"./index-1b03fe98.js";import{g as h}from"./AMapRangingTool-ace20b91.js";import{w as g}from"./withAMap-c0524fd3.js";import{w as T,a as S}from"./withAPIContainer-fba515ad.js";import"./v4-4a60fe23.js";const t=b("onShow","onHide"),q={title:"组件(Components)/地图控件(Control)/AMapMapType",component:h,decorators:[g(),T,S],args:{defaultType:0,visible:!0,onShow:t.onShow,onHide:t.onHide},argTypes:{defaultType:{description:"初始化默认图层类型。 默认底图: 0; 卫星图: 1。",type:{required:!1,name:"enum",value:[0,1]},table:{type:{summary:"0|1"},defaultValue:{summary:"0"}},options:{"0(默认底图)":0,"1(卫星图)":1},control:{type:"select"}},showTraffic:{description:"叠加实时交通图层",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},showRoad:{description:"叠加路网图层",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},onShow:{description:"显示时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onHide:{description:"隐藏时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1}}},e={name:"一般使用"},a={name:"默认底图",args:{defaultType:1}},o={name:"默认开启路况",args:{showTraffic:!0}},r={name:"默认开启路网",args:{showRoad:!0}};var s,n,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '一般使用'
}`,...(u=(n=e.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var m,l,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '默认底图',
  args: {
    defaultType: 1
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '默认开启路况',
  args: {
    showTraffic: true
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var f,y,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '默认开启路网',
  args: {
    showRoad: true
  }
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const M=["CommonUse","DefaultType","DefaultShowTraffic","DefaultShowRoad"];export{e as CommonUse,r as DefaultShowRoad,o as DefaultShowTraffic,a as DefaultType,M as __namedExportsOrder,q as default};
