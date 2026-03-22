import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  certificationItems,
  defaultPortfolioIcon,
  experienceDocumentsByCompany,
  experienceLogoByCompany,
} from "@/data/portfolioContent";

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <>
      <section id="experience" className="border-b-2 border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
             className="mb-12 text-center"
             transition={{ duration: 0.2, ease: "linear" }}
          >
              <h2 className="terminal-title mb-3 text-3xl font-bold md:text-4xl">{t.experience.title}</h2>
            <p className="text-xl text-muted-foreground">{t.experience.subtitle}</p>
          </motion.div>

          <div className="space-y-6">
            {t.experience.items.map((item, i) => {
              const placeholder = experienceLogoByCompany[item.company] ?? defaultPortfolioIcon;
              const docs = experienceDocumentsByCompany[item.company] ?? [];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                   transition={{ delay: i * 0.05, duration: 0.2, ease: "linear" }}
                  className="card-glass p-6"
                >
                  <div className="flex gap-4">
                    <div className="org-logo overflow-hidden bg-white p-1">
                      <img
                        src={withBase(placeholder)}
                        alt={`${item.company} icon`}
                        className="h-9 w-9 rounded-md object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold">{item.role}</h3>
                          <p className="text-primary">{item.company}</p>
                        </div>
                        <p className="text-base text-muted-foreground">{item.location} • {item.period}</p>
                      </div>
                      <ul className="space-y-2">
                        {item.tasks.map((task, j) => (
                          <li key={j} className="flex gap-2 text-base text-muted-foreground">
                            <span className="mt-2 h-2 w-2 flex-shrink-0 border border-primary bg-primary" />
                            {task}
                          </li>
                        ))}
                      </ul>
                      {docs.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {docs.map((doc) => (
                            <a
                              key={doc.label}
                              href={withBase(doc.url)}
                              target="_blank"
                              rel="noreferrer"
                              className="pixel-btn-secondary px-3 py-1"
                            >
                              {doc.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="certifications" className="border-b-2 border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
             className="mb-12 text-center"
             transition={{ duration: 0.2, ease: "linear" }}
          >
              <h2 className="terminal-title mb-3 text-3xl font-bold md:text-4xl">Certifications</h2>
            <p className="text-xl text-muted-foreground">Recognized achievements and professional credentials</p>
          </motion.div>
          <div className="space-y-4">
            {certificationItems.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                 transition={{ delay: i * 0.05, duration: 0.2, ease: "linear" }}
                className="card-glass p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="org-logo overflow-hidden bg-white p-1">
                    <img
                      src={withBase(cert.icon)}
                      alt={`${cert.name} icon`}
                      className="h-9 w-9 rounded-md object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold">{cert.name}</h3>
                        <span className="text-sm text-primary">{cert.badge}</span>
                      </div>
                      <span className="text-base text-muted-foreground">{cert.date}</span>
                    </div>
                    <p className="mb-2 text-base text-muted-foreground">{cert.details}</p>
                    <a
                      href={withBase(cert.certUrl)}
                      target="_blank"
                      rel="noreferrer"
                      className="pixel-btn-secondary px-3 py-1"
                    >
                      View certificate
                    </a>
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
