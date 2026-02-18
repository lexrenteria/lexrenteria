const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-border py-16 px-6" aria-label="Contacto">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Social links */}
        <nav className="flex gap-8" aria-label="Redes sociales">
          {[
            { label: "Instagram", href: "https://instagram.com/lexrenteria" },
            { label: "Letterboxd", href: "https://letterboxd.com/lexrenteria" },
            { label: "IMDb", href: "https://www.imdb.com/name/nm14099074/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="h-[1px] w-16 bg-border" />

        <p className="text-xs text-muted-foreground font-body tracking-wide">
          © {new Date().getFullYear()} Lex Rentería. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
