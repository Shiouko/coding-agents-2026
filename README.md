# AI Coding Agents 2026

A comprehensive ranking of the best AI coding agents in 2026, covering 14 agents across three tiers.

**Live Demo:** https://coding-agents-2026.pages.dev

---

## Features

- **14 agents** ranked by popularity and adoption
- **Search** — real-time filtering by name or description
- **Filter pills** — CLI, IDE, Extension, Cloud, Free
- **Recommendation Quiz** — 3 questions to find your ideal agent
- **Comparison Table** — sortable columns (rank, name, price)
- **FAQ Section** — 6 common questions with accordion
- **Responsive Design** — desktop, tablet, mobile
- **Scroll Animations** — reveal on scroll, smooth transitions
- **Back to Top** — floating button with smooth scroll
- **Sticky Nav** — active section highlighting on scroll

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| HTML | Semantic HTML5 |
| CSS | Custom CSS, no frameworks |
| JavaScript | Vanilla JS, no dependencies |
| Hosting | Cloudflare Pages |
| Font | Inter (Google Fonts) |

---

## Design Principles

- **2010s geometric flat design** — solid colors, sharp borders, box shadows
- **Light theme priority** — white/light gray base, crisp contrast
- **No gradients, glassmorphism, or AI slop**
- **Every interaction has feedback** — hover, focus, active, disabled states
- **8px grid system** for consistent spacing
- **Maximum 300ms transitions** — snappy, not mushy

---

## Project Structure

```
coding-agents-2026/
├── index.html      # Main page with sections
├── style.css       # All styles, responsive breakpoints
├── app.js          # Data, filtering, quiz, sorting
└── README.md       # This file
```

---

## Agent Rankings

| Rank | Agent | Type | Price |
|------|-------|------|-------|
| 1 | GitHub Copilot | VS Code Extension | Free / $10/mo |
| 2 | Claude Code | Terminal Agent | $20–200/mo |
| 3 | Cursor | AI-Native IDE | $20/mo |
| 4 | OpenClaw | Open-Source CLI | Pay per use |
| 5 | Cline | Open-Source CLI | Free |
| 6 | OpenCode | Open-Source Terminal | Free |
| 7 | Windsurf | AI-Native IDE | Free / $15/mo |
| 8 | Codex (OpenAI) | Cloud Agent | Pay per use |
| 9 | Aider | Git-Aware CLI | Free |
| 10 | Devin | Autonomous AI | $20+/mo |
| 11 | Roo Code | VS Code Extension | Free |
| 12 | Playcode Agent | Cloud Agent | Free |
| 13 | KiloCode | VS Code Extension | Free |
| 14 | Continue.dev | VS Code/IDE Extension | Free |

---

## Local Development

1. Clone the repo:
   ```bash
   git clone https://github.com/Shiouko/coding-agents-2026.git
   cd coding-agents-2026
   ```

2. Open `index.html` in a browser (no server needed).

---

## Deploy

Uses Cloudflare Pages:

```bash
wrangler pages deploy . --project-name coding-agents-2026
```

---

## Data Sources

Rankings are based on public data from:
- UseClawPro, MorphLLM, Codegen
- LogRocket, NxCode, Faros AI
- Stack Overflow 2026 Developer Survey
- GitHub repository statistics

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

Built by **Ruby** 💎 — Last updated April 3, 2026
