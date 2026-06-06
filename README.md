# Wenbin Notes 源码更新记录

这个仓库用于备份和维护个人博客 `Wenbin Notes` 的源码。README 只记录博客框架、主题样式、组件能力、依赖配置、构建部署等源码层面的更新，不记录具体博文内容的增删改。

## 记录规则

- 只记录源码和站点框架更新，例如主题、布局、组件、样式、构建配置、依赖版本、内容结构调整。
- 不记录单篇博客文章的发布、修改或草稿内容。
- 新更新追加在 `更新记录` 顶部，保持倒序。
- 每条记录尽量写清楚动机、主要改动和验证结果。

## 常用命令

```bash
npm install
npm run dev
npm run build
npm run preview
```

本地开发默认访问 `http://127.0.0.1:1234/` 或 Astro 输出的本地地址。

## 更新记录

### 2026-06-06

#### 初始化个人博客源码

- 基于 `astro-erudite` 搭建个人博客源码，并保留 Astro + MDX + Tailwind + shadcn/ui 的基础结构。
- 修正 Tailwind 相关依赖版本，锁定 `@tailwindcss/vite` 与 `tailwindcss` 为 `4.2.1`，生成 `package-lock.json`。
- 确认 `npm run build` 可以通过。

#### 站点信息与内容结构

- 将站点名称调整为 `Wenbin Notes`。
- 将站点语言设置为 `zh-CN`。
- 将导航中文化为 `文章 / 标签 / 关于`。
- 清空默认博客内容展示：旧主题示例文章全部标记为 `draft: true`，不再进入首页、文章页、标签页或 RSS。
- 为文章列表页增加空状态，避免没有公开文章时页面空白。
- 首页改为中文个人简介，不把博客限定为 AIGC 或工程主题，改为更开放的学习、阅读、技术、观察和生活记录空间。
- About 页面同步中文化，定位为个人博客和长期笔记空间。

#### 视觉主题与布局

- 参考简洁个人博客风格，调整首页为更克制的个人介绍布局。
- 设计一组蓝紫主导的基础色板，辅以天蓝、淡紫、柠檬黄、珊瑚和水色点缀。
- 调整亮色模式背景为更有存在感的暖米灰，暗黑模式为深紫灰/石墨底色。
- 优化 sticky header：
  - 去除刷新后出现的明显分割线。
  - 保留轻薄玻璃模糊效果。
  - 修复刷新和站内跳转时 header 状态不一致的问题。
- 调整首页标题层级，将过长标题收敛为更短的主标题。

#### 品牌与 Logo

- 生成并接入 `WB` monogram 风格 logo，保存为 `public/static/logo-wenbin.png`。
- 将 header 左上角替换为新 logo。
- 将站点 wordmark 调整为更接近 logo 气质的 serif 风格。
- 修复点击左上角 logo 后 `Wenbin Notes` wordmark 样式丢失的问题。

#### 边注能力

- 新增 `Sidenote` 组件，用于在文章中插入类似 margin note / sidenote 的批注内容。
- 在文章页加入 sidenote 可见状态监听，支持当前阅读位置高亮。
- 调整 sidenote 响应式行为：
  - 宽屏时显示右侧边注。
  - 较窄屏幕时点击编号以内联方式展开，避免内容被裁切。

#### Git 与源码备份

- 增强 `.gitignore`，忽略 `dist/`、`.astro/`、`node_modules/`、本地环境变量、部署平台缓存、覆盖率目录和本地编辑器缓存。
- 明确 `public/` 需要提交，因为其中包含字体、favicon、logo 和静态资源。

#### 验证

- 多次运行 `npm run build`，最终确认 `0 errors / 0 warnings / 0 hints`。
- 本地浏览器验证首页、文章空状态、About 页面、主题切换、header 样式和 logo 加载。
