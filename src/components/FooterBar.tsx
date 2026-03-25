import { useLanguage } from "@/i18n/LanguageContext";
import { footerContent, personalInfo, sectionIds } from "@/data/siteContent";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const FooterBar = () => {
  const { lang, t } = useLanguage();

  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t-2 border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-foreground">{personalInfo.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">{footerContent[lang].description}</p>
        </div>

        <div>
          <p className="pixel-small mb-3 text-muted-foreground">{footerContent[lang].navigationTitle}</p>
          <div className="flex flex-wrap gap-2">
            {sectionIds.map((id) => (
              <button key={id} onClick={() => goTo(id)} className="pixel-btn-secondary px-3 py-1">
                {t.nav[id]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="pixel-small mb-3 text-muted-foreground">{footerContent[lang].linksTitle}</p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${personalInfo.email}`} className="pixel-btn-secondary inline-flex items-center gap-2 px-3 py-1">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="pixel-btn-secondary inline-flex items-center gap-2 px-3 py-1">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="pixel-btn-secondary inline-flex items-center gap-2 px-3 py-1">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="#hero" onClick={(e) => { e.preventDefault(); goTo("hero"); }} className="pixel-btn-secondary inline-flex items-center gap-2 px-3 py-1">
              <ArrowUpRight className="h-4 w-4" /> {footerContent[lang].topLabel}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/80 px-6 py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterBar;
