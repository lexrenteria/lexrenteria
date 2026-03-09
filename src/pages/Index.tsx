import { HelmetProvider } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoReelSection from "@/components/DemoReelSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import NenukaSection from "@/components/NenukaSection";
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
            "url": "https://lexrenteria.com",
            "description": "Portfolio of Lex Rentería, queer filmmaker from Guadalajara, Mexico. Exploring identity, memory, and belonging through cinema.",
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Lex Rentería",
            "url": "https://lexrenteria.com",
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
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Demo Reel — Lex Rentería",
            "description": "Demo reel showcasing the cinematic work of Lex Rentería, queer filmmaker from Guadalajara, Mexico.",
            "thumbnailUrl": "https://img.youtube.com/vi/3irpN6hikLo/maxresdefault.jpg",
            "uploadDate": "2024-01-01",
            "contentUrl": "https://www.youtube.com/watch?v=3irpN6hikLo",
            "embedUrl": "https://www.youtube.com/embed/3irpN6hikLo",
            "publisher": {
              "@type": "Person",
              "name": "Lex Rentería"
            }
          },
        ]}
      />

      <Navbar />
      <main id="main-content" className="bg-cinematic min-h-screen">
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
