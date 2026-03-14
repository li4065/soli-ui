## 简介

`soli-ui` 是一个基于 React 的独立 UI 组件库，主要面向 React 19 及以上版本。它不依赖任何特定框架项目脚手架，可以在你的任意 React 项目中单独引入和使用。

## 与 Tailwind 配合使用

组件内部大量使用了实用类风格的样式设计思路，推荐与 Tailwind CSS 一起使用，以便更灵活地覆盖主题、间距和排版等样式。如果你的项目已经接入 Tailwind，可直接在使用组件时通过类名进行二次定制。

## 设计参考

`soli-ui` 的设计和交互参考了市面上多款成熟的 UI 组件库（如 Ant Design、Radix UI 等），在此基础上做了一些简化和个性化调整，重点关注日常业务中高频使用的组件和易用的 API 设计。

## 快速开始

**安装**

```bash
npm install soli-ui
# 或者
yarn add soli-ui
```

**在项目中使用**

```tsx
import React from "react";
import { Button } from "soli-ui";

export default function App() {
  return <Button>Button</Button>;
}
```

如果你的项目已经配置 Tailwind CSS，可以根据需要通过类名或自定义样式覆盖组件的默认样式，以适应不同的设计系统和主题。
