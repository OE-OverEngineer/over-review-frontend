import React from 'react';

import { Input, Layout, Tabs } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Navbar';

import BannerSlider from './components/Banner';
import Slider from './components/Slider';

interface IHeaderProps {
  children?: React.ReactNode;
  title: string;
}

const Header: React.FC<{ title: string }> = ({ title }: IHeaderProps) => {
  return (
    <div>
      <div className="bg-gradient-to-b from-primary-default to-primary-purple2nd w-2 h-5 inline-block mt-8"></div>
      <span className="text-xl ml-10 font-poppins">{title.toUpperCase()}</span>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <Layout className=" min-h-screen h-full">
      <Star className="absolute h-full w-full z-0" />
      <Navbar />
      <Content>
        <BannerSlider />
        <div className="text-2xl max-w-screen-2xl mt-20 mb-16 mx-auto font-poppins">
          Discover Movies
          <Header title={'Trending Now'} />
          <Slider />
          <Header title={'Last Release'} />
          <Slider />
          <Header title={'Action'} />
          <Slider />
          <Header title={'Romantic'} />
          <Slider />
          <Header title={'Horror'} />
          <Slider />
        </div>
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Home;
