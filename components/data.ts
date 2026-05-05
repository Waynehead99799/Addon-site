export const SERVICES = [
  { id: "ai", title: "Artificial Intelligence", desc: "LLM apps, agents, and RAG systems grounded in your data. In production, not demos.", tag: "AI × Automation", icon: "Bot", stack: ["OpenAI", "Anthropic", "LangChain", "Pinecone"] },
  { id: "web", title: "Web Development", desc: "Full-stack apps and platforms built with React, Next.js, and modern cloud-native architecture.", tag: "Full-stack", icon: "Globe", stack: ["React", "Next.js", "TypeScript", "Postgres"] },
  { id: "mobile", title: "Mobile Apps", desc: "Native iOS and Android, plus performant React Native. Built for scale from day one.", tag: "iOS × Android", icon: "Smartphone", stack: ["Swift", "Kotlin", "React Native", "Expo"] },
  { id: "cloud", title: "Cloud & DevOps", desc: "Architecture, migration, and managed infrastructure on AWS, Azure, and GCP.", tag: "AWS · Azure · GCP", icon: "Cpu", stack: ["AWS", "Terraform", "Kubernetes", "Datadog"] },
  { id: "iot", title: "IoT & Telematics", desc: "Connected products, edge firmware, and telemetry pipelines — hardware that behaves like software.", tag: "Hardware × Software", icon: "Cpu", stack: ["AWS IoT", "MQTT", "Rust", "BLE"] },
  { id: "product", title: "Product & Strategy", desc: "Discovery, audits, and technical roadmaps from engineers who've shipped.", tag: "Strategy × Audit", icon: "Lightbulb", stack: ["Discovery", "Tech DD", "Roadmap", "OKRs"] },
] as const;

export const STATS = [
  { num: "150+", label: "Clients shipped", sub: "seed to enterprise" },
  { num: "15+", label: "Years in business", sub: "building since 2011" },
  { num: "10+", label: "Countries served", sub: " Across 5 Continents" },
  { num: "350K", label: "App users served", sub: "in production today" },
] as const;

