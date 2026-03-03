import { useI18n } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { lang, setLang, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: t.nav.home[lang], href: "#hero" },
    { label: t.nav.about[lang], href: "#about" },
    { label: t.nav.projects[lang], href: "#projects" },
    { label: t.nav.reel[lang], href: "#reel" },
    { label: t.nav.contact[lang], href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50"
      style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", backgroundColor: "hsl(0 0% 2% / 0.35)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" className="font-heading text-lg font-bold text-foreground tracking-tight italic">
          Lex Rentería
        </a>

        {/* Desktop nav */}
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

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="inline-flex items-center gap-1.5 border border-border px-4 py-1.5 text-xs font-body tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300 rounded-sm"
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5" strokeWidth={1.5} />
            {lang === "es" ? "EN" : "ES"}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border/30"
            style={{ backgroundColor: "hsl(0 0% 2% / 0.9)" }}
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col items-center gap-1 py-4 px-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-3 text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
