const services = [
    {
        slug: "website-doanh-nghiep",
        title: "Thiết kế website doanh nghiệp",
        description:
            "Xây dựng website chuyên nghiệp theo bộ nhận diện thương hiệu, bố cục rõ ràng và trải nghiệm người dùng tối ưu trên mọi thiết bị.",
        tagline:
            "Chúng tôi làm cổng thông tin số của thương hiệu: rõ cấu trúc trang con, nhất quán hình ảnh và sẵn sàng đón lưu lượng từ chiến dịch quảng cáo và SEO.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.5h16.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75z" /> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 19.5h7.5" />
        </svg>`,
        benefits: [
            "Mạch nhận diện thương hiệu thống nhất từ màu sắc, font chữ đến bố cục section.",
            "Tối ưu UX cho người tìm hiểu sản phẩm và liên hệ với nhân sự chủ đạo của doanh nghiệp.",
            "Tốc độ tải trang được xử lý từ khâu prototype, không phải “vá” sau live.",
            "Chuẩn SEO on-page: heading, chiến lược landing nội bộ và snippet thân thiện SERP.",
            "Kiến trúc CMS gọn để nhóm marketing tự nhập tin tức, dự án và tài liệu mà không cần chỉnh HTML.",
            "Responsive chuẩn thiết bị từ mobile đầu tay tới ultrawide, test trực tiếp trước bàn giao.",
        ],
        deliverables: [
            "Brief & chiến lược sơ bộ IA (thông tin chính, menu, luồng người dùng đề xuất).",
            "Thiết kế Figma các key page (trang chủ, giới thiệu, dịch vụ/sản phẩm, liên hệ).",
            "Phát triển front/back theo chồng WordPress hoặc headless đã thống nhất.",
            "Nhập dữ liệu mẫu, hình ảnh nén và cấu hình form/email thông báo.",
            "Bàn giao tài liệu vận hành, backup và một buổi training ngắn cho đội nội bộ.",
        ],
        processSteps: [
            "Khảo sát mục tiêu và phân vai trò từng loại khách vào web.",
            "Thử nghiệm wireframe và phản biện cùng chủ đầu tư trước khi vào đồ họa.",
            "Lập trình, nội dung thử và kiểm thử QA cross-browser/device.",
            "Go-live và theo dõi tối ưu trong giai đoạn bảo hành.",
        ],
        idealFor:
            "Doanh nghiệp vừa và nhỏ, startup B2B, nhà máy – xưởng cần nâng tầm uy tín và thuần đường hỗ trợ bán hoặc tuyển dụng digitized.",
    },
    {
        slug: "landing-page-chuyen-doi",
        title: "Thiết kế landing page chuyển đổi",
        description:
            "Tạo landing page tập trung vào mục tiêu quảng cáo, nội dung thuyết phục và CTA rõ ràng để tăng tỷ lệ đăng ký và chốt đơn.",
        tagline:
            "Landing page chỉ có một đích: một hành động và một thông điệp được tiếp cận từ trên xuống dưới mượt và đo được.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
        </svg>`,
        benefits: [
            "Cấu trúc AIDA / PAS phù hợp funnel quảng cáo của bạn, không chuyển hướng rời mục tiêu khởi điểm.",
            "Đoạn lead form tối ưu UX: giảm trường bắt buộc, trust badge gần CTA và mobile sticky CTA.",
            "Thống nhất message với UTM và creative quảng cáo để tránh discrepancy.",
            "Tối ưu LCP và CLS trong phần Above the Fold trước khi chi tiêu media.",
            "Theo dõi đổi sự kiện bằng Google Tag hoặc pixel bạn chỉ định.",
            "Biến thể block social proof và pricing table xoay nhẹ theo từng chiến dịch tái nhắm mục tiêu.",
        ],
        deliverables: [
            "Workshop chiến dịch: offer, objection chính, proof point và KPI.",
            "Bản prototype Figma chia section rõ chỗ test A/B trong tương lai.",
            "Landing page được code production với các CTA được tag chuẩn measurement.",
            "Form kết nối email/marketing automation bạn chỉ định.",
            "Checklist QA trước chạy quảng cáo và tài liệu chuyển giao chỉnh wording sau live.",
        ],
        processSteps: [
            "Làm rõ KPI (lead/booking/demo) và dữ liệu audience.",
            "Thiết kế content block + nhịp scrolling trên một trục chính.",
            "Lập trình, gắn tracking và rehearsal trên staging.",
            "Bàn giao, document heatmap và lịch tối ưu hai tuần đầu live.",
        ],
        idealFor:
            "Đội growth marketing và founder chạy funnel quảng cáo có ngân sách media cần tăng tỉ lệ chuyển đổi nhanh, có thể mở rộng chiến dịch tái nhắm.",
    },
    {
        slug: "website-ban-hang",
        title: "Thiết kế website bán hàng",
        description:
            "Triển khai website thương mại điện tử với trang sản phẩm, giỏ hàng và quy trình đặt hàng mượt mà giúp tối đa doanh thu online.",
        tagline:
            "Chúng tôi làm chợ online gọn của bạn: kho dữ liệu sản phẩm, giỏ hàng vững và hành trình đặt hàng dễ theo cho khách và admin.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386a1.5 1.5 0 011.458 1.147l.489 1.956m0 0L6.75 12h10.5l1.5-6H5.583z" /> <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 19.5a.75.75 0 100 1.5.75.75 0 000-1.5zm9 0a.75.75 0 100 1.5.75.75 0 000-1.5z" />
        </svg>`,
        benefits: [
            "Quản lý sản phẩm, nhóm SKU, voucher và VAT rõ trong dashboard.",
            "Thanh toán COD, chuyển kho và cổng trực tuyến tích hợp theo hướng dẫn acquirer bạn có.",
            "UX giỏ hàng – checkout giảm bỏ vỏ và lỗi mobile.",
            "Trang chủ và collection chuẩn SEO cho long-tail SKU.",
            "Tốc độ catalog list và caching cho traffic flash sale có kế hoạch.",
            "Theo vết đơn: email transactional + notification admin quen thuộc kế toán của bạn.",
        ],
        deliverables: [
            "Wireframe các flow: danh mục, chi tiết, giỏ, checkout và tài khoản khách (nếu cần).",
            "Theme WooCommerce/custom stack đã chỉnh mobile-first và dark mode-ready nếu bạn có yêu cầu.",
            "Đồng bộ phí vận chuyển theo tier khu vực bạn cung cấp.",
            "Import sản phẩm nhập liệu bằng CSV seed + hình ảnh nén và alt text chuẩn.",
            "Training quản trị và template email transaction base.",
        ],
        processSteps: [
            "Làm rõ catalog SKU, kho và chính sách đơn/refund hiện tại.",
            "Thiết kế UI kênh bán và flow thanh toán & vận chuyển.",
            "Lập trình, stress test nhóm sản phẩm và kịch bản promotion.",
            "Go-live và theo dõi cart abandonment / performance tuần đầu.",
        ],
        idealFor:
            "Thương hiệu bán retail, FMCG và D2C cần nền tảng ecommerce trên WordPress có thể bảo trì nội bộ sau bàn giao.",
    },
    {
        slug: "phat-trien-mobile-app",
        title: "Phát triển Mobile App",
        description:
            "Thiết kế và phát triển ứng dụng iOS & Android theo nghiệp vụ thực tế: theo dõi realtime, onboarding, live data và trải nghiệm người dùng mượt trên mọi thiết bị.",
        tagline:
            "Chúng tôi xây app mobile từ brief đến store: UI/UX rõ luồng, backend ổn định và sẵn sàng mở rộng tính năng khi sản phẩm tăng người dùng.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>`,
        benefits: [
            "Một codebase hoặc native stack phù hợp mục tiêu: React Native, Flutter hoặc iOS/Android thuần theo brief.",
            "Luồng UX mobile-first: onboarding, permission, offline nhẹ và deep link rõ ràng.",
            "Tích hợp map, push notification, thanh toán và analytics theo nghiệp vụ sản phẩm.",
            "Hiệu năng mượt trên máy tầm trung — animation và list dài được tối ưu từ sớm.",
            "Quy trình QA thiết bị thật (iOS + Android) trước khi submit App Store / Google Play.",
            "Kiến trúc API và state management sẵn sàng mở rộng tính năng sau lần phát hành đầu.",
        ],
        deliverables: [
            "Brief sản phẩm, user flow và wireframe các màn trọng điểm.",
            "UI kit Figma (light/dark nếu cần) và prototype tương tác.",
            "App iOS & Android (hoặc cross-platform) kết nối API staging/production.",
            "Cấu hình push, analytics và checklist nộp store.",
            "Tài liệu vận hành, bảng nghiệm thu và buổi bàn giao cho đội nội bộ.",
        ],
        processSteps: [
            "Khảo sát nghiệp vụ, persona và ràng buộc store / bảo mật.",
            "Thiết kế luồng màn hình và đồng thuận prototype trước khi code.",
            "Phát triển song song app + API, QA liên tục theo sprint.",
            "Beta test, tối ưu và hỗ trợ submit / go-live trên store.",
        ],
        idealFor:
            "Startup và doanh nghiệp cần app vận hành thực tế — vận tải, HR/engagement, sports live data hoặc sản phẩm consumer có lộ trình lên store rõ.",
    },
];

