(function () {
  'use strict';

  var STORAGE_KEY = 'vlv_lang';

  var STRINGS = {
    zh: {
      index: {
        title: 'vlv - 未来应用实验室',
        nav: { apps: '我的应用', contact: '联系我' },
        hero: {
          title: '我的应用作品集',
          subtitle: '精选实用的 macOS 应用，提升您的开发效率'
        },
        appsSection: {
          title: '我的应用',
          vpaste: {
            name: 'vPaste',
            tagline: 'macOS 剪贴板管理工具',
            description: '高效的 macOS 剪贴板管理工具，自动捕获剪贴板历史，快速访问常用内容，让复制粘贴更高效。',
            features: ['自动历史记录', '快速访问（⌘⇧V）', '分组管理', '智能搜索', '本地存储']
          },
          vclean: {
            name: 'vClean',
            tagline: 'Xcode 编译目录清理工具',
            description: '专业的 Xcode 编译目录清理工具，智能扫描和分析文件夹大小，帮助您安全释放宝贵的磁盘空间。',
            features: ['智能扫描', '安全清理', '可视化分析', '精准筛选', '完全隐私']
          }
        },
        futureApps: {
          title: '更多应用即将推出',
          subtitle: '我正在开发更多实用的 macOS 应用，敬请期待...'
        },
        footer: {
          apps: '我的应用',
          contact: '联系我',
          copyright: '&copy; 2026 vlv. All rights reserved.'
        },
        lang: {
          aria: '语言',
          zh: '中文',
          en: 'English',
          current: '中文'
        }
      }
    },
    en: {
      index: {
        title: 'vlv - Future App Lab',
        nav: { apps: 'My Apps', contact: 'Contact Me' },
        hero: {
          title: 'My App Portfolio',
          subtitle: 'Curated collection of useful macOS applications to boost your development productivity'
        },
        appsSection: {
          title: 'My Applications',
          vpaste: {
            name: 'vPaste',
            tagline: 'Clipboard Manager for macOS',
            description: 'A powerful macOS clipboard manager that automatically captures history, provides quick access to frequently used content, and makes copy and paste operations more efficient.',
            features: ['Automatic History', 'Quick Access (⌘⇧V)', 'Group Management', 'Smart Search', 'Local Storage']
          },
          vclean: {
            name: 'vClean',
            tagline: 'Xcode Build Directory Cleaner',
            description: 'A professional Xcode build directory cleanup tool with intelligent scanning and analysis to help you safely free up valuable disk space.',
            features: ['Smart Scanning', 'Safe Cleanup', 'Visual Analysis', 'Precise Filtering', 'Complete Privacy']
          }
        },
        futureApps: {
          title: 'More Apps Coming Soon',
          subtitle: 'I\'m developing more useful macOS applications. Stay tuned...'
        },
        footer: {
          apps: 'My Apps',
          contact: 'Contact Me',
          copyright: '&copy; 2026 vlv. All rights reserved.'
        },
        lang: {
          aria: 'Language',
          zh: '中文',
          en: 'English',
          current: 'English'
        }
      }
    }
  };

  function getLocale() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === 'zh' || s === 'en') return s;
    } catch (e) {}
    var nav = (typeof navigator !== 'undefined' && navigator.language ? navigator.language : '').toLowerCase();
    return nav.indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function setLocale(lang) {
    if (lang !== 'zh' && lang !== 'en') return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function pick(strings, path) {
    var parts = path.split('.');
    var cur = strings;
    for (var i = 0; i < parts.length; i++) {
      if (!cur || typeof cur !== 'object') return '';
      var part = parts[i];
      // 处理数组索引，如 features[0]
      var arrayMatch = part.match(/^([^\[]+)\[(\d+)\]$/);
      if (arrayMatch) {
        var arrName = arrayMatch[1];
        var arrIndex = parseInt(arrayMatch[2], 10);
        if (cur[arrName] && Array.isArray(cur[arrName]) && cur[arrName][arrIndex] !== undefined) {
          cur = cur[arrName][arrIndex];
        } else {
          return '';
        }
      } else {
        cur = cur[part];
      }
    }
    return typeof cur === 'string' ? cur : '';
  }

  function t(locale, path) {
    var s = pick(STRINGS[locale], path);
    if (s) return s;
    return pick(STRINGS.zh, path);
  }

  function applyI18n() {
    var locale = getLocale();
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';

    // 更新页面标题
    document.title = t(locale, 'index.title');

    // 更新导航链接
    var navLinks = {
      'nav.apps': t(locale, 'index.nav.apps'),
      'nav.contact': t(locale, 'index.nav.contact')
    };
    Object.keys(navLinks).forEach(function(key) {
      var elements = document.querySelectorAll('[data-i18n-nav="' + key + '"]');
      elements.forEach(function(el) {
        el.textContent = navLinks[key];
      });
    });

    // 更新Hero区域
    var heroTexts = {
      'title': t(locale, 'index.hero.title'),
      'subtitle': t(locale, 'index.hero.subtitle')
    };
    Object.keys(heroTexts).forEach(function(key) {
      var elements = document.querySelectorAll('[data-i18n-hero="' + key + '"]');
      elements.forEach(function(el) {
        el.textContent = heroTexts[key];
      });
    });

    // 更新应用卡片区域
    var appSectionTitles = {
      'title': t(locale, 'index.appsSection.title'),
      'vpaste.name': t(locale, 'index.appsSection.vpaste.name'),
      'vpaste.tagline': t(locale, 'index.appsSection.vpaste.tagline'),
      'vpaste.description': t(locale, 'index.appsSection.vpaste.description'),
      'vclean.name': t(locale, 'index.appsSection.vclean.name'),
      'vclean.tagline': t(locale, 'index.appsSection.vclean.tagline'),
      'vclean.description': t(locale, 'index.appsSection.vclean.description')
    };
    Object.keys(appSectionTitles).forEach(function(key) {
      var elements = document.querySelectorAll('[data-i18n-app="' + key + '"]');
      elements.forEach(function(el) {
        el.textContent = appSectionTitles[key];
      });
    });

    // 更新应用特性
    var appFeatures = {
      'vpaste.feature1': t(locale, 'index.appsSection.vpaste.features[0]'),
      'vpaste.feature2': t(locale, 'index.appsSection.vpaste.features[1]'),
      'vpaste.feature3': t(locale, 'index.appsSection.vpaste.features[2]'),
      'vpaste.feature4': t(locale, 'index.appsSection.vpaste.features[3]'),
      'vpaste.feature5': t(locale, 'index.appsSection.vpaste.features[4]'),
      'vclean.feature1': t(locale, 'index.appsSection.vclean.features[0]'),
      'vclean.feature2': t(locale, 'index.appsSection.vclean.features[1]'),
      'vclean.feature3': t(locale, 'index.appsSection.vclean.features[2]'),
      'vclean.feature4': t(locale, 'index.appsSection.vclean.features[3]'),
      'vclean.feature5': t(locale, 'index.appsSection.vclean.features[4]')
    };
    Object.keys(appFeatures).forEach(function(key) {
      var elements = document.querySelectorAll('[data-i18n-feature="' + key + '"]');
      elements.forEach(function(el) {
        el.textContent = appFeatures[key];
      });
    });

    // 更新未来应用区域
    var futureTexts = {
      'title': t(locale, 'index.futureApps.title'),
      'subtitle': t(locale, 'index.futureApps.subtitle')
    };
    Object.keys(futureTexts).forEach(function(key) {
      var elements = document.querySelectorAll('[data-i18n-future="' + key + '"]');
      elements.forEach(function(el) {
        el.textContent = futureTexts[key];
      });
    });

    // 更新页脚
    var footerTexts = {
      'apps': t(locale, 'index.footer.apps'),
      'contact': t(locale, 'index.footer.contact'),
      'copyright': t(locale, 'index.footer.copyright')
    };
    Object.keys(footerTexts).forEach(function(key) {
      var elements = document.querySelectorAll('[data-i18n-footer="' + key + '"]');
      elements.forEach(function(el) {
        el.innerHTML = footerTexts[key];
      });
    });

    // 更新语言切换器
    var currentLang = getLocale();
    var langTexts = {
      'current': currentLang === 'zh' ? '中文' : 'English',
      'zh': '中文',
      'en': 'English'
    };

    Object.keys(langTexts).forEach(function(key) {
      var elements = document.querySelectorAll('[data-i18n="lang.' + key + '"]');
      elements.forEach(function(el) {
        el.textContent = langTexts[key];
      });
    });

    // 更新当前选中状态的选项
    document.querySelectorAll('.lang-option').forEach(function(option) {
      var lang = option.getAttribute('data-lang');
      if (lang === currentLang) {
        option.setAttribute('aria-selected', 'true');
        option.classList.add('selected');
      } else {
        option.setAttribute('aria-selected', 'false');
        option.classList.remove('selected');
      }
    });
  }

  function init() {
    applyI18n();

    // 处理语言切换器
    var langToggle = null;
    var langDropdown = null;
    var langOptions = [];

    function setupLanguageSwitcher() {
      langToggle = document.querySelector('.lang-toggle');
      langDropdown = document.querySelector('.lang-dropdown');
      langOptions = document.querySelectorAll('.lang-option');

      if (!langToggle || !langDropdown || langOptions.length === 0) return;

      // 切换下拉菜单显示状态
      langToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleDropdown();
      });

      // 为每个选项添加点击事件
      langOptions.forEach(function(option) {
        option.addEventListener('click', function() {
          var newLang = this.getAttribute('data-lang');
          switchLanguage(newLang);
        });

        // 键盘支持
        option.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
          }
        });
      });

      // 关闭下拉菜单的函数
      function closeDropdown() {
        langToggle.setAttribute('aria-expanded', 'false');
        langDropdown.classList.remove('show');
      }

      // 切换下拉菜单
      function toggleDropdown() {
        var isExpanded = langToggle.getAttribute('aria-expanded') === 'true';
        langToggle.setAttribute('aria-expanded', !isExpanded);
        langDropdown.classList.toggle('show');
      }

      // 点击外部关闭下拉菜单
      document.addEventListener('click', function(e) {
        if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
          closeDropdown();
        }
      });

      // ESC 键关闭
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeDropdown();
        }
      });

      // 更新当前选中状态
      updateSelectedOption();
    }

    // 切换语言
    function switchLanguage(lang) {
      if (lang !== 'zh' && lang !== 'en') return;

      setLocale(lang);
      applyI18n();
      closeDropdown();

      // 重新设置语言切换器
      setTimeout(setupLanguageSwitcher, 0);
    }

    // 更新选中的选项
    function updateSelectedOption() {
      var currentLang = getLocale();
      langOptions.forEach(function(option) {
        var lang = option.getAttribute('data-lang');
        if (lang === currentLang) {
          option.setAttribute('aria-selected', 'true');
          option.classList.add('selected');
        } else {
          option.setAttribute('aria-selected', 'false');
          option.classList.remove('selected');
        }
      });
    }

    // 初始化语言切换器
    setupLanguageSwitcher();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
