"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/content/site";

/**
 * Hero a pantalla completa.
 * [PENDIENTE FOTO/VÍDEO] Cuando exista el banco editado, sustituir el fondo
 * generado (madera + luz de farolillo) por <video> o imagen de barra/platos:
 * basta con añadir un <img|video className="absolute inset-0 h-full w-full
 * object-cover"> como primer hijo del <div> de fondo.
 */
export default function Hero() {
  return (
    <section id="inicio" aria-label="Portada" className="relative flex min-h-svh items-center justify-center overflow-hidden">
      {/* Fondo: vídeo real (escritorio) sobre fotografía de póster/fallback (móvil), + capas cálidas */}
      <div className="absolute inset-0" aria-hidden="true">
        {site.hero.image || site.hero.video ? (
          <div className="absolute inset-[-6%]">
            {/* Póster/fallback: se ve al instante y es el fondo en móvil (sin descargar el vídeo) */}
            {site.hero.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={site.hero.image} alt="" className="animate-kenburns h-full w-full object-cover" />
            )}
            {/* Vídeo de fondo, solo en escritorio (md+) para no cargar 8,8 MB en móvil */}
            {site.hero.video && (
              <video
                className="absolute inset-0 hidden h-full w-full object-cover md:block"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={site.hero.poster ?? site.hero.image}
              >
                <source src={site.hero.video} type="video/mp4" />
              </video>
            )}
            {/* Oscurecido general + viñeta radial para que el logo destaque */}
            <div className="absolute inset-0 bg-ink/55" />
            <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_42%,transparent,rgba(12,10,8,0.72))]" />
          </div>
        ) : (
          <div className="texture-paper animate-kenburns absolute inset-[-6%] bg-gradient-to-b from-ink via-wood to-charcoal" />
        )}
        <div className="glow-lantern absolute inset-0" />
        {/* Farolillos: dos halos de luz cálida */}
        <div className="absolute left-[12%] top-[18%] h-40 w-40 rounded-full bg-aka/10 blur-3xl" />
        <div className="absolute right-[15%] top-[30%] h-56 w-56 rounded-full bg-wood-glow/30 blur-3xl" />
        {/* Kanji decorativo vertical */}
        <span
          className="font-jp absolute right-[6%] top-1/2 hidden -translate-y-1/2 select-none text-[10rem] leading-[1.05] text-beige/[0.05] md:block"
          style={{ writingMode: "vertical-rl", height: "max-content" }}
        >
          居酒屋
        </span>
        {/* Degradado inferior hacia la siguiente sección */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-charcoal" />
      </div>

      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center px-6 text-center"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } } }}
      >
        {[
          <p key="kicker" className="text-[0.7rem] font-medium uppercase tracking-[0.5em] text-beige-dim">
            {site.hero.kicker}
          </p>,
          <h1 key="title" className="mt-8 flex justify-center">
            <Image
              src={site.logo}
              alt={`${site.nameFull} — logotipo`}
              width={290}
              height={470}
              priority
              className="h-44 w-auto md:h-56"
            />
          </h1>,
          <p key="jp" className="font-jp mt-4 text-lg tracking-[0.3em] text-aka-soft" aria-hidden="true">
            {site.hero.subtitleJp}
          </p>,
          <p key="text" className="mt-8 max-w-xl text-base leading-relaxed text-beige md:text-lg">
            {site.hero.text}
          </p>,
          <div key="ctas" className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#reservar"
              className="border border-aka bg-aka/90 px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.25em] text-cream transition-all duration-300 hover:bg-transparent hover:text-aka-soft"
            >
              {site.hero.ctaPrimary}
            </a>
            <a
              href="#carta"
              className="border border-beige/40 px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.25em] text-beige transition-all duration-300 hover:border-cream hover:text-cream"
            >
              {site.hero.ctaSecondary}
            </a>
          </div>,
        ].map((node, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {node}
          </motion.div>
        ))}
      </motion.div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2" aria-hidden="true">
        <div className="flex h-14 w-px justify-center overflow-hidden bg-beige/15">
          <span className="animate-scrollhint block h-6 w-px bg-beige/70" />
        </div>
      </div>
    </section>
  );
}
