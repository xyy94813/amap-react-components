# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.3.0](https://github.com/xyy94813/amap-react-components/compare/v0.2.1...v0.3.0) (2023-07-20)


### Features

* 新增 Marker 组件 ([cb19683](https://github.com/xyy94813/amap-react-components/commit/cb196833a0c72cdeb26db78ca407b9403db99e21))
* 新增控制组件 AMapMapType ([63068be](https://github.com/xyy94813/amap-react-components/commit/63068beb2fac3439fce594d79f2dd95face6414c))
* 新增组件 AMapEllipse ([710e5f7](https://github.com/xyy94813/amap-react-components/commit/710e5f7d9f91511b5721cd111e12bf7e2697fd40))
* 新增组件 AMapOverlayGroup ([b565022](https://github.com/xyy94813/amap-react-components/commit/b5650220560f892dc853b2328b0fc6bc51e2ecc3))
* 支持隐藏或显示 GeoJSON ([be37ac2](https://github.com/xyy94813/amap-react-components/commit/be37ac272dc276ba614062de9119e81857df6335))
* 组件 AMapCircle 支持更多回调事件 ([20e25d1](https://github.com/xyy94813/amap-react-components/commit/20e25d164fa1c4eb5dc4727e0c739aa0b05ba94a))


### Bug Fixes

* 修正 AMapMapTypeProps 回调函数类型 ([03a381a](https://github.com/xyy94813/amap-react-components/commit/03a381a6cd6204897d0cca11c9479412fa581de9))
* 修正回调函数类型 ([623a18b](https://github.com/xyy94813/amap-react-components/commit/623a18b4c9088dd63ac589c718dd8ead84298a00))
* 组件 AMapEllipseProps 错误的类型声明 ([2d61188](https://github.com/xyy94813/amap-react-components/commit/2d61188185a2996210d579e54231c1bc7e52310c))

### [0.2.1](https://github.com/xyy94813/amap-react-components/compare/v0.2.0...v0.2.1) (2023-07-04)


### Features

* 兼容 nopack 框架 ([83fbddb](https://github.com/xyy94813/amap-react-components/commit/83fbddb49948e32fcf8973693a21dd4f6bb24af7))


### Bug Fixes

* 类型错误 ([84f4c24](https://github.com/xyy94813/amap-react-components/commit/84f4c24d24686d563e6fec795ae0325d28243296))

## [0.2.0](https://github.com/xyy94813/amap-react-components/compare/v0.1.3...v0.2.0) (2023-06-06)


### Features

* 提供新的 hook, `useAMapEventBinder` ([c6e0e46](https://github.com/xyy94813/amap-react-components/commit/c6e0e466a3b97d366e611290ccccc0848ca8d1de))
* 新增 helper 处理 geojson coords 到 amap path 到转换 ([0ba0312](https://github.com/xyy94813/amap-react-components/commit/0ba03127c2ca0ae2e0a390fd62cb2d7919555cca))
* 新增组件 AMapCircle ([8ccb685](https://github.com/xyy94813/amap-react-components/commit/8ccb685471a3d14ab3bb3401e774e16c3e4d2bcd))
* 新增组件 AMapMouseTool ([0946959](https://github.com/xyy94813/amap-react-components/commit/0946959f5c345c5edf8017fb18db43db10ee72b3))
* 组件 AMapGeoJSON 支持设置样式 ([c3f01ce](https://github.com/xyy94813/amap-react-components/commit/c3f01ce5fdb8f54d73cc37e4fd4c7885bbf3c572))


### Bug Fixes

* 第一打开 storybook 时，缺少 Suspense 的问题 ([ae26c24](https://github.com/xyy94813/amap-react-components/commit/ae26c24c13b5b7554a57c9ce312c20d9a35a46dc))
* 类型错误 ([ee7b36d](https://github.com/xyy94813/amap-react-components/commit/ee7b36de6b108baca6b59a879d7e196e88f32245))
* 自动部署 gh-pages 失败 ([2d13bf8](https://github.com/xyy94813/amap-react-components/commit/2d13bf811d8aeed57c986dead5bcd475d03d1a9f))

### [0.1.3](https://github.com/xyy94813/amap-react-components/compare/v0.1.2...v0.1.3) (2023-03-15)


### Bug Fixes

* 切换地图时报错 ([f07315a](https://github.com/xyy94813/amap-react-components/commit/f07315a7c4ae6cef2598e3c1d6d3acb6956f5ab7))

### [0.1.2](https://github.com/xyy94813/amap-react-components/compare/v0.1.1...v0.1.2) (2023-03-14)


### Bug Fixes

* 切换地图时报错 ([274a970](https://github.com/xyy94813/amap-react-components/commit/274a970ea1ca05e8098a6c3d8ab629d81ce140bd))

### [0.1.1](https://github.com/xyy94813/amap-react-components/compare/v0.1.0...v0.1.1) (2022-11-22)


### Bug Fixes

* 发布的包不带构建结果 ([c96e119](https://github.com/xyy94813/amap-react-components/commit/c96e1192ba71e6a64dea385743a986f90393ebc5))

## [0.1.0](https://github.com/xyy94813/amap-react-components/compare/v0.0.1...v0.1.0) (2022-11-22)


### ⚠ BREAKING CHANGES

* 变更 `AMapAPIContextValue.__AMAP__` 的类型

### Features

* 创建的 AMapAPIContainer 改为 lazy component ([ea83a3f](https://github.com/xyy94813/amap-react-components/commit/ea83a3f20a88b6d5a93913e5881644b702f4b92b))
* 支持加载 AMapUI sdk ([201d7cf](https://github.com/xyy94813/amap-react-components/commit/201d7cfea1f3b3c8421fc586205b7e8d6375f19d))


### Bug Fixes

* 处理类型声明错误 ([4187830](https://github.com/xyy94813/amap-react-components/commit/418783092a4f3ba0838fa8b190c1238e7ebcbffa))


* 完善类型声明 ([dc5c153](https://github.com/xyy94813/amap-react-components/commit/dc5c15342ec18bef70f0aee8c7cb5f7216d53c78))

### 0.0.1 (2021-05-25)

### Features

- new component `createAMapAPIContainer` ([be725e7](https://github.com/xyy94813/amap-react-components/commit/be725e78e3e1d3cdf427f838b9ba22481226d59e))
- new component AMapGeoJson ([fb694a9](https://github.com/xyy94813/amap-react-components/commit/fb694a98494b153c8bad5d12245531709c292bd3))
- new component AMapMap ([3645a88](https://github.com/xyy94813/amap-react-components/commit/3645a88ac4f61d1a000bcee950b2ff69f78343ab))
- support offical control components ([a6e2591](https://github.com/xyy94813/amap-react-components/commit/a6e25913e4739d104b6fb9317612cc23ed8a7743))
