import { HelmetProvider } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoReelSection from "@/components/DemoReelSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <HelmetProvider>
      <SEOHead />
      <SchemaMarkup
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Lex Rentería — Filmmaker",
            "url": "https://lexrenteria.lovable.app",
            "description": "Portfolio of Lex Rentería, queer filmmaker from Guadalajara, Mexico. Exploring identity, memory, and belonging through cinema.",
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Lex Rentería",
            "url": "https://lexrenteria.lovable.app",
            "image": "https://image.tmdb.org/t/p/original/qQ1Ds95SE3aeeywPNznETDwTfhR.jpg",
            "jobTitle": "Film Director",
            "description": "Queer filmmaker from Guadalajara, Mexico. Director and screenwriter exploring identity, memory, and belonging.",
            "knowsAbout": ["Film Direction", "Screenwriting", "LGBTQ+ Cinema", "Independent Film"],
            "sameAs": [
              "https://www.imdb.com/name/nm14399129/",
              "https://letterboxd.com/lexrenteria/",
              "https://www.instagram.com/lexrenteria/"
            ],
            "nationality": {
              "@type": "Country",
              "name": "Mexico"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Kauyi"
            }
          },
        ]}
      />

      <Navbar />
      <main className="bg-cinematic min-h-screen">
        <HeroSection />
        <div className="border-t border-border" />
        <AboutSection />
        <div className="border-t border-border" />
        <ProjectsSection />
        <div className="border-t border-border" />
        <DemoReelSection />
        <FooterSection />
      </main>
    </HelmetProvider>
  );
};

export default Index;
