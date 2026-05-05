import { ARTICLES } from "@/components/pagesData";
import { renderOgCard, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Addon Web Solutions article";

export default async function Image({ params }: { params: { slug: string } }) {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  if (!a) {
    return renderOgCard({
      kind: "ARTICLE",
      title: "Addon Web Solutions",
      subtitle: "Field notes on AI, software, mobile, and cloud.",
    });
  }
  return renderOgCard({
    kind: "ARTICLE",
    title: a.title,
    subtitle: a.subtitle,
    meta: `${a.date} · ${a.readTime}`,
  });
}
