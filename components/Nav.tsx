import { Logo } from "@/components/Logo";
import { links, nav } from "@/lib/content";

/**
 * Dark global nav, sticky. Its single yellow element is the accent
 * bracket inside the brand mark — the Download button stays outline.
 */
export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink text-white">
      <nav className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-6">
        <a href="#main" aria-label="Second Brain — back to top">
          <Logo variant="light" markSize={20} />
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {nav.anchors.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] font-medium text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-white/70 transition-colors duration-200 hover:text-white"
              >
                GitHub
              </a>
            </li>
          </ul>
          <a
            href={links.download}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-white/30 px-4 py-1.5 text-[13px] font-bold transition-colors duration-200 hover:border-white"
          >
            {nav.download} →
          </a>
        </div>
      </nav>
    </header>
  );
}
