import type { Locale } from "@/lib/i18n";

type ProjectSeoEntry = {
  title: string;
  description: string;
};

const projectSeo: Record<
  Locale,
  Record<string, ProjectSeoEntry>
> = {
  en: {
    atlas: {
      title: "Atlas AI & Integration Platform",
      description:
        "Atlas is N Plus Solutions’ shared AI, data, API and integration architecture for connecting software products, knowledge, governance and product operations.",
    },
    pawcircle: {
      title: "PawCircle Pet Community Platform",
      description:
        "PawCircle is a mobile-first pet community and services platform connecting pet owners, local communities, verified businesses, care providers and trusted services.",
    },
    paynplus: {
      title: "Paynplus Merchant Payment Platform",
      description:
        "Paynplus is an integrated merchant payment technology platform for POS, online and QR payments, onboarding, transaction management, settlement visibility and reporting.",
    },
    tableorder: {
      title: "Table Order & Pay Restaurant Platform",
      description:
        "Table Order & Pay connects table ordering and payment with POS, menu, settlement, finance, accounting, HR and workforce operations for restaurants and F&B businesses.",
    },
    cms: {
      title: "CMS Junket Casino Management System",
      description:
        "CMS is a multilingual casino management system specialized for junket casino operations, supporting English, Chinese, Korean and Japanese.",
    },
    hotelnplus: {
      title: "Hotelnplus Hotel PMS & Hospitality Platform",
      description:
        "Hotelnplus is a hotel PMS and hospitality technology platform connecting reservations, guest services, property operations, management dashboards and reporting.",
    },
    "mountain-bike-tourism-complex": {
      title: "Mountain Bike Tourism Technology Project",
      description:
        "A technology-enabled mountain bike tourism development combining destination infrastructure with digital trail information, reservations, events and visitor services.",
    },
    "mountain-resort-complex": {
      title: "Mountain Resort Technology Development",
      description:
        "A technology-enabled mountain resort development integrating reservations, guest services, property systems, destination information and connected visitor experiences.",
    },
  },
  ko: {
    atlas: {
      title: "Atlas AI·데이터·통합 플랫폼",
      description:
        "Atlas는 소프트웨어 제품, API, 데이터, AI, 지식, 접근 제어와 운영 정보를 연결하기 위해 N Plus Solutions가 개발하는 공통 인텔리전스·통합 플랫폼입니다.",
    },
    pawcircle: {
      title: "PawCircle 반려동물 커뮤니티 플랫폼",
      description:
        "PawCircle은 반려인, 지역 커뮤니티, 검증된 반려동물 사업자, 돌봄 제공자와 신뢰 기반 서비스를 연결하는 모바일 중심 반려동물 플랫폼입니다.",
    },
    paynplus: {
      title: "Paynplus 가맹점 결제 플랫폼",
      description:
        "Paynplus는 POS, 온라인, QR 결제와 가맹점 온보딩, 거래 관리, 정산 현황, 리포팅을 연결하는 통합 가맹점 결제 기술 플랫폼입니다.",
    },
    tableorder: {
      title: "Table Order & Pay 테이블 주문·결제 플랫폼",
      description:
        "Table Order & Pay는 레스토랑과 F&B 사업자를 위해 테이블 주문·결제와 POS, 메뉴, 정산, 재무·회계, 인사·노무 운영을 연결하는 통합 플랫폼입니다.",
    },
    cms: {
      title: "CMS 정켓 카지노 운영 관리 시스템",
      description:
        "CMS는 정켓 카지노 운영에 특화된 다국어 카지노 매니지먼트 시스템으로 영어, 중국어, 한국어, 일본어를 지원합니다.",
    },
    hotelnplus: {
      title: "Hotelnplus 호텔 PMS·호스피탈리티 플랫폼",
      description:
        "Hotelnplus는 호텔 예약, 체크인, 고객 서비스, 객실·자산 운영, 관리 대시보드와 리포팅을 연결하는 호텔 PMS 및 호스피탈리티 기술 플랫폼입니다.",
    },
    "mountain-bike-tourism-complex": {
      title: "산악자전거 관광단지 디지털 기술 프로젝트",
      description:
        "산악자전거 관광 인프라에 디지털 트레일 정보, 예약, 이벤트, 방문객 서비스와 관광 운영 시스템을 결합하는 기술 기반 관광 개발 프로젝트입니다.",
    },
    "mountain-resort-complex": {
      title: "산악 리조트 기술 기반 개발 프로젝트",
      description:
        "산악 리조트 개발에 디지털 예약, 고객 서비스, 자산 운영 시스템, 관광지 정보와 연결형 방문객 경험을 결합하는 기술 기반 개발 프로젝트입니다.",
    },
  },
  zh: {
    atlas: {
      title: "Atlas AI、数据与集成平台",
      description:
        "Atlas 是 N Plus Solutions 开发的共享智能与集成平台，用于连接软件产品、API、数据、AI、知识、访问控制及产品运营。",
    },
    pawcircle: {
      title: "PawCircle 宠物社区与服务平台",
      description:
        "PawCircle 是移动优先的宠物社区与服务平台，连接宠物主人、本地社区、认证商家、照护服务提供者及可信服务。",
    },
    paynplus: {
      title: "Paynplus 商户支付平台",
      description:
        "Paynplus 是面向商户的综合支付技术平台，连接 POS、在线与二维码支付、商户入驻、交易管理、结算状态及运营报表。",
    },
    tableorder: {
      title: "Table Order & Pay 餐厅桌边点餐支付平台",
      description:
        "Table Order & Pay 面向餐厅及餐饮企业，将桌边点餐与支付连接至 POS、菜单、结算、财务会计、人力资源及员工运营管理。",
    },
    cms: {
      title: "CMS Junket 赌场运营管理系统",
      description:
        "CMS 是专为 Junket 赌场运营打造的多语言赌场管理系统，支持英语、中文、韩语和日语。",
    },
    hotelnplus: {
      title: "Hotelnplus 酒店 PMS 与酒店科技平台",
      description:
        "Hotelnplus 是酒店 PMS 与酒店科技平台，连接预订、入住、宾客服务、物业运营、管理仪表板及经营报表。",
    },
    "mountain-bike-tourism-complex": {
      title: "山地自行车旅游综合体数字技术项目",
      description:
        "结合山地自行车旅游基础设施与数字步道信息、预订、活动、游客服务及目的地运营系统的技术驱动型旅游开发项目。",
    },
    "mountain-resort-complex": {
      title: "山地度假村数字技术开发项目",
      description:
        "将数字预订、宾客服务、物业运营系统、目的地信息及互联游客体验融入山地度假村规划与开发的技术驱动型项目。",
    },
  },
};

export function getProjectSeo(
  locale: Locale,
  slug: string,
  fallback: ProjectSeoEntry,
): ProjectSeoEntry {
  return projectSeo[locale][slug] ?? fallback;
}
