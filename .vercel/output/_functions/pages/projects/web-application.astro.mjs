import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_C3auuEWL.mjs';
import 'piccolore';
/* empty css                                       */
import { $ as $$Layout, a as $$Container, c as $$Paragraph, w as webApplicationProjects, b as $$BtnLink } from '../../chunks/Layout_DdMl-pcr.mjs';
import { $ as $$CTA } from '../../chunks/CTA_6qNFv4WB.mjs';
import { $ as $$ComtactForm } from '../../chunks/ComtactForm_CBPtv-9l.mjs';
export { renderers } from '../../renderers.mjs';

const $$WebApplication = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "D\u1EF1 \xE1n Web application \u0111\xE3 tri\u1EC3n khai" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex flex-col gap-y-20 md:gap-y-28 overflow-hidden pt-28 lg:pt-36 pb-12 md:pb-20"> <section class="relative"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <nav class="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm" aria-label="Breadcrumb"> <a href="/" class="rounded-full bg-box-bg/80 px-3 py-1 font-medium text-heading-3 shadow-sm ring-1 ring-box-border backdrop-blur-sm transition hover:text-primary hover:ring-primary/30 dark:bg-box-bg/60">Trang chủ</a> <span class="text-heading-3 opacity-60" aria-hidden="true">/</span> <a href="/projects" class="rounded-full bg-box-bg/80 px-3 py-1 font-medium text-heading-3 shadow-sm ring-1 ring-box-border backdrop-blur-sm transition hover:text-primary hover:ring-primary/30 dark:bg-box-bg/60">Dự án</a> <span class="text-heading-3 opacity-60" aria-hidden="true">/</span> <span class="rounded-full bg-primary/12 px-3 py-1 font-semibold text-primary ring-1 ring-primary/25">Web application</span> </nav> <header class="mt-10 max-w-3xl space-y-5"> <p class="inline-flex w-fit rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary ring-1 ring-primary/30 bg-white/65 dark:bg-box-bg/50 backdrop-blur-sm">
Web application đã làm
</p> <h1 class="text-balance text-[2rem] leading-[1.12] font-bold tracking-tight text-heading-1 sm:text-4xl sm:leading-[1.08] md:text-5xl">
Các dự án web application đã triển khai cho vận hành thực tế
</h1> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "!text-heading-3 !text-[1.05rem] !leading-relaxed md:!text-lg" }, { "default": ($$result4) => renderTemplate`
Tập trung vào hệ thống có nghiệp vụ rõ: quản lý dữ liệu, phân quyền và đo lường hiệu quả theo từng nhóm người dùng.
` })} </header> ` })} </section> <section class="relative" aria-label="Danh sách dự án web application"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="grid gap-6 md:grid-cols-2"> ${webApplicationProjects.map((project) => renderTemplate`<article class="rounded-3xl border border-box-border bg-box-bg/90 p-7 shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70"> <img${addAttribute(project.image, "src")}${addAttribute(project.imageAlt, "alt")} loading="lazy" class="mb-5 aspect-[16/9] w-full rounded-2xl border border-box-border/70 object-cover"> <span class="inline-flex items-center rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary ring-1 ring-primary/20"> ${project.industry} </span> <h2 class="mt-5 text-2xl font-semibold text-heading-2">${project.name}</h2> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "mt-4 !text-heading-3 !leading-relaxed" }, { "default": ($$result4) => renderTemplate`${project.summary}` })} <div class="mt-5 rounded-2xl border border-box-border/80 bg-white/65 p-4 dark:bg-white/[0.03]"> <p class="text-xs font-semibold uppercase tracking-[0.12em] text-heading-3">Kết quả nổi bật</p> <p class="mt-2 text-base font-semibold text-heading-2">${project.result}</p> </div> <p class="mt-4 text-sm text-heading-3"> <span class="font-semibold text-heading-2">Stack:</span> ${project.stack} </p> </article>`)} </div> <div class="mt-10 flex flex-wrap gap-3"> ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/projects/website", "variant": "secondary", "text": "Xem d\u1EF1 \xE1n Website", "className": "rounded-full border border-box-border bg-white/70 dark:bg-white/[0.05]" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/contact?package=web-application", "variant": "primary", "text": "Nh\u1EADn t\u01B0 v\u1EA5n d\u1EF1 \xE1n t\u01B0\u01A1ng t\u1EF1" })} </div> ` })} </section> ${renderComponent($$result2, "CTA", $$CTA, {})} ${renderComponent($$result2, "ComtactForm", $$ComtactForm, {})} </main> ` })}`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/pages/projects/web-application.astro", void 0);

const $$file = "/Users/npttruong/projects/npt-project/nopete.com/src/pages/projects/web-application.astro";
const $$url = "/projects/web-application";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WebApplication,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
