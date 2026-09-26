import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Reveal } from "@/components/motion/Reveal";
import { StatusBadge } from "@/components/StatusBadge";
import { Todo } from "@/components/Todo";
import { profile, projects, stations } from "@/data/profile";
import { projectPhoto } from "@/lib/project-photos";
import NotFound from "./NotFound";

const projectsStation = stations.find((s) => s.section === "projects")!;
const contactStation = stations.find((s) => s.section === "contact")!;

// A labelled block: mono label in the left column, content on the right (stacked on phones).
const Block = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <Reveal>
    <section className="grid gap-sm border-t-hair border-rule py-lg md:grid-cols-[11rem_minmax(0,1fr)] md:gap-xl">
      <h2 className="label pt-2xs font-mono font-normal">{label}</h2>
      <div className="max-w-2xl">{children}</div>
    </section>
  </Reveal>
);

/** One project, set as a single article: standfirst, the problem and what changed, then the details. */
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
  const photo = projectPhoto(project.slug);

  return (
    <article key={project.slug} className="container pb-section pt-lg">
      <Link
        to={{ pathname: "/", hash: `#${projectsStation.section}` }}
        className="label transition-colors duration-fast ease-out-expo hover:text-amber"
      >
        ← {projectsStation.code} {projectsStation.name}
      </Link>

      <div className="rule-double mt-md" />

      <Reveal>
        <header className="mt-xl">
          <StatusBadge status={project.status} />
          <h1 className="mt-sm text-display-xl">{project.name}</h1>
          <p className="mt-md max-w-3xl font-display text-lead text-quiet">{project.summary}</p>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-amber mt-lg inline-block text-body font-medium"
            >
              Try it →
            </a>
          )}
        </header>
      </Reveal>

      {photo && (
        <Reveal className="mt-xl">
          <img src={photo} alt={`${project.name}, in use`} className="w-full object-cover" />
        </Reveal>
      )}

      <div className="mt-2xl border-b-hair border-rule">
        <Block label="The problem">
          {project.who ? (
            <p className="font-display text-title font-normal">{project.who}</p>
          ) : (
            <Todo>the problem, and who had it.</Todo>
          )}
        </Block>

        <Block label="What changed">
          {project.changed ? (
            <p className="font-display text-title font-normal">{project.changed}</p>
          ) : (
            <Todo>one line on what changed for them.</Todo>
          )}
        </Block>

        <Block label="Why I built it">
          <p className="text-body text-quiet">{project.problem}</p>
        </Block>

        <Block label="What it does">
          <ul className="divide-y divide-rule">
            {project.highlights.map((item) => (
              <li key={item} className="py-xs text-body first:pt-0 last:pb-0">
                {item}
              </li>
            ))}
          </ul>
        </Block>

        {project.next && (
          <Block label="What’s next">
            <ul className="divide-y divide-rule">
              {project.next.map((item) => (
                <li key={item} className="py-xs text-body text-quiet first:pt-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        )}

        <Block label="Built with">
          <p className="text-body text-quiet">{project.stack.join(", ")}.</p>
        </Block>

        {project.note && (
          <Block label="Note">
            <p className="text-body text-quiet">{project.note}</p>
          </Block>
        )}
      </div>

      <footer className="mt-xl flex flex-col gap-md sm:flex-row sm:items-baseline sm:justify-between">
        <p className="text-small text-quiet">
          Want a walkthrough?{" "}
          <Link to={{ pathname: "/", hash: `#${contactStation.section}` }} className="link-amber">
            Ask me →
          </Link>
        </p>
        <Link
          to={`/projects/${nextProject.slug}`}
          className="font-display text-title transition-colors duration-fast ease-out-expo hover:text-amber"
        >
          <span className="label mr-sm align-middle">Next</span>
          {nextProject.name} →
        </Link>
      </footer>
    </article>
  );
}
