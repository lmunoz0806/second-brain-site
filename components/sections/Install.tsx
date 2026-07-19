import { BtnAccent } from "@/components/Buttons";
import { CopyCommand } from "@/components/CopyCommand";
import { Eyebrow, Headline, Tile } from "@/components/Tile";
import { install, links, quickstart } from "@/lib/content";

/** Dark install tile. Its single yellow element is the Download button. */
export function Install() {
  return (
    <Tile tone="dark" width={720} id="install">
      <Eyebrow tone="dark">{install.eyebrow}</Eyebrow>
      <Headline>{install.headline}</Headline>

      <div className="mt-12 border-t border-white/15 pt-8">
        <p className="text-[17px] font-bold">{install.macos.title}</p>
        <p className="mt-2 text-[14px] leading-relaxed text-white/60">
          {install.macos.body}
        </p>
        <div className="mt-5">
          <BtnAccent href={links.releases} external>
            {install.macos.cta}
          </BtnAccent>
        </div>
      </div>

      <div className="mt-10 border-t border-white/15 pt-8">
        <p className="text-[17px] font-bold">{install.source.title}</p>
        <p className="mt-2 text-[14px] leading-relaxed text-white/60">
          {install.source.body}
        </p>
        <div className="mt-5">
          <CopyCommand command={quickstart} />
        </div>
      </div>
    </Tile>
  );
}
