import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SocialLinks } from "@/components/SocialLinks";
import { KMConstellation } from "@/components/KMConstellation";
import { profile, stations } from "@/data/profile";
import { useReachedStation } from "@/lib/station-progress";
import { cn } from "@/lib/utils";

const stationLabel = (i: number) => `${stations[i].code} ${stations[i].name}`;

/**
 * Masthead. There is one navigation system: the stations.
 * - Desktop (lg+): the transit line in the left margin is the navigation, so the header carries no menu.
 * - Below lg: a "Now at · Next" readout (tap Next to move on) and a menu listing the same five stations.
 */
export const Header = () => {
  const [open, setOpen] = useState(false);
  const reached = useReachedStation();
  const next = reached + 1 < stations.length ? reached + 1 : null;

  return (
    <header className="sticky top-0 z-40 border-b-hair border-rule bg-paper/85 backdrop-blur-md">
      <div className="container flex h-header items-center justify-between gap-md">
        <Link to="/" className="group flex items-center gap-sm font-display text-[1.25rem] font-semibold">
          <KMConstellation className="h-7 w-[42px]" />
          <span>{profile.name}</span>
        </Link>

        {/* Desktop: dateline. The date is edited by hand in profile.ts, never generated. */}
        <div className="hidden items-center gap-lg lg:flex">
          <p className="label">
            {profile.location} <span className="px-xs">·</span> Last updated{" "}
            <span className="text-ink">{profile.lastUpdated}</span>
          </p>
        </div>

        {/* Below lg: menu with the same stations as the rail. */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="label -mr-xs inline-flex items-center gap-xs p-xs text-ink lg:hidden" aria-label="Open menu">
              Menu <Menu className="h-4 w-4" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-lg border-l-hair border-rule bg-paper">
            <SheetTitle className="label text-quiet">Stations</SheetTitle>
            <nav aria-label="Sections">
              <ol className="border-t-hair border-rule">
                {stations.map((station, i) => (
                  <li key={station.section} className="border-b-hair border-rule">
                    <Link
                      to={{ pathname: "/", hash: `#${station.section}` }}
                      onClick={() => setOpen(false)}
                      aria-current={i === reached ? "location" : undefined}
                      className="flex items-baseline gap-md py-md"
                    >
                      <span className={cn("label", i <= reached && "text-amber")}>{station.code}</span>
                      <span className={cn("font-display text-title", i === reached ? "text-ink" : "text-quiet")}>
                        {station.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
            <SocialLinks className="mt-auto -ml-xs flex-wrap" />
          </SheetContent>
        </Sheet>
      </div>

      {/* Below lg: where you are on the line. */}
      <div className="container flex h-8 items-center justify-between gap-md border-t-hair border-rule lg:hidden">
        <p className="label truncate">
          Now at <span className="text-ink">{stationLabel(reached)}</span>
        </p>
        {next !== null && (
          <Link
            to={{ pathname: "/", hash: `#${stations[next].section}` }}
            className="label inline-flex shrink-0 items-center gap-2xs transition-colors duration-fast hover:text-amber"
          >
            Next <span className="text-ink">{stationLabel(next)}</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        )}
      </div>
    </header>
  );
};
