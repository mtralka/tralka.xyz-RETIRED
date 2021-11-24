const PROJECT_PATH = "../../content/";

export const getAllProjects = async () => {
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

  return projects;
};

export const getProjectData = async (projectName) => {
  return await import(`${PROJECT_PATH}${projectName}.md`);
};

export const getAllProjectAttributes = async () => {
  const projects = await getAllProjects();
  return projects.map((proj) => proj.attributes);
};
