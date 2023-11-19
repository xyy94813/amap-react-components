import{j as e,a,F as c}from"./jsx-runtime-91db03d0.js";import{M as s}from"./index-de8af43c.js";import{u as o}from"./index-97715faa.js";import"./index-4139ccbc.js";import"./iframe-60813c16.js";import"../sb-preview/runtime.js";import"./index-defb0cf9.js";import"./index-356e4a49.js";function i(t){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},o(),t.components);return a(c,{children:[e(s,{title:"Hooks/useAMapEventBinder"}),`
`,e(n.h1,{id:"useamapeventbinder",children:"useAMapEventBinder"}),`
`,a(n.p,{children:[e(n.code,{children:"useAMapEventBinder"})," 是能够辅助你更好的进行对 AMap jsapi 下的实例进行事件绑定和解绑。"]}),`
`,e(n.p,{children:"类型声明："}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`function useAMapEventBinder(
  instance: any,
  eventName: string,
  handler?: ((event: any) => void) | undefined
): void;
`})}),`
`,e(n.p,{children:"示例："}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`const MyAMapComp = () => {
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
`})})]})}function A(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e(n,Object.assign({},t,{children:e(i,t)})):i(t)}export{A as default};
//# sourceMappingURL=useAMapEventBinder-69a9f48a.js.map
