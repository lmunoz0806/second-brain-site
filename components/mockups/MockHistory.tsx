const versions = [
  { time: "Today · 14:32", note: "current", restore: false },
  { time: "Today · 11:05", note: "autosave", restore: true },
  { time: "Yesterday · 18:47", note: "before delete", restore: false },
  { time: "Jul 15 · 09:12", note: "autosave", restore: false },
] as const;

/**
 * Slim version-history list for the Recover section. Sits on a dark
 * tile as a light panel; the yellow "Restore →" is that tile's accent.
 */
export function MockHistory() {
  return (
    <div
      role="img"
      aria-label="Stylized illustration of version history: a list of saved versions of a note with a restore action"
    >
      <div
        aria-hidden="true"
        className="select-none rounded-lg border border-line-2 bg-paper text-fg-1"
      >
        <p className="eyebrow border-b border-line-1 px-4 py-3 text-[8px] text-fg-3">
          weekly-review.md — versions
        </p>
        {versions.map((v, i) => (
          <div
            key={v.time}
            className={`flex items-center justify-between px-4 py-3 ${i > 0 ? "border-t border-line-1" : ""}`}
          >
            <span className="tnum font-mono text-[11px] text-fg-2">
              {v.time}
            </span>
            <span className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-fg-3">{v.note}</span>
              {v.restore ? (
                <span className="font-mono text-[10px] font-bold text-accent-600">
                  Restore →
                </span>
              ) : (
                <span className="w-[52px]" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
