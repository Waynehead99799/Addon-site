import { Icon } from "../icons";

export default function CTAFullHero() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="eyebrow mb-6">Enquire</div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-lite text-[11.5px] text-white/70 mb-8">
          <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
          Accepting engagements — Q3 2026 · two slots remaining
        </div>
        <h2 className="text-[48px] md:text-[80px] lg:text-[104px] font-semibold tracking-[-0.02em] leading-[0.96] max-w-5xl mx-auto">
          Let&apos;s build{" "}
          <span className="serif-italic font-normal text-white/80">something worth shipping.</span>
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] text-white/70 max-w-2xl mx-auto leading-[1.6]">
          Tell us what you&apos;re building. We&apos;ll tell you how we&apos;d ship it.{" "}
          <span className="serif-italic text-white/90">Fifteen minutes, no decks, a real engineer on the call.</span>
        </p>
        <div className="mt-10 inline-flex items-center gap-4 flex-wrap justify-center">
          <a href="#" className="group relative cta-pulse rounded-full isolate">
            <div className="relative rounded-full glass-lite p-[3px]">
              <div className="flex items-center gap-2 pl-6 pr-2 py-2.5 rounded-full bg-white text-black">
                <span className="text-[15px] font-medium">Book a 15-min call</span>
                <span className="w-8 h-8 rounded-full accent-grad grid place-items-center text-white btn-arrow">
                  <Icon.Arrow width={14} height={14} />
                </span>
              </div>
            </div>
          </a>
          <a href="mailto:sales@addonwebsolutions.com" className="text-[14px] text-white/65 hover:text-white px-4 py-2.5">
            or <span className="serif-italic text-white/85">sales@addonwebsolutions.com</span> →
          </a>
        </div>
      </div>
    </section>
  );
}
