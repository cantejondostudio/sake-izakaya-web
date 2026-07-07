import { site } from "@/content/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";

export default function ChefSelection() {
  const { chefSelection } = site;
  return (
    <section id="seleccion" className="texture-paper scroll-mt-20 bg-ink px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={chefSelection.kicker}
          title={chefSelection.title}
          intro={chefSelection.intro}
          align="center"
        />

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {chefSelection.dishes.map((dish, i) => (
            <Reveal key={dish.name} delay={(i % 4) * 0.08}>
              <article className="group">
                <div className="aspect-square overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                    <ImagePlaceholder label={dish.imageLabel} kanji={dish.jp.slice(0, 1)} src={dish.src} />
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl text-cream">{dish.name}</h3>
                  <span className="font-jp shrink-0 text-sm text-aka-soft" aria-hidden="true">
                    {dish.jp}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-beige-dim">{dish.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <a
            href="#carta"
            className="inline-block border border-beige/40 px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.25em] text-beige transition-all duration-300 hover:border-cream hover:text-cream"
          >
            {chefSelection.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
