/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { Avatar } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/dist/client/router';

import Bronze from 'common/assets/images/bronze_medals.svg';
import Gold from 'common/assets/images/gold_medals.svg';
import OverIcon from 'common/assets/images/Over.svg';
import Silver from 'common/assets/images/silver_medals.svg';
import Svg from 'common/components/Svg';
import TextHeader from 'common/components/TextHeader';
import moviesController from 'common/services/Controllers/moviesControllers';
import userController from 'common/services/Controllers/userController';
import { MoviePaginate } from 'common/services/reponseInterface/movie.interface';
import { User } from 'common/services/reponseInterface/user.interface';

const HallOfFameSection: React.FC = () => {
  const [topReview, setTopReview] = useState<User[]>([]);
  const [movie, setMovie] = useState<MoviePaginate>();

  const Router = useRouter();

  const { getTopReview } = userController();
  const { getMovies } = moviesController();

  useEffect(() => {
    getTopReview(5).then((res) => {
      setTopReview(res);
    });
    getMovies(3, 1, 'score').then((res) => {
      setMovie(res);
    });
  }, []);

  return (
    <section className="hall-of-fame h-full">
      <div className=" max-w-screen-2xl mt-20 mb-16 mx-auto font-poppins">
        <div className="text-5xl italic mb-16 text-center">Hall of Fame</div>
        <div className="flex gap-x-4">
          <div className="w-2/4">
            <div className="grid grid-cols-2 mb-4">
              <TextHeader>Top Reviewers</TextHeader>
            </div>
            {topReview.map((userTop, index) => (
              <div className="flex items-center justify-between mb-4" key={index}>
                <div className="flex gap-x-4 text-lg items-center flex-1">
                  <Avatar src={userTop.avatarUrl} size={54} />
                  {userTop.firstName} {userTop.lastName}
                </div>
                <div className="text-base text-primary-purple2nd flex items-center justify-center flex-1 gap-2">
                  {userTop.amountReviews}
                  <Svg Icon={<OverIcon />} />
                </div>
              </div>
            ))}
          </div>
          {movie && (
            <div className="w-2/4 flex flex-col">
              <TextHeader className="mb-4">Top Movies</TextHeader>
              <div className="flex flex-1 bg-primary-defaultLight2nd w-full h-full rounded-2xl px-8 py-4 justify-center items-center gap-8">
                <div
                  className="cursor-pointer"
                  role="presentation"
                  onClick={() => {
                    Router.push(`/movie/${movie.data[1].id}`);
                  }}>
                  <Svg Icon={<Silver className="ml-auto" />} className="relative h-3" />
                  <div className="absolute w-44 h-64 bg-gradient-to-b from-transparent via-transparent to-black  rounded-xl flex flex-col justify-end bg-opacity-0 opacity-0 p-2 transition duration-300 ease-in-out hover:bg-opacity-20 hover:opacity-100">
                    <div className="text-sm">{dayjs(movie.data[1].startDate).year()}</div>
                    <div className="text-base w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {movie.data[1].title}
                    </div>
                  </div>
                  <img
                    src={movie.data[1].bannerImageUrl}
                    alt="movie3"
                    className="w-44 h-64 m-auto rounded-xl object-cover"
                  />
                </div>

                <div
                  className="cursor-pointer"
                  role="presentation"
                  onClick={() => {
                    Router.push(`/movie/${movie.data[0].id}`);
                  }}>
                  <Svg Icon={<Gold className="ml-auto" />} className="relative h-4" />
                  <div className="absolute w-52 h-72 bg-gradient-to-b from-transparent via-transparent to-black  rounded-xl flex flex-col justify-end bg-opacity-0 opacity-0 p-2 transition duration-300 ease-in-out hover:bg-opacity-20 hover:opacity-100">
                    <div className="text-sm">{dayjs(movie.data[0].startDate).year()}</div>
                    <div className="text-base w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {movie.data[0].title}
                    </div>
                  </div>
                  <img
                    src={movie.data[0].bannerImageUrl}
                    alt="movie3"
                    className="w-52 h-72 m-auto rounded-xl object-cover"
                  />
                </div>

                <div
                  className="cursor-pointer"
                  role="presentation"
                  onClick={() => {
                    Router.push(`/movie/${movie.data[2].id}`);
                  }}>
                  <Svg Icon={<Bronze className="ml-auto" />} className="relative h-3" />
                  <div className="absolute w-44 h-64 bg-gradient-to-b from-transparent via-transparent to-black  rounded-xl flex flex-col justify-end bg-opacity-0 opacity-0 p-2 transition duration-300 ease-in-out hover:bg-opacity-20 hover:opacity-100">
                    <div className="text-sm">{dayjs(movie.data[2].startDate).year()}</div>
                    <div className="text-base w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {movie.data[2].title}
                    </div>
                  </div>
                  <img
                    src={movie.data[2].bannerImageUrl}
                    alt="movie3"
                    className="w-44 h-64 m-auto rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HallOfFameSection;
