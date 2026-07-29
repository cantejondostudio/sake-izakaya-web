"use client";

import { useSite } from "@/components/LangProvider";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";

export default function ExperienceSection() {
  const site = useSite();
  const { experience } = site;
  return (
    <section id="experiencia" className="texture-paper scroll-mt-20 bg-wood/40 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={experience.kicker} title={experience.title} align="center" />
        <Reveal delay={0.1} className="mx-auto mt-6 max-w-2xl text-center">
          <p className="font-serif text-xl leading-relaxed text-beige md:text-2xl">
            {experience.text}
          </p>
        </Reveal>

        {/* Mosaico: alturas alternas para ritmo editorial */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {experience.tiles.map((tile, i) => (
            <Reveal key={tile.title} delay={i * 0.08} className={i % 2 === 1 ? "lg:mt-10" : ""}>
              <figure className="group">
                <div className="aspect-[3/4] overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                    <ImagePlaceholder label={tile.imageLabel} kanji={tile.jp.slice(0, 1)} src={tile.src} />
                  </div>
                </div>
                <figcaption className="mt-4">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif text-lg text-cream">{tile.title}</h3>
                    <span className="font-jp text-xs text-aka-soft" aria-hidden="true">
                      {tile.jp}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-beige-dim">{tile.desc}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
