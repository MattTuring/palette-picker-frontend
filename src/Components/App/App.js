import React, { useState, useEffect } from 'react';
import './App.css';
import { getProjects, postPalette } from '../../apiCalls/apiCalls';
import { getRandomColor } from '../../_utils/_utils';
import ProjectsBlock from '../ProjectsBlock/ProjectsBlock';
import PaletteColors from '../PaletteColors/PaletteColors';
import AddPaletteForm from '../AddPaletteForm/AddPaletteForm';

function App() {
  let [locked1, setLocked1] = useState(false);
  let [locked2, setLocked2] = useState(false);
  let [locked3, setLocked3] = useState(false);
  let [locked4, setLocked4] = useState(false);
  let [locked5, setLocked5] = useState(false);

  let [color1, setColor1] = useState('');
  let [color2, setColor2] = useState('');
  let [color3, setColor3] = useState('');
  let [color4, setColor4] = useState('');
  let [color5, setColor5] = useState('');

  let [projects, setProjects] = useState([]);
  let [currentProject, setCurrentProject] = useState({});
  let [paletteName, setPaletteName] = useState({});

  useEffect(() => fetchProjects(), []);
  useEffect(() => assignToRandomColor(), []);

  const assignToRandomColor = () => {
    if (!locked1) setColor1(getRandomColor());
    if (!locked2) setColor2(getRandomColor());
    if (!locked3) setColor3(getRandomColor());
    if (!locked4) setColor4(getRandomColor());
    if (!locked5) setColor5(getRandomColor());
  }

  const fetchProjects = async () => {
    try {
      const recievedProjects = await getProjects();
      setProjects(recievedProjects);
      setCurrentProject(recievedProjects[0].id);
    }
    catch (error) { console.log(error); }
  }

  const addPalette = async () => {
    try {
      const newPalette = {
        name: paletteName,
        color1, color2, color3, color4, color5,
        project_id: currentProject
      };
      await postPalette(newPalette);
    }
    catch (error) { console.log(error); }
  }

  return (
    <main className="App">
      <nav>COLORATOR</nav>
      <PaletteColors
        colors={{color1, color2, color3, color4, color5}}
        lockeds={{locked1, locked2, locked3, locked4, locked5}}
        setLockeds={{setLocked1, setLocked2, setLocked3, setLocked4, setLocked5}} />
      <ProjectsBlock {...{projects, setProjects}} />
      <AddPaletteForm
        {...{assignToRandomColor, paletteName, setPaletteName, setCurrentProject, addPalette, projects}}
        colors={{color1, color2, color3, color4, color5}} />
    </main>
  );
}

export default App;
