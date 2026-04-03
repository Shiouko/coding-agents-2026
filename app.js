// ============================================
// AI Coding Agents 2026 — App
// ============================================

/* --- Agent Data --- */
const agents = [
  {
    rank: 1, name: "GitHub Copilot", type: "extension", price: "Free / $10", priceNum: 10,
    openSource: false, swebench: "—", users: "Most used",
    desc: "Deeply integrated into GitHub ecosystem. Best value for everyday autocomplete.",
    tags: ["extension", "budget"], icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee7c1.png"
  },
  {
    rank: 2, name: "Claude Code", type: "cli", price: "$20–200", priceNum: 100,
    openSource: false, swebench: "80.9%", users: "High",
    desc: "Highest SWE-bench score. Deep reasoning for complex multi-file changes.",
    tags: ["cli", "complex"], icon: "https://cdn.simpleicons.org/anthropic/white"
  },
  {
    rank: 3, name: "Cursor", type: "ide", price: "$20", priceNum: 20,
    openSource: false, swebench: "—", users: "High",
    desc: "AI-native IDE with multi-agent parallel execution (5 agents).",
    tags: ["ide", "complex"], icon: "https://cursor.com/favicon.ico"
  },
  {
    rank: 4, name: "OpenClaw", type: "cli", price: "Pay per use", priceNum: 1,
    openSource: true, swebench: "—", users: "Growing",
    desc: "Open-source CLI. Multi-model, skill-based architecture. No vendor lock-in.",
    tags: ["cli", "free"], icon: null
  },
  {
    rank: 5, name: "Cline", type: "cli", price: "Free", priceNum: 0,
    openSource: true, swebench: "—", users: "2.5M/mo",
    desc: "95K+ GitHub stars. 75+ LLM providers. Plan-first development.",
    tags: ["cli", "free"], icon: null
  },
  {
    rank: 6, name: "OpenCode", type: "cli", price: "Free", priceNum: 0,
    openSource: true, swebench: "—", users: "Growing",
    desc: "Open-source terminal agent with growing community momentum.",
    tags: ["cli", "free"], icon: null
  },
  {
    rank: 7, name: "Windsurf", type: "ide", price: "Free / $15", priceNum: 15,
    openSource: false, swebench: "—", users: "Moderate",
    desc: "Multi-agent parallel execution. Smooth IDE experience by Codeium.",
    tags: ["ide", "budget"], icon: null
  },
  {
    rank: 8, name: "Codex (OpenAI)", type: "cloud", price: "Pay per use", priceNum: 1,
    openSource: false, swebench: "—", users: "Moderate",
    desc: "Cloud-native with parallel sandboxed execution. Deep GitHub integration.",
    tags: ["cloud", "autocomplete"], icon: "https://cdn.simpleicons.org/openai"
  },
  {
    rank: 9, name: "Aider", type: "cli", price: "Free", priceNum: 0,
    openSource: true, swebench: "—", users: "Moderate",
    desc: "Git-aware CLI assistant. Popular for pair programming workflows.",
    tags: ["cli", "free"], icon: null
  },
  {
    rank: 10, name: "Devin", type: "cloud", price: "$20+", priceNum: 20,
    openSource: false, swebench: "—", users: "Growing",
    desc: "Fully autonomous AI engineer. Can handle complex tasks end-to-end.",
    tags: ["cloud", "autonomous"], icon: null
  },
  {
    rank: 11, name: "Roo Code", type: "extension", price: "Free", priceNum: 0,
    openSource: true, swebench: "—", users: "Growing",
    desc: "Lightweight VS Code extension. Open-source and free.",
    tags: ["extension", "free"], icon: null
  },
  {
    rank: 12, name: "Playcode Agent", type: "cloud", price: "Free", priceNum: 0,
    openSource: false, swebench: "—", users: "Growing",
    desc: "Cloud-based agent. Can build features autonomously in browser.",
    tags: ["cloud", "autonomous"], icon: null
  },
  {
    rank: 13, name: "KiloCode", type: "extension", price: "Free", priceNum: 0,
    openSource: true, swebench: "—", users: "Growing",
    desc: "VS Code extension. Supports multiple models. Popular in open-source.",
    tags: ["extension", "free"], icon: null
  },
  {
    rank: 14, name: "Continue.dev", type: "extension", price: "Free", priceNum: 0,
    openSource: true, swebench: "—", users: "Moderate",
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
    <article class="agent-card reveal" data-name="${agent.name.toLowerCase()}" data-tags="${agent.tags.join(',')}" data-type="${agent.type}" data-price="${agent.priceNum}">
      <div class="card-icon-wrap">
        ${iconHtml}
        <span class="card-name">${agent.name}</span>
      </div>
      <p class="card-desc">${agent.desc}</p>
      <span class="card-price ${priceClass}">${agent.price}</span>
      <div class="card-tags">
        ${agent.tags.map(t => `<span class="tag ${t === 'cli' || t === 'ide' || t === 'free' ? 'tag-type' : ''}">${t}</span>`).join('')}
        ${agent.openSource ? '<span class="tag tag-type">open source</span>' : ''}
      </div>
    </article>
  `;
}

/* --- Render No Results --- */
function renderNoResults() {
  return `
    <div class="no-results">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
      <p>No agents found</p>
      <span>Try adjusting your search or filters</span>
    </div>
  `;
}

/* --- Initial Render --- */
function renderAll() {
  const c1 = document.getElementById('cardsTier1');
  const c2 = document.getElementById('cardsTier2');
  const c3 = document.getElementById('cardsTier3');
  c1.innerHTML = tier1.map(a => renderCard(a, true)).join('');
  c2.innerHTML = tier2.map(a => renderCard(a)).join('');
  c3.innerHTML = tier3.map(a => renderCard(a)).join('');
  renderTable(agents);
  initScrollReveal();
}

/* --- Render Comparison Table --- */
function renderTable(data) {
  const body = document.getElementById('compareBody');
  const headers = { rank: 'Rank', name: 'Agent', type: 'Type', openSource: '', price: 'Price', swebench: 'SWE-bench', users: 'Users' };
  body.innerHTML = data.map(a => `
    <tr>
      <td data-label="Rank">${a.rank}</td>
      <td data-label="Agent"><strong>${a.name}</strong></td>
      <td data-label="Type">${a.type}</td>
      <td data-label="">${a.openSource ? '✅' : '—'}</td>
      <td data-label="Price" style="color: ${a.priceNum === 0 ? '#2ecc71' : '#f39c12'}; font-weight: 600; font-family: 'Source Code Pro', monospace; font-size: 13px">${a.price}</td>
      <td data-label="SWE-bench">${a.swebench}</td>
      <td data-label="Users">${a.users}</td>
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
    : renderNoResults();
  document.getElementById('cardsTier2').innerHTML = t2.length
    ? t2.map(a => renderCard(a)).join('')
    : '';
  document.getElementById('cardsTier3').innerHTML = t3.length
    ? t3.map(a => renderCard(a)).join('')
    : '';

  renderTable(filtered);
  initScrollReveal();
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
  "terminal|free|autocomplete": { name: "Cline", desc: "Free CLI agent with 75+ LLM providers. Great for daily use.", icon: null },
  "terminal|free|complex": { name: "OpenClaw", desc: "Open-source, multi-model CLI. Powerful reasoning on hard problems.", icon: null },
  "terminal|free|autonomous": { name: "Aider", desc: "Free git-aware CLI. Can handle multi-step tasks.", icon: null },
  "terminal|budget|autocomplete": { name: "Claude Code", desc: "$20 Pro plan with excellent reasoning. Terminal-native.", icon: "https://cdn.simpleicons.org/anthropic/white" },
  "terminal|budget|complex": { name: "Claude Code", desc: "$20 Pro with 80.9% SWE-bench. Best for complex code.", icon: "https://cdn.simpleicons.org/anthropic/white" },
  "terminal|budget|autonomous": { name: "Devin", desc: "$20/mo autonomous agent. Handles end-to-end tasks.", icon: null },
  "terminal|unlimited|autocomplete": { name: "Claude Code", desc: "Max plan: best-in-class reasoning for daily terminal work.", icon: "https://cdn.simpleicons.org/anthropic/white" },
  "terminal|unlimited|complex": { name: "Claude Code", desc: "80.9% SWE-bench + 200K context. The gold standard.", icon: "https://cdn.simpleicons.org/anthropic/white" },
  "terminal|unlimited|autonomous": { name: "Devin", desc: "Fully autonomous. Best when paired with Claude Code Max.", icon: null },
  "ide|free|autocomplete": { name: "GitHub Copilot", desc: "Free tier: 2,000 completions/month. Best daily assistant.", icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee7c1.png" },
  "ide|free|complex": { name: "KiloCode", desc: "Free VS Code extension with multi-model support.", icon: null },
  "ide|free|autonomous": { name: "Cline", desc: "VS Code extension that can run autonomously.", icon: null },
  "ide|budget|autocomplete": { name: "GitHub Copilot Pro", desc: "$10/mo is the best value in AI coding.", icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee7c1.png" },
  "ide|budget|complex": { name: "Cursor", desc: "$20/mo AI-native IDE with excellent repo understanding.", icon: "https://cursor.com/favicon.ico" },
  "ide|budget|autonomous": { name: "Cursor", desc: "5 parallel agents. Best autonomous IDE experience.", icon: "https://cursor.com/favicon.ico" },
  "ide|unlimited|autocomplete": { name: "Cursor", desc: "Best IDE experience, no token limits on Pro plans.", icon: "https://cursor.com/favicon.ico" },
  "ide|unlimited|complex": { name: "Cursor", desc: "AI-native IDE built around complex multi-file reasoning.", icon: "https://cursor.com/favicon.ico" },
  "ide|unlimited|autonomous": { name: "Cursor", desc: "Multi-agent mode — 5 agents working simultaneously.", icon: "https://cursor.com/favicon.ico" },
  "browser|free|autocomplete": { name: "Continue.dev", desc: "Free, configurable extension. Works in browser IDEs.", icon: null },
  "browser|free|complex": { name: "KiloCode", desc: "Free extension with multi-model flexibility.", icon: null },
  "browser|free|autonomous": { name: "Playcode Agent", desc: "Cloud-based autonomous coding in the browser.", icon: null },
  "browser|budget|autocomplete": { name: "Windsurf", desc: "$15/mo. Smooth IDE, great for daily coding.", icon: null },
  "browser|budget|complex": { name: "Windsurf", desc: "$15/mo with multi-agent support.", icon: null },
  "browser|budget|autonomous": { name: "Devin", desc: "$20/mo fully autonomous agent.", icon: null },
  "browser|unlimited|autocomplete": { name: "Windsurf", desc: "Premium IDE experience, unlimited usage.", icon: null },
  "browser|unlimited|complex": { name: "Cursor", desc: "Best AI IDE for heavy complex work.", icon: "https://cursor.com/favicon.ico" },
  "browser|unlimited|autonomous": { name: "Devin", desc: "The most autonomous option available.", icon: null },
};

document.querySelectorAll('.quiz-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const step = this.closest('.quiz-step').dataset.step;
    const next = this.dataset.next;
    const value = this.dataset.value;
    if (value) quizAnswers[step] = value;

    const currentStep = this.closest('.quiz-step');
    currentStep.style.opacity = '0';
    currentStep.style.transform = 'translateY(-12px)';
    currentStep.style.transition = 'all 150ms ease-in';

    setTimeout(() => {
      currentStep.hidden = true;
      currentStep.style.opacity = '';
      currentStep.style.transform = '';
      currentStep.style.transition = '';

      const nextStep = document.querySelector(`.quiz-step[data-step="${next}"]`);
      nextStep.hidden = false;
      nextStep.style.opacity = '0';
      nextStep.style.transform = 'translateY(12px)';
      nextStep.style.transition = 'all 200ms ease-out';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          nextStep.style.opacity = '1';
          nextStep.style.transform = 'translateY(0)';
        });
      });

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
    }, 150);
  });
});

