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
                      viewBox="0 0 200 220"
                      className={`absolute inset-0 w-full h-full ${laurel.highlight ? "text-primary" : "text-foreground"}`}
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.9">
                        <ellipse cx="36" cy="165" rx="16" ry="6" transform="rotate(-10 36 165)" />
                        <ellipse cx="26" cy="143" rx="16" ry="6" transform="rotate(-22 26 143)" />
                        <ellipse cx="20" cy="119" rx="15" ry="6" transform="rotate(-38 20 119)" />
                        <ellipse cx="20" cy="95" rx="14" ry="5.5" transform="rotate(-55 20 95)" />
                        <ellipse cx="28" cy="73" rx="13" ry="5" transform="rotate(-68 28 73)" />
                        <ellipse cx="42" cy="55" rx="12" ry="5" transform="rotate(-78 42 55)" />
                        <ellipse cx="62" cy="42" rx="11" ry="4.5" transform="rotate(-85 62 42)" />
                        <ellipse cx="84" cy="35" rx="10" ry="4" transform="rotate(-89 84 35)" />
                      </g>
                      <g opacity="0.9">
                        <ellipse cx="164" cy="165" rx="16" ry="6" transform="rotate(10 164 165)" />
                        <ellipse cx="174" cy="143" rx="16" ry="6" transform="rotate(22 174 143)" />
                        <ellipse cx="180" cy="119" rx="15" ry="6" transform="rotate(38 180 119)" />
                        <ellipse cx="180" cy="95" rx="14" ry="5.5" transform="rotate(55 180 95)" />
                        <ellipse cx="172" cy="73" rx="13" ry="5" transform="rotate(68 172 73)" />
                        <ellipse cx="158" cy="55" rx="12" ry="5" transform="rotate(78 158 55)" />
                        <ellipse cx="138" cy="42" rx="11" ry="4.5" transform="rotate(85 138 42)" />
                        <ellipse cx="116" cy="35" rx="10" ry="4" transform="rotate(89 116 35)" />
                      </g>
                      <line x1="78" y1="185" x2="100" y2="198" stroke="currentColor" strokeWidth="2.5" />
                      <line x1="122" y1="185" x2="100" y2="198" stroke="currentColor" strokeWidth="2.5" />
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
