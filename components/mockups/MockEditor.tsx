import { TextBar, Window } from "./primitives";

/**
 * Editor close-up: autosave state + version-history popover.
 * Sits on a dark tile; the yellow "Saved" tick is that tile's one accent.
 */
export function MockEditor() {
  return (
    <div
      role="img"
      aria-label="Stylized illustration of the Markdown editor with autosave state and a version-history popover"
    >
      <div aria-hidden="true" className="relative select-none">
        <Window title="launch-plan.md">
          <div className="p-5 pb-8">
            <div className="flex items-baseline justify-between">
              <span className="text-[16px] font-extrabold tracking-head">
                Launch plan
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[9px] text-fg-3">
                <i className="size-1.5 rounded-full bg-accent" />
                Saved · just now
              </span>
            </div>
            <div className="mt-4 space-y-2.5">
              <TextBar w={90} />
              <TextBar w={76} />
              <TextBar w={84} />
              <TextBar w={58} />
              <TextBar w={34} strong className="mt-4" />
              <TextBar w={88} />
              <TextBar w={71} />
              <TextBar w={80} />
            </div>
          </div>
        </Window>
        {/* History popover */}
        <div className="absolute -top-3 right-4 w-[180px] rounded-md border border-line-2 bg-paper p-2 md:-right-6">
          <p className="eyebrow px-1 pb-2 text-[8px] text-fg-3">History</p>
          {["14:32", "11:05", "Yesterday"].map((t, i) => (
            <div
              key={t}
              className="flex items-center justify-between border-t border-line-1 px-1 py-1.5"
            >
              <span className="tnum font-mono text-[10px] text-fg-2">{t}</span>
              <span
                className={`font-mono text-[9px] ${i === 0 ? "font-bold text-fg-1" : "text-fg-3"}`}
              >
                {i === 0 ? "current" : "restore"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
