---
description: Clean production build + zip ready to hand to the Hostinger admin
---

You are running the Hostinger deployment build for the Addon Web Solutions site. Your job is to produce a single zip file the user can email to their domain admin who will upload it directly to `public_html/` with no further intervention.

Execute the steps below in order. **Stop and report clearly if any step fails — do not skip ahead.**

## Step 1 — Confirm the dev server is stopped

Try to remove `.next` and `out`:

```
rm -rf .next out
```

If you see `EPERM: operation not permitted, open '.next/trace'` (or any permission error on `.next`), **stop immediately** and tell the user:

> Dev server is still running. Please press Ctrl+C in the terminal running `npm run dev`, then re-run `/hostinger-build`.

Do not attempt to kill node processes yourself.

## Step 2 — Confirm the Web3Forms key is configured

Read `.env` (and `.env.local` if it exists). Confirm `NEXT_PUBLIC_WEB3FORMS_KEY` is set to a non-empty value (Web3Forms keys are 36-char UUIDs). If empty or missing, **stop** and tell the user to set it in `.env.local` before re-running. Do not print the key value to the chat.

## Step 3 — Production build

```
npm run build
```

This must complete with `✓ Generating static pages (N/N)` and produce an `out/` directory. If the build errors, surface the error and stop.

## Step 4 — Post-build verification

Verify all four of these — fail loudly if any is wrong:

1. **out/ exists** with `index.html` at the root.
2. **out/.htaccess** is present (sourced from `public/.htaccess`).
3. **Web3Forms key is embedded** in the JS bundle. Use a Node one-liner like:
   ```
   node -e "const fs=require('fs'),p=require('path');const k=fs.readFileSync('.env','utf8').match(/NEXT_PUBLIC_WEB3FORMS_KEY\s*=\s*([^\r\n]+)/)[1].trim();const d='out/_next/static/chunks';const hit=fs.readdirSync(d).some(f=>f.endsWith('.js')&&fs.readFileSync(p.join(d,f),'utf8').includes(k));console.log(hit?'KEY OK':'KEY MISSING')"
   ```
   Must print `KEY OK`.
4. **Page count** — count `*.html` files in `out/`. Should be ~90+. Sanity-check it isn't suspiciously low.

## Step 5 — Package the zip

Build the zip name as `addon-website-YYYY-MM-DD.zip` using today's date. Place it at the project root (next to `package.json`), **not inside `out/`**.

The zip must contain the **contents of `out/`** at the top level — i.e. when the admin extracts it, they get `index.html`, `_next/`, `.htaccess`, etc. directly. Not a nested `out/` folder.

Use PowerShell `Compress-Archive` (the user is on Windows). Important: `Compress-Archive` skips dotfiles by default, so include `.htaccess` explicitly. One reliable approach:

```
Get-ChildItem -Path out -Force | Compress-Archive -DestinationPath addon-website-YYYY-MM-DD.zip -Force
```

`-Force` on `Get-ChildItem` includes hidden/dot files. Verify after:

```
node -e "const z=require('child_process').execSync('powershell -Command \"Add-Type -A System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::OpenRead(\\\"addon-website-YYYY-MM-DD.zip\\\").Entries.Name\"',{encoding:'utf8'});console.log('htaccess in zip:', z.includes('.htaccess'));"
```

If `.htaccess` is missing from the zip, fix and rebuild the zip — that file is the difference between clean URLs working and visitors hitting 404s.

## Step 6 — Report

Print a final summary the user can copy-paste into the email to their domain admin. Format:

```
✅ Build ready: addon-website-YYYY-MM-DD.zip

  • <SIZE> MB
  • <N> pages
  • Web3Forms key embedded
  • .htaccess included
  • Apache rewrite rules + caching configured

Send this single zip to the domain admin along with the instructions below.
```

Then output the **deployment instructions for the domain admin** as a plain-text block (no markdown headers, since they may paste it into an email):

```
Hi — please deploy this zip to addonwebsolutions.com (or whichever domain).

1. Log in to Hostinger hPanel -> File Manager -> open public_html/
2. Delete every existing file in public_html/ (including default.php / index.html if present).
3. Upload addon-website-YYYY-MM-DD.zip.
4. Right-click the zip -> Extract. Make sure files extract directly into public_html/ (not into a subfolder named "out" or similar). If they do land in a subfolder, move everything up one level so index.html sits at the root of public_html/.
5. In File Manager Settings, enable "Show Hidden Files" and confirm .htaccess is present alongside index.html. If it isn't, the contact form pages and clean URLs will not work.
6. Visit the domain in a browser and click into a few links (e.g. /services/web-development/, /blog/) to confirm everything loads.

That's it. No SSH, no Node.js, no environment variables. Pure static files.
```

## Notes for you (the agent)

- Replace `YYYY-MM-DD` with today's actual date everywhere.
- If the user has previous zips like `addon-website-2026-05-06.zip` lying around, leave them alone — don't auto-delete; the user may want to keep them.
- Do not run `npm install` unless `node_modules` is missing.
- Do not commit anything to git.
- Be terse in the chat. The user wants a working zip, not a tutorial.
