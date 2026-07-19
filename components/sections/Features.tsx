import { MockEditor } from "@/components/mockups/MockEditor";
import { MockGraph } from "@/components/mockups/MockGraph";
import { MockHistory } from "@/components/mockups/MockHistory";
import { MockTasks } from "@/components/mockups/MockTasks";
import { MockTerminal } from "@/components/mockups/MockTerminal";
import { features } from "@/lib/content";
import { FeatureSection } from "./FeatureSection";

/**
 * Numbered features 01–05, alternating dark/light tiles and
 * left/right mockups. 06 (Ask) gets its own double-weight section.
 */
export function Features() {
  const [write, connect, execute, terminal, recover] = features;
  if (!write || !connect || !execute || !terminal || !recover) return null;

  return (
    <>
      <FeatureSection feature={write} tone="dark" mockup={<MockEditor />} />
      <FeatureSection feature={connect} tone="light" mockup={<MockGraph />} flip />
      <FeatureSection feature={execute} tone="dark" mockup={<MockTasks />} />
      <FeatureSection feature={terminal} tone="light" mockup={<MockTerminal />} flip />
      <FeatureSection feature={recover} tone="dark" mockup={<MockHistory />} />
    </>
  );
}
