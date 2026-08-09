export const locales = ["en", "ko", "zh"] as const;

export type Locale = (typeof locales)[number];

export const languageOptions: Array<{
  locale: Locale;
  shortLabel: string;
  label: string;
}> = [
  { locale: "en", shortLabel: "EN", label: "English" },
  { locale: "ko", shortLabel: "KO", label: "한국어" },
  { locale: "zh", shortLabel: "中文", label: "简体中文" },
];

export function localePrefix(locale: Locale) {
  if (locale === "ko") return "/ko";
  if (locale === "zh") return "/zh";
  return "";
}

export function localizedHomeHref(locale: Locale, hash = "") {
  const base = localePrefix(locale) || "/";
  return hash ? `${base}${hash}` : base;
}

export function localizedProjectHref(locale: Locale, slug: string) {
  return `${localePrefix(locale)}/projects/${slug}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale) {
  const withoutLocale = pathname.replace(/^\/(ko|zh)(?=\/|$)/, "") || "/";
  const prefix = localePrefix(targetLocale);

  if (withoutLocale === "/") return prefix || "/";
  return `${prefix}${withoutLocale}`;
}

export function htmlLang(locale: Locale) {
  if (locale === "ko") return "ko";
  if (locale === "zh") return "zh-CN";
  return "en";
}

export const siteCopy = {
  en: {
    navigation: {
      about: "About",
      atlas: "Atlas",
      technology: "Technology",
      businessAreas: "Business Areas",
      projects: "Products & Projects",
      contact: "Contact",
    },
    header: {
      cta: "Start a conversation",
      openNavigation: "Open navigation",
      closeNavigation: "Close navigation",
      language: "Language",
    },
    hero: {
      badge: "Software. Platforms. Intelligence.",
      titleLine1: "Building what",
      titleLine2: "comes next.",
      description:
        "N Plus Solutions Inc. designs and develops connected software, digital platforms, AI-enabled systems, and industry-specific technology solutions — turning independent applications and business processes into scalable digital ecosystems.",
      exploreAtlas: "Explore Atlas",
      projects: "Products & projects",
      principles: ["Build", "Connect", "Understand", "Scale"],
    },
    about: {
      label: "About N Plus",
      side:
        "Next is the direction. Plus is the technology and intelligence we add.",
      title:
        "We build the software and connected systems behind real businesses.",
      leadPrefix: "N Plus stands for",
      leadStrong: "Next Plus",
      leadSuffix:
        "— a commitment to move beyond standalone software by combining engineering, product strategy, integration, data, and practical industry knowledge.",
      body:
        "We develop custom software, web and mobile applications, digital platforms, APIs, automation, and AI-enabled systems. Our solutions are designed to connect products, users, business processes, and data while remaining adaptable to different industries and operating environments.",
      cards: [
        {
          title: "Engineering-led",
          text: "Software architecture and product development form the core of our work.",
        },
        {
          title: "Connected by design",
          text: "Products are designed to exchange data and work as part of a wider ecosystem.",
        },
        {
          title: "Intelligence-ready",
          text: "Data, knowledge, and AI are treated as shared capabilities rather than isolated features.",
        },
      ],
    },
    atlas: {
      badge: "N Plus Core Platform",
      label: "Atlas",
      title: "One intelligence and integration layer for many products.",
      description:
        "Atlas is the central platform architecture N Plus is developing to connect products, integrations, data, AI, knowledge, access control, and product health across a growing software ecosystem.",
      systemLabel: "ATLAS / N+",
      platformLabel: "Intelligence & Integration Platform",
    },
    core: {
      label: "Core Technology",
      title: "The capabilities behind every N Plus solution.",
      description:
        "We combine application engineering, platform architecture, integration, automation, data, and governance into a unified development capability.",
    },
    business: {
      label: "Business Areas",
      title: "Technology applied to real industries.",
      description:
        "Our business areas define where N Plus applies software, digital platforms, integrations, and technology-led development.",
    },
    projects: {
      label: "Products & Projects",
      title: "Software products and technology-enabled developments.",
      description:
        "Our portfolio ranges from digital-first platforms to physical developments where technology, data, and connected services are designed as part of the business from the beginning.",
    },
    approach: {
      label: "Development Approach",
      title: "From business need to connected solution.",
      description:
        "We align product requirements, user experience, software architecture, integration, data, and deployment in one structured development process.",
    },
    contact: {
      label: "Contact",
      title: "Let’s build your next connected solution.",
      description:
        "Share your software requirement, platform concept, integration challenge, or industry opportunity. We will start by defining the problem and the right technology architecture.",
      start: "Start with a conversation",
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      company: "Company",
      companyPlaceholder: "Company or organization",
      email: "Email",
      message: "Tell us about your project",
      messagePlaceholder:
        "Project idea, objective, location, timeline, or support required",
      prepared: "Email prepared",
      send: "Send inquiry",
      note:
        "The button opens your default email application with the inquiry details prepared.",
      subjectPrefix: "N Plus website inquiry from",
      prospectivePartner: "a prospective partner",
      bodyName: "Name",
      bodyCompany: "Company",
      bodyEmail: "Email",
      bodyProject: "Project / Inquiry",
    },
    footer: {
      tagline:
        "Software, platforms, integration, and intelligence for what comes next.",
      backToTop: "Back to top",
    },
    projectPage: {
      back: "Back to projects",
      businessArea: "Business Area",
      overview: "Project overview",
      capabilities: "Core capabilities",
      nextProject: "Next project",
    },
    network: {
      aiDetail: "Intelligence",
      dataDetail: "Shared context",
      apiDetail: "Connectors",
      knowledgeDetail: "Context",
      governed: "Governed connection layer",
      core: "N Plus Core",
    },
  },
  ko: {
    navigation: {
      about: "회사소개",
      atlas: "Atlas",
      technology: "기술",
      businessAreas: "사업영역",
      projects: "제품 및 프로젝트",
      contact: "문의",
    },
    header: {
      cta: "상담 시작하기",
      openNavigation: "메뉴 열기",
      closeNavigation: "메뉴 닫기",
      language: "언어",
    },
    hero: {
      badge: "소프트웨어. 플랫폼. 인텔리전스.",
      titleLine1: "next를",
      titleLine2: "만듭니다.",
      description:
        "N Plus Solutions Inc.는 연결형 소프트웨어, 디지털 플랫폼, AI 기반 시스템, 산업별 기술 솔루션을 설계·개발하여 독립된 애플리케이션과 업무 프로세스를 확장 가능한 디지털 생태계로 연결합니다.",
      exploreAtlas: "Atlas 살펴보기",
      projects: "제품 및 프로젝트",
      principles: ["구축", "연결", "이해", "확장"],
    },
    about: {
      label: "N Plus 소개",
      side:
        "Next는 방향이고, Plus는 우리가 더하는 기술과 인텔리전스입니다.",
      title:
        "실제 비즈니스를 움직이는 소프트웨어와 연결 시스템을 만듭니다.",
      leadPrefix: "N Plus는",
      leadStrong: "Next Plus",
      leadSuffix:
        "를 뜻합니다. 단독형 소프트웨어를 넘어 엔지니어링, 제품 전략, 시스템 통합, 데이터와 산업 현장의 이해를 결합하겠다는 의미입니다.",
      body:
        "맞춤형 소프트웨어, 웹·모바일 애플리케이션, 디지털 플랫폼, API, 자동화 및 AI 기반 시스템을 개발합니다. 제품·사용자·업무 프로세스·데이터가 서로 연결되도록 설계하면서도 산업과 운영 환경에 맞게 확장할 수 있도록 구축합니다.",
      cards: [
        {
          title: "엔지니어링 중심",
          text: "소프트웨어 아키텍처와 제품 개발이 모든 프로젝트의 중심입니다.",
        },
        {
          title: "연결을 전제로 한 설계",
          text: "각 제품은 데이터를 교환하고 더 큰 생태계의 일부로 작동하도록 설계합니다.",
        },
        {
          title: "인텔리전스 준비",
          text: "데이터·지식·AI를 개별 기능이 아니라 공유 가능한 핵심 역량으로 다룹니다.",
        },
      ],
    },
    atlas: {
      badge: "N Plus 핵심 플랫폼",
      label: "Atlas",
      title: "여러 제품을 하나로 연결하는 인텔리전스·통합 레이어.",
      description:
        "Atlas는 N Plus가 확장 중인 소프트웨어 생태계 전반에서 제품, 연동, 데이터, AI, 지식, 접근 제어와 제품 상태를 연결하기 위해 개발하는 중앙 플랫폼 아키텍처입니다.",
      systemLabel: "ATLAS / N+",
      platformLabel: "인텔리전스 & 통합 플랫폼",
    },
    core: {
      label: "핵심 기술",
      title: "모든 N Plus 솔루션을 뒷받침하는 기술 역량.",
      description:
        "애플리케이션 엔지니어링, 플랫폼 아키텍처, 시스템 연동, 자동화, 데이터와 거버넌스를 하나의 개발 역량으로 결합합니다.",
    },
    business: {
      label: "사업 영역",
      title: "실제 산업에 적용되는 기술.",
      description:
        "N Plus는 소프트웨어, 디지털 플랫폼, 시스템 연동과 기술 중심 개발 역량을 다양한 산업에 적용합니다.",
    },
    projects: {
      label: "제품 및 프로젝트",
      title: "소프트웨어 제품과 기술 기반 개발 프로젝트.",
      description:
        "디지털 중심 플랫폼부터 기술·데이터·연결 서비스가 사업 설계 단계부터 결합되는 오프라인 개발 프로젝트까지 포트폴리오를 확장하고 있습니다.",
    },
    approach: {
      label: "개발 방식",
      title: "비즈니스 요구에서 연결형 솔루션까지.",
      description:
        "제품 요구사항, 사용자 경험, 소프트웨어 아키텍처, 시스템 연동, 데이터와 배포를 하나의 체계적인 개발 프로세스로 정렬합니다.",
    },
    contact: {
      label: "문의",
      title: "다음 연결형 솔루션을 함께 만듭니다.",
      description:
        "소프트웨어 요구사항, 플랫폼 아이디어, 시스템 연동 과제 또는 산업 기회를 알려주세요. 문제를 정의하고 적합한 기술 아키텍처를 설계하는 것부터 시작합니다.",
      start: "상담 시작하기",
    },
    form: {
      name: "이름",
      namePlaceholder: "이름을 입력하세요",
      company: "회사",
      companyPlaceholder: "회사 또는 기관명",
      email: "이메일",
      message: "프로젝트에 대해 알려주세요",
      messagePlaceholder:
        "프로젝트 아이디어, 목표, 지역, 일정 또는 필요한 지원을 입력하세요",
      prepared: "이메일 준비 완료",
      send: "문의 보내기",
      note:
        "버튼을 누르면 문의 내용이 작성된 상태로 기본 이메일 애플리케이션이 열립니다.",
      subjectPrefix: "N Plus 홈페이지 문의",
      prospectivePartner: "잠재 고객",
      bodyName: "이름",
      bodyCompany: "회사",
      bodyEmail: "이메일",
      bodyProject: "프로젝트 / 문의내용",
    },
    footer: {
      tagline:
        "소프트웨어, 플랫폼, 통합과 인텔리전스로 다음을 만듭니다.",
      backToTop: "맨 위로",
    },
    projectPage: {
      back: "프로젝트 목록으로",
      businessArea: "사업 영역",
      overview: "프로젝트 개요",
      capabilities: "핵심 역량",
      nextProject: "다음 프로젝트",
    },
    network: {
      aiDetail: "인텔리전스",
      dataDetail: "공유 컨텍스트",
      apiDetail: "커넥터",
      knowledgeDetail: "컨텍스트",
      governed: "거버넌스 연결 레이어",
      core: "N Plus Core",
    },
  },
  zh: {
    navigation: {
      about: "关于我们",
      atlas: "Atlas",
      technology: "技术",
      businessAreas: "业务领域",
      projects: "产品与项目",
      contact: "联系我们",
    },
    header: {
      cta: "开始沟通",
      openNavigation: "打开菜单",
      closeNavigation: "关闭菜单",
      language: "语言",
    },
    hero: {
      badge: "软件 · 平台 · 智能",
      titleLine1: "构建",
      titleLine2: "下一个未来。",
      description:
        "N Plus Solutions Inc. 设计并开发互联软件、数字平台、AI 驱动系统及行业专属技术解决方案，将独立应用与业务流程连接成可扩展的数字生态系统。",
      exploreAtlas: "了解 Atlas",
      projects: "产品与项目",
      principles: ["构建", "连接", "理解", "扩展"],
    },
    about: {
      label: "关于 N Plus",
      side:
        "Next 是方向，Plus 是我们赋予的技术与智能价值。",
      title:
        "我们构建驱动真实业务的软件与互联系统。",
      leadPrefix: "N Plus 代表",
      leadStrong: "Next Plus",
      leadSuffix:
        "。我们的目标不止于单一软件，而是将工程、产品战略、系统集成、数据与行业实践结合起来。",
      body:
        "我们开发定制软件、Web 与移动应用、数字平台、API、自动化及 AI 驱动系统。我们的解决方案连接产品、用户、业务流程与数据，同时保持对不同行业和运营环境的适应性与扩展能力。",
      cards: [
        {
          title: "工程驱动",
          text: "软件架构与产品开发是我们工作的核心。",
        },
        {
          title: "为连接而设计",
          text: "产品从一开始就被设计为可交换数据，并作为更大生态系统的一部分协同运行。",
        },
        {
          title: "面向智能化",
          text: "我们将数据、知识与 AI 视为共享核心能力，而不是彼此孤立的功能。",
        },
      ],
    },
    atlas: {
      badge: "N Plus 核心平台",
      label: "Atlas",
      title: "连接多个产品的统一智能与集成层。",
      description:
        "Atlas 是 N Plus 正在开发的中央平台架构，用于在不断扩展的软件生态中连接产品、集成、数据、AI、知识、访问控制与产品健康状态。",
      systemLabel: "ATLAS / N+",
      platformLabel: "智能与集成平台",
    },
    core: {
      label: "核心技术",
      title: "支撑每一个 N Plus 解决方案的技术能力。",
      description:
        "我们将应用工程、平台架构、系统集成、自动化、数据与治理整合为统一的开发能力。",
    },
    business: {
      label: "业务领域",
      title: "将技术应用于真实行业。",
      description:
        "N Plus 将软件、数字平台、系统集成与技术驱动的开发能力应用于多个行业场景。",
    },
    projects: {
      label: "产品与项目",
      title: "软件产品与技术驱动的开发项目。",
      description:
        "我们的项目组合涵盖数字优先平台，以及从业务设计阶段就融入技术、数据与互联服务的实体开发项目。",
    },
    approach: {
      label: "开发方法",
      title: "从业务需求到互联解决方案。",
      description:
        "我们将产品需求、用户体验、软件架构、系统集成、数据与部署纳入同一套结构化开发流程。",
    },
    contact: {
      label: "联系我们",
      title: "共同构建您的下一个互联解决方案。",
      description:
        "告诉我们您的软件需求、平台构想、系统集成难题或行业机会。我们将从定义问题并设计合适的技术架构开始。",
      start: "开始沟通",
    },
    form: {
      name: "姓名",
      namePlaceholder: "请输入姓名",
      company: "公司",
      companyPlaceholder: "公司或机构名称",
      email: "电子邮箱",
      message: "请介绍您的项目",
      messagePlaceholder:
        "项目构想、目标、地区、时间计划或所需支持",
      prepared: "邮件已准备",
      send: "发送咨询",
      note:
        "点击按钮后，将打开您的默认邮件应用，并自动填入咨询内容。",
      subjectPrefix: "N Plus 官网咨询",
      prospectivePartner: "潜在客户",
      bodyName: "姓名",
      bodyCompany: "公司",
      bodyEmail: "邮箱",
      bodyProject: "项目 / 咨询内容",
    },
    footer: {
      tagline:
        "以软件、平台、集成与智能能力构建下一步。",
      backToTop: "返回顶部",
    },
    projectPage: {
      back: "返回项目列表",
      businessArea: "业务领域",
      overview: "项目概览",
      capabilities: "核心能力",
      nextProject: "下一个项目",
    },
    network: {
      aiDetail: "智能",
      dataDetail: "共享上下文",
      apiDetail: "连接器",
      knowledgeDetail: "上下文",
      governed: "治理连接层",
      core: "N Plus Core",
    },
  },
} as const;

export function getSiteCopy(locale: Locale) {
  return siteCopy[locale];
}
