import BannerSlider from 'module/Home/components/DiscoverMovie/BannerMovie';

import React from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Input, Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Navbar';
import TextHeader from 'common/components/TextHeader';

import PosterSlider from './components/BannerSlider';
import HeroSlider from './components/HeroSlider';

const Home: React.FC = () => {
  return (
    <Layout className=" min-h-screen h-full">
      <Star className="absolute h-full w-full z-0" />
      <Navbar />
      <Content>
        <BannerSlider />
        <div className="">
          <div className="flex justify-between max-w-screen-2xl mx-auto mb-8">
            <div className="text-2xl ">Discover Movies</div>
            <Input
              allowClear
              placeholder="search something here"
              bordered={false}
              className="text-white w-72"
              prefix={<SearchOutlined className="text-white mr-2" />}
              size="large"
            />
          </div>
          <TextHeader className="max-w-screen-2xl mx-auto mb-8">Trending Now</TextHeader>
          <PosterSlider />
          <TextHeader className="max-w-screen-2xl mx-auto mb-8">Last Release</TextHeader>
          <PosterSlider />
          <TextHeader className="max-w-screen-2xl mx-auto mb-8">Action</TextHeader>
          <PosterSlider />
          <TextHeader className="max-w-screen-2xl mx-auto mb-8">Romantic</TextHeader>
          <PosterSlider />
          <TextHeader className="max-w-screen-2xl mx-auto mb-8">Horror</TextHeader>
          <PosterSlider />
        </div>
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Home;
