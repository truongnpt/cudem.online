import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C3auuEWL.mjs';
import 'piccolore';
/* empty css                                    */
import { $ as $$Layout, a as $$Container, c as $$Paragraph, b as $$BtnLink } from '../chunks/Layout_DdMl-pcr.mjs';
import { $ as $$CTA } from '../chunks/CTA_6qNFv4WB.mjs';
import { $ as $$ComtactForm } from '../chunks/ComtactForm_CBPtv-9l.mjs';
export { renderers } from '../renderers.mjs';

const $$ProcessDeployment = createComponent(($$result, $$props, $$slots) => {
  const processSteps = [
    {
      title: "\u0110\u0103ng k\xFD",
      detail: "B\u1EA1n g\u1EEDi nhu c\u1EA7u qua form ho\u1EB7c li\xEAn h\u1EC7 tr\u1EF1c ti\u1EBFp. \u0110\u1ED9i ng\u0169 ti\u1EBFp nh\u1EADn th\xF4ng tin c\u01A1 b\u1EA3n v\u1EC1 m\u1EE5c ti\xEAu, th\u1EDDi gian v\xE0 ph\u1EA1m vi mong mu\u1ED1n."
    },
    {
      title: "B\xE1o gi\xE1",
      detail: "Sau khi l\xE0m r\xF5 y\xEAu c\u1EA7u, ch\xFAng t\xF4i g\u1EEDi b\xE1o gi\xE1 chi ti\u1EBFt theo h\u1EA1ng m\u1EE5c c\xF4ng vi\u1EC7c, timeline v\xE0 c\xE1c m\u1ED1c nghi\u1EC7m thu d\u1EF1 ki\u1EBFn."
    },
    {
      title: "\u0110\u1EB7t c\u1ECDc",
      detail: "Hai b\xEAn th\u1ED1ng nh\u1EA5t proposal v\xE0 ti\u1EBFn h\xE0nh \u0111\u1EB7t c\u1ECDc \u0111\u1EC3 kh\xF3a l\u1ECBch tri\u1EC3n khai, \u0111\u1ED3ng th\u1EDDi x\xE1c nh\u1EADn k\u1EBF ho\u1EA1ch th\u1EF1c hi\u1EC7n ch\xEDnh th\u1EE9c."
    },
    {
      title: "Ph\xE1t tri\u1EC3n",
      detail: "\u0110\u1ED9i d\u1EF1 \xE1n th\u1EF1c hi\u1EC7n thi\u1EBFt k\u1EBF v\xE0 l\u1EADp tr\xECnh theo ph\u1EA1m vi \u0111\xE3 th\u1ED1ng nh\u1EA5t, c\u1EADp nh\u1EADt ti\u1EBFn \u0111\u1ED9 \u0111\u1ECBnh k\u1EF3 theo t\u1EEBng giai \u0111o\u1EA1n."
    },
    {
      title: "Demo",
      detail: "B\u1EA3n demo \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EC3 b\u1EA1n tr\u1EA3i nghi\u1EC7m lu\u1ED3ng s\u1EED d\u1EE5ng, ki\u1EC3m tra n\u1ED9i dung v\xE0 ghi nh\u1EADn c\xE1c g\xF3p \xFD tr\u01B0\u1EDBc khi go-live."
    },
    {
      title: "Tri\u1EC3n khai",
      detail: "Website \u0111\u01B0\u1EE3c tri\u1EC3n khai l\xEAn m\xF4i tr\u01B0\u1EDDng th\u1EADt, t\u1ED1i \u01B0u c\u1EA5u h\xECnh c\u1EA7n thi\u1EBFt v\xE0 ki\u1EC3m tra v\u1EADn h\xE0nh tr\xEAn c\xE1c thi\u1EBFt b\u1ECB ch\xEDnh."
    },
    {
      title: "Thanh to\xE1n",
      detail: "Sau khi nghi\u1EC7m thu c\xE1c h\u1EA1ng m\u1EE5c theo h\u1EE3p \u0111\u1ED3ng, b\u1EA1n ho\xE0n t\u1EA5t ph\u1EA7n thanh to\xE1n c\xF2n l\u1EA1i \u0111\u1EC3 k\u1EBFt th\xFAc giai \u0111o\u1EA1n b\xE0n giao."
    },
    {
      title: "B\u1EA3o h\xE0nh",
      detail: "Ch\xFAng t\xF4i h\u1ED7 tr\u1EE3 b\u1EA3o h\xE0nh k\u1EF9 thu\u1EADt theo th\u1EDDi h\u1EA1n cam k\u1EBFt, x\u1EED l\xFD l\u1ED7i ph\xE1t sinh t\u1EEB ph\u1EA7n \u0111\xE3 tri\u1EC3n khai v\xE0 \u0111\u1ED3ng h\xE0nh v\u1EADn h\xE0nh ban \u0111\u1EA7u."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Quy tr\xECnh tri\u1EC3n khai" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex flex-col gap-y-20 md:gap-y-28 overflow-hidden pt-28 lg:pt-36 pb-12 md:pb-20"> <section class="relative" aria-labelledby="process-heading"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <nav class="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm" aria-label="Breadcrumb"> <a href="/" class="rounded-full bg-box-bg/80 px-3 py-1 font-medium text-heading-3 shadow-sm ring-1 ring-box-border backdrop-blur-sm transition hover:text-primary hover:ring-primary/30 dark:bg-box-bg/60">Trang chủ</a> <span class="text-heading-3 opacity-60" aria-hidden="true">/</span> <span class="rounded-full bg-primary/12 px-3 py-1 font-semibold text-primary ring-1 ring-primary/25">Quy trình triển khai</span> </nav> <header class="mt-10 max-w-3xl space-y-5"> <p class="inline-flex w-fit rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary ring-1 ring-primary/30 bg-white/65 dark:bg-box-bg/50 backdrop-blur-sm">
Process Deployment
</p> <h1 id="process-heading" class="text-balance text-[2rem] leading-[1.12] font-bold tracking-tight text-heading-1 sm:text-4xl sm:leading-[1.08] md:text-5xl">
Quy trình triển khai website từ đăng ký đến bảo hành
</h1> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "!text-heading-3 !text-[1.05rem] !leading-relaxed md:!text-lg" }, { "default": ($$result4) => renderTemplate`
Lộ trình rõ ràng giúp bạn nắm tiến độ, chủ động nguồn lực nội bộ và kiểm soát chất lượng theo từng mốc.
` })} <div class="flex flex-wrap gap-3"> ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/packages", "variant": "secondary", "text": "Xem b\u1EA3ng gi\xE1", "className": "rounded-full border border-box-border bg-white/70 dark:bg-white/[0.05]" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/contact", "variant": "primary", "text": "Li\xEAn h\u1EC7 tri\u1EC3n khai" })} </div> </header> ` })} </section> <section class="relative" aria-label="Các bước triển khai"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="grid gap-4 md:gap-5"> ${processSteps.map((step, index) => renderTemplate`<article class="rounded-2xl border border-box-border bg-box-bg/90 p-5 shadow-sm dark:bg-box-bg/70 md:p-6"> <div class="flex flex-wrap items-center gap-3"> <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/12 font-bold text-primary ring-1 ring-primary/20"> ${String(index + 1).padStart(2, "0")} </span> <h2 class="text-xl font-semibold text-heading-2">${step.title}</h2> </div> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "mt-4 !text-heading-3 !leading-relaxed" }, { "default": ($$result4) => renderTemplate`${step.detail}` })} </article>`)} </div> ` })} </section> ${renderComponent($$result2, "CTA", $$CTA, {})} ${renderComponent($$result2, "ComtactForm", $$ComtactForm, {})} </main> ` })}`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/pages/process-deployment.astro", void 0);

const $$file = "/Users/npttruong/projects/npt-project/nopete.com/src/pages/process-deployment.astro";
const $$url = "/process-deployment";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProcessDeployment,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
