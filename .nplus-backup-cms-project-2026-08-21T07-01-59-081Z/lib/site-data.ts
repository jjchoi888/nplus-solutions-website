import { getSiteCopy, type Locale } from "@/lib/i18n";

export type BusinessArea = {
  number: string;
  title: string;
  description: string;
};

export type CoreCapability = {
  number: string;
  title: string;
  description: string;
};

export type AtlasCapability = {
  number: string;
  title: string;
  description: string;
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
  website?: string;
  images?: string[];
};

export type ApproachItem = {
  number: string;
  title: string;
  description: string;
};

export function getNavigation(locale: Locale) {
  const copy = getSiteCopy(locale).navigation;

  return [
    { label: copy.about, href: "#about" },
    { label: copy.atlas, href: "#atlas" },
    { label: copy.technology, href: "#core-technology" },
    { label: copy.businessAreas, href: "#business-areas" },
    { label: copy.projects, href: "#projects" },
    { label: copy.contact, href: "#contact" },
  ];
}

const atlasText = {
  en: [
    {
      title: "Product Integration",
      description:
        "A shared integration layer designed to connect independently developed N Plus products without removing their domain autonomy.",
    },
    {
      title: "Connectors & APIs",
      description:
        "Standardized interfaces for internal products, external services, payment systems, data sources, and third-party platforms.",
    },
    {
      title: "Data & Intelligence",
      description:
        "A foundation for unified operational data, analytics, shared context, and cross-product intelligence.",
    },
    {
      title: "AI & Knowledge",
      description:
        "Shared AI and knowledge capabilities designed to support search, assistance, analysis, and future intelligent automation.",
    },
    {
      title: "Access & Governance",
      description:
        "Common patterns for role-based access, auditability, policy controls, product configuration, and secure administration.",
    },
    {
      title: "Product Health & Scale",
      description:
        "A central view of product status, deployment readiness, integration health, and the systems required for reliable growth.",
    },
  ],
  ko: [
    {
      title: "제품 통합",
      description:
        "각 제품의 고유한 비즈니스 영역은 유지하면서 독립적으로 개발된 N Plus 제품들을 연결하는 공통 통합 레이어입니다.",
    },
    {
      title: "커넥터 & API",
      description:
        "내부 제품, 외부 서비스, 결제 시스템, 데이터 소스와 제3자 플랫폼을 연결하기 위한 표준화된 인터페이스를 제공합니다.",
    },
    {
      title: "데이터 & 인텔리전스",
      description:
        "통합 운영 데이터, 분석, 공유 컨텍스트와 제품 간 인텔리전스를 위한 공통 기반을 구축합니다.",
    },
    {
      title: "AI & 지식",
      description:
        "검색, 지원, 분석과 향후 지능형 자동화를 뒷받침하는 공유 AI 및 지식 기능을 제공합니다.",
    },
    {
      title: "접근 제어 & 거버넌스",
      description:
        "역할 기반 접근 제어, 감사 추적, 정책 관리, 제품 설정과 안전한 운영을 위한 공통 패턴을 제공합니다.",
    },
    {
      title: "제품 상태 & 확장",
      description:
        "제품 상태, 배포 준비도, 연동 상태와 안정적인 확장에 필요한 시스템을 중앙에서 파악할 수 있도록 설계합니다.",
    },
  ],
  zh: [
    {
      title: "产品集成",
      description:
        "通过共享集成层连接独立开发的 N Plus 产品，同时保留各产品自身的业务领域与独立性。",
    },
    {
      title: "连接器与 API",
      description:
        "为内部产品、外部服务、支付系统、数据源及第三方平台提供标准化接口。",
    },
    {
      title: "数据与智能",
      description:
        "为统一运营数据、分析、共享上下文及跨产品智能提供共同基础。",
    },
    {
      title: "AI 与知识",
      description:
        "提供共享 AI 与知识能力，用于支持搜索、辅助、分析以及未来的智能自动化。",
    },
    {
      title: "访问与治理",
      description:
        "提供角色访问控制、审计、策略管理、产品配置与安全运营的通用机制。",
    },
    {
      title: "产品健康与扩展",
      description:
        "集中查看产品状态、部署准备度、集成健康状况及支持可靠扩展所需的系统能力。",
    },
  ],
} as const;

