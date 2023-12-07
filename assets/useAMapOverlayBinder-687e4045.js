import{j as e,a as r,F as o}from"./jsx-runtime-86dfebf6.js";import{M as c}from"./index-15aa1029.js";import{u as p}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-178ef34f.js";import"../sb-preview/runtime.js";import"./index-6fd5a17b.js";import"./index-d7bb098e.js";import"./index-356e4a49.js";function t(a){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},p(),a.components);return r(o,{children:[e(c,{title:"Hooks/useAMapOverlayBinder"}),`
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
`})})]})}function h(a={}){const{wrapper:n}=Object.assign({},p(),a.components);return n?e(n,Object.assign({},a,{children:e(t,a)})):t(a)}export{h as default};
