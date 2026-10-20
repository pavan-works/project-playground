/**
 * Section label shown above every section heading ("01 / Profile" … "09 / Get In Touch").
 *
 * Two designs are available; the whole site uses one of them:
 *   "line" — a short cyan line + cyan uppercase text, always on the left side
 *   "pill" — a rounded pill with a pulsing cyan dot and white text, aligned with its heading
 *
 * To choose the design for the whole site, change SECTION_LABEL_STYLE below.
 * To preview the other design without editing code, open the site with
 * ?labels=line or ?labels=pill at the end of the address.
 */
export type SectionLabelStyle = "line" | "pill";

export const SECTION_LABEL_STYLE: SectionLabelStyle = "line";

const activeStyle = (): SectionLabelStyle => {
  if (typeof window !== "undefined") {
    const fromUrl = new URLSearchParams(window.location.search).get("labels");
    if (fromUrl === "line" || fromUrl === "pill") return fromUrl;
  }
  return SECTION_LABEL_STYLE;
};

export const SectionLabel = ({
  n,
  text,
  align = "center",
  className = "",
}: {
  /** section number, e.g. "01" */
  n: string;
  /** section name, e.g. "Profile" */
  text: string;
  /** where the pill sits (the line design is always on the left) */
  align?: "left" | "center";
  className?: string;
}) => {
  if (activeStyle() === "line") {
    return (
      <div className={`flex w-full items-center justify-start gap-4 self-stretch ${className}`}>
        <span className="h-px w-12 shrink-0 bg-[var(--gold)]" />
        <span className="font-mono text-xs uppercase tracking-[0.5em] text-[var(--gold)]">
          {n} / {text}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex w-full self-stretch ${align === "center" ? "justify-center" : "justify-start"} ${className}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-white/90">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--gold)]" />
        {n} / {text}
      </span>
    </div>
  );
};
