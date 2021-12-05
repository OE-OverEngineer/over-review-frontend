import React from 'react';

import { Avatar, Rate, Button, Comment } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/dist/client/router';

import TextHeader from 'common/components/TextHeader';
import Intersperse from 'common/hooks/Intersperse';
import { Actor } from 'common/services/reponseInterface/actor.interface';
import { ProfileReview } from 'common/services/reponseInterface/review.interface';

const ReviewCard: React.FC<{
  review: ProfileReview;
}> = ({ review }) => {
  const Router = useRouter();
  return (
    <div className="w-full h-full rounded-2xl bg-primary-defaultDark opacity-90 p-4 mb-4">
      <div className="flex justify-between gap-2">
        <img
          src={review.movie.bannerImageUrl}
          alt="banner"
          className="object-cover w-52 h-full rounded-2xl"
        />
        <div className="block">
          <div className="flex gap-2 items-baseline mb-2">
            <div className="text-xl italic">{review.movie.title}</div>
            <div className="text-lg italic">({dayjs(review.movie.startDate).year()})</div>
          </div>
          <div className="flex flex-1 gap-2">
            <div className="flex-1">
              <div className="w-full h-48 bg-primary-purpleDark2nd rounded-2xl px-4 py-2 mb-2">
                <div className="text-lg text-primary-defaultLight">Synopsis</div>
                <div className="text-sm">{review.movie.description}</div>
              </div>
              <div className="w-full h-16 bg-primary-purpleDark2nd rounded-2xl px-4 py-2">
                <div className="block text-center">
                  <div className="text-2xl">
                    <Rate disabled defaultValue={review.movie.score} />
                  </div>
                  <div className=" text-xs">From over Nawa-lee</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full h-48 bg-primary-purpleDark2nd rounded-2xl px-4 py-2 mb-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-lg text-primary-defaultLight">Release date</div>
                    <div className="text-sm">
                      {dayjs(review.movie.startDate).format('MMMM DD, YYYY')}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg text-primary-defaultLight">Directed by</div>
                    <div className="text-sm">
                      {review.movie.director.firstName} {review.movie.director.lastName}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg text-primary-defaultLight">Genre</div>
                    <div className="text-sm">
                      {Intersperse(review.movie.categories, ', ').map(
                        (tag: string, index: number) => (
                          <span key={index}>{tag}</span>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg text-primary-defaultLight">Starring</div>
                    {review.movie.actors.map((actor: Actor, index: number) => {
                      if (index < 3) {
                        return (
                          <div
                            key={`${actor.firstName}-${index}`}
                            className="text-white text-sm">
                            {`${actor.firstName} ${actor.lastName}`}
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                    {review.movie.actors.length > 3 && (
                      <div className="text-gray-400 text-sm">
                        {`+ ${review.movie.actors.length - 3} more`}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full h-16 px-4 py-2 flex items-center justify-center">
                <Button
                  className="px-6 py-0 order-5 mr-6 font-poppins w-48"
                  type="primary"
                  size="large"
                  shape="round"
                  onClick={() => {
                    Router.push(`/movie/${review.movie.id}`);
                  }}>
                  See more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review my-4">
        <TextHeader className="mb-2">Review</TextHeader>
        <div className="w-full h-auto bg-primary-defaultLight2nd rounded-2xl px-8 py-4">
          <div className="text-sm">{review.message}</div>
        </div>
      </div>
      {review.comments.length > 0 && (
        <div className="comment">
          <TextHeader className="mb-2">Comment</TextHeader>
          <div className="w-full h-auto bg-primary-defaultLight2nd rounded-2xl px-16 py-4">
            <Comment
              actions={[
                <span className="text-white" key="comment-nested-reply-to">
                  Reply to
                </span>,
              ]}
              author={<a className="text-white">Han Solo</a>}
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
              content={
                <p>
                  We supply a series of design principles, practical patterns and high
                  quality design resources (Sketch and Axure).
                </p>
              }>
              <Comment
                actions={[
                  <span className="text-white" key="comment-nested-reply-to">
                    Reply to
                  </span>,
                ]}
                author={<a className="text-white">Han Solo</a>}
                avatar={
                  <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
                }
                content={
                  <p>
                    We supply a series of design principles, practical patterns and high
                    quality design resources (Sketch and Axure).
                  </p>
                }></Comment>
              <Comment
                actions={[
                  <span className="text-white" key="comment-nested-reply-to">
                    Reply to
                  </span>,
                ]}
                author={<a className="text-white">Han Solo</a>}
                avatar={
                  <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
                }
                content={
                  <p>
                    We supply a series of design principles, practical patterns and high
                    quality design resources (Sketch and Axure).
                  </p>
                }></Comment>
            </Comment>
            <Comment
              actions={[
                <span className="text-white" key="comment-nested-reply-to">
                  Reply to
                </span>,
              ]}
              author={<a className="text-white">Han Solo</a>}
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
              content={
                <p>
                  We supply a series of design principles, practical patterns and high
                  quality design resources (Sketch and Axure).
                </p>
              }></Comment>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
