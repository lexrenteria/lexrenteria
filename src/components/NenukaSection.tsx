import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import nenukaLogo from "@/assets/nenuka-horizontal.svg";
import nenukaSymbol from "@/assets/nenuka-symbol-colors.svg";
import { ArrowRight } from "lucide-react";

const NenukaSection = () => {
  const { lang, t } = useI18n();

  return (
    <section className="relative py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Carousel-ready container — single card for now */}
        <div className="relative overflow-hidden rounded-2xl bg-[hsl(270_80%_58%)] shadow-[0_8px_40px_hsl(270_80%_50%/0.35)]">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[hsl(290_90%_65%/0.4)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[hsl(250_90%_55%/0.3)] blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 sm:p-12 md:p-14">
            {/* Logo / Visual block */}
            <motion.a
              href="https://nenuka.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 flex items-center justify-center w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/40 transition-colors duration-300 p-6"
            >
              <img
                src={nenukaSymbol}
                alt="Nenuka Films"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </motion.a>

            {/* Text + CTA */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-2xl sm:text-3xl text-white tracking-tight lowercase"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="font-bold">nenuka</span>{" "}
                <span className="font-light">films</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg font-body text-white/85 leading-relaxed max-w-lg"
              >
                {t.nenuka.description[lang]}
              </motion.p>

              <motion.a
                href="https://nenuka.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="inline-flex items-center gap-2 bg-white text-[hsl(270_80%_40%)] font-body font-semibold text-sm tracking-wide px-7 py-3 rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg"
              >
                {t.nenuka.cta[lang]}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NenukaSection;
