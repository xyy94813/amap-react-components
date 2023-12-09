import{j as n,a as t,F as i}from"./jsx-runtime-86dfebf6.js";import{M as d}from"./index-e66f2514.js";import{u as r}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-b8c9ab75.js";import"../sb-preview/runtime.js";import"./index-6fd5a17b.js";import"./index-d7bb098e.js";import"./index-356e4a49.js";function c(e){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},r(),e.components);return t(i,{children:[n(d,{title:"Helpers/coordsOfGeoJSON2AMapPolygonPath"}),`
`,n(o.h1,{id:"coordsofgeojson2amappolygonpath",children:"coordsOfGeoJSON2AMapPolygonPath"}),`
`,t(o.p,{children:["将 ",n(o.code,{children:"GeoJSON.Polygon"})," 的 ",n(o.code,{children:"coords"})," 转换成 ",n(o.code,{children:"AMap.Polygon"})," 的 ",n(o.code,{children:"path"})," 需要的数据 。"]}),`
`,t(o.p,{children:["由于 ",n(o.code,{children:"AMap.Polygon"})," 的 ",n(o.code,{children:"path"})," 允许最后一个点与起始点不需要一致，这不符合 ",n(o.code,{children:"GeoJSON"})," 规范中对 ",n(o.code,{children:"RingLine"}),` 的定义。
因此在实际使用时需要进行数据转换。`]}),`
`,n(o.p,{children:"类型声明："}),`
`,n(o.pre,{children:n(o.code,{className:"language-ts",children:`const coordsOfGeoJSON2AMapPolygonPath: (
    coords: GeoJSON.Position[] | GeoJSON.Polygon['coordinates'] | GeoJSON.MultiPolygon['coordinates']
) => Position[] | Position[][] | Position[][][]
`})})]})}function M(e={}){const{wrapper:o}=Object.assign({},r(),e.components);return o?n(o,Object.assign({},e,{children:n(c,e)})):c(e)}export{M as default};
