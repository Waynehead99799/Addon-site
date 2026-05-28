import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import {
  AI_SERVICES,
  SERVICES_DATA,
  INDUSTRIES,
  CASE_STUDIES_DATA,
  ARTICLES,
} from "@/components/pagesData";

/**
 * Programmatic sitemap. Pulled from `pagesData.ts` so adding or removing a
 * service/industry/case-study/article slug auto-publishes the right URLs.
 *
 * Output: `<SITE.url>/sitemap.xml` at build time.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${SITE.url}${path}`;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"),                               changeFrequency: "monthly",  priority: 1.0,  lastModified: now },
    { url: url("/about"),                          changeFrequency: "yearly",   priority: 0.7,  lastModified: now },
    { url: url("/why-us"),                         changeFrequency: "yearly",   priority: 0.7,  lastModified: now },
    { url: url("/contact"),                        changeFrequency: "yearly",   priority: 0.6,  lastModified: now },
    { url: url("/hire-dedicated-developers"),      changeFrequency: "monthly",  priority: 0.8,  lastModified: now },
    { url: url("/services"),                       changeFrequency: "monthly",  priority: 0.9,  lastModified: now },
    { url: url("/addonai"),                        changeFrequency: "monthly",  priority: 0.9,  lastModified: now },
    { url: url("/case-studies"),                   changeFrequency: "weekly",   priority: 0.9,  lastModified: now },
    { url: url("/blog"),                           changeFrequency: "weekly",   priority: 0.8,  lastModified: now },
    { url: url("/industries"),                     changeFrequency: "monthly",  priority: 0.7,  lastModified: now },
    { url: url("/privacy"),                        changeFrequency: "yearly",   priority: 0.5,  lastModified: now },
    { url: url("/terms"),                          changeFrequency: "yearly",   priority: 0.5,  lastModified: now },
  ];

  const aiServiceRoutes: MetadataRoute.Sitemap = AI_SERVICES.map((s) => ({
    url: url(`/addonai/${s.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: now,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((s) => ({
    url: url(`/services/${s.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: now,
  }));

  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: url(`/industries/${i.slug}`),
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: now,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = CASE_STUDIES_DATA.map((c) => ({
    url: url(`/case-studies/${c.slug}`),
    changeFrequency: "monthly",
    priority: 0.85,
    lastModified: now,
  }));

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: url(`/blog/${a.slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: a.isoDate ? new Date(a.isoDate) : a.date ? new Date(a.date) : now,
  }));

  return [
    ...staticRoutes,
    ...aiServiceRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...caseStudyRoutes,
    ...articleRoutes,
  ];
}
