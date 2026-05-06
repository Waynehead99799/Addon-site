import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { SERVICES_DATA, type Service } from "@/components/pagesData";
import { getFeatureIcon } from "@/components/featureIcons";
import { Icon } from "@/components/icons";
import {
  ACCENTS,
  Card,
  CardChipRow,
  CardDesc,
  CardFooter,
  CardIcon,
  CardTag,
  CardTitle,
  Headline,
  HeadlineAccent,
  Tag,
  TagRow,
  type Accent,
} from "@/components/ui";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Service list layout preview",
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

function accentFor(service: Service) {
  return SERVICE_ACCENTS[service.slug] ?? ACCENTS.azure;
}

function hrefFor(service: Service) {
  return `/services/${service.slug}`;
}

function ServiceIcon({ service, size = "md" }: { service: Service; size?: "md" | "lg" }) {
  const Glyph = getFeatureIcon(service.features[0]?.icon ?? "Check");
  return (
    <CardIcon size={size}>
      <Glyph width={size === "lg" ? 20 : 17} height={size === "lg" ? 20 : 17} />
    </CardIcon>
  );
}

function PreviewHeader() {
  return (
    <header className="border-b border-white/10 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="eyebrow text-white/50">Internal preview</div>
        <h1 className="mt-3 text-[34px] md:text-[44px] font-semibold tracking-[-0.02em] leading-[1.05]">
          Service list <span className="serif-italic font-normal text-white/70">layout options</span>
        </h1>
        <p className="mt-3 text-white/55 text-[14px] max-w-2xl leading-relaxed">
          Six directions for replacing the basic services list. Each option uses live service data,
          real links, and the existing card/icon/tag system.
        </p>
      </div>
    </header>
  );
}

