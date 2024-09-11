/* empty css                                */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_cn9qutOL.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$NavBar } from '../chunks/Layout_CdFKC9q1.mjs';
import { $ as $$Home } from '../chunks/home_C7DkcQSD.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> ${renderComponent($$result, "Layout", $$Layout, { "title": "PORTFOLIO" })}${maybeRenderHead()}<body> <header> ${renderComponent($$result, "NavBar", $$NavBar, {})} </header> ${renderComponent($$result, "Home", $$Home, {})} </body></html>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/pages/index.astro", void 0);

const $$file = "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
