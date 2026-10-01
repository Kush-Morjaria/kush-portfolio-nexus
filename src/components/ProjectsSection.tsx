import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion/Reveal";
import { SectionFlag } from "@/components/SectionFlag";
import { StatusBadge } from "@/components/StatusBadge";
import { Todo } from "@/components/Todo";
import { projects } from "@/data/profile";
import { cn } from "@/lib/utils";

const linkClass = "label transition-colors duration-fast ease-out-expo hover:text-amber";

/**
 * Column rules for item `i` in a 2-column (md) and 3-column (lg) grid: a hairline on the left of every item that
 * isn't first in its row, no outer padding on the first and last column. Each lg class undoes the md one when the
 * item's position changes between the two layouts.
 */
const cellClass = (i: number) => {
  const md = { first: i % 2 === 0, last: i % 2 === 1 };
  const lg = { first: i % 3 === 0, last: i % 3 === 2 };
  return cn(
    "border-b-hair border-rule py-lg md:px-lg",
    !md.first && "md:border-l-hair",
    md.first && "md:pl-0",
    md.last && "md:pr-0",
    !lg.first ? "lg:border-l-hair" : !md.first && "lg:border-l-0",
    lg.first ? "lg:pl-0" : md.first && "lg:pl-lg",
    lg.last ? "lg:pr-0" : md.last && "lg:pr-lg",
  );
};

/**
 * Every project the same size, in the order of `projects` in profile.ts.
 * A ruled grid: hairlines between rows and columns, like columns of type.
 * No photos here: one project with a picture would look bigger than the rest. Photos show on project pages.
 */
export const ProjectsSection = () => (
  <section id="projects" className="container pb-section">
    <SectionFlag station="projects" title="Projects" note="Source code private, except this website" />

    <ul className="grid border-t-hair border-rule md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => {
        return (
          <li key={project.slug} className={cellClass(i)}>
            <Reveal delay={(i % 3) * 100} className="flex h-full flex-col">
              <StatusBadge status={project.status} />
              <h3 className="mt-xs text-title">
                <Link
                  to={`/projects/${project.slug}`}
                  className="transition-colors duration-fast ease-out-expo hover:text-amber"
                >
                  {project.name}
                </Link>
              </h3>
              {project.who ? (
                <p className="mt-sm font-display text-body">{project.who}</p>
              ) : (
                <Todo className="mt-sm">the problem, and who had it.</Todo>
              )}
              {project.changed ? (
                <p className="mt-xs text-small text-quiet">{project.changed}</p>
              ) : (
                <Todo className="mt-sm">one line on what changed.</Todo>
              )}
              <div className="mt-auto flex flex-wrap items-baseline gap-x-md gap-y-xs pt-md">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-amber text-small font-medium">
                    Try it →
                  </a>
                )}
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="link-amber text-small font-medium">
                    Code →
                  </a>
                )}
                <Link to={`/projects/${project.slug}`} className={linkClass}>
                  Read more →
                </Link>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ul>
  </section>
);
