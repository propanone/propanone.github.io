import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  defaultPortfolioIcon,
  educationLogoBySchoolKeyword,
} from "@/data/portfolioContent";

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const extractYear = (period: string) => {
  const matches = period.match(/(20\d{2})/g);
  if (!matches || matches.length === 0) {
    return period;
  }
  return matches[matches.length - 1];
};

const EducationSection = () => {
  const { t } = useLanguage();

  const renderCard = (
    item: (typeof t.education.items)[number],
    placeholder: string,
    year: string,
  ) => (
    <div className="card-glass pixel-reveal p-6">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="pixel-small rounded-full border border-accent/70 bg-accent/15 px-3 py-1 text-accent">
          {year}
        </span>
        <span className="pixel-small rounded-full border border-border bg-muted/60 px-3 py-1 text-muted-foreground">
          {item.period}
        </span>
      </div>

      <div className="flex gap-4">
        <div className="org-logo overflow-hidden bg-white p-1">
          <img
            src={withBase(placeholder)}
            alt={`${item.school} logo`}
            className="h-9 w-9 rounded-md object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="mb-1 font-semibold text-foreground">{item.degree}</h3>
          <p className="mb-2 font-medium text-primary">{item.school}</p>
          <p className="mb-2 text-base text-muted-foreground">{item.location}</p>
          {"note" in item && item.note && (
            <p className="mt-2 text-base italic text-primary/85">{item.note}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="education" className="border-b-2 border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="terminal-title mb-3 text-3xl font-bold md:text-4xl">{t.education.title}</h2>
          <p className="text-xl text-muted-foreground">{t.education.subtitle}</p>
        </motion.div>

        <div className="relative space-y-10">
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/70 via-accent/60 to-primary/35 md:block" />

          {t.education.items.map((item, i) => {
            const placeholder =
              Object.entries(educationLogoBySchoolKeyword).find(([key]) => item.school.includes(key))?.[1] ??
              defaultPortfolioIcon;

            const year = extractYear(item.period);
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.32, ease: "easeOut" }}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >
                <div className="absolute left-1/2 top-10 hidden h-5 w-5 -translate-x-1/2 rounded-full border-2 border-primary bg-background shadow-[0_0_0_6px_hsl(var(--background))] md:block" />
                <div
                  className={`absolute top-[2.85rem] hidden h-[2px] w-10 bg-primary/55 md:block ${
                    isLeft ? "left-[calc(50%-2.5rem)]" : "left-1/2"
                  }`}
                />

                <div className="md:hidden">
                  {renderCard(item, placeholder, year)}
                </div>

                {isLeft ? (
                  <>
                    <div className="hidden md:block">{renderCard(item, placeholder, year)}</div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="hidden md:block">{renderCard(item, placeholder, year)}</div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
