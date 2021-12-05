import React, { useEffect } from 'react';

import { Rate, Button } from 'antd';
import { useRouter } from 'next/dist/client/router';

import Banner3 from 'common/assets/images/banner/banner_3.png';
import TextHeader from 'common/components/TextHeader';
import userController from 'common/services/Controllers/userController';

const TopReviewSection: React.FC<{ id: number }> = ({ id }) => {
  const { getUsersIdReviews } = userController();

  const Router = useRouter();

  useEffect(() => {
    getUsersIdReviews(id, 10, 1, 'recent').then((res) => {
      console.log(res);
    });
  }, [id]);

  return (
    <section className="top-review">
      <TextHeader className="mb-2">Nawa-lee’s Top Reviews</TextHeader>
      <div className="w-full h-full rounded-2xl bg-primary-defaultDark opacity-90 p-4 mb-4">
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
                <div className="w-full h-48 bg-primary-purpleDark2nd  rounded-2xl px-4 py-2 mb-2">
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
                    shape="round"
                    onClick={() => {
                      Router.push(`/movie/${'id'}`);
                    }}>
                    See more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopReviewSection;
