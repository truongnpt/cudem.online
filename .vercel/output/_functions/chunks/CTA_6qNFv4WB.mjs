import { e as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate } from './astro/server_C3auuEWL.mjs';
import 'piccolore';
import { a as $$Container, c as $$Paragraph, b as $$BtnLink } from './Layout_DdMl-pcr.mjs';

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="cta" class="pb-20"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 dark:to-transparent"> <div class="absolute right-0 top-0 h-full w-full flex justify-end"> <div class="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl"> <span class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span> </div> </div> <div class="absolute left-0 bottom-0 h-full w-full flex items-end"> <div class="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl"> <span class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span> </div> </div> <div class="mx-auto text-center max-w-xl md:max-w-2xl relative"> <h1 class="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight
          font-bold text-heading-1">
Sẵn sàng xây dựng <span class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">website chuyên nghiệp</span> cho doanh nghiệp của bạn?
</h1> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "pt-10" }, { "default": ($$result3) => renderTemplate`
Để lại thông tin ngay hôm nay để nhận tư vấn miễn phí về giải pháp phù
          hợp ngân sách, đúng mục tiêu chuyển đổi và lộ trình triển khai rõ
          ràng.
` })} <div class="flex justify-center pt-10"> ${renderComponent($$result2, "BtnLink", $$BtnLink, { "href": "/contact", "text": "Li\xEAn h\u1EC7 t\u01B0 v\u1EA5n ngay", "className": "", "variant": "primary" })} </div> </div> </div> ` })} </section>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/sections/CTA.astro", void 0);

export { $$CTA as $ };
