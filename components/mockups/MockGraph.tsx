const nodes = [
  { x: 300, y: 175, r: 9, label: "q3-plan", accent: true },
  { x: 175, y: 95, r: 6, label: "launch" },
  { x: 430, y: 105, r: 6, label: "weekly-review" },
  { x: 120, y: 230, r: 5, label: "budget" },
  { x: 250, y: 300, r: 5, label: "hiring" },
  { x: 420, y: 265, r: 6, label: "roadmap" },
  { x: 520, y: 190, r: 4, label: "notes" },
  { x: 80, y: 140, r: 4 },
  { x: 240, y: 40, r: 4 },
  { x: 370, y: 40, r: 4 },
  { x: 520, y: 70, r: 4 },
  { x: 545, y: 300, r: 4 },
  { x: 150, y: 320, r: 4 },
  { x: 330, y: 330, r: 4 },
] as const;

const edges: readonly [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 7],
  [1, 8],
  [2, 9],
  [2, 10],
  [2, 6],
  [5, 6],
  [5, 11],
  [4, 12],
  [4, 13],
  [3, 7],
];

/**
 * Inline-SVG knowledge graph. Sits on a light tile; the pulsing
 * yellow center node is that tile's one accent. L-brackets frame the
 * canvas, echoing the product's ⌘G overlay.
 */
export function MockGraph() {
  return (
    <div
      role="img"
      aria-label="Stylized illustration of the knowledge graph: linked notes drawn as connected nodes around a highlighted center note"
    >
      <div aria-hidden="true" className="relative select-none">
        <svg viewBox="0 0 600 360" className="w-full">
          {edges.map(([a, b]) => {
            const na = nodes[a];
            const nb = nodes[b];
            if (!na || !nb) return null;
            return (
              <line
                key={`${a}-${b}`}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke="#D6D6D6"
                strokeWidth="1"
              />
            );
          })}
          {nodes.map((n, i) => (
            <g key={i}>
              <circle
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill={"accent" in n && n.accent ? "#FFCB05" : "#181A18"}
                opacity={"accent" in n && n.accent ? 1 : 0.75}
                className={"accent" in n && n.accent ? "anim-node-pulse" : ""}
              />
              {"label" in n && n.label ? (
                <text
                  x={n.x}
                  y={n.y - n.r - 7}
                  textAnchor="middle"
                  className="fill-fg-2 font-mono text-[10px]"
                >
                  {n.label}
                </text>
              ) : null}
            </g>
          ))}
        </svg>
        {/* Corner brackets framing the canvas */}
        <i className="absolute top-0 left-0 size-3 border-t-2 border-l-2 border-ink" />
        <i className="absolute top-0 right-0 size-3 border-t-2 border-r-2 border-ink" />
        <i className="absolute bottom-0 left-0 size-3 border-b-2 border-l-2 border-ink" />
        <i className="absolute right-0 bottom-0 size-3 border-r-2 border-b-2 border-ink" />
      </div>
    </div>
  );
}
