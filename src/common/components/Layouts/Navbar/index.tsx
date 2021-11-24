import React, { useState } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Menu, Button, Avatar, Dropdown, message, Divider } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import Logo from 'common/assets/images/logoNav.svg';

const menu = (
  <Menu className="rounded-lg">
    <Menu.Item key="1" className="text-primary-default">
      My profile
    </Menu.Item>
    <Menu.Item key="2" className="text-primary-default">
      Request Movie
    </Menu.Item>
    <Menu.Divider className="bg-primary-default w-40 mx-auto " />
    <Menu.Item key="3" className="text-primary-default">
      Log out
    </Menu.Item>
  </Menu>
);

const NAV_CONTENT = [
  { key: 'home', title: 'Home' },

  { key: 'discover', title: 'Discover' },
];

const Navbar: React.FC<{ router?: string[] }> = ({ router }) => {
  const [isAuth, setIsAuth] = useState(true);
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
          {isAuth ? (
            <div className="flex gap-5">
              <Link href="/profile">
                <a className="cursor-pointer">Nawa Lee</a>
              </Link>
              <Dropdown overlay={menu}>
                <div className="flex gap-x-4  items-center flex-1 ">
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    size={54}
                    className="border-2 border-primary-default"
                  />
                </div>
              </Dropdown>
            </div>
          ) : (
            <Button
              className="px-6 py-0 order-5 mr-6 font-poppins "
              type="primary"
              shape="round">
              Login or Register
            </Button>
          )}
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
