import React from 'react';

import { Menu, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useRouter } from 'next/dist/client/router';

import Logo from 'common/assets/images/logoNav.svg';

const NAV_CONTENT = [
  { key: 'home', title: 'Home' },

  { key: 'discover', title: 'Discover' },
];

const Navbar: React.FC<{ router?: string[] }> = ({ router }) => {
  const Router = useRouter();

  return (
    <Header className="flex items-center justify-between mt-8 mx-8 font-poppins">
      <Logo />
      <div className="flex items-center">
        <Menu
          className="max-w-4xl items-center"
          theme="light"
          mode="horizontal"
          onClick={(props) => {
            if (props.key === 'home') {
              Router.push('/');
            }

            if (props.key === 'discover') {
              Router.push(`/discover-movie`);
            }
          }}
          defaultSelectedKeys={router}>
          {NAV_CONTENT.map(({ key, title }) => (
            <Menu.Item className=" px-10 py-0" key={key}>
              {title}
            </Menu.Item>
          ))}
        </Menu>
        <div className=" flex h-16 items-center">
          <Button
            className="px-6 py-0 order-5 mr-6 font-poppins "
            type="primary"
            shape="round">
            Login or Register
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
