import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import supGalileeLogo from "../assests/logos/sup-galilee.png";

const schoolColors: Record<string, string> = {
  "Sup Galilée": "#003366",
  "Sorbonne": "#003366",
  "ENSTA": "#1B4F72",
  "ESSA": "#8B0000",
};

const schoolLogos: Record<string, string> = {
  "Sup Galilée": supGalileeLogo,
};

const getSchoolColor = (name: string) => {
  for (const key in schoolColors) {
    if (name.includes(key)) return schoolColors[key];
  }
  return "hsl(var(--primary))";
};

const getInitials = (name: string) => {
  // Extract acronym-like initials
  if (name.includes("Sup Galilée")) return "SG";
  if (name.includes("ENSTA")) return "EN";
  if (name.includes("ESSA")) return "ES";
  return name.split(/[\s–]+/).filter(w => w.length > 1).slice(0, 2).map(w => w[0]).join("").toUpperCase();
};

const EducationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">{t.education.title}</h2>
          <p className="text-muted-foreground">{t.education.subtitle}</p>
        </motion.div>

        <div className="space-y-6">
          {t.education.items.map((item, i) => {
            const color = getSchoolColor(item.school);
            const logoKey = Object.keys(schoolLogos).find((key) => item.school.includes(key));
            const logo = logoKey ? schoolLogos[logoKey] : null;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass rounded-xl p-6"
              >
                <div className="flex gap-4">
                  {logo ? (
                    <div className="org-logo bg-white">
                      <img src={logo} alt={item.school} className="h-9 w-9 object-contain" />
                    </div>
                  ) : (
                    <div
                      className="org-logo text-xs font-bold"
                      style={{ backgroundColor: color + "25", color: color }}
                    >
                      {getInitials(item.school)}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold">{item.degree}</h3>
                    <p className="mb-2 text-primary">{item.school}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {item.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {item.period}</span>
                    </div>
                    {"note" in item && item.note && (
                      <p className="mt-2 text-sm italic text-primary/80">{item.note}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
