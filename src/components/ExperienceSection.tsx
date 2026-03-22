import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const companyPlaceholders: Record<string, string> = {
  Djezzy: "public/icons/experience/djezzy.png",
  "Huawei ICT Competition": "public/icons/experience/huawei-ict.png",
  "Djezzy (partenariat Huawei & MajestEYE)": "public/icons/experience/djezzy-majesteye.png",
  "Djezzy (Huawei & MajestEYE partnership)": "public/icons/experience/djezzy-majesteye.png",
  SONATRACH: "public/icons/experience/sonatrach.png",
  "Algérie Télécom": "public/icons/experience/algerie-telecom.png",
};

const certifications = [
  {
    name: "Huawei ICT Competition",
    badge: "Global Winner (3rd Prize)",
    date: "2024",
    details:
      "International ICT competition with global recognition for technical excellence in network and cloud innovation.",
    placeholder: "public/icons/certifications/huawei-ict.png",
    certUrl: "#",
  },
  {
    name: "Google Cybersecurity",
    badge: "Professional Certificate",
    date: "2024",
    details:
      "Hands-on training in threat detection, incident response, network security, and SIEM workflows.",
    placeholder: "public/icons/certifications/google-cybersecurity.png",
    certUrl: "#",
  },
  {
    name: "Google IT Automation with Python",
    badge: "Professional Certificate",
    date: "2024",
    details:
      "Practical automation with Python for system administration, scripting, and DevOps tasks.",
    placeholder: "public/icons/certifications/google-it-automation-python.png",
    certUrl: "#",
  },
  {
    name: "Google Cloud Engineering",
    badge: "Professional Certificate",
    date: "2024",
    details:
      "Cloud architecture and deployment practices with managed services and observability principles.",
    placeholder: "public/icons/certifications/google-cloud-engineering.png",
    certUrl: "#",
  },
] as const;

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
            {t.experience.items.map((item, i) => {
              const placeholder = companyPlaceholders[item.company] ?? "public/icons/experience/replace-me.png";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-glass rounded-xl p-6"
                >
                  <div className="flex gap-4">
                    <div className="org-logo text-[10px] font-semibold uppercase tracking-wide text-primary">Icon</div>
                    <div className="flex-1">
                      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold">{item.role}</h3>
                          <p className="text-primary">{item.company}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.location} • {item.period}</p>
                      </div>
                      <p className="mb-3 text-xs text-muted-foreground">
                        Placeholder file: <span className="font-mono">{placeholder}</span>
                      </p>
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
              );
            })}
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
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="org-logo text-[10px] font-semibold uppercase tracking-wide text-primary">Icon</div>
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold">{cert.name}</h3>
                        <span className="text-sm text-primary">{cert.badge}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                    <p className="mb-2 text-sm text-muted-foreground">{cert.details}</p>
                    <p className="mb-3 text-xs text-muted-foreground">
                      Placeholder file: <span className="font-mono">{cert.placeholder}</span>
                    </p>
                    {cert.certUrl === "#" ? (
                      <span className="inline-flex rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground">
                        Add certificate URL
                      </span>
                    ) : (
                      <a
                        href={cert.certUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs text-primary"
                      >
                        View certificate
                      </a>
                    )}
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
