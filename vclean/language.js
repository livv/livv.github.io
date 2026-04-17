class LanguageManager {
  constructor() {
    this.currentLang = this.getSavedLanguage() || this.detectBrowserLanguage();
    this.translations = {
      'zh-CN': {
        // 导航栏
        'nav.features': '功能特色',
        'nav.screenshot': '截图展示',
        'nav.download': '下载',
        'nav.privacy': '隐私政策',

        // 主页面文本
        'hero.title': 'vClean',
        'hero.subtitle': '专业的 Xcode 编译目录清理工具，释放宝贵的磁盘空间',
        'hero.download-btn': '立即下载',

        // 功能特色
        'features.title': '功能特色',
        'feature1.title': '智能扫描',
        'feature1.description': '快速扫描您的 Xcode 编译目录，智能分析文件夹大小和最后访问时间，帮助您识别可以安全清理的文件。',
        'feature2.title': '安全清理',
        'feature2.description': '安全删除不需要的编译文件和缓存，支持批量操作，让您的开发环境保持整洁高效。',
        'feature3.title': '可视化分析',
        'feature3.description': '以图表形式展示磁盘空间使用情况，直观显示各个编译目录的大小分布，帮助您做出明智的清理决策。',
        'feature4.title': '精准筛选',
        'feature4.description': '支持按文件大小、访问时间、项目名称等多种条件筛选，精确找到需要清理的目标。',
        'feature5.title': '完全隐私',
        'feature5.description': '所有操作都在本地完成，不会收集任何个人信息，完全保护您的隐私和数据安全。',
        'feature6.title': '高效性能',
        'feature6.description': '优化的扫描算法，快速处理大量文件，界面简洁直观，操作简单便捷。',

        // 截图展示
        'screenshot.title': '截图展示',
        'screenshot.description': '简洁直观的用户界面，轻松管理 Xcode 编译目录',

        // 隐私保护
        'privacy.title': '🛡️ 完全隐私保护',
        'privacy.description': '我们承诺不收集任何个人信息，所有数据都在您的设备上本地处理',
        'privacy.btn': '查看详细隐私政策',

        // 下载区域
        'download.title': '🚀 立即开始使用',
        'download.version': '最新版本：v1.0.0 | 兼容 macOS 15.6 及以上',
        'download.description': '免费下载，无需注册，开箱即用',
        'download.btn': 'Mac App Store 下载',
        'download.note': '下载前请确保您的设备运行 macOS 15.6 或更高版本',

        // 页脚
        'footer.copyright': '© 2026 vClean. All rights reserved. | 保留所有权利',
        'footer.updated': '最后更新：2026年4月14日',

        // 语言切换
        'lang.switch': 'English',
        'lang.current': '中文',

        // 隐私政策页面
        'privacy.header.title': 'vClean 隐私政策',
        'privacy.header.subtitle': '我们承诺保护您的隐私，所有操作均在本地完成',
        'privacy.last_updated': '最后更新日期：2026年4月14日',
        'privacy.effective_date': '生效日期：2026年4月14日',
        'privacy.intro': '感谢您选择 vClean 应用（以下简称"本应用"）。我们高度重视您的隐私保护，本应用承诺不会收集、存储、传输或分享任何个人数据。',
        'privacy.section1.title': '1. 信息收集政策',
        'privacy.section1.content': '本应用完全尊重并保护用户隐私，<strong>不会收集任何形式的个人信息</strong>，包括但不限于：',
        'privacy.section1.list1': '个人身份信息（姓名、地址、电话号码、电子邮件等）',
        'privacy.section1.list2': '设备信息（设备型号、操作系统版本、唯一设备标识符等）',
        'privacy.section1.list3': '使用数据（使用习惯、偏好设置、崩溃报告等）',
        'privacy.section1.list4': '位置信息',
        'privacy.section1.list5': '网络信息（IP地址、网络运营商等）',
        'privacy.section2.title': '2. 应用功能说明',
        'privacy.section2.content': 'vClean 是一款专为 macOS 开发者设计的 Xcode 编译目录清理工具，主要功能包括：',
        'privacy.section2.list1': '扫描和分析 Xcode 编译目录',
        'privacy.section2.list2': '显示编译文件夹的大小和最后访问时间',
        'privacy.section2.list3': '提供安全的删除功能，清理不需要的编译文件',
        'privacy.section2.list4': '支持拖放操作，方便用户添加自定义路径',
        'privacy.section2.footer': '所有这些功能都在您的本地设备上完成，不需要访问互联网，也不会与任何第三方服务通信。',
        'privacy.section3.title': '3. 数据存储方式',
        'privacy.section3.content': '本应用所有的扫描结果、设置和缓存数据都<strong>仅存储在您的本地设备上</strong>，包括：',
        'privacy.section3.list1': '扫描到的文件夹信息（路径、大小、访问时间）',
        'privacy.section3.list2': '用户偏好设置',
        'privacy.section3.list3': '应用缓存数据',
        'privacy.section3.footer': '这些数据不会上传到任何服务器，也不会与第三方共享。',
        'privacy.section4.title': '4. 第三方服务',
        'privacy.section4.content': '本应用<strong>不使用任何第三方分析工具、广告网络或社交媒体插件</strong>。我们没有集成任何需要收集用户数据的 SDK 或服务。',
        'privacy.section5.title': '5. 儿童隐私保护',
        'privacy.section5.content': '本应用不面向儿童用户，也不会收集任何儿童个人信息。如果您是13岁以下儿童，请勿使用本应用。',
        'privacy.section6.title': '6. 数据安全',
        'privacy.section6.content': '由于本应用不收集或存储任何个人数据，因此不存在数据泄露风险。所有操作都在您的本地设备上完成，确保了数据的绝对安全。',
        'privacy.section7.title': '7. 您的权利',
        'privacy.section7.content': '由于本应用不收集任何个人数据，您无需行使以下权利：',
        'privacy.section7.list1': '访问权：查看我们持有的您的个人信息',
        'privacy.section7.list2': '更正权：更正不准确的个人信息',
        'privacy.section7.list3': '删除权：要求删除您的个人信息',
        'privacy.section7.list4': '数据可携带权：获取您的数据副本',
        'privacy.section7.list5': '限制处理权：限制对您数据的处理',
        'privacy.section7.list6': '反对权：反对对您数据的处理',
        'privacy.section8.title': '8. 隐私政策变更',
        'privacy.section8.content': '我们保留随时更新本隐私政策的权利。任何变更都会在应用内显著位置公布，并更新"最后更新日期"。建议您定期查看本政策以了解最新信息。',
        'privacy.section9.title': '9. 联系我们',
        'privacy.section9.content': '如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：',
        'privacy.section9.list1': '应用内反馈功能',
        'privacy.section9.list2': '官方网站联系页面',
        'privacy.section9.footer': '我们将在收到您的反馈后尽快回复。',
        'privacy.footer.copyright': '© 2026 vClean. All rights reserved.',
        'privacy.footer.updated': '最后更新：2026年4月14日'
      },
      'en': {
        // 导航栏
        'nav.features': 'Features',
        'nav.screenshot': 'Screenshots',
        'nav.download': 'Download',
        'nav.privacy': 'Privacy Policy',

        // 主页面文本
        'hero.title': 'vClean',
        'hero.subtitle': 'Professional Xcode build directory cleaner to free up valuable disk space',
        'hero.download-btn': 'Download Now',

        // 功能特色
        'features.title': 'Features',
        'feature1.title': 'Smart Scanning',
        'feature1.description': 'Quickly scan your Xcode build directories, intelligently analyze folder sizes and last access times to help you identify files that can be safely cleaned.',
        'feature2.title': 'Safe Cleanup',
        'feature2.description': 'Safely delete unnecessary build files and caches, support batch operations to keep your development environment clean and efficient.',
        'feature3.title': 'Visual Analysis',
        'feature3.description': 'Display disk space usage in chart form, visually show the size distribution of various build directories to help you make informed cleanup decisions.',
        'feature4.title': 'Precise Filtering',
        'feature4.description': 'Support filtering by file size, access time, project name and other conditions to accurately find cleanup targets.',
        'feature5.title': 'Complete Privacy',
        'feature5.description': 'All operations are completed locally, no personal information is collected, fully protecting your privacy and data security.',
        'feature6.title': 'High Performance',
        'feature6.description': 'Optimized scanning algorithm, fast processing of large amounts of files, simple and intuitive interface, easy operation.',

        // 截图展示
        'screenshot.title': 'Screenshots',
        'screenshot.description': 'Clean and intuitive user interface, easily manage Xcode build directories',

        // 隐私保护
        'privacy.title': '🛡️ Complete Privacy Protection',
        'privacy.description': 'We promise not to collect any personal information, all data is processed locally on your device',
        'privacy.btn': 'View Detailed Privacy Policy',

        // 下载区域
        'download.title': '🚀 Get Started Now',
        'download.version': 'Latest Version: v1.0.0 | Compatible with macOS 15.6+',
        'download.description': 'Free download, no registration required, ready to use out of the box',
        'download.btn': 'Download from Mac App Store',
        'download.note': 'Please make sure your device is running macOS 15.6 or higher before downloading',

        // 页脚
        'footer.copyright': '© 2026 vClean. All rights reserved.',
        'footer.updated': 'Last updated: April 14, 2026',

        // 语言切换
        'lang.switch': '中文',
        'lang.current': 'English',

        // 隐私政策页面
        'privacy.header.title': 'vClean Privacy Policy',
        'privacy.header.subtitle': 'We are committed to protecting your privacy; all operations are performed locally.',
        'privacy.last_updated': 'Last updated: April 14, 2026',
        'privacy.effective_date': 'Effective date: April 14, 2026',
        'privacy.intro': 'Thank you for choosing the vClean app (hereinafter referred to as "this app"). We take your privacy seriously. This app does not collect, store, transmit, or share any personal data.',
        'privacy.section1.title': '1. Information Collection Policy',
        'privacy.section1.content': 'This app fully respects and protects user privacy and <strong>does not collect any personal information</strong>, including but not limited to:',
        'privacy.section1.list1': 'Personal identity information (name, address, phone number, email, etc.)',
        'privacy.section1.list2': 'Device information (device model, OS version, unique device identifiers, etc.)',
        'privacy.section1.list3': 'Usage data (usage habits, preferences, crash reports, etc.)',
        'privacy.section1.list4': 'Location information',
        'privacy.section1.list5': 'Network information (IP address, network operator, etc.)',
        'privacy.section2.title': '2. App Functionality',
        'privacy.section2.content': 'vClean is an Xcode build directory cleanup tool for macOS developers. Main features include:',
        'privacy.section2.list1': 'Scan and analyze Xcode build directories',
        'privacy.section2.list2': 'Show build folder sizes and last access times',
        'privacy.section2.list3': 'Provide safe deletion to clean unnecessary build files',
        'privacy.section2.list4': 'Support drag and drop for custom paths',
        'privacy.section2.footer': 'All of these features run on your local device, require no internet access, and do not communicate with any third-party services.',
        'privacy.section3.title': '3. Data Storage',
        'privacy.section3.content': 'All scan results, settings, and cache data are <strong>stored only on your local device</strong>, including:',
        'privacy.section3.list1': 'Scanned folder information (path, size, access time)',
        'privacy.section3.list2': 'User preferences',
        'privacy.section3.list3': 'App cache data',
        'privacy.section3.footer': 'This data is not uploaded to any server or shared with third parties.',
        'privacy.section4.title': '4. Third-party Services',
        'privacy.section4.content': 'This app <strong>does not use third-party analytics, ad networks, or social plugins</strong>. We have not integrated any SDK or service that requires collecting user data.',
        'privacy.section5.title': '5. Children\'s Privacy',
        'privacy.section5.content': 'This app is not directed at children and does not collect children\'s personal information. If you are under 13, please do not use this app.',
        'privacy.section6.title': '6. Data Security',
        'privacy.section6.content': 'Because this app does not collect or store personal data, there is no risk of personal data leakage. All operations are completed on your local device.',
        'privacy.section7.title': '7. Your Rights',
        'privacy.section7.content': 'Because this app does not collect personal data, you do not need to exercise the following rights:',
        'privacy.section7.list1': 'Right of access: view personal information we hold about you',
        'privacy.section7.list2': 'Right of rectification: correct inaccurate personal information',
        'privacy.section7.list3': 'Right to erasure: request deletion of your personal information',
        'privacy.section7.list4': 'Right to data portability: obtain a copy of your data',
        'privacy.section7.list5': 'Right to restrict processing: restrict processing of your data',
        'privacy.section7.list6': 'Right to object: object to processing of your data',
        'privacy.section8.title': '8. Changes to This Policy',
        'privacy.section8.content': 'We may update this privacy policy from time to time. Changes will be announced prominently in the app and the "last updated" date will be revised. Please review this policy periodically.',
        'privacy.section9.title': '9. Contact Us',
        'privacy.section9.content': 'If you have questions or suggestions about this privacy policy, please contact us through:',
        'privacy.section9.list1': 'In-app feedback',
        'privacy.section9.list2': 'The official website contact page',
        'privacy.section9.footer': 'We will respond to your feedback as soon as possible.',
        'privacy.footer.copyright': '© 2026 vClean. All rights reserved.',
        'privacy.footer.updated': 'Last updated: April 14, 2026'
      }
    };
  }

  getSavedLanguage() {
    return localStorage.getItem('preferred-language');
  }

  detectBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith('zh') ? 'zh-CN' : 'en';
  }

  saveLanguage(lang) {
    localStorage.setItem('preferred-language', lang);
  }

  getCurrentLanguage() {
    return this.currentLang;
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'zh-CN' ? 'en' : 'zh-CN';
    this.saveLanguage(this.currentLang);
    return this.currentLang;
  }

  translate(key) {
    const dict = this.translations[this.currentLang];
    if (dict && Object.prototype.hasOwnProperty.call(dict, key)) {
      return dict[key];
    }
    if (this.currentLang !== 'en') {
      const fallback = this.translations['en'];
      if (fallback && Object.prototype.hasOwnProperty.call(fallback, key)) {
        return fallback[key];
      }
    }
    return key;
  }

  applyTranslations() {
    document.documentElement.lang = this.currentLang === 'zh-CN' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-lang]').forEach(element => {
      const key = element.getAttribute('data-lang');
      const translation = this.translate(key);

      if (translation && translation !== key) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else if (translation.indexOf('<') !== -1 && translation.indexOf('>') !== -1) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    document.querySelectorAll('[data-lang-attr]').forEach(element => {
      const attrData = element.getAttribute('data-lang-attr');
      if (!attrData) return;

      const attrPairs = attrData.split(',');
      attrPairs.forEach(pair => {
        const [attr, key] = pair.split(':');
        const translation = this.translate(key.trim());
        if (translation && translation !== key) {
          element.setAttribute(attr.trim(), translation);
        }
      });
    });
  }
}

const langManager = new LanguageManager();

document.addEventListener('DOMContentLoaded', function() {
  langManager.applyTranslations();

  const langSwitchBtn = document.getElementById('lang-switch-btn');
  if (langSwitchBtn) {
    langSwitchBtn.textContent = langManager.translate('lang.switch');

    langSwitchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      langManager.toggleLanguage();
      langManager.applyTranslations();
      this.textContent = langManager.translate('lang.switch');
    });
  }
});
