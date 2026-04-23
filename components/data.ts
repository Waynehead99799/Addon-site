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
  title: string;
  tag: string;
  kpi: string;
  desc: string;
  icon: "Truck" | "Gauge" | "Sparkle" | "Route" | "Bowl" | "Wrench";
  palette: [string, string, string];
  board: "map" | "chat" | "grid" | "gauge" | "ride" | "order";
};

export const CASE_STUDIES: CaseStudy[] = [
  { id: "fleet", title: "Fleet Telematics with Live Video", tag: "IoT · Enterprise", kpi: "4,000 vehicles · 150M events/day", desc: "Real-time GPS, video, and driver scoring for a leading EU fleet operator. Running since 2016.", icon: "Truck", palette: ["#F4A261", "#E76F51", "#264653"], board: "map" },
  { id: "ai", title: "AI-Driven Maternal Health", tag: "AI · Healthcare", kpi: "150K users · ML-personalized", desc: "Symptom tracking, wearable integration, and personalized care plans powered by on-device ML.", icon: "Sparkle", palette: ["#FFE5A0", "#F4A261", "#7B2D26"], board: "chat" },
  { id: "handy", title: "On-Demand Cleaning Marketplace", tag: "Marketplace", kpi: "5,000+ vetted pros", desc: "Booking, dispatch, and real-time tracking connecting homeowners to a vetted service network.", icon: "Wrench", palette: ["#D4E09B", "#A7C957", "#386641"], board: "grid" },
  { id: "obd", title: "OBD-II Diagnostics Suite", tag: "IoT · Consumer", kpi: "4.8★ App Store", desc: "Bluetooth dongle + companion app with live engine telemetry, DTCs, and trip reports.", icon: "Gauge", palette: ["#B5E48C", "#52B788", "#1B4332"], board: "gauge" },
  { id: "cab", title: "On-Demand Mobility", tag: "Marketplace", kpi: "3.2M rides", desc: "Rider, driver, and ops apps with dynamic dispatch, surge, and multi-currency settlement.", icon: "Route", palette: ["#FFD166", "#EF476F", "#073B4C"], board: "ride" },
  { id: "food", title: "Multi-Vendor Food Platform", tag: "Marketplace", kpi: "12-city rollout", desc: "Storefront, POS, rider, and partner console — one shared domain core.", icon: "Bowl", palette: ["#F7B267", "#F4845F", "#5E3023"], board: "order" },
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
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
] as const;
