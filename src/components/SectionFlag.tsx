import { stations } from "@/data/profile";
import { useReachedStation } from "@/lib/station-progress";
import { cn } from "@/lib/utils";

interface SectionFlagProps {
  /** Section id of the station this section belongs to. */
  station: string;
  title: string;
  note?: string;
}

/**
 * A section's masthead: a double rule, the title, and the station on the right.
 * The rule draws itself left to right when the section's station lights up on the transit line.
 */
export const SectionFlag = ({ station, title, note }: SectionFlagProps) => {
  const index = stations.findIndex((s) => s.section === station);
  const arrived = useReachedStation() >= index;
  const { code, name } = stations[index];

  return (
    <header className="mb-xl">
      <div
        className={cn(
          "rule-double origin-left transition-transform duration-base ease-out-expo motion-reduce:scale-x-100 motion-reduce:transition-none",
          arrived ? "scale-x-100" : "scale-x-0",
        )}
      />
      <div className="mt-md flex flex-wrap items-baseline justify-between gap-x-lg gap-y-xs">
        <h2 className="text-display-md">{title}</h2>
        <p className="label">
          {/* The station name only when it adds something the heading doesn't already say. */}
          {code}
          {name !== title && ` — ${name}`}
          {note && ` · ${note}`}
        </p>
      </div>
    </header>
  );
};
