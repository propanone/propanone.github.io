export const translations = {
  fr: {
    nav: {
      about: "À propos",
      education: "Formation",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },
    hero: {
      badge: "Recherche Contrat d'Apprentissage · Disponible Septembre 2026",
      title1: "Walid",
      title2: "Kessoum",
      subtitle1: "Cycle Ingénieur (2ème année), Spécialité Réseaux et Télécommunications à Sup Galilée – Université Sorbonne Paris Nord",
      subtitle2: "Ingénieur d'État et Master en Systèmes de Télécommunications et Réseaux de l'ENSTA d'Alger",
      location: "Paris, Île-de-France",
      contact: "Me Contacter",
      cv: "Voir le CV (PDF)",
    },
    about: {
      title: "À propos de moi",
      subtitle: "Passionné par les réseaux, la data et les télécommunications",
      description: "Ingénieur en Télécommunications et Réseaux, je suis passionné par l'optimisation des performances réseau et l'analyse de données. Mes centres d'intérêt incluent les réseaux LTE/5G, le Data Engineering, l'intelligence artificielle appliquée aux télécoms et le développement fullstack.",
      description2: "Actuellement en cycle ingénieur à Sup Galilée (Sorbonne Paris Nord), je recherche un contrat d'apprentissage pour mettre mes compétences techniques au service de projets innovants dans les télécommunications et la data.",
      cards: {
        networks: { title: "Réseaux & Télécoms", desc: "LTE, 5G, FTTH, SCADA, VoIP, SDH, DWDM" },
        data: { title: "Data Engineering", desc: "ETL, Data Warehouse, Apache Airflow, PostgreSQL" },
        ai: { title: "Intelligence Artificielle", desc: "LSTM, XGBoost, Random Forest, Prédiction KPI" },
        dev: { title: "Développement Fullstack", desc: "Django, Flask, PowerBI, Streamlit" },
      },
    },
    education: {
      title: "Formation",
      subtitle: "Mon parcours académique",
      items: [
        {
          degree: "Cycle Ingénieur (2ème année), Spécialité Réseaux et Télécommunications",
          school: "Sup Galilée – Université Sorbonne Paris Nord",
          location: "Paris, France",
          period: "Sept. 2025 – en cours",
        },
        {
          degree: "Diplôme d'Ingénieur d'État et Master en Systèmes de Télécommunications et Réseaux",
          school: "ENSTA – École Nationale Supérieure de Technologie Avancée",
          location: "Alger, Algérie",
          period: "Oct. 2020 – Juin 2025",
          note: "Projet de Fin d'Études mention très bien",
        },
        {
          degree: "Classes Préparatoires en Sciences de l'Ingénieur",
          school: "ESSA – École Supérieure des Sciences Appliquées",
          location: "Alger, Algérie",
          period: "Sept. 2020 – Juin 2022",
        },
      ],
    },
    experience: {
      title: "Expérience professionnelle",
      subtitle: "Mon parcours professionnel",
      items: [
        {
          role: "Ingénieur Data & Performance Réseau (Alternance)",
          company: "Djezzy",
          location: "Alger, Algérie",
          period: "Oct. 2024 – Mai 2025",
          tasks: [
            "Conçu un Data Warehouse PostgreSQL centralisant les données LTE (RAN & Core) avec pipelines ETL automatisés via Python et Apache Airflow",
            "Développé des modèles LSTM pour la prévision des KPIs critiques du réseau",
            "Créé un tableau de bord PowerBI temps réel et plateforme fullstack (Django/Flask) pour la surveillance réseau",
          ],
        },
        {
          role: "Lauréat Mondial (3ème Prix) - Innovation Track",
          company: "Huawei ICT Competition",
          location: "Shenzhen, Chine",
          period: "Mai 2025",
          tasks: [
            "Développé une plateforme SaaS d'IA pour l'assurance avec XGBoost sur Huawei Cloud ModelArts",
            "Classé 3ème sur 150,000+ participants mondiaux",
          ],
        },
        {
          role: "Data Scientist (Stage)",
          company: "Djezzy (partenariat Huawei & MajestEYE)",
          location: "Alger, Algérie",
          period: "Nov. 2024 – Déc. 2024",
          tasks: [
            "Sélectionné parmi 25/1 017 étudiants au niveau national",
            "Solution IA de prédiction du risque client avec Random Forest (AUC 0.87) et XGBoost (AUC 0.85)",
          ],
        },
        {
          role: "Analyste Réseau (Stage)",
          company: "SONATRACH",
          location: "Alger, Algérie",
          period: "Fév. 2024 – Avr. 2024",
          tasks: [
            "Analyse des architectures réseaux SCADA et VoIP",
            "Automatisation des tâches réseau avec scripts Python",
          ],
        },
        {
          role: "Assistant Ingénieur Réseaux (Stage)",
          company: "Algérie Télécom",
          location: "Alger, Algérie",
          period: "Mars 2023 – Avr. 2023",
          tasks: [
            "Déploiement d'infrastructures FTTH avec installation fibre optique et diagnostics OTDR",
            "Technologies SDH, DWDM, OFDM et gestion du trafic",
          ],
        },
      ],
    },
    projects: {
      title: "Projets",
      subtitle: "Quelques réalisations marquantes",
      items: [
        {
          name: "Data Warehouse LTE",
          description: "Architecture data warehouse pour centraliser les données réseau LTE avec ETL automatisé via Apache Airflow et modèles LSTM pour la prévision des KPIs.",
          tags: ["Python", "PostgreSQL", "Airflow", "LSTM", "PowerBI"],
        },
        {
          name: "Plateforme SaaS IA - Assurance",
          description: "Solution primée (3ème mondial Huawei ICT) automatisant le profilage de risque avec XGBoost déployé sur Huawei Cloud ModelArts.",
          tags: ["XGBoost", "Flask", "Huawei Cloud", "ModelArts"],
        },
        {
          name: "Prédiction Risque Client Télécom",
          description: "Système IA de prédiction du churn client avec Random Forest et XGBoost, interface Streamlit pour le monitoring temps réel.",
          tags: ["Random Forest", "XGBoost", "Streamlit", "Python"],
        },
        {
          name: "Analyse Réseau SCADA/VoIP",
          description: "Analyse d'architectures réseaux industrielles SCADA et VoIP avec automatisation Python pour SONATRACH.",
          tags: ["SCADA", "VoIP", "Python", "Wireshark"],
        },
      ],
    },
    skills: {
      title: "Compétences et Technologies",
      subtitle: "Mon arsenal technique",
      categories: {
        programming: { title: "Langages de Programmation", items: ["Python", "SQL", "C/C++", "Java", "JavaScript", "MATLAB", "Assembly ARM"] },
        ml: { title: "Machine Learning & Data", items: ["XGBoost", "LSTM", "Random Forest", "Apache Airflow", "ETL", "Data Warehousing", "Pandas", "NumPy", "Scikit-learn"] },
        frameworks: { title: "Frameworks & Outils", items: ["Django", "Flask", "Git", "Docker", "Streamlit", "Wireshark", "Linux"] },
        telecom: { title: "Réseaux & Télécoms", items: ["LTE/5G", "TCP/IP", "SCADA", "VoIP", "FTTH", "SDH", "DWDM", "OFDM", "Packet Tracer"] },
        hardware: { title: "Hardware & Autres", items: ["Arduino", "STM32", "MS Project", "PowerBI", "Adobe Creative Suite"] },
        certifications: { title: "Certifications", items: ["Huawei ICT Competition (Lauréat Mondial)", "Google Cybersecurity", "Google IT Automation with Python", "Google Cloud Engineering"] },
        languages: { title: "Langues", items: ["Français (Courant)", "Anglais (Courant)", "Arabe (Natif)"] },
      },
    },
  },
  en: {
    nav: {
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      badge: "Looking for Apprenticeship · Available September 2026",
      title1: "Walid",
      title2: "Kessoum",
      subtitle1: "Engineering Student (2nd year), Networks & Telecommunications at Sup Galilée – Sorbonne Paris Nord University",
      subtitle2: "State Engineer & Master's in Telecommunications Systems and Networks from ENSTA, Algiers",
      location: "Paris, Île-de-France",
      contact: "Contact Me",
      cv: "View CV (PDF)",
    },
    about: {
      title: "About Me",
      subtitle: "Passionate about networks, data and telecommunications",
      description: "Telecommunications and Networks Engineer, passionate about network performance optimization and data analysis. My interests include LTE/5G networks, Data Engineering, AI applied to telecoms, and fullstack development.",
      description2: "Currently pursuing an engineering degree at Sup Galilée (Sorbonne Paris Nord), I am looking for an apprenticeship to apply my technical skills to innovative projects in telecommunications and data.",
      cards: {
        networks: { title: "Networks & Telecoms", desc: "LTE, 5G, FTTH, SCADA, VoIP, SDH, DWDM" },
        data: { title: "Data Engineering", desc: "ETL, Data Warehouse, Apache Airflow, PostgreSQL" },
        ai: { title: "Artificial Intelligence", desc: "LSTM, XGBoost, Random Forest, KPI Prediction" },
        dev: { title: "Fullstack Development", desc: "Django, Flask, PowerBI, Streamlit" },
      },
    },
    education: {
      title: "Education",
      subtitle: "My academic background",
      items: [
        {
          degree: "Engineering Degree (2nd year), Networks & Telecommunications",
          school: "Sup Galilée – Sorbonne Paris Nord University",
          location: "Paris, France",
          period: "Sept. 2025 – Present",
        },
        {
          degree: "State Engineer Diploma & Master's in Telecommunications Systems and Networks",
          school: "ENSTA – National Higher School of Advanced Technology",
          location: "Algiers, Algeria",
          period: "Oct. 2020 – June 2025",
          note: "Final Year Project with highest honors",
        },
        {
          degree: "Preparatory Classes in Engineering Sciences",
          school: "ESSA – Higher School of Applied Sciences",
          location: "Algiers, Algeria",
          period: "Sept. 2020 – June 2022",
        },
      ],
    },
    experience: {
      title: "Professional Experience",
      subtitle: "My career path",
      items: [
        {
          role: "Data & Network Performance Engineer (Work-Study)",
          company: "Djezzy",
          location: "Algiers, Algeria",
          period: "Oct. 2024 – May 2025",
          tasks: [
            "Designed a PostgreSQL Data Warehouse centralizing LTE data (RAN & Core) with automated ETL pipelines via Python and Apache Airflow",
            "Developed LSTM models for critical network KPI forecasting",
            "Created a real-time PowerBI dashboard and fullstack platform (Django/Flask) for network monitoring",
          ],
        },
        {
          role: "Global Winner (3rd Prize) - Innovation Track",
          company: "Huawei ICT Competition",
          location: "Shenzhen, China",
          period: "May 2025",
          tasks: [
            "Developed an AI SaaS platform for insurance automating risk profiling with XGBoost on Huawei Cloud ModelArts",
            "Ranked 3rd out of 150,000+ global participants",
          ],
        },
        {
          role: "Data Scientist (Internship)",
          company: "Djezzy (Huawei & MajestEYE partnership)",
          location: "Algiers, Algeria",
          period: "Nov. 2024 – Dec. 2024",
          tasks: [
            "Selected among top 25 out of 1,017 students nationwide",
            "AI solution for customer churn prediction with Random Forest (AUC 0.87) and XGBoost (AUC 0.85)",
          ],
        },
        {
          role: "Network Analyst (Internship)",
          company: "SONATRACH",
          location: "Algiers, Algeria",
          period: "Feb. 2024 – Apr. 2024",
          tasks: [
            "Analyzed SCADA and VoIP network architectures",
            "Automated network tasks with Python scripts",
          ],
        },
        {
          role: "Assistant Network Engineer (Internship)",
          company: "Algérie Télécom",
          location: "Algiers, Algeria",
          period: "Mar. 2023 – Apr. 2023",
          tasks: [
            "Deployed FTTH infrastructures with fiber optic installation and OTDR diagnostics",
            "Explored SDH, DWDM, OFDM technologies and traffic management",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Notable achievements",
      items: [
        {
          name: "LTE Data Warehouse",
          description: "Data warehouse architecture to centralize LTE network data with automated ETL via Apache Airflow and LSTM models for KPI forecasting.",
          tags: ["Python", "PostgreSQL", "Airflow", "LSTM", "PowerBI"],
        },
        {
          name: "AI SaaS Platform - Insurance",
          description: "Award-winning solution (3rd globally at Huawei ICT) automating risk profiling with XGBoost deployed on Huawei Cloud ModelArts.",
          tags: ["XGBoost", "Flask", "Huawei Cloud", "ModelArts"],
        },
        {
          name: "Telecom Customer Churn Prediction",
          description: "AI customer churn prediction system with Random Forest and XGBoost, real-time monitoring via Streamlit interface.",
          tags: ["Random Forest", "XGBoost", "Streamlit", "Python"],
        },
        {
          name: "SCADA/VoIP Network Analysis",
          description: "Industrial SCADA and VoIP network architecture analysis with Python automation for SONATRACH.",
          tags: ["SCADA", "VoIP", "Python", "Wireshark"],
        },
      ],
    },
    skills: {
      title: "Skills & Technologies",
      subtitle: "My technical arsenal",
      categories: {
        programming: { title: "Programming Languages", items: ["Python", "SQL", "C/C++", "Java", "JavaScript", "MATLAB", "Assembly ARM"] },
        ml: { title: "Machine Learning & Data", items: ["XGBoost", "LSTM", "Random Forest", "Apache Airflow", "ETL", "Data Warehousing", "Pandas", "NumPy", "Scikit-learn"] },
        frameworks: { title: "Frameworks & Tools", items: ["Django", "Flask", "Git", "Docker", "Streamlit", "Wireshark", "Linux"] },
        telecom: { title: "Networks & Telecoms", items: ["LTE/5G", "TCP/IP", "SCADA", "VoIP", "FTTH", "SDH", "DWDM", "OFDM", "Packet Tracer"] },
        hardware: { title: "Hardware & Others", items: ["Arduino", "STM32", "MS Project", "PowerBI", "Adobe Creative Suite"] },
        certifications: { title: "Certifications", items: ["Huawei ICT Competition (Global Winner)", "Google Cybersecurity", "Google IT Automation with Python", "Google Cloud Engineering"] },
        languages: { title: "Languages", items: ["French (Fluent)", "English (Fluent)", "Arabic (Native)"] },
      },
    },
  },
} as const;
