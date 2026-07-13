"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { site } from "@/content/site";

/**
 * Reserva acorde con la estética de la web: un botón de marca que abre el motor
 * de CoverManager en un modal oscuro y enmarcado (en vez del iframe blanco fijo).
 * El overlay se renderiza con un portal a <body> para que `position: fixed` se
 * ancle a la pantalla completa (si no, un ancestro con `transform` —Reveal— lo
 * atraparía). Sin animaciones JS: siempre visible al abrir.
 */
export default function ReservationModal() {
  const { reservation } = site;
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-aka px-11 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-cream shadow-lg shadow-aka/20 transition-all duration-300 hover:opacity-90 hover:shadow-aka/30"
      >
        Reservar mesa
      </button>
      <p className="mt-5 text-[0.68rem] uppercase tracking-[0.22em] text-beige-dim/70">
        Disponibilidad en tiempo real · CoverManager
      </p>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Reservar mesa"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center text-2xl text-cream/70 transition-colors hover:text-cream"
            >
              ✕
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl overflow-hidden rounded-2xl border border-beige/15 bg-cream shadow-2xl"
            >
              <iframe
                src={reservation.url}
                title="Reservas · CoverManager"
                className="h-[76vh] max-h-[780px] w-full"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
