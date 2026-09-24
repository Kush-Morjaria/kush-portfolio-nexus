import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";
import { education, experience, profile, projects, skills, weekends } from "@/data/profile";

// `code` is the section's station number on the transit line; sections between stations have none.
const SectionHeading = ({ code, eyebrow, title }: { code?: string; eyebrow: string; title: string }) => (
  <Reveal className="mb-12 space-y-4">
    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
      {code ? `${code} — ` : ""}
      {eyebrow}
    </p>
    <h2 className="text-4xl leading-[1.05] sm:text-5xl">{title}</h2>
  </Reveal>
);

export default function Home() {
  return (
    <>
      <Hero />

      {/* Projects */}
      <section id="projects" className="container py-24 sm:py-32">
        <SectionHeading code="02" eyebrow="Projects" title="Things I’ve built" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 140} className="flex">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal variant="fade">
          <p className="mt-8 text-sm text-muted-foreground">
            Source code for these projects is private. Happy to walk through any of them in a conversation.
          </p>
        </Reveal>
      </section>

      {/* Experience */}
      <section id="experience" className="container py-24 sm:py-32">
        <SectionHeading code="03" eyebrow="Now" title="Experience" />
        <ol className="relative space-y-12 border-l border-border pl-6 sm:pl-8">
          {experience.map((role, i) => (
            <li key={`${role.org}-${role.period}`} className="relative">
              <span
                className={
                  role.current
                    ? "absolute -left-[30px] top-2 h-2.5 w-2.5 rounded-full bg-foreground ring-4 ring-background sm:-left-[38px]"
                    : "absolute -left-[30px] top-2 h-2.5 w-2.5 rounded-full border border-muted-foreground bg-background sm:-left-[38px]"
                }
              />
              <Reveal delay={i * 60}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold">
                    {role.title} <span className="font-normal text-muted-foreground">· {role.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{role.period}</span>
                </div>
                {role.points.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-muted-foreground">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-relaxed">
                        <span className="mt-[11px] h-px w-3 shrink-0 bg-muted-foreground/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-14">
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <div className="flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold">{education.degree}</h3>
                <span className="font-mono text-xs text-muted-foreground">{education.period}</span>
              </div>
              <p className="text-muted-foreground">{education.school}</p>
              {education.notes.map((note) => (
                <p key={note} className="mt-1 text-sm text-muted-foreground">
                  {note}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Skills */}
      <section id="skills" className="container py-24 sm:py-32">
        <SectionHeading eyebrow="Toolbox" title="Skills" />
        <dl className="grid gap-10 sm:grid-cols-2">
          {skills.map(({ group, items }, i) => (
            <Reveal key={group} delay={(i % 2) * 120}>
              <dt className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{group}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span key={item} className="rounded-md border border-border px-2.5 py-1 text-sm">
                    {item}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* About */}
      <section id="about" className="container py-24 sm:py-32">
        <SectionHeading eyebrow="Background" title="About me" />
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          {profile.about.map((paragraph, i) => (
            <Reveal key={paragraph} delay={i * 120}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Weekends */}
      <section id="weekends" className="container py-24 sm:py-32">
        <SectionHeading code="04" eyebrow="Weekends" title={`${weekends.role}, ${weekends.org}`} />
        <Reveal className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
          {weekends.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="pt-2 font-mono text-[11px] uppercase tracking-[0.16em]">{weekends.note}</p>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-24 sm:py-32">
        <Reveal variant="scale">
          <div className="rounded-2xl border border-border bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">05 — Contact</p>
            <h2 className="mt-4 text-4xl leading-[1.05] sm:text-6xl">
              Curious how it works? <span className="italic text-muted-foreground">Let’s talk.</span>
            </h2>
            <Reveal delay={500} variant="fade">
              <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
                Open to internships, co-op, and new-grad roles in AI, automation, and software engineering. Email is the
                fastest way to reach me.
              </p>
              <Button asChild size="lg" variant="accent" className="group mt-10">
                <a href={`mailto:${profile.email}`}>
                  {profile.email}
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Button>
              <p className="mt-8 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> {profile.location}
              </p>
            </Reveal>
          </div>
        </Reveal>
      </section>
    </>
  );
}
