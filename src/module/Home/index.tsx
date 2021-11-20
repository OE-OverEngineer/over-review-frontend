import React from 'react';

import { Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import StarIcon from 'common/assets/images/star.svg';
import Navbar from 'common/components/Navbar';

import BannerSlider from './components/BannerSlider';
import DiscoverMovie from './components/DiscoverMovie';
import News from './components/News';

const Star: React.FC = () => <StarIcon className="absolute h-full w-full z-0" />;

const Home: React.FC = () => {
  return (
    <Layout className=" min-h-screen h-full">
      <Star />
      <Navbar />
      <Content>
        <BannerSlider />
        <DiscoverMovie />
        <News />
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Home;