export function getAtlasCapabilities(locale: Locale): AtlasCapability[] {
  return atlasText[locale].map((item, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: item.title,
    description: item.description,
  }));
}

const coreText = {
  en: [
    {
      title: "Software & Application Development",
      description:
        "Custom business software, responsive web applications, mobile-first products, and internal operational systems.",
    },
    {
      title: "Digital Platform Engineering",
      description:
        "Scalable platforms that connect users, services, transactions, content, communities, and business workflows.",
    },
    {
      title: "System & API Integration",
      description:
        "Secure integration between internal products, databases, payment services, cloud tools, and third-party systems.",
    },
    {
      title: "Data, AI & Knowledge Systems",
      description:
        "Shared data foundations, analytics, AI-enabled functions, searchable knowledge, and intelligent decision support.",
    },
    {
      title: "Business Process Automation",
      description:
        "Digital workflows that reduce manual work, improve visibility, standardize processes, and increase operational control.",
    },
    {
      title: "Cloud, Security & Governance",
      description:
        "Architecture for deployment, role-based access, auditability, reliability, observability, and long-term scalability.",
    },
  ],
  ko: [
    {
      title: "소프트웨어 & 애플리케이션 개발",
      description:
        "맞춤형 비즈니스 소프트웨어, 반응형 웹 애플리케이션, 모바일 중심 제품과 내부 운영 시스템을 개발합니다.",
    },
    {
      title: "디지털 플랫폼 엔지니어링",
      description:
        "사용자, 서비스, 거래, 콘텐츠, 커뮤니티와 업무 프로세스를 연결하는 확장 가능한 플랫폼을 구축합니다.",
    },
    {
      title: "시스템 & API 통합",
      description:
        "내부 제품, 데이터베이스, 결제 서비스, 클라우드 도구와 제3자 시스템을 안전하게 연동합니다.",
    },
    {
      title: "데이터·AI·지식 시스템",
      description:
        "공유 데이터 기반, 분석, AI 기능, 검색 가능한 지식과 지능형 의사결정 지원 체계를 구축합니다.",
    },
    {
      title: "업무 프로세스 자동화",
      description:
        "수작업을 줄이고 가시성을 높이며 프로세스를 표준화하고 운영 통제를 강화하는 디지털 워크플로를 설계합니다.",
    },
    {
      title: "클라우드·보안·거버넌스",
      description:
        "배포, 역할 기반 접근, 감사 추적, 안정성, 관측성과 장기 확장을 고려한 아키텍처를 설계합니다.",
    },
  ],
  zh: [
    {
      title: "软件与应用开发",
      description:
        "开发定制业务软件、响应式 Web 应用、移动优先产品及内部运营系统。",
    },
    {
      title: "数字平台工程",
      description:
        "构建可扩展平台，连接用户、服务、交易、内容、社区与业务流程。",
    },
    {
      title: "系统与 API 集成",
      description:
        "安全连接内部产品、数据库、支付服务、云工具及第三方系统。",
    },
    {
      title: "数据、AI 与知识系统",
      description:
        "构建共享数据基础、分析能力、AI 功能、可搜索知识与智能决策支持体系。",
    },
    {
      title: "业务流程自动化",
      description:
        "通过数字工作流减少人工操作、提升可视性、标准化流程并加强运营控制。",
    },
    {
      title: "云、安全与治理",
      description:
        "面向部署、角色访问、审计、可靠性、可观测性与长期扩展设计技术架构。",
    },
  ],
} as const;

export function getCoreCapabilities(locale: Locale): CoreCapability[] {
  return coreText[locale].map((item, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: item.title,
    description: item.description,
  }));
}

