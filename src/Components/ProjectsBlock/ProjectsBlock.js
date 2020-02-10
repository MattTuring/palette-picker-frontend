import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';

import AddProjectForm from '../AddProjectForm/AddProjectForm';


const ProjectsBlock = (props) => {
  const projectItems = props.projects.map((project, ind) => (
    <ProjectItem
      key={Date.now() + project.name + ind}
      project={project}
      {...props} />
  ));

  return (
    <section className="projects">
      <h2>Projects</h2>
      { projectItems }
      <AddProjectForm
        setProjects={props.setProjects}
        projects={props.projects}/>
    </section>
  )
};

export default ProjectsBlock;
