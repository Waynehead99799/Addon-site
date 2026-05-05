import { CASE_STUDIES_DATA } from "@/components/pagesData";
import { renderOgCard, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Addon Web Solutions case study";

export default async function Image({ params }: { params: { slug: string } }) {
  const c = CASE_STUDIES_DATA.find((x) => x.slug === params.slug);
  if (!c) {
    return renderOgCard({
      kind: "CASE STUDY",
      title: "Addon Web Solutions",
      subtitle: "Case studies in production AI, software, mobile, and cloud.",
    });
  }
  return renderOgCard({
    kind: "CASE STUDY",
    title: c.title,
    subtitle: c.subtitle,
    meta: c.industry,
  });
}
