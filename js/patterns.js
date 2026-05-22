// Patterns data and rendering
const patternsData = [
  {
    category: "validation",
    patterns: [
      { name: { zh: "邮箱地址", en: "Email Address" }, regex: "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$", desc: { zh: "匹配标准邮箱格式", en: "Matches standard email format" } },
      { name: { zh: "手机号码(中国)", en: "Phone (China)" }, regex: "^1[3-9]\\d{9}$", desc: { zh: "匹配中国大陆手机号", en: "Matches Chinese mobile numbers" } },
      { name: { zh: "身份证号", en: "ID Card (China)" }, regex: "^\\d{17}[\\dXx]$", desc: { zh: "匹配18位身份证号码", en: "Matches 18-digit Chinese ID" } },
      { name: { zh: "邮政编码(中国)", en: "Postal Code (China)" }, regex: "^\\d{6}$", desc: { zh: "匹配6位邮政编码", en: "Matches 6-digit postal code" } },
      { name: { zh: "用户名", en: "Username" }, regex: "^[a-zA-Z][a-zA-Z0-9_]{3,15}$", desc: { zh: "字母开头, 4-16位字母数字下划线", en: "Letter start, 4-16 chars alphanumeric" } },
      { name: { zh: "强密码", en: "Strong Password" }, regex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).{8,}$", desc: { zh: "至少8位,包含大小写字母、数字和特殊字符", en: "Min 8 chars, uppercase, lowercase, digit, special char" } },
      { name: { zh: "日期 YYYY-MM-DD", en: "Date YYYY-MM-DD" }, regex: "^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$", desc: { zh: "匹配ISO日期格式", en: "Matches ISO date format" } },
      { name: { zh: "时间 HH:MM:SS", en: "Time HH:MM:SS" }, regex: "^([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d$", desc: { zh: "匹配24小时制时间", en: "Matches 24-hour time format" } },
    ]
  },
  {
    category: "web",
    patterns: [
      { name: { zh: "URL", en: "URL" }, regex: "https?://[\\w.-]+(?:\\.[a-zA-Z]{2,})(?:/[^\\s]*)?", desc: { zh: "匹配HTTP/HTTPS网址", en: "Matches HTTP/HTTPS URLs" } },
      { name: { zh: "IPv4 地址", en: "IPv4 Address" }, regex: "^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$", desc: { zh: "匹配IPv4地址", en: "Matches IPv4 address" } },
      { name: { zh: "HTML标签", en: "HTML Tag" }, regex: "<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*>.*?</\\1>", desc: { zh: "匹配HTML标签对", en: "Matches HTML tag pairs" } },
      { name: { zh: "域名", en: "Domain Name" }, regex: "^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.[a-zA-Z]{2,}$", desc: { zh: "匹配有效域名", en: "Matches valid domain names" } },
      { name: { zh: "十六进制颜色", en: "Hex Color" }, regex: "^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$", desc: { zh: "匹配CSS颜色代码", en: "Matches CSS hex color codes" } },
      { name: { zh: "MAC地址", en: "MAC Address" }, regex: "^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$", desc: { zh: "匹配MAC地址格式", en: "Matches MAC address format" } },
    ]
  },
  {
    category: "number",
    patterns: [
      { name: { zh: "整数", en: "Integer" }, regex: "^-?\\d+$", desc: { zh: "匹配正负整数", en: "Matches positive/negative integers" } },
      { name: { zh: "浮点数", en: "Float" }, regex: "^-?\\d+\\.\\d+$", desc: { zh: "匹配浮点数", en: "Matches floating point numbers" } },
      { name: { zh: "正整数", en: "Positive Integer" }, regex: "^[1-9]\\d*$", desc: { zh: "匹配大于0的整数", en: "Matches integers > 0" } },
      { name: { zh: "金额(两位小数)", en: "Currency" }, regex: "^\\d+(\\.\\d{1,2})?$", desc: { zh: "匹配金额格式", en: "Matches currency format" } },
      { name: { zh: "百分比", en: "Percentage" }, regex: "^(100|[1-9]?\\d)(\\.\\d{1,2})?%$", desc: { zh: "匹配0-100%的百分比", en: "Matches 0-100% percentage" } },
      { name: { zh: "科学计数法", en: "Scientific Notation" }, regex: "^-?\\d+(\\.\\d+)?[eE][+-]?\\d+$", desc: { zh: "匹配科学计数法表示", en: "Matches scientific notation" } },
    ]
  },
  {
    category: "text",
    patterns: [
      { name: { zh: "中文字符", en: "Chinese Characters" }, regex: "[\\u4e00-\\u9fa5]+", desc: { zh: "匹配连续中文字符", en: "Matches consecutive Chinese chars" } },
      { name: { zh: "空白行", en: "Blank Lines" }, regex: "^\\s*$", desc: { zh: "匹配空白行(多行模式)", en: "Matches blank lines (multiline)" } },
      { name: { zh: "首尾空格", en: "Leading/Trailing Spaces" }, regex: "^\\s+|\\s+$", desc: { zh: "匹配字符串首尾空格", en: "Matches leading/trailing whitespace" } },
      { name: { zh: "重复单词", en: "Duplicate Words" }, regex: "\\b(\\w+)\\s+\\1\\b", desc: { zh: "匹配连续重复单词", en: "Matches consecutive duplicate words" } },
      { name: { zh: "驼峰命名", en: "CamelCase" }, regex: "^[a-z][a-zA-Z0-9]*$", desc: { zh: "匹配小驼峰命名", en: "Matches lowerCamelCase" } },
      { name: { zh: "文件扩展名", en: "File Extension" }, regex: "\\.[a-zA-Z0-9]+$", desc: { zh: "匹配文件扩展名", en: "Matches file extensions" } },
    ]
  }
];

