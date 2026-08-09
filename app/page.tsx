import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: { absolute: "N Plus Solutions Inc. | Software, Platforms & Intelligence" },
  description:
    "N Plus Solutions Inc. designs and develops connected software, digital platforms, AI-enabled systems, and industry-specific technology solutions.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ko: "/ko",
      "zh-CN": "/zh",
    },
  },
};

export default function Page() {
  return <HomePage locale="en" />;
}
