import React, {useState} from 'react';
import './App.css';

const randomColor = () => {
  return '#'+Math.floor(Math.random()*16777215).toString(16)
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



  return (
    <main className="App">
    <nav>COLORATOR</nav>
    <section className="color-picker">
      <button onClick={() => {setColors({
      color1: randomColor(),
      color2: randomColor(),
      color3: randomColor(),
      color4: randomColor(),
      color5: randomColor()
      })}}>New Colors</button>
      <div style={{backgroundColor: colors.color1}} className="colors color1">{colors.color1}</div>
      <div style={{backgroundColor: colors.color2}} className="colors color2">{colors.color2}</div>
      <div style={{backgroundColor: colors.color3}} className="colors color3">{colors.color3}</div>
      <div style={{backgroundColor: colors.color4}} className="colors color4">{colors.color4}</div>
      <div style={{backgroundColor: colors.color5}} className="colors color5">{colors.color5}</div>
    </section>
    <section className="projects">
      <h2>Projects</h2>
    </section>
    </main>
  );
}

export default App;