const categoryLabels = {
  all: { zh: "全部", en: "All" },
  validation: { zh: "数据验证", en: "Validation" },
  web: { zh: "Web相关", en: "Web" },
  number: { zh: "数字相关", en: "Numbers" },
  text: { zh: "文本处理", en: "Text" }
};

let activeFilter = 'all';

function renderPatterns() {
  const container = document.getElementById('patternsContent');
  const tabsContainer = document.getElementById('filterTabs');
  if (!container || !tabsContainer) return;

  // Render filter tabs
  tabsContainer.innerHTML = Object.keys(categoryLabels).map(key =>
    `<button class="filter-tab ${activeFilter === key ? 'active' : ''}" data-filter="${key}">${categoryLabels[key][currentLang]}</button>`
  ).join('');

  // Add tab click listeners
  tabsContainer.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeFilter = tab.dataset.filter;
      renderPatterns();
    });
  });

  // Filter and render patterns
  const filtered = activeFilter === 'all'
    ? patternsData
    : patternsData.filter(c => c.category === activeFilter);

  container.innerHTML = filtered.map(cat => `
    <div class="pattern-category">
      <h3 class="category-title">${categoryLabels[cat.category][currentLang]}</h3>
      <div class="patterns-list">
        ${cat.patterns.map(p => `
          <div class="pattern-item">
            <div class="pattern-name">${p.name[currentLang]}</div>
            <div class="pattern-regex">
              <code>${escapeHtmlPatterns(p.regex)}</code>
              <button class="copy-btn" onclick="copyPattern(this, '${escapeForJs(p.regex)}')">${currentLang === 'zh' ? '复制' : 'Copy'}</button>
            </div>
            <div class="pattern-desc">${p.desc[currentLang]}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function escapeHtmlPatterns(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function escapeForJs(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function copyPattern(btn, text) {
  // Unescape the double-escaped backslashes for clipboard
  const actual = text.replace(/\\\\/g, '\\');
  copyToClipboard(actual);
  const origText = btn.textContent;
  btn.textContent = currentLang === 'zh' ? '已复制!' : 'Copied!';
  btn.classList.add('copied');
  setTimeout(() => {
    btn.textContent = origText;
    btn.classList.remove('copied');
  }, 1500);
}

document.addEventListener('DOMContentLoaded', renderPatterns);
window.addEventListener('langchange', renderPatterns);
