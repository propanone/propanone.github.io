import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Brain, Radar, Network, Rocket } from "lucide-react";
import { aboutHighlightKeywords } from "@/data/siteContent";

const iconByIndex = [Brain, Radar, Network, Rocket] as const;

const quickTechStack = [
  { label: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { label: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { label: "Airflow", icon: "https://cdn.simpleicons.org/apacheairflow/17b0eb" },
  { label: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { label: "5G", icon: "https://cdn.simpleicons.org/cisco/1ba0d7" },
  { label: "Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285f4" },
];

const highlightImportant = (text: string) => {
  const tokens = text.split(new RegExp(`(${aboutHighlightKeywords.join("|")})`, "gi"));
  return tokens.map((token, idx) => {
    const isImportant = aboutHighlightKeywords.some((word) => word.toLowerCase() === token.toLowerCase());
    if (!isImportant) {
      return <span key={`${token}-${idx}`}>{token}</span>;
    }
    return (
      <span key={`${token}-${idx}`} className="font-semibold text-primary">
        {token}
      </span>
    );
  });
};

const AboutSection = () => {
  const { t } = useLanguage();
  const cardKeys = Object.keys(t.about.cards) as Array<keyof typeof t.about.cards>;

  return (
    <section id="about" className="border-b-2 border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="terminal-title mb-3 text-3xl font-bold md:text-4xl">{t.about.title}</h2>
          <p className="text-xl text-muted-foreground">{t.about.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
          className="card-glass mb-12 p-8"
        >
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">{highlightImportant(t.about.description)}</p>
          <p className="text-lg leading-relaxed text-muted-foreground">{highlightImportant(t.about.description2)}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {quickTechStack.map((tech) => (
              <span key={tech.label} className="pixel-chip gap-2">
                <img
                  src={tech.icon}
                  alt={`${tech.label} logo`}
                  className="h-3.5 w-3.5 object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <span className="font-medium">{tech.label}</span>
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cardKeys.map((key, i) => {
            const card = t.about.cards[key];
            const Icon = iconByIndex[i] ?? Brain;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.32, delay: i * 0.06, ease: "easeOut" }}
                className="card-glass p-6 text-center pixel-reveal"
              >
                <div className="pixel-small mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/70 bg-primary/20 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{card.title}</h3>
                <p className="text-base text-muted-foreground">{highlightImportant(card.desc)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
