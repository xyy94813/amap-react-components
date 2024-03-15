import{j as n}from"./jsx-runtime-9c4ae004.js";import{u as a}from"./index-314922dd.js";import{M as c}from"./index-662c3f8a.js";import"./index-1b03fe98.js";import"./iframe-9a42535b.js";import"../sb-preview/runtime.js";import"./index-6fd5a17b.js";import"./index-9df8de79.js";import"./index-356e4a49.js";function s(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Hooks/useAMapPluginInstance"}),`
`,n.jsx(e.h1,{id:"useamapplugininstance",children:"useAMapPluginInstance"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useAMapPluginInstance"})," 是能够帮助你更好的管理 AMap Plugin 实例，以便更好的创建自定 AMap 组件。"]}),`
`,n.jsx(e.p,{children:"类型声明："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const useAMapPluginInstance: <T = any>(
  pluginName: string,
  initInstance: (AMap: typeof global.AMap, amap: AMap.Map) => T
) => T | null;
`})}),`
`,n.jsx(e.p,{children:"示例："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const MyAMapComp = () => {
  const initInstance = useCallback(
    (AMap) => new AMap!.Autocomplete(initConfig),
    [initConfig]
  );
  const curInstance = useAMapPluginInstance<AMap.Autocomplete>(
    "Autocomplete",
    initInstance
  );

  useEffect(() => {
    if (!curInstance) return;
    // do something,
    // 例如：
    // curInstance.search(keyword, (status, result) => {
    // });
  }, [curInstance]);

  return null;
};
`})})]})}function g(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{g as default};
