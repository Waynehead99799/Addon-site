import Image from "next/image";
import { Reveal } from "../Reveal";
import { getFeatureIcon } from "../featureIcons";
import type { CaseStudyDetail as CS } from "../pagesData";

export default function CaseStudyDetail({ cs }: { cs: CS }) {
  const g = cs.gallery;
  return (
    <>
      {/* Meta + results strip */}
      <section className="section-reveal relative py-14 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-8 md:mb-10">
            {cs.categories.map((c) => (
              <span
                key={c}
                className="text-[11px] font-mono uppercase tracking-[0.18em] px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/70"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
            {cs.results.map((r, i) => {
              const isLast = i === cs.results.length - 1;
              const isMobileEvenLast = i % 2 === 1; // last in 2-col mobile row
              return (
                <Reveal
                  key={r.label}
                  delay={i * 60}
                  y={16}
                  className={`${isMobileEvenLast ? "" : "border-r border-white/10"} ${
                    !isLast ? "md:border-r md:border-white/10" : "md:border-r-0"
                  } ${i < cs.results.length - 2 ? "border-b md:border-b-0 border-white/10" : ""}`}
                >
                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold tracking-[-0.03em] leading-none num-grad">
                      {r.value}
                    </div>
                    <div className="mt-3 text-[11.5px] font-mono uppercase tracking-[0.18em] text-white/50">
                      {r.label}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hero cover image — full-width, 16:10. Recommended source: 1920×1200. */}
      {g?.hero && (
        <section className="section-reveal relative pt-2 pb-10 md:pb-14">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <Reveal y={18}>
              <figure className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02]">
                <Image
                  src={g.hero}
                  alt={g.heroCaption ?? `${cs.title} — product hero`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
                  className="object-cover"
                />
              </figure>
              {g.heroCaption && (
                <figcaption className="mt-3 text-[13px] text-white/55 max-w-3xl">
                  {g.heroCaption}
                </figcaption>
              )}
            </Reveal>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Overview</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="text-[18px] sm:text-[20px] md:text-[26px] leading-[1.45] md:leading-[1.4] text-white/85 font-light tracking-[-0.005em] max-w-4xl">
              {cs.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-12 gap-6 md:gap-10">
          <Reveal y={18} className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-5">Challenge</div>
            <h3 className="text-[26px] md:text-[34px] font-semibold tracking-[-0.02em] leading-[1.1] mb-5">
              What <span className="serif-italic font-normal text-white/70">was broken</span>.
            </h3>
            <p className="text-[15px] md:text-[16px] text-white/65 leading-[1.65]">{cs.challenge}</p>
          </Reveal>
          <Reveal
            y={18}
            delay={120}
            className="col-span-12 md:col-span-6 mt-8 md:mt-0 md:border-l md:border-white/10 md:pl-10"
          >
            <div className="eyebrow mb-5 text-emerald-300/80">Solution</div>
            <h3 className="text-[26px] md:text-[34px] font-semibold tracking-[-0.02em] leading-[1.1] mb-5">
              What <span className="serif-italic font-normal text-white/70">we built</span>.
            </h3>
            <p className="text-[15px] md:text-[16px] text-white/75 leading-[1.65]">{cs.solution}</p>
          </Reveal>
        </div>
      </section>

      {/* Web screenshots gallery — 1920×1200 sources, rendered 1-up on mobile,
          2-up on lg+. Sits between Solution and the Key-Features build out. */}
      {g?.web && g.web.length > 0 && (
        <section className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
              <div className="col-span-12 md:col-span-3">
                <div className="eyebrow">Showcase · Web</div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold tracking-[-0.02em] leading-[1.06]">
                  Built for the desk —{" "}
                  <span className="serif-italic font-normal text-white/70">
                    every day operations
                  </span>
                  .
                </h2>
              </div>
            </div>

            <div
              className={`grid gap-6 md:gap-8 ${
                g.web.length === 1 ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
              }`}
            >
              {g.web.map((src, i) => (
                <Reveal key={src} delay={i * 80} y={20}>
                  <figure className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                    <Image
                      src={src}
                      alt={
                        g.webCaptions?.[i]
                          ? `${cs.title} — ${g.webCaptions[i]}`
                          : `${cs.title} — desktop interface`
                      }
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 620px"
                      className="object-cover"
                    />
                  </figure>
                  {g.webCaptions?.[i] && (
                    <figcaption className="mt-3 text-[13px] text-white/55 max-w-2xl">
                      {g.webCaptions[i]}
                    </figcaption>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile screenshots gallery — 1080×2340 portrait sources. Renders 1
          phone on small screens, 2 on tablet, 3 on desktop. Wraps if more. */}
      {g?.mobile && g.mobile.length > 0 && (
        <section className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
              <div className="col-span-12 md:col-span-3">
                <div className="eyebrow">
                  {g?.web?.length ? "05" : "04"} / Showcase · Mobile
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold tracking-[-0.02em] leading-[1.06]">
                  Native on iOS &amp;{" "}
                  <span className="serif-italic font-normal text-white/70">Android</span>.
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {g.mobile.map((src, i) => (
                <Reveal
                  key={src}
                  delay={i * 80}
                  y={24}
                  className="w-[200px] sm:w-[240px] md:w-[260px] flex-shrink-0"
                >
                  <figure className="relative aspect-[9/19.5] rounded-[2.25rem] overflow-hidden border border-white/10 bg-white/[0.02] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
                    <Image
                      src={src}
                      alt={
                        g.mobileCaptions?.[i]
                          ? `${cs.title} — ${g.mobileCaptions[i]}`
                          : `${cs.title} — mobile interface`
                      }
                      fill
                      sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 260px"
                      className="object-cover"
                    />
                  </figure>
                  {g.mobileCaptions?.[i] && (
                    <figcaption className="mt-3 text-[12.5px] text-white/55 text-center px-1">
                      {g.mobileCaptions[i]}
                    </figcaption>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key features */}
      <section className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
            <div className="col-span-12 md:col-span-3">
              <div className="eyebrow">
                {[g?.web?.length, g?.mobile?.length].filter(Boolean).length === 2
                  ? "06"
                  : [g?.web?.length, g?.mobile?.length].filter(Boolean).length === 1
                  ? "05"
                  : "04"}{" "}
                / Build
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-[28px] sm:text-[32px] md:text-[48px] font-semibold tracking-[-0.02em] leading-[1.05]">
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
                    i % 2 === 0 ? "md:border-r md:border-white/10" : ""
                  } ${i % 4 !== 3 ? "lg:border-r lg:border-white/10" : "lg:border-r-0"}`}
                >
                  <div className="p-5 sm:p-6 md:p-7 h-full">
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
      <section className="section-reveal relative py-12 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">
              {[g?.web?.length, g?.mobile?.length].filter(Boolean).length === 2
                ? "07"
                : [g?.web?.length, g?.mobile?.length].filter(Boolean).length === 1
                ? "06"
                : "05"}{" "}
              / Stack
            </div>
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
