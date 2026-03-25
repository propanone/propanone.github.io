import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const skillLogoByName: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  SQL: "https://cdn.simpleicons.org/postgresql/66d9ef",
  "C/C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  MATLAB: "https://cdn.simpleicons.org/mathworks/e16737",
  "Assembly ARM": "https://cdn.simpleicons.org/arm/00adef",
  XGBoost: "https://cdn.simpleicons.org/xgboost/ffffff",
  LSTM: "https://cdn.simpleicons.org/tensorflow/ff6f00",
  "Random Forest": "https://cdn.simpleicons.org/scikitlearn/f7931e",
  "Apache Airflow": "https://cdn.simpleicons.org/apacheairflow/17b0eb",
  ETL: "https://cdn.simpleicons.org/apachespark/e25a1c",
  "Data Warehousing": "https://cdn.simpleicons.org/postgresql/66d9ef",
  Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  NumPy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  "Scikit-learn": "https://cdn.simpleicons.org/scikitlearn/f7931e",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Streamlit: "https://cdn.simpleicons.org/streamlit/ff4b4b",
  Wireshark: "https://cdn.simpleicons.org/wireshark/1679a7",
  Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "LTE/5G": "https://cdn.simpleicons.org/cisco/1ba0d7",
  "TCP/IP": "https://cdn.simpleicons.org/cisco/1ba0d7",
  SCADA: "https://cdn.simpleicons.org/siemens/00a0a0",
  VoIP: "https://cdn.simpleicons.org/asterisk/f5f5f5",
  FTTH: "https://cdn.simpleicons.org/cisco/1ba0d7",
  SDH: "https://cdn.simpleicons.org/nokia/124191",
  DWDM: "https://cdn.simpleicons.org/huawei/ff1a3d",
  OFDM: "https://cdn.simpleicons.org/intel/0071c5",
  "Packet Tracer": "https://cdn.simpleicons.org/cisco/1ba0d7",
  Arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  STM32: "https://cdn.simpleicons.org/stmicroelectronics/005ca8",
  "MS Project": "https://cdn.simpleicons.org/microsoftproject/217346",
  PowerBI: "https://cdn.simpleicons.org/powerbi/f2c811",
  "Adobe Creative Suite": "https://cdn.simpleicons.org/adobe/ff0000",
  "Huawei ICT Competition (Lauréat Mondial)": "https://cdn.simpleicons.org/huawei/ff1a3d",
  "Huawei ICT Competition (Global Winner)": "https://cdn.simpleicons.org/huawei/ff1a3d",
  "Google Cybersecurity": "https://cdn.simpleicons.org/google/4285f4",
  "Google IT Automation with Python": "https://cdn.simpleicons.org/google/4285f4",
  "Google Cloud Engineering": "https://cdn.simpleicons.org/googlecloud/4285f4",
};

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
                <div className="inventory-head">Capability Cluster {String(i + 1).padStart(2, "0")}</div>
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
