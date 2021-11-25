import React, { useEffect, useState } from 'react';

import { Menu, Button, Avatar, Dropdown } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import Logo from 'common/assets/images/logoNav.svg';
import { TOKEN_KEY } from 'common/utilities/constants';

const menu = (
  <Menu className="rounded-lg">
    <Menu.Item key="1" className="text-primary-default">
      <Link href="/profile">My profile</Link>
    </Menu.Item>
    <Menu.Item key="2" className="text-primary-default">
      <Link href="/request-movie">Request Movie</Link>
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
  const [isAuth, setIsAuth] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      setIsAuth(true);
    }
  }, []);

  return (
    <Header className="flex items-center justify-between mt-8 mx-8 font-poppins z-50">
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
            <div className="flex gap-5 ml-8">
              <Link href="/profile">
                <span className="text-white cursor-pointer">Nawa Lee</span>
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
              shape="round"
              onClick={() => {
                Router.push('/login');
              }}>
              Login or Register
            </Button>
          )}
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
