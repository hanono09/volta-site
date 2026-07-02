// lib/data.ts
// Single source of truth for site content. Edit copy here — components stay dumb.

export const brand = {
  name: "Volta",
  legalName: "Volta Automation, LLC",
  domain: "voltaautomation.com",
  tagline: "We build the systems that run your business while you sleep.",
  shortTagline: "AI automation for companies that hate wasted hours.",
  description:
    "Volta designs, builds, and ships custom AI automation, chatbots, websites, and internal tooling for ambitious companies — live in 2–6 weeks.",
  email: "hello@voltaautomation.com",
  phone: "+1 (555) 014-2024",
  address: "Austin, TX — working with clients worldwide",
  founded: "2022",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI Automation", href: "/services#automation" },
    { label: "AI Chatbots", href: "/services#chatbots" },
    { label: "Websites & Landing Pages", href: "/services#websites" },
    { label: "CRM Integrations", href: "/services#crm" },
    { label: "WhatsApp Automation", href: "/services#whatsapp" },
    { label: "Custom Dashboards", href: "/services#dashboards" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ],
};

export const stats = [
  { value: "140+", label: "Automations shipped" },
  { value: "$18.4M", label: "Client revenue influenced" },
  { value: "62,000+", label: "Hours saved annually for clients" },
  { value: "97%", label: "Client retention rate" },
];

export const trustBadges = [
  "SOC 2 — aligned practices",
  "GDPR compliant builds",
  "99.9% uptime infrastructure",
  "Avg. 11-day time to launch",
];

export const clientLogos = [
  "Northbeam Realty",
  "Lumen Dental Group",
  "Forge Logistics",
  "Hearth & Co.",
  "Atlas Legal Partners",
  "Periwinkle Studio",
  "Vantage Fitness",
  "Coral Bay Capital",
];

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  bullets: string[];
  outcomes: string[];
  icon: string; // lucide icon name
};

