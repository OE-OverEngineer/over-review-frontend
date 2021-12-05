import React, { useEffect, useState } from 'react';

import { Button, Form, Input, Layout, Rate } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import { useRouter } from 'next/dist/client/router';
import { toast, ToastContainer } from 'react-toastify';

import Male from 'common/assets/images/actors/1.png';
import Banner1 from 'common/assets/images/banner/banner_1.png';
import Line from 'common/assets/images/line.svg';
import Rating from 'common/assets/images/rating.svg';
import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Layouts/Navbar';
import TextHeader from 'common/components/TextHeader';
import moviesController from 'common/services/Controllers/moviesControllers';
import reviewsController from 'common/services/Controllers/reviewsControllers';
import { Movie } from 'common/services/reponseInterface/movie.interface';

import CriticReviews from './components/CriticReviews';
import MoviePoster from './components/MoviePoster';

const { TextArea } = Input;

const Home: React.FC = () => {
  const [movie, setMovie] = useState<Movie>();
  const Router = useRouter();
  const { id } = Router.query;

  const { getMoviesId, getMoviesIdReviews } = moviesController();
  const { postReviews } = reviewsController();

  useEffect(() => {
    if (typeof id === 'string') {
      getMoviesId(id).then((res: Movie) => {
        console.log(res);
        setMovie(res);
      });
      getMoviesIdReviews(id, 10, 1).then((res: any) => {
        console.log(res);
      });
    }
  }, [id]);

  const onFinish = (values: Record<string, string>) => {
    console.log('Success:', values);
    const score = parseFloat(values.score + values.score);
    const moiveID = movie?.id || '';
    const param = {
      moiveID,
      message: values.message,
      score,
    };
    postReviews(param)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err) => {
        toast.error(err.message, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <Layout className="max-h-full ">
      <Star className="absolute h-full w-full z-0" />
      <Navbar />
      <Content>
        <section className="max-w-screen-2xl m-auto text-white z-10">
          <div className="flex justify-end mt-14"></div>

          <div className="text-center text-6xl font-poppins italic mt-10">
            {movie?.title}
          </div>
          <div>{movie && <MoviePoster movie={movie} />}</div>

          <TextHeader className="max-w-screen-lg m-auto">ACTOR</TextHeader>
          <div className="grid grid-cols-4 px-80 mt-5 font-poppins text-lg">
            {movie?.actors.map((actor, index) => {
              if (index < 4) {
                return (
                  <div className="col-span-1" key={actor.id}>
                    <img
                      src={Male.src}
                      className="mx-auto w-40 h-40 rounded-full"
                      alt={actor.firstName}
                    />
                    <p className="mx-auto text-center mt-4 mb-0 whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {actor.firstName}
                    </p>
                    <p className="mx-auto text-center whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {actor.lastName}
                    </p>
                  </div>
                );
              } else {
                return null;
              }
            })}
            {movie && movie.actors.length > 4 && (
              <Button
                className="px-6 py-0 font-poppins mx-auto block"
                type="primary"
                size="middle"
                shape="round">
                {`+ ${movie.actors.length - 3} more`}
              </Button>
            )}
          </div>

          <Line className="mx-auto mt-8 " />
          <CriticReviews />

          <TextHeader className="max-w-screen-lg m-auto mt-8">
            RATE AND REVIEWS
          </TextHeader>
          <Form
            name="loginForm"
            className="max-w-screen-lg m-auto"
            layout="vertical"
            initialValues={{ score: 0 }}
            autoComplete="off"
            onFinish={onFinish}>
            <Form.Item
              name="score"
              rules={[
                {
                  required: true,
                  message: 'Please input your score!',
                },
              ]}>
              <Rate className="mt-4" allowHalf />
            </Form.Item>

            <div className="font-poppins text-base mt-4 text-primary-purple2nd">
              What do you think of the movie?
            </div>
            <div className="mx-auto">
              <Form.Item name="message">
                <TextArea
                  placeholder="input your review."
                  className="mt-4 text-primary-default"
                  showCount
                  required
                  rows={5}
                />
              </Form.Item>
              <br />
              <Button
                className="px-6 py-0 font-poppins  block ml-auto"
                type="primary"
                htmlType="submit"
                size="middle"
                shape="round">
                Post
              </Button>
            </div>
          </Form>

          <TextHeader className="max-w-screen-lg m-auto">YOU MIGHT ALSO LIKE</TextHeader>
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
        <ToastContainer />
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Home;
