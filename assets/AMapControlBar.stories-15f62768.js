import{a as d}from"./chunk-MZXVCX43-5a0a4bfb.js";import"./index-1b03fe98.js";import{a as f}from"./AMapRangingTool-ace20b91.js";import{w as y}from"./withAMap-c0524fd3.js";import{w as g,a as B}from"./withAPIContainer-fba515ad.js";import"./v4-4a60fe23.js";const r=d("onShow","onHide"),q={title:"组件(Components)/地图控件(Control)/AMapControlBar",component:f,decorators:[y(),g,B],args:{position:"LT",offset:[10,10],showControlButton:!0,visible:!0,onShow:r.onShow,onHide:r.onHide},argTypes:{position:{description:"控件停靠位置",type:{required:!0,name:"union",value:[{name:"enum",value:["LT","RT","LB","RB"]},{name:"object",value:{top:{required:!1,name:"string"},left:{required:!1,name:"string"},right:{required:!1,name:"string"},bottom:{required:!1,name:"string"}}}]},table:{type:{summary:[["LT","RT","LB","RB"].join("|"),"object"].join("|")},defaultValue:{summary:"LB"}},options:{"LT(左上)":"LT","RT(右上)":"RT","LB(左下)":"LB","RB(右下)":"RB"},control:"select"},offset:{description:"相对于地图容器偏移量，正数代表地图中心，复数向地图外侧(实际现象与高德地图官方文档不一致)。",type:{required:!1,name:"array",value:{name:"number"}},table:{type:{summary:"array"}},control:"object"},showControlButton:{description:"是否显示倾斜、旋转按钮。",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},onShow:{description:"显示时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onHide:{description:"隐藏时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1}}},e={name:"设置偏移量",args:{offset:[200,200]}},o={name:"指定位置",args:{position:"RT"}},a={name:"显示/隐藏控制按钮",args:{showControlButton:!1}};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '设置偏移量',
  args: {
    offset: [200, 200]
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,u,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '指定位置',
  args: {
    position: 'RT'
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,p,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '显示/隐藏控制按钮',
  args: {
    showControlButton: false
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const L=["ChangeOffset","ChangePosition","HideControlButton"];export{e as ChangeOffset,o as ChangePosition,a as HideControlButton,L as __namedExportsOrder,q as default};
