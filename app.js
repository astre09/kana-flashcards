const kanaRows = [
  { id: 'a', label: 'A row', items: [['あ','ア','a'],['い','イ','i'],['う','ウ','u'],['え','エ','e'],['お','オ','o']] },
  { id: 'ka', label: 'KA row', items: [['か','カ','ka'],['き','キ','ki'],['く','ク','ku'],['け','ケ','ke'],['こ','コ','ko']] },
  { id: 'sa', label: 'SA row', items: [['さ','サ','sa'],['し','シ','shi'],['す','ス','su'],['せ','セ','se'],['そ','ソ','so']] },
  { id: 'ta', label: 'TA row', items: [['た','タ','ta'],['ち','チ','chi'],['つ','ツ','tsu'],['て','テ','te'],['と','ト','to']] },
  { id: 'na', label: 'NA row', items: [['な','ナ','na'],['に','ニ','ni'],['ぬ','ヌ','nu'],['ね','ネ','ne'],['の','ノ','no']] },
  { id: 'ha', label: 'HA row', items: [['は','ハ','ha'],['ひ','ヒ','hi'],['ふ','フ','fu'],['へ','ヘ','he'],['ほ','ホ','ho']] },
  { id: 'ma', label: 'MA row', items: [['ま','マ','ma'],['み','ミ','mi'],['む','ム','mu'],['め','メ','me'],['も','モ','mo']] },
  { id: 'ya', label: 'YA row', items: [['や','ヤ','ya'],['ゆ','ユ','yu'],['よ','ヨ','yo']] },
  { id: 'ra', label: 'RA row', items: [['ら','ラ','ra'],['り','リ','ri'],['る','ル','ru'],['れ','レ','re'],['ろ','ロ','ro']] },
  { id: 'wa', label: 'WA row', items: [['わ','ワ','wa'],['を','ヲ','wo']] },
  { id: 'n', label: 'N', items: [['ん','ン','n']] },
  { id: 'ga', label: 'GA row', category: 'Dakuten', items: [['が','ガ','ga'],['ぎ','ギ','gi'],['ぐ','グ','gu'],['げ','ゲ','ge'],['ご','ゴ','go']] },
  { id: 'za', label: 'ZA row', category: 'Dakuten', items: [['ざ','ザ','za'],['じ','ジ','ji'],['ず','ズ','zu'],['ぜ','ゼ','ze'],['ぞ','ゾ','zo']] },
  { id: 'da', label: 'DA row', category: 'Dakuten', items: [['だ','ダ','da'],['ぢ','ヂ','ji'],['づ','ヅ','zu'],['で','デ','de'],['ど','ド','do']] },
  { id: 'ba', label: 'BA row', category: 'Dakuten', items: [['ば','バ','ba'],['び','ビ','bi'],['ぶ','ブ','bu'],['べ','ベ','be'],['ぼ','ボ','bo']] },
  { id: 'pa', label: 'PA row', category: 'Handakuten', items: [['ぱ','パ','pa'],['ぴ','ピ','pi'],['ぷ','プ','pu'],['ぺ','ペ','pe'],['ぽ','ポ','po']] },
  { id: 'kya', label: 'KYA row', category: 'Yōon', items: [['きゃ','キャ','kya'],['きゅ','キュ','kyu'],['きょ','キョ','kyo']] },
  { id: 'sha', label: 'SHA row', category: 'Yōon', items: [['しゃ','シャ','sha'],['しゅ','シュ','shu'],['しょ','ショ','sho']] },
  { id: 'cha', label: 'CHA row', category: 'Yōon', items: [['ちゃ','チャ','cha'],['ちゅ','チュ','chu'],['ちょ','チョ','cho']] },
  { id: 'nya', label: 'NYA row', category: 'Yōon', items: [['にゃ','ニャ','nya'],['にゅ','ニュ','nyu'],['にょ','ニョ','nyo']] },
  { id: 'hya', label: 'HYA row', category: 'Yōon', items: [['ひゃ','ヒャ','hya'],['ひゅ','ヒュ','hyu'],['ひょ','ヒョ','hyo']] },
  { id: 'mya', label: 'MYA row', category: 'Yōon', items: [['みゃ','ミャ','mya'],['みゅ','ミュ','myu'],['みょ','ミョ','myo']] },
  { id: 'rya', label: 'RYA row', category: 'Yōon', items: [['りゃ','リャ','rya'],['りゅ','リュ','ryu'],['りょ','リョ','ryo']] },
  { id: 'gya', label: 'GYA row', category: 'Yōon', items: [['ぎゃ','ギャ','gya'],['ぎゅ','ギュ','gyu'],['ぎょ','ギョ','gyo']] },
  { id: 'ja', label: 'JA row', category: 'Yōon', items: [['じゃ','ジャ','ja'],['じゅ','ジュ','ju'],['じょ','ジョ','jo']] },
  { id: 'bya', label: 'BYA row', category: 'Yōon', items: [['びゃ','ビャ','bya'],['びゅ','ビュ','byu'],['びょ','ビョ','byo']] },
  { id: 'pya', label: 'PYA row', category: 'Yōon', items: [['ぴゃ','ピャ','pya'],['ぴゅ','ピュ','pyu'],['ぴょ','ピョ','pyo']] }
];

