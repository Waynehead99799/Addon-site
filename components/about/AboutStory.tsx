import { Reveal } from "../Reveal";

export default function AboutStory() {
  return (
    <section className="relative py-14 md:py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-3">
          <div className="eyebrow">01 / Our story</div>
          <div className="mt-3 serif-italic text-white/55 text-[15px] leading-snug">
            Fifteen years, one discipline.
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <Reveal y={24}>
            <p className="text-[18px] sm:text-[22px] md:text-[30px] lg:text-[36px] leading-[1.35] md:leading-[1.25] tracking-[-0.01em] text-white/90">
              We started with a simple belief: <span className="serif-italic text-white/65">technology should solve real business problems,</span> not create new ones. What began as a small team of engineers in 2011 has grown into a 35+ strong technology partner with offices in Ahmedabad, Toronto, and Atlanta — managing products that serve 150+ clients across 10+ countries.
            </p>
          </Reveal>

          <Reveal delay={120} y={20}>
            <p className="mt-6 md:mt-8 text-[15px] md:text-[17px] text-white/60 leading-[1.7] max-w-[46rem]">
              The stack we write in has changed — React, Rust, LLMs, edge compute, things that didn&apos;t exist when we started. The discipline hasn&apos;t. Ship small, ship honest, stay past launch, answer the pager. AI is the newest tool in a kit we&apos;ve been sharpening for a decade and a half. We still care whether it actually works in production.
            </p>
          </Reveal>

          <Reveal delay={200} y={18}>
            <div className="mt-8 md:mt-10 grid grid-cols-2 md:flex md:flex-wrap items-baseline gap-x-6 sm:gap-x-10 gap-y-5 md:gap-y-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 font-mono">Founded</div>
                <div className="text-[16px] md:text-[18px] font-semibold mt-1">2011 · Ahmedabad</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 font-mono">Team</div>
                <div className="text-[16px] md:text-[18px] font-semibold mt-1">35+ engineers</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 font-mono">Offices</div>
                <div className="text-[16px] md:text-[18px] font-semibold mt-1">India · Canada · USA</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 font-mono">Certified</div>
                <div className="text-[16px] md:text-[18px] font-semibold mt-1">ISO 9001</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
