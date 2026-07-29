/**
 * ============================================================
 *  CONTENIDO EDITABLE — todo el texto de la web vive aquí.
 *  Bilingüe: `es` (español) y `en` (inglés). Los componentes
 *  leen el idioma activo con `useSite()` (ver LangProvider).
 *  `site` = alias del español (por defecto, para SSR/metadatos).
 *
 *  Regla del proyecto: no se inventan datos de negocio.
 * ============================================================
 */

const es = {
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
      "Restaurante japonés izakaya en Málaga. Sashimi, omakase, brasa, tempura, platos japoneses para compartir, sake y reservas online.",
  },

  hero: {
    kicker: "Izakaya japonés auténtico · Málaga",
    subtitleJp: "マラガの居酒屋",
    text: "Donde la tradición japonesa se encuentra con la energía de Málaga. Sashimi de lonja, caldos reconfortantes, brasa, platos para compartir y una cuidada selección de sake.",
    ctaPrimary: "Reservar mesa",
    ctaSecondary: "Ver carta",
    image: "/gallery/sake-017.jpg",
    imageAlt: "Brocheta a la brasa de carbón en Sake Izakaya",
    video: "/video/hero.mp4",
    poster: "/video/hero-poster.jpg",
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

  chefSelection: {
    kicker: "Selección del chef",
    title: "Platos que cuentan un viaje",
    intro:
      "Una muestra de lo que sale de nuestra barra y nuestros fogones. La carta cambia con el mercado y la temporada.",
    cta: "Ver carta completa",
    dishes: [
      { name: "Crudos de temporada", jp: "向付", desc: "Tataki, ponzu y cítricos: el mejor pescado de lonja del día, en cortes limpios.", imageLabel: "Pescado de temporada emplatado por el chef", src: "/gallery/sake-034.jpg" },
      { name: "Dashi «Thai»", jp: "椀物", desc: "Caldo dashi de casa con acento thai y dumpling de carabinero.", imageLabel: "Bol de caldo humeante con marisco", src: "/gallery/sake-014.jpg" },
      { name: "Chicken Karaage", jp: "鶏の唐揚げ", desc: "Pollo marinado y frito al estilo japonés: crujiente fuera, jugoso dentro.", imageLabel: "Bocado frito y crujiente con palillos", src: "/gallery/sake-028.jpg" },
      { name: "Gyozas", jp: "餃子", desc: "Empanadillas doradas a la plancha, terminadas al vapor, hechas en casa.", imageLabel: "Cuenco servido sobre la barra", src: "/gallery/sake-025.jpg" },
      { name: "A la brasa", jp: "焼物", desc: "Pescado y verdura de temporada al carbón: el corazón de la izakaya.", imageLabel: "Plato de autor emplatado", src: "/gallery/sake-032.jpg" },
      { name: "Tempura", jp: "天ぷら", desc: "Rebozado ligero y efímero, verdura y marisco de temporada.", imageLabel: "Plato de temporada sobre hoja", src: "/gallery/sake-020.jpg" },
      { name: "Sashimi", jp: "刺身", desc: "Pescado de lonja en cortes limpios. El producto, sin disfraz.", imageLabel: "Sashimi de hamachi en cerámica japonesa", src: "/gallery/sake-023.jpg" },
      { name: "Selección de Sake", jp: "日本酒", desc: "Junmai, ginjo, daiginjo: una bodega pensada para acompañar cada plato.", imageLabel: "Botella de sake en la hornacina iluminada", src: "/gallery/sake-018.jpg" },
    ],
  },

  craft: {
    kicker: "Nuestra cocina",
    title: "Artesanía, producto y tiempo",
    intro:
      "Cocinamos como se cocina en Japón: pocas cosas, muy bien hechas. Caldos de casa, pescado fresco de lonja, arroz japonés trabajado a diario y una carta que respira con la temporada.",
    blocks: [
      { kanji: "魚", title: "Sashimi & Crudos", desc: "Pescado de lonja seleccionado pieza a pieza, cortes limpios y aliños precisos. El producto, sin disfraz." },
      { kanji: "椀", title: "Caldos y sopas", desc: "Dashi de casa y sopas de temporada: ese primer sorbo caliente que reconcilia con el día." },
      { kanji: "肴", title: "Platos Izakaya", desc: "Pequeños platos para el centro de la mesa: brasa, fritura ligera, encurtidos y recetas de taberna japonesa." },
      { kanji: "酒", title: "Sake & Cocktails", desc: "Sake servido a su temperatura, highballs y combinados japoneses para alargar la noche." },
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
      { text: "Cruzas la puerta y estás en Osaka. La barra, la luz, el sake… y un bocado que no olvidas.", author: "Placeholder · Cliente de Google" },
      { text: "El dashi más honesto que he probado fuera de Japón. Se nota el caldo de casa.", author: "Placeholder · Cliente de Google" },
      { text: "Sitio pequeño, trato cercano, producto serio. Así es una izakaya de verdad.", author: "Placeholder · Cliente de Google" },
      { text: "Perfecto para compartir: gyozas, karaage, brasa y sake. Volvemos seguro.", author: "Placeholder · Cliente de Google" },
    ],
  },

  hours: {
    kicker: "Horarios y ubicación",
    title: "Te esperamos en el Centro",
    schedule: [
      { label: "Comida", value: "13:30 – 16:30" },
      { label: "Cena", value: "20:00 – 00:00" },
    ],
    scheduleNote: "Abierto de martes a domingo. Lunes, cerrado.",
    address: ["C. San Juan de Letrán 4", "29012 Málaga"],
    phone: "+34 611 45 04 45",
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
    provider: "covermanager" as "google" | "thefork" | "covermanager" | "opentable" | "whatsapp",
    url: "https://www.covermanager.com/reserve/module_restaurant/sake-izakaya/spanish",
    whatsappNumber: "34611450445" as string | null,
    email: null as string | null,
    maxParty: 8,
    services: [
      { label: "Comida", slots: ["13:30", "14:00", "14:30", "15:00", "15:30", "16:00"] },
      { label: "Cena", slots: ["20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"] },
    ],
    closedWeekdays: [1] as number[],
  },

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
    pdfUrl: null as string | null,
  },

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
      { name: "Vinos · Rioja", items: [ { name: "Luis Cañás Crianza", price: "28,00" }, { name: "Garu Crianza", price: "21,00" } ] },
      { name: "Vinos · Ribera del Duero", items: [ { name: "Ripa Dorii Roble · Tempranillo", price: "22,00" }, { name: "Pruno Crianza · Tempranillo · Cabernet · Merlot", price: "27,00" }, { name: "Matarromera Crianza", price: "53,00" } ] },
      { name: "Vinos · Sierras de Málaga", items: [ { name: "Descalzos Viejos", price: "27,00" } ] },
      { name: "Blancos", items: [ { name: "Entrechuelos Chardonnay", price: "22,00" }, { name: "Emina Albariño", price: "26,00" }, { name: "Bobal · Vicente Gandía", price: "28,00" }, { name: "Tilenus Godello · Bierzo", price: "26,00" }, { name: "Ripa Verdejo", price: "21,00" }, { name: "Manzanilla Alegría", price: "23,00" } ] },
      { name: "Rosado", items: [ { name: "Emina Rosé", price: "22,00" } ] },
      { name: "Espumosos", items: [ { name: "Cava Miracle Brut · Vicente Gandía", price: "26,00" }, { name: "Champagne Veuve Clicquot", price: "97,00" }, { name: "Veuve Ambar", price: "28,00" } ] },
    ],
  },

  footer: {
    description:
      "Taberna japonesa en el Centro Histórico de Málaga. Sashimi, brasa, tempura, platos para compartir y una cuidada selección de sake.",
    social: [
      { name: "Instagram", url: "https://www.instagram.com/sakeizakaya/" },
    ] as { name: string; url: string }[],
    copyright: `© ${new Date().getFullYear()} Sake Izakaya · Taberna japonesa · Málaga`,
  },

  ui: {
    scheduleTitle: "Horario de cocina",
    address: "Dirección",
    phone: "Teléfono",
    email: "Email",
    links: "Enlaces",
    hours: "Horarios",
    contact: "Contacto",
    close: "Cerrar",
    reserveTagline: "Disponibilidad en tiempo real · CoverManager",
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

const en: typeof es = {
  name: "SAKE",
  nameFull: "Sake Izakaya",
  nameJp: "居酒屋",
  logo: "/brand/logo-cream.png",
  city: "Málaga",
  zone: "Old Town",
  descriptor: "Authentic Japanese izakaya",

  seo: {
    title: "Sake Izakaya | Authentic Japanese Izakaya Restaurant in Málaga",
    description:
      "Authentic Japanese izakaya in Málaga. Sashimi, omakase tasting menu, charcoal grill, tempura, Japanese small plates to share, sake and online booking.",
  },

  hero: {
    kicker: "Authentic Japanese izakaya · Málaga",
    subtitleJp: "マラガの居酒屋",
    text: "Where Japanese tradition meets the energy of Málaga. Market-fresh sashimi, comforting broths, charcoal grill, plates to share and a carefully chosen sake list.",
    ctaPrimary: "Book a table",
    ctaSecondary: "View menu",
    image: "/gallery/sake-017.jpg",
    imageAlt: "Charcoal-grilled skewer at Sake Izakaya",
    video: "/video/hero.mp4",
    poster: "/video/hero-poster.jpg",
  },

  story: {
    kicker: "Our story",
    title: "A journey into the most authentic Japan",
    paragraphs: [
      "Sake was born from the years our chef, Juan López Ramos, spent immersed in Japan: in its markets at dawn, at its worn wooden counters, in those neighbourhood taverns where the cooking doesn't try to impress, but to welcome.",
      "An izakaya —«a place to sit and drink»— is the social heart of the Japanese night: small plates arriving one by one, sake poured for the other, conversation with no clock. That spirit, tapas told in Japanese, is what we brought to the Old Town of Málaga.",
      "There are no shortcuts here: produce that's respected, technique learned slowly and a room kept small on purpose, so we can cook up close, the way it's done over there.",
    ],
    cta: "Discover our story",
    imageLabel: "Chef Juan López Ramos and his team in the kitchen",
    image: "/gallery/sake-024.jpg",
  },

  chefSelection: {
    kicker: "Chef's selection",
    title: "Dishes that tell a journey",
    intro:
      "A taste of what comes off our counter and our stoves. The menu changes with the market and the season.",
    cta: "See the full menu",
    dishes: [
      { name: "Seasonal raw fish", jp: "向付", desc: "Tataki, ponzu and citrus: the best market fish of the day, in clean cuts.", imageLabel: "Seasonal fish plated by the chef", src: "/gallery/sake-034.jpg" },
      { name: "«Thai» Dashi", jp: "椀物", desc: "House dashi broth with a Thai accent and a scarlet-prawn dumpling.", imageLabel: "Bowl of steaming broth with shellfish", src: "/gallery/sake-014.jpg" },
      { name: "Chicken Karaage", jp: "鶏の唐揚げ", desc: "Japanese-style marinated fried chicken: crisp outside, juicy within.", imageLabel: "Crunchy fried bite with chopsticks", src: "/gallery/sake-028.jpg" },
      { name: "Gyoza", jp: "餃子", desc: "Dumplings seared golden on the griddle, finished with steam, made in house.", imageLabel: "Bowl served on the counter", src: "/gallery/sake-025.jpg" },
      { name: "From the grill", jp: "焼物", desc: "Seasonal fish and vegetables over charcoal: the heart of the izakaya.", imageLabel: "Signature dish plated", src: "/gallery/sake-032.jpg" },
      { name: "Tempura", jp: "天ぷら", desc: "A light, fleeting batter over seasonal vegetables and shellfish.", imageLabel: "Seasonal dish on a leaf", src: "/gallery/sake-020.jpg" },
      { name: "Sashimi", jp: "刺身", desc: "Market fish in clean cuts. The produce, undisguised.", imageLabel: "Hamachi sashimi on Japanese ceramic", src: "/gallery/sake-023.jpg" },
      { name: "Sake selection", jp: "日本酒", desc: "Junmai, ginjo, daiginjo: a cellar built to accompany every dish.", imageLabel: "Sake bottle in the lit alcove", src: "/gallery/sake-018.jpg" },
    ],
  },

  craft: {
    kicker: "Our kitchen",
    title: "Craft, produce and time",
    intro:
      "We cook the way it's done in Japan: few things, done very well. House broths, fresh market fish, Japanese rice worked daily and a menu that breathes with the season.",
    blocks: [
      { kanji: "魚", title: "Sashimi & Raw", desc: "Market fish selected piece by piece, clean cuts and precise dressings. The produce, undisguised." },
      { kanji: "椀", title: "Broths & soups", desc: "House dashi and seasonal soups: that first warm sip that makes peace with the day." },
      { kanji: "肴", title: "Izakaya plates", desc: "Small plates for the middle of the table: charcoal grill, light frying, pickles and Japanese tavern recipes." },
      { kanji: "酒", title: "Sake & Cocktails", desc: "Sake served at its right temperature, highballs and Japanese mixed drinks to stretch out the night." },
    ],
  },

  experience: {
    kicker: "The experience",
    title: "A night at the izakaya",
    text: "Warm wood, low light, conversation, sake and plates to share: an experience designed to carry you to a contemporary Japanese izakaya.",
    tiles: [
      { title: "The counter", jp: "カウンター", desc: "Four seats facing the chef, where everything happens.", imageLabel: "A plate served on the wooden counter", src: "/gallery/sake-026.jpg" },
      { title: "The dining room", jp: "客席", desc: "Twenty seats, low light and wood. We cook for a few.", imageLabel: "Guest enjoying the intimate dining room", src: "/gallery/sake-012.jpg" },
      { title: "The kitchen", jp: "厨房", desc: "Market produce, Japanese technique, hands that are in no hurry.", imageLabel: "The chef plating in the kitchen", src: "/gallery/sake-031.jpg" },
      { title: "The nights", jp: "夜", desc: "Sake poured for the other, plates arriving, time forgotten.", imageLabel: "Silhouette of a guest before the red circle", src: "/gallery/sake-021.jpg" },
    ],
  },

  gallery: {
    kicker: "Gallery",
    title: "Sake, in pictures",
    items: [
      { label: "Sake cups with calligraphy", kanji: "酒", src: "/gallery/sake-001.jpg" },
      { label: "The knife's edge, ready", kanji: "技", src: "/gallery/sake-007.jpg" },
      { label: "The dining room at nightfall", kanji: "灯", src: "/gallery/sake-015.jpg" },
      { label: "Charcoal-grilled skewer", kanji: "火", src: "/gallery/sake-016.jpg" },
      { label: "Signature dish through the smoke", kanji: "香", src: "/gallery/sake-033.jpg" },
      { label: "Chawanmushi and chilled sake", kanji: "膳", src: "/gallery/sake-013.jpg" },
      { label: "The study of the fish", kanji: "魚", src: "/gallery/sake-035.jpg" },
      { label: "Juan, in his kitchen", kanji: "匠", src: "/gallery/sake-005.jpg" },
    ] as { label: string; kanji: string; src?: string }[],
  },

  reviews: {
    kicker: "Reviews",
    title: "What our guests say",
    note: "Sample testimonials — to be replaced with real Google reviews.",
    items: [
      { text: "You step through the door and you're in Osaka. The counter, the light, the sake… and a bite you won't forget.", author: "Placeholder · Google guest" },
      { text: "The most honest dashi I've had outside Japan. You can taste the house broth.", author: "Placeholder · Google guest" },
      { text: "Small place, warm welcome, serious produce. This is a real izakaya.", author: "Placeholder · Google guest" },
      { text: "Perfect for sharing: gyoza, karaage, grill and sake. We'll be back for sure.", author: "Placeholder · Google guest" },
    ],
  },

  hours: {
    kicker: "Hours & location",
    title: "Find us in the Old Town",
    schedule: [
      { label: "Lunch", value: "13:30 – 16:30" },
      { label: "Dinner", value: "20:00 – 00:00" },
    ],
    scheduleNote: "Open Tuesday to Sunday. Closed on Mondays.",
    address: ["C. San Juan de Letrán 4", "29012 Málaga"],
    phone: "+34 611 45 04 45",
    email: "[PENDIENTE]",
    zoneText:
      "We're right in the heart of Málaga's Old Town, a mostly pedestrian area: the easiest way is to come on foot or leave the car in any of the public car parks in the centre.",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=Sake%20Izakaya%20Calle%20San%20Juan%20de%20Letr%C3%A1n%20M%C3%A1laga&z=17&ie=UTF8&output=embed",
    mapsLinkUrl:
      "https://www.google.com/maps/search/?api=1&query=Sake+Izakaya+Calle+San+Juan+de+Letr%C3%A1n+M%C3%A1laga",
    ctaMap: "Get directions",
  },

  reservation: {
    kicker: "Reservations",
    title: "Book your table",
    text: "Enjoy an unforgettable Japanese night in the heart of Málaga. Just 24 seats per service: we recommend booking ahead.",
    cta: "Book now",
    provider: "covermanager" as "google" | "thefork" | "covermanager" | "opentable" | "whatsapp",
    url: "https://www.covermanager.com/reserve/module_restaurant/sake-izakaya/english",
    whatsappNumber: "34611450445" as string | null,
    email: null as string | null,
    maxParty: 8,
    services: [
      { label: "Lunch", slots: ["13:30", "14:00", "14:30", "15:00", "15:30", "16:00"] },
      { label: "Dinner", slots: ["20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"] },
    ],
    closedWeekdays: [1] as number[],
  },

  menu: {
    kicker: "The menu",
    jp: "季節のおまかせ",
    title: "Omakase Menu «Atsu»",
    season: "Summer 2026",
    intro:
      "A seasonal kaiseki in eight courses. The chef decides each dish with the best produce of the day from the market and the fish auction.",
    price: 63,
    currency: "€",
    priceUnit: "per person",
    conditions: [
      "By order only, one day in advance",
      "Served to the full table only",
    ],
    cta: "Book the omakase",
    courses: [
      { jp: "先付", romaji: "Sakizuke", role: "First bite", dish: "Cod karasumi, kombu and manzanilla" },
      { jp: "向付", romaji: "Mukōzuke", role: "Raw", dish: "Bonito tataki ponzu · Irizake squid · White prawn with kizami wasabi" },
      { jp: "椀物", romaji: "Wanmono", role: "Soup", dish: "«Thai» dashi with a scarlet-prawn dumpling" },
      { jp: "焼物", romaji: "Yakimono", role: "From the grill", dish: "Yuan-glazed meagre" },
      { jp: "酢の物", romaji: "Sunomono", role: "Vinegar-dressed", dish: "Three tomatoes and bonito belly" },
      { jp: "揚物", romaji: "Agemono", role: "Fried", dish: "Piparra peppers in tempura and mojama" },
      { jp: "〆", romaji: "Shime", role: "Savoury finish", dish: "Duck somen" },
      { jp: "水物", romaji: "Mizumono", role: "Dessert", dish: "Green tea soup, sponge cake and passion fruit" },
    ],
    pdfUrl: null as string | null,
  },

  drinks: {
    kicker: "Drinks",
    jp: "お酒",
    title: "Drinks menu",
    intro: "Japanese sake, wines from our land and sparkling wines to accompany the table.",
    categories: [
      {
        name: "Beers & soft drinks",
        items: [
          { name: "Victoria draught", price: "2,80" },
          { name: "Sapporo", price: "3,80" },
          { name: "Kirin", price: "3,60" },
          { name: "Victoria 0.0", price: "2,80" },
          { name: "Glass of Ribera · Ripa Dorii", price: "3,80" },
          { name: "Glass of Rioja · Garu", price: "3,80" },
          { name: "Glass of Verdejo · Ripa Dorii", price: "3,80" },
          { name: "Glass of Chardonnay · Entrechuelos", price: "3,80" },
          { name: "Tinto de verano", price: "3,50" },
          { name: "Vermouth", price: "4,00" },
          { name: "Soft drink", price: "2,80" },
          { name: "Still soft drink", price: "2,60" },
          { name: "Water", price: "2,60" },
          { name: "Sparkling water", price: "2,80" },
        ],
      },
      {
        name: "Sake carafes",
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
      { name: "Wines · Rioja", items: [ { name: "Luis Cañás Crianza", price: "28,00" }, { name: "Garu Crianza", price: "21,00" } ] },
      { name: "Wines · Ribera del Duero", items: [ { name: "Ripa Dorii Roble · Tempranillo", price: "22,00" }, { name: "Pruno Crianza · Tempranillo · Cabernet · Merlot", price: "27,00" }, { name: "Matarromera Crianza", price: "53,00" } ] },
      { name: "Wines · Sierras de Málaga", items: [ { name: "Descalzos Viejos", price: "27,00" } ] },
      { name: "Whites", items: [ { name: "Entrechuelos Chardonnay", price: "22,00" }, { name: "Emina Albariño", price: "26,00" }, { name: "Bobal · Vicente Gandía", price: "28,00" }, { name: "Tilenus Godello · Bierzo", price: "26,00" }, { name: "Ripa Verdejo", price: "21,00" }, { name: "Manzanilla Alegría", price: "23,00" } ] },
      { name: "Rosé", items: [ { name: "Emina Rosé", price: "22,00" } ] },
      { name: "Sparkling", items: [ { name: "Cava Miracle Brut · Vicente Gandía", price: "26,00" }, { name: "Champagne Veuve Clicquot", price: "97,00" }, { name: "Veuve Ambar", price: "28,00" } ] },
    ],
  },

  footer: {
    description:
      "Japanese tavern in the Old Town of Málaga. Sashimi, charcoal grill, tempura, plates to share and a carefully chosen sake list.",
    social: [
      { name: "Instagram", url: "https://www.instagram.com/sakeizakaya/" },
    ] as { name: string; url: string }[],
    copyright: `© ${new Date().getFullYear()} Sake Izakaya · Japanese tavern · Málaga`,
  },

  ui: {
    scheduleTitle: "Kitchen hours",
    address: "Address",
    phone: "Phone",
    email: "Email",
    links: "Links",
    hours: "Hours",
    contact: "Contact",
    close: "Close",
    reserveTagline: "Real-time availability · CoverManager",
  },

  nav: [
    { label: "Home", href: "#inicio" },
    { label: "Menu", href: "#carta" },
    { label: "Drinks", href: "#bebidas" },
    { label: "About", href: "#historia" },
    { label: "Gallery", href: "#galeria" },
    { label: "Experience", href: "#experiencia" },
    { label: "Contact", href: "#contacto" },
  ],
};

export type Lang = "es" | "en";
export const dictionary = { es, en };
export const site = es;
export type Site = typeof es;
