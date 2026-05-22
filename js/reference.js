// Reference data
const referenceData = [
  {
    id: "basics",
    title: { zh: "基础字符", en: "Basic Characters" },
    items: [
      { syntax: ".", desc: { zh: "匹配除换行符外的任意单个字符", en: "Matches any character except newline" }, example: "a.c → abc, a1c, a c" },
      { syntax: "\\d", desc: { zh: "匹配任意数字 [0-9]", en: "Matches any digit [0-9]" }, example: "\\d\\d → 42, 99" },
      { syntax: "\\D", desc: { zh: "匹配任意非数字字符", en: "Matches any non-digit character" }, example: "\\D+ → abc, #@!" },
      { syntax: "\\w", desc: { zh: "匹配字母、数字或下划线 [a-zA-Z0-9_]", en: "Matches word character [a-zA-Z0-9_]" }, example: "\\w+ → hello, var_1" },
      { syntax: "\\W", desc: { zh: "匹配非单词字符", en: "Matches non-word character" }, example: "\\W → @, #, !" },
      { syntax: "\\s", desc: { zh: "匹配空白字符(空格、制表符、换行)", en: "Matches whitespace (space, tab, newline)" }, example: "a\\sb → a b, a\\tb" },
      { syntax: "\\S", desc: { zh: "匹配非空白字符", en: "Matches non-whitespace character" }, example: "\\S+ → hello" },
      { syntax: "\\n", desc: { zh: "匹配换行符", en: "Matches newline" }, example: "line1\\nline2" },
      { syntax: "\\t", desc: { zh: "匹配制表符", en: "Matches tab character" }, example: "col1\\tcol2" },
      { syntax: "\\\\", desc: { zh: "匹配反斜杠字面量", en: "Matches literal backslash" }, example: "C:\\\\ → C:\\" },
    ]
  },
  {
    id: "quantifiers",
    title: { zh: "量词", en: "Quantifiers" },
    items: [
      { syntax: "*", desc: { zh: "匹配前面的元素零次或多次", en: "Zero or more of the preceding element" }, example: "ab*c → ac, abc, abbc" },
      { syntax: "+", desc: { zh: "匹配前面的元素一次或多次", en: "One or more of the preceding element" }, example: "ab+c → abc, abbc" },
      { syntax: "?", desc: { zh: "匹配前面的元素零次或一次", en: "Zero or one of the preceding element" }, example: "colou?r → color, colour" },
      { syntax: "{n}", desc: { zh: "精确匹配n次", en: "Exactly n times" }, example: "\\d{3} → 123, 456" },
      { syntax: "{n,}", desc: { zh: "匹配至少n次", en: "At least n times" }, example: "\\d{2,} → 12, 123, 1234" },
      { syntax: "{n,m}", desc: { zh: "匹配n到m次", en: "Between n and m times" }, example: "\\d{2,4} → 12, 123, 1234" },
    ]
  },
  {
    id: "anchors",
    title: { zh: "锚点与边界", en: "Anchors & Boundaries" },
    items: [
      { syntax: "^", desc: { zh: "匹配字符串/行的开头", en: "Start of string/line" }, example: "^Hello → Hello..." },
      { syntax: "$", desc: { zh: "匹配字符串/行的结尾", en: "End of string/line" }, example: "end$ → ...end" },
      { syntax: "\\b", desc: { zh: "匹配单词边界", en: "Word boundary" }, example: "\\bcat\\b → cat (not concatenate)" },
      { syntax: "\\B", desc: { zh: "匹配非单词边界", en: "Non-word boundary" }, example: "\\Bcat\\B → concatenate中的cat" },
    ]
  },
  {
    id: "charclass",
    title: { zh: "字符类", en: "Character Classes" },
    items: [
      { syntax: "[abc]", desc: { zh: "匹配方括号中的任意一个字符", en: "Match any one character in brackets" }, example: "[aeiou] → 匹配元音" },
      { syntax: "[^abc]", desc: { zh: "匹配不在方括号中的字符", en: "Match any character NOT in brackets" }, example: "[^0-9] → 非数字" },
      { syntax: "[a-z]", desc: { zh: "匹配字符范围(a到z)", en: "Character range (a to z)" }, example: "[a-z]+ → hello" },
      { syntax: "[A-Z]", desc: { zh: "匹配大写字母范围", en: "Uppercase letter range" }, example: "[A-Z] → H, W" },
      { syntax: "[0-9]", desc: { zh: "匹配数字范围", en: "Digit range" }, example: "[0-9]+ → 123" },
      { syntax: "[a-zA-Z0-9]", desc: { zh: "匹配字母和数字", en: "Alphanumeric characters" }, example: "等同于 \\w (不含_)" },
      { syntax: "[\\u4e00-\\u9fa5]", desc: { zh: "匹配中文字符", en: "Match Chinese characters" }, example: "你好世界" },
    ]
  },
  {
    id: "groups",
    title: { zh: "分组与引用", en: "Groups & References" },
    items: [
      { syntax: "(abc)", desc: { zh: "捕获分组，将abc作为一个整体", en: "Capture group, treats abc as a unit" }, example: "(ha)+ → haha" },
      { syntax: "(?:abc)", desc: { zh: "非捕获分组，不保存匹配", en: "Non-capture group, no saving" }, example: "(?:ab)+ → abab" },
      { syntax: "(?<name>abc)", desc: { zh: "命名捕获分组", en: "Named capture group" }, example: "(?<year>\\d{4})" },
      { syntax: "\\1, \\2", desc: { zh: "反向引用第n个捕获组", en: "Backreference to nth group" }, example: "(\\w+)\\s\\1 → hello hello" },
      { syntax: "$1, $2", desc: { zh: "替换时引用第n个捕获组", en: "Reference nth group in replacement" }, example: "替换: $1-$2" },
      { syntax: "|", desc: { zh: "或运算符，匹配左边或右边", en: "OR operator, match left or right" }, example: "cat|dog → cat 或 dog" },
    ]
  },
  {
    id: "lookaround",
    title: { zh: "前瞻与后顾", en: "Lookahead & Lookbehind" },
    items: [
      { syntax: "(?=abc)", desc: { zh: "正向前瞻：后面是abc时匹配", en: "Positive lookahead: followed by abc" }, example: "\\d(?=px) → 12px中的12" },
      { syntax: "(?!abc)", desc: { zh: "负向前瞻：后面不是abc时匹配", en: "Negative lookahead: NOT followed by abc" }, example: "\\d(?!px) → 12em中的12" },
      { syntax: "(?<=abc)", desc: { zh: "正向后顾：前面是abc时匹配", en: "Positive lookbehind: preceded by abc" }, example: "(?<=\\$)\\d+ → $100中的100" },
      { syntax: "(?<!abc)", desc: { zh: "负向后顾：前面不是abc时匹配", en: "Negative lookbehind: NOT preceded by abc" }, example: "(?<!\\$)\\d+ → 非$开头的数字" },
    ]
  },
  {
    id: "greedy",
    title: { zh: "贪婪与懒惰", en: "Greedy & Lazy" },
    items: [
      { syntax: ".*", desc: { zh: "贪婪：尽可能多地匹配", en: "Greedy: match as much as possible" }, example: "\".*\" in \"a\"b\"c\" → \"a\"b\"c\"" },
      { syntax: ".*?", desc: { zh: "懒惰：尽可能少地匹配", en: "Lazy: match as little as possible" }, example: "\".*?\" in \"a\"b\"c\" → \"a\"" },
      { syntax: "+?", desc: { zh: "懒惰版的 +", en: "Lazy version of +" }, example: "\\d+? → 第一个数字" },
      { syntax: "??", desc: { zh: "懒惰版的 ?", en: "Lazy version of ?" }, example: "优先不匹配" },
      { syntax: "{n,m}?", desc: { zh: "懒惰版的 {n,m}", en: "Lazy version of {n,m}" }, example: "\\d{2,4}? → 只匹配2位" },
    ]
  },
  {
    id: "flags",
    title: { zh: "标志/修饰符", en: "Flags / Modifiers" },
    items: [
      { syntax: "g", desc: { zh: "全局匹配：查找所有匹配而非第一个", en: "Global: find all matches, not just first" }, example: "/\\d+/g → 匹配所有数字" },
      { syntax: "i", desc: { zh: "不区分大小写", en: "Case-insensitive matching" }, example: "/hello/i → Hello, HELLO" },
      { syntax: "m", desc: { zh: "多行模式：^ $ 匹配每行的开头结尾", en: "Multiline: ^ $ match line start/end" }, example: "/^line/m → 每行开头" },
      { syntax: "s", desc: { zh: "单行模式：点 . 匹配包括换行符", en: "Dotall: dot matches newline too" }, example: "/a.b/s → a\\nb" },
      { syntax: "u", desc: { zh: "Unicode模式：正确处理Unicode字符", en: "Unicode: proper Unicode handling" }, example: "/\\u{1F600}/u" },
      { syntax: "y", desc: { zh: "粘性匹配：从lastIndex位置开始匹配", en: "Sticky: match from lastIndex position" }, example: "从指定位置匹配" },
    ]
  },
  {
    id: "special",
    title: { zh: "特殊字符转义", en: "Special Characters" },
    items: [
      { syntax: "\\.", desc: { zh: "匹配字面量点号", en: "Literal dot" }, example: "file\\.txt" },
      { syntax: "\\*", desc: { zh: "匹配字面量星号", en: "Literal asterisk" }, example: "5\\*3" },
      { syntax: "\\+", desc: { zh: "匹配字面量加号", en: "Literal plus" }, example: "1\\+1" },
      { syntax: "\\?", desc: { zh: "匹配字面量问号", en: "Literal question mark" }, example: "why\\?" },
      { syntax: "\\(\\)", desc: { zh: "匹配字面量括号", en: "Literal parentheses" }, example: "func\\(\\)" },
      { syntax: "\\[\\]", desc: { zh: "匹配字面量方括号", en: "Literal square brackets" }, example: "arr\\[0\\]" },
      { syntax: "\\{\\}", desc: { zh: "匹配字面量花括号", en: "Literal curly braces" }, example: "obj\\{\\}" },
      { syntax: "\\^", desc: { zh: "匹配字面量脱字符", en: "Literal caret" }, example: "\\^start" },
      { syntax: "\\$", desc: { zh: "匹配字面量美元符", en: "Literal dollar sign" }, example: "\\$100" },
      { syntax: "\\|", desc: { zh: "匹配字面量管道符", en: "Literal pipe" }, example: "a\\|b" },
    ]
  }
];

