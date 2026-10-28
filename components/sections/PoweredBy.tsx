import { Eyebrow, Headline, Tile } from "@/components/Tile";
import { poweredBy } from "@/lib/content";

/** Yellow bracket glyph marking the loopback address — the tile's one accent. */
function AccentBracket() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mb-3"
    >
      <path fill="#FFCB05" d="M2 2h6v2H4v4H2V2z" />
    </svg>
  );
}

export function PoweredBy() {
  return (
    <Tile tone="light-2" id="powered-by">
      <div className="max-w-[720px]">
        <Eyebrow>{poweredBy.eyebrow}</Eyebrow>
        <Headline>{poweredBy.headline}</Headline>
        <p className="mt-5 text-[16px] leading-relaxed text-fg-2">
          {poweredBy.body}
        </p>
      </div>
      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {poweredBy.specs.map((spec, i) => (
          <div key={spec.title} className="border-t border-line-strong pt-6">
            {i === 0 ? <AccentBracket /> : <div className="mb-3 h-[14px]" />}
            <p className="tnum font-mono text-[26px] font-bold tracking-head">
              {spec.value}
            </p>
            <p className="mt-3 text-[15px] font-bold">{spec.title}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-fg-2">
              {spec.body}
            </p>
          </div>
        ))}
      </div>
    </Tile>
  );
}
