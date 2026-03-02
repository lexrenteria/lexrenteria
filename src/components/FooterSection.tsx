import { useI18n } from "@/lib/i18n";
import { Instagram, Facebook, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/** Obfuscated email — assembled at runtime to prevent scraping */
const useObfuscatedEmail = () => {
  const [email, setEmail] = useState({ mailto: "#", display: "" });
  useEffect(() => {
    const user = "lexrenteria";
    const domain = "icloud.com";
    setEmail({ mailto: `mailto:${user}@${domain}`, display: `${user}@${domain}` });
  }, []);
  return email;
};

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IMDbIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
    <path d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.06.5-.165.062-.104.093-.39.093-.81v-2.953c0-.32-.013-.53-.04-.63-.025-.1-.068-.16-.133-.192zM22.416 0H1.584A1.584 1.584 0 000 1.584v20.832A1.584 1.584 0 001.584 24h20.832A1.584 1.584 0 0024 22.416V1.584A1.584 1.584 0 0022.416 0zM4.8 15.458H3.034V8.235H4.8v7.223zM9.59 15.458H7.932l-.07-.734c-.04.248-.13.47-.282.665a.82.82 0 01-.665.267c-.372 0-.627-.177-.762-.533-.098-.258-.147-.683-.147-1.278V11.07c0-.594.06-1.013.178-1.254.118-.24.357-.36.718-.36.27 0 .48.083.63.25.148.167.248.393.3.678l.015-.668h1.46v5.742h.015zm4.98-2.135c0 .617-.03 1.065-.09 1.338-.06.273-.188.508-.383.702-.194.195-.418.327-.673.395-.254.07-.624.103-1.108.103H10.66V8.235h1.575c.5 0 .863.028 1.09.082.228.055.42.152.58.29.16.14.273.313.336.518.063.206.095.566.095 1.082v3.116h.234zm4.465.59c0 .482-.013.8-.04.955-.026.154-.09.296-.192.424a1.02 1.02 0 01-.413.318c-.17.076-.37.115-.6.115-.18 0-.34-.028-.48-.083a.88.88 0 01-.34-.248l-.097.158h-1.5V8.235h1.575v2.434c.093-.142.2-.254.322-.336a.78.78 0 01.448-.126c.27 0 .49.062.655.186.165.124.27.296.318.514.047.218.07.584.07 1.098v1.907h.274z" />
  </svg>
);

const LetterboxdIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
    <path d="M8.224 14.352a4.773 4.773 0 010-4.704l-1.08-.576A6.015 6.015 0 006.4 12c0 1.056.272 2.048.752 2.912l1.072-.56zm3.2 2.544a4.8 4.8 0 01-3.2-1.216L7.2 16.8A6.336 6.336 0 0011.424 18.4v-1.504zm0-9.792V5.6A6.336 6.336 0 007.2 7.2l1.024 1.12a4.8 4.8 0 013.2-1.216zm1.152 0a4.8 4.8 0 013.2 1.216L16.8 7.2A6.336 6.336 0 0012.576 5.6v1.504zm0 9.792V18.4A6.336 6.336 0 0016.8 16.8l-1.024-1.12a4.8 4.8 0 01-3.2 1.216zm3.2-2.544l1.072.56A6.015 6.015 0 0017.6 12c0-1.056-.272-2.048-.752-2.912l-1.072.56a4.773 4.773 0 010 4.704zM12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0z" />
  </svg>
);

const FooterSection = () => {
  const { lang, t } = useI18n();
  const { mailto, display } = useObfuscatedEmail();

  const socials = [
    { label: "Instagram", href: "https://instagram.com/lexrenteria", icon: <Instagram className="w-7 h-7" /> },
    { label: "X", href: "https://x.com/lexrenteria", icon: <XIcon /> },
    { label: "Facebook", href: "https://facebook.com/lexrenteria", icon: <Facebook className="w-7 h-7" /> },
    { label: "IMDb", href: "https://www.imdb.com/name/nm14592548/", icon: <IMDbIcon /> },
    { label: "Letterboxd", href: "https://letterboxd.com/lexrenteria/", icon: <LetterboxdIcon /> },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border" aria-label="Contact">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 flex flex-col items-center">
        {/* Section heading */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          {t.nav.contact[lang]}
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold italic text-foreground text-center mb-4"
        >
          {lang === "es" ? "Hablemos" : "Let's Talk"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-muted-foreground text-center max-w-md mb-10"
        >
          {lang === "es"
            ? "¿Tienes un proyecto en mente? Colaboremos."
            : "Have a project in mind? Let's collaborate."}
        </motion.p>

        {/* Email CTA */}
        <motion.a
          href={mailto}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group flex items-center gap-3 border border-primary/40 bg-primary/10 px-8 sm:px-10 py-4 rounded-sm hover:bg-primary/20 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-500 mb-14"
          aria-label="Email"
        >
          <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
          <span className="font-heading text-lg sm:text-xl italic text-primary tracking-wide">
            {display}
          </span>
        </motion.a>

        {/* Divider */}
        <div className="w-12 h-px bg-border mb-10" />

        {/* Social icons */}
        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-6 sm:gap-8 mb-16"
          aria-label="Social media"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </motion.nav>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground/60 font-body tracking-wide">
          © {new Date().getFullYear()} Lex Rentería. {t.footer.rights[lang]}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
