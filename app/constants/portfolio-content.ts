export type Language = 'vi' | 'en';

export const portfolioContent = {
  vi: {
    nav: { about: 'VỀ TÔI', stack: 'CÔNG NGHỆ', experience: 'KINH NGHIỆM', contact: 'LIÊN HỆ ↗' },
    role: 'KỸ SƯ PHẦN MỀM',
    hello: 'XIN CHÀO, TÔI LÀ',
    headline: ['KỸ SƯ', 'PHẦN MỀM'],
    welcomeEyebrow: 'WElCOME TO',
    welcomeTitle: ['MY', 'PORTFOLIO.'],
    welcomeFooter: 'SCROLL TO EXPLORE ↓',
    viewExperience: 'XEM KINH NGHIỆM ↓',
    resume: 'TẢI CV ↗',
    summary:
      'Tôi là kỹ sư phần mềm Full-stack với 2 năm kinh nghiệm, bắt đầu từ phát triển frontend e-commerce bằng React và TypeScript, sau đó mở rộng sang Python, Django và PostgreSQL. Tôi phát triển và duy trì các hệ thống ERP, e-commerce, POS, CRM, quản lý kho và ứng dụng tích hợp AI.',
    facts: [
      ['ĐÀO SÂU', 'CÁCH TÔI HỌC'],
      ['BỀN BỈ', 'CÁCH TÔI TIẾN BỘ'],
      ['HỒ CHÍ MINH', 'NƠI TÔI ĐANG SỐNG'],
    ],
    heroNotes: ['TÒ MÒ', 'KỸ LƯỠNG', 'HÒA ĐỒNG'],
    marquee: 'WEB DEVELOPMENT ✦ SYSTEM DESIGN ✦ REST API ✦ CLEAN ARCHITECTURE ✦',
    aboutIndex: '01 / VỀ TÔI',
    aboutTitle: ['TÔI LÀ AI.', 'CÁCH TÔI LÀM VIỆC.'],
    aboutText:
      'Tôi là người hòa đồng, vui vẻ và khá dễ bắt nhịp khi làm việc cùng mọi người. Nhưng với công việc, tôi luôn giữ sự nghiêm túc và trách nhiệm. Trước khi bắt tay vào một tính năng, tôi muốn có đủ bối cảnh: ai sẽ dùng, họ đang vướng ở đâu, quy trình hiện tại diễn ra thế nào và những trường hợp nào dễ bị bỏ sót. Khi mọi thứ đã rõ, tôi làm từng phần cẩn thận, kiểm tra kỹ và trao đổi lại ngay nếu vẫn còn điểm chưa chắc chắn. Với tôi, làm nhanh chỉ có ý nghĩa khi vẫn hiểu đúng và làm đến nơi đến chốn.',
    aboutMeta: [
      ['NGÀY SINH', '17/08/2003'],
      ['ĐANG SỐNG TẠI', 'TP. HỒ CHÍ MINH, VIỆT NAM'],
    ],
    principles: [
      ['01', 'HÒA ĐỒNG VÀ CỞI MỞ'],
      ['02', 'ĐỦ BỐI CẢNH RỒI MỚI LÀM'],
      ['03', 'NGHIÊM TÚC VÀ KỸ LƯỠNG'],
    ],
    stackIndex: '02 / CÔNG NGHỆ',
    stackTitle: 'CÔNG NGHỆ TÔI SỬ DỤNG.',
    stackNote: 'MỖI CÔNG NGHỆ Ở ĐÂY ĐỀU ĐÃ ĐƯỢC TÔI DÙNG ĐỂ GIẢI QUYẾT MỘT BÀI TOÁN THẬT.',
    stackGroups: [
      [
        'FRONTEND',
        ['ReactJS / Next.js', 'TypeScript / JavaScript', 'Tailwind CSS / shadcn/ui', 'TanStack Query / Zustand'],
      ],
      ['BACKEND', ['Python / Django / DRF', 'NestJS / ExpressJS', 'REST API', 'Authentication & Authorization']],
      ['DATABASE', ['PostgreSQL / MySQL', 'MongoDB', 'Query Optimization', 'Database Design']],
      [
        'TOOLS & PROCESS',
        ['Git / Docker / Linux', 'Unit & E2E Testing', 'System Integration', 'AI-assisted Development'],
      ],
    ],
    expIndex: '03 / KINH NGHIỆM',
    expTitle: ['NƠI TÔI', 'TẠO RA GIÁ TRỊ.'],
    expDomainLabel: 'LĨNH VỰC',
    experiences: [
      {
        "role": "KỸ SƯ PHẦN MỀM FULL-STACK",
        "company": "TTMI JOINT STOCK COMPANY",
        "date": "08/2025 — HIỆN TẠI",
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
      {
        "role": "LẬP TRÌNH VIÊN FRONTEND FREELANCE",
        "company": "TTMI JOINT STOCK COMPANY",
        "date": "09/2024 — 07/2025",
        "arrangement": "FREELANCE · TỪ XA",
        "stack": [
          "REACT",
          "TYPESCRIPT",
          "TAILWIND CSS",
          "AXIOS",
          "TANSTACK QUERY"
        ],
        "domains": [
          "E-COMMERCE"
        ],
        "bullets": [
          "Phát triển và duy trì giao diện React, TypeScript cho cửa hàng e-commerce 3T và cổng quản trị; sử dụng Tailwind CSS và các component tái sử dụng để hỗ trợ màn hình máy tính và điện thoại.",
          "Cải thiện trải nghiệm khám phá sản phẩm qua sửa lỗi tìm kiếm, cuộn vô hạn, sản phẩm liên quan và đã xem gần đây, trang công thức và nội dung khuyến mãi; sửa cách tính voucher khi thanh toán.",
          "Xây dựng tính năng quản trị cho chỉnh sửa sản phẩm, tải ảnh, tìm kiếm, lọc, nhập dữ liệu cập nhật tồn kho và xem lịch sử, popup khuyến mãi và quản lý công thức; tích hợp REST API bằng Axios và TanStack Query.",
          "Cải thiện quy trình đơn hàng chuỗi, chọn sản phẩm trên điện thoại, kiểm tra bằng chứng giao hàng và hiển thị lịch sử chỉnh sửa đơn; bổ sung bộ lọc và xuất Excel cho báo cáo doanh thu, giao hàng.",
          "Cải thiện tốc độ tải landing page và URL sản phẩm; bổ sung metadata, tích hợp GA4, Google Tag Manager và TikTok Pixel để hỗ trợ phân tích marketing."
        ]
      }
    ],
    education: 'HỌC VẤN',
    degree: 'KỸ SƯ CÔNG NGHỆ THÔNG TIN',
    school: 'ĐẠI HỌC NAM CẦN THƠ · 2021—2025',
    contactIndex: '04 / LIÊN HỆ',
    contactLead:
      'NẾU BẠN CẦN MỘT KỸ SƯ PHẦN MỀM LUÔN MUỐN HIỂU RÕ VIỆC CẦN LÀM, KHÔNG NGẠI HỌC ĐIỀU MỚI VÀ SẴN SÀNG CÙNG ĐỘI NGŨ TÌM RA CÁCH TỐT HƠN,',
    contactTitle: ['CỨ NHẮN CHO TÔI.', 'TÔI SẴN SÀNG LẮNG NGHE.'],
    email: 'EMAIL',
    github: 'GITHUB',
    phone: 'ĐIỆN THOẠI',
    footer: 'PORTFOLIO KỸ SƯ PHẦN MỀM',
    top: 'VỀ ĐẦU TRANG ↑',
  },
  en: {
    nav: { about: 'ABOUT', stack: 'SKILLS', experience: 'EXPERIENCE', contact: 'CONTACT ↗' },
    role: 'SOFTWARE ENGINEER',
    hello: "HELLO, I'M",
    headline: ['SOFTWARE', 'ENGINEER'],
    welcomeEyebrow: 'WELCOME TO',
    welcomeTitle: ['MY', 'PORTFOLIO.'],
    welcomeFooter: 'SCROLL TO EXPLORE ↓',
    viewExperience: 'VIEW EXPERIENCE ↓',
    resume: 'DOWNLOAD CV ↗',
    summary:
      'Full-stack Software Engineer with 2 years of software development experience, beginning with React and TypeScript e-commerce interfaces and progressing into Python, Django, and PostgreSQL. Experienced in developing and maintaining ERP, e-commerce, POS, CRM, warehouse, and AI-powered systems.',
    facts: [
      ['CURIOUS', 'BY NATURE'],
      ['CONSISTENT', 'HOW I GROW'],
      ['HO CHI MINH', 'BASED IN'],
    ],
    heroNotes: ['CURIOUS BY NATURE', 'SERIOUS ABOUT DETAILS', 'EASY TO WORK WITH'],
    marquee: 'WEB DEVELOPMENT ✦ SYSTEM DESIGN ✦ REST API ✦ CLEAN ARCHITECTURE ✦',
    aboutIndex: '01 / ABOUT',
    aboutTitle: ['WHO I AM.', 'HOW I WORK.'],
    aboutText:
      "I'm easygoing, upbeat, and quick to connect with the people I work with, but I take the work itself seriously. Before I start building a feature, I want the full context: who will use it, where the current friction is, how the workflow runs, and which cases are easy to miss. Once that picture is clear, I work carefully, check the details, and raise questions whenever something still feels uncertain. To me, moving fast only matters when the work is still understood and done properly.",
    aboutMeta: [
      ['DATE OF BIRTH', '17 AUGUST 2003'],
      ['BASED IN', 'HO CHI MINH CITY, VIETNAM'],
    ],
    principles: [
      ['01', 'OPEN AND EASY TO WORK WITH'],
      ['02', 'GET THE FULL CONTEXT FIRST'],
      ['03', 'SERIOUS ABOUT THE DETAILS'],
    ],
    stackIndex: '02 / SKILLS',
    stackTitle: 'TOOLS I USE.',
    stackNote: 'THE TECHNOLOGIES I USE AT WORK AND IN THE PROJECTS I BUILD FOR MYSELF.',
    stackGroups: [
      [
        'FRONTEND',
        ['ReactJS / Next.js', 'TypeScript / JavaScript', 'Tailwind CSS / shadcn/ui', 'TanStack Query / Zustand'],
      ],
      ['BACKEND', ['Python / Django / DRF', 'NestJS / ExpressJS', 'REST API', 'Authentication & Authorization']],
      ['DATABASE', ['PostgreSQL / MySQL', 'MongoDB', 'Query Optimization', 'Database Design']],
      ['ENGINEERING', ['Git / Docker / Linux', 'Unit & E2E Testing', 'System Integration', 'AI-assisted Development']],
    ],
    expIndex: '03 / EXPERIENCE',
    expTitle: ['WHERE I', 'CREATE VALUE.'],
    expDomainLabel: 'DOMAINS',
    experiences: [
      {
        "role": "FULL-STACK SOFTWARE ENGINEER",
        "company": "TTMI JOINT STOCK COMPANY",
        "date": "AUG 2025 — PRESENT",
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
      {
        "role": "FREELANCE FRONTEND DEVELOPER",
        "company": "TTMI JOINT STOCK COMPANY",
        "date": "SEP 2024 — JUL 2025",
        "arrangement": "FREELANCE · REMOTE",
        "stack": [
          "REACT",
          "TYPESCRIPT",
          "TAILWIND CSS",
          "AXIOS",
          "TANSTACK QUERY"
        ],
        "domains": [
          "E-COMMERCE"
        ],
        "bullets": [
          "Developed and maintained React and TypeScript interfaces for the 3T e-commerce storefront and admin portal, using Tailwind CSS and reusable components for responsive desktop and mobile layouts.",
          "Enhanced product discovery with search fixes, infinite scrolling, related and recently viewed products, recipe pages, and promotional content; corrected voucher calculations in checkout.",
          "Built admin features for product editing, image uploads, search, filtering, stock-update imports and history, promotional popups, and recipe management, integrating REST APIs with Axios and TanStack Query.",
          "Improved chain-order workflows, mobile product selection, delivery-proof validation, and order edit-history display; extended revenue and delivery reports with filters and Excel exports.",
          "Improved landing-page loading performance and product URLs; added metadata and integrated GA4, Google Tag Manager, and TikTok Pixel to support marketing analytics."
        ]
      }
    ],
    education: 'EDUCATION',
    degree: 'B.ENG. IN INFORMATION TECHNOLOGY',
    school: 'NAM CAN THO UNIVERSITY · 2021—2025',
    contactIndex: '04 / CONTACT',
    contactLead:
      'IF YOU NEED A SOFTWARE ENGINEER WHO LIKES TO UNDERSTAND THE WORK BEFORE WRITING THE CODE — AND KEEPS LEARNING ALONG THE WAY,',
    contactTitle: ["LET'S TALK.", "I'M LISTENING."],
    email: 'EMAIL',
    github: 'GITHUB',
    phone: 'PHONE',
    footer: 'SOFTWARE ENGINEER PORTFOLIO',
    top: 'BACK TO TOP ↑',
  },
} as const;
