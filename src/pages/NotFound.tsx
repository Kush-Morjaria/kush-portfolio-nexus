import { Link } from "react-router-dom";
import { stations } from "@/data/profile";

/** 404: the same headline-and-rule treatment as everything else, and the stations as the way back. */
export default function NotFound() {
  return (
    <section className="container pb-section pt-lg">
      <div className="rule-double" />
      <p className="label mt-xl text-amber">404</p>
      <h1 className="mt-sm max-w-[16ch] text-display-xl">This page doesn’t exist</h1>
      <p className="mt-md font-display text-lead text-quiet">The link may be old, or mistyped.</p>

      <nav aria-label="Sections" className="mt-2xl max-w-xl">
        <ol className="border-t-hair border-rule">
          {stations.map((station) => (
            <li key={station.section} className="border-b-hair border-rule">
              <Link
                to={{ pathname: "/", hash: `#${station.section}` }}
                className="group flex items-baseline gap-md py-md"
              >
                <span className="label">{station.code}</span>
                <span className="font-display text-title transition-colors duration-fast ease-out-expo group-hover:text-amber">
                  {station.name} →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
