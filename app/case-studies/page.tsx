import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import CTA from "@/components/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { CASE_STUDIES_DATA, type CaseStudyDetail } from "@/components/pagesData";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons";
import {
  ACCENTS,
  Card,
  CardChipRow,
  CardDesc,
  CardFooter,
  CardTag,
  CardTitle,
  Headline,
  HeadlineAccent,
  Section,
  SectionHeader,
  Tag,
  TagRow,
  type Accent,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Case Studies — Selected Work",
  description:
    "Real-world results from partnerships across IoT, healthcare, marketplaces, and enterprise. Owned hardware to multi-region brand platforms.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "website",
    url: "/case-studies",
    title: "Case Studies — Addon Web Solutions",
    description:
      "Real-world results from partnerships across IoT, healthcare, marketplaces, and enterprise.",
  },
};

const ACCENT_SEQUENCE: Accent[] = [
  ACCENTS.shamrock,
  ACCENTS.azure,
  ACCENTS.teal,
  ACCENTS.emerald,
  ACCENTS.brandAzure,
  ACCENTS.rose,
];

const CASE_IMAGE_OVERRIDES: Record<string, string> = {
  "vehicle-intelligence": "/case-studies/vehicle-intelligence/hero-2.png",
};

function caseImage(c: CaseStudyDetail) {
  if (CASE_IMAGE_OVERRIDES[c.slug]) return CASE_IMAGE_OVERRIDES[c.slug];
  return c.gallery?.hero ?? c.gallery?.web?.[0] ?? c.profile ?? `/case-studies/${c.slug}/image.png`;
}

function CaseStudyImage({
  study,
  sizes,
  priority = false,
  fit = "contain",
}: {
  study: CaseStudyDetail;
  sizes: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <Image
      src={caseImage(study)}
      alt={`${study.title} interface preview`}
      fill
      priority={priority}
      sizes={sizes}
      className={`transition-transform duration-700 ease-out ${
        fit === "contain" ? "object-contain" : "object-cover group-hover:scale-[1.035]"
      }`}
    />
  );
}

export default function CaseStudiesHub() {
  const [featured, ...rest] = CASE_STUDIES_DATA;

  return (
    <PageShell>
      <JsonLd
        data={itemListSchema({
          path: "/case-studies",
          title: "Case Studies — Selected Work",
          items: CASE_STUDIES_DATA.map((c) => ({
            name: c.title,
            url: `/case-studies/${c.slug}`,
            description: c.subtitle,
          })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
        ])}
      />
      <PageHero
        eyebrow="Work / Selected engagements"
        title="Software Development Case Studies."
        italicWord="Case Studies."
        subtitle="Real problems, measured outcomes. A selection of recent work across IoT, healthcare, marketplaces, eCommerce, and enterprise CRM."
      />
      <Section id="selected-work">
        <SectionHeader
          eyebrow="Case studies"
          headline={
            <Headline size="section">
              Field work, <HeadlineAccent>measured outcomes</HeadlineAccent>.
            </Headline>
          }
        >
          <p className="mt-5 max-w-2xl text-[14px] md:text-[15px] leading-relaxed text-white/60">
            Each engagement below links to the full build story: what broke, what shipped, and what changed once the product was in production.
          </p>
        </SectionHeader>

        {featured && (
          <Reveal y={22}>
            <Card
              href={`/case-studies/${featured.slug}`}
              accent={ACCENTS.shamrock}
              hero
              padding=""
              className="md:grid md:grid-cols-12 md:min-h-[440px]"
            >
              <div className="relative min-h-[260px] sm:min-h-[340px] md:col-span-7 md:min-h-full overflow-hidden bg-[#090909]">
                <CaseStudyImage
                  study={featured}
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-70" />
                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  {featured.categories.slice(0, 2).map((category) => (
                    <Tag key={category} className="backdrop-blur-md">
                      {category}
                    </Tag>
                  ))}
                </div>
              </div>

              <div className="relative md:col-span-5 p-6 sm:p-7 md:p-8 lg:p-10 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="eyebrow text-white/40">Featured engagement</div>
                    <p className="mt-3 text-[13px] text-white/50">{featured.industry}</p>
                  </div>
                  <span className="w-10 h-10 rounded-full accent-grad grid place-items-center text-white shrink-0">
                    <Icon.ArrowUpRight width={16} height={16} />
                  </span>
                </div>

                <CardTitle hero className="!mt-10 !pt-0">
                  {featured.title}
                </CardTitle>
                <CardDesc className="max-w-none text-[14px] md:text-[15px]">
                  {featured.subtitle}
                </CardDesc>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {featured.results.slice(0, 4).map((result) => (
                    <div key={`${result.value}-${result.label}`} className="border-l border-white/10 pl-3">
                      <div className="text-[15px] md:text-[17px] font-semibold tracking-[-0.01em]">
                        {result.value}
                      </div>
                      <div className="mt-1 text-[10.5px] font-mono uppercase tracking-[0.14em] text-white/40">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                <CardFooter className="mt-auto pt-8">
                  <CardChipRow chips={featured.techStack} max={4} />
                </CardFooter>
              </div>
            </Card>
          </Reveal>
        )}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {rest.map((study, i) => {
            const accent = ACCENT_SEQUENCE[(i + 1) % ACCENT_SEQUENCE.length];
            return (
              <Reveal key={study.slug} delay={i * 55} y={18}>
                <Card
                  href={`/case-studies/${study.slug}`}
                  accent={accent}
                  padding=""
                  className="min-h-full"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#090909]">
                    <CaseStudyImage
                      study={study}
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--bg)] to-transparent opacity-80" />
                    <div className="absolute left-4 top-4">
                      <CardTag className="max-w-[calc(100vw-4rem)] md:max-w-[18rem] truncate">
                        {study.industry}
                      </CardTag>
                    </div>
                  </div>

                  <div className="relative p-5 sm:p-6 flex flex-col flex-1">
                    <TagRow>
                      {study.categories.slice(0, 2).map((category) => (
                        <Tag key={category}>{category}</Tag>
                      ))}
                    </TagRow>

                    <CardTitle className="!mt-7 !pt-0">{study.title}</CardTitle>
                    <CardDesc className="line-clamp-3">{study.subtitle}</CardDesc>

                    <div className="mt-5 border-t border-white/10 pt-4">
                      <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/35">
                        Outcome
                      </div>
                      <div className="mt-2 text-[14px] md:text-[15px] font-medium tracking-[-0.01em] text-white/85">
                        {study.results[0]?.value ?? "Production"}{" "}
                        <span className="serif-italic font-normal text-white/55">
                          {study.results[0]?.label ?? "delivery"}
                        </span>
                      </div>
                    </div>

                    <CardFooter className="mt-auto pt-5">
                      <CardChipRow chips={study.techStack} max={3} />
                    </CardFooter>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <CTA />
    </PageShell>
  );
}
