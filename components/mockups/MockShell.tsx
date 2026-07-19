import { Chip, TextBar, TreeRow, Window } from "./primitives";

/**
 * The three-panel app shell: icon rail, file tree, editor, Ask dock.
 * Rendered as a light-mode app window (it sits on the dark hero tile).
 * Contains no yellow — the hero's single accent is its CTA button.
 */
export function MockShell() {
  return (
    <div
      role="img"
      aria-label="Stylized illustration of the Second Brain app: icon rail, file tree, Markdown editor, and Ask panel in one window"
    >
      <div aria-hidden="true" className="select-none">
        <Window title="second-brain — weekly-review.md">
          <div className="grid h-[300px] grid-cols-[40px_1fr] md:h-[380px] md:grid-cols-[40px_170px_1fr_210px]">
            {/* Icon rail */}
            <div className="flex flex-col items-center gap-3 border-r border-line-1 bg-surface-3 py-3">
              {[0, 1, 2, 3, 4].map((i) => (
                <i
                  key={i}
                  className={`size-4 rounded-xs ${i === 0 ? "bg-ink" : "border border-line-2"}`}
                />
              ))}
            </div>
            {/* File tree */}
            <div className="hidden border-r border-line-1 bg-surface-2 py-2 md:block">
              <p className="eyebrow px-2 pb-2 text-[8px] text-fg-3">Vault</p>
              <TreeRow label="01-Projects" folder />
              <TreeRow label="launch-plan.md" depth={1} />
              <TreeRow label="07-Daily" folder />
              <TreeRow label="2026-07-18.md" depth={1} />
              <TreeRow label="weekly-review.md" active />
              <TreeRow label="reading-notes.md" />
              <TreeRow label="q3-plan.md" />
            </div>
            {/* Editor */}
            <div className="overflow-hidden p-5">
              <div className="mb-1 flex items-baseline justify-between">
                <span className="font-sans text-[15px] font-extrabold tracking-head">
                  Weekly review
                </span>
                <span className="font-mono text-[9px] text-fg-3">
                  Saved · just now
                </span>
              </div>
              <div className="space-y-2.5 pt-3">
                <TextBar w={92} />
                <TextBar w={78} />
                <TextBar w={85} />
                <div className="flex items-center gap-2 py-1">
                  <Chip>[[q3-plan]]</Chip>
                  <TextBar w={40} className="grow-0 basis-2/5" />
                </div>
                <TextBar w={88} />
                <TextBar w={64} />
                <TextBar w={30} strong className="mt-4" />
                <TextBar w={81} />
                <TextBar w={72} />
              </div>
            </div>
            {/* Ask dock */}
            <div className="hidden flex-col border-l border-line-1 bg-surface-2 p-3 md:flex">
              <p className="eyebrow pb-3 text-[8px] text-fg-3">Ask</p>
              <div className="rounded-sm border border-line-1 bg-paper p-2">
                <p className="font-mono text-[9px] text-fg-2">
                  What did I decide about the Q3 launch?
                </p>
              </div>
              <div className="mt-2 space-y-1.5 rounded-sm border border-line-1 bg-paper p-2">
                <TextBar w={95} />
                <TextBar w={88} />
                <TextBar w={52} />
                <div className="flex gap-1 pt-1">
                  <Chip>q3-plan.md</Chip>
                  <Chip>weekly-review.md</Chip>
                </div>
              </div>
              <div className="mt-auto rounded-sm border border-line-2 p-1.5">
                <p className="font-mono text-[9px] text-fg-3">
                  Ask your vault…
                </p>
              </div>
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
}
