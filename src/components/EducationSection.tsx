import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  defaultPortfolioIcon,
  educationLogoBySchoolKeyword,
} from "@/data/portfolioContent";

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

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
            const placeholder =
              Object.entries(educationLogoBySchoolKeyword).find(([key]) => item.school.includes(key))?.[1] ??
              defaultPortfolioIcon;
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
                  <div className="org-logo overflow-hidden bg-white p-1">
                    <img
                      src={withBase(placeholder)}
                      alt={`${item.school} logo`}
                      className="h-9 w-9 rounded-md object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold">{item.degree}</h3>
                    <p className="mb-2 text-primary">{item.school}</p>
                    <p className="mb-2 text-sm text-muted-foreground">{item.location} • {item.period}</p>
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
