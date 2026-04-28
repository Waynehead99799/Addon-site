// Reusable styled "browser window" mockup. Stands in for a real product
// screenshot — replace inner content with an <Image> when real assets exist.
type Tone = "shamrock" | "azure" | "teal" | "emerald";

const TONES: Record<Tone, { bar: string; chart: string; bg: string }> = {
  shamrock: { bar: "#34cb96", chart: "#5dd5ab", bg: "#0a1310" },
  azure:    { bar: "#5392df", chart: "#7eb1ec", bg: "#0a1018" },
  teal:     { bar: "#2dbcd2", chart: "#5cd0df", bg: "#091418" },
  emerald:  { bar: "#3ec170", chart: "#67d090", bg: "#0a1410" },
};

export default function MockBrowser({
  tone = "shamrock",
  label = "addonweb.app",
}: {
  tone?: Tone;
  label?: string;
}) {
  const t = TONES[tone];
  return (
    <div
      className="w-full h-full rounded-xl overflow-hidden border border-white/10"
      style={{ background: t.bg, boxShadow: "0 24px 80px -20px rgba(0,0,0,0.6)" }}
    >
      {/* chrome */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/8" style={{ background: "rgba(255,255,255,0.03)" }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f56" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c93f" }} />
        <span className="ml-3 px-3 py-0.5 rounded-md text-[10px] font-mono text-white/50" style={{ background: "rgba(255,255,255,0.04)" }}>
          {label}
        </span>
      </div>
      {/* body */}
      <div className="grid grid-cols-12 h-[calc(100%-32px)]">
        <div className="col-span-3 border-r border-white/5 p-3 space-y-2" style={{ background: "rgba(255,255,255,0.015)" }}>
          {[0.9, 0.7, 0.5, 0.7, 0.5, 0.6].map((w, i) => (
            <div key={i} className="h-2 rounded-sm" style={{ width: `${w * 100}%`, background: "rgba(255,255,255,0.08)" }} />
          ))}
        </div>
        <div className="col-span-9 p-4 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-12 rounded-md p-2" style={{ background: i === 0 ? `${t.bar}22` : "rgba(255,255,255,0.04)", borderLeft: i === 0 ? `2px solid ${t.bar}` : "none" }}>
                <div className="h-1.5 rounded-sm w-1/2" style={{ background: i === 0 ? t.bar : "rgba(255,255,255,0.15)" }} />
                <div className="mt-1.5 h-2 rounded-sm w-3/4" style={{ background: "rgba(255,255,255,0.10)" }} />
              </div>
            ))}
          </div>
          {/* chart */}
          <div className="h-32 rounded-md relative overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>
            <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id={`g-${tone}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={t.chart} stopOpacity="0.4" />
                  <stop offset="100%" stopColor={t.chart} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 100 C 50 80, 100 90, 150 60 S 250 30, 300 50 S 380 40, 400 30 L 400 120 L 0 120 Z" fill={`url(#g-${tone})`} />
              <path d="M0 100 C 50 80, 100 90, 150 60 S 250 30, 300 50 S 380 40, 400 30" stroke={t.chart} strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="space-y-1.5">
            {[0.85, 0.6, 0.7].map((w, i) => (
              <div key={i} className="h-2 rounded-sm" style={{ width: `${w * 100}%`, background: "rgba(255,255,255,0.06)" }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
