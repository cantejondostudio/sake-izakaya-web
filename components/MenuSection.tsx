"use client";

import { useSite } from "@/components/LangProvider";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function MenuSection() {
  const site = useSite();
  const { menu } = site;

  return (
    <section id="carta" className="scroll-mt-20 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-3xl">
        <SectionHeading kicker={menu.kicker} title={menu.title} align="center" />

        {/* Subtítulo: japonés + temporada */}
        <Reveal delay={0.05}>
          <div className="mt-4 flex flex-col items-center gap-2 text-center">
            <p className="font-jp text-lg text-aka-soft" aria-hidden="true">
              {menu.jp}
            </p>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-beige-dim">{menu.season}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-beige-dim">
            {menu.intro}
          </p>
        </Reveal>

        {/* Los pases del omakase, en orden */}
        <ol className="mt-14 divide-y divide-beige/10 border-y border-beige/10">
          {menu.courses.map((c, i) => (
            <Reveal key={c.romaji} delay={0.04 * (i % 8)}>
              <li className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-5 py-5 sm:grid-cols-[9rem_1fr]">
                {/* Pase: kanji + romaji */}
                <div className="flex items-baseline gap-3">
                  <span className="font-jp text-xl leading-none text-aka-soft" aria-hidden="true">
                    {c.jp}
                  </span>
                  <span className="hidden font-serif text-lg text-cream sm:inline">{c.romaji}</span>
                </div>
                {/* Plato + rol */}
                <div className="min-w-0">
                  <p className="font-serif text-lg leading-snug text-cream">{c.dish}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-beige-dim">
                    <span className="sm:hidden">{c.romaji} · </span>
                    {c.role}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* Precio, condiciones y llamada a reservar */}
        <Reveal className="mt-12 flex flex-col items-center gap-6 text-center">
          <div>
            <span className="font-serif text-5xl text-cream">
              {menu.price} {menu.currency}
            </span>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.25em] text-beige-dim">
              {menu.priceUnit}
            </p>
          </div>
          <ul className="space-y-1.5 text-[0.72rem] uppercase tracking-[0.16em] text-beige-dim/70">
            {menu.conditions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <a
            href="#reservar"
            className="mt-1 bg-aka px-9 py-3.5 text-[0.72rem] uppercase tracking-[0.25em] text-cream transition-opacity duration-300 hover:opacity-90"
          >
            {menu.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
