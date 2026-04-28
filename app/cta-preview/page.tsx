import type { Metadata } from "next";
import CTAFullHero from "@/components/cta-variants/CTAFullHero";
import CTAInlineForm from "@/components/cta-variants/CTAInlineForm";
import CTACalendar from "@/components/cta-variants/CTACalendar";
import CTASplitImagery from "@/components/cta-variants/CTASplitImagery";
import CTACards from "@/components/cta-variants/CTACards";
import CTAConversational from "@/components/cta-variants/CTAConversational";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Enquire — layout preview",
};

const VARIANTS = [
  {
    id: 1,
    name: "Full-width hero CTA",
    note: "Single-focus, centered headline + button. No side column. Maximum emphasis on the primary action.",
    Component: CTAFullHero,
  },
  {
    id: 2,
    name: "Inline contact form",
    note: "Headline left, real form on the right (name, email, engagement type, brief). Lowest-friction for serious leads.",
    Component: CTAInlineForm,
  },
  {
    id: 3,
    name: "Calendar embed",
    note: "Day + slot picker right in the section — placeholder UI, drop in your real Calendly link when ready.",
    Component: CTACalendar,
  },
  {
    id: 4,
    name: "Split-screen with imagery",
    note: "Left = headline + button, right = floating product mockup (uses MockBrowser). Visual punch without crowding.",
    Component: CTASplitImagery,
  },
  {
    id: 5,
    name: "Card-based next steps",
    note: "Four path cards: book / brief / email / WhatsApp. Each gets its own brand accent. Shows multiple ways to engage.",
    Component: CTACards,
  },
  {
    id: 6,
    name: "Conversational single-input",
    note: "One big text field + suggestion chips, like an LLM prompt. Most on-brand for an AI agency. Memorable.",
    Component: CTAConversational,
  },
];

export default function CTAPreview() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <header className="border-b border-white/10 px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow text-white/50">Internal preview</div>
          <h1 className="mt-3 text-[34px] md:text-[44px] font-semibold tracking-[-0.02em]">
            Enquire —{" "}
            <span className="serif-italic font-normal text-white/70">layout options</span>
          </h1>
          <p className="mt-3 text-white/55 text-[14px] max-w-2xl leading-relaxed">
            Six options for the contact / CTA section. Pick a winner and we&apos;ll swap it into{" "}
            <code className="font-mono text-white/70">components/CTA.tsx</code>. Theme toggle bottom-left.
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
