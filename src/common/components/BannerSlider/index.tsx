/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import { Button, Rate } from 'antd';
import dayjs from 'dayjs';
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

const BannerSlider: React.FC<{ className?: string }> = ({ className }) => {
  const [banner, setBanner] = useState<any>();
  const [subBanner, setSubBanner] = useState<any>();

  function intersperse(arr: any, sep: any) {
    if (arr.length === 0) {
      return [];
    }

    return arr.slice(1).reduce(
      function (xs: any, x: any) {
        return xs.concat([sep, x]);
      },
      [arr[0]],
    );
  }

  const tags = intersperse([`Fantasy`, `Fiction`], ', ');

  return (
    <div className={className}>
      <Slider
        className="slider z-10"
        asNavFor={banner}
        ref={(slider) => setSubBanner(slider)}
        infinite
        slidesToShow={1}
        slidesToScroll={1}
        fade
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div
              className="max-w-5xl flex z-10 justify-center m-auto font-poppins"
              key={`slider-items-${index}`}>
              <img
                src={Banner.src}
                alt="banner1"
                className=" w-96 h-full relative -mr-2"
              />
              <div className="max-w-xl w-full bg-white my-4 rounded-r-2xl py-8 px-12">
                <div className="text-2xl text-black mb-2">Moon Light</div>
                <hr className=" border-gray-500" />
                <div className="grid grid-cols-2 gap-y-8 my-4">
                  <div className="block">
                    <div className="text-gray-600 text-sm">Release date</div>
                    <div className="text-gray-600 text-sm">
                      {dayjs().format(`MMMM DD,YYYY`)}
                    </div>
                  </div>
                  <div className="block">
                    <div className="text-gray-600 text-sm">Genre</div>
                    <div className="text-gray-800 text-sm">
                      {tags.map((tag: any, index: any) => (
                        <span key={index} className="">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="block">
                    <div className="text-gray-600 text-sm">Directed by</div>
                    <div className="text-gray-800 text-sm">Steven Spielberg</div>
                  </div>
                  <div className="block">
                    <div className="text-gray-600 text-sm">Synopsis</div>
                    <div className="text-gray-800 text-sm line-clamp-5 overflow-hidden">
                      Natasha Romanoff, aka Black Widow, confronts the darker parts of her
                      ledger when a dangerous conspiracy with ties to her past arises.
                      Pursued by a force that will
                    </div>
                  </div>
                  <div className="block">
                    <div className="text-gray-600 text-sm">Starring</div>
                    <div className="text-gray-800 text-sm">Natasha Romanoff</div>
                    <div className="text-gray-800 text-sm">Ruby Barnhlll</div>
                    <div className="text-gray-400 text-sm">+3 see more</div>
                  </div>
                  <div className="block">
                    <Button type="default" shape="round" size="large">
                      See more
                    </Button>
                  </div>
                </div>
                <hr className=" border-gray-500" />
                <div className="flex justify-between mt-8 mx-4">
                  <div className="block text-center">
                    <div className="text-gray-600 text-2xl">8.2/10</div>
                    <div className="text-gray-600 text-xs">Ratings by IMDb</div>
                  </div>
                  <div className="block text-center">
                    <div className="text-gray-600 text-2xl">84%</div>
                    <div className="text-gray-600 text-xs">MetaCritic</div>
                  </div>
                  <div className="block text-center">
                    <div className="text-gray-600 text-2xl">
                      <Rate disabled defaultValue={4} />
                    </div>
                    <div className="text-gray-600 text-xs">From over users</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
      <Slider
        className="slider sub-banner relative z-0"
        asNavFor={subBanner}
        ref={(slider) => setBanner(slider)}
        infinite
        centerMode
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        variableWidth>
        <div>
          <img
            src={Banner1.src}
            alt="banner1"
            width="94%"
            style={{ margin: 'auto', filter: 'brightness(0.5)' }}
          />
        </div>
        <div>
          <img
            src={Banner2.src}
            alt="banner2"
            width="94%"
            style={{ margin: 'auto', filter: 'brightness(0.5)' }}
          />
        </div>
        <div>
          <img
            src={Banner3.src}
            alt="banner3"
            width="94%"
            style={{ margin: 'auto', filter: 'brightness(0.5)' }}
          />
        </div>
        <div>
          <img
            src={Banner4.src}
            alt="banner4"
            width="94%"
            style={{ margin: 'auto', filter: 'brightness(0.5)' }}
          />
        </div>
        <div>
          <img
            src={Banner5.src}
            alt="banner5"
            width="94%"
            style={{ margin: 'auto', filter: 'brightness(0.5)' }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
