import type { Language, portfolioContent } from "@/app/constants/portfolio-content";
import styles from "./Skills.module.css";

interface SkillsProps {
  t: (typeof portfolioContent)[Language];
}

export function Skills({ t }: SkillsProps) {
  return (
    <section className="section" id="stack" data-number="02">
      <div className="section-index">{t.stackIndex}</div>
      <div className="section-content">
        <div className="section-title-row" data-reveal>
          <h2>{t.stackTitle}</h2>
          <p>{t.stackNote}</p>
        </div>

        <div className={styles.stackGrid}>
          {t.stackGroups.map(([title, items], index) => (
            <article className={styles.stackCard} key={index} data-reveal>
              <div className={styles.stackCardHead}>
                <span>0{index + 1}</span>
                <span className={styles.cardSignal}>●</span>
              </div>
              <h3>{title}</h3>
              <ul>
                {items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
