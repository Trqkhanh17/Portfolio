"use client";

import { useState } from "react";
import { portfolioContent, type Language } from "@/app/constants/portfolio-content";
import { usePortfolioEffects } from "@/app/hooks/use-portfolio-effects";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const t = portfolioContent[lang];

  usePortfolioEffects(lang);

  return (
    <main id="top">
      <div className="scroll-progress" aria-hidden="true" />
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Tran Quoc Khanh — back to top">
          <span className="brand-symbol" aria-hidden="true">✦</span>
          <span className="brand-copy"><strong>TRẦN QUỐC KHÁNH</strong><small>SOFTWARE ENGINEER</small></span>
        </a>
        <div className="nav-menu">
          <a href="#about">{t.nav.about}</a><a href="#stack">{t.nav.stack}</a><a href="#experience">{t.nav.experience}</a>
        </div>
        <div className="language-switch" aria-label="Language">
          <button className={lang === "vi" ? "active" : ""} onClick={() => setLang("vi")} aria-pressed={lang === "vi"}>VI</button>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
        </div>
        <a className="contact-button" href="#contact">{t.nav.contact}</a>
      </nav>

      <header className="hero">
        <div className="hero-grid">
          <div className="hero-main">
            <p className="eyebrow">{t.hello}</p>
            <div className="name-placeholder">TRẦN QUỐC KHÁNH</div>
            <h1><span className="headline-line headline-solid">{t.headline[0]}</span><span className="headline-line headline-outline">{t.headline[1]}</span></h1>
            <div className="hero-notes" aria-label={lang === "vi" ? "Điểm nổi bật" : "Highlights"}>{t.heroNotes.map((note, index) => <span key={note} className={`hero-note note-${index + 1}`}>{note}</span>)}</div>
            <div className="hero-actions">
              <a href="#experience">{t.viewExperience}</a>
              <a href="/Tran-Quoc-Khanh-CV.pdf" download>{t.resume}</a>
            </div>
          </div>
          <aside className="hero-welcome" data-reveal>
            <p className="welcome-eyebrow">{t.welcomeEyebrow}</p>
            <p className="welcome-title"><span>{t.welcomeTitle[0]}</span><strong>{t.welcomeTitle[1]}</strong></p>
            <a className="welcome-scroll" href="#about">{t.welcomeFooter}</a>
          </aside>
        </div>
        <div className="hero-bottom">
          <p data-reveal>{t.summary}</p>
          <div className="quick-facts">{t.facts.map(([value, label]) => <div key={label} data-reveal><strong>{value}</strong><span>{label}</span></div>)}</div>
        </div>
      </header>

      <div className="marquee" aria-label="Software engineering disciplines"><div className="marquee-track"><span>{t.marquee}</span><span aria-hidden="true">{t.marquee}</span></div></div>

      <section className="about section" id="about" data-number="01">
        <div className="section-index">{t.aboutIndex}</div>
        <div className="section-content about-content" data-reveal>
          <h2>{t.aboutTitle[0]}<br /><span>{t.aboutTitle[1]}</span></h2>
          <div className="about-grid">
            <div className="about-copy">
              <p className="large-placeholder">{t.aboutText}</p>
              <dl className="about-meta">{t.aboutMeta.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
              <div className="principles">{t.principles.map(([number, label]) => <div key={number}><span>{number}</span><strong>{label}</strong></div>)}</div>
            </div>
            <figure className="about-portrait" data-reveal>
              <img
                src="/tran-quoc-khanh-graduation.png"
                width="560"
                height="840"
                loading="lazy"
                decoding="async"
                alt={lang === "vi" ? "Trần Quốc Khánh trong lễ phục tốt nghiệp" : "Graduation portrait of Tran Quoc Khanh"}
              />
              <figcaption><span>TRẦN QUỐC KHÁNH</span><span>{lang === "vi" ? "TỐT NGHIỆP · 2025" : "GRADUATION · 2025"}</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="stack section" id="stack" data-number="02">
        <div className="section-index">{t.stackIndex}</div>
        <div className="section-content">
          <div className="section-title-row" data-reveal><h2>{t.stackTitle}</h2><p>{t.stackNote}</p></div>
          <div className="stack-grid">
            {t.stackGroups.map(([title, items], index) => <article className="stack-card" key={index} data-reveal><div className="stack-card-head"><span>0{index + 1}</span><span className="card-signal">●</span></div><h3>{title}</h3><ul>{items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}</ul></article>)}
          </div>
        </div>
      </section>

      <section className="experience section" id="experience" data-number="03">
        <div className="section-index">{t.expIndex}</div>
        <div className="section-content">
          <h2 data-reveal>{t.expTitle[0]}<br />{t.expTitle[1]}</h2>
          <div className="timeline">
            {t.experiences.map((experience, index) => (
              <article className="timeline-item" key={experience.role} data-reveal>
                <span className="timeline-number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p className="timeline-label">{experience.role}</p>
                  <h3>{experience.company}</h3>
                  <p className="timeline-label">{experience.arrangement}</p>
                  <div className="experience-domains"><span>{t.expDomainLabel}</span>{experience.domains.map(domain => <b key={domain}>{domain}</b>)}</div>
                  <div className="experience-stack" aria-label="Company tech stack">{experience.stack.map(item => <span key={item}>{item}</span>)}</div>
                  <ul className="experience-bullets">{experience.bullets.map(item => <li key={item}>{item}</li>)}</ul>
                </div>
                <span className="timeline-date">{experience.date}</span>
              </article>
            ))}
          </div>
          <div className="education-row" data-reveal><span>{t.education}</span><strong>{t.degree}</strong><span>{t.school}</span></div>
        </div>
      </section>

      <section className="contact section" id="contact" data-number="04">
        <div className="section-index">{t.contactIndex}</div>
        <div className="section-content contact-content" data-reveal>
          <p>{t.contactLead}</p><h2>{t.contactTitle[0]}<br /><span>{t.contactTitle[1]}</span></h2>
          <div className="contact-links">
            <a href="mailto:khanhtranquoc44@gmail.com"><small>{t.email}</small><strong>khanhtranquoc44@gmail.com</strong></a>
            <a href="https://github.com/Trqkhanh17" target="_blank" rel="noreferrer"><small>{t.github}</small><strong>github.com/Trqkhanh17</strong></a>
            <a href="tel:+84394551401"><small>{t.phone}</small><strong>+84 394 551 401</strong></a>
          </div>
        </div>
      </section>

      <footer><span>{t.footer}</span><span>© 2026 TRẦN QUỐC KHÁNH</span><a href="#top">{t.top}</a></footer>
    </main>
  );
}
