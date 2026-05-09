import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C3auuEWL.mjs';
import 'piccolore';
/* empty css                                    */
import { $ as $$Layout, a as $$Container, c as $$Paragraph, b as $$BtnLink } from '../chunks/Layout_DdMl-pcr.mjs';
import { $ as $$Title } from '../chunks/Title_DuanUxA6.mjs';
import { $ as $$Info } from '../chunks/Info_BefPiGVV.mjs';
import { $ as $$CTA } from '../chunks/CTA_6qNFv4WB.mjs';
import { $ as $$ComtactForm } from '../chunks/ComtactForm_CBPtv-9l.mjs';
export { renderers } from '../renderers.mjs';

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "V\u1EC1 ch\xFAng t\xF4i" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex flex-col gap-y-20 md:gap-y-28 overflow-hidden pt-28 lg:pt-36 pb-12 md:pb-20"> <div aria-hidden="true" class="pointer-events-none fixed inset-x-0 top-0 -z-30 h-[min(80vh,600px)]"> <div class="absolute inset-0 bg-gradient-to-b from-primary/[0.09] via-primary/[0.03] dark:from-primary/[0.14] dark:via-primary/[0.05] to-transparent"></div> <div class="absolute left-[-12%] top-[10%] h-[clamp(260px,40vw,420px)] w-[clamp(260px,40vw,420px)] rounded-full bg-gradient-to-br from-teal-200/55 via-primary/22 to-transparent blur-3xl dark:from-teal-900/35 dark:via-primary/32"></div> <div class="absolute right-[-10%] top-[35%] h-[clamp(200px,32vw,360px)] w-[clamp(200px,32vw,360px)] rounded-full bg-gradient-to-tl from-orange-300/35 via-primary/18 to-transparent blur-3xl dark:from-orange-900/35"></div> </div> <section aria-labelledby="about-heading" class="relative"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <nav class="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm" aria-label="Breadcrumb"> <a href="/" class="rounded-full bg-box-bg/80 px-3 py-1 font-medium text-heading-3 shadow-sm ring-1 ring-box-border backdrop-blur-sm transition hover:text-primary hover:ring-primary/30 dark:bg-box-bg/60">Trang chủ</a> <span class="text-heading-3 opacity-60" aria-hidden="true">/</span> <span class="rounded-full bg-primary/12 px-3 py-1 font-semibold text-primary ring-1 ring-primary/25">Về chúng tôi</span> </nav> <header class="mt-10 max-w-3xl space-y-5"> <p class="inline-flex w-fit rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary ring-1 ring-primary/30 bg-white/65 dark:bg-box-bg/50 backdrop-blur-sm">
Nờ Pê Tê · Studio website &amp; chuyển đổi
</p> <h1 id="about-heading" class="text-balance text-[2rem] leading-[1.12] font-bold tracking-tight text-heading-1 sm:text-4xl sm:leading-[1.08] md:text-5xl">
Chúng tôi tin website phải trả lời được${" "} <span class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-[12%] via-primary via-[38%] to-emerald-600">đồng hồ doanh thu</span>
, không chỉ portfolio thiết kế
</h1> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "!text-heading-3 !text-[1.05rem] !leading-relaxed md:!text-lg" }, { "default": ($$result4) => renderTemplate`
Những nhóm chúng tôi làm việc cùng thường kỳ vọng cùng một
                        thứ: người dùng tìm thấy thông tin và hành động được — dù là
                        đặt demo, nhận lead hay mua trong một phiên đọc thoải mái.
                        Chúng tôi gắn quyết định thiết kế với chỉ báo đo được và nợ
                        kỹ thuật rõ trong proposal.
` })} <div class="flex flex-wrap gap-4 pt-1"> ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "#cau-chuyen", "variant": "primary", "text": "\u0110\u1ECDc c\xE2u chuy\u1EC7n" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/contact", "variant": "secondary", "text": "Tr\xF2 chuy\u1EC7n ng\u1EAFn", "className": "rounded-full border border-box-border bg-white/55 backdrop-blur-sm dark:bg-white/[0.04]" })} </div> </header> ` })} </section> <section id="cau-chuyen" class="relative scroll-mt-32"> ${renderComponent($$result2, "Container", $$Container, { "className": "flex flex-col midmd:flex-row gap-12 lg:gap-16" }, { "default": ($$result3) => renderTemplate` <div class="mx-auto midmd:mx-0 flex w-full max-w-md midmd:max-w-none midmd:flex-1 midmd:w-[44%] lg:w-1/2"> <div class="relative h-80 w-full midmd:h-full midmd:min-h-[420px]"> <div class="absolute top-1/2 -left-5 rotate-45 p-1 md:-left-10 lg:-left-16 h-16 w-16 rounded-lg bg-gradient-to-br from-primary to-orange-400 opacity-60 blur-3xl"></div> <div class="absolute -top-6 right-0 p-1 h-24 w-24 rounded-full bg-gradient-to-br from-primary to-orange-400 opacity-65 blur-3xl md:-top-10"></div> <span class="pointer-events-none absolute inset-x-0 bottom-0 -skew-x-12 aspect-[16/7] rounded-full bg-gradient-to-tr from-primary to-green-400 opacity-45 blur-2xl left-[-5%]"></span> <img src="/images/dev-with-c-1.webp" alt="Đội ngũ Nờ Pê Tê phát triển website và trải nghiệm số cho doanh nghiệp" width="1240" height="1385" class="absolute bottom-0 left-1/2 max-h-[95%] w-auto max-w-none -translate-x-1/2 object-contain" loading="eager"> </div> </div> <div class="flex flex-1 flex-col midmd:w-[56%] lg:w-1/2"> ${renderComponent($$result3, "Title", $$Title, {}, { "default": ($$result4) => renderTemplate`
Giúp doanh nghiệp bứt tốc trên môi trường số
` })} ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result4) => renderTemplate`
Với kinh nghiệm triển khai website cho nhiều lĩnh vực, đội
                        ngũ của chúng tôi tập trung vào hiệu quả thực tế: giao diện
                        chuyên nghiệp, tốc độ tối ưu và khả năng chuyển đổi cao.
                        Mỗi dự án được xây dựng theo mục tiêu kinh doanh cụ thể để
                        website trở thành kênh tạo khách hàng bền vững.
