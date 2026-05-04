import { Reveal } from "../Reveal";
import { getFeatureIcon } from "../featureIcons";
import type { Feature } from "../pagesData";

export default function ServiceDetail({
  features,
  process,
  techStack,
  featuresEyebrow = "01 / Capabilities",
  featuresKicker = "What we deliver.",
  featuresTitle,
  featuresItalic,
}: {
  features: Feature[];
  process: string[];
  techStack: string[];
  featuresEyebrow?: string;
  featuresKicker?: string;
  featuresTitle: string;
  featuresItalic?: string;
}) {
  const renderHeader = () => {
    if (featuresItalic && featuresTitle.includes(featuresItalic)) {
      const idx = featuresTitle.indexOf(featuresItalic);
      return (
        <>
          {featuresTitle.slice(0, idx)}
          <span className="serif-italic font-normal text-white/70">{featuresItalic}</span>
          {featuresTitle.slice(idx + featuresItalic.length)}
        </>
      );
    }
    return featuresTitle;
  };

  return (
    <>
      {/* CAPABILITIES */}
      <section className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="eyebrow">{featuresEyebrow}</div>
              <div className="mt-3 serif-italic text-white/55 text-[15px]">{featuresKicker}</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-[28px] sm:text-[32px] md:text-[52px] lg:text-[60px] font-semibold tracking-[-0.02em] leading-[1.04]">
                {renderHeader()}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
            {features.map((f, i) => {
              const IconC = getFeatureIcon(f.icon);
              return (
                <Reveal
                  key={f.title}
                  delay={i * 50}
                  y={18}
                  className={`border-b border-white/10 ${
                    i % 3 !== 2 ? "lg:border-r" : ""
                  } ${i % 2 === 0 ? "md:border-r lg:border-r" : ""}`}
                >
                  <div className="p-6 md:p-8 h-full">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl glass-lite grid place-items-center">
                        <IconC width={18} height={18} className="text-white/80" />
                      </div>
                      <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-white/30">
                        / 0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-[19px] md:text-[20px] font-semibold tracking-[-0.01em]">
                      <span className="serif-italic font-normal text-white/85">{f.title}.</span>
                    </h3>
                    <p className="mt-3 text-[13.5px] md:text-[14px] text-white/55 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS + TECH */}
      <section className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">02 / How we deliver</div>
            <div className="mt-3 serif-italic text-white/55 text-[15px]">Work that compounds.</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {process.map((step, i) => (
                <Reveal key={step} delay={i * 60} y={16}>
                  <div className="flex items-baseline gap-4 py-5 border-b border-white/10">
                    <span className="serif-italic text-[24px] md:text-[28px] text-white/40 leading-none">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span className="text-[16px] md:text-[18px] font-medium">{step}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 md:mt-14">
              <div className="eyebrow mb-5">Tools we reach for</div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="text-[12px] font-mono px-3 py-1.5 rounded-full bg-white/[0.04] text-white/65 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
