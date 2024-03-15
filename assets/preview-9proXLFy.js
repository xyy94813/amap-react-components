import{R as t,r as p}from"./index-BBkUAzwr.js";import{n as o,e as s,f as l}from"./index-BvxrX_qJ.js";import"./iframe-BA5XgpKf.js";import"../sb-preview/runtime.js";import"./index-PqR-_bA4.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";const i=(e,n)=>t.createElement(p.Suspense,{fallback:"loading"},e({},n));i.__docgenInfo={description:"",methods:[],displayName:"withSuspense"};const{NAVIGATE_URL:d}=__STORYBOOK_MODULE_CORE_EVENTS__;function m(e,n){e.channel.emit(d,n)}const g=o.div(({theme:e})=>`
    width: 180px;
    position: fixed;
    top: 32px;
    right: ${e.layoutMargin*2}px;
    padding: ${e.layoutMargin*2}px;
    z-index: 10;
    background: ${e.background.content};
    box-shadow: 
        -2px 0px 0px 0px rgba(0, 0, 0, 0.05)
  `),u=o.div(({theme:e})=>`
    font-size: ${e.typography.size.s2}px;
  `),x=o.ul(()=>`
    margin: 16px 0 0 0;
    padding: 0;
    list-style: none;
  `),E=o.li(({theme:e})=>`
    padding: 4px;
    :not(:last-child) {
      border-bottom: 1px solid ${e.color.border};
    }
  `),b=o.div(({theme:e})=>`
    font-size: ${e.typography.size.s1}px;
  `),y=()=>{const e=t.useContext(s);return t.createElement(g,null,t.createElement(u,null,"大纲"),t.createElement(x,null,e.componentStories().map(n=>{const a=globalThis.encodeURIComponent(n.name.toLowerCase()),r=`#${a}`;return t.createElement(E,{key:n.name},t.createElement("a",{"aria-hidden":"true",href:r,tabIndex:-1,target:"_self",onClick:()=>{document.getElementById(a)&&m(e,r)}},t.createElement(b,null,n.name)))})))},S=o.div(({notOnlyOneStory:e,theme:n})=>e?`margin-right: ${180+20*2+n.layoutMargin*2}px;`:""),c=()=>{const a=t.useContext(s).componentStories().length>1;return t.createElement(t.Fragment,null,t.createElement(S,{notOnlyOneStory:a},t.createElement(l,null)),a&&t.createElement(y,null))};c.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const O=[i],T={options:{storySort:{order:["指南",["快速了解","变更日志","参与贡献"],"组件(Components)",["基础组件(Basic)","地图控件(Control)","覆盖物(Overlay)","工具(Tools)"],"Hooks",["useAMapAPI","useAMap"]]}},docs:{page:c}},k={};export{O as decorators,k as globalTypes,T as parameters};
