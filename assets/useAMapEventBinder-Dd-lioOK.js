import{ae as n,af as i}from"./index-BiBozqwV.js";import{useMDXComponents as o}from"./index-CcnH5Kt0.js";import"./iframe-CE0mw6F_.js";import"../sb-preview/runtime.js";import"./index-RYns6xqu.js";import"./index-DAfSkmQi.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";function s(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Hooks/useAMapEventBinder"}),`
`,n.jsx(e.h1,{id:"useamapeventbinder",children:"useAMapEventBinder"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useAMapEventBinder"})," 是能够辅助你更好的进行对 AMap jsapi 下的实例进行事件绑定和解绑。"]}),`
`,n.jsx(e.p,{children:"类型声明："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function useAMapEventBinder(
  instance: any,
  eventName: string,
  handler?: ((event: any) => void) | undefined
): void;
`})}),`
`,n.jsx(e.p,{children:"示例："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyAMapComp = () => {
  const initInstance = useCallback(
    (AMap) => new AMap!.Autocomplete(initConfig),
    [initConfig]
  );
  const curInstance = useAMapPluginInstance<AMap.Autocomplete>(
    "Autocomplete",
    initInstance
  );

  // 目前的实现需要对回调进行 memo 处理，不然会反复的绑定和解绑
  const memoCB = useCallback(() => {}, []);

  useAMapEventBinder(curInstance, "select", memoCB);

  return null;
};
`})})]})}function x(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{x as default};
