"use client";

import { useEffect, useState } from "react";

type Lang = "vi" | "en";

const copy = {
  vi: {
    nav: { about: "VỀ TÔI", stack: "CÔNG NGHỆ", experience: "KINH NGHIỆM", projects: "DỰ ÁN", contact: "LIÊN HỆ ↗" },
    role: "KỸ SƯ PHẦN MỀM",
    hello: "XIN CHÀO, TÔI LÀ",
    headline: ["KỸ SƯ", "PHẦN MỀM"],
    profile: "VỀ_TÔI.TXT",
    profileIntro: "Tôi là Trần Quốc Khánh, một Software Engineer đang sống và làm việc tại TP. Hồ Chí Minh. Ngoài giờ làm, tôi thường mày mò tìm hiểu một công nghệ mới, lần theo cách một hệ thống vận hành hoặc biến một ý tưởng nhỏ thành thứ có thể tự tay dùng thử. Tôi trân trọng những người sẵn lòng chia sẻ và tin rằng tiến bộ đều đặn mỗi ngày đáng giá hơn việc cố tỏ ra mình đã biết mọi câu trả lời.",
    profileHighlights: ["TÒ MÒ ĐẾN CÙNG", "HỌC BẰNG CÁCH LÀM", "CỞI MỞ KHI HỢP TÁC"],
    viewProjects: "XEM DỰ ÁN ↓",
    resume: "TẢI CV ↗",
    summary: "Tôi học tốt nhất khi được tự tay làm: lần theo một câu hỏi đến tận gốc, thử đủ lâu để hiểu và chỉ giữ lại những điều thật sự hữu ích.",
    facts: [["ĐÀO SÂU", "CÁCH TÔI HỌC"], ["BỀN BỈ", "CÁCH TÔI TIẾN BỘ"], ["HỒ CHÍ MINH", "NƠI TÔI ĐANG SỐNG"]],
    marquee: "PHÁT TRIỂN WEB ✦ THIẾT KẾ HỆ THỐNG ✦ REST API ✦ KIẾN TRÚC SẠCH ✦",
    aboutIndex: "01 / VỀ TÔI",
    aboutTitle: ["TÔI LÀ AI.", "CÁCH TÔI LÀM VIỆC."],
    aboutText: "Tôi là người hòa đồng, vui vẻ và khá dễ bắt nhịp khi làm việc cùng mọi người. Nhưng với công việc, tôi luôn giữ sự nghiêm túc và trách nhiệm. Trước khi bắt tay vào một tính năng, tôi muốn có đủ bối cảnh: ai sẽ dùng, họ đang vướng ở đâu, quy trình hiện tại diễn ra thế nào và những trường hợp nào dễ bị bỏ sót. Khi mọi thứ đã rõ, tôi làm từng phần cẩn thận, kiểm tra kỹ và trao đổi lại ngay nếu vẫn còn điểm chưa chắc chắn. Với tôi, làm nhanh chỉ có ý nghĩa khi vẫn hiểu đúng và làm đến nơi đến chốn.",
    principles: [["01", "HÒA ĐỒNG VÀ CỞI MỞ"], ["02", "ĐỦ BỐI CẢNH RỒI MỚI LÀM"], ["03", "NGHIÊM TÚC VÀ KỸ LƯỠNG"]],
    stackIndex: "02 / CÔNG NGHỆ",
    stackTitle: "BỘ CÔNG CỤ CỦA TÔI.",
    stackNote: "MỖI CÔNG NGHỆ Ở ĐÂY ĐỀU ĐÃ ĐƯỢC TÔI DÙNG ĐỂ GIẢI QUYẾT MỘT BÀI TOÁN THẬT.",
    stackGroups: [
      ["GIAO DIỆN", ["ReactJS / Next.js", "TypeScript / JavaScript", "Tailwind CSS / shadcn/ui", "TanStack Query / Zustand"]],
      ["BACKEND", ["Python / Django / DRF", "NestJS / ExpressJS", "REST API", "Authentication & Authorization"]],
      ["DỮ LIỆU", ["PostgreSQL / MySQL", "MongoDB", "Query Optimization", "Database Design"]],
      ["CÔNG CỤ & QUY TRÌNH", ["Git / Docker / Linux", "Unit & E2E Testing", "System Integration", "AI-assisted Development"]],
    ],
    expIndex: "03 / KINH NGHIỆM",
    expTitle: ["CÔNG VIỆC", "TÔI ĐANG LÀM."],
    expRole: "KỸ SƯ PHẦN MỀM",
    expCompany: "TTMI JOINT STOCK COMPANY",
    expDate: "10/2025 — HIỆN TẠI",
    expStack: ["PYTHON", "DJANGO", "DJANGO REST FRAMEWORK", "REACT", "POSTGRESQL"],
    expBullets: [
      "Trong hệ thống POS đa thương hiệu, tôi phụ trách các phần liên quan đến menu, danh mục, tùy chọn sản phẩm và cách mỗi chi nhánh tự cấu hình mặt hàng của mình.",
      "Ở luồng bán hàng online, tôi xây dựng voucher, kênh bán, CRM, dashboard báo cáo và các API nối đơn hàng, sản phẩm với đơn vị giao vận.",
      "Với ứng dụng ERP nhập kho, tôi làm cả backend lẫn giao diện quản trị cho quy trình tra barcode, tạo yêu cầu nhập, nhận hàng và theo dõi vị trí sản phẩm trên từng kệ.",
      "Tôi thường bắt đầu một tính năng bằng cuộc trao đổi với chính phòng ban sẽ sử dụng nó, nhất là khi yêu cầu ban đầu vẫn còn nhiều khoảng trống.",
      "Khi một báo cáo hoặc API phản hồi chậm, tôi lần ngược qua câu truy vấn và đường đi của dữ liệu để tìm đúng nút thắt, thay vì chỉ che vấn đề ở giao diện.",
      "Trước mỗi lần bàn giao, tôi viết và duy trì unit test, end-to-end test cho những luồng nghiệp vụ quan trọng để lỗi cũ không quay trở lại.",
    ],
    education: "HỌC VẤN",
    degree: "KỸ SƯ CÔNG NGHỆ THÔNG TIN · GPA 3.0/4.0",
    school: "ĐẠI HỌC NAM CẦN THƠ · 2021—2025",
    projectsIndex: "04 / DỰ ÁN TIÊU BIỂU",
    projectsTitle: "NHỮNG THỨ TÔI TỰ TAY XÂY DỰNG.",
    projectsNote: "ĐÂY LÀ NƠI TÔI HỌC BẰNG CÁCH LÀM, SAI, SỬA VÀ CUỐI CÙNG BIẾN Ý TƯỞNG THÀNH THỨ CÓ THỂ CHẠY.",
    projects: [
      {
        title: "CRM & E-COMMERCE LINH KIỆN ĐIỆN TỬ",
        label: "DỰ ÁN TỰ XÂY DỰNG · FULL-STACK",
        visual: "CRM",
        badge: "FULL STACK",
        description: "Tôi bắt đầu dự án này vì muốn tự mình đi hết một vòng của một sản phẩm bán hàng: từ lúc khách chọn linh kiện cho đến những việc phía sau như quản lý tồn kho, xử lý đơn và theo dõi doanh thu. Quá trình đó giúp tôi hiểu rõ hơn cách chia trách nhiệm ở backend, đồng thời giữ cho giao diện, API và dữ liệu không lệch khỏi nhau.",
        features: [
          "Khách hàng có thể tạo tài khoản, tìm sản phẩm, quản lý giỏ hàng, thanh toán COD hoặc PayPal và xem lại lịch sử mua hàng.",
          "Phía quản trị có phân quyền riêng để quản lý sản phẩm, danh mục, hình ảnh, khách hàng, nhân viên và trạng thái đơn hàng.",
          "Luồng kho hỗ trợ nhập, xuất và theo dõi lượng tồn; khách hàng nhận được email xác nhận ngay khi đơn được tạo.",
          "Dashboard tổng hợp doanh thu theo ngày, tháng và năm để người vận hành nắm nhanh tình hình bán hàng.",
          "Backend được tách theo Route → Controller → Service → Repository, dùng Zod để kiểm tra dữ liệu, Firebase để lưu hình ảnh và Docker khi triển khai.",
        ],
        tech: "REACT · TYPESCRIPT · REDUX TOOLKIT · ANT DESIGN · EXPRESS · PRISMA · MYSQL · DOCKER",
        links: [
          ["BACKEND REPOSITORY ↗", "https://github.com/Trqkhanh17/Backend_LinhKienDienTu"],
          ["FRONTEND REPOSITORY ↗", "https://github.com/Trqkhanh17/FrontEnd_BanLinhKienDienTu"],
        ],
      },
      {
        title: "COFFEE STYLE — RESPONSIVE E-COMMERCE UI",
        label: "DỰ ÁN TỰ XÂY DỰNG · GIAO DIỆN",
        visual: "UI",
        badge: "GIAO DIỆN",
        description: "Dự án này bắt đầu như một bài tập về khoảng cách, nhịp nội dung và cách giao diện thích nghi trên từng màn hình. Tôi không muốn dừng ở một trang chủ trông đẹp mắt, nên đã làm trọn hành trình từ xem sản phẩm, tìm hiểu câu chuyện thương hiệu đến thao tác với giỏ hàng.",
        features: [
          "Trang chủ dẫn dắt câu chuyện thương hiệu bằng banner chuyển động, sản phẩm nổi bật, chuyên mục cà phê, nội dung phong cách sống và bản tin email.",
          "Danh mục có bộ lọc; trang chi tiết đặt mô tả, điểm nổi bật và sản phẩm liên quan trong cùng một mạch xem liền lạc.",
          "Giỏ hàng mở bằng một khung trượt, hỗ trợ thêm, xóa, gộp số lượng, tính tạm tính và cả trạng thái chưa có sản phẩm.",
          "Các trang Giới thiệu, Blog, Liên hệ, bản đồ, biểu mẫu và trang 404 đều giữ chung một ngôn ngữ thiết kế.",
          "Các trang chỉ được tải khi cần, chuyển động dùng Framer Motion và giao diện thích ứng từ điện thoại đến màn hình lớn.",
        ],
        tech: "REACT 19 · TYPESCRIPT · TAILWIND CSS · FRAMER MOTION · REACT ROUTER · VITE",
        links: [
          ["REPOSITORY ↗", "https://github.com/Trqkhanh17/TailwindCSS-Coffee-Style"],
        ],
      },
      {
        title: "AOV SQUAD FINDER SERVER",
        label: "DỰ ÁN ĐANG PHÁT TRIỂN · BACKEND",
        visual: "AOV",
        badge: "BACK END",
        description: "Ý tưởng đến từ một chuyện rất quen thuộc: muốn tìm đúng người để chơi Liên Quân cùng thay vì phó mặc cho việc ghép đội ngẫu nhiên. Tôi đang xây phần server cho sản phẩm này; nền tảng tài khoản và bảo mật đã chạy ổn, còn hồ sơ trong game, kết bạn và cách tìm đồng đội vẫn đang được hoàn thiện.",
        features: [
          "Đăng ký và đăng nhập dùng Passport, kết hợp access token và refresh token để duy trì cũng như làm mới phiên làm việc.",
          "Người dùng có thể xem, sửa hồ sơ, đổi mật khẩu và đăng xuất; token version cho phép thu hồi những phiên cũ khi cần.",
          "Xác minh email và khôi phục mật khẩu dùng mã OTP; email được gửi qua Nodemailer với mẫu Handlebars.",
          "Giới hạn tần suất truy cập được đặt cho toàn hệ thống và siết chặt hơn ở các API nhạy cảm như đăng nhập, đăng ký.",
          "Dự án theo kiến trúc modular monolith trên NestJS/MongoDB. Hồ sơ game, kết bạn và tìm đồng đội là những phần tôi đang làm tiếp.",
        ],
        tech: "NESTJS 11 · TYPESCRIPT · MONGODB · MONGOOSE · PASSPORT · JWT · NODEMAILER · THROTTLER",
        links: [["REPOSITORY ↗", "https://github.com/Trqkhanh17/serverTimBanChoiGame"]],
      },
    ],
    contactIndex: "05 / LIÊN HỆ",
    contactLead: "NẾU BẠN CẦN MỘT KỸ SƯ PHẦN MỀM LUÔN MUỐN HIỂU RÕ VIỆC CẦN LÀM, KHÔNG NGẠI HỌC ĐIỀU MỚI VÀ SẴN SÀNG CÙNG ĐỘI NGŨ TÌM RA CÁCH TỐT HƠN,",
    contactTitle: ["CỨ NHẮN CHO TÔI.", "TÔI SẴN SÀNG LẮNG NGHE."],
    email: "THƯ ĐIỆN TỬ",
    github: "GITHUB",
    phone: "ĐIỆN THOẠI",
    footer: "PORTFOLIO KỸ SƯ PHẦN MỀM",
    top: "VỀ ĐẦU TRANG ↑",
  },
  en: {
    nav: { about: "ABOUT", stack: "SKILLS", experience: "EXPERIENCE", projects: "PROJECTS", contact: "CONTACT ↗" },
    role: "SOFTWARE ENGINEER",
    hello: "HELLO, I'M",
    headline: ["SOFTWARE", "ENGINEER"],
    profile: "PROFILE.TXT",
    profileIntro: "Hello!!!, I'm Tran Quoc Khanh, a Software Engineer based in Ho Chi Minh City. I'm curious by nature and often spend my free time exploring a new technology, reading about how a system works, or turning a small idea into something I can try for myself. I enjoy working with people who are open to sharing what they know, and I value steady progress more than pretending to have every answer.",
    profileHighlights: ["CURIOUS BY NATURE", "ALWAYS LEARNING", "OPEN TO COLLABORATION"],
    viewProjects: "VIEW PROJECTS ↓",
    resume: "DOWNLOAD CV ↗",
    summary: "I like to learn slowly but thoroughly: follow an idea far enough to understand it, try it for myself, and keep what proves genuinely useful.",
    facts: [["CURIOUS", "BY NATURE"], ["CONSISTENT", "HOW I GROW"], ["HO CHI MINH", "BASED IN"]],
    marquee: "WEB DEVELOPMENT ✦ SYSTEM DESIGN ✦ REST API ✦ CLEAN ARCHITECTURE ✦",
    aboutIndex: "01 / ABOUT",
    aboutTitle: ["WHO I AM.", "HOW I WORK."],
    aboutText: "I'm easygoing, upbeat, and quick to connect with the people I work with, but I take the work itself seriously. Before I start building a feature, I want the full context: who will use it, where the current friction is, how the workflow runs, and which cases are easy to miss. Once that picture is clear, I work carefully, check the details, and raise questions whenever something still feels uncertain. To me, moving fast only matters when the work is still understood and done properly.",
    principles: [["01", "OPEN AND EASY TO WORK WITH"], ["02", "GET THE FULL CONTEXT FIRST"], ["03", "SERIOUS ABOUT THE DETAILS"]],
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
        label: "PERSONAL PROJECT · FULL-STACK",
        visual: "CRM",
        badge: "FULL STACK",
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
        label: "PERSONAL PROJECT · UI",
        visual: "UI",
        badge: "UI DESIGN",
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
        ],
      },
      {
        title: "AOV SQUAD FINDER SERVER",
        label: "PERSONAL PROJECT · IN PROGRESS",
        visual: "AOV",
        badge: "IN PROGRESS",
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
    contactLead: "IF YOU NEED A SOFTWARE ENGINEER WHO LIKES TO UNDERSTAND THE WORK BEFORE WRITING THE CODE — AND KEEPS LEARNING ALONG THE WAY,",
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

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-menu a"));
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const pointer = document.querySelector<HTMLElement>(".pointer-stamp");
    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    let pointerFrame = 0;

    root.classList.add("motion-ready");

    const updateScrollProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--scroll-progress", progress.toString());
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6%" });

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
      if (reducedMotion.matches) item.classList.add("is-visible");
      else revealObserver.observe(item);
    });

    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => link.classList.toggle("is-current", link.hash === `#${visible.target.id}`));
    }, { threshold: [0.2, 0.45], rootMargin: "-18% 0px -55%" });
    sections.forEach((section) => sectionObserver.observe(section));

    const movePointer = (event: PointerEvent) => {
      if (!pointer || !finePointer.matches) return;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        pointer.style.setProperty("--pointer-x", `${event.clientX}px`);
        pointer.style.setProperty("--pointer-y", `${event.clientY}px`);
        pointer.classList.add("is-active");
      });
    };
    const setPointerMode = (event: PointerEvent) => {
      if (!pointer) return;
      const target = event.target as HTMLElement;
      pointer.classList.toggle("is-link", Boolean(target.closest("a, button, [data-tilt]")));
    };
    window.addEventListener("pointermove", movePointer, { passive: true });
    document.addEventListener("pointerover", setPointerMode, { passive: true });

    const tiltCleanups = tiltItems.map((item) => {
      const move = (event: PointerEvent) => {
        if (!finePointer.matches || reducedMotion.matches) return;
        const bounds = item.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        item.style.setProperty("--tilt-x", `${(-y * 2.5).toFixed(2)}deg`);
        item.style.setProperty("--tilt-y", `${(x * 3).toFixed(2)}deg`);
      };
      const reset = () => {
        item.style.setProperty("--tilt-x", "0deg");
        item.style.setProperty("--tilt-y", "0deg");
      };
      item.addEventListener("pointermove", move);
      item.addEventListener("pointerleave", reset);
      return () => {
        item.removeEventListener("pointermove", move);
        item.removeEventListener("pointerleave", reset);
      };
    });

    return () => {
      root.classList.remove("motion-ready");
      root.style.removeProperty("--scroll-progress");
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("pointermove", movePointer);
      document.removeEventListener("pointerover", setPointerMode);
      cancelAnimationFrame(pointerFrame);
      revealObserver.disconnect();
      sectionObserver.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <main id="top">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="pointer-stamp" aria-hidden="true"><span>+</span></div>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Trần Quốc Khánh — về đầu trang">
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
          </div>
          <aside className="hero-card" data-tilt>
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
          <p data-reveal>{t.summary}</p>
          <div className="quick-facts">{t.facts.map(([value, label]) => <div key={label} data-reveal><strong>{value}</strong><span>{label}</span></div>)}</div>
        </div>
      </header>

      <div className="marquee" aria-label="Software engineering disciplines"><div className="marquee-track"><span>{t.marquee}</span><span aria-hidden="true">{t.marquee}</span></div></div>

      <section className="about section" id="about">
        <div className="section-index">{t.aboutIndex}</div>
        <div className="section-content about-content" data-reveal>
          <h2>{t.aboutTitle[0]}<br /><span>{t.aboutTitle[1]}</span></h2>
          <div className="about-grid">
            <div className="about-copy">
              <p className="large-placeholder">{t.aboutText}</p>
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

      <section className="stack section" id="stack">
        <div className="section-index">{t.stackIndex}</div>
        <div className="section-content">
          <div className="section-title-row" data-reveal><h2>{t.stackTitle}</h2><p>{t.stackNote}</p></div>
          <div className="stack-grid">
            {t.stackGroups.map(([title, items], index) => <article className="stack-card" key={index} data-reveal><div className="stack-card-head"><span>0{index + 1}</span><span className="card-signal">●</span></div><h3>{title}</h3><ul>{items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}</ul></article>)}
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-index">{t.expIndex}</div>
        <div className="section-content">
          <h2 data-reveal>{t.expTitle[0]}<br />{t.expTitle[1]}</h2>
          <div className="timeline">
            <article className="timeline-item" data-reveal>
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
          <div className="education-row" data-reveal><span>{t.education}</span><strong>{t.degree}</strong><span>{t.school}</span></div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-index">{t.projectsIndex}</div>
        <div className="section-content">
          <div className="section-title-row" data-reveal><h2>{t.projectsTitle}</h2><p>{t.projectsNote}</p></div>
          <div className="projects-list">
            {t.projects.map((project, index) => (
              <article className="project-card featured-project" key={index} data-reveal data-tilt>
                <div className="project-topline"><span>0{index + 1}</span><span>{project.label}</span></div>
                <div className="featured-project-grid">
                  <div className="project-preview" aria-hidden="true"><span>{project.visual}</span><div className="preview-lines"><i /><i /><i /><i /></div><b>{project.badge.split(" ").map((word, wordIndex) => <span key={wordIndex}>{word}<br /></span>)}</b></div>
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
