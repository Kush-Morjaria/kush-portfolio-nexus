import { cn } from "@/lib/utils";

// Illustrations, not screenshots: the code is private and SIZA holds client data.

const TefVisual = () => {
  const answered = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22]);
  const flagged = new Set([13, 20]);
  return (
    <div className="flex h-full flex-col gap-2 bg-muted p-3 font-mono text-[10px]">
      <div className="flex items-center justify-between rounded-md bg-card px-3 py-1.5 shadow-card">
        <span className="text-muted-foreground">Compréhension écrite</span>
        <span className="font-semibold text-foreground">⏱ 42:17</span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2">
        <div className="space-y-1.5 rounded-md bg-card p-2.5 shadow-card">
          <div className="h-1.5 w-2/3 rounded bg-foreground/70" />
          {[100, 92, 97, 85, 95, 70, 90, 60].map((w, i) => (
            <div key={i} className="h-1 rounded bg-muted-foreground/25" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="space-y-1.5 rounded-md bg-card p-2.5 shadow-card">
          <div className="h-1.5 w-4/5 rounded bg-foreground/70" />
          {["A", "B", "C", "D"].map((l) => (
            <div
              key={l}
              className={cn(
                "flex items-center gap-1.5 rounded border px-1.5 py-0.5",
                l === "B" ? "border-secondary bg-accent text-accent-foreground" : "border-border text-muted-foreground",
              )}
            >
              <span className="font-semibold">{l}</span>
              <span className="h-1 flex-1 rounded bg-current opacity-30" />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[repeat(20,minmax(0,1fr))] gap-0.5">
        {Array.from({ length: 40 }, (_, i) => i + 1).map((n) => (
          <div
            key={n}
            className={cn(
              "aspect-square rounded-[2px]",
              flagged.has(n) ? "bg-secondary" : answered.has(n) ? "bg-primary/70" : "bg-card",
              n === 23 && "ring-1 ring-secondary",
            )}
          />
        ))}
      </div>
    </div>
  );
};

const ArkVisual = () => {
  // Stations down a vertical line: shared blocks ride one trunk, solo blocks split into two branches.
  const amber = "#E8A33D";
  const teal = "#3FA7A0";
  const trunk = "#EDE7DC";
  const violet = "#7C6BD6";
  const dim = "#5A6472";
  const stations = [
    { y: 18, time: "06:30", label: "Morning prep" },
    { y: 45, time: "08:00", label: "Commute · reading" },
    { y: 70, time: "09:00", label: "Work · 7h", color: dim },
    { y: 95, time: "17:30", label: "Gym · awaiting Jeel" },
    { y: 138, time: "20:30", label: "French — anchor", color: violet },
    { y: 162, time: "21:30", label: "Prime time" },
  ];
  return (
    <div className="relative h-full overflow-hidden bg-[#141A24] font-mono text-[10px] text-[#EDE7DC]">
      <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
        <line x1="160" y1="10" x2="160" y2="60" stroke={trunk} strokeWidth="6" strokeLinecap="round" />
        <line x1="160" y1="60" x2="160" y2="80" stroke={trunk} strokeWidth="6" strokeDasharray="2 5" opacity="0.4" />
        <line x1="160" y1="80" x2="160" y2="110" stroke={trunk} strokeWidth="6" />
        <path d="M160 110 L140 125 L140 175" stroke={amber} strokeWidth="3.5" fill="none" strokeLinejoin="round" />
        <path d="M160 110 L180 125 L180 175" stroke={teal} strokeWidth="3.5" fill="none" strokeLinejoin="round" />
        <path d="M140 175 L160 190 M180 175 L160 190" stroke={dim} strokeWidth="3" />
        <circle cx="160" cy="18" r="6" fill={trunk} />
        <circle cx="160" cy="45" r="6" fill={trunk} />
        <circle cx="160" cy="95" r="6" fill="#141A24" stroke={trunk} strokeWidth="2.5" />
        <path d="M160 89 A6 6 0 0 1 160 101 Z" fill={trunk} />
        <circle cx="140" cy="138" r="5.5" fill={violet} />
        <circle cx="180" cy="138" r="5.5" fill={violet} />
        <circle cx="140" cy="162" r="5" fill="#141A24" stroke={amber} strokeWidth="2" />
        <circle cx="180" cy="162" r="5" fill={teal} />
        <line x1="20" y1="120" x2="300" y2="120" stroke={amber} strokeWidth="0.75" opacity="0.8" />
      </svg>
      {/* Label rows sit at the station's y as a percentage of the 200-unit viewBox (container is 16:10, same as the viewBox). */}
      {stations.map((s) => (
        <div
          key={s.time}
          className="absolute inset-x-3 flex -translate-y-1/2 justify-between leading-none"
          style={{ top: `${(s.y / 200) * 100}%`, color: s.color }}
        >
          <span className="opacity-60">{s.time}</span>
          <span>{s.label}</span>
        </div>
      ))}
      <div className="absolute left-3 -translate-y-full pb-0.5 leading-none" style={{ top: "60%", color: amber }}>
        now
      </div>
    </div>
  );
};

const AresVisual = () => (
  <div className="flex h-full flex-col bg-[#0d1117] p-3 font-mono text-[10px] leading-relaxed text-[#c9d1d9]">
    <div className="mb-2 flex gap-1.5">
      <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
      <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
      <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
    </div>
    <div className="text-[#8b949e]">$ python ares/sentinel.py</div>
    <div className="text-[#8b949e]">polling headlines… 2 gates active</div>
    <div className="mt-1.5">
      <span className="text-[#f0883e]">ALERT</span> “…approves $50B for Mars mission by 2028”
    </div>
    <div className="pl-3">
      → type <span className="text-[#79c0ff]">SPACE_BUDGET</span>
    </div>
    <div className="pl-3">
      → avg primary <span className="text-[#3fb950]">+2.37%</span> vs SPY +1.26% · win 0.8 · n=5
    </div>
    <div className="pl-3">→ primary RKLB LUNR ASTS RDW UFO</div>
    <div className="pl-3">→ closest: NASA FY2020 budget signed</div>
    <div className="mt-auto text-[#8b949e]">$ python ares/test_precision.py → 7/7 passed</div>
  </div>
);

const SizaVisual = () => {
  const rows = [
    { p: "bg-destructive", w: 70 },
    { p: "bg-secondary", w: 55 },
    { p: "bg-secondary", w: 80 },
    { p: "bg-success", w: 45 },
    { p: "bg-success", w: 62 },
  ];
  return (
    <div className="flex h-full gap-2 bg-muted p-3">
      <div className="w-1/4 space-y-2 rounded-md bg-primary p-2.5">
        <div className="h-2 w-3/4 rounded bg-primary-foreground/80" />
        {[60, 80, 50, 70].map((w, i) => (
          <div key={i} className="h-1.5 rounded bg-primary-foreground/30" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex gap-2">
          <div className="h-5 flex-1 rounded-md bg-card shadow-card" />
          <div className="h-5 w-12 rounded-md bg-secondary" />
        </div>
        <div className="flex-1 space-y-1.5 rounded-md bg-card p-2.5 shadow-card">
          {rows.map((r, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={cn("h-2 w-2 shrink-0 rounded-full", r.p)} />
              <span className="h-1.5 rounded bg-muted-foreground/30" style={{ width: `${r.w}%` }} />
            </div>
          ))}
        </div>
        <div className="ml-auto w-2/3 rounded-md rounded-br-none bg-primary/10 p-1.5">
          <div className="h-1.5 w-full rounded bg-primary/40" />
        </div>
      </div>
    </div>
  );
};

const visuals: Record<string, () => JSX.Element> = {
  "tef-simulator": TefVisual,
  ark: ArkVisual,
  ares: AresVisual,
  siza: SizaVisual,
};

export const ProjectVisual = ({ slug, className }: { slug: string; className?: string }) => {
  const Visual = visuals[slug];
  return (
    <div className={cn("aspect-[16/10] overflow-hidden", className)} aria-hidden="true">
      {Visual ? <Visual /> : <div className="h-full bg-muted" />}
    </div>
  );
};
