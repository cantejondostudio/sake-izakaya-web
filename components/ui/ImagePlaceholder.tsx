/**
 * Placeholder de fotografía.
 *
 * El banco audiovisual real está pendiente de edición. Mientras tanto,
 * este componente pinta una superficie cálida (madera + luz de farolillo
 * + grano de papel) con un kanji y la descripción de la foto prevista.
 *
 * Para poner la foto real: pasa `src` y el componente renderiza la imagen
 * con el mismo encuadre (object-cover) y el alt ya escrito.
 */
export default function ImagePlaceholder({
  label,
  kanji = "酒",
  src,
  className = "",
}: {
  label: string;
  kanji?: string;
  src?: string;
  className?: string;
}) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={label}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Fotografía pendiente: ${label}`}
      className={`texture-paper relative flex h-full w-full items-end overflow-hidden bg-gradient-to-br from-wood-light via-wood to-ink ${className}`}
    >
      <div className="glow-lantern absolute inset-0" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="font-jp absolute right-3 top-2 select-none text-5xl leading-none text-beige/[0.13]"
      >
        {kanji}
      </span>
      <span className="relative m-4 border-l-2 border-aka pl-3 text-[0.65rem] uppercase tracking-[0.18em] text-beige-dim">
        Foto · {label}
      </span>
    </div>
  );
}
