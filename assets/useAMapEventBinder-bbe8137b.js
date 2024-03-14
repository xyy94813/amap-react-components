import{j as e,a,F as c}from"./jsx-runtime-86dfebf6.js";import{M as s}from"./index-42c4dcea.js";import{u as o}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-4d03b170.js";import"../sb-preview/runtime.js";import"./index-6fd5a17b.js";import"./index-d7bb098e.js";import"./index-356e4a49.js";function i(t){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},o(),t.components);return a(c,{children:[e(s,{title:"Hooks/useAMapEventBinder"}),`
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
`})})]})}function g(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e(n,Object.assign({},t,{children:e(i,t)})):i(t)}export{g as default};
