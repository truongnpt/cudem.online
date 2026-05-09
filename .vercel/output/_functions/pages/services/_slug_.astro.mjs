import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, l as Fragment, g as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_C3auuEWL.mjs';
import 'piccolore';
/* empty css                                       */
import { s as services, $ as $$Layout, a as $$Container, c as $$Paragraph, b as $$BtnLink } from '../../chunks/Layout_DdMl-pcr.mjs';
import { $ as $$CTA } from '../../chunks/CTA_6qNFv4WB.mjs';
import { $ as $$ComtactForm } from '../../chunks/ComtactForm_CBPtv-9l.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return services.map((s) => ({
    params: { slug: s.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const service = slug == null ? void 0 : services.find((s) => s.slug === slug);
  if (!service) {
    return Astro2.redirect("/services");
  }
  const typed = service;
  const related = services.filter((s) => s.slug !== typed.slug);
  const crumbs = [
    { href: "/", label: "Trang ch\u1EE7" },
    { href: "/services", label: "D\u1ECBch v\u1EE5" }
  ];
  const toc = [
    { id: "#loi-ich", label: "L\u1EE3i \xEDch r\xF5 \u0111\u01B0\u1EDDng" },
    { id: "#gia-tri-ban-giao", label: "B\xE0n giao & ph\u1EA1m vi" },
    { id: "#quy-trinh", label: "Quy tr\xECnh" },
    { id: "#phu-hop", label: "Khi ph\xF9 h\u1EE3p nh\u1EA5t" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": typed.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="relative flex flex-col gap-y-24 md:gap-y-32 overflow-hidden pt-28 lg:pt-36 pb-12 md:pb-20"> <div aria-hidden="true" class="pointer-events-none fixed inset-x-0 top-0 -z-30 h-[min(75vh,580px)]"> <div class="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.08] via-primary/[0.04] dark:from-emerald-500/[0.14] dark:via-primary/[0.06] to-transparent"></div> <div class="absolute right-[-8%] top-[6%] h-[min(52vw,480px)] w-[min(52vw,480px)] rounded-full bg-gradient-to-bl from-teal-200/55 via-primary/18 to-transparent blur-[100px] dark:from-teal-900/25 dark:via-primary/36"></div> <div class="absolute left-[-14%] top-[40%] h-[clamp(240px,36vw,400px)] w-[clamp(240px,36vw,400px)] rounded-full bg-gradient-to-tr from-amber-200/45 via-transparent to-transparent blur-[90px] dark:from-amber-950/55"></div> </div>  <header class="relative"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <nav class="mb-10 flex flex-wrap items-center gap-2 text-sm" aria-label="Breadcrumb"> ${crumbs.map((c, i) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` <a${addAttribute(c.href, "href")} class="rounded-full px-2 py-1 font-medium text-heading-3 shadow-sm ring-1 ring-box-border/80 backdrop-blur-sm transition hover:text-primary hover:ring-primary/25 dark:bg-white/[0.03]"> ${c.label} </a> <span class="opacity-70">/</span> ` })}`)} <span class="rounded-full bg-primary/12 px-2 py-1 font-semibold text-primary ring-1 ring-primary/25 line-clamp-1 max-w-[min(92vw,20rem)]">${typed.title}</span> </nav> <div class="grid items-start gap-12 lg:grid-cols-12 lg:gap-16"> <div class="flex flex-col gap-8 lg:col-span-7"> <div class="inline-flex h-[4.75rem] w-[4.75rem] shrink-0 items-center justify-center rounded-[1.375rem] border border-heading-1/[0.08] bg-gradient-to-br from-gray-50 to-gray-100/85 text-heading-1 shadow-inner shadow-black/5 dark:border-white/[0.1] dark:from-gray-900 dark:to-black/65" aria-hidden="true"> <span class="[&_svg]:text-current">${unescapeHTML(typed.icon)}</span> </div> <div class="space-y-6"> <span class="inline-flex w-fit items-center rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary ring-1 ring-primary/20 backdrop-blur-md dark:bg-box-bg/65">Đang xem chi tiết dịch vụ</span> <h1 class="text-balance text-3xl font-bold tracking-tight text-heading-1 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"> ${typed.title} </h1> <p class="max-w-xl text-xl font-medium leading-[1.55] text-heading-2 lg:text-[1.35rem] lg:leading-[1.5]"> ${typed.tagline} </p> <div class="max-w-2xl text-[1.05rem] leading-[1.75] text-heading-3 lg:text-[1.0625rem]"> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "!text-inherit !leading-[inherit]" }, { "default": ($$result4) => renderTemplate`${typed.description}` })} </div> <div class="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap"> ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/contact", "variant": "primary", "text": "N\xF3i ng\u1EAFn v\u1EC1 d\u1EF1 \xE1n" })} ${renderComponent($$result3, "BtnLink", $$BtnLink, { "href": "/#package-services", "variant": "secondary", "text": "G\xF3i & b\xE1o gi\xE1", "className": "rounded-full border border-box-border bg-white/65 px-6 py-3 backdrop-blur-sm dark:bg-white/[0.05]" })} </div> </div> </div> <aside class="lg:col-span-5 lg:sticky lg:top-[6.75rem]" aria-label="Tóm lược nhanh"> <div class="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-br from-white/92 via-emerald-50/45 to-transparent p-[1px] shadow-[0_20px_50px_-12px_rgb(39_152_36/0.35)] backdrop-blur-md dark:border-white/[0.1] dark:from-box-bg/90 dark:via-primary/[0.12] dark:to-transparent dark:shadow-black/65"> <div class="flex flex-col gap-6 rounded-[1.6875rem] bg-white/80 px-7 py-8 dark:bg-box-bg/80"> <div class="relative z-[1]"> <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
