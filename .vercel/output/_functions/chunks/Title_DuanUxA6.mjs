import { e as createComponent, m as maybeRenderHead, n as renderSlot, r as renderTemplate } from './astro/server_C3auuEWL.mjs';
import 'piccolore';
import 'clsx';

const $$Title = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl"> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/shared/Title.astro", void 0);

export { $$Title as $ };
