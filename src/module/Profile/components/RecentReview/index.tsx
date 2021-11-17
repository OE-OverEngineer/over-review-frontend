import React from 'react';

import { Avatar, Rate, Button, Comment } from 'antd';

import Banner3 from 'common/assets/images/banner/banner_3.png';
import TextHeader from 'common/components/TextHeader';

const RecentReview: React.FC = () => {
  return (
    <section className="recent-review">
      <TextHeader className="mb-2">Recent Nawa-lee’s Reviews</TextHeader>
      <div className="w-full h-full rounded-2xl bg-primary-defaultDark p-4 mb-4">
        <div className="flex justify-between gap-2">
          <img
            src={Banner3.src}
            alt="banner"
            className="object-cover w-52 h-full rounded-2xl"
          />
          <div className="block">
            <div className="flex gap-2 items-baseline mb-2">
              <div className="text-xl italic">Moon Light</div>
              <div className="text-lg italic">(2021)</div>
            </div>
            <div className="flex flex-1 gap-2">
              <div className="flex-1">
                <div className="w-full h-48 bg-primary-purpleDark2nd rounded-2xl px-4 py-2 mb-2">
                  <div className="text-lg text-primary-defaultLight">Synopsis</div>
                  <div className="text-sm">
                    Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by
                    their common desire to do what they love. But as success mounts they
                    are faced with decisions that begin to fray the fragile fabric of
                    their love affair.
                  </div>
                </div>
                <div className="w-full h-16 bg-primary-purpleDark2nd rounded-2xl px-4 py-2">
                  <div className="block text-center">
                    <div className="text-2xl">
                      <Rate disabled defaultValue={4} />
                    </div>
                    <div className=" text-xs">From over users</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="w-full h-48 bg-primary-purpleDark2nd rounded-2xl px-4 py-2 mb-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-lg text-primary-defaultLight">
                        Release date
                      </div>
                      <div className="text-sm">June 17,2016</div>
                    </div>
                    <div>
                      <div className="text-lg text-primary-defaultLight">Directed by</div>
                      <div className="text-sm">Steven Spielberg</div>
                    </div>
                    <div>
                      <div className="text-lg text-primary-defaultLight">Genre</div>
                      <div className="text-sm">Fantasy,Fiction</div>
                    </div>
                    <div>
                      <div className="text-lg text-primary-defaultLight">Starring</div>
                      <div className="text-sm">Natasha Romanoff</div>
                      <div className="text-sm">Ruby Barnhlll</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-16 px-4 py-2 flex items-center justify-center">
                  <Button
                    className="px-6 py-0 order-5 mr-6 font-poppins w-48"
                    type="primary"
                    size="large"
                    shape="round">
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
            <div className="text-sm">
              A powerful reminder how something as seemingly lowbrow and disposable as
              horror cinema can be a surprisingly successful vehicle to address broader
              social issues that have very real relevance.
            </div>
          </div>
        </div>
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
      </div>
    </section>
  );
};

export default RecentReview;
