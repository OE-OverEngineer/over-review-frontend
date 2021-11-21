import React from 'react';

import { FlagFilled, SearchOutlined } from '@ant-design/icons';
import { Anchor, Input, Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Navbar';

import ProfileCard from './components/ProfileCard';
import RecentReview from './components/RecentReview';
import TopReview from './components/TopReivew';
import TopReviewCard from './components/TopReviewCard';

const Profile: React.FC = () => {
  return (
    <Layout className=" min-h-screen h-full">
      <Star className="absolute h-full w-full z-0" />
      <Navbar />
      <Content className="z-10">
        <div className="profile py-16">
          <div className=" max-w-screen-2xl mx-auto">
            <div className="flex itmes-center mb-8">
              <div className="flex flex-1 justify-center text-2xl">
                Say , Hello to me !
              </div>
              <div className="flex">
                <Input
                  allowClear
                  placeholder="search something here ..."
                  bordered={false}
                  style={{ color: '#fff' }}
                  prefix={
                    <SearchOutlined style={{ color: '#fff', marginRight: '8px' }} />
                  }
                  size="large"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <TopReview />

                <RecentReview />
              </div>
              <div>
                <div className="flex items-center justify-end mb-4 cursor-pointer">
                  <FlagFilled className=" mr-2 ml-0 mx-auto" />
                  <div className="text-sm">report</div>
                </div>
                <Anchor className="overflow-hidden mt-2">
                  <ProfileCard />
                  <TopReviewCard />
                </Anchor>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Profile;
