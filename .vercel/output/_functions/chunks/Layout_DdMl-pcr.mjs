import { e as createComponent, m as maybeRenderHead, n as renderSlot, r as renderTemplate, g as addAttribute, h as createAstro, k as renderComponent, u as unescapeHTML, l as Fragment, p as renderHead, o as renderScript } from './astro/server_C3auuEWL.mjs';
import 'piccolore';
import 'clsx';
import { a as app } from './app_BQwKVvaU.mjs';
/* empty css                            */

const $$GroupFooterNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-8 h-max"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/blocks/GroupFooterNav.astro", void 0);

const $$Astro$5 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Container;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/shared/Container.astro", void 0);

const $$Astro$4 = createAstro();
const $$FooterNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FooterNav;
  const { title, navItems } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="space-y-6"> <h2 class="capitalze font-semibold text-heading-1 text-xl"> ${title} </h2> <ul class="space-y-3 font-medium md:text-lg text-heading-3"> ${navItems.map((navItem) => renderTemplate`<li> <a${addAttribute(navItem.itemLink, "href")} class="transition hover:text-primary"> ${navItem.itemText} </a> </li>`)} </ul> </nav>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/shared/FooterNav.astro", void 0);

const $$Astro$3 = createAstro();
const $$Paragraph = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`md:text-lg text-heading-3 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/shared/Paragraph.astro", void 0);

const services = [
  {
    slug: "website-doanh-nghiep",
    title: "Thiết kế website doanh nghiệp",
    description: "Xây dựng website chuyên nghiệp theo bộ nhận diện thương hiệu, bố cục rõ ràng và trải nghiệm người dùng tối ưu trên mọi thiết bị.",
    tagline: "Chúng tôi làm cổng thông tin số của thương hiệu: rõ cấu trúc trang con, nhất quán hình ảnh và sẵn sàng đón lưu lượng từ chiến dịch quảng cáo và SEO.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.5h16.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75z" /> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 19.5h7.5" />
        </svg>`,
    benefits: [
      "Mạch nhận diện thương hiệu thống nhất từ màu sắc, font chữ đến bố cục section.",
      "Tối ưu UX cho người tìm hiểu sản phẩm và liên hệ với nhân sự chủ đạo của doanh nghiệp.",
      "Tốc độ tải trang được xử lý từ khâu prototype, không phải “vá” sau live.",
      "Chuẩn SEO on-page: heading, chiến lược landing nội bộ và snippet thân thiện SERP.",
      "Kiến trúc CMS gọn để nhóm marketing tự nhập tin tức, dự án và tài liệu mà không cần chỉnh HTML.",
      "Responsive chuẩn thiết bị từ mobile đầu tay tới ultrawide, test trực tiếp trước bàn giao."
    ],
    deliverables: [
      "Brief & chiến lược sơ bộ IA (thông tin chính, menu, luồng người dùng đề xuất).",
      "Thiết kế Figma các key page (trang chủ, giới thiệu, dịch vụ/sản phẩm, liên hệ).",
      "Phát triển front/back theo chồng WordPress hoặc headless đã thống nhất.",
      "Nhập dữ liệu mẫu, hình ảnh nén và cấu hình form/email thông báo.",
      "Bàn giao tài liệu vận hành, backup và một buổi training ngắn cho đội nội bộ."
    ],
    processSteps: [
      "Khảo sát mục tiêu và phân vai trò từng loại khách vào web.",
      "Thử nghiệm wireframe và phản biện cùng chủ đầu tư trước khi vào đồ họa.",
      "Lập trình, nội dung thử và kiểm thử QA cross-browser/device.",
      "Go-live và theo dõi tối ưu trong giai đoạn bảo hành."
    ],
    idealFor: "Doanh nghiệp vừa và nhỏ, startup B2B, nhà máy – xưởng cần nâng tầm uy tín và thuần đường hỗ trợ bán hoặc tuyển dụng digitized."
  },
  {
    slug: "landing-page-chuyen-doi",
    title: "Thiết kế landing page chuyển đổi",
    description: "Tạo landing page tập trung vào mục tiêu quảng cáo, nội dung thuyết phục và CTA rõ ràng để tăng tỷ lệ đăng ký và chốt đơn.",
    tagline: "Landing page chỉ có một đích: một hành động và một thông điệp được tiếp cận từ trên xuống dưới mượt và đo được.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
        </svg>`,
    benefits: [
      "Cấu trúc AIDA / PAS phù hợp funnel quảng cáo của bạn, không chuyển hướng rời mục tiêu khởi điểm.",
      "Đoạn lead form tối ưu UX: giảm trường bắt buộc, trust badge gần CTA và mobile sticky CTA.",
      "Thống nhất message với UTM và creative quảng cáo để tránh discrepancy.",
      "Tối ưu LCP và CLS trong phần Above the Fold trước khi chi tiêu media.",
      "Theo dõi đổi sự kiện bằng Google Tag hoặc pixel bạn chỉ định.",
      "Biến thể block social proof và pricing table xoay nhẹ theo từng chiến dịch tái nhắm mục tiêu."
    ],
    deliverables: [
      "Workshop chiến dịch: offer, objection chính, proof point và KPI.",
      "Bản prototype Figma chia section rõ chỗ test A/B trong tương lai.",
      "Landing page được code production với các CTA được tag chuẩn measurement.",
      "Form kết nối email/marketing automation bạn chỉ định.",
      "Checklist QA trước chạy quảng cáo và tài liệu chuyển giao chỉnh wording sau live."
    ],
    processSteps: [
      "Làm rõ KPI (lead/booking/demo) và dữ liệu audience.",
      "Thiết kế content block + nhịp scrolling trên một trục chính.",
      "Lập trình, gắn tracking và rehearsal trên staging.",
      "Bàn giao, document heatmap và lịch tối ưu hai tuần đầu live."
    ],
    idealFor: "Đội growth marketing và founder chạy funnel quảng cáo có ngân sách media cần tăng tỉ lệ chuyển đổi nhanh, có thể mở rộng chiến dịch tái nhắm."
  },
  {
    slug: "website-ban-hang",
    title: "Thiết kế website bán hàng",
    description: "Triển khai website thương mại điện tử với trang sản phẩm, giỏ hàng và quy trình đặt hàng mượt mà giúp tối đa doanh thu online.",
    tagline: "Chúng tôi làm chợ online gọn của bạn: kho dữ liệu sản phẩm, giỏ hàng vững và hành trình đặt hàng dễ theo cho khách và admin.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386a1.5 1.5 0 011.458 1.147l.489 1.956m0 0L6.75 12h10.5l1.5-6H5.583z" /> <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 19.5a.75.75 0 100 1.5.75.75 0 000-1.5zm9 0a.75.75 0 100 1.5.75.75 0 000-1.5z" />
        </svg>`,
    benefits: [
      "Quản lý sản phẩm, nhóm SKU, voucher và VAT rõ trong dashboard.",
      "Thanh toán COD, chuyển kho và cổng trực tuyến tích hợp theo hướng dẫn acquirer bạn có.",
      "UX giỏ hàng – checkout giảm bỏ vỏ và lỗi mobile.",
      "Trang chủ và collection chuẩn SEO cho long-tail SKU.",
      "Tốc độ catalog list và caching cho traffic flash sale có kế hoạch.",
      "Theo vết đơn: email transactional + notification admin quen thuộc kế toán của bạn."
    ],
    deliverables: [
      "Wireframe các flow: danh mục, chi tiết, giỏ, checkout và tài khoản khách (nếu cần).",
      "Theme WooCommerce/custom stack đã chỉnh mobile-first và dark mode-ready nếu bạn có yêu cầu.",
      "Đồng bộ phí vận chuyển theo tier khu vực bạn cung cấp.",
      "Import sản phẩm nhập liệu bằng CSV seed + hình ảnh nén và alt text chuẩn.",
      "Training quản trị và template email transaction base."
    ],
    processSteps: [
      "Làm rõ catalog SKU, kho và chính sách đơn/refund hiện tại.",
      "Thiết kế UI kênh bán và flow thanh toán & vận chuyển.",
      "Lập trình, stress test nhóm sản phẩm và kịch bản promotion.",
      "Go-live và theo dõi cart abandonment / performance tuần đầu."
    ],
    idealFor: "Thương hiệu bán retail, FMCG và D2C cần nền tảng ecommerce trên WordPress có thể bảo trì nội bộ sau bàn giao."
  }
];
const projects = [
  {
    title: "Website",
    description: "Website chuyên nghiệp, tối ưu SEO và chuyển đổi",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386a1.5 1.5 0 011.458 1.147l.489 1.956m0 0L6.75 12h10.5l1.5-6H5.583z" /> <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 19.5a.75.75 0 100 1.5.75.75 0 000-1.5zm9 0a.75.75 0 100 1.5.75.75 0 000-1.5z" />
        </svg>`
  },
  {
    title: "Web application",
    description: "Web application là ứng dụng web được thiết kế để hoạt động trên môi trường web, có thể truy cập từ bất kỳ thiết bị nào có kết nối internet.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386a1.5 1.5 0 011.458 1.147l.489 1.956m0 0L6.75 12h10.5l1.5-6H5.583z" /> <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 19.5a.75.75 0 100 1.5.75.75 0 000-1.5zm9 0a.75.75 0 100 1.5.75.75 0 000-1.5z" />
        </svg>`
  }
];
const websiteProjects = [
  {
    name: "Future Accounting",
    industry: "Kế toán",
    image: "/images/projects/future-accounting.svg",
    imageAlt: "Ảnh đại diện dự án Future Accounting",
    summary: "Website dịch vụ kế toán giúp doanh nghiệp dễ chọn gói dịch vụ, gửi yêu cầu tư vấn và theo dõi lịch hẹn làm việc.",
    result: "Tăng 37% số lượt đăng ký tư vấn kế toán trong 2 tháng đầu triển khai.",
    stack: "Astro, TailwindCSS, Headless CMS"
  },
  {
    name: "Hack Game",
    industry: "Bán account game",
    image: "/images/projects/hack-game.svg",
    imageAlt: "Ảnh đại diện dự án Hack Game",
    summary: "Website thương mại điện tử chuyên bán account game với danh mục sản phẩm rõ ràng, lọc theo tựa game và mức rank.",
    result: "Tăng 29% tỷ lệ hoàn tất đơn hàng nhờ tối ưu quy trình mua và thanh toán nhanh.",
    stack: "WordPress, WooCommerce, Cloudflare"
  },
  {
    name: "Ốc bươu vàng",
    industry: "Bán account Netflix",
    image: "/images/projects/oc-buou-vang.svg",
    imageAlt: "Ảnh đại diện dự án Ốc bươu vàng",
    summary: "Xây dựng website bán account Netflix theo gói thời hạn, quản lý tồn kho account và tự động gửi thông tin sau thanh toán.",
    result: "Giảm hơn 50% thao tác xử lý đơn thủ công, tăng tốc độ giao account cho khách trong ngày.",
    stack: "Next.js, Supabase, Stripe"
  },
  {
    name: "Dạy lái xe 365",
    industry: "Đăng ký học lái xe",
    image: "/images/projects/day-lai-xe-365.svg",
    imageAlt: "Ảnh đại diện dự án Dạy lái xe 365",
    summary: "Website tuyển sinh khóa học lái xe với lịch khai giảng, biểu phí minh bạch và form đăng ký theo khu vực.",
    result: "Tăng 41% lượng đăng ký khóa học online và giảm tỉ lệ bỏ form nhờ tối ưu mobile.",
    stack: "Astro, Node.js, PostgreSQL"
  }
];
const webApplicationProjects = [
  {
    name: "U-Work",
    industry: "CRM · Chấm công online",
    image: "/images/projects/u-work.svg",
    imageAlt: "Ảnh đại diện dự án U-Work",
    summary: "Nền tảng CRM tích hợp chấm công online, quản lý nhân sự, theo dõi hiệu suất và lịch sử chăm sóc khách hàng theo từng đội.",
    result: "Giảm 52% thao tác chấm công thủ công, chuẩn hóa pipeline CRM và rút ngắn thời gian chốt báo cáo tuần.",
    stack: "Next.js, NestJS, PostgreSQL"
  },
  {
    name: "Edutify",
    industry: "EdTech · E-Learning",
    image: "/images/projects/edutify.svg",
    imageAlt: "Ảnh đại diện dự án Edutify",
    summary: "Hệ thống E-Learning cho quản lý khóa học, bài giảng video, bài kiểm tra và theo dõi tiến độ học viên theo lớp.",
    result: "Tăng 28% tỷ lệ hoàn thành khóa học và giảm 45% thời gian quản trị lớp cho đội vận hành đào tạo.",
    stack: "React, Laravel, MySQL"
  }
];
const packageServices = [
  {
    id: "landing-page",
    title: "Landing page",
    priceVnd: 15e5,
    discountPercent: 5,
    features: [
      "Phát triển trên nền tảng Wordpress",
      "Tối ưu SEO",
      "Hỗ trợ 24/7",
      "Bảo hành 3 tháng",
      "Tặng tên miền năm đầu"
    ]
  },
  {
    id: "website-doanh-nghiep",
    title: "Website doanh nghiệp",
    priceVnd: 5e6,
    discountPercent: 10,
    features: [
      "Phát triển trên nền tảng Wordpress",
      "Tối ưu SEO",
      "Hỗ trợ 24/7",
      "Bảo hành 3 tháng",
      "Tặng tên miền năm đầu"
    ]
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
      "Tặng tên miền năm đầu"
    ]
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
      "Tặng tên miền năm đầu"
    ]
  }
];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerNav1 = services.map((s) => ({
    itemText: s.title,
    itemLink: `/services/${s.slug}`
  }));
  const footerSupport = [
    {
      itemText: "B\xE1o gi\xE1 nhanh",
      itemLink: "/packages"
    },
    {
      itemText: "Quy tr\xECnh tri\u1EC3n khai",
      itemLink: "/process-deployment"
    },
    {
      itemText: "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p",
      itemLink: "/faqs"
    },
    {
      itemText: "Li\xEAn h\u1EC7 t\u01B0 v\u1EA5n",
      itemLink: "/contact"
    }
  ];
  const footerCompany = [
    {
      itemText: "V\u1EC1 ch\xFAng t\xF4i",
      itemLink: "/about-us"
    },
    {
      itemText: "D\u1EF1 \xE1n",
      itemLink: "/projects"
    },
    {
      itemText: "\u0110\u1ED1i t\xE1c & kh\xE1ch h\xE0ng",
      itemLink: "/#partners"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16"></div> <footer class="relative bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 dark:to-transparent pt-28 rounded-t-3xl"> <div class="absolute right-0 top-0 h-full w-full flex justify-end"> <div class="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl"> <span class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span> </div> </div> <div class="absolute left-0 bottom-0 h-full w-full flex items-end"> <div class="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl"> <span class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span> </div> </div> ${renderComponent($$result, "Container", $$Container, { "className": "pb-8 relative overflow-auto" }, { "default": ($$result2) => renderTemplate` <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-2xl opacity-20 w-24 h-16 sm:w-48 sm:h-36 rounded-full rotate-12 skew-x-6 bg-primary"></span> <div class="grid grid-cols-2 lg:grid-cols-3 lg:items-stretch gap-8 relative"> <div class="col-span-2 lg:col-span-1 h-auto flex flex-col"> <div class="h-full"> <a href="/" class="relative flex items-center gap-3"> <img${addAttribute(app.logo, "src")}${addAttribute(app.name, "alt")} class="w-7 h-7"> <div class="inline-flex text-lg font-semibold text-heading-1"> ${app.name} </div> </a> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`${app.footer.description}` })} </div> <!-- social links --> <div class="min-h-max flex items-center gap-4 text-heading-3 mt-8"> ${Object.values(app.footer.socials).map((social) => renderTemplate`<a${addAttribute(social.url, "href")} target="_blank" class="transition hover:text-heading-1 hover:scale-105 flex items-center gap-2"> ${renderSlot($$result2, $$slots["default"], renderTemplate`${unescapeHTML(social.icon)}`)} <span class="text-heading-3">${social.name}</span> </a>`)} </div> </div> ${renderComponent($$result2, "GroupFooterNav", $$GroupFooterNav, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "C\xF4ng ty", "navItems": footerCompany })} ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "D\u1ECBch v\u1EE5", "navItems": footerNav1 })} ` })} ${renderComponent($$result2, "GroupFooterNav", $$GroupFooterNav, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "H\u1ED7 tr\u1EE3", "navItems": footerSupport })} ` })} </div> ` })} <div class="py-2 relative"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex justify-between items-center gap-6 md:text-lg text-heading-3"> <div>
&copy; <span id="year">${(/* @__PURE__ */ new Date()).getFullYear()}</span> ${app.name}. ${app.footer.copyright} </div> <div class="text-right max-md:text-left">
Giao diện website phát triển bởi${" "} <span class="font-semibold text-heading-2">${app.footer.author}</span> </div> </div> ` })} </div> </footer>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/elements/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$BtnLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BtnLink;
  const { href, text, className, variant, target } = Astro2.props;
  const getThemeStyle = (variant2) => {
    if (variant2 === "primary") {
      return "bg-primary border-transparent relative after:bg-[#172554] hover:border-[#172554]";
    }
    return "text-primary";
  };
  const getTextColor = (variant2) => {
    if (variant2 === "primary") {
      return "text-white";
    }
    return "text-primary";
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(target, "target")}${addAttribute(`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                    ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`, "class")}> <span${addAttribute(`relative ${getTextColor(variant)} z-10`, "class")}> ${text} </span> </a>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/shared/BtnLink.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navitem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navitem;
  const { href, text, children, submenuInstanceId, target } = Astro2.props;
  const hasSub = !!(children && children.length > 0);
  const slug = text.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "").replace(/\s+/g, "-").replace(/[^a-z0-9-]/gi, "");
  const panelId = hasSub ? submenuInstanceId ? `nav-submenu-${submenuInstanceId}-${slug}` : `nav-submenu-${slug}` : void 0;
  const chevronClass = "size-[1.125rem] shrink-0 opacity-70 transition-transform duration-200";
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["w-full lg:w-auto", hasSub && "nav-submenu-parent relative"], "class:list")}> ${hasSub ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(href, "href")}${addAttribute(target, "target")} data-desktop-nav-trigger class="relative z-[1] hidden items-center gap-1 whitespace-nowrap py-3 lg:px-3 text-base font-medium text-heading-2 duration-300 ease-linear hover:text-primary lg:inline-flex"> ${text} <svg${addAttribute([chevronClass, "nav-submenu-chevron-desktop"], "class:list")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path> </svg> </a> <button type="button" class="flex w-full min-h-[44px] touch-manipulation items-center justify-between gap-2 rounded-lg py-3 text-left text-base font-medium text-heading-2 lg:hidden" data-nav-submenu-toggle aria-expanded="false"${addAttribute(panelId, "aria-controls")}> <span>${text}</span> <svg${addAttribute([chevronClass, "nav-submenu-chevron"], "class:list")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path> </svg> </button> <ul${addAttribute(panelId, "id")} role="menu" data-nav-submenu-panel aria-hidden="true"${addAttribute([
    "nav-submenu-panel",
    "z-[9999] lg:absolute lg:left-0 lg:top-full lg:min-w-[13rem] lg:pt-2 lg:bg-white dark:bg-box-bg lg:shadow-xl",
    "lg:rounded-xl lg:border lg:border-box-border lg:bg-body dark:bg-box-bg lg:py-2 lg:shadow-xl",
    "max-lg:hidden max-lg:w-full max-lg:flex-col max-lg:gap-1 max-lg:overflow-hidden max-lg:border-l max-lg:border-box-border/50 max-lg:pl-4 max-lg:pt-1",
    "max-lg:data-[open=true]:flex"
  ], "class:list")}> ${children.map((c) => renderTemplate`<li role="none"> <a role="menuitem"${addAttribute(c.href, "href")} class="block rounded-md px-3 py-2 text-base font-medium text-heading-2 duration-200 ease-linear hover:bg-box-bg hover:text-primary lg:whitespace-nowrap max-lg:opacity-95"> ${c.text} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute(href, "href")}${addAttribute(target, "target")} data-desktop-nav-trigger class="relative z-[1] block py-3 lg:px-3 text-base font-medium text-heading-2 duration-300 ease-linear hover:text-primary lg:inline-block"> ${text} </a>`} </li>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/shared/Navitem.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      href: "/",
      text: "Trang ch\u1EE7"
    },
    {
      href: "/services",
      text: "D\u1ECBch v\u1EE5",
      children: services.map((s) => ({
        href: `/services/${s.slug}`,
        text: s.title
      }))
    },
    {
      href: "/packages",
      text: "Gi\xE1 d\u1ECBch v\u1EE5"
    },
    {
      href: "/projects",
      text: "D\u1EF1 \xE1n",
      children: [
        { href: "/projects/website", text: projects[0].title },
        { href: "/projects/web-application", text: projects[1].title }
      ]
    },
    {
      href: "/about-us",
      text: "V\u1EC1 ch\xFAng t\xF4i"
    },
    {
      href: "https://the-gioi-kho.vercel.app",
      text: "C\u1EEDa h\xE0ng",
      target: "_blank"
    }
  ];
  return renderTemplate(_a || (_a = __template(["", '<header data-site-header class="nav-header absolute inset-x-0 top-0 z-50 w-full"> ', ' </header> <script>\n  (function () {\n    const header = document.querySelector("[data-site-header]");\n    if (!header) return;\n    const PINNED = "nav-header--pinned";\n    const THRESHOLD = 40;\n    function sync() {\n      if (window.scrollY > THRESHOLD) header.classList.add(PINNED);\n      else header.classList.remove(PINNED);\n    }\n    sync();\n    window.addEventListener("scroll", sync, { passive: true });\n  })();\n\n  document.addEventListener("DOMContentLoaded", function () {\n    document\n      .querySelectorAll("[data-nav-submenu-toggle]")\n      .forEach(function (btn) {\n        btn.addEventListener("click", function (e) {\n          e.stopPropagation();\n          const id = btn.getAttribute("aria-controls");\n          if (!id) return;\n          const panel = document.getElementById(id);\n          const expanded = btn.getAttribute("aria-expanded") === "true";\n          const nextOpen = !expanded;\n          btn.setAttribute("aria-expanded", nextOpen ? "true" : "false");\n          if (panel) {\n            if (nextOpen) {\n              panel.setAttribute("data-open", "true");\n              panel.setAttribute("aria-hidden", "false");\n            } else {\n              panel.removeAttribute("data-open");\n              panel.setAttribute("aria-hidden", "true");\n            }\n          }\n        });\n      });\n\n    const desktopNav = document.querySelector("[data-desktop-nav]");\n    const indicator = desktopNav?.querySelector("[data-desktop-nav-indicator]");\n\n    if (desktopNav && indicator) {\n      const triggers = Array.from(\n        desktopNav.querySelectorAll("[data-desktop-nav-trigger]"),\n      );\n      const parentByChildHref = new Map();\n\n      if (triggers.length > 0) {\n        desktopNav\n          .querySelectorAll(".nav-submenu-parent")\n          .forEach((parentItem) => {\n            const parentTrigger = parentItem.querySelector(\n              "[data-desktop-nav-trigger]",\n            );\n            if (!parentTrigger) return;\n            parentItem\n              .querySelectorAll(".nav-submenu-panel a[href]")\n              .forEach((subLink) => {\n                const href = subLink.getAttribute("href");\n                if (href) parentByChildHref.set(href, parentTrigger);\n              });\n          });\n\n        const setIndicator = (target) => {\n          const navRect = desktopNav.getBoundingClientRect();\n          const targetRect = target.getBoundingClientRect();\n          const left = targetRect.left - navRect.left + desktopNav.scrollLeft;\n          const top = targetRect.top - navRect.top + desktopNav.scrollTop;\n          indicator.style.width = `${target.offsetWidth}px`;\n          indicator.style.height = `${target.offsetHeight}px`;\n          indicator.style.transform = `translate(${left}px, ${top}px)`;\n          indicator.style.opacity = "1";\n        };\n\n        const normalizePath = (path) =>\n          (path || "/").replace(/\\/+$/, "") || "/";\n\n        const resolveCurrentByView = () => {\n          const currentHash = window.location.hash;\n          if (currentHash && parentByChildHref.has(currentHash)) {\n            return parentByChildHref.get(currentHash);\n          }\n\n          const byHash = triggers.filter((link) => {\n            const href = link.getAttribute("href") || "";\n            return href.startsWith("#") && href.length > 1;\n          });\n          const offsetY = 120;\n          let activeHash = null;\n\n          byHash.forEach((link) => {\n            const href = link.getAttribute("href") || "";\n            const section = document.querySelector(href);\n            if (!section) return;\n            const rect = section.getBoundingClientRect();\n            if (rect.top <= offsetY && rect.bottom > offsetY) {\n              activeHash = link;\n            }\n          });\n\n          if (activeHash) return activeHash;\n\n          const currentPath = normalizePath(window.location.pathname);\n          const parentByPath = Array.from(parentByChildHref.entries()).find(\n            ([href]) =>\n              href.startsWith("/") && normalizePath(href) === currentPath,\n          );\n          if (parentByPath) return parentByPath[1];\n\n          return (\n            triggers.find((link) => {\n              const href = link.getAttribute("href") || "";\n              return (\n                href.startsWith("/") && normalizePath(href) === currentPath\n              );\n            }) ||\n            triggers.find(\n              (link) => link.getAttribute("href") === currentHash,\n            ) ||\n            triggers[0]\n          );\n        };\n\n        const markActive = (target) => {\n          triggers.forEach((link) => {\n            const isActive = link === target;\n            if (isActive) {\n              link.setAttribute("aria-current", "page");\n              link.classList.add("desktop-nav-link-active");\n            } else {\n              link.removeAttribute("aria-current");\n              link.classList.remove("desktop-nav-link-active");\n            }\n          });\n        };\n\n        let current = resolveCurrentByView();\n        if (current) {\n          markActive(current);\n          setIndicator(current);\n        }\n\n        desktopNav.addEventListener("mouseover", (event) => {\n          const trigger = event.target.closest("[data-desktop-nav-trigger]");\n          if (!trigger || !desktopNav.contains(trigger)) return;\n          setIndicator(trigger);\n        });\n\n        desktopNav.addEventListener("focusin", (event) => {\n          const trigger = event.target.closest("[data-desktop-nav-trigger]");\n          if (!trigger || !desktopNav.contains(trigger)) return;\n          setIndicator(trigger);\n        });\n\n        desktopNav.addEventListener("click", (event) => {\n          const trigger = event.target.closest("[data-desktop-nav-trigger]");\n          if (!trigger || !desktopNav.contains(trigger)) return;\n          current = trigger;\n          markActive(trigger);\n          setIndicator(trigger);\n        });\n\n        desktopNav.addEventListener("mouseleave", () => {\n          if (current) setIndicator(current);\n        });\n\n        window.addEventListener(\n          "scroll",\n          () => {\n            current = resolveCurrentByView();\n            if (current) {\n              markActive(current);\n              setIndicator(current);\n            }\n          },\n          { passive: true },\n        );\n\n        window.addEventListener("hashchange", () => {\n          current = resolveCurrentByView();\n          if (current) {\n            markActive(current);\n            setIndicator(current);\n          }\n        });\n\n        window.addEventListener("resize", () => {\n          current = resolveCurrentByView();\n          if (current) {\n            markActive(current);\n            setIndicator(current);\n          }\n        });\n      }\n    }\n  });\n<\/script> '], ["", '<header data-site-header class="nav-header absolute inset-x-0 top-0 z-50 w-full"> ', ' </header> <script>\n  (function () {\n    const header = document.querySelector("[data-site-header]");\n    if (!header) return;\n    const PINNED = "nav-header--pinned";\n    const THRESHOLD = 40;\n    function sync() {\n      if (window.scrollY > THRESHOLD) header.classList.add(PINNED);\n      else header.classList.remove(PINNED);\n    }\n    sync();\n    window.addEventListener("scroll", sync, { passive: true });\n  })();\n\n  document.addEventListener("DOMContentLoaded", function () {\n    document\n      .querySelectorAll("[data-nav-submenu-toggle]")\n      .forEach(function (btn) {\n        btn.addEventListener("click", function (e) {\n          e.stopPropagation();\n          const id = btn.getAttribute("aria-controls");\n          if (!id) return;\n          const panel = document.getElementById(id);\n          const expanded = btn.getAttribute("aria-expanded") === "true";\n          const nextOpen = !expanded;\n          btn.setAttribute("aria-expanded", nextOpen ? "true" : "false");\n          if (panel) {\n            if (nextOpen) {\n              panel.setAttribute("data-open", "true");\n              panel.setAttribute("aria-hidden", "false");\n            } else {\n              panel.removeAttribute("data-open");\n              panel.setAttribute("aria-hidden", "true");\n            }\n          }\n        });\n      });\n\n    const desktopNav = document.querySelector("[data-desktop-nav]");\n    const indicator = desktopNav?.querySelector("[data-desktop-nav-indicator]");\n\n    if (desktopNav && indicator) {\n      const triggers = Array.from(\n        desktopNav.querySelectorAll("[data-desktop-nav-trigger]"),\n      );\n      const parentByChildHref = new Map();\n\n      if (triggers.length > 0) {\n        desktopNav\n          .querySelectorAll(".nav-submenu-parent")\n          .forEach((parentItem) => {\n            const parentTrigger = parentItem.querySelector(\n              "[data-desktop-nav-trigger]",\n            );\n            if (!parentTrigger) return;\n            parentItem\n              .querySelectorAll(".nav-submenu-panel a[href]")\n              .forEach((subLink) => {\n                const href = subLink.getAttribute("href");\n                if (href) parentByChildHref.set(href, parentTrigger);\n              });\n          });\n\n        const setIndicator = (target) => {\n          const navRect = desktopNav.getBoundingClientRect();\n          const targetRect = target.getBoundingClientRect();\n          const left = targetRect.left - navRect.left + desktopNav.scrollLeft;\n          const top = targetRect.top - navRect.top + desktopNav.scrollTop;\n          indicator.style.width = \\`\\${target.offsetWidth}px\\`;\n          indicator.style.height = \\`\\${target.offsetHeight}px\\`;\n          indicator.style.transform = \\`translate(\\${left}px, \\${top}px)\\`;\n          indicator.style.opacity = "1";\n        };\n\n        const normalizePath = (path) =>\n          (path || "/").replace(/\\\\/+$/, "") || "/";\n\n        const resolveCurrentByView = () => {\n          const currentHash = window.location.hash;\n          if (currentHash && parentByChildHref.has(currentHash)) {\n            return parentByChildHref.get(currentHash);\n          }\n\n          const byHash = triggers.filter((link) => {\n            const href = link.getAttribute("href") || "";\n            return href.startsWith("#") && href.length > 1;\n          });\n          const offsetY = 120;\n          let activeHash = null;\n\n          byHash.forEach((link) => {\n            const href = link.getAttribute("href") || "";\n            const section = document.querySelector(href);\n            if (!section) return;\n            const rect = section.getBoundingClientRect();\n            if (rect.top <= offsetY && rect.bottom > offsetY) {\n              activeHash = link;\n            }\n          });\n\n          if (activeHash) return activeHash;\n\n          const currentPath = normalizePath(window.location.pathname);\n          const parentByPath = Array.from(parentByChildHref.entries()).find(\n            ([href]) =>\n              href.startsWith("/") && normalizePath(href) === currentPath,\n          );\n          if (parentByPath) return parentByPath[1];\n\n          return (\n            triggers.find((link) => {\n              const href = link.getAttribute("href") || "";\n              return (\n                href.startsWith("/") && normalizePath(href) === currentPath\n              );\n            }) ||\n            triggers.find(\n              (link) => link.getAttribute("href") === currentHash,\n            ) ||\n            triggers[0]\n          );\n        };\n\n        const markActive = (target) => {\n          triggers.forEach((link) => {\n            const isActive = link === target;\n            if (isActive) {\n              link.setAttribute("aria-current", "page");\n              link.classList.add("desktop-nav-link-active");\n            } else {\n              link.removeAttribute("aria-current");\n              link.classList.remove("desktop-nav-link-active");\n            }\n          });\n        };\n\n        let current = resolveCurrentByView();\n        if (current) {\n          markActive(current);\n          setIndicator(current);\n        }\n\n        desktopNav.addEventListener("mouseover", (event) => {\n          const trigger = event.target.closest("[data-desktop-nav-trigger]");\n          if (!trigger || !desktopNav.contains(trigger)) return;\n          setIndicator(trigger);\n        });\n\n        desktopNav.addEventListener("focusin", (event) => {\n          const trigger = event.target.closest("[data-desktop-nav-trigger]");\n          if (!trigger || !desktopNav.contains(trigger)) return;\n          setIndicator(trigger);\n        });\n\n        desktopNav.addEventListener("click", (event) => {\n          const trigger = event.target.closest("[data-desktop-nav-trigger]");\n          if (!trigger || !desktopNav.contains(trigger)) return;\n          current = trigger;\n          markActive(trigger);\n          setIndicator(trigger);\n        });\n\n        desktopNav.addEventListener("mouseleave", () => {\n          if (current) setIndicator(current);\n        });\n\n        window.addEventListener(\n          "scroll",\n          () => {\n            current = resolveCurrentByView();\n            if (current) {\n              markActive(current);\n              setIndicator(current);\n            }\n          },\n          { passive: true },\n        );\n\n        window.addEventListener("hashchange", () => {\n          current = resolveCurrentByView();\n          if (current) {\n            markActive(current);\n            setIndicator(current);\n          }\n        });\n\n        window.addEventListener("resize", () => {\n          current = resolveCurrentByView();\n          if (current) {\n            markActive(current);\n            setIndicator(current);\n          }\n        });\n      }\n    }\n  });\n<\/script> '])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, { "className": "nav-header-inner py-6 sm:py-6" }, { "default": ($$result2) => renderTemplate` <div data-nav-shell class="overflow-visible rounded-full border border-transparent px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out"> <nav class="w-full flex justify-between items-center gap-6 relative"> <!-- logo --> <div class="min-w-max inline-flex relative z-50"> <a href="/" class="relative flex items-center gap-3"> <img${addAttribute(app.logo, "src")}${addAttribute(app.name, "alt")} width="40" height="40"> <h1 class="inline-flex text-lg font-semibold text-heading-1"> ${app.name} </h1> </a> </div> <!-- desktop-only; overlay/drawer stay outside shell (backdrop-filter breaks fixed descendants) --> <div class="hidden lg:flex lg:flex-1 lg:min-w-0 lg:flex-row lg:justify-between lg:items-center lg:gap-x-4"> <ul data-desktop-nav class="relative z-[999] flex flex-wrap lg:flex-nowrap items-center gap-x-1 gap-y-2 text-lg text-heading-2 w-full lg:flex-1 lg:justify-center"> <span data-desktop-nav-indicator aria-hidden="true" class="desktop-nav-indicator"></span> ${navItems.map((item, i) => {
    return renderTemplate`${renderComponent($$result2, "Navitem", $$Navitem, { ...item, "submenuInstanceId": `d-${i}`, "target": item.target })}`;
  })} </ul> <div class="lg:min-w-max flex items-center sm:w-max"> ${renderComponent($$result2, "BtnLink", $$BtnLink, { "text": "Li\xEAn h\u1EC7", "href": "/contact", "className": "flex justify-center w-full sm:w-max", "variant": "primary" })} </div> </div> <div class="min-w-max flex items-center gap-x-3 relative z-50"> <button data-switch-theme class="outline-none flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border bg-transparent transition-[border-color,background-color,backdrop-filter] duration-300"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:flex hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path> </svg> <span class="sr-only">switch theme</span> </button> <button type="button" data-toggle-nav data-open-nav="false" aria-expanded="false" aria-controls="mobile-nav-drawer" class="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative"> <span id="line1" class="w-6 h-0.5 rounded-full bg-heading-2 transition-all duration-300 ease-linear"></span> <span id="line2" class="w-6 origin-center mt-1 h-0.5 rounded-full bg-heading-2 transition-all duration-300 ease-linear"></span> <span id="line3" class="w-6 mt-1 h-0.5 rounded-full bg-heading-2 transition-all duration-300 ease-linear"></span> <span class="sr-only">togglenav</span> </button> </div> </nav> </div>  <div data-nav-overlay aria-hidden="true" class="mobile-nav-overlay fixed inset-0 z-[9998] hidden lg:!hidden bg-box-bg/55 backdrop-blur-xl"></div> <div id="mobile-nav-drawer" data-navbar data-drawer-open="false" class="mobile-nav-drawer flex flex-col gap-y-8 gap-x-4 z-[9999] w-full max-lg:fixed max-lg:inset-0 max-lg:min-h-dvh max-lg:w-full max-lg:bg-body max-lg:px-6 max-lg:pt-[max(1.75rem,env(safe-area-inset-top))] max-lg:pb-10 max-lg:overflow-y-auto lg:hidden"> <div class="flex shrink-0 items-center justify-between gap-4 border-b border-box-border/40 pb-4 mb-2"> <a href="/" class="flex min-w-0 items-center gap-3"> <img${addAttribute(app.logo, "src")} alt="" width="40" height="40" class="size-10 shrink-0"> <span class="truncate text-lg font-semibold text-heading-1"> ${app.name} </span> </a> <button type="button" data-close-drawer class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-box-border bg-box-bg text-heading-2" aria-label="Đóng menu"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="h-5 w-5" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path> </svg> </button> </div> <ul class="flex flex-col gap-y-4 gap-x-3 text-lg text-heading-2 w-full px-0 pt-0 border-0"> ${navItems.map((item, i) => {
    return renderTemplate`${renderComponent($$result2, "Navitem", $$Navitem, { ...item, "submenuInstanceId": `m-${i}`, "target": item.target })}`;
  })} </ul> <div class="flex items-center sm:w-max w-full pt-2 border-t border-box-border/40"> ${renderComponent($$result2, "BtnLink", $$BtnLink, { "text": "Li\xEAn h\u1EC7", "href": "/contact", "className": "flex justify-center w-full sm:w-max", "variant": "primary" })} </div> </div> ` }));
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/elements/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, noindex = false } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/logos/logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(app.description, "content")}>${noindex && renderTemplate`<meta name="robots" content="noindex, follow">`}<title>${app.name} - ${title}</title><link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="overflow-hidden overflow-y-auto bg-body"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/Users/npttruong/projects/npt-project/nopete.com/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/Users/npttruong/projects/npt-project/nopete.com/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Container as a, $$BtnLink as b, $$Paragraph as c, websiteProjects as d, projects as e, packageServices as p, services as s, webApplicationProjects as w };
