import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import portrait from "@/assets/portrait-lex.png";

const stills = projects.map((p) => p.still);
const INTERVAL = 6000;

const HeroSection = () => {
  const { lang, t } = useI18n();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((prev) => (prev + 1) % stills.length), INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-20 pb-16"
      aria-label="Hero"
    >
      {/* Rotating background stills */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${stills[idx]})` }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80" />

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-center">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2 flex justify-center"
        >
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_hsl(var(--primary)/0.15)]">
            <img
              src={portrait}
              alt="Lex Rentería"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="md:col-span-3 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground"
          >
            Lex Rentería
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-lg sm:text-xl font-body text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            {t.hero.subtitle[lang]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-base font-body text-muted-foreground/80 leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            {t.about.bio2[lang]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="inline-block border border-primary/40 bg-primary/10 px-8 py-3 text-sm font-body tracking-widest uppercase text-primary hover:bg-primary/20 transition-all duration-300 rounded-sm"
            >
              {t.hero.cta[lang]}
            </a>
            <a
              href="#contact"
              className="inline-block border border-border px-8 py-3 text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300 rounded-sm"
            >
              {t.nav.contact[lang]}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-[1px] bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
