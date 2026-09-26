import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion/Reveal";
import { profile, projects, stations } from "@/data/profile";
import headshot from "@/assets/headshot.jpg";

const { hero } = profile;
const [before, after] = hero.headline.split(hero.emphasis);
const ctaHref = `mailto:${profile.email}?subject=${encodeURIComponent("The problem next to me")}`;
// The three problem lines are the projects' own `who` lines, so each is written once (in profile.ts).
const problems = hero.sub.map((slug) => projects.find((p) => p.slug === slug)!);

/**
 * Front page. Headline beside the portrait (desktop) or over a byline (phones), then the three problems as
 * ruled columns, each linking to the project it became, then the one call to action.
 */
export const Hero = () => (
  <section id={stations[0].section} className="container pb-section pt-lg">
    <div className="rule-double" />

    <div className="mt-xl grid gap-xl lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-2xl xl:grid-cols-[minmax(0,1fr)_17rem]">
      <div>
        <Reveal>
          <h1 className="max-w-[15ch] text-display-xl">
            {before}
            <em className="font-normal italic">{hero.emphasis}</em>
            {after}
          </h1>
        </Reveal>

        {/* Phones and tablets: a byline instead of the portrait column. */}
        <Reveal delay={120} className="mt-lg flex items-center gap-md lg:hidden">
          <img src={headshot} alt={`Portrait of ${profile.name}`} className="h-20 w-16 object-cover object-top" />
          <div className="space-y-2xs">
            <p className="label text-ink">{profile.name}</p>
            <p className="label">{hero.note}</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={150} className="hidden lg:block">
        <img
          src={headshot}
          alt={`Portrait of ${profile.name}`}
          className="aspect-[4/5] w-full object-cover object-top"
        />
      </Reveal>
    </div>

    <Reveal delay={250} className="mt-xl lg:mt-2xl">
      <ul className="grid border-t-hair border-rule md:grid-cols-3">
        {problems.map((project, i) => (
          <li
            key={project.slug}
            className={
              i === 0
                ? "border-b-hair border-rule py-md md:border-b-0 md:pb-0 md:pr-lg"
                : "border-b-hair border-rule py-md md:border-b-0 md:border-l-hair md:pb-0 md:px-lg last:md:pr-0"
            }
          >
            <Link to={`/projects/${project.slug}`} className="group block">
              <p className="font-display text-lead">{project.who}</p>
              <p className="label mt-xs transition-colors duration-fast ease-out-expo group-hover:text-amber">
                → {project.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Reveal>

    {/* Where I'm from, then the one call to action. */}
    <Reveal
      delay={400}
      className="mt-xl grid gap-lg border-t-hair border-rule pt-lg lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-2xl"
    >
      <div className="max-w-2xl space-y-2xs text-body text-quiet">
        {hero.about.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p className="label hidden pt-xs lg:block">{hero.note}</p>
      </div>
      <a href={ctaHref} className="link-amber justify-self-start font-display text-title italic lg:justify-self-end">
        {hero.cta}
      </a>
    </Reveal>
  </section>
);
