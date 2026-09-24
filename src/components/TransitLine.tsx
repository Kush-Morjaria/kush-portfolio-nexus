import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { stations } from "@/data/profile";
import { cn } from "@/lib/utils";

// A section "arrives" when its top edge crosses this fraction of the viewport height.
const ARRIVAL_LINE = 0.45;
const PROJECTS_INDEX = stations.findIndex((s) => s.section === "projects");

/**
 * Where the reader is along the line, as a float from 0 (first station) to stations.length - 1 (last).
 * Stations are evenly spaced like a transit map, so the fill interpolates between the two sections the
 * reader is between rather than tracking raw scroll distance.
 */
const measureProgress = () => {
  const anchor = window.innerHeight * ARRIVAL_LINE;
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (atBottom) return stations.length - 1;

  const tops = stations.map((s) => document.getElementById(s.section)?.getBoundingClientRect().top ?? Infinity);
  let progress = 0;
  tops.forEach((top, i) => {
    if (top > anchor) return;
    const next = tops[i + 1];
    progress = next === undefined || next === Infinity ? i : i + Math.min((anchor - top) / (next - top), 1);
  });
  return progress;
};

/**
 * The page's one showy effect: a vertical line down the left margin with a station per section.
 * It fills in amber as you scroll, and each station lights when its section arrives.
 * Below lg it collapses into a thin progress bar across the top of the screen.
 */
export const TransitLine = () => {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const lineRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // Off the home page (a project page), the reader is standing at the Projects station.
      const progress = onHome ? measureProgress() : PROJECTS_INDEX;
      const ratio = progress / (stations.length - 1);
      // Written straight to the DOM: this runs every scroll frame and shouldn't re-render.
      if (lineRef.current) lineRef.current.style.transform = `scaleY(${ratio})`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`;
      setReached(Math.floor(progress + 0.001));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [onHome]);

  return (
    <>
      {/* Phones and tablets: thin bar across the top. */}
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-0.5 lg:hidden">
        <div ref={barRef} className="h-full origin-left scale-x-0 bg-secondary" />
      </div>

      {/* Desktop: the line in the left margin. */}
      <nav aria-label="Page sections" className="fixed inset-y-0 left-0 z-30 hidden w-44 lg:block">
        <div className="absolute bottom-20 left-10 top-28 w-px bg-border">
          <div ref={lineRef} className="absolute inset-0 origin-top scale-y-0 bg-secondary" />
          <ol>
            {stations.map((station, i) => {
              const lit = i <= reached;
              const current = i === reached;
              return (
                <li
                  key={station.section}
                  className="absolute left-0 -translate-y-1/2"
                  style={{ top: `${(i / (stations.length - 1)) * 100}%` }}
                >
                  <Link
                    to={{ pathname: "/", hash: `#${station.section}` }}
                    aria-current={current ? "location" : undefined}
                    className="group flex items-center gap-3"
                  >
                    <span
                      className={cn(
                        "-ml-[4.5px] block h-[9px] w-[9px] rounded-full border transition-colors duration-500 motion-reduce:transition-none",
                        lit ? "border-secondary bg-secondary" : "border-muted-foreground/50 bg-background",
                      )}
                    />
                    <span
                      className={cn(
                        "whitespace-nowrap font-mono text-[10.5px] uppercase tracking-[0.16em] transition-colors duration-500 group-hover:text-secondary motion-reduce:transition-none",
                        current ? "text-foreground" : "text-muted-foreground/70",
                      )}
                    >
                      {station.code} {station.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};
