import { useParams, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";

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

          <span className="inline-block text-xs font-body tracking-widest uppercase text-primary mb-8">
            {project.status[lang]}
          </span>

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

          {/* Awards */}
          {project.awards && (
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                {t.detail.awards[lang]}
              </h2>
              <p className="text-muted-foreground font-body">{project.awards[lang]}</p>
            </div>
          )}

          {/* Watch link */}
          {project.watchUrl && (
            <a
              href={project.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-primary/40 px-8 py-3 text-sm font-body tracking-widest uppercase text-primary hover:bg-primary/10 transition-all duration-300 accent-border-hover rounded-sm"
            >
              {t.detail.watchOnline[lang]}
            </a>
          )}

          {/* Gallery placeholder */}
          <div className="mt-16 border border-dashed border-border rounded-sm p-12 text-center">
            <p className="text-muted-foreground font-body text-sm tracking-wide uppercase">
              {lang === "es" ? "Galería — próximamente" : "Gallery — coming soon"}
            </p>
          </div>
        </div>
      </main>
    </HelmetProvider>
  );
};

export default ProjectDetail;
