import type { ProjectStatus } from "@/data/profile";
import { cn } from "@/lib/utils";

/** Project status as plain mono text. Only "Live" gets the accent, because it's the one people can use. */
export const StatusBadge = ({ status, className }: { status: ProjectStatus; className?: string }) => (
  <p className={cn("label inline-flex items-center gap-xs", status === "Live" && "text-amber", className)}>
    {status === "Live" && <span className="h-[7px] w-[7px] rounded-full bg-amber" aria-hidden="true" />}
    {status}
  </p>
);
