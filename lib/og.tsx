/**
 * Shared OG-card renderer used by every per-route `opengraph-image.tsx`.
 *
 * Visual language follows app/globals.css tokens (--bg, --ink, --ink-dim,
 * brand gradient g1→g2→g3, accent). Satori (the renderer behind next/og)
 * does not support background-clip:text, CSS variables, or filters, so the
 * card stays flat-coloured with radial gradients for atmosphere.
 *
 * One generic card → three callers (services, case studies, blog).
 */
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = "image/png";

export type OgCard = {
  /** Eyebrow label shown above the title — e.g. "SERVICE", "ARTICLE". */
  kind: string;
  title: string;
  subtitle?: string;
  /** Bottom-left small text — falls back to the brand tag row. */
  meta?: string;
};

const Mark = (
  <svg width="84" height="84" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="L" x1="0.5" y1="0" x2="0.2" y2="1">
        <stop offset="0%" stopColor="#4BA3E3" />
        <stop offset="40%" stopColor="#2E8BC0" />
        <stop offset="100%" stopColor="#3DBD6F" />
      </linearGradient>
      <linearGradient id="R" x1="0.5" y1="0" x2="0.8" y2="1">
        <stop offset="0%" stopColor="#1B5FAA" />
        <stop offset="40%" stopColor="#1A6F8E" />
        <stop offset="100%" stopColor="#2DA862" />
      </linearGradient>
      <linearGradient id="iL" x1="0.5" y1="0" x2="0.3" y2="1">
        <stop offset="0%" stopColor="#1B4D8A" />
        <stop offset="100%" stopColor="#1A7A5A" />
      </linearGradient>
      <linearGradient id="iR" x1="0.5" y1="0" x2="0.7" y2="1">
        <stop offset="0%" stopColor="#0E3B6E" />
        <stop offset="100%" stopColor="#166B4A" />
      </linearGradient>
    </defs>
    <path d="M256 32 L56 432 L160 432 L256 260 Z" fill="url(#L)" />
    <path d="M256 32 L456 432 L352 432 L256 260 Z" fill="url(#R)" />
    <path d="M256 260 L160 432 L220 432 L256 368 Z" fill="url(#iL)" />
    <path d="M256 260 L352 432 L292 432 L256 368 Z" fill="url(#iR)" />
    <path d="M256 32 L150 250 L200 250 L256 140 Z" fill="#ffffff" opacity="0.08" />
  </svg>
);

// Module-level font cache — fetched once, reused across hot OG requests.
let cachedFonts:
  | Array<{ name: string; data: ArrayBuffer; weight: 400 | 600; style: "normal" }>
  | null = null;

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const url =
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}` +
    `:wght@${weight}&display=swap`;
  const css = await (
    await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })
  ).text();
  // Google's CSS API returns multiple @font-face rules (one per unicode-range)
  // when no `text=` filter is set. Match the first src — that's the latin
  // subset, which covers our copy.
  const m = css.match(/src:\s*url\((https:\/\/[^)]+\.woff2)\)/);
  if (!m) throw new Error(`could not parse Google Fonts CSS for ${family} ${weight}`);
  const res = await fetch(m[1]);
  if (!res.ok) throw new Error(`font download failed: ${m[1]}`);
  return await res.arrayBuffer();
}

async function getFonts() {
  if (cachedFonts) return cachedFonts;
  const [inter600, jetMono] = await Promise.all([
    loadGoogleFont("Inter", 600),
    loadGoogleFont("JetBrains Mono", 400),
  ]);
  cachedFonts = [
    { name: "Inter", data: inter600, weight: 600, style: "normal" },
    { name: "JetMono", data: jetMono, weight: 400, style: "normal" },
  ];
  return cachedFonts;
}

export async function renderOgCard(c: OgCard) {
  const fonts = await getFonts();
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: 64,
          backgroundColor: "#0E0B0A",
          // Two radial glows in brand gradient stops — top-right shamrock/teal,
          // bottom-left azure. Gives depth without obscuring the headline.
          backgroundImage:
            "radial-gradient(60% 90% at 100% 0%, rgba(52,203,150,0.22) 0%, rgba(45,188,210,0.13) 35%, transparent 65%), radial-gradient(50% 70% at 0% 100%, rgba(83,146,223,0.10) 0%, transparent 60%)",
          color: "#F5EFE6",
          fontFamily: "Inter",
          justifyContent: "space-between",
        }}
      >
        {/* TOP — mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {Mark}
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.6 }}>
              Addon Web
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 13,
                fontFamily: "JetMono",
                textTransform: "uppercase",
                letterSpacing: 4,
                color: "#B8B0A2",
              }}
            >
              SOLUTIONS
            </div>
          </div>
        </div>

        {/* MIDDLE — eyebrow + title + subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 1080,
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "JetMono",
              fontSize: 14,
              letterSpacing: 3,
              color: "#B8B0A2",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: 99,
                backgroundColor: "#5dd5ab",
              }}
            />
            <div style={{ display: "flex" }}>{c.kind}</div>
          </div>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.04,
              fontWeight: 600,
              letterSpacing: -1.7,
              color: "#F5EFE6",
            }}
          >
            {c.title}
          </div>
          {c.subtitle ? (
            <div
              style={{
                fontSize: 24,
                lineHeight: 1.32,
                color: "#B8B0A2",
                maxWidth: 980,
              }}
            >
              {c.subtitle}
            </div>
          ) : (
            <div style={{ display: "none" }} />
          )}
        </div>

        {/* BOTTOM — hairline + meta + domain */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              height: 1,
              backgroundColor: "rgba(245,239,230,0.16)",
              marginBottom: 22,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "JetMono",
              fontSize: 15,
              color: "#B8B0A2",
              letterSpacing: 0.6,
            }}
          >
            <div style={{ display: "flex" }}>
              {c.meta ?? "AI · Software · Mobile · Cloud"}
            </div>
            <div style={{ display: "flex" }}>addonwebsolutions.com</div>
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts }
  );
}
