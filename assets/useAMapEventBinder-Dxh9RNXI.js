import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as o}from"./index-z5U8iC57.js";import{M as i}from"./index-DqcY8M14.js";import"./index-BBkUAzwr.js";import"./iframe-DPsVgYgF.js";import"../sb-preview/runtime.js";import"./index-PqR-_bA4.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";function s(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Hooks/useAMapEventBinder"}),`
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
`})})]})}function M(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{M as default};