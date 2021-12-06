import React, { useEffect, useState } from 'react';

import { Button, Form, Input, Rate } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { toast, ToastContainer } from 'react-toastify';

import Rating from 'common/assets/images/rating.svg';
import Layouts from 'common/components/Layouts';
import TextHeader from 'common/components/TextHeader';
import moviesController from 'common/services/Controllers/moviesControllers';
import reviewsController from 'common/services/Controllers/reviewsControllers';
import userController from 'common/services/Controllers/userController';
import { Movie } from 'common/services/reponseInterface/movie.interface';
import {
  Review,
  ReviewPaginate,
} from 'common/services/reponseInterface/review.interface';
import { User } from 'common/services/reponseInterface/user.interface';

import CriticReviews from './components/CriticReviews';
import MoviePoster from './components/MoviePoster';

const { TextArea } = Input;

const Home: React.FC = () => {
  const [movie, setMovie] = useState<Movie>();
  const [recommand, setRecommand] = useState<Movie[]>([]);
  const [review, setReview] = useState<ReviewPaginate>({ data: [], total: 0 });
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isUserReview, setIsUserReview] = useState<Review>();

  const Router = useRouter();
  const { id } = Router.query;

  const { getMoviesId, getMoviesIdReviews, getMovies } = moviesController();
  const { postReviews } = reviewsController();
  const { getUsersProfile } = userController();

  useEffect(() => {
    (async () => {
      try {
        const user = await getUsersProfile();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    getMovies(5, 1, 'popular').then((res) => {
      console.log(res);
      setRecommand(res.data);
    });

    if (typeof id === 'string') {
      getMoviesId(id).then((res: Movie) => {
        console.log('getMoviesId', res);
        setMovie(res);
      });
      getMoviesIdReviews(id, 100, 1).then((res) => {
        console.log('getMoviesIdReviews', res);
        if (user) {
          console.log(
            'user',
            res.data.find((out) => out.user.id === user.id),
            user.id,
          );
          setIsUserReview(res.data.find((out) => out.user.id === user.id) || undefined);
        }
        setReview(res);
      });
    }
  }, [id, user]);

  const onFinish = (values: { message: string; score: number }) => {
    console.log('Success:', values);
    const score = values.score + values.score;
    const movieID = movie?.id || '';
    const param = {
      movieID: movieID,
      message: values.message,
      score,
    };
    postReviews(param)
      .then((res) => {
        toast.success('Review Success!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsUserReview(res);
        setLoading(true);
      })
      .catch((err) => {
        if (err.statusCode === 409) {
          toast.error('You have already reviewed this movie!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (err.statusCode === 401) {
          toast.error('Please first log in!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error(err.message, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/over_icon.svg" />
      </Head>
      <Layouts>
        <section className="max-w-screen-2xl m-auto text-white z-10">
          <div className="text-center text-6xl font-poppins italic mt-16">
            {movie?.title}
          </div>
          <div>{movie && <MoviePoster movie={movie} />}</div>

          <section className="actor">
            <TextHeader className="max-w-screen-lg m-auto">ACTOR</TextHeader>
            <div className="grid grid-cols-4 px-80 mt-5 font-poppins text-lg">
              {movie &&
                movie.actors.map((actor, index) => {
                  if (index < 4) {
                    return (
                      <div className="col-span-1" key={actor.id}>
                        <img
                          src={actor.imageUrl}
                          className="mx-auto w-40 h-40 rounded-full object-cover"
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
          </section>

          {/* <Line className="mx-auto mt-8 " /> */}
          <CriticReviews loading={loading} setLoading={setLoading} />

          {user && isUserReview && (
            <section className="rate-review max-w-screen-lg m-auto my-12">
              <TextHeader className="m-auto mt-8">YOUR REVIEW</TextHeader>
              <div className="border-2 border-primary-default rounded-2xl mx-auto flex flex-col p-4 mt-8">
                <Rate
                  className="mb-4"
                  defaultValue={isUserReview.score / 2}
                  allowHalf
                  disabled
                />
                {isUserReview.message}
              </div>
            </section>
          )}

          {user && !isUserReview && (
            <section className="rate-review max-w-screen-lg m-auto">
              <TextHeader className=" m-auto mt-8">RATE AND REVIEW</TextHeader>
              <Form
                name="loginForm"
                className=" m-auto"
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
            </section>
          )}

          {!user && (
            <section className="rate-review max-w-screen-lg m-auto">
              <TextHeader className=" m-auto mt-8">RATE AND REVIEW</TextHeader>
              <Form
                name="loginForm"
                className=" m-auto"
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
                  <Rate className="mt-4" allowHalf disabled />
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
                      disabled
                    />
                  </Form.Item>
                  <br />
                  <Button
                    className="px-6 py-0 font-poppins  block ml-auto"
                    type="primary"
                    size="middle"
                    shape="round"
                    onClick={() => {
                      Router.push('/login');
                    }}>
                    Please login befor review
                  </Button>
                </div>
              </Form>
            </section>
          )}

          <section className="recommend-movie">
            <TextHeader className="max-w-screen-lg m-auto">
              YOU MIGHT ALSO LIKE
            </TextHeader>
            <div className="max-w-screen-lg mx-auto">
              <div className="grid gap-y-16 gap-x-5 py-16 justify-items-center grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {recommand.map((movie, index) => (
                  <div
                    className="card-item cursor-pointer"
                    key={`banner-items-${index}`}
                    role="presentation"
                    onClick={() => {
                      Router.push(`/movie/${movie.id}`);
                    }}>
                    <div className="card-item-img">
                      <div className="relative flex items-center bg-primary-gradient -mb-8 w-max ml-auto rounded-full py-px px-3 -right-3 text-sm">
                        <span>{movie.score}</span>
                        <Rating className="ml-1" />
                      </div>
                      <img
                        src={movie.bannerImageUrl}
                        alt="movie1"
                        className="object-cover w-64 h-72 mb-4 rounded-2xl hover:shadow-xl transition-shadow duration-300 m-auto"
                      />
                      <div className="flex w-32 gap-x-1 text-sm text-primary-default overflow-hidden overflow-ellipsis">
                        <span>{dayjs(movie.startDate).year()}</span>
                        <span>|</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                          {movie.categories.map((category) => {
                            return `${category.title} `;
                          })}
                        </span>
                      </div>
                      <div className="flex gap-x-1 text-smtext-white">
                        <span>{movie.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
        <ToastContainer />
      </Layouts>
    </div>
  );
};

export default Home;
