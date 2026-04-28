import type { Metadata } from "next";
import {
  Fraunces,
  Instrument_Serif,
  Playfair_Display,
  DM_Serif_Display,
  Newsreader,
  Cormorant_Garamond,
  EB_Garamond,
  Spectral,
} from "next/font/google";

// Each font is loaded once at module top-level (a next/font requirement).
// We use each font's `.className` directly on the italic span so it scopes
// font-family + weight + style to just that word — the rest of the title
// keeps Inter (the page's default sans).
const fraunces = Fraunces({ subsets: ["latin"], weight: "500", style: "italic" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: "500", style: "italic" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: "italic" });
const newsreader = Newsreader({ subsets: ["latin"], weight: "500", style: "italic" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "500", style: "italic" });
const ebGaramond = EB_Garamond({ subsets: ["latin"], weight: "500", style: "italic" });
const spectral = Spectral({ subsets: ["latin"], weight: "500", style: "italic" });

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Italic serif — font preview",
};

const OPTIONS = [
  { id: 0, name: "Fraunces", note: "Current — organic curves, soft terminals", font: fraunces },
  { id: 1, name: "Instrument Serif", note: "High-contrast magazine editorial; matches the historical CSS var name", font: instrumentSerif },
  { id: 2, name: "Playfair Display", note: "Classic, dramatic, decorative", font: playfair },
  { id: 3, name: "DM Serif Display", note: "Bold, graphic, very high-contrast", font: dmSerif },
  { id: 4, name: "Newsreader", note: "Calm bookish editorial — least decorative of the set", font: newsreader },
  { id: 5, name: "Cormorant Garamond", note: "Soft, romantic, lower contrast", font: cormorant },
  { id: 6, name: "EB Garamond", note: "Classic warm book serif", font: ebGaramond },
  { id: 7, name: "Spectral", note: "Editorial with a subtle tech feel", font: spectral },
];

const TITLES = [
  ["Artificial", "Intelligence"],
  ["Web", "Development"],
  ["Mobile", "Apps"],
];

export default function FontPreview() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <header className="border-b border-white/10 px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow text-white/50">Internal preview</div>
          <h1 className="mt-3 text-[34px] md:text-[44px] font-semibold tracking-[-0.02em]">
            Italic serif —{" "}
            <span className={`${fraunces.className} font-normal text-white/70`}>font options</span>
          </h1>
          <p className="mt-3 text-white/55 text-[14px] max-w-2xl leading-relaxed">
            The italic word in each Services card title (e.g. <span className={`${fraunces.className}`}>Intelligence</span>)
            currently uses Fraunces. Each option below renders the three live title pairs at card-display size
            so you can compare like-for-like. The non-italic word stays Inter so only the italic glyphs change.
          </p>
        </div>
      </header>

      {OPTIONS.map(({ id, name, note, font }) => (
        <div key={id} className="border-b border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline gap-4 mb-8 flex-wrap">
              <span className="eyebrow text-white/40">/ 0{id}</span>
              <h2 className="text-[20px] md:text-[24px] font-semibold tracking-[-0.01em]">{name}</h2>
              <span className="text-white/45 text-[13px]">{note}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TITLES.map(([first, italic]) => (
                <div
                  key={italic}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-7 flex items-end min-h-[180px]"
                >
                  <h3 className="text-[32px] md:text-[40px] font-semibold tracking-[-0.01em] leading-[1.02]">
                    {first}{" "}
                    <span className={font.className}>{italic}</span>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
