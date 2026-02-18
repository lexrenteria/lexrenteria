import { HelmetProvider } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

/**
 * SCHEMA INJECTION GUIDE
 * ----------------------
 * Paste your verified JSON-LD schemas in the arrays below.
 * 
 * HOME PAGE SCHEMAS (Person, Organization):
 *   Add them to the `schemas` prop of the first <SchemaMarkup />.
 * 
 * MOVIE SCHEMAS (one per film):
 *   Add them to the `schemas` prop of the second <SchemaMarkup />.
 *
 * You can also use `rawJsonLd` prop with raw JSON strings if preferred.
 */

const Index = () => {
  return (
    <HelmetProvider>
      <SEOHead />

      {/* === PASTE PERSON & ORGANIZATION SCHEMAS HERE === */}
      <SchemaMarkup
        schemas={[
          // Example: { "@context": "https://schema.org", "@type": "Person", "name": "Lex Rentería", ... }
          // Example: { "@context": "https://schema.org", "@type": "Organization", "name": "Kauyi Media Group", ... }
        ]}
      />

      {/* === PASTE MOVIE SCHEMAS HERE === */}
      <SchemaMarkup
        schemas={[
          // Example: { "@context": "https://schema.org", "@type": "Movie", "name": "Púrpura Neón", ... }
          // Example: { "@context": "https://schema.org", "@type": "Movie", "name": "El último videoclub", ... }
        ]}
      />

      <main className="bg-cinematic min-h-screen">
        <HeroSection />
        <div className="border-t border-border" />
        <ProjectsSection />
        <div className="border-t border-border" />
        <AboutSection />
        <FooterSection />
      </main>
    </HelmetProvider>
  );
};

export default Index;
