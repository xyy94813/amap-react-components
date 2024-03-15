import{j as o}from"./jsx-runtime-9c4ae004.js";import{u as r}from"./index-314922dd.js";import{M as s}from"./index-662c3f8a.js";import"./index-1b03fe98.js";import"./iframe-9a42535b.js";import"../sb-preview/runtime.js";import"./index-6fd5a17b.js";import"./index-9df8de79.js";import"./index-356e4a49.js";function t(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...r(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Helpers/amapPolygonPath2GeoJSONCoords"}),`
`,o.jsx(e.h1,{id:"amappolygonpath2geojsoncoords",children:"amapPolygonPath2GeoJSONCoords"}),`
`,o.jsxs(e.p,{children:["将 ",o.jsx(e.code,{children:"AMap.Polygon"})," 的 ",o.jsx(e.code,{children:"path"})," 数据转换成 ",o.jsx(e.code,{children:"GeoJSON.Polygon"})," 的 coords。"]}),`
`,o.jsxs(e.p,{children:["由于 ",o.jsx(e.code,{children:"AMap.Polygon"})," 的 ",o.jsx(e.code,{children:"path"})," 允许最后一个点与起始点不需要一致，这不符合 ",o.jsx(e.code,{children:"GeoJSON"})," 规范中对 ",o.jsx(e.code,{children:"RingLine"}),` 的定义。
因此在实际使用时需要进行数据转换。`]}),`
`,o.jsx(e.p,{children:"类型声明："}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-ts",children:`const amapPolygonPath2GeoJSONCoords: (
    path: ReturnType<AMap.Polygon['getPath']>
) => GeoJSON.Position[] | GeoJSON.Position[][] | GeoJSON.Position[][][]
`})})]})}function j(n={}){const{wrapper:e}={...r(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(t,{...n})}):t(n)}export{j as default};
