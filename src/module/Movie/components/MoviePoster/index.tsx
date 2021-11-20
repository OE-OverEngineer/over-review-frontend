import React from 'react';

import { Button, Rate } from 'antd';

import Banner from 'common/assets/images/banner_poster.png';

const MoviePoster: React.FC = () => {
  return (
    <section className="slider-banner py-16">
      <div className="">
        <div className="max-w-5xl flex z-10 justify-center m-auto font-poppins">
          <img src={Banner.src} alt="banner1" className=" w-96 relative -mr-2" />
          <div className="max-w-xl w-full bg-white my-8 rounded-r-2xl py-8 px-12">
            <div className="text-2xl text-black mb-2">Moon Light</div>
            <hr className=" border-gray-500" />
            <div className="grid grid-cols-2 gap-y-8 my-4">
              <div className="block">
                <div className="text-gray-600 text-sm">Release date</div>
                <div className="text-gray-600 text-sm">June 17,2016</div>
              </div>
              <div className="block">
                <div className="text-gray-600 text-sm">Genre</div>
                <div className="text-gray-800 text-sm">Fantasy,Fiction</div>
              </div>
              <div className="block">
                <div className="text-gray-600 text-sm">Directed by</div>
                <div className="text-gray-800 text-sm">Steven Spielberg</div>
              </div>
              <div className="block">
                <div className="text-gray-600 text-sm">Synopsis</div>
                <div className="text-gray-800 text-sm">
                  Natasha Romanoff, aka Black Widow, confronts the darker parts of her
                  ledger when a dangerous conspiracy with ties to her past arises. Pursued
                  by a force that will ....
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
            <div className="flex justify-between mt-2 mx-4">
              <div className="block text-center">
                <div className="text-gray-600 text-2xl">8/10</div>
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
      </div>
    </section>
  );
};

export default MoviePoster;
