import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Github, Linkedin } from "lucide-react";
import profileImg from "@/assests/profile.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative overflow-hidden pt-24">
      <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-44 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col-reverse items-center gap-12 px-6 py-16 md:flex-row md:py-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <span className="section-eyebrow">
            {t.hero.badge}
          </span>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            {t.hero.title1} <span className="text-gradient">{t.hero.title2}</span>
          </h1>

          <p className="mb-3 max-w-2xl text-base text-muted-foreground md:text-lg">- {t.hero.subtitle1}</p>
          <p className="mb-6 max-w-2xl text-base text-muted-foreground md:text-lg">- {t.hero.subtitle2}</p>

          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:mw.kessoum@icloud.com" className="flex items-center gap-1.5 transition-colors hover:text-primary">
              <Mail className="h-4 w-4" /> mw.kessoum@icloud.com
            </a>
            <a href="tel:+33746505437" className="flex items-center gap-1.5 transition-colors hover:text-primary">
              <Phone className="h-4 w-4" /> +33 7 46 50 54 37
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {t.hero.location}
            </span>
          </div>

          <div className="mb-6 flex flex-wrap gap-4">
            <a
              href="mailto:mw.kessoum@icloud.com"
              id="contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[0_16px_44px_-20px_hsl(var(--primary))] transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> {t.hero.contact}
            </a>
            <a
              href={`${import.meta.env.BASE_URL}cv.pdf#view=FitH`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/70 px-6 py-3 font-semibold text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
            >
              <Download className="h-4 w-4" /> {t.hero.cv}
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a href="https://github.com/propanone" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/walid-kessoum" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          <div className="absolute -inset-3 rounded-[2rem] border border-primary/20" />
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-border/80 glow md:h-96 md:w-80">
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
