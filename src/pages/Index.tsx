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
      <SchemaMarkup schemas={[]} />
      <SchemaMarkup schemas={[]} />

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
