import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import huaweiLogo from "../assests/logos/huawei.png";
import sonatrachLogo from "../assests/logos/sonatrach.svg";

const logoMap: Record<string, string | null> = {
  Djezzy: null,
  "Huawei ICT Competition": huaweiLogo,
  "Djezzy (partenariat Huawei & MajestEYE)": huaweiLogo,
  "Djezzy (Huawei & MajestEYE partnership)": null,
  SONATRACH: sonatrachLogo,
  "Algérie Télécom": null,
};

const colorMap: Record<string, string> = {
  Djezzy: "#E30613",
  "Huawei ICT Competition": "#CF0A2C",
  "Djezzy (partenariat Huawei & MajestEYE)": "#E30613",
  "Djezzy (Huawei & MajestEYE partnership)": "#E30613",
  SONATRACH: "#005BAA",
  "Algérie Télécom": "#0072BC",
};

const getInitials = (name: string) => {
  return name.split(/[\s(]+/).filter(w => w.length > 1).slice(0, 2).map(w => w[0]).join("").toUpperCase();
};

const OrgAvatar = ({ name }: { name: string }) => {
  const logo = logoMap[name];
  const color = colorMap[name] || "hsl(var(--primary))";

  if (logo) {
    return (
      <div className="org-logo">
        <img src={logo} alt={name} className="h-8 w-8 object-contain" />
      </div>
    );
  }

  return (
    <div
      className="org-logo text-xs font-bold"
      style={{ backgroundColor: color + "20", color: color }}
    >
      {getInitials(name)}
    </div>
  );
};

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <>
      <section id="experience" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">{t.experience.title}</h2>
            <p className="text-muted-foreground">{t.experience.subtitle}</p>
          </motion.div>

          <div className="space-y-6">
            {t.experience.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass rounded-xl p-6"
              >
                <div className="flex gap-4">
                  <OrgAvatar name={item.company} />
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold">{item.role}</h3>
                        <p className="text-primary">{item.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {item.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {item.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {item.tasks.map((task, j) => (
                        <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Certifications</h2>
            <p className="text-muted-foreground">Recognized achievements and professional credentials</p>
          </motion.div>
          <div className="space-y-4">
            {[
              {
                name: "Huawei ICT Competition",
                badge: "🏆 Lauréat Mondial",
                color: "#CF0A2C",
                date: "2024",
                details: "Compétition internationale en technologies de l'information et de la communication. Reconnaissance mondiale pour l'excellence technique en réseaux et cloud computing."
              },
              {
                name: "Google Cybersecurity",
                badge: "Professional Certificate",
                color: "#4285F4",
                date: "2024",
                details: "Formation complète en cybersécurité couvrant la détection des menaces, la réponse aux incidents, la sécurité réseau et les outils SIEM."
              },
              {
                name: "Google IT Automation with Python",
                badge: "Professional Certificate",
                color: "#4285F4",
                date: "2024",
                details: "Automatisation des tâches IT avec Python, gestion de configuration, scripting avancé et intégration avec Git et GitHub."
              },
              {
                name: "Google Cloud Engineering",
                badge: "Professional Certificate",
                color: "#4285F4",
                date: "2024",
                details: "Conception et déploiement d'infrastructures cloud sur Google Cloud Platform, Kubernetes, BigQuery et services managés."
              },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg font-bold text-xl bg-primary text-primary-foreground"
                  >
                    {cert.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{cert.name}</h3>
                        <span className="text-sm text-primary">{cert.badge}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
