import { chromium } from "playwright";
import fs from "fs";

const url = process.argv[2] || "http://localhost:3010/";
const outDir = process.argv[3] || "screenshots-light-audit";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
// Set theme BEFORE first paint by seeding localStorage on init.
await ctx.addInitScript(() => {
  try {
    localStorage.setItem("theme", "light");
  } catch {}
});

const page = await ctx.newPage();
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2500);

// Trigger the IntersectionObserver-based reveal by scrolling slowly through the page
const total = await page.evaluate(
  () => document.documentElement.scrollHeight,
);
const step = 600;
for (let y = 0; y < total; y += step) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(200);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(800);

await page.screenshot({ path: `${outDir}/full.png`, fullPage: true });

await browser.close();
console.log("done");
