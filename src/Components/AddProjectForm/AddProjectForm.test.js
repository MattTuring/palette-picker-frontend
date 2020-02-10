import React from 'react';
import { shallow } from 'enzyme';
import AddProjectForm from './AddProjectForm';
import { postProject } from '../../apiCalls/apiCalls';

jest.mock('../../apiCalls/apiCalls')

describe('AddProjectForm', () => {
  const setProjects = jest.fn();

  const mockProps = {
    projects: [{
      id: 1,
      name: "Project"
    }],
    setProjects
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AddProjectForm {...mockProps} />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot after clicking on header', () => {
    wrapper.find('h3').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot after clicking on header and submitting empty form', () => {
    wrapper.find('h3').simulate('click');
    wrapper.find('.submit-btn').simulate('click', {
      preventDefault: jest.fn()
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should call postProject after click on ', () => {
    wrapper.find('h3').simulate('click');
    wrapper.find('input').simulate('change', {
      target: {value: 'Project'}
    });
    wrapper.find('.submit-btn').simulate('click', {
      preventDefault: jest.fn()
    });
    expect(postProject).toHaveBeenCalled();
  });

  it('should call setProjects after click on submit button', () => {
    wrapper.find('h3').simulate('click');
    wrapper.find('input').simulate('change', {
      target: {value: 'Project'}
    });
    wrapper.find('.submit-btn').simulate('click', {
      preventDefault: jest.fn()
    });
    expect(setProjects).toHaveBeenCalled();
  });
});