export const services: Service[] = [
  {
    id: "automation",
    title: "AI Automation",
    shortDescription:
      "We replace manual, repetitive operations with AI-driven systems that run themselves.",
    description:
      "Most companies lose 15–30 hours a week to manual data entry, follow-ups, approvals, and copy-pasting between tools. We map your operations end-to-end, then build automated workflows that connect your stack — CRM, email, calendar, accounting, support — into one system that acts without you. No more babysitting spreadsheets.",
    bullets: [
      "Full operations audit and automation roadmap",
      "Custom workflows built in n8n, Make, or Zapier (your choice)",
      "AI agents that read, summarize, route, and act on incoming data",
      "Document generation, invoicing, and reporting on autopilot",
      "Error monitoring and alerting built into every workflow",
    ],
    outcomes: [
      "Cut manual admin work by 60–90%",
      "Same-day response times instead of multi-day backlogs",
      "Fewer human errors in repetitive processes",
    ],
    icon: "Workflow",
  },
  {
    id: "chatbots",
    title: "AI Chatbots",
    shortDescription:
      "Conversational AI trained on your business that qualifies leads and answers customers 24/7.",
    description:
      "We build custom GPT-powered chatbots trained on your products, policies, and tone of voice — deployed on your website, WhatsApp, or Instagram. They qualify leads, answer support questions, book meetings, and escalate to a human only when it matters.",
    bullets: [
      "Trained on your docs, FAQs, pricing, and brand voice",
      "Lead qualification with CRM hand-off",
      "Multi-language support out of the box",
      "Human hand-off with full conversation context",
      "Deployed on web, WhatsApp, Instagram, or SMS",
    ],
    outcomes: [
      "Instant response time, day or night",
      "30–50% more qualified leads captured",
      "Support team freed from repetitive questions",
    ],
    icon: "MessageSquare",
  },
  {
    id: "websites",
    title: "High-Converting Websites & Landing Pages",
    shortDescription:
      "Premium, fast, conversion-engineered websites built on modern infrastructure.",
    description:
      "We design and build websites the way product teams build software — researched, tested, and optimized for conversion, not just appearance. Every site is built on Next.js for sub-second load times, ships with SEO baked in, and is structured around a single clear goal: turning visitors into customers.",
    bullets: [
      "Custom design — never a template",
      "Built on Next.js for speed and reliability",
      "Conversion-focused copywriting included",
      "SEO architecture and structured data from day one",
      "Built-in analytics, A/B testing hooks, and CMS",
    ],
    outcomes: [
      "Sub-1.5s load times on mobile",
      "95+ Lighthouse scores across the board",
      "Measurable lift in conversion rate post-launch",
    ],
    icon: "LayoutTemplate",
  },
  {
    id: "crm",
    title: "CRM Integrations",
    shortDescription:
      "Your CRM becomes the single source of truth — automatically, without manual updates.",
    description:
      "We connect HubSpot, Salesforce, Pipedrive, GoHighLevel, or Airtable to every tool you use, so leads, deals, and customer data sync automatically. No more reps manually logging calls or updating stages — your CRM updates itself based on real activity.",
    bullets: [
      "Two-way sync between CRM and your existing stack",
      "Automated lead scoring and stage progression",
      "Custom pipelines built around your actual sales process",
      "Deduplication and data cleanup on ingestion",
      "Reporting dashboards pulled directly from CRM data",
    ],
    outcomes: [
      "One unified record of every customer",
      "Sales reps spend more time selling, less time logging",
      "Forecasting accuracy improves with clean data",
    ],
    icon: "Database",
  },
  {
    id: "whatsapp",
    title: "WhatsApp Automation",
    shortDescription:
      "Sell, support, and follow up with customers on the channel they already use.",
    description:
      "We build WhatsApp Business automations that handle order confirmations, appointment reminders, abandoned-cart recovery, and support — using the official WhatsApp Business API, fully compliant and fully branded.",
    bullets: [
      "Official WhatsApp Business API integration",
      "Automated order, booking, and payment confirmations",
      "Drip sequences for re-engagement and recovery",
      "AI-handled FAQs with human escalation",
      "Broadcast campaigns with opt-in compliance",
    ],
    outcomes: [
      "Open rates of 90%+ versus ~20% for email",
      "Recovered revenue from abandoned carts and no-shows",
      "Support volume handled without adding headcount",
    ],
    icon: "MessageCircle",
  },
  {
    id: "appointments",
    title: "Appointment Systems",
    shortDescription:
      "End the back-and-forth. Let clients book, reschedule, and pay automatically.",
    description:
      "We build booking systems that connect your calendar, payment processor, and reminders into one flow — so prospects book themselves in, show up, and pay, without a single email exchanged.",
    bullets: [
      "Custom booking flow matched to your brand",
      "Calendar sync (Google, Outlook, Calendly-compatible)",
      "Automated reminders via SMS, email, and WhatsApp",
      "No-show reduction sequences",
      "Deposit and payment collection at booking",
    ],
    outcomes: [
      "Up to 40% fewer no-shows",
      "Zero manual scheduling for your team",
      "Higher show-up rate from automated reminders",
    ],
    icon: "CalendarCheck",
  },
  {
    id: "support",
    title: "AI Customer Support",
    shortDescription:
      "First-line support handled by AI that actually knows your business.",
    description:
      "We deploy AI support agents trained on your help docs, past tickets, and policies — resolving common issues instantly and routing complex cases to your team with full context attached, so nothing gets repeated.",
    bullets: [
      "Trained on your existing knowledge base and ticket history",
      "Resolves common tickets without human involvement",
      "Full context hand-off when escalation is needed",
      "Sentiment detection for priority routing",
      "Weekly reporting on volume, resolution rate, and gaps",
    ],
    outcomes: [
      "Up to 70% of tickets resolved without a human",
      "First response time under 30 seconds",
      "Support costs scale slower than ticket volume",
    ],
    icon: "Headset",
  },
  {
    id: "internal",
    title: "Internal Business Automation",
    shortDescription:
      "The unglamorous operational work — handled, so your team can focus on the business.",
    description:
      "Invoicing, onboarding, reporting, approvals, inventory checks — we automate the internal processes that quietly eat your team's week, tailored to how your business actually operates.",
    bullets: [
      "Process mapping with your operations team",
      "Automated onboarding and offboarding flows",
      "Approval chains and document routing",
      "Inventory, reporting, and reconciliation automation",
      "Internal Slack/Teams notifications for key events",
    ],
    outcomes: [
      "Days of admin work reduced to minutes",
      "Standardized processes across teams",
      "Fewer dropped tasks and missed approvals",
    ],
    icon: "Settings2",
  },
  {
    id: "workflow",
    title: "Workflow Optimization",
    shortDescription:
      "We audit how your business actually runs, then rebuild it to run leaner.",
    description:
      "Before we automate anything, we map your real workflows — not the org chart version. We find the bottlenecks, redundant steps, and manual handoffs, then redesign the process before layering automation on top.",
    bullets: [
      "Full workflow audit and process mapping",
      "Bottleneck and redundancy analysis",
      "Redesigned SOPs built for automation",
      "Tool consolidation recommendations",
      "Change management support for your team",
    ],
    outcomes: [
      "Leaner processes before a single automation is built",
      "Reduced tool sprawl and software spend",
      "Faster cycle times across departments",
    ],
    icon: "GitMerge",
  },
  {
    id: "dashboards",
    title: "Custom Dashboards",
    shortDescription:
      "Real-time visibility into the numbers that actually run your business.",
    description:
      "We build custom internal dashboards that pull live data from your CRM, finance, and operations tools into one view — built for the metrics you actually track, not a generic template.",
    bullets: [
      "Live data pulled from your existing tools",
      "Role-based views for leadership, sales, and ops",
      "Custom KPI tracking matched to your business",
      "Automated weekly and monthly report generation",
      "Hosted, secure, and accessible from anywhere",
    ],
    outcomes: [
      "One source of truth instead of five spreadsheets",
      "Faster, more confident decision-making",
      "Hours saved on manual reporting every week",
    ],
    icon: "LayoutDashboard",
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    duration: "Days 1–3",
    description:
      "We audit your current operations, tools, and bottlenecks. You leave with a clear map of what's costing you time and a prioritized automation roadmap — even if you don't hire us.",
  },
  {
    step: "02",
    title: "Architecture",
    duration: "Days 4–7",
    description:
      "We design the technical system: integrations, data flow, AI logic, and fallback handling. You approve the blueprint before a single line of code is written.",
  },
  {
    step: "03",
    title: "Build",
    duration: "Week 2–4",
    description:
      "Our team builds in focused sprints with weekly demos, so you see progress continuously instead of waiting weeks for a reveal.",
  },
  {
    step: "04",
    title: "Test & Launch",
    duration: "Week 4–5",
    description:
      "We stress-test every workflow against edge cases, train your team on the system, and launch with monitoring in place from day one.",
  },
  {
    step: "05",
    title: "Optimize",
    duration: "Ongoing",
    description:
      "Post-launch, we monitor performance and refine based on real usage data. Most systems get measurably better in the first 60 days.",
  },
];

