/* empty css                                */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_cn9qutOL.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$CardProject } from '../chunks/CardProject_B4E0X0w1.mjs';
import { w as wpquery } from '../chunks/wordPressQuery_BInkEcrb.mjs';
import { $ as $$Layout, a as $$NavBar } from '../chunks/Layout_CdFKC9q1.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Videos = createComponent(async ($$result, $$props, $$slots) => {
  const data = await wpquery({
    query: `
  {
  videos {
    nodes {
      videos {
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
Mes videos
</h1><div class="flex flex-row flex-wrap gap-10 w-full items-center justify-center"> ${data.videos.nodes.map((videoNode) => renderTemplate`${renderComponent($$result, "ProjectCard", $$CardProject, { "href": `/videos/${videoNode.videos.id}`, "image": videoNode.videos.miniature.node.sourceUrl, "alt": videoNode.videos.miniature.node.altText, "title": videoNode.videos.titre, "description": videoNode.videos.description, "tags": videoNode.videos.tags })}`)} </div> </div> </body></html>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/pages/videos.astro", void 0);

const $$file = "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/pages/videos.astro";
const $$url = "/videos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Videos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