const projects = [
    {
        title: "Website",
        description: "Website chuyên nghiệp, tối ưu SEO và chuyển đổi",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386a1.5 1.5 0 011.458 1.147l.489 1.956m0 0L6.75 12h10.5l1.5-6H5.583z" /> <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 19.5a.75.75 0 100 1.5.75.75 0 000-1.5zm9 0a.75.75 0 100 1.5.75.75 0 000-1.5z" />
        </svg>`,
    },
    {
        title: "Web application",
        description: "Web application là ứng dụng web được thiết kế để hoạt động trên môi trường web, có thể truy cập từ bất kỳ thiết bị nào có kết nối internet.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386a1.5 1.5 0 011.458 1.147l.489 1.956m0 0L6.75 12h10.5l1.5-6H5.583z" /> <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 19.5a.75.75 0 100 1.5.75.75 0 000-1.5zm9 0a.75.75 0 100 1.5.75.75 0 000-1.5z" />
        </svg>`,
    },
    {
        title: "Mobile App",
        description:
            "Ứng dụng iOS & Android tập trung vào trải nghiệm người dùng, dữ liệu realtime và nghiệp vụ vận hành trên thiết bị di động.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>`,
    },
];

const websiteProjects = [
    {
        name: "Song Anh Car Travel",
        industry: "Thuê xe du lịch",
        image: "/images/projects/song-anh-car-travel.PNG",
        imageAlt: "Ảnh đại diện dự án Song Anh Car Travel",
        summary:
            "Website thuê xe du lịch Song Anh Car Travel giúp khách hàng dễ dàng tìm kiếm và đặt xe theo nhu cầu.",
        result:
            "Tăng 37% số lượt đặt xe trong 2 tháng đầu triển khai.",
        stack: "WordPress, Elementor, Elementor Pro",
    },
    {
        name: "Future Accounting",
        industry: "Kế toán",
        image: "/images/projects/future-accounting.png",
        imageAlt: "Ảnh đại diện dự án Future Accounting",
        summary:
            "Website dịch vụ kế toán giúp doanh nghiệp dễ chọn gói dịch vụ, gửi yêu cầu tư vấn và theo dõi lịch hẹn làm việc.",
        result:
            "Tăng 37% số lượt đăng ký tư vấn kế toán trong 2 tháng đầu triển khai.",
        stack: "Astro, TailwindCSS, Headless CMS",
    },
    {
        name: "Netflix Account",
        industry: "Bán account Netflix",
        image: "/images/projects/hackgame.png",
        imageAlt: "Ảnh đại diện dự án Netflix Account",
        summary:
            "Website thương mại điện tử chuyên bán account Netflix với danh mục sản phẩm rõ ràng, lọc theo tựa game và mức rank.",
        result:
            "Tăng 29% tỷ lệ hoàn tất đơn hàng nhờ tối ưu quy trình mua và thanh toán nhanh.",
        stack: "WordPress, WooCommerce, Elementor, Elementor Pro",
    },
    {
        name: "Ốc bươu vàng",
        industry: "Bán account Netflix",
        image: "/images/projects/oc-buou-vang.png",
        imageAlt: "Ảnh đại diện dự án Ốc bươu vàng",
        summary:
            "Xây dựng website bán account Netflix theo gói thời hạn, quản lý tồn kho account và tự động gửi thông tin sau thanh toán.",
        result:
            "Giảm hơn 50% thao tác xử lý đơn thủ công, tăng tốc độ giao account cho khách trong ngày.",
        stack: "Next.js, Supabase, Stripe",
    },
    {
        name: "Dạy lái xe 365",
        industry: "Đăng ký học lái xe",
        image: "/images/projects/day-lai-xe.png",
        imageAlt: "Ảnh đại diện dự án Dạy lái xe 365",
        summary:
            "Website tuyển sinh khóa học lái xe với lịch khai giảng, biểu phí minh bạch và form đăng ký theo khu vực.",
        result:
            "Tăng 41% lượng đăng ký khóa học online và giảm tỉ lệ bỏ form nhờ tối ưu mobile.",
        stack: "Astro, Node.js, PostgreSQL",
    },
    {
        name: "Thế Giới Khô",
        industry: "Bán các sản phẩm khô",
        image: "/images/projects/the-gioi-kho.png",
        imageAlt: "Ảnh đại diện dự án Thế Giới Khô",
        summary:
            "Website bán các sản phẩm khô có đa dạng mẫu mã, chất lượng và giá cả phù hợp.",
        result:
            "Tăng 35% tỷ lệ hoàn tất đơn hàng nhờ tối ưu quy trình mua và thanh toán nhanh.",
        stack: "Next.js, TailwindCSS, Supabase",
    },
];

