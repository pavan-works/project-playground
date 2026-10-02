import { useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Check,
  Copy,
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

const isMobileDevice = () =>
  typeof navigator !== "undefined" &&
  (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints > 1 && window.innerWidth < 900));

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
      className="pointer-events-none absolute left-4 top-4 origin-left text-sm text-white/60 transition-all duration-200 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[var(--gold)] peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-75"
    >
      {label}
    </label>
    {error && <p className="mt-1.5 text-xs text-rose-300">{error}</p>}
  </div>
);

const inputCls =
  "peer w-full rounded-xl border border-white/20 bg-white/[0.06] px-4 pb-2 pt-6 text-[15px] text-white placeholder-transparent outline-none transition-colors focus:border-[var(--gold)] focus:bg-white/[0.09]";

export const ContactForm = () => {
  const [f, setF] = useState<Fields>({ first: "", last: "", reach: "", message: "", ok: false });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

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
    if (f.reach.trim().length < 5) e.reach = "Add an email or phone number so I can reply.";
    if (f.message.trim().length < 5) e.message = "Write a short message.";
    if (!f.ok) e.ok = "Please tick the permission box so I can reply.";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSent(composed);
    if (isMobileDevice()) window.location.href = smsHref(composed);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(sent ?? composed);
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
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Reach me directly
        </span>
        <h3 className="mt-5 font-headline text-2xl font-bold leading-tight text-white md:text-3xl">
          Your message lands on my phone as a text.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          Write it on the right, hit send, and it opens as a prefilled text to{" "}
          <b className="text-white">{CONTACT_PHONE.display}</b>. Prefer another channel? Use these.
        </p>

        <div className="mt-6 grid gap-3">
          <a
            href={`sms:${CONTACT_PHONE.e164}`}
            className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-[var(--gold)]/60 hover:bg-white/[0.1]"
          >
            <MessageSquareText className="h-5 w-5 text-[var(--gold)]" />
            <span className="text-sm font-medium text-white">Text (SMS)</span>
            <span className="ml-auto font-mono text-xs text-white/60">{CONTACT_PHONE.display}</span>
          </a>
          <a
            href={waHref("Hi Pullaiah, I found you through your portfolio.")}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-emerald-400/60 hover:bg-white/[0.1]"
          >
            <MessageCircle className="h-5 w-5 text-emerald-400" />
            <span className="text-sm font-medium text-white">WhatsApp</span>
            <span className="ml-auto font-mono text-xs text-white/60">chat</span>
          </a>
          <a
            href={`tel:${CONTACT_PHONE.e164}`}
            className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-[var(--indigo-light)]/60 hover:bg-white/[0.1]"
          >
            <Phone className="h-5 w-5 text-[var(--indigo-light)]" />
            <span className="text-sm font-medium text-white">Call</span>
            <span className="ml-auto font-mono text-xs text-white/60">{CONTACT_PHONE.display}</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-rose-300/60 hover:bg-white/[0.1]"
          >
            <Mail className="h-5 w-5 text-rose-300" />
            <span className="text-sm font-medium text-white">Email</span>
            <span className="ml-auto truncate font-mono text-xs text-white/60">{EMAIL}</span>
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
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/50">
            → TEXT TO {CONTACT_PHONE.display}
          </span>
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
            <div className="mt-1 text-right font-mono text-[10px] tracking-wider text-white/50">
              {f.message.length}/{MAX_MESSAGE}
            </div>
          </div>
        </div>

        <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-white/80">
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
            className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--gold)] px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_30px_-6px_rgba(34,211,238,0.8)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_-4px_rgba(34,211,238,1)]"
          >
            Send message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
          <p className="max-w-xs text-xs leading-snug text-white/55">
            Sending opens your messaging app with the text ready, addressed to my number.
          </p>
        </div>

        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
              aria-live="polite"
            >
              <div className="mt-6 rounded-2xl border border-emerald-400/50 bg-emerald-400/[0.08] p-5">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300">
                  <Check className="h-4 w-4" /> Message ready
                </div>
                <p className="mt-3 rounded-xl bg-black/30 p-3 text-sm leading-relaxed text-white/90">
                  {sent}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-white/70">
                  On a phone your texting app should have opened. If nothing opened (for example on a
                  computer), send it with one of these:
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  <a
                    href={smsHref(sent)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
                  >
                    <MessageSquareText className="h-4 w-4" /> Open SMS app
                  </a>
                  <a
                    href={waHref(sent)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-200 transition-colors hover:bg-emerald-400/20"
                  >
                    <MessageCircle className="h-4 w-4" /> Send on WhatsApp
                  </a>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio enquiry")}&body=${encodeURIComponent(sent)}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
                  >
                    <Mail className="h-4 w-4" /> Email instead
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
