import { Reveal } from "../Reveal";

const VALUES = [
  {
    n: "01",
    t: "Results-Driven",
    d: "Every decision we make is measured against business outcomes. We build technology that moves metrics, not just ships features.",
  },
  {
    n: "02",
    t: "Radical Transparency",
    d: "No surprises, no hidden costs. Weekly demos, shared dashboards, and honest conversations about what's working and what isn't.",
  },
  {
    n: "03",
    t: "Relentless Innovation",
    d: "We invest meaningfully in R&D — exploring emerging tech and building reusable frameworks that benefit every project we take on.",
  },
  {
    n: "04",
    t: "People First",
    d: "Great software is built by great teams. We invest heavily in hiring, mentorship, and an environment where talented people do their best work.",
  },
];

export default function AboutValues() {
  return (
    <section className="relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-3">
          <div className="eyebrow">02 / What drives us</div>
          <div className="mt-3 serif-italic text-white/55 text-[15px] leading-snug">
            The rules we won&apos;t bend.
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <Reveal y={22}>
            <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-semibold tracking-[-0.02em] leading-[1.05] mb-12">
              Four values. <span className="serif-italic font-normal text-white/70">Every project.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i * 80} y={20}>
                <div className="manifesto-card pt-5 px-4 pb-5 -mx-4 rounded-lg border-t border-white/10 cursor-default">
                  <div className="flex items-baseline gap-3">
                    <span className="serif-italic text-[34px] text-white/50 leading-none">{v.n}.</span>
                    <span className="text-[17px] md:text-[18px] font-semibold tracking-tight">{v.t}</span>
                  </div>
                  <p className="mt-3 text-[14px] md:text-[14.5px] text-white/60 leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
