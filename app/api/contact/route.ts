/**
 * POST /api/contact — handles every Enquire-form submission.
 *
 * Pipeline:
 *   1. Parse JSON body
 *   2. Honeypot — bots fill the hidden `website` field; humans never do
 *   3. Required-field + email-shape validation
 *   4. Google reCAPTCHA siteverify (skipped in dev when no secret is set)
 *   5. Hand off to `sendContactEmail` for delivery
 *
 * Returns: `{ ok: true }` on success, `{ error: "..." }` with a 4xx/5xx
 * status otherwise. The client renders the error message inline.
 */
import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, type ContactPayload } from "@/lib/contact";

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_VERIFY_URL =
  "https://www.google.com/recaptcha/api/siteverify";
// v3 returns a score 0.0 (bot) → 1.0 (human). 0.5 is Google's default cut-off
// and works well for low-volume contact forms; tighten if you start seeing
// spam, loosen if you start losing real submissions.
const RECAPTCHA_MIN_SCORE = 0.5;
// Must match the action used by the front-end (`grecaptcha.execute(siteKey,
// { action: "contact" })`). Mismatches mean the token was minted for a
// different page and we reject it.
const RECAPTCHA_EXPECTED_ACTION = "contact";

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

  // reCAPTCHA verification. If no secret is configured (local dev), we skip —
  // the front-end also skips rendering the widget when the public site key
  // is unset, so the two halves stay in sync.
  if (RECAPTCHA_SECRET) {
    const token = trim(body.recaptchaToken, 5000);
    if (!token) {
      return NextResponse.json(
        { error: "Captcha verification missing — please reload and try again." },
        { status: 400 }
      );
    }
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "";
    const form = new URLSearchParams();
    form.set("secret", RECAPTCHA_SECRET);
    form.set("response", token);
    if (ip) form.set("remoteip", ip);

    let verifyJson: {
      success?: boolean;
      score?: number;
      action?: string;
      hostname?: string;
      "challenge_ts"?: string;
      "error-codes"?: string[];
    };
    try {
      const verifyRes = await fetch(RECAPTCHA_VERIFY_URL, {
        method: "POST",
        body: form,
      });
      verifyJson = await verifyRes.json();
    } catch (e) {
      console.error("[contact] reCAPTCHA siteverify network error:", e);
      return NextResponse.json(
        { error: "Couldn't verify the captcha — please try again." },
        { status: 502 }
      );
    }

    if (!verifyJson.success) {
      console.warn(
        "[contact] reCAPTCHA rejected token:",
        verifyJson["error-codes"]
      );
      return NextResponse.json(
        { error: "Captcha check failed — please reload and try again." },
        { status: 403 }
      );
    }

    // v3-only checks. v2 responses don't include `score`/`action`, so we
    // only enforce these when the field is present.
    if (
      verifyJson.action !== undefined &&
      verifyJson.action !== RECAPTCHA_EXPECTED_ACTION
    ) {
      console.warn(
        "[contact] reCAPTCHA action mismatch:",
        verifyJson.action,
        "expected",
        RECAPTCHA_EXPECTED_ACTION
      );
      return NextResponse.json(
        { error: "Captcha check failed — please reload and try again." },
        { status: 403 }
      );
    }
    if (
      typeof verifyJson.score === "number" &&
      verifyJson.score < RECAPTCHA_MIN_SCORE
    ) {
      console.warn(
        "[contact] reCAPTCHA score below threshold:",
        verifyJson.score
      );
      return NextResponse.json(
        {
          error:
            "We couldn't confirm you're human. Please email sales@addonwebsolutions.com and we'll pick it up.",
        },
        { status: 403 }
      );
    }
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
