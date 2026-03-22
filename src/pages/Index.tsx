import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.2),transparent_62%)]" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <footer className="border-t border-border/80 bg-card/40 py-8 text-center text-sm text-muted-foreground backdrop-blur">
        © {new Date().getFullYear()} Walid Kessoum. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