` })} ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "mt-4" }, { "default": ($$result4) => renderTemplate`
Chúng tôi không cạnh tranh bằng “làm nhanh không kịp QA” —
                        không gian chỉnh sửa của bạn nằm trong các phiên đã báo;
                        chỉ báo không đạt thì không nên được coi là “hoàn thành” chỉ vì đã có giao diện.
` })} <div class="mt-10 grid max-w-3xl grid-cols-1 items-stretch gap-4 md:max-w-none md:grid-cols-2 md:gap-5"> ${renderComponent($$result3, "Info", $$Info, { "title": "S\u1EE9 m\u1EC7nh", "description": "Thi\u1EBFt k\u1EBF website \u0111\xFAng m\u1EE5c ti\xEAu, gi\xFAp doanh nghi\u1EC7p t\u0103ng tr\u01B0\u1EDFng doanh thu v\xE0 th\u01B0\u01A1ng hi\u1EC7u online." }, { "icon": ($$result4) => renderTemplate`<span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path> </svg> </span>` })} ${renderComponent($$result3, "Info", $$Info, { "title": "T\u1EA7m nh\xECn", "description": "Tr\u1EDF th\xE0nh \u0111\u1ED1i t\xE1c thi\u1EBFt k\u1EBF website \u0111\xE1ng tin c\u1EADy cho doanh nghi\u1EC7p Vi\u1EC7t trong h\xE0nh tr\xECnh chuy\u1EC3n \u0111\u1ED5i s\u1ED1." }, { "icon": ($$result4) => renderTemplate`<span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </span>` })} </div> </div> ` })} </section> <section class="relative" aria-labelledby="values-heading"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="mb-12 max-w-2xl mx-auto md:mx-0"> <h2 id="values-heading" class="text-3xl font-bold tracking-tight text-heading-1 sm:text-4xl">
Ba giá trị chúng tôi giữ trong mọi hợp đồng
</h2> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "mt-4 !leading-relaxed" }, { "default": ($$result4) => renderTemplate`
Được trích xuất từ cách các dự án ít sóng gió nhất của chúng
                        tôi chạy trong thực tế — không chỉ là khẩu hiệu.
` })} </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-stretch"> ${[
    {
      tit: "R\xF5 KPI tr\u01B0\u1EDBc khi v\xE0o sprint d\xE0i",
      desc: "M\u1ED7i m\xE0n \u0111\u01B0\u1EE3c n\u1ED1i v\xE0o ch\u1EC9 b\xE1o (lead, th\u1EDDi l\u01B0\u1EE3ng, doanh thu gi\u1ECF ho\u1EB7c t\u1EC9 l\u1EC7 ho\xE0n t\u1EA5t brief). Khi ch\u1EC9 b\xE1o ch\u01B0a g\u1EAFn, ch\xFAng t\xF4i kh\xF4ng coi backlog \u0111\xF3 l\xE0 \u01B0u ti\xEAn cao nh\u1EA5t trong tu\u1EA7n."
    },
    {
      tit: "T\xE0i li\u1EC7u b\xE0n giao b\u1EA1n c\xF3 th\u1EC3 t\u1EF1 hu\u1EA5n luy\u1EC7n l\u1EA1i nh\xE2n vi\xEAn sau n\xE0y",
      desc: "Video ng\u1EAFn, checklist vai tr\xF2 n\u1ED9i b\u1ED9 c\u1EE7a b\u1EA1n, \u0111i\u1EC3m c\u1EA5u h\xECnh quan tr\u1ECDng \u2014 ch\u1EE9 kh\xF4ng ch\u1EC9 m\u1ED9t m\u1EADt kh\u1EA9u \u0111\u01B0\u1EE3c ch\u1EE5p m\xE0n h\xECnh."
    },
    {
      tit: "Th\xE0nh ph\u1EA7n kh\xF4ng d\xF9ng t\u1EDBi kh\xF4ng b\u1ECB \xE9p tr\u1EA3 chi ph\xED s\u1EDBm",
      desc: "Feature \xEDt \u0111\u01B0\u1EE3c m\u1EDF b\u1EB1ng data ph\xEDa b\u1EA1n kh\xF4ng b\u1ECB b\u1ECDc trong c\xE1c giai \u0111o\u1EA1n ph\u1EA3i tr\u1EA3 tr\u01B0\u1EDBc to\xE0n ph\u1EA7n. Ch\xFAng t\xF4i \u01B0u ti\xEAn v\xF2ng ch\u1EC9 b\xE1o ch\u1EE9ng minh \u0111\u01B0\u1EE3c tr\u01B0\u1EDBc."
    }
  ].map((v, idx) => renderTemplate`<article class="rounded-3xl border border-box-border bg-box-bg/92 p-7 shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/75"> <span class="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 font-mono text-xs font-bold tabular-nums text-primary md:text-sm"> ${String(idx + 1).padStart(2, "0")} </span> <h3 class="text-lg font-semibold text-heading-2 mb-4"> ${v.tit} </h3> <p class="leading-relaxed text-heading-3 text-[1.015rem]"> ${v.desc} </p> </article>`)} </div> ` })} </section> <section class="relative" aria-labelledby="how-heading"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="rounded-3xl border border-box-border bg-gradient-to-br from-white/92 via-emerald-50/[0.42] to-amber-50/25 px-px py-px shadow-xl shadow-heading-1/[0.06] dark:border-white/[0.08] dark:from-[#141c31]/92 dark:via-primary/[0.1] dark:to-amber-900/25 dark:shadow-black/40 md:rounded-[2rem]"> <div class="rounded-[1.4375rem] px-8 py-10 md:rounded-[1.9375rem] md:px-12 md:py-12 lg:px-14"> <h2 id="how-heading" class="max-w-xl text-2xl font-bold tracking-tight text-heading-1 sm:text-3xl">
Cách làm việc với Nờ Pê Tê
</h2> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "mt-6 max-w-2xl" }, { "default": ($$result4) => renderTemplate`
Bạn thấy chỗ chờ chủ đầu tư chứ không chỉ chờ “creative
                            không đáy” — các vòng chỉnh có lịch, có phạm vi câu được
                            trả cho chính chủ đầu tư chứ không quăng vào backlog vô định.
