import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: { absolute: "N Plus Solutions Inc. | 소프트웨어·플랫폼·인텔리전스" },
  description:
    "N Plus Solutions Inc.는 연결형 소프트웨어, 디지털 플랫폼, AI 기반 시스템과 산업별 기술 솔루션을 설계·개발합니다.",
  alternates: {
    canonical: "/ko",
    languages: {
      en: "/",
      ko: "/ko",
      "zh-CN": "/zh",
    },
  },
};

export default function Page() {
  return <HomePage locale="ko" />;
}