Tập trung chính
</p> <ul class="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-heading-3"> <li class="flex gap-3 rounded-2xl bg-primary/[0.06] px-4 py-3 dark:bg-primary/[0.12]"> <span class="mt-0.5 text-primary opacity-95">✓</span>
Nội dung &amp; chỉ báo chốt trong brief hai bên nhìn cùng một
                      bảng nghiệm thu.
</li> <li class="flex gap-3 px-1"> <span class="mt-0.5 text-primary">✓</span>
Theo dõi chỉ báo và lịch lặp chỉnh sửa theo các “vòng” đã báo
                      trong proposal.
</li> <li class="flex gap-3 px-1"> <span class="mt-0.5 text-primary">✓</span>
Bản xem các màn trọng điểm trước khi triển khai hàng loạt màn
                      phụ không rõ KPI.
</li> </ul> </div> <span class="pointer-events-none absolute -bottom-28 right-[-20%] h-56 w-56 rounded-full bg-primary/22 blur-[70px]"></span> </div> </div> </aside> </div> ` })} </header> <div class="relative"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="grid gap-14 lg:grid-cols-12 lg:gap-16 xl:items-start"> <aside class="order-2 space-y-10 lg:order-1 lg:col-span-4 xl:col-span-3 xl:sticky xl:top-32" aria-labelledby="svc-onpage-nav-heading"> <div class="rounded-[1.5rem] border border-white/70 bg-white/75 p-7 shadow-xl shadow-heading-1/[0.04] backdrop-blur-xl ring-1 ring-primary/10 dark:border-white/[0.08] dark:bg-box-bg/70 dark:shadow-black/45"> <h2 id="svc-onpage-nav-heading" class="text-[0.7rem] font-bold uppercase tracking-[0.26em] text-primary">
Trên trang này
</h2> <ul class="mt-5 flex flex-wrap gap-2 lg:flex-col xl:flex-nowrap"> ${toc.map((link) => renderTemplate`<li> <a${addAttribute(link.id, "href")} class="inline-flex w-full lg:w-auto rounded-xl border border-transparent bg-heading-1/[0.03] px-4 py-2.5 text-sm font-semibold text-heading-2 outline-none ring-primary/35 transition hover:border-primary/35 hover:bg-primary/[0.08] hover:text-primary focus-visible:ring-4 dark:bg-white/[0.04]"> ${link.label} </a> </li>`)} </ul> </div> <div class="rounded-[1.5rem] border border-box-border bg-box-bg/80 p-6 shadow-[0_16px_40px_-20px_rgb(0_0_0/0.18)] backdrop-blur-sm dark:bg-box-bg/60 dark:shadow-black/65"> <p class="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-heading-3 dark:text-heading-3/90">
Dịch vụ khác cho bạn
</p> <ul class="space-y-3"> ${related.map((s) => renderTemplate`<li> <a${addAttribute(`/services/${s.slug}`, "href")} class="group block rounded-2xl border border-box-border bg-body/90 px-4 py-4 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-gradient-to-br hover:from-primary/[0.07] hover:to-transparent hover:shadow-md dark:bg-white/[0.03]"> <span class="flex items-start justify-between gap-3"> <span class="font-semibold leading-snug text-heading-2 group-hover:text-primary"> ${s.title} </span> <span aria-hidden="true" class="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/[0.1] text-primary transition group-hover:bg-primary group-hover:text-white dark:bg-primary/[0.18]"> <svg xmlns="http://www.w3.org/2000/svg" class="size-[1rem]" fill="none" viewBox="0 0 24 24" stroke-width="2.25" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m0 0l-5-5m5 5l-5 5"></path> </svg> </span> </span> <p class="mt-2 line-clamp-2 text-[0.9rem] leading-relaxed text-heading-3 opacity-[0.92]"> ${s.description} </p> </a> </li>`)} </ul> </div> </aside> <div class="order-1 flex flex-col gap-16 lg:order-2 lg:col-span-8 xl:col-span-9 lg:gap-20"> <section id="loi-ich" class="scroll-mt-36 space-y-8" aria-labelledby="label-benefits"> <div class="flex flex-wrap items-end justify-between gap-4 border-b border-box-border pb-8"> <div class="space-y-3 max-w-2xl"> <span id="label-benefits" class="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-primary">Đẹp không đổi chỗ được — hiệu quả mới bền</span> <h2 class="text-3xl font-bold tracking-tight text-heading-1">
Trong phạm vi hợp đồng, bạn nhận được
</h2> <p class="text-[1.02rem] leading-relaxed text-heading-3 lg:text-[1.06rem]">
Mỗi ý được “khóa chữ và hình”: sau ký kết chỉ chỉnh theo các
                    gói thay đổi được gắn số chứng từ, để không lệch các buổi
                    demo cuối.
