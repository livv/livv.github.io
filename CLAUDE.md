# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用命令

### 开发环境
- `python3 -m http.server 8000` - 启动本地开发服务器 (端口 8000)
- `open http://localhost:8000` - 在默认浏览器中打开网站

### Git 操作
- `git add .` - 将所有更改加入暂存区
- `git commit -m "提交信息"` - 创建新提交
- `git push` - 推送提交到远程仓库

## 代码架构

### 项目结构
```
/
├── index.html              # 主页面，展示应用集合和导航
├── assets/
│   ├── css/styles.css      # 全局样式，支持深色模式
│   ├── js/main.js          # 主题切换、移动端菜单和动画
│   ├── js/i18n.js          # 国际化模块 (英文/中文)
│   └── images/             # 应用图标、截图和 App Store 徽章
├── vclean/                 # Xcode 清理工具应用页面
│   ├── index.html
│   ├── privacy.html
│   └── terms.html
└── vpaste/                 # 剪贴板管理工具应用页面
    ├── index.html
    ├── privacy.html
    └── terms.html
```

### 核心技术
- **纯 HTML5/CSS3/JavaScript** - 无框架依赖，轻量级实现
- **CSS 自定义属性** - 主题系统，支持浅色/深色模式
- **LocalStorage API** - 持久化用户偏好设置（主题、语言）
- **Intersection Observer API** - 平滑滚动动画效果
- **响应式设计** - 移动端优先，适配各种屏幕尺寸

### 核心功能
1. **主题系统** - 自动深浅色模式切换，支持系统偏好检测
2. **国际化** - 完整的英文/中文翻译支持，带语言切换器
3. **移动端导航** - 可折叠的汉堡菜单，适配移动设备
4. **SEO 优化** - Meta 标签、Open Graph、Twitter Cards 支持
5. **性能优化** - 最小化依赖，高效 CSS，懒加载就绪

### 样式规范
- **CSS 变量** - 所有颜色、间距、排版在 `:root` 中定义
- **BEM 命名法** - Block__Element--Modifier 结构
- **移动端优先** - 基础样式针对移动端，大屏幕增强
- **无障碍访问** - ARIA 标签，语义化 HTML，键盘导航支持

### 国际化实现
- 翻译键存储在 `assets/js/i18n.js` 中的 `translations.en` 和 `translations.zh`
- 使用 `data-i18n` 属性进行动态内容替换
- 语言检测：localStorage > 浏览器语言 > 英语回退
- 基于 `livv-lang-updated` 自定义事件的事件驱动更新

### 组件模式
- **应用卡片** - 可重用卡片组件，包含图标、标题、描述、行动按钮
- **特性网格** - 四列网格展示应用能力
- **下载按钮** - 动态 App Store 徽章，支持主题/语言
- **法律页面** - 标准隐私政策和服务条款模板

### 文件组织指南
- 所有 CSS 保存在 `assets/css/styles.css` - 无单独样式文件
- JavaScript 模块在 `assets/js/` - 保持关注点分离
- 图片按类型组织：图标、截图、UI 元素
- 应用特定页面遵循根目录结构保持一致

### 常见开发任务

#### 添加新应用
1. 按照 `/vpaste/` 或 `/vclean/` 模式创建新目录
2. 复制结构：`index.html`、`privacy.html`、`terms.html`
3. 将应用图标/截图添加到 `assets/images/[app-name]/`
4. 更新 `i18n.js` 添加所有必需的翻译键
5. 在主 `index.html` 的应用网格部分添加应用卡片

#### 更新翻译
1. 编辑 `assets/js/i18n.js` - 在 `en` 和 `zh` 对象中添加/修改键
2. 确保所有 UI 元素使用 `data-i18n` 属性
3. 使用头部语言切换器测试两种语言

#### 主题修改
1. 更新 `:root` 和 `[data-theme="dark"]` 中的 CSS 变量
2. 测试无障碍的色彩对比度
3. 验证两种主题下 App Store 徽章的可见性
4. 检查所有交互元素有正确的悬停/聚焦状态

#### 性能考虑
- 图片应已优化 (WebP 优先，PNG 备用)
- 如果添加多个大截图，应懒加载图片
- JavaScript 中尽量减少 DOM 操作
- 尽可能使用 CSS 过渡而非 JavaScript 动画

### 部署说明
- **静态托管就绪** - 纯 HTML/CSS/JS 可在任何静态主机工作
- **CDN 兼容** - 资源可从 CDN 提供服务
- **无需构建步骤** - 直接文件部署
- **推荐 HTTPS** - 用于 App Store 链接和分析

### 测试清单
- [ ] 在浅色和深色主题下测试
- [ ] 验证英文和中文翻译
- [ ] 检查移动端响应式 (320px - 1200px)
- [ ] 测试主题切换持久性
- [ ] 验证 App Store 链接功能
- [ ] 确认 SEO meta 标签正确渲染
- [ ] 检查屏幕阅读器下的无障碍访问
- [ ] 验证浏览器开发者工具中无控制台错误