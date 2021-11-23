import React from 'react';

import { Rate } from 'antd';

import Over from 'common/assets/images/Over.svg';
import Mini from 'common/assets/images/profilemini.png';
import Svg from 'common/components/Svg';
import TextHeader from 'common/components/TextHeader';

const CriticReviews = () => {
  return (
    <>
      <TextHeader className="mt-8 ml-80">CRITIC REVIEWS</TextHeader>

      <div className="border-2 border-primary-default w-3/5 mx-auto rounded-3xl flex flex-col gap-y-4 p-4 mt-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="grid grid-cols-12" key={index}>
            {index === 0 && (
              <div className="col-span-11 flex justify-end">
                <span className="text-primary-defaultLight italic">TOP review</span>
              </div>
            )}
            <div className="border border-white col-span-11 rounded-xl p-3 font-poppins">
              <Rate className="" allowHalf defaultValue={3.5} disabled />
              <br />A powerful reminder how something as seemingly lowbrow and disposable
              as horror cinema can be a surprisingly successful vehicle to address.
            </div>
            <div className="col-span-1">
              <img src={Mini.src} alt="profile" className="w-9/12 mx-auto" />
            </div>
            <button className=" px-4 py-1 gap-2 border-2 border-primary-default font-poppins text-xs italic rounded-md w-20 mt-4 text-primary-defaultLight flex">
              <span>2314</span> <Svg Icon={<Over />} className="inline-block" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CriticReviews;
