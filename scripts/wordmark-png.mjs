// Render the Nav lockup (mark + "Addon Web" / "SOLUTIONS") to transparent PNGs.
// Mirrors components/Nav.tsx — same fonts (Inter semibold + JetBrains Mono),
// same proportions (logo 56px / "Addon Web" 20px / "SOLUTIONS" 10px tracked),
// scaled to the requested heights.
//
// Outputs two color variants (transparent bg in both):
//   logo-wordmark-dark-{h}.png   — white text, for dark backgrounds
//   logo-wordmark-light-{h}.png  — dark text,  for light backgrounds
//
// Usage: node scripts/wordmark-png.mjs

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "..", "public");

const HEIGHTS = [64, 128, 256, 512];

const SVG = `
<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-label="Addon Web Solutions">
  <defs>
    <linearGradient id="addonLeft" x1="0.5" y1="0" x2="0.2" y2="1">
      <stop offset="0%" stop-color="#4BA3E3"/>
      <stop offset="40%" stop-color="#2E8BC0"/>
      <stop offset="100%" stop-color="#3DBD6F"/>
    </linearGradient>
    <linearGradient id="addonRight" x1="0.5" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#1B5FAA"/>
      <stop offset="40%" stop-color="#1A6F8E"/>
      <stop offset="100%" stop-color="#2DA862"/>
    </linearGradient>
    <linearGradient id="addonInnerL" x1="0.5" y1="0" x2="0.3" y2="1">
      <stop offset="0%" stop-color="#1B4D8A"/>
      <stop offset="100%" stop-color="#1A7A5A"/>
    </linearGradient>
    <linearGradient id="addonInnerR" x1="0.5" y1="0" x2="0.7" y2="1">
      <stop offset="0%" stop-color="#0E3B6E"/>
      <stop offset="100%" stop-color="#166B4A"/>
    </linearGradient>
  </defs>
  <path d="M256 32 L56 432 L160 432 L256 260 Z" fill="url(#addonLeft)"/>
  <path d="M256 32 L456 432 L352 432 L256 260 Z" fill="url(#addonRight)"/>
  <path d="M256 260 L160 432 L220 432 L256 368 Z" fill="url(#addonInnerL)"/>
  <path d="M256 260 L352 432 L292 432 L256 368 Z" fill="url(#addonInnerR)"/>
  <path d="M256 32 L150 250 L200 250 L256 140 Z" fill="#ffffff" opacity="0.08"/>
</svg>
`.trim();

// Proportions are derived from the Nav at logoSize=56:
//   gap=12, "Addon Web" 20px, line-gap 5px, "SOLUTIONS" 10px.
const html = (h, color, dimOpacity) => {
  const k = h / 56;
  const logo = h;
  const gap = 12 * k;
  const headline = 20 * k;
  const lineGap = 5 * k;
  const sub = 10 * k;
  const padX = 4 * k; // breathing room so glyphs don't kiss the bbox
  const padY = 2 * k;
  return `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
<style>
  html,body{margin:0;padding:0;background:transparent;color:${color}}
  #wrap{
    display:inline-flex;align-items:center;gap:${gap}px;
    padding:${padY}px ${padX}px;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    -webkit-font-smoothing:antialiased;font-smooth:always;
  }
  .mark{width:${logo}px;height:${logo}px;display:block}
  .mark svg{width:100%;height:100%;display:block}
  .text{display:inline-flex;flex-direction:column;line-height:1}
  .head{
    font-weight:600;letter-spacing:-0.02em;
    font-size:${headline}px;white-space:nowrap;color:${color};
  }
  .sub{
    display:flex;justify-content:space-between;width:100%;
    margin-top:${lineGap}px;
    font-family:"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size:${sub}px;text-transform:uppercase;
    color:${color};opacity:${dimOpacity};
  }
</style></head>
<body>
  <div id="wrap">
    <div class="mark">${SVG}</div>
    <div class="text">
      <span class="head">Addon Web</span>
      <span class="sub" aria-label="solutions">
        <span>S</span><span>O</span><span>L</span><span>U</span><span>T</span><span>I</span><span>O</span><span>N</span><span>S</span>
      </span>
    </div>
  </div>
</body></html>`;
};

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
try {
  // dark-bg variant: white text, dim subtitle at 60% (matches --ink-dim feel)
  // light-bg variant: near-black text, dim subtitle at 60%
  const variants = [
    { name: "dark",  color: "#ffffff", dim: 0.6 },
    { name: "light", color: "#0a0a0a", dim: 0.55 },
  ];

  for (const v of variants) {
    for (const h of HEIGHTS) {
      const ctx = await browser.newContext({
        viewport: { width: 2000, height: Math.max(h * 2, 256) },
        deviceScaleFactor: 1,
      });
      const page = await ctx.newPage();
      await page.setContent(html(h, v.color, v.dim), { waitUntil: "load" });
      // ensure web fonts are actually loaded before screenshotting
      await page.evaluate(() => document.fonts.ready);
      const el = await page.$("#wrap");
      const file = path.join(outDir, `logo-wordmark-${v.name}-${h}.png`);
      await el.screenshot({ path: file, omitBackground: true });
      console.log(`wrote ${file}`);
      await ctx.close();
    }
  }
} finally {
  await browser.close();
}
