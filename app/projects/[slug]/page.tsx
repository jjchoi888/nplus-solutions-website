import type { Metadata } from "next";
import { ProjectDetailPage } from "@/components/project-detail-page";
import { ProjectBreadcrumbStructuredData } from "@/components/seo-structured-data";
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
  const project = getProjects("en").find((item) => item.slug === slug);

  if (!project) return {};

  return createSeoMetadata({
    locale: "en",
    path: `/projects/${slug}`,
    title: project.title,
    description: project.summary,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjects("en").find((item) => item.slug === slug);

  return (
    <>
      {project ? (
        <ProjectBreadcrumbStructuredData
          locale="en"
          slug={slug}
          name={project.title}
        />
      ) : null}
      <ProjectDetailPage locale="en" slug={slug} />
    </>
  );
}
