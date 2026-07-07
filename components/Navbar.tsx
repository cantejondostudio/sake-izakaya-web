"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: resalta en el menú la sección visible.
  useEffect(() => {
    const ids = site.nav.map((n) => n.href.replace("#", ""));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-beige/10 bg-charcoal/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label={`${site.nameFull} — inicio`}
        >
          <Image
            src={site.logo}
            alt={`${site.nameFull} — logotipo`}
            width={290}
            height={470}
            className="h-11 w-auto"
          />
          <span className="font-jp text-sm text-aka-soft" aria-hidden="true">
            {site.nameJp}
          </span>
        </a>

        {/* Escritorio */}
        <div className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`text-[0.72rem] uppercase tracking-[0.22em] transition-colors duration-300 hover:text-cream ${
                  isActive ? "text-aka-soft" : "text-beige"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#reservar"
            className="border border-aka bg-aka/90 px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:bg-transparent hover:text-aka-soft"
          >
            Reservar mesa
          </a>
        </div>

        {/* Móvil: hamburguesa */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-cream transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-cream transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-beige/10 bg-charcoal/95 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm uppercase tracking-[0.22em] text-beige hover:text-cream"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#reservar"
                onClick={() => setOpen(false)}
                className="mt-3 border border-aka bg-aka/90 px-5 py-3 text-center text-sm uppercase tracking-[0.22em] text-cream"
              >
                Reservar mesa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
