import React from 'react';

import { Menu, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';

import Logo from 'common/assets/images/logoNav.svg';

const NAV_CONTENT = [
  { key: '1', title: 'Home' },
  { key: '2', title: 'About' },
  { key: '3', title: 'News' },
  { key: '4', title: 'Discover' },
  { key: '5', title: 'Community' },
];

const Navbar: React.FC = () => {
  return (
    <Header className="flex items-center justify-between mt-20 mx-8">
      <Logo />

      <Menu
        className="max-w-4xl items-center"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['1']}>
        {NAV_CONTENT.map(({ key, title }) => (
          <Menu.Item className=" px-10 py-0" key={key}>
            {title}
          </Menu.Item>
        ))}
        <Button className="px-6 py-0 order-5 mr-6 " type="primary" shape="round">
          Login or Register
        </Button>
      </Menu>
    </Header>
  );
};

export default Navbar;
