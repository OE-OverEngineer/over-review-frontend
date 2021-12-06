import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Avatar, Rate, Comment, Empty } from 'antd';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import Comments from 'common/assets/images/comment.svg';
import Over from 'common/assets/images/Over.svg';
import Svg from 'common/components/Svg';
import TextHeader from 'common/components/TextHeader';
import moviesController from 'common/services/Controllers/moviesControllers';
import reviewsController from 'common/services/Controllers/reviewsControllers';
import { CreateReviewLikeRequest } from 'common/services/postSchemas';
import { Movie } from 'common/services/reponseInterface/movie.interface';
import { Review } from 'common/services/reponseInterface/review.interface';

const CriticReviews: React.FC<{
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  userid?: string | number;
}> = ({ loading, setLoading, userid }) => {
  const [movie, setMovie] = useState<Movie>();
  const [review, setReview] = useState<Review[]>();
  const [topReview, setTopReview] = useState<Review[]>();

  const Router = useRouter();
  const { id } = Router.query;

  const { getMoviesId, getMoviesIdReviews } = moviesController();
  const { postReviewLike } = reviewsController();

  useEffect(() => {
    if (typeof id === 'string') {
      getMoviesId(id).then((res: Movie) => {
        setMovie(res);
      });
      getMoviesIdReviews(id, 10, 1, 'recent').then((res) => {
        console.log('getMoviesIdReviews', res);
        setReview(res.data);
        setLoading(false);
      });
      getMoviesIdReviews(id, 1, 1, 'likesCount').then((res) => {
        console.log('getMoviesTopReviews', res);
        setTopReview(res.data);
        setLoading(false);
      });
    }
  }, [id, loading]);

  const likeAction = (id: number) => {
    console.log('like');
    const params: CreateReviewLikeRequest = {
      targetReviewID: id,
      isLike: true,
    };

    postReviewLike(params).then((res) => {
      setLoading(true);
      console.log(postReviewLike, res);
    });
  };

  return (
    <section className="critic-review max-w-screen-lg m-auto">
      <TextHeader className="my-8">CRITIC REVIEWS</TextHeader>

      <div className="border-2 border-primary-default rounded-2xl mx-auto flex flex-col p-4">
        {topReview && review && review.length > 0 && (
          <>
            <div className="relative text-right top-8 text-primary-defaultLight">
              Top review
            </div>
            <Comment
              actions={[
                <div
                  key="like"
                  className="px-3 py-1 gap-1 border-2 border-primary-default text-xs rounded-md text-primary-defaultLight flex cursor-pointer"
                  onClick={() => {
                    if (topReview[0].id) {
                      likeAction(topReview[0].id);
                    }
                  }}
                  role="presentation">
                  <span>{topReview[0].likesCount && topReview[0].likesCount}</span>
                  <Svg Icon={<Over />} />
                </div>,
                <div
                  key="comment"
                  className="px-3 py-1 gap-1 border-2 border-primary-default text-xs rounded-md text-primary-defaultLight flex cursor-pointer ml-2"
                  onClick={() => {
                    if (topReview[0].id) {
                      Router.push(`/profile/${topReview[0].user.id}`);
                    }
                  }}
                  role="presentation">
                  <span>{topReview[0].comments.length}</span>
                  <Svg Icon={<Comments />} />
                </div>,
              ]}
              author={
                <Link href="/">
                  <a className="text-white">
                    {topReview[0].user.firstName} {topReview[0].user.lastName}
                  </a>
                </Link>
              }
              avatar={<Avatar src={topReview[0].user.avatarUrl} alt="avatarImg" />}
              content={
                <div className="border border-white rounded-xl p-3">
                  <Rate
                    className=""
                    allowHalf
                    defaultValue={topReview[0].score / 2}
                    disabled
                  />
                  <p>{topReview[0].message}</p>
                </div>
              }
            />
          </>
        )}
        {topReview &&
          review &&
          review.length > 0 &&
          review.map((item: Review) => {
            if (item.id !== topReview[0].id) {
              return (
                <Comment
                  key={item.id}
                  actions={[
                    <div
                      key="like"
                      className="px-3 py-1 gap-1 border-2 border-primary-default text-xs rounded-md text-primary-defaultLight flex cursor-pointer"
                      onClick={() => {
                        if (item.id) {
                          likeAction(item.id);
                        }
                      }}
                      role="presentation">
                      <span>{item.likesCount && item.likesCount}</span>
                      <Svg Icon={<Over />} />
                    </div>,
                    <div
                      key="comment"
                      className="px-3 py-1 gap-1 border-2 border-primary-default text-xs rounded-md text-primary-defaultLight flex cursor-pointer ml-2"
                      onClick={() => {
                        if (item.id) {
                          Router.push(`/profile/${item.user.id}`);
                        }
                      }}
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
        {review && review.length === 0 && (
          <Empty
            image={Empty.PRESENTED_IMAGE_DEFAULT}
            className="my-4"
            description={<span>There hasn&apos;t been any review yet.</span>}
          />
        )}
      </div>
    </section>
  );
};

export default CriticReviews;
