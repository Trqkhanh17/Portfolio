"use client";

import { useState } from "react";
import { portfolioContent, type Language } from "@/app/constants/portfolio-content";
import { usePortfolioEffects } from "@/app/hooks/use-portfolio-effects";

function ProjectVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="project-visual crm-visual">
        <div className="mini-window">
          <div className="mini-window-bar"><i /><i /><i /><span>CRM_ADMIN</span></div>
          <div className="mini-dashboard">
            <aside><i /><i /><i /><i /></aside>
            <div className="mini-dashboard-main"><div className="mini-stats"><b>24</b><b>86</b><b>12</b></div><div className="mini-chart"><i /><i /><i /><i /><i /></div></div>
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="project-visual store-visual">
        <div className="mini-store">
          <div className="mini-store-nav"><b>COFFEE.</b><span>SHOP · STORY · CART</span></div>
          <div className="mini-products"><i><b>01</b></i><i><b>02</b></i><i><b>03</b></i></div>
          <div className="mini-store-cta"><span>FRESHLY ROASTED</span><b>ADD TO CART +</b></div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual squad-visual">
      <div className="match-grid" />
      <i className="match-line line-one" /><i className="match-line line-two" /><i className="match-line line-three" />
      <span className="player player-one">P1</span><span className="player player-two">P2</span><span className="player player-three">P3</span>
      <strong>FIND<br />SQUAD</strong>
      <b className="match-status">MATCHING...</b>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const t = portfolioContent[lang];

  usePortfolioEffects(lang);

  return (
    <main id="top">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="pointer-stamp" aria-hidden="true"><span>+</span></div>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Tran Quoc Khanh — back to top">
          <span className="brand-symbol" aria-hidden="true">✦</span>
          <span className="brand-copy"><strong>TRẦN QUỐC KHÁNH</strong><small>SOFTWARE ENGINEER</small></span>
        </a>
        <div className="nav-menu">
          <a href="#about">{t.nav.about}</a><a href="#stack">{t.nav.stack}</a><a href="#experience">{t.nav.experience}</a><a href="#projects">{t.nav.projects}</a>
        </div>
        <div className="language-switch" aria-label="Language">
          <button className={lang === "vi" ? "active" : ""} onClick={() => setLang("vi")} aria-pressed={lang === "vi"}>VI</button>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
        </div>
        <a className="contact-button" href="#contact">{t.nav.contact}</a>
      </nav>

      <header className="hero">
        <div className="hero-status"><span className="status-dot" aria-hidden="true" />{t.role}</div>
        <div className="hero-grid">
          <div className="hero-main">
            <p className="eyebrow">{t.hello}</p>
            <div className="name-placeholder">TRẦN QUỐC KHÁNH</div>
            <h1><span className="headline-line headline-solid">{t.headline[0]}</span><span className="headline-line headline-outline">{t.headline[1]}</span></h1>
            <div className="hero-notes" aria-label={lang === "vi" ? "Điểm nổi bật" : "Highlights"}>{t.heroNotes.map((note, index) => <span key={note} className={`hero-note note-${index + 1}`}>{note}</span>)}</div>
            <div className="hero-actions">
              <a href="#projects">{t.viewProjects}</a>
              <a href="/Tran-Quoc-Khanh-CV.pdf" download>{t.resume}</a>
            </div>
          </div>
          <aside className="hero-welcome" data-reveal data-tilt>
            <div className="welcome-kicker"><span>01</span><span>PORTFOLIO / 2026</span></div>
            <p>{t.welcomeEyebrow}</p>
            <strong>{t.welcomeTitle[0]}<br /><span>{t.welcomeTitle[1]}</span></strong>
            <div className="welcome-footer"><span>{t.welcomeFooter}</span><i aria-hidden="true">↘</i></div>
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
            <article className="timeline-item" data-reveal>
              <span className="timeline-number">01</span>
              <div>
                <p className="timeline-label">{t.expRole}</p>
                <h3>{t.expCompany}</h3>
                <div className="experience-domains"><span>{t.expDomainLabel}</span>{t.expDomains.map(domain => <b key={domain}>{domain}</b>)}</div>
                <div className="experience-stack" aria-label="Company tech stack">{t.expStack.map(item => <span key={item}>{item}</span>)}</div>
                <ul className="experience-bullets">{t.expBullets.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <span className="timeline-date">{t.expDate}</span>
            </article>
          </div>
          <div className="education-row" data-reveal><span>{t.education}</span><strong>{t.degree}</strong><span>{t.school}</span></div>
        </div>
      </section>

      <section className="projects section" id="projects" data-number="04">
        <div className="section-index">{t.projectsIndex}</div>
        <div className="section-content">
          <div className="section-title-row" data-reveal><h2>{t.projectsTitle}</h2><p>{t.projectsNote}</p></div>
          <div className="projects-list">
            {t.projects.map((project, index) => (
              <article className="project-card featured-project" key={index} data-reveal data-tilt>
                <div className="project-topline"><span>0{index + 1}</span><span>{project.label}</span></div>
                <div className="featured-project-grid">
                  <div className={`project-preview project-preview-${index + 1}`} aria-hidden="true"><span>{project.visual}</span><ProjectVisual index={index} /><b>{project.badge.split(" ").map((word, wordIndex) => <span key={wordIndex}>{word}<br /></span>)}</b></div>
                  <div className="project-details">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="project-features">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
                    <div className="repo-links">
                      {project.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label}</a>)}
                    </div>
                  </div>
                </div>
                <div className="project-meta"><span>{project.tech}</span><span>GITHUB</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact" data-number="05">
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
