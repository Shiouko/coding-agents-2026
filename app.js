// ============================================
// AI Coding Agents 2026 — App
// ============================================

/* --- Agent Data --- */
const agents = [
  {
    rank: 1, name: "GitHub Copilot", type: "extension", price: "Free / $10", priceNum: 10,
    openSource: false, swebench: "—", users: "Most used", usersNum: 999,
    desc: "Deeply integrated into GitHub ecosystem. Best value for everyday autocomplete.",
    tags: ["extension", "budget"], icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee7c1.png"
  },
  {
    rank: 2, name: "Claude Code", type: "cli", price: "$20–200", priceNum: 100,
    openSource: false, swebench: "80.9%", users: "High", usersNum: 900,
    desc: "Highest SWE-bench score. Deep reasoning for complex multi-file changes.",
    tags: ["cli", "complex"], icon: "https://cdn.simpleicons.org/anthropic/white"
  },
  {
    rank: 3, name: "Cursor", type: "ide", price: "$20", priceNum: 20,
    openSource: false, swebench: "—", users: "High", usersNum: 850,
    desc: "AI-native IDE with multi-agent parallel execution (5 agents).",
    tags: ["ide", "complex"], icon: "https://cursor.com/favicon.ico"
  },
  {
    rank: 4, name: "OpenClaw", type: "cli", price: "Pay per use", priceNum: 1,
    openSource: true, swebench: "—", users: "Growing", usersNum: 700,
    desc: "Open-source CLI. Multi-model, skill-based architecture. No vendor lock-in.",
    tags: ["cli", "free"], icon: null
  },
  {
    rank: 5, name: "Cline", type: "cli", price: "Free", priceNum: 0,
    openSource: true, swebench: "—", users: "2.5M/mo", usersNum: 600,
    desc: "95K+ GitHub stars. 75+ LLM providers. Plan-first development.",
    tags: ["cli", "free"], icon: null
  },
  {
    rank: 6, name: "OpenCode", type: "cli", price: "Free", priceNum: 0,
    openSource: true, swebench: "—", users: "Growing", usersNum: 400,
    desc: "Open-source terminal agent with growing community momentum.",
    tags: ["cli", "free"], icon: null
  },
  {
    rank: 7, name: "Windsurf", type: "ide", price: "Free / $15", priceNum: 15,
    openSource: false, swebench: "—", users: "Moderate", usersNum: 350,
    desc: "Multi-agent parallel execution. Smooth IDE experience by Codeium.",
    tags: ["ide", "budget"], icon: null
  },
  {
    rank: 8, name: "Codex (OpenAI)", type: "cloud", price: "Pay per use", priceNum: 1,
    openSource: false, swebench: "—", users: "Moderate", usersNum: 300,
    desc: "Cloud-native with parallel sandboxed execution. Deep GitHub integration.",
    tags: ["cloud", "autocomplete"], icon: "https://cdn.simpleicons.org/openai"
  },
  {
    rank: 9, name: "Aider", type: "cli", price: "Free", priceNum: 0,
    openSource: true, swebench: "—", users: "Moderate", usersNum: 200,
    desc: "Git-aware CLI assistant. Popular for pair programming workflows.",
    tags: ["cli", "free"], icon: null
  },
  {
    rank: 10, name: "Devin", type: "cloud", price: "$20+", priceNum: 20,
    openSource: false, swebench: "—", users: "Growing", usersNum: 150,
    desc: "Fully autonomous AI engineer. Can handle complex tasks end-to-end.",
    tags: ["cloud", "autonomous"], icon: null
  },
  {
    rank: 11, name: "Roo Code", type: "extension", price: "Free", priceNum: 0,
    openSource: true, swebench: "—", users: "Growing", usersNum: 100,
    desc: "Lightweight VS Code extension. Open-source and free.",
    tags: ["extension", "free"], icon: null
  },
  {
    rank: 12, name: "Playcode Agent", type: "cloud", price: "Free", priceNum: 0,
    openSource: false, swebench: "—", users: "Growing", usersNum: 80,
    desc: "Cloud-based agent. Can build features autonomously in browser.",
    tags: ["cloud", "autonomous"], icon: null
  },
  {
    rank: 13, name: "KiloCode", type: "extension", price: "Free", priceNum: 0,
    openSource: true, swebench: "—", users: "Growing", usersNum: 60,
    desc: "VS Code extension. Supports multiple models. Popular in open-source.",
    tags: ["extension", "free"], icon: null
  },
  {
    rank: 14, name: "Continue.dev", type: "extension", price: "Free", priceNum: 0,
    openSource: true, swebench: "—", users: "Moderate", usersNum: 90,
    desc: "Open-source VS Code/JetBrains extension. Configurable with custom models.",
    tags: ["extension", "free"], icon: null
  }
];

