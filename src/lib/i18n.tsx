import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en";

const dictionary = {
  nav: {
    home: { es: "Inicio", en: "Home" },
    reel: { es: "Demo Reel", en: "Demo Reel" },
    projects: { es: "Proyectos", en: "Projects" },
    about: { es: "Sobre mí", en: "About" },
    contact: { es: "Contacto", en: "Contact" },
  },
  hero: {
    subtitle: {
      es: "Cineasta Queer. Explorando identidad y memoria.",
      en: "Queer Filmmaker. Exploring identity and memory.",
    },
    cta: { es: "Ver proyectos", en: "View projects" },
  },
  reel: {
    title: { es: "Demo Reel", en: "Demo Reel" },
  },
  projects: {
    title: { es: "Proyectos", en: "Projects" },
    inProduction: { es: "En Producción", en: "In Production" },
    released: { es: "Estrenado", en: "Released" },
    viewProject: { es: "Ver proyecto", en: "View project" },
  },
  about: {
    title: { es: "Sobre mí", en: "About" },
    bio1: {
      es: "Soy director y guionista basado en Guadalajara, México. Mi trabajo explora las intersecciones entre identidad, memoria y la experiencia queer a través del cine.",
      en: "I'm a director and screenwriter based in Guadalajara, Mexico. My work explores the intersections of identity, memory, and the queer experience through film.",
    },
    bio2: {
      es: "Fundador de Kauyi Media Group, una productora dedicada a contar historias que desafían narrativas convencionales y amplifican voces diversas.",
      en: "Founder of Kauyi Media Group, a production company dedicated to telling stories that challenge conventional narratives and amplify diverse voices.",
    },
    director: { es: "director", en: "director" },
    writer: { es: "guionista", en: "screenwriter" },
    identity: { es: "identidad", en: "identity" },
    memory: { es: "memoria", en: "memory" },
  },
  footer: {
    rights: {
      es: "Todos los derechos reservados.",
      en: "All rights reserved.",
    },
  },
  detail: {
    back: { es: "← Volver", en: "← Back" },
    type: { es: "Tipo", en: "Type" },
    genre: { es: "Género", en: "Genre" },
    director: { es: "Director", en: "Director" },
    country: { es: "País", en: "Country" },
    language: { es: "Idioma", en: "Language" },
    duration: { es: "Duración", en: "Duration" },
    year: { es: "Año", en: "Year" },
    synopsis: { es: "Sinopsis", en: "Synopsis" },
    awards: { es: "Premios y festivales", en: "Awards & Festivals" },
    watchOnline: { es: "Ver en línea", en: "Watch Online" },
    comingSoon: { es: "Próximamente", en: "Coming Soon" },
  },
} as const;

type Dictionary = typeof dictionary;

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionary }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
