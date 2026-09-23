import type { ProjectStatus } from "@/data/profile";
import { cn } from "@/lib/utils";

const styles: Record<ProjectStatus, string> = {
  Live: "bg-success/15 text-success",
  "In development": "bg-accent text-accent-foreground",
  "Working prototype": "bg-accent text-accent-foreground",
  "Client work": "bg-muted text-muted-foreground",
};

export const StatusBadge = ({ status }: { status: ProjectStatus }) => (
  <span
    className={cn(
      "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
      styles[status],
    )}
  >
    {status === "Live" && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
    {status}
  </span>
);
