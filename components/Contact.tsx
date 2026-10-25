import type { Language, portfolioContent } from "@/app/constants/portfolio-content";
import styles from "./Contact.module.css";

interface ContactProps {
  t: (typeof portfolioContent)[Language];
}

export function Contact({ t }: ContactProps) {
  return (
    <section className={`section ${styles.contact}`} id="contact" data-number="04">
      <div className="section-index">{t.contactIndex}</div>
      <div className={`section-content ${styles.contactContent}`} data-reveal>
        <p>{t.contactLead}</p>
        <h2>
          {t.contactTitle[0]}
          <br />
          <span>{t.contactTitle[1]}</span>
        </h2>
        <div className={styles.contactLinks}>
          <a href="mailto:khanhtranquoc44@gmail.com">
            <small>{t.email}</small>
            <strong>khanhtranquoc44@gmail.com</strong>
          </a>
          <a href="https://github.com/Trqkhanh17" target="_blank" rel="noreferrer">
            <small>{t.github}</small>
            <strong>github.com/Trqkhanh17</strong>
          </a>
          <a href="tel:+84394551401">
            <small>{t.phone}</small>
            <strong>+84 394 551 401</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
