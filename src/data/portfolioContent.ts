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
    github: "https://github.com/propanone/KPI-Platform",
    visual: "icons/projects/docker-logo.png",
    resources: [
      { label: "Project report (PDF)", url: "pfe-thesis.pdf" },
      { label: "Stage report", url: "rapport-djezzy.pdf" },
    ],
  },
  "LTE Data Warehouse": {
    oneLiner: "Centralized LTE data platform for KPI monitoring, ETL automation, and forecasting.",
    github: "https://github.com/propanone/KPI-Platform",
    visual: "icons/projects/docker-logo.png",
    resources: [
      { label: "Project report (PDF)", url: "pfe-thesis.pdf" },
      { label: "Technical report (PDF)", url: "master-thesis.pdf" },
      { label: "Internship report", url: "rapport-djezzy.pdf" },
    ],
  },
  "Plateforme SaaS IA - Assurance": {
    oneLiner: "AI-assisted underwriting workflow powered by XGBoost and cloud-native serving.",
    github: "https://github.com/propanone/UI_DSIP",
    visual: "icons/projects/docker-logo.png",
    resources: [
      { label: "PPT documentation", url: "ict-slides.pdf" },
      { label: "Associated certification", url: "dsip-certification.pdf" },
      { label: "Associated certification", url: "huawei-ict-competition-certificate.pdf" },

    ],
  },

  "SCADA/VoIP Network Analysis": {
    oneLiner: "Industrial network analysis project with reliability and latency diagnostics.",
    github: "https://github.com/propanone/scada-voip-analysis",
    visual: "icons/experience/sonatrach.png",
    resources: [
      { label: "Project report (PDF)", url: "rapport-stage-sonatrach.pdf" },
    ],
  },
  "Temperature Sensing Using LM35 with Arduino": {
    oneLiner: "Embedded temperature sensing prototype using Arduino and LM35 sensor integration.",
    github: "https://github.com/propanone/Temperature-Sensing-Using-LM35-with-Arduino",
    visual: "favicon.png",
    resources: [],
  },
  "THE GIVER REINCARNATED": {
    oneLiner: "Discord bot game featuring unique gameplay mechanics and interactive features.",
    github: "https://github.com/propanone/THE-GIVER-REINCARNATED",
    visual: "favicon.png",
    resources: [],
  },
  "AES Crypto": {
    oneLiner: "Cryptography project implementing AES concepts and secure data handling patterns.",
    github: "https://github.com/propanone/AES-Crypto",
    visual: "favicon.png",
    resources: [],
  },
  "Library Management using Django": {
    oneLiner: "Django-based library management system with CRUD workflows and user operations.",
    github: "https://github.com/propanone/Library-Management-using-Django",
    visual: "favicon.png",
    resources: [],
  },
  "Networking Programming": {
    oneLiner: "Network programming project implementing socket-based client-server communication patterns.",
    github: "https://github.com/propanone/Networking-Programming",
    visual: "favicon.png",
    resources: [],
  },
  "OOP Python": {
    oneLiner: "Object-oriented Python project showcasing class hierarchies and design patterns.",
    github: "https://github.com/propanone/OOP-Python",
    visual: "favicon.png",
    resources: [],
  },
  "Security Research Lab": {
    oneLiner: "Security research and analysis project exploring malware behavior and defensive techniques.",
    github: "https://github.com/propanone/malwaredev",
    visual: "favicon.png",
    resources: [],
  },
  "Obsidian Second Brain": {
    oneLiner: "Personal journaling and second brain web application for knowledge management and daily reflection.",
    github: "https://github.com/propanone/obsidian",
    visual: "favicon.png",
    resources: [],
  },
};