"use client";
import { Icon } from "../icons";

export default function CTAInlineForm() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Enquire</div>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-lite text-[11.5px] text-white/70 mb-5">
                <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
                Q3 2026 · two slots remaining
              </div>
              <h2 className="text-[40px] md:text-[56px] lg:text-[68px] font-semibold tracking-[-0.02em] leading-[1.0]">
                Let&apos;s build{" "}
                <span className="serif-italic font-normal text-white/80">something worth shipping.</span>
              </h2>
              <p className="mt-6 text-[16px] text-white/70 max-w-md leading-[1.55]">
                Tell us what you&apos;re building.{" "}
                <span className="serif-italic text-white/90">A real engineer reads every brief.</span>
              </p>
            </div>

            {/* form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="col-span-12 md:col-span-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-7 space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <Field label="Name" placeholder="Your name" />
                <Field label="Email" type="email" placeholder="you@company.com" />
              </div>
              <Field label="Company" placeholder="Optional" />
              <SelectField label="Engagement" options={["Project (3–9 months)", "Audit / discovery (1–2 weeks)", "Staff augmentation", "Not sure yet"]} />
              <TextAreaField label="What are you building?" placeholder="One paragraph is plenty." />
              <button
                type="submit"
                className="group w-full rounded-full glass-lite p-[2px]"
              >
                <span className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black">
                  <span className="text-[14.5px] font-medium">Send brief</span>
                  <span className="w-7 h-7 rounded-full accent-grad grid place-items-center text-white btn-arrow">
                    <Icon.Arrow width={13} height={13} />
                  </span>
                </span>
              </button>
              <p className="text-[11.5px] text-white/45 text-center">
                We reply within 4 hours during work days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <span className="block text-[10.5px] uppercase tracking-[0.18em] text-white/45 font-mono mb-1.5">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-[14px] text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition"
      />
    </label>
  );
}
function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-[10.5px] uppercase tracking-[0.18em] text-white/45 font-mono mb-1.5">{label}</span>
      <select className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-[14px] text-white focus:outline-none focus:border-white/30 transition">
        {options.map((o) => (
          <option key={o} className="bg-[#0e0b0a]">{o}</option>
        ))}
      </select>
    </label>
  );
}
function TextAreaField({ label, placeholder }: { label: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="block text-[10.5px] uppercase tracking-[0.18em] text-white/45 font-mono mb-1.5">{label}</span>
      <textarea
        rows={4}
        placeholder={placeholder}
        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-[14px] text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition resize-none"
      />
    </label>
  );
}
