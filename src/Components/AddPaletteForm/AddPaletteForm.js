import React from 'react';

const AddPaletteForm = (props) => {
  const changeInput = (event) => {
    props.setPaletteName(event.target.value);
  };

  const chooseProject = (event) => {
    props.setCurrentProject(+event.target.value);
  };

  const submitPalette = async () => {
    if(props.paletteName.length) {
      props.addPalette();
    }
  };

  const options = props.projects.map(project => (
    <option value={project.id} key={project.id + project.id + Math.random}>{project.name}</option>
  ));

  return (
    <section className="palettes">
      <div>
        <button className="new-color" onClick={props.assignToRandomColor}>New Colors</button>
        <input
          className="palette-name"
          onChange={changeInput}
          placeholder="Name"
          type="text"/>
        <select onChange={chooseProject}>
          {(props.projects.length) && options }
        </select>
        <button className="submit-btn" onClick={submitPalette}>Add Palette</button>
      </div>
    </section>
  )
};

export default AddPaletteForm;
