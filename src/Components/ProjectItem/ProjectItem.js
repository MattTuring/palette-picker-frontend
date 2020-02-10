import React, { useState, useEffect } from 'react';
import { deleteProject, getPalettes, updateProject } from '../../apiCalls/apiCalls';
import trash from '../../trash.png';
import edit from '../../edit.png';
import ProjectPaletteItem from '../ProjectPaletteItem/ProjectPaletteItem'

const ProjectItem = ({project, projects, setProjects}) => {
  let [palettes, setPalettes] = useState([]);
  const [name, setName] = useState('');
  useEffect(() => setName(project.name), []);

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


  let [newProjectName, setProjectNewName] = useState('');
  let [showProjectNewName, setProjectShowNewName] = useState(false);

  return (
    <>
      <h4 key={project.id}>{name}
        <img
          src={trash}
          onClick={removeProject}
          className="delete"
          alt='delete'/>
          <img src={edit} onClick={() => setProjectShowNewName(!showProjectNewName)} className="edit" alt='edit'/>
          {showProjectNewName && <><input onChange={(event) => setProjectNewName(event.target.value)} type='text' placeholder='New Project Name'/><button onClick={() => { updateProject({name: newProjectName},project.id); setName(newProjectName)}}>Update Name</button></>}
      </h4>
        <button onClick={getPalettesForProject}>
          Show/Update Palettes
        </button>
      {paletteItems}
    </>
  )
};

export default ProjectItem;
