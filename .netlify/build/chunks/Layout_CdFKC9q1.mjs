import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, e as renderHead, f as renderSlot } from './astro/server_cn9qutOL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Button } from './wordPressQuery_BInkEcrb.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, children } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="navLink w-max px-6 py-2 bg-transparent text-text-nav-link font-truculenta font-bold text-base cursor-pointer hover:text-text-nav-link-hover hover:bg-background-nav-link-hover transition-transform duration-300"> ${children} </a>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/components/NavLink.astro", void 0);

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Mes projets", href: "/projects/" },
    { name: "Mes photos", href: "/pictures/" },
    { name: "Mes videos", href: "/videos/" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="flex items-center justify-center gap-5 p-5"> <ul class="flex items-center justify-center w-max px-8 py-5 gap-5 bg-background-nav-bar"> ${navLinks.map((link) => renderTemplate`<li${addAttribute(link.href, "id")}> ${renderComponent($$result, "NavLink", $$NavLink, { "href": link.href, "children": link.name })} </li>`)} </ul> ${renderComponent($$result, "Button", $$Button, { "color": "red", "size": "medium", "href": "/contact", "children": "Contact" })} </nav>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/components/NavBar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/Layout/Layout.astro", void 0);

export { $$Layout as $, $$NavBar as a };
