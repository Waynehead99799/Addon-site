import { PROCESS } from "./data";
import { Reveal } from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="section-reveal relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">05 / Process</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[40px] md:text-[56px] lg:text-[68px] font-semibold tracking-[-0.02em] leading-[1.02]">
              Four weeks in,<br />
              <span className="serif-italic font-normal text-white/70">something real is in production.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-0 border-t border-white/10">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 90} y={20} className="col-span-12 md:col-span-3">
              <div className={`relative p-6 md:p-8 h-full ${i < PROCESS.length - 1 ? "md:border-r" : ""} border-white/10 border-b md:border-b-0`}>
                <div className="flex items-baseline justify-between">
                  <div className="eyebrow">Phase / {p.n}</div>
                  <div className="text-[11px] font-mono text-white/30">
                    {["wk 1", "wk 2–3", "wk 4–10", "wk 11+"][i]}
                  </div>
                </div>
                <div className="mt-8">
                  <div className="text-[80px] md:text-[96px] font-semibold tracking-[-0.05em] leading-none num-grad opacity-80">
                    {p.n}
                  </div>
                  <h3 className="mt-4 text-[22px] font-semibold tracking-tight">
                    <span className="serif-italic font-normal text-white/90">{p.title}.</span>
                  </h3>
                  <p className="mt-3 text-[13.5px] text-white/55 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
