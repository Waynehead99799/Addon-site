import ThemeToggle from "@/components/ThemeToggle";

const OPTIONS = [
  { id: 1,  name: "Linen (current)",    top: "#EDE6D6", bot: "#E4DCC9", bloom: "rgba(30,168,116,0.10)", ink: "#0E0C0A", note: "warm, editorial, safe" },
  { id: 2,  name: "Slate paper",        top: "#EDEEF2", bot: "#DDE1E8", bloom: "rgba(60,90,200,0.12)",  ink: "#111318", note: "blueprint, engineering" },
  { id: 3,  name: "Arctic",             top: "#EEF2F5", bot: "#DCE4EA", bloom: "rgba(30,143,162,0.12)", ink: "#0E1418", note: "clean premium SaaS" },
  { id: 4,  name: "Pale porcelain",     top: "#F2F4F6", bot: "#E2E7EC", bloom: "rgba(40,119,215,0.10)", ink: "#0E1116", note: "Apple-adjacent, crisp" },
  { id: 5,  name: "Oat",                top: "#F0EBE0", bot: "#E3DBCA", bloom: "rgba(200,140,50,0.10)", ink: "#100D0A", note: "warmer than linen" },
  { id: 6,  name: "Sunbaked",           top: "#F3E9D6", bot: "#E6D6B8", bloom: "rgba(220,120,40,0.12)", ink: "#120E08", note: "golden hour" },
  { id: 7,  name: "Bone",               top: "#F4EDE3", bot: "#E6DCC8", bloom: "rgba(30,143,162,0.10)", ink: "#0E0C0A", note: "editorial stationery" },
  { id: 8,  name: "Mint paper",         top: "#E9EFE4", bot: "#D9E3D1", bloom: "rgba(30,168,116,0.18)", ink: "#0B120C", note: "fresh, ties to AI/brand" },
  { id: 9,  name: "Sky wash",           top: "#E4EDF3", bot: "#D2DFE8", bloom: "rgba(31,95,174,0.14)",  ink: "#0B1218", note: "airy, optimistic" },
  { id: 10, name: "Sage",               top: "#E8EAE1", bot: "#D5D9CC", bloom: "rgba(45,110,75,0.14)",  ink: "#0D110B", note: "calm, grown-up" },
  { id: 11, name: "Dusty rose",         top: "#F2E8E4", bot: "#E5D6CF", bloom: "rgba(200,90,80,0.12)",  ink: "#140B0A", note: "unexpected, memorable" },
  { id: 12, name: "Lavender gray",      top: "#E9E7EE", bot: "#D8D5E0", bloom: "rgba(120,90,200,0.14)", ink: "#110E15", note: "design-forward" },
  { id: 13, name: "Bone → mint",        top: "#F4EDE3", bot: "#E3EBDB", bloom: "rgba(30,168,116,0.14)", ink: "#0D100A", note: "horizon effect, premium" },
  { id: 14, name: "Porcelain → azure",  top: "#F2F4F6", bot: "#DDE7F0", bloom: "rgba(31,95,174,0.14)",  ink: "#0B0F15", note: "sky-over-page" },

  // ── Bolder / unique ────────────────────────────────────────────────
  { id: 15, name: "Seafoam",             top: "#E2EEE8", bot: "#CDDED6", bloom: "rgba(30,168,140,0.18)", ink: "#0A130F", note: "coastal, breathing" },
  { id: 16, name: "Champagne",           top: "#F4ECD8", bot: "#E4D4B3", bloom: "rgba(200,150,60,0.16)", ink: "#14100A", note: "luxe, warm gold" },
  { id: 17, name: "Iceberg",             top: "#ECF1F5", bot: "#D5DEE6", bloom: "rgba(60,130,200,0.16)", ink: "#0C1016", note: "crisp icy blue" },
  { id: 18, name: "Matcha",              top: "#EAEBD9", bot: "#D9DBBB", bloom: "rgba(140,160,40,0.14)", ink: "#121308", note: "pale yellow-green" },
  { id: 19, name: "Fog gray",            top: "#ECECEE", bot: "#DADADE", bloom: "rgba(90,100,120,0.14)", ink: "#111214", note: "neutral, minimal" },
  { id: 20, name: "Terracotta mist",     top: "#F2E2D6", bot: "#E4CAB4", bloom: "rgba(200,110,60,0.16)", ink: "#1A0F08", note: "warm, earthy" },
  { id: 21, name: "Lilac mist",          top: "#EDE6F2", bot: "#DCD2E6", bloom: "rgba(140,100,200,0.16)", ink: "#110C18", note: "soft violet, distinctive" },
  { id: 22, name: "Vanilla",             top: "#F5EFD9", bot: "#E8DEB9", bloom: "rgba(220,180,80,0.14)", ink: "#140F06", note: "soft pale yellow" },
  { id: 23, name: "Denim wash",          top: "#DDE5EC", bot: "#BFCCD8", bloom: "rgba(50,100,170,0.20)", ink: "#0A1018", note: "bold faded blue" },
  { id: 24, name: "Pistachio",           top: "#E8EEDC", bot: "#D3DCB8", bloom: "rgba(100,160,80,0.16)", ink: "#0E1208", note: "fresh pale green" },
  { id: 25, name: "Parchment",           top: "#EEE3CF", bot: "#DDCFAE", bloom: "rgba(150,110,50,0.14)", ink: "#120E06", note: "aged manuscript" },
  { id: 26, name: "Coastal gray",        top: "#E4E9EE", bot: "#CED7DF", bloom: "rgba(70,120,160,0.16)", ink: "#0C1016", note: "cool blue-gray" },
  { id: 27, name: "Butter",              top: "#F6EDD2", bot: "#EBDEAE", bloom: "rgba(230,180,60,0.16)", ink: "#14100A", note: "cheerful warm yellow" },
  { id: 28, name: "Cherry blossom",      top: "#F5E4E4", bot: "#E8C7C7", bloom: "rgba(220,100,120,0.14)", ink: "#160A0C", note: "delicate pink" },
  { id: 29, name: "Pebble",              top: "#ECE6DC", bot: "#D5CCBD", bloom: "rgba(120,100,70,0.14)",  ink: "#12100A", note: "warm neutral stone" },
  { id: 30, name: "Deep sea + mist",     top: "#E6EEF0", bot: "#C8D7DC", bloom: "rgba(20,90,130,0.20)",  ink: "#08121A", note: "misty ocean surface" },
  { id: 31, name: "Clay",                top: "#EFE2D3", bot: "#DFC5A8", bloom: "rgba(180,100,50,0.16)", ink: "#1A0F06", note: "rich warm earth" },
  { id: 32, name: "Obsidian tint",       top: "#E0E2E5", bot: "#C5C9CE", bloom: "rgba(60,70,90,0.20)",   ink: "#0A0C10", note: "graphite, serious" },
  { id: 33, name: "Peach",               top: "#F5E4D6", bot: "#E9CBA8", bloom: "rgba(240,160,100,0.14)", ink: "#180E08", note: "sunset warm" },
  { id: 34, name: "Glacier",             top: "#E5EDEF", bot: "#CADADE", bloom: "rgba(80,150,170,0.18)", ink: "#08141A", note: "crisp aqua ice" },
];

