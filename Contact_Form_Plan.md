# "Let's Build Something" — Contact Delivery Plan

> Goal: visitors can message the owner **from any device**, and the message reaches the owner's inbox without relying on the visitor's own SMS / WhatsApp app.
> Site: https://soligepullaiah.vercel.app/ (Vercel). Form: `src/components/ContactForm.tsx`. Section: "Let's Build Something" in `src/App.tsx` (Contact).
> Status: **live (2026-10-16).** The owner created a Resend account with pulipavan696@gmail.com, added `RESEND_API_KEY` and `CONTACT_TO` in Vercel, and a real test message from the live site was delivered. Code: `api/contact.ts` + `src/components/ContactForm.tsx` (+ a dev-only `/api/contact` route in `vite.config.ts`). Tracked in `portfolio.md` §16.17.
> Written: 2026-10-11.

---

## 1. Current behaviour (what exists today)

- `ContactForm.tsx`: first name, last name, email-or-phone, message (≤ 280 chars), permission checkbox, floating labels, validation.
- **Delivery:** builds a text and opens the visitor's own SMS app (phones) or shows Open SMS / WhatsApp / Email / Copy buttons (desktop), addressed to +91 93466 80696 (`CONTACT_PHONE` in `data.ts`).
- **Limitation:** a browser cannot silently send an SMS or email, so the *visitor* has to send it. Messages are lost if they close the app.

---

## 2. The four approaches considered

| # | Approach | How it works | Pros | Cons |
|---|---|---|---|---|
| 1 | **Web3Forms** | Form `POST`s to their API with a free access key; they email the submission to the owner. | Free (≈250/month), no backend, spam options (hCaptcha / Turnstile), fastest to set up (~10 min). | Access key is visible in the public page, so anyone can copy it and use up the quota. Limited control over validation, templates and error states. |
| 2 | **EmailJS** | Browser SDK (`emailjs-com`) sends an email from a template connected to Gmail/Outlook. | Free (≈200/month), runs fully in the frontend, template editable in their dashboard. | Keys are visible in the browser; small quota; ties the site to their SDK. |
| 3 | **FormSubmit** | Form `action` points to `formsubmit.co/<email>`. | No account at first, free. | Email address exposed (or hidden behind an alias), needs email activation, least reliable and least customisable. **Skip.** |
| 4 | **Vercel serverless function + Resend** *(recommended)* | The form calls `/api/contact` on our own Vercel project; the function validates the input, blocks spam and sends the email through Resend. | API keys stay private in Vercel env vars; real validation, spam protection and honest success/error states; easy to extend later (Supabase, SMS, Slack…); good portfolio story. | About 1–2 h of work, needs a Resend account, a small function to maintain. |

**Decision (2026-10-11):** go with **Approach 4**. Keep **Approach 1 (Web3Forms)** as the quick fallback if the owner wants delivery live immediately — it can be swapped for Approach 4 later with almost no UI change. Approaches 2 and 3 are not planned.

---

## 3. Approach 4 — implementation plan

### What we will build
1. Keep the existing UI (`ContactForm.tsx` layout, floating labels, side panel) and improve only where needed.
2. **Vercel serverless API at `/api/contact`** (`api/contact.ts`) that:
   - accepts `POST` JSON only;
   - validates and trims every field on the server (names, email-or-phone, message length ≤ 280, consent = true) — never trust the browser;
   - rejects bots with a **honeypot field** (hidden input that humans leave empty) and a minimum time-to-submit check;
   - applies **rate limiting** (see caveat below);
   - sends the email to the owner through **Resend**;
   - returns a clear JSON result (`ok: true` only after Resend accepted the email).
