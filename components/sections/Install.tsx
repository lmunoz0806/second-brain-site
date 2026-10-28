import { BtnAccent } from "@/components/Buttons";
import { Eyebrow, Headline, Tile } from "@/components/Tile";
import { install, links } from "@/lib/content";

/** Dark install tile. Its single yellow element is the Download button. */
export function Install() {
  return (
    <Tile tone="dark" width={720} id="install">
      <Eyebrow tone="dark">{install.eyebrow}</Eyebrow>
      <Headline>{install.headline}</Headline>

      <div className="mt-12 border-t border-white/15 pt-8">
        <p className="text-[17px] font-bold">{install.title}</p>
        <p className="mt-2 text-[14px] leading-relaxed text-white/60">
          {install.body}
        </p>
        <div className="mt-5">
          <BtnAccent href={links.download}>{install.cta}</BtnAccent>
        </div>
      </div>
    </Tile>
  );
}
