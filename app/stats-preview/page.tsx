import type { Metadata } from "next";
import { STATS } from "@/components/data";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Stats — gradient preview",
};

// Each option has a dark-theme gradient and a light-theme gradient.
// Inline <style> below maps each id to a CSS class with both rules so the
// preview reacts to the global data-theme attribute via the ThemeToggle.
const OPTIONS = [
  {
    id: 1,
    name: "Glossy Silver",
    note: "Chrome / mercury — cool, precise, 'tech' tone",
    dark:  "linear-gradient(180deg, #f8fafc 0%, #cbd5e1 25%, #6b7480 55%, #adb6c0 80%, #d8dde3 100%)",
    light: "linear-gradient(180deg, #8a98a8 0%, #475569 25%, #1e293b 55%, #5b6571 80%, #94a3b8 100%)",
  },
  {
    id: 2,
    name: "Glossy Gold",
    note: "Luxe, established, premium — pairs with the '15 years' message",
    dark:  "linear-gradient(180deg, #fff5d6 0%, #f1c956 22%, #b8843b 55%, #e0b760 80%, #f5d77a 100%)",
    light: "linear-gradient(180deg, #d4a44a 0%, #8a5d18 25%, #5a3c0f 55%, #8a6122 80%, #b88835 100%)",
  },
  {
    id: 3,
    name: "Rose Gold",
    note: "Warm copper-pink — softer than gold, distinctive",
    dark:  "linear-gradient(180deg, #fde2d4 0%, #e8a98d 22%, #b8755e 55%, #d49080 80%, #f0c8b8 100%)",
    light: "linear-gradient(180deg, #c2877b 0%, #8b4d3a 25%, #5d2f25 55%, #8b5a4a 80%, #b6786e 100%)",
  },
  {
    id: 4,
    name: "Platinum",
    note: "Cool ultra-premium — crisper sheen than silver",
    dark:  "linear-gradient(180deg, #ffffff 0%, #e2e8ee 22%, #889098 55%, #b8c0c8 80%, #e2e8ee 100%)",
    light: "linear-gradient(180deg, #6c7a89 0%, #2c3845 22%, #1a2330 55%, #3d4854 80%, #5a6878 100%)",
  },
  {
    id: 5,
    name: "Brand Gradient",
    note: "On-brand: azure → teal → shamrock → emerald sweep",
    dark:  "linear-gradient(180deg, #5392df 0%, #2dbcd2 30%, #34cb96 60%, rgba(62,193,112,0.5) 100%)",
    light: "linear-gradient(180deg, #1F5FAE 0%, #1E8FA2 30%, #1EA874 60%, rgba(30,168,116,0.7) 100%)",
  },
  {
    id: 6,
    name: "Iridescent Pearl",
    note: "Multi-hue (lavender → mint → champagne → periwinkle); memorable, design-forward",
    dark:  "linear-gradient(135deg, #d8b4f8 0%, #a6e3d4 25%, #f5d7a2 50%, #b4c8f4 75%, #d8b4f8 100%)",
    light: "linear-gradient(135deg, #8b5cf6 0%, #14b8a6 25%, #ca8a04 50%, #4338ca 75%, #8b5cf6 100%)",
  },
];

const optionCss = OPTIONS.map(
  (o) => `
.grad-${o.id} {
  background: ${o.dark};
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
html[data-theme="light"] .grad-${o.id} {
  background: ${o.light};
}
`
).join("\n");

export default function StatsPreview() {
  const [hero, ...rest] = STATS;
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <style dangerouslySetInnerHTML={{ __html: optionCss }} />

      <header className="border-b border-white/10 px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow text-white/50">Internal preview</div>
          <h1 className="mt-3 text-[34px] md:text-[44px] font-semibold tracking-[-0.02em]">
            Stats numbers — <span className="serif-italic font-normal text-white/70">gradient options</span>
          </h1>
          <p className="mt-3 text-white/55 text-[14px] max-w-2xl leading-relaxed">
            Each option renders the live Stats layout — the hero <strong>150+</strong> on the left and the
            three-stat stack on the right — at production size. Use the theme toggle (bottom-left) to flip
            between dark and light to see both versions.
          </p>
        </div>
      </header>

      {OPTIONS.map(({ id, name, note }) => (
        <div key={id} className="border-b border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline gap-4 mb-8 flex-wrap">
              <span className="eyebrow text-white/40">/ 0{id}</span>
              <h2 className="text-[20px] md:text-[24px] font-semibold tracking-[-0.01em]">{name}</h2>
              <span className="text-white/45 text-[13px]">{note}</span>
            </div>

            <div className="grid grid-cols-12 gap-x-6 gap-y-10">
              <div className="col-span-12 md:col-span-7">
                <div className="flex items-start gap-3">
                  <span className="eyebrow mt-4">a.</span>
                  <div>
                    <div className={`grad-${id} text-[120px] md:text-[180px] lg:text-[220px] font-semibold tracking-[-0.05em] leading-[0.85]`}>
                      {hero.num}
                    </div>
                    <div className="mt-3 text-[18px] text-white/85 font-medium">
                      {hero.label},
                      <span className="serif-italic text-white/60"> {hero.sub}.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 flex flex-col gap-8 pt-6 md:pt-10">
                {rest.map((s, i) => (
                  <div key={s.label} className="border-t border-white/10 pt-5">
                    <div className="flex items-baseline justify-between">
                      <span className="eyebrow">{String.fromCharCode(98 + i)}.</span>
                      <span className="text-[11px] font-mono text-white/35">0{i + 2}</span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-3">
                      <div className={`grad-${id} text-[44px] md:text-[56px] font-semibold tracking-[-0.03em] leading-none`}>
                        {s.num}
                      </div>
                      <div className="text-[13px] text-white/70 leading-snug">
                        {s.label}
                        <div className="text-[12px] text-white/45 serif-italic">{s.sub}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <ThemeToggle />
    </div>
  );
}
