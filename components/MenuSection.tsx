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

        {/* Subtítulo japonés */}
        <Reveal delay={0.05}>
          <p className="mt-4 text-center font-jp text-lg text-aka-soft" aria-hidden="true">
            {menu.jp}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-beige-dim">
            {menu.intro}
          </p>
        </Reveal>

        {/* Secciones de la carta */}
        <div className="mt-16 space-y-14">
          {menu.categories.map((cat, ci) => (
            <Reveal key={cat.name} delay={0.03 * (ci % 5)}>
              <div>
                {/* Cabecera de sección: kanji + romaji + traducción */}
                <div className="flex items-baseline gap-3 border-b border-beige/15 pb-3">
                  <span className="font-jp text-xl leading-none text-aka-soft" aria-hidden="true">
                    {cat.jp}
                  </span>
                  <h3 className="font-serif text-2xl text-cream">{cat.name}</h3>
                  <span className="text-[0.68rem] uppercase tracking-[0.22em] text-beige-dim">
                    {cat.tag}
                  </span>
                </div>

                {/* Platos */}
                <ul className="mt-5 space-y-4">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline gap-4"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-serif text-lg leading-snug text-cream">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-sm leading-snug text-beige-dim">
                          {item.desc}
                        </p>
                      </div>
                      {/* Línea de puntos + precio */}
                      <span
                        className="mb-1 hidden flex-1 self-end border-b border-dotted border-beige/20 sm:block"
                        aria-hidden="true"
                      />
                      <span className="shrink-0 whitespace-nowrap font-serif text-lg text-aka-soft">
                        {item.price}
                        {/^[0-9]/.test(item.price) ? " €" : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Nota + llamada a reservar */}
        <Reveal className="mt-14 flex flex-col items-center gap-6 text-center">
          <p className="max-w-lg text-[0.72rem] uppercase tracking-[0.16em] text-beige-dim/70">
            {menu.note}
          </p>
          <a
            href="#reservar"
            className="bg-aka px-9 py-3.5 text-[0.72rem] uppercase tracking-[0.25em] text-cream transition-opacity duration-300 hover:opacity-90"
          >
            {menu.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
