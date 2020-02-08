import React, {useState, useEffect} from 'react';
import './App.css';
import lock from './lock.png'
import unlocked from './open-lock.png'
import trash from './trash.png'
import edit from './edit.png'

import ProjectsBlock from './Components/ProjectsBlock/ProjectsBlock';
import PaletteColors from './Components/PaletteColors/PaletteColors';
import AddPaletteForm from './Components/AddPaletteForm/AddPaletteForm';

function App() {

  const fetchProjects = () => {
    fetch('https://palette-pick-backend.herokuapp.com/api/v1/projects')
    .then(results => results.json())
    .then(data => {if (data.length) {setProjects(data); setCurrentProject(data[0].id)} else {setProjects({})}})
  }

  const fetchPalettesForProject = async (id) => {
    const palettes = await fetch(`https://palette-pick-backend.herokuapp.com/api/v1/projects/${id}/palettes`)
    .then(data => data.json())
    .then(data => data)

    if (!palettes.error) {
    let mappedPalettes = palettes.map(palette => {
      return (<>
        <p style={{display: 'none'}}>{palette.project_id}</p>
        <p className='palette-area'>{palette.name}
        <div className='color-div' style={{backgroundColor: palette.color1}}></div>
        <div className='color-div' style={{backgroundColor: palette.color2}}></div>
        <div className='color-div' style={{backgroundColor: palette.color3}}></div>
        <div className='color-div' style={{backgroundColor: palette.color4}}></div>
        <div className='color-div' style={{backgroundColor: palette.color5}}></div>
        <img src={trash} onClick={async () => {
          const awaitPaletteDelete = await deletePalette(palette.id);
          const awaitPalettes = await fetchPalettesForProject(palette.project_id);
          if (awaitPalettes) {setProjectPalettes(awaitPalettes)}
          else {setProjectPalettes({})}}}
          className="edit" alt='edit'/>
        <img src={edit} className="delete" alt='delete'/>
        </p></>)
    })
    return mappedPalettes
    }
  }

  const randomColor = () => {
    return '#'+Math.floor(Math.random()*16777215).toString(16)
  }

  const postPalette = async (body) => {
    const posted = await fetch('https://palette-pick-backend.herokuapp.com/api/v1/palettes', {method: 'POST', headers: new Headers({'content-type': 'application/json'}), body: JSON.stringify(body)})
    .then(data => console.log(data))
    .catch(error => console.log(error))
    return posted
  }

  const deletePalette = async (id) => {
    const deleted = await fetch(`https://palette-pick-backend.herokuapp.com/api/v1/palettes/${id}`, {method: 'DELETE'})
    .then(data => console.log(data))
    .catch(error => console.log(error))
    return deleted
  }

  const deleteProject = async (id) => {
    const deleted = await fetch(`https://palette-pick-backend.herokuapp.com/api/v1/projects/${id}`, {method: 'DELETE'})
    .then(data => console.log(data))
    .catch(error => console.log(error))
    return deleted
  }



   let [locked1, setLocked1] = useState({locked: false})
   let [locked2, setLocked2] = useState({locked: false})
   let [locked3, setLocked3] = useState({locked: false})
   let [locked4, setLocked4] = useState({locked: false})
   let [locked5, setLocked5] = useState({locked: false})


   let [color1, setColor1] = useState({color1: randomColor()})
   let [color2, setColor2] = useState({color2: randomColor()})
   let [color3, setColor3] = useState({color3: randomColor()})
   let [color4, setColor4] = useState({color4: randomColor()})
   let [color5, setColor5] = useState({color5: randomColor()})

   let [projects, setProjects] = useState({})

   let [currentProject, setCurrentProject] = useState({})

   let [palettes, setPalettes] = useState({})

   let [projectPalettes, setProjectPalettes] = useState({})

   let [paletteName, setPaletteName] = useState({})


   useEffect(() => {
     fetchProjects()
   }, [])


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
