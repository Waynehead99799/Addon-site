import type { Metadata } from "next";
import CTAFormChat from "@/components/cta-form-variants/CTAFormChat";
import CTAFormStepper from "@/components/cta-form-variants/CTAFormStepper";
import CTAFormLongForm from "@/components/cta-form-variants/CTAFormLongForm";
import CTAFormSidebar from "@/components/cta-form-variants/CTAFormSidebar";
import CTAFormCompact from "@/components/cta-form-variants/CTAFormCompact";
import CTAFormHeroBlock from "@/components/cta-form-variants/CTAFormHeroBlock";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Enquire — form layout preview",
};

const VARIANTS = [
  {
    id: 1,
    name: "Conversational chat form",
    note: "Questions appear one at a time as chat bubbles. User answers each in a single input. AI-aligned, distinctive.",
    Component: CTAFormChat,
  },
  {
    id: 2,
    name: "Stepper / wizard",
    note: "3-step form with progress bar (About you · The work · Send it). Lower perceived complexity per step.",
    Component: CTAFormStepper,
  },
  {
    id: 3,
    name: "Long-form scroll",
    note: "Full-width single column, generous spacing, every field has helper text. Reads as serious / premium.",
    Component: CTAFormLongForm,
  },
  {
    id: 4,
    name: "Form + contact sidebar",
    note: "Form on the left, right column shows offices (Ahmedabad / Toronto / Atlanta), email, WhatsApp, response stats.",
    Component: CTAFormSidebar,
  },
  {
    id: 5,
    name: "Two-column compact form",
    note: "Same fields as the inline form but in a 2-column grid with a centered hero headline. Smaller vertical footprint.",
    Component: CTAFormCompact,
  },
  {
    id: 6,
    name: "Hero-block form",
    note: "Single rounded glass card with brand-tinted accent wash. Self-contained, drops cleanly into any layout.",
    Component: CTAFormHeroBlock,
  },
];

export default function CTAFormPreview() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <header className="border-b border-white/10 px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow text-white/50">Internal preview</div>
          <h1 className="mt-3 text-[34px] md:text-[44px] font-semibold tracking-[-0.02em]">
            Enquire — <span className="serif-italic font-normal text-white/70">contact form options</span>
          </h1>
          <p className="mt-3 text-white/55 text-[14px] max-w-2xl leading-relaxed">
            Six form-driven layouts. None are wired to a backend yet — submit handlers just{" "}
            <code className="font-mono text-white/70">preventDefault()</code>. Pick a winner and we&apos;ll
            wire it into <code className="font-mono text-white/70">components/CTA.tsx</code> + your endpoint.
          </p>
        </div>
      </header>

      {VARIANTS.map(({ id, name, note, Component }) => (
        <div key={id} className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 pt-12 pb-2">
            <div className="flex items-baseline gap-4 flex-wrap">
              <span className="eyebrow text-white/40">/ 0{id}</span>
              <h2 className="text-[20px] md:text-[24px] font-semibold tracking-[-0.01em]">{name}</h2>
            </div>
            <p className="mt-2 text-white/55 text-[13px] max-w-3xl">{note}</p>
          </div>
          <Component />
        </div>
      ))}

      <ThemeToggle />
    </div>
  );
}
