import { site } from "@/content/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Reviews() {
  const { reviews } = site;
  return (
    <section id="resenas" className="texture-paper scroll-mt-20 bg-ink px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={reviews.kicker} title={reviews.title} align="center" />
        <Reveal delay={0.1} className="mt-3 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-beige-dim/70">{reviews.note}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.items.map((review, i) => (
            <Reveal key={i} delay={(i % 2) * 0.1}>
              <blockquote className="relative h-full border border-beige/10 bg-charcoal p-8 pt-12 transition-colors duration-500 hover:border-beige/25">
                <span
                  className="font-serif absolute left-6 top-2 select-none text-7xl leading-none text-aka/50"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="font-serif text-lg leading-relaxed text-beige">{review.text}</p>
                <footer className="mt-5 text-[0.7rem] uppercase tracking-[0.22em] text-beige-dim">
                  — {review.author}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
