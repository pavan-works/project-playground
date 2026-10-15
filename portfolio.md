# portfolio.md — Solige Pullaiah · AI Portfolio 2026

> Consolidated master document for the `project-playground` repository: what the portfolio is, everything built so far, how to run/edit/extend it, and what is still pending.
> Compiled from: `README.md`, `about_me.md`, `Resume-pullaiah.md`, `Ravindra_portfolio.md`, `21st_dev.md`, `AGENTS.md`, `src/data.ts`, `src/App.tsx`, `src/index.css`, config files, `stitch_modern_glow_portfolio/`, and the git history.
> Last updated: 2026-10-11.

---

## Table of Contents

1. [Snapshot](#1-snapshot)
2. [Owner profile (source of truth)](#2-owner-profile-source-of-truth)
3. [Tech stack & tooling](#3-tech-stack--tooling)
4. [Repository map](#4-repository-map)
5. [Run, build, deploy](#5-run-build-deploy)
6. [Page architecture — section by section](#6-page-architecture--section-by-section)
7. [Content model (`src/data.ts`)](#7-content-model-srcdatats)
8. [Design system](#8-design-system)
9. [Assets & logo inventory](#9-assets--logo-inventory)
10. [Change log — what has been built](#10-change-log--what-has-been-built)
11. [Pending work / TODO](#11-pending-work--todo)
12. [Known issues & inconsistencies](#12-known-issues--inconsistencies)
13. [Ideas backlog](#13-ideas-backlog-from-21st_devmd)
14. [How-to recipes](#14-how-to-recipes)
15. [Rules & conventions](#15-rules--conventions)
16. [To Do — Portfolio v2 plan](#16-to-do--portfolio-v2-plan-based-on-the-portfolio_dhanushhtml-reference) — incl. [16.15 Growth and Projects at Hrud.ai](#1615-growth-and-projects-at-hrudai--planning--implementation)

---

## 1. Snapshot

| Item | Value |
|---|---|
| Project | Single-page, animation-heavy AI/ML engineer portfolio |
| Owner | **Solige Pullaiah** (alias **Puli Pavan**) — AI Engineer, Hyderabad, India |
| Repo | `https://github.com/pavan-works/project-playground` (branch `main`) |
| Origin | Scaffolded in **Google AI Studio**; connected to **Lovable** for git-synced editing |
| Framework | React 19 + TypeScript + Vite 6 + Tailwind CSS 4 + Motion |
| Live URL | https://soligepullaiah.vercel.app/ (Vercel, deployed 2026-10-11) |
| Dev URL | `http://localhost:3000` |
| Theme decision | Stay in the current dark theme (confirmed); v2 plan in §16 |
| Status | Skillset, Process, Work Experience (Hrud.ai), Selected Works (animated), Achievements, Soft Skills and Contact (SMS form) are **built**; **My Journey (timeline) and Those Who Shaped Me are pending**; resume modal + PDF, SEO/OG/JSON-LD tags, X link and Hyderabad location are **done**; deployment, real screenshots and the **Growth & Projects at Hrud.ai layout decision (§16.15)** are pending (see §11 and §16) |
| Theme | Dark "deep space", cyan (`--gold` token) + indigo + emerald accents |

---

## 2. Owner profile (source of truth)

`about_me.md` is marked the single source of truth for personal info; `Resume-pullaiah.md` is the newer, richer source. Where they differ, the resume is more recent.

### Identity & contact
| Field | Value |
|---|---|
| Name | Solige Pullaiah (portfolio alias *Puli Pavan*) |
| Email | pulipavan696@gmail.com |
| Phone | +91 9346680696 (resume only — not shown on site) |
| LinkedIn | https://www.linkedin.com/in/solige-pullaiah-478462270 |
| GitHub | https://github.com/puli-pro (handle `@puli-pro`) — confirmed |
| Website display name | **Solige Pullaiah** — confirmed ("Puli Pavan" is only an alias/handle) |
| Profile / avatar photos | `portrait-smile.png` (live hero), `placed_puli.png`, `profile_photo.jpeg` — confirmed |
| Location | Hyderabad, India (owner-confirmed 2026-10-11; resume PDF still says Visakhapatnam) |

### Objective
Final-year AI Engineering student who designs, trains and deploys end-to-end ML and LLM-based systems across NLP, computer vision and multimodal learning. Builds RAG pipelines, transformer models and production-ready AI systems (PyTorch, TensorFlow, Hugging Face, OpenCV). Seeking **AI/ML Engineer** roles.

### Education
| Degree / level | Institution | Period | Score |
|---|---|---|---|
| B.Tech CSE (AI Specialization) | Vignan's Institute of Information Technology (Autonomous), Visakhapatnam | 2022 – 2026 | CGPA 8.18 |
| Senior Secondary (CBSE) | Sri Sathya Sai Institute of Educare | 2020 – 2022 | 75.8% |
| Secondary (ICSE) | Sri Sathya Sai Gurukulam | 2010 – 2020 | 80% |

### Experience
| Role | Org | Period | Highlights |
|---|---|---|---|
| **AI Engineer** | Hrud.ai (Hybrid) | Jan 2026 – Present | Production AI with LLMs (Gemini); RAG pipelines (embeddings, vector search, external knowledge); autonomous agents with memory + tools; Supabase (PostgreSQL) backends |
| **AI/ML Intern** | CodeForces (Remote) | May 2024 – Aug 2024 | ML/DL for real-world tasks; preprocessing, feature engineering, NN experiments; **+12%** model performance |

### Skills (resume)
- **Languages:** Python, JavaScript
- **ML / DL:** PyTorch, TensorFlow, scikit-learn, XGBoost, PyTorch Lightning
- **LLMs & GenAI:** Hugging Face Transformers, prompt engineering, RAG, embeddings, vector DBs
- **Computer Vision:** OpenCV, CNNs, YOLOv8, face recognition, ANPR
- **NLP:** machine translation, attention models, tokenization, BLEU/COMET evaluation
- **MLOps:** Docker, model deployment, MLflow, Optuna
- **Data & Backend:** ETL, feature engineering, FastAPI, PostgreSQL (Supabase), basic SQL
- **Explainability:** SHAP, LIME, model safety validation
- **Certification:** CCNA: Introduction to Networks (Cisco)

### Research
1. **LaMaTEPP — Low-Resource Indic Machine Translation** (Mar 2025 – present, manuscript under review). Adapter-enhanced, memory-augmented MT: MoE adapters, document memory, MLM regularization, MMCBS+ beam search, MBR reranking. Metrics BLEU/chrF/BERTScore/COMET; est. **+5–10 BLEU** over mBART. Paper link: Google Drive (in `data.ts`).
2. **SyncVerse — Multimodal Lip-Sync Generation** (Mar 2025 – present). wav2vec2.0/HuBERT audio embeddings + custom lip-region encoders + cross-modal attention + temporal modelling. **LSE-D ↓18%, LSE-C ↑12%, SSIM ↑9%**.

### Projects
1. **Ollama LLM Document Assistant** (RAG) — https://github.com/puli-pro/Ollama-llm-document-assistant — FAISS/Chroma vector search, local Ollama inference, embeddings + semantic search.
2. **AI Job Intelligence Agent** (multi-agent) — https://github.com/puli-pro/agents — JSearch + Adzuna + LinkedIn ingestion → normalisation → Supabase; plan → retrieve → analyze → rank agent workflow.

### Leadership & achievements
- Team Lead — Sign2Speak Hackathon — **3rd place**
- Team Lead — Hrud.ai internship — led AI engineering projects
- **Top 2000** in Super Speaker Season 2 (of 2.53 lakh participants)
- Anchored multiple technical & cultural events
- 2nd prize — Elocution competition

> Achievements, certifications and leadership are in the resume but **not yet displayed on the site** (see §11).

---

## 3. Tech stack & tooling

| Layer | Technology | Notes |
|---|---|---|
| UI | React 19 + TypeScript ~5.8 | Function components, hooks |
| Build | Vite 6 + `@vitejs/plugin-react` | Alias `@` → project root |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` | No `tailwind.config.js`; tokens in `src/index.css` |
| Animation | `motion` (Framer Motion successor) | `initial/animate/whileInView` throughout |
| Icons | `lucide-react` | |
| 3D | `three`, `@react-three/fiber`, `@react-three/drei` | **Actively used** by `InfiniteGallery.tsx` (custom shader "cloth" planes) |
| Server/AI | `express`, `dotenv`, `@google/genai` | Installed, **not wired into the page** |
| Package manager | Bun (`bun.lock`, `bunfig.toml`); npm also works (`package-lock.json` exists, untracked) |
| Quality | `tsc --noEmit` (`npm run lint`), ESLint, Prettier | |
| Integrations | Google AI Studio (`metadata.json`), Lovable (`AGENTS.md`, `.lovable/project.json`) | |

Fonts (Google Fonts, imported at top of `index.css`): **Inter** (body), **Fraunces** italic (display), **Space Grotesk** (mono-style labels), **La Belle Aurore** (script), **Syne** (headlines), **JetBrains Mono** (code).

---

## 4. Repository map

```
project-playground/
├─ index.html                 Vite entry (title still "My Google AI Studio App")
├─ package.json               scripts + deps (name: react-example)
├─ vite.config.ts             react + tailwind plugins, DISABLE_HMR toggle
├─ tsconfig.json  eslint.config.js  .prettierrc  .prettierignore  bunfig.toml  bun.lock
├─ components.json            shadcn config (points at src/styles.css — does not exist here)
├─ metadata.json              AI Studio app name/description/capabilities
├─ .env.example               GEMINI_API_KEY, APP_URL
├─ AGENTS.md                  Lovable warning: never rewrite pushed git history
├─ .lovable/project.json      Lovable template info
├─ about_me.md                profile source of truth
├─ Resume-pullaiah.md         resume (latest facts)
├─ Ravindra_portfolio.md      reference doc of ANOTHER person's portfolio (design/structure inspiration)
├─ 21st_dev.md                curated 21st.dev UI component links (ideas backlog)
├─ README.md                  detailed repo README
├─ portfolio.md               THIS FILE
├─ src/
│  ├─ main.tsx                React root
│  ├─ App.tsx                 ALL sections + PortfolioLanding (default export) ~1200 lines
│  ├─ data.ts                 PORTFOLIO_DATA, JOURNEY, JOURNEY_QUOTE, types
│  ├─ index.css               tokens, fonts, glass-panel, dot-pattern, btn-primary…
│  ├─ components/AnimatedNav.tsx      floating pill nav + top-right "Hire Me"
│  ├─ components/InfiniteGallery.tsx  Three.js infinite image gallery (journey)
│  ├─ components/Skillset.tsx         My Skillset (spotlight bento cards + marquee)
│  ├─ components/Process.tsx          My Process (6 steps, lens switcher, loop callout)
│  ├─ components/WorkExperience.tsx   Hrud.ai role card + growth path (`GrowthPath`) + 7 project cards + CodeForces strip
│  ├─ components/ResumeModal.tsx      resume preview + Download modal, `ResumeButton` (nav, About, Contact)
│  ├─ components/ProjectVisual.tsx    11 animated SVG visuals (keyframes in index.css, .pv-*)
│  ├─ components/SoftSkillsAchievements.tsx  Achievements + Professional Soft Skills
│  ├─ components/ContactForm.tsx      message form -> prefilled SMS / WhatsApp / email
│  ├─ hooks/use-mobile.tsx
│  ├─ lib/error-capture.ts  error-page.ts  lovable-error-reporting.ts
│  └─ assets/
│     ├─ portrait-smile.png   CURRENT hero portrait (composite, transparent)
│     ├─ portrait-cutout.png  old B/W hero cutout (unused now)
│     ├─ portrait.jpg  scribble.png  project-1..4.jpg  journey-1..6.jpg
│     └─ logos/               local brand logos (see §9)
└─ stitch_modern_glow_portfolio/   design reference only (mockups, Behance extract, DESIGN.md, code.html variants)
```

---

## 5. Run, build, deploy

```bash
npm install          # or: bun install
npm run dev          # Vite on http://localhost:3000 (host 0.0.0.0)
npm run build        # production build -> dist/
npm run preview      # serve the build
npm run lint         # tsc --noEmit
```

- `.env.local` (copy of `.env.example`): `GEMINI_API_KEY` (only needed if server-side Gemini is added), `APP_URL`. **Never commit real keys** (`.env*` is git-ignored except `.env.example`).
- `DISABLE_HMR=true` turns off HMR + file watching (AI Studio agent quirk). Leave unset locally.
- **Deployment:** deployed on **Vercel** at https://soligepullaiah.vercel.app/ (auto-deploys from GitHub `main`). Earlier note (kept for reference): no production deploy was configured. Options: Vercel (static Vite build), Lovable publish, Cloud Run via AI Studio. See §11.
- **Git:** remote `origin` → `pavan-works/project-playground`, branch `main`. Because Lovable syncs this branch, use normal commits/pushes only — **no force-push, rebase, amend or squash of pushed commits**.

---

## 6. Page architecture — section by section

`PortfolioLanding` (bottom of `src/App.tsx`) shows a 2-second loading screen, then renders: `AnimatedNav` → `Hero` → `About` → `WorkExperience` → `Experience` (journey) → `Expertise` (Skillset + logos) → `Process` → `Works` → `Achievements` → `SoftSkills` → `CodeSnippet` → `Contact` (links + form) → `Footer`.

| # | Section (`id`) | What it contains | Status |
|---|---|---|---|
| 0 | **Loading screen** | Animated "Portfolio" title reveal, ~2 s | ✅ |
| – | **AnimatedNav** | Floating pill nav (Home, About, Experience, Expertise, Works) that collapses on scroll + fixed top-right **Hire Me** button → `#contact` (phones: shown when the nav is collapsed) | ✅ |
| 1 | **Hero** (`#home`) | "AI ⭧ Engineer" + outlined "& ML Researcher" behind the smiling portrait; location; "Worked with" row | ✅ |
| 2 | **About** (`#about`) | Summary, stats, identity panel, 4 focus cards | ⚠ confirm the "15+ systems shipped" stat |
| 3 | **Work Experience** (`#experience`) | "Shipped at Hrud.ai": role card + 7 cards, each with an animated visual: **DevTools Control Center (featured, with the per-seat cost problem + formula)**, Job Galaxy SaaS & Admin Console, NCPL Website AI Chatbot, Career Advisor Bot, NTRview Log, Pulse Celebrations v2, Xencomedical client project; CodeForces strip (+12%) | ✅ |
| 4 | **Journey** (`#journey`) | Pull-quote, active-stop panel, Three.js `InfiniteGallery` (6 stops, visitor image upload via `localStorage`) | ⚠ plan 16.7 (vertical timeline + new milestones) pending |
| 5 | **Expertise** (`#expertise`) | **My Skillset** (4 spotlight cards: AI & ML, Languages, Databases, Cloud & DevOps, each row with "where used"; cards numbered 01–04) + "Tools & Platforms" logo grid + "APIs & AI Tools" | ✅ |
| 6 | **Process** (`#process`) | 6 steps + lens switcher (Research Paper / ML·DL·NLP / RAG / Agents) + "found something useful? update the plan" loop banner + scroll-drawn progress line | ✅ |
| 7 | **Works** (`#works`) | Engineering Projects (Ollama Document Assistant, AI Job Intelligence Agent) + Research Publications (LaMaTEPP, SyncVerse) as `ProjectCard`s with animated visuals; `DetailModal` (portal, full-width animation on top, floating Back to Works + close, click outside to close) | ✅ (no real screenshots yet) |
| 8 | **Achievements** (`#achievements`) | Bento grid: 3rd place Sign2Speak (featured), Top 2000 Super Speaker S2, 2nd prize elocution, Hrud.ai team lead, event anchoring | ✅ |
| 9 | **Soft Skills** (`#soft-skills`) | Leadership, Public Speaking, Event Anchoring, End-to-End Ownership — each with resume-backed evidence only | ✅ |
| 10 | **CodeSnippet** | Decorative fake terminal | ✅ (cosmetic) |
| 11 | **Contact** (`#contact`, "Get In Touch") | Mail / LinkedIn / GitHub cards + **ContactForm** (first/last name, email-or-phone, message ≤ 280, consent) delivering as a **text to +91 93466 80696** (SMS prefilled on phones; Open SMS / WhatsApp / Email / Copy on desktop) + Text / WhatsApp / Call / Email panel | ✅ (see limitation in §16.11) |
| 12 | **Footer** | Monogram, © line, nav links, connect links (GitHub → puli-pro), availability badge | ✅ Twitter/X → https://x.com/puli_pullaiah |
| – | **Not built yet** | **Those Who Shaped Me** (people + "On my own") and the new **My Journey** timeline | ⏳ needs owner input |

### Hero details
- Portrait: `src/assets/portrait-smile.png`, `absolute bottom-16 md:bottom-14`, `h-[62vh] md:h-[72vh]`, `z-40`, centred.
- The portrait animates **only `y`** (slide up, opaque) — deliberately no opacity fade, otherwise the heading text shows through the face during load.
- Headline text uses its own fade/slide animations and stays behind the portrait.

### Expertise details (`StackCard`)
- Gradient border wrapper (`p-[1px]`) + card body `bg-[#1a222c]/95`, icon tile `bg-[var(--stack-icon-surface)]`, label `var(--stack-label)`.
- LangChain's logo is wide (≈2:1) so it is rendered `w-full h-auto p-0.5` instead of the fixed `w-10/11` square used by the others.

### Contact details
- Icon tile is `w-14 h-14`, `p-0`, `overflow-hidden`; image `w-full h-full object-contain p-1` (logo fills the tile).
- Brightened card fill/border, white value text (gold on hover), `text-white/70` hints.
- `mailto:` links open in the same tab; others `target="_blank"`.

---

## 7. Content model (`src/data.ts`)

Everything the site displays lives here (single place to edit content). Newer exports: `SKILLSET`, `PROCESS_LENSES` / `PROCESS_STEPS`, `WORK_PROJECTS` (with `visual`, `problem`, `featured`), `SOFT_SKILLS`, `ACHIEVEMENTS`, `CONTACT_PHONE`; `Project` has an optional `visual` key (`rag` | `agents` | `mt` | `lipsync`).

- **Types:** `Project`, `Skill`, `Experience`, `JourneyStop`.
- **`JOURNEY_QUOTE`** — pull-quote + caption for the journey section.
- **`JOURNEY`** (6 stops, each with image `journey-N.jpg`): 2010–2020 school → 2020–2022 senior secondary → 2022–2026 B.Tech → CodeForces internship (May–Aug 2024) → independent research (Mar 2025–present) → Hrud.ai (Jan 2026–present).
- **`PORTFOLIO_DATA`:** `name`, `alias`, `role`, `location`, `summary`, `techStack[15]`, `aiTools[9]`, `experience[2]`, `projects[2]`, `researchPapers[2]`.

### Tech Stack (15) — logo source
| Tile | Source |
|---|---|
| Python, TensorFlow, React, Postgres, Docker, Git, GCP, VS Code, TypeScript | devicon via jsDelivr (CDN) |
| GitHub | simpleicons CDN (white) |
| **Flask, Node.js, Vercel, SQLite, Railway** | **local** `src/assets/logos/*.svg` |

### APIs & AI Tools (9) — logo source
| Tile | Source |
|---|---|
| OpenAI | lobehub icons PNG (CDN) |
| Hugging Face | huggingface.co asset |
| Claude Code, Google AI Studio, n8n | simpleicons CDN |
| FastAPI | devicon (CDN) |
| **Cursor, Groq, LangChain** | **local** `src/assets/logos/` (`cursor.svg`, `groq.svg`, `langchain.png`) |

---

## 8. Design system

Tokens in `src/index.css` (`:root`):

| Token | Value | Use |
|---|---|---|
| `--bg` | `#030303` | page background |
| `--surface` / `--rv-card` / `--card-hover` | `#080808` / `#0a0a0a` / `#121212` | surfaces |
| `--gold` | `#22d3ee` (cyan — name is legacy) | primary accent |
| `--gold-light` / `--gold-dim` | `#67e8f9` / cyan 15% | accent variants |
| `--indigo` / `--indigo-light` | `#6366f1` / `#818cf8` | secondary accent |
| `--emerald` | `#10b981` | tertiary accent |
| `--rv-muted` | `#a3a3a3` | muted text |
| `--stack-icon-surface` | `#3a4650` | icon tile bg (brightened) |
| `--stack-icon-border` | `rgba(255,255,255,0.35)` | icon tile border (brightened) |
| `--stack-label` | `#ffffff` | stack labels (brightened) |

Utilities: `.glass-panel`, `.dot-pattern`, `.btn-primary` (pill button), film-grain overlay via `body::before`.
Fonts via Tailwind `@theme`: `font-sans` Inter, `font-display` Fraunces, `font-mono` Space Grotesk, `font-headline` Syne, `font-code` JetBrains Mono, `font-script` La Belle Aurore.

**Design references** (not built): `stitch_modern_glow_portfolio/luminous_portfolio_system/DESIGN.md` describes an alternative neon-green (#00FF41) "Luminous Portfolio System" (Syne/Inter/JetBrains Mono, pill nav, 4px module gap, 120px section gap, glow instead of shadow). The live site uses cyan/indigo/emerald instead. Other folders hold Stitch mockups (`solige_pullaiah_ai_portfolio_2026_*`, `project_details_solige_pullaiah`, hero variants, gallery) and a Behance graphic-design extract.

`Ravindra_portfolio.md` documents a different person's portfolio (TanStack Start, Gold/Indigo/Emerald, 3D hyperspace intro, train-route journey, `.reveal`, spinning conic-gradient `.btn-primary`, custom cursor, film grain). It is **inspiration only** — the palette naming (`--gold/--indigo/--emerald`, `--rv-*`) was borrowed from it.

---

## 9. Assets & logo inventory

`src/assets/logos/` (all used unless noted):

| File | Used by | Notes |
|---|---|---|
| `flask.svg` | Tech Stack › Flask | devicon, recoloured white |
| `nodejs.svg` | Tech Stack › Node.js | devicon original |
| `vercel.svg` | Tech Stack › Vercel | white triangle |
| `sqlite.svg` | Tech Stack › SQLite | devicon original |
| `railway.svg` | Tech Stack › Railway | lobehub, `fill=#FFFFFF` |
| `cursor.svg` | AI Tools › Cursor | lobehub, white |
| `groq.svg` | AI Tools › Groq | lobehub, white |
| `langchain.png` | AI Tools › LangChain | cropped parrot+chain from user's `LangChain.webp`, white made transparent |
| `gmail.svg` | Contact › Mail | multicolour Gmail "M" |
| `placed_puli.png`, `profile_photo.jpeg` | — (source photos, **not committed**) | inputs for the hero portrait composite |

Rule for new monochrome SVG logos: set an explicit `fill="#FFFFFF"` (SVGs using `currentColor` render **black** inside `<img>` and vanish on the dark cards).

### Hero portrait provenance
`portrait-smile.png` = body/shoulders from `profile_photo.jpeg` (both shoulders complete) + smiling head/collar from `placed_puli.png`, cut out with `rembg` (`u2net_human_seg`), feather-blended around the collar, blue cast removed from the jacket, brightness +10%. Regenerate the same way if the photos change (Python + Pillow + rembg; see git history of this doc's session).

Other assets: `journey-1..6.jpg` (timeline), `project-1..4.jpg` (unused by `data.ts`, which uses Unsplash URLs), `portrait.jpg`, `portrait-cutout.png` (old, unused), `scribble.png`.

---

## 10. Change log — what has been built

Git history (newest first, abridged): `9620453` logos/brightness/portrait → `da68c9e` Restyled Contact section → `50f7ce2`/`2943426`/`9862e1a` Changes → `87a8fc9` Added Contact section & footer → …

Built so far:
1. Full single-page portfolio (Hero, About, Experience journey, Expertise, Works, CodeSnippet, Contact, Footer) with loading screen and animated nav.
2. Data-driven content layer (`data.ts`) with typed projects, research papers, journey stops.
3. Project/research **detail modals** with overview, highlights, metrics, tech chips, GitHub/paper links.
4. **Three.js infinite gallery** for the journey, with visitor image uploads persisted in `localStorage`.
5. Contact section restyle: 3 link cards with logo tiles; footer with availability badge.
6. **Tech Stack logo fixes** — replaced wrong/invisible logos with official ones: Flask (was black-on-dark), Vercel, SQLite, Railway (was remote URL), Node.js, Cursor, Groq (SVG instead of PNG + invert hack), LangChain (user-supplied real logo; the old SVG was LangSmith-like and was deleted).
7. **Gmail logo** for the Mail card; contact icons now fill their tiles (`p-0`, tile 56px, `p-1` on image).
8. **LangChain tile** enlarged (`w-full h-auto`).
9. **Brightness pass** on 03/Tech Stack and Get In Touch: lighter tiles, stronger gradient borders and hover glows, white labels, lighter card backgrounds, brighter contact cards/hints/arrows.
10. **Hero portrait replaced** with the smiling composite (complete shoulders); removed opacity fade so heading text no longer shows through the face during load.
11. Pushed to GitHub `main` (commit `9620453`).
12. This `portfolio.md` consolidation.
13. **Confirmed profile facts** (display name Solige Pullaiah, GitHub puli-pro, role AI Engineer at Hrud.ai, stay in the dark theme) recorded in `about_me.md` / this file; footer GitHub link fixed.
14. **My Skillset** (`Skillset.tsx`): spotlight bento cards, "where used" rows, marquee; badges numbered 01–04.
15. **My Process** (`Process.tsx`): owner's flow as six steps, lens switcher, feedback-loop banner.
16. **Achievements** and **Professional Soft Skills** (resume-backed only).
17. **Contact form** delivering as a text to +91 93466 80696 (SMS / WhatsApp / email fallbacks).
18. **Work Experience** (Hrud.ai): seven projects from the owner's notes; DevTools Control Center first with the per-seat cost problem (platforms × price per seat × developers); Job Galaxy second.
19. **Animated project visuals** (`ProjectVisual.tsx`, 11 kinds): Works (RAG, job-search agent find→match→apply, English→Telugu/Tamil MoE translation, speech→lip-sync) and the seven Hrud.ai cards.
20. **Project detail view fixes:** rendered through a portal (was hidden under the floating nav), floating Back-to-Works/close buttons in the empty corners (a full-width bar overlapped the animation; sticky bars also failed inside blurred/transformed parents), animation on its own full-width area above the title, centring bug that clipped the top of tall panels fixed (`my-auto`), card visuals fixed-height so there is no empty gap.
21. **Styling fix:** `ProjectVisual` no longer sets `relative`, which was overriding `absolute inset-0` and letting the SVG overflow/crop on wide screens.
22. **Sentence-case headings** (removed forced uppercase from section titles).
23. **Top-right "Hire Me" button** in `AnimatedNav`.
24. **Readability / contrast pass (2026-10-06):** a script measured text contrast across the whole page (59 failing text elements before, 0 real failures after). Faint text utilities were raised (`text-white/10-30` → `/35-65`, `/40-60` → `/70-80`, muted-with-alpha → `/90`), 9-10px labels → 11px, the indigo accent used for text lightened (`129,140,248`), SVG labels inside project visuals enlarged and brightened, and the footer © line, links and "thank you" line made clearer (sentence case, tighter tracking). Rule going forward: no text below `white/65` (or 11px) unless purely decorative.

25. **DevTools Control Center visual redesigned (2026-10-10):** hub (developer + `</>`) with an orbit of Vercel, GitHub (real logo path) and Supabase nodes, orbiting dots, RBAC role chips, the 7 branch-policy checks, auto branch cleanup, integration-health bar and the expiry/downgrade alert. Based on `src/assets/logos/DevTools_Image.png` (redrawn in SVG, site colours). **Vercel project count still missing** (owner has not given the number).
26. **Selected Works heading** restyled to match the other section titles (centred pill + gradient heading + lead line).
27. **My Process left column fixed:** `overflow-hidden` on the section stopped the sticky intro from pinning, leaving empty space beside steps 3–6. Now `overflow-x-clip`, plus a live "You are at 03 / 06" step tracker (click to jump, progress bar).
28. **Hero heading fit:** "AI ↗ Engineer" / "& ML Researcher" were wider than the screen (text 1668px in a 1319px box on a laptop). Sizes reduced to `9.4–9.6vw` / `7.1vw`; portrait size/position restored to the original (`h-[62vh] md:h-[72vh]`, head overlaps the heading by design).
29. **SEO (`index.html`):** real `<title>`, description, author, `theme-color`, Open Graph, Twitter card and JSON-LD `Person` (Hrud.ai, Vignan's, Hyderabad, email, LinkedIn/GitHub/X). Still missing: `og:image`, `og:url`, canonical, favicon (need a deployed URL, a share image and an icon).
30. **Location changed to Hyderabad, India** (hero line, SEO description + JSON-LD, README, about_me, footer status "Hyderabad, India / Remote"). The resume PDF / `Resume-pullaiah.md` and the college (Vignan's, Visakhapatnam) are unchanged.
31. **About paragraph** replaced with the owner's new objective text ("AI Engineer with hands-on experience…") and restyled (`text-lg md:text-xl text-white/75`).
32. **Resume:** `Resume-pullaiah.md` rewritten to match `Solige_Pullaiah_Resume_AI.pdf`; PDF copied to `public/` (served at `/Solige_Pullaiah_Resume_AI.pdf`); **resume modal** (`ResumeModal.tsx`: PDF preview, Download, Open, Esc / click-outside close). Opened from the nav "Resume" button, the About "Download Resume" button (it previously had no action) and a "View & download resume" button in Contact. On phones the preview may not render, so a fallback line points to Download/Open.
33. **Contrast pass 2:** `--rv-muted` `#a3a3a3` → `#cdd2da`; every `text-white/NN` raised one or two steps (65→80, 70→83, 75→86, 80→90, 85→92); footer © line 13–14px / 90% with normal tracking. Audit over the fully scrolled page: 0 text items under 4.5:1 (skips text still fading in and text over images).
34. **Nav on phones:** the nav was 401px wide in a 326px space ("Works" cut off). "Home" is hidden below `md` (the SP logo goes home) and spacing tightened; links `white/90`, bar darker with a clearer border. The Resume button next to Hire Me restyled (solid dark, 2px cyan border) so it reads as a button.
35. **Phone action bar:** top-right Resume / Hire Me are desktop/tablet only; on phones a slim bottom pill (Resume + Hire Me) slides in on **scroll-up** and away on scroll-down, and stays hidden near the top (< 300px).
36. **Footer:** Twitter → https://x.com/puli_pullaiah (new tab); also added to JSON-LD `sameAs`.
37. **Contact heading** ("Let's Build Something") restyled to match other titles; tagline now "Open to AI/ML internships, full-time roles, freelance projects & meaningful collaborations." (wraps and centres on phones).
38. **Loader lockup:** more space between the "Portfolio" lockup and the name so the name no longer overlaps the tail of the script "f" (name block margin `mt-28 md:mt-48`).
39. **Growth path at Hrud.ai (first version):** `GROWTH_STAGES` in `data.ts` + `GrowthPath` in `WorkExperience.tsx` — four selectable stages (AI Intern → AI Team Lead → DevOps & Architecture Engineer → AI Research Engineer) with a detail panel, placed under the role card. **Layout is under discussion — see §16.15.** Descriptions were written from resume facts only; no dates.

40. **Hrud.ai two-tab switch (2026-10-11):** `WorkExperience.tsx` now has a segmented switch with a sliding cyan highlight — **Role & Growth at Hrud.ai** (role card + growth track) and **Projects at Hrud.ai (7)** (project grid only). Opens on Projects. One context line above the switch ("AI Engineer · Hrud.ai · Jan 2026 – Present"); count on the Projects button; `role="tablist"` / `tab` / `tabpanel`, arrow-key navigation, cross-fade, `min-h-[34rem]` to limit page jump. The CodeForces strip stays below the tabs (different employer).

Recent commits (newest first, abridged): `d3933ae` portfolio overwritten → `d0e517a` Let's Build + fixed buttons → `502f8da` font colours, twitter links → `8c2b74a` About summary, Hyderabad, SEO → `a7e73f3` components/assets/config → `040dfad` project view + docs → `bff2397` Hire Me + DevTools first. Items 33–39 may still be uncommitted; run `git status`.

---

## 11. Pending work / TODO

### High priority (before sharing the portfolio)
- [x] ~~Footer GitHub link~~ now points to `https://github.com/puli-pro`.
- [x] ~~Footer Twitter link~~ now points to https://x.com/puli_pullaiah.
- [x] **`index.html` metadata:** title, description, Open Graph, Twitter card, JSON-LD, `theme-color` done (item 29).
- [x] `og:url`, canonical and JSON-LD `url` added (2026-10-11, live URL https://soligepullaiah.vercel.app/).
- [ ] Still to add to `index.html`: `og:image` (needs a 1200×630 share image in `public/`) and a favicon.
- [ ] **Real project screenshots:** animated visuals now represent each project, but `projects[]` / `researchPapers[]` still carry Unsplash fallback images (unused when `visual` is set); add real screenshots/diagrams to case studies when available.
- [ ] **SyncVerse links:** no `github`/`paperUrl` yet; add if/when public (the `DetailModal` handles missing links).
- [ ] **Verify claims:** "15+ Systems shipped" in `ABOUT_STATS` is not supported by resume; confirm or change.
- [x] **Deployed** on Vercel (https://soligepullaiah.vercel.app/); URL added to README and SEO tags.
- [x] Live URL added to `Resume-pullaiah.md`. [ ] Still to add it to the resume PDF (owner).
- [x] **Resume download:** PDF in `public/` + modal with Download (nav, About, Contact) — done (item 32).
- [ ] **Contact delivery — Approach 4** (Vercel `/api/contact` + Resend; honeypot + validation + rate limit; `wa.me` / `sms:` / `tel:` links): full plan in [`Contact_Form_Plan.md`](Contact_Form_Plan.md) — see §16.17.
- [ ] **Contact delivery fallback — Approach 1** (Web3Forms) if delivery is needed immediately (same plan file, §4).
- [ ] *(Later, optional)* **SMS notification via Twilio / MSG91 / Fast2SMS** on top of the email flow — steps kept in [`Contact_Form_Plan.md`](Contact_Form_Plan.md) §5.
- [ ] **Animated mascot** (from the "Make Your Own Mascot" guide): full plan in [`Mascot_Plan.md`](Mascot_Plan.md) — see §16.16.
- [x] **Growth & Projects at Hrud.ai layout:** Option B (two-tab switch) chosen and built — see §16.15. [ ] Owner still to review the stage wording / dates / role title.
- [ ] **Vercel project count** for the DevTools Control Center card/visual (owner to supply the number).
- [x] `README.md` and `portfolio.md` committed and kept up to date.

### Content to add (from resume, not yet on site)
- [x] Leadership & achievements — done (Achievements + Soft Skills sections).
- [ ] Certification (CCNA: Introduction to Networks)
- [ ] Skills not shown as tiles: PyTorch, scikit-learn, XGBoost, OpenCV, YOLOv8, MLflow, Optuna, SHAP/LIME, Hugging Face Transformers (consider PyTorch/OpenCV/Supabase/Gemini tiles)
- [ ] Education block with scores (partially present in journey markers)
- [ ] Hrud.ai / CodeForces logos in "Worked with" row (currently plain text)

### Engineering / quality
- [ ] **Offline-safe logos:** ~19 tiles + LinkedIn/GitHub still load from CDNs (jsDelivr, simpleicons, huggingface, lobehub). Download into `src/assets/logos/` for reliability.
- [ ] **Mobile/tablet pass:** verify Hero (portrait vs headline overlap), Three.js gallery touch behaviour, contact cards, modals at ≤ 480 px. (Only narrow desktop windows were checked so far.)
- [ ] **Accessibility:** alt text review, focus states on cards/modals, `prefers-reduced-motion` for heavy animations, keyboard close for `DetailModal`.
- [ ] **Performance:** `portrait-smile.png` and `portrait-cutout.png` are large PNGs → export WebP/AVIF; lazy-load below-fold images; check Three.js bundle size (code-split the gallery).
- [ ] **Typing:** `StackCard` uses `skill: any` and `(PORTFOLIO_DATA as any)`; use the `Skill` type; add `techStack`/`aiTools` types.
- [ ] Split the ~1200-line `App.tsx` into `sections/*.tsx` components.
- [ ] Remove dead code/deps: `portrait-cutout.png`, unused `project-*.jpg`/`portrait.jpg`/`scribble.png` if not needed; `express`, `@google/genai`, `dotenv` unless a backend is added; rename package from `react-example`.
- [ ] Fix `components.json` (references nonexistent `src/styles.css`, `@/components/ui`) or delete it; pick one package manager (Bun **or** npm) and track one lockfile.
- [ ] Add a basic test/CI (type-check + build on push).

### Nice-to-have features
- [ ] Working contact form (Formspree/Resend/Supabase edge function) or "copy email" button
- [ ] AI chat assistant "Ask about Pavan" using Gemini/Groq + RAG over resume (uses the already-installed `@google/genai`; needs a server/edge function so the key isn't exposed)
- [ ] Blog/writing page, certifications page, dedicated project pages with routes
- [ ] Availability badge driven by data instead of hard-coded text
- [ ] Analytics (Plausible/Vercel Analytics)

---

## 12. Known issues & inconsistencies

| Issue | Where | Suggested fix |
|---|---|---|
| Location: site now says **Hyderabad** (owner-confirmed 2026-10-11) but the resume PDF / `Resume-pullaiah.md` still say Visakhapatnam | resume files | Owner to update the PDF; then update `Resume-pullaiah.md` and re-copy to `public/` |
| Role title: site/resume say **AI Engineer**; owner describes a growth path ending as **AI Research Engineer** | Work Experience role card, resume, SEO | Decide whether to rename (see §16.15 open questions) |
| Preview pane stops animating when the app window is hidden (`AnimatePresence` transitions look stuck, screenshots time out) | local testing | Click/screenshot to wake the pane; not a code bug |
| ~~Role conflict: "AI Intern" vs "AI Engineer" at Hrud.ai~~ **Resolved** — owner confirmed **AI Engineer** | `about_me.md` updated | — |
| Token `--gold` is actually cyan | `index.css` | Rename to `--accent` (touches many usages) |
| Hero portrait is a composite; fine detail near the collar/hair edge may show slight artefacts on large screens | `portrait-smile.png` | Replace with a single studio smiling shot when available |
| Hero portrait loads after text on slow networks | `Hero` | Preload the image or hold the loader until decoded |
| Vite dev server stops between sessions; the preview tab can become hidden (screenshots/animations freeze while `document.hidden`) | local env | Restart with `npm run dev` / preview_start; verify with the tab visible |
| `.relative` + `.absolute` on the same element: Tailwind picked `relative` and broke `inset-0` (fixed in `ProjectVisual`) | components | Pass positioning from the caller; do not put it in the base class |
| `position: fixed` children are trapped by ancestors with `backdrop-filter`/`transform` (this broke the first Back bar) | modals | Render fixed controls as siblings of the blurred backdrop (portal) |
| Windows CRLF warnings on commit | git autocrlf | Add `.gitattributes` (`* text=auto eol=lf`) |
| ~~`README.md` never committed~~ **Resolved** — README and portfolio.md are committed | — | — |

---

## 13. Ideas backlog (from `21st_dev.md`)

Curated component inspirations (all dark-theme demos at 21st.dev) that could be adopted:
sidebar / limelight / mobile menus · sign-in page · expand-to-half-screen panel · omni command palette (search) · focus cards gallery · scroll-and-expansion, interactive globe · image comparison slider · feature showcases (Bauhaus card, glowing effect, 3D folder, morphing card stack, bento grid, vertical image stack) · data tables · video showers / onboarding checklist · loaders · shine-border demo · settings panel · **AI voice input, AI chat assistant, AI prompt box** · smart combo box · typewriter text · model/agent planning view · animated testimonials · calendar (cal.com) · pixel-perfect hero and particle-text-effect (portfolio hero candidates) · reference sites: campsite.com, opensea.io, AI Studio product mockup.

Best fits for this portfolio: **command palette**, **bento grid** for About/skills, **glowing effect/shine border** for cards, **animated testimonials** (once references exist), **AI chat assistant**, **typewriter** hero subtitle.

---

## 14. How-to recipes

**Add/replace a tech-stack logo**
1. Put an SVG/PNG in `src/assets/logos/` (white `fill` for monochrome marks).
2. `import logoX from "./assets/logos/x.svg";` in `data.ts`.
3. Add `{ id: "tsNN", name: "X", imageUrl: logoX }` to `techStack` (or `aiTools`).
4. For wide logos, add a name check in `StackCard` like the existing `LangChain` one.

**Add a project or research paper** — append to `projects` / `researchPapers` in `data.ts` following the `Project` interface (title, category, image, tags, subtitle, year, role, overview, highlights[], tech[], metrics[], github/paperUrl). Cards and modals render automatically.

**Add a journey stop** — append to `JOURNEY` with an imported image; the gallery and `ActiveStopPanel` pick it up.

**Add a contact link** — append to `CONTACT_LINKS` in `App.tsx` (`label`, `value`, `href`, `logo`, `hint`); grid is `md:grid-cols-3`, adjust if adding a 4th.

**Change the hero portrait** — replace `src/assets/portrait-smile.png` (transparent PNG, subject cropped tight, shoulders complete). Keep the y-only animation to avoid text bleed-through.

**Tweak brightness/theme** — edit `--stack-icon-*` / `--stack-label` in `index.css`, gradient border in `StackCard`, and contact card classes in `Contact`.

**Publish** — `npm run build`, deploy `dist/` (e.g. Vercel), or push to `main` and let Lovable sync.

---

## 15. Rules & conventions

- **Lovable sync:** never force-push or rewrite pushed history on `main` (see `AGENTS.md`). Keep the branch in a working, building state.
- **Content truth:** `about_me.md` (identity) and `Resume-pullaiah.md` (latest facts) are authoritative; don't invent achievements, metrics or links.
- **No secrets in the repo:** API keys only via `.env.local` / host secrets.
- **Logos:** prefer local SVGs with explicit white fill for dark UI; don't rely on `currentColor` in `<img>`.
- **Animation:** don't fade the hero portrait (text bleeds through); animate position only.
- **Commit style:** small commits, descriptive messages; source photos (`placed_puli.png`, `profile_photo.jpeg`) are intentionally not committed.
- **Design references** (`stitch_modern_glow_portfolio/`, `Ravindra_portfolio.md`, `21st_dev.md`) are inspiration only — nothing there is imported by the app.

---

## 16. To Do — Portfolio v2 plan (based on the `portfolio_dhanush.html` reference)

> **Reference reviewed:** `E:\portfolio_dhanush.html` — a single-file portfolio (vanilla JS + GSAP/ScrollTrigger + Lenis) for another AI engineer. It is used here **only as a structure / interaction / layout reference**. Do **not** copy its text, name, photo, red brand colour or embedded resume. All content below is Pullaiah's own, taken from `Resume-pullaiah.md`, `about_me.md` and `src/data.ts`. Items marked **❓ OWNER** need facts only the owner can supply — nothing is invented.

### 16.0 Status summary (2026-10-11)

| Plan section | Status |
|---|---|
| 16.3 My Skillset | ✅ built |
| 16.4 My Process | ✅ built |
| 16.5 Projects / papers / work (cards, animated visuals, case-study view) | ✅ built; ⏳ real screenshots, SyncVerse links, Sign2Speak project, extra metrics from owner |
| 16.6 Work Experience | ✅ built (Hrud.ai 7 projects + CodeForces) |
| 16.7 My Journey (vertical timeline, new milestones) | ⏳ pending (owner dates for Sign2Speak, Super Speaker, graduation) |
| 16.8 Professional Soft Skills | ✅ built (resume-backed only) |
| 16.9 Achievements | ✅ built (certifications / CCNA not added) |
| 16.10 Those Who Shaped Me | ⏳ not started (needs people + "on my own" list) |
| 16.11 Contact Me | ✅ built (SMS delivery limited to the visitor's device; provider-based auto-SMS pending account/keys) |
| 16.12 Resume PDF / SEO / a11y | ✅ resume modal + PDF, SEO/OG/JSON-LD; ⏳ og:image/favicon/canonical, skip link, focus rings, reduced-motion audit |
| 16.17 Contact delivery (Approach 4: Vercel function + Resend) | ⏳ planned — see [`Contact_Form_Plan.md`](Contact_Form_Plan.md) (needs Resend account / Vercel env vars) |
| 16.16 Animated mascot | ⏳ planned — see [`Mascot_Plan.md`](Mascot_Plan.md) (needs owner decisions) |
| 16.15 Growth and Projects at Hrud.ai | ✅ **Option B built (2026-10-11):** two-tab switch "Role & Growth at Hrud.ai" / "Projects at Hrud.ai (7)"; opens on Projects — see §16.15 |
| Top-right Hire Me | ✅ built |

### 16.1 What the reference does (analysis)

**Section order:** Loader → Hero → Hello/About → Skillset → Process → Projects (stacked) → "Beyond the code" → Work Experience → Journey → Certifications → Soft Skills → Contact → Footer, plus a case-study slide-over and a resume modal.

**How content is organised** — every section is data-driven from one `CONFIG` + arrays block (`PROJECTS`, `EXPERIENCE`, `SKILLSET`, `JOURNEY`, `CERTS`, `SOFT`, `BEYOND`); empty strings hide links. Same idea as our `data.ts`, so we extend `data.ts` rather than hard-code JSX.

**Design language (what makes it feel premium):**

| Area | Reference technique | Adopt for us? |
|---|---|---|
| Page rhythm | Sections alternate **dark → accent → white → dark** bands separated by animated SVG **wave dividers**; small twinkling **star** glyphs on accent bands | ✅ Yes — banded layout with our palette (see 16.2) |
| Typography | **Archivo** variable font at wide width (`font-stretch` 108–125%), uppercase heavy headings, `clamp()` sizes, **JetBrains Mono** for labels, **Caveat** handwriting for "Ready to ship!" | ✅ Keep Syne/Inter/JetBrains Mono; optionally add Caveat for one handwritten flourish |
| Labels | Rounded **pill** above every heading ("Technical Stack", "My Process", "Milestones"…) | ✅ Yes |
| Loader | Full-screen colour panel, name letters animate in, panel wipes away (clip-path) | ✅ Restyle our existing 2 s loader the same way |
| Motion | GSAP + ScrollTrigger split-word heading reveals (`data-split`), `.rv` fade-up on scroll, **Lenis** smooth scroll, magnetic buttons, custom cursor + "View" ring on project previews | ✅ Recreate with `motion` (already installed); Lenis optional; respect `prefers-reduced-motion` |
| Hero | Big portrait that **tilts/parallaxes with the cursor** (touch too), glow that moves opposite, typing **role rotator** (AI Engineer / Full-Stack / GenAI Builder), spinning "Open to work" badge, scroll cue | ✅ Yes — keep our headline-behind-portrait layout, add cursor parallax + role rotator + badge |
| About | Photo inside a hanging **ID-card badge** (strap + clip), 4 icon chips, 3 stat counters that count up | ✅ Yes — ID card with `portrait-smile.png`; keep our stats (fix the "15+" claim) |
| Skillset | 3-column grid of **category cards**; each row = skill name + small italic *"where I used it"* | ✅ Yes — exact format in 16.3 |
| Process | White band; 4 **scattered, rotated paper cards** (01–04) with a handwritten "Ready to ship!" at the end | ✅ Yes — 16.4 |
| Projects | **Sticky stacked cards** (each pins under the previous), tag pill, big number, summary, chips, "Case study" + "Live demo"/"GitHub" buttons, and an **animated mock UI** preview per project; card click opens the case study | ✅ Yes — sticky stack + case-study slide-over with `#project/<id>` deep links (we already have `DetailModal`; upgrade it) |
| Case study | Problem → Solution → Architecture (chain of steps) → Contribution → Results | ✅ Yes — map onto our `overview / highlights / tech / metrics` and add `problem`, `architecture[]`, `contribution`, `results` |
| Experience | 2-column cards: date, badge, role, org, summary, **Key contributions**, big metric, **Technologies** chips | ✅ Yes |
| Journey | Vertical timeline whose line **draws on scroll**, badge per stop (SCHOOL / UNIVERSITY / INTERNSHIP / SPEAKING / MILESTONE), "hot" highlights | ✅ Merge with our existing `JOURNEY` (keep the 3D gallery as a bonus) |
| Certifications | 3-col cards with award/book icon; "course" variant for coursework | ✅ Yes |
| Soft skills | 3-col emoji cards | ✅ Yes (16.8) |
| Contact | Giant "CONTACT" word, side link list, **form (First / Last / Email / Message + permission checkbox)** that builds a `mailto:` with subject + body, animated floating labels, validation, status line, "Email me directly" button | ✅ Yes — 16.11 |
| Chrome | Fixed nav with active-section highlight + "Hire Me", full-screen mobile menu, left **social rail**, resume **modal + download**, footer with giant name + "Available for opportunities" | ✅ Yes |
| Quality | Skip link, focus rings, `aria-*`, reduced-motion checks, JSON-LD `Person` schema, OG/Twitter meta, `theme-color` | ✅ Yes (ties to the §11 SEO/a11y items) |

### 16.2 Design plan for our portfolio

**Decision (CONFIRMED by owner): stay in our current theme only** — fully dark "deep space" with cyan / indigo / emerald. No light bands, no red, no palette change. Adopt only the reference's *structure, layout patterns and motion* (pills, split-heading reveals, sticky project stack, timeline, cards) re-skinned in our existing tokens. Where this document mentions "light band" or "accent band" below, read it as **a dark section with a slightly different surface** (`--surface` / `--rv-card`, a faint indigo or cyan glow, and dividers), not a colour change.

| Token | Value | Role |
|---|---|---|
| `--bg` | `#030303` | dark band (default) |
| `--surface` / `--rv-card` | `#080808` / `#0a0a0a` | alternate section surfaces for rhythm (instead of coloured bands) |
| glow accents | indigo `#6366f1` / emerald `#10b981` at 5–12% opacity | subtle per-section ambient glow (already used in Contact/Footer) |
| `--gold` (cyan) | `#22d3ee` | accents, active nav, buttons |
| Fonts | Syne (headings, wide/uppercase), Inter (body), JetBrains Mono (labels/chips), optional Caveat (one flourish) | |

Rules: pill label above each H2 · uppercase heavy headings with split-word reveal · wave dividers between bands · rounded-2xl cards with 1px hairline borders · one custom cursor ring ("View" over project previews) on fine pointers only · all motion disabled under `prefers-reduced-motion` · keep the hero rule: **portrait animates position only, never opacity** (text bleed-through bug, see §12).

**Target section order & nav:**
`Home · About · Skills · Process · Projects · Experience · Journey · Achievements · Shaped Me · Contact`
Nav items: Home, About, Skills, Projects, Experience, Contact + "Hire Me". Process/Journey/Achievements/Shaped-Me map to their parent nav item (like the reference's `toNav` map).

### 16.3 My Skillset — exactly how it is presented

**Format (copy the reference exactly):** section pill "Technical Stack" → H2 **"My Skillset"** → lead line *"The languages, frameworks, AI tools and cloud services I build with — and where I've used them."* → grid of **category cards** (3 columns desktop / 1 mobile). Each card = coloured dot + category title, then rows of `skill name` (left) + *where it was used* (right, small italic, optional/blank allowed).

Data shape: `SKILLSET = [{ title, items: [[skillName, whereUsed], …] }]`.

**Proposed content (facts from resume/projects only; ❓ = no verified project yet — leave the second value empty or fill it in):**

| Category | Rows (skill → where used) |
|---|---|
| **AI / GenAI** | RAG pipelines → Ollama Document Assistant, Hrud.ai · LLM applications → Hrud.ai (Gemini) · Multi-agent systems → AI Job Intelligence Agent · Embeddings & vector search → FAISS / Chroma · Prompt engineering → Hrud.ai · Autonomous agents (memory + tools) → Hrud.ai |
| **Deep Learning** | PyTorch → LaMaTEPP, SyncVerse · TensorFlow → ❓ · PyTorch Lightning → ❓ · Hugging Face Transformers → LaMaTEPP · Transformers / attention → LaMaTEPP, SyncVerse |
| **NLP** | Machine translation → LaMaTEPP · Tokenization → LaMaTEPP · Evaluation (BLEU, chrF, BERTScore, COMET) → LaMaTEPP |
| **Computer Vision & Multimodal** | OpenCV → SyncVerse · wav2vec2.0 / HuBERT → SyncVerse · CNNs, YOLOv8, face recognition, ANPR → ❓ (resume skills; add a project if there is one) |
| **Languages** | Python → all ML/LLM work · JavaScript → ❓ · TypeScript → this portfolio |
| **Backend & Data** | FastAPI → Ollama Assistant, Job Agent · Supabase / PostgreSQL → AI Job Intelligence Agent, Hrud.ai · ETL & feature engineering → CodeForces internship · SQL → ❓ |
| **MLOps & Explainability** | Docker → ❓ · MLflow, Optuna → ❓ · SHAP, LIME → ❓ · Model deployment → ❓ |
| **Cloud, Tools & Platforms** | Vercel, Railway, GCP, GitHub, Git, VS Code · Cursor, Claude Code, Google AI Studio, Groq, LangChain, n8n, OpenAI, Hugging Face → day-to-day tools (❓ pick "where used") |

**Keep** the existing logo-tile grids (Tech Stack / APIs & AI Tools) as a **visual strip under the cards** — logos for recognition, cards for depth.

To do:
- [x] **DONE (2026-10-01):** `SKILLSET` in `data.ts` + `src/components/Skillset.tsx` (spotlight bento cards, marquee, rows with "where used"; shown at the top of the Expertise section above the logo grids). Categories: AI & ML (ML, DL, NLP, RAG, LLMs, Agents, Prompt Engineering), Languages (Python), Databases (Supabase, PostgreSQL, SQLite, MySQL + vector: Pinecone, FAISS & Chroma), Cloud & DevOps (Azure, Vercel, GitHub).
- [ ] ❓ OWNER fill the "where used" blanks or delete rows you can't back with a project.
- [ ] Row hover state (cursor ring grows, row highlights) like the reference's `.sr-row`.

### 16.4 My Process — "Here's how I turn ideas into real-world applications"

Layout: **light band**, left intro (pill "My Process", H2 *"Here's how I turn ideas into real-world applications"*, sub-line *"A structured, practical approach to taking an AI idea from a problem statement to a product people can use."*), then **four white cards, slightly rotated and scattered in a zig-zag** (desktop) / stacked (mobile), numbered 01–04, ending with the handwritten **"Ready to ship!"**. Hover: lift + scale.

Pullaiah-specific copy (ML-flavoured; edit freely):

| # | Title | Text |
|---|---|---|
| 01 | **Research** | I start with the problem, the users and the data available — read the papers, define metrics and constraints, and decide where AI actually helps. |
| 02 | **Design** | Model and system architecture: data pipeline, retrieval/embeddings or model choice, prompts, evaluation plan, and an interface that makes the AI easy to trust. |
| 03 | **Build & Evaluate** | Train / integrate the model, build the API and data layer, then measure it properly (BLEU/COMET, retrieval quality, latency) and iterate with stakeholders. |
| 04 | **Deploy & Improve** | Containerise and ship (Vercel / Railway / cloud), monitor real usage, and keep improving. |

- [x] **DONE (2026-10-02):** `src/components/Process.tsx` + `PROCESS_STEPS` / `PROCESS_LENSES` in `data.ts`, placed after Expertise (`#process`). Owner's flow: Understand the Problem → Plan the Architecture → Check What Already Exists (reuse/adapt/build; loop back to Step 02 if helpful) → Design → Build & Evaluate → Deploy & Improve. Customised beyond the plan: 6 steps instead of 4, a **lens switcher** (Research Paper · ML/DL/NLP · RAG · Agents) that changes each step's "In practice" text, per-step "Output" artifact, a feedback-loop banner and a scroll-drawn progress line (dark theme, no rotated cards).
- [ ] ❓ OWNER confirm the 4 step names/wording match how you really work.

### 16.5 What I have done — Projects, Research, Work (content plan)

The site must state clearly, per item: **problem → solution → architecture → my contribution → results → links**. Known facts are below; **❓ OWNER** = missing information to collect before writing final copy.

**A. Engineering projects** (sticky-stack cards + case study)

| Project | Known | ❓ OWNER to supply |
|---|---|---|
| **Ollama LLM Document Assistant** (RAG) | Local Ollama LLMs, FAISS + Chroma vector search, embeddings, semantic search, streaming inference, pluggable embedders; repo `puli-pro/Ollama-llm-document-assistant` | Screenshot/GIF, measured latency/recall, architecture steps, why it was built |
| **AI Job Intelligence Agent** (multi-agent) | JSearch + Adzuna + LinkedIn ingestion → normalisation → Supabase; plan → retrieve → analyze → rank; repo `puli-pro/agents` | Screenshot, results/metrics, live demo if any |
| **Sign2Speak** (hackathon, 3rd place) | Team Lead; achievement is in the resume | What was built, tech, repo/demo → could become a 3rd project |
| Any other builds (face recognition, ANPR, YOLOv8…) | Listed as skills only | Whether these are real projects worth adding |

**B. Research papers**

| Paper | Known | ❓ OWNER |
|---|---|---|
| **LaMaTEPP** — low-resource Indic MT (under review) | MoE adapters, doc memory, MLM regularization, MMCBS+ beam search, MBR reranking, +5–10 BLEU vs mBART; Drive link | Author list/venue, dataset/language pairs, architecture diagram |
| **SyncVerse** — speech-driven lip-sync | wav2vec2/HuBERT, lip encoders, cross-modal attention; LSE-D ↓18%, LSE-C ↑12%, SSIM ↑9% | Paper/preprint link, demo video, venue status |

**C. Work experience projects**

| Where | Known | ❓ OWNER |
|---|---|---|
| **Hrud.ai — AI Engineer** (Jan 2026 – present) | Production LLM (Gemini) systems, RAG pipelines with vector search, autonomous agents with memory/tools, Supabase backends, team lead | Named products/features shipped, metrics, what is public vs confidential |
| **CodeForces — AI/ML Intern** (May–Aug 2024) | Data preprocessing, feature engineering, NN experimentation, **+12%** model performance | Which model/task the +12% refers to |

To do:
- [ ] ❓ OWNER answer the tables above (one message is enough; it can then be turned into `data.ts`).
- [ ] Extend the `Project` type: `problem`, `solution`, `architecture: string[]`, `contribution`, `results`, `links.live`, `links.github`, `featured`, `visual`.
- [x] **DONE (2026-10-05):** animated mock-UI previews in `src/components/ProjectVisual.tsx` (keyframes in `index.css`, `visual` field in `data.ts`): RAG pipeline (Ollama Document Assistant), plan→retrieve→analyze→rank agents (AI Job Agent), MoE-adapter translation (LaMaTEPP), waveform→lips (SyncVerse). Used on the cards and the detail view. Also: detail view moved to a portal (it was hidden under the floating nav), sticky **Back to Works** bar; section headings are sentence case. Original item: replace Unsplash covers with real screenshots or the animated mock-UI previews the reference uses (a small looping SVG/JS mock per project: retrieval flow for RAG, agent pipeline for the Job Agent, alignment waveform for SyncVerse).
- [ ] Build the sticky-stack `ProjectStack` + slide-over `CaseStudy` with `#project/<id>` routing and Esc/focus-trap.
- [ ] Optional **"Beyond the code"** strip for non-code work (public speaking / anchoring / hackathon leadership).

### 16.6 Work Experience — "Internships where I shipped AI into real applications."

Section: accent band, uppercase H2 **"Work Experience"**, lead line as above, **2-column cards**:
`DATE (uppercase mono)` + badge · role · org · 1-line summary · **Key contributions** (bullets) · **big metric** · **Technologies** chips.

Cards to render (from resume / `data.ts`):

1. **AI Engineer — Hrud.ai (Hybrid)**, *Jan 2026 – Present*. Contributions: production LLM systems (Gemini); RAG pipelines (embeddings + vector search + external knowledge); autonomous agents with memory and tool integration; scalable Supabase (PostgreSQL) backend. Tech: Gemini, RAG, Supabase, PostgreSQL, FastAPI, Python. Badge: **CURRENT**. (Role confirmed as **AI Engineer** — listed on https://hrud.ai/team; so the card badge should read **CURRENT / FULL-TIME-STYLE ROLE**, not "Internship", and the section lead line must not call it an internship.)
2. **AI/ML Intern — CodeForces (Remote)**, *May 2024 – Aug 2024*. Contributions: real-world ML/DL applications; preprocessing + feature engineering + neural-network experiments. Metric: **+12%** model performance. Tech: Python, ML/DL, feature engineering. Badge: **INTERNSHIP**.

- [x] **DONE (2026-10-05):** `src/components/WorkExperience.tsx` + `WORK_PROJECTS` in `data.ts` (`#experience`; the old journey section is now `#journey`). Hrud.ai role card + 7 concise project cards from the owner's notes: Job Galaxy SaaS & Admin Console (featured, merges the two Job Galaxy notes), DevTools Control Center, NCPL Website AI Chatbot, Career Advisor Bot, NTRview Log, Pulse Celebrations v2, Xencomedical client project; plus a CodeForces strip (+12%). Facts only from the owner's text; tech tags limited to what was stated.
- [ ] Update the sub-title copy to *"Internships where I shipped AI into real applications."* (adjust if Hrud.ai is full-time).

### 16.7 My Journey — "From school to shipping AI products."

Format: dark band, pill "Milestones", H2 **"My Journey"**, vertical timeline, centre line that **draws as you scroll**, alternating cards, badge per stop, highlighted ("hot") latest stops.

Existing 6 stops stay (school 2010–20 → CBSE 2020–22 → B.Tech 2022–26 → CodeForces 2024 → research 2025 → Hrud.ai 2026). Add/adjust:
- [ ] Badges: SCHOOL · UNIVERSITY · INTERNSHIP · RESEARCH · HACKATHON · WORK · MILESTONE.
- [ ] Add stops from the resume: **Sign2Speak hackathon (3rd place)**, **Super Speaker Top 2000** (❓ dates), **graduation 2026** (B.Tech CGPA 8.18).
- [ ] Keep the existing Three.js **InfiniteGallery** as an optional "Gallery" view; the timeline becomes the default (better on mobile, lighter).
- [ ] Scroll-linked line-draw animation (`scaleY`).

### 16.8 Professional Soft Skills — "How I work with people, not just code."

Light band, pill "Core Competencies", 3-column emoji cards. Only claims backed by the resume — proposed:

| Emoji | Title | Text (evidence) |
|---|---|---|
| 🧭 | **Leadership** | Team Lead — Sign2Speak Hackathon (3rd place) and Hrud.ai AI engineering projects. |
| 🎤 | **Public speaking** | Anchored technical & cultural events; 2nd prize in Elocution; Top 2000 in Super Speaker S2 (of 2.53 lakh). |
| 💬 | **Communication** | Explains model behaviour and trade-offs clearly to technical and non-technical people. ❓ OWNER confirm |
| 🤝 | **Collaboration** | Works with teammates across research, engineering and product. ❓ OWNER confirm |
| 🚀 | **Ownership** | Takes ideas from paper/prototype to a running system. ❓ OWNER confirm |
| ⏱️ | **Time management** | Balanced final-year studies, research and an industry role. ❓ OWNER confirm |

- [x] **DONE (2026-10-02):** `SOFT_SKILLS` in `data.ts` + `SoftSkills` in `src/components/SoftSkillsAchievements.tsx` (`#soft-skills`). Built **only from resume-backed evidence**: Leadership, Public Speaking, Event Anchoring, End-to-End Ownership, each card listing its evidence. The unconfirmed cards from the table above (Communication, Collaboration, Time management) were intentionally **left out**; add them to `SOFT_SKILLS` if the owner confirms.

### 16.9 Achievements

Card grid (award icon, same component as certifications) — **from the resume**:
- 🥉 **3rd place — Sign2Speak Hackathon** (Team Lead)
- 🎙️ **Top 2000 of 2.53 lakh participants — Super Speaker Season 2**
- 🏆 **2nd Prize — Elocution Competition**
- 🎬 **Anchored multiple technical & cultural events**
- 👥 **Team Lead — Hrud.ai internship** (led AI engineering projects)

Also show **Certifications**: CCNA: Introduction to Networks (Cisco). ❓ OWNER add any others — only CCNA is listed in `about_me.md`.

- [x] **DONE (2026-10-02):** `ACHIEVEMENTS` in `data.ts` + `Achievements` component (`#achievements`, bento grid, 3rd-place card featured). Both sections sit after Works.
- [ ] Remaining: certifications grid (CCNA is only in `about_me.md`, not the resume) and optional count-up stats.
- [ ] ❓ OWNER add dates, hackathon organiser and proof links (certificate/photo) if available.

### 16.10 Those Who Shaped Me — including "on my own"

A new section (not in the reference): **gratitude wall** with two halves.

**(a) People** — card per person: photo/initials · name · relationship ("Mentor", "Professor", "Teammate", "Family", "Friend") · org · one line on *what they taught me* · optional short quote.
**(b) On my own** — the self-directed side: what the owner learned without a teacher (courses, papers, YouTube/blogs, open-source, building things, hackathons, failed experiments). A distinct card set titled **"On my own"** with small icons (book, paper, code, trophy) and one line each.

Data shape: `SHAPED_ME = [{ kind: "person" | "self", name, role, org, lesson, quote?, image? }]`.

**❓ OWNER — please provide (short bullets are fine):**
1. Names + role + one lesson for each person you want listed (mentors at Hrud.ai, professors at Vignan, teachers from Sri Sathya Sai Gurukulam, teammates from Sign2Speak, family/friends). Get their consent to be named publicly.
2. For "On my own": 3–6 things you learned yourself and *how* (e.g., "read the mBART / MoE-adapter papers and re-implemented them", specific courses, channels, communities).
3. Any real quotes you want to keep (otherwise no quotes — none will be invented).

- [ ] Build the `ShapedMe` section (warm accent band, people cards with soft tilt, "On my own" row).
- [ ] Empty-safe: an empty array hides the section (like the reference's "empty strings hide the link"), so it can ship before the content is ready.

### 16.11 Contact Me — not just Mail / GitHub / LinkedIn: add the message form

Current: 3 link cards only. Target (matches the reference):

1. **Giant "CONTACT" word** background (scroll-scaled) + pill "REACH ME".
2. **Link list**: **Email** (`pulipavan696@gmail.com`), **LinkedIn** (`in/solige-pullaiah-478462270`), **GitHub** (`@puli-pro`), **Resume** (View / Download). Keep our Gmail / LinkedIn / GitHub logo tiles.
3. **Message form** with floating labels + inline validation:
   - First Name (required) · Last Name · Email (required, regex-validated) · **"Type your message here"** textarea (required, > 4 chars)
   - Checkbox: *"I give permission to be contacted at this email address."* (required)
   - Note: *"Sending opens your email app with the message ready to go."*
   - Button **Send Message** (spinner while working) + secondary **"Email me directly"** (`mailto:` with subject *"Hello Pullaiah"*)
   - Status line (`aria-live`): success text with fallback mail link, or "Please fix the highlighted fields."
4. **Submit behaviour (phase 1, no backend):** build `mailto:pulipavan696@gmail.com?subject=Portfolio enquiry from {First Last}&body={message}\n\n— {name} ({email})` and open it — the reference's approach.
5. **Phase 2 (recommended):** real delivery without opening a mail app — Formspree / EmailJS / a Supabase edge function (already in the owner's stack) storing messages in a `messages` table + email notification. Add a honeypot field and rate limiting.
6. "Available for opportunities" badge in the footer + a spinning "Open to work" hero badge linking to `#contact`.

- [x] **DONE (2026-10-02):** `src/components/ContactForm.tsx` under the existing link cards. Fields: first name, last name, email-or-phone, message (280 chars), permission checkbox; validation; floating labels. **Delivery: as a normal text to +91 93466 80696** — on a phone, Send opens the SMS app with the message prefilled to that number; on desktop it shows the composed text with *Open SMS app / WhatsApp / Email / Copy* buttons. Side panel offers Text, WhatsApp, Call, Email. Phone number lives in `CONTACT_PHONE` (`data.ts`).
- [ ] **Superseded by §16.17 (2026-10-11):** the plan is now email delivery through a Vercel function + Resend, not Twilio. Old note: a browser cannot silently send an SMS, so the *visitor* sends the text from their own device. Fully automatic delivery from any device needs an SMS provider (Twilio / MSG91 / Fast2SMS) behind a serverless function (e.g. Vercel `/api/contact`) with API keys in env vars — owner must create that account.
- [ ] Add a left **social rail** (mail / LinkedIn / GitHub / resume icons), fixed on desktop.
- [ ] Footer: giant name letters, columns (role/stack line, "B.Tech CSE", availability), links (Email, LinkedIn, GitHub, Resume, Back to top). Fix the Twitter placeholder (§11).
- [x] Phone number shown on the site (owner confirmed: +91 93466 80696, used for contact texts).

### 16.12 Resume, SEO, accessibility (from the reference's "chrome")

- [ ] Add `public/Resume-pullaiah.pdf` and a **Resume modal + Download** (mobile menu, hero button, contact list).
- [ ] `index.html`: real `<title>`, description, `author`, `theme-color`, Open Graph + Twitter card, canonical (once deployed), **JSON-LD `Person`** (name, jobTitle, email, alumniOf: Vignan's IIT, sameAs: LinkedIn/GitHub).
- [ ] Skip-to-content link, visible focus rings, `aria-current` on the active nav item, keyboard-closable modals, `prefers-reduced-motion` handling, custom cursor only on `(hover:hover) and (pointer:fine)`.

### 16.13 Suggested build order (phases)

| Phase | Deliverable | Depends on |
|---|---|---|
| **P0** | Housekeeping from §11: footer links, `index.html` meta, fix stats, commit README/portfolio.md | — |
| **P1** | Banded layout tokens + wave dividers + pill labels + loader restyle + nav (active section, Hire Me, mobile menu, social rail) | design approval (16.2) |
| **P2** | Hero upgrades (cursor parallax, role rotator, open-to-work badge) + About ID-card + stats | P1 |
| **P3** | **Skillset** cards (16.3) + **Process** (16.4) | ❓ "where used" answers |
| **P4** | Projects: extended type, sticky stack, case-study slide-over, mock previews | ❓ project details (16.5) |
| **P5** | Work Experience cards (16.6) + Journey timeline (16.7) | ❓ role/badge decisions |
| **P6** | Soft skills (16.8) + Achievements/Certs (16.9) | ❓ confirmations |
| **P7** | Those Who Shaped Me (16.10) | ❓ people + "on my own" list |
| **P8** | Contact form + resume modal + footer (16.11–16.12) | resume PDF, backend decision |
| **P9** | Mobile/a11y/perf pass, deploy (Vercel), update README + this doc | all |

### 16.14 Information needed from the owner (checklist)

- [x] Hrud.ai role: **AI Engineer** (confirmed; team page https://hrud.ai/team). Still needed: products shipped, public metrics.
- [ ] Sign2Speak: what was built, tech, repo/demo, dates.
- [ ] Screenshots / demo GIFs / architecture diagrams for each project and both papers; SyncVerse link.
- [ ] Which extra skills (TensorFlow, Docker, MLflow, Optuna, SHAP/LIME, YOLOv8, ANPR…) have a real project behind them → fill "where used".
- [ ] Achievement dates and proof links.
- [ ] Soft-skill cards to keep or remove.
- [ ] "Those Who Shaped Me": people (with consent) + the "on my own" list.
- [ ] Contact: show phone? preferred delivery for messages (mailto vs backend)?
- [x] Palette decision: **stay in the current dark theme** (confirmed).
- [ ] Latest resume PDF and the final tagline for the hero role rotator (e.g., *AI Engineer · ML Researcher · GenAI Builder*).

> **Update 2026-10-05:** all 7 Hrud.ai work cards now have animated visuals (`ProjectVisual.tsx`: galaxy, devtools, chatbot, career, interview, pulse, delivery). Project cards in Works use a fixed visual height (`h-64 md:h-72`) instead of an aspect ratio, which removed the large empty gap under the visual.

### 16.15 Growth and Projects at Hrud.ai — planning & implementation

**Goal:** show the owner's career growth at Hrud.ai (**AI Intern → AI Team Lead → DevOps & Architecture Engineer → promoted to AI Research Engineer**) near the Work Experience section, with a single click per stage (like the lens buttons in My Process), **without it getting mixed up with the 7 project cards**.

#### Where we are (implemented)
- `GROWTH_STAGES` in `src/data.ts` (id, label, short, summary, points) and `GrowthPath` in `src/components/WorkExperience.tsx`.
- Placed directly under the role card ("AI Engineer — Hrud.ai") and above the project grid. Four pill buttons with arrows; opens on the latest stage ("Current"), the others show "Step N of 4"; the panel cross-fades.
- Stage text is built **only from resume facts** (Gemini / RAG / Supabase; Team Lead; the control plane across 100+ repos and 55 Supabase projects, 194 CI tests, role-based access; applying new AI techniques to live projects). **No dates.**
- **Problem the owner raised (screenshot, 2026-10-11):** the role card, the growth card and the project cards are all full-width cards with the same border and weight, so the growth path feels mixed into the projects.

#### Options discussed
| # | Option | How it works | Pros | Cons |
|---|---|---|---|---|
| A | **Merged career block + divider** *(designer's first recommendation)* | One card = role header + stat chips + a connected track (dots on a line, current stage glowing, "Promoted" mark) with the stage detail inline. Then a section break "Projects I shipped · 7" before the grid. The career block is full width with a left accent bar and no hover lift; project cards keep their grid and visuals. Phones: vertical track with the line on the left. | Everything visible without clicks; clear hierarchy ("me" vs "what I built") | Longer scroll; more design work |
| B | **Two-tab switch** *(owner's idea)* — "Role & Growth at Hrud.ai" / "Projects at Hrud.ai (7)" | One segmented pill switch under the heading. Tab 1: role card + growth track + detail. Tab 2: project grid only. Sliding cyan highlight, cross-fade, min-height to avoid page jump, arrow-key navigation, proper tab roles, full-width switch on phones. | Cleanest separation; shorter page; consistent with the My Process lens buttons | One tab is hidden until clicked, so some visitors never see it |
| C | **Slim horizontal strip above the role card** | Growth path as a compact strip (not a card) above the role card, one click per stage, short text. | Minimal change; does not compete with the projects | Smaller, easier to miss |
| D | **Move it into "My Journey" (§16.7)** | Treat growth as milestones in the pending vertical timeline. | Natural place for the career story | Far from the Hrud.ai section the owner wanted it next to |
| E | **Separate section after the projects** | Own section below the project grid. | Clear separation | Breaks the expected "role → what I did there" flow |

**Designer's refinements if B is chosen:**
1. **Default to the Projects tab** (recruiters skim; the projects are the strongest content). If the owner prefers the career story first, default to Role & Growth.
2. Keep **one line of role context** above the switch ("AI Engineer · Hrud.ai · Jan 2026 – Present") so it is clear whose work it is in either tab.
3. Show the **count on the button** ("Projects at Hrud.ai · 7") so it signals more content behind the click.
4. Stage names visible on the track itself (the full path is visible without clicking); vertical list on phones.

**Trade-off summary:** B (tabs) = cleaner and shorter; A (merged block) = everything visible.

**DECISION (2026-10-11): Option B built.** Two-tab switch — Tab 1 "Role & Growth at Hrud.ai", Tab 2 "Projects at Hrud.ai (7)". It **opens on Projects** (designer's recommendation); to open on Role & Growth instead, change the initial state in `WorkExperience.tsx` (`useState<WorkTab>("projects")` → `"role"`). The refinements 2–4 below were applied (role context line, count on the button, tab roles / arrow keys).

#### Implementation plan (once a layout is chosen)
1. Decide the layout (A / B / C …) and, if B, the **default tab**.
2. If B: add a `TabSwitch` (segmented control, `role="tablist"`, sliding highlight via `layoutId`), put the role card + `GrowthPath` in tab 1 and the project grid in tab 2, keep a `min-height` on the container (no storage needed).
3. If A: merge `GrowthPath` into the role card, add the track (dots + line, vertical on phones), add the "Projects I shipped · 7" divider, remove the hover lift from the career block.
4. Make sure the nav "Experience" link still lands on the section heading.
5. Re-run the contrast audit; test at 375px and 1366px; test keyboard navigation.
6. Update this document and `README.md`.

#### Open questions for the owner
- [ ] Which layout (A, B, C, D, E) and which default tab?
- [ ] **Dates** for each stage (e.g. "Jan 2026 – …"). None were given, so none are shown.
- [ ] Review the stage descriptions in `GROWTH_STAGES` (written from the resume; correct or extend them with what really changed at each step).
- [ ] Should the role card title change from **"AI Engineer — Hrud.ai"** to **"AI Research Engineer — Hrud.ai"** (current role after the promotion)? If yes: update the site, `Resume-pullaiah.md`, the SEO / JSON-LD `jobTitle`, and the PDF.
- [ ] Is "AI Intern" the correct first title at Hrud.ai? (The resume says "Team Lead — Hrud.ai Internship".)
- [ ] Vercel project count for the DevTools Control Center card.

### 16.16 Animated mascot — planning

**Source:** `D:\Downloads\Make-Your-Own-Mascot.pdf` (free guide, Oct 2026). **Full, detailed plan: [`Mascot_Plan.md`](Mascot_Plan.md).**

**Idea in one paragraph:** design a small animated, eyes-only character in the free Bible Strong Avatar Lab (browser studio, 10 starters, 23 animations, no login), export it as a tiny `.avatar.json`, mount it on the site with `@bible-strong/avatar-react`, and make it react to visitors (waking → idle on load, excited on Hire Me / Resume hover, celebrate when the contact form is sent, confused on errors, drowsy → sleeping after 30 s of inactivity, laughing on click). Optional: a speech bubble with a short tip per section.

**Steps (summary):** 1) plan a "mascot card" with ChatGPT/Claude → 2) build it in the Studio and back up the project → 3) export React/TypeScript JSON with only the needed animations → 4) add `src/assets/mascot.avatar.json` + package + component → 5) wire reactions (loader end, nav buttons, `ContactForm`, idle timer, click) → 6) optional speech bubble → 7) QA at 375 px / 1366 px, reduced-motion, contrast, licence credit.

**Site rules:** bottom-left, ~110 px (≈72 px on phones), must not cover the phone Resume / Hire Me bar or any button, no layout jumps, still expression for `prefers-reduced-motion`, tap instead of hover on touch, lazy-loaded after the loader.

**Risks / flags:** the Studio and its packages are **AGPL-3.0** (check implications before shipping; credit the maker); the character is stored only in the browser, so **export the Studio project backup**; only use animation names present in the exported JSON.

**Bonus:** exporting a PNG/SVG of the mascot can also provide the missing **`og:image`** and **favicon** (see §11).

**Owner decisions needed:** mascot name and starter, body colour (cyan `#22d3ee` recommended), placement (every page vs. hero/contact only), speech bubble yes/no, whether the repo is public (AGPL), mascot on the loader or not.

### 16.17 "Let's Build Something" — contact delivery from any device (planning)

**Full plan: [`Contact_Form_Plan.md`](Contact_Form_Plan.md).** The previous idea (Twilio SMS via a serverless function, §16.11) is replaced by an email-first approach.

**Approaches compared (2026-10-11):**
| # | Approach | Verdict |
|---|---|---|
| 1 | **Web3Forms** — free, no backend (≈250/month); key visible in the page, limited control | **Fallback** if delivery must go live immediately |
| 2 | **EmailJS** — browser SDK (≈200/month); keys visible in the browser | Not planned |
| 3 | **FormSubmit** — no-account hack; email exposed, least reliable | Skip |
| 4 | **Vercel function `/api/contact` + Resend** — keys private, real validation, honest success/error states, extensible | **Chosen** |

**Approach 4 summary:** keep the existing UI; add `api/contact.ts` (validate + honeypot + rate limiting + Resend email); form states sending / success / error (success only after Resend accepts the email); keep the SMS / WhatsApp / Email / Copy panel as a fallback and add `wa.me`, `sms:` and `tel:` links; env vars `RESEND_API_KEY`, `CONTACT_TO` in Vercel (never in code); test on mobile + desktop (success, invalid input, failed request).

**Deliberately avoided:** database / Supabase (initially), paid SMS / Twilio, redesign, exposed keys, claiming delivery before the server confirms it.

**Kept for later:** the earlier Twilio / SMS plan (account setup, trial limits, India DLT caveat, env vars, best-effort SMS after the email) is preserved as an optional step in `Contact_Form_Plan.md` §5.

**Owner to do:** create a free Resend account and add `RESEND_API_KEY` + `CONTACT_TO` in Vercel; confirm the destination email; decide whether the phone number stays public and whether to ship Web3Forms first.

**Order with other work:** build this before the mascot (§16.16); the mascot can later play `celebrate` / `confused` on form success / error.

