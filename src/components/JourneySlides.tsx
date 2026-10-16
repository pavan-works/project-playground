import { useCallback, useEffect, useState, type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 4500;

/**
 * Full-size photo panel for the Journey section: shows the photo of the active stop
 * filling the whole box (same height as the stop card next to it), with a crossfade.
 * Autoplays forward (1 → 6, then loops); pauses on hover / focus and for reduced motion.
 */
export const JourneySlides = ({
  images,
  labels,
  index,
  onChange,
  overlay,
}: {
  images: string[];
  labels: string[];
  index: number;
  onChange: (i: number) => void;
  overlay?: ReactNode;
}) => {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const count = images.length;

  const go = useCallback((delta: number) => onChange((index + delta + count) % count), [index, count, onChange]);

  useEffect(() => {
    if (reduceMotion || hovered || focused || count < 2) return;
    const t = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, reduceMotion, hovered, focused, count, go]);

  // warm the cache so the crossfade never shows a half-loaded photo
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1);
    else return;
    e.preventDefault();
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Journey photos. Use the arrow keys to change stop."
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
      className="group relative h-full min-h-[360px] w-full flex-1 overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[var(--rv-card)]/70 md:min-h-[440px]"
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={labels[index] ?? ""}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* soft shade so the controls stay readable on bright photos */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 to-transparent" />

      {overlay && <div className="absolute right-4 top-4 z-10 flex items-center gap-2">{overlay}</div>}

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-4 p-5 md:p-6">
        <div className="flex min-w-0 flex-wrap items-center gap-1.5 sm:gap-2" role="tablist" aria-label="Choose a stop">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={labels[i] ?? `Photo ${i + 1}`}
              onClick={() => onChange(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[var(--gold)]" : "w-3 bg-white/45 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="hidden whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.25em] text-white/90 sm:inline">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous stop"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/55 text-white backdrop-blur-md transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next stop"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/55 text-white backdrop-blur-md transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
