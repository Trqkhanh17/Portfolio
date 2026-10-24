import type { Language, portfolioContent } from "@/app/constants/portfolio-content";
import styles from "./Hero.module.css";

interface HeroProps {
  lang: Language;
  t: (typeof portfolioContent)[Language];
}

export function Hero({ lang, t }: HeroProps) {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroMain}>
          <p className={styles.eyebrow}>{t.hello}</p>
          <div className={styles.namePlaceholder}>TRẦN QUỐC KHÁNH</div>
          <h1>
            <span className={`${styles.headlineLine} ${styles.headlineSolid}`}>
              {t.headline[0]}
            </span>
            <span className={`${styles.headlineLine} ${styles.headlineOutline}`}>
              {t.headline[1]}
            </span>
          </h1>

          <div
            className={styles.heroNotes}
            aria-label={lang === "vi" ? "Điểm nổi bật" : "Highlights"}
          >
            {t.heroNotes.map((note) => (
              <span key={note} className={styles.heroNote}>
                {note}
              </span>
            ))}
          </div>

          <div className={styles.heroActions}>
            <a href="#experience">{t.viewExperience}</a>
            <a href="/Tran-Quoc-Khanh-CV.pdf" download>
              {t.resume}
            </a>
          </div>
        </div>

        <aside className={styles.heroWelcome} data-reveal>
          <p className={styles.welcomeEyebrow}>{t.welcomeEyebrow}</p>
          <p className={styles.welcomeTitle}>
            <span>{t.welcomeTitle[0]}</span>
            <strong>{t.welcomeTitle[1]}</strong>
          </p>
          <a className={styles.welcomeScroll} href="#about">
            {t.welcomeFooter}
          </a>
        </aside>
      </div>

      <div className={styles.heroBottom}>
        <p data-reveal>{t.summary}</p>
        <div className={styles.quickFacts}>
          {t.facts.map(([value, label]) => (
            <div key={label} data-reveal>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
