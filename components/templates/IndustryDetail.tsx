import { Reveal } from "../Reveal";
import { Icon } from "../icons";
import type { Stat } from "../pagesData";

export default function IndustryDetail({
  challenges,
  solutions,
  stats,
}: {
  challenges: string[];
  solutions: string[];
  stats: Stat[];
}) {
  // Tailwind JIT needs static classnames — map counts explicitly.
  const spanByCount: Record<number, string> = {
    2: "md:col-span-6",
    3: "md:col-span-4",
    4: "md:col-span-3",
    6: "md:col-span-2",
  };
  const spanCls = spanByCount[stats.length] ?? "md:col-span-4";
  return (
    <>
      {/* STATS */}
      <section className="relative py-16 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 md:gap-10">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 60}
              y={18}
              className={`col-span-12 sm:col-span-6 ${spanCls}`}
            >
              <div className="py-6 border-l-2 border-white/10 pl-6">
                <div className="text-[44px] md:text-[56px] font-semibold tracking-[-0.03em] leading-none headline-grad">
                  {s.value}
                </div>
                <div className="mt-3 text-[12.5px] font-mono uppercase tracking-[0.18em] text-white/50">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CHALLENGES / SOLUTIONS */}
      <section className="relative py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-6">
            <Reveal y={18}>
              <div className="eyebrow mb-4">01 / Where it hurts</div>
              <h2 className="text-[32px] md:text-[44px] font-semibold tracking-[-0.02em] leading-[1.05] mb-8">
                Problems <span className="serif-italic font-normal text-white/70">we solve</span>.
              </h2>
            </Reveal>
            <ul className="space-y-4 border-t border-white/10">
              {challenges.map((c, i) => (
                <Reveal key={c} delay={i * 60} y={14}>
                  <li className="flex items-start gap-4 py-5 border-b border-white/10">
                    <span className="serif-italic text-[22px] text-white/30 leading-none mt-1">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span className="text-[15px] md:text-[16px] text-white/70 leading-relaxed">
                      {c}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-6 md:border-l md:border-white/10 md:pl-10">
            <Reveal y={18}>
              <div className="eyebrow mb-4 text-emerald-300/80">02 / How we fix it</div>
              <h2 className="text-[32px] md:text-[44px] font-semibold tracking-[-0.02em] leading-[1.05] mb-8">
                How <span className="serif-italic font-normal text-white/70">we help</span>.
              </h2>
            </Reveal>
            <ul className="space-y-4 border-t border-white/10">
              {solutions.map((s, i) => (
                <Reveal key={s} delay={i * 60} y={14}>
                  <li className="flex items-start gap-4 py-5 border-b border-white/10">
                    <span className="mt-0.5 w-5 h-5 rounded-full grid place-items-center shrink-0 bg-emerald-400/10 text-emerald-300 border border-emerald-400/30">
                      <Icon.Check width={12} height={12} />
                    </span>
                    <span className="text-[15px] md:text-[16px] text-white/75 leading-relaxed">
                      {s}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
