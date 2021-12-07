import React, { useEffect, useState } from 'react';

import { Menu, Button, Avatar, Dropdown } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import Logo from 'common/assets/images/logoNav.svg';
import Svg from 'common/components/Svg';
import userController from 'common/services/Controllers/userController';
import { User } from 'common/services/reponseInterface/user.interface';
import { TOKEN_KEY } from 'common/utilities/constants';
import { handleItem } from 'common/utilities/local-storage';

const menu = (id: number) => (
  <Menu className="rounded-lg">
    <Menu.Item key="1" className="text-primary-default">
      <Link href={`/profile/${id}`}>My profile</Link>
    </Menu.Item>
    <Menu.Item key="2" className="text-primary-default">
      <Link href="/request-movie">Request Movie</Link>
    </Menu.Item>
    <Menu.Divider className="bg-primary-default w-40 mx-auto " />
    <Menu.Item
      key="3"
      className="text-primary-default"
      onClick={() => {
        handleItem(TOKEN_KEY);
      }}>
      <Link href="/login">Logout</Link>
    </Menu.Item>
  </Menu>
);

const NAV_CONTENT = [
  { key: 'home', title: 'Home' },

  { key: 'discover', title: 'Discover' },
];

const Navbar: React.FC<{ router?: string[] }> = ({ router }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [profile, setProfile] = useState<User>();
  const Router = useRouter();

  const { getUsersProfile } = userController();

  useEffect(() => {
    getUsersProfile()
      .then((res) => {
        setProfile(res);
        setIsAuth(true);
      })
      .catch(() => {
        setIsAuth(false);
      });
  }, []);

  return (
    <Header className="flex items-center justify-between mt-8 mx-8 font-poppins z-50">
      <div
        className="cursor-pointer"
        role="presentation"
        onClick={() => Router.push('/')}>
        <Svg Icon={<Logo />} />
      </div>
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
          {profile && isAuth ? (
            <div className="flex gap-5 ml-8">
              <Link href={`/profile/${profile.id}`}>
                <span className="text-white cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis">
                  {profile.displayName}
                </span>
              </Link>

              <Dropdown overlay={() => menu(profile.id)}>
                <div className="flex gap-x-4  items-center flex-1 ">
                  <Avatar
                    src={profile.avatarUrl}
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
