export { onBeforeRender };
export { prerender };

const PROJECT_PATH = "../../../content/";

async function onBeforeRender(pageContext) {
  const { projectName } = pageContext.routeParams;
  const { html, attributes } = await import(`${PROJECT_PATH}${projectName}.md`);
  const pageProps = { projectName, attributes, html };
  return {
    pageContext: {
      pageProps,
    },
  };
}

async function prerender() {
  const projectModules = import.meta.glob("/content/*.md");
  const projects = [];
  for (const path in projectModules) {
    const content = await projectModules[path]();
    projects.push({
      path: path,
      html: content.html,
      attributes: content.attributes,
    });
  }
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
