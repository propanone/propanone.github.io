import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

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
          transition={{ duration: 0.2, ease: "linear" }}
          className="mb-12 text-center"
        >
          <h2 className="terminal-title mb-3 text-3xl font-bold md:text-4xl">{t.about.title}</h2>
          <p className="text-xl text-muted-foreground">{t.about.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.06, ease: "linear" }}
          className="card-glass mb-12 p-8"
        >
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">{t.about.description}</p>
          <p className="text-lg leading-relaxed text-muted-foreground">{t.about.description2}</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cardKeys.map((key, i) => {
            const card = t.about.cards[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.05, ease: "linear" }}
                className="card-glass p-6 text-center pixel-reveal"
              >
                <div className="pixel-small mx-auto mb-4 flex h-10 w-10 items-center justify-center border-2 border-primary bg-primary text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-2 font-semibold">{card.title}</h3>
                <p className="text-base text-muted-foreground">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
