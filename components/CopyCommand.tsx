"use client";

import { useEffect, useRef, useState } from "react";

interface CopyCommandProps {
  command: string;
}

/** Copy-paste install snippet for dark tiles. The page's only client JS. */
export function CopyCommand({ command }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (permissions, http) — leave the text selectable.
    }
  }

  return (
    <div className="flex items-stretch overflow-hidden rounded-sm border border-white/20 bg-ink-deep font-mono text-[13px]">
      <pre className="grow overflow-x-auto px-4 py-3 whitespace-pre text-white/80">
        <code>
          <span className="text-white/40">$ </span>
          {command}
        </code>
      </pre>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy command to clipboard"
        className="shrink-0 border-l border-white/20 px-4 text-[11px] font-bold text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
