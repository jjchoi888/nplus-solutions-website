import type { Locale } from "@/lib/i18n";

const relatedProjectSlugs: Record<string, string[]> = {
  atlas: ["cms", "paynplus", "hotelnplus"],
  hotelnplus: ["cms", "atlas", "paynplus"],
  paynplus: ["cms", "tableorder", "atlas"],
  tableorder: ["paynplus", "cms", "atlas"],
  cms: ["atlas", "paynplus", "hotelnplus"],
  pawcircle: ["atlas", "paynplus", "hotelnplus"],
  "mountain-bike-tourism-complex": [
    "mountain-resort-complex",
    "hotelnplus",
    "atlas",
  ],
  "mountain-resort-complex": [
    "hotelnplus",
    "mountain-bike-tourism-complex",
    "atlas",
  ],
};

const relatedProjectsLabels: Record<Locale, string> = {
  en: "Related Products & Projects",
  ko: "관련 제품 및 프로젝트",
  zh: "相关产品与项目",
};

export function getRelatedProjectSlugs(slug: string) {
  return relatedProjectSlugs[slug] ?? [];
}

export function getRelatedProjectsLabel(locale: Locale) {
  return relatedProjectsLabels[locale];
}
