import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ProjectMediaSlider } from "@/components/project-media-slider";
import { ProjectVisual } from "@/components/project-visual";
import type { Project } from "@/lib/site-data";
import {
  getSiteCopy,
  localizedProjectHref,
  type Locale,
} from "@/lib/i18n";

export function ProjectCard({
  project,
  locale,
  featured = false,
}: {
  project: Project;
  locale: Locale;
  featured?: boolean;
}) {
  const copy = getSiteCopy(locale).projectPage;
  const hasImages = Boolean(project.images?.length);

  return (
    <article
      className={`group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {hasImages ? (
        <ProjectMediaSlider
          slug={project.slug}
          title={project.title}
          locale={locale}
        />
      ) : (
        <Link
          href={localizedProjectHref(locale, project.slug)}
          className="block"
          aria-label={project.title}
        >
          <ProjectVisual project={project} />
        </Link>
      )}

      <div className="p-6 sm:p-7">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/42">
          {project.eyebrow}
        </p>

        <Link
          href={localizedProjectHref(locale, project.slug)}
          className="group/title flex items-start justify-between gap-5"
        >
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-[1.75rem]">
              {project.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/52">
              {project.summary}
            </p>
          </div>

          <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white transition duration-300 group-hover/title:rotate-45 group-hover/title:bg-white group-hover/title:text-black">
            <ArrowUpRight size={18} />
          </span>
        </Link>

        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold text-white/58 transition hover:border-white/20 hover:bg-white hover:text-black"
          >
            {copy.visitWebsite} <ExternalLink size={13} />
          </a>
        )}
      </div>
    </article>
  );
}
