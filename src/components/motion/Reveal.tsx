import { cn } from "@/lib/utils";
import { useInView } from "@/lib/motion";

type Variant = "up" | "fade" | "scale";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  variant?: Variant;
}

/** Fades content in (with a short rise or scale) the first time it scrolls into view. Timing lives in index.css. */
export const Reveal = ({ delay = 0, variant = "up", className, style, children, ...props }: RevealProps) => {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-variant={variant}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
};
