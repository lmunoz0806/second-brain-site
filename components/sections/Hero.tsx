import { BtnAccent } from "@/components/Buttons";
import { Headline } from "@/components/Tile";
import { hero, links } from "@/lib/content";

/** Full-viewport dark hero. Its single yellow element is the Download button. */
export function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-3.5rem)] items-center bg-ink text-white">
      <div className="anim-fade-rise mx-auto max-w-[1100px] px-6 py-24 text-center">
        <Headline as="h1" size="display">
          {hero.headline[0]}
          <br />
          {hero.headline[1]}
        </Headline>
        <p className="mt-6 text-[17px] text-white/70">
          {hero.line[0]}
          <span aria-hidden="true" className="mx-3 text-white/40">
            •
          </span>
          {hero.line[1]}
        </p>
        <div className="mt-10">
          <BtnAccent href={links.download}>{hero.cta}</BtnAccent>
        </div>
      </div>
    </section>
  );
}
