/* empty css                        */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as createAstro, a as addAttribute } from './astro/server_cn9qutOL.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Button, w as wpquery } from './wordPressQuery_BInkEcrb.mjs';
import 'clsx';
/* empty css                        */

const $$AboutContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="flex items-center justify-center gap-5 w-full max-w-6xl"> <img class="w-48" src="/assets/photoabout.jpg" alt="photo de Antoine Chauveau"> <div class="flex flex-col gap-5"> <h2 class="font-bold text-4xl text-light-cream">A propos</h2> <p class="font-medium text-lg text-light-cream">
Lorem ipsum dolor sit amet consectetur. Pretium auctor proin egestas
      enim nunc molestie integer at tortor. Dolor id etiam turpis blandit
      mauris phasellus amet at gravida. Integer egestas risus netus
      adipiscing in sagittis. Pellentesque nisi ultrices tortor metus.
</p> ${renderComponent($$result, "Button", $$Button, { "size": "medium", "color": "black" }, { "default": ($$result2) => renderTemplate`
Mon CV
` })} </div> </article>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/components/AboutContent.astro", void 0);

const $$Astro$2 = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex flex-col border-b-2 border-black pb-4 mb-4"> <h2 class="font-bold text-2xl font-truculenta">${title}</h2> <p class="font-bold text-base font-truculenta">${description}</p> </li>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/components/ExperienceItem.astro", void 0);

