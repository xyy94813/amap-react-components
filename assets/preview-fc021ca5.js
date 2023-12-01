import{j as t,a as p,F as d}from"./jsx-runtime-91db03d0.js";import{r as h,R as g}from"./index-4139ccbc.js";import{n as i,d as f,e as x,T as y,f as b,g as l,P as S,h as C,u as T,i as I,j as w,k as M,l as O}from"./index-308751d1.js";import"./iframe-c9cbe04b.js";import"../sb-preview/runtime.js";import"./index-defb0cf9.js";import"./index-356e4a49.js";const P=(e,o)=>t(h.Suspense,{fallback:"loading",children:e({},o)}),{NAVIGATE_URL:_}=__STORYBOOK_MODULE_CORE_EVENTS__;function E(e,o){e.channel.emit(_,o)}const v=i.div(({theme:e})=>`
    position: fixed;
    top: 60px;
    right: ${e.layoutMargin*2}px;
    width: 180px;
    padding: ${e.layoutMargin*2}px;
    zIndex: 10;
    box-shadow: 
        -2px 0px 0px 0px rgba(0, 0, 0, 0.05), 
        0px 0px 0px 1px rgba(0, 0, 0, 0.05);
  `),z=i.div(({theme:e})=>`
    font-size: ${e.typography.size.s2}px;
  `),R=i.ul(()=>`
    margin: 16px 0 0 0;
    padding: 0;
    list-style: none;
  `),$=i.li(({theme:e})=>`
    padding: 4px;
    :not(:last-child) {
      border-bottom: 1px solid ${e.color.border};
    }
  `),A=i.div(({theme:e})=>`
    font-size: ${e.typography.size.s1}px;
  `),D=({children:e,disableAnchor:o})=>{if(o||typeof e!="string")return t(M,{children:e});const r=globalThis.encodeURIComponent(e.toLowerCase());return t(O,{as:"h3",id:r,children:e})},H=({of:e,expanded:o=!0,withToolbar:r=!1,__forceInitialArgs:n=!1,__primary:s=!1})=>{var m,u;const{story:a}=T(e||"story",["story"]),c=((u=(m=a.parameters.docs)==null?void 0:m.canvas)==null?void 0:u.withToolbar)??r;return p(I,{storyId:a.id,children:[o&&p(d,{children:[t(D,{children:a.name}),t(l,{of:e})]}),t(w,{of:e,withToolbar:c,story:{__forceInitialArgs:n,__primary:s},source:{__forceInitialArgs:n}})]})},W=i(f)(({theme:e})=>({fontSize:`${e.typography.size.s2-1}px`,fontWeight:e.typography.weight.bold,lineHeight:"16px",letterSpacing:"0.35em",textTransform:"uppercase",color:e.textMutedColor,border:0,marginBottom:"12px","&:first-of-type":{marginTop:"56px"}})),j=({title:e="Stories",includePrimary:o=!0})=>{const{componentStories:r}=g.useContext(x);let n=r().filter(s=>{var a,c;return!((c=(a=s.parameters)==null?void 0:a.docs)!=null&&c.disable)});return o||(n=n.slice(1)),!n||n.length===0?null:p(d,{children:[t(W,{children:e}),n.map(s=>s&&t(H,{of:s.moduleExport,expanded:!0,__forceInitialArgs:!0},s.id))]})},k=()=>{const e=g.useContext(x);return p(v,{children:[t(z,{children:"大纲"}),t(R,{children:e.componentStories().map(o=>{const r=globalThis.encodeURIComponent(o.name.toLowerCase()),n=`#${r}`;return t($,{children:t("a",{"aria-hidden":"true",href:n,tabIndex:-1,target:"_self",onClick:()=>{document.getElementById(r)&&E(e,n)},children:t(A,{children:o.name})})},o.name)})})]})},B=()=>{const o=g.useContext(x).componentStories(),r=Object.keys(o).length===1,n=o.length>1;return p(d,{children:[t(y,{}),t(b,{}),t(l,{of:"meta"}),r?t(l,{of:"story"}):null,t(S,{}),t(C,{}),r?null:t(j,{}),n&&t(k,{})]})},Y=[P],q={options:{storySort:{order:["组件(Components)",["基础组件(Basic)","地图控件(Control)","覆盖物(Overlay)","工具(Tools)"],"Hooks",["useAMapAPI","useAMap"]]}},docs:{page:B}},J={};export{Y as decorators,J as globalTypes,q as parameters};
//# sourceMappingURL=preview-fc021ca5.js.map
