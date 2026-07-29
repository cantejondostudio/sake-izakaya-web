"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dictionary, type Lang, type Site } from "@/content/site";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  site: Site;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "sake-lang";

function detectInitial(): Lang {
  if (typeof window === "undefined") return "es";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "es" || saved === "en") return saved;
  const nav = window.navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("en") ? "en" : "es";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  // Arranca en ES (coincide con el HTML renderizado en el servidor) y ajusta en cliente.
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const initial = detectInitial();
    if (initial !== "es") setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* localStorage no disponible: ignorar */
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((l) => (l === "es" ? "en" : "es"));

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, site: dictionary[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    // Fallback fuera del proveedor (p. ej. render aislado): español por defecto.
    return { lang: "es", setLang: () => {}, toggle: () => {}, site: dictionary.es };
  }
  return ctx;
}

export function useSite(): Site {
  return useLang().site;
}
