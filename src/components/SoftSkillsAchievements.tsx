import { useRef, type MouseEvent } from "react";
import { motion } from "motion/react";
import {
  Crown,
  Presentation,
  Mic,
  Rocket,
  Medal,
  Award,
  Users,
  Megaphone,
  Check,
  type LucideIcon,
} from "lucide-react";
import { ACHIEVEMENTS, SOFT_SKILLS, type Achievement, type SoftSkill } from "../data";

const SOFT_ICONS: Record<SoftSkill["icon"], LucideIcon> = {
  leader: Crown,
  speaker: Presentation,
  mic: Mic,
  ownership: Rocket,
};

const ACH_ICONS: Record<Achievement["icon"], LucideIcon> = {
  medal: Medal,
  mic: Mic,
  award: Award,
  users: Users,
  stage: Megaphone,
};

const SOFT_ACCENT = ["34,211,238", "99,102,241", "16,185,129", "250,204,21"];

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-white/80">
    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--gold)]" />
    {children}
  </span>
);

/** Card whose glow follows the cursor. */
const GlowCard = ({
  rgb,
  className = "",
  children,
}: {
  rgb: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-[#0b1017]/90 transition-all duration-500 hover:-translate-y-1.5 hover:border-[rgba(var(--rgb),0.6)] ${className}`}
      style={{ "--rgb": rgb } as React.CSSProperties}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx,50%) var(--my,0%), rgba(var(--rgb),0.18), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
};

export const SoftSkills = () => (
  <section id="soft-skills" className="relative overflow-hidden bg-[var(--surface)] py-32 md:py-40">
    <div className="absolute inset-0 dot-pattern opacity-[0.08]" />
    <div className="pointer-events-none absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-[var(--emerald)]/10 blur-[150px]" />

    <div className="relative z-10 w-full px-6 md:px-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-14 flex flex-col items-center text-center"
      >
        <Pill>Core Competencies</Pill>
        <h2 className="mt-6 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text font-headline text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-transparent md:text-7xl">
          Professional Soft Skills
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          How I work with people, not just code — each one backed by something I&apos;ve actually done.
        </p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {SOFT_SKILLS.map((s, i) => {
          const Icon = SOFT_ICONS[s.icon];
          const rgb = SOFT_ACCENT[i % SOFT_ACCENT.length];
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <GlowCard rgb={rgb} className="h-full p-7">
                <div className="relative flex h-full flex-col">
                  <div className="mb-6 flex items-start justify-between">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                      style={{
                        color: `rgb(${rgb})`,
                        background: `rgba(${rgb},0.14)`,
                        borderColor: `rgba(${rgb},0.5)`,
                        boxShadow: `0 0 28px -6px rgba(${rgb},0.7)`,
                      }}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.7} />
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.3em] text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl font-bold tracking-tight text-white md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{s.text}</p>

                  <ul className="mt-6 grid gap-2 border-t border-white/10 pt-5">
                    {s.evidence.map((e) => (
                      <li key={e} className="flex items-start gap-2.5 text-[13px] leading-snug text-white/85">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: `rgb(${rgb})` }}
                          strokeWidth={2.5}
                        />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export const Achievements = () => (
  <section id="achievements" className="relative overflow-hidden bg-[var(--bg)] py-32 md:py-40">
    <div className="absolute inset-0 dot-pattern opacity-[0.08]" />
    <div className="pointer-events-none absolute -left-32 bottom-0 h-[460px] w-[460px] rounded-full bg-[var(--gold)]/10 blur-[150px]" />

    <div className="relative z-10 w-full px-6 md:px-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-14 flex flex-col items-center text-center"
      >
        <Pill>Recognition</Pill>
        <h2 className="mt-6 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text font-headline text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-transparent md:text-7xl">
          Achievements
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Podiums, rankings and leadership — on stage and in teams.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-6">
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = ACH_ICONS[a.icon];
          const rgb = a.featured ? "250,204,21" : i % 2 ? "99,102,241" : "34,211,238";
          return (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={a.featured ? "md:col-span-6 lg:col-span-3 lg:row-span-2" : "md:col-span-3 lg:col-span-3"}
            >
              <GlowCard rgb={rgb} className="h-full">
                <div
                  className={`relative flex h-full gap-5 p-7 md:p-8 ${
                    a.featured ? "flex-col justify-between lg:min-h-[320px]" : "items-center"
                  }`}
                >
                  <div className={a.featured ? "flex items-start justify-between" : "shrink-0"}>
                    <span
                      className={`flex items-center justify-center rounded-2xl border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${
                        a.featured ? "h-16 w-16" : "h-14 w-14"
                      }`}
                      style={{
                        color: `rgb(${rgb})`,
                        background: `rgba(${rgb},0.14)`,
                        borderColor: `rgba(${rgb},0.5)`,
                        boxShadow: `0 0 28px -6px rgba(${rgb},0.7)`,
                      }}
                    >
                      <Icon className={a.featured ? "h-8 w-8" : "h-7 w-7"} strokeWidth={1.7} />
                    </span>
                    {a.featured && (
                      <span className="rounded-full border border-yellow-300/50 bg-yellow-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-yellow-200">
                        Podium
                      </span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div
                      className={`font-headline font-extrabold leading-none tracking-tight ${
                        a.featured ? "text-7xl md:text-8xl" : "text-4xl md:text-5xl"
                      }`}
                      style={{ color: `rgb(${rgb})` }}
                    >
                      {a.headline}
                    </div>
                    <h3 className="mt-3 font-headline text-lg font-bold text-white md:text-xl">
                      {a.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{a.detail}</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
