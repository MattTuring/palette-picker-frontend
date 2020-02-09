import React, { useState } from 'react';
import { deleteProject, getPalettes } from '../../apiCalls/apiCalls';
import trash from '../../trash.png';
import edit from '../../edit.png';
import ProjectPaletteItem from '../ProjectPaletteItem/ProjectPaletteItem'

const ProjectItem = ({project, projects, setProjects}) => {
  let [palettes, setPalettes] = useState([]);

  const removeProject = async () => {
    try {
      const newProjects = projects.filter(prj => prj.id !== project.id);
      setProjects(newProjects);
      await deleteProject(project.id);
    }
    catch (error) {
      console.log(error);
    }
  };

  const getPalettesForProject = async () => {
    try {
      const receivedPalettes = await getPalettes(project.id);
      setPalettes(receivedPalettes);
    }
    catch (error) {
      console.log(error);
    }
  };

  const paletteItems = palettes.map((palette, ind) => (
    <ProjectPaletteItem
    key={Date.now() + palette.name + ind}
    {...{palettes, setPalettes, palette}} />
  ));

  return (
    <>
      <h4 key={project.id}>{project.name}
        <img
          src={trash}
          onClick={removeProject}
          className="delete"
          alt='delete'/>
        <img src={edit} className="edit" alt='edit'/>
      </h4>
        <button onClick={getPalettesForProject}>
          Show/Update Palettes
        </button>
      {paletteItems}
    </>
  )
};

export default ProjectItem;
