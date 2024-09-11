import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro } from './astro/server_cn9qutOL.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Button } from './wordPressQuery_BInkEcrb.mjs';

const $$Astro = createAstro();
const $$CardProject = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardProject;
  const { image, title, description, tags, href, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-8 flex-col justify-center items-center max-w-sm font-truculenta bg-black p-5"> <img${addAttribute(image, "src")}${addAttribute(alt, "alt")} class="w-full h-48 object-cover"> <div class="flex gap-3 flex-col w-full"> <h3 class="text-light-cream text-2xl font-semibold">${title}</h3> <p class="text-light-cream text-base">${description}</p> <div class="flex items-center gap-3"> ${tags.nodes.map((tag) => renderTemplate`<span${addAttribute(tag.id, "id")} class="text-white bg-red text-xs font-medium px-2.5 py-1"> ${tag.name} </span>`)} </div> </div> ${renderComponent($$result, "Button", $$Button, { "color": "cream", "size": "medium", "href": href }, { "default": ($$result2) => renderTemplate` Voir plus ` })} </div>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/components/CardProject.astro", void 0);

export { $$CardProject as $ };
