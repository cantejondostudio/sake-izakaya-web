import type { Metadata } from "next";
import { LangProvider } from "@/components/LangProvider";
import SiteRoot from "@/components/SiteRoot";
import { dictionary } from "@/content/site";

const en = dictionary.en;

// hreflang: le dice a Google que esta página (en) tiene una versión española en /.
const languages = {
  "es-ES": "/",
  en: "/en",
  "x-default": "/",
};

export const metadata: Metadata = {
  title: en.seo.title,
  description: en.seo.description,
  keywords: [
    "Sake Izakaya",
    "izakaya Malaga",
    "Japanese restaurant Malaga",
    "sake",
    "sashimi Malaga",
    "omakase Malaga",
    "book Japanese restaurant Malaga",
  ],
  alternates: { canonical: "/en", languages },
  openGraph: {
    title: en.seo.title,
    description: en.seo.description,
    url: "/en",
    siteName: "Sake Izakaya",
    type: "website",
    locale: "en_GB",
    alternateLocale: ["es_ES"],
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sake Izakaya · Authentic Japanese izakaya in central Málaga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: en.seo.title,
    description: en.seo.description,
    images: ["/og.jpg"],
  },
};

export default function HomeEn() {
  return (
    <LangProvider lang="en">
      <SiteRoot />
    </LangProvider>
  );
}
