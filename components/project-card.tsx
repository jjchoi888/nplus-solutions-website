import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";
import type { Project } from "@/lib/site-data";
import {
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
  return (
    <Link
      href={localizedProjectHref(locale, project.slug)}
      className={`group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <ProjectVisual project={project} />
      <div className="flex items-end justify-between gap-5 p-6 sm:p-7">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/42">
            {project.eyebrow}
          </p>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[1.75rem]">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/52">
            {project.summary}
          </p>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}
