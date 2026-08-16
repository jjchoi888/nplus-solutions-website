import type { MetadataRoute } from "next";
import { languageAlternates, localizedUrl } from "@/lib/seo";
import { projects } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "ko", "zh"] as const;

  const homeEntries = locales.map((locale) => ({
    url: localizedUrl(locale),
    alternates: {
      languages: languageAlternates(),
    },
  }));

  const projectEntries = locales.flatMap((locale) =>
    projects.map((project) => {
      const path = `/projects/${project.slug}`;

      return {
        url: localizedUrl(locale, path),
        alternates: {
          languages: languageAlternates(path),
        },
      };
    }),
  );

  return [...homeEntries, ...projectEntries];
}
