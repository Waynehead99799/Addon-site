// Render the social share card to public/og.png at 1200x630.
// Uses brand tokens from app/globals.css (dark bg, steel-azure → stormy-teal
// → shamrock gradient glow, Inter for the wordmark + headline, Spectral
// italic for the tagline). Same layout language as the rest of the site.
//
// Usage: node scripts/og-png.mjs

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "..", "public");

const W = 1200;
const H = 630;

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

const html = `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&family=Spectral:ital,wght@0,500;1,400;1,500&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#0E0B0A;
    --ink:#F5EFE6;
    --ink-dim:#B8B0A2;
    --g1:#5392df;
    --g2:#2dbcd2;
    --g3:#34cb96;
    --accent:#5dd5ab;
    --accent-2:#3ec170;
    --hairline:rgba(245,239,230,0.08);
  }
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;background:var(--bg);color:var(--ink)}
  body{
    font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  /* canvas */
  .card{
    position:relative;width:${W}px;height:${H}px;overflow:hidden;
    background:
      /* soft brand gradient glow, top-right */
      radial-gradient(60% 90% at 100% 0%,
        color-mix(in srgb, var(--g3) 22%, transparent) 0%,
        color-mix(in srgb, var(--g2) 14%, transparent) 35%,
        transparent 65%
      ),
      /* secondary glow, lower-left for depth */
      radial-gradient(50% 70% at 0% 100%,
        color-mix(in srgb, var(--g1) 10%, transparent) 0%,
        transparent 60%
      ),
      var(--bg);
  }
  /* faint horizontal hairline at the bottom for editorial structure */
  .card::after{
    content:"";position:absolute;left:64px;right:64px;bottom:64px;height:1px;
    background:linear-gradient(90deg,
      transparent 0%,
      color-mix(in srgb, var(--ink) 18%, transparent) 25%,
      color-mix(in srgb, var(--ink) 18%, transparent) 75%,
      transparent 100%);
  }
  .stage{
    position:absolute;inset:0;
    padding:64px 72px;
    display:flex;flex-direction:column;justify-content:space-between;
  }
  /* top — mark + wordmark */
  .top{display:flex;align-items:center;gap:18px}
  .mark{width:84px;height:84px;display:block;flex-shrink:0}
  .mark svg{width:100%;height:100%;display:block}
  .wm{display:flex;flex-direction:column;line-height:1}
  .wm .head{
    font-weight:600;letter-spacing:-0.02em;font-size:30px;color:var(--ink);
  }
  .wm .sub{
    display:flex;justify-content:space-between;width:100%;
    margin-top:8px;
    font-family:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
    font-size:14px;text-transform:uppercase;letter-spacing:0;
    color:var(--ink-dim);opacity:0.85;
  }

  /* center — headline */
  .body{display:flex;flex-direction:column;gap:18px;max-width:980px}
  .eyebrow{
    font-family:"JetBrains Mono",ui-monospace,monospace;
    font-size:14px;text-transform:uppercase;letter-spacing:0.18em;
    color:var(--ink-dim);
  }
  .eyebrow .dot{
    display:inline-block;width:6px;height:6px;border-radius:50%;
    background:var(--accent);vertical-align:middle;margin-right:10px;
    box-shadow:0 0 12px color-mix(in srgb, var(--accent) 60%, transparent);
  }
  .headline{
    font-weight:600;letter-spacing:-0.025em;font-size:88px;line-height:0.98;
    /* match .headline-grad in globals.css: ink → accent → accent-2 */
    background:linear-gradient(180deg,
      var(--ink) 0%,
      var(--ink) 45%,
      var(--accent) 78%,
      var(--accent-2) 100%);
    -webkit-background-clip:text;background-clip:text;color:transparent;
  }
  .headline em{
    font-family:Spectral,ui-serif,Georgia,serif;
    font-style:italic;font-weight:500;letter-spacing:-0.005em;
  }
  .lede{
    font-size:24px;line-height:1.35;color:var(--ink-dim);
    max-width:880px;
  }

  /* bottom — meta row */
  .meta{
    display:flex;align-items:center;justify-content:space-between;
    font-family:"JetBrains Mono",ui-monospace,monospace;
    font-size:15px;letter-spacing:0.04em;color:var(--ink-dim);
  }
  .tags{display:flex;gap:24px;align-items:center}
  .tag{display:inline-flex;align-items:center;gap:8px}
  .tag .bullet{
    width:5px;height:5px;border-radius:50%;
    background:color-mix(in srgb, var(--accent) 80%, transparent);
  }
  .right{opacity:0.85}
</style></head>
<body>
  <div class="card">
    <div class="stage">
      <div class="top">
        <div class="mark">${SVG}</div>
        <div class="wm">
          <span class="head">Addon Web</span>
          <span class="sub" aria-label="solutions">
            <span>S</span><span>O</span><span>L</span><span>U</span><span>T</span><span>I</span><span>O</span><span>N</span><span>S</span>
          </span>
        </div>
      </div>

      <div class="body">
        <div class="eyebrow"><span class="dot"></span>Engineers first · Since 2011</div>
        <div class="headline">Engineering your<br/><em>digital future</em>.</div>
        <div class="lede">
          AI systems, web &amp; mobile platforms, and cloud infrastructure —
          shipped by a senior team for 150+ companies across three continents.
        </div>
      </div>

      <div class="meta">
        <div class="tags">
          <span class="tag"><span class="bullet"></span>AI</span>
          <span class="tag"><span class="bullet"></span>Software</span>
          <span class="tag"><span class="bullet"></span>Mobile</span>
          <span class="tag"><span class="bullet"></span>Cloud</span>
        </div>
        <div class="right">addonwebsolutions.com</div>
      </div>
    </div>
  </div>
</body></html>`;

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
try {
  const ctx = await browser.newContext({
    viewport: { width: W, height: H },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  const file = path.join(outDir, "og.png");
  await page.screenshot({ path: file, fullPage: false, omitBackground: false });
  console.log(`wrote ${file}`);
  await ctx.close();
} finally {
  await browser.close();
}
