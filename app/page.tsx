import { ArrowDown, ArrowUpRight, BadgeCheck, Compass, Globe2, MoveRight, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { approach, businessAreas, projects } from "@/lib/site-data";

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
              Next ideas. Plus solutions.
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-balance mt-7 max-w-6xl text-[clamp(3.6rem,9vw,9rem)] font-semibold leading-[0.87] tracking-[-0.075em] text-white">
              Building what
              <span className="block bg-gradient-to-r from-white via-white to-white/32 bg-clip-text text-transparent">comes next.</span>
            </h1>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Reveal delay={0.14}>
              <p className="max-w-xl text-base leading-7 text-white/54 sm:text-lg sm:leading-8">
                N Plus Solutions Inc. turns ambitious ideas into structured, practical, and scalable projects across technology, finance, hospitality, property, and business.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="flex flex-wrap gap-3 lg:justify-end">
              <a href="#projects" className="inline-flex h-13 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:scale-[1.02]">
                Explore projects <ArrowUpRight size={17} />
              </a>
              <a href="#about" className="inline-flex h-13 items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:bg-white/[0.09]">
                About N Plus <ArrowDown size={17} />
              </a>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-4">
            {["Strategy", "Technology", "Development", "Execution"].map((item, index) => (
              <Reveal key={item} delay={0.22 + index * 0.04} className="bg-[#090a0e]/95 px-5 py-5 sm:px-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">0{index + 1}</p>
                <p className="mt-2 text-sm font-medium text-white/64">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative border-b border-white/8 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <Reveal>
              <div className="sticky top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">About N Plus</p>
                <p className="mt-4 max-w-xs text-sm leading-6 text-white/38">Next is the direction. Plus is the value we add.</p>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                  We connect vision with the systems, people, and execution needed to make it real.
                </h2>
              </Reveal>
              <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2">
                <Reveal delay={0.08}>
                  <p className="text-lg leading-8 text-white/64">
                    N Plus stands for <strong className="font-semibold text-white">Next Plus</strong> — a commitment to look beyond the conventional and add the right combination of strategy, technology, design, and practical action.
                  </p>
                </Reveal>
                <Reveal delay={0.14}>
                  <p className="text-sm leading-7 text-white/42">
                    Our work spans digital platforms, payment services, tourism, hospitality, property development, construction coordination, and business planning. Each project is different, but the objective is consistent: create a clear path from concept to operation.
                  </p>
                </Reveal>
              </div>
              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Compass, title: "Opportunity-led", text: "We begin with the real opportunity, not a fixed template." },
                  { icon: BadgeCheck, title: "Execution-minded", text: "Plans are structured around what can actually be delivered." },
                  { icon: Globe2, title: "Cross-sector", text: "Ideas move across technology, place, service, and business." },
                ].map((item, index) => (
                  <Reveal key={item.title} delay={0.1 + index * 0.06}>
                    <div className="h-full rounded-3xl border border-white/9 bg-white/[0.035] p-6">
                      <item.icon size={21} className="text-white/62" />
                      <h3 className="mt-7 text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/38">{item.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="business-areas" className="border-b border-white/8 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">Business Areas</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">One company. Five connected capabilities.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/42">Our business areas work independently or together, depending on what each project needs to move forward.</p>
          </Reveal>

          <div className="mt-16 border-t border-white/10">
            {businessAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.03}>
                <article className="group grid gap-5 border-b border-white/10 py-7 transition hover:bg-white/[0.02] sm:grid-cols-[80px_1fr_auto] sm:items-center sm:py-9">
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/24">{area.number}</p>
                  <div className="grid gap-3 lg:grid-cols-[1fr_0.75fr] lg:items-center">
                    <h3 className="max-w-2xl text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">{area.title}</h3>
                    <p className="max-w-xl text-sm leading-6 text-white/38">{area.description}</p>
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

      <section id="projects" className="relative border-b border-white/8 py-24 sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute left-1/2 top-1/3 size-[600px] -translate-x-1/2 rounded-full bg-violet-600/8 blur-[150px]" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">Selected Projects</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">Ideas taking shape across digital and physical worlds.</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/42">Each project is developed around its own users, context, business model, and path to execution.</p>
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

      <section id="approach" className="border-b border-white/8 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">Our Approach</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">From possibility to performance.</h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-white/42">A clear development sequence keeps complex projects aligned while allowing the right flexibility at every stage.</p>
              </div>
            </Reveal>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {approach.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="group grid grid-cols-[48px_1fr] gap-5 py-8 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:py-10">
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/24">{item.number}</p>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">{item.title}</h3>
                      <p className="mt-2 max-w-lg text-sm leading-6 text-white/38">{item.description}</p>
                    </div>
                    <item.icon className="hidden text-white/26 transition group-hover:text-white sm:block" size={24} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">Contact</p>
              <h2 className="text-balance mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">Let’s build what comes next.</h2>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/48">Share the idea, challenge, or opportunity. We will begin by understanding what the project needs and where N Plus can add the most value.</p>
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
