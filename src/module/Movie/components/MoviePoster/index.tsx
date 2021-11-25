import React from 'react';

import { Button, Rate } from 'antd';
import dayjs from 'dayjs';

import Banner from 'common/assets/images/banner_poster.png';
import Intersperse from 'common/hooks/Intersperse';

const MoviePoster: React.FC = () => {
  return (
    <section className="slider-banner py-16">
      <div className="max-w-5xl flex z-10 justify-center m-auto font-poppins">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png"
          alt="banner1"
          className=" w-96 h-full relative -mr-2 rounded-3xl"
        />
        <div className="max-w-xl w-full bg-white my-4 rounded-r-2xl py-8 px-12">
          <div className="text-2xl text-black mb-2">La la land</div>
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
                {Intersperse(
                  [
                    {
                      id: 1,
                      title: 'Drama',
                    },
                    {
                      id: 1,
                      title: 'Fantasy',
                    },
                  ],
                  ', ',
                ).map((tag: any, index: any) => (
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
                ledger when a dangerous conspiracy with ties to her past arises. Pursued
                by a force that will
              </div>
            </div>
            <div className="block h-24">
              <div className="text-gray-600 text-sm">Starring</div>
              <div className="text-gray-800 text-sm">Natasha Romanoff</div>
              <div className="text-gray-800 text-sm">Ruby Barnhlll</div>
              <div className="text-gray-400 text-sm">{`+ 3more`}</div>
              {/* {item.actors.map((actor: any, index: any) => {
                if (index < 3) {
                  return (
                    <div
                      key={`${actor.firstname}-${index}`}
                      className="text-gray-800 text-sm">
                      {`${actor.firstName} ${actor.lastName}`}
                    </div>
                  );
                } else {
                  return null;
                }
              })} */}
              {/* {item.actors.length > 3 && (
                <div className="text-gray-400 text-sm">
                  {`+ ${item.actors.length - 3} more`}
                </div>
              )} */}
            </div>
            <div className="block">
              <Button type="default" shape="round" size="large">
                See more
              </Button>
            </div>
          </div>
          <hr className=" border-gray-500" />
          <div className="flex justify-around mt-8 mx-4">
            <div className="block text-center">
              <div className="text-gray-600 text-2xl">8.2/10</div>
              <div className="text-gray-600 text-xs">Ratings by OverUser</div>
            </div>

            <div className="block text-center">
              <div className="text-gray-600 text-2xl">
                <Rate disabled defaultValue={4} />
              </div>
              <div className="text-gray-600 text-xs">From OverUsers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviePoster;
