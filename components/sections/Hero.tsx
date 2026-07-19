import { BtnAccent, GhostLink } from "@/components/Buttons";
import { CopyCommand } from "@/components/CopyCommand";
import { MockShell } from "@/components/mockups/MockShell";
import { Eyebrow, Headline } from "@/components/Tile";
import { hero, links, quickstart } from "@/lib/content";

/** Dark hero tile. Its single yellow element is the Download button. */
export function Hero() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-[1100px] px-6 pt-20 md:pt-28 lg:pt-32">
        <div className="anim-fade-rise max-w-[820px]">
          <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
          <Headline as="h1" size="display">
            {hero.headline[0]}
            <br />
            {hero.headline[1]}
          </Headline>
          <p className="mt-6 max-w-[620px] text-[17px] leading-relaxed text-white/70">
            {hero.subhead}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <BtnAccent href={links.releases} external>
              {hero.ctaPrimary}
            </BtnAccent>
            <span className="text-white/70">
              <GhostLink href={links.repo} external>
                {hero.ctaSecondary}
              </GhostLink>
            </span>
          </div>
          <div className="mt-10 max-w-[720px]">
            <p className="eyebrow mb-3 text-white/40">{hero.quickstartLabel}</p>
            <CopyCommand command={quickstart} />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] px-6 pt-16 pb-20 md:pb-28 lg:pb-32">
        <MockShell />
      </div>
    </section>
  );
}
