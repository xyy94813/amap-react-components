import{r}from"./index-1b03fe98.js";import{a as H}from"./chunk-MZXVCX43-5a0a4bfb.js";import{m as A,n as j}from"./AMapRangingTool-ace20b91.js";import{w as x}from"./withAutoFitView-2c732b36.js";import{w as O}from"./withAMap-c0524fd3.js";import{w as R,a as W}from"./withAPIContainer-fba515ad.js";import"./v4-4a60fe23.js";const e=H("onHide","onShow","onClick","onDBLClick","onRightClick","onMousedown","onMouseup","onMouseover","onMouseout","onDragstart","onDragging","onDragend","onTouchstart","onTouchmove","onTouchend"),P=["#ff0000","#00ff00","#0000ff"],Q={title:"组件(Components)/覆盖物(Overlay)/AMapPolyline",component:A,decorators:[x,O(),R,W],args:{path:[[116.386069,39.898857],[116.386023,39.897477],[116.387719,39.897539]],visible:!0,onShow:e.onShow,onHide:e.onHide},argTypes:{path:{description:"多边形轮廓线的节点坐标数组。支持 lineString 和 MultiLineString 类型。",type:{required:!0,name:"union",value:[{name:"array",value:{name:"array",value:{name:"number"}}},{name:"array",value:{name:"array",value:{name:"array",value:{name:"number"}}}},{name:"array",value:{name:"object",value:{lng:{name:"number"},lat:{name:"number"}}}},{name:"array",value:{name:"array",value:{name:"object",value:{lng:{name:"number"},lat:{name:"number"}}}}}]},table:{type:{summary:["Array<LngLatLike>","Array<Array<LngLatLike>>"].join(" | ")}}},visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},draggable:{description:"是否可拖动",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},zIndex:{description:"多边形覆盖物的叠加顺序",type:{required:!1,name:"number"},table:{type:{summary:"number"},defaultValue:{summary:10}},control:{type:"number",step:1}},strokeColor:{description:"轮廓线颜色，使用16进制颜色代码赋值。",type:{required:!1,name:"string"},table:{type:{summary:"string"},defaultValue:{summary:"#00D3FC"}},control:{type:"color",presetColors:P}},strokeStyle:{description:"轮廓线样式",type:{required:!1,name:"enum",value:["solid","dashed"]},table:{type:{summary:["solid","dashed"].join("|")},defaultValue:{summary:"solid"}},options:{"solid(实线)":"solid","dashed(虚线)":"dashed"},control:"select"},strokeOpacity:{description:"轮廓线透明度，取值范围 [0,1]",type:{required:!1,name:"number"},table:{type:{summary:"number"},defaultValue:{summary:.9}},control:{type:"range",min:0,max:1,step:.1}},strokeWeight:{description:"轮廓线宽度",type:{required:!1,name:"number"},table:{type:{summary:"number"},defaultValue:{summary:2}},control:{type:"number",min:0,step:1}},strokeDasharray:{description:"勾勒形状轮廓的虚线和间隙的样式",type:{required:!1,name:"array",value:{name:"number"}},table:{type:{summary:"number[]"}},control:"object"},borderWeight:{description:"描边的宽度",type:{required:!1,name:"number"},table:{type:{summary:"number"},defaultValue:{summary:2}},control:{type:"number",min:0,step:1}},isOutline:{description:"是否显示描边",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},outlineColor:{description:"线条描边颜色，此项仅在 isOutline 为true时有效",type:{required:!1,name:"string"},table:{defaultValue:{summary:"#00B2D5"}},control:"color"},lineJoin:{description:"折线拐点的绘制样式",type:{required:!1,name:"enum",value:["miter","round","bevel"]},table:{type:{summary:["miter","round","bevel"].join("|")},defaultValue:{summary:"miter"}},options:{"miter(尖角)":"miter","round(圆角)":"round","bevel(斜角)":"bevel"},control:"select"},lineCap:{description:"折线拐点的绘制样式",type:{required:!1,name:"enum",value:["butt","round","square"]},table:{type:{summary:["butt","round","square"].join("|")},defaultValue:{summary:"butt"}},options:{"butt(无头)":"butt","round(圆头)":"round","square(方头)":"square"},control:"select"},geodesic:{description:"是否绘制成大地线",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},cursor:{description:"指定鼠标悬停时的鼠标样式。同 CSS 中的 cursor 属性",type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},extData:{description:"设置用户自定义属性",type:{required:!1,name:"object",value:{}},table:{type:{summary:"object"}},control:"object"},bubble:{description:"是否将覆盖物的鼠标或touch等事件冒泡到地图上",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},zooms:{description:"此缩放范围内 polyline 可见",type:{required:!1,name:"array",value:{name:"number"}},table:{type:{summary:"number[]"},defaultValue:{summary:"[2, 20]"}},control:"array"},onShow:{description:"显示，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onHide:{description:"隐藏，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onClick:{description:"左键单击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDBLClick:{description:"左键双击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onRightClick:{description:"右键单击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMousedown:{description:"鼠标按下，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseup:{description:"鼠标抬起，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseover:{description:"鼠标经过，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseout:{description:"鼠标移出，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDragstart:{description:"开始拖拽=时触发事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDragging:{description:"鼠标拖拽移动=时触发事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDragend:{description:"拖拽移动结束触发事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchstart:{description:"触摸开始，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchmove:{description:"触摸移动，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchend:{description:"触摸结束，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1}}},a={name:"一般使用"},{onChange:I}=H("onChange"),V=r.createRef(),z=o=>o==null?void 0:o.find(L=>L===V.current),t={name:"支持编辑",render:o=>r.createElement(r.Fragment,null,r.createElement(A,{...o,ref:V}),r.createElement(j,{computeTarget:z,onChange:I}))},u={name:"可拖拽",args:{draggable:!0,strokeWeight:40,cursor:"move",onDragstart:e.onDragstart,onDragging:e.onDragging,onDragend:e.onDragend}},s={name:"自定义样式",args:{zIndex:10,strokeColor:"red",strokeStyle:"dashed",strokeOpacity:.8,strokeWeight:20,strokeDasharray:[1,4],borderWeight:10,lineJoin:"bevel",showDir:!0,dirColor:"#000",lineCap:"round",isOutline:!0,outlineColor:"yellow",geodesic:!0}},n={name:"点击事件（左单/左双/右单）",args:{onClick:e.onClick,onDBLClick:e.onDBLClick,onRightClick:e.onRightClick}};n.storyName="点击事件（左单/左双/右单）";n.args={onClick:e.onClick,onDBLClick:e.onDBLClick,onRightClick:e.onRightClick};const l={name:"鼠标事件（按下/抬起/经过/移出）",args:{onMousedown:e.onMousedown,onMouseup:e.onMouseup,onMouseover:e.onMouseover,onMouseout:e.onMouseout}},i={name:"触摸事件（触摸开始/触摸移动/触摸结束）",args:{onTouchstart:e.onTouchstart,onTouchmove:e.onTouchmove,onTouchend:e.onTouchend}};var m,c,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '一般使用'
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var y,p,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '支持编辑',
  render: args => <>
      <AMapPolyline {...args} ref={$polyline} />
      <AMapPolylineEditor computeTarget={computeTarget} onChange={onChange} />
    </>
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,f,v;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '可拖拽',
  args: {
    draggable: true,
    strokeWeight: 40,
    cursor: 'move',
    onDragstart: eventHandler.onDragstart,
    onDragging: eventHandler.onDragging,
    onDragend: eventHandler.onDragend
  }
}`,...(v=(f=u.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,C,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '自定义样式',
  args: {
    zIndex: 10,
    strokeColor: 'red',
    strokeStyle: 'dashed',
    strokeOpacity: 0.8,
    strokeWeight: 20,
    strokeDasharray: [1, 4],
    borderWeight: 10,
    lineJoin: 'bevel',
    showDir: true,
    dirColor: '#000',
    lineCap: 'round',
    // dirImg,
    isOutline: true,
    outlineColor: 'yellow',
    geodesic: true
  }
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var D,q,F;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '点击事件（左单/左双/右单）',
  args: {
    onClick: eventHandler.onClick,
    onDBLClick: eventHandler.onDBLClick,
    onRightClick: eventHandler.onRightClick
  }
}`,...(F=(q=n.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var E,M,T;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '鼠标事件（按下/抬起/经过/移出）',
  args: {
    onMousedown: eventHandler.onMousedown,
    onMouseup: eventHandler.onMouseup,
    onMouseover: eventHandler.onMouseover,
    onMouseout: eventHandler.onMouseout
  }
}`,...(T=(M=l.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var w,S,B;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '触摸事件（触摸开始/触摸移动/触摸结束）',
  args: {
    onTouchstart: eventHandler.onTouchstart,
    onTouchmove: eventHandler.onTouchmove,
    onTouchend: eventHandler.onTouchend
  }
}`,...(B=(S=i.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const X=["CommonUse","Editable","Draggable","CustomStyle","ClickEvent","MouseEvent","TouchEvent"];export{n as ClickEvent,a as CommonUse,s as CustomStyle,u as Draggable,t as Editable,l as MouseEvent,i as TouchEvent,X as __namedExportsOrder,Q as default};
