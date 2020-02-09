import React from 'react';
import { shallow } from 'enzyme';
import AddPaletteForm from './AddPaletteForm';

describe('AddPaletteForm', () => {
  const assignToRandomColor = jest.fn();
  const setPaletteName = jest.fn();
  const setCurrentProject = jest.fn();
  const addPalette = jest.fn();

  const mockProps = {
    colors: {
      color1: '#000000',
      color2: '#ffffff',
      color3: '#000000',
      color4: '#ffffff',
      color5: '#000000'
    },
    paletteName: 're',
    projects: [{
      id: 1,
      name: 'Project'
    }],
    assignToRandomColor,
    setPaletteName,
    setCurrentProject,
    addPalette
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AddPaletteForm {...mockProps} />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call assignToRandomColor after click on ', () => {
    wrapper.find('.new-color').simulate('click');
    expect(assignToRandomColor).toHaveBeenCalled();
  });

  it('should call addPalette after click on submit button', () => {
    wrapper.find('.submit-btn').simulate('click');
    expect(addPalette).toHaveBeenCalled();
  });

  it('should call setPaletteName after changes in input', () => {
    wrapper.find('input').simulate('change', {
      target: {value: 'new'}
    });

    expect(setPaletteName).toHaveBeenCalled();
  });

  it('should call setCurrentProject after changes in dropmenu', () => {
    wrapper.find('select').simulate('change', {
      target: {value: 1}
    });

    expect(setCurrentProject).toHaveBeenCalledWith(1);
  });
});
