import { KbdKey, Window } from "./primitives";

/**
 * Terminal drawer: a dark panel that pops on its light tile. The
 * blinking yellow block cursor is that tile's one accent.
 */
export function MockTerminal() {
  return (
    <div
      role="img"
      aria-label="Stylized illustration of the built-in terminal running yarn dev inside the app"
    >
      <div aria-hidden="true" className="select-none">
        <Window dark title="terminal — zsh">
          <div className="space-y-1.5 p-4 font-mono text-[11px] leading-relaxed">
            <p>
              <span className="text-white/40">~/vault/01-projects </span>
              <span className="text-white/80">$ yarn dev</span>
            </p>
            <p className="text-white/40">ready — started server on :3000</p>
            <p className="text-white/40">watching for file changes…</p>
            <p className="pt-1">
              <span className="text-white/40">~/vault/01-projects </span>
              <span className="text-white/80">$ </span>
              <span className="anim-blink inline-block h-3.5 w-2 translate-y-0.5 bg-accent" />
            </p>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 px-4 py-2">
            <span className="font-mono text-[9px] text-white/40">
              node-pty · real shell
            </span>
            <span className="flex items-center gap-1.5 text-[9px] text-white/40">
              toggle <KbdKey dark>⌘J</KbdKey>
            </span>
          </div>
        </Window>
      </div>
    </div>
  );
}
