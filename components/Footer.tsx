"use client";

import Image from "next/image";
import { useSite } from "@/components/LangProvider";

export default function Footer() {
  const site = useSite();
  const { footer, hours } = site;
  return (
    <footer className="border-t border-beige/10 bg-ink px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src={site.logo}
              alt={`${site.nameFull} — logotipo`}
              width={290}
              height={470}
              className="h-16 w-auto"
            />
            <span className="font-jp text-lg text-aka-soft" aria-hidden="true">
              {site.nameJp}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-beige-dim">
            {footer.description}
          </p>
          {footer.social.length > 0 && (
            <div className="mt-6 flex gap-5">
              {footer.social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.7rem] uppercase tracking-[0.2em] text-beige hover:text-cream"
                >
                  {s.name}
                </a>
              ))}
            </div>
          )}
          {/* [PENDIENTE] @redes sociales — se añaden en content/site.ts → footer.social */}
        </div>

        <nav aria-label={site.ui.links}>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-aka-soft">{site.ui.links}</p>
          <ul className="mt-4 space-y-2.5">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-beige transition-colors duration-300 hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-aka-soft">{site.ui.hours}</p>
          <ul className="mt-4 space-y-2.5 text-sm text-beige">
            {hours.schedule.map((row) => (
              <li key={row.label}>
                <span className="text-beige-dim">{row.label}:</span> {row.value}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.7rem] uppercase tracking-[0.3em] text-aka-soft">{site.ui.contact}</p>
          <address className="mt-4 space-y-1 text-sm not-italic text-beige">
            {hours.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-beige/10 pt-6">
        <p className="text-xs tracking-[0.14em] text-beige-dim/70">{footer.copyright}</p>
      </div>
    </footer>
  );
}
