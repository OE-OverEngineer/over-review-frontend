import React, { useEffect, useState } from 'react';

import { Avatar, Rate, Comment } from 'antd';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import Comments from 'common/assets/images/comment.svg';
import Over from 'common/assets/images/Over.svg';
import Svg from 'common/components/Svg';
import TextHeader from 'common/components/TextHeader';
import moviesController from 'common/services/Controllers/moviesControllers';
import { Movie } from 'common/services/reponseInterface/movie.interface';
import { Review } from 'common/services/reponseInterface/review.interface';

const CriticReviews: React.FC = () => {
  const [movie, setMovie] = useState<Movie>();
  const [review, setReview] = useState<Review[]>();

  const Router = useRouter();
  const { id } = Router.query;

  const { getMoviesId, getMoviesIdReviews } = moviesController();

  useEffect(() => {
    if (typeof id === 'string') {
      getMoviesId(id).then((res: Movie) => {
        console.log(res);
        setMovie(res);
      });
      getMoviesIdReviews(id, 10, 1).then((res: any) => {
        console.log('id', res);
        setReview(res);
      });
    }
  }, [id]);

  const likeAction = () => {
    console.log('like');
  };
  return (
    <section className="critic-review max-w-screen-lg m-auto">
      <TextHeader className="my-8">CRITIC REVIEWS</TextHeader>

      {/* <div className="border-2 border-primary-default rounded-2xl mx-auto flex flex-col p-4">
        <Empty description={<span>No comments yet. Be the first to comment.</span>} />
      </div> */}

      <div className="border-2 border-primary-default rounded-2xl mx-auto flex flex-col p-4">
        <div className="relative text-right top-8 text-primary-defaultLight">
          Top review
        </div>
        {review && review.length > 0 && (
          <Comment
            actions={[
              <div
                key="like"
                className="px-3 py-1 gap-1 border-2 border-primary-default text-xs rounded-md text-primary-defaultLight flex cursor-pointer"
                onClick={likeAction}
                role="presentation">
                <span>{review[0].likesCount}</span>
                <Svg Icon={<Over />} />
              </div>,
              <div
                key="comment"
                className="px-3 py-1 gap-1 border-2 border-primary-default text-xs rounded-md text-primary-defaultLight flex cursor-pointer ml-2"
                onClick={likeAction}
                role="presentation">
                <span>{review[0].comments.length}</span>
                <Svg Icon={<Comments />} />
              </div>,
            ]}
            author={
              <Link href="/">
                <a className="text-white">
                  {review[0].user.firstName} {review[0].user.lastName}
                </a>
              </Link>
            }
            avatar={<Avatar src={review[0].user.avatarUrl} alt="avatarImg" />}
            content={
              <div className="border border-white rounded-xl p-3">
                <Rate
                  className=""
                  allowHalf
                  defaultValue={review[0].score / 2}
                  disabled
                />
                <p>{review[0].message}</p>
              </div>
            }
          />
        )}
        {review &&
          review.length > 0 &&
          review.map((item: Review) => {
            if (item.id !== review[0].id) {
              return (
                <Comment
                  key={item.id}
                  actions={[
                    <div
                      key="like"
                      className="px-3 py-1 gap-1 border-2 border-primary-default text-xs rounded-md text-primary-defaultLight flex cursor-pointer"
                      onClick={likeAction}
                      role="presentation">
                      <span>{item.likesCount}</span>
                      <Svg Icon={<Over />} />
                    </div>,
                    <div
                      key="comment"
                      className="px-3 py-1 gap-1 border-2 border-primary-default text-xs rounded-md text-primary-defaultLight flex cursor-pointer ml-2"
                      onClick={likeAction}
                      role="presentation">
                      <span>{item.comments.length}</span>
                      <Svg Icon={<Comments />} />
                    </div>,
                  ]}
                  author={
                    <Link href={`/profile/${item.user.id}`}>
                      <a className="text-white">
                        {item.user.firstName} {item.user.lastName}
                      </a>
                    </Link>
                  }
                  avatar={<Avatar src={item.user.avatarUrl} alt="imgUrl" />}
                  content={
                    <div className="border border-white rounded-xl p-3">
                      <Rate
                        className=""
                        allowHalf
                        defaultValue={item.score / 2}
                        disabled
                      />
                      <p>{item.message}</p>
                    </div>
                  }
                />
              );
            }
          })}
      </div>
    </section>
  );
};

export default CriticReviews;
