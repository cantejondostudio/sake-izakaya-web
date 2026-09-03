// Postbuild: corrige el atributo lang del HTML exportado de la ruta inglesa.
// El layout raíz es compartido y renderiza <html lang="es"> para ambas rutas;
// aquí forzamos lang="en" en el HTML estático de /en para que los buscadores
// lo lean correctamente desde el propio HTML (sin depender del JS de cliente).
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const target = "out/en.html";

if (!existsSync(target)) {
  console.warn(`[fix-en-lang] no encontrado ${target}; nada que corregir.`);
  process.exit(0);
}

const html = readFileSync(target, "utf8");
const fixed = html.replace(/<html lang="es"/, '<html lang="en"');

if (fixed === html) {
  console.warn(`[fix-en-lang] no se encontró <html lang="es"> en ${target}.`);
} else {
  writeFileSync(target, fixed);
  console.log(`[fix-en-lang] ${target} → <html lang="en"> ✓`);
}
