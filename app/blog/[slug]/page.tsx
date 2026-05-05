import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import ArticleDetail from "@/components/templates/ArticleDetail";
import RelatedSection from "@/components/templates/RelatedSection";
import CTA from "@/components/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { ARTICLES } from "@/components/pagesData";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  if (!a) return { title: "Article not found" };
  const path = `/blog/${a.slug}`;
  return {
    title: a.title,
    description: a.subtitle,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: a.title,
      description: a.subtitle,
      publishedTime: a.isoDate ?? a.date,
      images: a.cover ? [{ url: a.cover }] : undefined,
    },
    twitter: {
      title: a.title,
      description: a.subtitle,
      images: a.cover ? [a.cover] : undefined,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  if (!a) notFound();

  const path = `/blog/${a.slug}`;
  const wordCount = a.sections.reduce(
    (sum, s) => sum + s.body.split(/\s+/).length,
    0,
  );
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Field Notes", href: "/blog" },
    { label: a.title, href: path },
  ];

  return (
    <PageShell>
      <JsonLd
        data={articleSchema({
          path,
          title: a.title,
          description: a.subtitle,
          datePublished: a.isoDate ?? a.date,
          image: a.cover,
          readTime: a.readTime,
          wordCount,
        })}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Field Notes / Article"
        title={a.title}
        subtitle={a.subtitle}
        crumbs={crumbs}
      />
      <ArticleDetail article={a} />
      <RelatedSection
        eyebrow="Keep reading"
        title="More from the field notes."
        italicWord="field notes."
        items={ARTICLES
          .filter((x) => x.slug !== a.slug)
          .slice(0, 3)
          .map((x) => ({
            href: `/blog/${x.slug}`,
            title: x.title,
            desc: x.subtitle,
            meta: `${x.date} · ${x.readTime}`,
          }))}
      />
      <CTA />
    </PageShell>
  );
}
