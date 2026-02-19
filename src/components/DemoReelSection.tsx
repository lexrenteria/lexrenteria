import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const DemoReelSection = () => {
  const { lang, t } = useI18n();

  return (
    <section id="reel" className="relative py-20 px-6" aria-label="Demo Reel">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center"
        >
          {t.reel.title[lang]}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden rounded-sm border border-border"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/3irpN6hikLo"
            title="Demo Reel - Lex Rentería"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DemoReelSection;