export const benefits = [
  {
    title: "Built for your business, not a template",
    description:
      "Every workflow is mapped to how you actually operate. We don't sell pre-built bots — we build systems around your real processes.",
    icon: "Fingerprint",
  },
  {
    title: "Live in weeks, not quarters",
    description:
      "Most engagements ship a working system in 2–6 weeks. You see weekly progress, not a single reveal at the end.",
    icon: "Zap",
  },
  {
    title: "Engineered, not duct-taped",
    description:
      "Production-grade infrastructure with error monitoring, fallback logic, and documentation — built to survive contact with the real world.",
    icon: "ShieldCheck",
  },
  {
    title: "You own everything",
    description:
      "No lock-in. Every workflow, integration, and line of code belongs to you, with full documentation handed over at launch.",
    icon: "KeyRound",
  },
  {
    title: "Measured in hours and revenue",
    description:
      "We track time saved and revenue influenced for every system we build — so ROI is never a guess.",
    icon: "TrendingUp",
  },
  {
    title: "A team, not a freelancer",
    description:
      "Dedicated project lead, automation engineer, and QA on every build — with a Slack channel open for the full engagement.",
    icon: "Users",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  services: string[];
  timeline: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "northbeam-realty",
    client: "Northbeam Realty",
    industry: "Real Estate",
    summary:
      "Replaced 4 manual intake processes with a single AI-driven lead routing and follow-up system across 12 agents.",
    challenge:
      "Northbeam's 12 agents were manually qualifying leads from six different sources — website, Zillow, Facebook, referrals, open houses, and cold inquiries. Leads sat unanswered for an average of 14 hours, and agents spent 90 minutes a day on data entry alone.",
    solution:
      "We built a unified intake system that pulls leads from every channel into one pipeline, uses AI to qualify and score them in real time, auto-assigns to the right agent based on territory and availability, and triggers an instant WhatsApp and SMS response — all synced to their CRM with zero manual entry.",
    results: [
      { metric: "14hrs → 90sec", label: "Average lead response time" },
      { metric: "31%", label: "Increase in lead-to-showing conversion" },
      { metric: "23hrs/wk", label: "Admin time eliminated across the team" },
    ],
    services: ["AI Automation", "CRM Integrations", "WhatsApp Automation"],
    timeline: "5 weeks",
  },
  {
    slug: "lumen-dental-group",
    client: "Lumen Dental Group",
    industry: "Healthcare",
    summary:
      "Built an AI booking and reminder system across 4 clinics, cutting no-shows by 38% in the first quarter.",
    challenge:
      "Lumen's front-desk staff across four locations spent hours each day on phone scheduling and manual reminder calls, yet still saw a 22% no-show rate that was directly costing chair time and revenue.",
    solution:
      "We deployed a self-serve booking system synced across all four clinic calendars, layered with an AI chatbot that handles rescheduling and FAQs, and an automated SMS/WhatsApp reminder sequence with confirmation requirements built in.",
    results: [
      { metric: "38%", label: "Reduction in no-show rate" },
      { metric: "4,200+", label: "Bookings handled without staff involvement" },
      { metric: "$186K", label: "Recovered annual revenue from filled chair time" },
    ],
    services: ["Appointment Systems", "AI Chatbots", "AI Automation"],
    timeline: "4 weeks",
  },
  {
    slug: "forge-logistics",
    client: "Forge Logistics",
    industry: "Logistics & Supply Chain",
    summary:
      "Automated dispatch reporting and customer status updates, replacing a 6-person manual reporting process.",
    challenge:
      "Forge's operations team manually compiled daily dispatch reports from five disconnected systems and fielded a constant stream of 'where's my shipment' calls and emails from customers.",
    solution:
      "We built a real-time operations dashboard pulling from all five systems automatically, plus an AI-driven customer notification system that proactively sends shipment status updates via SMS and email — cutting inbound status inquiries dramatically.",
    results: [
      { metric: "91%", label: "Drop in inbound status-check calls" },
      { metric: "6 → 1", label: "Headcount needed for daily reporting" },
      { metric: "$240K/yr", label: "Operational cost savings" },
    ],
    services: ["Custom Dashboards", "Internal Business Automation", "Workflow Optimization"],
    timeline: "7 weeks",
  },
  {
    slug: "vantage-fitness",
    client: "Vantage Fitness",
    industry: "Fitness & Wellness",
    summary:
      "Rebuilt the website and added an AI sales assistant, lifting trial sign-ups by 64% in 90 days.",
    challenge:
      "Vantage's outdated website loaded in 6+ seconds on mobile and converted under 1% of visitors. Their sales team also had no system for following up with trial leads, losing the majority within 48 hours.",
    solution:
      "We rebuilt the site on Next.js with conversion-focused design and copy, added an AI chat assistant that answers membership questions and books tours instantly, and layered an automated 7-day follow-up sequence for every trial sign-up.",
    results: [
      { metric: "64%", label: "Increase in trial sign-ups" },
      { metric: "1.2s", label: "New average mobile load time" },
      { metric: "2.4x", label: "Trial-to-membership conversion rate" },
    ],
    services: ["High-Converting Websites", "AI Chatbots", "AI Automation"],
    timeline: "6 weeks",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Volta didn't just automate our lead intake — they rebuilt how our whole sales process works. We went from 14-hour response times to under two minutes, and our agents finally have time to actually sell.",
    name: "Daniela Cruz",
    role: "Managing Broker",
    company: "Northbeam Realty",
  },
  {
    quote:
      "I was skeptical an AI chatbot could actually sound like us. Within a week of launch, patients couldn't tell the difference, and our no-show rate dropped almost 40%. This paid for itself in the first month.",
    name: "Dr. Marcus Webb",
    role: "Practice Director",
    company: "Lumen Dental Group",
  },
  {
    quote:
      "We'd tried two other agencies before Volta. The difference is they actually mapped our operations before building anything. Nothing felt off-the-shelf — every workflow matched exactly how we run dispatch.",
    name: "Priya Anand",
    role: "VP of Operations",
    company: "Forge Logistics",
  },
  {
    quote:
      "Our old site looked fine and converted nothing. The new one looks like a company twice our size, loads instantly, and the AI assistant alone has booked more tours than two of our front-desk staff combined.",
    name: "Jordan Lee",
    role: "Founder & CEO",
    company: "Vantage Fitness",
  },
  {
    quote:
      "What impressed me most was the handoff. Full documentation, recorded training sessions, and a team that actually answers when something needs adjusting. We own the system outright — no dependency on the agency.",
    name: "Helena Ruiz",
    role: "COO",
    company: "Atlas Legal Partners",
  },
  {
    quote:
      "We've worked with three dev shops in five years. Volta is the first one that talked about ROI and hours saved instead of just features. The dashboard alone replaced a part-time analyst role.",
    name: "Tom Okafor",
    role: "Director of Strategy",
    company: "Coral Bay Capital",
  },
];

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  timeline: string;
  bestFor: string;
  features: string[];
  deliverables: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$2,900",
    cadence: "one-time",
    description:
      "A focused automation or website build that solves one clear bottleneck, fast.",
    timeline: "2–3 weeks",
    bestFor: "Small teams automating a single process or launching a new site",
    features: [
      "1 core automation workflow or a custom 5-page website",
      "Up to 2 tool integrations",
      "Basic AI chatbot (FAQ + lead capture)",
      "1 round of revisions",
      "30-day post-launch support",
      "Loom-recorded training handoff",
    ],
    deliverables: [
      "Working automation or live website",
      "Documentation of all workflows",
      "Login access and ownership of all accounts",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Professional",
    price: "$7,500",
    cadence: "one-time",
    description:
      "A complete automation system across multiple workflows, with a custom AI chatbot and CRM sync.",
    timeline: "4–6 weeks",
    bestFor: "Growing companies ready to automate across their full operation",
    features: [
      "Up to 4 automation workflows",
      "Custom AI chatbot trained on your business",
      "Full CRM integration and two-way sync",
      "WhatsApp or SMS automation included",
      "Custom website or landing page (up to 10 pages)",
      "Up to 3 rounds of revisions",
      "90-day post-launch support",
      "Live training session for your team",
    ],
    deliverables: [
      "Full automation suite with monitoring",
      "Custom-trained AI chatbot, deployed",
      "Integrated CRM and reporting setup",
      "Complete documentation and SOPs",
    ],
    cta: "Go Professional",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "from $18,000",
    description:
      "End-to-end transformation: workflow audit, full automation buildout, custom dashboards, and a dedicated team.",
    timeline: "8–12+ weeks",
    bestFor: "Multi-location or high-volume operations with complex systems",
    features: [
      "Full operations audit and automation roadmap",
      "Unlimited workflow automations",
      "Multi-channel AI support (web, WhatsApp, SMS, IG)",
      "Custom internal dashboards and reporting",
      "Dedicated project lead and engineering team",
      "Priority SLA support",
      "Quarterly optimization reviews",
      "12-month support and iteration plan",
    ],
    deliverables: [
      "Complete automated operations infrastructure",
      "Custom dashboard suite",
      "Full team training and change management support",
      "Ongoing optimization roadmap",
    ],
    cta: "Talk to Sales",
  },
];

