const projects = [
  {
    number: "01",
    title: "MOTION / MATTER",
    type: "DIGITAL EXPERIENCE",
    color: "yellow",
    description: "A tactile web experiment where type, motion and sound collide.",
  },
  {
    number: "02",
    title: "OFF-GRID",
    type: "PRODUCT SYSTEM",
    color: "pink",
    description: "A bold planning tool built for teams that refuse boring software.",
  },
  {
    number: "03",
    title: "NO SIGNAL",
    type: "BRAND + WEB",
    color: "blue",
    description: "Identity and storefront for an independent streetwear label.",
  },
];

const capabilities = [
  "CREATIVE DIRECTION",
  "WEB DESIGN",
  "FRONTEND DEVELOPMENT",
  "DESIGN SYSTEMS",
  "PROTOTYPING",
  "MOTION",
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="logo" href="#top" aria-label="Back to top">
          K<span>!</span>
        </a>
        <div className="nav-links">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a className="nav-cta" href="#contact">LET&apos;S TALK ↗</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span>INDEPENDENT CREATIVE DEVELOPER</span>
          <span>SAIGON · VN</span>
        </div>
        <h1>
          DIGITAL
          <span className="hero-line">
            <span className="asterisk" aria-hidden="true">✱</span>
            THINGS
          </span>
          <span className="hero-line outline-line">THAT HIT.</span>
        </h1>
        <div className="hero-footer">
          <p>I design and build expressive digital experiences for people who care about standing out.</p>
          <a className="circle-link" href="#work" aria-label="View selected work">↓</a>
        </div>
      </section>

      <div className="ticker" aria-label="Areas of expertise">
        <div className="ticker-track">
          <span>DESIGN ✦ CODE ✦ MOTION ✦ IDEAS ✦</span>
          <span aria-hidden="true">DESIGN ✦ CODE ✦ MOTION ✦ IDEAS ✦</span>
        </div>
      </div>

      <section className="work" id="work">
        <div className="section-heading">
          <p>[01] SELECTED WORK</p>
          <h2>BUILT TO BE<br />REMEMBERED.</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project ${project.color}`} key={project.number}>
              <div className="project-top">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-label">[02] THE SHORT VERSION</div>
        <div className="about-copy">
          <p>
            I TURN <span className="highlight-yellow">MESSY IDEAS</span> INTO
            CLEAR, USEFUL AND <span className="highlight-pink">LOUD</span> DIGITAL WORK.
          </p>
          <div className="about-note">
            <span>NO FLUFF.</span>
            <span>NO TEMPLATES.</span>
            <span>JUST GOOD WORK.</span>
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="section-heading compact">
          <p>[03] WHAT I DO</p>
          <h2>FULL STACK.<br />FULL FORCE.</h2>
        </div>
        <div className="capability-list">
          {capabilities.map((item, index) => (
            <div className="capability" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
              <span aria-hidden="true">●</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p>[04] HAVE A GOOD IDEA?</p>
        <h2>LET&apos;S MAKE<br /><span>SOME NOISE.</span></h2>
        <a href="mailto:hello@example.com">HELLO@EXAMPLE.COM ↗</a>
        <div className="contact-footer">
          <span>© 2026</span>
          <span>AVAILABLE FOR SELECT PROJECTS</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </section>
    </main>
  );
}