</p> </div> </div> <ul class="grid gap-4 sm:grid-cols-2 sm:gap-5" role="list"> ${typed.benefits.map((line) => renderTemplate`<li class="group rounded-2xl border border-box-border bg-white/72 p-6 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.12)] backdrop-blur-sm transition hover:border-primary/30 hover:shadow-[0_14px_40px_-14px_rgb(39_152_36/0.28)] dark:border-white/[0.07] dark:bg-white/[0.03] dark:shadow-black/50" role="listitem"> <span class="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-emerald-500/[0.12] text-emerald-600 dark:bg-primary/20 dark:text-primary"> <span aria-hidden="true">&check;</span> </span> <p class="text-[1rem] font-medium leading-[1.6] text-heading-2 lg:text-[1.03rem]"> ${line} </p> </li>`)} </ul> </section> <section id="gia-tri-ban-giao" class="scroll-mt-36 relative overflow-hidden rounded-[1.875rem] border border-heading-1/[0.06] bg-gradient-to-br from-white/95 via-emerald-50/[0.42] to-amber-50/25 px-px py-px shadow-xl shadow-heading-1/[0.08] backdrop-blur-sm dark:border-white/[0.08] dark:from-[#141c31]/94 dark:via-primary/[0.12] dark:to-amber-900/15 dark:shadow-black/55 md:rounded-[2rem]"> <div class="relative rounded-[1.8375rem] bg-white/[0.94] px-8 py-10 md:rounded-[calc(2rem-1px)] lg:px-12 lg:py-12 dark:bg-box-bg/88"> <span class="pointer-events-none absolute -right-20 top-[-5rem] size-[320px] rounded-full bg-primary/22 blur-[100px]"></span> <header class="relative z-[1] max-w-xl space-y-3"> <span class="text-[0.7rem] font-bold uppercase tracking-[0.26em] text-primary">Output chốt trước khi vào sprint</span> <h2 class="text-3xl font-bold tracking-tight text-heading-1">
Bàn giao &amp; phạm vi tường minh
</h2> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "!text-heading-3 !text-[1.02rem] !leading-relaxed lg:!text-[1.0625rem]" }, { "default": ($$result4) => renderTemplate`
Buổi khóa phạm vi chỉ chứa hạng mục không mơ hồ; gói thay
                    đổi chỉ kích hoạt khi thực sự không thể chờ hết các vòng
                    chỉnh sửa đã thống nhất.
` })} </header> <ol class="relative z-[1] mt-10 space-y-4" aria-label="Danh mục bàn giao"> ${typed.deliverables.map((item, i) => renderTemplate`<li class="flex gap-5 rounded-xl border border-box-border bg-body/92 px-5 py-5 dark:border-white/[0.06] dark:bg-black/25 md:rounded-2xl md:gap-6 md:py-6"> <span class="grid size-12 shrink-0 place-content-center rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.12] to-transparent text-base font-semibold tracking-tighter text-primary"> ${String(i + 1).padStart(2, "0")} </span> <span class="pt-1 text-[1.015rem] font-medium leading-[1.6] text-heading-2 lg:text-[1.05rem]"> ${item} </span> </li>`)} </ol> </div> </section> <section id="quy-trinh" class="scroll-mt-36 space-y-10"> <div class="max-w-2xl space-y-3"> <span class="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-primary">Thời gian chờ phản hồi dự đoán được</span> <h2 class="text-3xl font-bold tracking-tight text-heading-1">
Quy trình chúng tôi neo cho dịch vụ này
</h2> ${renderComponent($$result3, "Paragraph", $$Paragraph, { "className": "text-[1.02rem] !leading-relaxed text-heading-3 lg:!text-[1.05rem]" }, { "default": ($$result4) => renderTemplate`
Bạn thấy mối liên quan giữa từng bước và “chờ phản hồi chủ đầu
                  tư” — chỗ chờ chỉ xuất hiện chứ không làm méo lịch tổng thể
                  của đội bạn trong phòng họp KPI.
` })} </div> <div class="grid gap-5 sm:grid-cols-2 lg:gap-6" role="list"> ${typed.processSteps.map((step, i) => renderTemplate`<div class="relative flex flex-col rounded-2xl border border-transparent bg-heading-1/[0.03] p-8 shadow-inner shadow-black/[0.04] ring-1 ring-box-border/80 backdrop-blur-sm transition hover:ring-primary/35 dark:bg-white/[0.04]" role="listitem"> <span class="mb-6 inline-flex w-fit items-center justify-center rounded-2xl border border-primary/25 bg-gradient-to-br from-primary via-emerald-600 to-teal-600 px-2 py-2 text-[0.7rem] font-bold uppercase tracking-widest text-white shadow-lg shadow-primary/35">
Bước ${String(i + 1).padStart(2, "0")} </span> <p class="text-[1.02rem] font-medium leading-[1.65] text-heading-2 lg:text-[1.05rem] lg:leading-[1.6]"> ${step} </p> </div>`)} </div> </section> <section id="phu-hop" class="scroll-mt-36 rounded-[1.875rem] border border-transparent bg-gradient-to-br from-primary/[0.11] via-primary/[0.04] to-transparent p-[1px] shadow-[0_18px_50px_-20px_rgb(39_152_36/0.45)] dark:shadow-primary/35 md:rounded-[2rem]" aria-labelledby="label-fit"> <div class="rounded-[calc(1.875rem-1px)] px-10 py-11 backdrop-blur-sm md:rounded-[calc(2rem-1px)] lg:px-14 lg:py-14"> <p id="label-fit" class="text-[0.7rem] font-bold uppercase tracking-[0.26em] text-primary mb-5">
Những vai trò mà khách thường gọi nhất
</p> <h2 class="mb-7 text-[1.5rem] font-bold leading-snug tracking-tight text-heading-1 sm:text-3xl lg:text-[1.825rem]">
Dịch vụ hay phù hợp trong bối cảnh của bạn
</h2> <p class="max-w-3xl text-[1.05rem] leading-[1.8] text-heading-2 lg:text-[1.08rem]"> ${typed.idealFor} </p> </div> </section> </div> </div> ` })} </div> ${renderComponent($$result2, "CTA", $$CTA, {})} ${renderComponent($$result2, "ComtactForm", $$ComtactForm, {})} </article> ` })}`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/pages/services/[slug].astro", void 0);

const $$file = "/Users/npttruong/projects/npt-project/nopete.com/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
