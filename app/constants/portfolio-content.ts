export type Language = 'vi' | 'en';

export const portfolioContent = {
  vi: {
    nav: { about: 'VỀ TÔI', stack: 'CÔNG NGHỆ', experience: 'KINH NGHIỆM', contact: 'LIÊN HỆ ↗' },
    role: 'KỸ SƯ PHẦN MỀM',
    hello: 'XIN CHÀO, TÔI LÀ',
    headline: ['KỸ SƯ', 'PHẦN MỀM'],
    welcomeEyebrow: 'WELCOME TO',
    welcomeTitle: ['MY', 'PORTFOLIO.'],
    welcomeFooter: 'SCROLL TO EXPLORE ↓',
    viewExperience: 'XEM KINH NGHIỆM ↓',
    resume: 'TẢI CV ↗',
    summary:
      'Tôi là kỹ sư phần mềm Full-stack với 2 năm kinh nghiệm, bắt đầu từ phát triển frontend bằng React và TypeScript, sau đó mở rộng sang backend với Python, Django và PostgreSQL. Tôi thích giải quyết bài toán thực tế và xây dựng sản phẩm từ đầu đến cuối.',
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
        role: 'KỸ SƯ PHẦN MỀM FULL-STACK',
        company: 'TTMI JOINT STOCK COMPANY',
        date: '08/2025 — 10/2026',
        arrangement: 'TOÀN THỜI GIAN · TẠI VĂN PHÒNG',
        stack: ['PYTHON', 'DJANGO', 'DJANGO REST FRAMEWORK', 'REACT', 'TYPESCRIPT', 'POSTGRESQL'],
        domains: ['E-COMMERCE', 'POS', 'CRM', 'ERP', 'HRM', 'MARKETING'],
        bullets: [
          'Tối ưu hiệu năng e-commerce trên Django cho tìm kiếm và danh mục sản phẩm, cập nhật đơn hàng và báo cáo bằng cách xử lý truy vấn N+1, tối ưu tải dữ liệu liên quan, bổ sung caching và cập nhật hàng loạt, cải thiện phép tổng hợp dữ liệu và đánh chỉ mục truy vấn sản phẩm có lưu lượng cao.',
          'Xây dựng quy trình đơn hàng và tồn kho cho chuỗi cửa hàng, gồm quản lý đơn hàng, nhập sản phẩm và tồn kho từ Excel, lịch sử nhập và dấu vết kiểm toán, giữ và hoàn tồn kho, lưu bằng chứng giao hàng, báo cáo tổng trọng lượng và đồng bộ sản phẩm, đơn hàng, tồn kho với Pancake.',
          'Phát triển quy trình mua hàng và kho ERP: yêu cầu mua và nhận hàng trên thiết bị di động, ánh xạ nhà cung cấp và loại giao dịch, tự động tạo đơn mua hàng nội địa, kiểm tra đơn vị quy đổi, tính thuế theo dòng, ngưỡng tồn kho, tra cứu barcode, vị trí kệ và phê duyệt nhận hàng.',
          'Xây dựng bộ lọc, sắp xếp, phân trang và kiểm tra dữ liệu có thể tái sử dụng cho chứng từ bán hàng, mua hàng, kế toán, thanh toán và tồn kho ERP; bổ sung logic truy vấn theo bộ lọc, thông báo lỗi API tiếng Việt nhất quán, theo dõi kiểm toán và cơ chế bảo vệ migration dữ liệu.',
          'Phát triển đồng bộ POS và CRM cho menu, nhóm món, loại món, tùy chỉnh, thương hiệu, cửa hàng và kênh bán; hỗ trợ tạo nhà hàng, đồng bộ menu từ thành phố xuống cửa hàng, loại dữ liệu danh mục trùng lặp và giới hạn truy cập theo thương hiệu/cửa hàng.',
          'Xây dựng báo cáo và tính năng vận hành backend POS: báo cáo doanh thu và khuyến mãi, tổng kết đóng ca, số lượng theo đơn vị, phân quyền báo cáo, API e-voucher, cấu hình cửa hàng/thiết bị, đồng bộ máy in và xác minh, xoay vòng PIN cửa hàng.',
          'Phát triển giao diện quản trị POS cho e-voucher, khuyến mãi, quy tắc giảm giá và mua A tặng B, kiểm tra chiến dịch và trạng thái, lọc cửa hàng, quản lý menu theo thương hiệu, cập nhật giá hàng loạt, nhập/xuất Excel, cấu hình máy in và mẫu hóa đơn/báo cáo ca có xem trước trực tiếp.',
          'Tăng độ tin cậy frontend ERP bằng schema TypeScript rõ ràng cho tồn kho, kế toán, bán hàng, tiền mặt và ngân hàng; triển khai tra cứu vật tư, upsert Excel hàng loạt, báo cáo tồn kho, biểu mẫu thanh toán và xuất Excel.',
          'Đóng góp vào quy trình HRM cho nhân viên, xếp ca, lịch làm việc, chấm công và phê duyệt nhận hàng; phát triển nhập/xuất lương, tính phụ cấp, báo cáo lương bổ sung và biểu đồ lương theo cửa hàng.',
          'Xây dựng tích hợp và công cụ dữ liệu marketing: đồng bộ Facebook Page Insights theo lịch, dashboard bài đăng/tương tác và caching; tích hợp API đối tác Xanh SM để kiểm tra tình trạng cửa hàng với làm mới token và tác vụ định kỳ; OCR ảnh sản phẩm Shopee bằng Gemini và thu thập sản phẩm đối thủ bằng Playwright, BeautifulSoup.',
          'Xây dựng hạ tầng kiểm thử end-to-end cho bán hàng, mua hàng, tồn kho, sổ cái, tiền mặt và ngân hàng ERP bằng dữ liệu tổng hợp, baseline cơ sở dữ liệu, trình chạy theo phân hệ, cấu hình môi trường và helper dùng chung; bổ sung unit/regression test, cải thiện CI và phối hợp với Kế toán, Kinh doanh, Marketing, ban lãnh đạo để làm rõ yêu cầu, bàn giao tính năng Django API và React.'
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
      'Full-stack Software Engineer with 2 years of experience, starting with React and TypeScript on the frontend, then expanding into Python, Django, and PostgreSQL on the backend. I enjoy solving real-world problems and building products end-to-end.',
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
        role: 'FULL-STACK SOFTWARE ENGINEER',
        company: 'TTMI JOINT STOCK COMPANY',
        date: 'AUG 2025 — OCT 2026',
        arrangement: 'FULL-TIME · ON-SITE',
        stack: ['PYTHON', 'DJANGO', 'DJANGO REST FRAMEWORK', 'REACT', 'TYPESCRIPT', 'POSTGRESQL'],
        domains: ['E-COMMERCE', 'POS', 'CRM', 'ERP', 'HRM', 'MARKETING'],
        bullets: [
          'Improved Django e-commerce performance across product search, catalog listings, order updates, and reporting by resolving N+1 queries, optimizing related-object loading, adding bulk caching and updates, improving database aggregations, and indexing high-traffic product queries.',
          'Built chain-account order and inventory workflows, including Excel product and stock imports, import history and audit trails, stock reservation and restoration, delivery-proof capture, total-weight reporting, and Pancake synchronization for products, orders, and stock.',
          'Developed ERP procurement and warehouse workflows covering mobile purchase and receipt requests, supplier and transaction-type mapping, automatic domestic purchase-order creation, converted-unit validation, line-level tax, stock thresholds, barcode lookup, shelf locations, and receipt approvals.',
          'Implemented reusable filtering, sorting, pagination, and validation across ERP sales, purchasing, accounting, payment, and inventory documents. Added selector-based query logic, consistent Vietnamese API errors, audit tracking, and safeguards for data migrations.',
          'Built POS and CRM synchronization for menus, item groups, item types, customizations, brands, stores, and sales channels. Supported restaurant creation and city-to-store menu sync, deduplicated catalog data, and enforced brand/store scoping to prevent cross-store access.',
          'Delivered POS backend reporting and operations features: revenue and promotion reports, shift-close summaries, quantity by unit, role-based report access, e-voucher APIs, store/device configuration, printer synchronization, and store PIN verification and rotation.',
          'Developed POS admin interfaces for e-vouchers and promotions, discount and Buy A Get B rules, campaign validation and status, store filters, brand-aware menu management, bulk pricing, Excel import/export, printer settings, and bill/shift-report templates with live previews.',
          'Improved ERP frontend reliability with explicit TypeScript schemas across inventory, accounting, sales, cash, and banking. Implemented material lookup, bulk Excel upserts, inventory reports, payment forms, and Excel exports.',
          'Contributed to HRM employee, shift-scheduling, work-schedule, timekeeping, and receipt-approval workflows, including salary imports/exports, allowance calculations, supplemental salary reports, and salary charts by store.',
          'Built marketing integrations and data tools: scheduled Facebook Page Insights synchronization, post/engagement dashboards and caching, Xanh SM merchant APIs for store availability with token refresh and scheduled jobs, Gemini OCR for Shopee product images, and competitor-product crawling with Playwright and BeautifulSoup.',
          'Created end-to-end test infrastructure for ERP sales, procurement, inventory, ledger, cash, and banking modules using synthetic data, database baselines, module runners, environment setup, and shared workflow helpers. Added unit and regression tests, improved CI, and collaborated with Accounting, Sales, Marketing, and leadership to clarify requirements and deliver Django API and React features.'
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
