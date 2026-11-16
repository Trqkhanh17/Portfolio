import type { Language, portfolioContent } from "@/app/constants/portfolio-content";
import styles from "./Experience.module.css";

interface ExperienceProps {
  t: (typeof portfolioContent)[Language];
}

export function Experience({ t }: ExperienceProps) {
  return (
    <section className={`section ${styles.experience}`} id="experience" data-number="02">
      <div className="section-index">{t.experienceIndex}</div>
      <div className="section-content">
        <div className={`section-title-row ${styles.experienceTitleRow}`} data-reveal>
          <h2>{t.experienceTitle}</h2>
          <p>{t.experienceIntro}</p>
        </div>

        <article className={styles.jobCard} data-reveal>
          <header className={styles.jobHeader}>
            <div>
              <p className={styles.jobRole}>{t.experience.role}</p>
              <h3>{t.experience.company}</h3>
              <span className={styles.jobArrangement}>{t.experience.arrangement}</span>
            </div>
            <span>{t.experience.date}</span>
          </header>

          <div className={styles.experienceDomains}>
            <span>{t.expDomainLabel}</span>
            {t.experience.domains.map((domain) => <b key={domain}>{domain}</b>)}
          </div>

          <div className={styles.impactGrid}>
            {t.experience.impact.map(([area, description], index) => (
              <div className={styles.impactItem} key={area}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{area}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className={styles.educationRow}>
          <span>{t.educationLabel}</span>
          <strong>{t.degree}<small>{t.school}</small></strong>
          <span>{t.educationYears}</span>
        </div>
      </div>
    </section>
  );
}
