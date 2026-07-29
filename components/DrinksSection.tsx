"use client";

import { useSite } from "@/components/LangProvider";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function DrinksSection() {
  const site = useSite();
  const { drinks } = site;

  return (
    <section id="bebidas" className="scroll-mt-20 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker={drinks.kicker} title={drinks.title} align="center" />

        <Reveal delay={0.05}>
          <p className="mt-4 text-center font-jp text-lg text-aka-soft" aria-hidden="true">
            {drinks.jp}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-beige-dim">
            {drinks.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-2">
          {drinks.categories.map((cat, i) => (
            <Reveal key={cat.name} delay={0.04 * (i % 4)}>
              <div>
                <h3 className="flex items-baseline gap-3 border-b border-beige/10 pb-3 font-serif text-xl text-cream">
                  {"jp" in cat && cat.jp ? (
                    <span className="font-jp text-sm text-aka-soft" aria-hidden="true">
                      {cat.jp}
                    </span>
                  ) : null}
                  {cat.name}
                </h3>
                <ul className="mt-4 space-y-3">
                  {cat.items.map((it) => (
                    <li key={it.name} className="flex items-baseline gap-3 text-sm">
                      <span className="text-beige">{it.name}</span>
                      <span className="hidden flex-1 translate-y-[-4px] border-b border-dotted border-beige/15 sm:block" />
                      <span className="shrink-0 font-serif text-beige-dim">{it.price} €</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
