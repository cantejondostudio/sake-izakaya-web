"use client";

import { useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";

type Fields = {
  nombre: string;
  telefono: string;
  email: string;
  fecha: string;
  servicio: string;
  hora: string;
  personas: string;
  notas: string;
};

const empty: Fields = {
  nombre: "",
  telefono: "",
  email: "",
  fecha: "",
  servicio: site.reservation.services[0]?.label ?? "",
  hora: "",
  personas: "2",
  notas: "",
};

function todayISO() {
  const d = new Date();
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
}

const inputCls =
  "w-full border border-beige/20 bg-charcoal/60 px-4 py-3 text-sm text-cream placeholder:text-beige-dim/50 outline-none transition-colors duration-300 focus:border-aka-soft";
const labelCls = "mb-1.5 block text-[0.68rem] uppercase tracking-[0.2em] text-beige-dim";

export default function ReservationForm() {
  const { reservation } = site;
  const [f, setF] = useState<Fields>(empty);
  const [errs, setErrs] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [serverMsg, setServerMsg] = useState<string>("");

  const slots = useMemo(
    () => reservation.services.find((s) => s.label === f.servicio)?.slots ?? [],
    [f.servicio, reservation.services],
  );

  const set = (k: keyof Fields, v: string) => {
    setF((prev) => {
      const next = { ...prev, [k]: v };
      if (k === "servicio") next.hora = ""; // resetea hora al cambiar de servicio
      return next;
    });
    setErrs((e) => ({ ...e, [k]: false }));
  };

  function validate(): boolean {
    const e: Record<string, boolean> = {};
    if (f.nombre.trim().length < 2) e.nombre = true;
    if (!/^[+\d][\d\s().-]{6,}$/.test(f.telefono.trim())) e.telefono = true;
    if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = true;
    if (!f.fecha || f.fecha < todayISO()) e.fecha = true;
    if (!f.hora) e.hora = true;
    const p = Number(f.personas);
    if (!Number.isInteger(p) || p < 1) e.personas = true;
    setErrs(e);
    return Object.keys(e).length === 0;
  }

  const waHref = useMemo(() => {
    if (!reservation.whatsappNumber) return null;
    const msg =
      `Hola, quiero reservar en Sake Izakaya:\n` +
      `• Nombre: ${f.nombre}\n• Personas: ${f.personas}\n` +
      `• Fecha: ${f.fecha}  ${f.hora} (${f.servicio})\n` +
      `• Teléfono: ${f.telefono}` +
      (f.notas ? `\n• Notas: ${f.notas}` : "");
    return `https://wa.me/${reservation.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }, [f, reservation.whatsappNumber]);

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/reserva", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          nombre: f.nombre,
          telefono: f.telefono,
          email: f.email,
          fecha: f.fecha,
          hora: f.hora,
          personas: Number(f.personas),
          notas: f.notas ? `[${f.servicio}] ${f.notas}` : `[${f.servicio}]`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("done");
      } else {
        setServerMsg(data?.error ?? "No se pudo enviar. Inténtalo de nuevo.");
        setStatus("error");
      }
    } catch {
      setServerMsg("Sin conexión con el servidor. Inténtalo de nuevo.");
      setStatus("error");
    }
  }

  const partyOptions = Array.from({ length: reservation.maxParty }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-xl">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-aka/40 bg-charcoal/70 p-8 text-center"
          >
            <p className="font-jp text-3xl text-aka-soft" aria-hidden="true">
              ありがとう
            </p>
            <h3 className="font-serif mt-3 text-2xl text-cream">Solicitud recibida</h3>
            <p className="mt-3 text-sm leading-relaxed text-beige">
              Gracias, {f.nombre.split(" ")[0]}. Hemos recibido tu solicitud para{" "}
              <strong className="text-cream">{f.personas}</strong> el{" "}
              <strong className="text-cream">
                {f.fecha} a las {f.hora}
              </strong>{" "}
              ({f.servicio.toLowerCase()}). Te confirmaremos en breve.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3">
              {waHref && (
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-aka bg-aka px-7 py-3 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:bg-transparent hover:text-aka-soft"
                >
                  Confirmar por WhatsApp
                </a>
              )}
              <a
                href={reservation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.72rem] uppercase tracking-[0.2em] text-beige-dim underline underline-offset-4 hover:text-cream"
              >
                o reservar por Google
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={onSubmit}
            noValidate
            className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2"
          >
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="r-nombre">
                Nombre*
              </label>
              <input
                id="r-nombre"
                className={inputCls}
                value={f.nombre}
                onChange={(e) => set("nombre", e.target.value)}
                aria-invalid={!!errs.nombre}
                autoComplete="name"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className={labelCls} htmlFor="r-tel">
                Teléfono*
              </label>
              <input
                id="r-tel"
                className={inputCls}
                value={f.telefono}
                onChange={(e) => set("telefono", e.target.value)}
                aria-invalid={!!errs.telefono}
                inputMode="tel"
                autoComplete="tel"
                placeholder="+34 …"
              />
            </div>

            <div>
              <label className={labelCls} htmlFor="r-email">
                Email <span className="normal-case text-beige-dim/60">(opcional)</span>
              </label>
              <input
                id="r-email"
                className={inputCls}
                value={f.email}
                onChange={(e) => set("email", e.target.value)}
                aria-invalid={!!errs.email}
                inputMode="email"
                autoComplete="email"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className={labelCls} htmlFor="r-personas">
                Comensales*
              </label>
              <select
                id="r-personas"
                className={inputCls}
                value={f.personas}
                onChange={(e) => set("personas", e.target.value)}
              >
                {partyOptions.map((n) => (
                  <option key={n} value={String(n)} className="bg-charcoal">
                    {n} {n === 1 ? "persona" : "personas"}
                  </option>
                ))}
                <option value={String(reservation.maxParty + 1)} className="bg-charcoal">
                  Más de {reservation.maxParty} (te llamamos)
                </option>
              </select>
            </div>

            <div>
              <label className={labelCls} htmlFor="r-fecha">
                Fecha*
              </label>
              <input
                id="r-fecha"
                type="date"
                min={todayISO()}
                className={`${inputCls} [color-scheme:dark]`}
                value={f.fecha}
                onChange={(e) => set("fecha", e.target.value)}
                aria-invalid={!!errs.fecha}
              />
            </div>

            <div className="sm:col-span-2">
              <span className={labelCls}>Servicio*</span>
              <div className="flex gap-2">
                {reservation.services.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => set("servicio", s.label)}
                    className={`flex-1 border px-4 py-2.5 text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-300 ${
                      f.servicio === s.label
                        ? "border-aka bg-aka/20 text-cream"
                        : "border-beige/20 text-beige-dim hover:border-beige/40"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="sm:col-span-2">
              <span className={labelCls}>Hora*</span>
              <div className="flex flex-wrap gap-2" role="group" aria-invalid={!!errs.hora}>
                {slots.map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => set("hora", h)}
                    className={`border px-3.5 py-2 text-sm tracking-wide transition-colors duration-300 ${
                      f.hora === h
                        ? "border-aka bg-aka/20 text-cream"
                        : "border-beige/20 text-beige hover:border-beige/40"
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>
              {errs.hora && (
                <p className="mt-1.5 text-xs text-aka-soft">Elige una hora.</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="r-notas">
                Notas <span className="normal-case text-beige-dim/60">(alergias, ocasión…)</span>
              </label>
              <textarea
                id="r-notas"
                rows={2}
                className={`${inputCls} resize-none`}
                value={f.notas}
                onChange={(e) => set("notas", e.target.value)}
                placeholder="Cuéntanos lo que necesitemos saber"
              />
            </div>

            {status === "error" && (
              <p className="sm:col-span-2 text-sm text-aka-soft">{serverMsg}</p>
            )}
            {Object.keys(errs).length > 0 && status !== "error" && (
              <p className="sm:col-span-2 text-sm text-aka-soft">
                Revisa los campos marcados en rojo.
              </p>
            )}

            <div className="sm:col-span-2 mt-2 flex flex-col items-center gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full border border-aka bg-aka px-8 py-4 text-[0.75rem] uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:bg-transparent hover:text-aka-soft disabled:opacity-60 sm:w-auto sm:px-14"
              >
                {status === "sending" ? "Enviando…" : "Solicitar reserva"}
              </button>
              <a
                href={reservation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.72rem] uppercase tracking-[0.2em] text-beige-dim underline underline-offset-4 hover:text-cream"
              >
                o reservar directamente por Google
              </a>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      <p className="mt-5 text-center text-xs leading-relaxed text-beige-dim/70">
        Recibirás confirmación por teléfono. Solo 24 plazas por servicio.
      </p>
    </div>
  );
}
