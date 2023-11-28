import{j as n,a as c,F as i}from"./jsx-runtime-91db03d0.js";import{M as d}from"./index-cacdac41.js";import{u as r}from"./index-97715faa.js";import"./index-4139ccbc.js";import"./iframe-7cdb5680.js";import"../sb-preview/runtime.js";import"./index-defb0cf9.js";import"./index-356e4a49.js";function t(e){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},r(),e.components);return c(i,{children:[n(d,{title:"Helpers/coordsOfGeoJSON2AMapPolygonPath"}),`
`,n(o.h1,{id:"coordsofgeojson2amappolygonpath",children:"coordsOfGeoJSON2AMapPolygonPath"}),`
`,c(o.p,{children:["将 ",n(o.code,{children:"GeoJSON.Polygon"})," 的 ",n(o.code,{children:"coords"})," 转换成 ",n(o.code,{children:"AMap.Polygon"})," 的 ",n(o.code,{children:"path"})," 需要的数据 。"]}),`
`,c(o.p,{children:["由于 ",n(o.code,{children:"AMap.Polygon"})," 的 ",n(o.code,{children:"path"})," 允许最后一个点与起始点不需要一致，这不符合 ",n(o.code,{children:"GeoJSON"})," 规范中对 ",n(o.code,{children:"RingLine"}),` 的定义。
因此在实际使用时需要进行数据转换。`]}),`
`,n(o.p,{children:"类型声明："}),`
`,n(o.pre,{children:n(o.code,{className:"language-ts",children:`const coordsOfGeoJSON2AMapPolygonPath: (
    coords: GeoJSON.Position[] | GeoJSON.Polygon['coordinates'] | GeoJSON.MultiPolygon['coordinates']
) => Position[] | Position[][] | Position[][][]
`})})]})}function O(e={}){const{wrapper:o}=Object.assign({},r(),e.components);return o?n(o,Object.assign({},e,{children:n(t,e)})):t(e)}export{O as default};
//# sourceMappingURL=coordsOfGeoJSON2AMapPolygonPath-1403a4f8.js.map
