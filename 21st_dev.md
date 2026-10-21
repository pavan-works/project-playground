# 21st.dev — research, picks and link collection

> Everything about [21st.dev](https://21st.dev) for this portfolio lives in this file: what the catalogue contains, which components / themes / templates / icons were chosen (and why), what was rejected, and how components are brought in securely with the personal API key.
> Last updated: 2026-10-22. Design decisions still need the owner's approval before anything is built (see `portfolio.md` §11, §15, §17).

## Contents

1. [What 21st.dev offers](#1-what-21stdev-offers)
2. [Rules for picking](#2-rules-for-picking)
3. [Components for *The Zoom*](#3-components-for-the-zoom-work-experience-redesign-researched-2026-10-21)
4. [Curation — what to adopt](#4-curation--what-to-adopt-researched-2026-10-22)
5. [Original link collection](#5-original-link-collection)

---

## 1. What 21st.dev offers

| Area | What's there (as of 2026-10-22) | Notes |
|---|---|---|
| **Components** | 12,000+ React + Tailwind components in categories (Heroes 1152, Buttons 2043, Cards 1780, Forms 1522, Texts 663, Backgrounds 365, Timelines 74, Steppers 124, Sliders 217, Charts & Data Viz 246, Icons 851, …) | Search: `https://21st.dev/community/components/s/<term>` |
| **Libraries** | Aceternity UI, **Magic UI** (MIT), shadcn/ui, Origin UI, Geist, Kokonut UI, **Motion Primitives** (MIT), **Cnippet** (MIT), Ruixen UI, Efferd, Fancy Components, … | Library pages: `https://21st.dev/community/<author>/library/<name>` |
| **Themes** | 48 shadcn/ui themes by Serafim (Vercel, Supabase, Claude, Darkmatter, Northern Lights, Indigo Mono, Catppuccin, Cyberpunk, …) with light + dark tokens and font sets | `https://21st.dev/community/themes` |
| **Templates** | ~108 site templates (portfolios, SaaS/AI landings, dashboards) — mostly Next.js / Astro, many paid | `https://21st.dev/community/templates` |
| **Install** | `npx shadcn@latest add "https://21st.dev/r/<author>/<component>?api_key=$API_KEY_21ST"` — needs a personal key (free accounts have a daily install limit) | See §4.6 for how this repo uses the key safely |

## 2. Rules for picking

A component is only adopted if it:
1. **serves a real piece of this portfolio's content** (not decoration);
2. stays **restrained** — the redesign brief rejects "conventional layout + flashy effect";
3. is **legally reusable** — MIT code may be ported with credit; "unknown" licences are inspiration only;
4. adds **no new npm dependencies** where possible (the site already has `motion` and `lucide-react`);
5. keeps **accessibility** (keyboard, reduced motion, focus handling) at least as good as today.

---

## 3. Components for *The Zoom* (Work Experience redesign, researched 2026-10-21)

Searched 21st.dev for each building block of *The Zoom* (zoom, canvas, dial, orbit, network, morph, radial). **Finding: no component provides the core idea** (one camera moving through fixed stops while every object persists and shrinks), so the stage itself stays custom as planned in portfolio.md §17.7. A few components fit individual beats:

| Beat | 21st.dev component | What it is | Verdict |
|---|---|---|---|
| Stop selector ("a feature · a product · …") | [Zoom Level Toggle Group](https://21st.dev/@cnippet-dev/components/zoom-level-toggle-group) — Cnippet, MIT | Toggle group that picks a zoom level and scales a live preview | ✅ **Use as the pattern** for the stop control (segmented stops + live scale). Rebuild with our tokens; keyboard arrows + `aria-pressed`. |
| Reveal: stop labels turn into job titles | [Text Morph](https://21st.dev/@cnippet-dev/components/text-morph/morphing-placeholder) — Cnippet | Text that morphs from one string to another | ✅ **Use for the signature reveal** ("a feature" → "AI Intern", etc.). Off for reduced motion (instant swap). |
| Stop 5: techniques moving *between* products | [Animated Beam](https://21st.dev/@dillionverma/components/animated-beam) — Magic UI, MIT | A light pulse travelling along a path between two elements (framer-motion) | ✅ **Use**, but only for the confirmed links (portfolio.md §17.10 Q3). Port to `motion/react`. |
| Stop 4: 100+ repo dots + 55 Supabase dots | [Dot Grid](https://21st.dev/@halaska-studio/components/dot-grid/tight-spacing) — halaska-studio | Dense interactive dot grid | 🟡 **Inspiration only.** Our version must be a single SVG path with exactly 100+ / 55 dots and the 7 project dots highlighted (real counts, not decoration). |
| Stop 4: the control-plane hub | [Orbiting Circles](https://21st.dev/@dillionverma/components/orbiting-circles) — Magic UI | Icons orbiting a centre | 🟡 Optional: the existing DevTools `ProjectVisual` already has a hub-and-orbit drawing, so reuse that for consistency. |
| Free pan/zoom engine | [Zoom](https://21st.dev/@airbnb-visx/components/zoom) — Airbnb visx | Pan/zoom transform for SVG | ❌ Skip: free-form zoom fights the fixed-stop story and adds ~5 packages (`@visx/zoom`, `@visx/event`, …). A `motion` camera tween is enough. |
| Scene-to-scene zoom | [Zoom Through Transition](https://21st.dev/@framecn/components/zoom-through-transition) — framecn | A **video** transition for Editframe/Remotion | ❌ Not a web UI component. |
| Depth tabs | [ZoomDepthTabs](https://21st.dev/@ruixen.ui/components/zoom-depth-tabs) — Ruixen | Tabs that tilt/zoom the active tab | ❌ Tabs with a 3D flourish = the "conventional + effect" pattern portfolio.md §17.2 rejects. |
| Rotary dial | [Circular Fan Speed Knob](https://21st.dev/@ravikatiyar162/components/circular-fan-speed-knob) — Ravi Katiyar | Rotary knob for stepped values | ❌ Novelty control; licence unknown, keyboard support not documented. The toggle-group stops are clearer. |
| Stop 3 / 5 network | [Knowledge Graph](https://21st.dev/@heygaia/components/knowledge-graph), [Note Graph](https://21st.dev/@astralyxdev/components/note-graph) | Force-directed graphs | ❌ Generic "network dashboard" look; positions must be authored, not simulated, for the zoom to land. |

**How to bring components in.** 21st.dev installs through the shadcn CLI with a personal `API_KEY_21ST` (free accounts have a daily install limit), and this repo has no working shadcn setup (`components.json` points to a missing `src/styles.css`). So instead: copy the source of **MIT-licensed** components into `src/components/`, port `framer-motion` imports to the installed `motion/react`, restyle with our tokens, and add a credit comment. Components with an **unknown licence** are inspiration only (no copied code).

**Net effect on the plan:** no new dependencies; three borrowed patterns (stop toggle, text morph for the reveal, animated beam for stop 5); the stage, camera and dot field stay custom.

---

## 4. Curation — what to adopt (researched 2026-10-22)

**How this was chosen.** I went through 21st.dev's components (categories plus the Motion Primitives, Magic UI, Cnippet and other libraries), its 48 themes (dark-mode tokens read from the theme pages), its ~108 templates, and its icon components. Every pick had to pass the same tests as the redesign brief (portfolio.md §17): it must **serve a real piece of this portfolio's content**, stay **restrained** (no effect for its own sake), and be **legally reusable**. Most of 21st.dev is the "conventional + flashy effect" pattern the brief rejects, so the list below is deliberately short.

**Licences.** Motion Primitives (ibelick): **MIT** (confirmed on GitHub). Magic UI (Dillion Verma): **MIT**. Cnippet: **MIT** (per its 21st pages). Components with an "unknown" licence are **inspiration only**.

### 4.1 Theme — keep our palette, adopt *Indigo Mono*'s discipline

| Theme (dark mode, read from 21st.dev) | Tokens | Fit |
|---|---|---|
| **Indigo Mono** | background `oklch(0 0 0)` (pure black), card `oklch(0.21 0 267)`, **one** primary `oklch(0.51 0.16 267)` (indigo), every other surface a neutral grey; fonts **Geist + JetBrains Mono**; radius 0.5rem | ✅ Closest to our look. **Lesson to adopt:** one primary accent + neutral greys + two or three fonts. |
| Darkmatter | background `#121113`, primary `#e78a53` (orange), secondary `#5f8787`; Geist Mono + JetBrains Mono | ❌ Orange brand colour is off-palette. |
| Northern Lights | background `#1a1d23` (slate), primary `#34a85a` (green), secondary `#4682b4`; Plus Jakarta Sans + Source Serif 4 + JetBrains Mono | ❌ Slate + green reads like a different brand. |

**Recommendation (owner decides; no colours change without approval, see portfolio.md §15):**
1. Keep the confirmed palette: near-black `#030303`, cyan `--gold` as the one primary, indigo/emerald only as secondary accents.
2. Fonts: the site loads **six** today (Inter, Fraunces, Space Grotesk, La Belle Aurore, Syne, JetBrains Mono). Following Indigo Mono, use **Syne** (headings) + **Inter** (body) + **JetBrains Mono** (labels/code) for the site, and **Fraunces + La Belle Aurore only for the loader** (kept by the owner) and the italic "Neural", self-hosted and subset so they don't block first paint. JetBrains Mono would replace Space Grotesk for labels; that's a visible change, so it needs owner approval first.

### 4.2 Picks by section

| Site area | 21st.dev pick (licence) | What we take from it | Why it earns its place |
|---|---|---|---|
| **02 Work Experience: *The Zoom*** | Zoom Level Toggle Group (Cnippet, MIT) · Text Morph (Motion Primitives / Cnippet, MIT) · Animated Beam (Magic UI, MIT) | Stop selector · the titles reveal · lines between products at stop 5 | Already justified in §3 above. |
| **Selected Works → case study** | [Morphing Dialog](https://21st.dev/@ibelick/components/morphing-dialog) (Motion Primitives, MIT) | The project card **expands into** its case study (layout animation), instead of a separate modal fading in | The card and its case study become one object, so the click explains itself. Keep our existing focus trap, Esc and `role="dialog"` (Morphing Dialog documents Esc and click-outside, but not a focus trap). |
| **Case study content** | Idea from the [Design Process Case Study](https://21st.dev/@kedhareswer/templates/design-process-case-study-template) template (inspiration) | **Role chips** ("my part": design, backend, CI…) in each case study | Answers the recruiter's real question: *what did you do?* The template's "time allocation bar" is **not** adopted, because there's no documented data for it. |
| **About stats** (once replaced with honest numbers, §11) | [Sliding Number](https://21st.dev/@ibelick/components/sliding-number) (Motion Primitives, MIT) | Digits settle into place once, when the stats scroll in | Subtle and focused on the number; only worth it for real numbers (7 · 100+ · 194 · 2). Off for reduced motion. |
| **05 My Process lens switcher** | [Transition Panel](https://21st.dev/@ibelick/components/transition-panel) (Motion Primitives, MIT) | Direction-aware swap of the "In practice" text when the lens changes | Shows that the *same step* changes with the lens, which is the whole point of the switcher. |
| **Long page** (audit: ~24 screens) | [Scroll Progress](https://21st.dev/@ibelick/components/scroll-progress) (Motion Primitives, MIT) | A 2px cyan progress line under the nav | Tells visitors how much is left; costs nothing visually. |
| **Contact** | Idea from the [Developer Portfolio, Sticky Sidebar](https://21st.dev/@kedhareswer/templates/developer-portfolio-template-with-sticky-sidebar) template | A **copy-email** button with a "Copied" state next to the Mail card | Faster than opening a mail app; recruiters often paste the address into their applicant-tracking system. |
| **`solige_pullaiah.py` block** | [Terminal](https://21st.dev/@dillionverma/components/terminal/terminal-demo-2) (Magic UI, MIT), *optional* | Type the class out once when it scrolls into view, then stay static | Only if it stays readable and fast. Static is fine too. |
| **Hero name** (audit: no name in the hero) | [Text Effect](https://21st.dev/@ibelick/components/text-effect) (Motion Primitives, MIT), *only if the owner adds the name* | One gentle word-by-word fade-in for "Solige Pullaiah" | The name appears first, once; no looping or rotating text. |

### 4.3 Icons

- **Keep `lucide-react`** for UI icons: consistent stroke style, already installed.
- **Brand logos:** self-host the tech/tool logos as local SVGs (from simple-icons / devicon) instead of the four CDNs used today. This fixes the audit's risk that logos break silently when a CDN changes. No 21st component is needed.
- **Animated icons** (e.g. the Chánh Đại icon set on 21st.dev): at most two small moments, the copy-email check and the contact "sent" tick. Everything else stays static.

### 4.4 Templates

None should be adopted wholesale: they're Next.js or Astro, and most are generic landing pages. Two ideas are taken (role chips and copy-email), credited above. "Glass portfolio", "Card Stack", "macOS Desktop" and "Scroll Tear" were reviewed and rejected: each is a visual gimmick that would replace the content rather than reveal it.

### 4.5 Considered and rejected (and why)

| Rejected | Reason |
|---|---|
| Shader / WebGL / liquid-metal heroes, Spline scenes, globes | Heavy and decorative; three.js was just removed for speed. |
| Orbiting skills, radial orbital timeline, 3D tilt cards, depth tabs | Familiar "portfolio template" effects, which portfolio.md §17.2 rejects. |
| Neon/RGB/rainbow/glitch/scramble text, custom cursors, magnetic buttons | Effects without meaning; they hurt readability. |
| Force-directed graphs (Knowledge / Note Graph) | Generic dashboard look; positions must be authored for *The Zoom*. |
| More marquees / infinite sliders | The Skillset already has one. |
| Free-form zoom engines (visx Zoom) | Fights the fixed-stop story and adds ~5 packages. |

### 4.6 How the components get in (secure use of the 21st key)

- The key is stored as `API_KEY_21ST` in the git-ignored `.env` (never committed, never printed).
- 21st's registry returns each component's **source** at `https://21st.dev/r/<author>/<component>?api_key=…`. This repo has no working shadcn setup, so the plan is: **fetch the source JSON in a temporary shell that reads the key from `.env`**, mask the key in any output, save the code to a scratch folder, then hand-port it into `src/components/`: `framer-motion` → `motion/react`, our tokens, and a credit comment with author + licence. Only MIT components are copied, and only approved picks are fetched, which respects the daily install limit.
- No new npm dependencies are expected: every pick runs on `motion` + `lucide-react`, which are already installed.

### 4.7 Suggested order

1. Scroll Progress + copy-email (small, independent wins).
2. Morphing Dialog for the case studies, plus role chips once the owner lists his role per project.
3. Transition Panel in My Process.
4. *The Zoom* (portfolio.md §17), using Zoom Level Toggle Group + Text Morph + Animated Beam.
5. Font consolidation (§4.1), after the owner approves the visual change.
6. Sliding Number + the hero Text Effect, only after the honest-stats and hero-name decisions in portfolio.md §11.

---

## 5. Original link collection

> The owner's own curated list of 21st.dev components and reference sites (kept as written). Picks from it are reflected in §4; ideas from it are also summarised in `portfolio.md` §13.

**Sidebar Styles** 

[https://21st.dev/community/components/jshguo/sidebar-component/default](https://21st.dev/community/components/jshguo/sidebar-component/default)   
[https://21st.dev/community/components/shadcn/sidebar/default](https://21st.dev/community/components/shadcn/sidebar/default)   
[https://cdn.21st.dev/larsen66/sidebar-component/default/bundle.1756233832684.html?theme=dark\&dark=true](https://cdn.21st.dev/larsen66/sidebar-component/default/bundle.1756233832684.html?theme=dark&dark=true)   
[https://cdn.21st.dev/easemize/modern-mobile-menu/default/bundle.1749141720487.html?theme=dark\&dark=true](https://cdn.21st.dev/easemize/modern-mobile-menu/default/bundle.1749141720487.html?theme=dark&dark=true)   
[https://cdn.21st.dev/bundled/28.html?theme=dark\&dark=true](https://cdn.21st.dev/bundled/28.html?theme=dark&dark=true)   
[https://cdn.21st.dev/easemize/limelight-nav/default/bundle.1749735671558.html?theme=dark\&dark=true](https://cdn.21st.dev/easemize/limelight-nav/default/bundle.1749735671558.html?theme=dark&dark=true) 

**Sign in and Sign UP page :**   
[https://cdn.21st.dev/easemize/sign-up/default/bundle.1760182377247.html?theme=light](https://cdn.21st.dev/easemize/sign-up/default/bundle.1760182377247.html?theme=light) 

**Click to Expand and Show in Half Screen :** 

[https://cdn.21st.dev/bundled/1903.html?theme=dark\&dark=true](https://cdn.21st.dev/bundled/1903.html?theme=dark&dark=true)   
Build or Edit your Docs : [https://cdn.21st.dev/bundled/1171.html?theme=dark\&dark=true](https://cdn.21st.dev/bundled/1171.html?theme=dark&dark=true) 

**Search bar :**   
[https://cdn.21st.dev/lovesickfromthe6ix/omni-command-palette/default/bundle.1755732330319.html?theme=dark\&dark=true](https://cdn.21st.dev/lovesickfromthe6ix/omni-command-palette/default/bundle.1755732330319.html?theme=dark&dark=true)   
[https://cdn.21st.dev/bundled/555.html?theme=dark\&dark=true](https://cdn.21st.dev/bundled/555.html?theme=dark&dark=true) 

**Focus cards / Gallery :**   
[https://cdn.21st.dev/bundled/1168.html?theme=dark\&dark=true](https://cdn.21st.dev/bundled/1168.html?theme=dark&dark=true) 

**Scroll and Expansion :**   
[https://cdn.21st.dev/bundled/1932.html?theme=dark\&dark=true](https://cdn.21st.dev/bundled/1932.html?theme=dark&dark=true)   
[https://cdn.21st.dev/dev.yadhakim/interactive-globe/default/bundle.1771998219024.html?theme=dark\&dark=true](https://cdn.21st.dev/dev.yadhakim/interactive-globe/default/bundle.1771998219024.html?theme=dark&dark=true) 

**Comparison Slider :**   
[https://cdn.21st.dev/minhxthanh/image-comparison-slider/default/bundle.1758190242046.html?theme=dark\&dark=true](https://cdn.21st.dev/minhxthanh/image-comparison-slider/default/bundle.1758190242046.html?theme=dark&dark=true) 

**To Show Features 👍**  
[https://21st.dev/community/components/Northstrix/bauhaus-card/default](https://21st.dev/community/components/Northstrix/bauhaus-card/default)    
[https://21st.dev/community/components/aceternity/glowing-effect/default](https://21st.dev/community/components/aceternity/glowing-effect/default)   
[https://cdn.21st.dev/avanishverma4/3d-folder/default/bundle.1767174252226.html?theme=dark\&dark=true](https://cdn.21st.dev/avanishverma4/3d-folder/default/bundle.1767174252226.html?theme=dark&dark=true)   
[https://cdn.21st.dev/koustubhayadiyala36/morphing-card-stack/default/bundle.1764410711764.html?theme=dark\&dark=true](https://cdn.21st.dev/koustubhayadiyala36/morphing-card-stack/default/bundle.1764410711764.html?theme=dark&dark=true)   
[https://cdn.21st.dev/avanishverma4/bento-grid-01/default/bundle.1765189800460.html?theme=dark\&dark=true](https://cdn.21st.dev/avanishverma4/bento-grid-01/default/bundle.1765189800460.html?theme=dark&dark=true) 

**Vertical stack :** [https://cdn.21st.dev/jatin-yadav05/vertical-image-stack/default/bundle.1765442658266.html?theme=dark\&dark=true](https://cdn.21st.dev/jatin-yadav05/vertical-image-stack/default/bundle.1765442658266.html?theme=dark&dark=true) 

**Tables :**   
[https://cdn.21st.dev/ruixen.ui/ruixen-contributors-table/default/bundle.1749402460751.html?theme=dark\&dark=true](https://cdn.21st.dev/ruixen.ui/ruixen-contributors-table/default/bundle.1749402460751.html?theme=dark&dark=true)   
[https://cdn.21st.dev/ravikatiyar162/project-data-table/default/bundle.1759681409079.html?theme=dark\&dark=true](https://cdn.21st.dev/ravikatiyar162/project-data-table/default/bundle.1759681409079.html?theme=dark&dark=true)   
[https://cdn.21st.dev/ruixen.ui/flexi-filter-table/default/bundle.1757834897063.html?theme=dark\&dark=true](https://cdn.21st.dev/ruixen.ui/flexi-filter-table/default/bundle.1757834897063.html?theme=dark&dark=true) 

**Video Shower :**   
[https://cdn.21st.dev/bundled/1107.html?theme=dark\&dark=true](https://cdn.21st.dev/bundled/1107.html?theme=dark&dark=true)   
[https://cdn.21st.dev/ravikatiyar162/onboarding-checklist/default/bundle.1759516044687.html?theme=dark\&dark=true](https://cdn.21st.dev/ravikatiyar162/onboarding-checklist/default/bundle.1759516044687.html?theme=dark&dark=true)   
[https://cdn.21st.dev/ravikatiyar162/welcome/default/bundle.1759302907318.html?theme=dark\&dark=true](https://cdn.21st.dev/ravikatiyar162/welcome/default/bundle.1759302907318.html?theme=dark&dark=true) 

**Loaders :**   
[https://cdn.21st.dev/aghasisahakyan1/loader/default/bundle.1755400427067.html?theme=dark\&dark=true](https://cdn.21st.dev/aghasisahakyan1/loader/default/bundle.1755400427067.html?theme=dark&dark=true) 

**To Show Demo**   
[https://21st.dev/community/components/designali-in/shine-border/default](https://21st.dev/community/components/designali-in/shine-border/default) 

**Settings :**   
[https://cdn.21st.dev/bundled/1197.html?theme=dark\&dark=true](https://cdn.21st.dev/bundled/1197.html?theme=dark&dark=true) 

**AI Voice Input :**   
[https://cdn.21st.dev/bundled/1451.html?theme=dark\&dark=true](https://cdn.21st.dev/bundled/1451.html?theme=dark&dark=true)   
Listen, process , speaking [https://cdn.21st.dev/botsnew354/ia-siri-chat/default/bundle.1750357827919.html?theme=dark\&dark=true](https://cdn.21st.dev/botsnew354/ia-siri-chat/default/bundle.1750357827919.html?theme=dark&dark=true) 

**AI chat Assitance :**   
[https://cdn.21st.dev/bundled/2126.html?theme=dark\&dark=true](https://cdn.21st.dev/bundled/2126.html?theme=dark&dark=true) 

**AI Prompt Box :**   
[https://cdn.21st.dev/easemize/ai-prompt-box/default/bundle.1747972675277.html?theme=dark\&dark=true](https://cdn.21st.dev/easemize/ai-prompt-box/default/bundle.1747972675277.html?theme=dark&dark=true) 

**Smart Combo Box**   
[https://cdn.21st.dev/lovesickfromthe6ix/smart-combo-box/default/bundle.1755782877033.html?theme=dark\&dark=true](https://cdn.21st.dev/lovesickfromthe6ix/smart-combo-box/default/bundle.1755782877033.html?theme=dark&dark=true) 

**Type writer or Text Apperance :**   
[https://21st.dev/community/components/danielpetho/typewriter/default](https://21st.dev/community/components/danielpetho/typewriter/default) 

**Model Planning Or Agent Planning :**   
[https://cdn.21st.dev/bundled/2127.html?theme=dark\&dark=true](https://cdn.21st.dev/bundled/2127.html?theme=dark&dark=true) 

**Animated Testimonials  Or Reviews or What Our Users Say :** 

[https://21st.dev/community/components/aceternity/animated-testimonials/default](https://21st.dev/community/components/aceternity/animated-testimonials/default)   
[https://cdn.21st.dev/vaib215/stagger-testimonials/default/bundle.1748367465509.html?theme=dark\&dark=true](https://cdn.21st.dev/vaib215/stagger-testimonials/default/bundle.1748367465509.html?theme=dark&dark=true) 

**Calender :**   
[https://cal.com/aliimam/designali](https://cal.com/aliimam/designali) 

**SCREENS :** 

[https://www.campsite.com/](https://www.campsite.com/)   
[https://opensea.io/](https://opensea.io/)   
[https://aistudio.google.com/apps/bundled/product\_mockup?showPreview=true\&showAssistant=true](https://aistudio.google.com/apps/bundled/product_mockup?showPreview=true&showAssistant=true) 

PORTIFOLIO 

[https://cdn.21st.dev/easemize/pixel-perfect-hero/default/bundle.1781185553156.html?theme=light](https://cdn.21st.dev/easemize/pixel-perfect-hero/default/bundle.1781185553156.html?theme=light)   
[https://cdn.21st.dev/xubohuah/particle-text-effect/default/bundle.1750754554698.html?theme=light](https://cdn.21st.dev/xubohuah/particle-text-effect/default/bundle.1750754554698.html?theme=light)   
