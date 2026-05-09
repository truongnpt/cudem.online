import { e as createComponent, m as maybeRenderHead, r as renderTemplate, g as addAttribute, k as renderComponent, l as Fragment, h as createAstro, o as renderScript } from './astro/server_C3auuEWL.mjs';
import 'piccolore';
import { b as $$BtnLink, a as $$Container, c as $$Paragraph, p as packageServices } from './Layout_DdMl-pcr.mjs';
import { $ as $$Title } from './Title_DuanUxA6.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$PackageService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PackageService;
  const {
    title,
    discountPercent,
    features,
    priceVnd,
    ctaHref,
    ctaText,
    ctaVariant
  } = Astro2.props;
  const formatVnd = (amount) => `${amount.toLocaleString("vi-VN")} VN\u0110`;
  const hasFixedPrice = typeof priceVnd === "number";
  const showDiscountBadge = discountPercent > 0;
  const discountedAmount = hasFixedPrice && showDiscountBadge ? Math.round(priceVnd * (1 - discountPercent / 100)) : hasFixedPrice ? priceVnd : null;
  return renderTemplate`${maybeRenderHead()}<div class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden flex flex-col h-full"> ${showDiscountBadge && renderTemplate`<span class="absolute top-4 right-4 text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full">
Giảm ${discountPercent}%
</span>`} <div${addAttribute(["relative", showDiscountBadge && "mt-4"], "class:list")}> <h2 class="text-lg md:text-xl font-semibold text-heading-2"> ${title} </h2> <div class="mt-4 space-y-1"> ${!hasFixedPrice && renderTemplate`<p class="text-2xl sm:text-3xl font-semibold text-heading-1">
Liên hệ
</p>`} ${hasFixedPrice && showDiscountBadge && typeof discountedAmount === "number" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <p class="text-sm text-heading-3 line-through"> ${formatVnd(priceVnd)} </p> <p class="text-2xl sm:text-3xl font-semibold text-heading-1 text-primary"> ${formatVnd(discountedAmount)} </p> ` })}`} ${hasFixedPrice && !showDiscountBadge && renderTemplate`<p class="text-2xl sm:text-3xl font-semibold text-heading-1"> ${formatVnd(priceVnd)} </p>`} </div> </div> <ul class="mt-6 space-y-3 flex-1 relative"> ${features.map((feature) => renderTemplate`<li class="flex gap-3 text-heading-3 md:text-lg"> <span class="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3"> <path fill-rule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.995 8a1 1 0 01-1.414 0l-3.999-4a1 1 0 011.414-1.414l3.293 3.293 7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </span> <span>${feature}</span> </li>`)} </ul> <div class="mt-8 pt-2 relative z-10"> ${renderComponent($$result, "BtnLink", $$BtnLink, { "href": ctaHref, "text": ctaText, "variant": ctaVariant, "className": "inline-flex !w-full justify-center text-center sm:w-auto" })} </div> <span class="pointer-events-none absolute w-32 aspect-square -bottom-16 -right-16 bg-primary/10 rounded-full"></span> </div>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/cards/PackageService.astro", void 0);

const $$PackageServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="package-services"> ${renderComponent($$result, "Container", $$Container, { "className": "space-y-10 md:space-y-12" }, { "default": ($$result2) => renderTemplate` <div class="text-center max-w-3xl mx-auto space-y-4"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`Gói dịch vụ` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, {}, { "default": ($$result3) => renderTemplate`
Lựa chọn gói phù hợp với quy mô và mục tiêu kinh doanh; mọi gói đều được
        triển khai chuyên nghiệp, hỗ trợ và bảo hành rõ ràng. Vuốt hoặc dùng nút
        để xem thêm các gói.
` })} </div> <div class="package-services-carousel-wrap flex items-center gap-4 sm:gap-5 lg:gap-6" data-pkg-carousel-wrap> <button type="button" class="pkg-swiper-prev swiper-button-prev shrink-0" aria-label="Slide trước"></button> <div class="relative min-w-0 flex-1"> <div class="package-services-carousel swiper overflow-hidden pb-12 md:pb-14" data-pkg-carousel aria-roledescription="carousel" aria-label="Danh sách gói dịch vụ"> <div class="swiper-wrapper"> ${packageServices.map((pkg) => {
    const hasFixedPrice = typeof pkg.priceVnd === "number";
    return renderTemplate`<div class="swiper-slide !h-auto max-sm:!min-h-0"> ${renderComponent($$result2, "PackageService", $$PackageService, { "title": pkg.title, "discountPercent": pkg.discountPercent, "features": pkg.features, "priceVnd": pkg.priceVnd, "ctaHref": hasFixedPrice ? `/order?id=${pkg.id}` : `/contact?package=${pkg.id}`, "ctaText": hasFixedPrice ? "\u0110\u0103ng k\xFD" : "Li\xEAn h\u1EC7", "ctaVariant": hasFixedPrice ? "primary" : "secondary" })} </div>`;
  })} </div> <div class="pkg-swiper-pagination swiper-pagination"></div> </div> </div> <button type="button" class="pkg-swiper-next swiper-button-next shrink-0" aria-label="Slide sau"></button> </div> ` })} </section>  ${renderScript($$result, "/Users/npttruong/projects/npt-project/nopete.com/src/components/sections/PackageServices.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/sections/PackageServices.astro", void 0);

export { $$PackageServices as $ };
