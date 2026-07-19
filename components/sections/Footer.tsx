import { Logo } from "@/components/Logo";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-deep text-white">
      <div className="mx-auto max-w-[1100px] px-6 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-[280px]">
            <Logo variant="light" markSize={20} />
            <p className="mt-4 text-[13px] leading-relaxed text-white/50">
              {footer.tagline}
            </p>
          </div>
          <div className="flex gap-16">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow mb-4 text-white/40">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-[13px] text-white/70 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-14 border-t border-white/10 pt-6 text-[10px] tracking-eyebrow text-white/40 uppercase">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
