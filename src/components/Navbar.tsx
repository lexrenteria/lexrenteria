import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

const Navbar = () => {
  const { lang, setLang, t } = useI18n();

  const links = [
    { label: t.nav.reel[lang], href: "/#reel" },
    { label: t.nav.projects[lang], href: "/#projects" },
    { label: t.nav.about[lang], href: "/#about" },
    { label: t.nav.contact[lang], href: "/#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50"
      style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", backgroundColor: "hsl(0 0% 2% / 0.8)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" className="font-heading text-lg font-bold text-foreground tracking-tight">
          Lex Rentería
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="text-xs font-body tracking-widest uppercase border border-primary/40 px-3 py-1.5 rounded-sm text-primary hover:bg-primary/10 transition-colors duration-300"
          aria-label="Switch language"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
