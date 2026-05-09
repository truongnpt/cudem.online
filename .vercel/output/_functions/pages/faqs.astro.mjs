import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C3auuEWL.mjs';
import 'piccolore';
/* empty css                                    */
import { $ as $$Layout, a as $$Container, c as $$Paragraph, b as $$BtnLink } from '../chunks/Layout_DdMl-pcr.mjs';
import { $ as $$CTA } from '../chunks/CTA_6qNFv4WB.mjs';
import { $ as $$ComtactForm } from '../chunks/ComtactForm_CBPtv-9l.mjs';
export { renderers } from '../renderers.mjs';

const $$Faqs = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "Th\u1EDDi gian l\xE0m m\u1ED9t website th\u01B0\u1EDDng bao l\xE2u?",
      answer: "Website gi\u1EDBi thi\u1EC7u doanh nghi\u1EC7p th\u01B0\u1EDDng m\u1EA5t 2-5 tu\u1EA7n t\xF9y s\u1ED1 l\u01B0\u1EE3ng trang, m\u1EE9c \u0111\u1ED9 ch\u1EC9nh giao di\u1EC7n v\xE0 ph\u1EA7n t\xEDch h\u1EE3p. C\xE1c d\u1EF1 \xE1n c\xF3 h\u1EC7 th\u1ED1ng qu\u1EA3n tr\u1ECB, \u0111\u1ED3ng b\u1ED9 d\u1EEF li\u1EC7u ho\u1EB7c nhi\u1EC1u vai tr\xF2 ng\u01B0\u1EDDi d\xF9ng s\u1EBD c\u1EA7n th\xEAm th\u1EDDi gian \u0111\u1EC3 QA."
    },
    {
      question: "Chi ph\xED thi\u1EBFt k\u1EBF website \u0111\u01B0\u1EE3c t\xEDnh nh\u01B0 th\u1EBF n\xE0o?",
      answer: "Chi ph\xED d\u1EF1a tr\xEAn ph\u1EA1m vi ch\u1EE9c n\u0103ng, \u0111\u1ED9 ph\u1EE9c t\u1EA1p giao di\u1EC7n, s\u1ED1 template trang v\xE0 c\xE1c t\xEDch h\u1EE3p b\xEAn th\u1EE9 ba. Ch\xFAng t\xF4i lu\xF4n g\u1EEDi b\xE1o gi\xE1 theo h\u1EA1ng m\u1EE5c r\xF5 r\xE0ng \u0111\u1EC3 b\u1EA1n th\u1EA5y ph\u1EA7n n\xE0o b\u1EAFt bu\u1ED9c v\xE0 ph\u1EA7n n\xE0o c\xF3 th\u1EC3 l\xE0m theo giai \u0111o\u1EA1n."
    },
    {
      question: "C\xF3 h\u1ED7 tr\u1EE3 SEO khi b\xE0n giao website kh\xF4ng?",
      answer: "C\xF3. Website \u0111\u01B0\u1EE3c t\u1ED1i \u01B0u SEO on-page c\u01A1 b\u1EA3n: c\u1EA5u tr\xFAc heading, metadata, t\u1ED1c \u0111\u1ED9 t\u1EA3i, alt \u1EA3nh, schema c\u1EA7n thi\u1EBFt v\xE0 URL th\xE2n thi\u1EC7n. N\u1EBFu b\u1EA1n c\u1EA7n k\u1EBF ho\u1EA1ch SEO n\u1ED9i dung d\xE0i h\u1EA1n, \u0111\u1ED9i s\u1EBD t\u01B0 v\u1EA5n th\xEAm theo m\u1EE5c ti\xEAu traffic."
    },
    {
      question: "Sau khi b\xE0n giao t\xF4i c\xF3 th\u1EC3 t\u1EF1 c\u1EADp nh\u1EADt n\u1ED9i dung kh\xF4ng?",
      answer: "C\xF3. H\u1EC7 th\u1ED1ng qu\u1EA3n tr\u1ECB \u0111\u01B0\u1EE3c c\u1EA5u h\xECnh \u0111\u1EC3 \u0111\u1ED9i n\u1ED9i b\u1ED9 c\xF3 th\u1EC3 t\u1EF1 s\u1EEDa n\u1ED9i dung, h\xECnh \u1EA3nh v\xE0 b\xE0i vi\u1EBFt m\xE0 kh\xF4ng c\u1EA7n \u0111\u1EE5ng code. Khi b\xE0n giao s\u1EBD c\xF3 checklist v\xE0 h\u01B0\u1EDBng d\u1EABn thao t\xE1c \u0111\u1EC3 v\u1EADn h\xE0nh \u1ED5n \u0111\u1ECBnh."
    },
    {
      question: "Website c\xF3 b\u1EA3o h\xE0nh v\xE0 h\u1ED7 tr\u1EE3 k\u1EF9 thu\u1EADt kh\xF4ng?",
      answer: "C\xF3 b\u1EA3o h\xE0nh k\u1EF9 thu\u1EADt theo g\xF3i d\u1ECBch v\u1EE5 \u0111\xE3 ch\u1ECDn. Trong th\u1EDDi gian b\u1EA3o h\xE0nh, c\xE1c l\u1ED7i ph\xE1t sinh t\u1EEB code tri\u1EC3n khai s\u1EBD \u0111\u01B0\u1EE3c x\u1EED l\xFD \u01B0u ti\xEAn. Ngo\xE0i ra c\xF3 th\u1EC3 m\u1EDF g\xF3i b\u1EA3o tr\xEC \u0111\u1ECBnh k\u1EF3 n\u1EBFu b\u1EA1n c\u1EA7n theo d\xF5i li\xEAn t\u1EE5c."
    },
    {
      question: "T\xF4i c\u1EA7n chu\u1EA9n b\u1ECB g\xEC tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u d\u1EF1 \xE1n?",
      answer: "B\u1EA1n ch\u1EC9 c\u1EA7n brief m\u1EE5c ti\xEAu kinh doanh, ch\xE2n dung kh\xE1ch h\xE0ng ch\xEDnh, t\xE0i li\u1EC7u th\u01B0\u01A1ng hi\u1EC7u (n\u1EBFu c\xF3) v\xE0 c\xE1c v\xED d\u1EE5 website b\u1EA1n th\xEDch. Nh\u1EEFng ph\u1EA7n c\xF2n thi\u1EBFu nh\u01B0 ki\u1EBFn tr\xFAc n\u1ED9i dung ho\u1EB7c lu\u1ED3ng trang s\u1EBD \u0111\u01B0\u1EE3c \u0111\u1ED9i \u0111\u1EC1 xu\u1EA5t."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FAQs thi\u1EBFt k\u1EBF website" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex flex-col gap-y-20 md:gap-y-28 overflow-hidden pt-28 lg:pt-36 pb-12 md:pb-20"> <section class="relative" aria-labelledby="faqs-heading"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <nav class="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm" aria-label="Breadcrumb"> <a href="/" class="rounded-full bg-box-bg/80 px-3 py-1 font-medium text-heading-3 shadow-sm ring-1 ring-box-border backdrop-blur-sm transition hover:text-primary hover:ring-primary/30 dark:bg-box-bg/60">Trang chủ</a> <span class="text-heading-3 opacity-60" aria-hidden="true">/</span> <span class="rounded-full bg-primary/12 px-3 py-1 font-semibold text-primary ring-1 ring-primary/25">FAQs</span> </nav> <header class="mt-10 max-w-3xl space-y-5"> <p class="inline-flex w-fit rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary ring-1 ring-primary/30 bg-white/65 dark:bg-box-bg/50 backdrop-blur-sm">
Câu hỏi thường gặp
</p> <h1 id="faqs-heading" class="text-balance text-[2rem] leading-[1.12] font-bold tracking-tight text-heading-1 sm:text-4xl sm:leading-[1.08] md:text-5xl">
Giải đáp nhanh cho dịch vụ thiết kế website
</h1> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "!text-heading-3 !text-[1.05rem] !leading-relaxed md:!text-lg" }, { "default": ($$result4) => renderTemplate`
Tổng hợp các câu hỏi khách hàng thường hỏi trước khi bắt đầu dự án website.
            Nếu bạn cần tư vấn theo case riêng, có thể liên hệ để nhận đề xuất chi tiết.
` })} <div class="flex flex-wrap gap-3"> ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/packages", "variant": "secondary", "text": "Xem b\u1EA3ng gi\xE1", "className": "rounded-full border border-box-border bg-white/70 dark:bg-white/[0.05]" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/contact", "variant": "primary", "text": "Li\xEAn h\u1EC7 t\u01B0 v\u1EA5n" })} </div> </header> ` })} </section> <section class="relative" aria-label="Danh sách câu hỏi thường gặp"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="space-y-4"> ${faqs.map((item) => renderTemplate`<details class="group rounded-2xl border border-box-border bg-box-bg/90 p-5 shadow-sm transition open:shadow-md dark:bg-box-bg/70"> <summary class="cursor-pointer list-none text-lg font-semibold text-heading-2 pr-8 relative"> ${item.question} <span class="absolute right-0 top-1 text-primary transition-transform group-open:rotate-45 text-2xl leading-none">+</span> </summary> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "mt-4 !text-heading-3 !leading-relaxed" }, { "default": ($$result4) => renderTemplate`${item.answer}` })} </details>`)} </div> ` })} </section> ${renderComponent($$result2, "CTA", $$CTA, {})} ${renderComponent($$result2, "ComtactForm", $$ComtactForm, {})} </main> ` })}`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/pages/faqs.astro", void 0);

const $$file = "/Users/npttruong/projects/npt-project/nopete.com/src/pages/faqs.astro";
const $$url = "/faqs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faqs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
