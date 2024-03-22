import{a as l}from"./chunk-MZXVCX43-BS0fyQMC.js";import"./index-BBkUAzwr.js";import{o as v}from"./AMapRangingTool-CbgZQGdK.js";import{w as g}from"./withAMap-ugFONEsn.js";import{w as A,a as f}from"./withAPIContainer-DqMC_Ql1.js";import"./v4-D8aEg3BZ.js";const a=l("onNodeAdded","onNodeRemoved","onEnd"),M={title:"组件(Components)/工具(Tools)/AMapRangingTool",component:v,decorators:[g(),A,f],args:{},argTypes:{disabled:{description:"禁用 RangingTool",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},onNodeAdded:{description:"每添加一个量测点时触发此事件",type:{required:!1,name:"function"},table:{type:{summary:'(event: AMap.Event<"addnode">) => void'}}},onNodeRemoved:{description:"每删除一个量测点时触发此事件",type:{required:!1,name:"function"},table:{type:{summary:'(event: AMap.Event<"removenode">) => void'}}},onEnd:{description:"距离量测结束后触发此事件",type:{required:!1,name:"function"},table:{type:{summary:'(event: AMap.Event<"end">) => void'}}}}},e={name:"基本使用"},o={name:"禁用",args:{disabled:!0}},n={name:"监听事件",args:{onNodeAdded:a.onNodeAdded,onNodeRemoved:a.onNodeRemoved,onEnd:a.onEnd}};var d,r,t;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '基本使用'
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var s,m,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    disabled: true
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,u,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '监听事件',
  args: {
    onNodeAdded: eventHandler.onNodeAdded,
    onNodeRemoved: eventHandler.onNodeRemoved,
    onEnd: eventHandler.onEnd
  }
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const w=["CommonUse","Disabled","BindEvent"];export{n as BindEvent,e as CommonUse,o as Disabled,w as __namedExportsOrder,M as default};