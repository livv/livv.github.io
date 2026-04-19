# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 代码架构概览

本项目是一个个人应用作品集网站，采用现代化前端技术栈：

### 主要结构
- **根目录** (`/`) - 主站首页，展示应用集合和导航
- **vclean/** - Xcode编译目录清理工具应用页面
- **vpaste/** - macOS剪贴板管理工具应用页面

### 技术特点
- **纯HTML/CSS/JavaScript** - 无框架依赖，轻量级实现
- **响应式设计** - 适配桌面端和移动端
- **国际化(i18n)** - 完整的中英文切换功能
- **现代化UI** - 赛博朋克风格设计语言

### 核心文件
- `index.html` - 主站入口，包含导航栏、英雄区域、应用卡片和未来应用区域
- `i18n.js` - 国际化脚本，管理中英文字符串资源
- `vclean/index.html` & `vpaste/index.html` - 各应用的独立页面
- `vclean/css/style.css` & `vpaste/css/style.css` - 应用页面的样式表

## 常用开发命令

### 本地预览
```bash
# 使用 Python 3 启动本地服务器（推荐）
/opt/homebrew/bin/python3 -m http.server 8000

# 或使用 Node.js http-server
npm install -g http-server
http-server . -p 8000
```

### 测试国际化功能
```bash
# 启动服务器后访问
open http://localhost:8000

# 测试语言切换功能
# 1. 确保浏览器支持 localStorage
# 2. 点击导航栏的语言切换器
# 3. 验证所有文本内容正确切换
```

### 代码检查
```bash
# HTML 语法检查
npx html-validate .

# CSS 语法检查
npx stylelint "**/*.css"

# JavaScript 语法检查
npx eslint .
```

## 开发规范

### 语言要求
- 所有对话和文档都使用中文
- 代码注释使用中文

### 文件组织
- 保持现有目录结构不变
- 新增功能应在相应应用目录下创建子目录
- 避免在根目录添加不必要的文件

### 国际化标准
- 所有用户可见文本必须通过 i18n.js 管理
- 使用 `data-i18n-*` 属性标记需要翻译的元素
- 字符串资源遵循现有的嵌套结构

### CSS 命名规范
- 使用 BEM 命名法（Block__Element--Modifier）
- 变量名使用 kebab-case
- 与现有设计风格保持一致（Apple 生态风格或赛博朋克风格）

## 关键组件说明

### 语言切换器
- 位置：导航栏右侧
- 功能：在中英文之间切换
- 存储：使用 localStorage 持久化用户选择
- 无障碍：完整的 ARIA 标签和键盘支持

### 应用卡片
- 展示格式：图标 + 标题 + 描述 + 特性列表 + 链接
- 交互：悬停效果、平滑过渡
- 响应式：在小屏幕上自动调整布局

### 导航系统
- 平滑滚动到对应区域
- 固定定位导航栏
- 当前页面高亮显示

## 部署说明

### GitHub Pages 部署
项目已配置为可直接通过 GitHub Pages 部署：
- 主站：`https://[username].github.io/[repo-name]/`
- 应用页面：`https://[username].github.io/[repo-name]/[app-name]/`

### 构建注意事项
- 无需构建步骤，直接部署 HTML 文件即可
- 确保相对路径正确（特别是应用页面的图标和资源）
- 测试跨页面导航和返回功能

## 维护指南

### 添加新应用
1. 在根目录下创建新的应用卡片（更新 index.html）
2. 复制 vclean/vpaste 目录结构创建应用页面
3. 添加相应的国际化字符串到 i18n.js
4. 确保所有图片资源路径正确

### 修改现有应用
1. 先在本地测试所有变更
2. 保持与其他应用的设计一致性
3. 更新相关文案时同步修改中英文版本
4. 测试响应式布局和语言切换功能

### Bug 修复流程
1. 复现问题并确认影响范围
2. 检查相关 HTML、CSS 和 JavaScript 文件
3. 验证国际化字符串是否完整
4. 测试在各种设备和浏览器下的表现
5. 提交前进行全面的功能测试