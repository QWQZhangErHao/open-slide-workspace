<div align="center">
  <br/>
  <h1>📝 My Slides · 我的幻灯片</h1>

  <p><strong>Presentation Slides as React Components · 用 React 组件做演示文稿</strong></p>

  <p><strong>open-slide workspace</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react" alt="React 18" />
    <img src="https://img.shields.io/badge/open--slide-v1.1-6366F1?style=flat-square" alt="open-slide" />
    <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite" alt="Vite 5" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License" />
  </p>
</div>

<br/>

A collection of presentations built with **open-slide** — write slides as React components, let the runtime handle layout, scaling, navigation, and fullscreen play mode.

基于 **open-slide** 构建的幻灯片合集 — 用 React 组件编写演示文稿，运行时自动处理布局、缩放、导航和全屏播放。

---

## ✨ Features · 功能特性

| Feature 功能 | Description 说明 |
|-------------|-----------------|
| ⚛️ **React Components** | Each slide is a reusable React component / 每个幻灯片都是一个可复用的 React 组件 |
| 🎨 **Auto Layout** | Built-in layout engine with responsive scaling / 内置布局引擎，自动响应式缩放 |
| 🖱️ **Navigation** | Keyboard / mouse navigation with thumbnails / 键盘鼠标导航，支持缩略图 |
| 🖥️ **Fullscreen** | Presentation mode with clean, distraction-free UI / 全屏演示模式，干净无干扰 |
| 🚀 **Fast Dev** | Hot reload via Vite — edit and see changes instantly / Vite 热重载，即时查看修改效果 |
| 📦 **Static Export** | Build a portable static bundle for deployment / 构建可部署的静态包 |

---

## 📂 Slide Collection · 幻灯片集

| Slide 幻灯片 | Description 说明 |
|:------------:|-----------------|
| **Getting Started** | Introduction and quick-start guide / 介绍与快速入门指南 |
| **Self-Doubt** | Overcoming imposter syndrome in tech / 克服技术领域的冒充者综合征 |

---

## 🚀 Quick Start · 快速开始

```bash
# Install dependencies / 安装依赖
pnpm install

# Start dev server with hot reload / 启动开发服务器（热重载）
pnpm dev

# Build static bundle / 构建静态包
pnpm build

# Preview the built bundle / 预览构建结果
pnpm preview
```

---

## 🧱 Creating a New Slide · 创建新幻灯片

```tsx
// slides/my-slide/index.tsx
import type { Page, SlideMeta } from '@open-slide/core';

const Cover: Page = () => (
  <div style={{ width: '100%', height: '100%' }}>
    <h1>My Awesome Presentation</h1>
  </div>
);

export const meta: SlideMeta = {
  title: 'My Awesome Presentation',
};

export default [Cover];
```

Each slide lives in `slides/<id>/index.tsx` and exports an array of page components.

每个幻灯片存放在 `slides/<id>/index.tsx` 中，默认导出一个页面组件数组。

---

## 📄 License · 许可

MIT
