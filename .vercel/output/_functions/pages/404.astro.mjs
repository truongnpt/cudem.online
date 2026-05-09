import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C3auuEWL.mjs';
import 'piccolore';
/* empty css                                    */
import { $ as $$Layout, a as $$Container, b as $$BtnLink } from '../chunks/Layout_DdMl-pcr.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Trang kh\xF4ng t\xECm th\u1EA5y", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex min-h-[min(70vh,560px)] flex-col justify-center overflow-hidden pt-28 lg:pt-32 pb-16 md:pb-24" aria-labelledby="not-found-heading"> <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-20"> <div class="absolute inset-0 bg-gradient-to-b from-primary/[0.08] via-transparent to-transparent dark:from-primary/[0.12]"></div> <div class="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-gradient-to-br from-teal-300/40 via-primary/25 to-transparent blur-3xl dark:from-teal-900/35"></div> <div class="absolute right-[5%] bottom-[15%] h-72 w-72 rounded-full bg-gradient-to-tl from-amber-200/45 via-primary/15 to-transparent blur-3xl dark:from-amber-900/40"></div> </div> ${renderComponent($$result2, "Container", $$Container, { "className": "relative" }, { "default": ($$result3) => renderTemplate` <div class="mx-auto max-w-2xl rounded-3xl border border-box-border bg-box-bg/85 px-8 py-12 text-center shadow-xl shadow-box-shadow backdrop-blur-md dark:bg-box-bg/80 sm:px-10 sm:py-14 md:rounded-[2rem] md:py-16"> <p class="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary ring-1 ring-primary/25 mb-6">
HTTP 404
</p> <div class="relative mb-6 select-none tabular-nums" aria-hidden="true"> <span class="block text-[clamp(4.5rem,18vw,8.5rem)] font-black leading-none text-heading-1/[0.12] dark:text-white/[0.08]">404</span> </div> <h1 id="not-found-heading" class="text-balance text-2xl font-bold tracking-tight text-heading-1 sm:text-3xl md:text-4xl mb-4">
Không tìm thấy trang bạn yêu cầu
</h1> <p class="text-heading-3 text-[1.05rem] leading-relaxed md:text-lg mx-auto max-w-md mb-10">
Liên kết có thể đã đổi, bị gõ nhầm hoặc trang đã gỡ xuống.
                    Bạn có thể quay về trang chủ hoặc mở các mục hay dùng sau
                    đây.
</p> <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center"> ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/", "variant": "primary", "text": "Trang ch\u1EE7" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/services", "variant": "secondary", "text": "D\u1ECBch v\u1EE5", "className": "rounded-full border border-box-border bg-transparent dark:bg-white/[0.04]" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/packages", "variant": "secondary", "text": "B\u1EA3ng gi\xE1 g\xF3i", "className": "rounded-full border border-box-border bg-transparent dark:bg-white/[0.04]" })} </div> <div class="mt-10 pt-8 border-t border-box-border/70"> <p class="text-sm text-heading-3">
Cần báo lỗi liên kết?${" "} <a href="/contact" class="font-semibold text-primary underline-offset-2 hover:underline">Liên hệ chúng tôi</a> </p> </div> </div> ` })} </main> ` })}`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/pages/404.astro", void 0);

const $$file = "/Users/npttruong/projects/npt-project/nopete.com/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