document.getElementById('quizReset').addEventListener('click', function() {
  Object.keys(quizAnswers).forEach(k => delete quizAnswers[k]);
  document.querySelectorAll('.quiz-step').forEach(s => {
    s.hidden = true;
    s.style.opacity = '';
    s.style.transform = '';
    s.style.transition = '';
  });
  const firstStep = document.querySelector('.quiz-step[data-step="1"]');
  firstStep.hidden = false;
  firstStep.style.opacity = '0';
  firstStep.style.transform = 'translateY(12px)';
  firstStep.style.transition = 'all 200ms ease-out';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      firstStep.style.opacity = '1';
      firstStep.style.transform = 'translateY(0)';
    });
  });
  this.hidden = true;
});

/* --- Mobile Nav Toggle --- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', function() {
  this.classList.toggle('open');
  if (navLinks.classList.contains('open')) {
    navLinks.style.display = 'flex';
    navLinks.style.opacity = '0';
    navLinks.style.transform = 'translateY(-8px)';
    navLinks.style.animation = 'none';
    requestAnimationFrame(() => {
      navLinks.style.opacity = '1';
      navLinks.style.transform = 'translateY(0)';
      navLinks.style.transition = 'all 200ms ease-out';
    });
  } else {
    navLinks.style.opacity = '0';
    navLinks.style.transform = 'translateY(-8px)';
    navLinks.style.transition = 'all 150ms ease-in';
    setTimeout(() => { navLinks.style.display = 'none'; }, 150);
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 640) {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
      navLinks.style.opacity = '0';
      navLinks.style.transform = 'translateY(-8px)';
      navLinks.style.transition = 'all 150ms ease-in';
      setTimeout(() => { navLinks.style.display = 'none'; }, 150);
    }
  });
});

/* --- Scroll Reveal --- */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger delay based on sibling index
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        let idx = 0;
        siblings.forEach((s, i) => { if (s === entry.target) idx = i; });
        entry.target.style.transitionDelay = `${idx * 60}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* --- Sticky Header Shadow --- */
const topnav = document.getElementById('topnav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    topnav.classList.add('scrolled');
  } else {
    topnav.classList.remove('scrolled');
  }

  // Scroll to top button
  const scrollTop = document.getElementById('scrollTop');
  if (window.scrollY > 600) {
    scrollTop.classList.add('visible');
  } else {
    scrollTop.classList.remove('visible');
  }
});

/* --- Scroll To Top Button --- */
const scrollTopBtn = document.getElementById('scrollTop');
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* --- Active nav highlight on scroll --- */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = '';
    a.style.borderBottomColor = '';
    if (a.getAttribute('href') === `#${current}`) {
      a.style.color = '#1565c0';
      a.style.borderBottomColor = '#1565c0';
    }
  });
});

/* --- Init --- */
renderAll();
