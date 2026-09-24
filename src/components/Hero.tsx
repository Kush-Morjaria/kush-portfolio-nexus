import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { profile, stations } from "@/data/profile";
import headshot from "@/assets/headshot.jpg";

const { hero } = profile;
const station = stations[0];
const [before, after] = hero.headline.split(hero.emphasis);
const ctaHref = `mailto:${profile.email}?subject=${encodeURIComponent("The problem next to me")}`;

export const Hero = () => (
  <section id={station.section} className="container pb-24 pt-8 sm:pb-32 sm:pt-10">
    {/* Dateline, newspaper-style. */}
    <Reveal variant="fade">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-y border-border py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        <span>
          {station.code} — {station.name}, ON
        </span>
      </div>
    </Reveal>

    <div className="mt-12 grid gap-12 sm:mt-14 lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_15rem]">
      <div>
        <Reveal delay={120}>
          <h1 className="max-w-[18ch] text-[clamp(2.6rem,5.2vw,4.5rem)] leading-[1.02]">
            {before}
            <em className="italic">{hero.emphasis}</em>
            {after}
          </h1>
        </Reveal>

        <Reveal delay={300} className="mt-8 max-w-xl">
          <div className="space-y-1 text-lg leading-relaxed text-muted-foreground">
            {hero.sub.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{hero.note}</p>
        </Reveal>

        <Reveal delay={450} className="mt-10">
          <a
            href={ctaHref}
            className="group inline-flex items-baseline gap-3 font-display text-2xl italic text-secondary decoration-secondary/50 underline-offset-[6px] hover:underline sm:text-3xl"
          >
            {hero.cta}
            <ArrowRight className="h-5 w-5 translate-y-0.5 self-center transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>

      <Reveal delay={250}>
        <img
          src={headshot}
          alt={`Portrait of ${profile.name}`}
          className="aspect-[4/5] w-44 rounded-sm object-cover object-top saturate-[0.85] sm:w-52 lg:w-full"
        />
      </Reveal>
    </div>
  </section>
);
