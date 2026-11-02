import { Reveal } from "@/components/motion/Reveal";
import { SectionFlag } from "@/components/SectionFlag";
import { Todo } from "@/components/Todo";
import { profile } from "@/data/profile";

const { intro } = profile;

// A labelled row: mono key on the left, the answer on the right (stacked on phones).
const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid gap-2xs border-t-hair border-rule py-md sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-md">
    <dt className="label sm:pt-2xs">{label}</dt>
    <dd>{children}</dd>
  </div>
);

/** Still station 01: the About Me video, and the program, co-op and career answers the ePortfolio asks for. */
export const IntroSection = () => (
  <section id="about" className="container pb-section">
    <SectionFlag station="intro" title="About me" />

    <div className="grid gap-xl lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-2xl">
      <Reveal>
        {intro.video ? (
          <video
            src={`${import.meta.env.BASE_URL}${intro.video}`}
            poster={`${import.meta.env.BASE_URL}${intro.videoPoster}`}
            controls
            preload="metadata"
            playsInline
            className="aspect-video w-full border-hair border-rule bg-paper-raised"
          >
            Your browser can’t play this video.
          </video>
        ) : (
          <div className="flex aspect-video items-center justify-center border-hair border-rule bg-paper-raised p-lg">
            <Todo>the About Me video goes here.</Todo>
          </div>
        )}
        <p className="label mt-sm">About me · video</p>
      </Reveal>

      <Reveal delay={120}>
        <dl className="border-b-hair border-rule">
          <Row label="Program">
            <p className="font-display text-lead">{intro.program}</p>
            <p className="label mt-2xs">{intro.programDates}</p>
          </Row>
          <Row label="What I love about it">
            <p className="text-body">{intro.love}</p>
          </Row>
          <Row label="Co-op">
            <p className="text-body">{intro.coop}</p>
          </Row>
          <Row label="Career goal">
            <p className="font-display text-lead">{intro.careerGoal}</p>
          </Row>
        </dl>
      </Reveal>
    </div>
  </section>
);
