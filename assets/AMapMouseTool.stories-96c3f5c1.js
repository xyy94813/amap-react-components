import{a}from"./chunk-GOSXJPAJ-7233c8d1.js";import"./chunk-AY7I2SME-ea41228b.js";import"./index-4139ccbc.js";import{k as p}from"./AMapMouseTool-6b7a21d0.js";import{w as m}from"./withAMap-b6bd1959.js";import{w as s,a as l}from"./withAPIContainer-538f5645.js";import"./jsx-runtime-91db03d0.js";const n=a("onCompleted"),k={title:"组件(Components)/工具(Tools)/AMapMouseTool",component:p,decorators:[m(),s,l],args:{type:"polygon",options:{strokeColor:"red",strokeWeight:4},onCompleted:n.onCompleted},argTypes:{type:{description:"工具类型",type:{required:!0,name:"enum",value:["marker","circle","rectangle","polyline","polygon","measureArea","rule","rectZoomIn","rectZoomOut"]},table:{type:{summary:["marker","circle","rectangle","polyline","polygon","measureArea","rule","rectZoomIn","rectZoomOut"].join("|")}},options:["marker","circle","rectangle","polyline","polygon","measureArea","rule","rectZoomIn","rectZoomOut"],control:"select"},options:{description:"额外参数",type:{required:!1,name:"object",value:{}},table:{type:{summary:"object",detail:"具体字段参考高德 JS API 文档"}},control:"object"},onCompleted:{description:"鼠标工具绘制覆盖物结束时触发此事件，obj 对象为绘制出来的覆盖物对象",type:{required:!1,name:"function"},table:{type:{summary:'(event: AMap.Event<"draw">) => void'}}}}},e={name:"基本使用",args:{type:"polygon",options:{strokeColor:"red",strokeWeight:4},onCompleted:n.onCompleted}};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '基本使用',
  args: {
    type: 'polygon',
    options: {
      strokeColor: 'red',
      strokeWeight: 4
    },
    onCompleted: eventHandler.onCompleted
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const A=["CommonUse"];export{e as CommonUse,A as __namedExportsOrder,k as default};
//# sourceMappingURL=AMapMouseTool.stories-96c3f5c1.js.map