3. **Spam protection:** input validation + honeypot + rate limiting (+ optional Turnstile/hCaptcha later if spam appears).
4. **Direct-contact links** next to the form: WhatsApp (`https://wa.me/919346680696`), SMS (`sms:+919346680696`) and phone (`tel:+919346680696`), plus email. The current SMS / WhatsApp / Email / Copy fallback stays if the server call fails.
5. **Form states:** idle → sending (spinner, disabled button) → success message → clear error messages (validation errors, server error, network error) with the direct-contact links offered as a fallback.
6. **Environment variables in Vercel** (never in frontend code or the repo): `RESEND_API_KEY`, `CONTACT_TO` (the owner's inbox), optionally `CONTACT_FROM`.
7. **Testing** on mobile and desktop: successful delivery, invalid input, honeypot filled, rate-limit hit, failed request (Resend down / wrong key), offline.

### What we will deliberately avoid
- No database / Supabase initially.
- No paid SMS gateway or Twilio.
- No unnecessary redesign of the portfolio.
- No exposed API keys or private credentials.
- **No claim that a message was delivered until the server confirms the email service accepted it.**

### Expected result
Visitors can contact the owner from any device using the method they prefer. The form delivers messages to the owner's email, while WhatsApp, SMS and calls remain direct-contact alternatives.

### Implementation steps (order)
1. Owner creates a free **Resend** account and adds `RESEND_API_KEY` + `CONTACT_TO` in Vercel → Project → Settings → Environment Variables (Production and Preview).
2. Add `api/contact.ts` (Vercel function: validation, honeypot, rate limit, Resend call, JSON response).
3. Update `ContactForm.tsx`: `fetch("/api/contact")`, states (sending / success / error), hidden honeypot input, time-to-submit value, keep the old SMS / WhatsApp / Email / Copy panel as the fallback.
4. Add the `wa.me` / `sms:` / `tel:` direct-contact links (use `CONTACT_PHONE`).
5. Local test with `vercel dev` (or deploy a preview) — do **not** put keys in `.env` files that are committed.
6. Test matrix (above), at 375 px and 1366 px; keyboard and screen-reader pass for the form (labels, `aria-live` status).
7. Deploy, send a real test message, confirm it arrives; update `portfolio.md` / `README.md`.

### Caveats to plan for
- **Rate limiting on serverless is not automatic:** each request may run in a fresh instance, so an in-memory counter only partly works. Options: start with honeypot + length limits + minimum submit time, then add a free **Upstash Redis** counter if spam appears.
- **Resend sender rules:** check Resend's current limits and sender restrictions. As understood, without a verified domain the email can only be sent to the account owner's own address — which is exactly this use (delivering to the owner). A verified domain is only needed to email other people or use a custom "from".
- **Failure path:** if Resend is down or the key is wrong, show a clear error and offer the direct-contact links; log the failure in Vercel function logs.
- **Privacy:** the owner's phone number is public on the site (decision pending, see §6). Never log message bodies longer than needed.

---

## 4. Fallback — Approach 1 (Web3Forms), if delivery is needed immediately

1. Get a free access key at web3forms.com (enter the owner's email).
2. In `ContactForm.tsx`, `POST` the form to their endpoint with the key and a honeypot field; show success only after their response says it succeeded.
3. Be aware the key is visible in the page source (quota can be abused). Replace with Approach 4 later; the form UI and states do not change.

---

## 5. Optional later — SMS notification via Twilio / MSG91 / Fast2SMS

> This is the **earlier plan from the first contact-form session**, kept for later. It is **not** part of the first build (Approach 4 avoids a paid SMS gateway initially). It plugs into the same `/api/contact` function once email delivery works, with no UI redesign.

**Idea:** after the function has validated the message and Resend accepted the email, it also asks an SMS provider to text the owner's phone, so the owner gets a normal text from any visitor's device.

**Steps (Twilio)**
1. Create a Twilio account and collect three values: **Account SID**, **Auth Token** and a **Twilio phone number** to send from.
2. **Trial limits:** a free trial account can only text numbers verified in Twilio (the owner's number would be one), and messages carry a "Sent from a Twilio trial" prefix. Removing that means upgrading and adding payment.
3. **India caveat:** check Twilio's current rules for texting Indian numbers before relying on it. Indian regulations (**DLT registration** for sender ID and templates) can block or delay SMS, which is why email is the first choice. Providers such as **MSG91** or **Fast2SMS** are the India-focused alternatives, but they also need DLT registration (slow, paid).
4. Add the keys to **Vercel environment variables** (never in code or the repo): `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM`, `CONTACT_TO_PHONE` (the owner's number, +919346680696).
5. In `api/contact.ts`, after the email is accepted, call the SMS provider with a short text ("New portfolio message from {name}: {first 100 chars}…"). Treat SMS as **best effort**: if it fails, the request is still a success as long as the email was accepted; log the SMS error.
6. Test with a verified number first; watch the cost per message; keep the rate limit so spam cannot run up a bill.

**Alternatives that avoid SMS:** a WhatsApp notification (WhatsApp Cloud API, needs a Meta business setup) or simply relying on the email push notification on the phone (free, effectively the same).

**Why it is deferred:** extra accounts, trial limits, India DLT rules, cost, and a spam-to-bill risk — while an email notification already reaches the phone. Revisit only if email proves insufficient.

---

## 6. Checklist

- [x] **Owner:** created a Resend account and added `RESEND_API_KEY` and `CONTACT_TO` in Vercel, then redeployed. (Recommended: use a key with **Sending access** only.)
- [x] Destination email confirmed: `pulipavan696@gmail.com` (also the Resend account email, so no domain is needed).
- [x] Add `api/contact.ts` (validation, honeypot, minimum time-to-submit, best-effort per-IP rate limit 5 / 10 min, Resend via its REST API — no SDK dependency).
- [x] Wire `ContactForm.tsx` (sending / success / error, honeypot, fallback SMS / WhatsApp / Email / Copy panel on error).
- [x] `wa.me`, `sms:` and `tel:` direct-contact links (side panel, already present).
- [x] Tested locally (2026-10-16): invalid input → 422 with field errors, honeypot / instant submit → 400, GET → 405, rate limit → 429, keys missing → 503, Resend rejecting the key → 502; UI sending / success (mocked reply) / error states. Real delivery tested on the live site (2026-10-16) ✅. [ ] Still worth a test from a phone.
- [x] Real test message sent after deploy — it arrived.
- [x] Update `portfolio.md`, `README.md` and the change log.
- [ ] (Optional) Turnstile / Upstash rate limiting if spam appears.
- [ ] (Later, optional) SMS notification via Twilio / MSG91 / Fast2SMS — see §5.
- [ ] (Later, optional) mascot reaction: `celebrate` on success, `confused` on error — see `Mascot_Plan.md`.

---

## 7. Open questions

1. ~~Is the destination email `pulipavan696@gmail.com`?~~ Yes.
2. Keep the phone number (+91 93466 80696) public on the site, or show only the form + email?
3. ~~Build Approach 4 directly, or ship Web3Forms first?~~ Approach 4 was built directly and is live.
4. Do you want a confirmation email sent back to the visitor? (needs a verified domain in Resend — not planned.)
5. Any spam seen so far that would justify adding Turnstile from day one?
6. Do you still want SMS notifications later (§5), or is the email push notification on your phone enough?

---

## 8. Follow-ups after launch (2026-10-16)

- **Autofill styling:** autofilled fields showed the browser's light background; fixed with `.contact-input:-webkit-autofill` / `:autofill` in `src/index.css` (dark fill + white text).
- **Resend domain:** not needed. Without a verified domain Resend only delivers to the account owner's own email, which is exactly this use. `soligepullaiah.vercel.app` cannot be verified (Vercel owns its DNS); a custom domain would only matter for a custom sender address or emailing visitors back.
- **Key hygiene:** keep the key only in Vercel; prefer a **Sending access** key over Full access.
