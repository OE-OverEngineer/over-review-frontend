import DiscoverMovie from 'module/Home/components/DiscoverMovie';

import React from 'react';

import { ProfileFilled, UserOutlined } from '@ant-design/icons';
import { Button, Input, Layout, Rate, Tabs } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import Male from 'common/assets/images/actors/1.png';
import Female from 'common/assets/images/actors/2.png';
import Banner1 from 'common/assets/images/banner/banner_1.png';
import Line from 'common/assets/images/line.svg';
import Over from 'common/assets/images/Over.svg';
import Mini from 'common/assets/images/profilemini.png';
import Rating from 'common/assets/images/rating.svg';
import Search from 'common/assets/images/search.svg';
import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Navbar';

import MoviePoster from './components/MoviePoster';

interface IHeaderProps {
  children?: React.ReactNode;
  title: string;
}
const { TextArea } = Input;

const actors = [
  {
    id: 1,
    imgSrc: Male.src,
    firstName: 'Taylor',
    lastName: 'Swift',
  },
  {
    id: 2,
    imgSrc: Female.src,
    firstName: 'Taylor',
    lastName: 'Swift',
  },
  {
    id: 3,
    imgSrc: Male.src,
    firstName: 'Taylor',
    lastName: 'Swift',
  },
  {
    id: 4,
    imgSrc: Female.src,
    firstName: 'Taylor',
    lastName: 'Swift',
  },
];

const Header: React.FC<{ title: string }> = ({ title }: IHeaderProps) => {
  return (
    <div>
      <div className="bg-gradient-to-b from-primary-default to-primary-purple2nd w-2 h-5 inline-block ml-80"></div>
      <span className="text-xl ml-10 font-poppins">{title.toUpperCase()}</span>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <Layout className="max-h-full ">
      <Star className="absolute h-full w-full z-0" />
      <Navbar />
      <Content>
        <section className="max-w-screen-2xl m-auto text-white z-10">
          <div className="flex justify-end mt-14"></div>

          <div className="text-center text-6xl font-poppins italic mt-10">Moon Light</div>
          <div>
            <MoviePoster />
          </div>
          <Header title={'ACTOR'} />

          <div className="grid grid-cols-4 px-80 mt-5 font-poppins text-lg">
            {actors.map((actor) => (
              <div className="col-span-1" key={actor.id}>
                <img src={actor.imgSrc} className="mx-auto" alt={actor.firstName} />
                <p className="mx-auto text-center mt-4">
                  {actor.firstName}
                  <br />
                  {actor.lastName}
                </p>
              </div>
            ))}
          </div>

          <Button
            className="px-6 py-0 font-poppins mx-auto block"
            type="primary"
            size="middle"
            shape="round">
            See more
          </Button>

          <Line className="mx-auto mt-8 " />
          <div className="mt-8">
            <Header title={'CRITIC REVIEWS '} />
          </div>
          <div className="border-2 border-primary-default w-3/5 mx-auto rounded-3xl flex flex-col gap-y-4 p-4 mt-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="grid grid-cols-12" key={index}>
                {index === 0 && (
                  <div className="col-span-11 flex justify-end">
                    <span className="text-primary-defaultLight italic">TOP review</span>
                  </div>
                )}
                <div className="border border-white col-span-11 rounded-xl p-3 font-poppins">
                  <Rate className="" allowHalf defaultValue={3.5} disabled />
                  <br />A powerful reminder how something as seemingly lowbrow and
                  disposable as horror cinema can be a surprisingly successful vehicle to
                  address.
                </div>
                <div className="col-span-1">
                  <img src={Mini.src} alt="profile" className="w-9/12 mx-auto" />
                </div>
                <button className="border-2 border-primary-default font-poppins text-xs italic rounded-md w-16 mt-4 text-primary-defaultLight">
                  1234 <Over className="inline-block " />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Header title={'RATE AND REVIEWS '} />

            <Rate className="ml-80 mt-4" allowHalf defaultValue={0} />
          </div>
          <div className="font-poppins text-base ml-80 mt-4 text-primary-purple2nd">
            What do you think of the movie?
          </div>
          <div className="w-3/5 mx-auto">
            <TextArea
              placeholder="input your review."
              className="mt-4 text-primary-default font-poppins "
              showCount
              maxLength={300}
            />
            <br />
            <Button
              className="px-6 py-0 font-poppins  block ml-auto"
              type="primary"
              size="middle"
              shape="round">
              Post
            </Button>
          </div>
          <Header title={'YOU MIGHT ALSO LIKE'} />
          <div className="w-3/5 mx-auto">
            <div className="grid gap-y-16 gap-x-5 py-16 justify-items-center grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              {Array.from({ length: 5 }).map((_, index) => (
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
          </div>
        </section>
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Home;
