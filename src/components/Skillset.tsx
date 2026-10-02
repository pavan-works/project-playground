import { useRef, type MouseEvent } from "react";
import { motion } from "motion/react";
import { Brain, Code2, Database, Cloud, type LucideIcon } from "lucide-react";
import { SKILLSET, type SkillCategory } from "../data";

const ICONS: Record<SkillCategory["icon"], LucideIcon> = {
  brain: Brain,
  code: Code2,
  database: Database,
  cloud: Cloud,
};

/* Bento layout on a 6-col grid: [AI 4][Lang 2] / [DB 3][Cloud 3] */
const SPAN: Record<string, string> = {
  ai: "lg:col-span-4",
  lang: "lg:col-span-2",
  db: "lg:col-span-3",
  cloud: "lg:col-span-3",
};

const ACCENT: Record<string, string> = {
  ai: "34,211,238",
  lang: "250,204,21",
  db: "99,102,241",
  cloud: "16,185,129",
};

const MARQUEE_ITEMS = SKILLSET.flatMap((c) => c.items.map(([n]) => n));

/** Card with a cursor-following spotlight and a conic "shine" border (21st.dev-style). */
const SpotlightCard = ({
  cat,
  index,
}: {
  cat: SkillCategory;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = ICONS[cat.icon];
  const rgb = ACCENT[cat.id] ?? "34,211,238";

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-3xl p-px ${SPAN[cat.id] ?? ""}`}
      style={
        {
          "--rgb": rgb,
          background:
            "linear-gradient(160deg, rgba(var(--rgb),0.45), rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.05) 70%, rgba(var(--rgb),0.25))",
        } as React.CSSProperties
      }
    >
      {/* spotlight border glow that tracks the cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,0%), rgba(var(--rgb),0.55), transparent 45%)",
        }}
      />

      <div className="relative h-full rounded-3xl bg-[#0b1017]/95 p-7 md:p-8 overflow-hidden">
        {/* inner spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(360px circle at var(--mx,50%) var(--my,0%), rgba(var(--rgb),0.14), transparent 60%)",
          }}
        />
        {/* dot texture */}
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-[0.08]" />

        <header className="relative flex items-start gap-4 mb-6">
          <span
            className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
            style={{
              background: "rgba(var(--rgb),0.14)",
              borderColor: "rgba(var(--rgb),0.45)",
              color: "rgb(var(--rgb))",
              boxShadow: "0 0 24px -6px rgba(var(--rgb),0.6)",
            }}
          >
            <Icon className="w-6 h-6" strokeWidth={1.8} />
          </span>
          <div className="min-w-0">
            <h3 className="font-headline text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
              {cat.title}
            </h3>
            <p className="mt-1 text-sm text-white/60 leading-snug">{cat.blurb}</p>
          </div>
          <span
            className="ml-auto shrink-0 font-mono text-[10px] tracking-[0.25em] px-2.5 py-1 rounded-full border"
            style={{
              color: "rgb(var(--rgb))",
              borderColor: "rgba(var(--rgb),0.4)",
              background: "rgba(var(--rgb),0.08)",
            }}
          >
            {String(cat.items.length).padStart(2, "0")}
          </span>
        </header>

        <ul
          className={`relative grid gap-2 ${
            cat.id === "ai" || cat.id === "db" ? "md:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {cat.items.map(([name, where, tag]) => (
            <li
              key={name}
              className="group/row flex flex-col gap-0.5 rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:border-[rgba(var(--rgb),0.55)] hover:bg-[rgba(var(--rgb),0.09)] hover:translate-x-1"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 transition-shadow duration-300 group-hover/row:shadow-[0_0_10px_2px_rgba(var(--rgb),0.8)]"
                  style={{ background: "rgb(var(--rgb))" }}
                />
                <span className="font-mono text-[13px] md:text-sm font-medium text-white">
                  {name}
                </span>
                {tag && (
                  <span className="ml-auto font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                    {tag}
                  </span>
                )}
              </div>
              {where && (
                <em className="pl-4 text-xs not-italic text-white/55 leading-snug">
                  <span className="italic">{where}</span>
                </em>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export const Skillset = () => (
  <div id="skills" className="mb-28">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center text-center mb-14"
    >
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.06] font-mono text-[11px] tracking-[0.3em] uppercase text-white/80">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
        Technical Stack
      </span>
      <h2 className="mt-6 font-headline font-extrabold uppercase tracking-tight leading-[0.95] text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
        My Skillset
      </h2>
      <p className="mt-5 max-w-2xl text-base md:text-lg text-white/65 leading-relaxed">
        The models, languages, databases and cloud services I build with — and where I&apos;ve used them.
      </p>
    </motion.div>

    {/* marquee of everything */}
    <div
      className="skill-marquee relative mb-12 overflow-hidden"
      style={{
        maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
      aria-hidden
    >
      <div className="skill-marquee-track flex w-max gap-3">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((n, i) => (
          <span
            key={`${n}-${i}`}
            className="whitespace-nowrap rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 font-mono text-xs tracking-wider text-white/85"
          >
            {n}
          </span>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
      {SKILLSET.map((cat, i) => (
        <SpotlightCard key={cat.id} cat={cat} index={i} />
      ))}
    </div>

    <div className="mt-20 mb-4 flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
      <span className="font-mono text-[11px] tracking-[0.4em] uppercase text-white/60">
        Tools &amp; Platforms
      </span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
    </div>
  </div>
);
