import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import nenukaLogo from "@/assets/nenuka-horizontal.svg";

const NenukaSection = () => {
  const { lang, t } = useI18n();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle diagonal gradient background to create a visual "break" */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary)/0.04)] via-transparent to-[hsl(var(--primary)/0.06)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(var(--primary)/0.05),transparent_70%)]" />

      {/* Top & bottom borders with accent fade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        {/* Logo */}
        <motion.a
          href="https://nenuka.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group"
        >
          <img
            src={nenukaLogo}
            alt="Nenuka Films"
            className="h-10 sm:h-12 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500 invert-0"
          />
        </motion.a>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl font-body text-muted-foreground leading-relaxed max-w-2xl"
        >
          {t.nenuka.description[lang]}
        </motion.p>

        {/* CTA */}
        <motion.a
          href="https://nenuka.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block border border-primary/30 bg-primary/5 px-8 py-3 text-sm font-body tracking-widest uppercase text-primary/80 hover:text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 rounded-sm"
        >
          {t.nenuka.cta[lang]}
        </motion.a>
      </div>
    </section>
  );
};

export default NenukaSection;
