import { chromium } from 'playwright';
import fs from 'fs';

const url = 'http://localhost:3333/';
fs.mkdirSync('screenshots/nav', { recursive: true });

const browser = await chromium.launch();

const widths = [
  { name: 'mobile-380',  w: 380 },
  { name: 'mobile-480',  w: 480 },
  { name: 'tablet-768',  w: 768 },
  { name: 'tablet-900',  w: 900 },
  { name: 'laptop-1024', w: 1024 },
  { name: 'laptop-1200', w: 1200 },
  { name: 'desktop-1440',w: 1440 },
];

for (const v of widths) {
  const ctx = await browser.newContext({ viewport: { width: v.w, height: 200 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(1800);
  await page.screenshot({ path: `screenshots/nav/${v.name}.png`, clip: { x: 0, y: 0, width: v.w, height: 120 } });
  await ctx.close();
  console.log(v.name);
}
await browser.close();
