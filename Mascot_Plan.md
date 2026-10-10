# Animated Mascot — Plan for the Portfolio

> Source: the free guide **"Make Your Own Animated Mascot"** (`D:\Downloads\Make-Your-Own-Mascot.pdf`, 9 pages, by Saksham Gupta, Oct 2026), adapted to this portfolio (`soligepullaiah.vercel.app`: React 19 + Vite + Tailwind 4 + Motion).
> Status: **planned — not started.** Tracked in `portfolio.md` §16.16.
> Written: 2026-10-11.

---

## 1. What the guide is about

A free browser-based studio, **Bible Strong Avatar Lab** (`avatars.bible-strong.app`, open source by Stéphane Montlouis-Calixte), lets you design a small animated character with no drawing skills and no login:

- **10 starter characters:** Strobi (round ball), Freddy (block with ears), Citrus (drop), Nova (bean), Grok bot (black ball), Sunee (sun with dots), Kirby (puffy), Cloudee (cloud), Cubee (soft cube), Onee (soft blob).
- **Faces are eyes only** (no mouth). Personality comes from body shape, colour and eye size / spacing / tilt.
- **23 ready animations** (e.g. sleeping, waking, idle, listening, thinking, searching, working, excited, bored, suspicious, angry, drowsy, happy, curious, confused, surprised, proud, shy, sad, laughing, scared, playful, celebrate) and **27 expression presets**.
- The mascot is **drawn with code (SVG)**, so it stays sharp at any size.
- Output options: a picture (PNG/SVG), a small `.avatar.json` file for any website, a ready React demo (.zip), an "instructions for AI" text, or a backup of the whole Studio project.
- Three paths in the guide: **A** just a picture (≈10 min), **B** live on a website (≈20 min), **C** run the Studio locally (optional).

Requirements: laptop + Chrome, ChatGPT or Claude (to plan the character), Node.js 22.12+ (LTS), an AI coding tool (Claude Code / Cursor), and the website project.

---

## 2. Why it fits this portfolio

- The site already has strong "moments" a mascot can react to: the loader, the hero, the **Hire Me / Resume** buttons, the **contact form** (success / error), the **resume modal**, long scroll sections and idle time.
- It makes the portfolio memorable and "alive" without adding heavy media (SVG + one small JSON file).
- It can act as a small **guide** ("Check out my projects", "Download my resume") — good for recruiters who skim.

---

## 3. Step-by-step plan

### Step 1 — Plan the mascot on paper (≈ 5 min)
Ask ChatGPT/Claude for a one-page **mascot card** (name, which starter to copy, body/eye colours, eye shape, 5 animations and when each plays, 3 places to use it, a checklist of Studio tabs). Give it:
- **Brand/page:** Solige Pullaiah — AI Engineer & ML Researcher portfolio.
- **What I do:** builds RAG, LLM-agent and multimodal AI systems.
- **Audience:** recruiters, hiring managers, collaborators, clients.
- **Colours:** the site palette — cyan `#22d3ee`, indigo `#6366f1` / `#818cf8`, emerald `#10b981` on near-black `#030303`.
- **Vibe (3 words):** smart, friendly, curious (owner to confirm).
- Constraint to include: faces have **eyes only**; only the 23 listed animations exist.

**Decisions needed from the owner:** mascot **name**, which **starter** (round ball "Strobi" and cloud "Cloudee" fit an AI/"neural" feel), final **body colour** (cyan recommended so it matches the site), personality line.

### Step 2 — Build it in the Studio (≈ 10 min)
1. Open `avatars.bible-strong.app` on a laptop (progress saves in the browser automatically).
2. Double-click the chosen starter → set body colour, size and roundness from the card; drag on the canvas to move/rotate.
3. Spend most of the time on the **eyes** (width, height, spacing, tilt) — close-together eyes look cute, tilted-in eyes look cheeky.
4. **Expressions** and **Animations**: tweak presets or make a new animation on the timeline (hold times, loop / play once / ping-pong). Blinking is automatic.
5. **Back up:** Export → *Studio project* → save the backup file (work lives only in this browser; clearing history or switching laptops loses it).