export const maintenancePlans = [
  {
    name: "Care",
    price: "$390/mo",
    description: "Monitoring, minor adjustments, and uptime assurance for existing systems.",
    features: [
      "24/7 automated monitoring & alerting",
      "Up to 2 hours of adjustments per month",
      "Monthly performance report",
      "Priority email support (24hr response)",
    ],
  },
  {
    name: "Growth",
    price: "$890/mo",
    description: "Active optimization and new workflow additions on a rolling basis.",
    features: [
      "Everything in Care",
      "Up to 6 hours of build time per month",
      "Quarterly automation audit",
      "Priority Slack support (same-day response)",
      "1 new workflow or integration per quarter",
    ],
  },
  {
    name: "Scale",
    price: "$1,950/mo",
    description: "A fractional automation team embedded in your operations.",
    features: [
      "Everything in Growth",
      "Up to 16 hours of build time per month",
      "Monthly strategy call with your project lead",
      "Same-day priority support",
      "Dedicated Slack channel with your engineering team",
    ],
  },
];

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most Starter projects launch in 2–3 weeks. Professional-tier builds take 4–6 weeks. Enterprise engagements with multiple systems typically run 8–12 weeks, depending on scope. You'll get a precise timeline after the discovery call, and we run weekly demos so you always know exactly where the build stands.",
  },
  {
    question: "Do I need any technical knowledge to work with you?",
    answer:
      "No. We handle the entire technical build, and every system is handed off with documentation and a recorded training session in plain language. You'll know exactly how to use, adjust, and monitor what we build — without needing to touch code.",
  },
  {
    question: "What tools and platforms do you work with?",
    answer:
      "We're platform-agnostic and build around whatever you already use — HubSpot, Salesforce, GoHighLevel, Airtable, n8n, Make, Zapier, Twilio, the WhatsApp Business API, and most major CRMs and calendar systems. If you don't have a preference, we'll recommend the right tool for your scale and budget.",
  },
  {
    question: "Who owns the systems and code after the project is done?",
    answer:
      "You do — entirely. Every account, workflow, and line of code is transferred to your ownership at launch. There's no lock-in and no dependency on us to keep running. Most clients choose to stay on a maintenance plan anyway, but it's never required.",
  },
  {
    question: "What happens if something breaks after launch?",
    answer:
      "Every project includes a post-launch support window (30–90 days depending on tier) where fixes are covered at no extra cost. After that, our monthly maintenance plans cover monitoring, adjustments, and priority support — or you're welcome to maintain it in-house using the documentation we provide.",
  },
  {
    question: "Can you work with our existing website or do we need a new one?",
    answer:
      "Both are options. Many of our automation and chatbot projects integrate directly into an existing site with no rebuild needed. If your current site is hurting conversion or performance, we'll flag it during discovery and give you a clear recommendation — never a forced upsell.",
  },
  {
    question: "How is pricing determined for Enterprise projects?",
    answer:
      "Enterprise pricing depends on the number of systems, integrations, and team training required. After a discovery audit, you'll receive a fixed-scope proposal with transparent line-item pricing — never hourly billing with an open-ended total.",
  },
  {
    question: "Do you sign contracts and NDAs?",
    answer:
      "Yes. Every engagement starts with a signed service agreement outlining scope, timeline, and deliverables, and we sign NDAs as standard practice before any discovery call that involves sensitive business information.",
  },
];

