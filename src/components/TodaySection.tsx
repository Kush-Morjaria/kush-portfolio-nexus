import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion/Reveal";
import { SectionFlag } from "@/components/SectionFlag";
import { education, experience, profile, today } from "@/data/profile";

const current = experience.find((r) => r.current)!;
const before = experience.filter((r) => !r.current);

// A labelled row: mono key on the left, the fact on the right (stacked on phones).
const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid gap-2xs border-t-hair border-rule py-md sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-md">
    <dt className="label sm:pt-2xs">{label}</dt>
    <dd>{children}</dd>
  </div>
);

/** Station 03. A plain /now-style status: what I'm doing right now, then what came before. */
export const TodaySection = () => (
  <section id="experience" className="container pb-section">
    <SectionFlag station="experience" title="Today" note={`Last updated ${profile.lastUpdated}`} />

    <div className="grid gap-2xl lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <Reveal>
        <dl className="border-b-hair border-rule">
          <Row label="Work">
            <p className="font-display text-lead">
              {current.title}, {current.org}
            </p>
            <p className="label mt-2xs">{current.period}</p>
          </Row>
          <Row label="School">
            <p className="font-display text-lead">{education.now}</p>
            <p className="label mt-2xs">{education.graduating}</p>
          </Row>
          <Row label="Building">
            <Link
              to={`/projects/${today.building.project}`}
              className="font-display text-lead transition-colors duration-fast ease-out-expo hover:text-amber"
            >
              {today.building.text} →
            </Link>
          </Row>
          <Row label="Weekends">
            <p className="font-display text-lead">{today.weekends}</p>
          </Row>
        </dl>
      </Reveal>

      <Reveal delay={120}>
        <p className="label mb-sm">Before</p>
        <ol className="border-b-hair border-rule">
          {[...before, { ...education.award, points: [] as string[] }].map((item) => (
            <li key={`${item.title}-${item.period}`} className="border-t-hair border-rule py-sm">
              <p className="label">{item.period}</p>
              <p className="mt-2xs text-body">
                {item.title} <span className="text-quiet">· {item.org}</span>
              </p>
              {item.points.map((point) => (
                <p key={point} className="mt-2xs text-small text-quiet">
                  {point}
                </p>
              ))}
            </li>
          ))}
        </ol>
      </Reveal>
    </div>

    <Reveal delay={200} className="mt-xl">
      <dl>
        <Row label="Tools">
          <p className="text-body text-quiet">{today.tools}</p>
        </Row>
      </dl>
    </Reveal>
  </section>
);
