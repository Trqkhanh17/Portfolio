import type { Language, portfolioContent } from "@/app/constants/portfolio-content";
import styles from "./About.module.css";

interface AboutProps {
  t: (typeof portfolioContent)[Language];
}

export function About({ t }: AboutProps) {
  return (
    <section className={`section ${styles.about}`} id="about" data-number="01">
      <div className="section-index">{t.aboutIndex}</div>
      <div className="section-content" data-reveal>
        <h2>{t.aboutTitle}</h2>
        <p className={styles.aboutLead}>{t.aboutText}</p>
        <div className={styles.aboutGrid}>
          <h3 className={styles.focusTitle}>{t.focusTitle}</h3>
          <div className={styles.focusGrid}>
            {t.focusAreas.map(([title, description], index) => (
              <article className={styles.focusCard} key={title} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className={styles.languageLine}>
            <span>{t.languages[0]}</span>
            <strong>{t.languages[1]}</strong>
            <strong>{t.languages[2]}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
