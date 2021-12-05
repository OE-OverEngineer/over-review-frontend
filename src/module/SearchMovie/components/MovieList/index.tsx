import React, { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import { useRouter } from 'next/dist/client/router';

import Rating from 'common/assets/images/rating.svg';
import Star from 'common/assets/images/star.svg';
import Svg from 'common/components/Svg';
import moviesController from 'common/services/Controllers/moviesControllers';

const DiscoverMovieSection: React.FC = () => {
  const [moviePoster, setmoviePoster] = useState<any>();
  const { getMovieSearch } = moviesController();

  const Router = useRouter();
  const { search } = Router.query;

  useEffect(() => {
    if (typeof search === 'string') {
      console.log(search);

      getMovieSearch(search, 10, 1).then((res) => {
        console.log(res);

        setmoviePoster(res);
      });
    }
  }, [search]);

  return (
    <section className="discover-movies h-full ">
      <Svg Icon={<Star className="absolute h-full w-full -z-10" />} />

      <div className=" max-w-screen-2xl mb-16 mx-auto font-poppins z-10">
        <div className="grid gap-y-16 gap-x-5 mt-16 justify-items-center grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {moviePoster &&
            moviePoster.data.map((movie: any, index: any) => (
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
                      {movie.categories.map((category: any) => {
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
      </div>
    </section>
  );
};

export default DiscoverMovieSection;