/* --- Tier assignment --- */
const tier1 = agents.slice(0, 3);
const tier2 = agents.slice(3, 8);
const tier3 = agents.slice(8);

/* --- Render Agent Card --- */
function renderCard(agent, featured = false) {
  const priceClass = agent.priceNum > 0 ? 'paid' : '';
  const iconHtml = agent.icon
    ? `<img src="${agent.icon}" alt="${agent.name} icon" class="card-icon-img" onerror="this.style.display='none'">`
    : `<span class="card-rank">${agent.rank}</span>`;

  return `
    <article class="agent-card" data-name="${agent.name.toLowerCase()}" data-tags="${agent.tags.join(',')}" data-type="${agent.type}" data-price="${agent.priceNum}">
      <div class="card-icon-wrap">
        ${iconHtml}
        <span class="card-name">${agent.name}</span>
      </div>
      <p class="card-desc">${agent.desc}</p>
      <span class="card-price ${priceClass}">${agent.price}</span>
      <div class="card-tags">
        ${agent.tags.map(t => `<span class="tag ${t === 'cli' || t === 'ide' ? 'tag-type' : ''}">${t}</span>`).join('')}
        ${agent.openSource ? '<span class="tag tag-type">open source</span>' : ''}
      </div>
    </article>
  `;
}

/* --- Initial Render --- */
function renderAll() {
  document.getElementById('cardsTier1').innerHTML = tier1.map(a => renderCard(a, true)).join('');
  document.getElementById('cardsTier2').innerHTML = tier2.map(a => renderCard(a)).join('');
  document.getElementById('cardsTier3').innerHTML = tier3.map(a => renderCard(a)).join('');
  renderTable(agents);
}

/* --- Render Comparison Table --- */
function renderTable(data) {
  const body = document.getElementById('compareBody');
  body.innerHTML = data.map(a => `
    <tr>
      <td>${a.rank}</td>
      <td><strong>${a.name}</strong></td>
      <td>${a.type}</td>
      <td>${a.openSource ? '✅' : '—'}</td>
      <td style="color: ${a.priceNum === 0 ? '#2ecc71' : '#f39c12'}; font-weight: 600; font-family: 'Source Code Pro', monospace; font-size: 12px">${a.price}</td>
      <td>${a.swebench}</td>
      <td>${a.users}</td>
    </tr>
  `).join('');
}

/* --- Search --- */
document.getElementById('searchInput').addEventListener('input', function(e) {
  const q = e.target.value.toLowerCase().trim();
  filterAndRender(q, currentFilter);
});

/* --- Filter Pills --- */
let currentFilter = 'all';
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', function() {
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    currentFilter = this.dataset.filter;
    filterAndRender(document.getElementById('searchInput').value.toLowerCase().trim(), currentFilter);
  });
});

/* --- Combined Search + Filter --- */
function filterAndRender(query, filter) {
  const q = query || '';
  let filtered = agents.filter(a => {
    const matchName = !q || a.name.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q);
    if (!matchName) return false;
    if (filter === 'all') return true;
    if (filter === 'free') return a.priceNum === 0;
    return a.type === filter || a.tags.includes(filter);
  });

  // Re-render all sections with filtered data
  const t1 = filtered.filter(a => a.rank <= 3);
  const t2 = filtered.filter(a => a.rank > 3 && a.rank <= 8);
  const t3 = filtered.filter(a => a.rank > 8);

  document.getElementById('cardsTier1').innerHTML = t1.length
    ? t1.map(a => renderCard(a, true)).join('')
    : '<p style="grid-column: 1/-1; text-align: center; color: #888; padding: 32px 0;">No agents found.</p>';
  document.getElementById('cardsTier2').innerHTML = t2.length
    ? t2.map(a => renderCard(a)).join('')
    : '';
  document.getElementById('cardsTier3').innerHTML = t3.length
    ? t3.map(a => renderCard(a)).join('')
    : '';

  renderTable(filtered);
}

/* --- Sort Table --- */
let sortDir = {};
function sortTable(col) {
  sortDir[col] = !sortDir[col];
  const dir = sortDir[col] ? 1 : -1;
  let sorted = [...agents].sort((a, b) => {
    if (col === 'rank') return (a.rank - b.rank) * dir;
    if (col === 'name') return a.name.localeCompare(b.name) * dir;
    if (col === 'price') return (a.priceNum - b.priceNum) * dir;
    return 0;
  });
  renderTable(sorted);
}

