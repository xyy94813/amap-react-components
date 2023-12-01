import{j as e,a,F as i}from"./jsx-runtime-91db03d0.js";import{M as o}from"./index-308751d1.js";import{u as c}from"./index-97715faa.js";import"./index-4139ccbc.js";import"./iframe-c9cbe04b.js";import"../sb-preview/runtime.js";import"./index-defb0cf9.js";import"./index-356e4a49.js";function s(t){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},c(),t.components);return a(i,{children:[e(o,{title:"Hooks/useAMapPluginInstance"}),`
`,e(n.h1,{id:"useamapplugininstance",children:"useAMapPluginInstance"}),`
`,a(n.p,{children:[e(n.code,{children:"useAMapPluginInstance"})," 是能够帮助你更好的管理 AMap Plugin 实例，以便更好的创建自定 AMap 组件。"]}),`
`,e(n.p,{children:"类型声明："}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`const useAMapPluginInstance: <T = any>(
  pluginName: string,
  initInstance: (AMap: typeof global.AMap, amap: AMap.Map) => T
) => T | null;
`})}),`
`,e(n.p,{children:"示例："}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`const MyAMapComp = () => {
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
`})})]})}function A(t={}){const{wrapper:n}=Object.assign({},c(),t.components);return n?e(n,Object.assign({},t,{children:e(s,t)})):s(t)}export{A as default};
//# sourceMappingURL=useAMapPluginInstance-5f0ae7fb.js.map