` })} <ul class="mt-10 space-y-4 text-heading-3 md:text-[1.05rem] md:leading-relaxed max-w-2xl font-medium"> <li class="flex gap-3"> <span class="inline-flex mt-1 h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-bold text-sm text-primary">&check;</span>
Hai bịch “brief không giống vận hành thực tế của bạn” sẽ bị chỉnh sớm ở buổi đầu, không chờ tới họp staging.
</li> <li class="flex gap-3"> <span class="inline-flex mt-1 h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-bold text-sm text-primary">&check;</span>
Các chỉ báo tracking / form không phải gắn “sau-khi-live” trong suy nghĩ thoải mái — được gài khi cấu trúc trang ổn định.
</li> <li class="flex gap-3"> <span class="inline-flex mt-1 h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-bold text-sm text-primary">&check;</span>
Bạn có được chính các file thiết kế &amp; các note kỹ thuật cần thiết cho đối tác quảng cáo nội bộ hay agency growth phía bạn.
</li> </ul> <div class="mt-10 flex flex-wrap gap-4"> ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/packages", "variant": "primary", "text": "Xem g\xF3i d\u1ECBch v\u1EE5" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/services", "variant": "secondary", "text": "\u0110\u1ECDc d\u1ECBch v\u1EE5 chi ti\u1EBFt", "className": "rounded-full border border-box-border bg-white/65 dark:bg-white/[0.06]" })} </div> </div> </div> ` })} </section> ${renderComponent($$result2, "CTA", $$CTA, {})} ${renderComponent($$result2, "ComtactForm", $$ComtactForm, {})} </main> ` })}`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/pages/about-us.astro", void 0);

const $$file = "/Users/npttruong/projects/npt-project/nopete.com/src/pages/about-us.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AboutUs,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
