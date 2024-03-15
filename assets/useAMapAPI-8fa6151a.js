import{j as n}from"./jsx-runtime-9c4ae004.js";import{u as r}from"./index-314922dd.js";import{M as t}from"./index-662c3f8a.js";import"./index-1b03fe98.js";import"./iframe-9a42535b.js";import"../sb-preview/runtime.js";import"./index-6fd5a17b.js";import"./index-9df8de79.js";import"./index-356e4a49.js";function s(o){const e={blockquote:"blockquote",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Hooks/useAMapAPI"}),`
`,n.jsx(e.h1,{id:"useamapapi",children:"useAMapAPI"}),`
`,n.jsxs(e.p,{children:["如果你想访问高德相关的 API，你可以在函数组件内使用 ",n.jsx(e.code,{children:"useAMapAPI"})," 从上下文中获取高德 jsapi ",n.jsx(e.code,{children:"AMap"})," 和 ",n.jsx(e.code,{children:"AMapUI"}),`。
以便于自定义当前库未提供的组件。`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsxs(e.em,{children:["不建议通过 ",n.jsx(e.code,{children:"globalThis"}),"和",n.jsx(e.code,{children:"window"})," 对象获取 API。"]})," > ",n.jsx(e.em,{children:"因为未来可能会在原始 API 上套一层 Proxy 以满足更多的需求。例如，AMap.plugin 多次加载的问题。"})]}),`
`]}),`
`,n.jsx(e.p,{children:"类型声明："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const useAMapAPI = () =>
  React.Context<{
    __AMAP__: typeof global.AMap | null;
    __AMAP_UI__: typeof global.AMapUI | null;
  }>;
`})}),`
`,n.jsxs(e.p,{children:["基于 ",n.jsx(e.code,{children:"useAMapAPI"})," 构建自定义组件："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyAMapComp = () => {
  const {
    __AMAP__: AMap,
    // __AMAP_UI__: AMapUI,
  } = useAMapAPI();

  // 做任何你想做的事情～
  useEffect(() => {
    const getLocationByIP = async () => {
      const ipInfo = await new Promise((resolve, reject) => {
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

      console.log(ipInfo);
    };

    getLocationByIP();
  }, []);

  return null;
};

// How to use
const APP = () => {
  return (
    <AMapAPIContainer>
      <MyAMapComp />
    </AMapAPIContainer>
  );
};
`})})]})}function x(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{x as default};
