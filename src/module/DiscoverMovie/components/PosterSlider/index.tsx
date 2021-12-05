/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import dayjs from 'dayjs';
import { useRouter } from 'next/dist/client/router';
import Slider from 'react-slick';

import Arrow from 'common/assets/images/arrow.svg';
import { MoviePaginate } from 'common/services/reponseInterface/movie.interface';

const NextArrow = (props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} pr-16 z-10 h-full w-60 flex items-center bg-gradient-to-l from-black bg-opacity-30 justify-end right-0`}
      style={{ ...style }}
      onClick={onClick}
      role="presentation">
      <Arrow className="overflow-visible" />
    </div>
  );
};

const PrevArrow = (props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} pl-16 z-10 h-full w-60 flex items-center bg-gradient-to-r from-black bg-opacity-30 `}
      style={{ ...style }}
      onClick={onClick}
      role="presentation">
      <Arrow className=" transform rotate-180 overflow-visible" />
    </div>
  );
};

const PosterSlider: React.FC<{ movie: MoviePaginate }> = ({ movie }) => {
  const Router = useRouter();
  return (
    <div className="slider-banner mb-16">
      <Slider
        className="slider"
        slidesToShow={1}
        slidesToScroll={1}
        variableWidth
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}>
        {movie.data.map((item) => (
          <div
            className="w-52 h-72 cursor-pointer"
            key={item.id}
            role="presentation"
            onClick={() => {
              Router.push(`/movie/${item.id}`);
            }}>
            <div className="absolute w-48 h-72 bg-gradient-to-b from-transparent via-transparent to-black mx-2 rounded-xl flex flex-col justify-end bg-opacity-0 opacity-0 p-2 transition duration-300 ease-in-out hover:bg-opacity-20 hover:opacity-100">
              <div className="text-sm">{dayjs(item.startDate).year()}</div>
              <div className="text-base w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                {item.title}
              </div>
            </div>
            <img
              src={item.bannerImageUrl}
              alt="banner3"
              className="w-48 h-full brightness-100 m-auto rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PosterSlider;
