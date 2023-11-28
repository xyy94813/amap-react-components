import{a as p}from"./chunk-GOSXJPAJ-7233c8d1.js";import"./chunk-AY7I2SME-ea41228b.js";import"./index-4139ccbc.js";import{A as l}from"./AMapMouseTool-cd485c74.js";import{w as u}from"./withAMap-c26d0ec0.js";import{w as c,a as f}from"./withAPIContainer-cce0a859.js";import"./jsx-runtime-91db03d0.js";const a=p("onShow","onHide"),B={title:"组件(Components)/地图控件(Control)/AMapToolBar",component:l,decorators:[u(),c,f],args:{position:"LT",offset:[10,10],visible:!0,onShow:a.onShow,onHide:a.onHide},argTypes:{position:{description:"控件停靠位置",type:{required:!0,name:"union",value:[{name:"enum",value:["LT","RT","LB","RB"]},{name:"object",value:{top:{required:!1,name:"string"},left:{required:!1,name:"string"},right:{required:!1,name:"string"},bottom:{required:!1,name:"string"}}}]},table:{type:{summary:[["LT","RT","LB","RB"].join("|"),"object"].join("|")},defaultValue:{summary:"LB"}},options:{"LT(左上)":"LT","RT(右上)":"RT","LB(左下)":"LB","RB(右下)":"RB"},control:"select"},offset:{description:"相对于地图容器偏移量，正数代表地图中心，复数向地图外侧(实际现象与高德地图官方文档不一致)。",type:{required:!1,name:"array",value:{name:"number"}},table:{type:{summary:"array"}},control:"object"},visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},onShow:{description:"显示时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onHide:{description:"隐藏时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1}}},e={name:"设置偏移量",args:{offset:[20,20]}};e.storyName="设置偏移量";e.args={offset:[20,20]};const o={name:"指定位置",args:{position:"RT"}};var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '设置偏移量',
  args: {
    offset: [20, 20]
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '指定位置',
  args: {
    position: 'RT'
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const L=["ChangeOffset","ChangePosition"];export{e as ChangeOffset,o as ChangePosition,L as __namedExportsOrder,B as default};
//# sourceMappingURL=AMapToolBar.stories-36226780.js.map
