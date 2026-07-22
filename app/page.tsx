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
    profileIntro: "Tôi là Trần Quốc Khánh, Software Engineer đang sống và làm việc tại TP. Hồ Chí Minh. Công việc của tôi xoay quanh những hệ thống web có nhiều quy trình phía sau — từ POS, CRM đến ERP. Tôi thích biến một yêu cầu còn mơ hồ thành luồng xử lý dễ hiểu, chạy ổn định và có thể tiếp tục mở rộng.",
    profileHighlights: ["PYTHON / DJANGO", "REACT / TYPESCRIPT", "POSTGRESQL"],
    viewProjects: "VIEW PROJECTS ↓",
    resume: "DOWNLOAD CV ↗",
    summary: "Tôi thích cảm giác lần theo một quy trình, hiểu vì sao người dùng đang vướng, rồi biến điều đó thành một tính năng thực sự giúp công việc của họ nhẹ đi.",
    facts: [["TTMI", "CURRENTLY"], ["FULL-STACK", "I WORK ACROSS"], ["HỒ CHÍ MINH", "BASED IN"]],
    marquee: "WEB DEVELOPMENT ✦ SYSTEM DESIGN ✦ REST API ✦ CLEAN ARCHITECTURE ✦",
    aboutIndex: "01 / ABOUT",
    aboutTitle: ["UNDERSTAND THE PROBLEM.", "THEN BUILD."],
    aboutText: "Tôi bắt đầu với lập trình vì thích tạo ra thứ có thể dùng được, nhưng công việc tại TTMI giúp tôi hiểu rằng phần mềm tốt không chỉ nằm ở code. Một thay đổi nhỏ trên màn hình có thể liên quan đến cách cửa hàng bán hàng, kho tiếp nhận hàng hoặc một phòng ban đọc báo cáo. Vì vậy, trước khi viết code, tôi cố gắng hiểu người dùng đang làm gì và dữ liệu đi qua hệ thống ra sao. Sau đó tôi mới chọn cách triển khai đủ rõ ràng để đồng đội có thể cùng duy trì. Tôi vẫn đang ở những năm đầu của nghề, và đó cũng là lý do tôi chủ động học sâu hơn về Django, database, architecture và cách các hệ thống doanh nghiệp vận hành.",
    principles: [["01", "UNDERSTAND THE CONTEXT"], ["02", "KEEP THE FLOW CLEAR"], ["03", "LEARN FROM EACH RELEASE"]],
    stackIndex: "02 / SKILLS",
    stackTitle: "TOOLS I USE.",
    stackNote: "NHỮNG CÔNG NGHỆ TÔI ĐANG DÙNG TRONG CÔNG VIỆC VÀ CÁC DỰ ÁN CÁ NHÂN.",
    stackGroups: [
      ["FRONTEND", ["ReactJS / Next.js", "TypeScript / JavaScript", "Tailwind CSS / shadcn/ui", "TanStack Query / Zustand"]],
      ["BACKEND", ["Python / Django / DRF", "NestJS / ExpressJS", "REST API", "Authentication & Authorization"]],
      ["DATABASE", ["PostgreSQL / MySQL", "MongoDB", "Query Optimization", "Database Design"]],
      ["ENGINEERING", ["Git / Docker / Linux", "Unit & E2E Testing", "System Integration", "AI-assisted Development"]],
    ],
    expIndex: "03 / EXPERIENCE",
    expTitle: ["WHAT I DO", "AT WORK."],
    expRole: "SOFTWARE ENGINEER",
    expCompany: "TTMI JOINT STOCK COMPANY",
    expDate: "10/2025 — HIỆN TẠI",
    expStack: ["PYTHON", "DJANGO", "DJANGO REST FRAMEWORK", "REACT", "POSTGRESQL"],
    expBullets: [
      "Trong hệ thống POS đa thương hiệu, tôi phụ trách các module menu, danh mục, tùy chọn sản phẩm và cấu hình riêng cho từng chi nhánh.",
      "Ở mảng bán hàng online, tôi xây dựng voucher, kênh bán, CRM, dashboard báo cáo và các API nối liền đơn hàng, sản phẩm với giao vận.",
      "Với ứng dụng ERP nhập kho, tôi làm backend lẫn giao diện quản trị cho luồng tra barcode, yêu cầu nhập hàng, nhận hàng và theo dõi vị trí sản phẩm trên từng kệ.",
      "Phần lớn tính năng bắt đầu bằng việc tôi trao đổi trực tiếp với phòng ban sử dụng để hiểu họ đang làm việc thế nào, đặc biệt khi yêu cầu ban đầu còn chưa rõ.",
      "Khi báo cáo hoặc API phản hồi chậm, tôi lần theo truy vấn và cách lấy dữ liệu để tìm chỗ có thể tối ưu thay vì chỉ xử lý ở giao diện.",
      "Trước mỗi lần bàn giao, tôi viết và duy trì unit test, end-to-end test cho những luồng nghiệp vụ quan trọng để hạn chế lỗi quay lại.",
    ],
    education: "EDUCATION",
    degree: "KỸ SƯ CÔNG NGHỆ THÔNG TIN · GPA 3.0/4.0",
    school: "ĐẠI HỌC NAM CẦN THƠ · 2021—2025",
    projectsIndex: "04 / SELECTED BUILDS",
    projectsTitle: "THINGS I BUILD.",
    projectsNote: "NHỮNG DỰ ÁN GIÚP TÔI HỌC CÁCH ĐI TỪ MỘT Ý TƯỞNG ĐẾN SẢN PHẨM CÓ THỂ CHẠY ĐƯỢC.",
    projects: [
      {
        title: "CRM & E-COMMERCE LINH KIỆN ĐIỆN TỬ",
        label: "PERSONAL FULL-STACK PROJECT",
        visual: "CRM",
        description: "Tôi làm dự án này để tự đi qua trọn vẹn một sản phẩm bán hàng: từ trải nghiệm chọn linh kiện của khách đến những công việc phía sau như quản lý kho, xử lý đơn và theo dõi doanh thu. Đây cũng là nơi tôi luyện cách tách lớp backend và giữ frontend, API cùng dữ liệu nói chung một ngôn ngữ.",
        features: [
          "Khách hàng có thể tạo tài khoản, tìm sản phẩm, quản lý giỏ hàng, thanh toán COD hoặc PayPal và xem lại lịch sử mua hàng.",
          "Phía quản trị có phân quyền riêng để quản lý sản phẩm, danh mục, hình ảnh, khách hàng, nhân viên và trạng thái đơn hàng.",
          "Luồng kho hỗ trợ nhập, xuất và theo dõi tồn; email xác nhận được gửi khi đơn hàng được tạo.",
          "Dashboard gom doanh thu theo ngày, tháng và năm để người vận hành nhìn nhanh tình hình bán hàng.",
          "Backend được tách theo Route → Controller → Service → Repository, dùng Zod để kiểm tra dữ liệu, Firebase cho upload và Docker khi triển khai.",
        ],
        tech: "REACT · TYPESCRIPT · REDUX TOOLKIT · ANT DESIGN · EXPRESS · PRISMA · MYSQL · DOCKER",
        links: [
          ["BACKEND REPOSITORY ↗", "https://github.com/Trqkhanh17/Backend_LinhKienDienTu"],
          ["FRONTEND REPOSITORY ↗", "https://github.com/Trqkhanh17/FrontEnd_BanLinhKienDienTu"],
        ],
      },
      {
        title: "COFFEE STYLE — RESPONSIVE E-COMMERCE UI",
        label: "PERSONAL UI PROJECT",
        visual: "UI",
        description: "Một dự án UI tôi làm để luyện cảm giác về khoảng cách, nhịp nội dung và cách một giao diện thay đổi trên từng kích thước màn hình. Thay vì chỉ dựng trang chủ đẹp, tôi hoàn thiện cả hành trình xem sản phẩm, đọc câu chuyện thương hiệu và thao tác với giỏ hàng.",
        features: [
          "Trang chủ kể câu chuyện thương hiệu qua hero slider, sản phẩm nổi bật, coffee magazine, lifestyle stories và newsletter.",
          "Danh mục có bộ lọc; trang chi tiết đưa phần mô tả, điểm nổi bật và sản phẩm liên quan vào cùng một mạch xem tự nhiên.",
          "Giỏ hàng mở dạng drawer, hỗ trợ thêm, xóa, gộp số lượng, tính tạm tính và xử lý cả trạng thái chưa có sản phẩm.",
          "About, Blog, Contact, bản đồ, biểu mẫu và trang 404 đều được làm cùng một ngôn ngữ thiết kế.",
          "Các route được lazy-load, chuyển động dùng Framer Motion và toàn bộ giao diện thích ứng từ mobile đến desktop.",
        ],
        tech: "REACT 19 · TYPESCRIPT · TAILWIND CSS · FRAMER MOTION · REACT ROUTER · VITE",
        links: [
          ["REPOSITORY ↗", "https://github.com/Trqkhanh17/TailwindCSS-Coffee-Style"],
          ["LIVE DEMO ↗", "https://tailwind-css-coffee-style-njplduecf.vercel.app"],
        ],
      },
      {
        title: "AOV SQUAD FINDER SERVER",
        label: "IN PROGRESS — BACKEND PROJECT",
        visual: "AOV",
        description: "Ý tưởng bắt đầu từ một nhu cầu khá đời thường: tìm đúng người để chơi Liên Quân cùng, thay vì ghép đội hoàn toàn ngẫu nhiên. Tôi đang xây phần server cho sản phẩm này; nền tảng tài khoản và bảo mật đã hoạt động, còn hồ sơ game, kết bạn và logic tìm đội vẫn đang được hoàn thiện.",
        features: [
          "Luồng đăng ký và đăng nhập dùng Passport, kèm cặp JWT access/refresh token để duy trì và làm mới phiên.",
          "Người dùng có thể xem, sửa hồ sơ, đổi mật khẩu và đăng xuất; token version giúp thu hồi các phiên cũ khi cần.",
          "Xác minh email và khôi phục mật khẩu dùng OTP; email được gửi qua Nodemailer với Handlebars template.",
          "Rate limiting được đặt ở mức toàn cục và tại các endpoint nhạy cảm như đăng nhập, đăng ký.",
          "Dự án đi theo modular monolith trên NestJS/MongoDB. Game profile, friend và match search là những phần tôi đang làm tiếp.",
        ],
        tech: "NESTJS 11 · TYPESCRIPT · MONGODB · MONGOOSE · PASSPORT · JWT · NODEMAILER · THROTTLER",
        links: [["REPOSITORY ↗", "https://github.com/Trqkhanh17/serverTimBanChoiGame"]],
      },
    ],
    contactIndex: "05 / CONTACT",
    contactLead: "NẾU BẠN ĐANG TÌM MỘT SOFTWARE ENGINEER THÍCH HIỂU KỸ BÀI TOÁN TRƯỚC KHI VIẾT CODE,",
    contactTitle: ["LET'S TALK.", "I'M LISTENING."],
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
    profileIntro: "I'm Tran Quoc Khanh, a Software Engineer based in Ho Chi Minh City. I work on web systems with plenty happening behind the interface — from POS and CRM to ERP workflows. I enjoy taking a fuzzy requirement, tracing the real process behind it, and turning it into software that is clear, reliable, and easier to grow.",
    profileHighlights: ["PYTHON / DJANGO", "REACT / TYPESCRIPT", "POSTGRESQL"],
    viewProjects: "VIEW PROJECTS ↓",
    resume: "DOWNLOAD CV ↗",
    summary: "I enjoy tracing a workflow, finding where people get stuck, and turning that friction into a feature that genuinely makes their work easier.",
    facts: [["TTMI", "CURRENTLY"], ["FULL-STACK", "I WORK ACROSS"], ["HO CHI MINH", "BASED IN"]],
    marquee: "WEB DEVELOPMENT ✦ SYSTEM DESIGN ✦ REST API ✦ CLEAN ARCHITECTURE ✦",
    aboutIndex: "01 / ABOUT",
    aboutTitle: ["UNDERSTAND THE PROBLEM.", "THEN BUILD."],
    aboutText: "I started programming because I liked making things people could actually use. Working at TTMI taught me that useful software is about much more than code: a small screen change can affect how a store sells, how a warehouse receives stock, or how a team reads its reports. I now begin by understanding what the user is trying to do and how data moves through the system, then choose an implementation my teammates can follow and maintain. I'm still early in my career, which is exactly why I keep going deeper into Django, databases, architecture, and the way enterprise systems work in practice.",
    principles: [["01", "UNDERSTAND THE CONTEXT"], ["02", "KEEP THE FLOW CLEAR"], ["03", "LEARN FROM EACH RELEASE"]],
    stackIndex: "02 / SKILLS",
    stackTitle: "TOOLS I USE.",
    stackNote: "THE TECHNOLOGIES I USE AT WORK AND IN THE PROJECTS I BUILD FOR MYSELF.",
    stackGroups: [
      ["FRONTEND", ["ReactJS / Next.js", "TypeScript / JavaScript", "Tailwind CSS / shadcn/ui", "TanStack Query / Zustand"]],
      ["BACKEND", ["Python / Django / DRF", "NestJS / ExpressJS", "REST API", "Authentication & Authorization"]],
      ["DATABASE", ["PostgreSQL / MySQL", "MongoDB", "Query Optimization", "Database Design"]],
      ["ENGINEERING", ["Git / Docker / Linux", "Unit & E2E Testing", "System Integration", "AI-assisted Development"]],
    ],
    expIndex: "03 / EXPERIENCE",
    expTitle: ["WHAT I DO", "AT WORK."],
    expRole: "SOFTWARE ENGINEER",
    expCompany: "TTMI JOINT STOCK COMPANY",
    expDate: "OCT 2025 — PRESENT",
    expStack: ["PYTHON", "DJANGO", "DJANGO REST FRAMEWORK", "REACT", "POSTGRESQL"],
    expBullets: [
      "On a multi-brand POS platform, I work on menu, category, product-option, and branch-specific configuration modules.",
      "For online sales, I build voucher, sales-channel, CRM, reporting, and API features that connect orders and products with delivery workflows.",
      "On a warehouse-receiving ERP, I work across the backend and admin interface for barcode lookup, purchase requests, goods receiving, and shelf-location tracking.",
      "Most features begin with a conversation with the team that will use them, especially when the first version of a requirement leaves important questions unanswered.",
      "When a report or endpoint slows down, I trace the queries and retrieval path to find the real bottleneck instead of masking it in the interface.",
      "Before a release, I write and maintain unit and end-to-end tests around the business flows we cannot afford to break.",
    ],
    education: "EDUCATION",
    degree: "B.ENG. IN INFORMATION TECHNOLOGY · GPA 3.0/4.0",
    school: "NAM CAN THO UNIVERSITY · 2021—2025",
    projectsIndex: "04 / SELECTED BUILDS",
    projectsTitle: "THINGS I BUILD.",
    projectsNote: "PERSONAL PROJECTS THAT HELP ME LEARN HOW AN IDEA BECOMES WORKING SOFTWARE.",
    projects: [
      {
        title: "ELECTRONICS CRM & E-COMMERCE",
        label: "PERSONAL FULL-STACK PROJECT",
        visual: "CRM",
        description: "I built this project to follow an online-sale product from end to end: the customer's search for the right component and the less visible work behind it — stock, orders, customers, and revenue. It also became a place to practice separating backend responsibilities while keeping the interface, API, and data model in step.",
        features: [
          "Customers can create an account, find components, manage a cart, check out with COD or PayPal, and revisit previous orders.",
          "The admin side has separate permissions for products, categories, images, customers, staff, and order status.",
          "Inventory flows cover stock in, stock out, and current quantities; a confirmation email follows each new order.",
          "The dashboard groups revenue by day, month, and year so the operator can get a quick view of sales.",
          "The backend follows Route → Controller → Service → Repository, with Zod validation, Firebase uploads, and Docker for deployment.",
        ],
        tech: "REACT · TYPESCRIPT · REDUX TOOLKIT · ANT DESIGN · EXPRESS · PRISMA · MYSQL · DOCKER",
        links: [
          ["BACKEND REPOSITORY ↗", "https://github.com/Trqkhanh17/Backend_LinhKienDienTu"],
          ["FRONTEND REPOSITORY ↗", "https://github.com/Trqkhanh17/FrontEnd_BanLinhKienDienTu"],
        ],
      },
      {
        title: "COFFEE STYLE — RESPONSIVE E-COMMERCE UI",
        label: "PERSONAL UI PROJECT",
        visual: "UI",
        description: "I built this UI project to sharpen my sense of spacing, content rhythm, and how a design should respond at different screen sizes. Instead of stopping at an attractive homepage, I completed the wider journey through products, brand stories, and the shopping cart.",
        features: [
          "The homepage tells the brand story through a hero slider, featured products, coffee magazine, lifestyle stories, and a newsletter.",
          "The catalog is filterable, while each product page brings its story, highlights, and related suggestions into one natural flow.",
          "The cart opens as a drawer and handles adding, removing, merged quantities, subtotal calculation, and an empty state.",
          "About, Blog, Contact, map, form, and 404 pages all follow the same visual language.",
          "Routes are lazy-loaded, motion comes from Framer Motion, and the layout adapts from mobile through desktop.",
        ],
        tech: "REACT 19 · TYPESCRIPT · TAILWIND CSS · FRAMER MOTION · REACT ROUTER · VITE",
        links: [
          ["REPOSITORY ↗", "https://github.com/Trqkhanh17/TailwindCSS-Coffee-Style"],
          ["LIVE DEMO ↗", "https://tailwind-css-coffee-style-njplduecf.vercel.app"],
        ],
      },
      {
        title: "AOV SQUAD FINDER SERVER",
        label: "IN PROGRESS — BACKEND PROJECT",
        visual: "AOV",
        description: "The idea came from a familiar problem: finding the right people to play Arena of Valor with instead of relying on a completely random team. I'm building the server behind that product. Its account and security foundation works today; game profiles, friendships, and squad-matching logic are still taking shape.",
        features: [
          "Registration and login use Passport, backed by JWT access and refresh tokens for renewable sessions.",
          "Users can view and edit a profile, change a password, and log out; token versions make older sessions revocable.",
          "Email verification and password recovery use OTP codes, delivered by Nodemailer with Handlebars templates.",
          "Rate limits protect the application globally and tighten around sensitive routes such as login and registration.",
          "The NestJS/MongoDB codebase follows a modular monolith. Game profile, friend, and match-search modules are the next pieces in progress.",
        ],
        tech: "NESTJS 11 · TYPESCRIPT · MONGODB · MONGOOSE · PASSPORT · JWT · NODEMAILER · THROTTLER",
        links: [["REPOSITORY ↗", "https://github.com/Trqkhanh17/serverTimBanChoiGame"]],
      },
    ],
    contactIndex: "05 / CONTACT",
    contactLead: "IF YOU NEED A SOFTWARE ENGINEER WHO LIKES TO UNDERSTAND THE WORK BEFORE WRITING THE CODE,",
    contactTitle: ["LET'S TALK.", "I'M LISTENING."],
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
              <p className="profile-intro">{t.profileIntro}</p>
              <div className="profile-highlights">{t.profileHighlights.map(item => <span key={item}>{item}</span>)}</div>
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
              <div>
                <p className="timeline-label">{t.expRole}</p>
                <h3>{t.expCompany}</h3>
                <div className="experience-stack" aria-label="Company tech stack">{t.expStack.map(item => <span key={item}>{item}</span>)}</div>
                <ul className="experience-bullets">{t.expBullets.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
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
                  <div className="project-preview" aria-hidden="true"><span>{project.visual}</span><div className="preview-lines"><i /><i /><i /><i /></div><b>{project.label.split(" ").slice(-2).map(word => <span key={word}>{word}<br /></span>)}</b></div>
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
