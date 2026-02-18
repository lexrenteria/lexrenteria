import { motion } from "framer-motion";

interface Project {
  title: string;
  year: string;
  status: string;
  festival?: string;
  role: string;
}

const projects: Project[] = [
  {
    title: "El último videoclub",
    year: "TBA",
    status: "En Producción",
    role: "Director / Guionista",
    festival: "Ópera Prima",
  },
  {
    title: "Púrpura Neón",
    year: "2024",
    status: "Estrenado",
    role: "Director / Guionista",
    festival: "FICG 39",
  },
  {
    title: "Agaves al alba",
    year: "2024",
    status: "Estrenado",
    role: "Director / Guionista",
    festival: "FICTEQ",
  },
  {
    title: "Tailored for You",
    year: "2026",
    status: "En Producción",
    role: "Productor",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-28 px-6" aria-label="Proyectos">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-16 text-center"
        >
          Proyectos
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group relative border border-border rounded-sm p-8 bg-card-gradient transition-all duration-500 neon-border-hover cursor-default"
            >
              {/* Status badge */}
              <span className="inline-block text-xs font-body tracking-widest uppercase text-primary mb-4">
                {project.status}
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2 italic">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground font-body">
                <span>{project.year}</span>
                <span>·</span>
                <span>{project.role}</span>
                {project.festival && (
                  <>
                    <span>·</span>
                    <span className="text-primary/80">{project.festival}</span>
                  </>
                )}
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-sm bg-primary/0 group-hover:bg-primary/[0.02] transition-colors duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
