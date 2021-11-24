import { getAllProjects, getProjectData } from "../api";

export { onBeforeRender };
export { prerender };

async function onBeforeRender(pageContext) {
  const { projectName } = pageContext.routeParams;
  const { html, attributes } = await getProjectData(projectName);
  const pageProps = { projectName, attributes, html };
  return {
    pageContext: {
      pageProps,
    },
  };
}

async function prerender() {
  const projects = await getAllProjects();

  return [
    {
      url: "/projects",
      pageContext: {
        pageProps: {
          projects: projects.map((proj) => proj.attributes.title),
        },
        documentProps: { title: "Projects" },
      },
    },
    ...projects.map((project) => {
      // OR STRIP FROM `PATH` using last `/` last `.`
      const url = `/projects/${project.attributes.slug}`;
      const pageProps = { ...project };
      return {
        url,
        pageContext: {
          pageProps: pageProps,
          documentProps: {
            title: project.attributes.slug,
            description: project.attributes.description,
          },
        },
      };
    }),
  ];
}
