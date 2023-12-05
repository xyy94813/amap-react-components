import{j as t,a as p,F as l}from"./jsx-runtime-86dfebf6.js";import{r as h,R as g}from"./index-1b03fe98.js";import{n as a,d as f,e as u,T as y,f as b,g as d,P as S,h as C,u as T,i as M,j as P,k as w,l as I}from"./index-9e341a10.js";import"./iframe-a8b27b44.js";import"../sb-preview/runtime.js";import"./index-6fd5a17b.js";import"./index-d7bb098e.js";import"./index-356e4a49.js";const O=(e,o)=>t(h.Suspense,{fallback:"loading",children:e({},o)}),{NAVIGATE_URL:_}=__STORYBOOK_MODULE_CORE_EVENTS__;function $(e,o){e.channel.emit(_,o)}const v=a.div(({theme:e})=>`
    width: 180px;
    position: fixed;
    top: 32px;
    right: ${e.layoutMargin*2}px;
    padding: ${e.layoutMargin*2}px;
    z-index: 10;
    background: ${e.background.content};
    box-shadow: 
        -2px 0px 0px 0px rgba(0, 0, 0, 0.05)
  `),E=a.div(({theme:e})=>`
    font-size: ${e.typography.size.s2}px;
  `),z=a.ul(()=>`
    margin: 16px 0 0 0;
    padding: 0;
    list-style: none;
  `),R=a.li(({theme:e})=>`
    padding: 4px;
    :not(:last-child) {
      border-bottom: 1px solid ${e.color.border};
    }
  `),k=a.div(({theme:e})=>`
    font-size: ${e.typography.size.s1}px;
  `),A=()=>{const e=g.useContext(u);return p(v,{children:[t(E,{children:"大纲"}),t(z,{children:e.componentStories().map(o=>{const n=globalThis.encodeURIComponent(o.name.toLowerCase()),r=`#${n}`;return t(R,{children:t("a",{"aria-hidden":"true",href:r,tabIndex:-1,target:"_self",onClick:()=>{document.getElementById(n)&&$(e,r)},children:t(k,{children:o.name})})},o.name)})})]})},D=({children:e,disableAnchor:o})=>{if(o||typeof e!="string")return t(w,{children:e});const n=globalThis.encodeURIComponent(e.toLowerCase());return t(I,{as:"h3",id:n,children:e})},H=({of:e,expanded:o=!0,withToolbar:n=!1,__forceInitialArgs:r=!1,__primary:s=!1})=>{var m,x;const{story:i}=T(e||"story",["story"]),c=((x=(m=i.parameters.docs)==null?void 0:m.canvas)==null?void 0:x.withToolbar)??n;return p(M,{storyId:i.id,children:[o&&p(l,{children:[t(D,{children:i.name}),t(d,{of:e})]}),t(P,{of:e,withToolbar:c,story:{__forceInitialArgs:r,__primary:s},source:{__forceInitialArgs:r}})]})},W=a(f)(({theme:e})=>({fontSize:`${e.typography.size.s2-1}px`,fontWeight:e.typography.weight.bold,lineHeight:"16px",letterSpacing:"0.35em",textTransform:"uppercase",color:e.textMutedColor,border:0,marginBottom:"12px","&:first-of-type":{marginTop:"56px"}})),j=({title:e="Stories",includePrimary:o=!0})=>{const{componentStories:n}=g.useContext(u);let r=n().filter(s=>{var i,c;return!((c=(i=s.parameters)==null?void 0:i.docs)!=null&&c.disable)});return o||(r=r.slice(1)),!r||r.length===0?null:p(l,{children:[t(W,{children:e}),r.map(s=>s&&t(H,{of:s.moduleExport,expanded:!0,__forceInitialArgs:!0},s.id))]})},B=a.div(({notOnlyOneStory:e,theme:o})=>e?`margin-right: ${180+20*2+o.layoutMargin*2}px;`:""),L=()=>{const n=g.useContext(u).componentStories().length>1;return p(l,{children:[p(B,{notOnlyOneStory:n,children:[t(y,{}),t(b,{}),t(d,{of:"meta"}),n?null:t(d,{of:"story"}),t(S,{}),t(C,{}),n?t(j,{}):null]}),n&&t(A,{})]})},J=[O],Q={options:{storySort:{order:["组件(Components)",["基础组件(Basic)","地图控件(Control)","覆盖物(Overlay)","工具(Tools)"],"Hooks",["useAMapAPI","useAMap"]]}},docs:{page:L}},X={};export{J as decorators,X as globalTypes,Q as parameters};
