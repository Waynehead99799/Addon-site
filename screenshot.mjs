import { chromium } from 'playwright';
import fs from 'fs';

const url = process.argv[2] || 'http://localhost:3010/';
const outDir = process.argv[3] || 'screenshots';
fs.mkdirSync(outDir, { recursive: true });

const specs = [
  { name: 'hero',         sel: 'section:nth-of-type(1)' },
  { name: 'logos',        sel: 'section:nth-of-type(2)' },
  { name: 'manifesto',    sel: 'section:nth-of-type(3)' },
  { name: 'services',     sel: 'section:nth-of-type(4)' },
  { name: 'stats',        sel: 'section:nth-of-type(5)' },
  { name: 'casestudies',  sel: 'section:nth-of-type(6)' },
  { name: 'about',        sel: 'section:nth-of-type(7)' },
  { name: 'process',      sel: 'section:nth-of-type(8)' },
  { name: 'testimonials', sel: 'section:nth-of-type(9)' },
  { name: 'cta',          sel: 'section:nth-of-type(10)' },
  { name: 'footer',       sel: 'footer' },
];

const browser = await chromium.launch();

async function captureTheme(theme) {
  const themeDir = `${outDir}/${theme}`;
  fs.mkdirSync(themeDir, { recursive: true });

  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  await ctx.addInitScript((t) => { try { localStorage.setItem('theme', t); } catch {} }, theme);
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.evaluate((t) => document.documentElement.setAttribute('data-theme', t), theme);
  await page.waitForTimeout(4500);

  const dims = await page.evaluate(() => ({ w: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight }));
  console.log(`[${theme}] page size`, dims);

  for (const s of specs) {
    try {
      const el = await page.$(s.sel);
      if (!el) { console.log(`[${theme}] missing`, s.name); continue; }
      const box = await el.boundingBox();
      if (!box) continue;
      await page.evaluate((y) => window.scrollTo(0, y), Math.max(0, box.y - 20));
      await page.waitForTimeout(300);
      const h = Math.min(box.height + 40, 1400);
      await page.screenshot({ path: `${themeDir}/${s.name}.png`, clip: { x: 0, y: 0, width: 1440, height: Math.min(900, h) } });
    } catch (e) { console.log(`[${theme}] err`, s.name, e.message); }
  }

  if (dims.h <= 12000) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${themeDir}/full.png`, fullPage: true });
  }
  await ctx.close();

  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  await mobile.addInitScript((t) => { try { localStorage.setItem('theme', t); } catch {} }, theme);
  const mp = await mobile.newPage();
  await mp.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await mp.evaluate((t) => document.documentElement.setAttribute('data-theme', t), theme);
  await mp.waitForTimeout(3000);
  await mp.screenshot({ path: `${themeDir}/mobile-full.png`, fullPage: true });
  await mobile.close();
}

for (const theme of ['dark', 'light']) {
  await captureTheme(theme);
}

await browser.close();
console.log('done');