export default function ThemePreview() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--ink)", padding: "40px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 8 }}>Light theme — background options</h1>
        <p style={{ opacity: 0.65, marginBottom: 32, fontSize: 14 }}>
          Each card previews the 2-stop gradient, bloom tint (top-left radial), and how ink text reads on the surface. Use the floating toggle (bottom-right) to compare against the current active theme. Pick a number and tell me to wire it in.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {OPTIONS.map((o) => (
            <div key={o.id} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--hairline, rgba(255,255,255,0.08))", background: "var(--paper, #140F0D)" }}>
              <div
                style={{
                  height: 200,
                  position: "relative",
                  background: `radial-gradient(60% 40% at 25% 20%, ${o.bloom}, transparent 60%), linear-gradient(180deg, ${o.top} 0%, ${o.bot} 100%)`,
                  padding: 20,
                }}
              >
                <div style={{ fontFamily: "ui-serif, Georgia", fontStyle: "italic", fontSize: 22, color: o.ink, letterSpacing: "-0.01em" }}>
                  Software
                </div>
                <div style={{ fontSize: 28, fontWeight: 600, color: o.ink, letterSpacing: "-0.02em", lineHeight: 1, marginTop: 2 }}>
                  that thinks.
                </div>
                <div style={{ marginTop: 16, display: "flex", gap: 6 }}>
                  <span style={{ width: 24, height: 24, borderRadius: 6, background: o.top, border: "1px solid rgba(0,0,0,0.08)" }} />
                  <span style={{ width: 24, height: 24, borderRadius: 6, background: o.bot, border: "1px solid rgba(0,0,0,0.08)" }} />
                </div>
              </div>
              <div style={{ padding: "14px 16px 16px" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>
                    <span style={{ opacity: 0.45, marginRight: 8 }}>#{o.id}</span>
                    {o.name}
                  </div>
                </div>
                <div style={{ fontSize: 12, opacity: 0.55, marginTop: 4 }}>{o.note}</div>
                <div style={{ fontSize: 11, opacity: 0.45, marginTop: 8, fontFamily: "ui-monospace, monospace" }}>
                  {o.top.toUpperCase()} → {o.bot.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
}
