/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { FlagFilled, SearchOutlined } from '@ant-design/icons';
import { Anchor, Input } from 'antd';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

import Layouts from 'common/components/Layouts';
import userController from 'common/services/Controllers/userController';
import { User } from 'common/services/reponseInterface/user.interface';

import ProfileCard from './components/ProfileCard';
import RecentReviewSection from './components/RecentReviewSection';
import TopReviewSection from './components/TopReivewSection';
import TopReviewCard from './components/TopReviewCard';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<User>();
  const [review, setReview] = useState<any>();

  const { getUsersProfile, getUsersIdReviews } = userController();

  const Router = useRouter();

  const { id } = Router.query;

  useEffect(() => {
    (async () => {
      try {
        // TODO: ใช้APIอีกเส้นGETIDเอา
        const res_user_profile: User = await getUsersProfile();
        console.log('res_user_profile', res_user_profile);
        setProfile(res_user_profile);
        getUsersIdReviews(id?.toString() || res_user_profile.id, 10, 1).then((res) => {
          console.log('review', res);
          setReview(res.data);
        });
      } catch (error) {
        Router.push('/login');
      }
    })();
  }, [id]);

  return (
    <div>
      <Head>
        <title>Profile Page</title>
        <link rel="icon" href="/over_icon.svg" />
      </Head>
      <Layouts>
        <div className="profile py-16">
          <div className=" max-w-screen-2xl mx-auto">
            <div className="flex itmes-center mb-8">
              <div className="flex flex-1 justify-center text-2xl">
                Say , Hello to me !
              </div>
              <div className="flex">
                <Input
                  allowClear
                  placeholder="search something here"
                  bordered={false}
                  style={{ color: '#fff' }}
                  prefix={
                    <SearchOutlined style={{ color: '#fff', marginRight: '8px' }} />
                  }
                  size="large"
                  onPressEnter={(e: any) => {
                    Router.push(`/search-movie?search=${e.target.value}`);
                  }}
                />
              </div>
            </div>
            <div className="flex gap-4">
              {profile && (
                <div className="flex-1">
                  <TopReviewSection
                    id={id?.toString() || profile.id}
                    firstName={profile.firstName}
                    review={review}
                  />
                  <RecentReviewSection
                    id={id?.toString() || profile.id}
                    firstName={profile.firstName}
                    review={review}
                  />
                </div>
              )}

              <div>
                <div className="flex items-center justify-end mb-4 cursor-pointer">
                  <FlagFilled className=" mr-2 ml-0 mx-auto" />
                  <div className="text-sm">report</div>
                </div>
                <Anchor className="overflow-hidden mt-2">
                  <ProfileCard profile={profile} />
                  <TopReviewCard />
                </Anchor>
              </div>
            </div>
          </div>
        </div>
      </Layouts>
    </div>
  );
};

export default Profile;
