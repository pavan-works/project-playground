import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import {
  Target,
  Network,
  Telescope,
  PencilRuler,
  FlaskConical,
  Rocket,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";
import {
  PROCESS_LENSES,
  PROCESS_STEPS,
  type ProcessLensId,
  type ProcessStep,
} from "../data";

const ICONS: Record<ProcessStep["icon"], LucideIcon> = {
  target: Target,
  network: Network,
  telescope: Telescope,
  design: PencilRuler,
  flask: FlaskConical,
  rocket: Rocket,
};

const StepCard = ({
  step,
  index,
  lens,
}: {
  step: ProcessStep;
  index: number;
  lens: ProcessLensId;
}) => {
  const Icon = ICONS[step.icon];
  const lensMeta = PROCESS_LENSES.find((l) => l.id === lens)!;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative pl-14 md:pl-20"
    >
      {/* node on the progress line */}
      <span className="absolute left-0 top-7 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-[var(--gold)]/60 bg-[#06090d] text-[var(--gold)] shadow-[0_0_28px_-4px_rgba(34,211,238,0.7)] transition-transform duration-500 group-hover:scale-110">
        <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.8} />
      </span>

      <div
        className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0b1017]/90 p-6 md:p-8 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[var(--gold)]/50"
        style={{
          backgroundImage:
            "radial-gradient(520px circle at 100% 0%, rgba(34,211,238,0.10), transparent 55%)",
        }}
      >
        {/* big outlined number */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-2 -top-6 select-none font-headline text-[8rem] md:text-[10rem] font-extrabold leading-none text-transparent"
          style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.10)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-mono text-[11px] tracking-[0.35em] text-[var(--gold)]">
              STEP {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-white/20" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/55">
              Output · {step.output}
            </span>
          </div>

          <h3 className="font-headline text-2xl md:text-4xl font-extrabold tracking-tight text-white">
            {step.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-white/75">
            {step.summary}
          </p>

          {/* lens-specific practice */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:p-5">
            <div className="mb-2 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              In practice · {lensMeta.label}
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={lens}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-sm md:text-[15px] leading-relaxed text-white/90"
              >
                {step.practice[lens]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/** Callout drawn between "Check What Already Exists" and "Design": the feedback loop. */
const LoopBanner = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative pl-14 md:pl-20"
  >
    <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-emerald-400/60 bg-emerald-400/[0.07] px-5 py-4 md:flex-row md:items-center md:gap-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-400/60 bg-emerald-400/10 text-emerald-300">
        <RotateCcw className="h-5 w-5" />
      </span>
      <p className="text-sm md:text-base leading-relaxed text-white/90">
        <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-emerald-300">
          Found something useful?{" "}
        </span>
        If an existing architecture, paper or open-source model helps, I{" "}
        <b className="text-white">update the plan</b> and go back to Step 02 before designing.
        If not, I carry on.
      </p>
    </div>
  </motion.div>
);

export const Process = () => {
  const [lens, setLens] = useState<ProcessLensId>("paper");
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <section id="process" className="relative overflow-hidden bg-[var(--surface)] py-32 md:py-40">
      <div className="absolute inset-0 dot-pattern opacity-[0.08]" />
      <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-[var(--indigo)]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto grid w-full gap-14 px-6 md:px-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        {/* sticky intro */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-white/80">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--gold)]" />
              My Process
            </span>
            <h2 className="mt-6 font-headline text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-white md:text-5xl [overflow-wrap:anywhere]">
              Here&apos;s how I turn ideas into{" "}
              <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--indigo-light)] bg-clip-text text-transparent">
                real-world applications
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              A structured, practical approach to taking an AI idea from a problem statement to a
              system people can use — whether it ends as a research paper, a trained model, a RAG
              pipeline or an agent.
            </p>

            {/* lens switcher */}
            <div className="mt-8">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                See the process through…
              </div>
              <div
                role="tablist"
                aria-label="Process lens"
                className="flex flex-wrap gap-2"
              >
                {PROCESS_LENSES.map((l) => {
                  const active = l.id === lens;
                  return (
                    <button
                      key={l.id}
                      role="tab"
                      aria-selected={active}
                      type="button"
                      onClick={() => setLens(l.id)}
                      className={`rounded-full border px-4 py-2 font-mono text-xs tracking-wider transition-all duration-300 ${
                        active
                          ? "border-[var(--gold)] bg-[var(--gold)] text-black shadow-[0_0_24px_-4px_rgba(34,211,238,0.8)]"
                          : "border-white/20 bg-white/[0.05] text-white/80 hover:border-[var(--gold)]/60 hover:text-white"
                      }`}
                    >
                      {l.label}
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 min-h-[1.25rem] font-mono text-[11px] tracking-wider text-[var(--gold)]/90">
                {PROCESS_LENSES.find((l) => l.id === lens)!.hint}
              </p>
            </div>

            {/* mini flow */}
            <ol className="mt-10 hidden gap-2 lg:grid">
              {PROCESS_STEPS.map((s, i) => (
                <li
                  key={s.id}
                  className="flex items-center gap-3 font-mono text-xs tracking-wider text-white/60"
                >
                  <span className="text-[var(--gold)]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px w-6 bg-white/20" />
                  {s.title}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* steps */}
        <div ref={listRef} className="relative">
          {/* progress line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-white/15 md:left-6" />
          <motion.div
            className="absolute left-5 top-0 w-px origin-top bg-gradient-to-b from-[var(--gold)] via-[var(--indigo-light)] to-emerald-400 md:left-6"
            style={{ scaleY: fill, height: "100%" }}
          />

          <div className="grid gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.id} className="grid gap-8">
                <StepCard step={step} index={i} lens={lens} />
                {step.id === "survey" && <LoopBanner />}
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, rotate: -4, y: 10 }}
            whileInView={{ opacity: 1, rotate: -3, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-14 pl-14 font-script text-4xl text-[var(--gold)] md:pl-20 md:text-5xl"
          >
            Ready to ship!
          </motion.p>
        </div>
      </div>
    </section>
  );
};
