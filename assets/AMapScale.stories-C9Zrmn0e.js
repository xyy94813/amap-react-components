import{a as p}from"./chunk-D5ZWXAHU-Clo15qMC.js";import"./index-RYns6xqu.js";import{q as l}from"./AMapRangingTool-CmppYZ_3.js";import{w as c}from"./withAMap-BxqpWTEs.js";import{w as u,a as d}from"./withAPIContainer-lROoAXKJ.js";import"./v4-CQkTLCs1.js";const a=p("onShow","onHide"),v={title:"组件(Components)/地图控件(Control)/AMapScale",component:l,decorators:[c(),u,d],args:{position:"LB",offset:[10,10],visible:!0,onShow:a.onShow,onHide:a.onHide},argTypes:{position:{description:"控件停靠位置",type:{required:!0,name:"union",value:[{name:"enum",value:["LT","RT","LB","RB"]},{name:"object",value:{top:{required:!1,name:"string"},left:{required:!1,name:"string"},right:{required:!1,name:"string"},bottom:{required:!1,name:"string"}}}]},table:{type:{summary:[["LT","RT","LB","RB"].join("|"),"object"].join("|")},defaultValue:{summary:"LB"}},options:{"LT(左上)":"LT","RT(右上)":"RT","LB(左下)":"LB","RB(右下)":"RB"},control:"select"},offset:{description:"相对于地图容器偏移量，正数代表地图中心，复数向地图外侧(实际现象与高德地图官方文档不一致)。",type:{required:!1,name:"array",value:{name:"number"}},table:{type:{summary:"array"}},control:"object"},visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},onShow:{description:"显示时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onHide:{description:"隐藏时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1}}},e={name:"设置偏移量",args:{offset:[100,100]}},o={name:"指定位置",args:{position:"LT"}};var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '设置偏移量',
  args: {
    offset: [100, 100]
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '指定位置',
  args: {
    position: 'LT'
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const T=["ChangeOffset","ChangePosition"];export{e as ChangeOffset,o as ChangePosition,T as __namedExportsOrder,v as default};
