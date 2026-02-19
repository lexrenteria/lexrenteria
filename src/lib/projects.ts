import posterAgaves from "@/assets/poster-agaves.jpg";
import posterPurpura from "@/assets/poster-purpura-neon.jpg";
import posterVideoclub from "@/assets/poster-ultimo-videoclub.jpg";
import stillAgaves from "@/assets/still-agaves.jpg";
import stillPurpura from "@/assets/still-purpura-neon.jpg";
import stillVideoclub from "@/assets/still-ultimo-videoclub.png";

export interface Laurel {
  main: string;
  sub?: string;
  year: string;
  highlight?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  sortOrder: number;
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
  laurels?: Laurel[];
  watchUrl?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    slug: "purpura-neon",
    title: "Púrpura Neón",
    year: "2024",
    sortOrder: 1,
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
    laurels: [
      { main: "FICG", sub: "Festival Internacional de Cine de Guadalajara", year: "2024", highlight: true },
      { main: "Shorts México", year: "2024" },
      { main: "Festival Mix México", year: "2024" },
      { main: "Queer International Film Festival", sub: "Playa del Carmen", year: "2024" },
      { main: "FICCMADERO", sub: "Festival Internacional de Cine de Ciudad Madero", year: "2024" },
      { main: "Krew!", sub: "Festidrag de Cine", year: "2024" },
      { main: "FICLAPAZ", sub: "Festival Internacional de Cine de La Paz", year: "2024" },
    ],
    watchUrl: "https://www.nuestrocine.mx/detail/1546",
    gallery: [
      "https://image.tmdb.org/t/p/original/xylHqiVLBpYxflZzmLNM5IAUrxf.jpg",
      "https://image.tmdb.org/t/p/original/n4mpWdQPWh3bM5nDrkImYulvBY4.jpg",
      "https://image.tmdb.org/t/p/original/vEtrfW8FC6L0VZmDUMfPtcaBJhq.jpg",
      "https://image.tmdb.org/t/p/original/7BlwtN8ShfucGkDGrBAHl8YZvwg.jpg",
      "https://m.media-amazon.com/images/M/MV5BZGE2YTJmZDYtNGFlMC00ZmQxLTkwYzUtYzVmMzRiOWVjODZmXkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
      "https://m.media-amazon.com/images/M/MV5BNTdlNTc4OTEtYzdlNy00MzRlLTliZjAtMzA4OGFjNTQwYWNlXkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
      "https://m.media-amazon.com/images/M/MV5BZTdmZmRjOTAtODBlZC00NTE3LTljMDUtOGJiM2I4MWIzNWJkXkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
      "https://m.media-amazon.com/images/M/MV5BNDg1Mjc3MmMtZWUxNy00MjExLTliODctYzI4Njc1Y2JlY2EyXkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
    ],
  },
  {
    slug: "agaves-al-alba",
    title: "Agaves al alba",
    year: "2024",
    sortOrder: 2,
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
    laurels: [
      { main: "FICTEQUILA", sub: "Festival Internacional de Cine de Tequila", year: "2024", highlight: true },
      { main: "Shorts México", year: "2024" },
      { main: "Queer International Film Festival", sub: "Playa del Carmen", year: "2024" },
      { main: "FICI", sub: "Festival Internacional de Cine Independiente LGBTIQ+", year: "2025" },
    ],
    watchUrl: "https://www.nuestrocine.mx/detail/1517",
    gallery: [
      "https://image.tmdb.org/t/p/original/rScJM707GozCiyT42qwkJnlMazh.jpg",
      "https://image.tmdb.org/t/p/original/j3cWiRZrJVcHQ6eVH0hsy0ZtHVI.jpg",
      "https://image.tmdb.org/t/p/original/zSHsmcqvnia0LwktTIiGvf5Uv64.jpg",
      "https://image.tmdb.org/t/p/original/doAxMvrfqTCbZ5jh5AwGvS6G2nG.jpg",
      "https://image.tmdb.org/t/p/original/krHhJxg0kyP6hD6RGNha27ZXg5w.jpg",
      "https://image.tmdb.org/t/p/original/8tEMzQUwignr8if88eNeI9O0m1q.jpg",
      "https://image.tmdb.org/t/p/original/dgvFcz0DkdjnXjnFzB7f99NzwMi.jpg",
      "https://image.tmdb.org/t/p/original/ayBpmTrvf6giLXncPjQmOEaOMML.jpg",
      "https://image.tmdb.org/t/p/original/fvVk5fCRSJpmhEw67NMKAyJbtQB.jpg",
      "https://image.tmdb.org/t/p/original/lAOEGIqhQPbDzxMKwYmYuDOtnao.jpg",
      "https://image.tmdb.org/t/p/original/iEPskvKCgvDuGj7Vx9EgCoNj0md.jpg",
      "https://image.tmdb.org/t/p/original/rlzBQm3tkjsKD3uT1a5vyzoDxRF.jpg",
    ],
  },
  {
    slug: "el-ultimo-videoclub",
    title: "El último videoclub",
    year: "TBA",
    sortOrder: 3,
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
].sort((a, b) => a.sortOrder - b.sortOrder);