const state = {
  mode: 'hiragana',
  selected: new Map(),
  currentDeck: [],
  originalDeck: [],
  index: 0,
  correct: 0,
  wrong: 0,
  mistakes: [],
  revealed: false,
  answered: false,
  previousScreen: 'selectionScreen',
  statsOpenScripts: new Set(),
  statsOpenPerfect: new Set()
};

const $ = (id) => document.getElementById(id);
const screens = ['selectionScreen', 'testScreen', 'resultsScreen', 'statsScreen'];

function keyFor(card) {
  return `${card.script}:${card.kana}`;
}

function makeCard(row, tuple, script) {
  return {
    kana: script === 'Hiragana' ? tuple[0] : tuple[1],
    romaji: tuple[2],
    rowId: row.id,
    rowLabel: row.label,
    category: row.category || 'Basic',
    script
  };
}

function getCardsForScript(script) {
  return kanaRows.flatMap(row => row.items.map(tuple => makeCard(row, tuple, script)));
}

function getAllCards() {
  return [...getCardsForScript('Hiragana'), ...getCardsForScript('Katakana')];
}

function getVisibleScripts() {
  if (state.mode === 'hiragana') return ['Hiragana'];
  if (state.mode === 'katakana') return ['Katakana'];
  return ['Hiragana', 'Katakana'];
}

function getVisibleCards() {
  return getVisibleScripts().flatMap(getCardsForScript);
}

function getActiveScreen() {
  return screens.find(screenId => $(screenId).classList.contains('active')) || 'selectionScreen';
}

function showScreen(id) {
  screens.forEach(screenId => $(screenId).classList.toggle('active', screenId === id));
}

function getCellPositions(length) {
  if (length === 5) return [0, 1, 2, 3, 4];
  if (length === 3) return [0, 2, 4];
  if (length === 2) return [0, 4];
  return [0];
}

function categoryCards(category) {
  const rows = kanaRows.filter(row => (row.category || 'Basic') === category);
  return getVisibleScripts().flatMap(script =>
    rows.flatMap(row => row.items.map(tuple => makeCard(row, tuple, script)))
  );
}

