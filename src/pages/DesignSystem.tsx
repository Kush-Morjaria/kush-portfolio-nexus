// Dev-only specimen of the design system (route /_system, registered only under `npm run dev`).
// Delete once the redesign is signed off.

const swatches = [
  { name: "ink", hex: "#EEE7DA", use: "Headlines and body text", className: "bg-ink" },
  { name: "quiet", hex: "#9C9387", use: "Secondary text, labels", className: "bg-quiet" },
  { name: "paper", hex: "#12110F", use: "Page", className: "bg-paper border-hair border-rule" },
  { name: "paper-raised", hex: "#181613", use: "Form fields", className: "bg-paper-raised" },
  { name: "rule", hex: "#2C2925", use: "Hairlines", className: "bg-rule" },
  { name: "amber", hex: "#F5A623", use: "Transit fill, active station, links, contact button — nothing else", className: "bg-amber" },
];

const typeScale = [
  { token: "display-xl", size: "44 → 92px", className: "font-display font-semibold text-display-xl", sample: "Most of what I build" },
  { token: "display-lg", size: "36 → 64px", className: "font-display font-semibold text-display-lg", sample: "TEF Simulator" },
  { token: "display-md", size: "30 → 44px", className: "font-display font-semibold text-display-md", sample: "Projects" },
  { token: "title", size: "26px", className: "font-display font-semibold text-title", sample: "ARES 2.0" },
  { token: "lead", size: "21px", className: "font-display text-lead", sample: "My brother, studying for his French exam." },
  { token: "body", size: "17px", className: "text-body", sample: "A client’s support team, stuck in HubSpot’s default screens." },
  { token: "small", size: "15px", className: "text-small text-quiet", sample: "Node.js, Express, plain JavaScript." },
  { token: "label", size: "11px mono", className: "label", sample: "02 — Projects · Live" },
];

const spaces = [
  ["2xs", "4px", "w-2xs"],
  ["xs", "8px", "w-xs"],
  ["sm", "12px", "w-sm"],
  ["md", "20px", "w-md"],
  ["lg", "32px", "w-lg"],
  ["xl", "48px", "w-xl"],
  ["2xl", "72px", "w-2xl"],
  ["section", "72 → 136px", "w-section"],
] as const;

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="border-t-hair border-rule py-xl">
    <p className="label mb-lg">{title}</p>
    {children}
  </section>
);

export default function DesignSystem() {
  return (
    <div className="container pb-section pt-xl">
      <div className="rule-double" />
      <h1 className="mt-lg text-display-md">Design system — Broadsheet</h1>
      <p className="mt-sm max-w-2xl text-small text-quiet">
        Source Serif 4 · IBM Plex Sans · IBM Plex Mono. Every value lives once in <code className="font-mono">src/index.css</code>.
      </p>

      <Block title="Colour">
        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
          {swatches.map((s) => (
            <div key={s.name} className="flex items-start gap-md">
              <span className={`h-xl w-xl shrink-0 ${s.className}`} />
              <div>
                <p className="font-mono text-small">
                  {s.name} <span className="text-quiet">{s.hex}</span>
                </p>
                <p className="text-small text-quiet">{s.use}</p>
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Type scale">
        <div className="space-y-lg">
          {typeScale.map((t) => (
            <div key={t.token} className="grid items-baseline gap-sm md:grid-cols-[10rem_minmax(0,1fr)]">
              <p className="font-mono text-label text-quiet">
                {t.token}
                <br />
                {t.size}
              </p>
              <p className={t.className}>{t.sample}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Space">
        <div className="space-y-xs">
          {spaces.map(([name, px, w]) => (
            <div key={name} className="grid grid-cols-[6rem_8rem_1fr] items-center gap-md">
              <span className="font-mono text-small">{name}</span>
              <span className="font-mono text-small text-quiet">{px}</span>
              <span className={`h-xs bg-quiet/40 ${w}`} />
            </div>
          ))}
        </div>
      </Block>

      <Block title="Lines, links, buttons">
        <div className="space-y-lg">
          <div>
            <p className="label mb-xs">Double rule — mastheads and section flags</p>
            <div className="rule-double" />
          </div>
          <div>
            <p className="label mb-xs">Hairline — between items</p>
            <div className="border-t-hair border-rule" />
          </div>
          <p className="text-lead font-display">
            Links are amber: <a className="link-amber" href="#_">What’s the problem next to you?</a>
          </p>
          <button className="bg-amber px-lg py-sm font-sans text-small font-medium text-paper transition-colors duration-fast ease-out-expo hover:bg-amber-soft">
            Contact button — the only filled amber element
          </button>
        </div>
      </Block>

      <Block title="Motion">
        <ul className="space-y-xs font-mono text-small text-quiet">
          <li>ease-out-expo — cubic-bezier(0.16, 1, 0.3, 1): decelerates, never bounces</li>
          <li>duration-fast 200ms — hovers, colour changes</li>
          <li>duration-base 500ms — station arrivals, rules drawing</li>
          <li>duration-slow 900ms — scroll reveals (12px rise + fade)</li>
          <li>Only transform and opacity animate. prefers-reduced-motion turns all of it off.</li>
        </ul>
      </Block>
    </div>
  );
}
