import type { ProjectStatus } from "@/data/profile";
import { cn } from "@/lib/utils";

const styles: Record<ProjectStatus, string> = {
  Live: "border-secondary/40 text-secondary",
  "In development": "border-border text-muted-foreground",
  "Working prototype": "border-border text-muted-foreground",
  "Client work": "border-border text-muted-foreground",
};

export const StatusBadge = ({ status }: { status: ProjectStatus }) => (
  <span
    className={cn(
      "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px]",
      styles[status],
    )}
  >
    {status === "Live" && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
    {status}
  </span>
);
