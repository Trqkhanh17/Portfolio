import type { Language, portfolioContent } from "@/app/constants/portfolio-content";
import styles from "./Footer.module.css";

interface FooterProps {
  t: (typeof portfolioContent)[Language];
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <span>{t.footer}</span>
      <span>© 2026 TRẦN QUỐC KHÁNH</span>
      <a href="#top">{t.top}</a>
    </footer>
  );
}
