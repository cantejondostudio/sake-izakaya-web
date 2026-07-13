import { site } from "@/content/site";
import Reveal from "./ui/Reveal";
import ReservationModal from "./ReservationModal";

/**
 * Cierre potente de reservas.
 * Motor de reservas real incrustado (CoverManager) desde `reservation.url`.
 * Cambiando esa URL se puede apuntar a otro proveedor sin tocar el componente.
 */
export default function ReservationCTA() {
  const { reservation } = site;
  return (
    <section
      id="reservar"
      className="texture-paper relative scroll-mt-20 overflow-hidden bg-wood px-6 py-32 md:py-44"
    >
      <div className="glow-lantern absolute inset-0" aria-hidden="true" />
      <span
        className="font-jp absolute left-[4%] top-1/2 hidden -translate-y-1/2 select-none text-[10rem] leading-[1.05] text-beige/[0.06] lg:block"
        style={{ writingMode: "vertical-rl", height: "max-content" }}
        aria-hidden="true"
      >
        乾杯
      </span>

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.45em] text-aka-soft">
          {reservation.kicker}
        </p>
        <h2 className="font-serif mt-5 text-5xl leading-[1.05] text-cream md:text-6xl">
          {reservation.title}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-beige md:text-lg">
          {reservation.text}
        </p>
        <div className="mt-12 flex flex-col items-center">
          <ReservationModal />
        </div>
      </Reveal>
    </section>
  );
}
