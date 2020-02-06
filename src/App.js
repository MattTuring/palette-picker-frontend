import React, {useState, useEffect} from 'react';
import './App.css';
import lock from './lock.png'
import unlocked from './open-lock.png'


const randomColor = () => {
  return '#'+Math.floor(Math.random()*16777215).toString(16)
}

const postPalette = (body) => {
  fetch('https://palette-pick-backend.herokuapp.com/api/v1/palettes', {method: 'POST', headers: new Headers({'content-type': 'application/json'}), body: JSON.stringify(body)})
  .then(data => console.log(data))
  .catch(error => console.log(error))
}

const projects = (projects) => {

}

function App() {


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

   let [paletteName, setPaletteName] = useState({})


   useEffect(() => {
     fetch('https://palette-pick-backend.herokuapp.com/api/v1/projects')
     .then(results => results.json())
     .then(data => {setProjects(data); setCurrentProject(data[0].id)})

     fetch('https://palette-pick-backend.herokuapp.com/api/v1/palettes')
     .then(results => results.json())
     .then(data => {setPalettes(data)})

   }, [])


  return (
    <main className="App">

    <nav>COLORATOR</nav>

    <section className="color-picker">
      <div style={{backgroundColor: color1.color1}} className="colors color1">{color1.color1} <img className='lock' onClick={() => setLocked1({locked: !locked1.locked})} src={locked1.locked ? lock : unlocked} alt='lock'/></div>
      <div style={{backgroundColor: color2.color2}} className="colors color2">{color2.color2} <img className='lock' onClick={() => setLocked2({locked: !locked2.locked})} src={locked2.locked ? lock : unlocked} alt='lock'/></div>
      <div style={{backgroundColor: color3.color3}} className="colors color3">{color3.color3} <img className='lock' onClick={() => setLocked3({locked: !locked3.locked})} src={locked3.locked ? lock : unlocked} alt='lock'/></div>
      <div style={{backgroundColor: color4.color4}} className="colors color4">{color4.color4} <img className='lock' onClick={() => setLocked4({locked: !locked4.locked})} src={locked4.locked ? lock : unlocked} alt='lock'/></div>
      <div style={{backgroundColor: color5.color5}} className="colors color5">{color5.color5} <img className='lock' onClick={() => setLocked5({locked: !locked5.locked})} src={locked5.locked ? lock : unlocked} alt='lock'/></div>
    </section>

    <section className="projects">
      <h2>Projects</h2>
        {projects.length && projects.map(project => {return <><h4 key={project.id}>{project.name}</h4><button id={project.id}>Show Palettes</button></>})}
    </section>

    <section className="palettes">
      <div>
        <button onClick={() => {
          if (!locked1.locked) {setColor1({color1: randomColor()})}
          if (!locked2.locked) {setColor2({color2: randomColor()})}
          if (!locked3.locked) {setColor3({color3: randomColor()})}
          if (!locked4.locked) {setColor4({color4: randomColor()})}
          if (!locked5.locked) {setColor5({color5: randomColor()})}
        }}>New Colors</button>

        <input className="palette-name" onChange={(event) => {setPaletteName(event.target.value)}} placeholder="Name" type="text"/>

        <select onChange={(event) => {setCurrentProject(event.target.value)}}>
          {projects.length && projects.map(project => {return <option value={project.id} key={project.id + project.id + Math.random}>{project.name}</option>})}
        </select>

        <button onClick={() => postPalette({name: paletteName, color1: color1.color1, color2: color2.color2, color3: color3.color3, color4: color4.color4, color5: color5.color5, project_id: currentProject})}>Add Palette</button>
      </div>
    </section>

    </main>
  );
}

export default App;
