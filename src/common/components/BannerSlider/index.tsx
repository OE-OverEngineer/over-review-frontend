/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { Button, Rate } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/dist/client/router';
import Slider from 'react-slick';

import Arrow from 'common/assets/images/arrow.svg';
import Intersperse from 'common/hooks/Intersperse';
import { MoviePaginate } from 'common/services/reponseInterface/movie.interface';

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

interface BannerSliderProps {
  movie: MoviePaginate;
  className?: string;
}

const BannerSlider: React.FC<BannerSliderProps> = ({ className, movie }) => {
  const [banner, setBanner] = useState<any>();
  const [subBanner, setSubBanner] = useState<any>();
  const [movieBanner, setMovieBanner] = useState<MoviePaginate>();

  const Router = useRouter();

  useEffect(() => {
    setMovieBanner(movie);
    if (subBanner) {
      subBanner.slickNext();
    }
  }, [movie, movieBanner, Router]);

  return (
    <>
      {movieBanner && (
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
            {movieBanner.data.map((item, index) => (
              <div
                className="max-w-5xl flex z-10 justify-center m-auto font-poppins"
                key={`${item.title}-items-${index}`}>
                <img
                  src={item.bannerImageUrl}
                  alt="banner1"
                  className=" w-96 h-full relative -mr-2 rounded-3xl"
                />
                <div className="max-w-xl w-full bg-white my-8 rounded-r-2xl py-8 px-12">
                  <div className="text-2xl text-black mb-2">{item.title}</div>
                  <hr className=" border-gray-500" />
                  <div className="grid grid-cols-2 gap-y-8 my-4">
                    <div className="block">
                      <div className="text-gray-600 text-sm">Release date</div>
                      <div className="text-gray-600 text-sm">
                        {dayjs(item.startDate).format(`MMMM DD,YYYY`)}
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-gray-600 text-sm">Genre</div>
                      <div className="text-gray-800 text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {Intersperse(item.categories, ', ').map(
                          (tag: any, index: any) => (
                            <span key={index}>{tag}</span>
                          ),
                        )}
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-gray-600 text-sm">Directed by</div>
                      <div className="text-gray-800 text-sm">{`${item.director.firstName} ${item.director.lastName}`}</div>
                    </div>
                    <div className="block">
                      <div className="text-gray-600 text-sm">Synopsis</div>
                      <div className="text-gray-800 text-sm line-clamp-4 overflow-hidden h-20">
                        {item.description}
                      </div>
                    </div>
                    <div className="block h-24">
                      <div className="text-gray-600 text-sm">Starring</div>
                      {item.actors.map((actor: any, index: any) => {
                        if (index < 3) {
                          return (
                            <div
                              key={`${actor.firstname}-${index}`}
                              className="text-gray-800 text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
                              {`${actor.firstName} ${actor.lastName}`}
                            </div>
                          );
                        } else {
                          return null;
                        }
                      })}
                      {item.actors.length > 3 && (
                        <div className="text-gray-400 text-sm">
                          {`+ ${item.actors.length - 3} more`}
                        </div>
                      )}
                    </div>
                    <div className="block">
                      <Button type="default" shape="round" size="large">
                        See more
                      </Button>
                    </div>
                  </div>
                  <hr className=" border-gray-500" />
                  <div className="flex justify-around mt-4 mx-4">
                    <div className="block text-center">
                      <div className="text-gray-600 text-2xl">{item.score}/10</div>
                      <div className="text-gray-600 text-xs">Ratings by OverUser</div>
                    </div>

                    <div className="block text-center">
                      <div className="text-gray-600 text-2xl">
                        <Rate disabled defaultValue={item.score} />
                      </div>
                      <div className="text-gray-600 text-xs">From OverUsers</div>
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
            {movieBanner.data.map((item, index) => (
              <div key={`${item.title}-sub-${index}`} className="h-104 w-80">
                <img
                  src={item.bannerImageUrl}
                  alt="banner1"
                  className=" h-full object-cover rounded-2xl filter brightness-50 m-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default BannerSlider;
