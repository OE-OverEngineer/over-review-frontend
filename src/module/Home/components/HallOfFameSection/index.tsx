/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { Avatar } from 'antd';

import Banner2 from 'common/assets/images/banner/banner_2.png';
import OverIcon from 'common/assets/images/Over.svg';
import Svg from 'common/components/Svg';
import TextHeader from 'common/components/TextHeader';
import userController from 'common/services/Controllers/userController';
import { User } from 'common/services/reponseInterface/user.interface';

const HallOfFameSection: React.FC = () => {
  const [topReview, setTopReview] = useState<User[]>([]);
  const { getTopReview } = userController();
  useEffect(() => {
    getTopReview(5).then((res) => {
      console.log('res', res);
      setTopReview(res);
    });
  }, []);
  return (
    <section className="hall-of-fame h-full">
      <div className=" max-w-screen-2xl mt-20 mb-16 mx-auto font-poppins">
        <div className="text-5xl italic mb-16 text-center">Hall of Fame</div>
        <div className="flex gap-x-4">
          <div className="w-2/4">
            <div className="grid grid-cols-2 mb-4">
              <TextHeader>Top Reviewers</TextHeader>
            </div>
            {topReview.map((userTop, index) => (
              <div className="flex items-center justify-between mb-4" key={index}>
                <div className="flex gap-x-4 text-lg items-center flex-1">
                  <Avatar src={userTop.avatarUrl} size={54} />
                  {userTop.firstName} {userTop.lastName}
                </div>
                <div className="text-base text-primary-purple2nd flex items-center justify-center flex-1 gap-2">
                  {userTop.amountReviews}
                  <Svg Icon={<OverIcon />} />
                </div>
              </div>
            ))}
          </div>
          <div className="w-2/4 flex flex-col">
            <TextHeader className="mb-4">Top Movies</TextHeader>
            <div className="flex flex-1 bg-primary-defaultLight2nd w-full h-full rounded-2xl px-8 py-4 justify-center items-center gap-8">
              <div>
                <img src={Banner2.src} alt="movie1" className="object-cover w-44" />
              </div>
              <div>
                <img src={Banner2.src} alt="movie1" className="object-cover w-52" />
              </div>
              <div>
                <img src={Banner2.src} alt="movie1" className="object-cover w-44" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HallOfFameSection;
