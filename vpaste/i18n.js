(function () {
  'use strict';

  var STORAGE_KEY = 'vpaste_lang';
  var APP_STORE = {
    zh: 'https://apps.apple.com/cn/app/vpaste/id6444913968?mt=12',
    en: 'https://apps.apple.com/app/vpaste/id6444913968'
  };

  var STRINGS = {
    zh: {
      index: {
        title: 'vPaste - macOS 剪贴板管理工具',
        metaDescription:
          'vPaste - 高效的 macOS 剪贴板管理工具，自动捕获历史记录，快速粘贴，提升工作效率',
        metaKeywords: 'vPaste, macOS, 剪贴板, 剪贴板管理, clipboard manager, Mac app',
        nav: { features: '功能', screenshot: '截图', download: '下载', privacy: '隐私协议', terms: '服务条款' },
        hero: {
          tagline: '高效的 macOS 剪贴板管理工具',
          description: '自动捕获剪贴板历史，快速访问常用内容，让复制粘贴更高效',
          btnStore: 'App Store 下载',
          btnMore: '了解更多',
          iconAlt: 'vPaste 应用图标'
        },
        featuresTitle: '核心功能',
        f1: { title: '自动历史记录', desc: '自动捕获剪贴板内容，再也不用担心覆盖重要信息' },
        f2: { title: '快速访问', desc: '通过快捷键 ⌘⇧V 快速唤起，一键粘贴历史内容' },
        f3: { title: '分组管理', desc: '将常用内容分组保存，项目资料整理更高效' },
        f4: { title: '智能搜索', desc: '专业版支持全文搜索，快速找到任意历史内容' },
        f5: { title: '暂停监控', desc: '复制敏感内容时一键暂停，保护您的隐私安全' },
        f6: { title: '本地存储', desc: '所有数据仅保存在本地，无需担心云端泄露' },
        screenshotTitle: '应用截图',
        screenshotAlt: 'vPaste 应用截图',
        downloadTitle: '立即下载',
        downloadDesc: '支持 macOS 15.0 及以上版本',
        downloadBtn: 'App Store 下载',
        footer: { privacy: '隐私协议', terms: '服务条款', contact: '联系我们', copy: '© 2026 vPaste。保留所有权利。' }
      },
      privacy: {
        title: '隐私协议 - vPaste',
        metaDescription: 'vPaste 隐私协议 - 了解我们如何保护您的数据隐私',
        nav: { features: '功能', screenshot: '截图', download: '下载', privacy: '隐私协议', terms: '服务条款' },
        back: '返回首页',
        h1: '隐私协议',
        updated: '最后更新日期：2024年4月16日',
        intro:
          '感谢您使用 vPaste（以下简称"我们"或"应用"）。我们高度重视您的隐私保护，本隐私协议旨在向您说明我们如何收集、使用、存储和保护您的信息。',
        s1h: '1. 信息收集',
        s1p: 'vPaste 作为一款剪贴板管理工具，我们会收集以下信息：',
        s1li1:
          '<strong>剪贴板内容</strong>：当您使用应用时，我们会自动捕获并存储您复制到系统剪贴板的文本内容。这些内容仅存储在您的设备本地，不会上传到任何服务器。',
        s1li2:
          '<strong>使用偏好</strong>：我们会存储您的应用设置和偏好配置，如主题设置、快捷键配置等，这些数据同样仅存储在本地设备。',
        s1li3:
          '<strong>应用诊断数据</strong>：在应用崩溃或出现异常时，系统可能会生成匿名的诊断日志，用于改进应用稳定性。',
        s2h: '2. 我们不收集的信息',
        s2p: '我们承诺 <strong>不会</strong> 收集以下信息：',
        s2li1: '个人身份信息（如姓名、电子邮件、电话号码等）',
        s2li2: '设备唯一标识符',
        s2li3: '地理位置信息',
        s2li4: '浏览历史或使用行为分析数据',
        s2li5: '任何形式的广告追踪数据',
        s3h: '3. 数据存储与安全',
        s3p1:
          '<strong>本地存储</strong>：所有剪贴板内容和用户设置均存储在您的设备本地，使用 macOS 系统提供的 SwiftData 技术进行安全存储。我们不会将您的任何数据上传到云端或远程服务器。',
        s3p2: '<strong>数据安全</strong>：您的数据受 macOS 系统级别的安全保护，包括：',
        s3li1: '应用沙盒隔离',
        s3li2: '数据加密存储',
        s3li3: '系统权限控制',
        s4h: '4. 数据使用目的',
        s4p: '我们收集的数据仅用于以下目的：',
        s4li1: '提供剪贴板历史记录功能',
        s4li2: '实现剪贴板内容的快速访问和粘贴',
        s4li3: '支持分组管理和搜索功能',
        s4li4: '保存您的应用偏好设置',
        s4li5: '改进应用的稳定性和性能',
        s5h: '5. 数据共享',
        s5p: '我们 <strong>不会</strong> 将您的数据出售、出租或共享给任何第三方，包括但不限于：',
        s5li1: '广告商',
        s5li2: '数据分析公司',
        s5li3: '任何其他第三方服务',
        s6h: '6. 第三方服务',
        s6p:
          'vPaste 使用 Apple 提供的应用内购买服务来处理专业版订阅。Apple 会按照其自己的隐私政策处理您的支付信息，我们不会收到或存储您的支付详情。',
        s7h: '7. 您的权利',
        s7p: '您对自己的数据拥有完全控制权：',
        s7li1: '<strong>查看数据</strong>：您可以在应用中随时查看所有存储的剪贴板历史',
        s7li2: '<strong>删除数据</strong>：您可以删除单条历史记录、清空特定分组或清除所有历史数据',
        s7li3: '<strong>暂停监控</strong>：您可以在复制敏感信息前暂停剪贴板监控，保护隐私',
        s7li4: '<strong>导出数据</strong>：您可以手动复制需要的剪贴板内容进行备份',
        s7li5: '<strong>卸载应用</strong>：卸载应用将删除所有本地存储的数据',
        s8h: '8. 儿童隐私',
        s8p:
          'vPaste 不针对 13 岁以下儿童。我们不会有意收集儿童的个人信息。如果您发现您的孩子在未经同意的情况下使用了我们的应用，请联系我们。',
        s9h: '9. 隐私协议更新',
        s9p:
          '我们可能会不时更新本隐私协议。重大变更将在应用内或我们的网站上通知您。继续使用应用即表示您同意更新后的隐私协议。',
        s10h: '10. 联系我们',
        s10p: '如果您对本隐私协议有任何疑问或建议，请通过以下方式联系我们：',
        s10li: '电子邮件：',
        s11h: '11. 适用法律',
        s11p: '本隐私协议受中华人民共和国法律管辖，并按照中华人民共和国法律解释。如有争议，双方应友好协商解决。',
        closing: '<strong>vPaste</strong> - 您的隐私，我们守护。',
        footer: { privacy: '隐私协议', terms: '服务条款', contact: '联系我们', copy: '© 2026 vPaste。保留所有权利。' }
      },
      terms: {
        title: '服务条款 - vPaste',
        metaDescription: 'vPaste 服务条款 - 使用条款和许可协议',
        nav: { features: '功能', screenshot: '截图', download: '下载', privacy: '隐私协议', terms: '服务条款' },
        back: '返回首页',
        h1: '服务条款',
        updated: '最后更新日期：2024年4月16日',
        intro: '欢迎使用 vPaste！在使用本应用之前，请仔细阅读以下服务条款。使用 vPaste 即表示您同意接受这些条款的约束。',
        s1h: '1. 服务说明',
        s1p: 'vPaste 是一款 macOS 剪贴板管理应用程序，提供以下功能：',
        s1li1: '自动捕获和管理剪贴板历史记录',
        s1li2: '快速访问和粘贴剪贴板内容',
        s1li3: '分组管理常用内容',
        s1li4: '键盘快捷键操作',
        s1li5: '搜索功能（专业版）',
        s2h: '2. 许可授权',
        s2p1: '<strong>免费使用</strong>：vPaste 的基础功能免费提供给所有用户使用。',
        s2p2: '<strong>专业版订阅</strong>：专业版功能需要通过 Apple 应用内购买订阅。订阅后，您将获得：',
        s2li1: '无限历史记录',
        s2li2: '全文搜索功能',
        s2li3: '高级分组管理',
        s2li4: '更多专业功能',
        s2p3: '订阅费用将通过 Apple App Store 收取，遵循 Apple 的订阅条款和政策。',
        s3h: '3. 用户责任',
        s3p: '使用 vPaste 时，您同意：',
        s3li1: '遵守所有适用的法律法规',
        s3li2: '不使用应用进行任何非法或侵权活动',
        s3li3: '不尝试破解、修改或反编译应用',
        s3li4: '不使用应用传播病毒、恶意软件或其他有害内容',
        s3li5: '对您复制到剪贴板的内容负责',
        s4h: '4. 知识产权',
        s4p: 'vPaste 及其所有内容、功能和设计均受著作权法和其他知识产权法律保护。未经明确授权，您不得：',
        s4li1: '复制、修改或分发应用的任何部分',
        s4li2: '使用应用的商标、标识或品牌元素',
        s4li3: '创建衍生作品或进行逆向工程',
        s5h: '5. 免责声明',
        s5p1: '<strong>按原样提供</strong>：vPaste 按"现状"提供，不提供任何明示或暗示的保证，包括但不限于：',
        s5li1: '适销性保证',
        s5li2: '特定用途适用性保证',
        s5li3: '不侵权保证',
        s5p2: '<strong>责任限制</strong>：在适用法律允许的最大范围内，我们不对以下情况承担责任：',
        s5li4: '数据丢失或损坏',
        s5li5: '使用中断或无法使用',
        s5li6: '任何间接、附带或后果性损害',
        s5li7: '利润损失或业务中断',
        s6h: '6. 应用更新与维护',
        s6p: '我们保留随时修改、更新或终止应用部分或全部功能的权利，恕不另行通知。建议您定期更新应用以获得最新功能和安全修复。',
        s7h: '7. 系统要求',
        s7p: '使用 vPaste 需要满足以下系统要求：',
        s7li1: 'macOS 15.0 或更高版本',
        s7li2: '支持 Apple Silicon 和 Intel 芯片',
        s7li3: '足够的本地存储空间',
        s8h: '8. 订阅与退款',
        s8p1: '<strong>订阅管理</strong>：专业版订阅通过 Apple App Store 管理。您可以随时在 App Store 设置中查看、修改或取消订阅。',
        s8p2: '<strong>退款政策</strong>：所有退款请求遵循 Apple App Store 的退款政策。请通过 Apple 官方渠道申请退款。',
        s8p3: '<strong>订阅续订</strong>：订阅将自动续订，除非在当前订阅期结束前至少 24 小时取消。',
        s9h: '9. 终止使用',
        s9p: '我们保留在以下情况下暂停或终止您使用应用的权利：',
        s9li1: '违反本服务条款',
        s9li2: '进行欺诈或非法活动',
        s9li3: '滥用应用功能',
        s10h: '10. 条款修改',
        s10p:
          '我们可能会不时修改本服务条款。重大变更将在应用内或我们的网站上通知您。继续使用应用即表示您接受修改后的条款。如果您不同意修改后的条款，应停止使用应用。',
        s11h: '11. 适用法律与争议解决',
        s11p:
          '本服务条款受中华人民共和国法律管辖。因本条款引起的任何争议，双方应首先通过友好协商解决。协商不成的，可向我们所在地有管辖权的人民法院提起诉讼。',
        s12h: '12. 完整协议',
        s12p: '本服务条款构成您与 vPaste 之间关于使用应用的完整协议，取代任何先前或同时期的协议和理解。',
        s13h: '13. 联系我们',
        s13p: '如果您对本服务条款有任何疑问或建议，请通过以下方式联系我们：',
        s13li: '电子邮件：',
        closing: '感谢您选择 vPaste，祝您使用愉快！',
        footer: { privacy: '隐私协议', terms: '服务条款', contact: '联系我们', copy: '© 2026 vPaste。保留所有权利。' }
      },
      lang: { aria: '语言', zh: '中文', en: 'English' }
    },
    en: {
      index: {
        title: 'vPaste - Clipboard Manager for macOS',
        metaDescription:
          'vPaste - A powerful macOS clipboard manager that captures history automatically, pastes faster, and boosts your productivity.',
        metaKeywords: 'vPaste, macOS, clipboard, clipboard manager, Mac app',
        nav: { features: 'Features', screenshot: 'Screenshots', download: 'Download', privacy: 'Privacy', terms: 'Terms' },
        hero: {
          tagline: 'Clipboard manager for macOS',
          description:
            'Automatically capture clipboard history, access frequent content quickly, and make copy and paste more efficient.',
          btnStore: 'Download on the App Store',
          btnMore: 'Learn more',
          iconAlt: 'vPaste app icon'
        },
        featuresTitle: 'Key features',
        f1: {
          title: 'Automatic history',
          desc: 'Clipboard content is captured automatically so you are less likely to lose important information.'
        },
        f2: {
          title: 'Quick access',
          desc: 'Press ⌘⇧V to open instantly and paste from history with one action.'
        },
        f3: {
          title: 'Groups',
          desc: 'Organize frequently used snippets into groups for faster project workflows.'
        },
        f4: {
          title: 'Smart search',
          desc: 'The Pro version supports full‑text search to find any historical item quickly.'
        },
        f5: {
          title: 'Pause monitoring',
          desc: 'Pause clipboard monitoring in one click when copying sensitive information.'
        },
        f6: {
          title: 'Local storage',
          desc: 'All data stays on your device—no cloud sync required.'
        },
        screenshotTitle: 'Screenshots',
        screenshotAlt: 'vPaste app screenshot',
        downloadTitle: 'Download now',
        downloadDesc: 'Requires macOS 15.0 or later',
        downloadBtn: 'Download on the App Store',
        footer: { privacy: 'Privacy', terms: 'Terms', contact: 'Contact', copy: '© 2026 vPaste. All rights reserved.' }
      },
      privacy: {
        title: 'Privacy Policy - vPaste',
        metaDescription: 'vPaste privacy policy - how we protect your data.',
        nav: { features: 'Features', screenshot: 'Screenshots', download: 'Download', privacy: 'Privacy', terms: 'Terms' },
        back: 'Back to home',
        h1: 'Privacy Policy',
        updated: 'Last updated: April 16, 2024',
        intro:
          'Thank you for using vPaste (“we”, “us”, or the “App”). We take your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect your information.',
        s1h: '1. Information we collect',
        s1p: 'As a clipboard manager, vPaste may process the following information:',
        s1li1:
          '<strong>Clipboard contents</strong>: When you use the App, we capture and store text you copy to the system clipboard. This content is stored only on your device and is not uploaded to any server.',
        s1li2:
          '<strong>Preferences</strong>: We store your settings and preferences (such as theme and shortcut configuration) locally on your device.',
        s1li3:
          '<strong>Diagnostic data</strong>: If the App crashes or encounters an error, the system may generate anonymous diagnostic logs to help improve stability.',
        s2h: '2. Information we do not collect',
        s2p: 'We <strong>do not</strong> collect the following:',
        s2li1: 'Personally identifiable information (such as name, email, or phone number)',
        s2li2: 'Unique device identifiers',
        s2li3: 'Precise location data',
        s2li4: 'Browsing history or behavioral analytics for tracking',
        s2li5: 'Advertising or cross‑app tracking data',
        s3h: '3. Storage and security',
        s3p1:
          '<strong>Local storage</strong>: Clipboard contents and settings are stored on your device using Apple’s SwiftData on macOS. We do not upload your data to the cloud or remote servers.',
        s3p2: '<strong>Security</strong>: Your data benefits from macOS protections, including:',
        s3li1: 'App sandboxing',
        s3li2: 'Encrypted storage where applicable',
        s3li3: 'System permission controls',
        s4h: '4. How we use information',
        s4p: 'We use the information above only to:',
        s4li1: 'Provide clipboard history',
        s4li2: 'Enable quick access and pasting',
        s4li3: 'Support grouping and search features',
        s4li4: 'Remember your preferences',
        s4li5: 'Improve stability and performance',
        s5h: '5. Sharing',
        s5p: 'We <strong>do not</strong> sell, rent, or share your data with third parties, including:',
        s5li1: 'Advertisers',
        s5li2: 'Data analytics vendors',
        s5li3: 'Any other third‑party services',
        s6h: '6. Third‑party services',
        s6p:
          'vPaste uses Apple In‑App Purchase for Pro subscriptions. Payment information is handled under Apple’s privacy policy; we do not receive or store your full payment details.',
        s7h: '7. Your choices',
        s7p: 'You remain in control of your data:',
        s7li1: '<strong>View</strong>: Review stored clipboard history in the App at any time.',
        s7li2: '<strong>Delete</strong>: Remove individual items, clear groups, or wipe all history.',
        s7li3: '<strong>Pause</strong>: Pause monitoring before copying sensitive content.',
        s7li4: '<strong>Export</strong>: Manually copy items you want to back up elsewhere.',
        s7li5: '<strong>Uninstall</strong>: Removing the App deletes locally stored data.',
        s8h: '8. Children’s privacy',
        s8p:
          'vPaste is not directed to children under 13. We do not knowingly collect personal information from children. If you believe your child has used the App without consent, please contact us.',
        s9h: '9. Changes to this policy',
        s9p:
          'We may update this Privacy Policy from time to time. Material changes will be communicated in the App or on this website. Continued use means you accept the updated policy.',
        s10h: '10. Contact us',
        s10p: 'If you have questions or suggestions about this Privacy Policy, please contact us:',
        s10li: 'Email: ',
        s11h: '11. Governing law',
        s11p:
          'This Privacy Policy is governed by the laws of the People’s Republic of China and interpreted accordingly. Disputes should first be resolved through good‑faith negotiation.',
        closing: '<strong>vPaste</strong> — we protect your privacy.',
        footer: { privacy: 'Privacy', terms: 'Terms', contact: 'Contact', copy: '© 2026 vPaste. All rights reserved.' }
      },
      terms: {
        title: 'Terms of Service - vPaste',
        metaDescription: 'vPaste terms of service and license information.',
        nav: { features: 'Features', screenshot: 'Screenshots', download: 'Download', privacy: 'Privacy', terms: 'Terms' },
        back: 'Back to home',
        h1: 'Terms of Service',
        updated: 'Last updated: April 16, 2024',
        intro:
          'Welcome to vPaste. Please read these Terms of Service carefully before using the App. By using vPaste, you agree to be bound by these terms.',
        s1h: '1. Description of the service',
        s1p: 'vPaste is a macOS clipboard manager that provides:',
        s1li1: 'Automatic capture and management of clipboard history',
        s1li2: 'Quick access and pasting from history',
        s1li3: 'Grouping for frequently used content',
        s1li4: 'Keyboard shortcuts',
        s1li5: 'Search (Pro)',
        s2h: '2. License',
        s2p1: '<strong>Free tier</strong>: Core features of vPaste are available free of charge.',
        s2p2: '<strong>Pro subscription</strong>: Pro features require an Apple In‑App Purchase subscription. With an active subscription, you may receive:',
        s2li1: 'Expanded history limits',
        s2li2: 'Full‑text search',
        s2li3: 'Advanced grouping',
        s2li4: 'Additional Pro capabilities',
        s2p3: 'Charges are processed by the Apple App Store and are subject to Apple’s subscription terms.',
        s3h: '3. Your responsibilities',
        s3p: 'When using vPaste, you agree to:',
        s3li1: 'Comply with all applicable laws and regulations',
        s3li2: 'Not use the App for unlawful or infringing activities',
        s3li3: 'Not attempt to crack, modify, or reverse engineer the App',
        s3li4: 'Not use the App to distribute malware or harmful content',
        s3li5: 'Remain responsible for content you copy to the clipboard',
        s4h: '4. Intellectual property',
        s4p:
          'vPaste and its content, features, and design are protected by copyright and other intellectual property laws. Without explicit authorization, you may not:',
        s4li1: 'Copy, modify, or distribute any part of the App',
        s4li2: 'Use our trademarks, logos, or branding',
        s4li3: 'Create derivative works or reverse engineer the App',
        s5h: '5. Disclaimers',
        s5p1:
          '<strong>As is</strong>: vPaste is provided on an “as is” basis without warranties of any kind, whether express or implied, including:',
        s5li1: 'Merchantability',
        s5li2: 'Fitness for a particular purpose',
        s5li3: 'Non‑infringement',
        s5p2: '<strong>Limitation of liability</strong>: To the maximum extent permitted by law, we are not liable for:',
        s5li4: 'Loss or corruption of data',
        s5li5: 'Interruptions or inability to use the App',
        s5li6: 'Indirect, incidental, or consequential damages',
        s5li7: 'Lost profits or business interruption',
        s6h: '6. Updates and maintenance',
        s6p:
          'We may modify, update, or discontinue features at any time without notice. We recommend keeping the App updated for the latest improvements and fixes.',
        s7h: '7. System requirements',
        s7p: 'vPaste requires:',
        s7li1: 'macOS 15.0 or later',
        s7li2: 'Apple Silicon or Intel Macs',
        s7li3: 'Sufficient local storage',
        s8h: '8. Subscriptions and refunds',
        s8p1:
          '<strong>Subscription management</strong>: Pro subscriptions are managed through the Apple App Store. You can view, change, or cancel subscriptions in your App Store settings.',
        s8p2:
          '<strong>Refunds</strong>: Refund requests follow Apple’s App Store policies. Please submit refund requests through Apple’s official channels.',
        s8p3:
          '<strong>Auto‑renewal</strong>: Subscriptions renew automatically unless canceled at least 24 hours before the end of the current period.',
        s9h: '9. Suspension and termination',
        s9p: 'We may suspend or terminate access if:',
        s9li1: 'You violate these Terms',
        s9li2: 'You engage in fraud or illegal activity',
        s9li3: 'You abuse the App or its features',
        s10h: '10. Changes to these Terms',
        s10p:
          'We may update these Terms from time to time. Material changes will be communicated in the App or on this website. Continued use constitutes acceptance. If you disagree, you should stop using the App.',
        s11h: '11. Governing law and disputes',
        s11p:
          'These Terms are governed by the laws of the People’s Republic of China. Disputes should first be resolved through good‑faith negotiation; if negotiation fails, disputes may be submitted to a competent people’s court where we are located.',
        s12h: '12. Entire agreement',
        s12p: 'These Terms constitute the entire agreement between you and vPaste regarding use of the App and supersede prior agreements on the same subject.',
        s13h: '13. Contact us',
        s13p: 'If you have questions about these Terms, please contact us:',
        s13li: 'Email: ',
        closing: 'Thank you for choosing vPaste. We hope you enjoy using it.',
        footer: { privacy: 'Privacy', terms: 'Terms', contact: 'Contact', copy: '© 2026 vPaste. All rights reserved.' }
      },
      lang: { aria: 'Language', zh: '中文', en: 'English' }
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
      cur = cur[parts[i]];
    }
    return typeof cur === 'string' ? cur : '';
  }

  function t(locale, path) {
    var s = pick(STRINGS[locale], path);
    if (s) return s;
    return pick(STRINGS.zh, path);
  }

  function applyAppStoreLinks(locale) {
    var href = APP_STORE[locale] || APP_STORE.en;
    document.querySelectorAll('a[data-app-store]').forEach(function (a) {
      a.setAttribute('href', href);
    });
  }

  function updateLangButtons(locale) {
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      var lang = btn.getAttribute('data-set-lang');
      btn.classList.toggle('active', lang === locale);
      btn.setAttribute('aria-pressed', lang === locale ? 'true' : 'false');
    });
    var group = document.querySelector('.lang-switch');
    if (group) {
      group.setAttribute('aria-label', t(locale, 'lang.aria'));
    }
  }

  function applyI18n() {
    var locale = getLocale();
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';

    var titleKey = document.body && document.body.getAttribute('data-i18n-title-key');
    if (titleKey) {
      document.title = t(locale, titleKey);
    }

    var metaKey = document.body && document.body.getAttribute('data-i18n-meta-key');
    if (metaKey) {
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', t(locale, metaKey));
    }

    var keywordsKey = document.body && document.body.getAttribute('data-i18n-keywords-key');
    if (keywordsKey) {
      var metaKw = document.querySelector('meta[name="keywords"]');
      if (metaKw) metaKw.setAttribute('content', t(locale, keywordsKey));
    }

    // 更新所有数据属性
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      var val = t(locale, key);
      if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (!key) return;
      var val = t(locale, key);
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (!key) return;
      var val = t(locale, key);
      if (val) el.setAttribute('alt', val);
    });

    // 更新语言切换按钮的显示
    document.querySelectorAll('.lang-switch-btn').forEach(function (btn) {
      var currentLang = getLocale();
      if (currentLang === 'zh') {
        btn.textContent = 'English';
      } else {
        btn.textContent = '中文';
      }
    });

    applyAppStoreLinks(locale);
    updateLangButtons(locale);
  }

  function init() {
    applyI18n();

    // 处理语言切换按钮点击
    document.querySelectorAll('.lang-switch-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var currentLang = getLocale();
        var newLang = currentLang === 'zh' ? 'en' : 'zh';

        setLocale(newLang);
        applyI18n();
      });
    });

    // 键盘支持
    document.querySelectorAll('.lang-switch-btn').forEach(function (btn) {
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
