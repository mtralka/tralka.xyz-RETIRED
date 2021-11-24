import { projectCard } from "@content/pages/index.json";
import { getAllProjectAttributes } from "../projects/api";

export { onBeforeRender };
export { prerender };

async function onBeforeRender() {
  const allProjectAttrs = await getAllProjectAttributes();
  const projectAttrs = allProjectAttrs.slice(0, projectCard.limit);
  const pageProps = { projectAttrs };
  return {
    pageContext: {
      pageProps,
    },
  };
}

async function prerender() {
  const allProjectAttrs = await getAllProjectAttributes();
  const projectAttrs = allProjectAttrs.slice(0, projectCard.limit);
  return [
    {
      url: "/",
      pageContext: {
        pageProps: {
          projectAttrs,
        },
      },
    },
  ];
}
