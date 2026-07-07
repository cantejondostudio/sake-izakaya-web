import { site } from "@/content/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function CraftSection() {
  const { craft } = site;
  return (
    <section id="cocina" className="scroll-mt-20 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={craft.kicker} title={craft.title} intro={craft.intro} />

        <div className="mt-16 grid gap-px bg-beige/10 sm:grid-cols-2 lg:grid-cols-4">
          {craft.blocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 0.08} className="bg-charcoal">
              <div className="group h-full p-8 transition-colors duration-500 hover:bg-wood/60">
                <span
                  className="font-jp block text-5xl text-aka/70 transition-colors duration-500 group-hover:text-aka-soft"
                  aria-hidden="true"
                >
                  {block.kanji}
                </span>
                <h3 className="font-serif mt-6 text-2xl text-cream">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-beige-dim">{block.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