const webApplicationProjects = [
    {
        name: "Kinder CRM",
        industry: "CRM · Quản lý trường mầm non toàn diện",
        image: "/images/projects/kinder-banner.PNG",
        imageAlt: "Ảnh đại diện dự án Kinder CRM",
        summary:
            "Nền tảng CRM tích hợp quản lý trường mầm non toàn diện, quản lý nhân sự, theo dõi hiệu suất và lịch sử chăm sóc khách hàng theo từng đội.",
        result:
            "Giảm 52% thao tác chấm công thủ công, chuẩn hóa pipeline CRM và rút ngắn thời gian chốt báo cáo tuần.",
        stack: "Next.js, TailwindCSS, Supabase",
    },
    {
        name: "U-Work",
        industry: "CRM · Chấm công online",
        image: "/images/projects/uwork.png",
        imageAlt: "Ảnh đại diện dự án U-Work",
        summary:
            "Nền tảng CRM tích hợp chấm công online, quản lý nhân sự, theo dõi hiệu suất và lịch sử chăm sóc khách hàng theo từng đội.",
        result:
            "Giảm 52% thao tác chấm công thủ công, chuẩn hóa pipeline CRM và rút ngắn thời gian chốt báo cáo tuần.",
        stack: "Next.js, NestJS, PostgreSQL",
    },
    {
        name: "Edutify",
        industry: "EdTech · E-Learning",
        image: "/images/projects/edutify.png",
        imageAlt: "Ảnh đại diện dự án Edutify",
        summary:
            "Hệ thống E-Learning cho quản lý khóa học, bài giảng video, bài kiểm tra và theo dõi tiến độ học viên theo lớp.",
        result:
            "Tăng 28% tỷ lệ hoàn thành khóa học và giảm 45% thời gian quản trị lớp cho đội vận hành đào tạo.",
        stack: "React, Laravel, MySQL",
    },
];

