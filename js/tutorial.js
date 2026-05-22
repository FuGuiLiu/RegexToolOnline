// Tutorial data and rendering
const tutorials = [
  {
    level: "simple",
    title: { zh: "简单案例", en: "Simple Cases" },
    cases: [
      {
        title: { zh: "匹配数字", en: "Match Digits" },
        desc: { zh: "使用 \\d 匹配任意数字字符", en: "Use \\d to match any digit character" },
        regex: "\\d+",
        testText: "I have 3 cats and 12 dogs",
        explanation: {
          zh: "\\d 匹配一个数字(0-9)，+ 表示一个或多个。所以 \\d+ 会匹配连续的数字序列。",
          en: "\\d matches a digit (0-9), + means one or more. So \\d+ matches consecutive digit sequences."
        }
      },
      {
        title: { zh: "匹配单词", en: "Match Words" },
        desc: { zh: "使用 \\w+ 匹配单词字符序列", en: "Use \\w+ to match word character sequences" },
        regex: "\\w+",
        testText: "Hello World 123",
        explanation: {
          zh: "\\w 匹配字母、数字或下划线，相当于 [a-zA-Z0-9_]。\\w+ 匹配一个或多个这样的字符。",
          en: "\\w matches letters, digits or underscore, equivalent to [a-zA-Z0-9_]. \\w+ matches one or more."
        }
      },
      {
        title: { zh: "匹配特定字符串", en: "Match Specific String" },
        desc: { zh: "直接使用字面量文本匹配", en: "Use literal text for exact matching" },
        regex: "hello",
        testText: "Say hello to the world, hello everyone!",
        explanation: {
          zh: "最简单的正则就是直接匹配字面量文本。正则 hello 会匹配文本中所有出现的 \"hello\"。",
          en: "The simplest regex is literal text matching. The regex 'hello' matches all occurrences of \"hello\"."
        }
      },
      {
        title: { zh: "匹配空白字符", en: "Match Whitespace" },
        desc: { zh: "使用 \\s 匹配空格、制表符等", en: "Use \\s to match spaces, tabs, etc." },
        regex: "\\s+",
        testText: "Hello   World\tTab",
        explanation: {
          zh: "\\s 匹配任何空白字符(空格、制表符、换行符等)。\\s+ 匹配一个或多个连续空白。",
          en: "\\s matches any whitespace (space, tab, newline, etc.). \\s+ matches one or more consecutive whitespace."
        }
      },
      {
        title: { zh: "字符集合", en: "Character Sets" },
        desc: { zh: "使用 [...] 匹配指定集合中的字符", en: "Use [...] to match characters from a set" },
        regex: "[aeiou]",
        testText: "Regular Expressions are powerful",
        explanation: {
          zh: "[aeiou] 匹配方括号中的任意一个字符，这里匹配所有元音字母。",
          en: "[aeiou] matches any single character in the brackets, here it matches all vowels."
        }
      }
    ]
  },
  {
    level: "medium",
    title: { zh: "中等案例", en: "Medium Cases" },
    cases: [
      {
        title: { zh: "提取邮箱", en: "Extract Emails" },
        desc: { zh: "从文本中提取邮箱地址", en: "Extract email addresses from text" },
        regex: "[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}",
        testText: "Contact: john@example.com, support@my-site.org",
        explanation: {
          zh: "[\\w.-]+ 匹配邮箱用户名部分（字母、数字、点、横线），@ 匹配@符号，后面匹配域名部分。\\.[a-zA-Z]{2,} 匹配顶级域名。",
          en: "[\\w.-]+ matches the username part (letters, digits, dots, hyphens), @ matches the @ symbol, followed by the domain. \\.[a-zA-Z]{2,} matches the TLD."
        }
      },
      {
        title: { zh: "分组捕获", en: "Group Capture" },
        desc: { zh: "使用 () 捕获分组提取信息", en: "Use () to capture groups and extract info" },
        regex: "(\\d{4})-(\\d{2})-(\\d{2})",
        testText: "Date: 2024-03-15, Updated: 2024-12-01",
        explanation: {
          zh: "圆括号 () 创建捕获分组。(\\d{4}) 捕获年份，(\\d{2}) 分别捕获月和日。可以用 $1, $2, $3 引用各组。",
          en: "Parentheses () create capture groups. (\\d{4}) captures the year, (\\d{2}) captures month and day. Use $1, $2, $3 to reference groups."
        }
      },
      {
        title: { zh: "非贪婪匹配", en: "Non-greedy Matching" },
        desc: { zh: "使用 ? 使量词变为非贪婪模式", en: "Use ? to make quantifiers non-greedy" },
        regex: "<.+?>",
        testText: "<div>Hello</div><p>World</p>",
        explanation: {
          zh: "默认情况下 .+ 是贪婪的，会尽可能多匹配。加上 ? 变为 .+? 后，会尽可能少匹配，这样能正确匹配单个HTML标签。",
          en: "By default .+ is greedy, matching as much as possible. Adding ? makes it .+? (non-greedy), matching as little as possible to correctly match individual HTML tags."
        }
      },
      {
        title: { zh: "或运算符", en: "OR Operator" },
        desc: { zh: "使用 | 匹配多个选项之一", en: "Use | to match one of multiple options" },
        regex: "cat|dog|bird",
        testText: "I have a cat, my friend has a dog, she has a bird",
        explanation: {
          zh: "| 是或运算符，cat|dog|bird 会匹配 \"cat\" 或 \"dog\" 或 \"bird\" 中的任何一个。",
          en: "| is the OR operator. cat|dog|bird matches any of \"cat\", \"dog\", or \"bird\"."
        }
      },
      {
        title: { zh: "边界匹配", en: "Boundary Matching" },
        desc: { zh: "使用 \\b 匹配单词边界", en: "Use \\b to match word boundaries" },
        regex: "\\bcat\\b",
        testText: "The cat sat on the mat, not concatenate",
        explanation: {
          zh: "\\b 匹配单词边界（字母与非字母之间的位置）。\\bcat\\b 只匹配独立的 \"cat\" 单词，不会匹配 \"concatenate\" 中的 \"cat\"。",
          en: "\\b matches word boundaries (position between word and non-word chars). \\bcat\\b only matches the standalone word \"cat\", not \"cat\" in \"concatenate\"."
        }
      }
    ]
  },
  {
    level: "complex",
    title: { zh: "复杂案例", en: "Complex Cases" },
    cases: [
      {
        title: { zh: "密码强度验证", en: "Password Strength Validation" },
        desc: { zh: "使用前瞻断言验证密码复杂度", en: "Use lookaheads to validate password complexity" },
        regex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).{8,}$",
        testText: "Weak1\nStrong@Pass1\nnospecial1A\nMyP@ss1234",
        explanation: {
          zh: "使用多个正向前瞻 (?=...) 来确保密码包含各种字符类型：(?=.*[a-z]) 确保有小写字母，(?=.*[A-Z]) 确保有大写字母，(?=.*\\d) 确保有数字，(?=.*[!@#$%^&*]) 确保有特殊字符。.{8,} 要求至少8个字符。",
          en: "Multiple positive lookaheads (?=...) ensure the password contains various character types: (?=.*[a-z]) ensures lowercase, (?=.*[A-Z]) ensures uppercase, (?=.*\\d) ensures digit, (?=.*[!@#$%^&*]) ensures special char. .{8,} requires at least 8 characters."
        }
      },
      {
        title: { zh: "URL解析", en: "URL Parsing" },
        desc: { zh: "使用分组提取URL各部分", en: "Use groups to extract URL components" },
        regex: "(https?)://([^/:]+)(:\\d+)?(/[^?#]*)?(\\?[^#]*)?(#.*)?",
        testText: "https://www.example.com:8080/path/page?key=value#section",
        explanation: {
          zh: "每个括号分组捕获URL的一部分：$1=协议(http/https)，$2=主机名，$3=端口号(可选)，$4=路径(可选)，$5=查询字符串(可选)，$6=锚点(可选)。",
          en: "Each parenthesized group captures a URL part: $1=protocol, $2=hostname, $3=port (optional), $4=path (optional), $5=query string (optional), $6=hash (optional)."
        }
      },
      {
        title: { zh: "后顾断言提取", en: "Lookbehind Extraction" },
        desc: { zh: "使用后顾断言提取特定模式后的内容", en: "Use lookbehind to extract content after a pattern" },
        regex: "(?<=price:\\s*)\\d+\\.?\\d*",
        testText: "item price: 29.99, total price: 159.50, count: 3",
        explanation: {
          zh: "(?<=price:\\s*) 是正向后顾断言，它匹配前面是 \"price:\" 加任意空格的位置，但不包含在匹配结果中。所以只提取出价格数字。",
          en: "(?<=price:\\s*) is a positive lookbehind that matches positions preceded by \"price:\" plus optional spaces, without including it in the match. So only the price numbers are extracted."
        }
      },
      {
        title: { zh: "嵌套括号匹配", en: "Balanced Content Extraction" },
        desc: { zh: "提取括号内的内容（非嵌套）", en: "Extract content within parentheses (non-nested)" },
        regex: "\\(([^()]+)\\)",
        testText: "func(arg1, arg2) and calc(x + y) then log(message)",
        explanation: {
          zh: "\\( 和 \\) 匹配字面量括号。[^()]+ 匹配一个或多个非括号字符。外层的捕获分组 () 将括号内容捕获为 $1。",
          en: "\\( and \\) match literal parentheses. [^()]+ matches one or more non-parenthesis characters. The outer capture group () captures the content as $1."
        }
      },
      {
        title: { zh: "条件替换(驼峰转下划线)", en: "CamelCase to Snake Case" },
        desc: { zh: "将驼峰命名转为下划线命名", en: "Convert camelCase to snake_case" },
        regex: "([a-z])([A-Z])",
        testText: "getUserName convertToJSON myHTTPClient",
        explanation: {
          zh: "匹配一个小写字母后跟一个大写字母的位置。替换时使用 $1_$2，在两个字母之间插入下划线，再转为小写就得到 snake_case。替换串: $1_$2",
          en: "Matches a lowercase letter followed by an uppercase letter. Replace with $1_$2 to insert underscore between them, then lowercase for snake_case. Replace with: $1_$2"
        }
      }
    ]
  }
];

