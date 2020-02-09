import React from 'react';
import { shallow } from 'enzyme';
import ProjectsBlock from './ProjectsBlock';
import { deletePalette } from '../../apiCalls/apiCalls';

jest.mock('../../apiCalls/apiCalls');

describe('ProjectsBlock', () => {
  const setProjects = jest.fn();
  const mockProps = {
    projects: [{
      id: 1,
      name: 'Project'
    }],
    setProjects};

  let wrapper;

  beforeEach(() => {
    Date.now = jest.fn().mockImplementation(() => 1);

    wrapper = shallow(
      <ProjectsBlock {...mockProps} />
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
