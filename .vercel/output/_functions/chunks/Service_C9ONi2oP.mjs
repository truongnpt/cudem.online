import { e as createComponent, m as maybeRenderHead, g as addAttribute, n as renderSlot, u as unescapeHTML, r as renderTemplate, k as renderComponent, h as createAstro } from './astro/server_C3auuEWL.mjs';
import 'piccolore';
import { c as $$Paragraph } from './Layout_DdMl-pcr.mjs';

const $$Astro = createAstro();
const $$Service = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Service;
  const { title, description, icon, embedded = false } = Astro2.props;
  const rootClass = embedded ? "relative overflow-hidden border-0 bg-transparent p-5 shadow-none sm:p-6 lg:p-8 rounded-t-[1.4375rem] rounded-b-none" : "relative overflow-hidden rounded-3xl border border-box-border bg-box-bg p-5 shadow-lg shadow-box-shadow sm:p-6 lg:p-8";
  const decoClass = embedded ? "pointer-events-none absolute -bottom-16 -right-16 aspect-square w-32 rounded-full bg-primary/10 opacity-[0.35]" : "pointer-events-none absolute -bottom-16 -right-16 aspect-square w-32 rounded-full bg-primary/10";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(rootClass, "class")}> <div class="rounded-xl bg-gray-300 dark:bg-gray-950 p-3 text-heading-1 w-max relative"> ${renderSlot($$result, $$slots["default"], renderTemplate`${unescapeHTML(icon)}`)} </div> <div class="mt-6 space-y-4 relative"> <h2 class="text-lg md:text-xl font-semibold text-heading-2"> ${title} </h2> ${renderComponent($$result, "Paragraph", $$Paragraph, {}, { "default": ($$result2) => renderTemplate`${description}` })} </div> <span${addAttribute(decoClass, "class")} aria-hidden="true"></span> </div>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/cards/Service.astro", void 0);

export { $$Service as $ };
