import { useI18n } from "@/lib/i18n";
import { Instagram, Facebook, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/** Obfuscated email — assembled at runtime to prevent scraping */
const useObfuscatedEmail = () => {
  const [email, setEmail] = useState<{ mailto: string; display: string; encodedDisplay?: string }>({ 
    mailto: "#", 
    display: "" 
  });
  
  useEffect(() => {
    // Construct email pieces separately to avoid plain-text storage
    const user = "lexrenteria";
    const domain = "icloud.com";
    const fullEmail = `${user}@${domain}`;
    
    // Encode display with HTML entities for additional bot protection
    const encodedDisplay = fullEmail
      .split('')
      .map(char => `&#${char.charCodeAt(0)};`)
      .join('');
    
    setEmail({ 
      mailto: `mailto:${fullEmail}`,
      display: fullEmail,
      encodedDisplay 
    });
  }, []);
  
  return email;
};

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);



const FooterSection = () => {
  const { lang, t } = useI18n();
  const { mailto, display } = useObfuscatedEmail();

  const mainSocials = [
    { label: "Instagram", href: "https://instagram.com/lexrenteria", icon: <Instagram className="w-7 h-7" /> },
    { label: "X", href: "https://x.com/lexrenteria", icon: <XIcon /> },
    { label: "Facebook", href: "https://facebook.com/lexrenteria", icon: <Facebook className="w-7 h-7" /> },
  ];

  const secondarySocials = [
    {
      label: "IMDb",
      href: "https://www.imdb.com/name/nm14592548/",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/960px-IMDB_Logo_2016.svg.png?_=20200406194337"
          alt="IMDb"
          className="h-4 w-auto"
        />
      ),
    },
    {
      label: "Letterboxd",
      href: "https://letterboxd.com/lexrenteria/",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Letterboxd-Logo-H-Pos-RGB.svg/640px-Letterboxd-Logo-H-Pos-RGB.svg.png"
          alt="Letterboxd"
          className="h-3 w-auto"
        />
      ),
    },
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

        {/* Contact Actions */}
        <div
          className="flex flex-col gap-4 mb-14 w-full max-w-md mx-auto"
        >
          {/* Instagram CTA (Primary) */}
          <a
            href="https://instagram.com/lexrenteria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-primary/40 bg-primary/10 px-8 sm:px-10 py-3 rounded-sm text-sm font-body tracking-widest uppercase text-primary hover:bg-primary/20 transition-all duration-300"
            aria-label="Send a DM in Instagram"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
            {lang === "es" ? "Enviar DM en Instagram" : "Send a DM on Instagram"}
          </a>

          {/* Email CTA (Secondary) */}
          <a
            href={mailto}
            className="inline-flex items-center justify-center gap-3 border border-border px-8 sm:px-10 py-3 rounded-sm text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" strokeWidth={1.5} />
            {display}
          </a>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-border mb-10" />

        {/* Social icons */}
        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-8 mb-16"
          aria-label="Social media"
        >
          {/* Main Socials - White Circles */}
          <div className="flex gap-4 sm:gap-6">
            {mainSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 hover:border-white hover:scale-110 text-muted-foreground hover:text-white transition-all duration-300"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Secondary Socials - Logos */}
          <div className="flex gap-6 sm:gap-8 items-center">
            {secondarySocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-300 opacity-80 hover:opacity-100"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
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
