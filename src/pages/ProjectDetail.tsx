import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectVisual } from "@/components/ProjectVisual";
import { StatusBadge } from "@/components/StatusBadge";
import { Reveal } from "@/components/motion/Reveal";
import { profile, projects } from "@/data/profile";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  useEffect(() => {
    if (project) document.title = `${project.name} · ${profile.name}`;
    return () => {
      document.title = `${profile.name} · ${profile.role}`;
    };
  }, [project]);

  if (!project) return <NotFound />;

  const nextProject = projects[(index + 1) % projects.length];

  return (
    <article className="container max-w-3xl py-12 sm:py-16">
      <Link
        to={{ pathname: "/", hash: "#projects" }}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>

      <header className="mt-6 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-5xl leading-none sm:text-6xl">{project.name}</h1>
          <StatusBadge status={project.status} />
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
        {project.liveUrl && (
          <Button asChild size="lg" variant="accent">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Try it live <ExternalLink />
            </a>
          </Button>
        )}
      </header>

      <Reveal key={project.slug} delay={300} variant="scale" className="mt-10">
        <ProjectVisual slug={project.slug} className="rounded-xl border border-border" />
      </Reveal>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="mb-3 text-xl font-semibold">Why I built it</h2>
          <p className="leading-relaxed text-muted-foreground">{project.problem}</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">What it does</h2>
          <ul className="space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 leading-relaxed text-muted-foreground">
                <span className="mt-[11px] h-px w-3 shrink-0 bg-muted-foreground/60" />
                {h}
              </li>
            ))}
          </ul>
        </section>

        {project.next && (
          <section>
            <h2 className="mb-3 text-xl font-semibold">What's next</h2>
            <ul className="space-y-2.5">
              {project.next.map((n) => (
                <li key={n} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full border border-muted-foreground" />
                  {n}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="mb-3 text-xl font-semibold">Built with</h2>
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs">
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {project.note && (
          <p className="flex gap-2 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            {project.note}
          </p>
        )}
      </div>

      <footer className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Want a walkthrough?{" "}
          <a href={`mailto:${profile.email}`} className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-secondary">
            Email me
          </a>
        </p>
        <Link
          to={`/projects/${nextProject.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-secondary"
        >
          Next: {nextProject.name} <ArrowRight className="h-4 w-4" />
        </Link>
      </footer>
    </article>
  );
}