const mobileAppProjects = [
    {
        name: "Transportme Passenger",
        industry: "Transport · Theo dõi xe buýt realtime",
        image: "/images/projects/transportme-passenger.webp",
        imageAlt: "Màn hình theo dõi xe buýt realtime trên bản đồ của Transportme Passenger",
        images: [
            "/images/projects/transportme-passenger.webp",
            "/images/projects/transportme-passenger-map.webp",
        ],
        summary:
            "Ứng dụng hành khách theo dõi xe buýt realtime trên bản đồ, quản lý điểm dừng và nhận thông báo vận hành từ nhà khai thác.",
        result:
            "Giảm thời gian chờ cảm nhận của hành khách nhờ GPS gần realtime và trải nghiệm map rõ ràng trên thiết bị di động.",
        stack: "React Native, Google Maps, Push Notification",
    },
    {
        name: "QUALEE onboarding & engagement",
        industry: "HR Tech · Onboarding & gắn kết nhân sự",
        image: "/images/projects/qualee-onboarding.webp",
        imageAlt: "Màn hình Home onboarding và pending actions của QUALEE",
        images: [
            "/images/projects/qualee-onboarding.webp",
            "/images/projects/qualee-engagement.webp",
        ],
        summary:
            "App mobile giúp nhân sự hoàn thành hành trình onboarding, theo dõi pending actions và đo lường gắn kết (eNPS) ngay trên điện thoại.",
        result:
            "Chuẩn hóa trải nghiệm nhân viên mới: hoàn thành journey nhanh hơn và tăng tỷ lệ hoàn tất bước onboarding trên mobile.",
        stack: "React Native, REST API, Analytics",
    },
    {
        name: "UniScore - Tỷ Số Trực Tiếp",
        industry: "Sports · Live score & thống kê trận đấu",
        image: "/images/projects/uniscore-fast-score.webp",
        imageAlt: "Màn hình danh sách tỷ số trực tiếp World Cup của UniScore",
        images: [
            "/images/projects/uniscore-fast-score.webp",
            "/images/projects/uniscore-live-match.webp",
        ],
        summary:
            "Ứng dụng xem tỷ số trực tiếp, lịch thi đấu, thống kê trận và cập nhật live match realtime cho người hâm mộ thể thao.",
        result:
            "Người dùng theo dõi trận đấu nhanh hơn TV nhờ push goal/card và giao diện live data tối ưu trên mobile.",
        stack: "Flutter, WebSocket, Push Notification",
    },
];

