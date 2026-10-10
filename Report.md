# Portfolio Audit: Solige Pullaiah (soligepullaiah.vercel.app)

**Overall rating: 4.5 / 10. Hold off on applications until the Stage 1 fixes below are done.**

| | |
|---|---|
| **Audit date** | 11 October 2026 |
| **Code audited** | `project-playground`, commit `f8f5c98` ("Growth at Hrudai and Cursor plan"). No source changes since. |
| **Live site** | Serves the same build (JS bundle `index-Blxf3qIU.js`) |
| **Labels used** | **Confirmed**: checked directly. **Risk**: likely problem, not proven. **Recommendation**: opinion or best practice. |

## Executive summary

The site looks polished and expensive, and the Hrud.ai work section is strong. The problem is credibility: what the site says about your two personal projects does not match the code in those repos. Recruiters skimming the page will be impressed. A technical hiring manager who clicks "GitHub" will find the gap within about two minutes, and that can turn a "maybe" into a rejection.

The good news: most Stage 1 fixes are copy edits in two files ([src/data.ts](src/data.ts) and [src/App.tsx](src/App.tsx)) plus README updates. That's a few days of work, not a rebuild.

### What I examined, and what I couldn't

**Examined:**
- **Source code:** all of it, in `project-playground` (React 19, Vite 6, Tailwind v4, three.js, motion).
- **Build checks:** `tsc --noEmit` passes, and the production build succeeds.
- **Live site:** its JS bundle matches my local build, so the site matches the current source.
- **Rendering:** I viewed that production build at 1280×800 and 375×812.
- **GitHub:** the profile, both showcase repos (read file by file), and the other public repos.
- **External links:** checked whether each one loads (see Appendix B).

**Not examined:**
- **Lighthouse:** I didn't run it, so I report bundle sizes, not scores.
- **LinkedIn:** it blocks bots.
- **X profile:** it's a JavaScript-only page, so I couldn't confirm it exists.
- **Resume PDF text:** I had no PDF parser, so I compared against `Resume-pullaiah.md` instead. Check the PDF says the same.
- **Your Hrud.ai code:** it's private, and that's normal.
- **The `rag_chat` repo's code:** I saw its README, not its source (see section 5).

---

## 1. First impression

**First 10 seconds:**
- A forced 2-second "Portfolio" splash screen comes first ([App.tsx:1189](src/App.tsx:1189)), with the tagline "Architecting the future of human-AI collaboration through neural synthesis."
- Then the hero: giant "AI Engineer & ML Researcher" text with your photo over it. Your photo covers part of "Researcher" on desktop.
- **Your name appears nowhere in the hero.** None of the page's 11 headings contains it. It only shows in the splash screen and the footer.
- A recruiter thinks: "Nice design. Whose site is this?"

**First 30 seconds:**
- The "Worked with Hrud.ai · CodeForces · OpenAI · HuggingFace · Supabase" row ([App.tsx:114](src/App.tsx:114)) suggests you worked *with* OpenAI and Hugging Face. You didn't; you used their APIs. Sharp readers will see this as inflation.
- "Codeforces" is best known as a competitive-programming site, so "AI/ML Intern — CodeForces" will confuse people unless you clarify the company (full legal name, city, or website).
- The About section opens with "Engineering the Neural Future" and the stats "15+ systems shipped" and "∞ Curiosity" ([App.tsx:127](src/App.tsx:127)). The 15+ isn't backed anywhere: the site lists 7 Hrud.ai projects, 2 personal projects and 2 papers, which is 11.
- The Identity panel says **"Open to work"** ([App.tsx:226](src/App.tsx:226)) while the page also says you're currently employed at Hrud.ai. That's fine if true, but "Open to new roles" is clearer and doesn't look like an old badge.
- The Identity panel also shows **"Also known as: Puli Pavan"** ([App.tsx:234](src/App.tsx:234)) with no explanation. Your GitHub (`puli-pro`) and email (`pulipavan…`) use that name, so the link helps, but say why (for example, "Goes by Pavan") or remove it.

**Deeper review:**
- **The page is long:** 19,475 px on desktop (about 24 screens) and 32,578 px on mobile (about 40 screens).
- **Projects are buried:** "Selected Works" starts about 12,400 px down, after Hrud.ai work, Journey, Skillset and Process.
- **Contact is even lower:** it starts at about 17,500 px.
- **Section numbering is inconsistent:** "01 / Profile," "02 / The Journey," "03 / Tech Stack," but Work Experience (between 01 and 02) and every later section have no number. Number everything or nothing.

