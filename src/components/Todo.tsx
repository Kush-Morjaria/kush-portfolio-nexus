import { cn } from "@/lib/utils";

/** A visible placeholder for copy Kush still has to write. Meant to be impossible to miss, and to never ship. */
export const Todo = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("block border-l-heavy border-amber/60 pl-sm font-mono text-small text-quiet", className)}>
    TODO — {children}
  </span>
);
