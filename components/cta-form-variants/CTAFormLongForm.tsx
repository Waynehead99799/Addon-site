"use client";
import { Icon } from "../icons";
import { Field, SelectField, TextAreaField } from "./Fields";

export default function CTAFormLongForm() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="eyebrow mb-4">Enquire</div>
          <h2 className="text-[40px] md:text-[60px] font-semibold tracking-[-0.02em] leading-[1.05]">
            Send us a brief.
          </h2>
          <p className="mt-4 text-[16px] text-white/65 max-w-xl mx-auto leading-[1.55]">
            Take your time. Every field is optional except name and email.{" "}
            <span className="serif-italic text-white/85">A real engineer reads every brief.</span>
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-8"
        >
          <Section title="About you" n="01">
            <Field label="Name" placeholder="Your name" helper="So we know how to address the reply." size="lg" />
            <Field label="Email" type="email" placeholder="you@company.com" helper="We'll respond within 4 hours." size="lg" />
            <Field label="Company" placeholder="Optional" size="lg" />
          </Section>

          <Section title="The work" n="02">
            <SelectField
              label="Engagement type"
              options={["Project (3–9 months)", "Audit / discovery (1–2 weeks)", "Staff augmentation", "Not sure yet"]}
              helper="If you're not sure, pick the closest. We'll figure it out together."
              size="lg"
            />
            <SelectField
              label="Timeline"
              options={["This month", "Next month", "Next quarter", "Just exploring"]}
              size="lg"
            />
            <TextAreaField
              label="What are you building?"
              placeholder="An AI assistant that reads our internal docs and answers in Slack…"
              helper="One paragraph is plenty. Write it like you're explaining to a friend."
              rows={6}
            />
          </Section>

          <Section title="Anything else" n="03">
            <SelectField label="Budget range" options={["< $50k", "$50–150k", "$150–500k", "> $500k", "Not sure"]} size="lg" />
            <TextAreaField
              label="Constraints, references, dealbreakers"
              placeholder="Optional"
              helper="Existing stack, regulatory needs, pre-shortlisted vendors — anything that helps."
              rows={4}
            />
          </Section>

          <button
            type="submit"
            className="w-full rounded-full glass-lite p-[3px]"
          >
            <span className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black">
              <span className="text-[16px] font-medium">Send brief</span>
              <span className="w-8 h-8 rounded-full accent-grad grid place-items-center text-white btn-arrow">
                <Icon.Arrow width={14} height={14} />
              </span>
            </span>
          </button>
          <p className="text-center text-[12px] text-white/45">
            By submitting you agree to our{" "}
            <a href="#" className="text-white/70 hover:text-white underline underline-offset-2">privacy policy</a>.
          </p>
        </form>
      </div>
    </section>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/10 pt-8 space-y-5">
      <div className="flex items-baseline gap-3">
        <span className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-white/45">/{n}</span>
        <h3 className="text-[18px] font-semibold tracking-[-0.01em]">{title}</h3>
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}
