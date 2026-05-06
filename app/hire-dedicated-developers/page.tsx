import type { Metadata } from "next";
import PageShell from "@/components/templates/PageShell";
import PageHero from "@/components/templates/PageHero";
import CTA from "@/components/CTA";
import FAQSection from "@/components/templates/FAQSection";
import JsonLd from "@/components/seo/JsonLd";
import { Reveal } from "@/components/Reveal";
import { getFeatureIcon } from "@/components/featureIcons";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hire Dedicated Developers — Pre-Vetted, Day-One Ready",
  description:
    "Scale your team with senior pre-vetted engineers. AI, frontend, backend, mobile, cloud, and QA specialists. Shortlist in 48 hours, replace anyone in the first two weeks.",
  alternates: { canonical: "/hire-dedicated-developers" },
  openGraph: {
    type: "website",
    url: "/hire-dedicated-developers",
    title: "Hire Dedicated Developers — Addon Web Solutions",
    description:
      "Senior pre-vetted engineers ready to deliver from day one. Shortlist in 48 hours.",
  },
};

const ROLES = [
  { icon: "Cpu", title: "AI / ML engineers", desc: "TensorFlow, PyTorch, NLP, and computer vision specialists ready for production AI." },
  { icon: "Code", title: "Frontend developers", desc: "React, Vue, Angular, and Next.js experts building performant, accessible interfaces." },
  { icon: "Server", title: "Backend developers", desc: "Node.js, Python, Go, and Java engineers building scalable APIs and microservices." },
  { icon: "Smartphone", title: "Mobile developers", desc: "Swift, Kotlin, Flutter, and React Native developers for iOS and Android." },
  { icon: "Cloud", title: "Cloud & DevOps", desc: "AWS, Azure, and GCP certified engineers with Kubernetes and Terraform expertise." },
  { icon: "Beaker", title: "QA engineers", desc: "Automation specialists with Cypress, Playwright, and performance testing experience." },
];

const STEPS = [
  { t: "Share the brief", d: "Tell us the stack, the shape of the work, and the start date." },
  { t: "Curated shortlist", d: "Three to five vetted candidates with work samples within 48 hours." },
  { t: "Interview & select", d: "You interview directly. Replace anyone in the first two weeks, no questions asked." },
  { t: "Onboard & ship", d: "Day-one access to your tools. First commit inside the first sprint." },
];

const FAQS = [
  {
    question: "How long does it take to onboard a dedicated developer?",
    answer:
      "Forty-eight hours from your brief to a shortlist of three to five vetted candidates. You interview directly, pick your team, and they're committing code inside the first sprint — usually within a week of the brief landing.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "Three options: project-based (3–9 months, fixed scope), staff augmentation (monthly retainer, your roadmap), and outcome-based (we own a delivery target). Most clients start project-based and convert to staff augmentation once they trust the team.",
  },
  {
    question: "Who owns the IP and code?",
    answer:
      "You do — fully and exclusively, from the first commit. Standard work-for-hire IP assignment is in every engagement contract. We sign NDAs before any technical conversation if you need them.",
  },
  {
    question: "Can I replace a developer if they aren't a fit?",
    answer:
      "Yes — within the first two weeks of any engagement we replace anyone, no questions asked. After that we honour a fortnight's notice for replacements. We rarely have to invoke this; the curated shortlist exists to prevent bad fits in the first place.",
  },
  {
    question: "How do you vet candidates before they reach me?",
    answer:
      "Three filters: a technical interview by a senior staff engineer (live coding, system design, the specific stack you've asked for), a code-review of recent production work, and a reference check on their last engagement. Roughly 1 in 12 applicants makes it onto our bench.",
  },
  {
    question: "Do you only do dedicated developers, or full project teams too?",
    answer:
      "Both. If you want a complete team — product manager, designer, two engineers, QA — we can stand that up too, all under one engagement. See /services for project-based engagements; this page is specifically for staff augmentation and dedicated-developer hiring.",
  },
];

export default function HireDevelopersPage() {
  return (
    <PageShell>
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Hire Developers", href: "/hire-dedicated-developers" },
        ])}
      />
      <PageHero
        eyebrow="Hire / Dedicated developers"
        title="Engineers who ship from day one."
        italicWord="from day one."
        subtitle="Pre-vetted engineers with five-plus years average experience. Integrated into your workflow, on your tools, with direct communication."
      />

      {/* Roles */}
      <section className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-12">
            <div className="col-span-12 md:col-span-3">
              <div className="eyebrow">Roles</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-[28px] sm:text-[32px] md:text-[52px] font-semibold tracking-[-0.02em] leading-[1.04]">
                Six specialisations,{" "}
                <span className="serif-italic font-normal text-white/70">one bench.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
            {ROLES.map((r, i) => {
              const IconC = getFeatureIcon(r.icon);
              return (
                <Reveal
                  key={r.title}
                  delay={i * 50}
                  y={18}
                  className={`border-b border-white/10 ${
                    i % 3 !== 2 ? "lg:border-r" : ""
                  } ${i % 2 === 0 ? "md:border-r lg:border-r" : ""}`}
                >
                  <div className="p-6 md:p-8 h-full">
                    <div className="w-11 h-11 rounded-xl glass-lite grid place-items-center">
                      <IconC width={18} height={18} className="text-white/80" />
                    </div>
                    <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.01em]">
                      <span className="serif-italic font-normal text-white/90">{r.title}.</span>
                    </h3>
                    <p className="mt-3 text-[13.5px] text-white/55 leading-relaxed">{r.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-reveal relative py-14 md:py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">How it works</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {STEPS.map((s, i) => (
                <Reveal key={s.t} delay={i * 60} y={16}>
                  <div className="py-5 md:py-6 border-b border-white/10">
                    <div className="flex items-baseline gap-3 sm:gap-4 mb-2">
                      <span className="serif-italic text-[24px] md:text-[28px] text-white/40 leading-none">
                        {String(i + 1).padStart(2, "0")}.
                      </span>
                      <span className="text-[17px] md:text-[19px] font-medium">
                        <span className="serif-italic font-normal text-white/90">{s.t}.</span>
                      </span>
                    </div>
                    <p className="text-[13.5px] md:text-[14px] text-white/55 leading-relaxed ml-10 sm:ml-12">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="FAQ"
        title="What founders and CTOs ask before they hire."
        italicWord="before they hire."
        items={FAQS}
      />

      <CTA />
    </PageShell>
  );
}
