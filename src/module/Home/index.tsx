import React from 'react';

import { Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Navbar';

import BannerSlider from './components/BannerSlider';
import DiscoverMovie from './components/DiscoverMovie';

const Home: React.FC = () => {
  return (
    <Layout>
      <Star className="absolute h-full w-full z-0" />
      <Navbar />
      <Content>
        <BannerSlider />
        <DiscoverMovie />
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Home;
