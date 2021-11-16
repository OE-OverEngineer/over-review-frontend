/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Tabs } from 'antd';

import Banner1 from 'common/assets/images/banner/banner_1.png';
import Banner2 from 'common/assets/images/banner/banner_2.png';
import Banner3 from 'common/assets/images/banner/banner_3.png';
import Rating from 'common/assets/images/rating.svg';
import Star from 'common/assets/images/star.svg';

const DiscoverMovie: React.FC = () => {
  return (
    <section className="discover-movies h-full">
      <Star className="absolute h-full w-full z-0" />
      <div className=" max-w-screen-2xl mt-20 mb-16 mx-auto font-poppins">
        <Tabs
          defaultActiveKey="Random"
          centered
          tabBarExtraContent={{
            left: <div className="text-2xl">Discover Movies</div>,
            right: (
              <Input
                allowClear
                placeholder="search something here ..."
                bordered={false}
                style={{ color: '#fff' }}
                prefix={<SearchOutlined style={{ color: '#fff', marginRight: '8px' }} />}
                size="large"
              />
            ),
          }}>
          <Tabs.TabPane tab="Random" key="Random">
            <div className="grid gap-y-16 gap-x-5 py-16 justify-items-center grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <div className="card-item" key={`banner-items-${index}`}>
                  <div className="card-item-img">
                    <div className="relative flex items-center bg-primary-gradient -mb-8 w-max ml-auto rounded-full py-px px-3 -right-3 text-sm font-poppins">
                      <span>9.8</span>
                      <Rating className="ml-1" />
                    </div>
                    <img
                      src={Banner1.src}
                      alt="movie1"
                      className="object-cover w-64 mb-4 rounded-2xl"
                    />
                    <div className="flex gap-x-1 text-sm text-primary-default">
                      <span>2021</span>
                      <span>|</span>
                      <span>Action, Superhero</span>
                    </div>
                    <div className="flex gap-x-1 text-lg text-white">
                      <span>Black Widow</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Popular" key="Popular">
            <div className="grid gap-y-16 gap-x-5 py-16 justify-items-center grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <div className="card-item" key={`banner-items-${index}`}>
                  <div className="card-item-img">
                    <div className="relative flex items-center bg-primary-gradient -mb-8 w-max ml-auto rounded-full py-px px-3 -right-3 text-sm">
                      <span>9.8</span>
                      <Rating className="ml-1" />
                    </div>
                    <img
                      src={Banner2.src}
                      alt="movie1"
                      className="object-cover w-64 mb-4 rounded-2xl"
                    />
                    <div className="flex gap-x-1 text-sm text-primary-default">
                      <span>2021</span>
                      <span>|</span>
                      <span>Action, Superhero</span>
                    </div>
                    <div className="flex gap-x-1 text-lg text-white">
                      <span>Black Widow</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Recent" key="Recent">
            <div className="grid gap-y-16 gap-x-5 py-16 justify-items-center grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <div className="card-item" key={`banner-items-${index}`}>
                  <div className="card-item-img">
                    <div className="relative flex items-center bg-primary-gradient -mb-8 w-max ml-auto rounded-full py-px px-3 -right-3 text-sm">
                      <span>9.8</span>
                      <Rating className="ml-1" />
                    </div>
                    <img
                      src={Banner3.src}
                      alt="movie1"
                      className="object-cover w-64 mb-4 rounded-2xl"
                    />
                    <div className="flex gap-x-1 text-sm text-primary-default">
                      <span>2021</span>
                      <span>|</span>
                      <span>Action, Superhero</span>
                    </div>
                    <div className="flex gap-x-1 text-lg text-white">
                      <span>Black Widow</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.TabPane>
        </Tabs>
        <div className="flex justify-center">
          <Button
            className="px-6 py-0 order-5 font-poppins"
            type="primary"
            size="large"
            shape="round">
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMovie;
