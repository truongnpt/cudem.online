import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_C3auuEWL.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DVbFg2_E.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/NPT_PROJECT/nopete.com/","cacheDir":"file:///D:/NPT_PROJECT/nopete.com/node_modules/.astro/","outDir":"file:///D:/NPT_PROJECT/nopete.com/dist/","srcDir":"file:///D:/NPT_PROJECT/nopete.com/src/","publicDir":"file:///D:/NPT_PROJECT/nopete.com/public/","buildClientDir":"file:///D:/NPT_PROJECT/nopete.com/dist/client/","buildServerDir":"file:///D:/NPT_PROJECT/nopete.com/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about-us/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about-us","isIndex":false,"type":"page","pattern":"^\\/about-us\\/?$","segments":[[{"content":"about-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-us.astro","pathname":"/about-us","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"faqs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faqs","isIndex":false,"type":"page","pattern":"^\\/faqs\\/?$","segments":[[{"content":"faqs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faqs.astro","pathname":"/faqs","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"packages/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/packages","isIndex":false,"type":"page","pattern":"^\\/packages\\/?$","segments":[[{"content":"packages","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/packages.astro","pathname":"/packages","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"process-deployment/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/process-deployment","isIndex":false,"type":"page","pattern":"^\\/process-deployment\\/?$","segments":[[{"content":"process-deployment","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/process-deployment.astro","pathname":"/process-deployment","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/web-application/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/web-application","isIndex":false,"type":"page","pattern":"^\\/projects\\/web-application\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"web-application","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/web-application.astro","pathname":"/projects/web-application","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/website/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/website","isIndex":false,"type":"page","pattern":"^\\/projects\\/website\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"website","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/website.astro","pathname":"/projects/website","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/NPT_PROJECT/nopete.com/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/NPT_PROJECT/nopete.com/src/pages/about-us.astro",{"propagation":"none","containsHead":true}],["D:/NPT_PROJECT/nopete.com/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["D:/NPT_PROJECT/nopete.com/src/pages/faqs.astro",{"propagation":"none","containsHead":true}],["D:/NPT_PROJECT/nopete.com/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/NPT_PROJECT/nopete.com/src/pages/packages.astro",{"propagation":"none","containsHead":true}],["D:/NPT_PROJECT/nopete.com/src/pages/process-deployment.astro",{"propagation":"none","containsHead":true}],["D:/NPT_PROJECT/nopete.com/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["D:/NPT_PROJECT/nopete.com/src/pages/projects/web-application.astro",{"propagation":"none","containsHead":true}],["D:/NPT_PROJECT/nopete.com/src/pages/projects/website.astro",{"propagation":"none","containsHead":true}],["D:/NPT_PROJECT/nopete.com/src/pages/services/[slug].astro",{"propagation":"none","containsHead":true}],["D:/NPT_PROJECT/nopete.com/src/pages/services/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about-us@_@astro":"pages/about-us.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/faqs@_@astro":"pages/faqs.astro.mjs","\u0000@astro-page:src/pages/packages@_@astro":"pages/packages.astro.mjs","\u0000@astro-page:src/pages/process-deployment@_@astro":"pages/process-deployment.astro.mjs","\u0000@astro-page:src/pages/projects/web-application@_@astro":"pages/projects/web-application.astro.mjs","\u0000@astro-page:src/pages/projects/website@_@astro":"pages/projects/website.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/services/[slug]@_@astro":"pages/services/_slug_.astro.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DquKKndP.mjs","D:/NPT_PROJECT/nopete.com/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CliRTXnn.mjs","D:/NPT_PROJECT/nopete.com/src/components/react/HeroConsultForm":"_astro/HeroConsultForm.B2WjG3oB.js","D:/NPT_PROJECT/nopete.com/src/components/react/ContactFormFormik":"_astro/ContactFormFormik.Ch2cPB60.js","@astrojs/react/client.js":"_astro/client.CBoWd3Gx.js","D:/NPT_PROJECT/nopete.com/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BOGvKym0.js","D:/NPT_PROJECT/nopete.com/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.Br0oG0n8.js","D:/NPT_PROJECT/nopete.com/src/components/sections/PackageServices.astro?astro&type=script&index=0&lang.ts":"_astro/PackageServices.astro_astro_type_script_index_0_lang.Dhlu6ON3.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/NPT_PROJECT/nopete.com/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const a=document.querySelector(\"[data-toggle-nav]\"),t=document.querySelector(\"[data-navbar]\"),n=document.querySelector(\"[data-nav-overlay]\");function r(){a.setAttribute(\"data-open-nav\",\"false\"),a.setAttribute(\"aria-expanded\",\"false\"),n.setAttribute(\"data-is-visible\",\"false\"),t.setAttribute(\"data-drawer-open\",\"false\"),document.body.classList.remove(\"!overflow-y-hidden\"),t.querySelectorAll(\"[data-nav-submenu-toggle]\").forEach(e=>{e.setAttribute(\"aria-expanded\",\"false\")}),t.querySelectorAll(\"[data-nav-submenu-panel]\").forEach(e=>{e.removeAttribute(\"data-open\"),e.setAttribute(\"aria-hidden\",\"true\")})}function i(){a.setAttribute(\"data-open-nav\",\"true\"),a.setAttribute(\"aria-expanded\",\"true\"),n.setAttribute(\"data-is-visible\",\"true\"),t.setAttribute(\"data-drawer-open\",\"true\"),document.body.classList.add(\"!overflow-y-hidden\")}a&&t&&n&&(a.addEventListener(\"click\",e=>{e.preventDefault(),a.getAttribute(\"data-open-nav\")===\"false\"?i():r()}),t.addEventListener(\"click\",e=>{const d=e.target;if(d.closest(\"[data-close-drawer]\")){e.preventDefault(),r();return}d.closest(\"a[href]\")&&r()}),n.addEventListener(\"click\",()=>{r()}),document.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&t.getAttribute(\"data-drawer-open\")===\"true\"&&r()}),window.addEventListener(\"resize\",()=>{window.matchMedia(\"(min-width: 1024px)\").matches&&t.getAttribute(\"data-drawer-open\")===\"true\"&&r()},{passive:!0}));"],["D:/NPT_PROJECT/nopete.com/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts","const t=document.querySelector(\"[data-switch-theme]\");localStorage.getItem(\"appTheme\")===\"dark\"||!(\"appTheme\"in localStorage)&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?document.documentElement.classList.add(\"dark\"):document.documentElement.classList.remove(\"dark\");t&&t.addEventListener(\"click\",a=>{a.preventDefault();const e=document.documentElement;e&&(localStorage.getItem(\"appTheme\")?localStorage.getItem(\"appTheme\")===\"light\"?(e.classList.add(\"dark\"),localStorage.setItem(\"appTheme\",\"dark\")):(document.documentElement.classList.remove(\"dark\"),localStorage.setItem(\"appTheme\",\"light\")):e.classList.contains(\"dark\")?(e.classList.remove(\"dark\"),localStorage.setItem(\"appTheme\",\"light\")):(e.classList.add(\"dark\"),localStorage.setItem(\"appTheme\",\"dark\")))});"]],"assets":["/_astro/about-us.7W8nYQBB.css","/favicon.png","/images/dev-with-c-1.webp","/images/dev-with-c.webp","/images/image1.webp","/images/right-banner.png","/logos/logo.png","/logos/paypallogo.png","/logos/slack.png","/logos/spotify.png","/_astro/client.CBoWd3Gx.js","/_astro/ContactFormFormik.Ch2cPB60.js","/_astro/HeroConsultForm.B2WjG3oB.js","/_astro/index.C5BVv2q5.js","/_astro/PackageServices.astro_astro_type_script_index_0_lang.Dhlu6ON3.js","/_astro/PackageServices.C3pJtvjs.css","/_astro/showToast.BbWPTZmk.js","/images/projects/an-minh-logistics.svg","/images/projects/cliniccare-portal.svg","/images/projects/day-lai-xe-365.svg","/images/projects/edutify.svg","/images/projects/edutrack-lms.svg","/images/projects/future-accounting.svg","/images/projects/hack-game.svg","/images/projects/moc-studio.svg","/images/projects/oc-buou-vang.svg","/images/projects/salesops-hub.svg","/images/projects/u-work.svg","/images/projects/vietfresh-foods.svg","/404.html","/about-us/index.html","/contact/index.html","/faqs/index.html","/packages/index.html","/process-deployment/index.html","/projects/web-application/index.html","/projects/website/index.html","/projects/index.html","/services/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"2wweUn0YGEG47nrPjP+96tZ14648e0RLv/vQ3XyxRi4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
