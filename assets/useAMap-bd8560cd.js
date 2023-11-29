import{j as e,a,F as c}from"./jsx-runtime-91db03d0.js";import{M as p}from"./index-6d909886.js";import{u as r}from"./index-97715faa.js";import"./index-4139ccbc.js";import"./iframe-08a38adb.js";import"../sb-preview/runtime.js";import"./index-defb0cf9.js";import"./index-356e4a49.js";function o(t){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},r(),t.components);return a(c,{children:[e(p,{title:"Hooks/useAMap"}),`
`,e(n.h1,{id:"useamap",children:"useAMap"}),`
`,a(n.p,{children:["你可以在函数组件内使用 ",e(n.code,{children:"useAMap"})," 从上下文中获取以及 ",e(n.code,{children:"map"}),` 实例。
以便于自定义当前库未提供的组件。`]}),`
`,a(n.p,{children:["考虑到 大多数情况需要同时获取 API 和 map 实例，所以该 Hooks 同时返回了 ",e(n.code,{children:"AMap"})," 和 ",e(n.code,{children:"AMapUI"})]}),`
`,e(n.p,{children:"类型声明："}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`const useAMap = () =>
  React.Context<{
    __AMAP__: typeof global.AMap | null;
    __AMAP_UI__: typeof global.AMapUI | null;
    map: AMap.Map | null;
  }>;
`})}),`
`,a(n.p,{children:["基于 ",e(n.code,{children:"useAMap"})," 构建自定义组件："]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`const MyAMapComp = () => {
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
`})})]})}function _(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e(n,Object.assign({},t,{children:e(o,t)})):o(t)}export{_ as default};
//# sourceMappingURL=useAMap-bd8560cd.js.map
