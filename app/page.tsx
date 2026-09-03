import type { Metadata } from "next";
import { LangProvider } from "@/components/LangProvider";
import SiteRoot from "@/components/SiteRoot";
import { dictionary } from "@/content/site";

const es = dictionary.es;

// hreflang: le dice a Google que esta página (es) tiene una versión inglesa en /en.
const languages = {
  "es-ES": "/",
  en: "/en",
  "x-default": "/",
};

export const metadata: Metadata = {
  title: es.seo.title,
  description: es.seo.description,
  keywords: [
    "Sake Izakaya",
    "izakaya Málaga",
    "restaurante japonés Málaga",
    "sake",
    "sashimi Málaga",
    "omakase Málaga",
    "reservar restaurante japonés Málaga",
  ],
  alternates: { canonical: "/", languages },
  openGraph: {
    title: es.seo.title,
    description: es.seo.description,
    url: "/",
    siteName: "Sake Izakaya",
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_GB"],
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
    title: es.seo.title,
    description: es.seo.description,
    images: ["/og.jpg"],
  },
};

export default function Home() {
  return (
    <LangProvider lang="es">
      <SiteRoot />
    </LangProvider>
  );
}
