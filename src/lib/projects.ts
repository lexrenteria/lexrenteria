import posterAgaves from "@/assets/poster-agaves.jpg";
import posterPurpura from "@/assets/poster-purpura-neon.jpg";
import posterVideoclub from "@/assets/poster-ultimo-videoclub.jpg";
import stillAgaves from "@/assets/still-agaves.jpg";
import stillPurpura from "@/assets/still-purpura-neon.jpg";
import stillVideoclub from "@/assets/still-ultimo-videoclub.png";

export interface Project {
  slug: string;
  title: string;
  year: string;
  sortYear: number;
  status: { es: string; en: string };
  role: { es: string; en: string };
  festival?: string;
  poster: string;
  still: string;
  synopsis: { es: string; en: string };
  type: { es: string; en: string };
  genre: string;
  country: string;
  language: string;
  duration?: string;
  awards?: { es: string; en: string };
  watchUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "agaves-al-alba",
    title: "Agaves al alba",
    year: "2024",
    sortYear: 2024.0,
    status: { es: "Estrenado", en: "Released" },
    role: { es: "Director / Guionista", en: "Director / Writer" },
    festival: "FICTEQ",
    poster: posterAgaves,
    still: stillAgaves,
    type: { es: "Cortometraje", en: "Short Film" },
    genre: "Drama, LGBTQ+",
    country: "México",
    language: "Español",
    duration: "15 min",
    synopsis: {
      es: "Alejandro y Miguel, dos jóvenes unidos por un vínculo que trasciende la amistad, se ven obligados a confrontar una despedida inminente en los campos de agave de Tequila, Jalisco.",
      en: "Alejandro and Miguel, two young men bound by a connection beyond friendship, are forced to face an imminent farewell in the agave fields of Tequila, Jalisco.",
    },
    awards: {
      es: "Selección oficial FICTEQ.",
      en: "Official selection FICTEQ.",
    },
    watchUrl: "https://tv.festhome.com/view_film/307670",
  },
  {
    slug: "purpura-neon",
    title: "Púrpura Neón",
    year: "2024",
    sortYear: 2024.1,
    status: { es: "Estrenado", en: "Released" },
    role: { es: "Director / Guionista", en: "Director / Writer" },
    festival: "FICG 39",
    poster: posterPurpura,
    still: stillPurpura,
    type: { es: "Cortometraje", en: "Short Film" },
    genre: "Drama, LGBTQ+",
    country: "México",
    language: "Español",
    duration: "9 min",
    synopsis: {
      es: "Estrella, una drag queen emergente, se enfrenta a la ansiedad y desafíos en una noche crucial de su vida artística.",
      en: "Estrella, an emerging drag queen, faces anxiety and challenges on a crucial night in her artistic life.",
    },
    awards: {
      es: "Selección oficial en el Festival Internacional de Cine en Guadalajara (FICG) 2024, sección Hecho en Jalisco.",
      en: "Official selection at the Guadalajara International Film Festival (FICG) 2024, Made in Jalisco section.",
    },
    watchUrl: "https://tv.festhome.com/view_film/294886",
  },
  {
    slug: "el-ultimo-videoclub",
    title: "El último videoclub",
    year: "TBA",
    sortYear: 2026,
    status: { es: "En Producción", en: "In Production" },
    role: { es: "Director / Guionista", en: "Director / Writer" },
    poster: posterVideoclub,
    still: stillVideoclub,
    type: { es: "Largometraje", en: "Feature Film" },
    genre: "Drama, LGBTQ+",
    country: "México",
    language: "Español",
    synopsis: {
      es: "Luis intenta salvar el último videoclub de la ciudad para rescatar una memoria familiar borrada y evitar que su propia historia sea consumida por el olvido.",
      en: "Luis tries to save the last video store in the city to rescue an erased family memory and prevent his own history from being consumed by oblivion.",
    },
  },
].sort((a, b) => a.sortYear - b.sortYear);
