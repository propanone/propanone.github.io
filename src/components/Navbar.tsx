import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

const navItems = ["about", "education", "experience", "projects", "skills"] as const;

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/70 bg-background/65 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("hero")} className="text-xl font-bold tracking-tight">
          Walid <span className="text-gradient">K.</span>
        </button>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t.nav[key]}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-14px_hsl(var(--primary))] transition-transform hover:-translate-y-0.5"
          >
            {t.nav.contact}
          </button>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="flex items-center gap-1.5 rounded-md border border-border/80 bg-secondary/40 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Globe className="h-4 w-4" />
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="rounded-md border border-border/80 bg-secondary/40 p-2 text-muted-foreground"
          >
            <Globe className="h-5 w-5" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="rounded-md border border-border/80 bg-secondary/40 p-2 text-foreground">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-card/95 px-6 py-4 backdrop-blur md:hidden">
          {navItems.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="block w-full rounded-md px-2 py-3 text-left text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-primary"
            >
              {t.nav[key]}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 w-full rounded-lg bg-primary py-3 text-center font-medium text-primary-foreground"
          >
            {t.nav.contact}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
