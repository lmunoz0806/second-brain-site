import { GhostLink } from "@/components/Buttons";
import { Eyebrow, Headline, Tile } from "@/components/Tile";
import { links, openSource } from "@/lib/content";

/** Open-source positioning. No yellow on this tile — ink links only. */
export function OpenSource() {
  return (
    <Tile tone="light" id="open-source">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>{openSource.eyebrow}</Eyebrow>
          <Headline>{openSource.headline}</Headline>
          <p className="mt-5 max-w-[480px] text-[16px] leading-relaxed text-fg-2">
            {openSource.body}
          </p>
          <div className="mt-8">
            <GhostLink href={links.repo} external>
              {openSource.cta} →
            </GhostLink>
          </div>
        </div>
        <div>
          {openSource.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-t border-line-strong py-5"
            >
              <p className="tnum font-mono text-[24px] font-bold tracking-head">
                {stat.value}
              </p>
              <p className="mt-1 text-[13px] text-fg-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Tile>
  );
}
