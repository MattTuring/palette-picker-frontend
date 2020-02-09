import { getProjects, getPalettes, postProject, postPalette, updateProject, updatePalette, deleteProject, deletePalette } from './apiCalls';

describe("getProjects", () => {
  const mockProjects = [{
    id: 1,
    name: 'Project One'
  }, {
    id: 2,
    name: 'Project Two'
  }];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockProjects);
        }
      });
    });
  });

  it("should call fetch with correct url", () => {
    const url = 'https://palette-pick-backend.herokuapp.com/api/v1/projects';
    getProjects();
    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('should return an array with projects', () => {
    expect(getProjects()).resolves.toEqual(mockProjects);
  })

  it('should return an error for response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getProjects()).rejects
      .toEqual(Error("There was an error getting projects."));
  })

  it('should return an error if fetch is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to fetch'));
    });

    expect(getProjects()).rejects
      .toEqual(Error('Failed to fetch'));
  })
});

describe("getPalettes", () => {
  const mockPalettes = [{
    id: 1,
    project_id: 'Project One',
    color1: '#000000',
    color2: '#ffffff',
    color3: '#000000',
    color4: '#ffffff',
    color5: '#000000',
  }];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockPalettes);
        }
      });
    });
  });

  it("should call fetch with correct url", () => {
    const url = 'https://palette-pick-backend.herokuapp.com/api/v1/projects/1/palettes';
    getPalettes(1);
    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('should return an array with palettes', () => {
    expect(getPalettes(1)).resolves.toEqual(mockPalettes);
  })

  it('should return an error for response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getPalettes()).rejects
      .toEqual(Error("There was an error getting palettes."));
  })

  it('should return an error if fetch is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to fetch'));
    })

    expect(getPalettes()).rejects
      .toEqual(Error('Failed to fetch'));
  })
});

describe("postProject", () => {
  const mockProject = {
    name: 'Project One'
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockProject);
        }
      });
    });
  });

  it("should call fetch with correct url", () => {
    const url = 'https://palette-pick-backend.herokuapp.com/api/v1/projects';
    const mockOptions = {
      method: 'POST',
      body: JSON.stringify(mockProject),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    postProject(mockProject);
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
  });

  it('should return a posted projected', () => {
    expect(postProject(mockProject)).resolves.toEqual(mockProject);
  });

  it('should return an error for response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(postProject(mockProject)).rejects
      .toEqual(Error("There was an error posting project."));
  });

  it('should return an error if fetch is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to fetch'));
    });

    expect(postProject(mockProject)).rejects
      .toEqual(Error('Failed to fetch'));
  });
});

describe("postPalette", () => {
  const mockPalette = {
    id: 1,
    project_id: 'Project One',
    color1: '#000000',
    color2: '#ffffff',
    color3: '#000000',
    color4: '#ffffff',
    color5: '#000000',
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockPalette);
        }
      });
    });
  });

  it("should call fetch with correct url", () => {
    const url = 'https://palette-pick-backend.herokuapp.com/api/v1/palettes';
    const mockOptions = {
      method: 'POST',
      body: JSON.stringify(mockPalette),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    postPalette(mockPalette);
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
  });

  it('should return a posted projected', () => {
    expect(postPalette(mockPalette)).resolves.toEqual(mockPalette);
  });

  it('should return an error for response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(postPalette(mockPalette)).rejects
      .toEqual(Error("There was an error posting palette."));
  });

  it('should return an error if fetch is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to fetch'));
    });

    expect(postPalette(mockPalette)).rejects
      .toEqual(Error('Failed to fetch'));
  });
});

describe("updateProject", () => {
  const mockProject = {
    id: 1,
    name: 'Project'
  };

  const updatedPart = {name: 'Project'}

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockProject);
        }
      });
    });
  });

  it("should call fetch with correct url", () => {
    const url = 'https://palette-pick-backend.herokuapp.com/api/v1/projects/1';
    const mockOptions = {
      method: 'PUT',
      body: JSON.stringify(updatedPart),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    updateProject(updatedPart, 1);
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
  });

  it('should return a posted projected', () => {
    expect(updateProject(updatedPart, 1)).resolves.toEqual(mockProject);
  });

  it('should return an error for response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(updateProject(updatedPart, 1)).rejects
      .toEqual(Error("There was an error updating project."));
  });

  it('should return an error if fetch is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to fetch'));
    });

    expect(updateProject(updatedPart, 1)).rejects
      .toEqual(Error('Failed to fetch'));
  });
});

describe("updatePalette", () => {
  const mockPalette = {
    id: 1,
    project_id: 'Project One',
    color1: '#000000',
    color2: '#ffffff',
    color3: '#3f3f3f',
    color4: '#ffffff',
    color5: '#000000',
  };

  const updatedPart = {color3: '#3f3f3f'}

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockPalette);
        }
      });
    });
  });

  it("should call fetch with correct url", () => {
    const url = 'https://palette-pick-backend.herokuapp.com/api/v1/palettes/1';
    const mockOptions = {
      method: 'PUT',
      body: JSON.stringify(updatedPart),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    updatePalette(updatedPart, 1);
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
  });

  it('should return a posted projected', () => {
    expect(updatePalette(updatedPart, 1)).resolves.toEqual(mockPalette);
  });

  it('should return an error for response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(updatePalette(updatedPart, 1)).rejects
      .toEqual(Error("There was an error updating palette."));
  });

  it('should return an error if fetch is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to fetch'));
    });

    expect(updatePalette(updatedPart, 1)).rejects
      .toEqual(Error('Failed to fetch'));
  });
});

describe("deleteProject", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve('Deleted');
        }
      });
    });
  });

  it("should call fetch with correct url", () => {
    const url = 'https://palette-pick-backend.herokuapp.com/api/v1/projects/1';
    const mockOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    deleteProject(1);
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
  });

  it('should return a posted projected', () => {
    expect(deleteProject(1)).resolves.toEqual('Deleted');
  });

  it('should return an error for response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(deleteProject(1)).rejects
      .toEqual(Error("There was an error deleting project."));
  });

  it('should return an error if fetch is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to fetch'));
    });

    expect(deleteProject(1)).rejects
      .toEqual(Error('Failed to fetch'));
  });
});

describe("deletePalette", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve('Deleted');
        }
      });
    });
  });

  it("should call fetch with correct url", () => {
    const url = 'https://palette-pick-backend.herokuapp.com/api/v1/palettes/1';
    const mockOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    deletePalette(1);
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
  });

  it('should return a posted projected', () => {
    expect(deletePalette(1)).resolves.toEqual('Deleted');
  });

  it('should return an error for response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(deletePalette(1)).rejects
      .toEqual(Error("There was an error deleting palette."));
  });

  it('should return an error if fetch is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to fetch'));
    });

    expect(deletePalette(1)).rejects
      .toEqual(Error('Failed to fetch'));
  });
});
