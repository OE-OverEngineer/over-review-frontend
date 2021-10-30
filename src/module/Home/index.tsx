import React from 'react';

import { Button, Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

import Logo from 'common/assets/images/logoNav.svg';
import Star from 'common/assets/images/star.svg';

const NAV_CONTENT = [
  { key: '1', title: 'Home' },
  { key: '2', title: 'About' },
  { key: '3', title: 'News' },
  { key: '4', title: 'Discover' },
  { key: '5', title: 'Community' },
];

const Home: React.FC = () => {
  return (
    <Layout className="max-h-screen  h-screen">
      <Star className="absolute h-full w-full z-0" />
      <Header className="flex items-center justify-between">
        <Logo />

        <Menu
          className="max-w-4xl items-center"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}>
          {NAV_CONTENT.map(({ key, title }) => (
            <Menu.Item className="px-10 py-0" key={key}>
              {title}
            </Menu.Item>
          ))}
          <Button className="px-10 py-0 order-5 mr-6" type="primary" shape="round">
            Login or Register
          </Button>
        </Menu>
      </Header>
      <Content>
        <section className="slider-banner max-w-screen-2xl m-auto">Banner</section>
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Home;
