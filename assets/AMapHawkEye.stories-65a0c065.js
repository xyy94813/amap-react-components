import{a as g}from"./chunk-GOSXJPAJ-7233c8d1.js";import"./chunk-AY7I2SME-ea41228b.js";import"./index-4139ccbc.js";import{n as h}from"./AMapMouseTool-cd485c74.js";import{w as S}from"./withAMap-c26d0ec0.js";import{w as x,a as C}from"./withAPIContainer-cce0a859.js";import"./jsx-runtime-91db03d0.js";const a=g("onShow","onHide","onOpen","onClose"),w=["#ff0000","#00ff00","#0000ff"],R={title:"组件(Components)/地图控件(Control)/AMapHawkEye",component:h,decorators:[S(),x,C],args:{autoMove:!0,showRectangle:!0,showButton:!0,visible:!0,onShow:a.onShow,onHide:a.onHide},argTypes:{offset:{description:"缩略图距离地图右下角的像素距离",type:{required:!1,name:"array",value:{name:"number"}},table:{type:{summary:"number[]"}},control:"object"},autoMove:{description:"是否随主图视口变化移动",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},showRectangle:{description:"是否显示视口矩形",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},showButton:{description:"是否显示打开关闭的按钮",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},isOpen:{description:"默认是否展开",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},mapStyle:{description:'缩略图要显示的地图自定义样式，如 "amap://styles/dark"',type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},width:{description:'缩略图的宽度，同CSS，如 "200px"',type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},height:{description:'缩略图的高度，同CSS，如"200px"',type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},borderStyle:{description:'缩略图的边框样式，同CSS，如 "double solid solid double"',type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},borderColor:{description:'缩略图的边框颜色，同CSS，如 "silver"',type:{required:!1,name:"string"},table:{type:{summary:"string"},defaultValue:{summary:"#00B2D5"}},control:{type:"color",presetColors:w}},borderRadius:{description:'缩略图的圆角半径，同CSS，如 "5px"',type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},borderWidth:{description:'缩略图的边框宽度，同CSS，如 "5px"',type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},buttonSize:{description:'箭头按钮的像素尺寸，同CSS，如 "12px"',type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},onShow:{description:"显示时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onHide:{description:"隐藏时触发此事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1}}},e={name:"设置偏移量",args:{offset:[10,10]}},r={name:"设置样式",args:{height:"200px",width:"100px",borderStyle:"dashed",borderColor:"red",borderRadius:"4px",borderWidth:"5px",buttonSize:"10px"}},t={name:"设置主题",args:{mapStyle:"amap://styles/dark"}},o={name:"不随主视图变化",args:{autoMove:!1}};var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '设置偏移量',
  args: {
    offset: [10, 10]
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '设置样式',
  args: {
    height: '200px',
    width: '100px',
    borderStyle: 'dashed',
    borderColor: 'red',
    borderRadius: '4px',
    borderWidth: '5px',
    buttonSize: '10px'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '设置主题',
  args: {
    mapStyle: 'amap://styles/dark'
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var y,b,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '不随主视图变化',
  args: {
    autoMove: false
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const E=["ChangePosition","ChangeStyle","ChangeTheme","NotAutoMove"];export{e as ChangePosition,r as ChangeStyle,t as ChangeTheme,o as NotAutoMove,E as __namedExportsOrder,R as default};
//# sourceMappingURL=AMapHawkEye.stories-65a0c065.js.map
