"use client";
import { Icon } from "../icons";
import { Field, SelectField, TextAreaField } from "./Fields";

export default function CTAFormHeroBlock() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-md overflow-hidden">
          {/* subtle accent wash */}
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background:
                "radial-gradient(60% 50% at 90% 10%, rgba(52,203,150,0.16), transparent 65%), radial-gradient(50% 40% at 10% 90%, rgba(83,146,223,0.14), transparent 65%)",
            }}
          />
          <div className="relative p-8 md:p-12">
            <div className="eyebrow mb-5">Enquire</div>
            <h2 className="text-[36px] md:text-[52px] font-semibold tracking-[-0.02em] leading-[1.02] max-w-xl">
              Let&apos;s build{" "}
              <span className="serif-italic font-normal text-white/80">something worth shipping.</span>
            </h2>
            <p className="mt-5 text-[15px] text-white/65 max-w-md leading-[1.55]">
              Takes 60 seconds. We reply within 4 hours during work days.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Field label="Name" placeholder="Your name" />
                <Field label="Email" type="email" placeholder="you@company.com" />
              </div>
              <SelectField
                label="Engagement"
                options={["Project (3–9 months)", "Audit / discovery (1–2 weeks)", "Staff augmentation", "Not sure yet"]}
              />
              <TextAreaField
                label="What are you building?"
                placeholder="An AI assistant that reads our internal docs…"
                rows={4}
              />
              <div className="pt-2 flex items-center justify-between gap-4 flex-wrap">
                <div className="inline-flex items-center gap-2 text-[12px] text-white/55">
                  <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
                  Q3 2026 · two slots open
                </div>
                <button type="submit" className="rounded-full glass-lite p-[2px]">
                  <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black">
                    <span className="text-[14.5px] font-medium">Send brief</span>
                    <span className="w-7 h-7 rounded-full accent-grad grid place-items-center text-white btn-arrow">
                      <Icon.Arrow width={13} height={13} />
                    </span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
