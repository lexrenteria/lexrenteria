import { useParams, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ProjectGallery from "@/components/ProjectGallery";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useI18n();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-cinematic flex items-center justify-center">
        <p className="text-muted-foreground font-body">Project not found.</p>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  const details = [
    { label: t.detail.type[lang], value: project.type[lang] },
    { label: t.detail.genre[lang], value: project.genre },
    { label: t.detail.director[lang], value: "Lex Rentería" },
    { label: t.detail.country[lang], value: project.country },
    { label: t.detail.language[lang], value: project.language },
    ...(project.duration ? [{ label: t.detail.duration[lang], value: project.duration }] : []),
    { label: t.detail.year[lang], value: project.year === "TBA" ? t.detail.comingSoon[lang] : project.year },
  ];

  return (
    <HelmetProvider>
      <SEOHead
        title={`${project.title} — Lex Rentería`}
        description={project.synopsis[lang].slice(0, 155)}
      />
      <Navbar />
      <main className="bg-cinematic min-h-screen pt-16">
        {/* ── ZONE A: Hero + Title + CTA ── */}
        <div className="relative w-full aspect-video max-h-[60vh] overflow-hidden">
          <img
            src={project.still}
            alt={`${project.title} still`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-10 pb-20">
          <Link
            to="/"
            className="inline-block text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            {t.detail.back[lang]}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-foreground italic mb-4"
          >
            {project.title}
          </motion.h1>

          {project.year === "TBA" ? (
            <span className="inline-block text-xs font-body tracking-widest uppercase text-primary mb-8">
              {lang === "es" ? "En desarrollo" : "In Development"}
            </span>
          ) : (
            <span className="inline-block text-xs font-body tracking-widest uppercase text-muted-foreground mb-8">
              {project.year}
            </span>
          )}

          {/* Watch Online CTA */}
          {project.watchUrl && (
            <div className="mb-16">
              <a
                href={project.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full sm:w-auto sm:inline-flex bg-primary text-primary-foreground px-10 py-4 text-base font-body font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity duration-300"
              >
                <ExternalLink size={18} />
                {lang === "es" ? "Ver Película" : "Watch Film"}
              </a>
              <p className="text-xs text-muted-foreground font-body mt-3">
                {lang === "es"
                  ? "Disponible gratis en Nuestro Cine MX (Requiere crear una cuenta gratuita)."
                  : "Available free on Nuestro Cine MX (Free account required)."}
              </p>
            </div>
          )}

          {/* ── ZONE B: Awards & Laurels (Full Width) ── */}
          {project.laurels && project.laurels.length > 0 && (
            <div className="mb-16">
              <h2 className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10 text-center">
                {t.detail.awards[lang]}
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                {project.laurels.map((laurel, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="relative flex flex-col items-center justify-center text-center w-[180px] h-[200px]"
                  >
                    {/* Classic laurel wreath SVG */}
                    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  className={`absolute inset-0 w-full h-full ${laurel.highlight ? "text-primary" : "text-foreground"}`}
  fill="currentColor"
>
  {/* Rama Izquierda */}
  <path d="M12.6,80.1 C11.5,77.9 10.9,75.4 10.9,72.9 C10.9,65.3 16.1,58.8 23.3,57 C22.1,59.3 21.5,61.8 21.5,64.4 C21.5,72 16.3,78.5 9.1,80.3 C10.2,80.2 11.4,80.2 12.6,80.1 Z M14.2,65.6 C12.4,63 11.4,59.9 11.4,56.6 C11.4,48.2 17.5,41 25.5,38.2 C24.1,40.8 23.3,43.7 23.3,46.7 C23.3,55.1 17.2,62.3 9.2,65.1 C10.8,65.5 12.5,65.6 14.2,65.6 Z M18.1,50.7 C15.7,47.7 14.2,43.9 14.2,39.8 C14.2,30.3 21.3,22.2 30.5,18.4 C28.8,21.5 27.8,25 27.8,28.8 C27.8,38.3 20.7,46.4 11.5,50.2 C13.6,50.8 15.8,50.9 18.1,50.7 Z M24.9,36.4 C22.1,33 20.5,28.7 20.5,24.1 C20.5,13.8 28.5,5 38.6,0.3 C36.5,3.9 35.3,8 35.3,12.4 C35.3,22.7 27.3,31.5 17.2,36.2 C19.6,36.8 22.2,36.9 24.9,36.4 Z M47.4,87 C45.6,88 43.6,88.7 41.6,89.1 C40.3,86.1 39.5,82.7 39.5,79.1 C39.5,70.6 44.8,63.1 52.4,59.9 C52.2,60.8 52.1,61.8 52.1,62.8 C52.1,72.4 46.5,80.6 38.2,84.4 C41.3,85.6 44.5,86.5 47.4,87 Z M36.3,80.2 C34.5,81.3 32.5,82.2 30.3,82.7 C28.9,79.6 28.1,76.2 28.1,72.6 C28.1,63.9 33.6,56.3 41.5,52.8 C41.2,53.8 41.1,54.8 41.1,55.9 C41.1,65.7 35.2,74 26.6,78 C29.9,79.1 33.2,79.9 36.3,80.2 Z M24.2,73 C22.6,74.2 20.8,75.1 18.9,75.8 C17.7,72.8 16.9,69.5 16.9,66.1 C16.9,57.7 22.1,50.4 29.8,47 C29.5,47.9 29.3,48.9 29.3,50 C29.3,59.5 23.8,67.6 15.4,71.4 C18.4,72.3 21.4,72.9 24.2,73 Z" />
  {/* Rama Derecha (Reflejo exacto) */}
  <path d="M87.4,80.1 C88.5,77.9 89.1,75.4 89.1,72.9 C89.1,65.3 83.9,58.8 76.7,57 C77.9,59.3 78.5,61.8 78.5,64.4 C78.5,72 83.7,78.5 90.9,80.3 C89.8,80.2 88.6,80.2 87.4,80.1 Z M85.8,65.6 C87.6,63 88.6,59.9 88.6,56.6 C88.6,48.2 82.5,41 74.5,38.2 C75.9,40.8 76.7,43.7 76.7,46.7 C76.7,55.1 82.8,62.3 90.8,65.1 C89.2,65.5 87.5,65.6 85.8,65.6 Z M81.9,50.7 C84.3,47.7 85.8,43.9 85.8,39.8 C85.8,30.3 78.7,22.2 69.5,18.4 C71.2,21.5 72.2,25 72.2,28.8 C72.2,38.3 79.3,46.4 88.5,50.2 C86.4,50.8 84.2,50.9 81.9,50.7 Z M75.1,36.4 C77.9,33 79.5,28.7 79.5,24.1 C79.5,13.8 71.5,5 61.4,0.3 C63.5,3.9 64.7,8 64.7,12.4 C64.7,22.7 72.7,31.5 82.8,36.2 C80.4,36.8 77.8,36.9 75.1,36.4 Z M52.6,87 C54.4,88 56.4,88.7 58.4,89.1 C59.7,86.1 60.5,82.7 60.5,79.1 C60.5,70.6 55.2,63.1 47.6,59.9 C47.8,60.8 47.9,61.8 47.9,62.8 C47.9,72.4 53.5,80.6 61.8,84.4 C58.7,85.6 55.5,86.5 52.6,87 Z M63.7,80.2 C65.5,81.3 67.5,82.2 69.7,82.7 C71.1,79.6 71.9,76.2 71.9,72.6 C71.9,63.9 66.4,56.3 58.5,52.8 C58.8,53.8 58.9,54.8 58.9,55.9 C58.9,65.7 64.8,74 73.4,78 C70.1,79.1 66.8,79.9 63.7,80.2 Z M75.8,73 C77.4,74.2 79.2,75.1 81.1,75.8 C82.3,72.8 83.1,69.5 83.1,66.1 C83.1,57.7 77.9,50.4 70.2,47 C70.5,47.9 70.7,48.9 70.7,50 C70.7,59.5 76.2,67.6 84.6,71.4 C81.6,72.3 78.6,72.9 75.8,73 Z" />
  {/* Cinta inferior */}
  <path d="M50,100 C48.5,100 47,99.5 45.8,98.6 L34.7,90.2 L48.3,92.5 C49.4,92.7 50.6,92.7 51.7,92.5 L65.3,90.2 L54.2,98.6 C53,99.5 51.5,100 50,100 Z" />
</svg>
                    <div className="relative z-10 px-7 flex flex-col items-center gap-0.5">
                      <span className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                        {lang === "es" ? "Selección Oficial" : "Official Selection"}
                      </span>
                      <span className={`font-body text-sm font-black uppercase tracking-wide leading-tight mt-1 ${laurel.highlight ? "text-primary" : "text-foreground"}`}>
                        {laurel.main}
                      </span>
                      {laurel.sub && (
                        <span className="font-body text-[9px] leading-tight text-muted-foreground mt-0.5">
                          {laurel.sub}
                        </span>
                      )}
                      <span className="font-body text-xs font-semibold tracking-widest text-foreground mt-1">
                        {laurel.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ── ZONE C: Split Layout — Synopsis + Poster/Specs ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            {/* Left Column (60%) — Synopsis */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                {t.detail.synopsis[lang]}
              </h2>
              <div className="text-muted-foreground font-body text-base leading-relaxed space-y-4">
                {project.synopsis[lang].split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right Column (40%) — Poster + Tech Specs */}
            <div className="lg:col-span-2 space-y-8">
              {/* Official Poster */}
              <div className="border border-border rounded-sm overflow-hidden">
                <img
                  src={project.poster}
                  alt={`${project.title} poster`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Tech Specs Table */}
              <div className="border border-border rounded-sm overflow-hidden">
                {details.map((d, i) => (
                  <div
                    key={d.label}
                    className={`flex justify-between px-5 py-3 text-sm font-body ${
                      i % 2 === 0 ? "bg-card" : "bg-background"
                    }`}
                  >
                    <span className="text-muted-foreground">{d.label}</span>
                    <span className="text-foreground text-right">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legacy awards fallback */}
          {project.awards && !project.laurels && (
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                {t.detail.awards[lang]}
              </h2>
              <p className="text-muted-foreground font-body">{project.awards[lang]}</p>
            </div>
          )}

          {/* ── ZONE D: Gallery + Related ── */}
          {project.gallery && project.gallery.length > 0 && (
            <ProjectGallery images={project.gallery} title={project.title} />
          )}

          {relatedProjects.length > 0 && (
            <div className="mt-20 pt-12 border-t border-border">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                {lang === "es" ? "Más Proyectos" : "More Projects"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/projects/${rp.slug}`}
                    className="group block border border-border rounded-sm overflow-hidden bg-card-gradient transition-all duration-500 accent-border-hover"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={rp.still}
                        alt={`${rp.title} still`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      {rp.year === "TBA" ? (
                        <span className="inline-block text-xs font-body tracking-widest uppercase text-primary mb-1">
                          {lang === "es" ? "En desarrollo" : "In Development"}
                        </span>
                      ) : (
                        <span className="inline-block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1">
                          {rp.year}
                        </span>
                      )}
                      <h3 className="font-heading text-lg font-bold text-foreground italic">
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <FooterSection />
      </main>
    </HelmetProvider>
  );
};

export default ProjectDetail;
