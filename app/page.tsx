import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  MoveRight,
  Network,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { AtlasNetwork } from "@/components/atlas-network";
import {
  approach,
  atlasCapabilities,
  businessAreas,
  coreCapabilities,
  projects,
} from "@/lib/site-data";

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-[#07080b]">
      <SiteHeader />

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
              Software. Platforms. Intelligence.
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-balance mt-7 max-w-6xl text-[clamp(3.6rem,9vw,9rem)] font-semibold leading-[0.87] tracking-[-0.075em] text-white">
              Building what
              <span className="block bg-gradient-to-r from-white via-white to-white/32 bg-clip-text text-transparent">
                comes next.
              </span>
            </h1>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Reveal delay={0.14}>
              <p className="max-w-2xl text-base leading-7 text-white/54 sm:text-lg sm:leading-8">
                N Plus Solutions Inc. designs and develops connected software,
                digital platforms, AI-enabled systems, and industry-specific
                technology solutions — turning independent applications and
                business processes into scalable digital ecosystems.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="#atlas"
                className="inline-flex h-13 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Explore Atlas <ArrowUpRight size={17} />
              </a>
              <a
                href="#projects"
                className="inline-flex h-13 items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:bg-white/[0.09]"
              >
                Products & projects <ArrowDown size={17} />
              </a>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-4">
            {["Build", "Connect", "Understand", "Scale"].map((item, index) => (
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
                  About N Plus
                </p>
                <p className="mt-4 max-w-xs text-sm leading-6 text-white/38">
                  Next is the direction. Plus is the technology and intelligence
                  we add.
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                  We build the software and connected systems behind real
                  businesses.
                </h2>
              </Reveal>

              <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2">
                <Reveal delay={0.08}>
                  <p className="text-lg leading-8 text-white/64">
                    N Plus stands for{" "}
                    <strong className="font-semibold text-white">Next Plus</strong>
                    {" "}— a commitment to move beyond standalone software by
                    combining engineering, product strategy, integration, data,
                    and practical industry knowledge.
                  </p>
                </Reveal>

                <Reveal delay={0.14}>
                  <p className="text-sm leading-7 text-white/42">
                    We develop custom software, web and mobile applications,
                    digital platforms, APIs, automation, and AI-enabled systems.
                    Our solutions are designed to connect products, users,
                    business processes, and data while remaining adaptable to
                    different industries and operating environments.
                  </p>
                </Reveal>
              </div>

              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: Code2,
                    title: "Engineering-led",
                    text: "Software architecture and product development form the core of our work.",
                  },
                  {
                    icon: Network,
                    title: "Connected by design",
                    text: "Products are designed to exchange data and work as part of a wider ecosystem.",
                  },
                  {
                    icon: BrainCircuit,
                    title: "Intelligence-ready",
                    text: "Data, knowledge, and AI are treated as shared capabilities rather than isolated features.",
                  },
                ].map((item, index) => (
                  <Reveal key={item.title} delay={0.1 + index * 0.06}>
                    <div className="h-full rounded-3xl border border-white/9 bg-white/[0.035] p-6">
                      <item.icon size={21} className="text-white/62" />
                      <h3 className="mt-7 text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/38">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
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
                N Plus Core Platform
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                Atlas
              </p>
              <h2 className="mt-4 max-w-5xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                One intelligence and integration layer for many products.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-white/42 lg:justify-self-end">
              Atlas is the central platform architecture N Plus is developing to
              connect products, integrations, data, AI, knowledge, access
              control, and product health across a growing software ecosystem.
            </p>
          </Reveal>

          <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[#090b11]">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
              <Reveal className="relative min-h-[420px] border-b border-white/8 p-8 lg:border-b-0 lg:border-r sm:p-10">
                <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/28">
                      ATLAS / N+
                    </p>
                    <h3 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
                      Atlas
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/42">
                      Intelligence & Integration Platform
                    </p>
                  </div>

                  <AtlasNetwork />
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2">
                {atlasCapabilities.map((item, index) => (
                  <Reveal
                    key={item.title}
                    delay={(index % 2) * 0.05}
                    className="border-b border-white/8 p-7 even:sm:border-l sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-blue-100/80">
                        <item.icon size={19} />
                      </span>
                      <span className="text-[9px] font-semibold tracking-[0.2em] text-white/20">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="mt-8 text-xl font-semibold tracking-[-0.035em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/38">
                      {item.description}
                    </p>
                  </Reveal>
                ))}
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
                Core Technology
              </p>
              <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">
                The capabilities behind every N Plus solution.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/42">
              We combine application engineering, platform architecture,
              integration, automation, data, and governance into a unified
              development capability.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreCapabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={(index % 3) * 0.05}>
                <article className="group h-full rounded-3xl border border-white/9 bg-white/[0.03] p-7 transition hover:border-white/16 hover:bg-white/[0.055] sm:p-8">
                  <div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-violet-200 transition group-hover:bg-white group-hover:text-black">
                    <capability.icon size={21} />
                  </div>
                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/24">
                    {capability.number}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/42">
                    {capability.description}
                  </p>
                </article>
              </Reveal>
            ))}
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
                Business Areas
              </p>
              <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">
                Technology applied to real industries.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/42">
              Our business areas define where N Plus applies software, digital
              platforms, integrations, and technology-led development.
            </p>
          </Reveal>

          <div className="mt-16 border-t border-white/10">
            {businessAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.03}>
                <article className="group grid gap-5 border-b border-white/10 py-7 transition hover:bg-white/[0.02] sm:grid-cols-[80px_1fr_auto] sm:items-center sm:py-9">
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/24">
                    {area.number}
                  </p>
                  <div className="grid gap-3 lg:grid-cols-[1fr_0.75fr] lg:items-center">
                    <h3 className="max-w-2xl text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                      {area.title}
                    </h3>
                    <p className="max-w-xl text-sm leading-6 text-white/38">
                      {area.description}
                    </p>
                  </div>
                  <span className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/52 transition group-hover:border-white/20 group-hover:bg-white group-hover:text-black">
                    <area.icon size={20} />
                  </span>
                </article>
              </Reveal>
            ))}
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
                Products & Projects
              </p>
              <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">
                Software products and technology-enabled developments.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/42">
              Our portfolio ranges from digital-first platforms to physical
              developments where technology, data, and connected services are
              designed as part of the business from the beginning.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 0.06}>
                <ProjectCard project={project} />
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
                  Development Approach
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">
                  From business need to connected solution.
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-white/42">
                  We align product requirements, user experience, software
                  architecture, integration, data, and deployment in one
                  structured development process.
                </p>
              </div>
            </Reveal>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {approach.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="group grid grid-cols-[48px_1fr] gap-5 py-8 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:py-10">
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/24">
                      {item.number}
                    </p>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-6 text-white/38">
                        {item.description}
                      </p>
                    </div>
                    <item.icon
                      className="hidden text-white/26 transition group-hover:text-white sm:block"
                      size={24}
                    />
                  </div>
                </Reveal>
              ))}
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
                Contact
              </p>
              <h2 className="text-balance mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
                Let’s build your next connected solution.
              </h2>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/48">
                Share your software requirement, platform concept, integration
                challenge, or industry opportunity. We will start by defining
                the problem and the right technology architecture.
              </p>
              <div className="mt-12 inline-flex items-center gap-4 border-t border-white/10 pt-7 text-sm text-white/52">
                Start with a conversation <MoveRight size={18} />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