function renderSelection() {
  const container = $('kanaGroups');
  container.innerHTML = '';
  const categories = [...new Set(kanaRows.map(row => row.category || 'Basic'))];

  categories.forEach(category => {
    const rows = kanaRows.filter(row => (row.category || 'Basic') === category);
    const cardsInCategory = categoryCards(category);
    const selectedInCategory = cardsInCategory.filter(card => state.selected.has(keyFor(card))).length;
    const allCategorySelected = cardsInCategory.length > 0 && selectedInCategory === cardsInCategory.length;

    const panel = document.createElement('section');
    panel.className = 'category-panel panel';

    const head = document.createElement('div');
    head.className = 'category-head';
    head.innerHTML = `
      <div>
        <h3>${category}</h3>
        <p>${category === 'Basic' ? 'Main kana grid.' : 'Extended kana set.'} ${selectedInCategory}/${cardsInCategory.length} selected.</p>
      </div>
    `;

    const categoryToggle = document.createElement('button');
    categoryToggle.type = 'button';
    categoryToggle.className = `category-toggle${allCategorySelected ? ' selected' : ''}`;
    categoryToggle.textContent = allCategorySelected ? `Clear ${category}` : `Select all ${category}`;
    categoryToggle.addEventListener('click', () => toggleCategory(category));
    head.appendChild(categoryToggle);
    panel.appendChild(head);

    const body = document.createElement('div');
    body.className = 'category-body';

    getVisibleScripts().forEach(script => {
      const section = document.createElement('div');
      section.className = 'script-section';

      const scriptCards = rows.flatMap(row => row.items.map(tuple => makeCard(row, tuple, script)));
      const scriptSelected = scriptCards.filter(card => state.selected.has(keyFor(card))).length;

      const title = document.createElement('div');
      title.className = 'script-title';
      title.innerHTML = `<h4>${script}</h4><span>${scriptSelected}/${scriptCards.length} selected</span>`;
      section.appendChild(title);

      const chart = document.createElement('div');
      chart.className = 'kana-chart';

      rows.forEach(row => {
        const rowCards = row.items.map(tuple => makeCard(row, tuple, script));
        const selectedInRow = rowCards.filter(card => state.selected.has(keyFor(card))).length;
        const allSelected = selectedInRow === rowCards.length;

        const rowEl = document.createElement('div');
        rowEl.className = 'chart-row';

        const rowToggle = document.createElement('button');
        rowToggle.type = 'button';
        rowToggle.className = `row-toggle${allSelected ? ' selected' : ''}`;
        rowToggle.innerHTML = `<strong>${row.label}</strong><small>${selectedInRow}/${rowCards.length} · ${allSelected ? 'Clear row' : 'Select row'}</small>`;
        rowToggle.addEventListener('click', () => toggleRow(row.id, script));
        rowEl.appendChild(rowToggle);

        const slots = new Array(5).fill(null);
        const positions = getCellPositions(row.items.length);
        rowCards.forEach((card, index) => { slots[positions[index]] = card; });

        slots.forEach(card => {
          if (!card) {
            const blank = document.createElement('div');
            blank.className = 'blank-cell';
            rowEl.appendChild(blank);
            return;
          }

          const button = document.createElement('button');
          button.type = 'button';
          button.className = `kana-option${state.selected.has(keyFor(card)) ? ' selected' : ''}`;
          button.innerHTML = `<span class="kana-char">${card.kana}</span><span class="kana-romaji">${card.romaji}</span>`;
          button.addEventListener('click', () => toggleCard(card));
          rowEl.appendChild(button);
        });

        chart.appendChild(rowEl);
      });

      section.appendChild(chart);
      body.appendChild(section);
    });

    panel.appendChild(body);
    container.appendChild(panel);
  });

  updateSelectionSummary();
}

function toggleCard(card) {
  const key = keyFor(card);
  if (state.selected.has(key)) state.selected.delete(key);
  else state.selected.set(key, card);
  renderSelection();
}

function toggleRow(rowId, script) {
  const row = kanaRows.find(item => item.id === rowId);
  if (!row) return;
  const cards = row.items.map(tuple => makeCard(row, tuple, script));
  const allSelected = cards.every(card => state.selected.has(keyFor(card)));

  cards.forEach(card => {
    if (allSelected) state.selected.delete(keyFor(card));
    else state.selected.set(keyFor(card), card);
  });

  renderSelection();
}

function toggleCategory(category) {
  const cards = categoryCards(category);
  const allSelected = cards.length > 0 && cards.every(card => state.selected.has(keyFor(card)));

  cards.forEach(card => {
    if (allSelected) state.selected.delete(keyFor(card));
    else state.selected.set(keyFor(card), card);
  });

  renderSelection();
}