function OptionShell({
  id,
  title,
  note,
  children,
}: {
  id: string;
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-white/10 px-6 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-10 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span className="eyebrow text-white/40">{id}</span>
          <h2 className="text-[22px] md:text-[28px] font-semibold tracking-[-0.02em]">
            {title}
          </h2>
          <p className="basis-full text-[13px] md:text-[14px] text-white/55 max-w-3xl leading-relaxed">
            {note}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

function BentoBoard() {
  const [hero, ...rest] = SERVICES_DATA;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[220px] gap-4">
      {hero && (
        <Card
          href={hrefFor(hero)}
          accent={accentFor(hero)}
          hero
          className="md:col-span-2 md:row-span-2"
        >
          <div className="relative flex items-start justify-between gap-4">
            <ServiceIcon service={hero} size="lg" />
            <CardTag>{hero.eyebrow}</CardTag>
          </div>
          <CardTitle hero>{hero.title}</CardTitle>
          <CardDesc>{hero.subtitle}</CardDesc>
          <CardFooter>
            <CardChipRow chips={hero.techStack} max={4} />
          </CardFooter>
        </Card>
      )}
      {rest.slice(0, 6).map((service) => (
        <Card key={service.slug} href={hrefFor(service)} accent={accentFor(service)}>
          <div className="relative flex items-start justify-between gap-4">
            <ServiceIcon service={service} />
            <CardTag className="max-w-[10rem] truncate">{service.eyebrow}</CardTag>
          </div>
          <CardTitle className="!mt-7 !pt-0">{service.title}</CardTitle>
          <CardFooter>
            <CardChipRow chips={service.techStack} max={2} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function SplitExplorer() {
  const [lead, ...rest] = SERVICES_DATA;
  if (!lead) return null;
  const LeadIcon = getFeatureIcon(lead.features[0]?.icon ?? "Check");

  return (
    <div className="grid grid-cols-12 gap-6 md:gap-8">
      <div className="col-span-12 lg:col-span-5">
        <Card href={hrefFor(lead)} accent={accentFor(lead)} hero className="min-h-[460px]">
          <div className="relative flex items-start justify-between gap-4">
            <CardIcon size="lg">
              <LeadIcon width={20} height={20} />
            </CardIcon>
            <CardTag>{lead.eyebrow}</CardTag>
          </div>
          <CardTitle hero>{lead.title}</CardTitle>
          <CardDesc className="max-w-none">{lead.subtitle}</CardDesc>
          <div className="relative mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {lead.features.slice(0, 4).map((feature) => (
              <div key={feature.title} className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
                <div className="text-[12.5px] font-semibold tracking-[-0.01em]">{feature.title}</div>
                <div className="mt-1 text-[11.5px] leading-relaxed text-white/45">{feature.desc}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="col-span-12 lg:col-span-7 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
        <div className="divide-y divide-white/10">
          {rest.map((service) => (
            <Link
              key={service.slug}
              href={hrefFor(service)}
              className="group grid grid-cols-12 gap-4 -mx-3 px-3 py-5 md:py-6 rounded-xl transition-colors duration-300 hover:bg-white/[0.035]"
            >
              <div className="col-span-12 sm:col-span-5 flex items-center gap-3">
                <ServiceIcon service={service} />
                <div className="min-w-0">
                  <div className="text-[17px] md:text-[20px] font-semibold tracking-[-0.02em] leading-tight transition-colors group-hover:text-white">
                    {service.title}
                  </div>
                  <div className="mt-1 text-[11px] font-mono uppercase tracking-[0.16em] text-white/35 truncate">
                    {service.eyebrow}
                  </div>
                </div>
              </div>
              <p className="col-span-12 sm:col-span-5 text-[13px] md:text-[14px] text-white/55 leading-relaxed">
                {service.subtitle}
              </p>
              <div className="col-span-12 sm:col-span-2 flex sm:justify-end items-center">
                <span className="svc-arrow text-white/50 group-hover:text-white/80">
                  <Icon.ArrowUpRight width={18} height={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function CapabilityMatrix() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
      {SERVICES_DATA.map((service) => (
        <Card key={service.slug} href={hrefFor(service)} accent={accentFor(service)} className="min-h-[300px]">
          <div className="relative flex items-start justify-between gap-4">
            <ServiceIcon service={service} />
            <CardTag className="max-w-[12rem] truncate">{service.eyebrow}</CardTag>
          </div>
          <CardTitle className="!mt-8 !pt-0">{service.title}</CardTitle>
          <CardDesc>{service.subtitle}</CardDesc>
          <div className="relative mt-5 border-t border-white/10 pt-4">
            <div className="eyebrow text-white/35">Capabilities</div>
            <TagRow className="mt-3">
              {service.features.slice(0, 4).map((feature) => (
                <Tag key={feature.title}>{feature.title}</Tag>
              ))}
            </TagRow>
          </div>
          <CardFooter>
            <CardChipRow chips={service.techStack} max={4} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function CompactRail() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
      {SERVICES_DATA.map((service) => {
        const accent = accentFor(service);
        return (
          <Link
            key={service.slug}
            href={hrefFor(service)}
            className="group grid grid-cols-12 gap-4 md:gap-6 p-5 md:p-6 border-b border-white/10 last:border-b-0 transition-[background-color,padding-left] duration-300 hover:bg-white/[0.035] hover:md:pl-8"
            style={{ ["--svc" as string]: accent.hex, ["--svc-rgb" as string]: accent.rgb }}
          >
            <div className="col-span-12 md:col-span-4 flex items-center gap-3">
              <ServiceIcon service={service} />
              <div>
                <div className="text-[18px] md:text-[22px] font-semibold tracking-[-0.02em] leading-tight transition-colors group-hover:text-white">
                  {service.title}
                </div>
                <div className="mt-1 text-[11px] font-mono uppercase tracking-[0.16em] text-white/35">
                  {service.eyebrow}
                </div>
              </div>
            </div>
            <p className="col-span-12 md:col-span-4 text-[13px] md:text-[14px] text-white/55 leading-relaxed">
              {service.subtitle}
            </p>
            <div className="col-span-10 md:col-span-3 flex flex-wrap gap-1.5 content-start">
              {service.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="svc-stack-chip text-[10.5px] px-2 py-1 rounded-full bg-white/[0.04] text-white/55 border border-white/10 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-end items-center">
              <Icon.ArrowUpRight width={17} height={17} className="svc-arrow" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function SpotlightDeck() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {SERVICES_DATA.map((service, i) => {
        const accent = accentFor(service);
        return (
          <Link
            key={service.slug}
            href={hrefFor(service)}
            className="group relative min-h-[360px] rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden p-5 md:p-6 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-white/[0.045]"
            style={{
              ["--svc" as string]: accent.hex,
              ["--svc-rgb" as string]: accent.rgb,
              boxShadow: `0 0 0 0 rgba(${accent.rgb}, 0)`,
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
              <ServiceIcon service={service} />
              <span className="text-[11px] font-mono text-white/35">0{i + 1}</span>
            </div>
            <div className="relative mt-10">
              <div className="text-[24px] md:text-[28px] font-semibold tracking-[-0.02em] leading-[1.02]">
                {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="serif-italic font-normal text-white/70">
                  {service.title.split(" ").slice(-1)}
                </span>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-white/55">{service.subtitle}</p>
            </div>
            <div className="relative mt-6 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
              <div className="eyebrow text-white/35">Reveals on hover</div>
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
            <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between gap-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-white/35 truncate">
                {service.eyebrow}
              </span>
              <Icon.ArrowUpRight
                width={17}
                height={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function CommandPalette() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.018] overflow-hidden">
      <div className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-white/10 text-[10.5px] font-mono uppercase tracking-[0.18em] text-white/35">
        <div className="col-span-7 md:col-span-4">Service</div>
        <div className="hidden md:block md:col-span-3">Best for</div>
        <div className="hidden md:block md:col-span-3">Stack</div>
        <div className="col-span-5 md:col-span-2 text-right">Open</div>
      </div>
      {SERVICES_DATA.map((service, i) => {
        const accent = accentFor(service);
        return (
          <Link
            key={service.slug}
            href={hrefFor(service)}
            className="group relative grid grid-cols-12 gap-4 px-5 py-4 md:py-5 border-b border-white/10 last:border-b-0 transition-colors duration-300 hover:bg-white/[0.04]"
            style={{ ["--svc" as string]: accent.hex, ["--svc-rgb" as string]: accent.rgb }}
          >
            <span
              className="absolute left-0 top-1/2 h-10 w-[3px] -translate-y-1/2 scale-y-0 rounded-r-full transition-transform duration-300 group-hover:scale-y-100"
              style={{ background: accent.hex }}
            />
            <div className="col-span-7 md:col-span-4 flex items-center gap-3 min-w-0">
              <span className="text-[11px] font-mono text-white/30 w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <ServiceIcon service={service} />
              <div className="min-w-0">
                <div className="truncate text-[15px] md:text-[17px] font-semibold tracking-[-0.01em]">
                  {service.title}
                </div>
                <div className="mt-1 truncate text-[11px] font-mono uppercase tracking-[0.14em] text-white/35">
                  {service.eyebrow}
                </div>
              </div>
            </div>
            <p className="hidden md:block md:col-span-3 text-[12.5px] leading-relaxed text-white/55">
              {service.features[0]?.title ?? service.subtitle}
            </p>
            <div className="hidden md:flex md:col-span-3 flex-wrap gap-1.5 content-center">
              {service.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[10.5px] px-2 py-1 rounded-full bg-white/[0.04] text-white/55 border border-white/10 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="col-span-5 md:col-span-2 flex justify-end items-center">
              <span className="w-9 h-9 rounded-full border border-white/10 grid place-items-center text-white/55 transition-[border-color,background-color,color,transform] duration-300 group-hover:border-white/25 group-hover:bg-white/[0.06] group-hover:text-white group-hover:translate-x-1">
                <Icon.ArrowUpRight width={15} height={15} />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function ServiceListPreview() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <PreviewHeader />

      <section className="px-6 py-12 md:py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Headline size="section">
            Eight service lines, <HeadlineAccent>six listing systems</HeadlineAccent>.
          </Headline>
        </div>
      </section>

      <OptionShell
        id="Option A"
        title="Bento Board"
        note="Best when you want a visual hierarchy: one primary service gets gravity, the rest still scan quickly."
      >
        <BentoBoard />
      </OptionShell>

      <OptionShell
        id="Option B"
        title="Split Explorer"
        note="Best when the first service needs explanation and the rest should behave like a crisp index."
      >
        <SplitExplorer />
      </OptionShell>

      <OptionShell
        id="Option C"
        title="Capability Matrix"
        note="Best when users compare what each service includes before choosing a detail page."
      >
        <CapabilityMatrix />
      </OptionShell>

      <OptionShell
        id="Option D"
        title="Compact Rail"
        note="Best when density matters: lots of services above the fold, with enough tags to orient quickly."
      >
        <CompactRail />
      </OptionShell>

      <OptionShell
        id="Option E"
        title="Spotlight Deck"
        note="Best when the page should feel more premium and interactive: hover reveals capabilities without opening the detail page."
      >
        <SpotlightDeck />
      </OptionShell>

      <OptionShell
        id="Option F"
        title="Command Palette"
        note="Best when you want a sharp, operational index: dense, readable, and fast to scan."
      >
        <CommandPalette />
      </OptionShell>

      <ThemeToggle />
    </div>
  );
}
