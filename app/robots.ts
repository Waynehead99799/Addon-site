import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Programmatic robots.txt. Single source of truth for which routes are
 * indexable. Internal design preview routes are blocked from crawlers.
 *
 * Output: `<SITE.url>/robots.txt` at build time.
 */
const PREVIEW_ROUTES = [
  "/theme-preview",
  "/carousel-preview",
  "/wordmark-preview",
  "/cta-preview",
  "/cta-form-preview",
  "/font-preview",
  "/images-preview",
  "/stats-preview",
  "/case-study-stats-preview",
  "/testimonial-preview",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: PREVIEW_ROUTES,
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