**Verdict:** it looks modern and professional. It does not say who you are or what makes you different fast enough. The differentiator is real (you ship production AI and platform work at a startup), but the decoration crowds it out.

## 2. Recruiter readiness and role fit

**What the evidence supports:**

| Role | Supported? | Why |
|---|---|---|
| Junior AI application / LLM engineer | **Yes, best fit** | Hrud.ai chatbots, career bot, interview-prep tool, production Gemini integrations |
| Full-stack engineer (with AI features) | **Yes, strong** | Most of the Hrud.ai evidence is full-stack and platform work: Supabase, Vercel, CI, RBAC, CSP, SEO pre-rendering, admin analytics |
| Frontend developer | **Weak** | The portfolio itself is the only frontend evidence. No frontend project is featured. React and TypeScript appear only as logos. |
| ML researcher / ML engineer (training models) | **Not publicly supported** | No public code or results for LaMaTEPP or SyncVerse. The "Read Paper" link opens a PNG screenshot. The headline result says "Estimated +5–10 BLEU." |

**Shortlist triggers:** a current title of AI Engineer, live products (jobgalaxy.app, the admin console), and specific, plausible numbers: 100+ repos, 55 Supabase projects, 194 CI tests.

**Rejection triggers:** project descriptions that don't match their repos, a "paper" that is a screenshot, and contradictory job titles. The titles shown are:
- "AI Engineer, Jan 2026–Present" (Experience card)
- "AI Intern → AI Team Lead → DevOps & Architecture Engineer → AI Research Engineer (Promoted)" ([data.ts:682](src/data.ts:682))
- "Hrud.ai Internship" in Achievements ([data.ts:528](src/data.ts:528))

That's four titles in about nine months, with no dates for any step.

**If you're targeting frontend or full-stack roles:** the portfolio currently positions you as AI-first. For full-stack applications, lead with the Hrud.ai platform work (control plane, Job Galaxy SaaS, CI and security hardening) and treat AI as a strength rather than the headline. For frontend roles, you'd need at least one featured frontend project with a live demo; the portfolio site itself only counts once its accessibility and performance issues are fixed.

## 3. Design, UI/UX and visual quality

**Keep:**
- The dark design with cyan, indigo and emerald accents is consistent across sections.
- The animated SVG project diagrams are well made, and their CSS animations turn off for users who prefer reduced motion.
- The Skillset cards that show where each skill was used are a recruiter-friendly pattern; few portfolios do this.
- The Hrud.ai "problem + cost formula" card.
- The Resume and Hire Me buttons in the top nav, plus a mobile action bar that appears when scrolling up.
- No horizontal overflow on mobile (verified at 375 px).

**Fix:**

| Issue | Evidence | Recommendation |
|---|---|---|
| **Scroll trap** | The 3D Journey gallery cancels mouse-wheel events ([InfiniteGallery.tsx:101](src/components/InfiniteGallery.tsx:101)). I confirmed `defaultPrevented: true` in the browser. Scrolling down the page stalls when the cursor passes over it. | Only capture the wheel after a click or focus, or replace the gallery with a static timeline. |
| **Global arrow-key hijack** | The gallery listens for arrow keys on the whole window ([InfiniteGallery.tsx:114](src/components/InfiniteGallery.tsx:114)), so pressing arrows anywhere also moves it. | Scope the listener to the focused canvas. |
| **Forced 2-second splash** | `setTimeout(..., 2000)` ([App.tsx:1189](src/App.tsx:1189)) | Remove it. Recruiters pay a 2-second cost for nothing. |
| **Too many effects** | Most cards stack cursor spotlights, glows, pulsing dots, huge outlined numbers and a marquee. There's also a full-screen vignette and a noise overlay. | Keep one signature effect (the project diagrams) and calm the rest. |
| **Tiny uppercase labels** | Much of the text is 11 px uppercase with letter-spacing of 0.25–0.5em. | Use at least 13–14 px for anything meant to be read; keep the spaced style only for short labels. |
| **Six font families** | Inter, Fraunces, Space Grotesk, La Belle Aurore, Syne and JetBrains Mono, loaded through a CSS `@import`, which delays rendering ([index.css:1](src/index.css:1)) | Use two or three, and load them from a `<link>` tag or self-host them. |
| **Navigation** | No "Contact" or "Projects" link (projects are labelled "Works"). The menu collapses to a hamburger on scroll and needs a click to expand. The footer nav also lacks Experience and Contact. | Use About · Experience · Projects · Contact, in both the top nav and the footer. |
| **Accessibility** | There's no visible focus styling anywhere, and form inputs use `outline-none` ([ContactForm.tsx:59](src/components/ContactForm.tsx:59)). The project detail dialog has no `role="dialog"` and doesn't keep keyboard focus inside it. Project cards are `<button>`s wrapping headings and blocks. The motion/react animations and the 3D autoplay ignore reduced-motion settings. | Add `focus-visible` rings, wrap the app in `<MotionConfig reducedMotion="user">`, and make each card an `<article>` with a real link inside. |

