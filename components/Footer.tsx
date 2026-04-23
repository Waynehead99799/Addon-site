import { Logo } from "./Logo";

export default function Footer() {
  const cols = [
    { t: "Services", l: ["AI Development", "Web Development", "Mobile Apps", "Cloud & DevOps", "IoT & Telematics", "Product Strategy"] },
    { t: "Company", l: ["About", "Process", "Careers", "Contact"] },
    { t: "Work", l: ["Case studies", "Industries", "Field notes"] },
    { t: "Legal", l: ["Privacy", "Terms", "Security"] },
  ];
  return (
    <footer className="relative border-t border-white/10 mt-8">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* masthead row */}
        <div className="flex items-start justify-between border-b border-white/10 pb-10 mb-12">
          <div>
            <div className="eyebrow">Colophon</div>
            <div className="mt-2 serif-italic text-white/80 text-[22px] md:text-[26px] leading-tight max-w-md">
              A custom software &amp; AI agency, set in Inter &amp; Fraunces. Written and shipped by humans since 2011.
            </div>
          </div>
          <div className="hidden md:block text-right">
            <div className="eyebrow">Vol.</div>
            <div className="mt-2 serif-italic text-[40px] leading-none text-white/80">XIV</div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <a href="#" className="flex items-center gap-2.5">
              <Logo size={36} />
              <span className="flex flex-col leading-none">
                <span className="font-semibold tracking-[-0.02em] text-lg">Addon Web</span>
                <span className="text-[9.5px] font-mono tracking-[0.28em] uppercase mt-1" style={{ color: "var(--ink-dim)" }}>
                  solutions · est. 2011
                </span>
              </span>
            </a>
            <p className="mt-5 text-[14px] text-white/55 max-w-xs leading-relaxed">
              Engineering intelligent digital products.{" "}
              <span className="serif-italic text-white/75">Shipping since 2011.</span>
            </p>
            <div className="mt-6 text-[12.5px] text-white/45 font-mono">
              hello@addonweb.com
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t} className="md:col-span-2">
              <div className="eyebrow mb-5">{c.t}</div>
              <ul className="space-y-2.5">
                {c.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-[13.5px] text-white/65 hover:text-white transition">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[12px] text-white/40 font-mono">© 2026 Addon Web Solutions · All rights reserved</div>
          <div className="flex items-center gap-4 text-[12px] text-white/45">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> All systems operational
            </span>
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">X / Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>

        <div className="mt-16 select-none">
          <div
            className="font-semibold tracking-[-0.05em] leading-[0.82] headline-grad opacity-[0.08] whitespace-nowrap"
            style={{ fontSize: "clamp(1.4rem, 7.2vw, 6.5rem)" }}
          >
            Addon Web<span className="serif-italic font-normal"> Solutions.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