function renderReference() {
  const navContainer = document.getElementById('refNav');
  const contentContainer = document.getElementById('referenceContent');
  if (!navContainer || !contentContainer) return;

  // Render navigation
  navContainer.innerHTML = `<div class="ref-nav-links">
    ${referenceData.map(section => 
      `<a href="#${section.id}" class="ref-nav-link">${section.title[currentLang]}</a>`
    ).join('')}
  </div>`;

  // Render content
  const syntaxLabel = currentLang === 'zh' ? '语法' : 'Syntax';
  const descLabel = currentLang === 'zh' ? '说明' : 'Description';
  const exampleLabel = currentLang === 'zh' ? '示例' : 'Example';

  contentContainer.innerHTML = referenceData.map(section => `
    <div class="ref-section" id="${section.id}">
      <h2 class="ref-section-title">${section.title[currentLang]}</h2>
      <table class="ref-table">
        <thead>
          <tr><th>${syntaxLabel}</th><th>${descLabel}</th><th>${exampleLabel}</th></tr>
        </thead>
        <tbody>
          ${section.items.map(item => `
            <tr>
              <td><code>${escapeHtmlRef(item.syntax)}</code></td>
              <td>${item.desc[currentLang]}</td>
              <td><code>${escapeHtmlRef(item.example)}</code></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `).join('');
}

function escapeHtmlRef(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

document.addEventListener('DOMContentLoaded', () => {
  renderReference();
  // Scroll top button
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
window.addEventListener('langchange', renderReference);
