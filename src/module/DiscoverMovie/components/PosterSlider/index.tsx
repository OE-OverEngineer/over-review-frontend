/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import Slider from 'react-slick';

import Arrow from 'common/assets/images/arrow.svg';
import Banner1 from 'common/assets/images/banner/banner_1.png';
import Banner2 from 'common/assets/images/banner/banner_2.png';
import Banner3 from 'common/assets/images/banner/banner_3.png';
import Banner4 from 'common/assets/images/banner/banner_4.png';
import Banner5 from 'common/assets/images/banner/banner_5.png';

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

const PosterSlider: React.FC = () => {
  return (
    <div className="slider-banner mb-16">
      <Slider
        className="slider"
        slidesToShow={1}
        slidesToScroll={1}
        variableWidth
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}>
        <div className="w-52 h-72">
          <img
            src={Banner1.src}
            alt="banner1"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner2.src}
            alt="banner2"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner3.src}
            alt="banner3"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner4.src}
            alt="banner4"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner5.src}
            alt="banner5"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner5.src}
            alt="banner5"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner1.src}
            alt="banner1"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner2.src}
            alt="banner2"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner3.src}
            alt="banner3"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner4.src}
            alt="banner4"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner5.src}
            alt="banner5"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner5.src}
            alt="banner5"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner1.src}
            alt="banner1"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner2.src}
            alt="banner2"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner3.src}
            alt="banner3"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner4.src}
            alt="banner4"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner5.src}
            alt="banner5"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
        <div className="w-52 h-72">
          <img
            src={Banner5.src}
            alt="banner5"
            className="w-48 h-full brightness-100 m-auto"
          />
        </div>
      </Slider>
    </div>
  );
};

export default PosterSlider;
