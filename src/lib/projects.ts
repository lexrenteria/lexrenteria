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
  /** HSL values (no hsl() wrapper) used as the per-project accent, e.g. "272 55% 62%" */
  accent: string;
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
    accent: "272 55% 62%",
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
      es: "\"Púrpura Neón\" es un cortometraje mexicano que nos sumerge en la vibrante y desafiante vida de Estrella Divina, una drag queen al borde de una actuación crucial que podría catapultar su carrera. La presión es intensa, especialmente con la presencia de su ídolo, Stella Balencia, entre el público.\n\nPero más allá de los nervios y las expectativas, Estrella se enfrenta a un viaje personal de transformación y autoaceptación. A través de la música, el baile y la explosión de colores del mundo drag, la película explora temas universales como la resiliencia, la búsqueda de la identidad y el poder del arte para sanar.\n\nEn un mundo que a menudo exige conformidad, \"Púrpura Neón\" es un canto a la valentía de ser uno mismo, una celebración de la individualidad y un recordatorio de que la verdadera belleza reside en abrazar nuestra autenticidad.",
      en: "\"Púrpura Neón\" is a Mexican short film that immerses us in the vibrant and challenging life of Estrella Divina, a drag queen on the verge of a crucial performance that could launch her career. The pressure is intense, especially with her idol, Stella Balencia, in the audience.\n\nBeyond the nerves and expectations, Estrella faces a personal journey of transformation and self-acceptance. Through music, dance, and the explosion of colors in the drag world, the film explores universal themes such as resilience, the search for identity, and the power of art to heal.\n\nIn a world that often demands conformity, \"Púrpura Neón\" is a hymn to the courage of being oneself, a celebration of individuality, and a reminder that true beauty lies in embracing our authenticity.",
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
    accent: "174 55% 42%",
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
      es: "\"Agaves al alba\" es un cortometraje que nos sumerge en la belleza agreste de los campos de agave de Tequila, Jalisco, en la década de 2000. Aquí, Alejandro y Miguel, dos jóvenes amigos unidos por un vínculo que trasciende la amistad, se ven obligados a confrontar una despedida inminente.\n\nLa película explora la intensidad de su amor prohibido, un amor que florece en secreto en un entorno rural donde la aceptación es escasa. A través de flashbacks emotivos y la poética del paisaje agavero, somos testigos de la lucha de estos jóvenes por encontrar un refugio seguro para su amor, un espacio donde puedan ser ellos mismos sin miedo al juicio o la discriminación.\n\nAlejandro, un joven soñador con aspiraciones de un futuro mejor, se debate entre el amor que siente por Miguel y el miedo a la reacción de su familia y comunidad. Miguel, por su parte, lucha contra la frustración de tener que ocultar sus sentimientos y la incertidumbre de un futuro incierto.\n\n\"Agaves al alba\" es una historia de amor, pérdida y resiliencia. Es un homenaje a aquellos que han tenido que luchar por amar libremente en entornos adversos, y un recordatorio de que el amor, en todas sus formas, siempre encuentra una manera de florecer, incluso en los lugares más inesperados.",
      en: "\"Agaves al alba\" is a short film that immerses us in the rugged beauty of the agave fields of Tequila, Jalisco, in the 2000s. Here, Alejandro and Miguel, two young friends bound by a connection that transcends friendship, are forced to confront an imminent farewell.\n\nThe film explores the intensity of their forbidden love, a love that blooms in secret in a rural environment where acceptance is scarce. Through emotive flashbacks and the poetry of the agave landscape, we witness the struggle of these young men to find a safe haven for their love, a space where they can be themselves without fear of judgment or discrimination.\n\nAlejandro, a young dreamer with aspirations for a better future, is torn between his love for Miguel and the fear of his family's and community's reaction. Miguel, for his part, fights against the frustration of having to hide his feelings and the uncertainty of an unclear future.\n\n\"Agaves al alba\" is a story of love, loss, and resilience. It is a tribute to those who have had to fight to love freely in adverse environments, and a reminder that love, in all its forms, always finds a way to bloom, even in the most unexpected places.",
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
    accent: "213 70% 55%",
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
