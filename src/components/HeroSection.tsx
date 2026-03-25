import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import profileImg from "@/assests/profile.jpg";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/siteContent";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative overflow-hidden border-b-2 border-border pt-24">
      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col-reverse items-center gap-12 px-6 py-16 md:flex-row md:py-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex-1"
        >
          <span className="section-eyebrow">{t.hero.badge}</span>

          <h1 className="terminal-title mb-6 text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            {t.hero.title1} <span className="text-gradient">{t.hero.title2}</span>
          </h1>

          <p className="mb-3 max-w-2xl text-lg text-muted-foreground md:text-xl">- {t.hero.subtitle1}</p>
          <p className="mb-6 max-w-2xl text-lg text-muted-foreground md:text-xl">- {t.hero.subtitle2}</p>

          <div className="mb-8 flex flex-wrap items-center gap-4 text-base text-muted-foreground">
            <a href={`mailto:${personalInfo.email}`} className="pixel-small inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Mail className="h-4 w-4" /> Email: {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`} className="pixel-small inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Phone className="h-4 w-4" /> Phone: {personalInfo.phone}
            </a>
            <span className="pixel-small inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Location: {t.hero.location}
            </span>
          </div>

          <div className="mb-6 flex flex-wrap gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              id="contact"
              className="pixel-btn"
            >
              {t.hero.contact}
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${personalInfo.cvPath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn-secondary"
            >
              {t.hero.cv}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-base text-muted-foreground">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="pixel-small inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="pixel-small inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          <div className="absolute -inset-3 border-2 border-border" />
          <div className="relative h-72 w-72 overflow-hidden border-2 border-primary glow md:h-96 md:w-80">
            <img
              src={profileImg}
              alt="Walid Kessoum"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
