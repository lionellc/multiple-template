# multiple-template

- 基于 webpack 的前端多页面工程
- ts

## 已完成功能

- less 编译
- gzip 压缩
- eslint 检查
- stylelint 检查
- bundle-analyze boundle 构成分析
- ts typescript 语法支持

## 使用方法

## 创建新的页面

## 注意点

## 期望功能

## 搭建历程

mkdir multiple-template
cd multiple-template
npm init -y
yarn add webpack webpack-cli typescript ts-loader -D
mkdir config
mkdir src
cd config
touch webpack.common.js
touch webpack.dev.conf.js
touch webpack.prod.conf.js
cd ..
cd src
mkdir js
mkdir css
touch index.ejs
