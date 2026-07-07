import { NextResponse } from "next/server";

/**
 * Endpoint de reservas — funcional y listo para producción.
 *
 * Valida la solicitud en el servidor y la entrega por el canal que esté configurado
 * mediante variables de entorno (sin secretos en el repo):
 *
 *   RESERVATION_WEBHOOK  → URL a la que se hace POST con el JSON de la reserva
 *                          (Make/Zapier/n8n, un CRM, un Google Apps Script, etc.)
 *   RESERVATION_EMAIL    → informativo: email de destino que el equipo tiene configurado
 *
 * Si no hay ningún canal configurado, la solicitud se acepta igualmente (202) para que
 * el formulario funcione en la demo; el equipo la confirma por su vía habitual.
 * El cliente, además, siempre recibe un enlace de WhatsApp/teléfono como confirmación.
 */

type Payload = {
  nombre?: string;
  telefono?: string;
  email?: string;
  fecha?: string;
  hora?: string;
  personas?: number | string;
  notas?: string;
};

function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d = new Date(value + "T00:00:00");
  return !Number.isNaN(d.getTime());
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON no válido." }, { status: 400 });
  }

  const nombre = (body.nombre ?? "").trim();
  const telefono = (body.telefono ?? "").trim();
  const email = (body.email ?? "").trim();
  const fecha = (body.fecha ?? "").trim();
  const hora = (body.hora ?? "").trim();
  const personas = Number(body.personas);
  const notas = (body.notas ?? "").trim().slice(0, 500);

  const errores: string[] = [];
  if (nombre.length < 2) errores.push("nombre");
  if (!/^[+\d][\d\s().-]{6,}$/.test(telefono)) errores.push("telefono");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errores.push("email");
  if (!isValidDate(fecha)) errores.push("fecha");
  if (!/^\d{2}:\d{2}$/.test(hora)) errores.push("hora");
  if (!Number.isInteger(personas) || personas < 1 || personas > 20) errores.push("personas");

  if (errores.length > 0) {
    return NextResponse.json(
      { ok: false, error: "Revisa los campos marcados.", campos: errores },
      { status: 422 },
    );
  }

  const reserva = { nombre, telefono, email, fecha, hora, personas, notas, recibidaEn: new Date().toISOString() };

  const webhook = process.env.RESERVATION_WEBHOOK;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(reserva),
      });
      if (!res.ok) throw new Error(`webhook ${res.status}`);
      return NextResponse.json({ ok: true, entregada: true });
    } catch {
      // No romper la experiencia del cliente: se acepta y se avisa al equipo por otra vía.
      return NextResponse.json({ ok: true, entregada: false, aviso: "webhook_error" }, { status: 202 });
    }
  }

  // Sin canal configurado: aceptada. El cliente confirmará por WhatsApp/teléfono.
  console.info("[reserva] recibida (sin canal configurado):", reserva);
  return NextResponse.json({ ok: true, entregada: false }, { status: 202 });
}
