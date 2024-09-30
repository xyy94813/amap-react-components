import"./index-RYns6xqu.js";import{f as C}from"./AMapRangingTool-CmppYZ_3.js";import{w as h,a as x}from"./withAPIContainer-lROoAXKJ.js";const A={title:"组件(Components)/基础组件(Basic)/AMapMap",component:C,decorators:[h,x],args:{features:["bg","point","road","building"],viewMode:"2D"},argTypes:{viewMode:{description:"地图视图模式。注意，切换地图模式会创建新的地图实例，同时销毁原有地图实例。",type:{required:!1,name:"enum",value:["2D","3D"]},table:{type:{summary:"string"},defaultValue:{summary:"2D"}},options:["2D","3D"],control:"select"},center:{description:"中心经纬度",type:{required:!1,name:"array",value:{name:"number"}},table:{type:{summary:"number[]"}},control:"object"},cityName:{description:"行政区名称支持中国、省、市、区/县名称，如遇重名的情况，会按城市编码表顺序返回第一个。",type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},zoom:{description:"地图显示的缩放级别，可以设置为浮点数；若 center 与level 未赋值，地图初始化默认显示用户所在城市范围。",type:{required:!1,name:"number"},table:{type:{summary:"number"}},control:{type:"number",min:2,max:20,step:1}},features:{description:"设置地图上显示的元素种类",type:{required:!1,name:"array",value:{name:"enum",value:["bg","point","road","building"]}},table:{type:{summary:"string[]"},defaultValue:{summary:"['bg', 'point', 'road', 'building']"}},options:{"bg(地图背景)":"bg","point(POI)":"point","road(道路)":"road","building(建筑物)":"building"},control:"check"},mapStyle:{description:["设置地图样式：",'官方样式模版，如 "amap://styles/grey"','地图自定义平台定制地图样式，如 "amap://styles/d6bf8c1d69cea9f5c696185ad4ac4c86"'].join("<br/>"),type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},pitch:{description:"俯仰角度，值范围：0-90。2D地图下无效 。",type:{required:!1,name:"number"},table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:{type:"number",min:0,max:90,step:15}}}},e={name:"设置中心点",args:{center:[114.021769,22.530421]}},a={name:"设置城市名称",args:{cityName:"深圳"}},r={name:"设置缩放比例",args:{zoom:12}},t={name:"设置地图上显示的元素种类",args:{features:["bg","point"]}},s={name:"自定义地图样式",args:{mapStyle:"amap://styles/grey"}},n={name:"3D 模式",args:{viewMode:"3D",pitch:75,zoom:18}};var o,m,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '设置中心点',
  args: {
    center: [114.021769, 22.530421]
  }
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,c,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '设置城市名称',
  args: {
    cityName: '深圳'
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '设置缩放比例',
  args: {
    zoom: 12
  }
}`,...(y=(l=r.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var g,b,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '设置地图上显示的元素种类',
  args: {
    features: ['bg', 'point']
  }
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var f,M,D;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '自定义地图样式',
  args: {
    mapStyle: 'amap://styles/grey'
  }
}`,...(D=(M=s.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var v,w,q;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '3D 模式',
  args: {
    viewMode: '3D',
    pitch: 75,
    zoom: 18
  }
}`,...(q=(w=n.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};const I=["SetCenter","SetCityName","SetZoom","SetFeatures","SetsMapStyle","ViewModeIs3D"];export{e as SetCenter,a as SetCityName,t as SetFeatures,r as SetZoom,s as SetsMapStyle,n as ViewModeIs3D,I as __namedExportsOrder,A as default};
