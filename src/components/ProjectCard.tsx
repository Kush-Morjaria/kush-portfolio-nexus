import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisual";
import { StatusBadge } from "@/components/StatusBadge";
import type { Project } from "@/data/profile";

export const ProjectCard = ({ project }: { project: Project }) => (
  <Link
    to={`/projects/${project.slug}`}
    className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
  >
    <ProjectVisual slug={project.slug} className="border-b border-border" />
    <div className="flex flex-1 flex-col gap-3 p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <StatusBadge status={project.status} />
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.stack.slice(0, 4).map((tech) => (
          <li key={tech} className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
            {tech}
          </li>
        ))}
      </ul>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
        Read more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </div>
  </Link>
);
