import { MockAsk } from "@/components/mockups/MockAsk";
import { Eyebrow, Headline, Tile } from "@/components/Tile";
import { features } from "@/lib/content";

/** Double-weight showcase for Ask (06) — the grounded local AI. */
export function Ask() {
  const ask = features.find((f) => f.id === "ask");
  if (!ask) return null;

  return (
    <Tile tone="light" id="ask">
      <div className="max-w-[720px]">
        <Eyebrow>
          {ask.number} — {ask.eyebrow}
        </Eyebrow>
        <Headline>{ask.headline}</Headline>
        <p className="mt-5 text-[16px] leading-relaxed text-fg-2">
          {ask.body}
        </p>
      </div>
      <div className="mt-14 grid items-start gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <ul className="order-2 lg:order-1">
          {ask.points.map((point) => (
            <li
              key={point}
              className="flex items-baseline gap-3 border-t border-line-1 py-4 text-[15px] text-fg-2"
            >
              <i className="size-1.5 shrink-0 translate-y-[-1px] bg-fg-3" />
              {point}
            </li>
          ))}
        </ul>
        <div className="order-1 lg:order-2">
          <MockAsk />
        </div>
      </div>
    </Tile>
  );
}
