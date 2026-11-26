/**
 * Visitor analytics: pushes events to Google Tag Manager's dataLayer (GTM-TL89NBZ2 in index.html).
 * GTM forwards them to GA4. Nothing here reads or sends personal data: no names, emails or message text.
 * If GTM is blocked or missing, every call is a silent no-op.
 */

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: string, params: EventParams = {}): void {
  try {
    (window.dataLayer = window.dataLayer || []).push({ event, ...params });
  } catch {
    /* analytics must never break the page */
  }
}

/** Link clicks worth counting, matched on the href so no per-link wiring is needed. */
const LINK_EVENTS: [test: (href: string, a: HTMLAnchorElement) => boolean, event: string, label: string][] = [
  [(h, a) => h.endsWith(".pdf") && a.hasAttribute("download"), "resume_download", "resume"],
  [(h) => h.endsWith(".pdf"), "resume_open_tab", "resume"],
  [(h) => h === "#contact" || h.endsWith("/#contact"), "hire_me_click", "hire_me"],
  [(h) => h.startsWith("mailto:"), "contact_link_click", "email"],
  [(h) => h.startsWith("tel:"), "contact_link_click", "call"],
  [(h) => h.startsWith("sms:"), "contact_link_click", "sms"],
  [(h) => h.includes("wa.me/"), "contact_link_click", "whatsapp"],
  [(h) => h.includes("linkedin.com/"), "social_click", "linkedin"],
  [(h) => h.includes("github.com/puli-pro"), "social_click", "github"],
  [(h) => h.includes("x.com/"), "social_click", "x"],
];

/** One listener for the whole page. Call once at start-up. */
export function installLinkTracking(): void {
  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const hit = LINK_EVENTS.find(([test]) => test(href, a));
      if (hit) track(hit[1], { link: hit[2] });
    },
    { capture: true },
  );
}
