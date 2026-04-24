import { Reveal } from "../Reveal";
import { getFeatureIcon } from "../featureIcons";
import type { CaseStudyDetail as CS } from "../pagesData";

export default function CaseStudyDetail({ cs }: { cs: CS }) {
  return (
    <>
      {/* Meta + results strip */}
      <section className="relative py-14 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {cs.categories.map((c) => (
              <span
                key={c}
                className="text-[11px] font-mono uppercase tracking-[0.18em] px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/70"
              >
                {c}
              </span>
            ))}
            <span className="text-[13px] text-white/40 ml-1 serif-italic">
              for {cs.client}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
            {cs.results.map((r, i) => (
              <Reveal
                key={r.label}
                delay={i * 60}
                y={16}
                className={`${i < cs.results.length - 1 ? "border-r border-white/10" : ""}`}
              >
                <div className="p-6 md:p-8">
                  <div className="text-[36px] md:text-[48px] font-semibold tracking-[-0.03em] leading-none headline-grad">
                    {r.value}
                  </div>
                  <div className="mt-3 text-[11.5px] font-mono uppercase tracking-[0.18em] text-white/50">
                    {r.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">01 / Overview</div>
            <div className="mt-3 serif-italic text-white/55 text-[15px]">The brief.</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="text-[20px] md:text-[26px] leading-[1.4] text-white/85 font-light tracking-[-0.005em] max-w-4xl">
              {cs.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="relative py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 md:gap-10">
          <Reveal y={18} className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-5">02 / Challenge</div>
            <h3 className="text-[26px] md:text-[34px] font-semibold tracking-[-0.02em] leading-[1.1] mb-5">
              What <span className="serif-italic font-normal text-white/70">was broken</span>.
            </h3>
            <p className="text-[15px] md:text-[16px] text-white/65 leading-[1.65]">{cs.challenge}</p>
          </Reveal>
          <Reveal
            y={18}
            delay={120}
            className="col-span-12 md:col-span-6 md:border-l md:border-white/10 md:pl-10"
          >
            <div className="eyebrow mb-5 text-emerald-300/80">03 / Solution</div>
            <h3 className="text-[26px] md:text-[34px] font-semibold tracking-[-0.02em] leading-[1.1] mb-5">
              What <span className="serif-italic font-normal text-white/70">we built</span>.
            </h3>
            <p className="text-[15px] md:text-[16px] text-white/75 leading-[1.65]">{cs.solution}</p>
          </Reveal>
        </div>
      </section>

      {/* Key features */}
      <section className="relative py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-14">
            <div className="col-span-12 md:col-span-3">
              <div className="eyebrow">04 / Build</div>
              <div className="mt-3 serif-italic text-white/55 text-[15px]">What shipped.</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-[34px] md:text-[48px] font-semibold tracking-[-0.02em] leading-[1.05]">
                Features that moved{" "}
                <span className="serif-italic font-normal text-white/70">the metric</span>.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
            {cs.keyFeatures.map((f, i) => {
              const IconC = getFeatureIcon(f.icon);
              return (
                <Reveal
                  key={`${f.title}-${i}`}
                  delay={i * 40}
                  y={16}
                  className={`border-b border-white/10 ${
                    i % 4 !== 3 ? "lg:border-r" : ""
                  } ${i % 2 === 0 ? "md:border-r" : ""} lg:[&:nth-child(2)]:border-r`}
                >
                  <div className="p-6 md:p-7 h-full">
                    <div className="w-10 h-10 rounded-lg glass-lite grid place-items-center mb-5">
                      <IconC width={16} height={16} className="text-white/80" />
                    </div>
                    <h4 className="text-[16px] font-semibold tracking-tight">
                      <span className="serif-italic font-normal text-white/90">{f.title}.</span>
                    </h4>
                    <p className="mt-2.5 text-[13px] text-white/55 leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="relative py-16 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">05 / Stack</div>
            <div className="mt-3 serif-italic text-white/55 text-[15px]">Tools on the bench.</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="flex flex-wrap gap-2">
              {cs.techStack.map((t) => (
                <span
                  key={t}
                  className="text-[12px] font-mono px-3 py-1.5 rounded-full bg-white/[0.04] text-white/70 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
