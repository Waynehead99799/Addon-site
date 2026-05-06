/**
 * POST /api/contact — handles every Enquire-form submission.
 *
 * Pipeline:
 *   1. Parse JSON body
 *   2. Honeypot — bots fill the hidden `website` field; humans never do
 *   3. Required-field + email-shape validation
 *   4. Hand off to `sendContactEmail` for delivery
 *
 * Returns: `{ ok: true }` on success, `{ error: "..." }` with a 4xx/5xx
 * status otherwise. The client renders the error message inline.
 */
import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, type ContactPayload } from "@/lib/contact";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const trim = (v: unknown, max = 5000): string =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot — silently treat as success so spammers don't learn they were
  // caught. The real mail send is skipped.
  if (trim(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = trim(body.name, 200);
  const email = trim(body.email, 320);
  const message = trim(body.message, 5000);
  const company = trim(body.company, 200);
  const role = trim(body.role, 200);
  const engagement = trim(body.engagement, 200);
  const timeline = trim(body.timeline, 200);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "That email doesn't look right — please check and try again." },
      { status: 400 }
    );
  }

  const payload: ContactPayload = {
    name,
    email,
    company,
    role,
    engagement,
    timeline,
    message,
  };

  try {
    await sendContactEmail(payload);
  } catch (err) {
    console.error("[contact] sendContactEmail failed:", err);
    return NextResponse.json(
      {
        error:
          "We couldn't send your enquiry just now. Please email sales@addonwebsolutions.com and we'll pick it up.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
