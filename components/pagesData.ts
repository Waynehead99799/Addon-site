// ===============================================================
// Structured content for all inner pages.
// Route taxonomy: /services, /addonai, /industries, /case-studies, /blog
// ===============================================================

export type Feature = { icon: string; title: string; desc: string };
export type Stat = { value: string; label: string };

// -------------------- ADDON AI -------------------- //
export type AIService = {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  features: Feature[];
  process: string[];
  techStack: string[];
};

export const AI_SERVICES: AIService[] = [
  {
    slug: "ai-development",
    title: "AI Development",
    eyebrow: "Production-grade AI",
    subtitle: "End-to-end AI application development from data pipelines to production deployment.",
    features: [
      { icon: "Database", title: "Data pipeline design", desc: "Scalable ETL pipelines that ingest, transform, and prepare data from any source for model training and inference." },
      { icon: "Cpu", title: "Custom model training", desc: "Fine-tune models on your proprietary data using state-of-the-art architectures and hyperparameter optimization." },
      { icon: "Server", title: "MLOps & deployment", desc: "Production-grade deployment with CI/CD pipelines, A/B testing, model versioning, and automated retraining." },
      { icon: "Shield", title: "AI governance", desc: "Built-in bias detection, explainability layers, and compliance monitoring for responsible AI deployment." },
      { icon: "Chart", title: "Performance monitoring", desc: "Real-time dashboards tracking model drift, accuracy metrics, latency, and business KPI impact." },
      { icon: "Plug", title: "API-first architecture", desc: "RESTful and GraphQL APIs with auto-scaling, rate limiting, and comprehensive documentation." },
    ],
    process: ["Discovery & data audit", "Architecture design", "Model development", "Testing & validation", "Deployment & monitoring", "Continuous optimization"],
    techStack: ["Python", "TensorFlow", "PyTorch", "AWS SageMaker", "MLflow", "Kubernetes", "Docker", "Apache Spark"],
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    eyebrow: "Strategy before stack",
    subtitle: "Strategic AI roadmapping and technology advisory for maximum ROI.",
    features: [
      { icon: "Check", title: "AI readiness assessment", desc: "Comprehensive evaluation of your data maturity, infrastructure, team capabilities, and organisational readiness." },
      { icon: "Map", title: "Strategic roadmapping", desc: "Multi-phase implementation roadmaps aligned with business objectives, budgets, and competitive landscape." },
      { icon: "Calculator", title: "ROI modelling", desc: "Detailed financial models projecting costs, efficiency gains, revenue impact, and payback timelines." },
      { icon: "Search", title: "Use case identification", desc: "Systematic analysis of your operations to identify high-impact AI use cases ranked by feasibility and value." },
      { icon: "People", title: "Vendor selection", desc: "Unbiased technology and vendor evaluations covering platforms, models, tools, and cloud providers." },
      { icon: "Book", title: "Team enablement", desc: "Training programmes and workshops to upskill your teams on AI literacy, data practices, and tool adoption." },
    ],
    process: ["Stakeholder interviews", "Data & infrastructure audit", "Use case prioritisation", "Architecture blueprint", "ROI analysis", "Implementation roadmap"],
    techStack: ["AWS", "Azure", "GCP", "OpenAI", "Anthropic", "Hugging Face", "Databricks", "Snowflake"],
  },
  {
    slug: "generative-ai-development",
    title: "Generative AI Development",
    eyebrow: "Foundation models at work",
    subtitle: "Custom LLM applications and content generation powered by foundation models.",
    features: [
      { icon: "Language", title: "LLM fine-tuning", desc: "Fine-tune GPT, Claude, Llama, and Mistral models on your domain data for specialised, high-accuracy applications." },
      { icon: "File", title: "Content generation", desc: "Automated content pipelines producing marketing copy, reports, product descriptions, and documentation at scale." },
      { icon: "Image", title: "Multi-modal AI", desc: "Applications that understand and generate text, images, audio, and video using cutting-edge diffusion and transformer models." },
      { icon: "Terminal", title: "Prompt engineering", desc: "Optimised prompt architectures with chain-of-thought reasoning, few-shot learning, and automated prompt testing frameworks." },
      { icon: "Shield", title: "Safety & guardrails", desc: "Content filtering, output validation, and toxicity detection to ensure generated content meets compliance standards." },
      { icon: "Code", title: "Code generation", desc: "AI-powered code assistants and automated code review tools that accelerate development velocity." },
    ],
    process: ["Requirements analysis", "Model selection", "Prompt architecture", "Fine-tuning & testing", "Safety validation", "Production deployment"],
    techStack: ["OpenAI", "Claude", "Llama 3", "Stable Diffusion", "LangChain", "Pinecone", "Weights & Biases", "RLHF"],
  },
  {
    slug: "ai-chatbot-development",
    title: "AI Chatbot Development",
    eyebrow: "Conversational AI",
    subtitle: "Intelligent conversational interfaces that understand context and intent.",
    features: [
      { icon: "Cpu", title: "Natural language understanding", desc: "Advanced NLU engines that understand intent, extract entities, handle ambiguity, and maintain conversation context." },
      { icon: "Globe", title: "Multi-channel deployment", desc: "Deploy across web, mobile, WhatsApp, Slack, Teams, and voice assistants from a single conversational logic layer." },
      { icon: "Plug", title: "CRM & system integration", desc: "Deep integrations with Salesforce, HubSpot, Zendesk, and custom backends for personalised conversations." },
      { icon: "Language", title: "Multilingual support", desc: "Real-time translation and native support for 50+ languages with cultural context awareness." },
      { icon: "People", title: "Human hand-off", desc: "Intelligent escalation to live agents with full conversation context, sentiment analysis, and priority routing." },
      { icon: "Chart", title: "Analytics dashboard", desc: "Conversation analytics tracking resolution rates, satisfaction scores, common queries, and bot performance." },
    ],
    process: ["Conversation design", "NLU training", "Integration development", "User testing", "Deployment & launch", "Continuous learning"],
    techStack: ["Dialogflow", "Rasa", "LangChain", "OpenAI", "Node.js", "React", "WebSocket", "Redis"],
  },
  {
    slug: "ai-agents-development",
    title: "AI Agents Development",
    eyebrow: "Autonomous operators",
    subtitle: "Autonomous AI agents that reason, plan, and execute complex workflows.",
    features: [
      { icon: "Network", title: "Multi-agent orchestration", desc: "Design and deploy teams of specialised agents that collaborate, delegate tasks, and share context to solve complex workflows." },
      { icon: "Wrench", title: "Tool-use capabilities", desc: "Agents that autonomously interact with APIs, databases, file systems, browsers, and third-party services." },
      { icon: "Cpu", title: "Reasoning & planning", desc: "Advanced chain-of-thought and tree-of-thought reasoning for agents that break down complex problems into executable steps." },
      { icon: "Database", title: "Long-term memory", desc: "Persistent memory systems that let agents learn from past interactions, maintain context, and improve over time." },
      { icon: "Shield", title: "Enterprise guardrails", desc: "Configurable safety boundaries, approval workflows, audit trails, and rollback capabilities for controlled autonomy." },
      { icon: "Refresh", title: "Self-healing systems", desc: "Agents that detect failures, retry with alternative strategies, and escalate to humans when confidence is low." },
    ],
    process: ["Workflow analysis", "Agent architecture", "Tool integration", "Safety framework", "Evaluation & testing", "Monitored deployment"],
    techStack: ["LangGraph", "AutoGen", "CrewAI", "Claude", "OpenAI", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    slug: "machine-learning-development",
    title: "Machine Learning Development",
    eyebrow: "Models in production",
    subtitle: "Predictive models and recommendation systems trained on your data.",
    features: [
      { icon: "Chart", title: "Predictive analytics", desc: "Forecast demand, revenue, churn, and market trends using advanced regression, time-series, and ensemble models." },
      { icon: "Star", title: "Recommendation engines", desc: "Personalised product, content, and service recommendations that increase engagement, conversion, and average order value." },
      { icon: "Alert", title: "Anomaly detection", desc: "Real-time detection of fraud, system failures, quality issues, and security threats using advanced methods." },
      { icon: "Tag", title: "Classification systems", desc: "Automated categorisation of documents, support tickets, images, and transactions with high accuracy and low latency." },
      { icon: "Network", title: "Feature engineering", desc: "Automated and expert-driven feature extraction, selection, and transformation to maximise model performance." },
      { icon: "Beaker", title: "A/B testing frameworks", desc: "Rigorous experimentation frameworks to validate model impact with statistical significance before full deployment." },
    ],
    process: ["Data exploration", "Feature engineering", "Model selection", "Training & tuning", "Validation & testing", "Production MLOps"],
    techStack: ["scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "Apache Spark", "MLflow", "Airflow", "AWS SageMaker"],
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    eyebrow: "Pixels to decisions",
    subtitle: "Image recognition, object detection, and visual analytics solutions.",
    features: [
      { icon: "Target", title: "Object detection & tracking", desc: "Real-time detection and tracking of objects across video streams for surveillance, retail analytics, and autonomous systems." },
      { icon: "Search", title: "Visual quality inspection", desc: "Automated defect detection for manufacturing, achieving sub-millimeter accuracy and replacing manual inspection workflows." },
      { icon: "File", title: "OCR & document processing", desc: "Extract structured data from invoices, receipts, forms, and handwritten documents with intelligent field mapping." },
      { icon: "Smile", title: "Facial recognition", desc: "Secure identity verification, emotion analysis, and demographic analytics for access control and customer experience." },
      { icon: "Image", title: "Image segmentation", desc: "Pixel-level segmentation for medical imaging, satellite analysis, autonomous driving, and augmented reality." },
      { icon: "Video", title: "Video analytics", desc: "Automated event detection, activity recognition, and behaviour analysis across multi-camera video surveillance systems." },
    ],
    process: ["Data collection & labelling", "Model architecture", "Training & augmentation", "Edge optimisation", "Integration & testing", "Deployment & monitoring"],
    techStack: ["OpenCV", "YOLO", "TensorRT", "ONNX", "PyTorch", "NVIDIA Triton", "AWS Rekognition", "Edge TPU"],
  },
  {
    slug: "rpa-development",
    title: "RPA Development",
    eyebrow: "Automating the boring",
    subtitle: "Robotic process automation that eliminates repetitive manual tasks.",
    features: [
      { icon: "Bot", title: "Process automation bots", desc: "Software robots that handle data entry, file transfers, form filling, and repetitive tasks across any desktop or web application." },
      { icon: "File", title: "Intelligent document processing", desc: "Combine OCR, NLP, and machine learning to extract, classify, and route information from unstructured documents." },
      { icon: "Refresh", title: "Workflow orchestration", desc: "End-to-end orchestration of multi-system workflows with scheduling, error handling, and SLA monitoring." },
      { icon: "Gauge", title: "Process mining", desc: "Discover and analyse existing business processes from system logs to identify automation candidates and bottlenecks." },
      { icon: "People", title: "Attended automation", desc: "Digital assistants that work alongside employees, automating routine steps while humans handle exceptions and decisions." },
      { icon: "Chart", title: "ROI analytics", desc: "Dashboards tracking bot performance, hours saved, error reduction, and cost savings per automated process." },
    ],
    process: ["Process discovery", "Feasibility assessment", "Bot development", "Testing & UAT", "Deployment & training", "Monitoring & optimisation"],
    techStack: ["UiPath", "Automation Anywhere", "Power Automate", "Python", "Selenium", "API Integration", "OCR Engines", "Azure"],
  },
  {
    slug: "rag-development",
    title: "RAG Development",
    eyebrow: "Grounded generation",
    subtitle: "Retrieval-Augmented Generation for accurate, source-cited AI responses.",
    features: [
      { icon: "Database", title: "Vector database design", desc: "Optimised vector store architecture using Pinecone, Weaviate, or Qdrant for lightning-fast semantic search at scale." },
      { icon: "Target", title: "Knowledge base pipelines", desc: "Automated ingestion pipelines that chunk, embed, and index documents from PDFs, databases, wikis, and APIs." },
      { icon: "Quote", title: "Citation & sourcing", desc: "Every AI response includes verifiable source citations with page numbers, links, and confidence scores." },
      { icon: "Search", title: "Hybrid search", desc: "Combine semantic vector search with keyword-based BM25 retrieval and metadata filtering for maximum relevance." },
      { icon: "Lock", title: "Access control", desc: "Document-level permissions ensuring users only access information they are authorised to see." },
      { icon: "Refresh", title: "Real-time sync", desc: "Incremental indexing that keeps your knowledge base current as documents are added, modified, or archived." },
    ],
    process: ["Knowledge audit", "Chunking strategy", "Embedding pipeline", "Retrieval tuning", "LLM integration", "Evaluation & launch"],
    techStack: ["Pinecone", "Weaviate", "LangChain", "LlamaIndex", "OpenAI Embeddings", "pgvector", "FastAPI", "Redis"],
  },
];

// -------------------- SERVICES -------------------- //
export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  features: Feature[];
  process: string[];
  techStack: string[];
};

export const SERVICES_DATA: Service[] = [
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    eyebrow: "iOS · Android · Cross-platform",
    subtitle: "Native and cross-platform mobile apps for iOS and Android.",
    features: [
      { icon: "Smartphone", title: "iOS development", desc: "Native Swift and SwiftUI applications optimised for performance, accessibility, and the latest Apple ecosystem features." },
      { icon: "Smartphone", title: "Android development", desc: "Kotlin-first Android apps with Material Design 3, Jetpack Compose, and seamless Google Play Store deployment." },
      { icon: "Layers", title: "Cross-platform", desc: "Flutter and React Native solutions delivering native-quality experiences on both platforms from a single codebase." },
      { icon: "Pen", title: "UI/UX design", desc: "User-centred design with wireframes, prototypes, usability testing, and pixel-perfect implementation." },
      { icon: "Bolt", title: "App performance", desc: "Optimised rendering, lazy loading, efficient state management, and minimal battery consumption for smooth experiences." },
      { icon: "Cloud", title: "Backend & APIs", desc: "Scalable cloud backends with real-time sync, push notifications, authentication, and offline-first architectures." },
    ],
    process: ["Product strategy", "UI/UX design", "Development sprint", "QA & testing", "App store launch", "Post-launch support"],
    techStack: ["Swift", "Kotlin", "Flutter", "React Native", "Firebase", "Node.js", "GraphQL", "AWS Amplify"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    eyebrow: "Full-stack web apps",
    subtitle: "High-performance web applications with modern frameworks.",
    features: [
      { icon: "Code", title: "Frontend development", desc: "Modern SPAs and SSR applications built with React, Next.js, Vue, and Angular with optimal Core Web Vitals." },
      { icon: "Server", title: "Backend systems", desc: "Scalable APIs and microservices using Node.js, Python, Go, or Java with clean architecture and testing." },
      { icon: "Cart", title: "eCommerce platforms", desc: "Custom storefronts, headless commerce, and marketplace solutions with payment integration and inventory management." },
      { icon: "Palette", title: "UI/UX engineering", desc: "Responsive design systems, animation libraries, and accessible interfaces that meet WCAG 2.1 AA standards." },
      { icon: "Gauge", title: "Performance optimisation", desc: "Sub-second load times through code splitting, CDN optimisation, image compression, and edge computing." },
      { icon: "Puzzle", title: "CMS & integrations", desc: "Headless CMS solutions with Contentful, Strapi, or Sanity, plus integrations with CRMs, ERPs, and analytics." },
    ],
    process: ["Requirements analysis", "Architecture & design", "Agile development", "QA & performance", "Deployment & CI/CD", "Maintenance & support"],
    techStack: ["React", "Next.js", "Vue.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
  },
  {
    slug: "iot-development",
    title: "IoT Development",
    eyebrow: "Connected devices",
    subtitle: "Connected device ecosystems and IoT platform solutions.",
    features: [
      { icon: "Wifi", title: "Device connectivity", desc: "Multi-protocol support for MQTT, CoAP, BLE, Zigbee, and LoRaWAN connecting thousands of devices reliably." },
      { icon: "Cloud", title: "IoT cloud platforms", desc: "Custom platforms on AWS IoT, Azure IoT Hub, or Google Cloud IoT for device management, data ingestion, and analytics." },
      { icon: "Cpu", title: "Edge computing", desc: "On-device processing and AI inference at the edge for low-latency decision-making without cloud dependency." },
      { icon: "Chart", title: "Real-time analytics", desc: "Stream processing pipelines that transform raw sensor data into actionable dashboards and automated alerts." },
      { icon: "Shield", title: "IoT security", desc: "End-to-end encryption, secure boot, OTA updates, and device authentication to protect your connected ecosystem." },
      { icon: "Network", title: "Digital twins", desc: "Virtual replicas of physical assets for simulation, monitoring, predictive maintenance, and scenario planning." },
    ],
    process: ["Hardware assessment", "Architecture design", "Firmware development", "Cloud integration", "Security hardening", "Deployment & monitoring"],
    techStack: ["AWS IoT Core", "MQTT", "Raspberry Pi", "Arduino", "TensorFlow Lite", "InfluxDB", "Grafana", "Kubernetes"],
  },
  {
    slug: "blockchain-solutions",
    title: "Blockchain Solutions",
    eyebrow: "Smart contracts · Web3",
    subtitle: "Smart contracts, DeFi platforms, and decentralised applications.",
    features: [
      { icon: "File", title: "Smart contracts", desc: "Secure, audited smart contracts on Ethereum, Solana, and Polygon for DeFi, NFTs, governance, and supply chain." },
      { icon: "Coin", title: "DeFi platforms", desc: "Decentralised exchanges, lending protocols, yield aggregators, and liquidity pools with robust security auditing." },
      { icon: "Image", title: "NFT marketplaces", desc: "Custom NFT minting, marketplace, and auction platforms with royalty management and multi-chain support." },
      { icon: "Network", title: "Supply chain tracking", desc: "Immutable ledger systems for end-to-end supply chain provenance, authentication, and compliance verification." },
      { icon: "Wallet", title: "Wallet integration", desc: "Web3 wallet connections with MetaMask, WalletConnect, and custodial solutions for seamless user onboarding." },
      { icon: "Shield", title: "Security auditing", desc: "Comprehensive smart contract audits covering reentrancy, overflow, access control, and economic exploit vectors." },
    ],
    process: ["Use case analysis", "Token economics", "Smart contract development", "Security audit", "Testnet deployment", "Mainnet launch"],
    techStack: ["Solidity", "Rust", "Ethereum", "Solana", "Polygon", "Hardhat", "Web3.js", "IPFS"],
  },
  {
    slug: "product-consulting",
    title: "Product Consulting",
    eyebrow: "Product strategy",
    subtitle: "Product strategy, UX research, and go-to-market planning.",
    features: [
      { icon: "Target", title: "Product strategy", desc: "Market research, competitive analysis, and product-market fit validation to define a winning product vision." },
      { icon: "People", title: "UX research", desc: "User interviews, surveys, usability testing, and persona development to build products users actually need." },
      { icon: "Pen", title: "Design sprints", desc: "Rapid prototyping and validation cycles that compress months of discovery into focused one-week sprints." },
      { icon: "Map", title: "Product roadmapping", desc: "Prioritised feature roadmaps balancing user needs, technical feasibility, and business impact with clear milestones." },
      { icon: "Rocket", title: "Go-to-market strategy", desc: "Launch planning covering positioning, pricing, distribution channels, and growth metrics for successful market entry." },
      { icon: "Chart", title: "Analytics & growth", desc: "Instrumentation, funnel analysis, cohort tracking, and data-driven experimentation for continuous product improvement." },
    ],
    process: ["Discovery workshop", "User research", "Ideation & prioritisation", "Prototype & test", "Roadmap delivery", "Launch support"],
    techStack: ["Figma", "Miro", "Amplitude", "Mixpanel", "Jira", "Notion", "Hotjar", "Segment"],
  },
  {
    slug: "outsourcing",
    title: "Business Collaboration & Outsourcing",
    eyebrow: "Dedicated teams",
    subtitle: "Dedicated teams and staff augmentation for your projects.",
    features: [
      { icon: "People", title: "Dedicated teams", desc: "Full-time engineers, designers, and PMs integrated into your workflow with direct communication and shared tools." },
      { icon: "People", title: "Staff augmentation", desc: "Scale your team rapidly with pre-vetted specialists who can contribute from day one, no ramp-up delays." },
      { icon: "Building", title: "Offshore development centre", desc: "Your own branded development centre with dedicated workspace, infrastructure, and management support." },
      { icon: "Clock", title: "Flexible engagement", desc: "Choose from fixed-price, time-and-material, or retainer models based on project scope and timeline requirements." },
      { icon: "Chat", title: "Transparent communication", desc: "Daily standups, weekly demos, Slack channels, and shared project management tools for full visibility." },
      { icon: "Check", title: "Quality assurance", desc: "Dedicated QA engineers, code reviews, automated testing, and compliance with your quality standards and processes." },
    ],
    process: ["Requirement analysis", "Team assembly", "Onboarding & integration", "Sprint execution", "Review & iterate", "Scale & optimise"],
    techStack: ["Jira", "Confluence", "Slack", "GitHub", "CI/CD", "Agile/Scrum", "Code review", "Documentation"],
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    eyebrow: "AWS · Azure · GCP",
    subtitle: "Cloud architecture, migration, and DevOps on AWS, Azure, and GCP.",
    features: [
      { icon: "Building", title: "Cloud architecture", desc: "Design scalable, fault-tolerant architectures on AWS, Azure, or GCP following Well-Architected Framework best practices." },
      { icon: "Refresh", title: "Cloud migration", desc: "Lift-and-shift, re-platform, or re-architect strategies with zero-downtime migration and comprehensive testing." },
      { icon: "Infinity", title: "DevOps & CI/CD", desc: "Infrastructure as Code with Terraform, automated pipelines with GitHub Actions, and GitOps workflows for reliable deployments." },
      { icon: "Cube", title: "Containerisation", desc: "Docker and Kubernetes orchestration with service mesh, auto-scaling, and multi-region deployments." },
      { icon: "Shield", title: "Security & compliance", desc: "IAM policies, encryption, VPC design, WAF configuration, and compliance frameworks (SOC 2, HIPAA, GDPR)." },
      { icon: "Money", title: "Cost optimisation", desc: "Reserved instances, spot fleets, right-sizing, and FinOps practices to reduce cloud spend by 30–50%." },
    ],
    process: ["Cloud assessment", "Architecture design", "Migration planning", "Implementation", "Security hardening", "Optimisation & FinOps"],
    techStack: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "GitHub Actions", "Datadog"],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    eyebrow: "Modernise the stack",
    subtitle: "Modernise legacy systems and adopt digital-first strategies.",
    features: [
      { icon: "Building", title: "Legacy modernisation", desc: "Migrate monolithic systems to cloud-native microservices with zero downtime and incremental refactoring strategies." },
      { icon: "Bot", title: "Process automation", desc: "Digitise manual workflows with intelligent automation, reducing errors and cycle times across departments." },
      { icon: "Database", title: "Data platform", desc: "Unified data lakes, real-time analytics, and self-service BI tools that turn raw data into strategic decisions." },
      { icon: "Smartphone", title: "Digital experience", desc: "Customer-facing portals, mobile apps, and self-service platforms that modernise engagement touchpoints." },
      { icon: "People", title: "Change management", desc: "Training, communication, and adoption strategies to ensure your team embraces new digital tools and processes." },
      { icon: "Gauge", title: "Performance benchmarking", desc: "KPI dashboards and maturity assessments that measure transformation progress against industry benchmarks." },
    ],
    process: ["Digital maturity assessment", "Vision & strategy", "Technology selection", "Phased implementation", "Change management", "Continuous improvement"],
    techStack: ["Microservices", "Event-driven architecture", "API Gateway", "Kafka", "Cloud Native", "Low-Code", "RPA", "BI Tools"],
  },
  {
    slug: "quality-assurance",
    title: "Quality Assurance",
    eyebrow: "Test with rigour",
    subtitle: "Automated testing, security audits, and performance optimisation.",
    features: [
      { icon: "Beaker", title: "Automated testing", desc: "End-to-end test automation using Cypress, Playwright, and Selenium covering UI, API, and integration scenarios." },
      { icon: "Gauge", title: "Performance testing", desc: "Load, stress, and scalability testing with JMeter and k6 to identify bottlenecks before they impact users." },
      { icon: "Shield", title: "Security testing", desc: "Penetration testing, OWASP vulnerability scanning, and security code review to harden your applications." },
      { icon: "Smartphone", title: "Mobile QA", desc: "Cross-device testing on real devices and emulators covering iOS, Android, various screen sizes, and OS versions." },
      { icon: "Check", title: "Accessibility testing", desc: "WCAG 2.1 compliance testing with screen reader validation and keyboard navigation verification." },
      { icon: "Network", title: "CI/CD integration", desc: "Test suites integrated into your CI/CD pipeline for automated quality gates on every code change." },
    ],
    process: ["Test strategy", "Test plan & cases", "Environment setup", "Test execution", "Defect management", "Reporting & sign-off"],
    techStack: ["Cypress", "Playwright", "Selenium", "JMeter", "k6", "Appium", "Postman", "SonarQube"],
  },
];

// -------------------- INDUSTRIES -------------------- //
export type Industry = {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  challenges: string[];
  solutions: string[];
  stats: Stat[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    eyebrow: "Healthcare technology",
    subtitle: "Transforming patient care with intelligent health technology solutions.",
    challenges: ["Patient data fragmentation across systems", "Long wait times and scheduling inefficiencies", "Regulatory compliance (HIPAA, HITECH)", "Manual diagnostic processes"],
    solutions: ["EHR integration and unified patient portals", "AI-powered triage and appointment optimisation", "Automated compliance monitoring and reporting", "Computer vision for medical imaging analysis"],
    stats: [{ value: "60%", label: "Reduction in wait times" }, { value: "99.7%", label: "HIPAA compliance rate" }, { value: "45%", label: "Faster diagnostics" }],
  },
  {
    slug: "fintech",
    title: "FinTech",
    eyebrow: "Financial technology",
    subtitle: "Secure, scalable financial technology for the modern economy.",
    challenges: ["Increasing fraud sophistication", "Complex regulatory requirements (PCI DSS, SOX)", "Legacy core banking systems", "Customer demand for real-time services"],
    solutions: ["ML-powered real-time fraud detection engines", "Automated regulatory reporting and compliance", "API-first banking platform modernisation", "Instant payments and digital wallet solutions"],
    stats: [{ value: "99.7%", label: "Fraud detection accuracy" }, { value: "$2M+", label: "Annual savings per client" }, { value: "2M+", label: "Daily transactions processed" }],
  },
  {
    slug: "ecommerce",
    title: "eCommerce",
    eyebrow: "Omnichannel commerce",
    subtitle: "Omnichannel commerce platforms that drive revenue growth.",
    challenges: ["Cart abandonment and low conversion rates", "Inventory management across channels", "Personalisation at scale", "Peak traffic scalability"],
    solutions: ["AI-driven recommendation engines and dynamic pricing", "Unified inventory and order management systems", "Personalised shopping experiences with ML", "Auto-scaling cloud infrastructure for flash sales"],
    stats: [{ value: "35%", label: "Increase in conversion" }, { value: "$50M+", label: "GMV managed" }, { value: "100K+", label: "Concurrent users" }],
  },
  {
    slug: "logistics",
    title: "Logistics",
    eyebrow: "Supply chain & fleet",
    subtitle: "Supply chain optimisation through intelligent automation.",
    challenges: ["Route optimisation complexity", "Real-time fleet visibility", "Last-mile delivery costs", "Supply chain disruption forecasting"],
    solutions: ["AI-powered route optimisation algorithms", "IoT fleet tracking with real-time dashboards", "Automated dispatch and delivery scheduling", "Predictive supply chain analytics"],
    stats: [{ value: "25%", label: "Fuel cost reduction" }, { value: "10K+", label: "Vehicles tracked" }, { value: "40%", label: "Faster deliveries" }],
  },
  {
    slug: "education",
    title: "Education",
    eyebrow: "EdTech at scale",
    subtitle: "EdTech solutions that personalise learning at scale.",
    challenges: ["One-size-fits-all learning approaches", "Student engagement and retention", "Administrative overhead", "Remote learning quality"],
    solutions: ["Adaptive learning paths powered by AI", "Gamification and interactive content platforms", "Automated grading and administrative workflows", "High-quality video conferencing and collaboration tools"],
    stats: [{ value: "500K+", label: "Students served" }, { value: "40%", label: "Better retention" }, { value: "60%", label: "Admin time saved" }],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    eyebrow: "PropTech",
    subtitle: "PropTech platforms for modern property management and sales.",
    challenges: ["Fragmented property listing data", "Manual valuation processes", "Tenant communication overhead", "Property maintenance scheduling"],
    solutions: ["Unified MLS integration and search platforms", "AI-powered property valuation models", "Tenant portals with automated communication", "IoT-enabled predictive maintenance systems"],
    stats: [{ value: "30%", label: "Faster closings" }, { value: "95%", label: "Valuation accuracy" }, { value: "50%", label: "Fewer maintenance calls" }],
  },
  {
    slug: "on-demand",
    title: "On-Demand",
    eyebrow: "Marketplace & gig",
    subtitle: "Marketplace and on-demand service platforms that scale.",
    challenges: ["Matching supply with real-time demand", "Driver/provider retention", "Dynamic pricing optimisation", "Multi-sided marketplace complexity"],
    solutions: ["AI matching algorithms with demand prediction", "Incentive optimisation and loyalty programmes", "Surge pricing with fairness algorithms", "Scalable marketplace architecture"],
    stats: [{ value: "3×", label: "Faster matching" }, { value: "40%", label: "Better retention" }, { value: "99.9%", label: "Platform uptime" }],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    eyebrow: "Industry 4.0",
    subtitle: "Smart manufacturing solutions with IoT and AI integration.",
    challenges: ["Unplanned equipment downtime", "Quality control inconsistencies", "Supply chain visibility gaps", "Energy consumption optimisation"],
    solutions: ["IoT sensors with predictive maintenance AI", "Computer vision quality inspection systems", "Real-time supply chain tracking dashboards", "AI-driven energy management and optimisation"],
    stats: [{ value: "45%", label: "Less downtime" }, { value: "99.2%", label: "Defect detection" }, { value: "30%", label: "Energy savings" }],
  },
  {
    slug: "automotive",
    title: "Automotive",
    eyebrow: "Connected vehicles",
    subtitle: "Connected vehicle solutions and automotive tech platforms.",
    challenges: ["Connected vehicle data management", "Dealership digital experience", "Aftermarket service optimisation", "EV charging infrastructure"],
    solutions: ["Vehicle telematics platforms with OTA updates", "Digital showroom and configurator experiences", "Predictive service scheduling and parts management", "EV charging network management systems"],
    stats: [{ value: "50%", label: "Service revenue increase" }, { value: "35%", label: "Better customer satisfaction" }, { value: "10K+", label: "Connected vehicles" }],
  },
  {
    slug: "travel",
    title: "Travel",
    eyebrow: "Travel technology",
    subtitle: "Travel tech that enhances booking and guest experiences.",
    challenges: ["Price comparison and booking complexity", "Personalisation across touchpoints", "Dynamic inventory management", "Post-booking engagement"],
    solutions: ["AI-powered fare prediction and booking engines", "Hyper-personalised travel recommendations", "Real-time inventory sync across OTAs and direct", "Automated itinerary management and concierge bots"],
    stats: [{ value: "28%", label: "Booking conversion increase" }, { value: "45%", label: "Higher repeat bookings" }, { value: "3×", label: "Engagement rate" }],
  },
  {
    slug: "restaurant",
    title: "Restaurant",
    eyebrow: "Food service tech",
    subtitle: "Restaurant management and ordering platform solutions.",
    challenges: ["Order management across platforms", "Kitchen efficiency and waste reduction", "Customer loyalty and retention", "Staff scheduling complexity"],
    solutions: ["Unified POS with multi-platform order aggregation", "AI-powered inventory and waste prediction", "Digital loyalty programmes with personalised offers", "Automated scheduling based on demand forecasting"],
    stats: [{ value: "35%", label: "Reduction in food waste" }, { value: "25%", label: "Revenue increase" }, { value: "50%", label: "Faster order processing" }],
  },
  {
    slug: "retail",
    title: "Retail",
    eyebrow: "Unified commerce",
    subtitle: "Retail technology for unified commerce and customer engagement.",
    challenges: ["Omnichannel inventory complexity", "In-store and online experience gap", "Customer data unification", "Dynamic pricing and promotions"],
    solutions: ["Unified commerce platform with real-time inventory", "AR try-on and personalised in-store experiences", "Customer data platform with 360-degree profiles", "AI-driven pricing and promotional optimisation"],
    stats: [{ value: "40%", label: "Higher AOV" }, { value: "30%", label: "Inventory accuracy improvement" }, { value: "55%", label: "Customer retention increase" }],
  },
];

// -------------------- CASE STUDIES -------------------- //
export type CaseStudyDetail = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  categories: string[];
  subtitle: string;
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: Feature[];
  results: Stat[];
  techStack: string[];
};

