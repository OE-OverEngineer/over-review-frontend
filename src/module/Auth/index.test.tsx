import React from 'react';

import { Button, Input } from 'antd';
import { shallow } from 'enzyme';

import Auth from '.';

describe('Auth page', () => {
  it('Auth should be defined', () => {
    const wrap = shallow(<Auth />);
    wrap.find(Input).simulate('change', { target: { value: 'test' } });
    wrap.find(Button).simulate('click');
    expect(wrap.find('div[role="alert"]').debug()).toEqual(
      '<div role="alert" class="ant-form-item-explain-error" style="">Please input your password!</div>',
    );

    // expect(toJson(wrap)).toMatchSnapshot();
  });
});
