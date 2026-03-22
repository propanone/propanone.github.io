import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  defaultPortfolioIcon,
  projectMetaByName,
} from "@/data/portfolioContent";

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="border-b-2 border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">{t.projects.title}</h2>
          <p className="text-xl text-muted-foreground">{t.projects.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.projects.items.map((project, i) => {
            const meta = projectMetaByName[project.name];

            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass p-6"
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center overflow-hidden border-2 border-border bg-white p-2">
                  <img
                    src={withBase(meta?.visual ?? defaultPortfolioIcon)}
                    alt={`${project.name} visual`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <h3 className="mb-2 text-lg font-semibold">{project.name}</h3>
                {meta?.oneLiner && <p className="mb-3 text-base font-medium text-primary/90">{meta.oneLiner}</p>}
                <p className="mb-4 text-base leading-relaxed text-muted-foreground">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="pixel-chip"
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
                      className="pixel-btn-secondary px-3 py-1"
                    >
                      GitHub repository
                    </a>
                  ) : (
                    <span className="pixel-chip">
                      Add GitHub repository link
                    </span>
                  )}

                  {(meta?.resources ?? []).map((resource) => (
                    <a
                      key={resource.label}
                      href={withBase(resource.url)}
                      target="_blank"
                      rel="noreferrer"
                      className="pixel-btn-secondary px-3 py-1"
                    >
                      {resource.label}
                    </a>
                  ))}
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
