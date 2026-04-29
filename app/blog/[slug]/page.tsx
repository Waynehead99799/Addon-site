import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import ArticleDetail from "@/components/templates/ArticleDetail";
import CTA from "@/components/CTA";
import { ARTICLES } from "@/components/pagesData";

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
  return { title: `${a.title} | Addon Field Notes`, description: a.subtitle };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  if (!a) notFound();

  return (
    <PageShell>
      <PageHero
        eyebrow="Field Notes / Article"
        title={a.title}
        subtitle={a.subtitle}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Field Notes", href: "/blog" },
          { label: "Article", href: `/blog/${a.slug}` },
        ]}
      />
      <ArticleDetail article={a} />
      <CTA />
    </PageShell>
  );
}
