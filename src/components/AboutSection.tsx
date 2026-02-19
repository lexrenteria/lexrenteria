import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import portrait from "@/assets/portrait-lex.png";

const AboutSection = () => {
  const { lang, t } = useI18n();

  return (
    <section id="about" className="relative py-28 px-6" aria-label={t.about.title[lang]}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-sm border border-border">
            <img
              src={portrait}
              alt="Lex Rentería portrait"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-10">
            {t.about.title[lang]}
          </h2>
          <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
            <p>
              {lang === "es" ? (
                <>
                  Soy <span className="text-foreground font-medium">{t.about.director[lang]} y {t.about.writer[lang]}</span> basado
                  en Guadalajara, México. Mi trabajo explora las intersecciones entre{" "}
                  <span className="text-primary">{t.about.identity[lang]}</span>,{" "}
                  <span className="text-primary">{t.about.memory[lang]}</span> y la experiencia queer
                  a través del cine.
                </>
              ) : (
                <>
                  I'm a <span className="text-foreground font-medium">{t.about.director[lang]} and {t.about.writer[lang]}</span> based
                  in Guadalajara, Mexico. My work explores the intersections of{" "}
                  <span className="text-primary">{t.about.identity[lang]}</span>,{" "}
                  <span className="text-primary">{t.about.memory[lang]}</span>, and the queer experience
                  through film.
                </>
              )}
            </p>
            <p>{t.about.bio2[lang]}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
