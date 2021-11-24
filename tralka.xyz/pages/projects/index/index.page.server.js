import { getAllProjectAttributes } from "../api";

export { onBeforeRender };
export { prerender };

async function onBeforeRender(pageContext) {
  const { projectName } = pageContext.routeParams;
  const projectAttrs = await getAllProjectAttributes();
  const pageProps = { projectName, projectAttrs };
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
      url: "/projects",
      pageContext: {
        pageProps: {
          projectAttrs,
        },
        documentProps: { title: "Projects" },
      },
    },
  ];
}
