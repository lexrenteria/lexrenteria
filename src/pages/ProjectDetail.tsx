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
  viewBox="0 0 512 512"
  className={`absolute inset-0 w-full h-full ${laurel.highlight ? "text-primary" : "text-foreground"}`}
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M60.8 193.3c-15-2.6-30-2.3-44.5 2.1-3.6 1.1-5.7 5.1-4.6 8.7 18.5 61.2 55.4 113.8 106.3 151.7-4 13.9-9.9 27.2-17.5 39.7-2 3.4-1.2 7.8 1.9 10.3 35.5 28.5 77.2 46.5 122.3 52.3 4.2.5 8-2.3 8.7-6.5.7-4.2-2.3-8-6.5-8.7-41.2-5.3-79.3-21.7-111.8-47.5 7-11.8 12.6-24.3 16.5-37.4 3.7-12.2 6.5-24.8 8.4-37.6-5.8-.3-11.5-.9-17-1.8-5.3-.9-10.4-2-15.2-3.4 18.2-10 33-24.2 43-41.7 8.3-14.7 13.1-31.4 14.1-49 3.2 4.1 6.3 8.3 9.3 12.7 8.3 12.1 14.8 25.4 19.1 39.5-22.3-13.8-41-32.9-54.6-55.6-11.6-19.4-18.7-41.5-21-64.8 6.7 5.8 13.2 11.8 19.3 18.2 13.8 14.4 24.8 30.8 32.5 48.7-16-19-27.4-41.4-33-65.7-4.6-20.2-5-41.1-1.3-61.4 8 3.5 15.6 7.6 22.8 12.2 17 10.8 31.4 24.2 42.1 39.6-7.8-21.8-10.7-45.5-8.3-69.2 1.9-19.1 7.2-37.5 15.4-54.3 6.6-1.5 13.3-2.6 20.1-3.2 21.6-2.1 42.9 2.5 60.9 13.1-1.2-22.7 3.3-45.6 13.6-66.2 8-16 19.6-29.8 33.7-40 2.3-1.6 4.3-3.1 6.3-4.5 1.4-.9 2.7-1.8 4.1-2.7 1.8-1.2 3.6-2.3 5.4-3.4l.6-.4c3.3-1.9 7.4-1.2 10.1 1.6 2.3 2.5 2.8 6.2 1.2 9.2-28.7 51.5-31.9 113.8-9 168.1 1.6 3.9-.2 8.4-4 10.3-20.1 9.7-37.5 24.6-50.7 43.1-4.4 6.1-8.3 12.6-11.5 19.5 21.1-8.5 44-11.4 66.8-8.2 4.1.6 6.9 4.4 6.3 8.6-.6 4.1-4.4 6.9-8.6 6.3-20.3-2.8-40.7-.5-59.5 6.6-2.4 5.2-4.4 10.6-6 16.2 18 1.1 35.8 7.4 51.3 18.1 3.4 2.4 4.3 7 1.9 10.4-2.4 3.4-7 4.3-10.4 1.9-13.8-9.6-29.7-15.5-46.2-16.9-1.3 4.8-2.2 9.8-2.8 14.8 13 8.9 23.6 20.8 30.6 34.6 1.9 3.7.4 8.2-3.3 10.1-3.7 1.9-8.2.4-10.1-3.3-6.2-12.1-15.3-22.5-26.6-30.4-.2 4-.1 8.1.3 12.2 6.6 15 17 28 30.1 38 3.2 2.5 3.8 7.2 1.3 10.4-2.5 3.2-7.2 3.8-10.4 1.3-11.7-9-21-20.5-27-33.8 2.6 21 11.2 40.8 24.7 57.3 2.6 3.2 2.1 7.8-1.1 10.3-12.9 10.4-27.5 17.5-43 21-29.6 6.7-60.6 4.1-88.7-7.4-11.8 15.8-26.1 29.8-42.3 41.5 53.6-25 96.5-66.7 121.2-118.5 1.9-3.9.2-8.6-3.7-10.5-3.9-1.9-8.6-.2-10.5 3.7-22.3 46.8-59.3 84.8-106.6 109 23-14 43.6-31.9 60.5-52.9 2.5-3.2 2-7.8-1.2-10.3-3.2-2.5-7.8-2-10.3 1.2-15.5 19.2-34.4 35.6-55.7 48.4 21.6-24.8 36.3-54.8 41.7-87.5.7-4.1-2.1-8-6.3-8.8-4.1-.7-8 2.1-8.8 6.3-4.9 29.8-18.4 57.1-38.1 80 13.2-30.8 17.5-64.4 12-97.7-.6-4-4.5-6.8-8.5-6.2-4 .6-6.8 4.5-6.2 8.5 4.9 30.2 1.3 60.8-10.3 88.8 3.1-35.4-4.5-70.8-21.7-102-1.9-3.5-6.2-4.9-9.7-3-3.5 1.9-4.9 6.2-3 9.7 15.6 28.5 22.5 60.7 19.8 93-7.5-36.4-25.7-70.2-52.3-97.4-2.9-3-7.6-3.1-10.6-.2-3 2.9-3.1 7.6-.2 10.6 24.3 24.8 40.9 55.6 47.9 88.8-25.1-49.3-64.8-90.1-113.8-116.6-3.6-1.9-8.1-.6-10 3-1.9 3.6-.6 8.1 3 10 44.4 24 80.4 61.1 103.3 105.7zM451.2 193.3c15-2.6 30-2.3 44.5 2.1 3.6 1.1 5.7 5.1 4.6 8.7-18.5 61.2-55.4 113.8-106.3 151.7 4 13.9 9.9 27.2 17.5 39.7 2 3.4 1.2 7.8-1.9 10.3-35.5 28.5-77.2 46.5-122.3 52.3-4.2.5-8-2.3-8.7-6.5-.7-4.2 2.3-8 6.5-8.7 41.2-5.3 79.3-21.7 111.8-47.5-7-11.8-12.6-24.3-16.5-37.4-3.7-12.2-6.5-24.8-8.4-37.6 5.8-.3 11.5-.9 17-1.8 5.3-.9 10.4-2 15.2-3.4-18.2-10-33-24.2-43-41.7-8.3-14.7-13.1-31.4-14.1-49-3.2 4.1-6.3 8.3-9.3 12.7-8.3 12.1-14.8 25.4-19.1 39.5 22.3-13.8 41-32.9 54.6-55.6 11.6-19.4 18.7-41.5 21-64.8-6.7 5.8-13.2 11.8-19.3 18.2-13.8 14.4-24.8 30.8-32.5 48.7 16-19 27.4-41.4 33-65.7 4.6-20.2 5-41.1 1.3-61.4-8 3.5-15.6 7.6-22.8 12.2-17 10.8-31.4 24.2-42.1 39.6 7.8-21.8 10.7-45.5 8.3-69.2-1.9-19.1-7.2-37.5-15.4-54.3-6.6-1.5-13.3-2.6-20.1-3.2-21.6-2.1-42.9 2.5-60.9 13.1 1.2-22.7-3.3-45.6-13.6-66.2-8-16-19.6-29.8-33.7-40-2.3-1.6-4.3-3.1-6.3-4.5-1.4-.9-2.7-1.8-4.1-2.7-1.8-1.2-3.6-2.3-5.4-3.4l-.6-.4c-3.3-1.9-7.4-1.2-10.1 1.6-2.3 2.5-2.8 6.2-1.2 9.2 28.7 51.5 31.9 113.8 9 168.1-1.6 3.9.2 8.4 4 10.3 20.1 9.7 37.5 24.6 50.7 43.1 4.4 6.1 8.3 12.6 11.5 19.5-21.1-8.5-44-11.4-66.8-8.2-4.1.6-6.9 4.4-6.3 8.6.6 4.1 4.4 6.9 8.6 6.3 20.3-2.8 40.7-.5 59.5 6.6 2.4 5.2 4.4 10.6 6 16.2-18 1.1-35.8 7.4-51.3 18.1-3.4 2.4-4.3 7-1.9 10.4 2.4 3.4 7 4.3 10.4 1.9 13.8-9.6 29.7-15.5 46.2-16.9 1.3 4.8 2.2 9.8 2.8 14.8-13 8.9-23.6 20.8-30.6 34.6-1.9 3.7-.4 8.2 3.3 10.1 3.7 1.9 8.2.4 10.1-3.3 6.2-12.1 15.3-22.5 26.6-30.4.2 4 .1 8.1-.3 12.2-6.6 15-17 28-30.1 38-3.2 2.5-3.8 7.2-1.3 10.4 2.5 3.2 7.2 3.8 10.4 1.3 11.7-9 21-20.5 27-33.8-2.6 21-11.2 40.8-24.7 57.3-2.6 3.2-2.1 7.8 1.1 10.3 12.9 10.4 27.5 17.5 43 21 29.6 6.7 60.6 4.1 88.7-7.4 11.8 15.8 26.1 29.8 42.3 41.5-53.6-25-96.5-66.7-121.2-118.5-1.9-3.9-.2-8.6 3.7-10.5 3.9-1.9 8.6-.2 10.5 3.7 22.3 46.8 59.3 84.8 106.6 109-23-14-43.6-31.9-60.5-52.9-2.5-3.2-2-7.8 1.2-10.3 3.2-2.5 7.8-2 10.3 1.2 15.5 19.2 34.4 35.6 55.7 48.4-21.6-24.8-36.3-54.8-41.7-87.5-.7-4.1 2.1-8 6.3-8.8 4.1-.7 8 2.1 8.8 6.3 4.9 29.8 18.4 57.1 38.1 80-13.2-30.8-17.5-64.4-12-97.7.6-4 4.5-6.8 8.5-6.2 4 .6 6.8 4.5 6.2 8.5-4.9 30.2-1.3 60.8 10.3 88.8-3.1-35.4 4.5-70.8 21.7-102 1.9-3.5 6.2-4.9 9.7-3 3.5 1.9 4.9 6.2 3 9.7-15.6 28.5-22.5 60.7-19.8 93 7.5-36.4 25.7-70.2 52.3-97.4 2.9-3 7.6-3.1 10.6-.2 3 2.9 3.1 7.6 .2 10.6-24.3 24.8-40.9 55.6-47.9 88.8 25.1-49.3 64.8-90.1 113.8-116.6 3.6-1.9 8.1-.6 10 3 1.9 3.6 .6 8.1-3 10-44.4 24-80.4 61.1-103.3 105.7z"/>
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
