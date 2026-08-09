import type { Metadata } from "next";
import { ProjectDetailPage } from "@/components/project-detail-page";
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

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/ko/projects/${slug}`,
      languages: {
        en: `/projects/${slug}`,
        ko: `/ko/projects/${slug}`,
        "zh-CN": `/zh/projects/${slug}`,
      },
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  return <ProjectDetailPage locale="ko" slug={slug} />;
}
