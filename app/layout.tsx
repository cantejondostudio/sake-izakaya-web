import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-jp",
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sakeizakaya.es"),
  title: site.seo.title,
  description: site.seo.description,
  keywords: [
    "Sake Izakaya",
    "izakaya Málaga",
    "restaurante japonés Málaga",
    "sake",
    "sashimi Málaga",
    "omakase Málaga",
    "reservar restaurante japonés Málaga",
  ],
  alternates: { canonical: "/" },
  applicationName: "Sake Izakaya",
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: "/",
    siteName: "Sake Izakaya",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sake Izakaya · Izakaya japonés en el Centro de Málaga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
  verification: { google: "RtFKDMypx--1iYqukBttjP4WOV0MucK0chKybKQAMcI" },
};

/* JSON-LD LocalBusiness/Restaurant — solo datos reales confirmados.
   [PENDIENTE] añadir: url (dominio final), priceRange. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.nameFull,
  servesCuisine: "Japonesa",
  telephone: "+34 611 45 04 45",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C. San Juan de Letrán 4",
    addressLocality: "Málaga",
    postalCode: "29012",
    addressCountry: "ES",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "13:30",
      closes: "16:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "20:00",
      closes: "00:00",
    },
  ],
  founder: { "@type": "Person", name: "Juan López Ramos" },
  sameAs: site.footer.social.map((s) => s.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${jost.variable} ${notoSerifJp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
