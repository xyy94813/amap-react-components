# amap-react-components

[![deploy-to-gh-pages](https://github.com/xyy94813/amap-react-components/actions/workflows/deploy-to-gh-pages.yml/badge.svg?branch=main)](https://github.com/xyy94813/amap-react-components/actions/workflows/deploy-to-gh-pages.yml)
[![package version](https://img.shields.io/npm/v/amap-react-components.svg?style=flat-square)](https://www.npmjs.org/package/amap-react-components)
[![npm downloads](https://img.shields.io/npm/dm/amap-react-components.svg?style=flat-square)](http://npmjs.com/amap-react-components)

[AMap](https://lbs.amap.com/api/jsapi-v2/summary/) 的 React 组件。

> 注意: 仅支持 AMap V2 且 React >= 16.8.

## Difference with react-amap

- **更加活跃!!!**
- 支持 amap v2
- 基于 react hook
- 开源

## 使用

### 安装

```
yarn add amap-react-components
// or
// npm i amap-react-components
```

### 示例及 API

[各组件示例](https://xyy94813.github.io/amap-react-components)

### Typescript

安装官方的 jsapi 的 ts 声明

```shell
npm install @amap/amap-jsapi-types
```

由于官方 ts 声明存在声明错误、缺漏，以及缺少 AMapUI 相关接口声明等问题，
本项目在官方声明上对接口声明做了改动。

因此，需要将此[声明文件](./src/@types/AMap.d.ts) 复制进您的项目。
当使用了本项目暂时不支持的组件，您需要自定义组件时，可以在您的项目自行维护。

> 如过，有人知道如何将这部分声明文件在构建时一同打包进最终的输出中，麻烦告知我。
> 如果能看到您的 PR 那就更好了。

### Browser

提供 browser 后缀支持 UMD 模块

例如：

```
https://cdn.jsdelivr.net/npm/amap-react-components@0.0.1/dist/amap-react-components.browser.js
```

### Polyfill

使用者可能需要自行处理以下兼容性

- [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
  --> [Proxy Polyfill](https://github.com/GoogleChrome/proxy-polyfill)

## 其它

- [@amap/amap-react](https://www.npmjs.com/package/@amap/amap-react) （高德官方 react 组件 ）
- [react-amap](https://github.com/elemefe/react-amap)

## 贡献指南

查看[贡献指南](./Contributing.md)

## 变更日志

查看[变更日志](./CHANGELOG.md)

## LICENSE

[MIT LICENSE](./LICENSE.md)
