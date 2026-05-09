import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Bl3dXvUH.mjs';
import { manifest } from './manifest_jpSgrYQF.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about-us.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/faqs.astro.mjs');
const _page6 = () => import('./pages/order.astro.mjs');
const _page7 = () => import('./pages/packages.astro.mjs');
const _page8 = () => import('./pages/process-deployment.astro.mjs');
const _page9 = () => import('./pages/projects/web-application.astro.mjs');
const _page10 = () => import('./pages/projects/website.astro.mjs');
const _page11 = () => import('./pages/projects.astro.mjs');
const _page12 = () => import('./pages/services/_slug_.astro.mjs');
const _page13 = () => import('./pages/services.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about-us.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/faqs.astro", _page5],
    ["src/pages/order.astro", _page6],
    ["src/pages/packages.astro", _page7],
    ["src/pages/process-deployment.astro", _page8],
    ["src/pages/projects/web-application.astro", _page9],
    ["src/pages/projects/website.astro", _page10],
    ["src/pages/projects.astro", _page11],
    ["src/pages/services/[slug].astro", _page12],
    ["src/pages/services/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "fb944c51-a334-44ea-83db-29e3fb4006f8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
