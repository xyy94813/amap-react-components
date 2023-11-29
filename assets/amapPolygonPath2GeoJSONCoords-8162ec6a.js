import{j as e,a as t,F as a}from"./jsx-runtime-91db03d0.js";import{M as i}from"./index-6d909886.js";import{u as c}from"./index-97715faa.js";import"./index-4139ccbc.js";import"./iframe-08a38adb.js";import"../sb-preview/runtime.js";import"./index-defb0cf9.js";import"./index-356e4a49.js";function r(n){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},c(),n.components);return t(a,{children:[e(i,{title:"Helpers/amapPolygonPath2GeoJSONCoords"}),`
`,e(o.h1,{id:"amappolygonpath2geojsoncoords",children:"amapPolygonPath2GeoJSONCoords"}),`
`,t(o.p,{children:["将 ",e(o.code,{children:"AMap.Polygon"})," 的 ",e(o.code,{children:"path"})," 数据转换成 ",e(o.code,{children:"GeoJSON.Polygon"})," 的 coords。"]}),`
`,t(o.p,{children:["由于 ",e(o.code,{children:"AMap.Polygon"})," 的 ",e(o.code,{children:"path"})," 允许最后一个点与起始点不需要一致，这不符合 ",e(o.code,{children:"GeoJSON"})," 规范中对 ",e(o.code,{children:"RingLine"}),` 的定义。
因此在实际使用时需要进行数据转换。`]}),`
`,e(o.p,{children:"类型声明："}),`
`,e(o.pre,{children:e(o.code,{className:"language-ts",children:`const amapPolygonPath2GeoJSONCoords: (
    path: ReturnType<AMap.Polygon['getPath']>
) => GeoJSON.Position[] | GeoJSON.Position[][] | GeoJSON.Position[][][]
`})})]})}function O(n={}){const{wrapper:o}=Object.assign({},c(),n.components);return o?e(o,Object.assign({},n,{children:e(r,n)})):r(n)}export{O as default};
//# sourceMappingURL=amapPolygonPath2GeoJSONCoords-8162ec6a.js.map
