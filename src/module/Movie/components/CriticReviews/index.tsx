import React from 'react';

import { Avatar, Rate, Comment, Empty } from 'antd';
import Link from 'next/link';

import Comments from 'common/assets/images/comment.svg';
import Over from 'common/assets/images/Over.svg';
import Svg from 'common/components/Svg';
import TextHeader from 'common/components/TextHeader';

const CriticReviews: React.FC = () => {
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
        <Comment
          actions={[
            <div
              key="like"
              className="px-3 py-1 gap-1 border-2 border-primary-default text-xs rounded-md text-primary-defaultLight flex cursor-pointer"
              onClick={likeAction}
              role="presentation">
              <span>60</span>
              <Svg Icon={<Over />} />
            </div>,
            <div
              key="comment"
              className="px-3 py-1 gap-1 border-2 border-primary-default text-xs rounded-md text-primary-defaultLight flex cursor-pointer ml-2"
              onClick={likeAction}
              role="presentation">
              <span>14</span>
              <Svg Icon={<Comments />} />
            </div>,
          ]}
          author={
            <Link href="/">
              <a className="text-white">Han Solo</a>
            </Link>
          }
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={
            <div className="border border-white rounded-xl p-3">
              <Rate className="" allowHalf defaultValue={3.5} disabled />
              <p>
                We supply a series of design principles, practical patterns and high
                quality design resources (Sketch and Axure), to help people create their
                product prototypes beautifully and efficiently.
              </p>
            </div>
          }
        />
        <Comment
          actions={[
            <div
              key="like"
              className="px-3 py-1 gap-1 border-2 border-primary-default text-xs rounded-md text-primary-defaultLight flex cursor-pointer"
              onClick={likeAction}
              role="presentation">
              <span>2314</span>
              <Svg Icon={<Over />} />
            </div>,
          ]}
          author={
            <Link href="/">
              <a className="text-white">Han Solo</a>
            </Link>
          }
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={
            <div className="border border-white rounded-xl p-3">
              <Rate className="" allowHalf defaultValue={3.5} disabled />
              <p>
                We supply a series of design principles, practical patterns and high
                quality design resources (Sketch and Axure), to help people create their
                product prototypes beautifully and efficiently.
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default CriticReviews;
