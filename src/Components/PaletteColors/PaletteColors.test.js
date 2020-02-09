import React from 'react';
import { shallow } from 'enzyme';
import PaletteColors from './PaletteColors';

describe('PaletteColors', () => {
  const setLocked1 = jest.fn();
  const setLocked2 = jest.fn();
  const setLocked3 = jest.fn();
  const setLocked4 = jest.fn();
  const setLocked5 = jest.fn();

  const mockProps = {
    colors: {
      color1: '#000000',
      color2: '#ffffff',
      color3: '#000000',
      color4: '#ffffff',
      color5: '#000000'
    },
    lockeds: {
      locked1: false,
      locked2: true,
      locked3: false,
      locked4: true,
      locked5: false
    },
    setLockeds: {
      setLocked1,
      setLocked2,
      setLocked3,
      setLocked4,
      setLocked5
    }
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PaletteColors {...mockProps} />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call setLocked1 after click on icon for the first color with oposite value of locked', () => {
    wrapper.find('.color1 img').simulate('click');
    expect(setLocked1).toHaveBeenCalledWith(true);
  });

  it('should call setLocked2 after click on icon for the second color with oposite value of locked', () => {
    wrapper.find('.color2 img').simulate('click');
    expect(setLocked2).toHaveBeenCalledWith(false);
  });

  it('should call setLocked3 after click on icon for  third color with oposite value of locked', () => {
    wrapper.find('.color3 img').simulate('click');
    expect(setLocked3).toHaveBeenCalledWith(true);
  });

  it('should call setLocked4 after click on icon for the fourth color with oposite value of locked', () => {
    wrapper.find('.color4 img').simulate('click');
    expect(setLocked4).toHaveBeenCalledWith(false);
  });

  it('should call setLocked5 after click on icon for the fourth color with oposite value of locked', () => {
    wrapper.find('.color5 img').simulate('click');
    expect(setLocked5).toHaveBeenCalledWith(true);
  });
});
