// Regex Tester Logic
document.addEventListener('DOMContentLoaded', () => {
  const regexInput = document.getElementById('regexInput');
  const flagsInput = document.getElementById('flagsInput');
  const testText = document.getElementById('testText');
  const replaceInput = document.getElementById('replaceInput');
  const matchResult = document.getElementById('matchResult');
  const replaceResult = document.getElementById('replaceResult');
  const matchInfo = document.getElementById('matchInfo');
  const errorMsg = document.getElementById('errorMsg');
  const flagG = document.getElementById('flagG');
  const flagI = document.getElementById('flagI');
  const flagM = document.getElementById('flagM');
  const flagS = document.getElementById('flagS');

  function syncFlags() {
    let flags = '';
    if (flagG.checked) flags += 'g';
    if (flagI.checked) flags += 'i';
    if (flagM.checked) flags += 'm';
    if (flagS.checked) flags += 's';
    flagsInput.value = flags;
    runTest();
  }

  function syncCheckboxes() {
    const f = flagsInput.value;
    flagG.checked = f.includes('g');
    flagI.checked = f.includes('i');
    flagM.checked = f.includes('m');
    flagS.checked = f.includes('s');
  }

  [flagG, flagI, flagM, flagS].forEach(cb => cb.addEventListener('change', syncFlags));
  flagsInput.addEventListener('input', () => { syncCheckboxes(); runTest(); });
  regexInput.addEventListener('input', runTest);
  testText.addEventListener('input', runTest);
  replaceInput.addEventListener('input', runTest);

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function runTest() {
    const pattern = regexInput.value;
    const flags = flagsInput.value;
    const text = testText.value;
    const replacement = replaceInput.value;

    errorMsg.style.display = 'none';
    matchInfo.style.display = 'none';
    matchResult.innerHTML = '';
    replaceResult.textContent = '';

    if (!pattern || !text) {
      matchResult.innerHTML = '<span style="color:var(--color-text-muted)">—</span>';
      return;
    }

    let regex;
    try {
      regex = new RegExp(pattern, flags);
    } catch (e) {
      errorMsg.textContent = t('tester.invalidRegex') + ': ' + e.message;
      errorMsg.style.display = 'block';
      return;
    }

    // Find matches and highlight
    if (flags.includes('g')) {
      let result = '';
      let lastIndex = 0;
      let matchCount = 0;
      let match;
      // Reset lastIndex
      regex.lastIndex = 0;
      while ((match = regex.exec(text)) !== null) {
        matchCount++;
        result += escapeHtml(text.slice(lastIndex, match.index));
        result += '<span class="match-highlight">' + escapeHtml(match[0]) + '</span>';
        lastIndex = match.index + match[0].length;
        if (match[0].length === 0) {
          regex.lastIndex++;
        }
      }
      result += escapeHtml(text.slice(lastIndex));
      matchResult.innerHTML = result || escapeHtml(text);

      matchInfo.style.display = 'block';
      matchInfo.textContent = matchCount > 0
        ? t('tester.matchCount').replace('{count}', matchCount)
        : t('tester.noMatch');
    } else {
      const match = regex.exec(text);
      if (match) {
        let result = escapeHtml(text.slice(0, match.index));
        result += '<span class="match-highlight">' + escapeHtml(match[0]) + '</span>';
        result += escapeHtml(text.slice(match.index + match[0].length));
        matchResult.innerHTML = result;
        matchInfo.style.display = 'block';
        matchInfo.textContent = t('tester.matchCount').replace('{count}', '1');
      } else {
        matchResult.innerHTML = escapeHtml(text);
        matchInfo.style.display = 'block';
        matchInfo.textContent = t('tester.noMatch');
      }
    }

    // Replace
    if (replacement !== '') {
      try {
        replaceResult.textContent = text.replace(regex, replacement);
      } catch(e) {
        replaceResult.textContent = '';
      }
    }
  }

  // Re-run on language change (for info text)
  window.addEventListener('langchange', runTest);

  // Pre-fill example
  regexInput.value = '\\b\\w+@\\w+\\.\\w+\\b';
  testText.value = 'Contact us at hello@example.com or support@regex.org for help.';
  runTest();
});
