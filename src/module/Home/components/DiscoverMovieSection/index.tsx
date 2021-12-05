/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Tabs } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/dist/client/router';

import Rating from 'common/assets/images/rating.svg';
import Star from 'common/assets/images/star.svg';
import Svg from 'common/components/Svg';
import categoriesController from 'common/services/Controllers/categoriesControllers';
import moviesController from 'common/services/Controllers/moviesControllers';
import { MoviePaginate } from 'common/services/reponseInterface/movie.interface';

const DiscoverMovieSection: React.FC = () => {
  const [moviePoster, setmoviePoster] = useState<MoviePaginate>();
  const { getMovies } = moviesController();
  const { getCategories } = categoriesController();

  const Router = useRouter();

  useEffect(() => {
    getMovies(10, 2).then((res) => {
      console.log(res);

      setmoviePoster(res);
    });
    getCategories().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <section className="discover-movies h-full">
      <Svg Icon={<Star className="absolute h-full w-full -z-10" />} />

      <div className=" max-w-screen-2xl mt-20 mb-16 mx-auto font-poppins z-10">
        <Tabs
          defaultActiveKey="Random"
          centered
          onChange={(key) => {
            getMovies(10, 1, key).then((res) => {
              setmoviePoster(res);
            });
          }}
          tabBarExtraContent={{
            left: <div className="text-2xl">Discover Movies</div>,
            right: (
              <Input
                allowClear
                placeholder="search something here"
                bordered={false}
                className="text-white"
                prefix={<SearchOutlined className="text-white mr-2" />}
                size="large"
              />
            ),
          }}>
          <Tabs.TabPane tab="Random" key="random">
            <div className="grid gap-y-16 gap-x-5 py-16 justify-items-center grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              {moviePoster &&
                moviePoster.data.map((movie, index) => (
                  <div
                    className="card-item cursor-pointer"
                    key={`banner-items-${index}`}
                    role="presentation"
                    onClick={() => {
                      Router.push(`/movie/${movie.id}`);
                    }}>
                    <div className="card-item-img">
                      <div className="relative flex items-center bg-primary-gradient -mb-8 w-max ml-auto rounded-full py-px px-3 -right-3 text-sm font-poppins">
                        <span>{movie.score}</span>
                        <Rating className="ml-1" />
                      </div>
                      <img
                        src={movie.bannerImageUrl}
                        alt="movie1"
                        className="object-cover w-64 mb-4 rounded-2xl hover:shadow-xl transition-shadow duration-300 m-auto"
                      />
                      <div className="flex w-64 gap-x-1 text-sm text-primary-default overflow-hidden overflow-ellipsis">
                        <span>{dayjs(movie.startDate).year()}</span>
                        <span>|</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                          {movie.categories.map((category) => {
                            return `${category.title} `;
                          })}
                        </span>
                      </div>
                      <div className="flex gap-x-1 text-lg text-white">
                        <span>{movie.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Popular" key="popular">
            <div className="grid gap-y-16 gap-x-5 py-16 justify-items-center grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              {moviePoster &&
                moviePoster.data.map((movie, index) => (
                  <div
                    className="card-item cursor-pointer"
                    key={`banner-items-${index}`}
                    role="presentation"
                    onClick={() => {
                      Router.push(`/movie/${movie.id}`);
                    }}>
                    <div className="card-item-img">
                      <div className="relative flex items-center bg-primary-gradient -mb-8 w-max ml-auto rounded-full py-px px-3 -right-3 text-sm font-poppins">
                        <span>{movie.score}</span>
                        <Rating className="ml-1" />
                      </div>
                      <img
                        src={movie.bannerImageUrl}
                        alt="movie1"
                        className="object-cover w-64 mb-4 rounded-2xl hover:shadow-xl transition-shadow duration-300 m-auto"
                      />
                      <div className="flex w-64 gap-x-1 text-sm text-primary-default overflow-hidden overflow-ellipsis">
                        <span>{dayjs(movie.startDate).year()}</span>
                        <span>|</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                          {movie.categories.map((category) => {
                            return `${category.title} `;
                          })}
                        </span>
                      </div>
                      <div className="flex gap-x-1 text-lg text-white">
                        <span>{movie.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Recent" key="recent">
            <div className="grid gap-y-16 gap-x-5 py-16 justify-items-center grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              {moviePoster &&
                moviePoster.data.map((movie, index) => (
                  <div
                    className="card-item cursor-pointer"
                    key={`banner-items-${index}`}
                    role="presentation"
                    onClick={() => {
                      Router.push(`/movie/${movie.id}`);
                    }}>
                    <div className="card-item-img">
                      <div className="relative flex items-center bg-primary-gradient -mb-8 w-max ml-auto rounded-full py-px px-3 -right-3 text-sm font-poppins">
                        <span>{movie.score}</span>
                        <Rating className="ml-1" />
                      </div>
                      <img
                        src={movie.bannerImageUrl}
                        alt="movie1"
                        className="object-cover w-64 mb-4 rounded-2xl hover:shadow-xl transition-shadow duration-300 m-auto"
                      />
                      <div className="flex w-64 gap-x-1 text-sm text-primary-default overflow-hidden overflow-ellipsis">
                        <span>{dayjs(movie.startDate).year()}</span>
                        <span>|</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                          {movie.categories.map((category) => {
                            return `${category.title} `;
                          })}
                        </span>
                      </div>
                      <div className="flex gap-x-1 text-lg text-white">
                        <span>{movie.title}</span>
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
            shape="round"
            onClick={() => Router.push('/discover-movie')}>
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMovieSection;
