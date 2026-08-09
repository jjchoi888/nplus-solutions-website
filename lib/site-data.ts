import {
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  CloudCog,
  Code2,
  CreditCard,
  Database,
  Hotel,
  Layers3,
  Lightbulb,
  Map,
  Network,
  PawPrint,
  PlugZap,
  Rocket,
  Shapes,
  ShieldCheck,
  Smartphone,
  Trees,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type BusinessArea = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CoreCapability = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type AtlasCapability = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  businessArea: string;
  capabilities: string[];
  accent: "violet" | "blue" | "cyan" | "orange" | "green";
  icon: LucideIcon;
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Atlas", href: "#atlas" },
  { label: "Technology", href: "#core-technology" },
  { label: "Business Areas", href: "#business-areas" },
  { label: "Products & Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const atlasCapabilities: AtlasCapability[] = [
  {
    number: "01",
    title: "Product Integration",
    description:
      "A shared integration layer designed to connect independently developed N Plus products without removing their domain autonomy.",
    icon: Network,
  },
  {
    number: "02",
    title: "Connectors & APIs",
    description:
      "Standardized interfaces for internal products, external services, payment systems, data sources, and third-party platforms.",
    icon: PlugZap,
  },
  {
    number: "03",
    title: "Data & Intelligence",
    description:
      "A foundation for unified operational data, analytics, shared context, and cross-product intelligence.",
    icon: Database,
  },
  {
    number: "04",
    title: "AI & Knowledge",
    description:
      "Shared AI and knowledge capabilities designed to support search, assistance, analysis, and future intelligent automation.",
    icon: BrainCircuit,
  },
  {
    number: "05",
    title: "Access & Governance",
    description:
      "Common patterns for role-based access, auditability, policy controls, product configuration, and secure administration.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Product Health & Scale",
    description:
      "A central view of product status, deployment readiness, integration health, and the systems required for reliable growth.",
    icon: CloudCog,
  },
];

export const coreCapabilities: CoreCapability[] = [
  {
    number: "01",
    title: "Software & Application Development",
    description:
      "Custom business software, responsive web applications, mobile-first products, and internal operational systems.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Digital Platform Engineering",
    description:
      "Scalable platforms that connect users, services, transactions, content, communities, and business workflows.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "System & API Integration",
    description:
      "Secure integration between internal products, databases, payment services, cloud tools, and third-party systems.",
    icon: PlugZap,
  },
  {
    number: "04",
    title: "Data, AI & Knowledge Systems",
    description:
      "Shared data foundations, analytics, AI-enabled functions, searchable knowledge, and intelligent decision support.",
    icon: BrainCircuit,
  },
  {
    number: "05",
    title: "Business Process Automation",
    description:
      "Digital workflows that reduce manual work, improve visibility, standardize processes, and increase operational control.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Cloud, Security & Governance",
    description:
      "Architecture for deployment, role-based access, auditability, reliability, observability, and long-term scalability.",
    icon: ShieldCheck,
  },
];

export const businessAreas: BusinessArea[] = [
  {
    number: "01",
    title: "Technology & Digital Platforms",
    description:
      "Software products, web and mobile applications, digital platforms, APIs, cloud systems, AI-enabled tools, and connected services.",
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Fintech & Payment Solutions",
    description:
      "Payment platforms, merchant systems, transaction workflows, digital onboarding, reporting, and financial service integrations.",
    icon: CreditCard,
  },
  {
    number: "03",
    title: "Tourism & Hospitality Development",
    description:
      "Technology-enabled platforms and development solutions for reservations, hotels, destinations, guest services, and visitor experiences.",
    icon: Hotel,
  },
  {
    number: "04",
    title: "Construction & Property Development",
    description:
      "Digital systems and project solutions for planning, coordination, documentation, monitoring, property management, and facility operations.",
    icon: Building2,
  },
  {
    number: "05",
    title: "Business Consulting & Project Management",
    description:
      "Technology strategy, requirements analysis, solution architecture, digital transformation, and end-to-end project delivery.",
    icon: ChartNoAxesCombined,
  },
];

export const projects: Project[] = [
  {
    slug: "atlas",
    number: "01",
    title: "Atlas",
    eyebrow: "Intelligence & Integration Platform",
    summary:
      "The core N Plus platform architecture for connecting products, data, integrations, AI, knowledge, access control, and product health.",
    description:
      "Atlas is being developed as the shared intelligence and integration layer across the N Plus software ecosystem. It is designed to connect independent products through common APIs, connectors, data structures, AI and knowledge services, access controls, settings, and product health capabilities while preserving each product’s own business domain.",
    businessArea: "Technology & Digital Platforms",
    capabilities: [
      "Multi-product integration architecture",
      "Connector and API management",
      "Shared data, AI, and knowledge services",
      "Access control, governance, and product health",
    ],
    accent: "blue",
    icon: Layers3,
  },
  {
    slug: "pawcircle",
    number: "02",
    title: "PawCircle",
    eyebrow: "Pet Community & Services Platform",
    summary:
      "A mobile-first digital ecosystem connecting pet owners, communities, businesses, care providers, and trusted services.",
    description:
      "PawCircle brings pet owners, community activity, location-based discovery, service providers, verified businesses, care workflows, and realtime communication into one connected platform designed for scalable regional expansion.",
    businessArea: "Technology & Digital Platforms",
    capabilities: [
      "Community and social platform development",
      "Service marketplace workflows",
      "Realtime communication systems",
      "Identity, verification, and trust features",
    ],
    accent: "violet",
    icon: PawPrint,
  },
  {
    slug: "paynplus",
    number: "03",
    title: "Paynplus",
    eyebrow: "Fintech & Merchant Platform",
    summary:
      "An integrated payment technology platform for merchants across in-store, online, QR, and connected financial services.",
    description:
      "Paynplus is designed to connect payment acceptance, merchant onboarding, transaction management, settlement visibility, reporting, compliance workflows, and financial integrations across physical and digital channels.",
    businessArea: "Fintech & Payment Solutions",
    capabilities: [
      "Merchant management platform",
      "POS, online, and QR payment integration",
      "Transaction monitoring and reporting",
      "Compliance-ready onboarding workflows",
    ],
    accent: "blue",
    icon: CreditCard,
  },
  {
    slug: "hotelnplus",
    number: "04",
    title: "Hotelnplus",
    eyebrow: "Hospitality Technology Platform",
    summary:
      "A hospitality technology platform integrating hotel services, reservations, guest experiences, property data, and management tools.",
    description:
      "Hotelnplus is positioned as an adaptable hospitality technology framework connecting reservation flows, guest journeys, service requests, property operations, reporting, and digital guest services within a unified platform.",
    businessArea: "Tourism & Hospitality Development",
    capabilities: [
      "Hotel and reservation platform development",
      "Guest service and digital concierge tools",
      "Property operations integration",
      "Management dashboards and reporting",
    ],
    accent: "cyan",
    icon: Hotel,
  },
  {
    slug: "mountain-bike-tourism-complex",
    number: "05",
    title: "Mountain Bike Tourism Complex",
    eyebrow: "Technology-Enabled Tourism Development",
    summary:
      "A destination-scale mountain bike project combining physical tourism infrastructure with digital visitor, event, and destination services.",
    description:
      "The Mountain Bike Tourism Complex combines destination development with technology-enabled visitor services including trail information, reservations, events, membership, digital marketing, local business participation, and data-supported tourism management.",
    businessArea: "Tourism & Hospitality Development",
    capabilities: [
      "Destination and tourism platform planning",
      "Digital trail and visitor information systems",
      "Reservation and event management workflows",
      "Local business and service integration",
    ],
    accent: "orange",
    icon: Trees,
  },
  {
    slug: "mountain-resort-complex",
    number: "06",
    title: "Mountain Resort Complex",
    eyebrow: "Technology-Enabled Resort Development",
    summary:
      "An integrated mountain resort concept supported by digital reservations, guest services, property systems, and destination technology.",
    description:
      "The Mountain Resort Complex combines accommodation, landscape experiences, dining, outdoor activities, and visitor amenities with technology-enabled reservations, guest communication, property management, destination information, and connected service systems.",
    businessArea: "Tourism & Hospitality Development",
    capabilities: [
      "Resort technology and guest service planning",
      "Reservation and property system integration",
      "Digital destination information services",
      "Phased development and solution architecture",
    ],
    accent: "green",
    icon: Trees,
  },
];

export const approach = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business problem, users, operating context, workflows, data, and technology requirements.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Define",
    description:
      "Establish product scope, software requirements, system boundaries, solution architecture, and delivery priorities.",
    icon: Map,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Design the user experience, interfaces, data model, integrations, and technical structure of the solution.",
    icon: Shapes,
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Build, integrate, test, secure, and refine the application, platform, or connected system.",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Integrate & Scale",
    description:
      "Connect the solution to its wider ecosystem, deploy it reliably, monitor health, and prepare for continued growth.",
    icon: Rocket,
  },
];
