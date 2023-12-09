import{j as e,a as r,F as a}from"./jsx-runtime-86dfebf6.js";import{M as i}from"./index-4d23e8ba.js";import{u as c}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-1ec524bb.js";import"../sb-preview/runtime.js";import"./index-6fd5a17b.js";import"./index-d7bb098e.js";import"./index-356e4a49.js";function t(o){const n=Object.assign({h1:"h1",p:"p",code:"code",blockquote:"blockquote",em:"em",pre:"pre"},c(),o.components);return r(a,{children:[e(i,{title:"Hooks/useAMapAPI"}),`
`,e(n.h1,{id:"useamapapi",children:"useAMapAPI"}),`
`,r(n.p,{children:["如果你想访问高德相关的 API，你可以在函数组件内使用 ",e(n.code,{children:"useAMapAPI"})," 从上下文中获取高德 jsapi ",e(n.code,{children:"AMap"})," 和 ",e(n.code,{children:"AMapUI"}),`。
以便于自定义当前库未提供的组件。`]}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:[r(n.em,{children:["不建议通过 ",e(n.code,{children:"globalThis"}),"和",e(n.code,{children:"window"})," 对象获取 API。"]})," > ",e(n.em,{children:"因为未来可能会在原始 API 上套一层 Proxy 以满足更多的需求。例如，AMap.plugin 多次加载的问题。"})]}),`
`]}),`
`,e(n.p,{children:"类型声明："}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`const useAMapAPI = () =>
  React.Context<{
    __AMAP__: typeof global.AMap | null;
    __AMAP_UI__: typeof global.AMapUI | null;
  }>;
`})}),`
`,r(n.p,{children:["基于 ",e(n.code,{children:"useAMapAPI"})," 构建自定义组件："]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`const MyAMapComp = () => {
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
`})})]})}function P(o={}){const{wrapper:n}=Object.assign({},c(),o.components);return n?e(n,Object.assign({},o,{children:e(t,o)})):t(o)}export{P as default};
