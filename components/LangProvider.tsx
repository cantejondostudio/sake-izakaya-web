"use client";

import { createContext, useContext, useEffect } from "react";
import { dictionary, type Lang, type Site } from "@/content/site";

type LangContextValue = {
  lang: Lang;
  site: Site;
};

const LangContext = createContext<LangContextValue | null>(null);

/**
 * El idioma lo fija la RUTA (`/` = es, `/en` = en) mediante la prop `lang`.
 * Así el HTML pre-renderizado (el que lee Google) ya sale en el idioma correcto,
 * y cada idioma tiene su propia URL indexable (con hreflang en los metadatos).
 */
export function LangProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, site: dictionary[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    // Fallback fuera del proveedor: español por defecto.
    return { lang: "es", site: dictionary.es };
  }
  return ctx;
}

export function useSite(): Site {
  return useLang().site;
}
