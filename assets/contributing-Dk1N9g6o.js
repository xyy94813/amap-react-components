import{ae as n,af as r,ak as s}from"./index-BiBozqwV.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import"./iframe-CE0mw6F_.js";import"../sb-preview/runtime.js";import"./index-RYns6xqu.js";import"./index-DAfSkmQi.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";const i=`# 贡献指南

👏👏 欢迎参与贡献该项目 👏👏。

## 交流语言

鉴于 AMap 的特殊性，此仓库基于中文进行沟通交流。
无论是 issue、Commit Message 还是代码注释，尽量使用中文语言。

## Commit Message

Commit msg 格式基于 [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)

## 安装依赖

基于 npm 而不是 yarn。

## 开发步骤

1. \`npm install\`
2. 创建文件 \`.env.local\`
3. 配置文件内设置对应的环境变量 \`STORYBOOK_AMAP_API_KEY={your amap api key}\`
4. 启动 storybook 的 dev server \`npm run storybook\`
`;function e(t){return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"指南/参与贡献"}),`
`,n.jsx(s,{children:i})]})}function d(t={}){const{wrapper:o}={...m(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e()}export{d as default};
