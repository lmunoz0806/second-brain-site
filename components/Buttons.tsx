import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-sm px-6 py-3 text-[15px] font-medium transition-[transform,opacity,background-color,border-color] duration-200 ease-standard active:translate-y-px active:opacity-90";

interface BtnProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

function externalProps(external?: boolean) {
  return external ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

/** Yellow primary action — at most one per section tile. */
export function BtnAccent({ href, children, external }: BtnProps) {
  return (
    <a
      href={href}
      {...externalProps(external)}
      className={`${base} bg-accent font-bold text-ink hover:bg-accent-500`}
    >
      {children}
    </a>
  );
}

/** Ink-on-light (or ink-on-accent) primary action. */
export function BtnPrimary({ href, children, external }: BtnProps) {
  return (
    <a
      href={href}
      {...externalProps(external)}
      className={`${base} bg-ink font-bold text-white hover:bg-ink-deep`}
    >
      {children}
    </a>
  );
}

/** Hairline outline button for dark surfaces. */
export function BtnOutlineDark({ href, children, external }: BtnProps) {
  return (
    <a
      href={href}
      {...externalProps(external)}
      className={`${base} border border-white/30 text-white hover:border-white`}
    >
      {children}
    </a>
  );
}

/** Quiet text link with arrow affordance. */
export function GhostLink({ href, children, external }: BtnProps) {
  return (
    <a
      href={href}
      {...externalProps(external)}
      className="inline-flex items-center gap-1 text-[15px] font-medium underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}
