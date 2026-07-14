# Ravindra Babu Gunnu — Portfolio

A cinematic, single-page developer portfolio built on **TanStack Start v1 + React 19 + Vite 7 + Tailwind CSS v4**, with a bespoke "Gold / Indigo / Emerald on deep space" design system, an interactive 3D hyperspace intro, and a train-route journey timeline.

- **Preview URL** — https://id-preview--997d2b30-7898-4580-8789-17423c9c5606.lovable.app
- **Published URL** — https://gravindra-portfolio.lovable.app
- **Owner** — Ravindra Babu Gunnu · AI/ML Engineer · Google Student Ambassador 2026 · 5× hackathon winner

---

## Table of contents

1. [Tech stack](#tech-stack)
2. [Project structure](#project-structure)
3. [Design system](#design-system)
4. [Page-by-page UI walkthrough](#page-by-page-ui-walkthrough)
5. [Global effects catalog](#global-effects-catalog)
6. [Routing & SEO](#routing--seo)
7. [Assets strategy (Lovable ↔ Vercel)](#assets-strategy)
8. [Local development](#local-development)
9. [Deployment](#deployment)
10. [Credits](#credits)

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | **TanStack Start v1** (SSR-capable, file-based routing, server functions) |
| UI runtime | **React 19** |
| Build tool | **Vite 7** with `@tailwindcss/vite` and `@tanstack/router-plugin` |
| Language | **TypeScript** in `strict` mode |
| Styling | **Tailwind CSS v4** (native `@import` + `@theme inline` tokens, no `tailwind.config.js`) |
| Component primitives | **shadcn/ui** on top of **Radix UI** (accordion, dialog, dropdown, tabs, tooltip, popover, hover-card, scroll-area, and ~25 others) |
| Icons | **lucide-react** (`ChevronDown`, `ExternalLink`, `Github`, `Linkedin`, `Mail`, `Menu`, `X`, `UserCircle2`, …) |
| Data / async | **TanStack Query v5** wired via router context |
| Forms & validation | `react-hook-form` + `@hookform/resolvers` + `zod` |
| Notifications | `sonner` |
| Charts | `recharts` |
| Carousel | `embla-carousel-react` |
| Utility helpers | `clsx`, `tailwind-merge`, `class-variance-authority`, `date-fns` |
| Animation utility | `tw-animate-css` (imported at the top of `src/styles.css`) |
| Package manager | **Bun** (`bunfig.toml`, `bun.lock`) |
| Deploy target | Cloudflare Workers-style edge runtime (via Lovable) + Vercel static hosting from `public/` |

**Fonts** — `Space Grotesk` (headings), `Inter` (body), `JetBrains Mono` (numbers, badges, code-ish accents). Loaded via `<link>` in `src/routes/__root.tsx` `head()`, never `@import` inside CSS.

---

## Project structure

```text
.
├─ public/                       # Static files served at site root (Vercel-compatible)
│  ├─ profile.png                # Hero avatar
│  ├─ resume.pdf                 # Downloadable / previewable resume
│  └─ logos/                     # Journey + tech-stack logos
│     ├─ kits.png  teckybot.jpg  gvp.jpg  novus.jpg
│     ├─ hrud.png  gsa.png
│     └─ n8n.png   sqlite.png    groq.png   railway.svg
│
├─ src/
│  ├─ assets/                    # `.asset.json` pointers (Lovable CDN mirror of public/)
│  │  ├─ profile.png.asset.json
│  │  ├─ resume.pdf.asset.json
│  │  └─ logos/*.asset.json
│  │
│  ├─ routes/                    # File-based routing (TanStack Router)
│  │  ├─ __root.tsx              # HTML shell: <head>, fonts, favicons, providers, <Outlet/>
│  │  ├─ index.tsx               # Landing page (Intro + Nav + Hero + Journey + …)
│  │  ├─ certifications.tsx      # /certifications sub-page with "Back" button → /
│  │  └─ README.md               # Route naming conventions (dev doc)
│  │
│  ├─ hooks/use-mobile.tsx       # Viewport helper
│  ├─ lib/
│  │  ├─ utils.ts                # cn() = clsx + tailwind-merge
│  │  ├─ error-capture.ts        # Global error listener → error-page
│  │  ├─ error-page.ts           # Fallback UI
│  │  └─ lovable-error-reporting.ts
│  │
│  ├─ styles.css                 # 1943-line design system + all bespoke animations
│  ├─ router.tsx                 # createRouter + QueryClient context
│  ├─ server.ts                  # SSR entry (auto-wired by TanStack Start plugin)
│  ├─ start.ts                   # Client entry
│  └─ routeTree.gen.ts           # AUTO-GENERATED — do not edit
│
├─ components.json               # shadcn/ui config
├─ vite.config.ts                # Vite plugins: react, tanstack, tailwind, tsconfig-paths
├─ eslint.config.js
├─ tsconfig.json                 # strict: true
├─ package.json
└─ bunfig.toml
```

---

## Design system

Defined at the top of `src/styles.css` under the section `/* ===== Ravindra Portfolio V3 — Gold / Indigo / Emerald ===== */`.

### Palette (CSS custom properties)

| Token | Hex / rgba | Role |
|---|---|---|
| `--bg` | `#030507` | Page background (near-black, warm) |
| `--surface` | `#070c0f` | Sectional surfaces |
| `--rv-card` | `#0b1218` | Card fill |
| `--card-hover` | `#0f1a22` | Card hover state |
| `--gold` | `#F59E0B` | Primary accent |
| `--gold-light` | `#FCD34D` | Highlight / glow |
| `--gold-dim` | `rgba(245,158,11,0.15)` | Faint gold wash |
| `--indigo` | `#6366F1` | Secondary accent |
| `--indigo-light` | `#818CF8` | Indigo highlight |
| `--indigo-dim` | `rgba(99,102,241,0.15)` | Faint indigo wash |
| `--emerald` | `#10B981` | Tertiary accent (success / third color in gradients) |
| `--emerald-dim` | `rgba(16,185,129,0.12)` | Faint emerald wash |
| `--text` | `#F8FAFC` | Primary text |
| `--rv-muted` | `#64748B` | Muted text |
| `--border-rv` | `rgba(245,158,11,0.12)` | Card border (idle) |
| `--border-hover` | `rgba(245,158,11,0.35)` | Card border (hover) |

The shadcn theme tokens (`--background`, `--foreground`, `--primary`, `--border`, `--ring`, chart tokens, sidebar tokens, radii) are declared in oklch under `:root` and `.dark` above the bespoke tokens, so shadcn components inherit dark-mode correctly out of the box.

### Typography

```css
.rv h1, .rv h2, .rv h3, .rv h4 { font-family: 'Space Grotesk', sans-serif; }
body.rv                        { font-family: 'Inter', system-ui, sans-serif; }
.rv .mono                      { font-family: 'JetBrains Mono', monospace; }
```

### Film-grain overlay

A permanent SVG `fractalNoise` texture is painted onto `body.rv::before` at `opacity: 0.025`, giving every surface a subtle organic grain without adding a raster asset.

```css
body.rv::before {
  content: "";
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background-image: url("data:image/svg+xml,…fractalNoise baseFrequency='0.9' numOctaves='4'…");
  opacity: 0.025;
}
```

### Selection highlight

`.rv ::selection { background: rgba(245,158,11,0.3); }` — gold-tinted, on-brand.

### Radius scale

`--radius: 0.625rem`, and `@theme inline` derives `--radius-sm/md/lg/xl/2xl/3xl/4xl` from it.

---

## Page-by-page UI walkthrough

Every effect below lives either in `src/routes/index.tsx` (JS behavior) or `src/styles.css` (CSS keyframes / transitions).

### 1. Intro screen — 3D hyperspace canvas

The site opens with a full-viewport `<canvas>` starfield rendered inside `IntroScreen` (`src/routes/index.tsx`, ~lines 29–260).

**Layers:**

- **Deep-space trail** — every frame paints `rgba(3,5,7,0.28)` over the canvas so previous frames fade out instead of clearing, giving stars motion-blur streaks.
- **Twinkling background stars** — 90 static stars, each with a phase-shifted sine wave driving alpha (`0.35 + sin(phase)*0.4`) and hue picked from gold (`42°`) or indigo (`220°`).
- **Hyperspace stars** — 340 stars stored in 3D as `{x, y, z, pz, hue}`. Each frame `z` decreases by a base speed of `2.0` (or `3.2` when the mouse is inside — press/hover boost). Projection uses focal length `FOCAL = 320`:
  ```
  k = FOCAL / z
  px = x * k + cx + parallaxX
  py = y * k + cy + parallaxY
  ```
  A line is stroked from the previous projection `(pz)` to the current one, producing the classic warp-drive streaks. Line width and alpha scale with depth `(1 - z/FOCAL)`. Hue is weighted 60% gold, 25% indigo, 15% emerald.
- **Drifting rockets / comets** — spawn every ~55 frames from either edge; each carries a 14-segment fading trail plus a glowing head (`shadowBlur: 18`).
- **Mouse parallax** — the whole scene offsets by `(mouse - center) * 0.06`.
- **Composite mode** — `globalCompositeOperation = "lighter"` gives additive glow so overlapping stars pop.

**Dismissal** — clicking or a timeout triggers `exiting`, which fades the intro out and mounts the main page.

### 2. Fixed navbar

```css
.rv .nav {
  position: fixed; height: 64px; z-index: 50;
  background: rgba(3,5,7,0.78); backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent; transition: border-color .3s ease;
}
.rv .nav.scrolled { border-bottom-color: rgba(245,158,11,0.15); }
```

- **Glassmorphism** — 78%-opaque near-black + 20 px backdrop blur.
- **Scroll-reactive border** — a scroll listener toggles `.scrolled`, which fades in a hairline gold border.
- **Wordmark** — `linear-gradient(135deg, #F59E0B, #6366F1)` clipped to text via `-webkit-background-clip: text; -webkit-text-fill-color: transparent;`.
- **Mobile menu** — hamburger toggles a slide-in panel (uses `animate-slide-in-right` / `animate-fade-in` from tw-animate-css).

### 3. Hero

- **Avatar** — `/profile.png` inside a circular frame wrapped by a rotating conic-gradient ring (gold → indigo → emerald → transparent).
- **Headline** — two lines; the accent word uses the same gold→indigo gradient text-clip.
- **Role rotator** — cycles roles (AI/ML Engineer, Full-stack Builder, GSA 2026 …) with a fade-in/out transition.
- **Primary CTA — "Preview Resume"** — the signature button in the app. See [Global effects catalog → `.btn-primary`](#effect-btn-primary). Opens `/resume.pdf` in a new tab.
- **Secondary CTAs** — icon buttons (GitHub, LinkedIn, Mail) with `hover-scale` and gold ring on hover.
- **Reveal on scroll** — `.reveal` → `.reveal.in` toggled by an `IntersectionObserver`.

### 4. Journey — the train timeline

The signature interactive section. A horizontal "railway" with stations for each education/experience milestone (KITS, Teckybot, GVP, Novus, Hrud.ai, GSA). A stylized train head moves left-to-right stopping at each station; the description card below shows that station's logo, title, subtitle, and body.

**Key implementation details (in `src/routes/index.tsx`):**

- **Preloaded logos** — a `useEffect` runs once on mount and instantiates `new Image()` for every `STATIONS[i].logo`, warming the browser cache so switching stations never triggers a network fetch.
  ```tsx
  useEffect(() => {
    STATIONS.forEach((s) => { const img = new Image(); img.src = s.logo; });
  }, []);
  ```
- **Active station state** — `activeStation` index drives which card is visible.
- **Fade transition** — the card uses `.rv .train-info-card` (visible) ↔ `.rv .train-info-card.fade` (transitioning):
  ```css
  .rv .train-info-card       { transition: opacity .18s ease-out, transform .18s ease-out; }
  .rv .train-info-card.fade  { opacity: 0; transform: translateY(6px);
                                transition: opacity .28s ease-in, transform .28s ease-in; }
  ```
  The fade-in is faster than the fade-out on purpose — the moment the train reaches the next station, the new logo appears crisp with no black flash (fix landed in a prior turn).
- **Train head** — an SVG/emoji glyph positioned absolutely with `left: <activeIndex> * <stationSpacing>` and a `transition: left .8s cubic-bezier(.22,.9,.32,1)`.
- **Track** — a full-width `1px` gold line with dashed pattern for a rail-tie look.
- **Station node** — a circle that pulses gold when active (`animate-pulse`) and is muted when idle.

### 5. About

A card with a short bio, plus a row of stat tiles ("5× hackathon wins", "Google Student Ambassador 2026", years-coding, projects-shipped). Tiles use gold accent digits in `JetBrains Mono` and a subtle inner glow on hover.

### 6. Tech stack grid

Grid of logo tiles (`n8n`, `SQLite`, `Groq`, `Railway`, plus additional icons). Each tile:

- Dark card `#0b1218` with `1px` gold-dim border
- On hover: border → `--border-hover`, `translateY(-4px)`, and an emerald bottom shadow
- Logo `<img>` centered, grayscale-to-color on hover

### 7. Projects

Cards with project screenshot / gradient header, title, description, tag chips, and `ExternalLink` icons. Effects:

- `hover-scale` (subtle 1.02× lift)
- Animated gradient border on hover using the `::before` conic-gradient trick (same recipe as the primary button but slower and dimmer)

### 8. Achievements

Highlighted badges: **5× hackathon winner**, **Google Student Ambassador 2026**. Rendered as pill-shaped chips with gradient outlines and monospace supporting text.

### 9. Certifications page — `/certifications`

Its own file-based route at `src/routes/certifications.tsx`.

- List / grid of certificates with issuer, date, and a preview link.
- A **Back** button (renamed from its previous label, per user request) that navigates to `/` — implemented with `<Link to="/">Back</Link>` from `@tanstack/react-router`, so it uses client-side routing instead of a hard reload.
- Inherits the site design system (dark background, gold accents, film grain).

### 10. Footer

Socials row + copyright + subtle top border in gold-dim. Uses the same `hover-scale` on icon buttons.

---

## Global effects catalog

All in `src/styles.css`. Every animation is opt-in via a class, so nothing runs on elements that don't request it.

### `.reveal` — scroll-in

```css
.rv .reveal    { opacity: 0; transform: translateY(30px);
                 transition: opacity .6s ease, transform .6s ease; }
.rv .reveal.in { opacity: 1; transform: none; }
```

Toggled by an `IntersectionObserver` in `Index()` that adds `in` when the element enters the viewport.

### <a id="effect-btn-primary"></a>`.btn-primary` — spinning conic-gradient border

The star effect. Applied to **Preview Resume** in the hero and, after the last change request, to the **Back** button on `/certifications` so the two share the same look.

```css
.rv .btn-primary            { position: relative; isolation: isolate; }
.rv .btn-primary::before    { /* the rotating gradient ring */
  content: ""; position: absolute; inset: 0; border-radius: inherit;
  background: conic-gradient(from 0deg,
    #F59E0B, #6366F1, #10B981, transparent 70%);
  animation: spinAngle 3s linear infinite;
  opacity: 0.6; z-index: -2;
}
.rv .btn-primary::after     { /* the solid inner mask that leaves only a hairline visible */
  content: ""; position: absolute; inset: 1px; border-radius: inherit;
  background: #030507; z-index: -1;
}
@keyframes spinAngle { to { transform: rotate(360deg); } }
```

The 4-stop gradient (gold → indigo → emerald → transparent 70%) is what gives it the "meteor tail" feel; the `transparent 70%` stop is the gap that visibly rotates.

### `.story-link` — underline sweep

Right-to-left underline that reverses on hover (from tw-animate-css utility spec).

### `.hover-scale`, `.pulse`

Standard tw-animate-css helpers: 5% scale on hover, and infinite pulse (`cubic-bezier(0.4,0,0.6,1)` at 2 s).

### `.animate-fade-in`, `-fade-out`, `-scale-in`, `-scale-out`, `-slide-in-right`, `-slide-out-right`, `-accordion-down`, `-accordion-up`

Full keyframe set defined in `src/styles.css` / consumed via tw-animate-css utilities:

| Keyframe | Duration / easing | From → To |
|---|---|---|
| `fade-in` | 0.3s ease-out | `opacity 0, translateY(10px)` → `opacity 1, translateY(0)` |
| `fade-out` | 0.3s ease-out | inverse of `fade-in` |
| `scale-in` | 0.2s ease-out | `scale(0.95), opacity 0` → `scale(1), opacity 1` |
| `scale-out` | 0.2s ease-out | inverse of `scale-in` |
| `slide-in-right` | 0.3s ease-out | `translateX(100%)` → `translateX(0)` |
| `slide-out-right` | 0.3s ease-out | inverse of `slide-in-right` |
| `accordion-down` | 0.2s ease-out | `height 0, opacity 0` → `var(--radix-accordion-content-height), opacity 1` |
| `accordion-up` | 0.2s ease-out | inverse of `accordion-down` |
| `enter` (combo) | fade-in + scale-in | for modal-like appearances |
| `exit` (combo) | fade-out + scale-out | for dismissals |

### Film-grain — see [Design system](#design-system).

### Gradient text clipping

Reused for the wordmark and headline word — `background: linear-gradient(135deg, #F59E0B, #6366F1); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`.

### Custom cursor + smooth scroll

`html { scroll-behavior: smooth; }` gives every in-page anchor a smooth scroll. No custom cursor image is used.

---

## Routing & SEO

### Route tree

```text
/                  →  src/routes/index.tsx          (landing page)
/certifications    →  src/routes/certifications.tsx (sub-page)
```

Root shell — `src/routes/__root.tsx` — sets the app-wide `<head>` including:

- `title` — "Ravindra Babu Gunnu — AI/ML Portfolio"
- `description` / `og:description` / `twitter:description`
- `og:title`, `twitter:title` — "Ravindra Babu Gunnu — AI/ML Portfolio"
- `og:type: website`, `twitter:card: summary_large_image`
- Font `<link>`s (Space Grotesk, Inter, JetBrains Mono)
- Favicons + `theme-color` (dark)

Each leaf route overrides `title` + `og:title`; the landing route sets:

```ts
{ title: "Ravindra Babu Gunnu" }
{ property: "og:title", content: "Ravindra Babu Gunnu" }
```

`og:image` is intentionally omitted at the root (so it doesn't override leaves) and can be added per-route when a shareable cover image is available.

### Router configuration

- `src/router.tsx` — `createRouter({ routeTree, context: { queryClient } })`
- `src/routeTree.gen.ts` — **auto-generated by the TanStack Router Vite plugin**, never edited by hand.
- QueryClient is provided through router context so loaders can prefetch with `ensureQueryData`.

---

## <a id="assets-strategy"></a>Assets strategy (Lovable ↔ Vercel)

The project runs on two hosts and images must resolve on both:

| Host | How assets resolve |
|---|---|
| **Lovable preview** | `.asset.json` pointer files in `src/assets/…` are resolved by Lovable's build to `/__l5e/assets-v1/<id>/<file>` on Lovable's CDN. |
| **Vercel (published GitHub sync)** | The `/__l5e/…` route does not exist. Files in `public/` are served at site root (`/profile.png`, `/logos/kits.png`, `/resume.pdf`). |

Solution used in this repo:

1. **Every binary lives in `public/`** — `public/profile.png`, `public/resume.pdf`, `public/logos/*`.
2. **`src/routes/index.tsx` imports plain strings**, not `.asset.json` modules:
   ```ts
   const kitsLogo    = { url: "/logos/kits.png" };
   const profilePhoto = { url: "/profile.png" };
   const resumeAsset  = { url: "/resume.pdf" };
   ```
3. **The `.asset.json` pointer files stay in `src/assets/`** so Lovable's in-editor preview still finds them (they're tiny — leaving them is safe).

Full rationale in `.lovable/plan.md`.

---

## Local development

Bun-first (npm / pnpm also work):

```bash
bun install          # install dependencies
bun run dev          # start Vite dev server on http://localhost:8080
bun run build        # production build (SSR + client)
bun run build:dev    # dev-mode build (used by CI prerender)
bun run preview      # serve the production build locally
bun run lint         # ESLint (strict TS + react-hooks + prettier)
bun run format       # Prettier write
```

Requirements:

- Node.js ≥ 20 (or Bun ≥ 1.1)
- Modern browser for local dev (the canvas intro uses `devicePixelRatio` and `requestAnimationFrame`)

---

## Deployment

- **Lovable** — every commit auto-publishes to `https://gravindra-portfolio.lovable.app`.
- **Vercel** — Lovable is linked to a GitHub repo; each push triggers a Vercel build that serves `public/` at site root, resolving `/profile.png`, `/resume.pdf`, `/logos/*` and every route via the TanStack Start Vite output.

No `.env` secrets are required — this portfolio is purely presentational and has no backend calls.

---

## Credits

- **TanStack** — Router, Start, and Query power the whole app.
- **Radix UI** & **shadcn/ui** — accessible primitives underneath every interactive component.
- **Tailwind CSS v4** — design tokens + utilities without a config file.
- **lucide-react** — icon set.
- **Google Fonts** — Space Grotesk, Inter, JetBrains Mono.
- **tw-animate-css** — keyframe library imported at the top of `src/styles.css`.
- **Lovable** — build/preview environment, CDN for asset pointers, publish target.

---

Built with care by **Ravindra Babu Gunnu**. If you want to fork the design system, everything visual is in `src/styles.css` — the JS side is intentionally thin so the look is portable.
