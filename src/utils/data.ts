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
];

const websiteProjects = [
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
        name: "Hack Game",
        industry: "Bán account game",
        image: "/images/projects/hackgame.png",
        imageAlt: "Ảnh đại diện dự án Hack Game",
        summary:
            "Website thương mại điện tử chuyên bán account game với danh mục sản phẩm rõ ràng, lọc theo tựa game và mức rank.",
        result:
            "Tăng 29% tỷ lệ hoàn tất đơn hàng nhờ tối ưu quy trình mua và thanh toán nhanh.",
        stack: "WordPress, WooCommerce, Cloudflare",
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
];

export {
    services,
    projects,
    websiteProjects,
    webApplicationProjects,
    packageServices,
};
