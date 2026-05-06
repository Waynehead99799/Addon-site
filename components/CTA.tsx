"use client";
import { useState, type FormEvent } from "react";
import Script from "next/script";
import { Icon } from "./icons";
import { Field, SelectField, TextAreaField } from "./cta-form-variants/Fields";
import { SITE } from "@/lib/site";

const OFFICES = [
  { city: "Ahmedabad", region: "India · HQ", time: "GMT+5:30" },
];

const STATS = [
  { l: "Avg. first reply", v: "< 24 hours" },
  { l: "Discovery to kickoff", v: "7 days" },
  { l: "First working build", v: "2 weeks" },
];

// Cloudflare Turnstile site key. When unset (typical for local dev without
// keys), the widget + verification are both skipped end-to-end so the form
// keeps working — the API route applies the same NEXT_PUBLIC_/SECRET_ pairing.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export default function CTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    setStatus("submitting");
    setError(null);

    const payload = {
      // Honeypot — must be empty. Bots fill every input they see.
      website: fd.get("website") ?? "",
      name: fd.get("name") ?? "",
      email: fd.get("email") ?? "",
      company: fd.get("company") ?? "",
      role: fd.get("role") ?? "",
      engagement: fd.get("engagement") ?? "",
      timeline: fd.get("timeline") ?? "",
      message: fd.get("message") ?? "",
      // Turnstile auto-injects this hidden field into the form when the
      // widget is rendered. Empty when no widget (no site key).
      turnstileToken: fd.get("cf-turnstile-response") ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || `Something went wrong (HTTP ${res.status}).`);
      }
      setStatus("success");
      form.reset();
      // Reset the Turnstile widget so a second submit gets a fresh token.
      // `window.turnstile` is provided by the Cloudflare script.
      if (typeof window !== "undefined" && (window as unknown as { turnstile?: { reset: () => void } }).turnstile) {
        (window as unknown as { turnstile: { reset: () => void } }).turnstile.reset();
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section
      id="contact"
      className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5"
    >
      {/* Cloudflare Turnstile script — only loads when a site key is configured */}
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
          async
          defer
        />
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Enquire</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-lite text-[11.5px] text-white/70 mb-5">
              <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
              Accepting engagements — Q3 2026 · two slots remaining
            </div>
            <h2 className="text-[36px] sm:text-[44px] md:text-[68px] lg:text-[84px] font-semibold tracking-[-0.02em] leading-[0.98]">
              Let&apos;s build<br />
              <span className="serif-italic font-normal text-white/80">something worth shipping.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 border-t border-white/10 pt-10">
          {/* Form (compact 2-col) */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="col-span-12 md:col-span-7 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-7 md:p-8"
          >
            {/* Honeypot — visually hidden, off the keyboard tab order. Bots fill it. */}
            <div aria-hidden="true" className="absolute left-[-9999px] w-px h-px overflow-hidden">
              <label>
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  defaultValue=""
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <Field
                label="Name"
                name="name"
                required
                placeholder="Your name"
                autoComplete="name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                autoComplete="email"
              />
              <Field
                label="Company"
                name="company"
                placeholder="Optional"
                autoComplete="organization"
              />
              <Field
                label="Role"
                name="role"
                placeholder="Founder · CTO · Head of product…"
                autoComplete="organization-title"
              />
              <SelectField
                label="Engagement"
                name="engagement"
                options={[
                  "Project (3–9 months)",
                  "Audit / discovery (1–2 weeks)",
                  "Staff augmentation",
                  "Not sure yet",
                ]}
              />
              <SelectField
                label="Timeline"
                name="timeline"
                options={["This month", "Next month", "Next quarter", "Just exploring"]}
              />
              <div className="md:col-span-2">
                <TextAreaField
                  label="What are you building?"
                  name="message"
                  required
                  placeholder="One paragraph is plenty."
                  rows={4}
                />
              </div>
            </div>

            {/* Turnstile widget — only renders when a site key is configured.
                Auto-injects a hidden `cf-turnstile-response` input into the form,
                which the submit handler reads via FormData. */}
            {TURNSTILE_SITE_KEY && (
              <div className="mt-5 flex">
                <div
                  className="cf-turnstile"
                  data-sitekey={TURNSTILE_SITE_KEY}
                  data-theme="dark"
                  data-size="flexible"
                />
              </div>
            )}

            <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-[12.5px] text-white/45 max-w-xs">
                We&apos;ll only use your details to reply about this enquiry.
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full glass-lite p-[2px] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black">
                  <span className="text-[14.5px] font-medium">
                    {status === "submitting" ? "Sending…" : "Send brief"}
                  </span>
                  <span className="w-7 h-7 rounded-full accent-grad grid place-items-center text-white btn-arrow">
                    <Icon.Arrow width={13} height={13} />
                  </span>
                </span>
              </button>
            </div>

            {/* Status messages — sit below the actions, role=status so screen
                readers announce the outcome. */}
            {status === "success" && (
              <p
                role="status"
                className="mt-5 text-[13.5px] text-emerald-300/90 border-t border-emerald-300/20 pt-4"
              >
                Thanks — your enquiry is in. We&apos;ll reply within 24 hours.
              </p>
            )}
            {status === "error" && error && (
              <p
                role="alert"
                className="mt-5 text-[13.5px] text-red-300/90 border-t border-red-300/20 pt-4"
              >
                {error}
              </p>
            )}
          </form>

          {/* Contact sidebar */}
          <aside className="col-span-12 md:col-span-5 space-y-8 md:pl-2">
            <div>
              <div className="eyebrow mb-4">Or reach us</div>
              <a
                href="mailto:sales@addonwebsolutions.com"
                className="block text-[18px] font-medium hover:text-white/85 transition"
              >
                sales@addonwebsolutions.com
              </a>
              <a
                href="https://wa.me/919879003017"
                className="block mt-1 text-[14.5px] text-white/65 serif-italic hover:text-white/85 transition"
              >
                +91 98790 03017 · WhatsApp →
              </a>
            </div>

            <div>
              <div className="eyebrow mb-4">Offices</div>
              <ul className="space-y-3">
                {OFFICES.map((o) => (
                  <li
                    key={o.city}
                    className="border-b border-white/10 pb-3"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <div className="text-[15px] font-medium">{o.city}</div>
                        <div className="text-[12px] text-white/55 serif-italic">{o.region}</div>
                      </div>
                      <div className="text-[11.5px] font-mono text-white/45">{o.time}</div>
                    </div>
                    <address className="mt-2 max-w-md text-[12.5px] leading-relaxed text-white/50 not-italic">
                      {SITE.address.formatted}
                    </address>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="eyebrow mb-4">What to expect</div>
              <ul className="space-y-2.5">
                {STATS.map((s) => (
                  <li
                    key={s.l}
                    className="flex items-baseline justify-between border-b border-white/10 pb-2"
                  >
                    <span className="text-[13px] text-white/65">{s.l}</span>
                    <span className="serif-italic text-[16px] text-white">{s.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
