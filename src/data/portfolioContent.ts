export type PortfolioLink = {
  label: string;
  url: string;
};

export type PortfolioCertification = {
  name: string;
  badge: string;
  date: string;
  details: string;
  icon: string;
  certUrl: string;
};

export type PortfolioProjectMeta = {
  oneLiner: string;
  github: string;
  visual: string;
  resources: PortfolioLink[];
};

export const defaultPortfolioIcon = "favicon.png";

export const educationLogoBySchoolKeyword: Record<string, string> = {
  "Sup Galilée": "icons/education/sup-galilee.png",
  "Sup Galilee": "icons/education/sup-galilee.png",
  Sorbonne: "icons/education/sup-galilee.png",
  ENSTA: "icons/education/ensta.png",
  ESSA: "icons/education/essa.jpg",
};

export const experienceLogoByCompany: Record<string, string> = {
  Djezzy: "favicon.png",
  "Huawei ICT Competition": "icons/experience/huawei.png",
  "Djezzy (partenariat Huawei & MajestEYE)": "icons/experience/huawei.png",
  "Djezzy (Huawei & MajestEYE partnership)": "icons/experience/huawei.png",
  SONATRACH: "icons/experience/sonatrach.svg",
  "Algerie Telecom": "favicon.png",
  "Algérie Télécom": "favicon.png",
};

export const experienceDocumentsByCompany: Record<string, PortfolioLink[]> = {
  Djezzy: [
    { label: "Internship report", url: "rapport-djezzy.pdf" },
    { label: "Recommendation letter (Bouchachi)", url: "recommendation-bouchachi.pdf" },
  ],
  "Huawei ICT Competition": [
    { label: "Competition certificate", url: "huawei-ict-competition-certificate.pdf" },
    { label: "DSIP certification", url: "dsip-certification.pdf" },
  ],
  "Djezzy (partenariat Huawei & MajestEYE)": [
    { label: "Project report", url: "rapport-cdta.pdf" },
    { label: "Recommendation letter (Kheira)", url: "recommendation-kheira.pdf" },
  ],
  "Djezzy (Huawei & MajestEYE partnership)": [
    { label: "Project report", url: "rapport-cdta.pdf" },
    { label: "Recommendation letter (Kheira)", url: "recommendation-kheira.pdf" },
  ],
  SONATRACH: [
    { label: "Stage report", url: "rapport-stage-sonatrach.pdf" },
    { label: "Recommendation letter (Bouterfas)", url: "recommendation-bouterfas.pdf" },
  ],
  "Algerie Telecom": [
    { label: "Rapport AT", url: "rapport-at.pdf" },
    { label: "Stage AT", url: "stage-at.pdf" },
    { label: "Seminar AT", url: "seminar-at.pdf" },
  ],
  "Algérie Télécom": [
    { label: "Rapport AT", url: "rapport-at.pdf" },
    { label: "Stage AT", url: "stage-at.pdf" },
    { label: "Seminar AT", url: "seminar-at.pdf" },
  ],
};

export const certificationItems: PortfolioCertification[] = [
  {
    name: "Huawei ICT Competition",
    badge: "Global Winner (3rd Prize)",
    date: "2024",
    details:
      "International ICT competition with global recognition for technical excellence in network and cloud innovation.",
    icon: "icons/certifications/huawei.png",
    certUrl: "huawei-ict-competition-certificate.pdf",
  },
  {
    name: "Google Cybersecurity",
    badge: "Professional Certificate",
    date: "2024",
    details:
      "Hands-on training in threat detection, incident response, network security, and SIEM workflows.",
    icon: "favicon.png",
    certUrl: "google-cybersecurity.pdf",
  },
  {
    name: "Google IT Automation with Python",
    badge: "Professional Certificate",
    date: "2024",
    details:
      "Practical automation with Python for system administration, scripting, and DevOps tasks.",
    icon: "favicon.png",
    certUrl: "google-it-automation-with-python.pdf",
  },
  {
    name: "Google Cloud Engineering",
    badge: "Professional Certificate",
    date: "2024",
    details:
      "Cloud architecture and deployment practices with managed services and observability principles.",
    icon: "favicon.png",
    certUrl: "google-it-support.pdf",
  },
];

