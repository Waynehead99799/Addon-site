"use client";
import { Icon } from "../icons";
import { Field, SelectField, TextAreaField } from "./Fields";

export default function CTAFormCompact() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="eyebrow mb-4">Enquire</div>
          <h2 className="text-[40px] md:text-[60px] font-semibold tracking-[-0.02em] leading-[1.02]">
            Send us a brief —{" "}
            <span className="serif-italic font-normal text-white/80">we&apos;ll reply in hours.</span>
          </h2>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-9"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" type="email" placeholder="you@company.com" />
            <Field label="Company" placeholder="Optional" />
            <Field label="Role" placeholder="Founder · CTO · Head of product…" />
            <SelectField
              label="Engagement"
              options={["Project (3–9 months)", "Audit / discovery (1–2 weeks)", "Staff augmentation", "Not sure yet"]}
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
            <p className="text-[12.5px] text-white/45 max-w-sm">
              By submitting you agree to our{" "}
              <a href="#" className="text-white/70 hover:text-white underline underline-offset-2">privacy policy</a>.
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
      </div>
    </section>
  );
}
