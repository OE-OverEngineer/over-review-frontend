/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import BannerSlider from 'common/components/BannerSlider';
import moviesController from 'common/services/Controllers/moviesControllers';
import { Movie } from 'common/services/reponseInterface/movie.interface';

const BannerSliderSection: React.FC = () => {
  const [movie, setMovie] = useState<Movie[]>([]);

  const { getMovies } = moviesController();

  useEffect(() => {
    getMovies(10, 1).then((res) => {
      setMovie(res);
    });
  }, []);

  return (
    <section className="slider-banner py-16">
      <div className="text-center text-2xl font-poppins">
        # Your weekend buddy for this week
      </div>
      <div className="mt-16">
        <BannerSlider movie={movie} />
      </div>
    </section>
  );
};

export default BannerSliderSection;
