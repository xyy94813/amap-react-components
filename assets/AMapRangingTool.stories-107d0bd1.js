import{a as u}from"./chunk-WFFRPTHA-2a5dae90.js";import"./index-1b03fe98.js";import{o as v}from"./AMapRangingTool-49819da6.js";import{w as g}from"./withAMap-086880b4.js";import{w as f,a as y}from"./withAPIContainer-650305db.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./jsx-runtime-86dfebf6.js";const a=u("onNodeAdded","onNodeRemoved","onEnd"),T={title:"组件(Components)/工具(Tools)/AMapRangingTool",component:v,decorators:[g(),f,y],args:{},argTypes:{disabled:{description:"禁用 RangingTool",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},onNodeAdded:{description:"每添加一个量测点时触发此事件",type:{required:!1,name:"function"},table:{type:{summary:'(event: AMap.Event<"addnode">) => void'}}},onNodeRemoved:{description:"每删除一个量测点时触发此事件",type:{required:!1,name:"function"},table:{type:{summary:'(event: AMap.Event<"removenode">) => void'}}},onEnd:{description:"距离量测结束后触发此事件",type:{required:!1,name:"function"},table:{type:{summary:'(event: AMap.Event<"end">) => void'}}}}},e={name:"基本使用"},o={name:"禁用",args:{disabled:!0}},n={name:"监听事件",args:{onNodeAdded:a.onNodeAdded,onNodeRemoved:a.onNodeRemoved,onEnd:a.onEnd}};var r,d,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '基本使用'
}`,...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var s,m,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    disabled: true
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,c,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '监听事件',
  args: {
    onNodeAdded: eventHandler.onNodeAdded,
    onNodeRemoved: eventHandler.onNodeRemoved,
    onEnd: eventHandler.onEnd
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const q=["CommonUse","Disabled","BindEvent"];export{n as BindEvent,e as CommonUse,o as Disabled,q as __namedExportsOrder,T as default};