## 4. Content and positioning

**Vague, inflated or unsupported copy:**
- "A curated collection of neural artifacts and computational experiments executed with absolute precision" ([App.tsx:948](src/App.tsx:948)). This is filler; cut it.
- "All neural rights reserved. Designed for the future of intelligence" ([App.tsx:1148](src/App.tsx:1148)).
- The fake `NeuralInterface` Python snippet ([App.tsx:989](src/App.tsx:989), rendered at [App.tsx:1270](src/App.tsx:1270)) is nonsense code (`self.core = "SP-ALPHA-2026"`). Hiring managers will read it as decoration pretending to be engineering. Delete it.
- "15+ systems shipped," "∞ Curiosity," and the "Worked with" logo row.
- The "+ Add your own images" uploader in Journey ([App.tsx:462](src/App.tsx:462)) lets *visitors* upload pictures into your portfolio. It's a dev feature left exposed; remove it.
- The Journey section gives school percentages from 2010–2022 (80%, 75.8%). For an engineer with a job, these add nothing and invite comparison. Keep the B.Tech and CGPA only.

**Inconsistent facts:**
- **Location:** the site says Hyderabad ([data.ts:146](src/data.ts:146)); `Resume-pullaiah.md` says Visakhapatnam.
- **Hrud.ai title:** the three versions listed in section 2.
- **LaMaTEPP result:** "Estimated +5–10 BLEU" on the site ([data.ts:255](src/data.ts:255)) versus "achieving +5–10 BLEU" on the resume. A range plus "estimated" reads as not actually measured.
- **SyncVerse metrics:** "LSE-D ↓18%" and the others are shown with no baseline named and no paper or code link.

**Skills on the site don't match the resume:**
- **Missing from the site's logo wall:** PyTorch, scikit-learn, OpenCV and Hugging Face Transformers. Your About summary names PyTorch and OpenCV, and your research is built on PyTorch, yet the logo wall shows Railway, VS Code and Vercel instead. For an AI engineer, that's the wrong emphasis.
- **Languages:** the Skillset "Languages" card lists only Python. The resume lists Python, JavaScript and SQL, and the Hrud.ai work clearly involves TypeScript.
- **Empty evidence rows:** SQLite, MySQL, Pinecone, Microsoft Azure and Vercel have no "where used" text ([data.ts:333](src/data.ts:333), [data.ts:345](src/data.ts:345)). Empty rows weaken the skill-to-evidence pattern that makes this section good. Fill them in or remove them.
- **Pick one source of truth** (the resume) and make the site's skills match it exactly.

**Rewrites.** These use only facts already on your site.

> **Hero:** **Solige Pullaiah**: AI Engineer at Hrud.ai, building LLM, RAG and agent features into production products.
> *Sub-line:* I ship end-to-end: Supabase backends, CI-tested APIs, and LLM integrations. B.Tech CSE (AI), 2026. Hyderabad / remote.
> *Buttons:* **View my work** · **Resume** · **Email me**

> **About heading:** replace "Engineering the Neural Future" with "AI engineer who ships the whole product."

> **About stats:** replace "15+ / 2 / 12% / ∞" with numbers you can back up: "7 production projects at Hrud.ai · 100+ repos managed · 194 CI tests · 2 manuscripts under review."

> **Selected Works subtitle:** "Side projects and research outside my day job, each linked to its code or write-up."

> **Ollama Document Assistant (honest version, matching the current code):** "A local document Q&A app. Upload a PDF, DOCX, TXT, CSV or XLSX file (or a URL) and ask questions answered by Llama 3 running locally through Ollama, with an OpenAI fallback. Flask API, React UI."

> **AI Job Agent (honest version):** "A FastAPI service that fetches JSearch and Adzuna listings in parallel, normalises and de-duplicates them, filters by recency and location, and can score the top 20 matches with Gemini. React front end."

> **Hrud.ai role:** "AI Intern → AI Engineer · Hrud.ai · Jan 2026–present." Then list the progression with real dates, or drop it.

> **Xencomedical item:** replace "Approved by the client, who was very pleased with the result" with what you changed (pages, features, stack) and "delivered in 2 days, approved by the client."

> **Footer:** replace the "neural rights" line with "© 2026 Solige Pullaiah."

## 5. Project-by-project credibility

