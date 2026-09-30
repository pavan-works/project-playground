# Solige Pullaiah — AI Portfolio 2026

A single-page, animation-heavy personal portfolio site for **Solige Pullaiah** (alias *Puli Pavan*; the website display name is **Solige Pullaiah**), an AI Engineer based in Visakhapatnam, India. The site is built as a modern "AI/neural" themed landing page showcasing profile info, career journey, tech stack, engineering projects, and research publications.

Live editor: [AI Studio project](https://ai.studio/apps/6a11c31a-ba6a-49e2-b5f5-d35f0bd7e0d5)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Page Sections](#page-sections)
- [Content Model](#content-model)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Configuration Notes](#configuration-notes)
- [Deployment & Integrations](#deployment--integrations)
- [Design Assets](#design-assets)
- [Editing Content](#editing-content)

---

## Overview

This repository (`project-playground`) contains a **React 19 + TypeScript + Vite** single-page application. It renders one scrollable landing page (`PortfolioLanding` in [src/App.tsx](src/App.tsx)) composed of stitched-together sections — a hero, an about/profile block, a career "journey" timeline with a 3D-ish infinite image gallery, a tech-stack/tools grid, a projects & research-papers showcase with detail modals, a code-snippet flourish, and a contact section — all wrapped in a custom animated navigation bar.

The app was originally scaffolded via **Google AI Studio** (see [metadata.json](metadata.json) and [README's original AI Studio instructions](#configuration-notes)) and is also connected to **[Lovable](https://lovable.dev)** for git-synced visual editing (see [AGENTS.md](AGENTS.md)).

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite 6](https://vitejs.dev/) (`@vitejs/plugin-react`) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`) |
| Animation | [Motion](https://motion.dev/) (`motion/react`, the successor to Framer Motion) |
| Icons | [lucide-react](https://lucide.dev/) |
| 3D / WebGL (available, optional) | [Three.js](https://threejs.org/) via `@react-three/fiber` and `@react-three/drei` |
| AI/Server (available, optional) | [`@google/genai`](https://www.npmjs.com/package/@google/genai) (Gemini API client), `express`, `dotenv` |
| Package manager | [Bun](https://bun.sh/) (`bun.lock`, `bunfig.toml`) — npm also works |
| Linting/Type-checking | `tsc --noEmit`, ESLint (`eslint.config.js`), Prettier (`.prettierrc`) |

> Note: `express`, `@google/genai`, and the Three.js/react-three packages are present as dependencies but are not currently wired into the rendered page — they represent available capabilities (e.g. a future backend or 3D scene) rather than active features.

## Project Structure

```
project-playground/
├── index.html                  # Vite entry HTML
├── metadata.json                # AI Studio app metadata (name, description)
├── package.json                  # Scripts & dependencies
├── vite.config.ts                # Vite + Tailwind + React plugin config
├── tsconfig.json                 # TypeScript config
├── components.json               # shadcn/ui-style component config
├── .env.example                  # Environment variable template (Gemini API key, App URL)
├── AGENTS.md                     # Notes about the Lovable git-sync integration
├── about_me.md                   # Source-of-truth notes for personal/profile content (display name, GitHub, photo confirmed)
├── portfolio.md                  # Consolidated master doc: what is built, pending work, how-tos
├── Resume-pullaiah.md            # Resume reference material
├── Ravindra_portfolio.md         # Additional portfolio reference notes
├── 21st_dev.md                   # Design/reference notes
├── src/
│   ├── main.tsx                  # React root / app bootstrap
│   ├── App.tsx                   # All page sections + PortfolioLanding (default export)
│   ├── data.ts                   # PORTFOLIO_DATA, JOURNEY, JOURNEY_QUOTE (all site content)
│   ├── index.css                 # Global styles, Tailwind layer, CSS custom properties/theme
│   ├── vite-env.d.ts              # Vite/TS ambient types
│   ├── components/
│   │   ├── AnimatedNav.tsx        # Sticky/animated top navigation bar
│   │   └── InfiniteGallery.tsx    # Infinite-scrolling / drag-driven image gallery for the journey section
│   ├── hooks/
│   │   └── use-mobile.tsx         # Responsive/viewport detection hook
│   ├── lib/
│   │   ├── error-capture.ts       # Runtime error capture utility
│   │   ├── error-page.ts          # Fallback error UI
│   │   └── lovable-error-reporting.ts  # Error reporting hook for the Lovable platform
│   └── assets/                    # Portrait (portrait-smile.png = hero photo), journey, project images, logos/
└── stitch_modern_glow_portfolio/  # Design reference material: exported mockup images,
                                    # extracted Behance case-study text, and layout variants
                                    # used as visual inspiration (not part of the built app)
```

## Page Sections

The page (`PortfolioLanding` in [src/App.tsx](src/App.tsx)) renders, top to bottom:

1. **Loading screen** — an animated "Portfolio" logo/title reveal shown for ~2 seconds on load.
2. **`AnimatedNav`** — sticky navigation with section links.
3. **`Hero`** (`#home`) — full-height intro with a large "AI Engineer & ML Researcher" headline, portrait cutout, location, and a row of companies/tools worked with.
4. **`About`** (`#about`) — profile summary, key stats (systems shipped, papers in review, model gain, curiosity), an "Identity" info panel, and 4 focus-area cards (RAG & Retrieval, Agentic Systems, Applied Research, Production ML).
5. **`Experience`** (`#experience`) — "The Journey" timeline: a quote, an active-stop detail panel (`ActiveStopPanel`), and the `InfiniteGallery` component that lets the visitor scrub through career/education milestones (and optionally add their own images, stored in `localStorage`).
6. **`Expertise`** (`#expertise`) — tech-stack grid and "APIs & AI Tools" grid, each rendered from `PORTFOLIO_DATA.techStack` / `PORTFOLIO_DATA.aiTools`.
7. **`Works`** (`#works`) — "Selected Works": Engineering Projects and Research Publications, each rendered as `ProjectCard`s that open a `DetailModal` with overview, highlights, metrics, tech stack, and links (GitHub / paper).
8. **`CodeSnippet`** — a decorative fake "terminal" code block for visual flavor.
9. **`Contact`** (`#contact`) — call-to-action with Mail / LinkedIn / GitHub ([github.com/puli-pro](https://github.com/puli-pro)) links.
10. **`Footer`** — logo, navigation/social links, and an "Available" status badge.

## Content Model

All editable site content lives in **[src/data.ts](src/data.ts)** — this is the single place to update to change what the site displays:

- `PORTFOLIO_DATA` — name, alias, role, location, summary, `techStack[]`, `aiTools[]`, `experience[]`, `projects[]`, and `researchPapers[]` (the latter two share the `Project` interface: title, category, image, tags, subtitle, year, role, overview, highlights, tech, metrics, github/paperUrl links).
- `JOURNEY` — an array of `JourneyStop` objects (education/work/research milestones) driving the Experience/timeline section, each with a period, title, place, kind, caption, description, optional marker/badge, and an imported image.
- `JOURNEY_QUOTE` — the pull-quote shown next to the journey timeline.

Background/reference material used to compile this content lives in [about_me.md](about_me.md) (marked as the source of truth for personal info), [Resume-pullaiah.md](Resume-pullaiah.md), and [Ravindra_portfolio.md](Ravindra_portfolio.md).

## Getting Started

**Prerequisites:** Node.js (or [Bun](https://bun.sh/), which this repo is configured to use via `bun.lock`/`bunfig.toml`).

```bash
# Install dependencies
bun install
# or: npm install

# (Optional) set your Gemini API key if you plan to use @google/genai features
cp .env.example .env.local
# then edit .env.local and set GEMINI_API_KEY

# Start the dev server (http://localhost:3000)
bun run dev
# or: npm run dev
```

## Available Scripts

Defined in [package.json](package.json):

| Script | Description |
|---|---|
| `dev` | Starts Vite dev server on port `3000`, bound to `0.0.0.0` |
| `build` | Production build (`vite build`) |
| `build:dev` | Build in development mode |
| `preview` | Preview a production build locally |
| `lint` | Type-checks the project with `tsc --noEmit` |
| `clean` | Removes `dist/` and `server.js` |

## Configuration Notes

- **Path alias:** `@` is aliased to the project root in [vite.config.ts](vite.config.ts).
- **HMR/watch toggle:** Hot Module Reload and file watching are disabled when the `DISABLE_HMR` env var is `"true"` — this is used by the AI Studio agent environment to avoid flicker during automated edits; leave it unset for normal local development.
- **Environment variables** ([.env.example](.env.example)):
  - `GEMINI_API_KEY` — used for calls to the Gemini API via `@google/genai`, if/when server-side AI features are added.
  - `APP_URL` — the hosted URL of the app, auto-injected by AI Studio's Cloud Run deployment.
- **Styling/theme:** Tailwind CSS 4 is configured through the Vite plugin (no separate `tailwind.config.js`); design tokens (colors like `--gold`, `--indigo`, `--emerald`, `--bg`, `--rv-muted`, `--rv-card`, fonts) are defined as CSS custom properties in [src/index.css](src/index.css) and consumed throughout [src/App.tsx](src/App.tsx).
- **Local-only persistence:** Custom images a visitor uploads to the journey gallery are saved to `localStorage` (`journey-custom-images`) and are per-browser only, not shared or synced anywhere.

## Deployment & Integrations

- **Google AI Studio** — the project was created/managed there; `metadata.json` declares the app name/description and enables `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API`.
- **Lovable** — the repository is connected to [Lovable](https://lovable.dev) for visual/AI-assisted editing that syncs via git. Per [AGENTS.md](AGENTS.md): **avoid force-pushing or rewriting published history** on the connected branch, since that can break the sync and lose project history on Lovable's side. Related error-reporting integration lives in [src/lib/lovable-error-reporting.ts](src/lib/lovable-error-reporting.ts).

## Design Assets

The [stitch_modern_glow_portfolio/](stitch_modern_glow_portfolio/) directory holds **design reference material only** — exported mockup screenshots, alternate hero/gallery/project-detail layout variants, and text extracted from a Behance graphic-design case study — used as visual inspiration while building the UI. Nothing in that folder is imported or built by the app itself.

## Editing Content

To personalize or update the portfolio:

1. **Profile, stats, tech stack, projects, research papers, journey timeline** → edit [src/data.ts](src/data.ts).
2. **Images** → add/replace files in [src/assets/](src/assets/) and update the corresponding `import`s in `data.ts` / `App.tsx`.
3. **Section layout, copy, or styling** → edit the relevant section component in [src/App.tsx](src/App.tsx) (e.g. `Hero`, `About`, `Contact`) or the shared color/typography tokens in [src/index.css](src/index.css).
4. **Navigation** → edit [src/components/AnimatedNav.tsx](src/components/AnimatedNav.tsx).
5. **Journey gallery behavior** → edit [src/components/InfiniteGallery.tsx](src/components/InfiniteGallery.tsx).
