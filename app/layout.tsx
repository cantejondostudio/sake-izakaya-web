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
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    locale: "es_ES",
  },
};

/* JSON-LD LocalBusiness/Restaurant — solo datos reales confirmados.
   [PENDIENTE] añadir: telephone, url, priceRange, openingHoursSpecification
   (faltan días de cierre). */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.nameFull,
  servesCuisine: "Japonesa",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C. San Juan de Letrán",
    addressLocality: "Málaga",
    postalCode: "29012",
    addressCountry: "ES",
  },
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
