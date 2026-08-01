import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { JOURNEY } from "../data";

const AUTOPLAY_MS = 3800;
const RESUME_MS = 3000;

const accentFor = (kind: string) =>
  kind === "research" ? "var(--indigo)" : kind === "work" ? "var(--emerald)" : "var(--gold)";

export const JourneyGallery = ({
  active,
  onChange,
}: {
  active: number;
  onChange: (i: number) => void;
}) => {
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelLock = useRef(0);
  const touchY = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const interact = useCallback(() => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_MS);
  }, []);

  const step = useCallback(
    (dir: number) => {
      interact();
      onChange((active + dir + JOURNEY.length) % JOURNEY.length);
    },
    [active, interact, onChange],
  );

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => onChange((active + 1) % JOURNEY.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [active, paused, onChange]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - wheelLock.current < 420) return;
      wheelLock.current = now;
      step(e.deltaY > 0 ? 1 : -1);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") step(1);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") step(-1);
    };
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("keydown", onKey);
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("keydown", onKey);
    };
  }, [step]);

  useEffect(() => () => { if (resumeTimer.current) clearTimeout(resumeTimer.current); }, []);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onTouchStart={(e) => { touchY.current = e.touches[0].clientY; }}
      onTouchEnd={(e) => {
        if (touchY.current === null) return;
        const d = touchY.current - e.changedTouches[0].clientY;
        if (Math.abs(d) > 30) step(d > 0 ? 1 : -1);
        touchY.current = null;
      }}
      className="relative select-none rounded-[2rem] border border-white/[0.06] bg-[var(--rv-card)]/60 px-4 py-8 md:px-8 md:py-12 outline-none focus-visible:border-[var(--gold)]/40"
      style={{ perspective: "1600px" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[var(--bg)] to-transparent z-20 rounded-t-[2rem]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--bg)] to-transparent z-20 rounded-b-[2rem]" />

      <div className="relative h-[560px] md:h-[680px]" style={{ transformStyle: "preserve-3d" }}>
        {JOURNEY.map((stop, i) => {
          let offset = i - active;
          const half = JOURNEY.length / 2;
          if (offset > half) offset -= JOURNEY.length;
          if (offset < -half) offset += JOURNEY.length;
          const abs = Math.abs(offset);
          const accent = accentFor(stop.kind);
          return (
            <motion.button
              key={stop.id}
              type="button"
              aria-label={stop.title}
              onClick={() => { interact(); onChange(i); }}
              animate={{
                y: offset * 130,
                z: -abs * 220,
                rotateX: offset * -10,
                scale: 1 - abs * 0.09,
                opacity: abs > 2 ? 0 : 1 - abs * 0.3,
              }}
              transition={{ type: "spring", stiffness: 140, damping: 22 }}
              className="group absolute left-1/2 top-1/2 aspect-[4/3] w-[92%] -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0b0b0b]"
              style={{ zIndex: 10 - abs, pointerEvents: abs > 2 ? "none" : "auto" }}
            >
              <img
                src={stop.image}
                alt={stop.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ filter: abs === 0 ? "none" : "grayscale(0.6) brightness(0.7)" }}
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
              />
              <span className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/70 backdrop-blur-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="pointer-events-none absolute inset-x-5 bottom-5 text-left">
                <span className="block font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: accent }}>
                  {stop.period}
                </span>
                <span className="mt-1 block font-headline text-2xl font-bold tracking-tighter text-white">
                  {stop.title}
                </span>
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className="relative z-30 mt-6 flex flex-col items-center gap-3 text-center">
        <div className="flex gap-2">
          {JOURNEY.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to ${s.title}`}
              onClick={() => { interact(); onChange(i); }}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === active ? 26 : 8,
                background: i === active ? accentFor(s.kind) : "rgba(255,255,255,0.18)",
              }}
            />
          ))}
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
          Use mouse wheel, arrow keys, or touch to navigate
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/20">
          {paused ? "Paused — auto-play resumes after 3 seconds of inactivity" : "Auto-playing"}
        </p>
      </div>
    </div>
  );
};
