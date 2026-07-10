/**
 * Cloudflare Pages Function — endpoint de reservas (POST /api/reserva).
 *
 * Equivalente edge de la antigua ruta Next. Valida la solicitud y la entrega por el
 * canal configurado con variables de entorno (en el panel de Cloudflare Pages):
 *
 *   RESERVATION_WEBHOOK → URL a la que se hace POST con el JSON de la reserva
 *                         (Make / Zapier / n8n / CRM / Google Apps Script…)
 *   RESERVATION_EMAIL   → informativo (email de destino del equipo)
 *
 * Sin canal configurado, la reserva se acepta igualmente (202); el equipo confirma
 * por su vía habitual y el cliente recibe además el enlace de WhatsApp/teléfono.
 */

interface Env {
  RESERVATION_WEBHOOK?: string;
  RESERVATION_EMAIL?: string;
}

type Payload = {
  nombre?: string;
  telefono?: string;
  email?: string;
  fecha?: string;
  hora?: string;
  personas?: number | string;
  notas?: string;
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d = new Date(value + "T00:00:00");
  return !Number.isNaN(d.getTime());
}

export const onRequestPost = async (context: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const { request, env } = context;

  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "JSON no válido." }, 400);
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
    return json({ ok: false, error: "Revisa los campos marcados.", campos: errores }, 422);
  }

  const reserva = {
    nombre,
    telefono,
    email,
    fecha,
    hora,
    personas,
    notas,
    recibidaEn: new Date().toISOString(),
  };

  const webhook = env.RESERVATION_WEBHOOK;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(reserva),
      });
      if (!res.ok) throw new Error(`webhook ${res.status}`);
      return json({ ok: true, entregada: true });
    } catch {
      return json({ ok: true, entregada: false, aviso: "webhook_error" }, 202);
    }
  }

  return json({ ok: true, entregada: false }, 202);
};
