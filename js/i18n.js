// i18n - Internationalization System
const translations = {
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.tester": "正则测试",
    "nav.patterns": "常用正则",
    "nav.tutorial": "案例教程",
    "nav.reference": "完整参考",
    // Hero
    "hero.title": "掌握正则表达式",
    "hero.subtitle": "在线测试、学习和使用正则表达式的一站式工具平台",
    "hero.startTest": "开始测试",
    "hero.learnMore": "学习正则",
    // Features
    "features.title": "功能特色",
    "features.realtime.title": "实时匹配",
    "features.realtime.desc": "输入即匹配，实时高亮显示匹配结果，支持全部正则标志",
    "features.library.title": "常用正则库",
    "features.library.desc": "精心整理的常用正则表达式，一键复制即可使用",
    "features.tutorial.title": "案例教程",
    "features.tutorial.desc": "从简单到复杂的实战案例，快速掌握正则表达式",
    "features.reference.title": "完整参考",
    "features.reference.desc": "涵盖所有正则语法的完整参考手册，简单易懂",
    "features.i18n.title": "中英双语",
    "features.i18n.desc": "支持中文和英文切换，满足不同用户需求",
    "features.replace.title": "替换功能",
    "features.replace.desc": "支持正则替换预览，快速验证替换结果",
    // Quick Start
    "quickstart.title": "快速开始",
    "quickstart.step1.title": "测试正则",
    "quickstart.step1.desc": "输入正则表达式和测试文本，实时查看匹配结果",
    "quickstart.step2.title": "查找常用",
    "quickstart.step2.desc": "浏览常用正则表达式库，找到你需要的模式",
    "quickstart.step3.title": "学习案例",
    "quickstart.step3.desc": "通过实际案例学习正则表达式的使用技巧",
    // Footer
    "footer.desc": "一个简单好用的在线正则表达式工具",
    // Tester Page
    "tester.title": "正则表达式测试器",
    "tester.subtitle": "输入正则表达式和测试文本，实时查看匹配结果",
    "tester.pattern": "正则表达式",
    "tester.patternPlaceholder": "输入正则表达式...",
    "tester.flags": "标志",
    "tester.flagG": "全局匹配",
    "tester.flagI": "忽略大小写",
    "tester.flagM": "多行模式",
    "tester.flagS": "点匹配换行",
    "tester.testText": "测试文本",
    "tester.testPlaceholder": "输入要测试的文本...",
    "tester.result": "匹配结果",
    "tester.replace": "替换模式",
    "tester.replacePlaceholder": "输入替换字符串...",
    "tester.replaceResult": "替换结果",
    "tester.matchCount": "找到 {count} 个匹配",
    "tester.noMatch": "没有匹配",
    "tester.invalidRegex": "无效的正则表达式",
    // Patterns Page
    "patterns.title": "常用正则表达式",
    "patterns.subtitle": "精心整理的常用正则表达式，点击复制即可使用",
    "patterns.all": "全部",
    "patterns.validation": "数据验证",
    "patterns.text": "文本处理",
    "patterns.web": "Web相关",
    "patterns.number": "数字相关",
    "patterns.copy": "复制",
    "patterns.copied": "已复制!",
    // Tutorial Page
    "tutorial.title": "正则表达式案例教程",
    "tutorial.subtitle": "从简单到复杂，通过实际案例掌握正则表达式",
    "tutorial.simple": "简单",
    "tutorial.medium": "中等",
    "tutorial.complex": "复杂",
    // Reference Page
    "reference.title": "正则表达式完整参考",
    "reference.subtitle": "涵盖所有正则表达式语法的完整参考手册",
    "reference.syntax": "语法",
    "reference.description": "说明",
    "reference.example": "示例",
    "reference.basics": "基础字符",
    "reference.quantifiers": "量词",
    "reference.anchors": "锚点/边界",
    "reference.groups": "分组与引用",
    "reference.charclass": "字符类",
    "reference.lookaround": "前瞻与后顾",
    "reference.flags": "标志/修饰符",
    "reference.special": "特殊字符",
    "reference.greedy": "贪婪与懒惰",
  },
  en: {
    "nav.home": "Home",
    "nav.tester": "Tester",
    "nav.patterns": "Patterns",
    "nav.tutorial": "Tutorial",
    "nav.reference": "Reference",
    "hero.title": "Master Regular Expressions",
    "hero.subtitle": "An all-in-one platform for testing, learning, and using regex online",
    "hero.startTest": "Start Testing",
    "hero.learnMore": "Learn Regex",
    "features.title": "Features",
    "features.realtime.title": "Real-time Matching",
    "features.realtime.desc": "Instant matching with highlighted results, supporting all regex flags",
    "features.library.title": "Pattern Library",
    "features.library.desc": "Curated collection of common regex patterns, one-click copy",
    "features.tutorial.title": "Case Tutorials",
    "features.tutorial.desc": "From simple to complex real-world cases to master regex",
    "features.reference.title": "Full Reference",
    "features.reference.desc": "Complete regex syntax reference manual, easy to understand",
    "features.i18n.title": "Bilingual",
    "features.i18n.desc": "Chinese and English support for different user needs",
    "features.replace.title": "Replace",
    "features.replace.desc": "Preview regex replacements, quickly verify results",
    "quickstart.title": "Quick Start",
    "quickstart.step1.title": "Test Regex",
    "quickstart.step1.desc": "Enter a regex pattern and test text to see matches in real-time",
    "quickstart.step2.title": "Find Patterns",
    "quickstart.step2.desc": "Browse the common regex library to find patterns you need",
    "quickstart.step3.title": "Learn Cases",
    "quickstart.step3.desc": "Learn regex through practical examples and tutorials",
    "footer.desc": "A simple and useful online regex tool",
    "tester.title": "Regex Tester",
    "tester.subtitle": "Enter a regex and test text to see matches in real-time",
    "tester.pattern": "Regular Expression",
    "tester.patternPlaceholder": "Enter regex pattern...",
    "tester.flags": "Flags",
    "tester.flagG": "Global",
    "tester.flagI": "Case Insensitive",
    "tester.flagM": "Multiline",
    "tester.flagS": "Dot matches newline",
    "tester.testText": "Test Text",
    "tester.testPlaceholder": "Enter text to test...",
    "tester.result": "Match Result",
    "tester.replace": "Replace Pattern",
    "tester.replacePlaceholder": "Enter replacement string...",
    "tester.replaceResult": "Replace Result",
    "tester.matchCount": "Found {count} match(es)",
    "tester.noMatch": "No match",
    "tester.invalidRegex": "Invalid regular expression",
    "patterns.title": "Common Regex Patterns",
    "patterns.subtitle": "Curated regex patterns ready to use, click to copy",
    "patterns.all": "All",
    "patterns.validation": "Validation",
    "patterns.text": "Text",
    "patterns.web": "Web",
    "patterns.number": "Numbers",
    "patterns.copy": "Copy",
    "patterns.copied": "Copied!",
    "tutorial.title": "Regex Case Tutorials",
    "tutorial.subtitle": "Master regex from simple to complex through real-world cases",
    "tutorial.simple": "Simple",
    "tutorial.medium": "Medium",
    "tutorial.complex": "Complex",
    "reference.title": "Complete Regex Reference",
    "reference.subtitle": "A comprehensive reference manual covering all regex syntax",
    "reference.syntax": "Syntax",
    "reference.description": "Description",
    "reference.example": "Example",
    "reference.basics": "Basic Characters",
    "reference.quantifiers": "Quantifiers",
    "reference.anchors": "Anchors & Boundaries",
    "reference.groups": "Groups & References",
    "reference.charclass": "Character Classes",
    "reference.lookaround": "Lookahead & Lookbehind",
    "reference.flags": "Flags / Modifiers",
    "reference.special": "Special Characters",
    "reference.greedy": "Greedy & Lazy",
  }
};

let currentLang = localStorage.getItem('regex-tool-lang') || 'zh';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });
  // Update html lang
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  // Update lang toggle label
  const label = document.getElementById('langLabel');
  if (label) label.textContent = currentLang === 'zh' ? 'EN' : '中文';
}

function toggleLang() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  localStorage.setItem('regex-tool-lang', currentLang);
  applyTranslations();
  // Dispatch event for dynamic content
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.addEventListener('click', toggleLang);
});
