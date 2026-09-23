import { ArrowRight, GraduationCap, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import { education, experience, profile, projects, skills } from "@/data/profile";
import headshot from "@/assets/headshot.jpg";

const SectionHeading = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="mb-8 space-y-2">
    <p className="font-mono text-xs uppercase tracking-widest text-secondary">{eyebrow}</p>
    <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
  </div>
);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1fr_auto]">
        <div className="max-w-2xl space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {experience[0].title} at {experience[0].org}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] sm:text-6xl">
            {profile.name}
            <span className="mt-3 block text-2xl font-medium text-muted-foreground sm:text-3xl">
              {profile.tagline}
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">{profile.intro}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link to={{ hash: "#projects" }}>
                See my projects <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${profile.email}`}>
                <Mail /> Get in touch
              </a>
            </Button>
          </div>
          <SocialLinks className="-ml-2" />
        </div>
        <div className="mx-auto md:mx-0">
          <img
            src={headshot}
            alt={`Portrait of ${profile.name}`}
            className="aspect-[4/5] w-60 rounded-2xl object-cover object-top shadow-elevated sm:w-72"
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container py-16">
        <SectionHeading eyebrow="Selected work" title="Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Source code for these projects is private. Happy to walk through any of them in a conversation.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="container py-16">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />
        <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-8">
          {experience.map((role) => (
            <li key={`${role.org}-${role.period}`} className="relative">
              <span
                className={
                  role.current
                    ? "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-secondary ring-4 ring-background sm:-left-[39px]"
                    : "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-border bg-background sm:-left-[39px]"
                }
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {role.title} <span className="font-normal text-muted-foreground">· {role.org}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{role.period}</span>
              </div>
              <ul className="mt-3 space-y-1.5 text-muted-foreground">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-2 leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
          <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
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
      </section>

      {/* Skills */}
      <section id="skills" className="container py-16">
        <SectionHeading eyebrow="Toolbox" title="Skills" />
        <dl className="grid gap-6 sm:grid-cols-2">
          {skills.map(({ group, items }) => (
            <div key={group}>
              <dt className="mb-2 text-sm font-semibold">{group}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span key={item} className="rounded-md border border-border bg-card px-2.5 py-1 text-sm">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* About */}
      <section id="about" className="container py-16">
        <SectionHeading eyebrow="Background" title="About me" />
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-16">
        <div className="rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">Let's talk</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/75">
            Open to internships, co-op, and new-grad roles in AI and software engineering. Email is the fastest way to
            reach me.
          </p>
          <Button asChild size="lg" variant="accent" className="mt-8">
            <a href={`mailto:${profile.email}`}>
              <Mail /> {profile.email}
            </a>
          </Button>
          <p className="mt-6 flex items-center justify-center gap-1.5 text-sm text-primary-foreground/60">
            <MapPin className="h-4 w-4" /> {profile.location}
          </p>
        </div>
      </section>
    </>
  );
}
