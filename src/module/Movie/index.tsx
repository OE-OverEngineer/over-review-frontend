import React from 'react';

import { Button, Input, Layout, Rate } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import Male from 'common/assets/images/actors/1.png';
import Female from 'common/assets/images/actors/2.png';
import Banner1 from 'common/assets/images/banner/banner_1.png';
import Line from 'common/assets/images/line.svg';
import Rating from 'common/assets/images/rating.svg';
import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Layouts/Navbar';
import TextHeader from 'common/components/TextHeader';

import CriticReviews from './components/CriticReviews';
import MoviePoster from './components/MoviePoster';

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
          <TextHeader className="ml-80">ACTOR</TextHeader>

          <div className="grid grid-cols-4 px-80 mt-5 font-poppins text-lg">
            {actors.map((actor) => (
              <div className="col-span-1" key={actor.id}>
                <img
                  src={actor.imgSrc}
                  className="mx-auto w-40 h-40 rounded-full"
                  alt={actor.firstName}
                />
                <p className="mx-auto text-center mt-4 mb-0">{actor.firstName}</p>
                <p className="mx-auto text-center">{actor.lastName}</p>
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
          <CriticReviews />
          <div className="mt-8">
            <TextHeader className="ml-80">RATE AND REVIEWS</TextHeader>

            <Rate className="ml-80 mt-4" allowHalf defaultValue={0} />
          </div>
          <div className="font-poppins text-base ml-80 mt-4 text-primary-purple2nd">
            What do you think of the movie?
          </div>
          <div className="w-3/5 mx-auto">
            <TextArea
              placeholder="input your review."
              className="mt-4 text-primary-default"
              showCount
              rows={5}
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
          <TextHeader className="ml-80">YOU MIGHT ALSO LIKE</TextHeader>
          <div className="max-w-screen-lg mx-auto">
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
