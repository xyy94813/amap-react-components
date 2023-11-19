import{j as h}from"./jsx-runtime-91db03d0.js";import{a as M}from"./chunk-GOSXJPAJ-7233c8d1.js";import"./chunk-AY7I2SME-ea41228b.js";import"./index-4139ccbc.js";import{l as w}from"./AMapMouseTool-373f5a33.js";import{w as S}from"./withAMap-22614cdd.js";import{w as A,a as v}from"./withAPIContainer-9fa863bd.js";const t=M("onShow","onHide"),x={title:"组件(Components)/地图控件(Control)/AMapMapType",component:w,decorators:[S(),A,v],args:{defaultType:0,visible:!0,onShow:t.onShow,onHide:t.onHide},argTypes:{defaultType:{description:"初始化默认图层类型。 默认底图: 0; 卫星图: 1。",type:{required:!1,name:"enum",value:[0,1]},table:{type:{summary:"0|1"},defaultValue:{summary:"0"}},options:{"0(默认底图)":0,"1(卫星图)":1},control:{type:"select"}},showTraffic:{description:"叠加实时交通图层",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},showRoad:{description:"叠加路网图层",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},onShow:{description:"显示时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onHide:{description:"隐藏时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1}}},s=T=>h(w,{...T}),e=s.bind({});e.storyName="一般使用";e.args={};const a=s.bind({});a.storyName="默认卫星图";a.args={defaultType:1};const o=s.bind({});o.storyName="默认开启路况";o.args={showTraffic:!0};const r=s.bind({});r.storyName="默认叠加路网图层";r.args={showRoad:!0};var n,p,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"args => <AMapMapType {...args} />",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"args => <AMapMapType {...args} />",...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,d,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"args => <AMapMapType {...args} />",...(y=(d=o.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var f,b,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:"args => <AMapMapType {...args} />",...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const j=["CommonUse","DefaultType","DefaultShowTraffic","DefaultShowRoad"];export{e as CommonUse,r as DefaultShowRoad,o as DefaultShowTraffic,a as DefaultType,j as __namedExportsOrder,x as default};
//# sourceMappingURL=AMapMapType.stories-5969eb67.js.map
