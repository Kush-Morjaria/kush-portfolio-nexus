import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion/Reveal";
import { SectionFlag } from "@/components/SectionFlag";
import { StatusBadge } from "@/components/StatusBadge";
import { Todo } from "@/components/Todo";
import { projects, type Project } from "@/data/profile";
import { projectPhoto } from "@/lib/project-photos";
import { cn } from "@/lib/utils";

// The lead story is the project people can actually use; the rest run as briefs beside each other.
const lead = projects.find((p) => p.status === "Live") ?? projects[0];
const briefs = projects.filter((p) => p !== lead);

const Who = ({ project, className }: { project: Project; className?: string }) =>
  project.who ? <p className={className}>{project.who}</p> : <Todo className="mt-sm">the problem, and who had it.</Todo>;

const Changed = ({ project, className }: { project: Project; className?: string }) =>
  project.changed ? (
    <p className={className}>{project.changed}</p>
  ) : (
    <Todo className="mt-sm">one line on what changed for them.</Todo>
  );

const ReadMore = ({ slug }: { slug: string }) => (
  <Link to={`/projects/${slug}`} className="label transition-colors duration-fast ease-out-expo hover:text-amber">
    Read more →
  </Link>
);

export const ProjectsSection = () => {
  const photo = projectPhoto(lead.slug);

  return (
    <section id="projects" className="container pb-section">
      <SectionFlag station="projects" title="Projects" note="Source code private" />

      <Reveal>
        <article
          className={cn(
            "grid gap-xl border-b-hair border-rule pb-xl",
            photo && "lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-2xl",
          )}
        >
          <div>
            <StatusBadge status={lead.status} />
            <h3 className="mt-sm text-display-lg">
              <Link to={`/projects/${lead.slug}`} className="transition-colors duration-fast ease-out-expo hover:text-amber">
                {lead.name}
              </Link>
            </h3>
            <Who project={lead} className="mt-md max-w-2xl font-display text-lead" />
            <Changed project={lead} className="mt-xs max-w-2xl text-body text-quiet" />
            <div className="mt-lg flex flex-wrap items-baseline gap-x-lg gap-y-sm">
              {lead.liveUrl && (
                <a href={lead.liveUrl} target="_blank" rel="noopener noreferrer" className="link-amber text-body font-medium">
                  Try it →
                </a>
              )}
              <ReadMore slug={lead.slug} />
            </div>
          </div>
          {photo && <img src={photo} alt={`${lead.name}, in use`} className="w-full object-cover" />}
        </article>
      </Reveal>

      <ul className="grid md:grid-cols-3">
        {briefs.map((project, i) => {
          const briefPhoto = projectPhoto(project.slug);
          return (
            <li
              key={project.slug}
              className={cn(
                "border-b-hair border-rule py-lg last:border-b-0 md:border-b-0 md:pb-0",
                i === 0 ? "md:pr-lg" : "md:border-l-hair md:px-lg",
                i === briefs.length - 1 && "md:pr-0",
              )}
            >
              <Reveal delay={i * 100}>
                {briefPhoto && (
                  <img src={briefPhoto} alt={`${project.name}, in use`} className="mb-md aspect-[4/3] w-full object-cover" />
                )}
                <StatusBadge status={project.status} />
                <h3 className="mt-xs text-title">
                  <Link to={`/projects/${project.slug}`} className="transition-colors duration-fast ease-out-expo hover:text-amber">
                    {project.name}
                  </Link>
                </h3>
                <Who project={project} className="mt-sm font-display text-body" />
                <Changed project={project} className="mt-xs text-small text-quiet" />
                <div className="mt-md">
                  <ReadMore slug={project.slug} />
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
