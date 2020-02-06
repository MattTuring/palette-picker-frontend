import React, {useState, useEffect} from 'react';
import './App.css';

const randomColor = () => {
  return '#'+Math.floor(Math.random()*16777215).toString(16)
}

const postPalette = (body) => {
  fetch('https://palette-pick-backend.herokuapp.com/api/v1/projects', {method: 'POST', body: JSON.stringify(body)})
  .then(data => console.log(data))
  .catch(error => console.log(error))
}

function App() {

  let [colors, setColors] = useState({
    color1: randomColor(),
    color2: randomColor(),
    color3: randomColor(),
    color4: randomColor(),
    color5: randomColor(),
    color1locked: false,
    color2locked: false,
    color3locked: false,
    color4locked: false,
    color5locked: false
   })

   let [projects, setProjects] = useState({})

   let [currentProject, setCurrentProject] = useState({})

   let [paletteName, setPaletteName] = useState({})


   useEffect(() => {
     fetch('https://palette-pick-backend.herokuapp.com/api/v1/projects')
     .then(results => results.json())
     .then(data => {setProjects(data); setCurrentProject(data[0].name)})
   }, [])


  return (
    <main className="App">

    <nav>COLORATOR</nav>

    <section className="color-picker">
      <div style={{backgroundColor: colors.color1}} className="colors color1">{colors.color1}</div>
      <div style={{backgroundColor: colors.color2}} className="colors color2">{colors.color2}</div>
      <div style={{backgroundColor: colors.color3}} className="colors color3">{colors.color3}</div>
      <div style={{backgroundColor: colors.color4}} className="colors color4">{colors.color4}</div>
      <div style={{backgroundColor: colors.color5}} className="colors color5">{colors.color5}</div>
    </section>

    <section className="projects">
      <h2>Projects</h2>
        {projects.length && projects.map(project => {return <h4 key={project.id}>{project.name}</h4>})}
    </section>

    <section className="palettes">
      <div>
        <button onClick={() => {setColors({
        color1: randomColor(),
        color2: randomColor(),
        color3: randomColor(),
        color4: randomColor(),
        color5: randomColor()
        })}}>New Colors</button>

        <input onChange={(event) => {setPaletteName(event.target.value)}} placeholder="Name" type="text"/>

        <select onChange={(event) => {setCurrentProject(event.target.value)}}>
          {projects.length && projects.map(project => {return <option value={project.id} key={project.id + project.id + Math.random}>{project.name}</option>})}
        </select>

        <button onClick={() => postPalette({name: paletteName, color1: colors.color1, color2: colors.color2, color3: colors.color3, color4: colors.color4, color5: colors.color5, project_id: currentProject})}>Add Palette</button>
      </div>
    </section>

    </main>
  );
}

export default App;
