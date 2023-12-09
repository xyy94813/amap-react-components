import{j as t,a as r,F as s}from"./jsx-runtime-86dfebf6.js";import{M as m,d as i}from"./index-4d23e8ba.js";import{u as a}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-1ec524bb.js";import"../sb-preview/runtime.js";import"./index-6fd5a17b.js";import"./index-d7bb098e.js";import"./index-356e4a49.js";const p=`# 贡献指南

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
`;function e(n){return r(s,{children:[t(m,{title:"指南/参与贡献"}),`
`,t(i,{children:p})]})}function y(n={}){const{wrapper:o}=Object.assign({},a(),n.components);return o?t(o,Object.assign({},n,{children:t(e,n)})):e()}export{y as default};
