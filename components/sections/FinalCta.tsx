import { BtnPrimary } from "@/components/Buttons";
import { Headline, Tile } from "@/components/Tile";
import { finalCta, links } from "@/lib/content";

/** The page's single yellow tile — full-bleed accent, one black button. */
export function FinalCta() {
  return (
    <Tile tone="accent" id="download">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Headline size="display">{finalCta.headline}</Headline>
          <p className="mt-4 text-[17px] font-medium text-ink/70">
            {finalCta.body}
          </p>
        </div>
        <div className="shrink-0">
          <BtnPrimary href={links.download} external>
            {finalCta.cta}
          </BtnPrimary>
        </div>
      </div>
    </Tile>
  );
}
