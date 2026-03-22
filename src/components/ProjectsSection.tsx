import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

type ProjectResource = {
  label: string;
  url: string;
};

type ProjectMeta = {
  oneLiner: string;
  github: string;
  resources: ProjectResource[];
  placeholder: string;
};

const projectMetaMap: Record<string, ProjectMeta> = {
  "Data Warehouse LTE": {
    oneLiner: "Centralized LTE data platform for KPI monitoring, ETL automation, and forecasting.",
    github: "https://github.com/propanone/lte-data-warehouse",
    placeholder: "public/icons/projects/lte-data-warehouse.png",
    resources: [
      { label: "Project report (PDF)", url: "#" },
      { label: "Technical documentation", url: "#" },
      { label: "Stage report", url: "#" },
    ],
  },
  "LTE Data Warehouse": {
    oneLiner: "Centralized LTE data platform for KPI monitoring, ETL automation, and forecasting.",
    github: "https://github.com/propanone/lte-data-warehouse",
    placeholder: "public/icons/projects/lte-data-warehouse.png",
    resources: [
      { label: "Project report (PDF)", url: "#" },
      { label: "Technical documentation", url: "#" },
      { label: "Internship report", url: "#" },
    ],
  },
  "Plateforme SaaS IA - Assurance": {
    oneLiner: "AI-assisted underwriting workflow powered by XGBoost and cloud-native serving.",
    github: "https://github.com/propanone/ai-saas-insurance",
    placeholder: "public/icons/projects/ai-saas-insurance.png",
    resources: [
      { label: "Project report (PDF)", url: "#" },
      { label: "Technical documentation", url: "#" },
      { label: "Huawei ICT submission deck", url: "#" },
      { label: "Associated certification", url: "#" },
    ],
  },
  "AI SaaS Platform - Insurance": {
    oneLiner: "AI-assisted underwriting workflow powered by XGBoost and cloud-native serving.",
    github: "https://github.com/propanone/ai-saas-insurance",
    placeholder: "public/icons/projects/ai-saas-insurance.png",
    resources: [
      { label: "Project report (PDF)", url: "#" },
      { label: "Technical documentation", url: "#" },
      { label: "Huawei ICT submission deck", url: "#" },
      { label: "Associated certification", url: "#" },
    ],
  },
  "Prédiction Risque Client Télécom": {
    oneLiner: "Churn risk scoring pipeline with deployable ML models and interactive monitoring.",
    github: "https://github.com/propanone/telecom-risk-prediction",
    placeholder: "public/icons/projects/telecom-risk-prediction.png",
    resources: [
      { label: "Project report (PDF)", url: "#" },
      { label: "Technical documentation", url: "#" },
      { label: "Master thesis (PDF)", url: "#" },
      { label: "PFE thesis (PDF)", url: "#" },
    ],
  },
  "Telecom Customer Churn Prediction": {
    oneLiner: "Churn risk scoring pipeline with deployable ML models and interactive monitoring.",
    github: "https://github.com/propanone/telecom-risk-prediction",
    placeholder: "public/icons/projects/telecom-risk-prediction.png",
    resources: [
      { label: "Project report (PDF)", url: "#" },
      { label: "Technical documentation", url: "#" },
      { label: "Master thesis (PDF)", url: "#" },
      { label: "PFE thesis (PDF)", url: "#" },
    ],
  },
  "Analyse Réseau SCADA/VoIP": {
    oneLiner: "Industrial network analysis project with reliability and latency diagnostics.",
    github: "https://github.com/propanone/scada-voip-analysis",
    placeholder: "public/icons/projects/scada-voip-analysis.png",
    resources: [
      { label: "Project report (PDF)", url: "#" },
      { label: "Technical documentation", url: "#" },
      { label: "Stage report", url: "#" },
    ],
  },
  "SCADA/VoIP Network Analysis": {
    oneLiner: "Industrial network analysis project with reliability and latency diagnostics.",
    github: "https://github.com/propanone/scada-voip-analysis",
    placeholder: "public/icons/projects/scada-voip-analysis.png",
    resources: [
      { label: "Project report (PDF)", url: "#" },
      { label: "Technical documentation", url: "#" },
      { label: "Internship report", url: "#" },
    ],
  },
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
            const meta = projectMetaMap[project.name];

            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass rounded-xl p-6"
              >
                <div className="mb-4 rounded-lg border border-border/80 bg-secondary/40 p-3">
                  <p className="text-xs text-muted-foreground">
                    Project visual placeholder: <span className="font-mono">{meta?.placeholder ?? "public/icons/projects/replace-me.png"}</span>
                  </p>
                </div>

                <h3 className="mb-2 text-lg font-semibold">{project.name}</h3>
                {meta?.oneLiner && <p className="mb-3 text-sm font-medium text-primary/90">{meta.oneLiner}</p>}
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {meta?.github ? (
                    <a
                      href={meta.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs text-primary"
                    >
                      GitHub repository
                    </a>
                  ) : (
                    <span className="inline-flex rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground">
                      Add GitHub repository link
                    </span>
                  )}

                  {(meta?.resources ?? []).map((resource) =>
                    resource.url === "#" ? (
                      <span
                        key={resource.label}
                        className="inline-flex rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {resource.label}
                      </span>
                    ) : (
                      <a
                        key={resource.label}
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs text-primary"
                      >
                        {resource.label}
                      </a>
                    ),
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
