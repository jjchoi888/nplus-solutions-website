import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://www.nplusplatforms.com";
export const SITE_NAME = "N Plus Solutions";
export const LEGAL_NAME = "N Plus Solutions Inc.";

export const DEFAULT_DESCRIPTION =
  "N Plus Solutions develops software, digital platforms, AI-enabled systems, fintech, hospitality technology, and connected industry solutions.";

const localeConfig = {
  en: {
    prefix: "",
    ogLocale: "en_US",
    alternateOgLocales: ["ko_KR", "zh_CN"],
  },
  ko: {
    prefix: "/ko",
    ogLocale: "ko_KR",
    alternateOgLocales: ["en_US", "zh_CN"],
  },
  zh: {
    prefix: "/zh",
    ogLocale: "zh_CN",
    alternateOgLocales: ["en_US", "ko_KR"],
  },
} as const;

export function localizedUrl(locale: Locale, path = "") {
  return `${SITE_URL}${localeConfig[locale].prefix}${path}`;
}

export function languageAlternates(path = "") {
  return {
    en: `${SITE_URL}${path}`,
    ko: `${SITE_URL}/ko${path}`,
    "zh-CN": `${SITE_URL}/zh${path}`,
    "x-default": `${SITE_URL}${path}`,
  };
}

export function createSeoMetadata({
  locale,
  path = "",
  title,
  description,
  absoluteTitle = false,
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
}): Metadata {
  const canonical = localizedUrl(locale, path);
  const socialTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: localeConfig[locale].ogLocale,
      alternateLocale: [...localeConfig[locale].alternateOgLocales],
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}
