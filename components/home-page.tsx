import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  CloudCog,
  Code2,
  CreditCard,
  Database,
  Hotel,
  Layers3,
  Lightbulb,
  Map,
  MoveRight,
  Network,
  PlugZap,
  Rocket,
  Shapes,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { AtlasNetwork } from "@/components/atlas-network";
import {
  getApproach,
  getAtlasCapabilities,
  getBusinessAreas,
  getCoreCapabilities,
  getProjects,
} from "@/lib/site-data";
import { getSiteCopy, htmlLang, type Locale } from "@/lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const approach = getApproach(locale);
  const atlasCapabilities = getAtlasCapabilities(locale);
  const businessAreas = getBusinessAreas(locale);
  const coreCapabilities = getCoreCapabilities(locale);
  const projects = getProjects(locale);

  const aboutIcons = [Code2, Network, BrainCircuit] as const;
  const atlasCapabilityIcons = [
    Network,
    PlugZap,
    Database,
    BrainCircuit,
    ShieldCheck,
    CloudCog,
  ] as const;
  const coreCapabilityIcons = [
    Code2,
    Smartphone,
    PlugZap,
    BrainCircuit,
    Workflow,
    ShieldCheck,
  ] as const;
  const businessAreaIcons = [
    Smartphone,
    CreditCard,
    Hotel,
    Building2,
    ChartNoAxesCombined,
  ] as const;
  const approachIcons = [Lightbulb, Map, Shapes, Layers3, Rocket] as const;

  const heroTitleTypography =
    locale === "en"
      ? "text-[clamp(3.6rem,9vw,9rem)] leading-[0.87] tracking-[-0.075em]"
      : locale === "ko"
        ? "text-[clamp(2.8rem,6.6vw,6.9rem)] leading-[1.18] tracking-[0em] break-keep"
        : "text-[clamp(3.3rem,8vw,8rem)] leading-[1.04] tracking-[-0.02em] break-keep";

  const displayTypography =
    locale === "en"
      ? "leading-[1.02] tracking-[-0.055em]"
      : locale === "ko"
        ? "leading-[1.2] tracking-[0em] break-keep"
        : "leading-[1.08] tracking-[-0.015em] break-keep";

  const atlasTitleTypography =
    locale === "en"
      ? "leading-[0.98] tracking-[-0.06em]"
      : locale === "ko"
        ? "leading-[1.22] tracking-[0em] break-keep"
        : "leading-[1.1] tracking-[-0.015em] break-keep";

  const contactTitleTypography =
    locale === "en"
      ? "leading-[0.98] tracking-[-0.065em]"
      : locale === "ko"
        ? "leading-[1.2] tracking-[0em] break-keep"
        : "leading-[1.08] tracking-[-0.015em] break-keep";

  const cardTitleTypography =
    locale === "en"
      ? "tracking-[-0.035em]"
      : locale === "ko"
        ? "tracking-[0em] leading-[1.45] break-keep"
        : "tracking-[-0.01em] leading-[1.3] break-keep";

  const bodyTypography =
    locale === "ko"
      ? "leading-[1.9] tracking-[0.005em] break-keep"
      : "";

  return (
    <main id="top" lang={htmlLang(locale)} className="overflow-hidden bg-[#07080b]">
      <SiteHeader locale={locale} />

      <section className="relative min-h-[760px] border-b border-white/8 pt-20 sm:min-h-[860px]">
        <div className="grid-fade absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-orb absolute -left-24 top-28 size-[420px] rounded-full bg-violet-600/18 blur-[110px]" />
          <div className="hero-orb absolute right-[8%] top-16 size-[380px] rounded-full bg-blue-500/15 blur-[120px]" />
          <div className="hero-orb absolute bottom-20 left-[45%] size-[340px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto flex min-h-[680px] max-w-[1440px] flex-col justify-center px-5 py-24 sm:px-8 lg:min-h-[780px] lg:px-12">
          <Reveal>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.19em] text-white/52 backdrop-blur-xl">
              <Sparkles size={13} className="text-violet-300" />
              {copy.hero.badge}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className={`text-balance mt-7 max-w-6xl font-semibold text-white ${heroTitleTypography}`}>
              {copy.hero.titleLine1}
              <span className="block bg-gradient-to-r from-white via-white to-white/32 bg-clip-text text-transparent">
                {copy.hero.titleLine2}
              </span>
            </h1>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Reveal delay={0.14}>
              <p className={`max-w-2xl text-base text-white/54 sm:text-lg ${locale === "ko" ? bodyTypography : "leading-7 sm:leading-8"}`}>
                {copy.hero.description}
              </p>
            </Reveal>

            <Reveal delay={0.2} className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="#atlas"
                className="inline-flex h-13 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                {copy.hero.exploreAtlas} <ArrowUpRight size={17} />
              </a>
              <a
                href="#projects"
                className="inline-flex h-13 items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:bg-white/[0.09]"
              >
                {copy.hero.projects} <ArrowDown size={17} />
              </a>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-4">
            {copy.hero.principles.map((item, index) => (
              <Reveal
                key={item}
                delay={0.22 + index * 0.04}
                className="bg-[#090a0e]/95 px-5 py-5 sm:px-6"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                  0{index + 1}
                </p>
                <p className="mt-2 text-sm font-medium text-white/64">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative border-b border-white/8 py-24 sm:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <Reveal>
              <div className="sticky top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                  {copy.about.label}
                </p>
                <p className="mt-4 max-w-xs text-sm leading-6 text-white/38">
                  {copy.about.side}
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <h2 className={`text-balance text-4xl font-semibold text-white sm:text-6xl lg:text-7xl ${displayTypography}`}>
                  {copy.about.title}
                </h2>
              </Reveal>

              <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2">
                <Reveal delay={0.08}>
                  <p className="text-lg leading-8 text-white/64">
                    {copy.about.leadPrefix}{" "}
                    <strong className="font-semibold text-white">{copy.about.leadStrong}</strong>
                    {" "}{copy.about.leadSuffix}
                  </p>
                </Reveal>

                <Reveal delay={0.14}>
                  <p className="text-sm leading-7 text-white/42">
                    {copy.about.body}
                  </p>
                </Reveal>
              </div>

              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                {copy.about.cards.map((item, index) => {
                  const AboutIcon = aboutIcons[index];

                  return (
                    <Reveal key={item.title} delay={0.1 + index * 0.06}>
                      <div className="h-full rounded-3xl border border-white/9 bg-white/[0.035] p-6">
                        <AboutIcon size={21} className="text-white/62" />
                        <h3 className="mt-7 text-base font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-white/38">
                          {item.text}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="atlas"
        className="relative border-b border-white/8 py-24 sm:py-32 lg:py-40"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-[160px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/15 bg-blue-400/[0.06] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200/75">
                <span className="size-1.5 rounded-full bg-blue-300" />
                {copy.atlas.badge}
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                {copy.atlas.label}
              </p>
              <h2 className={`mt-4 max-w-5xl text-4xl font-semibold text-white sm:text-6xl lg:text-7xl ${atlasTitleTypography}`}>
                {copy.atlas.title}
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-white/42 lg:justify-self-end">
              {copy.atlas.description}
            </p>
          </Reveal>

          <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[#090b11]">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
              <Reveal className="relative min-h-[420px] border-b border-white/8 p-8 lg:border-b-0 lg:border-r sm:p-10">
                <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/28">
                      {copy.atlas.systemLabel}
                    </p>
                    <h3 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
                      Atlas
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/42">
                      {copy.atlas.platformLabel}
                    </p>
                  </div>

                  <AtlasNetwork locale={locale} />
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2">
                {atlasCapabilities.map((item, index) => {
                  const AtlasCapabilityIcon = atlasCapabilityIcons[index];

                  return (
                  <Reveal
                    key={item.title}
                    delay={(index % 2) * 0.05}
                    className="border-b border-white/8 p-7 even:sm:border-l sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-blue-100/80">
                        <AtlasCapabilityIcon size={19} />
                      </span>
                      <span className="text-[9px] font-semibold tracking-[0.2em] text-white/20">
                        {item.number}
                      </span>
                    </div>
                    <h3 className={`mt-8 text-xl font-semibold text-white ${cardTitleTypography}`}>
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/38">
                      {item.description}
                    </p>
                  </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="core-technology"
        className="border-b border-white/8 py-24 sm:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                {copy.core.label}
              </p>
              <h2 className={`mt-4 max-w-4xl text-4xl font-semibold text-white sm:text-6xl ${displayTypography}`}>
                {copy.core.title}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/42">
              {copy.core.description}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreCapabilities.map((capability, index) => {
              const CoreCapabilityIcon = coreCapabilityIcons[index];

              return (
              <Reveal key={capability.title} delay={(index % 3) * 0.05}>
                <article className="group h-full rounded-3xl border border-white/9 bg-white/[0.03] p-7 transition hover:border-white/16 hover:bg-white/[0.055] sm:p-8">
                  <div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-violet-200 transition group-hover:bg-white group-hover:text-black">
                    <CoreCapabilityIcon size={21} />
                  </div>
                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/24">
                    {capability.number}
                  </p>
                  <h3 className={`mt-3 text-2xl font-semibold text-white ${cardTitleTypography}`}>
                    {capability.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/42">
                    {capability.description}
                  </p>
                </article>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="business-areas"
        className="border-b border-white/8 py-24 sm:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                {copy.business.label}
              </p>
              <h2 className={`mt-4 max-w-4xl text-4xl font-semibold text-white sm:text-6xl ${displayTypography}`}>
                {copy.business.title}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/42">
              {copy.business.description}
            </p>
          </Reveal>

          <div className="mt-16 border-t border-white/10">
            {businessAreas.map((area, index) => {
              const BusinessAreaIcon = businessAreaIcons[index];

              return (
              <Reveal key={area.title} delay={index * 0.03}>
                <article className="group grid gap-5 border-b border-white/10 py-7 transition hover:bg-white/[0.02] sm:grid-cols-[80px_1fr_auto] sm:items-center sm:py-9">
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/24">
                    {area.number}
                  </p>
                  <div className="grid gap-3 lg:grid-cols-[1fr_0.75fr] lg:items-center">
                    <h3 className={`max-w-2xl text-2xl font-semibold text-white sm:text-3xl ${cardTitleTypography}`}>
                      {area.title}
                    </h3>
                    <p className="max-w-xl text-sm leading-6 text-white/38">
                      {area.description}
                    </p>
                  </div>
                  <span className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/52 transition group-hover:border-white/20 group-hover:bg-white group-hover:text-black">
                    <BusinessAreaIcon size={20} />
                  </span>
                </article>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative border-b border-white/8 py-24 sm:py-32 lg:py-40"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/3 size-[600px] -translate-x-1/2 rounded-full bg-violet-600/8 blur-[150px]" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                {copy.projects.label}
              </p>
              <h2 className={`mt-4 max-w-4xl text-4xl font-semibold text-white sm:text-6xl ${displayTypography}`}>
                {copy.projects.title}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/42">
              {copy.projects.description}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 0.06}>
                <ProjectCard project={project} locale={locale} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="border-b border-white/8 py-24 sm:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                  {copy.approach.label}
                </p>
                <h2 className={`mt-4 text-4xl font-semibold text-white sm:text-6xl ${displayTypography}`}>
                  {copy.approach.title}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-white/42">
                  {copy.approach.description}
                </p>
              </div>
            </Reveal>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {approach.map((item, index) => {
                const ApproachIcon = approachIcons[index];

                return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="group grid grid-cols-[48px_1fr] gap-5 py-8 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:py-10">
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/24">
                      {item.number}
                    </p>
                    <div>
                      <h3 className={`text-2xl font-semibold text-white sm:text-3xl ${cardTitleTypography}`}>
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-6 text-white/38">
                        {item.description}
                      </p>
                    </div>
                    <ApproachIcon
                      className="hidden text-white/26 transition group-hover:text-white sm:block"
                      size={24}
                    />
                  </div>
                </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24 sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(circle_at_50%_100%,rgba(124,58,237,.15),transparent_52%)]" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.78fr] lg:items-start lg:gap-20">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                {copy.contact.label}
              </p>
              <h2 className={`text-balance mt-4 max-w-4xl text-5xl font-semibold text-white sm:text-7xl lg:text-8xl ${contactTitleTypography}`}>
                {copy.contact.title}
              </h2>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/48">
                {copy.contact.description}
              </p>
              <div className="mt-12 inline-flex items-center gap-4 border-t border-white/10 pt-7 text-sm text-white/52">
                {copy.contact.start} <MoveRight size={18} />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm locale={locale} />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
