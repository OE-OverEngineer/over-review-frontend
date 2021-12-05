import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import BannerSlider from 'common/components/BannerSlider';
import Layouts from 'common/components/Layouts';
import moviesController from 'common/services/Controllers/moviesControllers';
import { MoviePaginate } from 'common/services/reponseInterface/movie.interface';

import DiscoverAllMovieSection from './components/DiscoverAllMovieSection';

const Home: React.FC = () => {
  const [movie, setMovie] = useState<MoviePaginate>();

  const { getMovies } = moviesController();

  useEffect(() => {
    getMovies(10, 1).then((res) => {
      setMovie(res);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Discover Movie</title>
        <link rel="icon" href="/over_icon.svg" />
      </Head>
      <Layouts router={['discover']}>
        {movie && (
          <>
            <BannerSlider className="mt-16" movie={movie} />
            <DiscoverAllMovieSection movie={movie} />
          </>
        )}
      </Layouts>
    </div>
  );
};

export default Home;
