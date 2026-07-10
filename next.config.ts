import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática para Cloudflare Pages (HTML/CSS/JS + assets en /out).
  // Las reservas se sirven con una Cloudflare Pages Function (functions/api/reserva.ts).
  output: "export",
  // El optimizador de imágenes de Next requiere servidor; en estático se sirven tal cual.
  images: { unoptimized: true },
};

export default nextConfig;
