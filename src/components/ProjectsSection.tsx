import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const ProjectsSection = () => {
  const { lang, t } = useI18n();

  return (
    <section id="projects" className="relative py-28 px-6" aria-label={t.projects.title[lang]}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-16 text-center italic"
        >
          {t.projects.title[lang]}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group relative border border-border rounded-sm overflow-hidden bg-card-gradient transition-all duration-500 accent-border-hover"
            >
              <Link to={`/projects/${project.slug}`} className="block">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.still}
                    alt={`${project.title} still`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  {project.year === "TBA" ? (
                    <span className="inline-block text-xs font-body tracking-widest uppercase text-primary mb-2">
                      {lang === "es" ? "En desarrollo" : "In Development"}
                    </span>
                  ) : (
                    <span className="inline-block text-xs font-body tracking-widest uppercase text-muted-foreground mb-2">
                      {project.year}
                    </span>
                  )}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-1 italic">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground font-body">
                    <span>{project.role[lang]}</span>
                    {project.festival && (
                      <>
                        <span>·</span>
                        <span className="text-primary/80">{project.festival}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
