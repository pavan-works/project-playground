/**
 * POST /api/contact — Vercel serverless function behind the "Let's Build Something" form.
 *
 * Validates the message on the server, blocks obvious bots (honeypot field, minimum
 * time-to-submit, per-IP rate limit) and emails it to the owner through Resend.
 * Replies `{ ok: true }` only after Resend has accepted the email.
 *
 * Environment variables (Vercel → Project → Settings → Environment Variables; never commit them):
 *   RESEND_API_KEY  — Resend API key
 *   CONTACT_TO      — inbox that receives the messages
 *   CONTACT_FROM    — optional sender, e.g. "Portfolio <hello@your-domain>" (needs a verified
 *                     domain in Resend; defaults to Resend's test sender onboarding@resend.dev)
 */

const MAX_MESSAGE = 280;
const MAX_NAME = 60;
const MAX_REACH = 120;
const MAX_BODY_BYTES = 8_000;
const MIN_FILL_MS = 3_000; // humans need more than 3 s to fill the form
const MAX_FILL_MS = 24 * 60 * 60 * 1000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5; // messages per IP per window

// Best effort only: each serverless instance has its own memory, so this slows down a
// single noisy client but is not a hard limit. Add Upstash Redis if real spam shows up.
const hits = new Map<string, number[]>();

type FieldErrors = Partial<Record<"first" | "last" | "reach" | "message" | "consent", string>>;

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const isPhone = (v: string) => /^[+\d][\d\s().-]{5,}$/.test(v) && v.replace(/\D/g, "").length >= 7;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const clean = (v: unknown) => (typeof v === "string" ? v.replace(/\s+/g, " ").trim() : "");

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) hits.clear(); // keep memory bounded
  return false;
}

export async function POST(request: Request): Promise<Response> {
  if (!(request.headers.get("content-type") ?? "").includes("application/json")) {
    return json(415, { ok: false, error: "Send the form as JSON." });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json(413, { ok: false, error: "Message is too large." });

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(raw);
  } catch {
    return json(400, { ok: false, error: "Invalid request." });
  }

  // Bot checks: the hidden field must stay empty and the form must not be submitted instantly.
  const elapsed = Date.now() - Number(data.startedAt);
  if (clean(data.company) !== "" || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS) {
    return json(400, { ok: false, error: "Your message could not be sent. Please try again, or use a direct link." });
  }

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return json(429, { ok: false, error: "Too many messages in a short time. Please try again later." });
  }

  const first = clean(data.first);
  const last = clean(data.last);
  const reach = clean(data.reach);
  const message = typeof data.message === "string" ? data.message.trim() : "";

  const errors: FieldErrors = {};
  if (!first) errors.first = "Please add your first name.";
  else if (first.length > MAX_NAME) errors.first = "First name is too long.";
  if (last.length > MAX_NAME) errors.last = "Last name is too long.";
  if (!reach) errors.reach = "Add an email or phone number so I can reply.";
  else if (reach.length > MAX_REACH || !(EMAIL_RE.test(reach) || isPhone(reach)))
    errors.reach = "Enter a valid email address or phone number.";
  if (message.length < 5) errors.message = "Write a short message.";
  else if (message.length > MAX_MESSAGE) errors.message = `Keep it under ${MAX_MESSAGE} characters.`;
  if (data.consent !== true) errors.consent = "Please tick the permission box so I can reply.";
  if (Object.keys(errors).length) {
    return json(422, { ok: false, error: "Please fix the highlighted fields.", fields: errors });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!apiKey || !to) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO is not set");
    return json(503, { ok: false, error: "The form is not set up yet. Please use one of the direct links." });
  }

  const name = `${first} ${last}`.trim();
  const replyIsEmail = EMAIL_RE.test(reach);
  const text = [`From: ${name}`, `Reply to: ${reach}`, "", message, "", "— Sent from the portfolio contact form"].join("\n");
  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.5;color:#111">
      <p><b>From:</b> ${escapeHtml(name)}<br/><b>Reply to:</b> ${escapeHtml(reach)}</p>
      <p style="white-space:pre-wrap;border-left:3px solid #22d3ee;padding-left:12px">${escapeHtml(message)}</p>
      <p style="color:#666;font-size:12px">Sent from the portfolio contact form</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || "Portfolio Contact <onboarding@resend.dev>",
        to: [to],
        subject: `Portfolio message from ${name}`,
        text,
        html,
        ...(replyIsEmail ? { reply_to: reach } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const out = (await res.json().catch(() => ({}))) as { id?: string; message?: string };
    if (!res.ok || !out.id) {
      // log the status and Resend's reason, never the visitor's message
      console.error("[contact] Resend rejected the email", res.status, out.message ?? "");
      return json(502, { ok: false, error: "Your message could not be delivered right now. Please use a direct link." });
    }
    return json(200, { ok: true });
  } catch (err) {
    console.error("[contact] Resend request failed", err instanceof Error ? err.message : err);
    return json(502, { ok: false, error: "Your message could not be delivered right now. Please use a direct link." });
  }
}
