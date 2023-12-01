import{j as e,a as r,F as o}from"./jsx-runtime-91db03d0.js";import{M as c}from"./index-308751d1.js";import{u as p}from"./index-97715faa.js";import"./index-4139ccbc.js";import"./iframe-c9cbe04b.js";import"../sb-preview/runtime.js";import"./index-defb0cf9.js";import"./index-356e4a49.js";function t(a){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},p(),a.components);return r(o,{children:[e(c,{title:"Hooks/useAMapOverlayBinder"}),`
`,e(n.h1,{id:"useamapoverlaybinder",children:"useAMapOverlayBinder"}),`
`,r(n.p,{children:[e(n.code,{children:"useAMapOverlayBinder"})," 用于绑定 Overlay 至最近的容器上。"]}),`
`,e(n.p,{children:"类型声明："}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`const useAMapOverlayBinder: (overlay: any) => void;
`})}),`
`,e(n.p,{children:"示例："}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`const MyAMapComp = () => {
  const initInstance = useCallback((AMap) => new AMap!.Rectangle(), []);
  const curInstance = useAMapPluginInstance<AMap.Rectangle>(
    "Rectangle",
    initInstance
  );

  useAMapOverlayBinder(curInstance);

  return null;
};

const APP = () => {
  return (
    <AMapAPIContainer>
      <AMapMap>
        {/* 以下使用会直接绑定到 AMapMap */}
        <MyAMapComp />
        <AMapOverlayGroup>
          {/* 以下使用会直接绑定最近的 OverlayGroup 上 */}
          <AMapOverlayGroup>
            <MyAMapComp />
          </AMapOverlayGroup>
        </AMapOverlayGroup>
      </AMapMap>
    </AMapAPIContainer>
  );
};
`})})]})}function y(a={}){const{wrapper:n}=Object.assign({},p(),a.components);return n?e(n,Object.assign({},a,{children:e(t,a)})):t(a)}export{y as default};
//# sourceMappingURL=useAMapOverlayBinder-480982f9.js.map
