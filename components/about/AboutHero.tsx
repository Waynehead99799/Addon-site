import { Reveal } from "../Reveal";

export default function AboutHero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal y={14}>
          <div className="eyebrow mb-6">About / Who we are</div>
        </Reveal>
        <Reveal delay={80} y={20}>
          <h1 className="font-semibold tracking-[-0.02em] leading-[0.95] text-[48px] sm:text-[68px] md:text-[84px] lg:text-[96px]">
            <span className="block">Engineers first.</span>
            <span className="block">
              <span className="serif-italic font-normal" style={{ color: "var(--accent)" }}>Since</span>{" "}
              <span className="headline-sweep">2011.</span>
            </span>
          </h1>
        </Reveal>
        <Reveal delay={180} y={18}>
          <p className="mt-8 text-[16px] md:text-[18px] text-white/70 max-w-[40rem] leading-[1.55] mx-auto">
            A custom software &amp; AI agency built by engineers who&apos;ve shipped for founders, operators, and enterprises across three continents — through three framework wars and two hype cycles.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
