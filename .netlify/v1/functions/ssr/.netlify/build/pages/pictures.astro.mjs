/* empty css                                */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_cn9qutOL.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$CardProject } from '../chunks/CardProject_B4E0X0w1.mjs';
import { w as wpquery } from '../chunks/wordPressQuery_BInkEcrb.mjs';
import { $ as $$Layout, a as $$NavBar } from '../chunks/Layout_CdFKC9q1.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Pictures = createComponent(async ($$result, $$props, $$slots) => {
  const data = await wpquery({
    query: `
  {
  photos {
    nodes {
      photos {
        description
        titre
        tags {
          nodes {
            id
            name
          }
        }
        miniature {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
}
  `
  });
  return renderTemplate`<html> ${renderComponent($$result, "Layout", $$Layout, { "title": "PORTFOLIO" })}${maybeRenderHead()}<body> <header> ${renderComponent($$result, "NavBar", $$NavBar, {})} </header> ${renderComponent($$result, "Layout", $$Layout, { "title": "PORTFOLIO" })} <div class="flex justify-center items-center flex-col gap-10 flex-wrap p-5"> <h1 class="font-truculenta font-black text-black text-6xl">
Mes photos
</h1><div class="flex flex-row flex-wrap gap-10 w-full items-center justify-center"> ${data.photos.nodes.map((photoNode) => renderTemplate`${renderComponent($$result, "ProjectCard", $$CardProject, { "href": `/pictures/${photoNode.photos.id}`, "image": photoNode.photos.miniature.node.sourceUrl, "alt": photoNode.photos.miniature.node.altText, "title": photoNode.photos.titre, "description": photoNode.photos.description, "tags": photoNode.photos.tags })}`)} </div> </div> </body></html>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/pages/pictures.astro", void 0);

const $$file = "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/pages/pictures.astro";
const $$url = "/pictures";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pictures,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