const packageServices = [
    {
        id: "landing-page",
        title: "Landing page",
        priceVnd: 1_500_000,
        discountPercent: 5,
        features: [
            "Phát triển trên nền tảng Wordpress",
            "Tối ưu SEO",
            "Hỗ trợ 24/7",
            "Bảo hành 3 tháng",
            "Tặng tên miền năm đầu",
        ],
    },
    {
        id: "website-doanh-nghiep",
        title: "Website doanh nghiệp",
        priceVnd: 5_000_000,
        discountPercent: 10,
        features: [
            "Phát triển trên nền tảng Wordpress",
            "Tối ưu SEO",
            "Hỗ trợ 24/7",
            "Bảo hành 3 tháng",
            "Tặng tên miền năm đầu",
        ],
    },
    {
        id: "website-theo-yeu-cau",
        title: "Website theo yêu cầu",
        discountPercent: 0,
        features: [
            "Phát triển trên nền tảng Wordpress",
            "Tối ưu SEO",
            "Hỗ trợ 24/7",
            "Bảo hành tối thiểu 3 tháng",
            "Tặng tên miền năm đầu",
        ],
    },
    {
        id: "web-application",
        title: "Phát triển web application",
        discountPercent: 0,
        features: [
            "Phát triển với công nghệ (Nextjs, Laravel,...)",
            "Tối ưu hiệu năng",
            "Hỗ trợ 24/7",
            "Bảo hành tối thiểu 3 tháng",
            "Tặng tên miền năm đầu",
        ],
    },
    {
        id: "mobile-app",
        title: "Phát triển Mobile App",
        discountPercent: 0,
        features: [
            "Phát triển iOS & Android (React Native, Flutter,...)",
            "UI/UX mobile-first và tối ưu hiệu năng",
            "Hỗ trợ submit App Store / Google Play",
            "Bảo hành tối thiểu 3 tháng",
            "Hỗ trợ kỹ thuật 24/7",
        ],
    },
];

const productCategories = [
    {
        value: "plugin-wordpress",
        name: "Plugin Wordpress",
    },
];

const productTags = ["Plugin", "Wordpress", "Website wordpress", "Plugin Pro", "Plugin Free"];

const products = [
    {
        name: "Cu Dem - Float Button",
        slug: "cu-dem-float-button",
        priceVnd: 0,
        promotionPercent: 0,
        category: "plugin-wordpress",
        tags: ["Plugin Free", "Wordpress", "Plugin"],
        images: ["/images/products/cu-dem-float-button.png","/images/products/cu-dem-float-button-pro.png"],
        count: 100,
        description:
            "Plugin tạo nút nổi liên hệ nhanh cho website Wordpress, phù hợp để gom các kênh gọi điện, chat và mạng xã hội vào một vị trí dễ thao tác.",
    },
    {
        name: "Cu Dem - Float Button Pro",
        slug: "cu-dem-float-button-pro",
        priceVnd: 499_000,
        promotionPercent: 20,
        category: "plugin-wordpress",
        tags: ["Plugin Pro", "Wordpress", "Plugin"],
        images: ["/images/products/cu-dem-float-button.png","/images/products/cu-dem-float-button-pro.png"],
        count: 79,
        description:
            "Bản Pro mở rộng khả năng tuỳ biến giao diện, tối ưu CTA và cấu hình nâng cao cho các website Wordpress cần chuyển đổi tốt hơn.",
    },
];

export {
    services,
    projects,
    websiteProjects,
    webApplicationProjects,
    mobileAppProjects,
    packageServices,
    productCategories,
    productTags,
    products,
};
