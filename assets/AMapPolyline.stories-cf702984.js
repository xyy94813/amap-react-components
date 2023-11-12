import{a as B,F,j as d}from"./jsx-runtime-91db03d0.js";import{r as H}from"./index-4139ccbc.js";import{a as E}from"./chunk-GOSXJPAJ-7233c8d1.js";import"./chunk-AY7I2SME-ea41228b.js";import{d as x,c as R}from"./AMapMouseTool-86d4ae06.js";import{w as W}from"./withAutoFitView-8e686ab4.js";import{w as j}from"./withAMap-baa9b750.js";import{w as z,a as I}from"./withAPIContainer-0d6951f4.js";const e=E("onHide","onShow","onClick","onDBLClick","onRightClick","onMousedown","onMouseup","onMouseover","onMouseout","onDragstart","onDragging","onDragend","onTouchstart","onTouchmove","onTouchend"),ee={title:"组件(Components)/覆盖物(Overlay)/AMapPolyline",decorators:[W,j(),z,I],args:{path:[[116.386069,39.898857],[116.386023,39.897477],[116.387719,39.897539]],visible:!0,onShow:e.onShow,onHide:e.onHide},argTypes:{path:{description:"多边形轮廓线的节点坐标数组",type:{name:"other",required:!0,summary:"LngLatLike[] | LngLatLike[][] | LngLatLike[][][]"}},visible:{description:"显示或隐藏",type:{required:!1,summary:"boolean",defaultValue:!0},table:{defaultValue:!0},control:{type:"boolean"}},draggable:{description:"是否可拖动",type:{required:!1,summary:"type",defaultValue:!1},table:{defaultValue:!1},control:{type:"boolean"}},zIndex:{description:"多边形覆盖物的叠加顺序",type:{required:!1,summary:"number",defaultValue:10},table:{defaultValue:10},control:{type:"number",step:1}},strokeColor:{description:"轮廓线颜色，使用16进制颜色代码赋值。",type:{required:!1,summary:"color",defaultValue:"#00D3FC"},table:{defaultValue:"#00D3FC"},control:{type:"color"}},strokeStyle:{description:"轮廓线样式",type:{required:!1,summary:"solid | dashed",defaultValue:"solid"},table:{defaultValue:"solid"},control:{type:"select",options:["solid","dashed"]}},strokeOpacity:{description:"轮廓线透明度，取值范围 [0,1]",type:{required:!1,summary:"number",defaultValue:.9},table:{defaultValue:.9},control:{type:"number",min:0,max:1,step:.01}},strokeWeight:{description:"轮廓线宽度",type:{required:!1,summary:"number",defaultValue:2},table:{defaultValue:2},control:{type:"number",min:0,step:1}},strokeDasharray:{description:"勾勒形状轮廓的虚线和间隙的样式",type:{required:!1,summary:"Array<number>"}},borderWeight:{description:"描边的宽度",type:{required:!1,summary:"number",defaultValue:2},table:{defaultValue:2},control:{type:"number",min:0,step:1}},isOutline:{description:"是否显示描边",type:{required:!1,summary:"type",defaultValue:!1},table:{defaultValue:!1},control:{type:"boolean"}},outlineColor:{description:"线条描边颜色，此项仅在isOutline为true时有效",type:{required:!1,summary:"string",defaultValue:"#00B2D5"},table:{defaultValue:"#00B2D5"},control:{type:"color"}},lineJoin:{description:"折线拐点的绘制样式",type:{required:!1,summary:"miter|round|bevel",defaultValue:"miter"},table:{defaultValue:"miter"},control:{type:"select",options:["miter","round","bevel"]}},lineCap:{description:"折线拐点的绘制样式",type:{required:!1,summary:"butt|round|square",defaultValue:"butt"},table:{defaultValue:"butt"},control:{type:"select",options:["butt","round","square"]}},geodesic:{description:"是否绘制成大地线",type:{required:!1,summary:"type",defaultValue:!1},table:{defaultValue:!1},control:{type:"boolean"}},cursor:{description:"指定鼠标悬停时的鼠标样式",type:{required:!1,summary:"string"}},extData:{description:"设置用户自定义属性",type:{required:!1,summary:"Object"}},bubble:{description:"是否将覆盖物的鼠标或touch等事件冒泡到地图上",type:{required:!1,summary:"boolean",defaultValue:!1},table:{defaultValue:!1},control:{type:"boolean"}},zooms:{description:"此缩放范围内 polyline 可见",type:{name:"other",required:!1,summary:"[number, number]",defaultValue:void 0},table:{defaultValue:void 0}},onShow:{description:"显示，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onHide:{description:"隐藏，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onClick:{description:"左键单击，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onDBLClick:{description:"左键双击，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onRightClick:{description:"右键单击，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onMousedown:{description:"鼠标按下，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onMouseup:{description:"鼠标抬起，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onMouseover:{description:"鼠标经过，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onMouseout:{description:"鼠标移出，回调函数",type:{required:!1,summary:"(event: any) => void"},control:!1},onDragstart:{description:"开始拖拽=时触发事件",type:{required:!1,summary:"(event: any) => void"},control:!1},onDragging:{description:"鼠标拖拽移动=时触发事件",type:{required:!1,summary:"(event: any) => void"},control:!1},onDragend:{description:"拖拽移动结束触发事件",type:{required:!1,summary:"(event: any) => void"},control:!1},onTouchstart:{description:"触摸开始，回调函数，仅移动设备有效",type:{required:!1,summary:"(event: any) => void"},control:!1},onTouchmove:{description:"触摸移动，回调函数，仅移动设备有效",type:{required:!1,summary:"(event: any) => void"},control:!1},onTouchend:{description:"触摸结束，回调函数，仅移动设备有效",type:{required:!1,summary:"(event: any) => void"},control:!1}}},u=r=>d(x,{...r}),o=u.bind({});o.storyName="一般使用";o.args={};const{onChange:_}=E("onChange"),O=H.createRef(),J=r=>r==null?void 0:r.find(N=>N===O.current),a=r=>B(F,{children:[d(x,{...r,ref:O}),d(R,{computeTarget:J,onChange:_})]});a.storyName="支持编辑";a.args={};const t=u.bind({});t.storyName="可拖拽";t.args={draggable:!0,strokeWeight:40,cursor:"move",onDragstart:e.onDragstart,onDragging:e.onDragging,onDragend:e.onDragend};const s=u.bind({});s.storyName="自定义样式";s.args={zIndex:10,strokeColor:"red",strokeStyle:"dashed",strokeOpacity:.8,strokeWeight:20,strokeDasharray:[1,4],borderWeight:10,lineJoin:"bevel",showDir:!0,dirColor:"#000",lineCap:"round",isOutline:!0,outlineColor:"yellow",geodesic:!0};const n=u.bind({});n.storyName="点击事件（左单/左双/右单）";n.args={onClick:e.onClick,onDBLClick:e.onDBLClick,onRightClick:e.onRightClick};const l=u.bind({});l.storyName="鼠标事件（按下/抬起/经过/移出）";l.args={onMousedown:e.onMousedown,onMouseup:e.onMouseup,onMouseover:e.onMouseover,onMouseout:e.onMouseout};const i=u.bind({});i.storyName="触摸事件（触摸开始/触摸移动/触摸结束）";i.args={onTouchstart:e.onTouchstart,onTouchmove:e.onTouchmove,onTouchend:e.onTouchend};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"args => <AMapPolyline {...args} />",...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,f,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => <>
    <AMapPolyline {...args} ref={$polyline} />
    <AMapPolylineEditor computeTarget={computeTarget} onChange={onChange} />
  </>`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,v,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:"args => <AMapPolyline {...args} />",...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var q,C,M;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:"args => <AMapPolyline {...args} />",...(M=(C=s.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var V,k,D;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:"args => <AMapPolyline {...args} />",...(D=(k=n.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var T,w,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:"args => <AMapPolyline {...args} />",...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var S,L,P;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:"args => <AMapPolyline {...args} />",...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const re=["CommonUse","Editable","Draggable","CustomStyle","ClickEvent","MouseEvent","TouchEvent"];export{n as ClickEvent,o as CommonUse,s as CustomStyle,t as Draggable,a as Editable,l as MouseEvent,i as TouchEvent,re as __namedExportsOrder,ee as default};
//# sourceMappingURL=AMapPolyline.stories-cf702984.js.map
