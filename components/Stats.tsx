import { STATS } from "./data";
import { Reveal } from "./Reveal";

export default function Stats() {
  const [hero, ...rest] = STATS;
  return (
    <section className="section-reveal relative py-20 md:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-3">
          <div className="eyebrow">Receipts</div>
        </div>

        <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-x-6 gap-y-10">
          <Reveal y={20} className="col-span-12 md:col-span-7">
            <div>
              <div className="text-[120px] md:text-[180px] lg:text-[220px] font-semibold tracking-[-0.05em] leading-[0.85] num-grad">
                {hero.num}
              </div>
              <div className="mt-3 text-[18px] text-white/85 font-medium">
                {hero.label},
                <span className="serif-italic text-white/60"> {hero.sub}.</span>
              </div>
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-8 pt-6 md:pt-10">
            {rest.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} y={18}>
                <div className="border-t border-white/10 pt-5">
                  <div className="flex items-baseline justify-end">
                    <span className="text-[11px] font-mono text-white/35">0{i + 2}</span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-3">
                    <div className="text-[44px] md:text-[56px] font-semibold tracking-[-0.03em] leading-none num-grad">{s.num}</div>
                    <div className="text-[13px] text-white/70 leading-snug">
                      {s.label}
                      <div className="text-[12px] text-white/45 serif-italic">{s.sub}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
