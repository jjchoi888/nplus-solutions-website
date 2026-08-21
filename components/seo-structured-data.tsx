import { COMPANY_EMAIL, COMPANY_POSTAL_ADDRESS } from "@/lib/company-info";
import type { Locale } from "@/lib/i18n";
import {
  LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
  localizedUrl,
} from "@/lib/seo";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function HomeStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: LEGAL_NAME,
        alternateName: [SITE_NAME, "N Plus"],
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/brand/nplus-mark.svg`,
        email: COMPANY_EMAIL,
        address: {
          "@type": "PostalAddress",
          ...COMPANY_POSTAL_ADDRESS,
        },
        description:
          "N Plus Solutions develops software, digital platforms, AI-enabled systems, fintech, hospitality technology, and connected industry solutions.",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        alternateName: [LEGAL_NAME, "N Plus"],
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: ["en", "ko", "zh-CN"],
      },
    ],
  };

  return <JsonLd data={data} />;
}

export function ProjectBreadcrumbStructuredData({
  locale,
  slug,
  name,
}: {
  locale: Locale;
  slug: string;
  name: string;
}) {
  const homeNames: Record<Locale, string> = {
    en: "Home",
    ko: "홈",
    zh: "首页",
  };

  const currentUrl = localizedUrl(locale, `/projects/${slug}`);

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeNames[locale],
        item: localizedUrl(locale),
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: currentUrl,
      },
    ],
  };

  return <JsonLd data={data} />;
}
