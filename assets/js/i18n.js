// i18n.js - Internationalization Module

const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_apps: "Apps",
    nav_about: "About",
    
    // Hero Section
    hero_title: "My Apps Collection",
    hero_subtitle: "A showcase of elegant and powerful Apple applications designed to enhance your productivity and workflow.",
    hero_cta_apps: "View Apps",
    hero_cta_contact: "Contact",
    
    // Apps Section
    apps_title: "Featured Apps",
    apps_subtitle: "Discover tools that make a difference",
    
    // App Names & Descriptions
    vclean_name: "vClean",
    vclean_category: "Developer Tools",
    vclean_description: "A powerful Xcode build folder cleaner for macOS. Quickly reclaim disk space by removing unnecessary build artifacts, derived data, and cache files. Supports custom cleaning rules and safe deletion with preview.",

    aiusage_name: "AI Usage",
    aiusage_category: "Developer Tools",
    aiusage_description: "A Cursor usage tracker for macOS and iOS. Monitor spending, billing cycles, model rankings, and team usage with local cookie storage, widgets, and automatic refresh.",
    
    vpaste_name: "vPaste",
    vpaste_category: "Productivity",
    vpaste_description: "A modern clipboard manager for macOS. Save, search, and organize your clipboard history. Supports text, images, files, and code snippets. Quick access via menu bar and keyboard shortcuts.",
    
    vjson_name: "vJSON",
    vjson_category: "Developer Tools",
    vjson_description: "A Safari extension for macOS that turns raw JSON into a foldable, syntax-highlighted tree—with toolbar controls, nested JSON expansion, and quick copy.",
    
    milklog_name: "MilkLog",
    milklog_category: "Parenting",
    milklog_description: "Track baby feeding on iPhone — formula, breast milk, and direct nursing — with quick entry, charts, home screen widgets, feeding reminders, optional iCloud sync, and Siri shortcuts.",

    supertext_name: "SuperText",
    supertext_category: "Utilities",
    supertext_description: "A playful text-effects app for iPhone, iPad, Mac, and Apple Vision Pro. Create dot-matrix text, grid paper layouts, simplified/traditional conversions, and inverted text for easy sharing.",
    
    // App Pages
    app_learn_more: "Learn More",
    app_download: "Download",
    app_features: "Key Features",
    app_download_section: "Download",
    app_download_text: "Get started with",
    app_download_qr_caption: "Scan with your iPhone or iPad to download on the App Store.",
    vpaste_qr_alt: "QR code to download vPaste on the App Store",
    vjson_qr_alt: "QR code to download vJSON on the App Store",
    vclean_qr_alt: "QR code to download vClean on the App Store",
    aiusage_qr_alt: "QR code to download AI Usage on the App Store",
    aiusage_qr_caption: "Scan the QR code to open the App Store page on your device.",
    aiusage_coming_soon_title: "App Store Coming Soon",
    aiusage_coming_soon_desc: "The App Store listing is not live yet. We will add the store download here once it launches.",
    aiusage_install_methods_title: "Other Installation Methods",
    aiusage_install_homebrew_title: "Homebrew Tap",
    aiusage_install_homebrew_desc: "Install via the community tap maintained for AI Usage.",
    aiusage_install_homebrew_cmd: "brew tap 13awan/aiusage && brew install --cask ai-usage",
    aiusage_install_command_copy: "Copy Command",
    aiusage_install_command_copied: "Copied",
    aiusage_cta_contact: "Contact Developer",
    aiusage_action_section_title: "Get Started",
    milklog_qr_alt: "QR code to download MilkLog on the App Store",
    milklog_screenshots_region: "MilkLog screenshots",
    milklog_lightbox_title: "Screenshot preview",
    milklog_lightbox_close: "Close",
    milklog_lightbox_zoom: "View full size",
    supertext_qr_alt: "QR code to download SuperText on the App Store",
    supertext_screenshots_region: "SuperText screenshots",
    supertext_lightbox_title: "Screenshot preview",
    supertext_lightbox_close: "Close",
    supertext_lightbox_zoom: "View full size",

    // vClean Features
    vclean_feature_1_title: "Smart Detection",
    vclean_feature_1_desc: "Automatically identifies Xcode build directories, derived data, and cache folders across all projects.",
    
    vclean_feature_2_title: "Safe Cleaning",
    vclean_feature_2_desc: "Preview files before deletion. Never accidentally remove important source code or project files.",
    
    vclean_feature_3_title: "Disk Space",
    vclean_feature_3_desc: "See exactly how much space each component is using. Make informed decisions about what to clean.",
    
    vclean_feature_4_title: "Custom Rules",
    vclean_feature_4_desc: "Create custom cleaning rules based on file age, size, or type. Automate your cleanup workflow.",

    aiusage_feature_1_title: "Live Usage Dashboard",
    aiusage_feature_1_desc: "Track total, auto, and API usage with a clear billing cycle overview and quick access to current spending.",

    aiusage_feature_2_title: "Billing Analysis",
    aiusage_feature_2_desc: "Review daily trends, model ranking, and recent paid requests to understand where usage is going.",

    aiusage_feature_3_title: "Menu Bar & Widgets",
    aiusage_feature_3_desc: "Check usage at a glance from the menu bar, desktop window, or widget without opening the full app.",

    aiusage_feature_4_title: "Local Privacy",
    aiusage_feature_4_desc: "Store the Cursor cookie on device, mirror it for the widget, and keep all usage data local to your Apple devices.",
    
    // vPaste Features
    vpaste_feature_1_title: "History Management",
    vpaste_feature_1_desc: "Keep a searchable history of all your clipboard items. Find what you need with powerful search.",
    
    vpaste_feature_2_title: "Quick Access",
    vpaste_feature_2_desc: "Access your clipboard history from the menu bar. Use keyboard shortcuts for instant access.",
    
    vpaste_feature_3_title: "Rich Support",
    vpaste_feature_3_desc: "Store text, images, files, and code snippets. Organize with tags and folders.",
    
    vpaste_feature_4_title: "Sync & Backup",
    vpaste_feature_4_desc: "Sync your clipboard history across devices. Automatic backup ensures you never lose important content.",
    
    vjson_feature_1_title: "Syntax & structure",
    vjson_feature_1_desc: "VS Code-style theme, indentation guides, and key/value counts so large payloads stay readable.",
    
    vjson_feature_2_title: "Fold & expand",
    vjson_feature_2_desc: "Expand or collapse all, fold to a chosen depth, and toggle word wrap from the toolbar.",
    
    vjson_feature_3_title: "Nested JSON strings",
    vjson_feature_3_desc: "Detect embedded JSON in string values and expand them inline without leaving the page.",
    
    vjson_feature_4_title: "URLs & copy",
    vjson_feature_4_desc: "Clickable links for detected URLs and one-click copy for the full JSON body.",
    
    milklog_feature_1_title: "Quick logging",
    milklog_feature_1_desc: "Log formula, pumped milk, or direct breastfeeding with amounts, duration, and sides — fast entry when you only have one hand free.",
    
    milklog_feature_2_title: "Charts & trends",
    milklog_feature_2_desc: "See day, week, and month views to understand feeding patterns and daily totals at a glance.",
    
    milklog_feature_3_title: "Widgets & Siri",
    milklog_feature_3_desc: "Glance at the last feed from the Home Screen and log with Siri Shortcuts using natural phrases.",
    
    milklog_feature_4_title: "Reminders & sync",
    milklog_feature_4_desc: "Optional next-feed reminders, CSV export for your records, and optional iCloud sync across your iPhone (data tied to your Apple ID).",

    supertext_feature_1_title: "Dot-matrix text",
    supertext_feature_1_desc: "Turn text into a bold dot-matrix style for posters, images, and shareable visuals.",

    supertext_feature_2_title: "Grid layouts",
    supertext_feature_2_desc: "Create neat grid paper layouts for writing practice, note-taking, or stylized text presentation.",

    supertext_feature_3_title: "Simplified / traditional",
    supertext_feature_3_desc: "Convert between simplified and traditional Chinese with a clean editing workflow.",

    supertext_feature_4_title: "Inverted text & couplets",
    supertext_feature_4_desc: "Generate reversed text and couplet-style outputs for creative posts and festive content.",
    
    // Legal Pages
    privacy_title: "Privacy Policy",
    terms_title: "Terms of Service",
    privacy_subtitle: "How we handle your data",
    terms_subtitle: "The rules for using our apps",
    
    // Footer
    footer_rights: "All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    
    // Common
    updated: "Last updated",
    version: "Version",
  },
  
  zh: {
    // Navigation
    nav_home: "首页",
    nav_apps: "应用",
    nav_about: "关于",
    
    // Hero Section
    hero_title: "我的应用集合",
    hero_subtitle: "精心设计的 Apple 应用，旨在提升您的工作效率和体验。",
    hero_cta_apps: "浏览应用",
    hero_cta_contact: "联系我",
    
    // Apps Section
    apps_title: "精选应用",
    apps_subtitle: "发现让您的工作更出色的工具",
    
    // App Names & Descriptions
    vclean_name: "vClean",
    vclean_category: "开发者工具",
    vclean_description: "强大的 Xcode 构建目录清理工具。快速清理不必要的构建产物、派生数据和缓存文件。支持自定义清理规则和安全的预览删除功能。",

    aiusage_name: "AI Usage",
    aiusage_category: "开发者工具",
    aiusage_description: "面向 macOS 和 iOS 的 Cursor 用量追踪工具。结合本地 Cookie 存储、小组件与自动刷新，监控消费、计费周期、模型排行和团队用量。",
    
    vpaste_name: "vPaste",
    vpaste_category: "效率工具",
    vpaste_description: "现代剪贴板管理器。保存、搜索和管理剪贴板历史。支持文本、图片、文件和代码片段。通过菜单栏和快捷键快速访问。",
    
    vjson_name: "vJSON",
    vjson_category: "开发者工具",
    vjson_description: "面向 macOS 的 Safari 扩展，将原始 JSON 页面渲染为可折叠、语法高亮的树状视图，支持工具栏操作、嵌套 JSON 展开与一键复制。",
    
    milklog_name: "奶记",
    milklog_category: "育儿",
    milklog_description: "在 iPhone 上记录宝宝喝奶与亲喂：配方奶、母乳瓶喂、亲喂时长与左右侧等；支持快捷录入、图表、主屏幕小组件、喂养提醒、可选 iCloud 同步与 Siri 捷径。",

    supertext_name: "超级文本",
    supertext_category: "工具",
    supertext_description: "一款有趣的文字效果工具，支持 iPhone、iPad、Mac 和 Apple Vision Pro。可以生成点阵字、田字格样式、简繁转换和颠倒文字，方便快速分享。",
    
    // App Pages
    app_learn_more: "了解更多",
    app_download: "下载",
    app_features: "主要功能",
    app_download_section: "下载",
    app_download_text: "开始使用",
    app_download_qr_caption: "使用 iPhone 或 iPad 扫描二维码，在 App Store 下载。",
    vpaste_qr_alt: "在 App Store 下载 vPaste 的二维码",
    vjson_qr_alt: "在 App Store 下载 vJSON 的二维码",
    vclean_qr_alt: "在 App Store 下载 vClean 的二维码",
    aiusage_qr_alt: "在 App Store 下载 AI Usage 的二维码",
    aiusage_qr_caption: "扫描二维码即可在设备上打开 App Store 页面。",
    aiusage_coming_soon_title: "App Store 即将上线",
    aiusage_coming_soon_desc: "App Store 上架尚未完成，正式上线后会在这里提供下载入口。",
    aiusage_install_methods_title: "其他安装方式",
    aiusage_install_homebrew_title: "Homebrew Tap",
    aiusage_install_homebrew_desc: "通过为 AI Usage 维护的社区 Tap 安装。",
    aiusage_install_homebrew_cmd: "brew tap 13awan/aiusage && brew install --cask ai-usage",
    aiusage_install_command_copy: "复制命令",
    aiusage_install_command_copied: "已复制",
    aiusage_cta_contact: "联系开发者",
    aiusage_action_section_title: "开始使用",
    milklog_qr_alt: "在 App Store 下载 MilkLog（奶记）的二维码",
    milklog_screenshots_region: "MilkLog 应用截图",
    milklog_lightbox_title: "应用截图预览",
    milklog_lightbox_close: "关闭",
    milklog_lightbox_zoom: "查看大图",
    supertext_qr_alt: "在 App Store 下载超级文本 的二维码",
    supertext_screenshots_region: "超级文本 截图",
    supertext_lightbox_title: "应用截图预览",
    supertext_lightbox_close: "关闭",
    supertext_lightbox_zoom: "查看大图",

    // vClean Features
    vclean_feature_1_title: "智能检测",
    vclean_feature_1_desc: "自动识别所有项目中的 Xcode 构建目录、派生数据和缓存文件夹。",
    
    vclean_feature_2_title: "安全清理",
    vclean_feature_2_desc: "删除前预览文件。绝不会意外删除重要的源代码或项目文件。",
    
    vclean_feature_3_title: "磁盘空间",
    vclean_feature_3_desc: "精确查看每个组件占用的空间大小，做出明智的清理决策。",
    
    vclean_feature_4_title: "自定义规则",
    vclean_feature_4_desc: "根据文件年龄、大小或类型创建自定义清理规则，自动化清理工作流程。",

    aiusage_feature_1_title: "实时用量面板",
    aiusage_feature_1_desc: "清晰查看总量、自动与 API 用量，并快速了解当前消费与计费周期。",

    aiusage_feature_2_title: "计费分析",
    aiusage_feature_2_desc: "按日趋势、模型排行和最近付费请求梳理用量去向。",

    aiusage_feature_3_title: "菜单栏与小组件",
    aiusage_feature_3_desc: "无需打开完整应用，也能从菜单栏、桌面窗口或小组件快速查看用量。",

    aiusage_feature_4_title: "本地隐私",
    aiusage_feature_4_desc: "将 Cursor Cookie 保存在设备本地，并为小组件做本地镜像，所有用量数据都留在你的 Apple 设备上。",
    
    // vPaste Features
    vpaste_feature_1_title: "历史管理",
    vpaste_feature_1_desc: "保留所有剪贴板项目的可搜索历史。强大的搜索功能帮您快速找到需要的内容。",
    
    vpaste_feature_2_title: "快速访问",
    vpaste_feature_2_desc: "从菜单栏访问剪贴板历史。使用键盘快捷键实现即时访问。",
    
    vpaste_feature_3_title: "丰富支持",
    vpaste_feature_3_desc: "存储文本、图片、文件和代码片段。通过标签和文件夹进行整理。",
    
    vpaste_feature_4_title: "同步与备份",
    vpaste_feature_4_desc: "跨设备同步剪贴板历史。自动备份确保您永远不会丢失重要内容。",
    
    vjson_feature_1_title: "语法与结构",
    vjson_feature_1_desc: "类 VS Code 主题、缩进参考线与键值数量提示，让大型 JSON 依然易读。",
    
    vjson_feature_2_title: "折叠与展开",
    vjson_feature_2_desc: "全部展开或折叠、按层级折叠，以及从工具栏切换自动换行。",
    
    vjson_feature_3_title: "嵌套 JSON 字符串",
    vjson_feature_3_desc: "识别字符串中的嵌入 JSON，并在页面内联展开，无需跳转。",
    
    vjson_feature_4_title: "链接与复制",
    vjson_feature_4_desc: "自动识别 URL 并支持点击打开，以及一键复制完整 JSON 正文。",
    
    milklog_feature_1_title: "快捷记录",
    milklog_feature_1_desc: "记录配方奶、吸出的母乳或亲喂，包含奶量、时长与左右侧——单手也能快速完成。",
    
    milklog_feature_2_title: "图表与趋势",
    milklog_feature_2_desc: "按日、周、月查看喂养规律与每日总量，一目了然。",
    
    milklog_feature_3_title: "小组件与 Siri",
    milklog_feature_3_desc: "在主屏幕查看上次喂养摘要，并用自然语句通过 Siri 捷径快速记录。",
    
    milklog_feature_4_title: "提醒与同步",
    milklog_feature_4_desc: "可选的下次喂养提醒、CSV 导出留档，以及可选的 iCloud 跨设备同步（与您的 Apple ID 关联）。",

    supertext_feature_1_title: "点阵文字",
    supertext_feature_1_desc: "将文字转成醒目的点阵风格，适合海报、图片和分享内容。",

    supertext_feature_2_title: "田字格排版",
    supertext_feature_2_desc: "生成整齐的田字格样式，适合练字、记笔记或做风格化排版。",

    supertext_feature_3_title: "简繁转换",
    supertext_feature_3_desc: "在简体和繁体中文之间快速转换，保持清晰顺畅的编辑体验。",

    supertext_feature_4_title: "颠倒文字与对联",
    supertext_feature_4_desc: "生成颠倒文字和对联风格输出，适合创意发布和节庆内容。",
    
    // Legal Pages
    privacy_title: "隐私政策",
    terms_title: "服务条款",
    privacy_subtitle: "我们如何处理您的数据",
    terms_subtitle: "使用我们应用的规定",
    
    // Footer
    footer_rights: "保留所有权利。",
    footer_privacy: "隐私政策",
    footer_terms: "服务条款",
    
    // Common
    updated: "最后更新",
    version: "版本",
  }
};