const businessText = {
  en: [
    {
      title: "Technology & Digital Platforms",
      description:
        "Software products, web and mobile applications, digital platforms, APIs, cloud systems, AI-enabled tools, and connected services.",
    },
    {
      title: "Fintech & Payment Solutions",
      description:
        "Payment platforms, merchant systems, transaction workflows, digital onboarding, reporting, and financial service integrations.",
    },
    {
      title: "Tourism & Hospitality Development",
      description:
        "Technology-enabled platforms and development solutions for reservations, hotels, destinations, guest services, and visitor experiences.",
    },
    {
      title: "Construction & Property Development",
      description:
        "Digital systems and project solutions for planning, coordination, documentation, monitoring, property management, and facility operations.",
    },
    {
      title: "Business Consulting & Project Management",
      description:
        "Technology strategy, requirements analysis, solution architecture, digital transformation, and end-to-end project delivery.",
    },
  ],
  ko: [
    {
      title: "기술 & 디지털 플랫폼",
      description:
        "소프트웨어 제품, 웹·모바일 애플리케이션, 디지털 플랫폼, API, 클라우드 시스템, AI 도구와 연결형 서비스를 개발합니다.",
    },
    {
      title: "핀테크 & 결제 솔루션",
      description:
        "결제 플랫폼, 가맹점 시스템, 거래 워크플로, 디지털 온보딩, 리포팅과 금융 서비스 연동을 개발합니다.",
    },
    {
      title: "관광 & 호스피탈리티 개발",
      description:
        "예약, 호텔, 관광지, 고객 서비스와 방문객 경험을 위한 기술 기반 플랫폼 및 개발 솔루션을 제공합니다.",
    },
    {
      title: "건설 & 부동산 개발",
      description:
        "기획, 협업, 문서, 모니터링, 부동산 관리와 시설 운영을 위한 디지털 시스템 및 프로젝트 솔루션을 개발합니다.",
    },
    {
      title: "비즈니스 컨설팅 & 프로젝트 관리",
      description:
        "기술 전략, 요구사항 분석, 솔루션 아키텍처, 디지털 전환과 전 과정 프로젝트 수행을 지원합니다.",
    },
  ],
  zh: [
    {
      title: "科技与数字平台",
      description:
        "开发软件产品、Web 与移动应用、数字平台、API、云系统、AI 工具及互联服务。",
    },
    {
      title: "金融科技与支付解决方案",
      description:
        "开发支付平台、商户系统、交易流程、数字化入驻、报表及金融服务集成。",
    },
    {
      title: "旅游与酒店业开发",
      description:
        "为预订、酒店、目的地、宾客服务与游客体验提供技术平台和开发解决方案。",
    },
    {
      title: "建筑与房地产开发",
      description:
        "为规划、协作、文档、监控、物业管理与设施运营提供数字系统和项目解决方案。",
    },
    {
      title: "商业咨询与项目管理",
      description:
        "提供技术战略、需求分析、解决方案架构、数字化转型及端到端项目交付支持。",
    },
  ],
} as const;

export function getBusinessAreas(locale: Locale): BusinessArea[] {
  return businessText[locale].map((item, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: item.title,
    description: item.description,
  }));
}

const projectMeta = [
  { slug: "atlas", number: "01", accent: "blue" },
  {
    slug: "pawcircle",
    number: "02",
    accent: "violet",
    website: "https://pawcircle-ten.vercel.app",
    images: [
      "/projects/pawcircle/paw1.webp",
      "/projects/pawcircle/paw2.webp",
    ],
  },
  {
    slug: "paynplus",
    number: "03",
    accent: "blue",
    website: "https://admin.paynplus.com",
    images: [
      "/projects/paynplus/pgmain.webp",
      "/projects/paynplus/pgaccept.webp",
      "/projects/paynplus/pgindustry.webp",
      "/projects/paynplus/pgmerchant.webp",
      "/projects/paynplus/pgpartner.webp",
      "/projects/paynplus/pgqr.webp",
      "/projects/paynplus/pgwhy.webp",
      "/projects/paynplus/pgadmin.webp",
    ],
  },
  {
    slug: "tableorder",
    number: "04",
    accent: "orange",
    website: "https://order-pay-get.web.app",
    images: [
      "/projects/tableorder/orderhome.webp",
      "/projects/tableorder/orderentrance.webp",
      "/projects/tableorder/ordermenu.webp",
      "/projects/tableorder/ordercart.webp",
      "/projects/tableorder/orderpayselect.webp",
      "/projects/tableorder/orderpaypr.webp",
      "/projects/tableorder/ordercallstff.webp",
      "/projects/tableorder/ordergeneral.webp",
      "/projects/tableorder/orderfinance.webp",
      "/projects/tableorder/orderhr.webp",
    ],
  },
  {
    slug: "hotelnplus",
    number: "05",
    accent: "cyan",
    website: "https://hotelnplus.com",
    images: [
      "/projects/hotelnplus/pmsmain.webp",
      "/projects/hotelnplus/pmsdashboard.webp",
      "/projects/hotelnplus/pmsfront.webp",
      "/projects/hotelnplus/pmschckin.webp",
      "/projects/hotelnplus/pmsinventory.webp",
      "/projects/hotelnplus/pmsevent.webp",
      "/projects/hotelnplus/pmsfinance.webp",
      "/projects/hotelnplus/pmstv.webp",
    ],
  },
  {
    slug: "mountain-bike-tourism-complex",
    number: "06",
    accent: "orange",
  },
  {
    slug: "mountain-resort-complex",
    number: "07",
    accent: "green",
  },
] as const;

