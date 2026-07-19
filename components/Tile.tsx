import type { ReactNode } from "react";

export type Tone = "light" | "light-2" | "dark" | "accent";

const toneClasses: Record<Tone, string> = {
  light: "bg-paper text-fg-1",
  "light-2": "bg-surface-2 text-fg-1",
  dark: "bg-ink text-white",
  accent: "bg-accent text-ink",
};

const widthClasses = {
  720: "max-w-[720px]",
  1100: "max-w-[1100px]",
  1440: "max-w-[1440px]",
} as const;

interface TileProps {
  tone: Tone;
  width?: keyof typeof widthClasses;
  id?: string;
  children: ReactNode;
}

/**
 * Full-bleed flat section tile. Tiles stack with zero gap — the color
 * change between light and dark is the only divider on the page.
 */
export function Tile({ tone, width = 1100, id, children }: TileProps) {
  return (
    <section id={id} className={toneClasses[tone]}>
      <div
        className={`mx-auto px-6 py-20 md:py-28 lg:py-32 ${widthClasses[width]}`}
      >
        {children}
      </div>
    </section>
  );
}

interface EyebrowProps {
  children: ReactNode;
  tone?: Tone;
}

/** ALL-CAPS 10px section label. On dark tiles it dims to fg-3. */
export function Eyebrow({ children, tone = "light" }: EyebrowProps) {
  const color =
    tone === "dark"
      ? "text-white/50"
      : tone === "accent"
        ? "text-ink/60"
        : "text-fg-3";
  return <p className={`eyebrow mb-5 ${color}`}>{children}</p>;
}

interface HeadlineProps {
  children: ReactNode;
  size?: "display" | "section";
  as?: "h1" | "h2";
}

/** Tight-tracked Helvetica headline. Weight 800 — never 600. */
export function Headline({
  children,
  size = "section",
  as: Tag = "h2",
}: HeadlineProps) {
  const sizeClass =
    size === "display"
      ? "text-[40px] leading-[1.02] tracking-display md:text-[64px] lg:text-[76px]"
      : "text-[30px] leading-[1.08] tracking-head md:text-[42px]";
  return (
    <Tag className={`font-extrabold text-balance ${sizeClass}`}>{children}</Tag>
  );
}
