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
  viewBox="0 0 512 512"
  className={`absolute inset-0 w-full h-full ${laurel.highlight ? "text-primary" : "text-foreground"}`}
  fill="currentColor"
>
  {/* Rama izquierda */}
  <path d="M235.6 107.7c-3.3-15.4-22.8-24-35.2-15.5-24.3 16.6-46.9 36.7-66.5 59.9-6.5 7.7-12.6 15.7-18.2 24.1-5.3 8-4.5 18.7 2.1 25.8 6.5 7 16.9 8.8 25.5 4.4 13.8-7.1 28.2-13.1 42.9-17.9 11.6-3.8 23.5-7 35.5-9.7 9.5-2.1 16.7-10.1 18-19.8 1.3-9.6-3.7-19.2-12.3-23.5-11.7-5.9-23.7-11.1-36-15.5 14-6.8 28.2-13.1 42.6-18.8 9.6-3.8 16.6-12.6 17.7-22.9 1.2-10.3-4.4-20.3-13.9-25.1-11-5.6-22.3-10.6-34-15.1 14.3-6.5 28.8-12.4 43.6-17.8 9.6-3.5 16.8-12 18.2-22.1zM110.9 227.2c-3 15.4-17.3 28.1-32.9 29.2-15.6 1.1-30.6-8.7-35.1-23.7-8.6-28.7-14.1-59.1-16.3-90.1-1-14.3 7.3-28.1 19.9-34.3 12.7-6.3 27.9-3.7 37.8 6.5 15.9 16.3 29.9 34.7 41.7 54.8 6.2 10.5 8.4 23.1 5.8 35.1-2.5 11.9-10.2 22.3-20.9 28.2zm25.6 81.3c-8.3 13.6-24.6 20.2-39.9 16.1-15.3-4-26.5-17.6-27.5-33.4-2.1-31 0-62.3 6.2-92.7 2.9-14 15.3-24.8 29.5-26.2 14.2-1.3 28.1 5.9 34.6 18.2 10.4 19.9 18.6 41.8 24.3 64.8 3.1 12.3 0 25.4-8.4 35.4-8.5 10.1-21 16.5-34.1 17.8z" />
  {/* Rama derecha (reflejo) */}
  <path d="M276.4 107.7c3.3-15.4 22.8-24 35.2-15.5 24.3 16.6 46.9 36.7 66.5 59.9 6.5 7.7 12.6 15.7 18.2 24.1 5.3 8 4.5 18.7-2.1 25.8-6.5 7-16.9 8.8-25.5 4.4-13.8-7.1-28.2-13.1-42.9-17.9-11.6-3.8-23.5-7-35.5-9.7-9.5-2.1-16.7-10.1-18-19.8-1.3-9.6 3.7-19.2 12.3-23.5 11.7-5.9 23.7-11.1 36-15.5-14-6.8-28.2-13.1-42.6-18.8-9.6-3.8-16.6-12.6-17.7-22.9-1.2-10.3 4.4-20.3 13.9-25.1 11-5.6 22.3-10.6 34-15.1-14.3-6.5-28.8-12.4-43.6-17.8-9.6-3.5-16.8-12-18.2-22.1zm124.7 119.5c3 15.4 17.3 28.1 32.9 29.2 15.6 1.1 30.6-8.7 35.1-23.7 8.6-28.7 14.1-59.1 16.3-90.1 1-14.3-7.3-28.1-19.9-34.3-12.7-6.3-27.9-3.7-37.8 6.5-15.9 16.3-29.9 34.7-41.7 54.8-6.2 10.5-8.4 23.1-5.8 35.1 2.5 11.9 10.2 22.3 20.9 28.2zm-25.6 81.3c8.3 13.6 24.6 20.2 39.9 16.1 15.3-4 26.5-17.6 27.5-33.4 2.1-31 0-62.3-6.2-92.7-2.9-14-15.3-24.8-29.5-26.2-14.2-1.3-28.1 5.9-34.6 18.2-10.4 19.9-18.6 41.8-24.3 64.8-3.1 12.3 0 25.4 8.4 35.4 8.5 10.1 21 16.5 34.1 17.8z" />
  {/* Unión inferior */}
  <path d="M244.7 424.9c-20.2-9.9-37.8-24.3-52.3-42.2-6.5-8-6.5-19.5-.2-27.7 6.2-8.2 16.5-11.7 26.3-9.1 13.2 3.4 25.8 8.5 37.5 15 11.7-6.5 24.3-11.5 37.5-15 9.8-2.6 20.1.8 26.3 9.1 6.3 8.2 6.3 19.7-.2 27.7-14.5 18-32.1 32.3-52.3 42.2-6.9 3.4-15 3.4-21.9 0z" />
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
