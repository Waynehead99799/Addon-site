import { SERVICES_DATA } from "@/components/pagesData";
import { renderOgCard, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Addon Web Solutions service";

export default async function Image({ params }: { params: { slug: string } }) {
  const s = SERVICES_DATA.find((x) => x.slug === params.slug);
  if (!s) {
    return renderOgCard({
      kind: "SERVICE",
      title: "Addon Web Solutions",
      subtitle: "AI · Software · Mobile · Cloud",
    });
  }
  return renderOgCard({
    kind: "SERVICE",
    title: s.title,
    subtitle: s.subtitle,
    meta: s.eyebrow,
  });
}
