import { HelmetProvider } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoReelSection from "@/components/DemoReelSection";
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
 */

const Index = () => {
  return (
    <HelmetProvider>
      <SEOHead />

      {/* === PASTE PERSON & ORGANIZATION SCHEMAS HERE === */}
      <SchemaMarkup schemas={[]} />

      {/* === PASTE MOVIE SCHEMAS HERE === */}
      <SchemaMarkup schemas={[]} />

      <Navbar />
      <main className="bg-cinematic min-h-screen">
        <HeroSection />
        <div className="border-t border-border" />
        <DemoReelSection />
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
