import React from 'react';

import { Button, Rate } from 'antd';
import dayjs from 'dayjs';

import Intersperse from 'common/hooks/Intersperse';
import { Actor } from 'common/services/reponseInterface/actor.interface';
import { Movie } from 'common/services/reponseInterface/movie.interface';

const MoviePoster: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <section className="slider-banner py-16">
      <div className="max-w-5xl flex z-10 justify-center m-auto font-poppins">
        <img
          src={movie.bannerImageUrl}
          alt="banner1"
          className=" w-96 h-full relative -mr-2 rounded-3xl"
        />
        <div className="max-w-xl w-full bg-white my-8 rounded-r-2xl py-8 px-12">
          <div className="text-2xl text-black mb-2">{movie.title}</div>
          <hr className=" border-gray-500" />

          <div className="block mt-4">
            <div className="text-gray-600 text-sm">Synopsis</div>
            <div className="text-gray-800 text-sm line-clamp-5 overflow-hidden h-20">
              {movie.description}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-6 my-4">
            <div className="block">
              <div className="text-gray-600 text-sm">Release date</div>
              <div className="text-gray-600 text-sm">
                {dayjs(movie.startDate).format(`MMMM DD,YYYY`)}
              </div>
            </div>
            <div className="block">
              <div className="text-gray-600 text-sm">Genre</div>
              <div className="text-gray-800 text-sm h-10">
                {Intersperse(movie.categories, ', ').map((tag: string, index: number) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="block">
              <div className="text-gray-600 text-sm">Directed by</div>
              <div className="text-gray-800 text-sm">{`${movie.director.firstName} ${movie.director.lastName}`}</div>
            </div>

            <div className="block h-24">
              <div className="text-gray-600 text-sm">Starring</div>
              {movie.actors.map((actor: Actor, index: number) => {
                if (index < 3) {
                  return (
                    <div
                      key={`${actor.firstName}-${index}`}
                      className="text-gray-800 text-sm">
                      {`${actor.firstName} ${actor.lastName}`}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
              {movie.actors.length > 3 && (
                <div className="text-gray-400 text-sm">
                  {`+ ${movie.actors.length - 3} more`}
                </div>
              )}
            </div>
          </div>
          <hr className=" border-gray-500" />
          <div className="flex justify-around mt-4 mx-4">
            <div className="block text-center">
              <div className="text-gray-600 text-2xl">{movie.score}/10</div>
              <div className="text-gray-600 text-xs">Ratings by OverUser</div>
            </div>

            <div className="block text-center">
              <div className="text-gray-600 text-2xl">
                <Rate disabled defaultValue={movie.score && movie.score / 2} allowHalf />
              </div>
              <div className="text-gray-600 text-xs">From OverUsers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl flex z-10 m-auto justify-center mt-8">
        <Button
          className=" w-56"
          type="primary"
          shape="round"
          size="large"
          onClick={() => {
            window.open(movie.trailerLinkUrl, '_blank');
          }}>
          Watch Trailer
        </Button>
      </div>
    </section>
  );
};

export default MoviePoster;
