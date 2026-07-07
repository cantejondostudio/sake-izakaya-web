"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

function formatPrice(price: number | null, currency: string) {
  if (price == null) return "—";
  return `${price.toFixed(2)} ${currency}`;
}

export default function MenuSection() {
  const { menu } = site;
  const [active, setActive] = useState(menu.categories[0]?.id ?? "");
  const current = menu.categories.find((c) => c.id === active) ?? menu.categories[0];

  return (
    <section id="carta" className="scroll-mt-20 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker={menu.kicker} title={menu.title} intro={menu.intro} align="center" />

        {/* Pestañas de categoría */}
        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Categorías de la carta"
            className="mt-12 flex flex-wrap justify-center gap-2 border-b border-beige/10 pb-4"
          >
            {menu.categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                onClick={() => setActive(cat.id)}
                className={`group flex items-center gap-2 px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  active === cat.id ? "text-cream" : "text-beige-dim hover:text-beige"
                }`}
              >
                <span className="font-jp text-sm text-aka-soft" aria-hidden="true">
                  {cat.jp}
                </span>
                {cat.name}
                <span
                  className={`block h-px bg-aka transition-all duration-300 ${
                    active === cat.id ? "w-5" : "w-0 group-hover:w-3"
                  }`}
                />
              </button>
            ))}
          </div>
        </Reveal>

        {/* Platos de la categoría activa. Keyed por id: al cambiar de pestaña React
            desmonta la lista anterior y monta la nueva, que anima su entrada. */}
        <motion.ul
            key={current.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 divide-y divide-beige/10"
          >
            {current.items.map((item) => (
              <li key={item.name} className="flex items-baseline gap-4 py-5">
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif text-xl text-cream">{item.name}</h3>
                    <span className="font-jp text-sm text-aka-soft" aria-hidden="true">
                      {item.jp}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-beige-dim">{item.desc}</p>
                </div>
                {/* Línea de puntos hasta el precio, estilo carta editorial */}
                <span className="hidden flex-1 translate-y-[-3px] border-b border-dotted border-beige/20 sm:block" />
                <span className="shrink-0 font-serif text-lg text-beige">
                  {formatPrice(item.price, menu.currency)}
                </span>
              </li>
            ))}
          </motion.ul>

        <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
          {menu.pdfUrl && (
            <a
              href={menu.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-beige/40 px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.25em] text-beige transition-all duration-300 hover:border-cream hover:text-cream"
            >
              {menu.pdfCta}
            </a>
          )}
          <p className="text-xs uppercase tracking-[0.16em] text-beige-dim/60">{menu.priceNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