export type CaseStudy = {
  id: string;
  /** Slug of the matching case-study detail page under /case-studies/[slug] */
  slug: string;
  title: string;
  tag: string;
  kpi: string;
  desc: string;
  /** Cover image. Drop the file in public/case-studies/<slug>/ and point here.
   *  Falls back to the synthetic gradient `Artwork` if image is empty. */
  image?: string;
  icon: "Truck" | "Gauge" | "Sparkle" | "Route" | "Bowl" | "Wrench" | "Bike" | "Camera" | "School";
  palette: [string, string, string];
  board: "map" | "chat" | "grid" | "gauge" | "ride" | "order";
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "vehicle-intelligence",
    slug: "vehicle-intelligence",
    title: "Vehicle Intelligence Platform",
    tag: "AI · Hardware · IP",
    kpi: "Vertically integrated · trade-mark protected",
    desc: "A vertically integrated vehicle intelligence platform — proprietary AI algorithms, real-time notifications, and owned hardware IP turning video and driver data into action.",
    image: "/case-studies/vehicle-intelligence/image.png",
    icon: "Camera",
    palette: ["#FF5A36", "#D6FF5C", "#0E0B0A"],
    board: "gauge",
  },
  {
    id: "pe-platform",
    slug: "pe-assessment-platform",
    title: "Standards-Based PE Assessment",
    tag: "Education · Health",
    kpi: "Standards-aligned · district reports",
    desc: "Ditch paper grids. Turn mandatory PE testing into personalized goals, SEL journals, and standards-based workouts — clear growth reports without administrative burnout.",
    image: "/case-studies/pe-assessment-platform/image.png",
    icon: "School",
    palette: ["#5dd5ab", "#2dbcd2", "#0E0B0A"],
    board: "chat",
  },
  {
    id: "tx-cleaning",
    slug: "texas-cleaning-service",
    title: "Nationwide Cleaning Marketplace",
    tag: "Marketplace · Local",
    kpi: "Nationwide · homes & offices",
    desc: "Reliable, professional cleaning across an entire US state — homes and offices, on-demand booking, dispatch, and recurring schedules under one app.",
    image: "/case-studies/texas-cleaning-service/image.png",
    icon: "Wrench",
    palette: ["#D4E09B", "#A7C957", "#1B4332"],
    board: "grid",
  },
  {
    id: "camera-telematics",
    slug: "camera-telematics",
    title: "Fleet Telematics & Asset Safety",
    tag: "IoT · Telematics",
    kpi: "40+ years of camera engineering · multi-sector",
    desc: "Premier telematics for safeguarding assets and mitigating risk — seaports, airports, roadside maintenance, haulage, motor fleets. Built on four decades of camera engineering.",
    image: "/case-studies/camera-telematics/image.png",
    icon: "Truck",
    palette: ["#5392df", "#2dbcd2", "#0E0B0A"],
    board: "map",
  },
  {
    id: "connected-motorcycle-app",
    slug: "connected-motorcycle-app",
    title: "Connected Motorcycle Companion App",
    tag: "Connected Vehicle · iOS · Android",
    kpi: "Real-time diagnostics · SOS · ride community",
    desc: "Native iOS and Android companion app for connected motorcycles — live diagnostics, smart navigation, panic SOS, remote engine immobilization, and rider community radar.",
    image: "/case-studies/connected-motorcycle-app/image.png",
    icon: "Bike",
    palette: ["#EF476F", "#FFD166", "#073B4C"],
    board: "ride",
  },
  {
    id: "multi-region-brand-platform",
    slug: "multi-region-brand-platform",
    title: "Multi-Region Brand & Product Platform",
    tag: "Brand · Web · International",
    kpi: "Multi-locale · EN · CN",
    desc: "Multi-language brand and product platform for an international lifestyle motorcycle brand — global product showcases, distributor program, and editorial content.",
    image: "/case-studies/multi-region-brand-platform/image.png",
    icon: "Sparkle",
    palette: ["#2877d7", "#34cb96", "#0E0B0A"],
    board: "order",
  },
  {
    id: "global-motorcycle-platform",
    slug: "global-motorcycle-platform",
    title: "Global Motorcycle Brand Platform",
    tag: "Brand · Global · Multi-region",
    kpi: "International distribution · full lineup",
    desc: "Global web platform for an international motorcycle brand — immersive product pages, store locator, distributor recruitment, and embedded video across multiple regions.",
    image: "/case-studies/global-motorcycle-platform/image.png",
    icon: "Bike",
    palette: ["#F4A261", "#E76F51", "#264653"],
    board: "ride",
  },
];

export const PROCESS = [
  { n: "01", title: "Diagnose", desc: "A one-week intake. We read the last three incidents, the current stack, and the growth plan. You leave with a written blueprint — not a deck." },
  { n: "02", title: "Prototype", desc: "Architecture and the riskiest feature, built end-to-end. Evals, fallbacks, and cost ceilings in place before design is final." },
  { n: "03", title: "Ship", desc: "Two-week cycles. Monday status, Friday demo. Production from the first commit — no “dev environment forever.”" },
  { n: "04", title: "Operate", desc: "On-call rotation, SLO tracking, and a written runbook. We stay as long as the pager keeps ringing." },
] as const;

export const TESTIMONIALS = [
  {
    q: "We've worked with Addon for over twelve years — the platform underpinning our camera systems is theirs. Stable, dependable, and proactive. A trusted long-term technology partner.",
    n: "Stephen Kennedy",
    r: "Chairman, Camera Telematics Ltd · UK & Ireland",
  },
  {
    q: "They translated my vision into functional, user-friendly applications and offered valuable improvements along the way. Reliable, detail-oriented, and committed to outcomes.",
    n: "Joseph Larnyoh",
    r: "CEO, Nature Checkout Inc · USA",
  },
  {
    q: "Every feature was developed on time and executed flawlessly. They understood the requirements and delivered exactly what was promised. The output exceeded my expectations.",
    n: "Jerry Gupta",
    r: "Nyaay-AI · USA",
  },
] as const;

export const NAV = [
  { label: "AddonAI", href: "/addonai" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/case-studies" },
  { label: "Hire", href: "/hire-dedicated-developers" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;
