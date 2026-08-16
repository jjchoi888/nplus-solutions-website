import type { Metadata } from "next";
import { ProjectDetailPage } from "@/components/project-detail-page";
import { ProjectBreadcrumbStructuredData } from "@/components/seo-structured-data";
import { getProjectSeo } from "@/lib/project-seo";
import { createSeoMetadata } from "@/lib/seo";
import { getProjects, projects } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjects("ko").find((item) => item.slug === slug);

  if (!project) return {};

  const seo = getProjectSeo("ko", slug, {
    title: project.title,
    description: project.summary,
  });

  return createSeoMetadata({
    locale: "ko",
    path: `/projects/${slug}`,
    title: seo.title,
    description: seo.description,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjects("ko").find((item) => item.slug === slug);

  return (
    <>
      {project ? (
        <ProjectBreadcrumbStructuredData
          locale="ko"
          slug={slug}
          name={project.title}
        />
      ) : null}
      <ProjectDetailPage locale="ko" slug={slug} />
    </>
  );
}
