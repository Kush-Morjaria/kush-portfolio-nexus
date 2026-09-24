import { cn } from "@/lib/utils";

// "KM" drawn as a star chart. Positions are deliberately a little off-grid, like a real constellation.
// viewBox is 60 × 40; the K's junction is the anchor star.
const stars = [
  // K
  { x: 5, y: 5, r: 2.0 },
  { x: 6.5, y: 19.5, r: 3.4, anchor: true },
  { x: 4.5, y: 34.5, r: 2.3 },
  { x: 19, y: 6.5, r: 2.2 },
  { x: 21, y: 33, r: 1.9 },
  // M
  { x: 29, y: 34, r: 2.2 },
  { x: 31, y: 6, r: 2.4 },
  { x: 40.5, y: 22.5, r: 1.9 },
  { x: 49.5, y: 4.5, r: 2.6 },
  { x: 53, y: 33.5, r: 2.0 },
];

// Star-to-star, in the order the lines redraw on hover.
const lines: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
];

export const KMConstellation = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 40" aria-hidden="true" className={cn("km-mark overflow-visible", className)}>
    {lines.map(([a, b], i) => (
      <line
        key={`${a}-${b}`}
        x1={stars[a].x}
        y1={stars[a].y}
        x2={stars[b].x}
        y2={stars[b].y}
        pathLength={1}
        vectorEffect="non-scaling-stroke"
        className="km-line stroke-foreground/45"
        strokeWidth={1}
        style={{ "--i": i } as React.CSSProperties}
      />
    ))}
    {stars.map((s) => (
      <circle key={`${s.x}-${s.y}`} cx={s.x} cy={s.y} r={s.r} className={s.anchor ? "fill-secondary" : "fill-secondary/85"} />
    ))}
  </svg>
);
