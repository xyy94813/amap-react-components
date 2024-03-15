import{r as J,R as r}from"./index-1b03fe98.js";import{a as _}from"./chunk-MZXVCX43-5a0a4bfb.js";import{k as $,l as K}from"./AMapRangingTool-ace20b91.js";import{w as Q}from"./withAutoFitView-2c732b36.js";import{w as X}from"./withAMap-c0524fd3.js";import{w as Y,a as Z}from"./withAPIContainer-fba515ad.js";import"./v4-4a60fe23.js";const e=_("onHide","onShow","onClick","onDBLClick","onRightClick","onMousedown","onMouseup","onMouseover","onMouseout","onDragstart","onDragging","onDragend","onTouchstart","onTouchmove","onTouchend"),t=["#ff0000","#00ff00","#0000ff"],me={title:"组件(Components)/覆盖物(Overlay)/AMapPolygon",component:$,decorators:[Q,X({viewMode:"3D",pitch:30}),Y,Z],args:{path:[[116.386069,39.898857],[116.386023,39.897477],[116.387719,39.897539]],visible:!0,onShow:e.onShow,onHide:e.onHide},argTypes:{path:{description:"多边形轮廓线的节点坐标数组",type:{required:!0,name:"union",value:[{name:"array",value:{name:"array",value:{name:"number"}}},{name:"array",value:{name:"array",value:{name:"array",value:{name:"number"}}}},{name:"array",value:{name:"array",value:{name:"array",value:{name:"array",value:{name:"number"}}}}},{name:"array",value:{name:"object",value:{lng:{name:"number"},lat:{name:"number"}}}},{name:"array",value:{name:"array",value:{name:"object",value:{lng:{name:"number"},lat:{name:"number"}}}}},{name:"array",value:{name:"array",value:{name:"array",value:{name:"object",value:{lng:{name:"number"},lat:{name:"number"}}}}}}]},table:{type:{summary:"LngLatLike[] | LngLatLike[][] | LngLatLike[][][]"}},control:"object"},zIndex:{description:"多边形覆盖物的叠加顺序",type:{required:!1,name:"number"},table:{type:{summary:"number"},defaultValue:{summary:10}},control:{type:"number",step:1}},fillColor:{description:"多边形填充颜色",type:{required:!1,name:"string"},table:{type:{summary:"string"},defaultValue:{summary:"#00B2D5"}},control:{type:"color",presetColors:t}},fillOpacity:{description:"多边形填充透明度，取值范围 [0,1]",type:{required:!1,name:"number"},table:{type:{summary:"string"},defaultValue:{summary:.5}},control:{type:"range",min:0,max:1,step:.1}},strokeColor:{description:"轮廓线颜色，使用16进制颜色代码赋值。",type:{required:!1,name:"string"},table:{type:{summary:"string"},defaultValue:{summary:"#00D3FC"}},control:{type:"color",presetColors:t}},strokeStyle:{description:"轮廓线样式",type:{required:!1,name:"enum",value:["solid","dashed"]},table:{type:{summary:["solid","dashed"].join("|")},defaultValue:{summary:"solid"}},options:{"solid(实线)":"solid","dashed(虚线)":"dashed"},control:"select"},strokeOpacity:{description:"轮廓线透明度，取值范围 [0,1]",type:{required:!1,name:"number"},table:{type:{summary:"number"},defaultValue:{summary:.9}},control:{type:"range",min:0,max:1,step:.1}},strokeWeight:{description:"轮廓线宽度",type:{required:!1,name:"number"},table:{type:{summary:"number"},defaultValue:{summary:2}},control:{type:"number",min:0,step:1}},strokeDasharray:{description:"勾勒形状轮廓的虚线和间隙的样式",type:{required:!1,name:"array",value:{name:"number"}},table:{type:{summary:"number[]"}},control:"object"},cursor:{description:"指定鼠标悬停时的鼠标样式",type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},extData:{description:"设置用户自定义属性",type:{required:!1,name:"object",value:{}},table:{type:{summary:"object"}},control:"object"},draggable:{description:"是否可拖动",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},bubble:{description:"是否将覆盖物的鼠标或touch等事件冒泡到地图上",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},zooms:{description:"此缩放范围内 polygon 可见",type:{required:!1,name:"array",value:{name:"number"}},table:{type:{summary:"number[]"},defaultValue:{summary:"[2, 20]"}},control:"array"},extrusionHeight:{description:"3D 模式下，设置立面体高度值。",type:{required:!1,name:"number"},table:{type:{summary:"string"},defaultValue:{summary:0}},control:{type:"number",min:0}},roofColor:{description:"3D 模式下，立面体顶面颜色，支持 rgba、rgb、十六进制等。",type:{required:!1,name:"string"},table:{type:{summary:"string"},defaultValue:{summary:"#00B2D5"}},control:{type:"color",presetColors:t}},wallColor:{description:"3D 模式下，立面体侧面颜色，支持 rgba、rgb、十六进制等。",type:{required:!1,name:"string"},table:{type:{summary:"string"},defaultValue:{summary:"#00D3FC"}},control:{type:"color",presetColors:t}},onShow:{description:"显示，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onHide:{description:"隐藏，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onClick:{description:"左键单击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDBLClick:{description:"左键双击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onRightClick:{description:"右键单击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMousedown:{description:"鼠标按下，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseup:{description:"鼠标抬起，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseover:{description:"鼠标经过，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseout:{description:"鼠标移出，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDragstart:{description:"开始拖拽=时触发事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDragging:{description:"鼠标拖拽移动=时触发事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDragend:{description:"拖拽移动结束触发事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchstart:{description:"触摸开始，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchmove:{description:"触摸移动，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchend:{description:"触摸结束，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1}}},s={name:"一般多边形（Polygon）"},u={name:"带洞多边形（PolygonWithHole）",args:{path:[[[116.384595,39.901321],[116.383526,39.899865],[116.386284,39.900917]],[[116.384594,39.901],[116.384,39.9003],[116.3861,39.900917]]]}},a={name:"复合多边形（MultiPolygon）",args:{path:[[[[116.388624,39.900055],[116.390452,39.898583],[116.391294,39.900003]],[[116.389113,39.899924],[116.390251,39.898962],[116.391055,39.899899]]],[[[116.387884,39.899645],[116.38796,39.898347],[116.390175,39.898394]]]]}},{onChange:ee}=_("onChange"),N=J.createRef(),ae=n=>n==null?void 0:n.find(G=>G===N.current),l={name:"支持编辑",args:{path:a.args.path},render:n=>r.createElement(r.Fragment,null,r.createElement($,{...n,ref:N}),r.createElement(K,{computeTarget:ae,onChange:ee}))},m={name:"可拖拽",args:{path:a.args.path,draggable:!0,onDragstart:e.onDragstart,onDragging:e.onDragging,onDragend:e.onDragend}},i={name:"自定义样式",args:{fillColor:"yellow",fillOpacity:.5,strokeColor:"red",strokeStyle:"dashed",strokeOpacity:.1,strokeWeight:20,strokeDasharray:[10,40]}},c={name:"3D 模式",args:{path:a.args.path,extrusionHeight:300,roofColor:"red",wallColor:"yellow"}},p={name:"点击事件（左单/左双/右单）",args:{onClick:e.onClick,onDBLClick:e.onDBLClick,onRightClick:e.onRightClick}},o={name:"鼠标事件（按下/抬起/经过/移出）",args:{onMousedown:e.onMousedown,onMouseup:e.onMouseup,onMouseover:e.onMouseover,onMouseout:e.onMouseout}};o.storyName="鼠标事件（按下/抬起/经过/移出）";o.args={onMousedown:e.onMousedown,onMouseup:e.onMouseup,onMouseover:e.onMouseover,onMouseout:e.onMouseout};const y={name:"触摸事件（触摸开始/触摸移动/触摸结束）",args:{onTouchstart:e.onTouchstart,onTouchmove:e.onTouchmove,onTouchend:e.onTouchend}};var d,g,f;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '一般多边形（Polygon）'
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,b,h;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '带洞多边形（PolygonWithHole）',
  args: {
    path: [[[116.384595, 39.901321], [116.383526, 39.899865], [116.386284, 39.900917]
    // [116.384595, 39.901321],
    ], [[116.384594, 39.901], [116.384, 39.9003], [116.3861, 39.900917]
    // [116.384594, 39.901],
    ]]
  }
}`,...(h=(b=u.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var F,C,M;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '复合多边形（MultiPolygon）',
  args: {
    path: [[[[116.388624, 39.900055], [116.390452, 39.898583], [116.391294, 39.900003]
    // [116.388624, 39.900055],
    ], [[116.389113, 39.899924], [116.390251, 39.898962], [116.391055, 39.899899]
    // [116.389113, 39.899924],
    ]], [[[116.387884, 39.899645], [116.38796, 39.898347], [116.390175, 39.898394]
    // [116.387884, 39.899645],
    ]]]
  }
}`,...(M=(C=a.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var D,k,E;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '支持编辑',
  args: {
    path: MultiPolygon.args!.path
  },
  render: args => <>
      <AMapPolygon {...args} ref={$polygon} />
      <AMapPolygonEditor computeTarget={computeTarget} onChange={onChange} />
    </>
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var q,w,H;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '可拖拽',
  args: {
    path: MultiPolygon.args!.path,
    draggable: true,
    onDragstart: eventHandler.onDragstart,
    onDragging: eventHandler.onDragging,
    onDragend: eventHandler.onDragend
  }
}`,...(H=(w=m.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var T,B,P;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(P=(B=i.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var S,A,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '3D 模式',
  args: {
    path: MultiPolygon.args!.path,
    extrusionHeight: 300,
    roofColor: 'red',
    wallColor: 'yellow'
  }
}`,...(L=(A=c.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var V,x,j;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '点击事件（左单/左双/右单）',
  args: {
    onClick: eventHandler.onClick,
    onDBLClick: eventHandler.onDBLClick,
    onRightClick: eventHandler.onRightClick
  }
}`,...(j=(x=p.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var R,O,W;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '鼠标事件（按下/抬起/经过/移出）',
  args: {
    onMousedown: eventHandler.onMousedown,
    onMouseup: eventHandler.onMouseup,
    onMouseover: eventHandler.onMouseover,
    onMouseout: eventHandler.onMouseout
  }
}`,...(W=(O=o.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var I,z,U;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '触摸事件（触摸开始/触摸移动/触摸结束）',
  args: {
    onTouchstart: eventHandler.onTouchstart,
    onTouchmove: eventHandler.onTouchmove,
    onTouchend: eventHandler.onTouchend
  }
}`,...(U=(z=y.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};const ie=["CommonUse","PolygonWithHole","MultiPolygon","Editable","Draggable","CustomStyle","In3DMode","ClickEvent","MouseEvent","TouchEvent"];export{p as ClickEvent,s as CommonUse,i as CustomStyle,m as Draggable,l as Editable,c as In3DMode,o as MouseEvent,a as MultiPolygon,u as PolygonWithHole,y as TouchEvent,ie as __namedExportsOrder,me as default};
