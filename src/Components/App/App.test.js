import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { getProjects } from '../../apiCalls/apiCalls';
import { getRandomColor } from '../../_utils/_utils';

jest.mock('../../apiCalls/apiCalls');
jest.mock('../../_utils/_utils');

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(app).toMatchSnapshot();
  });
});
