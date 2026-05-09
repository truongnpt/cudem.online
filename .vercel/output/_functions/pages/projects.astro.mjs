import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_C3auuEWL.mjs';
import 'piccolore';
/* empty css                                    */
import { e as projects, $ as $$Layout, a as $$Container, c as $$Paragraph, b as $$BtnLink } from '../chunks/Layout_DdMl-pcr.mjs';
import { $ as $$CTA } from '../chunks/CTA_6qNFv4WB.mjs';
import { $ as $$ComtactForm } from '../chunks/ComtactForm_CBPtv-9l.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const projectTypeMeta = {
    website: {
      label: "Website",
      badge: "Website doanh nghi\u1EC7p",
      timeline: "2-5 tu\u1EA7n",
      stack: "Astro / WordPress / TailwindCSS",
      contactPackageId: "website-doanh-nghiep"
    },
    "web-application": {
      label: "Web application",
      badge: "H\u1EC7 th\u1ED1ng v\u1EADn h\xE0nh web",
      timeline: "4-12 tu\u1EA7n",
      stack: "Next.js / Laravel / PostgreSQL",
      contactPackageId: "web-application"
    }
  };
  const normalizeType = (value) => {
    if (value === "website" || value === "web-application") return value;
    return null;
  };
  const inferType = (project) => project.title.toLowerCase().includes("application") ? "web-application" : "website";
  const selectedType = normalizeType(Astro2.url.searchParams.get("type"));
  const normalizedProjects = projects.map((project) => {
    const type = inferType(project);
    return {
      ...project,
      type,
      ...projectTypeMeta[type]
    };
  });
  const visibleProjects = selectedType ? normalizedProjects.filter((project) => project.type === selectedType) : normalizedProjects;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "D\u1EF1 \xE1n \u0111\xE3 tri\u1EC3n khai" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex flex-col gap-y-20 md:gap-y-28 overflow-hidden pt-28 lg:pt-36 pb-12 md:pb-20"> <section aria-labelledby="projects-heading" class="relative"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <nav class="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm" aria-label="Breadcrumb"> <a href="/" class="rounded-full bg-box-bg/80 px-3 py-1 font-medium text-heading-3 shadow-sm ring-1 ring-box-border backdrop-blur-sm transition hover:text-primary hover:ring-primary/30 dark:bg-box-bg/60">Trang chủ</a> <span class="text-heading-3 opacity-60" aria-hidden="true">/</span> <span class="rounded-full bg-primary/12 px-3 py-1 font-semibold text-primary ring-1 ring-primary/25">Dự án</span> </nav> <header class="mt-10 max-w-3xl space-y-5"> <p class="inline-flex w-fit rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary ring-1 ring-primary/30 bg-white/65 dark:bg-box-bg/50 backdrop-blur-sm">
Dự án tiêu biểu
</p> <h1 id="projects-heading" class="text-balance text-[2rem] leading-[1.12] font-bold tracking-tight text-heading-1 sm:text-4xl sm:leading-[1.08] md:text-5xl">
Các dự án chúng tôi đã triển khai và tối ưu theo mục tiêu thực tế
</h1> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "!text-heading-3 !text-[1.05rem] !leading-relaxed md:!text-lg" }, { "default": ($$result4) => renderTemplate`
Mỗi dự án đều bắt đầu từ vấn đề kinh doanh rõ ràng: tăng chuyển đổi,
            chuẩn hóa quy trình hoặc nâng chất lượng trải nghiệm người dùng trên
            web.
` })} <div class="flex flex-wrap gap-3"> ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/projects", "variant": selectedType === null ? "primary" : "secondary", "text": "T\u1EA5t c\u1EA3", "className": "rounded-full border border-box-border bg-white/60 dark:bg-white/[0.05]" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/projects/website", "variant": selectedType === "website" ? "primary" : "secondary", "text": "Website", "className": "rounded-full border border-box-border bg-white/60 dark:bg-white/[0.05]" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/projects/web-application", "variant": selectedType === "web-application" ? "primary" : "secondary", "text": "Web application", "className": "rounded-full border border-box-border bg-white/60 dark:bg-white/[0.05]" })} </div> </header> ` })} </section> <section class="relative" aria-label="Danh sách dự án"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${visibleProjects.length === 0 ? renderTemplate`<div class="rounded-3xl border border-dashed border-box-border bg-box-bg/75 p-8 text-center md:p-12"> <h2 class="text-2xl font-semibold text-heading-2">
Chưa có dự án đúng bộ lọc này
</h2> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "mt-3 !text-heading-3" }, { "default": ($$result4) => renderTemplate`
Bạn có thể xem toàn bộ dự án hoặc liên hệ để nhận case study gần
                nhất theo lĩnh vực của mình.
` })} <div class="mt-6 flex justify-center"> ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/projects", "variant": "primary", "text": "Xem t\u1EA5t c\u1EA3 d\u1EF1 \xE1n" })} </div> </div>` : renderTemplate`<div class="grid gap-6 md:grid-cols-2"> ${visibleProjects.map((project) => renderTemplate`<article class="rounded-3xl border border-box-border bg-box-bg/90 p-7 shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70"> <div class="flex items-start justify-between gap-4"> <span class="inline-flex items-center rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary ring-1 ring-primary/20"> ${project.badge} </span> <span class="text-heading-3">${unescapeHTML(project.icon)}</span> </div> <h2 class="mt-5 text-2xl font-semibold text-heading-2"> ${project.title} </h2> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "mt-4 !text-heading-3 !leading-relaxed" }, { "default": ($$result4) => renderTemplate`${project.description}` })} <dl class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"> <div class="rounded-2xl border border-box-border/80 bg-white/65 p-4 dark:bg-white/[0.03]"> <dt class="text-xs font-semibold uppercase tracking-[0.12em] text-heading-3">
Thời gian điển hình
</dt> <dd class="mt-2 text-base font-semibold text-heading-2"> ${project.timeline} </dd> </div> <div class="rounded-2xl border border-box-border/80 bg-white/65 p-4 dark:bg-white/[0.03]"> <dt class="text-xs font-semibold uppercase tracking-[0.12em] text-heading-3">
Công nghệ đề xuất
</dt> <dd class="mt-2 text-base font-semibold text-heading-2"> ${project.stack} </dd> </div> </dl> <div class="mt-7 flex flex-wrap gap-3"> ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": `/contact?package=${project.contactPackageId}`, "variant": "primary", "text": "Nh\u1EADn t\u01B0 v\u1EA5n t\u01B0\u01A1ng t\u1EF1" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/packages", "variant": "secondary", "text": "Xem g\xF3i d\u1ECBch v\u1EE5", "className": "rounded-full border border-box-border bg-white/70 dark:bg-white/[0.05]" })} </div> </article>`)} </div>`}` })} </section> ${renderComponent($$result2, "CTA", $$CTA, {})} ${renderComponent($$result2, "ComtactForm", $$ComtactForm, {})} </main> ` })}`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/pages/projects.astro", void 0);

const $$file = "/Users/npttruong/projects/npt-project/nopete.com/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