### Step 3 — Export (≈ 2 min)
- Choose format **React / TypeScript** (this site is React + TS).
- Under *Animations to export* → **Customize** → keep **only** the animations we use (see §4) to keep the file small.
- Download the **`.avatar.json` definition**. Optional: also export a PNG/SVG (Photo Mode, transparent background) for the favicon / social share image.

### Step 4 — Put it on the site (with Claude Code)
- Place the file at `src/assets/mascot.avatar.json`.
- Package used by the guide: **`@bible-strong/avatar-react`** (React/Next.js; `createAvatar(definition)` + one import of `@bible-strong/avatar-react/styles.css`). Non-React alternative: `@bible-strong/avatar-web`.
- Docs: github.com/smontlouis/bible-strong-avatar-lab.
- Ask the AI coding tool to: read the JSON and list its animation names first; mount the mascot in a small client component; start on `idle`; show a **still expression** if the visitor prefers reduced motion; make sure it **never covers a button on phones**.

### Step 5 — Make it react to visitors
Use the controller API described in the guide: `play(animation)`, `pause()`, `stop()`, `setExpression(expression)`, `getState()` and the `onAnimationEnd` callback. **Only use animation names that exist in the exported JSON.**

### Step 6 — Optional "level up"
A small **speech bubble** next to the mascot showing one short tip for each section the visitor scrolls to (turns it from decoration into a guide).

