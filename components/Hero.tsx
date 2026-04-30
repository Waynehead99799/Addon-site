import WaveMesh from "./WaveMesh";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100svh] flex flex-col">
      {/* Base wash + vignette — paints first so the canvas sits above it */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 hero-vignette" />
        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{ background: "linear-gradient(180deg, transparent, var(--bg))" }}
        />
      </div>
      {/* Background animation — swap component to preview options */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <WaveMesh />
      </div>
      {/* Noise grain on top of everything but under content */}
      <div className="absolute inset-0 noise opacity-[0.3] pointer-events-none z-[2]" />

      {/* centered display — flex-1 vertically centers the content within the viewport */}
      <div className="relative z-20 flex-1 flex items-center justify-center pt-24 md:pt-32 pb-8">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
        <Reveal delay={0} y={14}>
          <div className="inline-flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full hero-pill backdrop-blur-md">
            <span className="relative w-6 h-6 rounded-md accent-grad grid place-items-center glow-brand">
              <Icon.Zap width={12} height={12} className="text-black" />
            </span>
            <span className="text-[12.5px] tracking-wide text-white/85">
              Engineers first. Since 2011.            
              </span>
          </div>
        </Reveal>

        <Reveal delay={80} y={24}>
          <h1 className="mt-7 md:mt-10 font-semibold tracking-[-0.02em] leading-[0.9] text-[44px] sm:text-[64px] md:text-[88px] lg:text-[112px]">
            <span className="block">Software</span>
            <span className="block">
              <span className="serif-italic font-normal tracking-[-0.02em]" style={{ color: "var(--accent)" }}>that</span>{" "}
              <span className="headline-sweep">thinks.</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={180} y={18}>
          <p className="mt-5 md:mt-8 text-[15px] md:text-[18px] text-white/70 max-w-[36rem] leading-[1.55] mx-auto">
            Custom software with AI at the core — built to run, built to last.
          </p>
        </Reveal>

        <Reveal delay={260} y={16} className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#contact" className="hero-cta group relative cta-pulse rounded-full isolate inline-flex">
            <span className="hero-cta-pill inline-flex items-center gap-2.5 pl-6 pr-[6px] py-[7px] rounded-full bg-white text-black leading-none">
              <span className="hero-cta-text text-[14.5px] font-medium">Book a 15-min call</span>
              <span className="hero-cta-arrow w-7 h-7 rounded-full accent-grad grid place-items-center text-white btn-arrow flex-shrink-0">
                <Icon.Arrow width={13} height={13} />
              </span>
            </span>
          </a>
          <a href="#work" className="group inline-flex items-center gap-2 text-white/70 hover:text-white text-[14px] px-4 py-3">
            <span className="w-7 h-7 rounded-full border border-white/20 grid place-items-center">
              <Icon.Play width={10} height={10} className="translate-x-[1px]" />
            </span>
            See a decade of work
          </a>
        </Reveal>
        </div>
      </div>

      {/* bottom ticker — brand gradient wash, pinned to the foot of the hero */}
      <div className="relative z-20 ticker-band">
        <div className="overflow-hidden marquee-mask py-3">
          <div className="flex items-center gap-6 md:gap-10 ticker w-max whitespace-nowrap text-white/90 text-[12px] md:text-[13.5px]">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              [
                "Fleet telemetry running since 2016",
                "AI-driven maternal health · 150K users",
                "OBD-II diagnostics · 4.8★ App Store",
                "On-demand cleaning marketplace · 5,000 pros",
                "Multi-vendor food platform · 12 cities",
                "Edge BLE firmware in Rust",
              ].map((t, idx) => (
                <span key={`${k}-${idx}`} className="inline-flex items-center gap-3">
                  <span className="font-medium tracking-[-0.005em]">{t}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
