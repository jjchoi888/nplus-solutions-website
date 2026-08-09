import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: { absolute: "N Plus Solutions Inc. | 软件·平台·智能" },
  description:
    "N Plus Solutions Inc. 设计并开发互联软件、数字平台、AI 驱动系统及行业专属技术解决方案。",
  alternates: {
    canonical: "/zh",
    languages: {
      en: "/",
      ko: "/ko",
      "zh-CN": "/zh",
    },
  },
};

export default function Page() {
  return <HomePage locale="zh" />;
}
