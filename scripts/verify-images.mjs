// Walk components/pagesData.ts for every image path that should resolve to a
// real file under public/. Prints a pass/fail summary so missing assets get
// caught before they ship as 404s in production.
//
// Usage: node scripts/verify-images.mjs [--strict]
//   --strict: exit 1 if anything is missing (CI gate)

import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const pagesData = path.join(root, "components", "pagesData.ts");
const publicDir = path.join(root, "public");

const strict = process.argv.includes("--strict");
const src = await readFile(pagesData, "utf8");

// Match anything that looks like a public-relative image path inside string
// literals. Keeps the regex narrow so we don't catch comments or types.
const RE = /["'`](\/(?:case-studies|blog|industries|services|addonai|images|logos|icons|og)\/[A-Za-z0-9._/\-]+\.(?:png|jpg|jpeg|webp|svg|gif|avif))["'`]/g;

const found = new Set();
for (const m of src.matchAll(RE)) found.add(m[1]);

const exists = async (p) => {
  try { await stat(path.join(publicDir, p)); return true; }
  catch { return false; }
};

const results = await Promise.all(
  [...found].sort().map(async (rel) => ({ rel, ok: await exists(rel) }))
);

const missing = results.filter((r) => !r.ok);
const ok = results.filter((r) => r.ok);

console.log(`\nimage references in pagesData.ts: ${results.length}\n`);
console.log(`  ok      ${ok.length}`);
console.log(`  missing ${missing.length}\n`);

if (missing.length) {
  console.log("missing files (drop into /public/<path>):");
  for (const r of missing) console.log(`  - ${r.rel}`);
  console.log("");
}

if (strict && missing.length) process.exit(1);
