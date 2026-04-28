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
  slug: string;
  title: string;
  tag: string;
  kpi: string;
  desc: string;
  image: string;
  icon: "Truck" | "Gauge" | "Sparkle" | "Route" | "Bowl" | "Wrench";
  palette: [string, string, string];
  board: "map" | "chat" | "grid" | "gauge" | "ride" | "order";
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fleet",
    slug: "camera-telematics",
    title: "Fleet Telematics with Live Video",
    tag: "IoT · Enterprise",
    kpi: "4,000 vehicles · 150M events/day",
    desc: "Real-time GPS, video, and driver scoring for a leading EU fleet operator. Running since 2016.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1200&h=750&fit=crop",
    icon: "Truck",
    palette: ["#F4A261", "#E76F51", "#264653"],
    board: "map",
  },
  {
    id: "ai",
    slug: "ai-motherhood-app",
    title: "AI-Driven Maternal Health",
    tag: "AI · Healthcare",
    kpi: "150K users · ML-personalized",
    desc: "Symptom tracking, wearable integration, and personalized care plans powered by on-device ML.",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=750&fit=crop",
    icon: "Sparkle",
    palette: ["#FFE5A0", "#F4A261", "#7B2D26"],
    board: "chat",
  },
  {
    id: "handy",
    slug: "cleaning-marketplace",
    title: "On-Demand Cleaning Marketplace",
    tag: "Marketplace",
    kpi: "5,000+ vetted pros",
    desc: "Booking, dispatch, and real-time tracking connecting homeowners to a vetted service network.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=750&fit=crop",
    icon: "Wrench",
    palette: ["#D4E09B", "#A7C957", "#386641"],
    board: "grid",
  },
  {
    id: "obd",
    slug: "obd2-telematics",
    title: "OBD-II Diagnostics Suite",
    tag: "IoT · Consumer",
    kpi: "4.8★ App Store",
    desc: "Bluetooth dongle + companion app with live engine telemetry, DTCs, and trip reports.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=750&fit=crop",
    icon: "Gauge",
    palette: ["#B5E48C", "#52B788", "#1B4332"],
    board: "gauge",
  },
  {
    id: "cab",
    slug: "automotive-crm",
    title: "Automotive Services CRM",
    tag: "Automotive · CRM",
    kpi: "25+ service centres",
    desc: "End-to-end CRM for service centres with intelligent scheduling and parts ordering.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200&h=750&fit=crop",
    icon: "Route",
    palette: ["#FFD166", "#EF476F", "#073B4C"],
    board: "ride",
  },
  {
    id: "food",
    slug: "food-ordering",
    title: "Multi-Vendor Food Platform",
    tag: "Marketplace",
    kpi: "200+ restaurants · 28 min avg",
    desc: "Customer, restaurant and driver apps over a shared marketplace core with real-time tracking.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=750&fit=crop",
    icon: "Bowl",
    palette: ["#F7B267", "#F4845F", "#5E3023"],
    board: "order",
  },
];

export const PROCESS = [
  { n: "01", title: "Diagnose", desc: "A one-week intake. We read the last three incidents, the current stack, and the growth plan. You leave with a written blueprint — not a deck." },
  { n: "02", title: "Prototype", desc: "Architecture and the riskiest feature, built end-to-end. Evals, fallbacks, and cost ceilings in place before design is final." },
  { n: "03", title: "Ship", desc: "Two-week cycles. Monday status, Friday demo. Production from the first commit — no “dev environment forever.”" },
  { n: "04", title: "Operate", desc: "On-call rotation, SLO tracking, and a written runbook. We stay as long as the pager keeps ringing." },
] as const;

export const TESTIMONIALS = [
  { q: "They shipped in six weeks what our in-house team couldn't in six months.", n: "Priya Natarajan", r: "VP Product, Lumen Health" },
  { q: "Took our IoT concept from a breadboard to a fleet of 20k devices. They own the full stack.", n: "Marcus Feld", r: "CTO, Veritrack" },
  { q: "Felt like hiring a senior team — without the 9-month runway.", n: "Sofia Alvarez", r: "Founder, Handywise" },
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
