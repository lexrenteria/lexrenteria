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
        description={project.synopsis[lang]}
      />
      <Navbar />
      <main className="bg-cinematic min-h-screen pt-16">
        {/* Hero still */}
        <div className="relative w-full aspect-video max-h-[60vh] overflow-hidden">
          <img
            src={project.still}
            alt={`${project.title} still`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6 -mt-20 relative z-10 pb-20">
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
            <div className="mb-12">
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

          {/* Synopsis */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t.detail.synopsis[lang]}
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              {project.synopsis[lang]}
            </p>
          </div>

          {/* Details table */}
          <div className="border border-border rounded-sm overflow-hidden mb-12">
            {details.map((d, i) => (
              <div
                key={d.label}
                className={`flex justify-between px-6 py-3 text-sm font-body ${
                  i % 2 === 0 ? "bg-card" : "bg-background"
                }`}
              >
                <span className="text-muted-foreground">{d.label}</span>
                <span className="text-foreground">{d.value}</span>
              </div>
            ))}
          </div>

          {/* Awards & Selections — Film Industry Laurels */}
          {project.laurels && project.laurels.length > 0 && (
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
                {t.detail.awards[lang]}
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {project.laurels.map((laurel, i) => {
                  const yearMatch = laurel.text.match(/(\d{4,})/);
                  const year = yearMatch ? yearMatch[1] : "";
                  const festName = laurel.text.replace(/\s*\d{4,}\s*/, " ").trim();
                  const isHighlight = laurel.highlight;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07 }}
                      className={`relative flex flex-col items-center justify-center text-center w-[170px] h-[190px] ${
                        isHighlight ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {/* Laurel Wreath SVG */}
                      <svg
                        viewBox="0 0 200 220"
                        className="absolute inset-0 w-full h-full"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Left branch */}
                        <g opacity="0.85">
                          <ellipse cx="38" cy="160" rx="14" ry="7" transform="rotate(-15 38 160)" />
                          <ellipse cx="28" cy="140" rx="14" ry="7" transform="rotate(-25 28 140)" />
                          <ellipse cx="22" cy="118" rx="13" ry="7" transform="rotate(-40 22 118)" />
                          <ellipse cx="22" cy="96" rx="12" ry="6" transform="rotate(-55 22 96)" />
                          <ellipse cx="30" cy="76" rx="11" ry="6" transform="rotate(-65 30 76)" />
                          <ellipse cx="44" cy="58" rx="10" ry="5.5" transform="rotate(-75 44 58)" />
                          <ellipse cx="62" cy="46" rx="10" ry="5" transform="rotate(-82 62 46)" />
                          <ellipse cx="82" cy="38" rx="9" ry="5" transform="rotate(-88 82 38)" />
                        </g>
                        {/* Right branch */}
                        <g opacity="0.85">
                          <ellipse cx="162" cy="160" rx="14" ry="7" transform="rotate(15 162 160)" />
                          <ellipse cx="172" cy="140" rx="14" ry="7" transform="rotate(25 172 140)" />
                          <ellipse cx="178" cy="118" rx="13" ry="7" transform="rotate(40 178 118)" />
                          <ellipse cx="178" cy="96" rx="12" ry="6" transform="rotate(55 178 96)" />
                          <ellipse cx="170" cy="76" rx="11" ry="6" transform="rotate(65 170 76)" />
                          <ellipse cx="156" cy="58" rx="10" ry="5.5" transform="rotate(75 156 58)" />
                          <ellipse cx="138" cy="46" rx="10" ry="5" transform="rotate(82 138 46)" />
                          <ellipse cx="118" cy="38" rx="9" ry="5" transform="rotate(88 118 38)" />
                        </g>
                        {/* Bottom stem cross */}
                        <line x1="80" y1="185" x2="100" y2="195" stroke="currentColor" strokeWidth="2" />
                        <line x1="120" y1="185" x2="100" y2="195" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      {/* Text content */}
                      <div className="relative z-10 px-8 flex flex-col items-center gap-1">
                        <span className="text-[9px] font-body tracking-[0.3em] uppercase opacity-70">
                          {lang === "es" ? "Selección Oficial" : "Official Selection"}
                        </span>
                        <span className="font-heading text-[11px] font-bold leading-tight italic mt-1">
                          {festName}
                        </span>
                        {year && (
                          <span className="text-[11px] font-body font-semibold tracking-wider mt-1">
                            {year}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Legacy awards fallback */}
          {project.awards && !project.laurels && (
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                {t.detail.awards[lang]}
              </h2>
              <p className="text-muted-foreground font-body">{project.awards[lang]}</p>
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <ProjectGallery images={project.gallery} title={project.title} />
          )}

          {/* Related Projects */}
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
