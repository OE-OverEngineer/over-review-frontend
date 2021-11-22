import React from 'react';

import { Input, Layout, Tabs } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Navbar';
import TextHeader from 'common/components/TextHeader';

import BannerSlider from './components/Banner';
import Slider from './components/Slider';

const Home: React.FC = () => {
  return (
    <Layout className=" min-h-screen h-full">
      <Star className="absolute h-full w-full z-0" />
      <Navbar />
      <Content>
        <BannerSlider />
        <div className="text-2xl max-w-screen-2xl mt-20 mb-16 mx-auto font-poppins">
          Discover Movies
        </div>
        <TextHeader className="mt-12 ">Trending Now</TextHeader>
        <Slider />
        <TextHeader className="mt-12">Last Release</TextHeader>
        <Slider />
        <TextHeader className="mt-12">Action</TextHeader>
        <Slider />
        <TextHeader className="mt-12">Love comedy</TextHeader>
        <Slider />
        <TextHeader className="mt-12">Horror</TextHeader>
        <Slider />
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Home;
