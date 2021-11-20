/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import { Button, Rate } from 'antd';
import Slider from 'react-slick';

import Arrow from 'common/assets/images/arrow.svg';
import Banner1 from 'common/assets/images/banner/banner_1.png';
import Banner2 from 'common/assets/images/banner/banner_2.png';
import Banner3 from 'common/assets/images/banner/banner_3.png';
import Banner4 from 'common/assets/images/banner/banner_4.png';
import Banner5 from 'common/assets/images/banner/banner_5.png';
import Banner from 'common/assets/images/banner_poster.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} mr-16 block`}
      style={{ ...style }}
      onClick={onClick}
      role="presentation">
      <Arrow />
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
      className={`${className} ml-16 block z-10`}
      style={{ ...style }}
      onClick={onClick}
      role="presentation">
      <Arrow className=" transform rotate-180" />
    </div>
  );
};

const BannerSlider: React.FC = () => {
  const [banner, setBanner] = useState<any>();
  const [subBanner, setSubBanner] = useState<any>();

  return (
    <section className="slider-banner">
      <div className="">
        <Slider
          className="slider z-10"
          asNavFor={banner}
          ref={(slider) => setSubBanner(slider)}
          slidesToShow={1}
          slidesToScroll={1}
          fade
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                className="max-w-5xl flex  justify-center m-auto font-poppins mt-72"
                key={`slider-items-${index}`}></div>
            ))}
        </Slider>
        <Slider
          className="slider sub-banner2 relative z-0 "
          asNavFor={subBanner}
          ref={(slider) => setBanner(slider)}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          variableWidth>
          <div className="w-52 flex gap-16">
            <img
              src={Banner1.src}
              alt="banner1"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>

          <div className="w-52">
            <img
              src={Banner2.src}
              alt="banner2"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner3.src}
              alt="banner3"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner4.src}
              alt="banner4"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner5.src}
              alt="banner5"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner5.src}
              alt="banner5"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52 flex gap-16">
            <img
              src={Banner1.src}
              alt="banner1"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner2.src}
              alt="banner2"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner3.src}
              alt="banner3"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner4.src}
              alt="banner4"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner5.src}
              alt="banner5"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner5.src}
              alt="banner5"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52 flex gap-16">
            <img
              src={Banner1.src}
              alt="banner1"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner2.src}
              alt="banner2"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner3.src}
              alt="banner3"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner4.src}
              alt="banner4"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner5.src}
              alt="banner5"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
          <div className="w-52">
            <img
              src={Banner5.src}
              alt="banner5"
              width="90%"
              style={{ margin: 'auto', filter: 'brightness(1)' }}
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default BannerSlider;