const projectText = {
  en: [
    {
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
    },
    {
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
    },
    {
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
    },
    {
      title: "Table Order & Pay",
      eyebrow: "F&B Order, Payment & Operations Platform",
      summary:
        "An integrated F&B platform that lets guests order and pay directly from the table while connecting POS, finance, accounting, HR, and workforce operations.",
      description:
        "Table Order & Pay is designed for restaurants, cafés, bars, and other F&B businesses. Guests can browse menus, place orders, call staff, and complete payment from the table, while operators manage POS workflows, sales, settlement, finance, accounting, HR, labor, and operational administration through one connected platform.",
      businessArea: "Technology & Digital Platforms",
      capabilities: [
        "Table ordering and integrated payment",
        "POS, menu, cart, and staff-call workflows",
        "Finance, accounting, and settlement management",
        "HR, workforce, and operational administration",
      ],
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ],
  ko: [
    {
      title: "Atlas",
      eyebrow: "인텔리전스 & 통합 플랫폼",
      summary:
        "제품, 데이터, 연동, AI, 지식, 접근 제어와 제품 상태를 연결하는 N Plus의 핵심 플랫폼 아키텍처.",
      description:
        "Atlas는 N Plus 소프트웨어 생태계 전체에 공통으로 적용되는 인텔리전스 및 통합 레이어로 개발되고 있습니다. 각 제품의 고유한 비즈니스 영역은 유지하면서 공통 API, 커넥터, 데이터 구조, AI·지식 서비스, 접근 제어, 설정 및 제품 상태 기능을 통해 독립 제품들을 연결하도록 설계합니다.",
      businessArea: "기술 & 디지털 플랫폼",
      capabilities: [
        "다중 제품 통합 아키텍처",
        "커넥터 및 API 관리",
        "공유 데이터·AI·지식 서비스",
        "접근 제어·거버넌스·제품 상태 관리",
      ],
    },
    {
      title: "PawCircle",
      eyebrow: "반려동물 커뮤니티 & 서비스 플랫폼",
      summary:
        "반려인, 커뮤니티, 사업자, 돌봄 제공자와 신뢰 기반 서비스를 연결하는 모바일 중심 디지털 생태계.",
      description:
        "PawCircle은 반려인, 커뮤니티 활동, 위치 기반 탐색, 서비스 제공자, 검증된 사업자, 돌봄 워크플로와 실시간 커뮤니케이션을 하나의 연결된 플랫폼으로 통합하며 지역 확장을 고려해 설계됩니다.",
      businessArea: "기술 & 디지털 플랫폼",
      capabilities: [
        "커뮤니티 및 소셜 플랫폼 개발",
        "서비스 마켓플레이스 워크플로",
        "실시간 커뮤니케이션 시스템",
        "신원·검증·신뢰 기능",
      ],
    },
    {
      title: "Paynplus",
      eyebrow: "핀테크 & 가맹점 플랫폼",
      summary:
        "오프라인, 온라인, QR과 연계 금융 서비스를 연결하는 가맹점용 통합 결제 기술 플랫폼.",
      description:
        "Paynplus는 결제 수납, 가맹점 온보딩, 거래 관리, 정산 가시성, 리포팅, 컴플라이언스 워크플로와 금융 연동을 온·오프라인 채널 전반에서 연결하도록 설계합니다.",
      businessArea: "핀테크 & 결제 솔루션",
      capabilities: [
        "가맹점 관리 플랫폼",
        "POS·온라인·QR 결제 연동",
        "거래 모니터링 및 리포팅",
        "컴플라이언스 기반 온보딩 워크플로",
      ],
    },
    {
      title: "Table Order & Pay",
      eyebrow: "F&B 주문·결제·운영 통합 플랫폼",
      summary:
        "고객이 테이블에서 주문과 결제를 동시에 처리하고 POS, 회계, 재무, 인사와 노무까지 연결하는 F&B 통합 운영 솔루션.",
      description:
        "Table Order & Pay는 레스토랑, 카페, 바 등 F&B 사업자를 위한 통합 운영 플랫폼입니다. 고객은 테이블에서 메뉴 확인, 주문, 직원 호출과 결제를 직접 처리할 수 있으며, 사업자는 POS, 매출, 정산, 재무·회계, 인사·노무 및 운영 관리 기능을 하나의 연결된 시스템에서 관리할 수 있습니다.",
      businessArea: "기술 & 디지털 플랫폼",
      capabilities: [
        "테이블 주문 및 통합 결제",
        "POS·메뉴·장바구니·직원 호출 워크플로",
        "재무·회계·정산 관리",
        "인사·노무 및 운영 관리",
      ],
    },
    {
      title: "Hotelnplus",
      eyebrow: "호스피탈리티 기술 플랫폼",
      summary:
        "호텔 서비스, 예약, 고객 경험, 자산 데이터와 운영 관리 도구를 통합하는 호스피탈리티 기술 플랫폼.",
      description:
        "Hotelnplus는 예약 흐름, 고객 여정, 서비스 요청, 호텔 운영, 리포팅과 디지털 고객 서비스를 하나의 플랫폼에서 연결하는 확장형 호스피탈리티 기술 프레임워크입니다.",
      businessArea: "관광 & 호스피탈리티 개발",
      capabilities: [
        "호텔 및 예약 플랫폼 개발",
        "고객 서비스 및 디지털 컨시어지 도구",
        "호텔 운영 시스템 연동",
        "관리 대시보드 및 리포팅",
      ],
    },
    {
      title: "산악자전거 관광 복합단지",
      eyebrow: "기술 기반 관광 개발",
      summary:
        "실제 관광 인프라와 디지털 방문객·이벤트·관광지 서비스를 결합하는 대규모 산악자전거 관광 프로젝트.",
      description:
        "산악자전거 관광 복합단지는 트레일 정보, 예약, 이벤트, 멤버십, 디지털 마케팅, 지역 사업자 참여와 데이터 기반 관광 관리를 포함한 기술 중심 방문객 서비스를 관광지 개발과 결합합니다.",
      businessArea: "관광 & 호스피탈리티 개발",
      capabilities: [
        "관광지 및 관광 플랫폼 기획",
        "디지털 트레일·방문객 정보 시스템",
        "예약 및 이벤트 관리 워크플로",
        "지역 사업자 및 서비스 연동",
      ],
    },
    {
      title: "산악 리조트 복합단지",
      eyebrow: "기술 기반 리조트 개발",
      summary:
        "디지털 예약, 고객 서비스, 자산 시스템과 관광지 기술을 결합한 통합 산악 리조트 개발 콘셉트.",
      description:
        "산악 리조트 복합단지는 숙박, 경관 경험, 식음료, 야외 활동과 방문객 편의시설에 기술 기반 예약, 고객 커뮤니케이션, 자산 관리, 관광지 정보와 연결형 서비스 시스템을 결합합니다.",
      businessArea: "관광 & 호스피탈리티 개발",
      capabilities: [
        "리조트 기술 및 고객 서비스 기획",
        "예약·자산 시스템 연동",
        "디지털 관광지 정보 서비스",
        "단계별 개발 및 솔루션 아키텍처",
      ],
    },
  ],
  zh: [
    {
      title: "Atlas",
      eyebrow: "智能与集成平台",
      summary:
        "连接产品、数据、集成、AI、知识、访问控制与产品健康状态的 N Plus 核心平台架构。",
      description:
        "Atlas 正在被开发为 N Plus 软件生态的共享智能与集成层。在保留各产品自身业务领域的同时，通过统一 API、连接器、数据结构、AI 与知识服务、访问控制、配置及产品健康能力连接独立产品。",
      businessArea: "科技与数字平台",
      capabilities: [
        "多产品集成架构",
        "连接器与 API 管理",
        "共享数据、AI 与知识服务",
        "访问控制、治理与产品健康管理",
      ],
    },
    {
      title: "PawCircle",
      eyebrow: "宠物社区与服务平台",
      summary:
        "连接宠物主人、社区、商家、照护服务提供者与可信服务的移动优先数字生态系统。",
      description:
        "PawCircle 将宠物主人、社区互动、基于位置的发现、服务提供者、认证商家、照护流程与实时沟通整合到一个互联平台中，并为区域扩展而设计。",
      businessArea: "科技与数字平台",
      capabilities: [
        "社区与社交平台开发",
        "服务市场工作流",
        "实时沟通系统",
        "身份、认证与信任功能",
      ],
    },
    {
      title: "Paynplus",
      eyebrow: "金融科技与商户平台",
      summary:
        "面向商户的综合支付技术平台，覆盖线下、线上、QR 与互联金融服务。",
      description:
        "Paynplus 旨在贯通支付受理、商户入驻、交易管理、结算可视化、报表、合规流程与金融集成，覆盖实体与数字渠道。",
      businessArea: "金融科技与支付解决方案",
      capabilities: [
        "商户管理平台",
        "POS、线上与 QR 支付集成",
        "交易监控与报表",
        "合规导向的商户入驻流程",
      ],
    },
    {
      title: "Table Order & Pay",
      eyebrow: "餐饮点餐·支付·运营一体化平台",
      summary:
        "让顾客在餐桌端完成点餐与支付，并将 POS、财务、会计、人事与劳务管理连接起来的餐饮业综合运营解决方案。",
      description:
        "Table Order & Pay 面向餐厅、咖啡厅、酒吧及其他餐饮企业。顾客可在餐桌端查看菜单、下单、呼叫员工并完成支付；经营者则可在同一平台中管理 POS、销售、结算、财务会计、人事劳务及日常运营。",
      businessArea: "科技与数字平台",
      capabilities: [
        "餐桌点餐与一体化支付",
        "POS、菜单、购物车与员工呼叫流程",
        "财务、会计与结算管理",
        "人事、劳务与运营管理",
      ],
    },
    {
      title: "Hotelnplus",
      eyebrow: "酒店业技术平台",
      summary:
        "整合酒店服务、预订、宾客体验、物业数据与管理工具的酒店业技术平台。",
      description:
        "Hotelnplus 是一个可扩展的酒店业技术框架，在统一平台中连接预订流程、宾客旅程、服务请求、物业运营、报表与数字宾客服务。",
      businessArea: "旅游与酒店业开发",
      capabilities: [
        "酒店与预订平台开发",
        "宾客服务与数字礼宾工具",
        "物业运营系统集成",
        "管理仪表板与报表",
      ],
    },
    {
      title: "山地自行车旅游综合体",
      eyebrow: "技术驱动的旅游开发",
      summary:
        "将实体旅游基础设施与数字游客、活动及目的地服务结合的大型山地自行车旅游项目。",
      description:
        "山地自行车旅游综合体将目的地开发与技术驱动的游客服务结合，包括路线信息、预订、活动、会员、数字营销、本地商家参与及数据支持的旅游管理。",
      businessArea: "旅游与酒店业开发",
      capabilities: [
        "目的地与旅游平台规划",
        "数字路线与游客信息系统",
        "预订与活动管理流程",
        "本地商家与服务集成",
      ],
    },
    {
      title: "山地度假村综合体",
      eyebrow: "技术驱动的度假村开发",
      summary:
        "融合数字预订、宾客服务、物业系统与目的地技术的综合山地度假村概念。",
      description:
        "山地度假村综合体将住宿、景观体验、餐饮、户外活动与游客设施，与技术驱动的预订、宾客沟通、物业管理、目的地信息及互联服务系统结合。",
      businessArea: "旅游与酒店业开发",
      capabilities: [
        "度假村技术与宾客服务规划",
        "预订与物业系统集成",
        "数字目的地信息服务",
        "分阶段开发与解决方案架构",
      ],
    },
  ],
} as const;

export function getProjects(locale: Locale): Project[] {
  return projectMeta.map((meta, index) => {
    const item = projectText[locale][index];

    return {
      slug: meta.slug,
      number: meta.number,
      title: item.title,
      eyebrow: item.eyebrow,
      summary: item.summary,
      description: item.description,
      businessArea: item.businessArea,
      capabilities: [...item.capabilities],
      accent: meta.accent,
      website: "website" in meta ? meta.website : undefined,
      images: "images" in meta ? [...meta.images] : undefined,
    };
  });
}

const approachText = {
  en: [
    {
      title: "Discover",
      description:
        "Understand the business problem, users, operating context, workflows, data, and technology requirements.",
    },
    {
      title: "Define",
      description:
        "Establish product scope, software requirements, system boundaries, solution architecture, and delivery priorities.",
    },
    {
      title: "Design",
      description:
        "Design the user experience, interfaces, data model, integrations, and technical structure of the solution.",
    },
    {
      title: "Develop",
      description:
        "Build, integrate, test, secure, and refine the application, platform, or connected system.",
    },
    {
      title: "Integrate & Scale",
      description:
        "Connect the solution to its wider ecosystem, deploy it reliably, monitor health, and prepare for continued growth.",
    },
  ],
  ko: [
    {
      title: "요구사항 파악",
      description:
        "비즈니스 문제, 사용자, 운영 환경, 업무 프로세스, 데이터와 기술 요구사항을 파악합니다.",
    },
    {
      title: "정의",
      description:
        "제품 범위, 소프트웨어 요구사항, 시스템 경계, 솔루션 아키텍처와 개발 우선순위를 정의합니다.",
    },
    {
      title: "설계",
      description:
        "사용자 경험, 인터페이스, 데이터 모델, 연동 구조와 기술 설계를 구체화합니다.",
    },
    {
      title: "개발",
      description:
        "애플리케이션, 플랫폼 또는 연결형 시스템을 구축하고 연동·테스트·보안·개선을 진행합니다.",
    },
    {
      title: "통합 & 확장",
      description:
        "솔루션을 더 큰 생태계와 연결하고 안정적으로 배포한 뒤 상태를 모니터링하며 지속적인 확장을 준비합니다.",
    },
  ],
  zh: [
    {
      title: "需求发现",
      description:
        "理解业务问题、用户、运营环境、工作流程、数据与技术需求。",
    },
    {
      title: "定义",
      description:
        "明确产品范围、软件需求、系统边界、解决方案架构与交付优先级。",
    },
    {
      title: "设计",
      description:
        "设计用户体验、界面、数据模型、集成方式与解决方案的技术结构。",
    },
    {
      title: "开发",
      description:
        "构建、集成、测试、加固并持续优化应用、平台或互联系统。",
    },
    {
      title: "集成与扩展",
      description:
        "将解决方案接入更大的生态系统，可靠部署、监控健康状态，并为持续增长做好准备。",
    },
  ],
} as const;

export function getApproach(locale: Locale): ApproachItem[] {
  return approachText[locale].map((item, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: item.title,
    description: item.description,
  }));
}

// English aliases retained for static generation and backward compatibility.
export const navigation = getNavigation("en");
export const atlasCapabilities = getAtlasCapabilities("en");
export const coreCapabilities = getCoreCapabilities("en");
export const businessAreas = getBusinessAreas("en");
export const projects = getProjects("en");
export const approach = getApproach("en");
