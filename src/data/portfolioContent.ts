// EDIT THIS FILE for contact links, documents, logos, certifications, and project links.

export const personalInfo = {
  name: "Walid Kessoum",
  email: "mw.kessoum@icloud.com",
  phone: "+33 7 46 50 54 37",
  github: "https://github.com/propanone",
  linkedin: "https://linkedin.com/in/walid-kessoum",
  cvPath: "cv.pdf#view=FitH",
};

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
};

export const defaultPortfolioIcon = "favicon.png";

export const quickTechStack = [
  { label: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { label: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { label: "Airflow", icon: "https://cdn.simpleicons.org/apacheairflow/17b0eb" },
  { label: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { label: "5G", icon: "https://cdn.simpleicons.org/cisco/1ba0d7" },
  { label: "Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285f4" },
  { label: "Matlab", icon: "https://www.svgrepo.com/show/373830/matlab.svg" },
];

export const skillLogoByName: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  SQL: "https://cdn.simpleicons.org/postgresql/66d9ef",
  "C/C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  MATLAB: "https://cdn.simpleicons.org/mathworks/e16737",
  "Assembly ARM": "https://cdn.simpleicons.org/arm/00adef",
  XGBoost: "https://cdn.simpleicons.org/xgboost/3f6f9f",
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

export const categoryDescriptions = {
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

export const educationLogoBySchoolKeyword: Record<string, string> = {
  "Paris-Saclay": "icons/education/saclay.png",
  "Sup Galilée": "icons/education/sup-galilee.png",
  "Sup Galilee": "icons/education/sup-galilee.png",
  Sorbonne: "icons/education/sup-galilee.png",
  ENSTA: "icons/education/ensta.png",
  ESSA: "icons/education/essa.jpg",
};

export const experienceLogoByCompany: Record<string, string> = {
  Djezzy: "icons/experience/djezzy.png",
  "Huawei ICT Competition": "icons/experience/huawei.png",
  "Djezzy (partenariat Huawei & MajestEYE)": "icons/experience/huawei.png",
  "Djezzy (Huawei & MajestEYE partnership)": "icons/experience/huawei.png",
  SONATRACH: "icons/experience/sonatrach.png",
  "Algerie Telecom": "icons/experience/algerie-telecom.png",
  "Algérie Télécom": "icons/experience/algerie-telecom.png",
};

export const experienceDocumentsByCompany: Record<string, PortfolioLink[]> = {
  Djezzy: [
    { label: "Internship report", url: "rapport-djezzy.pdf" },
    { label: "PFE thesis", url: "pfe-thesis.pdf" },
    { label: "Master thesis", url: "master-thesis.pdf" },

  ],
  "Huawei ICT Competition": [
    { label: "Competition certificate", url: "huawei-ict-competition-certificate.pdf" },
  ],
  "Djezzy (partenariat Huawei & MajestEYE)": [
    { label: "DSIP certification", url: "dsip-certification.pdf" },
  ],
  SONATRACH: [
    { label: "Stage report", url: "rapport-stage-sonatrach.pdf" },
    { label: "Seminar CDTA", url: "rapport-cdta.pdf" },
  ],
  "Algerie Telecom": [
    { label: "Rapport AT", url: "rapport-at.pdf" },
    { label: "Seminar AT", url: "seminar-at.pdf" },
  ],
  "Algérie Télécom": [
    { label: "Rapport AT", url: "rapport-at.pdf" },
    { label: "Seminar AT", url: "seminar-at.pdf" },
  ],
};

export const certificationItems: PortfolioCertification[] = [
  {
    name: "Huawei ICT Competition",
    badge: "Global Winner (3rd Prize)",
    date: "2025",
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
    icon: "icons/certifications/google-g.png",
    certUrl: "google-cybersecurity.pdf",
  },
  {
    name: "Google IT Automation with Python",
    badge: "Professional Certificate",
    date: "2023",
    details:
      "Practical automation with Python for system administration, scripting, and DevOps tasks.",
    icon: "icons/certifications/google-g.png",
    certUrl: "google-it-automation-with-python.pdf",
  },
  {
    name: "Google IT Support",
    badge: "Professional Certificate",
    date: "2022",
    details:
      "Foundational IT support skills including troubleshooting, customer service, networking, and system administration.",
    icon: "icons/certifications/google-g.png",
    certUrl: "google-it-support.pdf",
  },
];

export const projectMetaByName: Record<string, PortfolioProjectMeta> = {
  "Data Warehouse LTE": {
    oneLiner: "Centralized LTE data platform for KPI monitoring, ETL automation, and forecasting.",
    github: "https://github.com/propanone/A-Data-Driven-Framework-for-AI-Powered-LTE-Network-Performance-Optimizati",
    visual: "icons/projects/kpi.png",
  },
  "LTE Data Warehouse": {
    oneLiner: "Centralized LTE data platform for KPI monitoring, ETL automation, and forecasting.",
    github: "https://github.com/propanone/A-Data-Driven-Framework-for-AI-Powered-LTE-Network-Performance-Optimizati",
    visual: "icons/projects/kpi.png",
  },
  "Plateforme SaaS IA - Assurance": {
    oneLiner: "AI-assisted underwriting workflow powered by XGBoost and cloud-native serving.",
    github: "https://github.com/propanone/UI_DSIP",
    visual: "icons/projects/ict.png",
  },

  "SWITCHERS – Resilient Enterprise Network Architecture": {
    oneLiner: "Multi-site enterprise network with OSPF multi-area routing, DHCP, NAT, and automatic failover.",
    github: "https://github.com/propanone/switchers-network-architecture",
    visual: "icons/projects/cisco.png",
  },
  "SCADA/VoIP Network Analysis": {
    oneLiner: "Industrial network analysis project with reliability and latency diagnostics.",
    github: "https://github.com/propanone/scada-voip-analysis",
    visual: "icons/experience/sonatrach.png",
  },
  "Temperature Sensing Using LM35 with Arduino": {
    oneLiner: "Embedded temperature sensing prototype using Arduino and LM35 sensor integration.",
    github: "https://github.com/propanone/Temperature-Sensing-Using-LM35-with-Arduino",
    visual: "icons/projects/arduino.png",
  },
  "AES Crypto": {
    oneLiner: "Cryptography project implementing AES concepts and secure data handling patterns.",
    github: "https://github.com/propanone/AES-Crypto",
    visual: "icons/projects/aes.png",
  },
  "Library Management using Django": {
    oneLiner: "Django-based library management system with CRUD workflows and user operations.",
    github: "https://github.com/propanone/Library-Management-using-Django",
    visual: "icons/projects/django.png",
  },
  "Obsidian Second Brain": {
    oneLiner: "Personal journaling and second brain web application for knowledge management and daily reflection.",
    github: "https://github.com/propanone/obsidian",
    visual: "icons/projects/obsidian.png",
  },
};

export const projectMetaById: Record<string, PortfolioProjectMeta> = {
  "switchers-network": projectMetaByName["SWITCHERS – Resilient Enterprise Network Architecture"],
  "lte-data-warehouse": projectMetaByName["LTE Data Warehouse"],
  "ai-insurance-platform": projectMetaByName["Plateforme SaaS IA - Assurance"],
  "arduino-temperature-sensor": projectMetaByName["Temperature Sensing Using LM35 with Arduino"],
  "aes-crypto": projectMetaByName["AES Crypto"],
  "django-library-management": projectMetaByName["Library Management using Django"],
  "obsidian-second-brain": projectMetaByName["Obsidian Second Brain"],
};