export const blogPosts = [
  {
    slug: "real-cost-of-manual-operations",
    title: "The Real Cost of Manual Operations (And How to Calculate Yours)",
    excerpt:
      "Most leadership teams underestimate how much manual work costs them by 3–5x. Here's the framework we use with clients to find the real number.",
    date: "2026-05-12",
    readTime: "7 min read",
    category: "Operations",
  },
  {
    slug: "ai-chatbot-vs-live-chat",
    title: "AI Chatbot vs. Live Chat: What Actually Converts Better in 2026",
    excerpt:
      "We analyzed conversion data across 40+ client deployments to settle the debate. The answer depends on one factor most companies ignore.",
    date: "2026-04-28",
    readTime: "6 min read",
    category: "AI Chatbots",
  },
  {
    slug: "choosing-automation-platform",
    title: "n8n vs. Make vs. Zapier: Choosing the Right Automation Platform",
    excerpt:
      "Each platform has a sweet spot. We break down when each one wins, with real pricing and scale comparisons from client builds.",
    date: "2026-04-09",
    readTime: "9 min read",
    category: "Automation",
  },
  {
    slug: "whatsapp-business-api-guide",
    title: "A Practical Guide to the WhatsApp Business API for Service Businesses",
    excerpt:
      "Open rates above 90% are real, but the API has rules that catch most businesses off guard. Here's what to know before you start.",
    date: "2026-03-22",
    readTime: "8 min read",
    category: "WhatsApp Automation",
  },
];
