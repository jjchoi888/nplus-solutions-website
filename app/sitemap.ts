import type { MetadataRoute } from "next";
import { projects } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://nplus-solutions.example";

  const locales = [
    { prefix: "", priority: 1 },
    { prefix: "/ko", priority: 0.95 },
    { prefix: "/zh", priority: 0.95 },
  ] as const;

  return locales.flatMap(({ prefix, priority }) => [
    {
      url: `${baseUrl}${prefix}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}${prefix}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]);
}
