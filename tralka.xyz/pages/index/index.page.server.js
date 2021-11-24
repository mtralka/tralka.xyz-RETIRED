import { getAllProjectAttributes } from "../projects/api";

export { onBeforeRender };
export { prerender };

async function onBeforeRender() {
  const projectAttrs = await getAllProjectAttributes();
  const pageProps = { projectAttrs };
  return {
    pageContext: {
      pageProps,
    },
  };
}

async function prerender() {
  const projectAttrs = await getAllProjectAttributes();
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
