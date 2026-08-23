import type { Locale } from "@/lib/i18n";

const projectMediaLabels: Record<
  Locale,
  Record<string, string[]>
> = {
  en: {
    pawcircle: [
      "pet community platform interface",
      "pet services and community interface",
    ],
    paynplus: [
      "merchant payment platform overview",
      "payment acceptance interface",
      "industry payment solutions",
      "merchant management interface",
      "partner platform interface",
      "QR payment interface",
      "payment platform benefits",
      "administration dashboard",
    ],
    tableorder: [
      "restaurant ordering platform home",
      "guest ordering entrance",
      "digital restaurant menu",
      "order cart interface",
      "payment method selection",
      "table payment process",
      "staff call interface",
      "restaurant operations dashboard",
      "finance management interface",
      "HR and workforce management interface",
    ],
    hotelnplus: [
      "hotel PMS platform home",
      "hotel management dashboard",
      "front desk operations interface",
      "hotel check-in interface",
      "room and inventory management",
      "hotel event management",
      "hotel finance management",
      "digital guest service interface",
    ],
  },
  ko: {
    pawcircle: [
      "반려동물 커뮤니티 플랫폼 화면",
      "반려동물 서비스 및 커뮤니티 화면",
    ],
    paynplus: [
      "가맹점 결제 플랫폼 개요",
      "결제 수납 화면",
      "산업별 결제 솔루션",
      "가맹점 관리 화면",
      "파트너 플랫폼 화면",
      "QR 결제 화면",
      "결제 플랫폼 주요 기능",
      "관리자 대시보드",
    ],
    tableorder: [
      "레스토랑 주문 플랫폼 홈",
      "고객 주문 시작 화면",
      "디지털 레스토랑 메뉴",
      "주문 장바구니 화면",
      "결제수단 선택 화면",
      "테이블 결제 프로세스",
      "직원 호출 화면",
      "레스토랑 운영 관리 화면",
      "재무 관리 화면",
      "인사 및 노무 관리 화면",
    ],
    hotelnplus: [
      "호텔 PMS 플랫폼 홈",
      "호텔 운영 대시보드",
      "프런트 데스크 운영 화면",
      "호텔 체크인 화면",
      "객실 및 인벤토리 관리",
      "호텔 이벤트 관리",
      "호텔 재무 관리",
      "디지털 고객 서비스 화면",
    ],
  },
  zh: {
    pawcircle: [
      "宠物社区平台界面",
      "宠物服务与社区界面",
    ],
    paynplus: [
      "商户支付平台概览",
      "支付受理界面",
      "行业支付解决方案",
      "商户管理界面",
      "合作伙伴平台界面",
      "二维码支付界面",
      "支付平台主要功能",
      "管理后台仪表板",
    ],
    tableorder: [
      "餐厅点餐平台首页",
      "顾客点餐入口",
      "数字餐厅菜单",
      "订单购物车界面",
      "支付方式选择",
      "桌边支付流程",
      "呼叫员工界面",
      "餐厅运营管理界面",
      "财务管理界面",
      "人力资源与员工管理界面",
    ],
    hotelnplus: [
      "酒店 PMS 平台首页",
      "酒店运营仪表板",
      "前台运营界面",
      "酒店入住界面",
      "客房与库存管理",
      "酒店活动管理",
      "酒店财务管理",
      "数字宾客服务界面",
    ],
  },
};

export function getProjectMediaAlt(
  locale: Locale,
  slug: string,
  title: string,
  index: number,
) {
  const label = projectMediaLabels[locale][slug]?.[index];

  if (label) {
    return `${title} — ${label}`;
  }

  return `${title} — project interface image ${index + 1}`;
}
