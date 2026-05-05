// Render the <Logo /> SVG (components/Logo.tsx) to transparent PNGs.
// The component animates gradient stops at runtime; here we freeze to the
// base stop colors (first value in each <animate values="..." /> list) so
// the exported PNG matches the logo's neutral / non-animated state.
//
// Usage: node scripts/logo-png.mjs
// Output: public/logo-{size}.png for each size below.

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "..", "public");

const SIZES = [256, 512, 1024, 2048];

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

const html = (size) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
  html,body{margin:0;padding:0;background:transparent}
  #wrap{width:${size}px;height:${size}px}
  svg{width:100%;height:100%;display:block}
</style></head>
<body><div id="wrap">${SVG}</div></body></html>`;

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
try {
  for (const size of SIZES) {
    const ctx = await browser.newContext({
      viewport: { width: size, height: size },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();
    await page.setContent(html(size), { waitUntil: "load" });
    const el = await page.$("#wrap");
    const file = path.join(outDir, `logo-${size}.png`);
    await el.screenshot({ path: file, omitBackground: true });
    console.log(`wrote ${file}`);
    await ctx.close();
  }
} finally {
  await browser.close();
}
