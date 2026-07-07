import Reveal from "./Reveal";

/** Cabecera editorial de sección: kicker rojo + título serif grande. */
export default function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  dark = false,
}: {
  kicker: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col ${alignCls}`}>
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.45em] text-aka-soft">
        {kicker}
      </p>
      <h2
        className={`font-serif mt-4 max-w-2xl text-4xl leading-[1.1] md:text-5xl ${
          dark ? "text-cream" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-beige-dim">{intro}</p>
      )}
    </Reveal>
  );
}
