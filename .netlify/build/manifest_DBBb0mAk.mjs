import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'devalue';
import 'html-escaper';
import 'clsx';
import { g as decodeKey } from './chunks/astro/server_cn9qutOL.mjs';
import { compile } from 'path-to-regexp';

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
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
    isIndex: rawRouteData.isIndex
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
    middleware(_, next) {
      return next();
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/chauveauantoine/Desktop/PORTFOLIO%20antoine/Astro/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/home.Cy1OrotH.css"},{"type":"inline","content":".button[data-astro-cid-gbquvnix]{transition:transform .2s,color .2s,background-color .2s}.button[data-astro-cid-gbquvnix]:hover{transform:scale(1.1);color:var(--black);background-color:var(--light-cream)}.button[data-astro-cid-gbquvnix]:active{transform:scale(.9)}\n"}],"routeData":{"route":"/home","isIndex":false,"type":"page","pattern":"^\\/home\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home.astro","pathname":"/home","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/home.Cy1OrotH.css"}],"routeData":{"route":"/picture","isIndex":false,"type":"page","pattern":"^\\/picture\\/?$","segments":[[{"content":"picture","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/picture.astro","pathname":"/picture","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/home.Cy1OrotH.css"},{"type":"inline","content":":root{--red: #d13f3f;--red-light: rgb(237, 136, 136);--black: #1b1b1b;--black-light: #717171;--light-cream: #fff8e8;--background: var(--light-cream);--text: var(--black);--background-btn: var(--light-cream);--text-btn: var(--black);--background-nav-bar: var(--black);--text-nav-bar: var(--light-cream);--background-nav-link: var(--black);--text-nav-link: var(--light-cream);--background-nav-link-hover: var(--light-cream);--text-nav-link-hover: var(--black);--background-btn-primary: var(--red);--text-btn-primary: var(--light-cream);--background-btn-primary-hover: var(--red-light);--text-btn-primary-hover: var(--light-cream)}.carousel:not(:last-of-type){border-bottom:10px solid var(--red)}\n"},{"type":"external","src":"/_astro/pictures.Bb6Visl7.css"}],"routeData":{"route":"/pictures","isIndex":false,"type":"page","pattern":"^\\/pictures\\/?$","segments":[[{"content":"pictures","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pictures.astro","pathname":"/pictures","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/home.Cy1OrotH.css"}],"routeData":{"route":"/project","isIndex":false,"type":"page","pattern":"^\\/project\\/?$","segments":[[{"content":"project","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/project.astro","pathname":"/project","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/home.Cy1OrotH.css"},{"type":"inline","content":":root{--red: #d13f3f;--red-light: rgb(237, 136, 136);--black: #1b1b1b;--black-light: #717171;--light-cream: #fff8e8;--background: var(--light-cream);--text: var(--black);--background-btn: var(--light-cream);--text-btn: var(--black);--background-nav-bar: var(--black);--text-nav-bar: var(--light-cream);--background-nav-link: var(--black);--text-nav-link: var(--light-cream);--background-nav-link-hover: var(--light-cream);--text-nav-link-hover: var(--black);--background-btn-primary: var(--red);--text-btn-primary: var(--light-cream);--background-btn-primary-hover: var(--red-light);--text-btn-primary-hover: var(--light-cream)}.carousel:not(:last-of-type){border-bottom:10px solid var(--red)}\n"},{"type":"external","src":"/_astro/pictures.Bb6Visl7.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/home.Cy1OrotH.css"}],"routeData":{"route":"/video","isIndex":false,"type":"page","pattern":"^\\/video\\/?$","segments":[[{"content":"video","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/video.astro","pathname":"/video","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/home.Cy1OrotH.css"},{"type":"inline","content":":root{--red: #d13f3f;--red-light: rgb(237, 136, 136);--black: #1b1b1b;--black-light: #717171;--light-cream: #fff8e8;--background: var(--light-cream);--text: var(--black);--background-btn: var(--light-cream);--text-btn: var(--black);--background-nav-bar: var(--black);--text-nav-bar: var(--light-cream);--background-nav-link: var(--black);--text-nav-link: var(--light-cream);--background-nav-link-hover: var(--light-cream);--text-nav-link-hover: var(--black);--background-btn-primary: var(--red);--text-btn-primary: var(--light-cream);--background-btn-primary-hover: var(--red-light);--text-btn-primary-hover: var(--light-cream)}.carousel:not(:last-of-type){border-bottom:10px solid var(--red)}\n"},{"type":"external","src":"/_astro/pictures.Bb6Visl7.css"}],"routeData":{"route":"/videos","isIndex":false,"type":"page","pattern":"^\\/videos\\/?$","segments":[[{"content":"videos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/videos.astro","pathname":"/videos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/home.Cy1OrotH.css"},{"type":"inline","content":":root{--red: #d13f3f;--red-light: rgb(237, 136, 136);--black: #1b1b1b;--black-light: #717171;--light-cream: #fff8e8;--background: var(--light-cream);--text: var(--black);--background-btn: var(--light-cream);--text-btn: var(--black);--background-nav-bar: var(--black);--text-nav-bar: var(--light-cream);--background-nav-link: var(--black);--text-nav-link: var(--light-cream);--background-nav-link-hover: var(--light-cream);--text-nav-link-hover: var(--black);--background-btn-primary: var(--red);--text-btn-primary: var(--light-cream);--background-btn-primary-hover: var(--red-light);--text-btn-primary-hover: var(--light-cream)}.carousel:not(:last-of-type){border-bottom:10px solid var(--red)}\n.button[data-astro-cid-gbquvnix]{transition:transform .2s,color .2s,background-color .2s}.button[data-astro-cid-gbquvnix]:hover{transform:scale(1.1);color:var(--black);background-color:var(--light-cream)}.button[data-astro-cid-gbquvnix]:active{transform:scale(.9)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/pages/pictures.astro",{"propagation":"none","containsHead":true}],["/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/pages/videos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/home@_@astro":"pages/home.astro.mjs","\u0000@astro-page:src/pages/picture@_@astro":"pages/picture.astro.mjs","\u0000@astro-page:src/pages/pictures@_@astro":"pages/pictures.astro.mjs","\u0000@astro-page:src/pages/project@_@astro":"pages/project.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/video@_@astro":"pages/video.astro.mjs","\u0000@astro-page:src/pages/videos@_@astro":"pages/videos.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DBBb0mAk.mjs","/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/home.Cy1OrotH.css","/_astro/pictures.Bb6Visl7.css","/favicon.svg","/_astro/client.5I5BMcNS.js","/assets/bdx-22.jpg","/assets/payasage.avif","/assets/payasage.jpg","/assets/photoabout.jpg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"3ZB/tX1WueUWGvYjawBUiCLNLlAMUGIbWXQuGZwTNAI=","experimentalEnvGetSecretEnabled":false});

export { manifest };
