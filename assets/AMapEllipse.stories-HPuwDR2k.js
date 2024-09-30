import{a as M}from"./chunk-D5ZWXAHU-Clo15qMC.js";import"./index-RYns6xqu.js";import{b as q}from"./AMapRangingTool-CmppYZ_3.js";import{w}from"./withAutoFitView-DYUITv1d.js";import{w as T}from"./withAMap-BxqpWTEs.js";import{w as H,a as S}from"./withAPIContainer-lROoAXKJ.js";import"./v4-CQkTLCs1.js";const e=M("onShow","onHide","onClick","onDBLClick","onRightClick","onMousedown","onMouseup","onMouseover","onMouseout","onTouchstart","onTouchmove","onTouchend"),s=["#ff0000","#00ff00","#0000ff"],B={title:"组件(Components)/覆盖物(Overlay)/AMapEllipse",component:q,decorators:[w,T(),H,S],args:{center:[116.39,39.9],radius:[1e4,5e3],visible:!0,onShow:e.onShow,onHide:e.onHide},argTypes:{center:{description:"圆心位置",type:{required:!0,name:"array",value:{name:"number"}},table:{type:{summary:"LngLatLike"}},control:"object"},radius:{description:"圆半径，单位:米",type:{required:!0,name:"array",value:{name:"number"}},table:{type:{summary:"number[]"}},control:"object"},zIndex:{description:"多边形覆盖物的叠加顺序",type:{required:!1,name:"number"},table:{type:{summary:"number"},defaultValue:{summary:10}},control:{type:"number",step:1}},fillColor:{description:"多边形填充颜色",type:{required:!1,name:"string"},table:{type:{summary:"string"},defaultValue:{summary:"#00B2D5"}},control:{type:"color",presetColors:s}},fillOpacity:{description:"多边形填充透明度，取值范围 [0,1]",type:{required:!1,name:"number"},table:{type:{summary:"string"},defaultValue:{summary:.5}},control:{type:"range",min:0,max:1,step:.1}},strokeColor:{description:"轮廓线颜色，使用16进制颜色代码赋值。",type:{required:!1,name:"string"},table:{type:{summary:"string"},defaultValue:{summary:"#00D3FC"}},control:{type:"color",presetColors:s}},strokeStyle:{description:"轮廓线样式",type:{required:!1,name:"enum",value:["solid","dashed"]},table:{type:{summary:["solid","dashed"].join("|")},defaultValue:{summary:"solid"}},options:{"solid(实线)":"solid","dashed(虚线)":"dashed"},control:"select"},strokeOpacity:{description:"轮廓线透明度，取值范围 [0,1]",type:{required:!1,name:"number"},table:{type:{summary:"number"},defaultValue:{summary:.9}},control:{type:"range",min:0,max:1,step:.1}},strokeWeight:{description:"轮廓线宽度",type:{required:!1,name:"number"},table:{type:{summary:"number"},defaultValue:{summary:2}},control:{type:"number",min:0,step:1}},strokeDasharray:{description:"勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效",type:{required:!1,name:"array",value:{name:"number"}},table:{type:{summary:"number[]"}},control:"object"},cursor:{description:"指定鼠标悬停时的鼠标样式",type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},extData:{description:"设置用户自定义属性",type:{required:!1,name:"object",value:{}},table:{type:{summary:"object"}},control:"object"},draggable:{description:"是否可拖动",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},bubble:{description:"是否将覆盖物的鼠标或touch等事件冒泡到地图上",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},onShow:{description:"显示，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onHide:{description:"隐藏，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onClick:{description:"左键单击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDBLClick:{description:"左键双击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onRightClick:{description:"右键单击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMousedown:{description:"鼠标按下，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseup:{description:"鼠标抬起，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseover:{description:"鼠标经过，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseout:{description:"鼠标移出，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchmove:{description:"触摸移动，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchend:{description:"触摸结束，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1}}},o={name:"基本使用"},n={name:"自定义样式",args:{fillColor:"yellow",fillOpacity:.5,strokeColor:"red",strokeStyle:"dashed",strokeOpacity:.1,strokeWeight:20,strokeDasharray:[10,40]}},r={name:"点击事件（左单/左双/右单）",args:{onClick:e.onClick,onDBLClick:e.onDBLClick,onRightClick:e.onRightClick}},t={name:"鼠标事件（按下/抬起/经过/移出）",args:{onMousedown:e.onMousedown,onMouseup:e.onMouseup,onMouseover:e.onMouseover,onMouseout:e.onMouseout}},a={name:"触摸事件（触摸开始/触摸移动/触摸结束）",args:{onTouchstart:e.onTouchstart,onTouchmove:e.onTouchmove,onTouchend:e.onTouchend}};var l,i,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '基本使用'
}`,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,c,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '自定义样式',
  args: {
    fillColor: 'yellow',
    fillOpacity: 0.5,
    strokeColor: 'red',
    strokeStyle: 'dashed',
    strokeOpacity: 0.1,
    strokeWeight: 20,
    strokeDasharray: [10, 40]
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,y,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '点击事件（左单/左双/右单）',
  args: {
    onClick: eventHandler.onClick,
    onDBLClick: eventHandler.onDBLClick,
    onRightClick: eventHandler.onRightClick
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,v,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '鼠标事件（按下/抬起/经过/移出）',
  args: {
    onMousedown: eventHandler.onMousedown,
    onMouseup: eventHandler.onMouseup,
    onMouseover: eventHandler.onMouseover,
    onMouseout: eventHandler.onMouseout
  }
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,k,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '触摸事件（触摸开始/触摸移动/触摸结束）',
  args: {
    onTouchstart: eventHandler.onTouchstart,
    onTouchmove: eventHandler.onTouchmove,
    onTouchend: eventHandler.onTouchend
  }
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const A=["CommonUse","CustomStyle","ClickEvent","MouseEvent","TouchEvent"];export{r as ClickEvent,o as CommonUse,n as CustomStyle,t as MouseEvent,a as TouchEvent,A as __namedExportsOrder,B as default};
