/**
 * Contact-form delivery. Used by `app/api/contact/route.ts` after the
 * payload has cleared honeypot + reCAPTCHA checks.
 *
 * Email path:
 *   - If `RESEND_API_KEY` is set → POST to Resend's REST API.
 *   - Otherwise → log the submission to the server console so dev environments
 *     work without any external account setup. The route still returns 200 in
 *     that case, so the front-end success state is honest.
 *
 * Swap the body of `sendContactEmail` if you'd rather use SendGrid, Postmark,
 * SMTP, a Slack webhook, or persist to a database — every other layer of the
 * stack stays the same.
 */
import { SITE } from "./site";

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  engagement?: string;
  timeline?: string;
  message: string;
};

const RESEND_KEY = process.env.RESEND_API_KEY;
// `CONTACT_TO_EMAIL` overrides the SITE default — useful when sales@ is an
// alias and you want enquiries to a specific inbox without changing site.ts.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? SITE.email;
// Resend requires a verified sender. For first-run dev the `onboarding@resend.dev`
// sandbox sender works (only delivers to the account owner's email). Once the
// production domain is verified in Resend, swap to e.g. "Addon Web <hi@addonwebsolutions.com>".
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Addon Web Solutions <onboarding@resend.dev>";

function formatBody(p: ContactPayload): string {
  return [
    `Name:       ${p.name}`,
    `Email:      ${p.email}`,
    p.company && `Company:    ${p.company}`,
    p.role && `Role:       ${p.role}`,
    p.engagement && `Engagement: ${p.engagement}`,
    p.timeline && `Timeline:   ${p.timeline}`,
    "",
    "Message:",
    p.message,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function sendContactEmail(p: ContactPayload): Promise<void> {
  const subject = `New enquiry — ${p.name}${p.company ? ` (${p.company})` : ""}`;
  const body = formatBody(p);

  if (!RESEND_KEY) {
    // Dev / preview fallback. Visible in the dev server console, deliberately
    // not silent so it's obvious the form is "working" but not delivering.
    console.log(
      `\n[contact] RESEND_API_KEY not set — logging submission instead\n` +
        `  to:      ${TO_EMAIL}\n` +
        `  subject: ${subject}\n\n` +
        body +
        `\n`
    );
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_KEY}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: p.email,
      subject,
      text: body,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Resend API error ${res.status}: ${text}`);
  }
}
