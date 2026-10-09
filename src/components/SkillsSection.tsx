import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { categoryDescriptions, skillLogoByName } from "@/data/portfolioContent";

const SkillBadge = ({ name }: { name: string }) => {
  const logo = skillLogoByName[name];

  return (
    <span className="pixel-chip gap-2 icon-btn-hover">
      {logo && (
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-3.5 w-3.5 flex-shrink-0 object-contain"
          loading="lazy"
          decoding="async"
        />
      )}
      {name}
    </span>
  );
};

const SkillsSection = () => {
  const { t, lang } = useLanguage();
  const categoryKeys = Object.keys(t.skills.categories) as Array<keyof typeof t.skills.categories>;

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="terminal-title mb-3 text-3xl font-bold md:text-4xl">{t.skills.title}</h2>
          <p className="text-xl text-muted-foreground">{t.skills.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryKeys.map((key, i) => {
            const cat = t.skills.categories[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.32, ease: "easeOut" }}
                className="inventory-panel pixel-reveal"
              >
                <div className="inventory-head">{t.skills.clusterLabel} {String(i + 1).padStart(2, "0")}</div>
                <div className="p-6">
                  <h3 className="mb-3 font-semibold text-primary">{cat.title}</h3>
                  <p className="mb-4 text-base text-muted-foreground">
                    {categoryDescriptions[lang][key]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <SkillBadge key={item} name={item} />
                    ))}
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

export default SkillsSection;
