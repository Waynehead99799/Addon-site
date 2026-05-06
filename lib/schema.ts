/**
 * Schema.org JSON-LD builders. Every helper returns a plain object ready to
 * pass into `<JsonLd data={...} />`. Output validates against
 * https://validator.schema.org and Google's Rich Results test.
 *
 * Conventions:
 *  - All URLs absolute (use `absUrl`)
 *  - `@id` set to the canonical page URL so cross-references stay clean
 *  - Optional fields stripped if empty (Google ignores nulls but the
 *    validator complains)
 */
import { SITE, absUrl } from "./site";

type Crumb = { label: string; href: string };

/** Site-wide Organization. Renders once in the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: absUrl("/web-app-manifest-512x512.png"),
    foundingDate: SITE.founded,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    sameAs: [
      SITE.social.linkedin,
      SITE.social.twitter,
      SITE.social.github,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      telephone: SITE.phone,
      availableLanguage: ["English"],
      areaServed: ["IN", "US", "CA", "GB", "AU", "AE"],
    },
  };
}

/** Site-wide WebSite — gives Google the site search box capability later. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}#organization` },
    inLanguage: "en-US",
  };
}

/** Local-business specifically for the Ahmedabad HQ. Helps with map listings. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}#localbusiness`,
    name: SITE.name,
    image: absUrl("/og.png"),
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
  };
}

/** Generic WebPage wrapper — links a page to the site Organization. */
export function webPageSchema(opts: {
  path: string;
  title: string;
  description: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absUrl(opts.path),
    url: absUrl(opts.path),
    name: opts.title,
    description: opts.description,
    image: opts.image ? absUrl(opts.image) : absUrl(SITE.ogImage),
    isPartOf: { "@id": `${SITE.url}#website` },
    about: { "@id": `${SITE.url}#organization` },
  };
}

/** Service offering — used on /services/<slug> and /addonai/<slug>. */
export function serviceSchema(opts: {
  path: string;
  title: string;
  description: string;
  serviceType?: string;
  areaServed?: string[];
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absUrl(opts.path),
    name: opts.title,
    description: opts.description,
    serviceType: opts.serviceType ?? opts.title,
    url: absUrl(opts.path),
    image: opts.image ? absUrl(opts.image) : absUrl(SITE.ogImage),
    provider: { "@id": `${SITE.url}#organization` },
    areaServed: opts.areaServed ?? ["IN", "US", "CA", "GB", "AU", "AE"],
  };
}

/** Blog article — used on /blog/<slug>. */
export function articleSchema(opts: {
  path: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
  keywords?: string[];
  wordCount?: number;
  readTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absUrl(opts.path),
    headline: opts.title,
    description: opts.description,
    image: opts.image ? absUrl(opts.image) : absUrl(SITE.ogImage),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      "@type": "Organization",
      name: opts.authorName ?? SITE.name,
      url: SITE.url,
    },
    publisher: { "@id": `${SITE.url}#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absUrl(opts.path),
    },
    keywords: opts.keywords?.join(", "),
    timeRequired: opts.readTime,
    wordCount: opts.wordCount,
    inLanguage: "en-US",
  };
}

/** Case study — modelled as `Article` (Google's preferred type for narrative
 *  pages), with `creativeWorkStatus: "Published"` to mark it as a real
 *  delivery rather than editorial speculation. */
export function caseStudySchema(opts: {
  path: string;
  title: string;
  description: string;
  image?: string;
  industry?: string;
  client?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absUrl(opts.path),
    headline: opts.title,
    description: opts.description,
    image: opts.image ? absUrl(opts.image) : absUrl(SITE.ogImage),
    author: { "@id": `${SITE.url}#organization` },
    publisher: { "@id": `${SITE.url}#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": absUrl(opts.path) },
    about: opts.industry,
    creativeWorkStatus: "Published",
    inLanguage: "en-US",
  };
}

/** Breadcrumb trail. Pass the same array `PageHero` already takes. */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: absUrl(c.href),
    })),
  };
}

/** FAQ block. Pass plain text Q/A pairs; emits a `FAQPage` rich result so
 *  questions can surface directly in SERPs and in LLM citations. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  };
}

/** ItemList — used on hub pages (/services, /case-studies, /blog) so Google
 *  understands the page is an index of related items. */
export function itemListSchema(opts: {
  path: string;
  title: string;
  items: { name: string; url: string; description?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": absUrl(opts.path),
    name: opts.title,
    itemListElement: opts.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absUrl(it.url),
      description: it.description,
    })),
  };
}
