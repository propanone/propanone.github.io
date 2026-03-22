import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";

const navItems = ["about", "education", "experience", "projects", "skills"] as const;

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b-2 border-border bg-background/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("hero")} className="pixel-small text-foreground">
          Walid <span className="text-gradient">K.</span>
        </button>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="pixel-small text-muted-foreground transition-colors hover:text-primary"
            >
              {t.nav[key]}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="pixel-btn"
          >
            {t.nav.contact}
          </button>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="pixel-btn-secondary"
          >
            {lang === "fr" ? "FR -> EN" : "EN -> FR"}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="pixel-btn-secondary px-2 py-1"
          >
            {lang === "fr" ? "FR -> EN" : "EN -> FR"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="pixel-btn-secondary px-3 py-1"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t-2 border-border bg-card px-6 py-4 md:hidden">
          {navItems.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="pixel-small block w-full border-2 border-transparent px-2 py-3 text-left text-muted-foreground transition-colors hover:border-border hover:text-primary"
            >
              {t.nav[key]}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="pixel-btn mt-2 w-full"
          >
            {t.nav.contact}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
