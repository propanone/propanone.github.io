import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";
import { personalInfo } from "@/data/portfolioContent";
import { sectionIds } from "@/data/siteContent";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b-2 border-border bg-background/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("hero")} className="pixel-small text-foreground">
          {personalInfo.name}
        </button>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {sectionIds.map((key) => (
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
            {lang === "fr" ? t.nav.toEnglish : t.nav.toFrench}
          </button>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="pixel-btn-secondary px-2 py-1"
          >
            {lang === "fr" ? t.nav.toEnglish : t.nav.toFrench}
          </button>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="pixel-btn-secondary px-3 py-1"
          >
            {isOpen ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t-2 border-border bg-card px-6 py-4 md:hidden">
          {sectionIds.map((key) => (
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
