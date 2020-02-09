import React from 'react';
import { shallow } from 'enzyme';
import ProjectItem from './ProjectItem';
import { deleteProject, getPalettes } from '../../apiCalls/apiCalls';

jest.mock('../../apiCalls/apiCalls');

describe('ProjectItem', () => {
  const setProjects = jest.fn();

  const mockProps = {
    project: {
      id: 1,
      name: 'Project'
    },
    projects: [{
      id: 1,
      name: 'Project'
    }],
    setProjects
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectItem {...mockProps} />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call setProjects after click on remove button', () => {
    wrapper.find('.delete').simulate('click');
    expect(setProjects).toHaveBeenCalledWith([]);
  });

  it('should call deleteProject after click on remove button', () => {
    wrapper.find('.delete').simulate('click');
    expect(deleteProject).toHaveBeenCalledWith(1);
  });

  it('should call getPalettes after click on show button', () => {
    getPalettes.mockImplementation(() => {
      return Promise.resolve([]);
    });

    wrapper.find('button').simulate('click');
    expect(getPalettes).toHaveBeenCalledWith(1);
  });
});
