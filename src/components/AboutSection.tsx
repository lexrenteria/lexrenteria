import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 px-6" aria-label="Sobre mí">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-10"
        >
          Sobre mí
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed"
        >
          <p>
            Soy <span className="text-foreground font-medium">director y guionista</span> basado
            en Guadalajara, México. Mi trabajo explora las intersecciones entre{" "}
            <span className="text-neon">identidad</span>,{" "}
            <span className="text-neon">memoria</span> y la experiencia queer
            a través del cine.
          </p>
          <p>
            Fundador de{" "}
            <span className="text-foreground font-medium">Kauyi Media Group</span>,
            una productora dedicada a contar historias que desafían narrativas
            convencionales y amplifican voces diversas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
