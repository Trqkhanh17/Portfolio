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
        <h2>
          {t.aboutTitle[0]}
          <br />
          <span>{t.aboutTitle[1]}</span>
        </h2>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutCopy}>
            <p className={styles.largePlaceholder}>{t.aboutText}</p>
            <dl className={styles.aboutMeta}>
              {t.aboutMeta.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className={styles.principles}>
              {t.principles.map(([number, label]) => (
                <div key={number}>
                  <span>{number}</span>
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
          </div>

          <figure className={styles.aboutPortrait} data-reveal>
            <img
              src="/tran-quoc-khanh-graduation.png"
              width="560"
              height="840"
              loading="lazy"
              decoding="async"
              alt="Trần Quốc Khánh"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
