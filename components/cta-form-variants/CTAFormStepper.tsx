"use client";
import { useState } from "react";
import { Icon } from "../icons";
import { Field, SelectField, TextAreaField } from "./Fields";

const STEPS = [
  { n: "01", title: "About you" },
  { n: "02", title: "The work" },
  { n: "03", title: "Send it" },
];

export default function CTAFormStepper() {
  const [step, setStep] = useState(0);
  const lastStep = step === STEPS.length - 1;

  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="eyebrow mb-4">Enquire</div>
          <h2 className="text-[36px] md:text-[52px] font-semibold tracking-[-0.02em] leading-[1.05]">
            Three steps to{" "}
            <span className="serif-italic font-normal text-white/80">a real reply.</span>
          </h2>
        </div>

        {/* progress */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {STEPS.map((s, i) => {
            const active = i === step;
            const done = i < step;
            return (
              <div key={s.n} className="space-y-2">
                <div className={`h-1 rounded-full transition-all ${
                  done ? "bg-white" : active ? "bg-white" : "bg-white/15"
                }`} />
                <div className="flex items-baseline gap-2">
                  <span className={`text-[10.5px] font-mono uppercase tracking-[0.18em] ${
                    done || active ? "text-white/80" : "text-white/40"
                  }`}>{s.n}</span>
                  <span className={`text-[13px] ${done || active ? "text-white" : "text-white/45"}`}>
                    {s.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8">
          {step === 0 && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Field label="Name" placeholder="Your name" size="lg" />
                <Field label="Email" type="email" placeholder="you@company.com" size="lg" />
              </div>
              <Field label="Company" placeholder="Optional" size="lg" />
              <Field label="Role" placeholder="Founder · CTO · Head of product…" size="lg" />
            </div>
          )}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <SelectField
                label="Engagement"
                options={["Project (3–9 months)", "Audit / discovery (1–2 weeks)", "Staff augmentation", "Not sure yet"]}
                size="lg"
              />
              <SelectField
                label="Timeline"
                options={["This month", "Next month", "Next quarter", "Just exploring"]}
                size="lg"
              />
              <TextAreaField
                label="What are you building?"
                placeholder="One paragraph is plenty."
                rows={5}
              />
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <SelectField label="Budget range" options={["< $50k", "$50–150k", "$150–500k", "> $500k", "Not sure"]} size="lg" />
              <TextAreaField label="Anything else we should know?" placeholder="Optional. Existing stack, deadlines, references…" rows={4} />
              <div className="text-[13px] text-white/55 leading-relaxed">
                We reply within 4 hours during work days. By submitting you agree to our{" "}
                <a href="#" className="text-white/80 hover:text-white underline underline-offset-2">privacy policy</a>.
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="text-[13.5px] text-white/65 hover:text-white px-3 py-2 disabled:opacity-30"
          >
            ← Back
          </button>
          <button
            onClick={() => !lastStep && setStep((s) => s + 1)}
            className="rounded-full glass-lite p-[2px]"
          >
            <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black">
              <span className="text-[14px] font-medium">{lastStep ? "Send brief" : "Next"}</span>
              <span className="w-7 h-7 rounded-full accent-grad grid place-items-center text-white">
                <Icon.Arrow width={13} height={13} />
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
