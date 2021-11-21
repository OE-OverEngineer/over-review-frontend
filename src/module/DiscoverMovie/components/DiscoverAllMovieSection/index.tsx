import React from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import TextHeader from 'common/components/TextHeader';

import PosterSlider from '../PosterSlider';

const DiscoverAllMovieSection = () => {
  return (
    <section className="discover-all-movie mt-16">
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
    </section>
  );
};

export default DiscoverAllMovieSection;
