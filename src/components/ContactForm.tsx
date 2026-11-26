import { useMemo, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { track } from "../lib/analytics";
import {
  AlertTriangle,
  Check,
  Copy,
  Loader2,
  Mail,
  MessageCircle,
  MessageSquareText,
  Phone,
  Send,
} from "lucide-react";
import { CONTACT_PHONE } from "../data";

const MAX_MESSAGE = 280;
const EMAIL = "pulipavan696@gmail.com";

type Fields = { first: string; last: string; reach: string; message: string; ok: boolean };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const isPhone = (v: string) => /^[+\d][\d\s().-]{5,}$/.test(v) && v.replace(/\D/g, "").length >= 7;

const isIOS = () =>
  typeof navigator !== "undefined" && /iPhone|iPad|iPod/i.test(navigator.userAgent);

/** sms: URI — iOS wants `&body=`, Android and others want `?body=`. */
const smsHref = (body: string) =>
  `sms:${CONTACT_PHONE.e164}${isIOS() ? "&" : "?"}body=${encodeURIComponent(body)}`;

const waHref = (body: string) =>
  `https://wa.me/${CONTACT_PHONE.e164.replace("+", "")}?text=${encodeURIComponent(body)}`;

const Field = ({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="relative">
    {children}
    <label
      htmlFor={id}
      className="pointer-events-none absolute left-4 top-4 origin-left text-sm text-white/90 transition-all duration-200 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[var(--gold)] peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-75"
    >
      {label}
    </label>
    {error && <p className="mt-1.5 text-xs text-rose-300">{error}</p>}
  </div>
);

const inputCls =
  "contact-input peer w-full rounded-xl border border-white/20 bg-white/[0.06] px-4 pb-2 pt-6 text-[15px] text-white placeholder-transparent outline-none transition-colors focus:border-[var(--gold)] focus-visible:ring-2 focus-visible:ring-[var(--gold)]/60 focus:bg-white/[0.09]";

export const ContactForm = () => {
  const [f, setF] = useState<Fields>({ first: "", last: "", reach: "", message: "", ok: false });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [copied, setCopied] = useState(false);
  const [company, setCompany] = useState(""); // honeypot: hidden from people, bots fill it in
  const startedAt = useRef(Date.now());

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    setF((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const composed = useMemo(() => {
    const name = `${f.first} ${f.last}`.trim() || "someone";
    const reach = f.reach.trim() ? ` (${f.reach.trim()})` : "";
    return `Hi Pullaiah, this is ${name}${reach}. ${f.message.trim()} — via your portfolio`;
  }, [f]);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!f.first.trim()) e.first = "Please add your first name.";
    const reach = f.reach.trim();
    if (!reach) e.reach = "Add an email or phone number so I can reply.";
    else if (!(EMAIL_RE.test(reach) || isPhone(reach))) e.reach = "Enter a valid email address or phone number.";
    if (f.message.trim().length < 5) e.message = "Write a short message.";
    if (!f.ok) e.ok = "Please tick the permission box so I can reply.";
    return e;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (status === "sending") return;
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first: f.first,
          last: f.last,
          reach: f.reach,
          message: f.message,
          consent: f.ok,
          company,
          startedAt: startedAt.current,
        }),
        signal: AbortSignal.timeout(15_000),
      });
      const out = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string; fields?: Partial<Record<string, string>> }
        | null;
      // success only when the server confirms the email service accepted the message
      if (res.ok && out?.ok) {
        setStatus("sent");
        track("contact_form_sent");
        return;
      }
      if (out?.fields) {
        const { consent, ...rest } = out.fields;
        setErrors({ ...rest, ...(consent ? { ok: consent } : {}) } as Errors);
      }
      setServerError(out?.error ?? "Your message could not be delivered right now.");
      setStatus("error");
    } catch {
      setServerError(
        typeof navigator !== "undefined" && !navigator.onLine
          ? "You seem to be offline."
          : "Your message could not be delivered right now.",
      );
      setStatus("error");
    }
  };

  const reset = () => {
    setF({ first: "", last: "", reach: "", message: "", ok: false });
    setErrors({});
    setServerError("");
    setStatus("idle");
    startedAt.current = Date.now();
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(composed);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="relative mt-16 grid gap-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
      {/* direct channels */}
      <motion.aside
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-white/20 bg-[#0b1017]/90 p-7 md:p-8"
        style={{
          backgroundImage:
            "radial-gradient(460px circle at 0% 0%, rgba(34,211,238,0.14), transparent 60%)",
        }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-white/90">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Reach me directly
        </span>
        <h3 className="mt-5 font-headline text-2xl font-bold leading-tight text-white md:text-3xl">
          Your message lands straight in my inbox.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/95">
          Write it on the right and hit send: it is delivered to my email from any device, no app
          needed. Prefer another channel? Text, WhatsApp or call me on{" "}
          <b className="text-white">{CONTACT_PHONE.display}</b>.
        </p>

        <div className="mt-6 grid gap-3">
          <a
            href={`sms:${CONTACT_PHONE.e164}`}
            className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-[var(--gold)]/60 hover:bg-white/[0.1]"
          >
            <MessageSquareText className="h-5 w-5 text-[var(--gold)]" />
            <span className="text-sm font-medium text-white">Text (SMS)</span>
            <span className="ml-auto font-mono text-xs text-white/90">{CONTACT_PHONE.display}</span>
          </a>
          <a
            href={waHref("Hi Pullaiah, I found you through your portfolio.")}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-emerald-400/60 hover:bg-white/[0.1]"
          >
            <MessageCircle className="h-5 w-5 text-emerald-400" />
            <span className="text-sm font-medium text-white">WhatsApp</span>
            <span className="ml-auto font-mono text-xs text-white/90">chat</span>
          </a>
          <a
            href={`tel:${CONTACT_PHONE.e164}`}
            className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-[var(--indigo-light)]/60 hover:bg-white/[0.1]"
          >
            <Phone className="h-5 w-5 text-[var(--indigo-light)]" />
            <span className="text-sm font-medium text-white">Call</span>
            <span className="ml-auto font-mono text-xs text-white/90">{CONTACT_PHONE.display}</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-rose-300/60 hover:bg-white/[0.1]"
          >
            <Mail className="h-5 w-5 text-rose-300" />
            <span className="text-sm font-medium text-white">Email</span>
            <span className="ml-auto truncate font-mono text-xs text-white/90">{EMAIL}</span>
          </a>
        </div>
      </motion.aside>

      {/* form */}
      <motion.form
        noValidate
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative overflow-hidden rounded-3xl border border-white/20 bg-[#0b1017]/90 p-7 md:p-8"
        aria-label="Contact form"
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--gold)]">
            Send a message
          </span>
          <span className="font-mono text-[11px] tracking-[0.2em] text-white/95">
            → STRAIGHT TO MY INBOX
          </span>
        </div>

        {/* honeypot: off-screen, skipped by keyboard and screen readers */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="c-company">Company</label>
          <input
            id="c-company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="c-first" label="First name" error={errors.first}>
            <input
              id="c-first"
              className={inputCls}
              placeholder=" "
              autoComplete="given-name"
              value={f.first}
              onChange={(e) => set("first", e.target.value)}
            />
          </Field>
          <Field id="c-last" label="Last name">
            <input
              id="c-last"
              className={inputCls}
              placeholder=" "
              autoComplete="family-name"
              value={f.last}
              onChange={(e) => set("last", e.target.value)}
            />
          </Field>
          <div className="sm:col-span-2">
            <Field id="c-reach" label="Your email or phone (so I can reply)" error={errors.reach}>
              <input
                id="c-reach"
                className={inputCls}
                placeholder=" "
                autoComplete="email"
                value={f.reach}
                onChange={(e) => set("reach", e.target.value)}
              />
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Field id="c-msg" label="Type your message here" error={errors.message}>
              <textarea
                id="c-msg"
                rows={5}
                maxLength={MAX_MESSAGE}
                className={`${inputCls} resize-none`}
                placeholder=" "
                value={f.message}
                onChange={(e) => set("message", e.target.value)}
              />
            </Field>
            <div className="mt-1 text-right font-mono text-[11px] tracking-wider text-white/95">
              {f.message.length}/{MAX_MESSAGE}
            </div>
          </div>
        </div>

        <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-white/90">
          <input
            type="checkbox"
            checked={f.ok}
            onChange={(e) => set("ok", e.target.checked)}
            className="mt-1 h-4 w-4 accent-[var(--gold)]"
          />
          I give permission to be contacted back using the details above.
        </label>
        {errors.ok && <p className="mt-1.5 text-xs text-rose-300">{errors.ok}</p>}

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--gold)] px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_30px_-6px_rgba(34,211,238,0.8)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_-4px_rgba(34,211,238,1)] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {status === "sending" ? "Sending…" : "Send message"}
            {status === "sending" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            )}
          </button>
          <p className="max-w-xs text-xs leading-snug text-white/95">
            Delivered straight to my email inbox.
          </p>
        </div>

        <p className="sr-only" aria-live="polite">
          {status === "sending" ? "Sending your message…" : ""}
        </p>

        <AnimatePresence mode="wait">
          {status === "sent" && (
            <motion.div
              key="sent"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
              role="status"
              aria-live="polite"
            >
              <div className="mt-6 rounded-2xl border border-emerald-400/50 bg-emerald-400/[0.08] p-5">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300">
                  <Check className="h-4 w-4" /> Message sent
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  Thanks, {f.first.trim()}! Your message is in my inbox, and I will reply to{" "}
                  <b className="text-white">{f.reach.trim()}</b> soon.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
                >
                  Send another message
                </button>
              </div>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
              role="alert"
            >
              <div className="mt-6 rounded-2xl border border-rose-300/50 bg-rose-400/[0.08] p-5">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-rose-200">
                  <AlertTriangle className="h-4 w-4" /> Not sent
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/90">{serverError}</p>
                <p className="mt-3 text-xs leading-relaxed text-white/95">
                  You can send the same message yourself with one of these:
                </p>
                <p className="mt-3 rounded-xl bg-black/30 p-3 text-sm leading-relaxed text-white/90">
                  {composed}
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  <a
                    href={smsHref(composed)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
                  >
                    <MessageSquareText className="h-4 w-4" /> Text (SMS)
                  </a>
                  <a
                    href={waHref(composed)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-200 transition-colors hover:bg-emerald-400/20"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio enquiry")}&body=${encodeURIComponent(composed)}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
                  >
                    <Mail className="h-4 w-4" /> Email app
                  </a>
                  <button
                    type="button"
                    onClick={copy}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied" : "Copy text"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </div>
  );
};
