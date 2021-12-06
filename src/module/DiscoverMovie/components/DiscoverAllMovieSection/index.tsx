import React, { useEffect, useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useRouter } from 'next/dist/client/router';

import TextHeader from 'common/components/TextHeader';
import categoriesController from 'common/services/Controllers/categoriesControllers';
import moviesController from 'common/services/Controllers/moviesControllers';
import { MoviePaginate } from 'common/services/reponseInterface/movie.interface';

import PosterSlider from '../PosterSlider';

const DiscoverAllMovieSection: React.FC = () => {
  const [popularMovie, setPopularMovie] = useState<MoviePaginate>({
    data: [],
    total: 0,
  });
  const [recentMovie, setRecentMovie] = useState<MoviePaginate>({
    data: [],
    total: 0,
  });
  const [actionMovie, setActionMovie] = useState<MoviePaginate>({
    data: [],
    total: 0,
  });
  const [romanticMovie, setRomanticMovie] = useState<MoviePaginate>({
    data: [],
    total: 0,
  });
  const [crimeMovie, setCrimeMovie] = useState<MoviePaginate>({
    data: [],
    total: 0,
  });
  const Router = useRouter();

  const { getMovies } = moviesController();
  const { getCategories } = categoriesController();

  useEffect(() => {
    getCategories().then((res) => {
      console.log(res);
    });
    Promise.all([
      getMovies(10, 1, 'popular'),
      getMovies(10, 1, 'recent'),
      getMovies(10, 1, 'popular', 7),
      getMovies(10, 1, 'popular', 11),
      getMovies(10, 1, 'popular', 15),
    ]).then(([popular, recent, action, romantic, crime]) => {
      console.log(popular, recent, action, romantic, crime);
      setPopularMovie(popular);
      setRecentMovie(recent);
      setActionMovie(action);
      setRomanticMovie(romantic);
      setCrimeMovie(crime);
    });
  }, []);
  return (
    <section className="discover-all-movie mt-32">
      <div className="flex justify-between max-w-screen-2xl mx-auto mb-8">
        <div className="text-2xl ">Discover Movies</div>
        <Input
          allowClear
          placeholder="search something here"
          bordered={false}
          className="text-white w-72"
          prefix={<SearchOutlined className="text-white mr-2" />}
          size="large"
          onPressEnter={(e: any) => {
            Router.push(`/search-movie?search=${e.target.value}`);
          }}
        />
      </div>
      <TextHeader className="max-w-screen-2xl mx-auto mb-8">Trending Now</TextHeader>
      <PosterSlider movie={popularMovie} />
      <TextHeader className="max-w-screen-2xl mx-auto mb-8">Last Release</TextHeader>
      <PosterSlider movie={recentMovie} />
      <TextHeader className="max-w-screen-2xl mx-auto mb-8">Action</TextHeader>
      <PosterSlider movie={actionMovie} />
      <TextHeader className="max-w-screen-2xl mx-auto mb-8">Romantic</TextHeader>
      <PosterSlider movie={romanticMovie} />
      <TextHeader className="max-w-screen-2xl mx-auto mb-8">Crime</TextHeader>
      <PosterSlider movie={crimeMovie} />
    </section>
  );
};

export default DiscoverAllMovieSection;