export const projectMetaByName: Record<string, PortfolioProjectMeta> = {
  "Data Warehouse LTE": {
    oneLiner: "Centralized LTE data platform for KPI monitoring, ETL automation, and forecasting.",
    github: "https://github.com/propanone/lte-data-warehouse",
    visual: "icons/projects/docker-logo.png",
    resources: [
      { label: "Project report (PDF)", url: "rapport-djezzy.pdf" },
      { label: "Technical documentation", url: "rapport-cdta.pdf" },
      { label: "Stage report", url: "rapport-djezzy.pdf" },
    ],
  },
  "LTE Data Warehouse": {
    oneLiner: "Centralized LTE data platform for KPI monitoring, ETL automation, and forecasting.",
    github: "https://github.com/propanone/lte-data-warehouse",
    visual: "icons/projects/docker-logo.png",
    resources: [
      { label: "Project report (PDF)", url: "rapport-djezzy.pdf" },
      { label: "Technical documentation", url: "rapport-cdta.pdf" },
      { label: "Internship report", url: "rapport-djezzy.pdf" },
    ],
  },
  "Plateforme SaaS IA - Assurance": {
    oneLiner: "AI-assisted underwriting workflow powered by XGBoost and cloud-native serving.",
    github: "https://github.com/propanone/ai-saas-insurance",
    visual: "icons/projects/docker-logo.png",
    resources: [
      { label: "Project report (PDF)", url: "rapport-cdta.pdf" },
      { label: "Technical documentation", url: "rapport-cdta.pdf" },
      { label: "Huawei ICT submission deck", url: "huawei-ict-competition-certificate.pdf" },
      { label: "Associated certification", url: "dsip-certification.pdf" },
    ],
  },
  "AI SaaS Platform - Insurance": {
    oneLiner: "AI-assisted underwriting workflow powered by XGBoost and cloud-native serving.",
    github: "https://github.com/propanone/ai-saas-insurance",
    visual: "icons/projects/docker-logo.png",
    resources: [
      { label: "Project report (PDF)", url: "rapport-cdta.pdf" },
      { label: "Technical documentation", url: "rapport-cdta.pdf" },
      { label: "Huawei ICT submission deck", url: "huawei-ict-competition-certificate.pdf" },
      { label: "Associated certification", url: "dsip-certification.pdf" },
    ],
  },
  "Prédiction Risque Client Télécom": {
    oneLiner: "Churn risk scoring pipeline with deployable ML models and interactive monitoring.",
    github: "https://github.com/propanone/telecom-risk-prediction",
    visual: "favicon.png",
    resources: [
      { label: "Project report (PDF)", url: "rapport-cdta.pdf" },
      { label: "Technical documentation", url: "master-thesis.pdf" },
      { label: "Master thesis (PDF)", url: "master-thesis.pdf" },
      { label: "PFE thesis (PDF)", url: "pfe-thesis.pdf" },
    ],
  },
  "Telecom Customer Churn Prediction": {
    oneLiner: "Churn risk scoring pipeline with deployable ML models and interactive monitoring.",
    github: "https://github.com/propanone/telecom-risk-prediction",
    visual: "favicon.png",
    resources: [
      { label: "Project report (PDF)", url: "rapport-cdta.pdf" },
      { label: "Technical documentation", url: "master-thesis.pdf" },
      { label: "Master thesis (PDF)", url: "master-thesis.pdf" },
      { label: "PFE thesis (PDF)", url: "pfe-thesis.pdf" },
    ],
  },
  "Analyse Réseau SCADA/VoIP": {
    oneLiner: "Industrial network analysis project with reliability and latency diagnostics.",
    github: "https://github.com/propanone/scada-voip-analysis",
    visual: "icons/experience/sonatrach.svg",
    resources: [
      { label: "Project report (PDF)", url: "rapport-stage-sonatrach.pdf" },
      { label: "Technical documentation", url: "rapport-stage-sonatrach.pdf" },
      { label: "Stage report", url: "rapport-stage-sonatrach.pdf" },
    ],
  },
  "SCADA/VoIP Network Analysis": {
    oneLiner: "Industrial network analysis project with reliability and latency diagnostics.",
    github: "https://github.com/propanone/scada-voip-analysis",
    visual: "icons/experience/sonatrach.svg",
    resources: [
      { label: "Project report (PDF)", url: "rapport-stage-sonatrach.pdf" },
      { label: "Technical documentation", url: "rapport-stage-sonatrach.pdf" },
      { label: "Internship report", url: "rapport-stage-sonatrach.pdf" },
    ],
  },
};