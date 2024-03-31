import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as a}from"./index-z5U8iC57.js";import{M as s}from"./index-CpgBytn8.js";import"./index-BBkUAzwr.js";import"./iframe-DrIo5-KL.js";import"../sb-preview/runtime.js";import"./index-PqR-_bA4.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";function o(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Hooks/useAMap"}),`
`,n.jsx(e.h1,{id:"useamap",children:"useAMap"}),`
`,n.jsxs(e.p,{children:["你可以在函数组件内使用 ",n.jsx(e.code,{children:"useAMap"})," 从上下文中获取以及 ",n.jsx(e.code,{children:"map"}),` 实例。
以便于自定义当前库未提供的组件。`]}),`
`,n.jsxs(e.p,{children:["考虑到 大多数情况需要同时获取 API 和 map 实例，所以该 Hooks 同时返回了 ",n.jsx(e.code,{children:"AMap"})," 和 ",n.jsx(e.code,{children:"AMapUI"})]}),`
`,n.jsx(e.p,{children:"类型声明："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const useAMap = () =>
  React.Context<{
    __AMAP__: typeof global.AMap | null;
    __AMAP_UI__: typeof global.AMapUI | null;
    map: AMap.Map | null;
  }>;
`})}),`
`,n.jsxs(e.p,{children:["基于 ",n.jsx(e.code,{children:"useAMap"})," 构建自定义组件："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyAMapComp = () => {
  const {
    map,
    __AMAP__: AMap,
    // __AMAP_UI__: AMapUI,
  } = useAMap();

  // 做任何你想做的事情～
  useEffect(() => {
    const getLocationByIP = async () =>
      new Promise((resolve, reject) => {
        AMap!.WebService.get(
          "/v3/ip",
          {
            key: "您的key",
          },
          (error, result) => {
            if (error) {
              reject(error);
            }
            resolve(result);
          }
        );
      });

    const autoSetCity = async () => {
      const location = await getLocationByIP();
      map.setCity(location.city);
    };

    autoSetCity();
  }, [AMap, map]); // AMap 更新 => map 也要更新 => 需要重新 setCity

  return null;
};

// How to use
const APP = () => {
  return (
    <AMapAPIContainer>
      <AMapMap>
        <MyAMapComp />
      </AMapMap>
    </AMapAPIContainer>
  );
};
`})})]})}function d(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{d as default};
