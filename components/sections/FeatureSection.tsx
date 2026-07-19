import type { ReactNode } from "react";
import { Headline, Tile, type Tone } from "@/components/Tile";
import type { Feature } from "@/lib/content";

interface FeatureSectionProps {
  feature: Feature;
  tone: Tone;
  mockup: ReactNode;
  /** Render the mockup on the left instead of the right. */
  flip?: boolean;
}

/**
 * Shared two-column layout for the numbered feature sections:
 * ghost number + copy on one side, a fake-UI mockup on the other.
 */
export function FeatureSection({
  feature,
  tone,
  mockup,
  flip,
}: FeatureSectionProps) {
  const dark = tone === "dark";
  const muted = dark ? "text-white/60" : "text-fg-2";
  const ghost = dark ? "text-white/15" : "text-line-2";
  const rule = dark ? "border-white/15" : "border-line-1";

  return (
    <Tile tone={tone} id={feature.id}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={flip ? "lg:order-2" : ""}>
          <p
            className={`tnum text-[64px] leading-none font-extralight tracking-display ${ghost}`}
            aria-hidden="true"
          >
            {feature.number}
          </p>
          <p className={`eyebrow mt-4 mb-5 ${dark ? "text-white/50" : "text-fg-3"}`}>
            {feature.number} — {feature.eyebrow}
          </p>
          <Headline>{feature.headline}</Headline>
          <p className={`mt-5 text-[16px] leading-relaxed ${muted}`}>
            {feature.body}
          </p>
          <ul className="mt-8">
            {feature.points.map((point) => (
              <li
                key={point}
                className={`flex items-baseline gap-3 border-t py-3 text-[14px] ${rule} ${muted}`}
              >
                <i
                  className={`size-1.5 shrink-0 translate-y-[-1px] ${dark ? "bg-white/40" : "bg-fg-3"}`}
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className={flip ? "lg:order-1" : ""}>{mockup}</div>
      </div>
    </Tile>
  );
}
