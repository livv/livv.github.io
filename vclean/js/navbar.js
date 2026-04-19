/**
 * 共享导航栏组件
 * 所有页面统一使用内联样式风格
 */

/**
 * 创建导航栏 HTML
 * @param {boolean} isHomePage - 是否为首页
 */
function createNavbar(isHomePage) {
    const base = isHomePage ? '' : 'index.html';
    
    return `
    <nav class="navbar" style="background-color: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); box-shadow: 0 2px 10px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 1000;">
        <div class="nav-container" style="max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center; height: 60px;">
            <a href="#" class="logo" style="font-size: 24px; font-weight: bold; color: #007AFF; text-decoration: none;">vClean</a>
            <div class="nav-links" style="display: flex; gap: 30px; align-items: center;">
                <a href="${base}#features" data-lang="nav.features" style="text-decoration: none; color: #333; font-weight: 500; font-size: 14px;">功能特色</a>
                <a href="${base}#screenshot" data-lang="nav.screenshot" style="text-decoration: none; color: #333; font-weight: 500; font-size: 14px;">截图展示</a>
                <a href="${base}#download" data-lang="nav.download" style="text-decoration: none; color: #333; font-weight: 500; font-size: 14px;">下载</a>
                <a href="privacypolicy.html" data-lang="nav.privacy" style="text-decoration: none; color: #333; font-weight: 500; font-size: 14px;">隐私政策</a>
                <a href="terms.html" data-lang="nav.terms" style="text-decoration: none; color: #333; font-weight: 500; font-size: 14px;">服务条款</a>
                <a href="/" onclick="window.location.href='/'; return false;" style="color: #007AFF; text-decoration: none; font-size: 14px;">返回主站</a>
                <button id="lang-switch-nav" class="lang-switch" style="background: none; border: 1px solid #007AFF; color: #007AFF; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: all 0.3s;">English</button>
            </div>
        </div>
    </nav>
    `;
}

/**
 * 初始化导航栏
 */
function initNavbar() {
    // 判断是否为首页
    const path = window.location.pathname;
    const isHomePage = !path.includes('terms') && !path.includes('privacypolicy');
    
    // 插入导航栏
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.outerHTML = createNavbar(isHomePage);
    }
    
    // 添加 hover 效果
    const style = document.createElement('style');
    style.textContent = `
        .nav-links a:hover { color: #007AFF !important; }
        #lang-switch-nav:hover { background-color: #007AFF !important; color: white !important; }
    `;
    document.head.appendChild(style);
    
    // 同步语言切换按钮事件
    const navLangBtn = document.getElementById('lang-switch-nav');
    if (navLangBtn) {
        navLangBtn.addEventListener('click', function() {
            // 触发语言切换（如果存在全局语言切换函数）
            if (typeof toggleLanguage === 'function') {
                toggleLanguage();
            }
            // 备用：触发页面上其他语言按钮
            const otherBtn = document.querySelector('.lang-switch-btn:not(#lang-switch-nav), .lang-switch:not(#lang-switch-nav)');
            if (otherBtn) {
                otherBtn.click();
            }
        });
    }
}

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', initNavbar);