/* --- Quiz System --- */
const quizAnswers = {};
const quizRecs = {
  "terminal|free|autocomplete": { name: "Cline", desc: "Free CLI agent with 75+ LLM providers. Great for daily use." },
  "terminal|free|complex": { name: "OpenClaw", desc: "Open-source, multi-model CLI. Powerful reasoning on hard problems." },
  "terminal|free|autonomous": { name: "Aider", desc: "Free git-aware CLI. Can handle multi-step tasks." },
  "terminal|budget|autocomplete": { name: "Claude Code", desc: "$20 Pro plan with excellent reasoning. Terminal-native." },
  "terminal|budget|complex": { name: "Claude Code", desc: "$20 Pro with 80.9% SWE-bench. Best for complex code." },
  "terminal|budget|autonomous": { name: "Devin", desc: "$20/mo autonomous agent. Handles end-to-end tasks." },
  "terminal|unlimited|autocomplete": { name: "Claude Code", desc: "Max plan: best-in-class reasoning for daily terminal work." },
  "terminal|unlimited|complex": { name: "Claude Code", desc: "80.9% SWE-bench + 200K context. The gold standard." },
  "terminal|unlimited|autonomous": { name: "Devin", desc: "Fully autonomous. Best when paired with Claude Code Max." },
  "ide|free|autocomplete": { name: "GitHub Copilot", desc: "Free tier: 2,000 completions/month. Best daily assistant." },
  "ide|free|complex": { name: "KiloCode", desc: "Free VS Code extension with multi-model support." },
  "ide|free|autonomous": { name: "Cline", desc: "VS Code extension that can run autonomously." },
  "ide|budget|autocomplete": { name: "GitHub Copilot Pro", desc: "$10/mo is the best value in AI coding." },
  "ide|budget|complex": { name: "Cursor", desc: "$20/mo AI-native IDE with excellent repo understanding." },
  "ide|budget|autonomous": { name: "Cursor", desc: "5 parallel agents. Best autonomous IDE experience." },
  "ide|unlimited|autocomplete": { name: "Cursor", desc: "Best IDE experience, no token limits on Pro plans." },
  "ide|unlimited|complex": { name: "Cursor", desc: "AI-native IDE built around complex multi-file reasoning." },
  "ide|unlimited|autonomous": { name: "Cursor", desc: "Multi-agent mode — 5 agents working simultaneously." },
  "browser|free|autocomplete": { name: "Continue.dev", desc: "Free, configurable extension. Works in browser IDEs." },
  "browser|free|complex": { name: "KiloCode", desc: "Free extension with multi-model flexibility." },
  "browser|free|autonomous": { name: "Playcode Agent", desc: "Cloud-based autonomous coding in the browser." },
  "browser|budget|autocomplete": { name: "Windsurf", desc: "$15/mo. Smooth IDE, great for daily coding." },
  "browser|budget|complex": { name: "Windsurf", desc: "$15/mo with multi-agent support." },
  "browser|budget|autonomous": { name: "Devin", desc: "$20/mo fully autonomous agent." },
  "browser|unlimited|autocomplete": { name: "Windsurf", desc: "Premium IDE experience, unlimited usage." },
  "browser|unlimited|complex": { name: "Cursor", desc: "Best AI IDE for heavy complex work." },
  "browser|unlimited|autonomous": { name: "Devin", desc: "The most autonomous option available." },
};

document.querySelectorAll('.quiz-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const step = this.closest('.quiz-step').dataset.step;
    const next = this.dataset.next;
    const value = this.dataset.value;
    if (value) quizAnswers[step] = value;

    this.closest('.quiz-step').hidden = true;
    const nextStep = document.querySelector(`.quiz-step[data-step="${next}"]`);
    nextStep.hidden = false;

    if (next === 'result') {
      const key = `${quizAnswers['1']}|${quizAnswers['2']}|${quizAnswers['3']}`;
      const rec = quizRecs[key] || { name: "Cline", desc: "Open CLI agent with 75+ LLM providers — the best starting point." };
      document.getElementById('quizResult').innerHTML = `
        <div class="quiz-result-item">
          <strong>${rec.name}</strong>
          <span>${rec.desc}</span>
        </div>
      `;
      document.getElementById('quizReset').hidden = false;
    }
  });
});

document.getElementById('quizReset').addEventListener('click', function() {
  Object.keys(quizAnswers).forEach(k => delete quizAnswers[k]);
  document.querySelectorAll('.quiz-step').forEach(s => s.hidden = true);
  document.querySelector('.quiz-step[data-step="1"]').hidden = false;
  this.hidden = true;
});

/* --- Mobile Nav Toggle --- */
document.getElementById('navToggle').addEventListener('click', function() {
  document.getElementById('navLinks').classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* --- Init --- */
renderAll();
