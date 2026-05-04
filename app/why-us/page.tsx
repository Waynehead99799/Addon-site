import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import CTA from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { getFeatureIcon } from "@/components/featureIcons";

export const metadata: Metadata = {
  title: "Why Addon | Differentiators",
  description: "What sets us apart: a decade of shipping, an in-house team of senior engineers, and a partnership approach across 10+ countries.",
};

const DIFFS = [
  { icon: "Trophy", t: "10+ years shipping", d: "Over a decade of complex software delivery across 10+ countries with a 98% client satisfaction rate." },
  { icon: "People", t: "35+ in-house resources", d: "A dedicated team of senior engineers, data scientists, designers, and strategists — not a freelancer roster." },
  { icon: "Globe", t: "Global delivery", d: "Distributed teams across time zones enabling continuous development cycles and round-the-clock coverage." },
  { icon: "Shield", t: "Enterprise security", d: "SOC 2-aligned processes, GDPR-ready data handling, and ISO 27001 aligned security practices from day one." },
  { icon: "Infinity", t: "End-to-end ownership", d: "From strategy and design through development, testing, deployment, and ongoing operation — we own it all." },
  { icon: "Heart", t: "Partnership, not vendor", d: "Transparent communication, shared goals, and a vested interest in your success — we stay as long as the pager keeps ringing." },
];

const STATS = [
  { v: "10+", l: "Years in business" },
  { v: "35+", l: "In-house resources" },
  { v: "10+", l: "Countries served" },
  { v: "5+", l: "Enterprise products" },
];

export default function WhyUsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Why Addon / Differentiators"
        title="The rules we won't bend."
        italicWord="won't bend."
        subtitle="Six things that separate us from a typical agency — each one load-bearing."
      />

      {/* Differentiators */}
      <section className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">01 / Differentiators</div>
            <div className="mt-3 serif-italic text-white/55 text-[15px]">What separates us.</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-8">
            {DIFFS.map((d, i) => {
              const IconC = getFeatureIcon(d.icon);
              return (
                <Reveal key={d.t} delay={i * 60} y={16}>
                  <div className="flex gap-4 sm:gap-6 pb-7 md:pb-8 border-b border-white/10">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl glass-lite grid place-items-center shrink-0">
                      <IconC width={18} height={18} className="text-white/85" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[19px] sm:text-[22px] md:text-[24px] font-semibold tracking-[-0.01em] mb-2">
                        <span className="serif-italic font-normal text-white/90">{d.t}.</span>
                      </h3>
                      <p className="text-[14px] md:text-[15px] text-white/65 leading-relaxed max-w-2xl">{d.d}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-reveal relative py-12 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-12 gap-6 md:gap-10">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 60} y={18} className="col-span-6 md:col-span-3">
              <div className="py-5 md:py-6 border-l-2 border-white/10 pl-4 md:pl-6">
                <div className="text-[34px] sm:text-[44px] md:text-[60px] font-semibold tracking-[-0.03em] leading-none headline-grad">
                  {s.v}
                </div>
                <div className="mt-3 text-[11.5px] font-mono uppercase tracking-[0.18em] text-white/50">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
