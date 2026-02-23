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
      es: "Soy Lex Rentería, cineasta queer originario de Guadalajara y fundador de la productora Kauyi. Mi trabajo se centra en contar historias de la comunidad LGBTQ+, abordando la memoria y la resistencia a través de una representación auténtica.",
      en: "I'm Lex Rentería, a queer filmmaker from Guadalajara and founder of the production company Kauyi. My work focuses on telling stories from the LGBTQ+ community, addressing memory and resistance through authentic representation.",
    },
    bio2: {
      es: "En mis películas, busco un cine que se sienta físicamente en la piel, logrando un equilibrio muy bello entre la atmósfera del relato y los detalles técnicos. Apoyándome en un ritmo inmersivo, un cuidadoso diseño de producción y el uso estratégico de locaciones, construyo narrativas que desafían la linealidad. Mi filmografía incluye el cortometraje {agaves}, mi debut como director con {purpura} en el FICG 2024, y mi rol como productor en Tailored for You (2026). Actualmente desarrollo mi primer largometraje, {videoclub}.",
      en: "In my films, I seek a cinema that is physically felt on the skin, achieving a beautiful balance between the atmosphere of the story and the technical details. Relying on an immersive rhythm, careful production design, and the strategic use of locations, I build narratives that challenge linearity. My filmography includes the short film {agaves}, my directorial debut with {purpura} at FICG 2024, and my role as producer on Tailored for You (2026). I'm currently developing my first feature film, {videoclub}.",
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
