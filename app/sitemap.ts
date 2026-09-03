import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://sakeizakaya.es";

const languages = {
  "es-ES": `${BASE}/`,
  en: `${BASE}/en`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: BASE,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${BASE}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
