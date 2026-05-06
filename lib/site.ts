/**
 * Single source of truth for site identity. Imported by `app/layout.tsx`,
 * `app/sitemap.ts`, `app/robots.ts`, and any per-page `generateMetadata` that
 * needs canonical URLs or the site name.
 *
 * Swap `URL` to the production domain once DNS is pointed.
 */
export const SITE = {
  name: "Addon Web Solutions",
  shortName: "Addon",
  url: "https://addonwebsolutions.com",
  locale: "en_US",
  description:
    "AI systems, web & mobile platforms, and cloud infrastructure — delivered by a senior team that has shipped for 150+ companies since 2011.",
  keywords: [
    "AI development",
    "AI consulting",
    "AI agents",
    "AI chatbots",
    "generative AI",
    "RAG development",
    "machine learning",
    "computer vision",
    "custom software development",
    "mobile app development",
    "web development",
    "cloud services",
    "IoT development",
    "hire dedicated developers",
    "software development agency",
    "Next.js agency",
    "React Native agency",
    "enterprise AI",
  ],
  twitter: "@addonwebsol",
  ogImage: "/og.png", // 1200×630 — drop the file at /public/og.png
  themeColor: "#0E0C0A",
  founded: "2011",
  email: "sales@addonwebsolutions.com",
  phone: "+91 98790 03017",
  address: {
    formatted: "B-1001, Sankalp Iconic Tower, Iscon-Ambli Road, Iscon Cross Roads, Ahmedabad - 380058",
    streetAddress: "B-1001, Sankalp Iconic Tower, Iscon-Ambli Road",
    locality: "Ahmedabad",
    region: "Gujarat",
    postalCode: "380058",
    country: "IN",
  },
  social: {
    twitter: "https://x.com/addonwebsol",
    linkedin: "https://www.linkedin.com/company/addon-web-solutions/",
    github: "https://github.com/addonwebsolutions",
  },
} as const;

/** Build an absolute URL for OG/canonical tags. */
export function absUrl(path = "/"): string {
  return new URL(path, SITE.url).toString();
}
