import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from '.';

describe('Index page', () => {
  it('Index page should be defined', () => {
    const wrap = shallow(<Home />);
    // console.log(wrap);

    expect(wrap.exists()).toBe(true);
    expect(toJson(wrap)).toMatchSnapshot();
  });
});
