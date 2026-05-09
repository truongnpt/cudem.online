import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, l as Fragment } from '../chunks/astro/server_C3auuEWL.mjs';
import 'piccolore';
/* empty css                                    */
import { p as packageServices, $ as $$Layout, a as $$Container, c as $$Paragraph, b as $$BtnLink } from '../chunks/Layout_DdMl-pcr.mjs';
import { $ as $$Title } from '../chunks/Title_DuanUxA6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Order = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Order;
  const idParam = Astro2.url.searchParams.get("id");
  const pkg = typeof idParam === "string" ? packageServices.find((p) => p.id === idParam) : void 0;
  const formatVnd = (amount) => `${amount.toLocaleString("vi-VN")} VN\u0110`;
  const layoutTitle = pkg ? `\u0110\u1EB7t g\xF3i: ${pkg.title}` : "\u0110\u1EB7t d\u1ECBch v\u1EE5";
  const discounted = pkg && typeof pkg.priceVnd === "number" && pkg.discountPercent > 0 ? Math.round(pkg.priceVnd * (1 - pkg.discountPercent / 100)) : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": layoutTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-[50vh] py-16 md:py-24"> ${renderComponent($$result2, "Container", $$Container, { "className": "max-w-3xl" }, { "default": ($$result3) => renderTemplate` <div class="rounded-3xl border border-box-border bg-box-bg p-8 sm:p-10 shadow-lg shadow-box-shadow relative overflow-hidden space-y-6"> ${pkg ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` <div class="relative space-y-3"> <p class="text-sm font-semibold uppercase tracking-wide text-primary">
Xác nhận gói
</p> ${renderComponent($$result4, "Title", $$Title, {}, { "default": ($$result5) => renderTemplate`${pkg.title}` })} ${typeof pkg.priceVnd === "number" && pkg.discountPercent > 0 && discounted != null ? renderTemplate`${renderComponent($$result4, "Paragraph", $$Paragraph, {}, { "default": ($$result5) => renderTemplate`
Giá niêm yết${" "}<span class="line-through opacity-75"> ${formatVnd(pkg.priceVnd)} </span> ${" \u2014 "}<span class="font-semibold text-heading-2">
Ưu đãi (${pkg.discountPercent}%):${" "} <span class="text-primary"> ${formatVnd(discounted)} </span> </span> ` })}` : typeof pkg.priceVnd === "number" ? renderTemplate`${renderComponent($$result4, "Paragraph", $$Paragraph, {}, { "default": ($$result5) => renderTemplate`
Giá trọn gói:${" "}<span class="font-semibold text-heading-2"> ${formatVnd(pkg.priceVnd)} </span> ` })}` : renderTemplate`${renderComponent($$result4, "Paragraph", $$Paragraph, {}, { "default": ($$result5) => renderTemplate`
Liên hệ để báo giá phù hợp — gói này không áp đặt mức cố định trên hệ thống.
` })}`} </div> <ul class="relative space-y-2 text-heading-3 md:text-lg"> ${pkg.features.map((feature) => renderTemplate`<li class="flex gap-3"> <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true"></span> <span>${feature}</span> </li>`)} </ul> ${renderComponent($$result4, "Paragraph", $$Paragraph, {}, { "default": ($$result5) => renderTemplate`
Tiếp theo chúng tôi có thể thu thập brief, lên timeline và tiến hành khảo sát chi tiết. Bạn cũng có thể nhắn trực tiếp qua form liên hệ.
` })} <div class="flex flex-wrap gap-4 relative pt-2"> ${renderComponent($$result4, "BtnLink", $$BtnLink, { "variant": "secondary", "href": `/contact?package=${pkg.id}`, "text": "Li\xEAn h\u1EC7 t\u01B0 v\u1EA5n" })} ${renderComponent($$result4, "BtnLink", $$BtnLink, { "variant": "primary", "href": "/", "text": "Quay v\u1EC1 trang ch\u1EE7" })} </div> <span class="pointer-events-none absolute -bottom-20 -right-20 w-40 aspect-square rounded-full bg-primary/10"></span> ` })}` : renderTemplate`<div class="relative space-y-6 text-center py-6"> ${renderComponent($$result3, "Title", $$Title, {}, { "default": ($$result4) => renderTemplate`Không tìm thấy gói` })} ${renderComponent($$result3, "Paragraph", $$Paragraph, {}, { "default": ($$result4) => renderTemplate`
Liên kết đặt dịch vụ không hợp lệ hoặc gói đã ngừng cung cấp. Vui lòng quay về danh sách gói trên trang chủ.
` })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "variant": "primary", "href": "/#package-services", "text": "Xem c\xE1c g\xF3i d\u1ECBch v\u1EE5", "className": "inline-flex" })} <span class="pointer-events-none absolute -bottom-16 -left-16 w-32 aspect-square rounded-full bg-primary/10"></span> </div>`} </div> ` })} </main> ` })}`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/pages/order.astro", void 0);

const $$file = "/Users/npttruong/projects/npt-project/nopete.com/src/pages/order.astro";
const $$url = "/order";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Order,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
