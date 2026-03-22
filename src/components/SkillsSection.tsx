import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const categoryDescriptions = {
  fr: {
    programming: "Ma base de développement logiciel, du scripting à la programmation système.",
    ml: "Conception de pipelines data et de modèles prédictifs orientés performance réseau.",
    frameworks: "Stack d'implémentation et d'observabilité utilisée en production.",
    telecom: "Technologies cœur de métier pour l'analyse, le déploiement et l'optimisation réseau.",
    hardware: "Compétences pratiques pour prototypage, gestion de projet et data viz.",
    certifications: "Certifications validant des compétences appliquées sur des cas réels.",
    languages: "Langues de travail pour les environnements techniques et internationaux.",
  },
  en: {
    programming: "Core software engineering stack, from scripting to systems-level coding.",
    ml: "Data pipelines and predictive modeling focused on network performance use cases.",
    frameworks: "Implementation and observability toolchain used for real-world delivery.",
    telecom: "Domain technologies for network analysis, deployment, and optimization.",
    hardware: "Hands-on tooling for prototyping, planning, and technical communication.",
    certifications: "Credentials validating applied skills on practical scenarios.",
    languages: "Working languages used in technical and international contexts.",
  },
} as const;

const SkillBadge = ({ name }: { name: string }) => {
  return (
    <span className="pixel-chip">
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
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">{t.skills.title}</h2>
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
                transition={{ delay: i * 0.08 }}
                className="card-glass p-6"
              >
                <h3 className="mb-3 font-semibold text-primary">{cat.title}</h3>
                <p className="mb-4 text-base text-muted-foreground">
                  {categoryDescriptions[lang][key]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <SkillBadge key={item} name={item} />
                  ))}
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
