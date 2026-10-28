import { Eyebrow, Headline, Tile, type Tone } from "@/components/Tile";
import type { Feature } from "@/lib/content";

interface FeatureSectionProps {
  feature: Feature;
  tone: Tone;
}

/**
 * One feature: label, headline, a paragraph and three points, then its
 * real app screenshots at full width.
 */
export function FeatureSection({ feature, tone }: FeatureSectionProps) {
  const dark = tone === "dark";
  const muted = dark ? "text-white/60" : "text-fg-2";
  const rule = dark ? "border-white/15" : "border-line-1";

  return (
    <Tile tone={tone} id={feature.id}>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow tone={tone}>{feature.eyebrow}</Eyebrow>
          <Headline>{feature.headline}</Headline>
        </div>
        <div>
          <p className={`text-[16px] leading-relaxed ${muted}`}>{feature.body}</p>
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
      </div>
      <div className="mt-14 space-y-8">
        {feature.screens.map((screen) => (
          // Static export with images.unoptimized: a plain img is what
          // next/image would emit anyway.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={screen.src}
            src={screen.src}
            alt={screen.alt}
            width={2400}
            height={1500}
            loading="lazy"
            className={`h-auto w-full rounded-md border ${dark ? "border-white/15" : "border-line-1"}`}
          />
        ))}
      </div>
    </Tile>
  );
}
