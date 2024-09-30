import{ae as n,af as e,ak as p}from"./index-EQ17eXEj.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import"./iframe-DmMjjNrW.js";import"../sb-preview/runtime.js";import"./index-RYns6xqu.js";import"./index-DAfSkmQi.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";const m=`# amap-react-components

[![latest version](https://img.shields.io/npm/v/amap-react-components.svg?label=latest%20%20version)](https://www.npmjs.org/package/amap-react-components)
[![License](https://img.shields.io/npm/l/amap-react-components?label=latest%20%20version%20%20license)](https://www.npmjs.org/package/amap-react-components)
[![npm downloads](https://img.shields.io/npm/dm/amap-react-components.svg)](http://npmjs.com/amap-react-components)
[![minimized gzipped size](https://img.shields.io/bundlejs/size/amap-react-components)](http://npmjs.com/amap-react-components)

[![GitHub Repo stars](https://img.shields.io/github/stars/xyy94813/amap-react-components?label=github%20%20stars)](https://github.com/xyy94813/amap-react-components)
[![last commit (branch)](https://img.shields.io/github/last-commit/xyy94813/amap-react-components/main)](https://github.com/xyy94813/amap-react-components)

[![deploy-to-gh-pages](https://github.com/xyy94813/amap-react-components/actions/workflows/deploy-to-gh-pages.yml/badge.svg?branch=main)](https://github.com/xyy94813/amap-react-components/actions/workflows/deploy-to-gh-pages.yml)
[![Codecov workflow](https://github.com/xyy94813/amap-react-components/actions/workflows/codecov.yml/badge.svg?branch=main)](https://github.com/xyy94813/amap-react-components/actions/workflows/codecov.yml)
[![codecov](https://codecov.io/gh/xyy94813/amap-react-components/branch/main/graph/badge.svg?token=DCC845JGZW)](https://codecov.io/gh/xyy94813/amap-react-components)

[AMap](https://lbs.amap.com/api/jsapi-v2/summary/) 的 React 组件。

> 注意: 仅支持 AMap V2 且 React >= 16.8.

## 对比其他库

|                  | amap-react-components | @amap/amap-react | react-amap        |
| ---------------- | --------------------- | ---------------- | ----------------- |
| 官方             | ❌                    | ✅               | ❌ （饿了么团队） |
| 开源             | ✅                    | ❌               | ✅                |
| 活跃度           | 较高                  | 低               | 低                |
| 使用文档         | ✅                    | ✅               | ✅                |
| 单元测试覆盖率   | 高                    | ❓               | ❌                |
| 基于 React Hooks | ✅                    | ❓               | ❌                |
| 支持 amap v2     | ✅                    | ✅               | ❌                |
| 支持 amap ui     | ✅                    | ✅               | ✅                |
| 支持 TS          | ✅                    | ✅               | ✅                |
| 支持 Vite        | ✅                    | ❓               | ❓                |
| 自定义组件       | ✅                    | ✅               | ✅                |
| UMD 模块         | ✅                    | ❓               | ✅                |

- [@amap/amap-react](https://www.npmjs.com/package/@amap/amap-react) （高德官方 react 组件 ）
- [react-amap](https://github.com/elemefe/react-amap)

## 使用

### 安装

\`\`\`
yarn add amap-react-components
// or
// npm i amap-react-components
\`\`\`

### Browser

提供 browser 后缀支持 UMD 模块

例如：

\`\`\`
https://cdn.jsdelivr.net/npm/amap-react-components@0.0.1/dist/amap-react-components.browser.js
\`\`\`

### 示例及 API

[各组件示例](https://xyy94813.github.io/amap-react-components)

### Typescript

安装 jsapi 的 ts 声明

\`\`\`shell
npm install amap-jsapi-v2-types -D
\`\`\`

由于官方 ts 声明存在声明错误、缺漏，以及缺少 AMapUI 相关接口声明，甚至官方文档存在错误等问题

自定义组件时，可以参考[此文件](https://github.com/xyy94813/amap-react-components/blob/main/src/%40types/AMap.d.ts) 对其类型扩展

并及时给 \`amap-jsapi-v2-types\` 提 PR。

### Polyfill

使用者可能需要自行处理以下兼容性

- [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
  --> [Proxy Polyfill](https://github.com/GoogleChrome/proxy-polyfill)

## 贡献指南

查看[贡献指南](./Contributing.md)

## 变更日志

查看[变更日志](./CHANGELOG.md)

## LICENSE

[MIT LICENSE](./LICENSE)
`;function o(t){return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"指南/快速了解"}),`
`,n.jsx(p,{children:m})]})}function b(t={}){const{wrapper:a}={...s(),...t.components};return a?n.jsx(a,{...t,children:n.jsx(o,{...t})}):o()}export{b as default};