const $$ExperienceList = createComponent(($$result, $$props, $$slots) => {
  const experiences = [
    {
      title: "Stage UX/UI et front developpeur",
      description: "Front : HTML CSS JS (cr\xE9ation d\u2019un site de bande-annonce de film dans un projet universitaire)"
    },
    {
      title: "Photographe et vid\xE9aste en Freelance",
      description: "Captation vid\xE9o, Shooting photos, Cr\xE9ation de contenu digital. J'ai pu travailler avec des restaurateurs, une agence de communication, et des particuliers. JUILLET 2023 - AUJOURD\u2019HUI"
    },
    {
      title: "Photographe et vid\xE9aste B\xE9n\xE9vole",
      description: "LH (Limoges handball), groupe BATUCADONF, RCV (Rugby Club Verneuillais)"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ul class="bg-light-cream p-8 w-full max-w-6xl"> ${experiences.map((exp, index) => renderTemplate`${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { "key": index, "title": exp.title, "description": exp.description })}`)} </ul>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/components/ExperienceList.astro", void 0);

const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center justify-center gap-5 bg-red p-8"> ${renderComponent($$result, "AboutContent", $$AboutContent, {})} ${renderComponent($$result, "ExperienceList", $$ExperienceList, {})} </section>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/components/AboutSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardRealization = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardRealization;
  const { title, href, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center gap-5 min-w-52 min-h-20 w-max p-8 bg-red font-truculenta" data-astro-cid-gbquvnix> <h3 class="font-bold text-3xl text-light-cream" data-astro-cid-gbquvnix>${title}</h3> <a class="button w-max px-6 py-2 bg-black text-white font-bold text-base cursor-pointer"${addAttribute(href, "href")} data-astro-cid-gbquvnix> ${link} </a> </div>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/components/CardRealization.astro", void 0);

const $$HomeSection = createComponent(($$result, $$props, $$slots) => {
  const cardRealizations = [
    { title: "UI/UX", href: "/project", link: "Voir plus" },
    { title: "Photographe", href: "/pictures", link: "Voir plus" },
    { title: "Vid\xE9aste", href: "/videos", link: "Voir plus" },
    { title: "Front Developer", href: "/project", link: "Voir plus" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex items-center flex-col gap-5 p-5"> <div class="flex items-center justify-center gap-5"> <div class="flex flex-col items-center gap-5 w-3/6"> <h1 class="text-9xl font-bold font-truculenta text-red">portfolio</h1> <h2 class="bg-red text-light-cream font-truculenta font-extrabold text-2xl px-8 py-2 min-w-[150px] text-center">
Antoine CHAUVEAU
</h2> <p class="text-black text-base font-medium p-8 min-h-[80px] flex items-center justify-center">
Salut ! Bienvenue sur mon portfolio. Ici, on peux découvrir mes projets
        et compétences en tant que photographe, designer UI/UX et développeur
        front.
</p> </div> <img class="sm:w-52 md:w-72 w-36" src="/assets/bdx-22.jpg" alt="photo de Antoine CHAUVEAU"> </div> <div class="flex items-center justify-center gap-5 flex-wrap"> ${cardRealizations.map((item, index) => renderTemplate`${renderComponent($$result, "CardRealization", $$CardRealization, { "key": index, "title": item.title, "href": item.href, "link": item.link })}`)} </div> </section>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/components/HomeSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Carroussel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carroussel;
  const { title, href, contentType = "photos" } = Astro2.props;
  const itemsPerPage = 3;
  const data = await wpquery({
    query: `
  {
    ${contentType} {
      nodes {
        ${contentType} {
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
  const totalItems = data[contentType].nodes.length;
  return renderTemplate(_a || (_a = __template(["", '<div class="carousel flex items-center flex-col gap-5 max-w-4xl mx-auto mt-10 p-5 pb-10"', "", "", '> <h2 class="text-5xl text-light-cream font-black font-truculenta"> ', ' </h2> <div class="overflow-hidden"> <div class="carousel-inner flex transition-transform duration-500"> ', ' </div> </div> <div class="flex gap-1"> <button class="carousel-prev bg-red text-white aspect-square w-8">\n\u25C0\n</button> <button class="carousel-next bg-red text-white aspect-square w-8">\n\u25B6\n</button> </div> ', ' </div> <script type="module">\n  document.addEventListener("DOMContentLoaded", () => {\n    const carousel = document.querySelector(".carousel");\n    const carouselInner = carousel.querySelector(".carousel-inner");\n    const prevButton = carousel.querySelector(".carousel-prev");\n    const nextButton = carousel.querySelector(".carousel-next");\n    const totalItems = parseInt(carousel.getAttribute("data-total-items"), 10);\n    const itemsPerPage = parseInt(\n      carousel.getAttribute("data-items-per-page"),\n      10\n    );\n    let currentIndex = 0;\n\n    const updateCarousel = () => {\n      const offset = (currentIndex * 100) / itemsPerPage;\n      carouselInner.style.transform = `translateX(-${offset}%)`;\n    };\n\n    nextButton.addEventListener("click", () => {\n      if (currentIndex < totalItems - itemsPerPage) {\n        currentIndex++;\n        updateCarousel();\n      }\n    });\n\n    prevButton.addEventListener("click", () => {\n      if (currentIndex > 0) {\n        currentIndex--;\n        updateCarousel();\n      }\n    });\n\n    // Initialize the carousel\n    updateCarousel();\n  });\n<\/script>'], ["", '<div class="carousel flex items-center flex-col gap-5 max-w-4xl mx-auto mt-10 p-5 pb-10"', "", "", '> <h2 class="text-5xl text-light-cream font-black font-truculenta"> ', ' </h2> <div class="overflow-hidden"> <div class="carousel-inner flex transition-transform duration-500"> ', ' </div> </div> <div class="flex gap-1"> <button class="carousel-prev bg-red text-white aspect-square w-8">\n\u25C0\n</button> <button class="carousel-next bg-red text-white aspect-square w-8">\n\u25B6\n</button> </div> ', ' </div> <script type="module">\n  document.addEventListener("DOMContentLoaded", () => {\n    const carousel = document.querySelector(".carousel");\n    const carouselInner = carousel.querySelector(".carousel-inner");\n    const prevButton = carousel.querySelector(".carousel-prev");\n    const nextButton = carousel.querySelector(".carousel-next");\n    const totalItems = parseInt(carousel.getAttribute("data-total-items"), 10);\n    const itemsPerPage = parseInt(\n      carousel.getAttribute("data-items-per-page"),\n      10\n    );\n    let currentIndex = 0;\n\n    const updateCarousel = () => {\n      const offset = (currentIndex * 100) / itemsPerPage;\n      carouselInner.style.transform = \\`translateX(-\\${offset}%)\\`;\n    };\n\n    nextButton.addEventListener("click", () => {\n      if (currentIndex < totalItems - itemsPerPage) {\n        currentIndex++;\n        updateCarousel();\n      }\n    });\n\n    prevButton.addEventListener("click", () => {\n      if (currentIndex > 0) {\n        currentIndex--;\n        updateCarousel();\n      }\n    });\n\n    // Initialize the carousel\n    updateCarousel();\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(totalItems, "data-total-items"), addAttribute(itemsPerPage, "data-items-per-page"), addAttribute(contentType, "data-content-type"), title, data[contentType].nodes.map((mediaNode, index) => renderTemplate`<div class="w-1/3 p-2 flex-shrink-0"${addAttribute(index, "key")}> <div class="relative bg-white overflow-hidden"> <img${addAttribute(mediaNode[contentType].miniature.node.sourceUrl, "src")}${addAttribute(mediaNode[contentType].miniature.node.altText, "alt")} class="w-full aspect-video object-cover"> <div class="absolute inset-0 bg-black opacity-70 flex items-center justify-center z-10"> <h2 class="text-white text-xl font-bold text-center"> ${mediaNode[contentType].titre} </h2> </div> </div> </div>`), renderComponent($$result, "Button", $$Button, { "color": "cream", "size": "small", "href": `${href}` }, { "default": ($$result2) => renderTemplate` Voir plus ` }));
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/components/Carroussel.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main> ${renderComponent($$result, "HomeSection", $$HomeSection, {})} ${renderComponent($$result, "AboutSection", $$AboutSection, {})} <section class="bg-black p-5"> ${renderComponent($$result, "Caroussel", $$Carroussel, { "title": "Mes projets", "href": "/projets", "contentType": "projets" })} ${renderComponent($$result, "Caroussel", $$Carroussel, { "title": "Mes videos", "href": "/videos", "contentType": "videos" })} ${renderComponent($$result, "Caroussel", $$Carroussel, { "title": "Mes photos", "href": "/pictures", "contentType": "photos" })} </section> </main>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/pages/home.astro", void 0);

const $$file = "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/pages/home.astro";
const $$url = "/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Home,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Home as $, _page as _ };