function updateSelectionSummary() {
  const count = state.selected.size;
  $('selectedCount').textContent = count;
  $('floatingSelectedCount').textContent = count;
  $('startButton').disabled = count === 0;

  const label = count ? `Start ${count}-card test` : 'Start test';
  $('startButton').setAttribute('aria-label', label);
  $('startButton').setAttribute('title', label);
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startDeck(deck) {
  if (!deck.length) return;
  state.currentDeck = shuffle(deck.map(card => ({ ...card })));
  state.originalDeck = deck.map(card => ({ ...card }));
  state.index = 0;
  state.correct = 0;
  state.wrong = 0;
  state.mistakes = [];
  state.revealed = false;
  state.answered = false;
  showScreen('testScreen');
  renderCard();
}

function currentCard() {
  return state.currentDeck[state.index];
}

function renderCard() {
  const card = currentCard();
  if (!card) return finishTest();

  $('kanaDisplay').textContent = card.kana;
  $('scriptBadge').textContent = `${card.script} · ${card.category}`;
  $('answerReveal').textContent = card.romaji;
  $('answerReveal').classList.add('hidden');
  $('answerInput').value = '';
  $('answerInput').disabled = false;
  $('submitButton').disabled = false;
  $('feedback').textContent = '';
  $('feedback').className = 'feedback';
  state.revealed = false;
  state.answered = false;
  updateProgress();
  setTimeout(() => $('answerInput').focus(), 0);
}

function updateProgress() {
  const total = state.currentDeck.length;
  const completed = state.index;
  $('progressCurrent').textContent = completed;
  $('progressTotal').textContent = total;
  $('remainingCount').textContent = Math.max(total - completed, 0);
  $('wrongCount').textContent = state.wrong;
  $('correctCount').textContent = state.correct;
  $('progressBar').style.width = total ? `${(completed / total) * 100}%` : '0%';
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase().replace(/\s+/g, '');
}

function acceptedAnswers(card) {
  const answers = new Set([card.romaji]);
  if (card.romaji === 'shi') answers.add('si');
  if (card.romaji === 'chi') answers.add('ti');
  if (card.romaji === 'tsu') answers.add('tu');
  if (card.romaji === 'fu') answers.add('hu');
  if (card.kana === 'を' || card.kana === 'ヲ') answers.add('o');
  if (card.kana === 'ぢ' || card.kana === 'ヂ') answers.add('di');
  if (card.kana === 'づ' || card.kana === 'ヅ') answers.add('du');
  return [...answers];
}

function submitAnswer() {
  if (state.answered) return advanceCard();
  const card = currentCard();
  const answer = normalizeAnswer($('answerInput').value);
  if (!answer) return;

  const correct = acceptedAnswers(card).includes(answer);
  state.answered = true;
  $('answerInput').disabled = true;
  $('submitButton').disabled = true;
  $('answerReveal').classList.remove('hidden');

  if (correct && !state.revealed) {
    state.correct++;
    $('feedback').textContent = 'Correct';
    $('feedback').className = 'feedback correct';
    recordStat(card, 'correct');
  } else {
    state.wrong++;
    const reason = state.revealed ? 'revealed' : 'wrong';
    $('feedback').textContent = state.revealed ? 'Revealed — counted as incorrect' : `Incorrect — you entered “${answer}”`;
    $('feedback').className = 'feedback wrong';
    state.mistakes.push({ ...card, userAnswer: state.revealed ? null : answer, reason });
    recordStat(card, reason);
  }

  updateProgress();
  setTimeout(advanceCard, 650);
}

function revealAnswer() {
  if (state.answered || state.revealed) return;
  state.revealed = true;
  $('answerReveal').classList.remove('hidden');
  $('feedback').textContent = 'Revealed — this card will count as incorrect';
  $('feedback').className = 'feedback wrong';
  $('answerInput').focus();
}

function advanceCard() {
  if (!state.answered) return;
  state.index++;
  if (state.index >= state.currentDeck.length) finishTest();
  else renderCard();
}

function finishTest() {
  const total = state.currentDeck.length;
  const percent = total ? Math.round((state.correct / total) * 1000) / 10 : 0;
  $('resultsHeadline').textContent = `${state.correct} / ${total} correct`;
  $('resultsPercent').textContent = `${percent}%`;
  $('resultsDetail').textContent = state.mistakes.length ? `${state.mistakes.length} card${state.mistakes.length === 1 ? '' : 's'} to review.` : 'No mistakes this round.';
  $('retryWrongButton').disabled = state.mistakes.length === 0;
  renderMistakes();
  showScreen('resultsScreen');
}

function renderMistakes() {
  const list = $('mistakesList');
  list.innerHTML = '';
  $('mistakeCountBadge').textContent = state.mistakes.length;

  if (!state.mistakes.length) {
    list.innerHTML = '<div class="empty-state">Perfect round.</div>';
    return;
  }

  state.mistakes.forEach(item => {
    const row = document.createElement('div');
    row.className = 'mistake-row';
    row.innerHTML = `
      <div class="mistake-kana">${item.kana}</div>
      <div class="mistake-answer">${item.romaji}</div>
      <div class="mistake-user">${item.reason === 'revealed' ? 'Revealed with Space' : `You answered: ${item.userAnswer}`}</div>
    `;
    list.appendChild(row);
  });
}

function loadStats() {
  try {
    return JSON.parse(localStorage.getItem('kanaTrainerStats') || '{}');
  } catch {
    return {};
  }
}

function saveStats(stats) {
  localStorage.setItem('kanaTrainerStats', JSON.stringify(stats));
}

function recordStat(card, result) {
  const stats = loadStats();
  const key = keyFor(card);
  const entry = stats[key] || {
    kana: card.kana,
    romaji: card.romaji,
    script: card.script,
    attempts: 0,
    correct: 0,
    wrongAnswers: 0,
    reveals: 0,
    lastTested: null
  };

  entry.attempts++;
  if (result === 'correct') entry.correct++;
  if (result === 'wrong') entry.wrongAnswers++;
  if (result === 'revealed') entry.reveals++;
  entry.lastTested = new Date().toISOString();
  stats[key] = entry;
  saveStats(stats);
}

function statsEntryWrongCount(entry) {
  return (entry.wrongAnswers || 0) + (entry.reveals || 0);
}

function statsEntryAccuracy(entry) {
  return entry.attempts ? Math.round((entry.correct / entry.attempts) * 100) : 0;
}

function renderStatsCard(entry, compact = false) {
  const wrong = statsEntryWrongCount(entry);
  const accuracy = statsEntryAccuracy(entry);
  const card = document.createElement('div');
  card.className = `stat-card${compact ? ' compact' : ''}${wrong ? ' needs-review' : ' perfect'}`;
  card.innerHTML = `
    <div class="stat-card-kana">${entry.kana}</div>
    <div class="stat-card-main">
      <div class="stat-card-topline">
        <strong>${entry.romaji}</strong>
        <span class="stat-accuracy">${accuracy}%</span>
      </div>
      <div class="stat-card-meta">
        <span>${entry.attempts} attempt${entry.attempts === 1 ? '' : 's'}</span>
        ${wrong ? `<span>${wrong} missed</span>` : '<span>Never missed</span>'}
      </div>
      <div class="accuracy-bar"><div class="accuracy-fill" style="width:${accuracy}%"></div></div>
    </div>
  `;
  return card;
}

function renderPerfectStack(script, category, entries, target) {
  if (!entries.length) return;
  const stackKey = `${script}:${category}`;
  const expanded = state.statsOpenPerfect.has(stackKey);

  const wrap = document.createElement('div');
  wrap.className = 'perfect-wrap';

  const button = document.createElement('button');
  button.type = 'button';
  button.className = `perfect-stack${expanded ? ' expanded' : ''}`;
  button.setAttribute('aria-expanded', String(expanded));
  button.innerHTML = `
    <span class="perfect-stack-visual" aria-hidden="true">
      <span></span><span></span><span></span>
    </span>
    <span class="perfect-stack-copy">
      <strong>${entries.length} never missed</strong>
      <small>${expanded ? 'Hide mastered kana' : 'Show mastered kana'}</small>
    </span>
    <span class="perfect-stack-count">+${entries.length}</span>
  `;
  button.addEventListener('click', () => {
    if (state.statsOpenPerfect.has(stackKey)) state.statsOpenPerfect.delete(stackKey);
    else state.statsOpenPerfect.add(stackKey);
    renderStats();
  });
  wrap.appendChild(button);

  if (expanded) {
    const grid = document.createElement('div');
    grid.className = 'perfect-grid';
    entries.forEach(entry => grid.appendChild(renderStatsCard(entry, true)));
    wrap.appendChild(grid);
  }

  target.appendChild(wrap);
}

function renderStats() {
  const stats = Object.values(loadStats()).filter(entry => entry.attempts > 0);
  const table = $('statsTable');
  table.innerHTML = '';

  if (!stats.length) {
    table.innerHTML = '<div class="empty-state">No history yet. Complete a test and your kana stats will appear here.</div>';
    $('practiceWeakButton').disabled = true;
    return;
  }

  const problemEntries = stats.filter(entry => statsEntryWrongCount(entry) > 0);
  const perfectEntries = stats.filter(entry => statsEntryWrongCount(entry) === 0);
  const totalAttempts = stats.reduce((sum, entry) => sum + entry.attempts, 0);
  const totalCorrect = stats.reduce((sum, entry) => sum + entry.correct, 0);
  const overallAccuracy = totalAttempts ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  $('practiceWeakButton').disabled = problemEntries.length === 0;

  const overview = document.createElement('div');
  overview.className = 'stats-overview';
  overview.innerHTML = `
    <div class="overview-card"><span>Practiced</span><strong>${stats.length}</strong><small>kana</small></div>
    <div class="overview-card attention"><span>Needs review</span><strong>${problemEntries.length}</strong><small>ever missed</small></div>
    <div class="overview-card"><span>Never missed</span><strong>${perfectEntries.length}</strong><small>collapsed below</small></div>
    <div class="overview-card"><span>Overall</span><strong>${overallAccuracy}%</strong><small>${totalAttempts} attempts</small></div>
  `;
  table.appendChild(overview);

  const scripts = ['Hiragana', 'Katakana'];
  const availableScripts = scripts.filter(script => stats.some(entry => entry.script === script));

  if (state.statsOpenScripts.size === 0 && availableScripts.length) {
    const preferred = availableScripts.find(script => stats.some(entry => entry.script === script && statsEntryWrongCount(entry) > 0)) || availableScripts[0];
    state.statsOpenScripts.add(preferred);
  }

  const folders = document.createElement('div');
  folders.className = 'stats-folders';

  scripts.forEach(script => {
    const scriptEntries = stats.filter(entry => entry.script === script);
    const attempted = scriptEntries.length;
    const needsReview = scriptEntries.filter(entry => statsEntryWrongCount(entry) > 0).length;
    const attempts = scriptEntries.reduce((sum, entry) => sum + entry.attempts, 0);
    const correct = scriptEntries.reduce((sum, entry) => sum + entry.correct, 0);
    const accuracy = attempts ? Math.round((correct / attempts) * 100) : 0;
    const isOpen = state.statsOpenScripts.has(script);

    const folder = document.createElement('section');
    folder.className = `stats-folder${isOpen ? ' open' : ''}${attempted ? '' : ' empty-folder'}`;

    const header = document.createElement('button');
    header.type = 'button';
    header.className = 'stats-folder-header';
    header.disabled = attempted === 0;
    header.setAttribute('aria-expanded', String(isOpen));
    header.innerHTML = `
      <span class="folder-icon" aria-hidden="true">${isOpen ? '▾' : '▸'}</span>
      <span class="folder-title-wrap">
        <strong>${script}</strong>
        <small>${attempted ? `${attempted} practiced · ${needsReview} need review · ${accuracy}% overall` : 'No practice data yet'}</small>
      </span>
      ${attempted ? `<span class="folder-badges"><span>${attempted}</span>${needsReview ? `<span class="attention-badge">${needsReview}!</span>` : ''}</span>` : ''}
    `;
    header.addEventListener('click', () => {
      if (state.statsOpenScripts.has(script)) state.statsOpenScripts.delete(script);
      else state.statsOpenScripts.add(script);
      renderStats();
    });
    folder.appendChild(header);

    if (attempted && isOpen) {
      const content = document.createElement('div');
      content.className = 'stats-folder-content';
      const categories = ['Basic', 'Dakuten', 'Handakuten', 'Yōon'];

      categories.forEach(category => {
        const categoryEntries = scriptEntries.filter(entry => {
          const card = getAllCards().find(candidate => candidate.script === entry.script && candidate.kana === entry.kana);
          return (card?.category || 'Basic') === category;
        });
        if (!categoryEntries.length) return;

        categoryEntries.sort((a, b) => {
          const wrongDiff = statsEntryWrongCount(b) - statsEntryWrongCount(a);
          return wrongDiff || statsEntryAccuracy(a) - statsEntryAccuracy(b) || b.attempts - a.attempts;
        });

        const problems = categoryEntries.filter(entry => statsEntryWrongCount(entry) > 0);
        const perfect = categoryEntries.filter(entry => statsEntryWrongCount(entry) === 0);

        const group = document.createElement('section');
        group.className = 'stats-category';
        group.innerHTML = `
          <div class="stats-category-head">
            <div><h4>${category}</h4><span>${categoryEntries.length} practiced</span></div>
            ${problems.length ? `<span class="category-review-count">${problems.length} need review</span>` : '<span class="category-perfect-label">All clean</span>'}
          </div>
        `;

        if (problems.length) {
          const problemGrid = document.createElement('div');
          problemGrid.className = 'problem-grid';
          problems.forEach(entry => problemGrid.appendChild(renderStatsCard(entry)));
          group.appendChild(problemGrid);
        }

        renderPerfectStack(script, category, perfect, group);
        content.appendChild(group);
      });

      folder.appendChild(content);
    }

    folders.appendChild(folder);
  });

  table.appendChild(folders);
}

function openStats() {
  state.previousScreen = getActiveScreen();
  renderStats();
  showScreen('statsScreen');
}

function practiceWeak() {
  const stats = Object.values(loadStats()).filter(entry => entry.attempts > 0);
  if (!stats.length) return;

  stats.sort((a, b) => (a.correct / a.attempts) - (b.correct / b.attempts) || b.attempts - a.attempts);
  const weakest = stats.slice(0, Math.min(20, Math.max(5, Math.ceil(stats.length * 0.35))));
  const allCards = getAllCards();
  const cards = weakest.map(entry => allCards.find(card => keyFor(card) === `${entry.script}:${entry.kana}`)).filter(Boolean);
  startDeck(cards);
}

function bindEvents() {
  document.querySelectorAll('.mode-button').forEach(button => {
    button.addEventListener('click', () => {
      state.mode = button.dataset.mode;
      document.querySelectorAll('.mode-button').forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      });
      renderSelection();
    });
  });

  $('selectVisibleButton').addEventListener('click', () => {
    getVisibleCards().forEach(card => state.selected.set(keyFor(card), card));
    renderSelection();
  });

  $('clearVisibleButton').addEventListener('click', () => {
    getVisibleCards().forEach(card => state.selected.delete(keyFor(card)));
    renderSelection();
  });

  $('clearAllButton').addEventListener('click', () => {
    state.selected.clear();
    renderSelection();
  });

  $('startButton').addEventListener('click', () => startDeck([...state.selected.values()]));
  $('answerForm').addEventListener('submit', event => {
    event.preventDefault();
    submitAnswer();
  });

  $('quitButton').addEventListener('click', () => showScreen('selectionScreen'));
  $('retryWrongButton').addEventListener('click', () => startDeck(state.mistakes.map(item => ({ ...item }))));
  $('restartSameButton').addEventListener('click', () => startDeck(state.originalDeck));
  $('newTestButton').addEventListener('click', () => showScreen('selectionScreen'));
  $('statsButton').addEventListener('click', openStats);
  $('backFromStatsButton').addEventListener('click', () => showScreen(state.previousScreen || 'selectionScreen'));
  $('practiceWeakButton').addEventListener('click', practiceWeak);

  $('clearStatsButton').addEventListener('click', () => {
    if (confirm('Clear all saved kana statistics?')) {
      localStorage.removeItem('kanaTrainerStats');
      renderStats();
    }
  });

  document.addEventListener('keydown', event => {
    if (!$('testScreen').classList.contains('active')) return;
    if (event.code === 'Space') {
      event.preventDefault();
      revealAnswer();
    }
  });
}

bindEvents();
renderSelection();
