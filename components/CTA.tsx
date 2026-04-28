"use client";
import { Icon } from "./icons";
import { Field, SelectField, TextAreaField } from "./cta-form-variants/Fields";

const OFFICES = [
  { city: "Ahmedabad", region: "India · HQ", time: "GMT+5:30" },
  { city: "Toronto", region: "Canada", time: "GMT-5" },
  { city: "Atlanta", region: "USA", time: "GMT-5" },
];

const STATS = [
  { l: "Avg. first reply", v: "< 4 hours" },
  { l: "Discovery to kickoff", v: "7 days" },
  { l: "First working build", v: "2 weeks" },
];

export default function CTA() {
  return (
    <section id="contact" className="section-reveal relative py-20 md:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Enquire</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-lite text-[11.5px] text-white/70 mb-5">
              <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
              Accepting engagements — Q3 2026 · two slots remaining
            </div>
            <h2 className="text-[44px] md:text-[68px] lg:text-[84px] font-semibold tracking-[-0.02em] leading-[0.98]">
              Let&apos;s build<br />
              <span className="serif-italic font-normal text-white/80">something worth shipping.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 border-t border-white/10 pt-10">
          {/* Form (compact 2-col) */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="col-span-12 md:col-span-7 rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@company.com" />
              <Field label="Company" placeholder="Optional" />
              <Field label="Role" placeholder="Founder · CTO · Head of product…" />
              <SelectField
                label="Engagement"
                options={[
                  "Project (3–9 months)",
                  "Audit / discovery (1–2 weeks)",
                  "Staff augmentation",
                  "Not sure yet",
                ]}
              />
              <SelectField
                label="Timeline"
                options={["This month", "Next month", "Next quarter", "Just exploring"]}
              />
              <div className="md:col-span-2">
                <TextAreaField
                  label="What are you building?"
                  placeholder="One paragraph is plenty."
                  rows={4}
                />
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-[12.5px] text-white/45 max-w-xs">
                By submitting you agree to our{" "}
                <a href="#" className="text-white/70 hover:text-white underline underline-offset-2">
                  privacy policy
                </a>
                .
              </p>
              <button type="submit" className="rounded-full glass-lite p-[2px]">
                <span className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black">
                  <span className="text-[14.5px] font-medium">Send brief</span>
                  <span className="w-7 h-7 rounded-full accent-grad grid place-items-center text-white btn-arrow">
                    <Icon.Arrow width={13} height={13} />
                  </span>
                </span>
              </button>
            </div>
          </form>

          {/* Contact sidebar */}
          <aside className="col-span-12 md:col-span-5 space-y-8 md:pl-2">
            <div>
              <div className="eyebrow mb-4">Or reach us</div>
              <a
                href="mailto:hello@addonweb.com"
                className="block text-[18px] font-medium hover:text-white/85 transition"
              >
                hello@addonweb.com
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
                    className="flex items-baseline justify-between border-b border-white/10 pb-2.5"
                  >
                    <div>
                      <div className="text-[15px] font-medium">{o.city}</div>
                      <div className="text-[12px] text-white/55 serif-italic">{o.region}</div>
                    </div>
                    <div className="text-[11.5px] font-mono text-white/45">{o.time}</div>
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
