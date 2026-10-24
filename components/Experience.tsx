import type { Language, portfolioContent } from "@/app/constants/portfolio-content";
import styles from "./Experience.module.css";

interface ExperienceProps {
  t: (typeof portfolioContent)[Language];
}

export function Experience({ t }: ExperienceProps) {
  return (
    <section className={`section ${styles.experience}`} id="experience" data-number="03">
      <div className="section-index">{t.expIndex}</div>
      <div className="section-content">
        <h2 data-reveal>
          {t.expTitle[0]}
          <br />
          {t.expTitle[1]}
        </h2>

        <div className={styles.timeline}>
          {t.experiences.map((experience, index) => (
            <article className={styles.timelineItem} key={experience.role} data-reveal>
              <span className={styles.timelineNumber}>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className={styles.timelineLabel}>{experience.role}</p>
                <h3>{experience.company}</h3>
                <p className={styles.timelineLabel}>{experience.arrangement}</p>
                <div className={styles.experienceDomains}>
                  <span>{t.expDomainLabel}</span>
                  {experience.domains.map((domain) => (
                    <b key={domain}>{domain}</b>
                  ))}
                </div>
                <div className={styles.experienceStack} aria-label="Company tech stack">
                  {experience.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <ul className={styles.experienceBullets}>
                  {experience.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <span className={styles.timelineDate}>{experience.date}</span>
            </article>
          ))}
        </div>

        <div className={styles.educationRow} data-reveal>
          <span>{t.education}</span>
          <strong>{t.degree}</strong>
          <span>{t.school}</span>
        </div>
      </div>
    </section>
  );
}