export const CASE_STUDIES_DATA: CaseStudyDetail[] = [
  {
    slug: "road-devil",
    title: "Vehicle Intelligence Platform",
    client: "Confidential",
    industry: "AI & Connected Vehicle",
    categories: ["IoT & Telematics", "AI & ML"],
    subtitle: "Vertically integrated vehicle intelligence — proprietary AI, real-time alerts, and owned hardware IP. UK trade-mark protected.",
    overview: "A complete vehicle intelligence stack — from in-vehicle hardware and embedded firmware through proprietary AI inference, real-time event notifications, fleet dashboards, and a managed licensing programme. Owned hardware IP, owned algorithms, owned go-to-market.",
    challenge: "Operators of high-value fleets — cash-in-transit, petroleum carriers, sensitive logistics — needed more than passive black-box recording. They needed cameras that recognised events as they happened, prioritised them by severity, and pushed verifiable evidence to insurers within minutes of an incident. Off-the-shelf telematics hardware shipped with closed firmware, no AI, and reactive workflows that couldn't survive a serious claim cycle.",
    solution: "We built the platform end-to-end. The hardware is purpose-designed multi-camera units with integrated GPS, accelerometer, and a coprocessor running custom CV inference. Firmware streams video and event metadata to a managed cloud platform that fans out to operator dashboards, vendor APIs, and insurer evidence packets. The AI models are trained on the operator's own footage and continuously fine-tuned. Everything from the silicon to the licence agreements ships under the operator's own mark.",
    keyFeatures: [
      { icon: "Camera", title: "Owned camera hardware", desc: "Purpose-built multi-camera units with integrated coprocessors for on-device CV inference at sub-second latency." },
      { icon: "Cpu", title: "Proprietary AI algorithms", desc: "Event recognition models trained on operator footage — speeding, harsh braking, cornering, distraction, near-miss detection." },
      { icon: "Alert", title: "Real-time notifications", desc: "Severity-ranked alerts pushed to ops dashboards, mobile apps, and partner APIs as events happen, not after the trip." },
      { icon: "Video", title: "FNOL evidence packets", desc: "Auto-assembled First Notice of Loss bundles — multi-angle clips, GPS, telemetry — delivered to insurers within minutes." },
      { icon: "Shield", title: "Trade-mark protected IP", desc: "UK trade mark covering vehicle camera systems, software platforms, and the licensing programme." },
      { icon: "Plug", title: "Vendor licensing programme", desc: "REST APIs and a white-label SDK so partner brands can ship the platform inside their own products." },
      { icon: "Network", title: "OBD-II integration", desc: "Bluetooth OBD-II coupling enriches video events with engine-level telemetry — fuel, RPM, fault codes." },
      { icon: "Map", title: "Live fleet dashboard", desc: "Real-time map of every device, with severity heat-mapped events, route playback, and driver scorecards." },
    ],
    results: [
      { value: "UK", label: "Trade-mark protected" },
      { value: "End-to-end", label: "Hardware + AI + cloud" },
      { value: "Sub-second", label: "Event detection latency" },
      { value: "Minutes", label: "FNOL packet delivery" },
    ],
    techStack: ["Java", "Python", "ONNX", "Edge inference", "Socket programming", "MySQL", "Azure", "REST APIs", "OBD-II"],
  },
  {
    slug: "pe-assessment-platform",
    title: "Standards-Based PE Assessment Platform",
    client: "Confidential",
    industry: "Education & Health",
    categories: ["Healthcare", "Education & Fitness"],
    subtitle: "The only platform that turns mandatory PE testing into student growth — national fitness protocols, presidential standards, and district tests, all in one place.",
    overview: "Ditch paper grids. Ditch the spreadsheet that lives on the gym teacher's laptop. The platform digitises national fitness testing, presidential youth-fitness programmes, and district-level tests, then converts the raw scores into personalised goals, SEL journals, and standards-based workouts — generating clear growth reports that admins and parents can read at a glance, without the burnout.",
    challenge: "Physical education teachers across the US still administer mandatory fitness testing on paper. Scores get re-entered into spreadsheets weeks later, longitudinal tracking across multiple academic years is essentially impossible, parents see nothing, and growth — the actual signal that should drive curriculum — gets lost in the administrative noise. The same teacher who designed thoughtful lessons spent half their week on data entry instead of teaching.",
    solution: "We built a unified platform that captures every assessment digitally, pulls in national fitness protocols, presidential standards, and state PE standards, maps each student's results to personalised goals and standards-based workouts, gives students an SEL journal to track effort and reflection, and auto-generates growth reports for parents, teachers, and district admins. Adaptive modifications cover differing abilities; FERPA-compliant data handling is built in from day one.",
    keyFeatures: [
      { icon: "Clock", title: "Digital fitness testing", desc: "PACER, curl-ups, sit-and-reach and other standard protocols captured with auto-scoring and benchmark comparison." },
      { icon: "Target", title: "Standards-based workouts", desc: "Workouts auto-recommended from each student's results, mapped to state PE standards." },
      { icon: "Heart", title: "SEL journals", desc: "Student-owned reflection journals tracking effort, mood, and progress alongside the physical data." },
      { icon: "Chart", title: "Longitudinal growth reports", desc: "Multi-year tracking across grades — parents and admins see trajectory, not just a snapshot." },
      { icon: "People", title: "Adaptive modifications", desc: "Activity modifications for students with disabilities, injuries, or differing ability levels." },
      { icon: "Building", title: "Parent portal", desc: "Read-only access for parents to see their child's growth, goals, and assessment history." },
      { icon: "Shield", title: "FERPA-compliant", desc: "Student data handled under FERPA with audit logs, role-based access, and encrypted storage." },
      { icon: "File", title: "District reporting", desc: "Automated rollups of standards compliance, coverage, and growth across schools and districts." },
    ],
    results: [
      { value: "Standards-aligned", label: "Native testing protocols" },
      { value: "Workouts + reporting", label: "Standards-mapped" },
      { value: "Multi-year", label: "Growth tracking" },
      { value: "FERPA", label: "Compliant from day one" },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Redis", "Chart.js", "PDF generation"],
  },
  {
    slug: "texas-cleaning-service",
    title: "Nationwide Cleaning Marketplace",
    client: "Confidential",
    industry: "Marketplace · Local Services",
    categories: ["Marketplace"],
    subtitle: "Reliable, professional cleaning across an entire US state — homes and offices, on-demand booking, dispatch, and recurring schedules.",
    overview: "A statewide cleaning marketplace covering homes and offices. Customers book in seconds, see vetted cleaners with real reviews, get real-time arrival ETAs, and pay through a single saved card. Recurring schedules, last-minute availability, and a satisfaction guarantee bring customers back.",
    challenge: "A growing regional cleaning company was running their entire business on phone calls, SMS, and a paper schedule pinned to the office wall. Booking a clean took eight minutes on the phone. Cleaners would no-show or get the wrong address. Repeat customers had to re-explain their preferences every visit. Reviews lived only on Google. There was no path to scale without hiring three more dispatchers.",
    solution: "We built a customer-facing booking app, a cleaner mobile app, and an admin dashboard sharing one marketplace core. Customers select home size, service type, frequency, and pay through Stripe in under thirty seconds. Cleaners get jobs pushed to their phone with one-tap accept, in-app navigation, and a checklist of customer preferences. The admin panel handles dispute resolution, recurring billing, and operational analytics — coverage maps, no-show rate, average rating per cleaner.",
    keyFeatures: [
      { icon: "Bolt", title: "Instant booking", desc: "Sub-thirty-second booking with home size, service type, frequency, and saved payment." },
      { icon: "Refresh", title: "Recurring schedules", desc: "Weekly, bi-weekly, monthly schedules with auto-billed cards and easy reschedule." },
      { icon: "Pin", title: "Real-time tracking", desc: "Live cleaner ETA on the customer app with arrival notification and route map." },
      { icon: "Check", title: "Vetted professionals", desc: "Background checks and ID verification on every cleaner before they go live." },
      { icon: "Chat", title: "In-app messaging", desc: "Direct chat between customer and cleaner with photo sharing for service detail clarification." },
      { icon: "Star", title: "Two-way ratings", desc: "Customers and cleaners both rate each visit; quality flags trigger admin review." },
      { icon: "Money", title: "Stripe payments", desc: "Card on file, auto-billed for recurring jobs, with tipping and gift card support." },
      { icon: "Chart", title: "Operations dashboard", desc: "Coverage heatmap, dispatch metrics, customer LTV, cleaner utilisation, and dispute queue." },
    ],
    results: [
      { value: "Nationwide", label: "Service coverage" },
      { value: "< 30 sec", label: "Booking time" },
      { value: "Recurring", label: "Schedule support" },
      { value: "Stripe", label: "Card-on-file payments" },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Google Maps API", "Redis", "AWS", "Socket.io"],
  },
  {
    slug: "camera-telematics",
    title: "Fleet Telematics & Asset Safety",
    client: "Confidential",
    industry: "IoT & Telematics",
    categories: ["IoT & Telematics", "Enterprise & CRM"],
    subtitle: "Forty years of camera engineering, applied to fleet safety. Solutions safeguarding assets across seaports, airports, roadside maintenance, haulage, and motor fleets.",
    overview: "A long-established camera-systems specialist needed to evolve from a hardware-only business into a complete software platform. We built the modern software stack that pairs with their hardware — multi-tenant fleet dashboards, role-based admin, real-time vehicle tracking with OpenStreetMap, OBD-II vehicle diagnostics, driver scoring, and a complete REST API suite for vendor integrations. Running in production across thousands of vehicles since 2016.",
    challenge: "The client needed to evolve from a hardware-only business into a full software platform without disrupting their existing customer base. They needed to handle real-time video streaming from thousands of in-vehicle units, process 150M+ daily GPS data points, integrate OBD-II diagnostics over Bluetooth, surface configurable driver-behaviour scoring, and let vendors embed the system inside their own platforms via APIs — all while keeping the hardware-software pairing rock-solid.",
    solution: "End-to-end platform from device-server socket code through role-based dashboards (super admin, vendor admin, staff), native Android and iOS apps, and a complete REST API suite. Real-time tracking on OpenStreetMap, configurable driver-scoring thresholds applied to devices on next reconnect, FNOL video evidence for insurance claims, and a vendor licensing model so partners can resell the platform under their own brand.",
    keyFeatures: [
      { icon: "Wifi", title: "Real-time configuration", desc: "Tune speed, braking, cornering, acceleration and driver-score thresholds from the UI — adopted by the device on its next server connection." },
      { icon: "Pin", title: "Live vehicle tracking", desc: "Real-time monitoring of thousands of devices with custom reporting and 150M+ GPS data points processed daily." },
      { icon: "Video", title: "FNOL video evidence", desc: "Real-time footage from in-vehicle cameras used as evidence for faster insurance claim processing." },
      { icon: "Car", title: "OBD-II ECU integration", desc: "Vehicle diagnostics via Bluetooth OBD-II providing engine health, fuel consumption, and performance metrics." },
      { icon: "Trophy", title: "Driver scoring", desc: "Behaviour scoring with custom goals, leaderboards, and scorecards to improve driving and reduce accidents." },
      { icon: "Smartphone", title: "Native mobile apps", desc: "Vendor-branded Android app for phones and tablets and iOS app for iPhone and iPad with full dashboard parity." },
      { icon: "Shield", title: "Multi-tenant CMS", desc: "Separate super admin and vendor admin backends with role-based access control for staff and employees." },
      { icon: "Plug", title: "REST API suite", desc: "Complete REST APIs so vendors can embed the tracking system into any other platform or custom UI." },
    ],
    results: [
      { value: "40+", label: "Years of camera expertise" },
      { value: "Since 2016", label: "Software platform partnership" },
      { value: "150M+", label: "Daily GPS data points" },
      { value: "24/7", label: "Real-time monitoring" },
    ],
    techStack: ["Java", "Hibernate", "Socket programming", "Jersey", "Swift", "MySQL", "Azure", "OpenStreetMap", "REST APIs"],
  },
  {
    slug: "morbidelli-connected",
    title: "Connected Motorcycle Companion App",
    client: "Confidential",
    industry: "Connected Vehicle · Mobile",
    categories: ["IoT & Telematics", "Marketplace"],
    subtitle: "Native iOS and Android companion app for connected motorcycles — real-time diagnostics, smart navigation, panic SOS, and a riding community radar.",
    overview: "The companion app pairs with the bike via QR-code activation and turns ownership into a connected experience — live engine diagnostics, turn-by-turn navigation, an emergency SOS panic mode that immobilises the engine below 20 km/h, ride statistics, and a community radar showing nearby riders of the same brand. iOS and Android, online with offline-capable ride logging, multiple bikes per account, 24/7 chat support.",
    challenge: "An international motorcycle brand wanted to extend the customer experience from showroom into the rider's everyday life. Riders increasingly expect the same connected-vehicle features they get from car platforms: live diagnostics, navigation, anti-theft, community. Off-the-shelf white-label apps couldn't speak the brand's design language or integrate with the manufacturer's specific telematics hardware, and a fragmented experience would dilute the brand at exactly the touchpoint that matters most.",
    solution: "We built native iOS and Android apps with bike pairing via QR scan, real-time vehicle diagnostics, live route tracking with offline ride storage, navigation with turn-by-turn guidance, an SOS panic mode with automatic location sharing and engine immobilisation under 20 km/h, ride performance analytics, ownership transfer flows, a community radar showing nearby riders of the same brand, and integrated 24/7 chat support. Multiple motorcycles can be managed from one account.",
    keyFeatures: [
      { icon: "Qr", title: "QR pairing", desc: "Scan a QR sticker on the bike to activate and pair the app — no manual VIN entry, no setup friction." },
      { icon: "Gauge", title: "Real-time diagnostics", desc: "Live engine health, vibration monitoring, performance data streamed from the bike to the rider's phone." },
      { icon: "Map", title: "Smart navigation", desc: "Turn-by-turn navigation with live updates, ride logging, and offline-capable route storage." },
      { icon: "Alert", title: "Emergency SOS", desc: "Panic button shares precise location with emergency contacts and immobilises engine when below 20 km/h." },
      { icon: "Lock", title: "Remote immobilization", desc: "Disable engine remotely from the app for theft prevention, with safety interlock by speed." },
      { icon: "People", title: "Community radar", desc: "Discover nearby riders of the same brand, join group rides, and message other owners through the app." },
      { icon: "Chart", title: "Ride statistics", desc: "Per-ride and lifetime statistics — distance, top speed, average pace, lean angle on supported bikes." },
      { icon: "Refresh", title: "Ownership transfer", desc: "Securely transfer the bike between owners, including service history and configuration." },
    ],
    results: [
      { value: "iOS + Android", label: "Native apps" },
      { value: "QR pairing", label: "Zero-friction setup" },
      { value: "SOS + immobilizer", label: "Connected safety" },
      { value: "Offline-capable", label: "Ride logging" },
    ],
    techStack: ["Swift", "Kotlin", "React Native", "Node.js", "PostgreSQL", "MQTT", "Firebase", "AWS"],
  },
  {
    slug: "motwi-platform",
    title: "Multi-Region Brand & Product Platform",
    client: "Confidential",
    industry: "Brand Web · International",
    categories: ["Marketplace", "Education & Fitness"],
    subtitle: "Multi-language brand and product platform for an international lifestyle motorcycle brand — global product showcases, distributor program, and editorial content.",
    overview: "An international lifestyle motorcycle brand needed a unified global web presence — product pages, regional storefront variants (English and Chinese localisations), distributor recruitment, store finder, and editorial content — all rendered through a shared design system that can scale to additional regions without bespoke per-locale builds.",
    challenge: "The brand needed a single web platform that could serve multiple international markets simultaneously — different languages, different product lineups per region, different distributor programmes — without forking the codebase per locale. Their previous setup duplicated the same WordPress install per market, so every brand update required N parallel deploys, and the product catalogue drifted between regions within weeks.",
    solution: "A single Next.js platform with route-based locale segments (`/int-en`, `/int-zh`), a shared design system, and a per-region content layer pulled from a headless CMS. Product showcases, store finder, distributor recruitment forms, and editorial content all render from the same components in every locale. Editors update one canonical record per product; locale variants override only the fields that genuinely change.",
    keyFeatures: [
      { icon: "Globe", title: "Multi-locale routing", desc: "Route-based localisation with `/int-en`, `/int-zh`, and ready-to-extend regional segments." },
      { icon: "Cube", title: "Headless CMS", desc: "Editor-friendly content layer with canonical product records and locale-specific overrides." },
      { icon: "Image", title: "Brand product pages", desc: "Hero galleries, spec tables, lifestyle imagery, and embedded video — same components, different content." },
      { icon: "Pin", title: "Store locator", desc: "Geo-aware dealer finder with map integration, opening hours, and contact details per location." },
      { icon: "People", title: "Distributor program", desc: "Lead-gen forms for regional distributors, routed to the right country team based on locale." },
      { icon: "File", title: "Editorial content", desc: "News, brand stories, product launches with author bylines, related-content cross-links, and SEO-tuned metadata." },
      { icon: "Search", title: "SEO + sitemap", desc: "Per-locale sitemaps, hreflang annotations, structured data for products, and OpenGraph for every page." },
      { icon: "Bolt", title: "Edge-rendered", desc: "Static generation with ISR for instant brand-content updates without full redeploys." },
    ],
    results: [
      { value: "Multi-region", label: "International rollout" },
      { value: "EN + ZH", label: "Live locales" },
      { value: "Single codebase", label: "All markets" },
      { value: "Editor-led", label: "Content updates" },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Headless CMS", "i18n routing", "Vercel", "Edge runtime"],
  },
  {
    slug: "keeway-global",
    title: "Global Motorcycle Brand Platform",
    client: "Confidential",
    industry: "Brand Web · Global",
    categories: ["Marketplace"],
    subtitle: "Global web platform for an international motorcycle brand — immersive product pages for the 125–250cc lineup, store locator, distributor recruitment, and embedded video.",
    overview: "A flagship lightweight-motorcycle brand needed a unified international web platform. We delivered immersive product pages across the full lineup, supported international distribution via a store locator and distributor recruitment programme, and integrated social media for lifestyle marketing. Built on the same multi-locale platform powering the brand's sibling property, with its own design language layered on top.",
    challenge: "The brand sells across dozens of countries through independent distributors. The previous web presence was a static brochure that didn't reflect the brand's lifestyle positioning, couldn't easily add new product launches, and offered no clear path for prospective distributors to engage. Different regional sites used different visual languages, fragmenting the brand identity riders were supposed to recognise.",
    solution: "A unified global platform with the multi-locale architecture used across the brand family, but skinned with this brand's distinct visual language. Each motorcycle has its own immersive product page with hero video, spec table, lifestyle gallery, and call-to-action paths to the store locator or distributor sign-up. The store finder uses Google Maps with geolocation. The distributor programme is gated by a structured form that routes leads to the right regional team. Social embeds keep the page warm with the brand's video content.",
    keyFeatures: [
      { icon: "Bike", title: "Product showcases", desc: "Immersive product pages across the lightweight-motorcycle lineup — hero video, specs, lifestyle gallery." },
      { icon: "Pin", title: "Global store locator", desc: "Geo-aware dealer finder with map integration, opening hours, and direct contact links." },
      { icon: "People", title: "Distributor recruitment", desc: "Structured lead-gen for international distributors, routed to the right regional team automatically." },
      { icon: "Video", title: "Embedded video", desc: "Brand video content embedded across product pages and the news section to keep the experience kinetic." },
      { icon: "File", title: "News & launches", desc: "Editorial section for product announcements, brand stories, and event coverage with SEO-tuned metadata." },
      { icon: "Globe", title: "Multi-region ready", desc: "Shared multi-locale architecture, ready to spin up additional country variants without forks." },
      { icon: "Search", title: "Brand-tuned SEO", desc: "Structured data per product, hreflang per region, OpenGraph cards optimised for the lifestyle audience." },
      { icon: "Palette", title: "Distinct visual language", desc: "The brand's lifestyle palette and typography layered on the shared platform — same engine, different paint." },
    ],
    results: [
      { value: "125–250cc", label: "Product lineup live" },
      { value: "International", label: "Distribution coverage" },
      { value: "Lifestyle-led", label: "Brand positioning" },
      { value: "Shared core", label: "Cross-brand platform" },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Headless CMS", "Google Maps", "i18n routing", "YouTube API", "Vercel"],
  },
];

// -------------------- BLOG ARTICLES -------------------- //
export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  sections: { heading: string; body: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "enterprise-ai-adoption-2026",
    title: "The Enterprise AI Adoption Playbook for 2026",
    subtitle: "A practical guide to implementing AI across your organisation.",
    date: "March 15, 2026",
    readTime: "8 min read",
    sections: [
      { heading: "The AI adoption imperative", body: "In 2026, enterprises that have not begun their AI journey face an existential competitive threat. According to recent industry surveys, 78% of Fortune 500 companies have at least one AI system in production, up from just 35% three years ago. The gap between AI adopters and laggards is widening at an accelerating pace." },
      { heading: "Step 1: Assess your AI readiness", body: "Before investing in AI, organisations must honestly evaluate their data infrastructure, team capabilities, and organisational culture. The three pillars of AI readiness are: data quality and accessibility, technical talent and skills, and executive sponsorship with clear business objectives." },
      { heading: "Step 2: Identify high-impact use cases", body: "Start with use cases that combine high business value with technical feasibility. Common early wins include customer service automation, demand forecasting, fraud detection, and document processing. Avoid the trap of pursuing moonshot projects before building foundational capabilities." },
      { heading: "Step 3: Build vs buy vs partner", body: "For most enterprises, the optimal approach is a hybrid: buy commodity AI capabilities (OCR, basic NLP), partner with specialists for domain-specific solutions, and build custom models only for true competitive differentiators. This balances speed-to-market with long-term strategic advantage." },
      { heading: "Step 4: Establish AI governance", body: "Responsible AI deployment requires governance frameworks covering model bias testing, data privacy compliance, explainability requirements, and ongoing monitoring. Organisations that establish governance early avoid costly remediation and reputational risks later." },
    ],
  },
  {
    slug: "rag-vs-traditional-search",
    title: "Why RAG is Replacing Traditional Search",
    subtitle: "How retrieval-augmented generation is transforming enterprise knowledge.",
    date: "March 8, 2026",
    readTime: "6 min read",
    sections: [
      { heading: "The limits of traditional search", body: "Keyword-based search has served enterprises well for decades, but it fundamentally breaks down when users need answers rather than links. Traditional search returns documents; RAG returns precise, source-cited answers synthesised from your entire knowledge base." },
      { heading: "How RAG works", body: "Retrieval-Augmented Generation combines two powerful capabilities: semantic retrieval that finds relevant information across thousands of documents, and generative AI that synthesises those sources into coherent, contextual answers. The result is an AI assistant that knows everything your organisation knows." },
      { heading: "RAG vs fine-tuning", body: "While fine-tuning bakes knowledge into model weights (expensive and quickly outdated), RAG retrieves knowledge at query time from your live document store. This means RAG stays current automatically, costs less to maintain, and provides source citations for every claim." },
      { heading: "Implementation best practices", body: "Successful RAG implementations require careful attention to chunking strategy, embedding model selection, hybrid search combining dense and sparse retrieval, and thoughtful prompt engineering. The quality of retrieval directly determines the quality of generated answers." },
    ],
  },
  {
    slug: "scalable-microservices-node",
    title: "Building Scalable Microservices with Node.js",
    subtitle: "Architecture patterns for high-throughput distributed systems.",
    date: "February 28, 2026",
    readTime: "7 min read",
    sections: [
      { heading: "Why microservices at scale", body: "Monolithic architectures become a liability as applications grow. Microservices enable independent deployment, technology diversity, fault isolation, and team autonomy. Node.js, with its event-driven architecture and massive ecosystem, is ideally suited for high-throughput microservices." },
      { heading: "Designing service boundaries", body: "The most critical decision in microservices architecture is defining service boundaries. Domain-Driven Design provides the best framework: identify bounded contexts through event storming, then map each context to a service with its own data store and API contract." },
      { heading: "Inter-service communication", body: "Synchronous REST or gRPC for queries and asynchronous event-driven messaging for commands. Use Apache Kafka or RabbitMQ for event streaming, implement circuit breakers, and design for eventual consistency rather than distributed transactions." },
      { heading: "Observability & resilience", body: "In distributed systems, observability is not optional. Implement structured logging, distributed tracing with OpenTelemetry, and metrics collection with Prometheus. Combine with health checks, retry policies, and graceful degradation for production-grade resilience." },
    ],
  },
  {
    slug: "ai-native-mobile-apps",
    title: "The Future of Mobile: AI-Native Apps",
    subtitle: "How on-device AI is reshaping the mobile development landscape.",
    date: "February 20, 2026",
    readTime: "5 min read",
    sections: [
      { heading: "The on-device AI revolution", body: "With Apple Intelligence, Google Gemini Nano, and Qualcomm AI Engine, mobile devices now run sophisticated AI models locally. This shift enables real-time processing without network latency, offline functionality, and enhanced privacy since data never leaves the device." },
      { heading: "Core ML vs TensorFlow Lite", body: "iOS developers leverage Core ML for seamless model integration with Swift, while Android developers use TensorFlow Lite or ONNX Runtime. Both platforms now support hardware-accelerated inference on neural processing units (NPUs) for near-instant predictions." },
      { heading: "Practical on-device AI use cases", body: "Real-time camera effects, voice command processing, predictive text with personal context, document scanning with instant OCR, health monitoring from sensor data, and offline translation are all now achievable entirely on-device with sub-50ms latency." },
      { heading: "Designing AI-native experiences", body: "AI-native apps do not just add AI features to existing UX — they fundamentally rethink the interaction model. Think proactive suggestions instead of search, natural language interfaces instead of forms, and adaptive UIs that learn from user behaviour." },
    ],
  },
  {
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Optimisation: A Technical Guide",
    subtitle: "Strategies to cut your cloud bill by 40% without sacrificing performance.",
    date: "February 12, 2026",
    readTime: "6 min read",
    sections: [
      { heading: "The cloud cost crisis", body: "Cloud spending grew 29% year-over-year, with the average enterprise wasting 32% of their cloud budget on idle or over-provisioned resources. Without deliberate optimisation, cloud costs compound rapidly and often exceed the savings from migrating off on-premise infrastructure." },
      { heading: "Right-sizing and reserved capacity", body: "Start with right-sizing: analyse actual CPU, memory, and network utilisation over 30 days. Most instances run under 40% utilisation. Combine right-sizing with Reserved Instances or Savings Plans for predictable workloads to achieve 30–60% cost reductions." },
      { heading: "Spot instances and serverless", body: "For fault-tolerant workloads (batch processing, CI/CD, data pipelines), spot instances offer 60–90% discounts. For event-driven workloads, serverless functions eliminate idle costs entirely. The key is matching the pricing model to the workload pattern." },
      { heading: "FinOps as a practice", body: "Sustainable cost optimisation requires cultural change, not just technical fixes. Implement tagging standards, create team-level cost dashboards, set budget alerts, and conduct monthly cost reviews. FinOps makes cloud cost a shared responsibility across engineering and finance." },
    ],
  },
  {
    slug: "computer-vision-manufacturing-qa",
    title: "Computer Vision in Manufacturing QA",
    subtitle: "Automated visual inspection systems that outperform human reviewers.",
    date: "February 5, 2026",
    readTime: "7 min read",
    sections: [
      { heading: "The quality control challenge", body: "Manufacturing quality inspection has traditionally relied on human visual inspection — a process that is slow, inconsistent, and prone to fatigue-related errors. With defect rates as low as 0.1%, inspectors must maintain concentration while examining thousands of identical parts per shift." },
      { heading: "How computer vision changes the game", body: "Modern computer vision systems use convolutional neural networks trained on thousands of defect images to detect anomalies at superhuman speed and consistency. These systems inspect every single unit — not just samples — and can detect sub-millimeter defects invisible to the human eye." },
      { heading: "Implementation architecture", body: "A typical deployment includes high-resolution industrial cameras, edge compute units running optimised inference models (TensorRT/ONNX), real-time reject mechanisms, and a cloud backend for model retraining and analytics. The edge-cloud hybrid ensures low latency for production line speeds." },
      { heading: "Measuring ROI", body: "Our manufacturing clients typically see 99.2%+ defect detection rates (vs 85% human baseline), 3× inspection throughput, 60% reduction in quality-related returns, and payback within 8–12 months. The data generated also feeds continuous improvement of manufacturing processes." },
    ],
  },
];
