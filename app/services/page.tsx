import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import CTA from "@/components/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { SERVICES_DATA, type Service } from "@/components/pagesData";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";
import { Reveal } from "@/components/Reveal";
import { getFeatureIcon } from "@/components/featureIcons";
import { Icon } from "@/components/icons";
import {
  ACCENTS,
  CardIcon,
  Headline,
  HeadlineAccent,
  Section,
  SectionHeader,
  type Accent,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Technology Services",
  description:
    "Eight service lines covering every stage of the product lifecycle — mobile, web, IoT, cloud, digital transformation, QA, product consulting, and outsourcing.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "/services",
    title: "Technology Services | Addon Web Solutions",
    description:
      "Eight service lines covering every stage of the product lifecycle. Deep technical expertise, proven delivery.",
  },
};

const SERVICE_ACCENTS: Record<string, Accent> = {
  "mobile-app-development": ACCENTS.teal,
  "web-development": ACCENTS.azure,
  "iot-development": ACCENTS.brandAzure,
  "product-consulting": ACCENTS.shamrock,
  outsourcing: ACCENTS.rose,
  "cloud-services": ACCENTS.emerald,
  "digital-transformation": ACCENTS.shamrock,
  "quality-assurance": ACCENTS.teal,
};

function serviceAccent(service: Service) {
  return SERVICE_ACCENTS[service.slug] ?? ACCENTS.azure;
}

function ServiceGlyph({ service, size = "md" }: { service: Service; size?: "md" | "lg" }) {
  const IconC = getFeatureIcon(service.features[0]?.icon ?? "Check");
  return (
    <CardIcon size={size}>
      <IconC width={size === "lg" ? 20 : 17} height={size === "lg" ? 20 : 17} />
    </CardIcon>
  );
}

function serviceTitle(title: string) {
  const words = title.split(" ");
  const tail = words.pop() ?? "";
  return (
    <>
      {words.join(" ")}{" "}
      <span className="serif-italic font-normal text-white/70">{tail}</span>
    </>
  );
}

function SpotlightDeck() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-start">
      {SERVICES_DATA.map((service, i) => {
        const accent = serviceAccent(service);
        return (
          <Reveal key={service.slug} delay={i * 45} y={18} className="relative min-h-[440px] self-start">
            <Link
              href={`/services/${service.slug}`}
              className="group absolute inset-x-0 top-0 z-0 flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6 transition-[transform,border-color,background-color,box-shadow,z-index] duration-300 hover:z-20 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045] hover:shadow-[0_24px_70px_-32px_rgba(var(--svc-rgb),0.65)] focus-visible:z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              style={{
                ["--svc" as string]: accent.hex,
                ["--svc-rgb" as string]: accent.rgb,
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${accent.hex}, transparent)` }}
              />
              <div
                className="absolute -right-20 -top-20 w-48 h-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: accent.hex }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <ServiceGlyph service={service} />
                <span className="text-[11px] font-mono text-white/35">
                  0{i + 1}
                </span>
              </div>

              <div className="relative mt-10">
                <h3 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.02em] leading-[1.02]">
                  {serviceTitle(service.title)}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/55">
                  {service.subtitle}
                </p>
              </div>

              <div className="relative mt-6 overflow-hidden opacity-100 transition-all duration-500 md:max-h-0 md:opacity-0 md:group-hover:max-h-44 md:group-hover:opacity-100 md:group-focus-within:max-h-44 md:group-focus-within:opacity-100">
                <div className="eyebrow text-white/35">Capabilities</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {service.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature.title}
                      className="text-[10.5px] px-2 py-1 rounded-full bg-white/[0.04] text-white/55 border border-white/10 font-mono"
                    >
                      {feature.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-auto pt-7 flex items-center justify-between gap-4">
                <span className="min-w-0 text-[11px] font-mono uppercase tracking-[0.16em] text-white/35 truncate">
                  {service.eyebrow}
                </span>
                <span className="w-9 h-9 rounded-full border border-white/10 grid place-items-center text-white/55 transition-[border-color,background-color,color,transform] duration-300 group-hover:border-white/25 group-hover:bg-white/[0.06] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1">
                  <Icon.ArrowUpRight width={15} height={15} />
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}

export default function ServicesHub() {
  return (
    <PageShell>
      <JsonLd
        data={itemListSchema({
          path: "/services",
          title: "Technology Services",
          items: SERVICES_DATA.map((s) => ({
            name: s.title,
            url: `/services/${s.slug}`,
            description: s.subtitle,
          })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services / Full-spectrum technology"
        title="Custom Software Development Services."
        italicWord="Development Services."
        subtitle="From mobile-first applications to enterprise cloud infrastructure, our eight service lines cover every stage of the product lifecycle. Deep technical expertise, proven delivery."
      />
      <Section id="service-lines">
        <SectionHeader
          eyebrow="Service lines"
          headline={
            <Headline size="section">
              Eight ways to move, <HeadlineAccent>one delivery team</HeadlineAccent>.
            </Headline>
          }
        >
          <p className="mt-5 max-w-2xl text-[14px] md:text-[15px] leading-relaxed text-white/60">
            Pick a focused brief or combine service lines into a single delivery pod. Every path comes with architecture, QA, deployment, and post-launch ownership.
          </p>
        </SectionHeader>

        <SpotlightDeck />
      </Section>
      <CTA />
    </PageShell>
  );
}
