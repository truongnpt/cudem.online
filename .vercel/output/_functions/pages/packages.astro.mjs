import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C3auuEWL.mjs';
import 'piccolore';
/* empty css                                    */
import { $ as $$Layout, a as $$Container, c as $$Paragraph, b as $$BtnLink } from '../chunks/Layout_DdMl-pcr.mjs';
import { $ as $$CTA } from '../chunks/CTA_6qNFv4WB.mjs';
import { $ as $$ComtactForm } from '../chunks/ComtactForm_CBPtv-9l.mjs';
import { $ as $$PackageServices } from '../chunks/PackageServices_DZ76EW2j.mjs';
export { renderers } from '../renderers.mjs';

const $$Packages = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "G\xF3i d\u1ECBch v\u1EE5" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex flex-col gap-y-16 md:gap-y-24 overflow-hidden pt-28 lg:pt-36 pb-12 md:pb-20"> <div aria-hidden="true" class="pointer-events-none fixed inset-x-0 top-0 -z-30 h-[min(72vh,520px)]"> <div class="absolute inset-0 bg-gradient-to-b from-primary/[0.1] via-primary/[0.03] dark:from-primary/[0.16] dark:via-primary/[0.05] to-transparent"></div> <div class="absolute left-[5%] top-[12%] h-[clamp(220px,36vw,380px)] w-[clamp(220px,36vw,380px)] rounded-full bg-gradient-to-br from-emerald-200/50 via-primary/20 to-transparent blur-3xl dark:from-emerald-900/30 dark:via-primary/32"></div> <div class="absolute right-[0%] top-[25%] h-[clamp(200px,30vw,320px)] w-[clamp(200px,30vw,320px)] rounded-full bg-gradient-to-tl from-amber-200/35 via-primary/15 to-transparent blur-3xl dark:from-amber-900/35"></div> </div> <section aria-labelledby="packages-heading" class="relative"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <nav class="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm" aria-label="Breadcrumb"> <a href="/" class="rounded-full bg-box-bg/80 px-3 py-1 font-medium text-heading-3 shadow-sm ring-1 ring-box-border backdrop-blur-sm transition hover:text-primary hover:ring-primary/30 dark:bg-box-bg/60">Trang chủ</a> <span class="text-heading-3 opacity-60" aria-hidden="true">/</span> <span class="rounded-full bg-primary/12 px-3 py-1 font-semibold text-primary ring-1 ring-primary/25">Giá dịch vụ</span> </nav> <header class="relative mt-8 max-w-3xl space-y-5"> <p class="inline-flex w-fit rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary ring-1 ring-primary/30 bg-white/65 dark:bg-box-bg/55 backdrop-blur-sm">
Bảng gói công khai
</p> <h1 id="packages-heading" class="text-balance text-3xl font-bold tracking-tight text-heading-1 sm:text-4xl md:text-5xl md:leading-[1.08]">
Gói dịch vụ và${" "} <span class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-[10%] via-primary via-[35%] to-emerald-600">báo giá rõ ràng</span> </h1> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "!text-[1.0625rem] !leading-relaxed md:!text-lg text-heading-3" }, { "default": ($$result4) => renderTemplate`
So sánh nhanh bốn hướng triển khai — từ landing page có giá niêm yết
            đến web application theo báo giá. Gói có mức cố định dùng Đăng ký để
            vào trang đặt; gói “Liên hệ” đưa bạn xuống form với id gói đính kèm
            trên trang chủ.
` })} <div class="flex flex-wrap gap-3 pt-1"> ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "#package-grid", "variant": "primary", "text": "Xem c\xE1c g\xF3i" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "variant": "secondary", "text": "H\u1ECFi t\u01B0 v\u1EA5n", "href": "/contact", "className": "rounded-full border border-box-border bg-white/55 px-6 py-3 backdrop-blur-sm dark:bg-white/[0.04]" })} </div> </header> ` })} </section> <section id="package-grid" class="relative mt-12 md:mt-14 scroll-mt-32" aria-label="Danh sách gói và giá"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PackageServices", $$PackageServices, {})} <div class="mt-12 md:mt-14 rounded-2xl border border-box-border bg-box-bg/80 px-6 py-6 shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70 md:rounded-3xl md:px-8 md:py-8"> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "!text-heading-3 !leading-relaxed text-center mx-auto max-w-3xl" }, { "default": ($$result4) => renderTemplate`
Giá không bao gồm chỉnh sửa nội dung vượt phạm vi đã báo, tích hợp
            bên thứ ba trả phí (SMS, ví, kho chứng chỉ SSL trả tiền, v.v.).
            Timeline cụ thể và phụ lục nghiệm thu được gửi trong proposal sau
            khi bạn nhắn brief — không phát sinh mù.
` })} <div class="mt-6 flex flex-wrap justify-center gap-4"> ${renderComponent($$result3, "BtnLink", $$BtnLink, { "variant": "secondary", "text": "\u0110i t\u1EDBi form li\xEAn h\u1EC7", "href": "/contact", "className": "" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "variant": "secondary", "text": "\u0110\u1ECDc c\xE1c d\u1ECBch v\u1EE5 chi ti\u1EBFt", "href": "/services", "className": "" })} </div> </div> ` })} </section> ${renderComponent($$result2, "CTA", $$CTA, {})} ${renderComponent($$result2, "ComtactForm", $$ComtactForm, {})} </main> ` })}`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/pages/packages.astro", void 0);

const $$file = "/Users/npttruong/projects/npt-project/nopete.com/src/pages/packages.astro";
const $$url = "/packages";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Packages,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
