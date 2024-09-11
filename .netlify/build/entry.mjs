import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DBBb0mAk.mjs';
import { onRequest } from './_noop-middleware.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/home.astro.mjs');
const _page2 = () => import('./pages/picture.astro.mjs');
const _page3 = () => import('./pages/pictures.astro.mjs');
const _page4 = () => import('./pages/project.astro.mjs');
const _page5 = () => import('./pages/projects.astro.mjs');
const _page6 = () => import('./pages/video.astro.mjs');
const _page7 = () => import('./pages/videos.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/home.astro", _page1],
    ["src/pages/picture.astro", _page2],
    ["src/pages/pictures.astro", _page3],
    ["src/pages/project.astro", _page4],
    ["src/pages/projects.astro", _page5],
    ["src/pages/video.astro", _page6],
    ["src/pages/videos.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "bcfbeb44-3fe1-4310-8369-16c8445d4bc8"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
