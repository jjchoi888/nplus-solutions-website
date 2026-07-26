import {
  Building2,
  ChartNoAxesCombined,
  CreditCard,
  Hotel,
  Layers3,
  Lightbulb,
  Map,
  PawPrint,
  Shapes,
  Smartphone,
  Sparkles,
  Trees,
  type LucideIcon,
} from "lucide-react";

export type BusinessArea = {
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
  { label: "Business Areas", href: "#business-areas" },
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export const businessAreas: BusinessArea[] = [
  {
    number: "01",
    title: "Technology & Digital Platforms",
    description:
      "Digital products, platforms, and connected services designed around practical user needs and scalable operations.",
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Fintech & Payment Solutions",
    description:
      "Payment technologies and financial service concepts that connect businesses, customers, and modern transaction infrastructure.",
    icon: CreditCard,
  },
  {
    number: "03",
    title: "Tourism & Hospitality Development",
    description:
      "Destination, hotel, leisure, and food-and-beverage concepts developed as distinctive and commercially viable experiences.",
    icon: Hotel,
  },
  {
    number: "04",
    title: "Construction & Property Development",
    description:
      "Integrated planning and development support for spaces, facilities, and property-led business projects.",
    icon: Building2,
  },
  {
    number: "05",
    title: "Business Consulting & Project Management",
    description:
      "From early concept and feasibility through execution planning, coordination, and operational implementation.",
    icon: ChartNoAxesCombined,
  },
];

export const projects: Project[] = [
  {
    slug: "pawcircle",
    number: "01",
    title: "PawCircle",
    eyebrow: "Pet Community Platform",
    summary:
      "A connected digital ecosystem for pet communities, services, care, discovery, and trusted interaction.",
    description:
      "PawCircle brings pet owners, pet communities, service providers, and care opportunities into one integrated platform. The project combines social interaction, location-based discovery, community groups, business services, and trusted care workflows.",
    businessArea: "Technology & Digital Platforms",
    capabilities: [
      "Community platform strategy",
      "Mobile-first product design",
      "Service marketplace workflows",
      "Identity and trust systems",
    ],
    accent: "violet",
    icon: PawPrint,
  },
  {
    slug: "paynplus",
    number: "02",
    title: "Paynplus",
    eyebrow: "Payment Solutions",
    summary:
      "A payment service initiative connecting merchants with modern in-store, online, and QR-based transaction experiences.",
    description:
      "Paynplus is designed to support merchants across physical and digital channels. The project focuses on practical payment acceptance, streamlined merchant onboarding, and service architecture prepared for scalable financial operations.",
    businessArea: "Fintech & Payment Solutions",
    capabilities: [
      "Merchant payment strategy",
      "POS and online checkout concepts",
      "QR payment integration planning",
      "Compliance-ready service design",
    ],
    accent: "blue",
    icon: CreditCard,
  },
  {
    slug: "hotelnplus",
    number: "03",
    title: "Hotelnplus",
    eyebrow: "Hospitality Development",
    summary:
      "A hospitality-focused platform and development concept for better hotel services, operations, and guest experiences.",
    description:
      "Hotelnplus brings together hospitality development thinking, digital service design, and operational planning. It is positioned as an adaptable framework for hotel-related services, property concepts, and guest-centered solutions.",
    businessArea: "Tourism & Hospitality Development",
    capabilities: [
      "Hospitality concept development",
      "Guest journey design",
      "Hotel service planning",
      "Digital operations strategy",
    ],
    accent: "cyan",
    icon: Hotel,
  },
  {
    slug: "mountain-bike-tourism-complex",
    number: "04",
    title: "Mountain Bike Tourism Complex",
    eyebrow: "Destination Tourism",
    summary:
      "A destination-scale mountain bike and outdoor tourism concept combining trails, events, culture, and local economic activity.",
    description:
      "The Mountain Bike Tourism Complex is conceived as a regional tourism catalyst. It combines multiple riding disciplines, event potential, visitor amenities, and locally grounded tourism programming within a phased development framework.",
    businessArea: "Tourism & Hospitality Development",
    capabilities: [
      "Destination master planning",
      "Trail and activity programming",
      "Tourism development strategy",
      "Event and partnership planning",
    ],
    accent: "orange",
    icon: Trees,
  },
  {
    slug: "mountain-resort-complex",
    number: "05",
    title: "Mountain Resort Complex",
    eyebrow: "Nature-Based Resort Development",
    summary:
      "A mountain destination integrating resort accommodation, landscape experiences, food and beverage, and outdoor leisure.",
    description:
      "The Mountain Resort Complex is planned as a nature-connected destination where accommodation, gardens, dining, scenic spaces, and outdoor activities work together as one integrated guest experience. The project combines destination planning, hospitality development, landscape design, and phased commercial implementation.",
    businessArea: "Tourism & Hospitality Development",
    capabilities: [
      "Resort and destination master planning",
      "Landscape and outdoor experience design",
      "Hospitality and F&B concept development",
      "Phased development strategy",
    ],
    accent: "green",
    icon: Trees,
  },
  {
    slug: "evelyns-place",
    number: "06",
    title: "Evelyn’s Place",
    eyebrow: "Café, Korean Restaurant & Hotpot",
    summary:
      "A distinctive dining destination combining café culture, Korean cuisine, hotpot, family legacy, and a memorable mountain setting.",
    description:
      "Evelyn’s Place is a two-story café and restaurant concept developed around the legacy of Evelyn’s Bakery. It brings together café beverages, sourdough bread, Korean dining, hotpot, carefully planned guest spaces, and a strong visual identity suited to its mountain location.",
    businessArea: "Tourism & Hospitality Development",
    capabilities: [
      "Restaurant and café concept development",
      "Interior and guest experience planning",
      "Brand identity and signage development",
      "Construction and operational coordination",
    ],
    accent: "violet",
    icon: Sparkles,
  },
];

export const approach = [
  {
    number: "01",
    title: "Discover",
    description: "Identify the opportunity, user need, market context, and project potential.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the strategy, scope, business model, roadmap, and delivery priorities.",
    icon: Map,
  },
  {
    number: "03",
    title: "Design",
    description: "Translate the plan into a coherent product, place, service, or operating system.",
    icon: Shapes,
  },
  {
    number: "04",
    title: "Develop",
    description: "Coordinate technology, partners, construction, documentation, and implementation.",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Operate",
    description: "Prepare the project to perform, improve, and scale through real-world operations.",
    icon: ChartNoAxesCombined,
  },
];
