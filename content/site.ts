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
      "Restaurante japonés izakaya en Málaga. Sushi artesanal, ramen, platos japoneses para compartir, sake y reservas online.",
  },

  hero: {
    kicker: "Izakaya japonés auténtico · Málaga",
    subtitleJp: "マラガの居酒屋",
    text: "Donde la tradición japonesa se encuentra con la energía de Málaga. Sushi artesanal, ramen reconfortante, platos para compartir y una cuidada selección de sake.",
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
        name: "Omakase Nigiri",
        jp: "おまかせ握り",
        desc: "Confía en el chef: la mejor pieza del día, cortada al momento sobre arroz templado.",
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
        name: "Signature Rolls",
        jp: "特製ロール",
        desc: "Nuestros rolls de autor: técnica japonesa, guiños al sur.",
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
        kanji: "鮨",
        title: "Sushi & Sashimi",
        desc: "Arroz japonés en su punto exacto de temperatura y avinagrado, pescado seleccionado pieza a pieza y el corte como gesto final.",
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
        text: "Cruzas la puerta y estás en Osaka. La barra, la luz, el sake… y un nigiri que no olvidas.",
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
        text: "Perfecto para compartir: gyozas, karaage, un roll y sake. Volvemos seguro.",
        author: "Placeholder · Cliente de Google",
      },
    ],
  },

  hours: {
    kicker: "Horarios y ubicación",
    title: "Te esperamos en el Centro",
    schedule: [
      { label: "Comida", value: "13:00 — última mesa 15:15" },
      { label: "Cena", value: "20:00 — última mesa 23:15" },
    ],
    scheduleNote: "Días de cierre semanal: [PENDIENTE de confirmar]",
    address: ["C. San Juan de Letrán", "29012 Málaga"],
    phone: "[PENDIENTE]",
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
    provider: "google" as "google" | "thefork" | "covermanager" | "opentable" | "whatsapp",
    url: "https://www.google.com/maps/search/?api=1&query=Sake+Izakaya+Calle+San+Juan+de+Letr%C3%A1n+M%C3%A1laga",

    // --- Formulario de reserva propio (funcional) ---
    // Número de WhatsApp del restaurante en formato internacional sin signos, p. ej. "34600000000".
    // [PENDIENTE] En cuanto se confirme, el formulario enviará la solicitud por WhatsApp.
    whatsappNumber: null as string | null,
    // Email al que llega la solicitud si se configura el envío por correo (fallback mailto).
    // [PENDIENTE] p. ej. "reservas@sakeizakaya.es"
    email: null as string | null,
    maxParty: 8, // grupos mayores → se gestionan por teléfono
    // Franjas horarias por servicio (última mesa incluida).
    services: [
      { label: "Comida", slots: ["13:00", "13:30", "14:00", "14:30", "15:00"] },
      { label: "Cena", slots: ["20:00", "20:30", "21:00", "21:30", "22:00", "22:30"] },
    ],
    // [PENDIENTE] Días de cierre — mientras no se confirmen, no se bloquea ningún día.
    closedWeekdays: [] as number[], // 0=domingo … 6=sábado
  },

  // Carta completa navegable. [PENDIENTE] Es una carta de MUESTRA con la estructura de una
  // izakaya: reemplazar platos y poner precios reales (price: número en €) cuando se confirmen.
  // Botón de PDF listo: colocar el archivo en public/carta.pdf.
  menu: {
    kicker: "La carta",
    title: "Nuestra carta",
    intro:
      "Cocina de izakaya para compartir: pequeños platos que van llegando a la mesa. La carta cambia con el mercado y la temporada.",
    pdfUrl: null as string | null, // p. ej. "/carta.pdf"
    pdfCta: "Descargar carta (PDF)",
    priceNote: "Precios de muestra pendientes de confirmar.",
    currency: "€",
    categories: [
      {
        id: "entrantes",
        name: "Para empezar",
        jp: "前菜",
        items: [
          { name: "Edamame al sésamo", jp: "枝豆", desc: "Vainas de soja al vapor, sal marina y sésamo tostado.", price: null },
          { name: "Gyozas de la casa", jp: "餃子", desc: "Empanadillas a la plancha terminadas al vapor, hechas a diario.", price: null },
          { name: "Chicken Karaage", jp: "鶏の唐揚げ", desc: "Pollo marinado y frito al estilo japonés, crujiente y jugoso.", price: null },
          { name: "Tempura de temporada", jp: "天ぷら", desc: "Rebozado ligero de verdura y marisco del día.", price: null },
        ],
      },
      {
        id: "sushi",
        name: "Sushi & Sashimi",
        jp: "鮨・刺身",
        items: [
          { name: "Omakase Nigiri", jp: "おまかせ握り", desc: "Selección del chef: la mejor pieza del día sobre arroz templado.", price: null },
          { name: "Sashimi variado", jp: "刺身盛り合わせ", desc: "Pescado de lonja en cortes limpios, sin disfraz.", price: null },
          { name: "Signature Rolls", jp: "特製ロール", desc: "Rolls de autor: técnica japonesa con guiños al sur.", price: null },
        ],
      },
      {
        id: "ramen",
        name: "Ramen",
        jp: "ラーメン",
        items: [
          { name: "Ramen Tonkotsu", jp: "豚骨ラーメン", desc: "Caldo de cerdo de cocción lenta, chashu y huevo marinado.", price: null },
          { name: "Ramen Shoyu", jp: "醤油ラーメン", desc: "Caldo de soja claro y aromático, fideo con carácter.", price: null },
        ],
      },
      {
        id: "izakaya",
        name: "Platos izakaya",
        jp: "肴",
        items: [
          { name: "Yakitori", jp: "焼き鳥", desc: "Brochetas a la brasa de carbón, tare o sal.", price: null },
          { name: "Berenjena nasu dengaku", jp: "茄子田楽", desc: "Berenjena glaseada con miso dulce a la parrilla.", price: null },
          { name: "Takoyaki", jp: "たこ焼き", desc: "Bolitas de pulpo, la calle de Osaka en la mesa.", price: null },
        ],
      },
      {
        id: "bebidas",
        name: "Sake & Cocktails",
        jp: "酒",
        items: [
          { name: "Selección de sake", jp: "日本酒", desc: "Junmai, ginjo y daiginjo, servidos a su temperatura.", price: null },
          { name: "Highball japonés", jp: "ハイボール", desc: "Whisky japonés, soda y hielo. Fresco y directo.", price: null },
          { name: "Cerveza japonesa", jp: "ビール", desc: "Lager ligera, la compañera de la izakaya.", price: null },
        ],
      },
    ],
  },

  footer: {
    description:
      "Taberna japonesa en el Centro Histórico de Málaga. Sushi artesanal, ramen, platos para compartir y una cuidada selección de sake.",
    // [PENDIENTE] @redes reales — añadir cuando se confirmen.
    social: [] as { name: string; url: string }[],
    copyright: `© ${new Date().getFullYear()} Sake Izakaya · Taberna japonesa · Málaga`,
  },

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Carta", href: "#carta" },
    { label: "Sobre nosotros", href: "#historia" },
    { label: "Galería", href: "#galeria" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export type Site = typeof site;