// Language Management
class I18n {
  constructor() {
    this.currentLang = 'en';
    this.init();
  }

  init() {
    // Check stored language preference
    const stored = localStorage.getItem('preferred-lang');
    if (stored && translations[stored]) {
      this.currentLang = stored;
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (translations[browserLang]) {
        this.currentLang = browserLang;
      }
    }
    this.updatePage();
  }

  setLanguage(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('preferred-lang', lang);
    this.updatePage();
  }

  t(key) {
    return translations[this.currentLang][key] || translations['en'][key] || key;
  }

  updatePage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      el.setAttribute('alt', this.t(key));
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria-label');
      el.setAttribute('aria-label', this.t(key));
    });

    // Toggle bilingual blocks (e.g. legal page body)
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.hidden = el.getAttribute('data-lang') !== this.currentLang;
    });

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang;

    const langBtn = document.querySelector('.lang-toggle');
    if (langBtn) {
      langBtn.textContent = this.currentLang === 'zh' ? 'EN' : '中';
    }

    document.dispatchEvent(new CustomEvent('livv-lang-updated'));
  }

  getCurrentLang() {
    return this.currentLang;
  }
}

// Create global instance
const i18n = new I18n();

// Re-apply after full parse (covers edge cases where the first pass runs too early)
function livvI18nSync() {
  if (typeof i18n !== 'undefined') {
    i18n.updatePage();
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', livvI18nSync);
} else {
  livvI18nSync();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { i18n, translations };
}
