import { useI18n } from "@/lib/i18n";
import { Facebook, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

/** Obfuscated email — assembled at runtime to prevent scraping */
const useObfuscatedEmail = () => {
  const [mailto, setMailto] = useState("#");
  useEffect(() => {
    const user = "lexrenteria";
    const domain = "icloud.com";
    setMailto(`mailto:${user}@${domain}`);
  }, []);
  return mailto;
};

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FooterSection = () => {
  const { lang, t } = useI18n();
  const mailto = useObfuscatedEmail();

  const socials = [
    { label: "Instagram", href: "https://instagram.com/lexrenteria", icon: <Instagram className="w-5 h-5" /> },
    { label: "X", href: "https://x.com/lexrenteria", icon: <XIcon /> },
    { label: "Facebook", href: "https://facebook.com/lexrenteria", icon: <Facebook className="w-5 h-5" /> },
  ];

  return (
    <footer id="contact" className="border-t border-border py-16 px-6" aria-label="Contact">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Email */}
        <a
          href={mailto}
          className="text-sm font-body tracking-widest uppercase text-primary hover:text-foreground transition-colors duration-300"
          aria-label="Email"
        >
          {lang === "es" ? "Escríbeme" : "Get in touch"}
        </a>

        {/* Social icons */}
        <nav className="flex gap-6" aria-label="Social media">
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
        </nav>

        <div className="h-[1px] w-16 bg-border" />

        <p className="text-xs text-muted-foreground font-body tracking-wide">
          © {new Date().getFullYear()} Lex Rentería. {t.footer.rights[lang]}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