function renderTutorials() {
  const container = document.getElementById('tutorialContent');
  if (!container) return;

  const levelLabels = {
    simple: { zh: "简单", en: "Simple", class: "level-simple" },
    medium: { zh: "中等", en: "Medium", class: "level-medium" },
    complex: { zh: "复杂", en: "Complex", class: "level-complex" }
  };

  container.innerHTML = tutorials.map(section => `
    <div class="tutorial-section">
      <span class="tutorial-level ${levelLabels[section.level].class}">${levelLabels[section.level][currentLang]}</span>
      <h2 class="tutorial-title">${section.title[currentLang]}</h2>
      ${section.cases.map(c => `
        <div class="tutorial-card">
          <h4>${c.title[currentLang]}</h4>
          <p>${c.desc[currentLang]}</p>
          <div class="tutorial-code">
<span class="comment">// ${currentLang === 'zh' ? '正则' : 'Regex'}:</span>
<span class="regex">/${c.regex}/g</span>

<span class="comment">// ${currentLang === 'zh' ? '测试文本' : 'Test text'}:</span>
${escapeHtmlTutorial(c.testText)}

<span class="comment">// ${currentLang === 'zh' ? '匹配结果' : 'Matches'}:</span>
<span class="match">${getMatches(c.regex, c.testText)}</span>
          </div>
          <p><strong>${currentLang === 'zh' ? '解释' : 'Explanation'}:</strong> ${c.explanation[currentLang]}</p>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function escapeHtmlTutorial(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function getMatches(pattern, text) {
  try {
    const regex = new RegExp(pattern, 'g');
    const matches = text.match(regex);
    if (matches) {
      return matches.map(m => `"${escapeHtmlTutorial(m)}"`).join(', ');
    }
    return currentLang === 'zh' ? '无匹配' : 'No match';
  } catch(e) {
    return 'Error';
  }
}

document.addEventListener('DOMContentLoaded', renderTutorials);
window.addEventListener('langchange', renderTutorials);
