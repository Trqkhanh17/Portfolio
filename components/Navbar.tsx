"use client";

import type { Language, portfolioContent } from "@/app/constants/portfolio-content";
import styles from "./Navbar.module.css";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (typeof portfolioContent)[Language];
}

export function Navbar({ lang, setLang, t }: NavbarProps) {
  return (
    <nav className={styles.siteNav} aria-label="Main navigation">
      <a className={styles.brand} href="#top" aria-label="Tran Quoc Khanh — back to top">
        <span className={styles.brandSymbol} aria-hidden="true">✦</span>
        <span className={styles.brandCopy}>
          <strong>TRẦN QUỐC KHÁNH</strong>
          <small>SOFTWARE ENGINEER</small>
        </span>
      </a>

      <div className={`${styles.navMenu} nav-menu`}>
        <a href="#about">{t.nav.about}</a>
        <a href="#stack">{t.nav.stack}</a>
        <a href="#experience">{t.nav.experience}</a>
      </div>

      <div className={styles.languageSwitch} aria-label="Language">
        <button
          type="button"
          className={lang === "vi" ? styles.active : ""}
          onClick={() => setLang("vi")}
          aria-pressed={lang === "vi"}
        >
          VI
        </button>
        <button
          type="button"
          className={lang === "en" ? styles.active : ""}
          onClick={() => setLang("en")}
          aria-pressed={lang === "en"}
        >
          EN
        </button>
      </div>

      <a className={styles.contactButton} href="#contact">
        {t.nav.contact}
      </a>
    </nav>
  );
}
