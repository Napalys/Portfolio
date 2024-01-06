import Project from './Project';

import projectsData from '../../mock/project_data/projects.json';

export const projects = projectsData.map((data) => new Project(data));