This section matters most.

**1. Ollama LLM Document Assistant** ([data.ts:193](src/data.ts:193))

- **Claimed on the site:** RAG with chunking, embeddings and re-ranking; FAISS and Chroma; streaming; citations; FastAPI.
- **Found in the repo:**
  - FAISS, Chroma, embeddings, re-ranking: none exist.
  - Backend: Flask, not FastAPI.
  - How answers are built: `/ask` takes the most recently uploaded file, cuts it to 12,000 characters (`content[:max_chars]`) and puts all of it into the prompt. This is not RAG.
  - Citations: only the filename is returned.
  - Streaming: the parameter exists but isn't used; the full answer comes back at once.
  - README: titled "SASTHA MOBILE Inventory Assistant v2.0." No architecture diagram, screenshots or demo.
  - Clutter: a 35 KB Tkinter desktop app (`enhanced_app.py`) alongside the web app, and a `bring-answer-now-main/` folder that is mostly a stock React + shadcn/ui template (about 50 generated UI files).
  - History and tests: one squashed commit ("Initial clean commit"), no license, no tests. `test_installation.py` only checks that dependencies are installed.
- **Verdict:** the claims don't match the code. This is the single most damaging item in the portfolio.
- **Fix:** either rewrite the description to match the code, or (better) actually build the RAG version: chunking, `sentence-transformers` embeddings, a FAISS index, top-k retrieval and passage-level citations. Add a 20-question evaluation set with retrieval hit rate. That's roughly 1–2 weeks of work, and it turns your weakest item into proof of the exact skill you claim. Also delete the Tkinter app (or move it to a separate folder), rename the template folder, and fix the README title.

**2. AI Job Intelligence Agent** ([data.ts:215](src/data.ts:215))

- **Claimed on the site:** JSearch, Adzuna and LinkedIn aggregation; Supabase; a multi-agent plan → retrieve → analyze → rank workflow; embeddings and semantic search.
- **Found in the repo:**
  - JSearch and Adzuna: real, fetched in parallel. FastAPI is real.
  - LinkedIn: only appears inside a Gemini prompt that uses Google Search.
  - Supabase: not used.
  - Agents: no planner and no agent framework, just a fixed fetch → normalize → dedupe → filter pipeline.
  - Embeddings: only an unused config file left over from another project.
  - README: the root README describes a different project (interview prep / ATS) and a `tests/` folder that doesn't exist. It's also saved as UTF-16, so it may display as garbled text in some tools. The accurate docs are in `job-aggregator-backend/README.md`.
  - Small hygiene issues a reviewer will notice: a misspelled `dediplication_agent.py`, setup scripts committed as `setup.sh.txt` and `setup.bat.txt`, and a committed `.env.txt` (its values are placeholders, so no secrets leaked, but use `.env.example` instead).
  - History and tests: one commit, no license, no tests.
- **Verdict:** a decent data pipeline, overstated as a multi-agent system.
- **Fix:** rewrite the README and description honestly. If you want "agents" on the site, add a real orchestration layer, rank against a resume using embeddings, and store results in Supabase.

**3. LaMaTEPP (machine translation research)** ([data.ts:239](src/data.ts:239))

- **Found:** no public code. The "Read Paper" link opens a Google Drive file named "Screenshot 2026-03-23 001111.png." It's publicly viewable, but it's an image, not a paper.
- **Fix:** link a real PDF (an abstract or a preprint, if the venue allows), a results table with named test sets, or nothing at all. Drop the word "Estimated."

**4. SyncVerse (lip-sync research)** ([data.ts:266](src/data.ts:266))

