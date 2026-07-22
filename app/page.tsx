const stackGroups = [
  { number: "01", title: "FRONTEND", items: ["ADD FRAMEWORK", "ADD UI LIBRARY", "ADD LANGUAGE"] },
  { number: "02", title: "BACKEND", items: ["ADD FRAMEWORK", "ADD RUNTIME", "ADD API STYLE"] },
  { number: "03", title: "DATABASE", items: ["ADD DATABASE", "ADD ORM", "ADD CACHE"] },
  { number: "04", title: "DEVOPS", items: ["ADD CLOUD", "ADD CONTAINER", "ADD CI/CD"] },
];

const projects = ["PROJECT ONE", "PROJECT TWO", "PROJECT THREE"];

function EmptyField({ children }: { children: React.ReactNode }) {
  return <span className="empty-field">{children}</span>;
}

export default function Home() {
  return (
    <main id="top">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top">PORTFOLIO<span>_</span></a>
        <div className="nav-menu">
          <a href="#about">ABOUT</a>
          <a href="#stack">STACK</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
        </div>
        <a className="contact-button" href="#contact">CONTACT ↗</a>
      </nav>

      <header className="hero">
        <div className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          SOFTWARE ENGINEER
        </div>

        <div className="hero-grid">
          <div className="hero-main">
            <p className="eyebrow">HELLO, I&apos;M</p>
            <div className="name-placeholder">[ YOUR NAME ]</div>
            <h1>BUILDING<br />SOFTWARE<br /><span>THAT WORKS.</span></h1>
          </div>

          <aside className="hero-card">
            <div className="window-bar">
              <span>PROFILE.TXT</span>
              <span>— □ ×</span>
            </div>
            <div className="hero-card-content">
              <p><span className="code-key">role:</span> &quot;Software Engineer&quot;</p>
              <p><span className="code-key">location:</span> <EmptyField>ADD LOCATION</EmptyField></p>
              <p><span className="code-key">focus:</span> <EmptyField>ADD SPECIALIZATION</EmptyField></p>
              <p><span className="code-key">status:</span> <EmptyField>ADD AVAILABILITY</EmptyField></p>
            </div>
            <div className="hero-actions">
              <a href="#projects">VIEW PROJECTS ↓</a>
              <a href="#">RÉSUMÉ ↗</a>
            </div>
          </aside>
        </div>

        <div className="hero-bottom">
          <p><EmptyField>ADD A SHORT INTRODUCTION ABOUT YOURSELF HERE.</EmptyField></p>
          <div className="quick-facts">
            <div><strong>—</strong><span>YEARS EXPERIENCE</span></div>
            <div><strong>—</strong><span>PROJECTS SHIPPED</span></div>
            <div><strong>—</strong><span>CUPS OF COFFEE</span></div>
          </div>
        </div>
      </header>

      <div className="marquee" aria-label="Software engineering disciplines">
        <div className="marquee-track">
          <span>WEB DEVELOPMENT ✦ SYSTEM DESIGN ✦ API DEVELOPMENT ✦ CLEAN CODE ✦</span>
          <span aria-hidden="true">WEB DEVELOPMENT ✦ SYSTEM DESIGN ✦ API DEVELOPMENT ✦ CLEAN CODE ✦</span>
        </div>
      </div>

      <section className="about section" id="about">
        <div className="section-index">01 / ABOUT</div>
        <div className="section-content about-content">
          <h2>ENGINEERING WITH<br /><span>CLARITY &amp; PURPOSE.</span></h2>
          <div className="about-grid">
            <p className="large-placeholder"><EmptyField>ADD YOUR PROFESSIONAL SUMMARY. WRITE ABOUT THE PROBLEMS YOU ENJOY SOLVING AND THE KIND OF SOFTWARE YOU WANT TO BUILD.</EmptyField></p>
            <div className="principles">
              <div><span>01</span><strong>RELIABLE SYSTEMS</strong></div>
              <div><span>02</span><strong>CLEAN ARCHITECTURE</strong></div>
              <div><span>03</span><strong>USER-FIRST THINKING</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="stack section" id="stack">
        <div className="section-index">02 / TECH STACK</div>
        <div className="section-content">
          <div className="section-title-row">
            <h2>TOOLS I USE.</h2>
            <p>REPLACE THE FIELDS BELOW WITH YOUR ACTUAL TECHNOLOGIES.</p>
          </div>
          <div className="stack-grid">
            {stackGroups.map((group) => (
              <article className="stack-card" key={group.title}>
                <div className="stack-card-head"><span>{group.number}</span><span>●</span></div>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-index">03 / EXPERIENCE</div>
        <div className="section-content">
          <h2>WHERE I&apos;VE<br />BUILT THINGS.</h2>
          <div className="timeline">
            {["EXPERIENCE 01", "EXPERIENCE 02"].map((item, index) => (
              <article className="timeline-item" key={item}>
                <span className="timeline-number">0{index + 1}</span>
                <div>
                  <p className="timeline-label">[ ROLE TITLE ]</p>
                  <h3>[ COMPANY NAME ]</h3>
                  <p><EmptyField>ADD A SHORT DESCRIPTION OF YOUR RESPONSIBILITIES AND IMPACT.</EmptyField></p>
                </div>
                <span className="timeline-date">[ START — END ]</span>
              </article>
            ))}
          </div>
          <div className="education-row">
            <span>EDUCATION</span>
            <strong>[ DEGREE / MAJOR ]</strong>
            <span>[ SCHOOL NAME · YEAR ]</span>
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-index">04 / PROJECTS</div>
        <div className="section-content">
          <div className="section-title-row">
            <h2>SELECTED BUILDS.</h2>
            <p>PROJECTS THAT SHOW HOW YOU THINK, BUILD AND SHIP.</p>
          </div>
          <div className="projects-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project}>
                <div className="project-topline">
                  <span>0{index + 1}</span>
                  <span>[ YEAR ]</span>
                </div>
                <div className="project-preview" aria-hidden="true">
                  <span>&lt;/&gt;</span>
                  <div className="preview-lines"><i /><i /><i /></div>
                </div>
                <h3>[ {project} ]</h3>
                <p><EmptyField>ADD WHAT YOU BUILT, THE PROBLEM IT SOLVES AND YOUR CONTRIBUTION.</EmptyField></p>
                <div className="project-meta">
                  <span>[ TECH STACK ]</span>
                  <span>CODE ↗ &nbsp; LIVE ↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="section-index">05 / CONTACT</div>
        <div className="section-content contact-content">
          <p>HAVE A ROLE, PROJECT OR IDEA?</p>
          <h2>LET&apos;S BUILD<br /><span>SOMETHING SOLID.</span></h2>
          <div className="contact-links">
            <span>[ YOUR EMAIL ADDRESS ]</span>
            <span>[ GITHUB URL ]</span>
            <span>[ LINKEDIN URL ]</span>
          </div>
        </div>
      </section>

      <footer>
        <span>SOFTWARE ENGINEER PORTFOLIO</span>
        <span>© 2026</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