### Step 7 — Optional: run the Studio locally (Path C)
Only if we want to change the Studio itself or work offline: `git clone https://github.com/smontlouis/bible-strong-avatar-lab.git`, `npm install -g pnpm`, `pnpm install`, `pnpm dev` (usually http://localhost:5173). Not needed for the portfolio.

---

## 4. Reaction map for *this* site

| When this happens on the portfolio | Mascot plays | Where in the code |
|---|---|---|
| Page opens (after the loader) | `waking` → `idle` | `PortfolioLanding` in `src/App.tsx` (when `loading` becomes false) |
| Hover **Hire Me** / **Resume** (desktop); tap on phones | `excited` | `src/components/AnimatedNav.tsx`, `ResumeModal.tsx` |
| Contact form **sent** | `celebrate` | `src/components/ContactForm.tsx` |
| Contact form **error / validation fails** | `confused` | `ContactForm.tsx` |
| Something loading (e.g. resume preview, project view) | `thinking` / `working` | `ResumeModal.tsx`, project `DetailModal` |
| No mouse / scroll / typing for 30 s | `drowsy` → `sleeping` (any movement wakes it) | global idle timer in the mascot component |
| Visitor clicks the mascot | `laughing` / `playful` | mascot component |
| Scrolls into a new section (optional) | `curious` / `proud` + speech bubble tip | section IDs (`#about`, `#experience`, `#works`, `#contact`…) |

Animations to keep when exporting (to stay small): **waking, idle, excited, celebrate, confused, thinking, working, drowsy, sleeping, laughing, playful** (+ `curious`, `proud` if the speech-bubble guide is built).

---

## 5. Rules for placing it on this site

1. **Bottom-left** on desktop (bottom-right is taken by nothing today, but the phone action bar is bottom-centre — see below), ≈ 96–120 px wide.
2. **Phones:** smaller (≈ 64–80 px), placed so it **does not overlap** the bottom Resume / Hire Me pill (which slides in on scroll-up), the nav, or form buttons. Guide's own rule: "on phones it must not cover any button" and "make the mascot smaller on screens under 480 px".
3. **No layout jumps** (fixed-position element, reserved size).
4. **`prefers-reduced-motion`:** show a still expression only and turn all reactions off.
5. **Touch devices:** use tap instead of hover.
6. Respect existing rules from `portfolio.md` §15 (hero portrait never fades; contrast ≥ 4.5:1 for any bubble text; no secrets in the repo).
7. Keep the page light: load the mascot lazily (after the loader) and export only the used animations.
8. Accessibility: decorative by default (`aria-hidden`), speech bubble text must be real text with sufficient contrast.

---

## 6. Prompts to use with Claude Code (adapted, short)

**A. Install and mount**
> Add an animated mascot to this React 19 + Vite + TypeScript site. The mascot file is `src/assets/mascot.avatar.json`. Use `@bible-strong/avatar-react` and import its `styles.css` once. First read the JSON and list the animation names it has. Mount it in a client component, fixed at the bottom-left, 110 px wide (72 px under 480 px), starting on `idle`. If the visitor prefers reduced motion show a still expression. It must not overlap any button on phones, including the bottom Resume / Hire Me bar in `AnimatedNav.tsx`. Then tell me how to run and what I should see.

**B. Reactions**
> Make the mascot react using its controller (`play`, `pause`, `stop`, `setExpression`, `getState`, `onAnimationEnd`); only use animation names that exist in the JSON. Page opens after the loader: `waking`, then `idle`. Hover Hire Me / Resume: `excited` (tap on phones). Contact form sent: `celebrate`. Contact form error: `confused`. No activity for 30 s: `drowsy` then `sleeping`; any movement wakes it. Click on the mascot: `laughing`. No layout jumps; reactions off for reduced motion. Show the code and a short list of what triggers what.

**C. Optional speech bubble**
> Add a small speech bubble next to the mascot with one short, friendly tip for each section the visitor scrolls to (About, Experience, Skills, Process, Works, Contact). Real text, high contrast, dismissible, off for reduced motion.

**D. When something breaks**
> Something broke. Here is the full error: [paste]. I was trying to: [what]. Explain the cause in one line, fix it, and tell me how to check that it works.

**Common fixes (from the guide):** mascot doesn't show → check `styles.css` is imported and the JSON path is right; "Unknown animation" → use a name that is in the JSON or re-export with that animation selected; avatars disappeared in the Studio → different browser/cleared history, import the Studio project backup; covers buttons on phones → make it smaller under 480 px; `pnpm: command not found` → `npm install -g pnpm`; Node version error → install Node LTS 22.12+.

---

## 7. Important: licence and credit

- The Studio **and its packages are AGPL-3.0**. The guide says this is fine for learning, personal and open-source projects, but using it in a closed-source or paid product can require you to share your own code. **Read the licence / ask the author before shipping** — this portfolio's repo is on GitHub (public or private? owner to confirm) and the site is publicly served, so check what AGPL requires here.
- **Credit the maker:** Stéphane Montlouis-Calixte (@_smontlouis) and the Bible Strong Avatar Lab repo (add a line in the footer or README, and star the repo).
- Screenshots in the guide belong to its author; do not reuse them on the site.

---

## 8. Checklist

- [ ] Owner chooses name, starter, colours and personality (Step 1).
- [ ] Build the character in the Studio and **save the Studio project backup** (Step 2).
- [ ] Export `.avatar.json` (React/TypeScript) with only the needed animations (Step 3).
- [ ] Add `src/assets/mascot.avatar.json`; install `@bible-strong/avatar-react` (Step 4).
- [ ] Mount component (bottom-left, small on phones, reduced-motion fallback).
- [ ] Wire reactions (loader end, Hire Me / Resume, contact form success / error, idle, click).
- [ ] (Optional) speech-bubble tips per section.
- [ ] Verify at 375 px and 1366 px that nothing is covered (nav, bottom action bar, forms, modals).
- [ ] Re-run the contrast audit if the bubble is added.
- [ ] Confirm the AGPL-3.0 licence implications and add credit.
- [ ] Update `portfolio.md` change log and `README.md`.
- [ ] (Optional) export a PNG/SVG of the mascot for the favicon and `og:image` (this also closes the missing `og:image` / favicon items in `portfolio.md` §11).

---

## 9. Open questions

1. Mascot name and starter shape?
2. Body colour: site cyan `#22d3ee` (recommended) or something different?
3. Where exactly should it live — bottom-left on every page, or only in specific sections (hero / contact)?
4. Speech-bubble tips (Step 6): yes or no?
5. Is the GitHub repo public? (matters for the AGPL question)
6. Do you also want the mascot on the loading screen?
