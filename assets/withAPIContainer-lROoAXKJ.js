import{r as u}from"./index-RYns6xqu.js";import{c as S}from"./AMapRangingTool-CmppYZ_3.js";var R=new Map,h=new WeakMap,M=0,m=void 0;function _(e){return e?(h.has(e)||(M+=1,h.set(e,M.toString())),h.get(e)):"0"}function P(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?_(e.root):e[t]}`).toString()}function T(e){const t=P(e);let n=R.get(t);if(!n){const s=new Map;let a;const o=new IntersectionObserver(i=>{i.forEach(r=>{var c;const l=r.isIntersecting&&a.some(d=>r.intersectionRatio>=d);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=l),(c=s.get(r.target))==null||c.forEach(d=>{d(l,r)})})},e);a=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:s},R.set(t,n)}return n}function V(e,t,n={},s=m){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const c=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:a,observer:o,elements:i}=T(n),r=i.get(e)||[];return i.has(e)||i.set(e,r),r.push(t),o.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(i.delete(e),o.unobserve(e)),i.size===0&&(o.disconnect(),R.delete(a))}}function O({threshold:e,delay:t,trackVisibility:n,rootMargin:s,root:a,triggerOnce:o,skip:i,initialInView:r,fallbackInView:c,onChange:l}={}){var d;const[b,y]=u.useState(null),g=u.useRef(),[A,p]=u.useState({inView:!!r,entry:void 0});g.current=l,u.useEffect(()=>{if(i||!b)return;let v;return v=V(b,(C,I)=>{p({inView:C,entry:I}),g.current&&g.current(C,I),I.isIntersecting&&o&&v&&(v(),v=void 0)},{root:a,rootMargin:s,threshold:e,trackVisibility:n,delay:t},c),()=>{v&&v()}},[Array.isArray(e)?e.toString():e,b,a,s,o,i,n,c,t]);const w=(d=A.entry)==null?void 0:d.target,E=u.useRef();!b&&w&&!o&&!i&&E.current!==w&&(E.current=w,p({inView:!!r,entry:void 0}));const f=[y,A.inView,A.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}const x={height:"35vw"},B=({children:e})=>{const{ref:t,inView:n}=O({threshold:0}),s=u.useRef(null);return n&&(s.current=e),u.createElement("div",{ref:t,style:x},n?e:s.current)},z=(e,t)=>u.createElement(B,null,e({},t)),N="38755ba5e44be7ed58efbbc70101fbbf",Y=S({key:N,version:"2.0",AMapUI:{version:"1.1"}}),K=(e,t)=>u.createElement(Y,null,e({},t));export{K as a,z as w};
