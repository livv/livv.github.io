class LanguageManager {
  constructor() {
    this.currentLang = this.getSavedLanguage() || this.detectBrowserLanguage();
    this.translations = {
      'zh': {
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
        'privacy.title': 'vClean 隐私政策',
        'privacy.metaDescription': 'vClean 隐私政策 - 数据保护和使用说明',
        'privacy.updated': '最后更新日期：2026年4月14日',
        'privacy.back': '返回首页',
        'privacy.h1': '🛡️ vClean 隐私政策',
        'privacy.effective_date': '生效日期：2026年4月14日',
        'privacy.intro': '感谢您选择 vClean 应用（以下简称"本应用"）。我们高度重视您的隐私保护，本应用承诺不会收集、存储、传输或分享任何个人数据。',
        'privacy.s1h': '1. 信息收集政策',
        'privacy.s1p': '本应用完全尊重并保护用户隐私，<strong>不会收集任何形式的个人信息</strong>，包括但不限于：',
        'privacy.s1li1': '个人身份信息（姓名、地址、电话号码、电子邮件等）',
        'privacy.s1li2': '设备信息（设备型号、操作系统版本、唯一设备标识符等）',
        'privacy.s1li3': '使用数据（使用习惯、偏好设置、崩溃报告等）',
        'privacy.s1li4': '位置信息',
        'privacy.s1li5': '网络信息（IP地址、网络运营商等）',
        'privacy.s2h': '2. 应用功能说明',
        'privacy.s2p': 'vClean 是一款专为 macOS 开发者设计的 Xcode 编译目录清理工具，主要功能包括：',
        'privacy.s2li1': '扫描和分析 Xcode 编译目录',
        'privacy.s2li2': '显示编译文件夹的大小和最后访问时间',
        'privacy.s2li3': '提供安全的删除功能，清理不需要的编译文件',
        'privacy.s2li4': '支持拖放操作，方便用户添加自定义路径',
        'privacy.s2p2': '所有这些功能都在您的本地设备上完成，不需要访问互联网，也不会与任何第三方服务通信。',
        'privacy.s3h': '3. 数据存储方式',
        'privacy.s3p': '本应用所有的扫描结果、设置和缓存数据都<strong>仅存储在您的本地设备上</strong>，包括：',
        'privacy.s3li1': '扫描到的文件夹信息（路径、大小、访问时间）',
        'privacy.s3li2': '用户偏好设置',
        'privacy.s3li3': '应用缓存数据',
        'privacy.s3p2': '这些数据不会上传到任何服务器，也不会与第三方共享。',
        'privacy.s4h': '4. 第三方服务',
        'privacy.s4p': '本应用<strong>不使用任何第三方分析工具、广告网络或社交媒体插件</strong>。我们没有集成任何需要收集用户数据的 SDK 或服务。',
        'privacy.s5h': '5. 儿童隐私保护',
        'privacy.s5p': '本应用不面向儿童用户，也不会收集任何儿童个人信息。如果您是13岁以下儿童，请勿使用本应用。',
        'privacy.s6h': '6. 数据安全',
        'privacy.s6p': '由于本应用不收集或存储任何个人数据，因此不存在数据泄露风险。所有操作都在您的本地设备上完成，确保了数据的绝对安全。',
        'privacy.s7h': '7. 您的权利',
        'privacy.s7p': '由于本应用不收集任何个人数据，您无需行使以下权利：',
        'privacy.s7li1': '访问权：查看我们持有的您的个人信息',
        'privacy.s7li2': '更正权：更正不准确的个人信息',
        'privacy.s7li3': '删除权：要求删除您的个人信息',
        'privacy.s7li4': '数据可携带权：获取您的数据副本',
        'privacy.s7li5': '限制处理权：限制对您数据的处理',
        'privacy.s7li6': '反对权：反对对您数据的处理',
        'privacy.s8h': '8. 隐私政策变更',
        'privacy.s8p': '我们保留随时更新本隐私政策的权利。任何变更都会在应用内显著位置公布，并更新"最后更新日期"。建议您定期查看本政策以了解最新信息。',
        'privacy.s9h': '9. 联系我们',
        'privacy.s9p': '如果您对本隐私政策有任何疑问或建议,请通过以下方式联系我们：',
        'privacy.s9li1': 'Email:',
        'privacy.s9p2': '我们将在收到您的反馈后尽快回复。',
        'privacy.closing': '&copy; 2026 vClean. All rights reserved.',
        'privacy.footer.privacy': '隐私政策',
        'privacy.footer.terms': '服务条款',
        'privacy.footer.contact': '联系我们',
        'privacy.footer.copy': '&copy; 2026 vClean. All rights reserved.',

        // 服务条款页面
        'terms.title': '服务条款',
        'terms.metaDescription': 'vClean 服务条款 - 使用条款和许可协议',
        'terms.updated': '最后更新日期：2026年4月16日',
        'terms.back': '返回首页',
        'terms.h1': '服务条款',
        'terms.intro': '欢迎使用 vClean！在使用本应用之前，请仔细阅读以下服务条款。使用 vClean 即表示您同意接受这些条款的约束。',
        'terms.nav.features': '功能特色',
        'terms.nav.screenshot': '截图展示',
        'terms.nav.download': '下载',
        'terms.nav.privacy': '隐私政策',
        'terms.nav.terms': '服务条款',
        'terms.nav.home': '返回首页',
        'terms.s1h': '1. 服务说明',
        'terms.s1p': 'vClean 是一款专业的 Xcode 编译目录清理工具，提供以下功能：',
        'terms.s1li1': '智能扫描 Xcode 编译目录',
        'terms.s1li2': '分析文件夹大小和访问时间',
        'terms.s1li3': '安全删除不需要的编译文件',
        'terms.s1li4': '可视化磁盘空间使用情况',
        'terms.s1li5': '支持按多种条件筛选文件',
        'terms.s2h': '2. 许可授权',
        'terms.s2p1': '<strong>免费使用</strong>：vClean 的基础功能免费提供给所有用户使用。',
        'terms.s2p2': '<strong>专业版订阅</strong>：未来可能推出的专业版功能需要通过 Apple 应用内购买订阅。订阅后将获得：',
        'terms.s2li1': '无限历史记录',
        'terms.s2li2': '高级分组管理',
        'terms.s2li3': '更多专业功能',
        'terms.s2p3': '订阅费用将通过 Apple App Store 收取，遵循 Apple 的订阅条款和政策。',
        'terms.s3h': '3. 用户责任',
        'terms.s3p': '使用 vClean 时，您同意：',
        'terms.s3li1': '遵守所有适用的法律法规',
        'terms.s3li2': '不使用应用进行任何非法或侵权活动',
        'terms.s3li3': '不尝试破解、修改或反编译应用',
        'terms.s3li4': '不使用应用传播病毒、恶意软件或其他有害内容',
        'terms.s3li5': '对您使用应用的行为负责',
        'terms.s4h': '4. 知识产权',
        'terms.s4p': 'vClean 及其所有内容、功能和设计均受著作权法和其他知识产权法律保护。未经明确授权，您不得：',
        'terms.s4li1': '复制、修改或分发应用的任何部分',
        'terms.s4li2': '使用应用的商标、标识或品牌元素',
        'terms.s4li3': '创建衍生作品或进行逆向工程',
        'terms.s5h': '5. 免责声明',
        'terms.s5p1': '<strong>按原样提供</strong>：vClean 按"现状"提供，不提供任何明示或暗示的保证，包括但不限于：',
        'terms.s5li1': '适销性保证',
        'terms.s5li2': '特定用途适用性保证',
        'terms.s5li3': '不侵权保证',
        'terms.s5p2': '<strong>责任限制</strong>：在适用法律允许的最大范围内，我们不对以下情况承担责任：',
        'terms.s5li4': '数据丢失或损坏',
        'terms.s5li5': '使用中断或无法使用',
        'terms.s5li6': '任何间接、附带或后果性损害',
        'terms.s5li7': '利润损失或业务中断',
        'terms.s6h': '6. 应用更新与维护',
        'terms.s6p': '我们保留随时修改、更新或终止应用部分或全部功能的权利，恕不另行通知。建议您定期更新应用以获得最新功能和安全修复。',
        'terms.s7h': '7. 系统要求',
        'terms.s7p': '使用 vClean 需要满足以下系统要求：',
        'terms.s7li1': 'macOS 15.0 或更高版本',
        'terms.s7li2': '支持 Apple Silicon 和 Intel 芯片',
        'terms.s7li3': '足够的本地存储空间',
        'terms.s8h': '8. 订阅与退款',
        'terms.s8p1': '<strong>订阅管理</strong>：如未来推出订阅功能，可通过 Apple App Store 管理。您可以随时在 App Store 设置中查看、修改或取消订阅。',
        'terms.s8p2': '<strong>退款政策</strong>：所有退款请求遵循 Apple App Store 的退款政策。请通过 Apple 官方渠道申请退款。',
        'terms.s8p3': '<strong>订阅续订</strong>：如启用自动续订，订阅将在当前周期结束前自动续订，除非在当前订阅期结束前至少 24 小时取消。',
        'terms.s9h': '9. 终止使用',
        'terms.s9p': '我们保留在以下情况下暂停或终止您使用应用的权利：',
        'terms.s9li1': '违反本服务条款',
        'terms.s9li2': '进行欺诈或非法活动',
        'terms.s9li3': '滥用应用功能',
        'terms.s10h': '10. 条款修改',
        'terms.s10p': '我们可能会不时修改本服务条款。重大变更将在应用内或我们的网站上通知您。继续使用应用即表示您接受修改后的条款。如果您不同意修改后的条款，应停止使用应用。',
        'terms.s11h': '11. 适用法律与争议解决',
        'terms.s11p': '本服务条款受中华人民共和国法律管辖。因本条款引起的任何争议，双方应首先通过友好协商解决。协商不成的，可向我们所在地有管辖权的人民法院提起诉讼。',
        'terms.s12h': '12. 完整协议',
        'terms.s12p': '本服务条款构成您与 vClean 之间关于使用应用的完整协议，取代任何先前或同时期的协议和理解。',
        'terms.s13h': '13. 联系我们',
        'terms.s13p': '如果您对本服务条款有任何疑问或建议，请通过以下方式联系我们：',
        'terms.s13li': '电子邮件：',
        'terms.closing': '感谢您选择 vClean，祝您使用愉快！',
        'terms.footer.privacy': '隐私政策',
        'terms.footer.terms': '服务条款',
        'terms.footer.contact': '联系我们',
        'terms.footer.copy': '&copy; 2026 vClean. All rights reserved.'
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
        'privacy.title': 'vClean Privacy Policy',
        'privacy.metaDescription': 'vClean Privacy Policy - Data protection and usage terms',
        'privacy.updated': 'Last updated: April 14, 2026',
        'privacy.back': 'Back to Home',
        'privacy.h1': '🛡️ vClean Privacy Policy',
        'privacy.effective_date': 'Effective date: April 14, 2026',
        'privacy.intro': 'Thank you for choosing the vClean app (hereinafter referred to as "this app"). We take your privacy seriously. This app does not collect, store, transmit, or share any personal data.',
        'privacy.s1h': '1. Information Collection Policy',
        'privacy.s1p': 'This app fully respects and protects user privacy and <strong>does not collect any personal information</strong>, including but not limited to:',
        'privacy.s1li1': 'Personal identity information (name, address, phone number, email, etc.)',
        'privacy.s1li2': 'Device information (device model, OS version, unique device identifiers, etc.)',
        'privacy.s1li3': 'Usage data (usage habits, preferences, crash reports, etc.)',
        'privacy.s1li4': 'Location information',
        'privacy.s1li5': 'Network information (IP address, network operator, etc.)',
        'privacy.s2h': '2. App Functionality',
        'privacy.s2p': 'vClean is an Xcode build directory cleanup tool for macOS developers. Main features include:',
        'privacy.s2li1': 'Scan and analyze Xcode build directories',
        'privacy.s2li2': 'Show build folder sizes and last access times',
        'privacy.s2li3': 'Provide safe deletion to clean unnecessary build files',
        'privacy.s2li4': 'Support drag and drop for custom paths',
        'privacy.s2p2': 'All of these features run on your local device, require no internet access, and do not communicate with any third-party services.',
        'privacy.s3h': '3. Data Storage',
        'privacy.s3p': 'All scan results, settings, and cache data are <strong>stored only on your local device</strong>, including:',
        'privacy.s3li1': 'Scanned folder information (path, size, access time)',
        'privacy.s3li2': 'User preferences',
        'privacy.s3li3': 'App cache data',
        'privacy.s3p2': 'This data is not uploaded to any server or shared with third parties.',
        'privacy.s4h': '4. Third-party Services',
        'privacy.s4p': 'This app <strong>does not use third-party analytics, ad networks, or social plugins</strong>. We have not integrated any SDK or service that requires collecting user data.',
        'privacy.s5h': '5. Children\'s Privacy',
        'privacy.s5p': 'This app is not directed at children and does not collect children\'s personal information. If you are under 13, please do not use this app.',
        'privacy.s6h': '6. Data Security',
        'privacy.s6p': 'Because this app does not collect or store personal data, there is no risk of personal data leakage. All operations are completed on your local device.',
        'privacy.s7h': '7. Your Rights',
        'privacy.s7p': 'Because this app does not collect personal data, you do not need to exercise the following rights:',
        'privacy.s7li1': 'Right of access: view personal information we hold about you',
        'privacy.s7li2': 'Right of rectification: correct inaccurate personal information',
        'privacy.s7li3': 'Right to erasure: request deletion of your personal information',
        'privacy.s7li4': 'Right to data portability: obtain a copy of your data',
        'privacy.s7li5': 'Right to restrict processing: restrict processing of your data',
        'privacy.s7li6': 'Right to object: object to processing of your data',
        'privacy.s8h': '8. Changes to This Policy',
        'privacy.s8p': 'We may update this privacy policy from time to time. Changes will be announced prominently in the app and the "last updated" date will be revised. Please review this policy periodically.',
        'privacy.s9h': '9. Contact Us',
        'privacy.s9p': 'If you have questions or suggestions about this privacy policy, please contact us through:',
        'privacy.s9li1': 'Email:',
        'privacy.s9p2': 'We will respond to your feedback as soon as possible.',
        'privacy.closing': '&copy; 2026 vClean. All rights reserved.',
        'privacy.footer.privacy': 'Privacy Policy',
        'privacy.footer.terms': 'Terms of Service',
        'privacy.footer.contact': 'Contact Us',
        'privacy.footer.copy': '&copy; 2026 vClean. All rights reserved.',

        // Terms of Service page
        'terms.title': 'Terms of Service',
        'terms.metaDescription': 'vClean Terms of Service - Usage terms and license agreement',
        'terms.updated': 'Last updated: April 16, 2026',
        'terms.back': 'Back to Home',
        'terms.h1': 'Terms of Service',
        'terms.intro': 'Welcome to vClean! Please read these terms carefully before using this application. Using vClean indicates that you accept these terms.',
        'terms.nav.features': 'Features',
        'terms.nav.screenshot': 'Screenshots',
        'terms.nav.download': 'Download',
        'terms.nav.privacy': 'Privacy Policy',
        'terms.nav.terms': 'Terms of Service',
        'terms.nav.home': 'Back to Home',
        'terms.s1h': '1. Service Description',
        'terms.s1p': 'vClean is a professional Xcode build directory cleanup tool that provides the following features:',
        'terms.s1li1': 'Smart scanning of Xcode build directories',
        'terms.s1li2': 'Analysis of folder sizes and access times',
        'terms.s1li3': 'Safe deletion of unnecessary build files',
        'terms.s1li4': 'Visualization of disk space usage',
        'terms.s1li5': 'Support for filtering by multiple conditions',
        'terms.s2h': '2. License Grant',
        'terms.s2p1': '<strong>Free Use</strong>: The basic functions of vClean are provided free of charge to all users.',
        'terms.s2p2': '<strong>Professional Version Subscription</strong>: Future professional version features may require in-app purchase subscriptions through Apple. Subscribers will receive:',
        'terms.s2li1': 'Unlimited history records',
        'terms.s2li2': 'Advanced grouping management',
        'terms.s2li3': 'More professional features',
        'terms.s2p3': 'Subscription fees will be collected through the Apple App Store, following Apple\'s subscription terms and policies.',
        'terms.s3h': '3. User Responsibilities',
        'terms.s3p': 'When using vClean, you agree to:',
        'terms.s3li1': 'Comply with all applicable laws and regulations',
        'terms.s3li2': 'Not use the application for any illegal or infringing activities',
        'terms.s3li3': 'Not attempt to crack, modify, or decompile the application',
        'terms.s3li4': 'Not use the application to spread viruses, malware, or other harmful content',
        'terms.s3li5': 'Be responsible for your use of the application',
        'terms.s4h': '4. Intellectual Property',
        'terms.s4p': 'vClean and all its content, features, and designs are protected by copyright law and other intellectual property laws. Without explicit authorization, you must not:',
        'terms.s4li1': 'Copy, modify, or distribute any part of the application',
        'terms.s4li2': 'Use the application\'s trademarks, logos, or brand elements',
        'terms.s4li3': 'Create derivative works or perform reverse engineering',
        'terms.s5h': '5. Disclaimer',
        'terms.s5p1': '<strong>As Is</strong>: vClean is provided "as is" without any express or implied warranties, including but not limited to:',
        'terms.s5li1': 'Merchantability warranty',
        'terms.s5li2': 'Fitness for particular purpose warranty',
        'terms.s5li3': 'Non-infringement warranty',
        'terms.s5p2': '<strong>Liability Limitation</strong>: To the maximum extent permitted by applicable law, we are not liable for:',
        'terms.s5li4': 'Data loss or damage',
        'terms.s5li5': 'Service interruption or unavailability',
        'terms.s5li6': 'Any indirect, incidental, or consequential damages',
        'terms.s5li7': 'Loss of profits or business interruption',
        'terms.s6h': '6. Application Updates and Maintenance',
        'terms.s6p': 'We reserve the right to modify, update, or terminate any part or all of the application\'s functions at any time without notice. We recommend regularly updating the application to get the latest features and security fixes.',
        'terms.s7h': '7. System Requirements',
        'terms.s7p': 'Using vClean requires meeting the following system requirements:',
        'terms.s7li1': 'macOS 15.0 or higher',
        'terms.s7li2': 'Support for Apple Silicon and Intel chips',
        'terms.s7li3': 'Sufficient local storage space',
        'terms.s8h': '8. Subscriptions and Refunds',
        'terms.s8p1': '<strong>Subscription Management</strong>: If subscription features are introduced in the future, they can be managed through the Apple App Store. You can view, modify, or cancel subscriptions anytime in App Store settings.',
        'terms.s8p2': '<strong>Refund Policy</strong>: All refund requests follow the Apple App Store\'s refund policy. Please apply for refunds through official Apple channels.',
        'terms.s8p3': '<strong>Subscription Renewal</strong>: If auto-renewal is enabled, subscriptions will automatically renew before the current period ends unless cancelled at least 24 hours before the subscription period ends.',
        'terms.s9h': '9. Termination',
        'terms.s9p': 'We reserve the right to suspend or terminate your use of the application in the following circumstances:',
        'terms.s9li1': 'Violation of these terms of service',
        'terms.s9li2': 'Engaging in fraud or illegal activities',
        'terms.s9li3': 'Abusing application features',
        'terms.s10h': '10. Amendment of Terms',
        'terms.s10p': 'We may modify these terms of service from time to time. Major changes will be announced prominently within the application or on our website. Continued use of the application indicates acceptance of the modified terms. If you disagree with the modified terms, you should stop using the application.',
        'terms.s11h': '11. Applicable Law and Dispute Resolution',
        'terms.s11p': 'These terms of service are governed by the laws of the People\'s Republic of China. Any disputes arising from these terms shall first be resolved through friendly negotiation. If negotiation fails, legal proceedings may be instituted in the people\'s court with jurisdiction over our location.',
        'terms.s12h': '12. Complete Agreement',
        'terms.s12p': 'These terms of service constitute the complete agreement between you and vClean regarding the use of the application, replacing any prior or concurrent agreements and understandings.',
        'terms.s13h': '13. Contact Us',
        'terms.s13p': 'If you have any questions or suggestions about these terms of service, please contact us through:',
        'terms.s13li': 'Email:',
        'terms.closing': 'Thank you for choosing vClean. Enjoy using it!',
        'terms.footer.privacy': 'Privacy Policy',
        'terms.footer.terms': 'Terms of Service',
        'terms.footer.contact': 'Contact Us',
        'terms.footer.copy': '&copy; 2026 vClean. All rights reserved.'
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
    // 优先使用统一的 vlv_lang key（与首页 i18n.js 同步）
    let lang = localStorage.getItem('vlv_lang');
    if (lang === 'zh' || lang === 'en') return lang;

    // 兼容旧的 preferred-language key
    lang = localStorage.getItem('preferred-language');
    if (lang === 'zh' || lang === 'en') {
      return lang;
    }
    return null;
  }

  detectBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith('zh') ? 'zh' : 'en';
  }

  saveLanguage(lang) {
    // 统一使用 vlv_lang key，同时兼容旧的 preferred-language
    const normalizedLang = lang === 'zh-CN' ? 'zh' : lang;
    localStorage.setItem('vlv_lang', normalizedLang);
    localStorage.setItem('preferred-language', normalizedLang === 'zh' ? 'zh-CN' : normalizedLang);
  }

  getCurrentLanguage() {
    return this.currentLang;
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
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
    document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';

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
