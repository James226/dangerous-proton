import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../HomePage';

describe('home page', () => {
  let page;
  beforeAll(() => {
    page = shallow(<HomePage />);
  });

  it('should display the home page title', () => {
    expect(page.find('h1').text()).toBe('Home Page');
  });
});
