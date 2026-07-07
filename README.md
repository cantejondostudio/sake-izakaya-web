# Sake Izakaya — Web premium

Web de restaurante premium para **Sake Izakaya** (taberna japonesa, Centro Histórico de Málaga).
Estética izakaya de alto nivel: negro carbón, madera oscura, beige cálido, rojo japonés sutil,
tipografía serif + sans, caracteres japoneses decorativos, texturas de papel y luz de farolillo,
y animaciones suaves de scroll.

Stack: **Next.js 16 (App Router) · Tailwind CSS v4 · Framer Motion · TypeScript**.

---

## Arrancar en local

```bash
npm install
npm run dev        # http://localhost:3000
```

Producción:

```bash
npm run build && npm start
```

La home se prerenderiza estática; la reserva usa una ruta serverless (`/api/reserva`).
Despliegue directo en **Vercel** sin configuración, igual que el dashboard del proyecto.

---

## Funcionalidades (esto ya funciona)

- **Formulario de reserva operativo** (`components/ReservationForm.tsx`): nombre, teléfono,
  email, comensales, fecha (con mínimo hoy), servicio Comida/Cena y franja horaria. Validación
  en cliente **y** en servidor. Al enviar hace `POST /api/reserva` y muestra pantalla de
  confirmación. Si hay número de WhatsApp configurado, ofrece un botón de confirmación con el
  mensaje ya redactado; siempre queda como alternativa la reserva por Google.
- **Endpoint de reservas** (`app/api/reserva/route.ts`): valida los datos y entrega la reserva
  por el canal configurado con variables de entorno (ver `.env.example`). Sin configurar,
  acepta la solicitud (202) para que la demo funcione.
- **Carta navegable** (`components/MenuSection.tsx`): pestañas por categoría (Para empezar,
  Sushi & Sashimi, Ramen, Platos izakaya, Sake & Cocktails) con transición. Precios y platos
  editables; botón de "Descargar carta (PDF)" listo.
- **Galería con lightbox** (`components/Gallery.tsx`): clic para ampliar, navegación
  anterior/siguiente, teclado (← → Esc) y bloqueo de scroll de fondo.
- **Navegación con scroll-spy**: el menú resalta la sección visible; header fijo, menú
  hamburguesa en móvil, botón "volver arriba".
- **Teléfono y email** se vuelven enlaces `tel:` / `mailto:` en cuanto se rellenan (hoy
  aparecen como `[PENDIENTE]`).

### Variables de entorno (opcionales)

Copia `.env.example` a `.env.local`. Con `RESERVATION_WEBHOOK` (URL de Make/Zapier/n8n/CRM…),
cada reserva se reenvía automáticamente. Sin nada configurado, el formulario sigue funcionando.

---

## Estructura

```
app/
  layout.tsx        → fuentes, metadatos SEO, JSON-LD (Restaurant)
  page.tsx          → composición de la landing (orden de secciones)
  globals.css       → tokens de color, texturas (papel/farolillo), keyframes
  api/reserva/route.ts → endpoint de reservas (valida + entrega)
components/
  Navbar.tsx        → header fijo + hamburguesa + scroll-spy
  Hero.tsx          → portada con logo, kanji de fondo e indicador de scroll
  StorySection.tsx  → "Nuestra historia"
  ChefSelection.tsx → "Selección del chef" (8 platos)
  MenuSection.tsx   → "Nuestra carta" (pestañas por categoría)
  CraftSection.tsx  → "Nuestra cocina" (4 bloques)
  ExperienceSection → "La experiencia" (mosaico)
  Gallery.tsx       → grid + lightbox funcional
  Reviews.tsx       → testimonios (placeholders marcados)
  HoursLocation.tsx → horarios, contacto y Google Maps embebido
  ReservationCTA.tsx→ cierre de reservas + formulario
  ReservationForm.tsx → formulario funcional (validación + envío)
  Footer.tsx        → logo, enlaces, horarios, contacto, redes
  ui/
    Reveal.tsx          → scroll-reveal reutilizable (Framer Motion)
    SectionHeading.tsx  → cabecera editorial de sección
    ImagePlaceholder.tsx→ marcador de foto (acepta `src` real)
    BackToTop.tsx       → botón volver arriba
content/
  site.ts           → TODO el texto, la carta y los enlaces, en un solo archivo
public/brand/       → logotipo oficial (versión beige para fondo oscuro y roja)
```

---

## Editar contenido

Todo el texto vive en **`content/site.ts`** (nombre, ciudad, platos, carta, textos, horarios,
enlaces, franjas de reserva). Cambiar la web no requiere tocar componentes.

### Fotografías

Los huecos de imagen usan `<ImagePlaceholder>` mientras el banco audiovisual esté sin editar.
Para poner una foto real, pasa `src`:

```tsx
<ImagePlaceholder src="/gallery/nigiri.jpg" label="Nigiri terminado a soplete" />
```

(archivos en `public/gallery/…`). En la galería, añade `src` a cada item de `gallery.items`.
El `alt` ya está redactado. Recomendación de marca: luz cálida y de contraste, nunca luz plana.

### Reservas (TheFork / CoverManager / OpenTable / WhatsApp / propio)

En `content/site.ts` → `reservation`:
- `url` → botón "reservar por Google" (canal externo actual). Cámbialo por TheFork/CoverManager/OpenTable.
- `whatsappNumber` → activa la confirmación por WhatsApp del formulario.
- `services` → franjas horarias por servicio. `maxParty` → tamaño máximo de grupo online.
- Entrega automática: define `RESERVATION_WEBHOOK` (ver `.env.example`).

### Carta

`content/site.ts` → `menu.categories`. Pon `price` (número en €) en cada plato y, si tienes PDF,
`menu.pdfUrl = "/carta.pdf"` (archivo en `public/`).

---

## SEO y accesibilidad

- `<title>` y `<meta description>` locales en `app/layout.tsx`.
- **Un solo `<h1>`** (el logo del hero, con `alt` = nombre) y `<h2>` por sección.
- **JSON-LD `Restaurant`** con datos reales (dirección, cocina, chef).
- Textos `alt` descriptivos en todas las imágenes.
- Contraste alto sobre fondo oscuro, foco visible, `prefers-reduced-motion` respetado.

---

## Datos PENDIENTES (regla del proyecto: no se inventan)

Buscar `[PENDIENTE]` en el código. Faltan por confirmar:

- Teléfono y email de reservas → `content/site.ts` (`hours.phone`, `hours.email`) + JSON-LD.
- WhatsApp del restaurante → `reservation.whatsappNumber` (activa la confirmación del formulario).
- Días de cierre semanal → `hours.scheduleNote` + `reservation.closedWeekdays` + JSON-LD.
- Precios reales de la carta → `menu.categories[].items[].price`.
- Precio medio → JSON-LD (`priceRange`).
- @redes sociales → `footer.social` + JSON-LD (`sameAs`).
- ~~Fotografías reales~~ ✅ **Hechas** — 31 fotos (JXFilms) optimizadas en `public/gallery/` y
  cableadas (hero, historia, 8 platos, experiencia, galería). Pendiente opcional: vídeos/reels
  (`/Volumes/AFL 2/SAKE/.../Videos/`) para un hero en vídeo, y afinar el emparejamiento
  plato↔foto cuando esté la carta real.
- URL definitiva de despliegue → `og:image` a URL absoluta y `url` en JSON-LD.

> Los platos de la carta y los **testimonios** son de muestra (señalados como tales en la web);
> sustituir por la carta y las reseñas reales.
