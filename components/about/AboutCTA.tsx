import { Icon } from "../icons";
import { Reveal } from "../Reveal";

export default function AboutCTA() {
  return (
    <section className="section-reveal relative py-16 md:py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
        <Reveal y={18}>
          <div className="eyebrow mb-6">Join the journey</div>
        </Reveal>
        <Reveal delay={80} y={20}>
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[68px] font-semibold tracking-[-0.02em] leading-[1.02]">
            Let&apos;s build
            <br />
            <span className="serif-italic font-normal" style={{ color: "var(--accent)" }}>
              something real.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={180} y={16}>
          <p className="mt-5 md:mt-6 text-[15px] md:text-[18px] text-white/65 max-w-[34rem] mx-auto leading-[1.55]">
            Whether you&apos;re shipping your first product or scaling your hundredth — we&apos;d like to hear what you&apos;re building.
          </p>
        </Reveal>

        <Reveal delay={260} y={14}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/contact" className="hero-cta group relative cta-pulse rounded-full isolate inline-flex">
              <span className="hero-cta-pill inline-flex items-center gap-2.5 pl-6 pr-[6px] py-[7px] rounded-full bg-white text-black leading-none">
                <span className="hero-cta-text text-[14.5px] font-medium">Start a conversation</span>
                <span className="hero-cta-arrow w-7 h-7 rounded-full accent-grad grid place-items-center text-white btn-arrow flex-shrink-0">
                  <Icon.Arrow width={13} height={13} />
                </span>
              </span>
            </a>
            <a href="mailto:sales@addonwebsolutions.com" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-[13.5px] sm:text-[14px] px-4 py-3 break-all sm:break-normal text-center">
              <span className="serif-italic">or email</span> sales@addonwebsolutions.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
