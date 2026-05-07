"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
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

type Status = "idle" | "submitting" | "success" | "error";

export default function CTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot — silently swallow bot submissions so they don't learn they were caught.
    if (typeof fd.get("website") === "string" && (fd.get("website") as string).trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setError("Form is not configured. Please email sales@addonwebsolutions.com.");
      return;
    }

    setStatus("submitting");
    setError(null);

    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const company = String(fd.get("company") ?? "");

    const w3 = new FormData();
    w3.append("access_key", accessKey);
    w3.append("subject", `New enquiry — ${name}${company ? ` (${company})` : ""}`);
    w3.append("from_name", "Addon Web Solutions — Enquire form");
    w3.append("replyto", email);
    w3.append("name", name);
    w3.append("email", email);
    w3.append("company", company);
    w3.append("role", String(fd.get("role") ?? ""));
    w3.append("engagement", String(fd.get("engagement") ?? ""));
    w3.append("timeline", String(fd.get("timeline") ?? ""));
    w3.append("message", String(fd.get("message") ?? ""));
    w3.append("botcheck", "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: w3,
      });
      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
      };
      if (!res.ok || !data.success) {
        throw new Error(data.message || `Something went wrong (HTTP ${res.status}).`);
      }
      setStatus("success");
      form.reset();
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
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Enquire</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[36px] sm:text-[44px] md:text-[68px] lg:text-[84px] font-semibold tracking-[-0.02em] leading-[0.98]">
              Let&apos;s build<br />
              <span className="serif-italic font-normal text-white/80">something worth shipping.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 border-t border-white/10 pt-10">
          {status === "success" ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              role="status"
              aria-live="polite"
              className="col-span-12 md:col-span-7 rounded-2xl border border-emerald-300/15 bg-gradient-to-br from-emerald-500/[0.06] via-white/[0.02] to-white/[0.02] p-8 sm:p-12 md:p-14 min-h-[420px] flex flex-col items-center justify-center text-center relative overflow-hidden"
            >
              {/* Soft radial glow behind the check */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(40% 50% at 50% 35%, rgba(93,213,171,0.12) 0%, transparent 70%)",
                }}
              />

              {/* Animated check medallion */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.05 }}
                className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full accent-grad grid place-items-center mb-7 shadow-[0_10px_40px_-10px_rgba(93,213,171,0.55)]"
              >
                <motion.svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sm:w-[34px] sm:h-[34px]"
                >
                  <motion.path
                    d="M5 12.5 L10 17.5 L19 7.5"
                    stroke="white"
                    strokeWidth={2.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.45, delay: 0.28, ease: "easeOut" }}
                  />
                </motion.svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="eyebrow mb-4"
              >
                Brief received
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-[30px] sm:text-[38px] md:text-[44px] font-semibold tracking-[-0.02em] leading-[1.05] max-w-[18ch]"
              >
                Thanks — your enquiry{" "}
                <span className="serif-italic font-normal text-white/80">is in.</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 max-w-md text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/65"
              >
                We&apos;ll reply within 24 hours. For anything urgent, ping us on{" "}
                <a
                  href="https://wa.me/919879003017"
                  className="text-white/85 underline underline-offset-4 decoration-white/30 hover:decoration-white/70 transition"
                >
                  WhatsApp
                </a>
                .
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 flex items-center gap-5 flex-wrap justify-center"
              >
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setError(null);
                  }}
                  className="text-[13.5px] text-white/65 hover:text-white/95 transition underline-offset-4 hover:underline"
                >
                  Send another brief →
                </button>
              </motion.div>
            </motion.div>
          ) : (
          /* Form (compact 2-col) */
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

            {status === "error" && error && (
              <p
                role="alert"
                className="mt-5 text-[13.5px] text-red-300/90 border-t border-red-300/20 pt-4"
              >
                {error}
              </p>
            )}
          </form>
          )}

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
                    <address className="mt-2 w-[48ch] max-w-full text-[12.5px] leading-relaxed text-white/50 not-italic">
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
