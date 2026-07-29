"use client";

import { useSite } from "@/components/LangProvider";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";

export default function StorySection() {
  const site = useSite();
  const { story } = site;
  return (
    <section id="historia" className="scroll-mt-20 px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading kicker={story.kicker} title={story.title} />
          <Reveal delay={0.15}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-beige">
              {story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <a
              href="#experiencia"
              className="mt-10 inline-block border-b border-aka pb-1 text-[0.72rem] uppercase tracking-[0.25em] text-cream transition-colors duration-300 hover:border-cream hover:text-aka-soft"
            >
              {story.cta} →
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden">
            <ImagePlaceholder label={story.imageLabel} kanji="匠" src={story.image} />
          </div>
          {/* Marco descentrado, detalle editorial */}
          <div
            className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-aka/40"
            aria-hidden="true"
          />
        </Reveal>
      </div>
    </section>
  );
}
