export const getProjects = async () => {
  const url = 'https://palette-pick-backend.herokuapp.com/api/v1/projects';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error getting projects.');
  }
  const projects = await response.json();
  return projects
}

export const getPalettes = async (id) => {
  const url = `https://palette-pick-backend.herokuapp.com/api/v1/projects/${id}/palettes`
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error getting palettes.');
  }
  const palettes = await response.json();
  return palettes
}

export const postProject = async (project) => {
  const url = 'https://palette-pick-backend.herokuapp.com/api/v1/projects';
  const options = {
    method: 'POST',
    body: JSON.stringify(project),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('There was an error posting project.');
  }

  const result = await response.json();
  return result;
}

export const postPalette = async (palette) => {
  const url = 'https://palette-pick-backend.herokuapp.com/api/v1/palettes';
  const options = {
    method: 'POST',
    body: JSON.stringify(palette),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('There was an error posting palette.');
  }

  const result = await response.json();
  return result;
}

export const updateProject = async (project, id) => {
  const url = `https://palette-pick-backend.herokuapp.com/api/v1/projects/${id}`;
  const options = {
    method: 'PUT',
    body: JSON.stringify(project),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('There was an error updating project.');
  }

  const result = await response.json();
  return result;
}

export const updatePalette = async (palette, id) => {
  const url = `https://palette-pick-backend.herokuapp.com/api/v1/palettes/${id}`;
  const options = {
    method: 'PUT',
    body: JSON.stringify(palette),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('There was an error updating palette.');
  }

  const result = await response.json();
  return result;
}

export const deleteProject = async (id) => {
  const url = `https://palette-pick-backend.herokuapp.com/api/v1/projects/${id}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('There was an error deleting project.');
  }

  const result = await response.json();
  return result;
}

export const deletePalette = async (id) => {
  const url = `https://palette-pick-backend.herokuapp.com/api/v1/palettes/${id}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('There was an error deleting palette.');
  }

  const result = await response.json();
  return result;
}
