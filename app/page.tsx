"use client";

import { useEffect, useState } from "react";

type Lang = "vi" | "en";

const copy = {
  vi: {
    nav: { about: "ABOUT", stack: "SKILLS", experience: "EXPERIENCE", projects: "PROJECTS", contact: "CONTACT ↗" },
    role: "SOFTWARE ENGINEER",
    hello: "HELLO, I'M",
    headline: ["SOFTWARE", "ENGINEER"],
    profile: "PROFILE.TXT",
    profileRows: [
      ["Vị trí", "Junior Software Engineer"],
      ["Địa điểm", "TP. Hồ Chí Minh, Việt Nam"],
      ["Chuyên môn", "Phát triển ứng dụng web Full-stack"],
      ["Lĩnh vực", "Hệ thống doanh nghiệp — POS, CRM & ERP"],
    ],
    viewProjects: "VIEW PROJECTS ↓",
    resume: "DOWNLOAD CV ↗",
    summary: "Kỹ sư phần mềm đam mê xây dựng những sản phẩm hữu ích và giải quyết các bài toán thực tế. Tôi yêu thích học hỏi công nghệ mới, cộng tác cùng đội ngũ và liên tục nâng cao tư duy kỹ thuật thông qua quá trình phát triển sản phẩm.",
    facts: [["2025—NAY", "EXPERIENCE"], ["FULL-STACK", "DIRECTION"], ["HCM", "LOCATION"]],
    marquee: "WEB DEVELOPMENT ✦ SYSTEM DESIGN ✦ REST API ✦ CLEAN ARCHITECTURE ✦",
    aboutIndex: "01 / ABOUT",
    aboutTitle: ["CLEAR ENGINEERING.", "PRACTICAL SOLUTIONS."],
    aboutText: "Tôi tập trung xây dựng ứng dụng web và hệ thống nghiệp vụ từ frontend đến backend. Công việc của tôi trải rộng từ phân tích yêu cầu, thiết kế workflow, phát triển REST API và giao diện quản trị đến tối ưu truy vấn, kiểm thử và tích hợp hệ thống.",
    principles: [["01", "HỆ THỐNG ỔN ĐỊNH"], ["02", "KIẾN TRÚC SẠCH"], ["03", "TƯ DUY SẢN PHẨM"]],
    stackIndex: "02 / SKILLS",
    stackTitle: "TOOLS I USE.",
    stackNote: "BỘ CÔNG CỤ PHỤC VỤ PHÁT TRIỂN SẢN PHẨM WEB VÀ HỆ THỐNG DOANH NGHIỆP.",
    stackGroups: [
      ["FRONTEND", ["ReactJS / Next.js", "TypeScript / JavaScript", "Tailwind CSS / shadcn/ui", "TanStack Query / Zustand"]],
      ["BACKEND", ["Python / Django / DRF", "NestJS / ExpressJS", "REST API", "Authentication & Authorization"]],
      ["DATABASE", ["PostgreSQL / MySQL", "MongoDB", "Query Optimization", "Database Design"]],
      ["ENGINEERING", ["Git / Docker / Linux", "Unit & E2E Testing", "System Integration", "AI-assisted Development"]],
    ],
    expIndex: "03 / EXPERIENCE",
    expTitle: ["WHERE I'VE", "CREATED VALUE."],
    expRole: "SOFTWARE ENGINEER",
    expCompany: "TTMI JOINT STOCK COMPANY",
    expDate: "10/2025 — HIỆN TẠI",
    expBullets: [
      "Phát triển các module POS cho quản lý menu, danh mục, tùy chọn sản phẩm và cấu hình theo chi nhánh trong hệ thống bán lẻ đồ uống đa thương hiệu.",
      "Xây dựng tính năng voucher, cấu hình kênh bán hàng, CRM, dashboard báo cáo và REST API cho bán hàng online, đơn hàng, sản phẩm và giao vận.",
      "Tối ưu hiệu năng báo cáo và truy xuất dữ liệu thông qua cải thiện truy vấn cơ sở dữ liệu và chiến lược lấy dữ liệu từ API.",
      "Làm việc trực tiếp với các phòng ban để làm rõ yêu cầu và luồng nghiệp vụ trước khi triển khai tính năng.",
      "Phát triển backend, REST API và giao diện quản trị cho ứng dụng ERP nhập kho, tra cứu barcode, theo dõi vị trí kệ và quy trình nhận hàng.",
      "Viết và duy trì unit test, end-to-end test cho các luồng nghiệp vụ quan trọng trước khi triển khai.",
    ],
    education: "EDUCATION",
    degree: "KỸ SƯ CÔNG NGHỆ THÔNG TIN · GPA 3.0/4.0",
    school: "ĐẠI HỌC NAM CẦN THƠ · 2021—2025",
    projectsIndex: "04 / SELECTED BUILDS",
    projectsTitle: "SYSTEMS I'VE BUILT.",
    projectsNote: "DỰ ÁN CÁ NHÂN THỂ HIỆN TƯ DUY XÂY DỰNG SẢN PHẨM FULL-STACK.",
    projects: [
      {
        title: "CRM & E-COMMERCE LINH KIỆN ĐIỆN TỬ",
        label: "PERSONAL FULL-STACK PROJECT",
        description: "Hệ thống quản lý quan hệ khách hàng kết hợp cửa hàng trực tuyến dành cho lĩnh vực linh kiện điện tử. Dự án gồm storefront cho khách mua hàng và dashboard quản trị để vận hành sản phẩm, khách hàng, đơn hàng, kho và doanh thu.",
        features: [
          "Đăng ký, đăng nhập JWT, phân quyền admin/khách hàng, quản lý hồ sơ và khóa hoặc mở khóa tài khoản.",
          "Quản lý sản phẩm, danh mục, thư viện ảnh, khách hàng, nhân viên và nghiệp vụ nhập/xuất tồn kho.",
          "Tìm kiếm sản phẩm, giỏ hàng, checkout COD/PayPal, tạo đơn, email xác nhận và lịch sử mua hàng.",
          "Dashboard quản lý trạng thái đơn hàng và thống kê doanh thu tổng quan, theo ngày, tháng và năm.",
          "Backend phân lớp Route → Controller → Service → Repository, validation Zod, upload Firebase và triển khai Docker.",
        ],
        tech: "REACT · TYPESCRIPT · REDUX TOOLKIT · ANT DESIGN · EXPRESS · PRISMA · MYSQL · DOCKER",
      },
    ],
    backend: "BACKEND REPOSITORY ↗",
    frontend: "FRONTEND REPOSITORY ↗",
    contactIndex: "05 / CONTACT",
    contactLead: "HAVE A ROLE, PROJECT OR IDEA THAT FITS?",
    contactTitle: ["LET'S BUILD", "SOMETHING SOLID."],
    email: "EMAIL",
    github: "GITHUB",
    phone: "PHONE",
    footer: "PORTFOLIO SOFTWARE ENGINEER",
    top: "BACK TO TOP ↑",
  },
  en: {
    nav: { about: "ABOUT", stack: "SKILLS", experience: "EXPERIENCE", projects: "PROJECTS", contact: "CONTACT ↗" },
    role: "SOFTWARE ENGINEER",
    hello: "HELLO, I'M",
    headline: ["SOFTWARE", "ENGINEER"],
    profile: "PROFILE.TXT",
    profileRows: [
      ["Position", "Junior Software Engineer"],
      ["Location", "Ho Chi Minh City, Vietnam"],
      ["Expertise", "Full-stack web application development"],
      ["Domain", "Enterprise systems — POS, CRM & ERP"],
    ],
    viewProjects: "VIEW PROJECTS ↓",
    resume: "DOWNLOAD CV ↗",
    summary: "Software Engineer passionate about building useful software and solving real-world problems. I enjoy learning new technologies, collaborating with others, and continuously improving my technical thinking through real-world product development.",
    facts: [["2025—NOW", "EXPERIENCE"], ["FULL-STACK", "DIRECTION"], ["HCMC", "LOCATION"]],
    marquee: "WEB DEVELOPMENT ✦ SYSTEM DESIGN ✦ REST API ✦ CLEAN ARCHITECTURE ✦",
    aboutIndex: "01 / ABOUT",
    aboutTitle: ["CLEAR ENGINEERING.", "PRACTICAL SOLUTIONS."],
    aboutText: "I focus on building web applications and business systems from frontend to backend. My work spans requirement analysis, workflow design, REST API and admin interface development, query optimization, testing, and system integration.",
    principles: [["01", "RELIABLE SYSTEMS"], ["02", "CLEAN ARCHITECTURE"], ["03", "PRODUCT THINKING"]],
    stackIndex: "02 / SKILLS",
    stackTitle: "TOOLS I USE.",
    stackNote: "A PRACTICAL TOOLKIT FOR WEB PRODUCTS AND ENTERPRISE SOFTWARE.",
    stackGroups: [
      ["FRONTEND", ["ReactJS / Next.js", "TypeScript / JavaScript", "Tailwind CSS / shadcn/ui", "TanStack Query / Zustand"]],
      ["BACKEND", ["Python / Django / DRF", "NestJS / ExpressJS", "REST API", "Authentication & Authorization"]],
      ["DATABASE", ["PostgreSQL / MySQL", "MongoDB", "Query Optimization", "Database Design"]],
      ["ENGINEERING", ["Git / Docker / Linux", "Unit & E2E Testing", "System Integration", "AI-assisted Development"]],
    ],
    expIndex: "03 / EXPERIENCE",
    expTitle: ["WHERE I'VE", "CREATED VALUE."],
    expRole: "SOFTWARE ENGINEER",
    expCompany: "TTMI JOINT STOCK COMPANY",
    expDate: "OCT 2025 — PRESENT",
    expBullets: [
      "Developed POS modules for menu management, categories, customization options, and branch-based product configuration in a multi-brand beverage retail system.",
      "Built voucher, sales-channel, CRM, reporting dashboard, and REST API features for online sales, order, product, and delivery workflows.",
      "Improved reporting and data-fetching performance through database query optimization and more efficient API retrieval strategies.",
      "Worked directly with relevant departments to clarify requirements and business workflows before implementation.",
      "Developed backend services, REST APIs, and admin interfaces for an ERP warehouse receiving application with barcode lookup and shelf-location tracking.",
      "Wrote and maintained unit and end-to-end tests for key business workflows before deployment.",
    ],
    education: "EDUCATION",
    degree: "B.ENG. IN INFORMATION TECHNOLOGY · GPA 3.0/4.0",
    school: "NAM CAN THO UNIVERSITY · 2021—2025",
    projectsIndex: "04 / SELECTED BUILDS",
    projectsTitle: "SYSTEMS I'VE BUILT.",
    projectsNote: "PERSONAL WORK THAT DEMONSTRATES END-TO-END PRODUCT ENGINEERING.",
    projects: [
      {
        title: "ELECTRONICS CRM & E-COMMERCE",
        label: "PERSONAL FULL-STACK PROJECT",
        description: "A customer relationship management system combined with an electronics storefront. The project includes a customer-facing shopping experience and an admin dashboard for operating products, customers, orders, stock, and revenue.",
        features: [
          "JWT registration and authentication, admin/customer authorization, profile management, and account ban or unban workflows.",
          "Product, category, gallery, customer, staff, and inventory import/export management.",
          "Product search, cart, COD/PayPal checkout, order creation, confirmation email, and customer order history.",
          "Order status management and revenue analytics for overall, daily, monthly, and yearly performance.",
          "Layered Route → Controller → Service → Repository backend, Zod validation, Firebase uploads, and Docker deployment.",
        ],
        tech: "REACT · TYPESCRIPT · REDUX TOOLKIT · ANT DESIGN · EXPRESS · PRISMA · MYSQL · DOCKER",
      },
    ],
    backend: "BACKEND REPOSITORY ↗",
    frontend: "FRONTEND REPOSITORY ↗",
    contactIndex: "05 / CONTACT",
    contactLead: "HAVE A ROLE, PROJECT OR IDEA THAT FITS?",
    contactTitle: ["LET'S BUILD", "SOMETHING SOLID."],
    email: "EMAIL",
    github: "GITHUB",
    phone: "PHONE",
    footer: "SOFTWARE ENGINEER PORTFOLIO",
    top: "BACK TO TOP ↑",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("vi");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <main id="top">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top">KQ<span>_</span></a>
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
            <h1>{t.headline[0]}<br /><span>{t.headline[1]}</span></h1>
          </div>
          <aside className="hero-card">
            <div className="window-bar"><span>{t.profile}</span><span>— □ ×</span></div>
            <div className="hero-card-content">
              {t.profileRows.map(([key, value]) => <p key={key}><span className="code-key">{key}:</span> &quot;{value}&quot;</p>)}
            </div>
            <div className="hero-actions">
              <a href="#projects">{t.viewProjects}</a>
              <a href="/Tran-Quoc-Khanh-CV.pdf" download>{t.resume}</a>
            </div>
          </aside>
        </div>
        <div className="hero-bottom">
          <p>{t.summary}</p>
          <div className="quick-facts">{t.facts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        </div>
      </header>

      <div className="marquee" aria-label="Software engineering disciplines"><div className="marquee-track"><span>{t.marquee}</span><span aria-hidden="true">{t.marquee}</span></div></div>

      <section className="about section" id="about">
        <div className="section-index">{t.aboutIndex}</div>
        <div className="section-content about-content">
          <h2>{t.aboutTitle[0]}<br /><span>{t.aboutTitle[1]}</span></h2>
          <div className="about-grid">
            <p className="large-placeholder">{t.aboutText}</p>
            <div className="principles">{t.principles.map(([number, label]) => <div key={number}><span>{number}</span><strong>{label}</strong></div>)}</div>
          </div>
        </div>
      </section>

      <section className="stack section" id="stack">
        <div className="section-index">{t.stackIndex}</div>
        <div className="section-content">
          <div className="section-title-row"><h2>{t.stackTitle}</h2><p>{t.stackNote}</p></div>
          <div className="stack-grid">
            {t.stackGroups.map(([title, items], index) => <article className="stack-card" key={title}><div className="stack-card-head"><span>0{index + 1}</span><span>●</span></div><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-index">{t.expIndex}</div>
        <div className="section-content">
          <h2>{t.expTitle[0]}<br />{t.expTitle[1]}</h2>
          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-number">01</span>
              <div><p className="timeline-label">{t.expRole}</p><h3>{t.expCompany}</h3><ul className="experience-bullets">{t.expBullets.map(item => <li key={item}>{item}</li>)}</ul></div>
              <span className="timeline-date">{t.expDate}</span>
            </article>
          </div>
          <div className="education-row"><span>{t.education}</span><strong>{t.degree}</strong><span>{t.school}</span></div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-index">{t.projectsIndex}</div>
        <div className="section-content">
          <div className="section-title-row"><h2>{t.projectsTitle}</h2><p>{t.projectsNote}</p></div>
          <div className="projects-list">
            {t.projects.map((project, index) => (
              <article className="project-card featured-project" key={project.title}>
                <div className="project-topline"><span>0{index + 1}</span><span>{project.label}</span></div>
                <div className="featured-project-grid">
                  <div className="project-preview" aria-hidden="true"><span>CRM</span><div className="preview-lines"><i /><i /><i /><i /></div><b>FULL<br />STACK</b></div>
                  <div className="project-details">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="project-features">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
                    <div className="repo-links">
                      <a href="https://github.com/Trqkhanh17/Backend_LinhKienDienTu" target="_blank" rel="noreferrer">{t.backend}</a>
                      <a href="https://github.com/Trqkhanh17/FrontEnd_BanLinhKienDienTu" target="_blank" rel="noreferrer">{t.frontend}</a>
                    </div>
                  </div>
                </div>
                <div className="project-meta"><span>{project.tech}</span><span>GITHUB</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="section-index">{t.contactIndex}</div>
        <div className="section-content contact-content">
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
