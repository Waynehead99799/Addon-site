import { Reveal } from "../Reveal";

const STATS = [
  { num: "15+", label: "Years in business", sub: "shipping since 2011" },
  { num: "300+", label: "Projects delivered", sub: "seed to enterprise" },
  { num: "150+", label: "Clients served", sub: "across 10+ countries" },
  { num: "750K+", label: "Engineering hours", sub: "code that still runs" },
];

export default function AboutStats() {
  return (
    <section className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-3">
          <div className="eyebrow">By the numbers</div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-12 gap-x-6">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} y={20}>
                <div>
                  <div className="text-[34px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-semibold tracking-[-0.03em] leading-none num-grad">
                    {s.num}
                  </div>
                  <div className="mt-3 text-[13.5px] font-medium text-white/85">{s.label}</div>
                  <div className="mt-1 text-[12px] text-white/45 serif-italic">{s.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
