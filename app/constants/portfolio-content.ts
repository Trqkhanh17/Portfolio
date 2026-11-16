export type Language = 'vi' | 'en';

export const portfolioContent = {
  vi: {
    nav: { about: 'VỀ TÔI', stack: 'CÔNG NGHỆ', experience: 'KINH NGHIỆM', contact: 'LIÊN HỆ ↗' },
    role: 'KỸ SƯ PHẦN MỀM FULL-STACK',
    hello: 'XIN CHÀO, TÔI LÀ',
    headline: ['KỸ SƯ', 'FULL-STACK'],
    viewExperience: 'XEM KINH NGHIỆM ↓',
    resume: 'TẢI CV ↗',
    summary:
      'Kỹ sư phần mềm Full-stack tập trung vào backend Python/Django và ứng dụng React/TypeScript. Tôi đã xây dựng, tối ưu các quy trình ERP, thương mại điện tử, POS và CRM từ mua hàng, kho vận đến bán hàng, báo cáo và tích hợp dịch vụ bên thứ ba.',
    facts: [
      ['PYTHON / DJANGO', 'BACKEND CHÍNH'],
      ['REACT / TYPESCRIPT', 'FRONTEND'],
      ['TP. HỒ CHÍ MINH', 'VIỆT NAM'],
    ],
    heroNotes: ['TỐI ƯU API DJANGO', 'QUY TRÌNH ERP · POS', 'TÍCH HỢP DỊCH VỤ BÊN THỨ BA'],
    marquee: 'WEB DEVELOPMENT ✦ SYSTEM DESIGN ✦ REST API ✦ CLEAN ARCHITECTURE ✦',
    aboutIndex: '01 / VỀ TÔI',
    aboutTitle: ['TÔI LÀ AI.', 'CÁCH TÔI LÀM VIỆC.'],
    aboutText:
      'Tôi tập trung xây dựng ứng dụng backend với Python/Django và sản phẩm web bằng React/TypeScript. Trong công việc, tôi đã tham gia các quy trình ERP, e-commerce, POS và CRM; từ thiết kế REST API, phân quyền và tối ưu truy vấn đến kiểm thử, tích hợp dữ liệu và hoàn thiện giao diện. Tôi phối hợp cùng các nhóm nghiệp vụ để hiểu quy trình, xử lý trường hợp biên và đưa tính năng vào sử dụng đáng tin cậy.',
    aboutMeta: [
      ['NGOẠI NGỮ', 'TIẾNG VIỆT · BẢN NGỮ'],
      ['TIẾNG ANH', 'ĐỌC TÀI LIỆU KỸ THUẬT CƠ BẢN'],
    ],
    principles: [
      ['01', 'THIẾT KẾ REST API'],
      ['02', 'TỐI ƯU TRUY VẤN CƠ SỞ DỮ LIỆU'],
      ['03', 'KIỂM THỬ TỰ ĐỘNG · CI/CD'],
    ],
    stackIndex: '02 / CÔNG NGHỆ',
    stackTitle: 'CÔNG NGHỆ TÔI SỬ DỤNG.',
    stackNote: 'MỖI CÔNG NGHỆ Ở ĐÂY ĐỀU ĐÃ ĐƯỢC TÔI DÙNG ĐỂ GIẢI QUYẾT MỘT BÀI TOÁN THẬT.',
    stackGroups: [
      [
        'FRONTEND',
        ['React / React Hooks', 'TypeScript / JavaScript', 'Tailwind CSS / MUI', 'Redux Toolkit / TanStack Query', 'React Hook Form / shadcn/ui / Axios'],
      ],
      ['BACKEND', ['Python / Django / Django REST Framework', 'Node.js / NestJS / ExpressJS', 'REST API Design', 'JWT · RBAC · Authentication & Authorization']],
      ['DATABASE', ['PostgreSQL / MySQL / MongoDB', 'Mongoose / Django ORM', 'Query Optimization']],
      [
        'TOOLS & PROCESS',
        ['pytest / Jest / Vitest', 'Playwright · Unit · E2E Testing', 'Git / GitHub Actions / CI/CD', 'Docker / Linux'],
      ],
    ],
    expIndex: '03 / KINH NGHIỆM',
    expTitle: ['NƠI TÔI', 'TẠO RA GIÁ TRỊ.'],
    expDomainLabel: 'LĨNH VỰC',
    experiences: [
      {
        "role": "KỸ SƯ PHẦN MỀM FULL-STACK",
        "company": "TTMI JOINT STOCK COMPANY",
        "date": "10/2025 — 10/2026",
        "arrangement": "TOÀN THỜI GIAN · TẠI VĂN PHÒNG",
        "stack": [
          "PYTHON",
          "DJANGO",
          "DJANGO REST FRAMEWORK",
          "REACT",
          "TYPESCRIPT",
          "POSTGRESQL"
        ],
        "domains": [
          "E-COMMERCE",
          "POS",
          "CRM",
          "ERP"
        ],
        "bullets": [
          "Phát triển và duy trì các tính năng e-commerce full-stack bằng Python, Django, Django REST Framework, React, TypeScript và PostgreSQL cho sản phẩm, đơn hàng, tồn kho, giao vận, báo cáo và nhập/xuất Excel.",
          "Xây dựng các module POS và CRM cho dữ liệu menu đa thương hiệu, danh mục sản phẩm, tùy chọn sản phẩm, cấu hình cửa hàng và đồng bộ sản phẩm giữa các hệ thống.",
          "Triển khai quy trình kho ERP gồm tra cứu sản phẩm bằng barcode, theo dõi vị trí kệ, yêu cầu mua hàng, nhận hàng, tính thuế theo từng dòng, nghiệp vụ tồn kho và tự động tạo đơn mua hàng.",
          "Thiết kế và tích hợp REST API bằng Django REST Framework, bao gồm kiểm tra dữ liệu, xác thực, phân quyền, logic nghiệp vụ, tích hợp frontend và dịch vụ bên ngoài.",
          "Tối ưu API sản phẩm, đơn hàng, báo cáo và tồn kho bằng cách loại bỏ truy vấn N+1, sử dụng select_related và prefetch_related trong Django ORM, đồng thời xử lý cơ sở dữ liệu theo lô.",
          "Phát triển giải pháp dữ liệu marketing gồm đồng bộ Facebook Insights theo lịch, caching, thu thập dữ liệu sản phẩm đối thủ và xử lý OCR Shopee bằng Gemini.",
          "Viết unit test và regression test cho logic nghiệp vụ và hành vi truy vấn cơ sở dữ liệu nhằm tăng độ tin cậy và ngăn hiệu năng suy giảm khi thay đổi mã nguồn.",
          "Làm việc trực tiếp với Kế toán, Kinh doanh, Marketing và Ban Giám đốc để làm rõ yêu cầu, phân tích quy trình ERP, xác định các trường hợp biên và bàn giao tính năng đã được kiểm thử."
        ]
      },
    ],
    education: 'HỌC VẤN',
    degree: 'KỸ SƯ CÔNG NGHỆ THÔNG TIN',
    school: 'ĐẠI HỌC NAM CẦN THƠ · 2021—2025',
    contactIndex: '04 / LIÊN HỆ',
    contactLead:
      'TÔI ĐANG TÌM KIẾM CƠ HỘI PHÙ HỢP ĐỂ XÂY DỰNG SẢN PHẨM VÀ GIẢI QUYẾT CÁC BÀI TOÁN KỸ THUẬT CÙNG ĐỘI NGŨ.',
    contactTitle: ['CỨ NHẮN CHO TÔI.', 'TÔI SẴN SÀNG LẮNG NGHE.'],
    email: 'EMAIL',
    github: 'GITHUB',
    phone: 'ĐIỆN THOẠI',
    footer: 'PORTFOLIO KỸ SƯ PHẦN MỀM',
    top: 'VỀ ĐẦU TRANG ↑',
  },
  en: {
    nav: { about: 'ABOUT', stack: 'SKILLS', experience: 'EXPERIENCE', contact: 'CONTACT ↗' },
    role: 'FULL-STACK SOFTWARE ENGINEER',
    hello: "HELLO, I'M",
    headline: ['FULL-STACK', 'ENGINEER'],
    viewExperience: 'VIEW EXPERIENCE ↓',
    resume: 'DOWNLOAD CV ↗',
    summary:
      'Full-stack Software Engineer focused on Python/Django backend development and React/TypeScript applications. Built and optimized ERP, e-commerce, POS, and CRM workflows spanning procurement, inventory, sales, reporting, and third-party integrations.',
    facts: [
      ['PYTHON / DJANGO', 'BACKEND FOCUS'],
      ['REACT / TYPESCRIPT', 'FRONTEND'],
      ['HO CHI MINH CITY', 'VIETNAM'],
    ],
    heroNotes: ['DJANGO API OPTIMIZATION', 'ERP · POS WORKFLOWS', 'THIRD-PARTY INTEGRATIONS'],
    marquee: 'WEB DEVELOPMENT ✦ SYSTEM DESIGN ✦ REST API ✦ CLEAN ARCHITECTURE ✦',
    aboutIndex: '01 / ABOUT',
    aboutTitle: ['WHO I AM.', 'HOW I WORK.'],
    aboutText:
      'I focus on Python/Django backend systems and React/TypeScript web applications. My experience includes ERP, e-commerce, POS, and CRM workflows, covering REST API design, access control, query optimization, automated testing, data integrations, and frontend delivery. I work with business teams to understand workflows, handle edge cases, and ship reliable features.',
    aboutMeta: [
      ['LANGUAGES', 'VIETNAMESE · NATIVE'],
      ['ENGLISH', 'BASIC TECHNICAL READING'],
    ],
    principles: [
      ['01', 'REST API DESIGN'],
      ['02', 'DATABASE QUERY OPTIMIZATION'],
      ['03', 'AUTOMATED TESTING · CI/CD'],
    ],
    stackIndex: '02 / SKILLS',
    stackTitle: 'TOOLS I USE.',
    stackNote: 'THE TECHNOLOGIES I USE AT WORK AND IN THE PROJECTS I BUILD FOR MYSELF.',
    stackGroups: [
      [
        'FRONTEND',
        ['React / React Hooks', 'TypeScript / JavaScript', 'Tailwind CSS / MUI', 'Redux Toolkit / TanStack Query', 'React Hook Form / shadcn/ui / Axios'],
      ],
      ['BACKEND', ['Python / Django / Django REST Framework', 'Node.js / NestJS / ExpressJS', 'REST API Design', 'JWT · RBAC · Authentication & Authorization']],
      ['DATABASE', ['PostgreSQL / MySQL / MongoDB', 'Mongoose / Django ORM', 'Query Optimization']],
      ['ENGINEERING', ['pytest / Jest / Vitest', 'Playwright · Unit · E2E Testing', 'Git / GitHub Actions / CI/CD', 'Docker / Linux']],
    ],
    expIndex: '03 / EXPERIENCE',
    expTitle: ['WHERE I', 'CREATE VALUE.'],
    expDomainLabel: 'DOMAINS',
    experiences: [
      {
        "role": "FULL-STACK SOFTWARE ENGINEER",
        "company": "TTMI JOINT STOCK COMPANY",
        "date": "OCT 2025 — OCT 2026",
        "arrangement": "FULL-TIME · ON-SITE",
        "stack": [
          "PYTHON",
          "DJANGO",
          "DJANGO REST FRAMEWORK",
          "REACT",
          "TYPESCRIPT",
          "POSTGRESQL"
        ],
        "domains": [
          "E-COMMERCE",
          "POS",
          "CRM",
          "ERP"
        ],
        "bullets": [
          "Developed and maintained full-stack e-commerce features using Python, Django, Django REST Framework, React, TypeScript, and PostgreSQL across product, order, inventory, delivery, reporting, and Excel import/export workflows.",
          "Built POS and CRM modules for multi-brand menu data, product categories, item customizations, store configuration, and cross-system product synchronization.",
          "Implemented ERP warehouse workflows including barcode-based product lookup, shelf-location tracking, purchase requests, goods receiving, line-level tax calculation, inventory operations, and automated purchase-order creation.",
          "Designed and integrated REST APIs using Django REST Framework, including validation, authentication, authorization, business logic, frontend integration, and external service integration.",
          "Optimized product, order, reporting, and stock APIs by eliminating N+1 query patterns, applying Django ORM optimizations with select_related and prefetch_related, and batching database operations.",
          "Developed marketing data solutions including scheduled Facebook Insights synchronization, caching, competitor-product scraping, and Gemini-powered Shopee OCR processing.",
          "Implemented unit and regression tests for business logic and database query behavior to improve reliability and prevent performance regressions.",
          "Worked directly with Accounting, Sales, Marketing, and the Board of Directors to clarify requirements, analyze ERP workflows, identify edge cases, and deliver tested product features."
        ]
      },
    ],
    education: 'EDUCATION',
    degree: 'B.ENG. IN INFORMATION TECHNOLOGY',
    school: 'NAM CAN THO UNIVERSITY · 2021—2025',
    contactIndex: '04 / CONTACT',
    contactLead:
      'I AM OPEN TO THE RIGHT OPPORTUNITY TO BUILD PRODUCTS AND SOLVE ENGINEERING PROBLEMS WITH A TEAM.',
    contactTitle: ["LET'S TALK.", "I'M LISTENING."],
    email: 'EMAIL',
    github: 'GITHUB',
    phone: 'PHONE',
    footer: 'SOFTWARE ENGINEER PORTFOLIO',
    top: 'BACK TO TOP ↑',
  },
} as const;
