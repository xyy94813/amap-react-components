import{j as o}from"./jsx-runtime-9c4ae004.js";import{u as t}from"./index-314922dd.js";import{M as r}from"./index-662c3f8a.js";import"./index-1b03fe98.js";import"./iframe-9a42535b.js";import"../sb-preview/runtime.js";import"./index-6fd5a17b.js";import"./index-9df8de79.js";import"./index-356e4a49.js";function s(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...t(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Helpers/coordsOfGeoJSON2AMapPolygonPath"}),`
`,o.jsx(n.h1,{id:"coordsofgeojson2amappolygonpath",children:"coordsOfGeoJSON2AMapPolygonPath"}),`
`,o.jsxs(n.p,{children:["将 ",o.jsx(n.code,{children:"GeoJSON.Polygon"})," 的 ",o.jsx(n.code,{children:"coords"})," 转换成 ",o.jsx(n.code,{children:"AMap.Polygon"})," 的 ",o.jsx(n.code,{children:"path"})," 需要的数据 。"]}),`
`,o.jsxs(n.p,{children:["由于 ",o.jsx(n.code,{children:"AMap.Polygon"})," 的 ",o.jsx(n.code,{children:"path"})," 允许最后一个点与起始点不需要一致，这不符合 ",o.jsx(n.code,{children:"GeoJSON"})," 规范中对 ",o.jsx(n.code,{children:"RingLine"}),` 的定义。
因此在实际使用时需要进行数据转换。`]}),`
`,o.jsx(n.p,{children:"类型声明："}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-ts",children:`const coordsOfGeoJSON2AMapPolygonPath: (
    coords: GeoJSON.Position[] | GeoJSON.Polygon['coordinates'] | GeoJSON.MultiPolygon['coordinates']
) => Position[] | Position[][] | Position[][][]
`})})]})}function m(e={}){const{wrapper:n}={...t(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(s,{...e})}):s(e)}export{m as default};
