import React from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Input, Layout } from 'antd';
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
          <Slider />
          {/* <TextHeader>Last Release</TextHeader>
          <Slider />
          <TextHeader>Action</TextHeader>
          <Slider />
          <TextHeader>Romantic</TextHeader>
          <Slider />
          <TextHeader>Horror</TextHeader>
          <Slider /> */}
        </div>
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Home;
