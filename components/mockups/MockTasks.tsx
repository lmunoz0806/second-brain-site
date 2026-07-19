import { TextBar } from "./primitives";

interface CardProps {
  title?: string;
  timer?: string;
  running?: boolean;
  bars: readonly number[];
}

function Card({ title, timer, running, bars }: CardProps) {
  return (
    <div className="rounded-sm border border-line-1 bg-paper p-2.5">
      {title ? (
        <p className="pb-2 font-mono text-[10px] font-bold text-fg-1">
          {title}
        </p>
      ) : null}
      <div className="space-y-1.5">
        {bars.map((w, i) => (
          <TextBar key={i} w={w} />
        ))}
      </div>
      {timer ? (
        <p className="mt-2.5 flex items-center gap-1.5 border-t border-line-1 pt-2">
          <i
            className={`size-1.5 rounded-full ${running ? "anim-blink bg-accent" : "bg-line-2"}`}
          />
          <span className="tnum font-mono text-[10px] font-bold text-fg-1">
            {timer}
          </span>
          <span className="font-mono text-[9px] text-fg-3">
            {running ? "running" : "paused"}
          </span>
        </p>
      ) : null}
    </div>
  );
}

const columns = [
  {
    title: "Backlog",
    cards: [{ bars: [85, 55] }, { bars: [70] }, { bars: [80, 40] }],
  },
  {
    title: "In progress",
    cards: [
      {
        title: "Draft launch email",
        timer: "00:42:17",
        running: true,
        bars: [75],
      },
      { title: "Review Q3 budget", timer: "01:03:44", bars: [60, 45] },
    ],
  },
  {
    title: "Done",
    cards: [{ bars: [65] }, { bars: [78, 50] }],
  },
] as const;

/**
 * Kanban board with two timers — one running, one paused — selling
 * concurrent time tracking. Sits on a dark tile; the blinking yellow
 * timer dot is that tile's one accent.
 */
export function MockTasks() {
  return (
    <div
      role="img"
      aria-label="Stylized illustration of the task board: Backlog, In progress, and Done columns with two task timers"
    >
      <div
        aria-hidden="true"
        className="grid select-none grid-cols-3 gap-2.5 rounded-lg border border-line-2 bg-surface-2 p-3"
      >
        {columns.map((col) => (
          <div key={col.title}>
            <p className="eyebrow pb-2 text-[8px] text-fg-3">{col.title}</p>
            <div className="space-y-2">
              {col.cards.map((card, i) => (
                <Card key={i} {...card} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
