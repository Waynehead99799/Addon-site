"use client";
import ThemeToggle from "@/components/ThemeToggle";

const STATS = [
  { value: "125–250cc", label: "PRODUCT LINEUP LIVE" },
  { value: "International", label: "DISTRIBUTION COVERAGE" },
  { value: "Lifestyle-led", label: "BRAND POSITIONING" },
  { value: "Shared core", label: "CROSS-BRAND PLATFORM" },
];

// Each option: a class name suffix + how the color is applied
const OPTIONS: {
  id: string;
  name: string;
  note: string;
  darkClass: string;
  lightClass: string;
  darkStyle?: React.CSSProperties;
  lightStyle?: React.CSSProperties;
}[] = [
  {
    id: "current",
    name: "Current — headline-grad",
    note: "Ink-to-green gradient (existing). This is what's live now.",
    darkClass: "opt-current-dark",
    lightClass: "opt-current-light",
  },
  {
    id: "plain",
    name: "A — Plain white / ink",
    note: "Pure text color, no gradient. Clean and distraction-free.",
    darkClass: "opt-plain-dark",
    lightClass: "opt-plain-light",
  },
  {
    id: "accent",
    name: "B — Solid accent green",
    note: "Brand shamrock green. Draws the eye without a gradient.",
    darkClass: "opt-accent-dark",
    lightClass: "opt-accent-light",
  },
  {
    id: "ink70",
    name: "C — Dimmed ink (70%)",
    note: "Slightly pulled back — lets the label be the anchor, not the number.",
    darkClass: "opt-ink70-dark",
    lightClass: "opt-ink70-light",
  },
  {
    id: "teal",
    name: "D — Teal / accent-2",
    note: "Stormy-teal, the second brand tone. Cooler feel than the green.",
    darkClass: "opt-teal-dark",
    lightClass: "opt-teal-light",
  },
  {
    id: "azure",
    name: "E — Steel azure",
    note: "The blue from the brand palette — more technical, trustworthy.",
    darkClass: "opt-azure-dark",
    lightClass: "opt-azure-light",
  },
  {
    id: "numgrad",
    name: "F — Home page style (num-grad)",
    note: "Same as 150+ / 15 years on the home page — cool silver-white in dark, deep blue-black in light.",
    darkClass: "opt-numgrad-dark",
    lightClass: "opt-numgrad-light",
  },
];

const CSS = `
/* Current */
.opt-current-dark  { background: linear-gradient(180deg,#F5EFE6 0%,#F5EFE6 50%,#5dd5ab 80%,#3ec170 100%); -webkit-background-clip:text; background-clip:text; color:transparent; }
html[data-theme="light"] .opt-current-light { background: linear-gradient(180deg,#0B1218 0%,#0B1218 50%,#1EA874 80%,#1E8FA2 100%); -webkit-background-clip:text; background-clip:text; color:transparent; }

/* A — plain */
.opt-plain-dark  { color: #F5EFE6; }
html[data-theme="light"] .opt-plain-light { color: #0B1218; }

/* B — accent green */
.opt-accent-dark  { color: #5dd5ab; }
html[data-theme="light"] .opt-accent-light { color: #1EA874; }

/* C — dimmed 70% */
.opt-ink70-dark  { color: rgba(245,239,230,0.70); }
html[data-theme="light"] .opt-ink70-light { color: rgba(11,18,24,0.65); }

/* D — teal */
.opt-teal-dark  { color: #2dbcd2; }
html[data-theme="light"] .opt-teal-light { color: #1E8FA2; }

/* E — azure */
.opt-azure-dark  { color: #5392df; }
html[data-theme="light"] .opt-azure-light { color: #1F5FAE; }

/* F — home page num-grad (exact same values as .num-grad in globals.css) */
.opt-numgrad-dark  { color: #dde2eb; }
html[data-theme="light"] .opt-numgrad-light { color: #1f2a36; }
`;

function StatRow({
  darkClass,
  lightClass,
}: {
  darkClass: string;
  lightClass: string;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
      {STATS.map((s, i) => {
        const isLastMobileRow = i >= 2;
        const isLastDesktopCol = i === STATS.length - 1;
        return (
          <div
            key={s.label}
            className={[
              "p-5 sm:p-6 md:p-8",
              i % 2 === 0 ? "border-r border-white/10" : "",
              !isLastDesktopCol ? "md:border-r md:border-white/10" : "md:border-r-0",
              isLastMobileRow ? "" : "border-b md:border-b-0 border-white/10",
            ].join(" ")}
          >
            {/* uses both dark and light class — CSS scoping handles which one wins */}
            <div
              className={`${darkClass} ${lightClass} text-[28px] sm:text-[36px] md:text-[48px] font-semibold tracking-[-0.03em] leading-none`}
            >
              {s.value}
            </div>
            <div className="mt-3 text-[11.5px] font-mono uppercase tracking-[0.18em] text-white/50">
              {s.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function CaseStudyStatsPreview() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <header className="border-b border-white/10 px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow text-white/50">Internal preview — not indexed</div>
          <h1 className="mt-3 text-[32px] md:text-[44px] font-semibold tracking-[-0.02em]">
            Case study stats —{" "}
            <span className="serif-italic font-normal text-white/70">colour options</span>
          </h1>
          <p className="mt-3 text-white/55 text-[14px] max-w-2xl leading-relaxed">
            The current gradient applied to stat values in case study & industry detail pages, plus five flat-colour alternatives. Use the theme toggle (bottom-right) to check both themes.
          </p>
        </div>
      </header>

      <div className="divide-y divide-white/10">
        {OPTIONS.map((opt) => (
          <div key={opt.id} className="py-10 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-baseline gap-3 mb-6">
                <h2 className="text-[18px] md:text-[22px] font-semibold tracking-[-0.01em]">
                  {opt.name}
                </h2>
                <span className="text-[13px] text-white/45">{opt.note}</span>
              </div>
              <StatRow darkClass={opt.darkClass} lightClass={opt.lightClass} />
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-10 border-t border-white/10">
        <p className="max-w-7xl mx-auto text-[13px] text-white/30">
          Tell us which option (A–F) you prefer and it will be applied to all case study and industry stat sections.
        </p>
      </div>

      <ThemeToggle />
    </div>
  );
}
