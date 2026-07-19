import { Eyebrow, Headline, Tile } from "@/components/Tile";
import { faq } from "@/lib/content";

/** FAQ on native <details> — no JavaScript, no yellow. */
export function Faq() {
  return (
    <Tile tone="light-2" width={720} id="faq">
      <Eyebrow>FAQ</Eyebrow>
      <Headline>Straight answers.</Headline>
      <div className="mt-12 border-b border-line-2">
        {faq.map((item) => (
          <details key={item.q} className="group border-t border-line-2">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 text-[16px] font-bold [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden="true"
                className="shrink-0 font-mono text-[18px] font-light text-fg-3 transition-transform duration-200 ease-standard group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-[600px] pb-6 text-[15px] leading-relaxed text-fg-2">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Tile>
  );
}
