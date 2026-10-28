import { features } from "@/lib/content";
import { FeatureSection } from "./FeatureSection";

/** Capture, Sources and Ask, alternating light and dark tiles. */
export function Features() {
  return (
    <>
      {features.map((feature, i) => (
        <FeatureSection
          key={feature.id}
          feature={feature}
          tone={i % 2 === 0 ? "light" : "dark"}
        />
      ))}
    </>
  );
}
