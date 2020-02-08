import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';

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
    </section>
  )
};

export default ProjectsBlock;
