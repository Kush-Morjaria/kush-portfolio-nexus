import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { stations } from "@/data/profile";
import { measureProgress, onProgress, getProgress, setProgress, useReachedStation } from "@/lib/station-progress";
import { cn } from "@/lib/utils";

const PROJECTS_INDEX = stations.findIndex((s) => s.section === "projects");

/**
 * The page's one showy effect: a vertical line down the left margin with a station per section.
 * It fills in amber as you scroll, and each station lights when its section arrives.
 * Below lg it collapses into a thin progress bar across the top of the screen.
 * It also owns scroll tracking; the header reads the same value (see lib/station-progress).
 */
export const TransitLine = () => {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const offHomeStation = pathname.startsWith("/projects/") ? PROJECTS_INDEX : 0;
  const lineRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const reached = useReachedStation();

  // Track scroll → progress. On a project page the reader stands at Projects; on any other page, at the start.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setProgress(onHome ? measureProgress() : offHomeStation);
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
  }, [onHome, offHomeStation]);

  // Progress → fill. Written straight to the DOM: this runs every scroll frame and shouldn't re-render.
  useEffect(() => {
    const paint = () => {
      const ratio = getProgress() / (stations.length - 1);
      if (lineRef.current) lineRef.current.style.transform = `scaleY(${ratio})`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`;
    };
    paint();
    return onProgress(paint);
  }, []);

  return (
    <>
      {/* Phones and tablets: thin bar across the top. */}
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-0.5 lg:hidden">
        <div ref={barRef} className="h-full origin-left scale-x-0 bg-amber" />
      </div>

      {/* Desktop: the line in the left margin. This is the site's navigation on desktop. */}
      <nav aria-label="Sections" className="fixed inset-y-0 left-0 z-30 hidden w-rail lg:block">
        <div className="absolute bottom-2xl left-10 top-28 w-px bg-rule">
          <div ref={lineRef} className="absolute inset-0 origin-top scale-y-0 bg-amber" />
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
                    className="group flex items-center gap-sm"
                  >
                    <span
                      className={cn(
                        "-ml-[5px] block h-[11px] w-[11px] rounded-full border-hair transition-colors duration-base ease-out-expo motion-reduce:transition-none",
                        lit ? "border-amber bg-amber" : "border-quiet/60 bg-paper",
                      )}
                    />
                    <span
                      className={cn(
                        "label whitespace-nowrap transition-colors duration-base ease-out-expo group-hover:text-amber motion-reduce:transition-none",
                        current ? "text-ink" : "text-quiet",
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
