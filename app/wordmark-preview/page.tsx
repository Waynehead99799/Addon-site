import { Logo } from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

type Variant = {
  id: number;
  name: string;
  note: string;
  render: () => React.ReactNode;
};

const serif: React.CSSProperties = { fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontStyle: "italic", fontWeight: 400 };
const mono: React.CSSProperties  = { fontFamily: "var(--font-geist-mono), ui-monospace, monospace" };

const VARIANTS: Variant[] = [
  {
    id: 1, name: "Current", note: "Addon Web / SOLUTIONS (tracked caps)",
    render: () => (
      <div className="flex flex-col leading-none">
        <span className="font-semibold tracking-[-0.02em] text-[20px]">Addon Web</span>
        <span className="text-[10px] tracking-[0.28em] uppercase mt-[5px] opacity-60" style={mono}>solutions</span>
      </div>
    ),
  },
  {
    id: 2, name: "Inverted hierarchy", note: "addon (caps) / Web Solutions (bold)",
    render: () => (
      <div className="flex flex-col leading-none">
        <span className="text-[9px] tracking-[0.28em] uppercase opacity-60" style={mono}>addon</span>
        <span className="font-semibold tracking-[-0.02em] text-[20px] mt-[4px]">Web Solutions</span>
      </div>
    ),
  },
  {
    id: 3, name: "Three-line stack", note: "Addon / Web / SOLUTIONS · 2011",
    render: () => (
      <div className="flex flex-col leading-[0.95]">
        <span className="font-semibold tracking-[-0.02em] text-[18px]">Addon</span>
        <span className="font-semibold tracking-[-0.02em] text-[18px]">Web</span>
        <span className="text-[9px] tracking-[0.28em] uppercase mt-[3px] opacity-60" style={mono}>solutions · 2011</span>
      </div>
    ),
  },
  {
    id: 4, name: "Year-stamped", note: "Addon Web / SOLUTIONS · EST 2011",
    render: () => (
      <div className="flex flex-col leading-none">
        <span className="font-semibold tracking-[-0.02em] text-[20px]">Addon Web</span>
        <span className="text-[9.5px] tracking-[0.26em] uppercase mt-[5px] opacity-60" style={mono}>solutions · est 2011</span>
      </div>
    ),
  },
  {
    id: 5, name: "Role-stamped", note: "Addon Web / AI · SOFTWARE · CLOUD",
    render: () => (
      <div className="flex flex-col leading-none">
        <span className="font-semibold tracking-[-0.02em] text-[20px]">Addon Web</span>
        <span className="text-[9.5px] tracking-[0.26em] uppercase mt-[5px] opacity-60" style={mono}>ai · software · cloud</span>
      </div>
    ),
  },
  {
    id: 6, name: "Period lockup", note: "Addon Web. (bold)",
    render: () => (
      <span className="font-semibold tracking-[-0.03em] text-[24px] leading-none">Addon Web.</span>
    ),
  },
  {
    id: 7, name: "Slash divider", note: "Addon / Web",
    render: () => (
      <span className="font-semibold tracking-[-0.02em] text-[22px] leading-none">
        Addon <span className="opacity-40 mx-0.5">/</span> Web
      </span>
    ),
  },
  {
    id: 8, name: "Mid-dot", note: "Addon·Web",
    render: () => (
      <span className="font-semibold tracking-[-0.02em] text-[22px] leading-none">
        Addon<span className="opacity-50 mx-1">·</span>Web
      </span>
    ),
  },
  {
    id: 9, name: "Em-dash", note: "Addon — Web",
    render: () => (
      <span className="font-semibold tracking-[-0.02em] text-[22px] leading-none">
        Addon <span className="opacity-45 mx-1">—</span> Web
      </span>
    ),
  },
  {
    id: 10, name: "Jammed", note: "AddonWeb (one word)",
    render: () => (
      <span className="font-semibold tracking-[-0.03em] text-[24px] leading-none">AddonWeb</span>
    ),
  },
  {
    id: 11, name: "All lowercase", note: "addonweb (minimal)",
    render: () => (
      <span className="font-semibold tracking-[-0.03em] text-[23px] leading-none">addonweb</span>
    ),
  },
  {
    id: 12, name: "All caps tracked", note: "ADDON WEB (mono)",
    render: () => (
      <span className="font-semibold tracking-[0.22em] text-[15px] leading-none uppercase" style={mono}>ADDON WEB</span>
    ),
  },
  {
    id: 13, name: "Addon + italic web", note: "Bold + italic serif accent",
    render: () => (
      <span className="leading-none">
        <span className="font-semibold tracking-[-0.02em] text-[22px]">Addon</span>{" "}
        <span className="text-[22px]" style={serif}>web</span>
      </span>
    ),
  },
  {
    id: 14, name: "Addon / italic solutions", note: "Editorial split",
    render: () => (
      <div className="flex flex-col leading-[0.95]">
        <span className="font-semibold tracking-[-0.02em] text-[22px]">Addon</span>
        <span className="text-[18px] mt-[1px] opacity-85" style={serif}>solutions</span>
      </div>
    ),
  },
  {
    id: 15, name: "AI superscript", note: "Addon Web ᵃⁱ",
    render: () => (
      <span className="font-semibold tracking-[-0.02em] text-[22px] leading-none">
        Addon Web<sup className="text-[10px] ml-0.5 opacity-75" style={mono}>AI</sup>
      </span>
    ),
  },
  {
    id: 16, name: "× Addon Web", note: "Multiplier prefix",
    render: () => (
      <span className="font-semibold tracking-[-0.02em] text-[22px] leading-none">
        <span className="opacity-50 mr-1.5">×</span>Addon Web
      </span>
    ),
  },
  {
    id: 17, name: "// Addon Web", note: "Dev slash prefix",
    render: () => (
      <span className="font-semibold tracking-[-0.02em] text-[22px] leading-none">
        <span className="opacity-50 mr-1.5" style={mono}>//</span>Addon Web
      </span>
    ),
  },
  {
    id: 18, name: "⌘ Addon Web", note: "Command glyph",
    render: () => (
      <span className="font-semibold tracking-[-0.02em] text-[22px] leading-none">
        <span className="opacity-55 mr-1.5">⌘</span>Addon Web
      </span>
    ),
  },
  {
    id: 19, name: "Addon Web ↗", note: "Outbound arrow suffix",
    render: () => (
      <span className="font-semibold tracking-[-0.02em] text-[22px] leading-none">
        Addon Web<span className="opacity-55 ml-1">↗</span>
      </span>
    ),
  },
  {
    id: 20, name: "Just the period", note: "Addon Web.",
    render: () => (
      <span className="font-semibold tracking-[-0.03em] text-[22px] leading-none">
        Addon Web<span style={{ color: "var(--accent, #5dd5ab)" }}>.</span>
      </span>
    ),
  },
  {
    id: 21, name: "AI-native tag", note: "Addon Web / AI-native software",
    render: () => (
      <div className="flex flex-col leading-none">
        <span className="font-semibold tracking-[-0.02em] text-[20px]">Addon Web</span>
        <span className="text-[10.5px] tracking-[0.04em] mt-[4px] opacity-70" style={mono}>AI-native software</span>
      </div>
    ),
  },
  {
    id: 22, name: "Custom software & AI", note: "Addon Web / tag",
    render: () => (
      <div className="flex flex-col leading-none">
        <span className="font-semibold tracking-[-0.02em] text-[20px]">Addon Web</span>
        <span className="text-[10.5px] tracking-[0.02em] mt-[4px] opacity-70" style={mono}>custom software &amp; AI</span>
      </div>
    ),
  },
  {
    id: 23, name: "Tagline inline", note: "Addon Web — software that thinks",
    render: () => (
      <span className="font-semibold tracking-[-0.02em] text-[18px] leading-none">
        Addon Web<span className="opacity-55 mx-2">—</span><span style={serif}>software that thinks</span>
      </span>
    ),
  },
  {
    id: 24, name: "Still shipping", note: "Addon Web / est 2011 · still shipping",
    render: () => (
      <div className="flex flex-col leading-none">
        <span className="font-semibold tracking-[-0.02em] text-[20px]">Addon Web</span>
        <span className="text-[10px] tracking-[0.22em] uppercase mt-[5px] opacity-60" style={mono}>est 2011 · still shipping</span>
      </div>
    ),
  },
  {
    id: 25, name: "AW mark only", note: "Initials, reveal on hover",
    render: () => (
      <span className="font-semibold tracking-[-0.04em] text-[26px] leading-none">AW</span>
    ),
  },
  {
    id: 26, name: "AW · Addon Web", note: "Initials + full name",
    render: () => (
      <span className="leading-none">
        <span className="font-semibold tracking-[-0.04em] text-[24px]">AW</span>
        <span className="opacity-40 mx-2">·</span>
        <span className="text-[14px] tracking-[0.12em] uppercase opacity-70" style={mono}>Addon Web</span>
      </span>
    ),
  },
  {
    id: 27, name: "AW//S", note: "Initials + service marker",
    render: () => (
      <span className="font-semibold tracking-[-0.03em] text-[24px] leading-none">
        AW<span className="opacity-45" style={mono}>//</span>S
      </span>
    ),
  },
  {
    id: 28, name: "addon.web", note: "Lowercased + period (domain-like)",
    render: () => (
      <span className="font-semibold tracking-[-0.02em] text-[22px] leading-none">
        addon<span style={{ color: "var(--accent, #5dd5ab)" }}>.</span>web
      </span>
    ),
  },
  {
    id: 29, name: "addon·web", note: "Lowercased + mid-dot (cleanest)",
    render: () => (
      <span className="font-semibold tracking-[-0.02em] text-[22px] leading-none">
        addon<span className="opacity-55 mx-1">·</span>web
      </span>
    ),
  },
  {
    id: 30, name: "a/w", note: "Ultra-minimal",
    render: () => (
      <span className="font-semibold tracking-[-0.04em] text-[26px] leading-none">
        a<span className="opacity-45" style={mono}>/</span>w
      </span>
    ),
  },
];

export default function WordmarkPreview() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--ink)", padding: "40px 24px 120px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 8 }}>Wordmark — typography variations</h1>
        <p style={{ opacity: 0.65, marginBottom: 32, fontSize: 14 }}>
          Each card shows the logo mark paired with a different text treatment. Use the floating toggle to compare against both themes. Tell me a number and I&apos;ll wire it into the nav.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 20 }}>
          {VARIANTS.map((v) => (
            <div
              key={v.id}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--hairline, rgba(255,255,255,0.08))",
                background: "var(--paper, rgba(20,16,14,0.4))",
              }}
            >
              <div style={{ padding: "28px 24px", display: "flex", alignItems: "center", gap: 14, minHeight: 110 }}>
                <span className="logo-mount inline-flex" style={{ animation: "none" }}>
                  <Logo size={44} />
                </span>
                {v.render()}
              </div>
              <div style={{ padding: "12px 16px 14px", borderTop: "1px solid var(--hairline, rgba(255,255,255,0.06))" }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>
                  <span style={{ opacity: 0.45, marginRight: 8 }}>#{v.id}</span>
                  {v.name}
                </div>
                <div style={{ fontSize: 11.5, opacity: 0.55, marginTop: 3 }}>{v.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
}
