import { askPipeline } from "@/lib/content";
import { Chip, TextBar, Window } from "./primitives";

/**
 * Ask close-up: a question, a streamed answer, and clickable citations.
 * Sits on a light tile; the highlighted citation chip is that tile's
 * one accent — yellow means "click this".
 */
export function MockAsk() {
  return (
    <div
      role="img"
      aria-label="Stylized illustration of Ask: a question answered from the vault with clickable source citations"
    >
      <div aria-hidden="true" className="select-none">
        <Window title="Ask — workspace: second-brain">
          <div className="space-y-3 p-4">
            <div className="flex justify-end">
              <p className="max-w-[75%] rounded-sm bg-surface-3 px-3 py-2 font-mono text-[11px] text-fg-1">
                What did I decide about the Q3 launch date?
              </p>
            </div>
            <div className="max-w-[88%] space-y-2 rounded-sm border border-line-1 p-3">
              <TextBar w={96} />
              <TextBar w={90} />
              <TextBar w={94} />
              <TextBar w={42} />
              <div className="flex flex-wrap gap-1.5 border-t border-line-1 pt-2.5">
                <span className="font-mono text-[9px] text-fg-3">Sources</span>
                <Chip accent>q3-plan.md · §2</Chip>
                <Chip>weekly-review.md</Chip>
                <Chip>launch-plan.md</Chip>
              </div>
            </div>
            <div className="rounded-sm border border-line-2 px-3 py-2">
              <p className="font-mono text-[10px] text-fg-3">Ask your vault…</p>
            </div>
          </div>
        </Window>
        {/* Pipeline row */}
        <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] text-fg-3">
          {askPipeline.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              {i > 0 ? <span>→</span> : null}
              <span
                className={
                  i === askPipeline.length - 1 ? "font-bold text-fg-1" : ""
                }
              >
                {step}
              </span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
