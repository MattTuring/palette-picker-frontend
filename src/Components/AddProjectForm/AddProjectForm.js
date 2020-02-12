import React, { useState } from 'react';
import { postProject } from '../../apiCalls/apiCalls';
import add from '../../add.svg';

const AddProjectForm = ({projects, setProjects}) => {
  const [projectName, setProjectName] = useState('');
  const [opened, setOpened] = useState(false);
  const [notification, setNotification] = useState('');
  const changeInput = event => setProjectName(event.target.value);

  const submitProject = async (event) => {
    event.preventDefault();

    if (projectName === '') {
      return setNotification('There is no name entered!');
    }
    
    if (projects.find(project => project.name === projectName)) {
      return setNotification('Project name must be unique!');
    }

    try {
      const project = await postProject({name: projectName});
      setProjects([...projects, project]);
      setOpened(!opened);
    }
    catch (error) {
      console.error(error);
    }
  }

  const showForm = () => setOpened(!opened);

  return (
    <section className="new-project-form">
      <h3 onClick={showForm}>
        {!opened && <img src={add} alt="add" />}
        Add new project
      </h3>
      {notification !== '' && <p className="error-not">{notification}</p>}
      {opened &&
        <form>
          <input
            className="project-name"
            onChange={changeInput}
            placeholder="Name"
            type="text"
            value={projectName} />
          <button
            className="submit-btn"
            onClick={submitProject}>Add Project</button>
        </form>
      }
    </section>
  )
};

export default AddProjectForm;
