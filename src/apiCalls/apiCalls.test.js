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

