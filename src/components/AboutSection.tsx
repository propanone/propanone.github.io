import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Wifi, Database, Brain, Code2 } from "lucide-react";

const icons = { networks: Wifi, data: Database, ai: Brain, dev: Code2 };

const AboutSection = () => {
  const { t } = useLanguage();
  const cardKeys = Object.keys(t.about.cards) as Array<keyof typeof t.about.cards>;

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">{t.about.title}</h2>
          <p className="text-muted-foreground">{t.about.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-glass mb-12 rounded-xl p-8"
        >
          <p className="mb-4 leading-relaxed text-muted-foreground">{t.about.description}</p>
          <p className="leading-relaxed text-muted-foreground">{t.about.description2}</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cardKeys.map((key, i) => {
            const Icon = icons[key];
            const card = t.about.cards[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-glass rounded-xl p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
