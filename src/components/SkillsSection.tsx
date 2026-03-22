import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { BadgeCheck, Brain, Code2, Cpu, Languages, Network, Wrench } from "lucide-react";

// Map skill names to devicon or simpleicons slugs
const techIconMap: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "C/C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  MATLAB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  "Assembly ARM": "https://cdn.simpleicons.org/arm/0091BD",
  XGBoost: "https://cdn.simpleicons.org/xgboost/0F172A",
  LSTM: "https://cdn.simpleicons.org/tensorflow/FF6F00",
  "Random Forest": "https://cdn.simpleicons.org/scikitlearn/F7931E",
  "Apache Airflow": "https://cdn.simpleicons.org/apacheairflow/017CEE",
  ETL: "https://cdn.simpleicons.org/apachespark/E25A1C",
  "Data Warehousing": "https://cdn.simpleicons.org/postgresql/4169E1",
  "Scikit-learn": "https://cdn.simpleicons.org/scikitlearn/F7931E",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Streamlit: "https://cdn.simpleicons.org/streamlit/FF4B4B",
  Wireshark: "https://cdn.simpleicons.org/wireshark/1679A7",
  Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "LTE/5G": "https://cdn.simpleicons.org/cisco/1BA0D7",
  "TCP/IP": "https://cdn.simpleicons.org/cisco/1BA0D7",
  SCADA: "https://cdn.simpleicons.org/siemens/009999",
  VoIP: "https://cdn.simpleicons.org/asterisk/0F172A",
  FTTH: "https://cdn.simpleicons.org/cisco/1BA0D7",
  SDH: "https://cdn.simpleicons.org/nokia/124191",
  DWDM: "https://cdn.simpleicons.org/huawei/FF0000",
  OFDM: "https://cdn.simpleicons.org/intel/0071C5",
  "Packet Tracer": "https://cdn.simpleicons.org/cisco/1BA0D7",
  Arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  STM32: "https://cdn.simpleicons.org/stmicroelectronics/03234B",
  "MS Project": "https://cdn.simpleicons.org/microsoftproject/217346",
  PowerBI: "https://cdn.simpleicons.org/powerbi/F2C811",
  "Adobe Creative Suite": "https://cdn.simpleicons.org/adobe/FF0000",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  NumPy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  "Huawei ICT Competition (Lauréat Mondial)": "https://cdn.simpleicons.org/huawei/FF0000",
  "Huawei ICT Competition (Global Winner)": "https://cdn.simpleicons.org/huawei/FF0000",
  "Google Cybersecurity": "https://cdn.simpleicons.org/google/4285F4",
  "Google IT Automation with Python": "https://cdn.simpleicons.org/google/4285F4",
  "Google Cloud Engineering": "https://cdn.simpleicons.org/googlecloud/4285F4",
};

const categoryIconMap = {
  programming: Code2,
  ml: Brain,
  frameworks: Wrench,
  telecom: Network,
  hardware: Cpu,
  certifications: BadgeCheck,
  languages: Languages,
} as const;

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
  const icon = techIconMap[name];

  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-2 text-xs text-secondary-foreground">
      {icon && (
        <img src={icon} alt={name} className="h-4 w-4" loading="lazy" />
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
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">{t.skills.title}</h2>
          <p className="text-muted-foreground">{t.skills.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryKeys.map((key, i) => {
            const cat = t.skills.categories[key];
            const Icon = categoryIconMap[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass rounded-xl p-6"
              >
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <Icon className="h-4 w-4" />
                  <h3 className="font-semibold">{cat.title}</h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
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