- **Found:** no link, no code, and metrics with no baseline named.
- **Fix:** name the baseline (for example, "vs Wav2Lip on LRS2," if that's true), or label it "in progress" and drop the percentages.

**Hrud.ai work (7 items)**

- **Verdict:** your most credible content. It's specific, the live links load (jobgalaxy.app, the admin console, xencomedical.com), and it covers real engineering: RBAC, CSP, lockout backoff, CI, and a separate admin deployment.
- **Weak spots:**
  - "Approved by the client, who was very pleased with the result" is filler.
  - The Xencomedical and Pulse items are thin.
  - Real screenshots would beat illustrative animations here.
  - Linking the public admin console invites recruiters to a login screen. Make sure that's intended and that the company is fine with it.

**Other public repos worth knowing about**

- **`rag_chat`** (created August 2026) has a README with an architecture section and screenshots. I didn't review its code. If it really implements retrieval, it may be a **better showcase than the Ollama project as it stands**. Check it, and if it holds up, feature it.
- **`Multi-agents`** actually contains a "Crisis-level-Prediction" Flask project, and commits pickled models and `flask_session` files. A misleading repo name next to a portfolio that claims multi-agent work is a bad combination. Rename it or make it private.
- **`PolyVision_paper` / `PolyVision--Research_paper-`** is the only repo with a license (MIT). If it's research you did, consider mentioning it.

**GitHub profile:**
- No bio, name, location or website, and no profile README.
- **Pinned repos are weak:** an OpenPose fork (`PULI`), a notes repo with only a .doc file (`NLP`), and a 2024 repo with no code language detected (`credit-card-fraud-detection-`). Neither showcase repo is pinned.
- 19 public repos, 15 contributions in the last year, 0 stars, and only one licensed repo.
- Recruiters do open this page.

## 6. Technical audit (the portfolio's own code)

| Area | Finding | Type |
|---|---|---|
| Build | `tsc --noEmit` passes; `vite build` succeeds | Confirmed ✅ |
| Bundle | One 1,403 KB JS chunk (396 KB gzipped), with three.js, react-three-fiber and drei loaded up front for a single gallery. Vite warns about it during the build. | Confirmed defect |
| Images | Hero portrait is a 742 KB PNG | Confirmed (convert to WebP/AVIF, about 100 KB) |
| Social / SEO | Good title, description, canonical URL and JSON-LD Person schema. **No `og:image`**, and the Twitter card has no image ([index.html](index.html)). **No favicon** (`/favicon.ico` returns 404 on the live site). | Confirmed |
| Dead dependencies and leftovers | `@google/genai`, `express`, `dotenv` and `tsx` are never imported. `src/lib/*` and `hooks/use-mobile` are unused. AI Studio leftovers: `metadata.json`, a `GEMINI_API_KEY` in `.env.example`, a comment about AI Studio in `vite.config.ts`, and a duplicated license header in `App.tsx`. `package.json` still names the project `react-example`. | Confirmed |
| TypeScript | `strict` is off; two `as any` casts on portfolio data | Confirmed |
| Architecture | Content lives in `data.ts` (good), but `App.tsx` is 1,280 lines holding 10 components | Recommendation |
| Third-party assets | Logos come from 4 CDNs, one unpinned (`@lobehub/icons-static-png@latest`). If any CDN changes or goes down, logos break silently. | Risk |
| Tests / CI | None. The `lint` script is just `tsc`, and the ESLint config isn't hooked up. | Confirmed |
| Contact form | It doesn't send anything. On desktop, Submit only shows a pre-written message with SMS, WhatsApp and email buttons. A required "permission" checkbox adds friction. Your phone number appears about 5 times. | Confirmed (UX and privacy) |
| Repo hygiene | The private repo tracks scraped Behance work by another designer (`stitch_modern_glow_portfolio/`), another person's portfolio doc (`Ravindra_portfolio.md`), and CSS comments saying "from Ravindra's resume." It's private now (the GitHub API returns 404), so the risk is low, but delete these before you ever make the repo public. | Confirmed |

## 7. The recruiter's path through the site

| Goal | Result |
|---|---|
| Understand who you are | ❌ No name in the hero; vague headline |
| Find your strongest skills | ⚠️ Possible, but scattered across Skillset, the tech logos, Process and the About cards |
| Evaluate your best projects | ⚠️ About 15 screens of scrolling; each case study opens in a dialog |
| Verify claims | ❌ The repos contradict the site; the paper link is a screenshot |
| Open GitHub or a live demo | ⚠️ GitHub links are inside the dialogs; there's no live demo for either personal project |
| Get your resume | ✅ Excellent. Visible in the nav at all times, with preview and download. The PDF loads on the live site. |
| Contact you | ⚠️ A plain email link works. The "form" is a gimmick that confuses desktop users. |

**Fix:**
- Put **Email · LinkedIn · GitHub · Resume** in the hero.
- Make Contact a simple section: an email button, LinkedIn, GitHub, and the resume.
- Either drop the SMS form or swap it for a real form backend (Formspree, Resend, or a Supabase edge function).
- Put the GitHub link directly on each project card, not only inside the dialog.

## 8. Compared with strong junior portfolios

- **Where you're competitive:** a real current job, live products, specific numbers, visual polish above average, and a skills-to-evidence mapping.
- **Where you fall short:** verifiable personal projects, READMEs, tests, commit history, demos, and a short page.
- **Common features that add little hiring value:** the splash screen, the 3D gallery, the Process section, the soft-skills cards, the marquee, the fake code block, and the Journey section's school percentages from 2010–2020.
- **Missing evidence that would make you stand out:**
  - One deep project with an evaluation table, for example "RAG: chunk size vs retrieval hit rate on 50 questions."
  - A 60-second demo video or GIF.
  - A short write-up of one hard Hrud.ai problem. The 194-test CI setup or the 7-check branch-policy engine are both great stories.

## 9. Strengths and weaknesses

**Strengths:**
- The Hrud.ai section has specific, verifiable numbers and live links.
- The Skillset cards link each skill to where you used it.
- Soft skills come with evidence.
- Strong SEO metadata and structured data.
- The resume is always one click away.
- The visual design is cohesive and responsive.
- The code compiles cleanly, with content separated into `data.ts`.

**Weaknesses:**

| # | Issue | Where | Severity | Fix | Benefit |
|---|---|---|---|---|---|
| 1 | Project claims contradict the code | Works section → both GitHub repos | **Critical** | Rewrite honestly now; build the real RAG version next | Removes the biggest rejection risk |
| 2 | "Read Paper" opens a screenshot; "Estimated" results | LaMaTEPP | **Critical** | Real PDF or abstract, or remove the link | Research claims become believable |
| 3 | No name or value proposition in the hero | Hero | **High** | Name + one-line pitch + 3 buttons | Recruiters know who you are in 5 seconds |
| 4 | Conflicting titles and location | Experience, Achievements, resume | **High** | One dated timeline; one location | Passes background-check scrutiny |
| 5 | Inflated signals | "Worked with" row, "15+," "∞," fake code | **High** | Delete or reword | Restores trust |
| 6 | Weak GitHub profile; misleading repo names | github.com/puli-pro | **High** | Bio, profile README, pin the 2 showcase repos, fix READMEs, rename or hide `Multi-agents` | Hiring managers' first click stops hurting you |
| 7 | Site skills don't match the resume | Tech logos, Skillset | **Medium** | Add PyTorch, scikit-learn, OpenCV; list all languages; fill or remove empty rows | The site and resume tell the same story |
| 8 | Projects buried; page about 24–40 screens long | Section order | **Medium** | Reorder; cut Journey, Process and Soft Skills (or merge them into About) | More reviewers reach your work |
| 9 | Scroll trap, 2-second splash, 396 KB gzipped JS | Gallery, loader | **Medium** | Remove both; lazy-load three.js or drop it | Faster, less frustrating |
| 10 | Contact form doesn't send; phone number exposed | Contact | **Medium** | Real backend, or email + LinkedIn only | Fewer lost leads |
| 11 | Accessibility gaps (focus styles, dialog semantics, motion) | Throughout | **Medium** | `focus-visible`, `MotionConfig`, `role="dialog"` with focus trap | Inclusive; signals frontend skill |
| 12 | No og:image, no favicon | `index.html`, `public/` | **Low** | Add a 1200×630 card and a favicon | Better-looking links in LinkedIn shares and DMs |
| 13 | Dead dependencies, non-strict TypeScript, 1,280-line App.tsx, no tests | Repo | **Low** | Clean up; split into components | Only matters if the repo goes public |

## 10. Scores

| Dimension | Score | Why |
|---|---|---|
| First impression and branding | 5 | Strong visuals, but no name and a generic headline |
| Visual design and UI/UX | 7 | Cohesive and polished, but too many effects, tiny labels, a scroll trap |
| Content clarity | 4 | Filler copy, contradictions, too long |
| Project quality and relevance | 3 | Personal projects are overstated; research has no public evidence. Hrud.ai work helps. |
| Technical credibility | 3 | The claims-vs-code gap outweighs everything else |
| Code quality (portfolio repo) | 5 | Compiles and is readable, but monolithic, no tests, dead dependencies |
| Responsiveness and accessibility | 5 | No mobile overflow; focus, dialog and motion gaps |
| Performance and reliability | 4 | 396 KB gzipped JS, 742 KB PNG hero, 2-second forced delay. No Lighthouse run. |
| Recruiter usability and conversion | 5 | Excellent resume access; buried projects; gimmick contact form |
| Overall job-application readiness | 4 | |

**Overall: 4.5 / 10.** I weighted it toward credibility, because that's the deciding factor.

- **Recruiter appeal:** 6. Looks impressive at a glance, and the current job title helps.
- **Technical hiring manager appeal:** 3, and it could drop further after a GitHub click.
- **Visual and UX quality:** 6.5.
- **Chance of being shortlisted from the portfolio alone:** moderate with non-technical screeners, low with technical reviewers. This is a judgement call, not a statistical probability.

## 11. Roadmap

**Stage 1: must fix (about 2–3 days)**

| What | Where | Effort |
|---|---|---|
| Rewrite both project descriptions to match their code | [data.ts:193](src/data.ts:193), [data.ts:215](src/data.ts:215) | S |
| Fix both READMEs (wrong titles, wrong project, missing `tests/`, UTF-16 encoding) | GitHub repos | S |
| LaMaTEPP and SyncVerse: real artifact or no link; remove "Estimated"; name baselines | [data.ts:239](src/data.ts:239), [data.ts:266](src/data.ts:266) | S |
| Hero: name + value proposition + Email / Resume / GitHub buttons | [App.tsx:50](src/App.tsx:50) | S |
| Reconcile Hrud.ai titles and dates, and the location, across the site, resume and LinkedIn | [data.ts:146](src/data.ts:146), [data.ts:528](src/data.ts:528), [data.ts:682](src/data.ts:682), [WorkExperience.tsx](src/components/WorkExperience.tsx) | S |
| Delete the "Worked with" row, "15+" and "∞", the fake code block, the visitor image upload, the splash screen, and the "neural" filler copy | [App.tsx](src/App.tsx) lines 114, 127, 462, 948, 1148, 1189, 1270 | S |
| Fix the wheel trap and the global arrow-key listener | [InfiniteGallery.tsx:101](src/components/InfiniteGallery.tsx:101), [:114](src/components/InfiniteGallery.tsx:114) | S |
| GitHub: bio, profile README, pin the two showcase repos, archive or unpin the weak ones, rename or hide `Multi-agents` | github.com/puli-pro | S |

**Stage 2: high impact (2–4 weeks)**
- **Make the Ollama project real RAG** (chunking, embeddings, FAISS, citations), with a small evaluation table, a demo GIF, pytest tests and a GitHub Actions workflow. *M–L.* This is the best single investment you can make. Check `rag_chat` first; it may already be closer.
- **Reorder sections** to Hero → Featured work (your top 3 Hrud.ai items + 2 projects) → Experience timeline → Skills → Contact. Cut or merge Journey, Process and Soft Skills. *M.*
- **Align skills with the resume:** add PyTorch, scikit-learn and OpenCV logos; list Python, TypeScript/JavaScript and SQL; fill or remove empty "where used" rows. *S.*
- **Add real screenshots** to the Hrud.ai cards (with permission), plus a write-up of one hard problem. *M.*
- **Replace the contact form** with a real email backend, or simple links; show your phone number once at most. *S.*
- **Speed:** lazy-load the gallery (`React.lazy`) or replace it with a static timeline, and convert the portrait to WebP or AVIF. *S.*
- **Social sharing:** add an og:image and a favicon. *S.*

**Stage 3: polish**
- `focus-visible` styles, `MotionConfig reducedMotion="user"`, and dialog roles with focus trapping.
- Two or three fonts instead of six.
- Consistent section numbering, and matching top and footer navigation.
- Strict TypeScript; split `App.tsx` into components; remove the dead dependencies and the AI Studio and Lovable leftovers; rename the package from `react-example`.
- Self-host the logos, or pin their versions.
- Remove the scraped Behance files and the other person's portfolio doc from the repo.

## 12. Final verdict

- **Rating:** 4.5 / 10 now. About 7 after Stage 1, and 8 or more after Stage 2.
- **Preserve:** the Hrud.ai work section, the skill-to-evidence mapping, the always-visible resume button, the SEO metadata, and the animated project diagrams.
- **Three biggest weaknesses:** (1) project claims that contradict the code, (2) unverifiable research claims, (3) no clear identity in the hero, plus inflated filler.
- **Top 5 changes to make first:** honest project copy and READMEs, fixing the paper link, a hero with your name, one consistent job timeline, and deleting the fake and inflated elements.
- **Skills and projects to strengthen next:** real retrieval and evaluation for RAG, tests and CI on a public repo, and one public ML artifact (code or a results notebook) for your research.
- **Best-fit roles today:** junior AI application / LLM engineer, or full-stack engineer working on AI products.
- **Ready for applications?** Not until Stage 1 is done; it's a few days of work.
- **What makes it genuinely competitive:** one public project a hiring manager can clone, run and check against your claims, presented above the fold next to your Hrud.ai work.

---

## Appendix A: Questions to prepare for in interviews

Interviewers will pick things from your portfolio and resume and ask about them. Make sure you can answer these confidently, or remove the claim:

1. "Walk me through your RAG pipeline. How did you chunk documents, which embedding model did you use, and how did you measure retrieval quality?"
2. "Why FAISS *and* Chroma? What did your latency vs recall comparison show?" (Only keep this claim if you've done it.)
3. "How do your job agents coordinate? What does the planner do?"
4. "What were the exact BLEU and COMET scores for LaMaTEPP, on which test set, against which mBART checkpoint?"
5. "What is the SyncVerse baseline for the LSE-D and LSE-C numbers?"
6. "What did the 12% improvement at CodeForces measure, and what was the starting point?"
7. "What do the 194 CI tests cover? What's the 7-check branch policy?"
8. "You went from intern to research engineer in nine months. What changed at each step?"

## Appendix B: Link check (11 October 2026)

| Link | Result |
|---|---|
| soligepullaiah.vercel.app | ✅ Loads; matches the current build |
| Resume PDF on the live site | ✅ Loads as `application/pdf` |
| /favicon.ico | ❌ 404 |
| github.com/puli-pro/Ollama-llm-document-assistant | ✅ Loads (but see section 5) |
| github.com/puli-pro/agents | ✅ Loads (but see section 5) |
| LaMaTEPP Google Drive link | ⚠️ Public, but it's a PNG screenshot, not a paper |
| jobgalaxy.app | ✅ Loads (redirects to www.jobgalaxy.app) |
| admin-galaxy-saas.vercel.app | ✅ Loads ("Admin Portal — Galaxy") |
| xencomedical.com | ✅ Loads (redirects to https) |
| hrud.ai | ✅ Loads |
| LinkedIn profile | ❓ Couldn't check (LinkedIn blocks bots). Open it yourself. |
| x.com/puli_pullaiah | ❓ Couldn't confirm. Open it yourself; if it's inactive, remove it from the footer. |

## Appendix C: One-source-of-truth check

Before applying, open these side by side and make each row identical:

| Item | Site | Resume (PDF) | LinkedIn | GitHub profile |
|---|---|---|---|---|
| Name (and whether you mention "Puli Pavan") | | | | |
| Current title and start date | | | | |
| Title progression at Hrud.ai, with dates | | | | |
| Location | | | | |
| CodeForces company name and dates | | | | |
| Project names and one-line descriptions | | | | |
| Research status ("under review" / "in progress") | | | | |
| Skills list | | | | |

## Appendix D: README template for showcase repos

Each showcase repo's README should have, in this order:

1. **Title and one sentence** saying what it does.
2. **Screenshot or GIF** at the top.
3. **Architecture:** a small diagram or 4–6 bullets showing the data flow.
4. **What's actually implemented** vs **what's planned.** Being honest here builds trust.
5. **Quick start:** prerequisites, install, run (copy-pasteable commands).
6. **Evaluation or results:** even a small table helps.
7. **Tests:** how to run them.
8. **Tech stack and license.**

## Appendix E: How to re-check after fixing

- **Build:** `npm run build` should pass, and the main JS chunk should drop well below 1,400 KB once three.js is lazy-loaded or removed.
- **Scroll trap:** hover over the Journey gallery and scroll with the mouse wheel; the page should keep scrolling.
- **Hero:** load the site and check your name is readable within 2 seconds, without scrolling.
- **Social preview:** paste the URL into a LinkedIn post draft and check an image card appears.
- **Claims:** for each project, read the site description, then open the repo and confirm every technology named is actually in the code.
- **Keyboard:** press Tab through the page; you should always see where focus is.

## Checklist
- [ ] Rewrite Ollama and Job Agent descriptions to match their code
- [ ] Fix both READMEs (titles, wrong project, missing tests folder, UTF-16 encoding)
- [ ] Replace or remove the LaMaTEPP screenshot link; drop "Estimated"; name SyncVerse baselines
- [ ] Hero: name + value proposition + Email / Resume / GitHub buttons
- [ ] One consistent Hrud.ai title timeline; one location everywhere (Appendix C)
- [ ] Remove "Worked with," "15+," "∞," the fake code block, the visitor image upload, the splash screen, the "neural" copy
- [ ] Fix the gallery wheel and arrow-key hijacking
- [ ] GitHub bio, profile README, pin the showcase repos, rename or hide `Multi-agents`
- [ ] Check `rag_chat` as a possible showcase project
- [ ] Prepare answers for the interview questions in Appendix A
- [ ] Build real RAG with an evaluation set, tests, CI and a demo GIF
- [ ] Align site skills with the resume; fill or remove empty skill rows
- [ ] Reorder sections; cut or merge Journey, Process and Soft Skills
- [ ] Real contact path; show your phone number once at most
- [ ] Lazy-load three.js; compress the portrait; add og:image and a favicon
- [ ] Accessibility: focus styles, reduced motion, dialog semantics
- [ ] Repo cleanup: dead dependencies, strict TypeScript, split `App.tsx`, remove scraped and third-party files
