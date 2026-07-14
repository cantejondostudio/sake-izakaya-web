/**
 * ============================================================
 *  CONTENIDO EDITABLE — todo el texto de la web vive aquí.
 *  Cambia nombre, ciudad, platos, textos y enlaces en un solo
 *  sitio sin tocar los componentes.
 *
 *  Regla del proyecto: no se inventan datos de negocio.
 *  Lo no confirmado está marcado [PENDIENTE] y los testimonios
 *  son placeholders señalados como tales en la propia web.
 * ============================================================
 */

export const site = {
  name: "SAKE",
  nameFull: "Sake Izakaya",
  nameJp: "居酒屋",
  logo: "/brand/logo-cream.png", // logo oficial (marca chochin) recoloreado a beige para fondo oscuro
  city: "Málaga",
  zone: "Centro Histórico",
  descriptor: "Izakaya japonés auténtico",

  seo: {
    title: "Sake Izakaya | Restaurante Japonés Izakaya en Málaga",
    description:
      "Restaurante japonés izakaya en Málaga. Sashimi, ramen, brasa, platos japoneses para compartir, sake y reservas online.",
  },

  hero: {
    kicker: "Izakaya japonés auténtico · Málaga",
    subtitleJp: "マラガの居酒屋",
    text: "Donde la tradición japonesa se encuentra con la energía de Málaga. Sashimi de lonja, ramen reconfortante, brasa, platos para compartir y una cuidada selección de sake.",
    ctaPrimary: "Reservar mesa",
    ctaSecondary: "Ver carta",
    image: "/gallery/sake-017.jpg", // brasa/robata — fallback en móvil / mientras carga el vídeo
    imageAlt: "Brocheta a la brasa de carbón en Sake Izakaya",
    video: "/video/hero.mp4", // WEB HORIZONTAL (JXFilms) comprimido — solo escritorio
    poster: "/video/hero-poster.jpg", // primer fotograma del vídeo
  },

  story: {
    kicker: "Nuestra historia",
    title: "Un viaje al Japón más auténtico",
    paragraphs: [
      "Sake nace de los años que nuestro chef, Juan López Ramos, vivió inmerso en Japón: en sus mercados al amanecer, en sus barras de madera gastada, en esas tabernas de barrio donde la cocina no busca impresionar, sino acoger.",
      "Una izakaya —«lugar para beber sentado»— es el corazón social de la noche japonesa: platos pequeños que van llegando a la mesa, sake que se sirve al otro, conversación sin reloj. Ese espíritu, el de las tapas contado en japonés, es el que trajimos al Centro Histórico de Málaga.",
      "Aquí no hay atajos: producto respetado, técnica aprendida despacio y una sala pequeña a propósito, para cocinar de cerca, como se hace allí.",
    ],
    cta: "Conoce nuestra historia",
    imageLabel: "El chef Juan López Ramos y su equipo en la cocina",
    image: "/gallery/sake-024.jpg",
  },

  // [PENDIENTE] Selección orientativa a validar con la carta real del restaurante.
  chefSelection: {
    kicker: "Selección del chef",
    title: "Platos que cuentan un viaje",
    intro:
      "Una muestra de lo que sale de nuestra barra y nuestros fogones. La carta cambia con el mercado y la temporada.",
    cta: "Ver carta completa",
    dishes: [
      {
        name: "Crudos de temporada",
        jp: "向付",
        desc: "Tataki, ponzu y cítricos: el mejor pescado de lonja del día, en cortes limpios.",
        imageLabel: "Pescado de temporada emplatado por el chef",
        src: "/gallery/sake-034.jpg",
      },
      {
        name: "Ramen Tonkotsu",
        jp: "豚骨ラーメン",
        desc: "Caldo de cocción lenta, denso y reconfortante, con chashu y huevo marinado.",
        imageLabel: "Bol de caldo humeante con marisco",
        src: "/gallery/sake-014.jpg",
      },
      {
        name: "Chicken Karaage",
        jp: "鶏の唐揚げ",
        desc: "Pollo marinado y frito al estilo japonés: crujiente fuera, jugoso dentro.",
        imageLabel: "Bocado frito y crujiente con palillos",
        src: "/gallery/sake-028.jpg",
      },
      {
        name: "Gyozas",
        jp: "餃子",
        desc: "Empanadillas doradas a la plancha, terminadas al vapor, hechas en casa.",
        imageLabel: "Cuenco servido sobre la barra",
        src: "/gallery/sake-025.jpg",
      },
      {
        name: "A la brasa",
        jp: "焼物",
        desc: "Pescado y verdura de temporada al carbón: el corazón de la izakaya.",
        imageLabel: "Plato de autor emplatado",
        src: "/gallery/sake-032.jpg",
      },
      {
        name: "Tempura",
        jp: "天ぷら",
        desc: "Rebozado ligero y efímero, verdura y marisco de temporada.",
        imageLabel: "Plato de temporada sobre hoja",
        src: "/gallery/sake-020.jpg",
      },
      {
        name: "Sashimi",
        jp: "刺身",
        desc: "Pescado de lonja en cortes limpios. El producto, sin disfraz.",
        imageLabel: "Sashimi de hamachi en cerámica japonesa",
        src: "/gallery/sake-023.jpg",
      },
      {
        name: "Selección de Sake",
        jp: "日本酒",
        desc: "Junmai, ginjo, daiginjo: una bodega pensada para acompañar cada plato.",
        imageLabel: "Botella de sake en la hornacina iluminada",
        src: "/gallery/sake-018.jpg",
      },
    ],
  },

  craft: {
    kicker: "Nuestra cocina",
    title: "Artesanía, producto y tiempo",
    intro:
      "Cocinamos como se cocina en Japón: pocas cosas, muy bien hechas. Caldos de casa, pescado fresco de lonja, arroz japonés trabajado a diario y una carta que respira con la temporada.",
    blocks: [
      {
        kanji: "魚",
        title: "Sashimi & Crudos",
        desc: "Pescado de lonja seleccionado pieza a pieza, cortes limpios y aliños precisos. El producto, sin disfraz.",
      },
      {
        kanji: "麺",
        title: "Ramen",
        desc: "Caldos caseros de cocción lenta, fideos con carácter y ese primer sorbo que reconcilia con el día.",
      },
      {
        kanji: "肴",
        title: "Platos Izakaya",
        desc: "Pequeños platos para el centro de la mesa: brasa, fritura ligera, encurtidos y recetas de taberna japonesa.",
      },
      {
        kanji: "酒",
        title: "Sake & Cocktails",
        desc: "Sake servido a su temperatura, highballs y combinados japoneses para alargar la noche.",
      },
    ],
  },

  experience: {
    kicker: "La experiencia",
    title: "Una noche en la izakaya",
    text: "Madera cálida, luz tenue, conversación, sake y platos para compartir: una experiencia pensada para transportarte a una izakaya japonesa contemporánea.",
    tiles: [
      { title: "La barra", jp: "カウンター", desc: "Cuatro asientos frente al chef, donde todo sucede.", imageLabel: "Un plato servido sobre la barra de madera", src: "/gallery/sake-026.jpg" },
      { title: "El comedor", jp: "客席", desc: "Veinte plazas, luz baja y madera. Cocinamos para pocos.", imageLabel: "Comensal disfrutando en el comedor íntimo", src: "/gallery/sake-012.jpg" },
      { title: "La cocina", jp: "厨房", desc: "Producto de lonja, técnica japonesa, manos que no tienen prisa.", imageLabel: "El chef emplatando en la cocina", src: "/gallery/sake-031.jpg" },
      { title: "Las noches", jp: "夜", desc: "Sake que se sirve al otro, platos que van llegando, tiempo que se olvida.", imageLabel: "Silueta de un comensal ante el círculo rojo", src: "/gallery/sake-021.jpg" },
    ],
  },

  gallery: {
    kicker: "Galería",
    title: "Sake, en imágenes",
    // Fotografías reales de la sesión (JXFilms). Editables/ampliables aquí.
    items: [
      { label: "Tazas de sake con caligrafía", kanji: "酒", src: "/gallery/sake-001.jpg" },
      { label: "El filo del cuchillo, a punto", kanji: "技", src: "/gallery/sake-007.jpg" },
      { label: "El comedor al caer la noche", kanji: "灯", src: "/gallery/sake-015.jpg" },
      { label: "Brocheta a la brasa de carbón", kanji: "火", src: "/gallery/sake-016.jpg" },
      { label: "Plato de autor entre humo", kanji: "香", src: "/gallery/sake-033.jpg" },
      { label: "Chawanmushi y sake frío", kanji: "膳", src: "/gallery/sake-013.jpg" },
      { label: "El estudio del pescado", kanji: "魚", src: "/gallery/sake-035.jpg" },
      { label: "Juan, en su cocina", kanji: "匠", src: "/gallery/sake-005.jpg" },
    ] as { label: string; kanji: string; src?: string }[],
  },

  reviews: {
    kicker: "Reseñas",
    title: "Lo que dicen nuestros clientes",
    note: "Testimonios de muestra — se sustituirán por reseñas reales de Google.",
    items: [
      {
        text: "Cruzas la puerta y estás en Osaka. La barra, la luz, el sake… y un bocado que no olvidas.",
        author: "Placeholder · Cliente de Google",
      },
      {
        text: "El ramen más honesto que he comido fuera de Japón. Se nota el caldo de casa.",
        author: "Placeholder · Cliente de Google",
      },
      {
        text: "Sitio pequeño, trato cercano, producto serio. Así es una izakaya de verdad.",
        author: "Placeholder · Cliente de Google",
      },
      {
        text: "Perfecto para compartir: gyozas, karaage, brasa y sake. Volvemos seguro.",
        author: "Placeholder · Cliente de Google",
      },
    ],
  },

  hours: {
    kicker: "Horarios y ubicación",
    title: "Te esperamos en el Centro",
    schedule: [
      { label: "Comida", value: "13:00 – 16:00" },
      { label: "Cena", value: "19:00 – 23:00" },
    ],
    scheduleNote: "Abierto de martes a sábado. Domingo y lunes, cerrado.",
    address: ["C. San Juan de Letrán 4", "29012 Málaga"],
    phone: "+34 635 57 88 81",
    email: "[PENDIENTE]",
    zoneText:
      "Estamos en pleno Centro Histórico de Málaga, una zona mayormente peatonal: lo más cómodo es venir andando o dejar el coche en cualquiera de los aparcamientos públicos del centro.",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=Sake%20Izakaya%20Calle%20San%20Juan%20de%20Letr%C3%A1n%20M%C3%A1laga&z=17&ie=UTF8&output=embed",
    mapsLinkUrl:
      "https://www.google.com/maps/search/?api=1&query=Sake+Izakaya+Calle+San+Juan+de+Letr%C3%A1n+M%C3%A1laga",
    ctaMap: "Cómo llegar",
  },

  reservation: {
    kicker: "Reservas",
    title: "Reserva tu mesa",
    text: "Vive una noche japonesa inolvidable en el corazón de Málaga. Solo 24 plazas por servicio: te recomendamos reservar con antelación.",
    cta: "Reservar ahora",
    // Canal de reserva externo real: perfil de Google. Preparado para cambiar a TheFork,
    // CoverManager, OpenTable cambiando solo `url` (y `provider` como etiqueta).
    provider: "covermanager" as "google" | "thefork" | "covermanager" | "opentable" | "whatsapp",
    // Motor de reservas real (CoverManager, cuenta SAKEIZAKAYA). Se incrusta en la sección de reservas.
    url: "https://www.covermanager.com/reserve/module_restaurant/sake-izakaya/spanish",

    // --- Formulario de reserva propio (funcional) ---
    // Número de WhatsApp del restaurante en formato internacional sin signos, p. ej. "34600000000".
    // [PENDIENTE] En cuanto se confirme, el formulario enviará la solicitud por WhatsApp.
    whatsappNumber: "34611450445" as string | null, // +34 611 45 04 45 (formato wa.me: sin + ni espacios)
    // Email al que llega la solicitud si se configura el envío por correo (fallback mailto).
    // [PENDIENTE] p. ej. "reservas@sakeizakaya.es"
    email: null as string | null,
    maxParty: 8, // grupos mayores → se gestionan por teléfono
    // Franjas horarias por servicio (última mesa incluida).
    services: [
      { label: "Comida", slots: ["13:00", "13:30", "14:00", "14:30", "15:00", "15:30"] },
      { label: "Cena", slots: ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"] },
    ],
    // Cierra domingo (0) y lunes (1); abierto de martes a sábado.
    closedWeekdays: [0, 1] as number[], // 0=domingo … 6=sábado
  },

  // Menú degustación real: Omakase «Atsu» (Verano 2026), la carta oficial del restaurante
  // (extraída del PDF del chef). [PENDIENTE] Carta à la carte: añadir aquí cuando llegue.
  menu: {
    kicker: "La carta",
    jp: "季節のおまかせ",
    title: "Menú Omakase «Atsu»",
    season: "Verano 2026",
    intro:
      "Kaiseki de temporada en ocho pases. El chef decide cada plato con el mejor producto del día del mercado y la lonja.",
    price: 63,
    currency: "€",
    priceUnit: "por persona",
    conditions: [
      "Solo por encargo, con un día de antelación",
      "Se sirve únicamente a mesa completa",
    ],
    cta: "Reservar el omakase",
    courses: [
      { jp: "先付", romaji: "Sakizuke", role: "Primer bocado", dish: "Karasumi de bacalao, kombu y manzanilla" },
      { jp: "向付", romaji: "Mukōzuke", role: "Crudos", dish: "Tataki de bonito ponzu · Calamar irizake · Gamba blanca kizami wasabi" },
      { jp: "椀物", romaji: "Wanmono", role: "Sopa", dish: "Dashi «Thai» con dumpling de carabinero" },
      { jp: "焼物", romaji: "Yakimono", role: "A la brasa", dish: "Corvina Yuan" },
      { jp: "酢の物", romaji: "Sunomono", role: "Aliñados al vinagre", dish: "Tres tomates y ventresca de bonito" },
      { jp: "揚物", romaji: "Agemono", role: "Fritos", dish: "Piparras en tempura y mojama" },
      { jp: "〆", romaji: "Shime", role: "Cierre salado", dish: "Somen de pato" },
      { jp: "水物", romaji: "Mizumono", role: "Postre", dish: "Sopa de té verde, bizcocho y fruta de la pasión" },
    ],
    pdfUrl: null as string | null, // p. ej. "/carta.pdf" cuando exista la à la carte
  },

  // Carta de bebidas real (del documento del restaurante). Precio = string exacto en €.
  drinks: {
    kicker: "Bebidas",
    jp: "お酒",
    title: "Carta de bebidas",
    intro: "Sake japonés, vinos de nuestra tierra y espumosos para acompañar la mesa.",
    categories: [
      {
        name: "Cervezas & refrescos",
        items: [
          { name: "Caña de Victoria", price: "2,80" },
          { name: "Sapporo", price: "3,80" },
          { name: "Kirin", price: "3,60" },
          { name: "Victoria 0,0", price: "2,80" },
          { name: "Copa de Ribera · Ripa Dorii", price: "3,80" },
          { name: "Copa de Rioja · Garu", price: "3,80" },
          { name: "Copa de Verdejo · Ripa Dorii", price: "3,80" },
          { name: "Copa de Chardonnay · Entrechuelos", price: "3,80" },
          { name: "Tinto de verano", price: "3,50" },
          { name: "Vermut", price: "4,00" },
          { name: "Refresco con gas", price: "2,80" },
          { name: "Refresco sin gas", price: "2,60" },
          { name: "Agua", price: "2,60" },
          { name: "Agua con gas", price: "2,80" },
        ],
      },
      {
        name: "Jarritas de sake",
        jp: "日本酒",
        items: [
          { name: "Keigetsu Gin-no-Yume", price: "12,00" },
          { name: "Shalala · 300 ml", price: "17,00" },
          { name: "Sotenden · 750 ml", price: "39,00" },
          { name: "Akitora Junmai", price: "9,50" },
          { name: "Kubota", price: "10,00" },
          { name: "Choya Umeshu", price: "9,50" },
        ],
      },
      {
        name: "Vinos · Rioja",
        items: [
          { name: "Luis Cañás Crianza", price: "28,00" },
          { name: "Garu Crianza", price: "21,00" },
        ],
      },
      {
        name: "Vinos · Ribera del Duero",
        items: [
          { name: "Ripa Dorii Roble · Tempranillo", price: "22,00" },
          { name: "Pruno Crianza · Tempranillo · Cabernet · Merlot", price: "27,00" },
          { name: "Matarromera Crianza", price: "53,00" },
        ],
      },
      {
        name: "Vinos · Sierras de Málaga",
        items: [
          { name: "Descalzos Viejos", price: "27,00" },
        ],
      },
      {
        name: "Blancos",
        items: [
          { name: "Entrechuelos Chardonnay", price: "22,00" },
          { name: "Emina Albariño", price: "26,00" },
          { name: "Bobal · Vicente Gandía", price: "28,00" },
          { name: "Tilenus Godello · Bierzo", price: "26,00" },
          { name: "Ripa Verdejo", price: "21,00" },
          { name: "Manzanilla Alegría", price: "23,00" },
        ],
      },
      {
        name: "Rosado",
        items: [
          { name: "Emina Rosé", price: "22,00" },
        ],
      },
      {
        name: "Espumosos",
        items: [
          { name: "Cava Miracle Brut · Vicente Gandía", price: "26,00" },
          { name: "Champagne Veuve Clicquot", price: "97,00" },
          { name: "Veuve Ambar", price: "28,00" },
        ],
      },
    ],
  },

  footer: {
    description:
      "Taberna japonesa en el Centro Histórico de Málaga. Sashimi, ramen, brasa, platos para compartir y una cuidada selección de sake.",
    // Redes. [PENDIENTE] TikTok / Facebook si los hay.
    social: [
      { name: "Instagram", url: "https://www.instagram.com/sakeizakaya/" },
    ] as { name: string; url: string }[],
    copyright: `© ${new Date().getFullYear()} Sake Izakaya · Taberna japonesa · Málaga`,
  },

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Carta", href: "#carta" },
    { label: "Bebidas", href: "#bebidas" },
    { label: "Nosotros", href: "#historia" },
    { label: "Galería", href: "#galeria" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export type Site = typeof site;
