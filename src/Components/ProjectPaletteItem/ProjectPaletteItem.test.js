import React from 'react';
import { shallow } from 'enzyme';
import ProjectPaletteItem from './ProjectPaletteItem';
import { deletePalette } from '../../apiCalls/apiCalls';

jest.mock('../../apiCalls/apiCalls');

describe('ProjectPaletteItem', () => {
  const setPalettes = jest.fn();
  const mockProps = {
    palette: {
      id: 1,
      project_id: 1,
      color1: '#000000',
      color2: '#ffffff',
      color3: '#000000',
      color4: '#ffffff',
      color5: '#000000',
    }, palettes: [{
      id: 1,
      project_id: 1,
      color1: '#000000',
      color2: '#ffffff',
      color3: '#000000',
      color4: '#ffffff',
      color5: '#000000',
    }],
    setPalettes
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ProjectPaletteItem {...mockProps} />
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call setPalettes after click on remove button', () => {
    wrapper.find('.delete').simulate('click');
    expect(setPalettes).toHaveBeenCalledWith([]);
  });

  it('should call deletePalette after click on remove button', () => {
    wrapper.find('.delete').simulate('click');
    expect(deletePalette).toHaveBeenCalledWith(1);
  });
});
