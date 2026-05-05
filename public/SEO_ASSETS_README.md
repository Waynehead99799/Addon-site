# SEO assets — `/public/` reference

Files in this directory that the site's metadata + JSON-LD reference.

## Present

| File | Size | Purpose |
|---|---|---|
| `favicon.ico` | multi-res | Browser tab icon (legacy) |
| `favicon.svg` | vector | Browser tab icon (modern, theme-aware) |
| `favicon-96x96.png` | 96×96 | PNG fallback |
| `apple-touch-icon.png` | 180×180 | iOS home-screen icon |
| `web-app-manifest-192x192.png` | 192×192 | Android home-screen + PWA |
| `web-app-manifest-512x512.png` | 512×512 | Android splash + PWA + Organization JSON-LD logo |
| `site.webmanifest` | — | PWA manifest (registered in `app/layout.tsx`) |

## Still missing

| File | Size | Purpose |
|---|---|---|
| `og.png` | 1200×630 | Social share card (Facebook, LinkedIn, Slack, X) — referenced by every page's OpenGraph + Twitter card and by `LocalBusiness` JSON-LD |

Until `og.png` exists, every link shared off-site renders without a preview image. Easiest path: drop a 1200×630 PNG with the wordmark + tagline on the brand gradient backdrop.

## Refreshing the icon set

Source the wordmark/A-mark from `components/Logo.tsx` (or one of the `logo-*.png` exports already in this folder) and run through [realfavicongenerator.net](https://realfavicongenerator.net) — output filenames already match what the code expects.
