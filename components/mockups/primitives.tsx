import type { ReactNode } from "react";

/**
 * Shared atoms for the fake-UI mockups. Everything here is decorative:
 * mockups wrap themselves in role="img" and hide this DOM from the
 * accessibility tree. Titlebar dots are neutral grey on purpose —
 * traffic-light colors would introduce a third hue.
 */

interface WindowProps {
  title?: string;
  dark?: boolean;
  children: ReactNode;
  className?: string;
}

export function Window({ title, dark, children, className = "" }: WindowProps) {
  const frame = dark
    ? "border-white/15 bg-ink-deep text-white"
    : "border-line-2 bg-paper text-fg-1";
  const bar = dark ? "border-white/10" : "border-line-1";
  const dot = dark ? "bg-white/20" : "bg-line-2";
  return (
    <div className={`overflow-hidden rounded-lg border ${frame} ${className}`}>
      <div
        className={`relative flex h-7 items-center border-b px-2.5 ${bar}`}
      >
        <span className="flex gap-1.5">
          <i className={`size-2 rounded-full ${dot}`} />
          <i className={`size-2 rounded-full ${dot}`} />
          <i className={`size-2 rounded-full ${dot}`} />
        </span>
        {title ? (
          <span
            className={`absolute inset-x-0 text-center font-mono text-[10px] ${dark ? "text-white/40" : "text-fg-3"}`}
          >
            {title}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

interface TextBarProps {
  /** width as a percentage, e.g. 72 */
  w: number;
  dark?: boolean;
  strong?: boolean;
  className?: string;
}

/** Skeleton text line — fake prose without fake words. */
export function TextBar({ w, dark, strong, className = "" }: TextBarProps) {
  const color = dark
    ? strong
      ? "bg-white/30"
      : "bg-white/12"
    : strong
      ? "bg-line-2"
      : "bg-line-1";
  return (
    <div
      className={`h-1.5 rounded-xs ${color} ${className}`}
      style={{ width: `${w}%` }}
    />
  );
}

interface ChipProps {
  children: ReactNode;
  dark?: boolean;
  accent?: boolean;
}

/** Small bordered label — citations, tags, wikilinks. */
export function Chip({ children, dark, accent }: ChipProps) {
  const style = accent
    ? "border-accent bg-accent/15 text-inherit"
    : dark
      ? "border-white/20 text-white/70"
      : "border-line-2 text-fg-2";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-sm border px-1.5 py-0.5 font-mono text-[9px] ${style}`}
    >
      {children}
    </span>
  );
}

interface TreeRowProps {
  label: string;
  depth?: number;
  active?: boolean;
  folder?: boolean;
}

/** File-tree row; the active row gets a strong left bracket. */
export function TreeRow({ label, depth = 0, active, folder }: TreeRowProps) {
  return (
    <div
      className={`flex items-center gap-1.5 py-[3px] font-mono text-[10px] ${
        active
          ? "border-l-2 border-ink font-bold text-fg-1"
          : "border-l-2 border-transparent text-fg-2"
      }`}
      style={{ paddingLeft: `${8 + depth * 12}px` }}
    >
      <i
        className={`size-1.5 ${folder ? "bg-fg-3" : "border border-fg-3"} shrink-0`}
      />
      <span className="truncate">{label}</span>
    </div>
  );
}

interface KbdKeyProps {
  children: ReactNode;
  dark?: boolean;
}

export function KbdKey({ children, dark }: KbdKeyProps) {
  return (
    <span
      className={`inline-flex items-center rounded-xs border px-1.5 py-0.5 font-mono text-[10px] ${
        dark ? "border-white/25 text-white/70" : "border-line-2 text-fg-2"
      }`}
    >
      {children}
    </span>
  );
}
