"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSite } from "@/components/LangProvider";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";

export default function Gallery() {
  const site = useSite();
  const { gallery } = site;
  const items = gallery.items;
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) => setOpen((i) => (i == null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  return (
    <section id="galeria" className="scroll-mt-20 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={gallery.kicker} title={gallery.title} align="center" />

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) * 0.06}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Ampliar: ${item.label}`}
                className="group relative block aspect-square w-full overflow-hidden"
              >
                <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110">
                  <ImagePlaceholder label={item.label} kanji={item.kanji} src={item.src} />
                </div>
                <span className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-serif text-left text-sm text-cream">{item.label}</span>
                </span>
                {/* Icono de zoom */}
                <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-cream/40 text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  +
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open != null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={items[open].label}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-2xl text-cream/70 transition-colors hover:text-cream"
            >
              ✕
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              aria-label="Anterior"
              className="absolute left-3 flex h-12 w-12 items-center justify-center text-3xl text-cream/60 transition-colors hover:text-cream md:left-8"
            >
              ‹
            </button>
            <motion.figure
              key={open}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[85vh] w-full max-w-3xl flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden border border-beige/10">
                <ImagePlaceholder label={items[open].label} kanji={items[open].kanji} src={items[open].src} />
              </div>
              <figcaption className="mt-4 flex items-center justify-between text-sm text-beige">
                <span className="font-serif">{items[open].label}</span>
                <span className="text-beige-dim">
                  {open + 1} / {items.length}
                </span>
              </figcaption>
            </motion.figure>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(1); }}
              aria-label="Siguiente"
              className="absolute right-3 flex h-12 w-12 items-center justify-center text-3xl text-cream/60 transition-colors hover:text-cream md:right-8"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
