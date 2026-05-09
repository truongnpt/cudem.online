import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_C3auuEWL.mjs';
import 'piccolore';
/* empty css                                    */
import { $ as $$Layout, a as $$Container, c as $$Paragraph, b as $$BtnLink } from '../chunks/Layout_DdMl-pcr.mjs';
import { $ as $$ComtactForm } from '../chunks/ComtactForm_CBPtv-9l.mjs';
import { a as app } from '../chunks/app_BQwKVvaU.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Li\xEAn h\u1EC7" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex flex-col gap-y-14 md:gap-y-20 overflow-hidden pt-28 lg:pt-36 pb-8 md:pb-16"> <div aria-hidden="true" class="pointer-events-none fixed inset-x-0 top-0 -z-30 h-[min(70vh,540px)]"> <div class="absolute inset-0 bg-gradient-to-b from-primary/[0.1] via-primary/[0.03] dark:from-primary/[0.15] dark:via-primary/[0.05] to-transparent"></div> <div class="absolute right-[-8%] top-[8%] h-[clamp(220px,38vw,400px)] w-[clamp(220px,38vw,400px)] rounded-full bg-gradient-to-bl from-emerald-200/50 via-primary/18 to-transparent blur-3xl dark:from-emerald-900/30"></div> <div class="absolute left-[-10%] top-[40%] h-[clamp(180px,28vw,300px)] w-[clamp(180px,28vw,300px)] rounded-full bg-gradient-to-tr from-amber-200/40 via-primary/12 to-transparent blur-3xl dark:from-amber-900/35"></div> </div> <section aria-labelledby="contact-heading" class="relative"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <nav class="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm" aria-label="Breadcrumb"> <a href="/" class="rounded-full bg-box-bg/80 px-3 py-1 font-medium text-heading-3 shadow-sm ring-1 ring-box-border backdrop-blur-sm transition hover:text-primary hover:ring-primary/30 dark:bg-box-bg/60">Trang chủ</a> <span class="text-heading-3 opacity-60" aria-hidden="true">/</span> <span class="rounded-full bg-primary/12 px-3 py-1 font-semibold text-primary ring-1 ring-primary/25">Liên hệ</span> </nav> <header class="relative mt-8 max-w-3xl space-y-5"> <p class="inline-flex w-fit rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary ring-1 ring-primary/30 bg-white/65 dark:bg-box-bg/50 backdrop-blur-sm">
Phản hồi trong giờ làm việc
</p> <h1 id="contact-heading" class="text-balance text-3xl font-bold tracking-tight text-heading-1 sm:text-4xl md:text-5xl md:leading-[1.08]">
Hãy cho chúng tôi biết${" "} <span class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-[10%] via-primary via-[35%] to-emerald-600">bạn đang cần gì</span> </h1> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "!text-heading-3 !text-[1.05rem] !leading-relaxed md:!text-lg" }, { "default": ($$result4) => renderTemplate`
Điền form bên dưới — email và nội dung sẽ được gửi an toàn qua
                        máy chủ của chúng tôi. Bạn cũng có thể mở trang dịch vụ hoặc
                        bảng giá trước khi mô tả brief.
` })} <div class="flex flex-wrap gap-3 pt-1"> ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/services", "variant": "secondary", "text": "D\u1ECBch v\u1EE5", "className": "rounded-full border border-box-border bg-white/55 dark:bg-white/[0.04]" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/packages", "variant": "secondary", "text": "B\u1EA3ng gi\xE1 g\xF3i", "className": "rounded-full border border-box-border bg-white/55 dark:bg-white/[0.04]" })} </div> </header> ` })} </section> ${renderComponent($$result2, "ComtactForm", $$ComtactForm, {})} <section class="relative pb-6" aria-label="Kênh khác"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="mx-auto max-w-3xl rounded-2xl border border-box-border bg-box-bg/80 px-6 py-8 text-center shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70 sm:px-10"> <p class="text-sm font-semibold uppercase tracking-wider text-primary">
Mạng xã hội
</p> <p class="mt-3 text-heading-3 leading-relaxed">
Kết nối với ${app.name} trên Facebook để theo dõi cập nhật.
</p> <a${addAttribute(app.footer.socials.facebook.url, "href")} target="_blank" rel="noopener noreferrer" class="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-box-border bg-body/90 px-6 py-3 text-base font-semibold text-heading-2 transition hover:border-primary hover:text-primary dark:bg-white/[0.04]"> ${app.footer.socials.facebook.name} </a> </div> ` })} </section> </main> ` })}`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/pages/contact.astro", void 0);

const $$file = "/Users/npttruong/projects/npt-project/nopete.com/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
