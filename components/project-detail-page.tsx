import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { ProjectMediaSlider } from "@/components/project-media-slider";
import { getRelatedProjectSlugs, getRelatedProjectsLabel } from "@/lib/project-relations";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { getProjects } from "@/lib/site-data";
import {
  getSiteCopy,
  htmlLang,
  localizedHomeHref,
  localizedProjectHref,
  type Locale,
} from "@/lib/i18n";

export function ProjectDetailPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const copy = getSiteCopy(locale);
  const projects = getProjects(locale);
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const relatedProjects = getRelatedProjectSlugs(project.slug)
    .map((relatedSlug) =>
      projects.find((item) => item.slug === relatedSlug),
    )
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedProjectsLabel = getRelatedProjectsLabel(locale);

  const projectTitleTypography =
    locale === "en"
      ? "leading-[0.94] tracking-[-0.055em]"
      : locale === "ko"
        ? "leading-[1.2] tracking-[0em] break-keep"
        : "leading-[1.06] tracking-[-0.015em] break-keep";

  const sectionTitleTypography =
    locale === "en"
      ? "tracking-[-0.045em]"
      : locale === "ko"
        ? "tracking-[0em] leading-[1.35] break-keep"
        : "tracking-[-0.012em] leading-[1.2] break-keep";

  return (
    <main
      id="top"
      lang={htmlLang(locale)}
      className="min-h-screen overflow-hidden bg-[#07080b]"
    >
      <SiteHeader locale={locale} />

      <section className="border-b border-white/8 pt-32 sm:pt-40">
        <div className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
          <Reveal>
            <Link
              href={localizedHomeHref(locale, "#projects")}
              className="inline-flex items-center gap-2 text-sm text-white/42 transition hover:text-white"
            >
              <ArrowLeft size={16} /> {copy.projectPage.back}
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20">
            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                  {project.eyebrow}
                </p>
                <h1 className={`text-balance mt-4 text-5xl font-semibold text-white sm:text-7xl lg:text-8xl ${projectTitleTypography}`}>
                  {project.title}
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/52">
                  {project.summary}
                </p>

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90"
                  >
                    {copy.projectPage.visitWebsite}
                    <ExternalLink size={16} />
                  </a>
                )}
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              {project.images?.length ? (
                <ProjectMediaSlider
                  slug={project.slug}
                  title={project.title}
                  locale={locale}
                  large
                />
              ) : (
                <ProjectVisual project={project} large />
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/28">
                {copy.projectPage.businessArea}
              </p>
              <p className="mt-3 text-lg font-medium leading-7 text-white">
                {project.businessArea}
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className={`text-3xl font-semibold text-white sm:text-5xl ${sectionTitleTypography}`}>
                {copy.projectPage.overview}
              </h2>
              <p className="mt-7 text-lg leading-8 text-white/54">
                {project.description}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                  {copy.projectPage.capabilities}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/15 p-4 text-sm leading-6 text-white/62"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-violet-300"
                      />
                      {capability}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <h2 className={`text-2xl font-semibold text-white sm:text-3xl ${sectionTitleTypography}`}>
              {relatedProjectsLabel}
            </h2>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={localizedProjectHref(locale, relatedProject.slug)}
                  aria-label={`${relatedProject.title}: ${relatedProject.eyebrow}`}
                  className="group/related flex h-full flex-col rounded-[1.5rem] border border-white/9 bg-white/[0.03] p-5 transition hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.055] sm:p-6"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300/80">
                    {relatedProject.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {relatedProject.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/42">
                    {relatedProject.summary}
                  </p>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-xs font-semibold text-white/58 transition group-hover/related:text-white">
                    {relatedProject.title}
                    <ArrowRight
                      size={14}
                      className="transition group-hover/related:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <Link
              href={localizedProjectHref(locale, nextProject.slug)}
              className="group block rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition hover:border-white/20 hover:bg-white/[0.055] sm:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                {copy.projectPage.nextProject}
              </p>
              <div className="mt-5 flex items-end justify-between gap-6">
                <div>
                  <p className={`text-3xl font-semibold text-white sm:text-5xl ${sectionTitleTypography}`}>
                    {nextProject.title}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/42">
                    {nextProject.summary}
                  </p>
                </div>
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-black transition group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
