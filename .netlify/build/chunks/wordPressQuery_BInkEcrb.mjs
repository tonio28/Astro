import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_cn9qutOL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const props = Astro2.props;
  const { color = "primary", size = "medium", children, href } = props;
  const baseStyle = "w-max px-6 py-2 font-truculenta font-bold text-base cursor-pointer border-none";
  const colorStyles = {
    red: "bg-red text-white",
    black: "bg-black text-white",
    cream: "text-black bg-white"
  };
  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-8 py-2 text-base",
    large: "px-8 py-4 text-lg"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${baseStyle} ${colorStyles[color]} ${sizeStyles[size]}`, "class")}${addAttribute(href, "href")}> ${children} </a>`;
}, "/Users/chauveauantoine/Desktop/PORTFOLIO antoine/Astro/src/components/Button.astro", void 0);

async function wpquery({ query, variables = {} }) {
  const res = await fetch("https://portfoliocms.antoinechauveau.com/graphql", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  if (!res.ok) {
    console.error(res);
    return {};
  }
  const { data } = await res.json();
  return data;
}

export { $$Button as $, wpquery as w };
