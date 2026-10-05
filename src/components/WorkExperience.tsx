import { useRef, type MouseEvent } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { WORK_PROJECTS, type WorkProject } from "../data";

const ACCENTS = ["34,211,238", "99,102,241", "16,185,129", "250,204,21"];

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
        className="group relative h-full overflow-hidden rounded-3xl border border-white/15 bg-[#0b1017]/90 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[rgba(var(--rgb),0.6)] md:p-8"
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

        <div className="relative flex h-full flex-col">
          <span
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em]"
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
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">{p.summary}</p>

          <ul className={`mt-5 grid gap-2.5 ${p.featured ? "md:grid-cols-2" : ""}`}>
            {p.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2.5 text-[13px] leading-snug text-white/85">
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
                  className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-white/75"
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

export const WorkExperience = () => (
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
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-white/80">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--gold)]" />
          Work Experience
        </span>
        <h2 className="mt-6 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text font-headline text-4xl font-extrabold leading-[0.98] tracking-tight text-transparent md:text-7xl">
          Shipped at Hrud.ai
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          AI and full-stack products that real users and clients depend on.
        </p>
      </motion.div>

      {/* role card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-8 flex flex-col gap-5 rounded-3xl border border-white/20 bg-[#0b1017]/90 p-7 md:flex-row md:items-center md:p-8"
        style={{
          backgroundImage:
            "radial-gradient(520px circle at 0% 0%, rgba(99,102,241,0.18), transparent 60%)",
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
            AI Engineer — Hrud.ai
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/70">
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

      <div className="grid gap-5 md:grid-cols-2">
        {WORK_PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>

      {/* CodeForces */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-8 flex flex-col gap-3 rounded-3xl border border-white/15 bg-white/[0.04] p-6 md:flex-row md:items-center md:gap-6"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/60">
          May – Aug 2024 · Internship
        </div>
        <div className="font-headline text-lg font-bold text-white">AI/ML Intern — CodeForces</div>
        <p className="text-sm text-white/70 md:ml-auto md:max-w-xl">
          ML and deep learning for real-world tasks: data preprocessing, feature engineering and
          neural-network experiments — improved model performance by{" "}
          <b className="text-white">12%</b>.
        </p>
      </motion.div>
    </div>
  </section>
);
