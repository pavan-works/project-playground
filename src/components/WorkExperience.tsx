import { useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Briefcase, TrendingUp } from "lucide-react";
import { GROWTH_STAGES, WORK_PROJECTS, type WorkProject } from "../data";
import { ProjectVisual } from "./ProjectVisual";

const HRUDAI_URL = "https://hrud.ai/";

const ACCENTS =["34,211,238", "129,140,248", "16,185,129", "250,204,21"];

const ProjectCard = ({ p, index }: { p: WorkProject; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rgb = ACCENTS[index % ACCENTS.length];

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={p.featured ? "md:col-span-2" : ""}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        className="group relative h-full overflow-hidden rounded-3xl border border-white/15 bg-[#0b1017]/90 transition-all duration-500 hover:-translate-y-1.5 hover:border-[rgba(var(--rgb),0.6)]"
        style={{ "--rgb": rgb } as React.CSSProperties}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(380px circle at var(--mx,50%) var(--my,0%), rgba(var(--rgb),0.16), transparent 60%)",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-1 -top-5 select-none font-headline text-[7rem] font-extrabold leading-none text-transparent"
          style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.08)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {p.visual && (
          <ProjectVisual kind={p.visual} className="h-52 w-full shrink-0 border-b border-white/10 md:h-56" />
        )}
        <div className="relative flex h-full flex-col p-7 md:p-8">
          <span
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.25em]"
            style={{
              color: `rgb(${rgb})`,
              borderColor: `rgba(${rgb},0.45)`,
              background: `rgba(${rgb},0.08)`,
            }}
          >
            {p.featured && <span className="text-[11px]">★</span>}
            {p.kind}
          </span>

          <h3 className="font-headline text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
            {p.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/95">{p.summary}</p>

          {p.problem && (
            <div className="mt-5 rounded-2xl border border-amber-300/40 bg-amber-300/[0.07] p-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-200">
                The problem
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-white/92">{p.problem.text}</p>
              <div className="mt-3 inline-flex flex-wrap items-center gap-2 rounded-xl border border-white/15 bg-black/30 px-3 py-2 font-mono text-[12px] text-white">
                <span className="text-amber-200">total cost</span>
                <span>=</span>
                <span>{p.problem.formula}</span>
              </div>
            </div>
          )}

          <ul className={`mt-5 grid gap-2.5 ${p.featured ? "md:grid-cols-2" : ""}`}>
            {p.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2.5 text-[13px] leading-snug text-white/92">
                <span
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: `rgb(${rgb})` }}
                />
                {pt}
              </li>
            ))}
          </ul>

          {p.stats && (
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stats.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-white/15 bg-white/[0.07] px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-6">
            <ul className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] tracking-wider text-white/95"
                >
                  {t}
                </li>
              ))}
            </ul>
            {p.links && (
              <div className="flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:border-[var(--gold)]/70 hover:bg-white/20"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const GrowthPath = () => {
  const [active, setActive] = useState(GROWTH_STAGES.length - 1);
  const stage = GROWTH_STAGES[active];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-8 rounded-3xl border border-white/20 bg-[#0b1017]/90 p-6 md:p-8"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--gold)]">
          <TrendingUp className="h-4 w-4" />
          My growth at Hrud.ai
        </div>
        <a
          href={HRUDAI_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/[0.05] px-3 py-1.5 font-mono text-[11px] tracking-wider text-white/90 transition-colors hover:border-[var(--gold)]/60 hover:text-white"
        >
          Visit hrud.ai
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div role="tablist" aria-label="Growth at Hrud.ai" className="flex flex-wrap items-center gap-2">
        {GROWTH_STAGES.map((g, i) => {
          const isActive = i === active;
          return (
            <div key={g.id} className="flex items-center gap-2">
              <button
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-2 font-mono text-xs tracking-wider transition-all duration-300 ${
                  isActive
                    ? "border-[var(--gold)] bg-[var(--gold)] text-black shadow-[0_0_24px_-4px_rgba(34,211,238,0.8)]"
                    : "border-white/25 bg-white/[0.05] text-white/90 hover:border-[var(--gold)]/60 hover:text-white"
                }`}
              >
                {g.label}
              </button>
              {i < GROWTH_STAGES.length - 1 && <ArrowRight className="hidden h-4 w-4 text-white/80 sm:block" />}
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={stage.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
        >
          <div className="flex flex-wrap items-center gap-3">
            <h4 className="font-headline text-xl font-bold text-white md:text-2xl">{stage.label}</h4>
            <span className="rounded-full border border-emerald-400/50 bg-emerald-400/10 px-3 py-0.5 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-300">
              {active === GROWTH_STAGES.length - 1 ? "Current" : `Step ${active + 1} of ${GROWTH_STAGES.length}`}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/90 md:text-base">{stage.summary}</p>
          <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-white/90">
            {stage.points.map((pt) => (
              <li key={pt} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

type WorkTab = "role" | "projects";

const TABS: { id: WorkTab; label: string }[] = [
  { id: "role", label: "Role & Growth at Hrud.ai" },
  { id: "projects", label: `Projects at Hrud.ai (${WORK_PROJECTS.length})` },
];

export const WorkExperience = () => {
  // Opens on Role & Growth (owner's choice); Projects is one click away.
  const [tab, setTab] = useState<WorkTab>("role");

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const next = tab === "role" ? "projects" : "role";
      setTab(next);
      document.getElementById(`work-tab-${next}`)?.focus();
    }
  };

  return (
  <section id="experience" className="relative overflow-hidden bg-[var(--bg)] py-32 md:py-40">
    <div className="absolute inset-0 dot-pattern opacity-[0.08]" />
    <div className="pointer-events-none absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-[var(--indigo)]/10 blur-[150px]" />

    <div className="relative z-10 w-full px-6 md:px-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12 flex flex-col items-center text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-white/90">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--gold)]" />
          Work Experience
        </span>
        <h2 className="mt-6 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text font-headline text-4xl font-extrabold leading-[0.98] tracking-tight text-transparent md:text-7xl">
          Shipped at Hrud.ai
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/95 md:text-lg">
          AI and full-stack products that real users and clients depend on.
        </p>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--gold)]">
          AI Engineer · Hrud.ai · Jan 2026 – Present
        </p>
      </motion.div>

      {/* two-tab switch */}
      <div className="mb-10 flex justify-center">
        <div
          role="tablist"
          aria-label="Work at Hrud.ai"
          className="relative flex w-full max-w-xl rounded-full border border-white/25 bg-[#0b1017]/90 p-1.5 md:w-auto"
        >
          {TABS.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                id={`work-tab-${t.id}`}
                role="tab"
                type="button"
                aria-selected={active}
                aria-controls={`work-panel-${t.id}`}
                tabIndex={active ? 0 : -1}
                onClick={() => setTab(t.id)}
                onKeyDown={onTabKey}
                className={`relative z-10 flex-1 rounded-full px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors md:flex-none md:px-7 md:text-xs md:tracking-[0.18em] ${
                  active ? "text-black" : "text-white/90 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="work-tab-highlight"
                    transition={{ type: "spring", damping: 28, stiffness: 320 }}
                    className="absolute inset-0 -z-10 rounded-full bg-[var(--gold)] shadow-[0_0_24px_-4px_rgba(34,211,238,0.8)]"
                  />
                )}
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="min-h-[34rem]">
      <AnimatePresence mode="wait" initial={false}>
      {tab === "role" ? (
      <motion.div
        key="role"
        id="work-panel-role"
        role="tabpanel"
        aria-labelledby="work-tab-role"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25 }}
      >
      {/* role card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-8 flex flex-col gap-5 rounded-3xl border border-white/20 bg-[#0b1017]/90 p-7 md:flex-row md:items-center md:p-8"
        style={{
          backgroundImage:
            "radial-gradient(520px circle at 0% 0%, rgba(129,140,248,0.18), transparent 60%)",
        }}
      >
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--indigo-light)]/60 bg-[var(--indigo)]/15 text-[var(--indigo-light)]">
          <Briefcase className="h-7 w-7" strokeWidth={1.7} />
        </span>
        <div className="min-w-0">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--gold)]">
            Jan 2026 – Present · Current
          </div>
          <h3 className="mt-1 font-headline text-2xl font-bold text-white md:text-3xl">
            AI Engineer —{" "}
            <a
              href={HRUDAI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline decoration-[var(--gold)]/50 underline-offset-4 transition-colors hover:text-[var(--gold)]"
            >
              Hrud.ai
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/95">
            Building production-grade AI systems with LLMs, RAG pipelines and agents, plus the
            platforms, SaaS products and client work around them.
          </p>
        </div>
        <ul className="flex flex-wrap gap-2 md:ml-auto md:max-w-[16rem] md:justify-end">
          {["7 projects", "100+ repos managed", "194 CI tests"].map((s) => (
            <li
              key={s}
              className="rounded-lg border border-white/15 bg-white/[0.07] px-3 py-1.5 font-mono text-[11px] font-semibold text-white"
            >
              {s}
            </li>
          ))}
        </ul>
      </motion.div>

      <GrowthPath />
      </motion.div>
      ) : (
      <motion.div
        key="projects"
        id="work-panel-projects"
        role="tabpanel"
        aria-labelledby="work-tab-projects"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25 }}
        className="grid gap-5 md:grid-cols-2"
      >
        {WORK_PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </motion.div>
      )}
      </AnimatePresence>
      </div>

      {/* CodeForces */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-8 flex flex-col gap-3 rounded-3xl border border-white/15 bg-white/[0.04] p-6 md:flex-row md:items-center md:gap-6"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/90">
          May – Aug 2024 · Internship
        </div>
        <div className="font-headline text-lg font-bold text-white">AI/ML Intern — CodeForces</div>
        <p className="text-sm text-white/95 md:ml-auto md:max-w-xl">
          ML and deep learning for real-world tasks: data preprocessing, feature engineering and
          neural-network experiments — improved model performance by{" "}
          <b className="text-white">12%</b>.
        </p>
      </motion.div>
    </div>
  </section>
  );
};
