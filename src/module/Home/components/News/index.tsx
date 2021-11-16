/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Avatar } from 'antd';

const News: React.FC = () => {
  return (
    <section className="news h-full">
      <div className=" max-w-screen-2xl mt-20 mb-16 mx-auto">
        <div className="flex gap-x-4">
          <div className="w-1/3">
            <div className="text-2xl mb-4"> Hall Of Fame</div>
            <div className="grid grid-cols-2 mb-4">
              <div className="text-xl">Top Reviewers</div>
              <div className="text-base text-center"> See All</div>
            </div>
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="flex items-center justify-between mb-4" key={index}>
                <div className="flex gap-x-4 text-lg items-center flex-1">
                  <Avatar src="https://joeschmoe.io/api/v1/random" size={54} />
                  Nawa Lee
                </div>
                <div className="text-base text-primary-purple2nd flex items-center justify-center flex-1">
                  <div className="border-primary-default border py-px px-4 rounded-full">
                    1000
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-2/3">
            <div className="flex flex-1 bg-primary-defaultDark w-full h-full rounded-2xl px-8 py-4">
              <div className="text-2xl mb-4">News</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
