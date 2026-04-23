import ThemeToggle from "@/components/ThemeToggle";

const ITEMS = [
  "Fleet telemetry running since 2016",
  "AI-driven maternal health · 150K users",
  "OBD-II diagnostics · 4.8★ App Store",
  "On-demand cleaning marketplace · 5,000 pros",
  "Multi-vendor food platform · 12 cities",
  "Edge BLE firmware in Rust",
];

type Variant = {
  id: number;
  name: string;
  note: string;
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
  textOpacity: string; // tailwind-ish (e.g. 'text-white/85')
  topRule?: boolean;
  bottomRule?: boolean;
};

const VARIANTS: Variant[] = [
  {
    id: 1,
    name: "Glass panel",
    note: "Theme-adaptive frosted panel. Safe, clean.",
    wrapperStyle: {
      background: "rgba(20,16,14,0.45)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    },
    textOpacity: "text-white/85",
  },
  {
    id: 2,
    name: "Ink slab",
    note: "Stronger contrast, nearly solid.",
    wrapperStyle: {
      background: "rgba(6,6,10,0.65)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    },
    textOpacity: "text-white/90",
  },
  {
    id: 3,
    name: "Brand gradient wash",
    note: "Subtle azure→teal→shamrock, ties to brand.",
    wrapperStyle: {
      background:
        "linear-gradient(90deg, rgba(31,95,174,0.22) 0%, rgba(30,143,162,0.18) 50%, rgba(30,168,116,0.22) 100%)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    },
    textOpacity: "text-white/90",
  },
  {
    id: 4,
    name: "Azure tint",
    note: "Single-color cool tint.",
    wrapperStyle: {
      background: "rgba(40,119,215,0.18)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    },
    textOpacity: "text-white/90",
  },
  {
    id: 5,
    name: "Shamrock tint",
    note: "Green-leaning. Echoes italic accent.",
    wrapperStyle: {
      background: "rgba(30,168,116,0.16)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    },
    textOpacity: "text-white/90",
  },
  {
    id: 6,
    name: "Ink band + accent border",
    note: "Editorial: dark slab, bright brand hairline on top.",
    wrapperStyle: {
      background: "rgba(14,11,10,0.7)",
      borderTop: "2px solid transparent",
      borderImage: "linear-gradient(90deg, #5392df, #2dbcd2, #34cb96) 1",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    },
    textOpacity: "text-white/90",
  },
  {
    id: 7,
    name: "Radial spotlight",
    note: "Center-bright, edges fade.",
    wrapperStyle: {
      background:
        "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(30,143,162,0.28) 0%, rgba(14,11,10,0.6) 100%)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    },
    textOpacity: "text-white/90",
  },
  {
    id: 8,
    name: "Glass + dual brand rings",
    note: "Frosted bar with two brand-tinted hairlines.",
    wrapperStyle: {
      background: "rgba(20,16,14,0.5)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderTop: "1px solid rgba(31,95,174,0.35)",
      borderBottom: "1px solid rgba(30,168,116,0.30)",
    },
    textOpacity: "text-white/90",
  },
  {
    id: 9,
    name: "Solid ink + inner glow",
    note: "Full contrast black strip with faint green glow.",
    wrapperStyle: {
      background: "#0E0B0A",
      boxShadow: "inset 0 0 60px rgba(30,168,116,0.20)",
      borderTop: "1px solid rgba(255,255,255,0.10)",
      borderBottom: "1px solid rgba(255,255,255,0.10)",
    },
    textOpacity: "text-white/95",
  },
  {
    id: 10,
    name: "Accent gradient full fill",
    note: "Boldest. Vivid brand strip.",
    wrapperStyle: {
      background: "linear-gradient(90deg, #1F5FAE, #1E8FA2, #1EA874)",
    },
    textOpacity: "text-white",
  },
];

function Ticker({ v }: { v: Variant }) {
  return (
    <div className="relative" style={v.wrapperStyle}>
      <div className="overflow-hidden marquee-mask py-3">
        <div className={`flex items-center gap-10 ticker w-max whitespace-nowrap ${v.textOpacity} text-[13.5px]`}>
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ITEMS.map((t, idx) => (
              <span key={`${v.id}-${k}-${idx}`} className="inline-flex items-center gap-3">
                <span className="font-medium tracking-[-0.005em]">{t}</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default function CarouselPreview() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--ink)", padding: "32px 0 120px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 32px" }}>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 8 }}>Carousel background — options</h1>
        <p style={{ opacity: 0.65, marginBottom: 24, fontSize: 14 }}>
          All 10 variants rendered with the same 6 ticker items. Tell me the number you want and I&apos;ll wire it into the actual hero. Use the floating toggle (bottom-right) to flip theme.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {VARIANTS.map((v) => (
          <section key={v.id}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 10px", display: "flex", alignItems: "baseline", gap: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>
                <span style={{ opacity: 0.45, marginRight: 8 }}>#{v.id}</span>
                {v.name}
              </div>
              <div style={{ fontSize: 12, opacity: 0.55 }}>{v.note}</div>
            </div>
            <Ticker v={v} />
          </section>
        ))}
      </div>

      <ThemeToggle />
    </div>
  );
}
