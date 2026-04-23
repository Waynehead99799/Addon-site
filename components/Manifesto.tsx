import { Reveal } from "./Reveal";

export default function Manifesto() {
  return (
    <section className="relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-3">
          <div className="eyebrow">A / Point of view</div>
          <div className="mt-3 serif-italic text-white/55 text-[15px] leading-snug">
            On software, shipped.
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <Reveal y={24}>
            <p className="text-[24px] md:text-[34px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] text-white/90">
              &ldquo;Built with AI&rdquo; is the fun part. <span className="serif-italic text-white/65">The hard parts are still hard —</span> the latency you didn&apos;t budget, the failure mode you didn&apos;t expect, the customer who notices when the agent gets it wrong. We&apos;ve been there, for 15 years and a few hundred projects. AI is new; the discipline of making it work isn&apos;t.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
            {[
              { n: "A", t: "Transparent by default", d: "Shared repo, shared dashboards, shared costs. No hidden markup, no mystery tickets, no black-box billing." },
              { n: "B", t: "Senior team, every call", d: "Founders and principals stay on the project. No junior handoffs, no account managers between you and the engineers." },
              { n: "C", t: "Direct lines, written trails", d: "Shared Slack and docs. Every call ends with a written follow-up you can re-read, search, and audit later." },
              { n: "D", t: "Weekly cadence", d: "Monday status, Friday demo. Two-week cycles with live working software — never a 'we'll let you know.'" },
            ].map((p) => (
              <div key={p.n} className="manifesto-card pt-4 px-3 pb-4 -mx-3 rounded-lg border-t border-white/10 cursor-default">
                <div className="flex items-baseline gap-2">
                  <span className="serif-italic text-[28px] text-white/50 leading-none">{p.n}.</span>
                  <span className="text-[13px] font-medium tracking-tight">{p.t}</span>
                </div>
                <p className="mt-2 text-[12.5px] text-white/55 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
