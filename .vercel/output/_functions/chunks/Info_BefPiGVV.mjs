import { e as createComponent, m as maybeRenderHead, n as renderSlot, k as renderComponent, r as renderTemplate, h as createAstro } from './astro/server_C3auuEWL.mjs';
import 'piccolore';
import { c as $$Paragraph } from './Layout_DdMl-pcr.mjs';

const $$Astro = createAstro();
const $$Info = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Info;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden"> <div class="rounded-xl bg-gray-300 dark:bg-gray-950 p-3 text-heading-1 w-max relative"> ${renderSlot($$result, $$slots["icon"])} </div> <h2 class="md:text-xl font-semibold text-heading-2 mt-6 mb-4"> ${title} </h2> ${renderComponent($$result, "Paragraph", $$Paragraph, {}, { "default": ($$result2) => renderTemplate`${description}` })} </div>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/cards/Info.astro", void 0);

export { $$Info as $ };
