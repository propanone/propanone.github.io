import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, FolderOpen, Network } from "lucide-react";

const tagIconMap: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Airflow: "https://cdn.simpleicons.org/apacheairflow/017CEE",
  LSTM: "https://cdn.simpleicons.org/tensorflow/FF6F00",
  PowerBI: "https://cdn.simpleicons.org/powerbi/F2C811",
  XGBoost: "https://cdn.simpleicons.org/xgboost/0F172A",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "Huawei Cloud": "https://cdn.simpleicons.org/huawei/FF0000",
  ModelArts: "https://cdn.simpleicons.org/huawei/FF0000",
  "Random Forest": "https://cdn.simpleicons.org/scikitlearn/F7931E",
  Streamlit: "https://cdn.simpleicons.org/streamlit/FF4B4B",
  SCADA: "https://cdn.simpleicons.org/siemens/009999",
  VoIP: "https://cdn.simpleicons.org/asterisk/0F172A",
  Wireshark: "https://cdn.simpleicons.org/wireshark/1679A7",
};

const projectDefinitionMap: Record<string, string> = {
  "Data Warehouse LTE": "Plateforme de collecte et consolidation des KPIs LTE pour la supervision et la prévision réseau.",
  "LTE Data Warehouse": "Centralized LTE KPI platform for monitoring, trend analysis, and network forecasting.",
  "Plateforme SaaS IA - Assurance": "Moteur de scoring IA qui automatise l'estimation du risque client pour accélérer la décision métier.",
  "AI SaaS Platform - Insurance": "AI scoring engine that automates customer risk estimation to speed up underwriting decisions.",
  "Prédiction Risque Client Télécom": "Pipeline ML pour détecter les profils à risque de churn et orienter les actions de rétention.",
  "Telecom Customer Churn Prediction": "ML pipeline to identify high churn-risk users and guide retention actions.",
  "Analyse Réseau SCADA/VoIP": "Diagnostic réseau industriel pour améliorer la fiabilité, la latence et la continuité de service.",
  "SCADA/VoIP Network Analysis": "Industrial network diagnostics to improve reliability, latency, and service continuity.",
};

const projectIconMap: Record<string, typeof FolderOpen> = {
  "Data Warehouse LTE": BarChart3,
  "LTE Data Warehouse": BarChart3,
  "Plateforme SaaS IA - Assurance": BrainCircuit,
  "AI SaaS Platform - Insurance": BrainCircuit,
  "Prédiction Risque Client Télécom": BrainCircuit,
  "Telecom Customer Churn Prediction": BrainCircuit,
  "Analyse Réseau SCADA/VoIP": Network,
  "SCADA/VoIP Network Analysis": Network,
};

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">{t.projects.title}</h2>
          <p className="text-muted-foreground">{t.projects.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.projects.items.map((project, i) => {
            const ProjectIcon = projectIconMap[project.name] ?? FolderOpen;
            const definition = projectDefinitionMap[project.name];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass rounded-xl p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <ProjectIcon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{project.name}</h3>
                {definition && <p className="mb-3 text-sm font-medium text-primary/90">{definition}</p>}
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary"
                    >
                      {tagIconMap[tag] && <img src={tagIconMap[tag]} alt={tag} className="h-3.5 w-3.5" loading="lazy" />}
                      {tag}
                    </span>
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

export default ProjectsSection;
