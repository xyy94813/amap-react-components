import{ae as n,af as p}from"./index-EQ17eXEj.js";import{useMDXComponents as t}from"./index-CcnH5Kt0.js";import"./iframe-DmMjjNrW.js";import"../sb-preview/runtime.js";import"./index-RYns6xqu.js";import"./index-DAfSkmQi.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";function r(a){const e={code:"code",h1:"h1",p:"p",pre:"pre",...t(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{title:"Hooks/useAMapOverlayBinder"}),`
`,n.jsx(e.h1,{id:"useamapoverlaybinder",children:"useAMapOverlayBinder"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useAMapOverlayBinder"})," 用于绑定 Overlay 至最近的容器上。"]}),`
`,n.jsx(e.p,{children:"类型声明："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const useAMapOverlayBinder: (overlay: any) => void;
`})}),`
`,n.jsx(e.p,{children:"示例："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyAMapComp = () => {
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
`})})]})}function A(a={}){const{wrapper:e}={...t(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(r,{...a})}):r(a)}export{A as default};
