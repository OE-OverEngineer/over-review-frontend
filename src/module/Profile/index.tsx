/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { FlagFilled, SearchOutlined } from '@ant-design/icons';
import { Anchor, Button, Input, Modal, Form } from 'antd';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { toast } from 'react-toastify';

import Layouts from 'common/components/Layouts';
import reportsController from 'common/services/Controllers/reportsController';
import userController from 'common/services/Controllers/userController';
import { CreateReportRequest } from 'common/services/postSchemas';
import { Review } from 'common/services/reponseInterface/review.interface';
import { User } from 'common/services/reponseInterface/user.interface';

import ProfileCard from './components/ProfileCard';
import RecentReviewSection from './components/RecentReviewSection';
import TopReviewSection from './components/TopReivewSection';

const Profile: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<User>();
  const [review, setReview] = useState<Review[]>([]);
  const [topReview, setTopReview] = useState<Review[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const { getUserId, getUsersProfile, getUsersIdReviews } = userController();
  const { postReport } = reportsController();
  const [form] = Form.useForm();

  const Router = useRouter();

  const { id } = Router.query;

  useEffect(() => {
    (async () => {
      if (id) {
        const res_user_profile: User = await getUserId(id?.toString());

        setProfile(res_user_profile);
        getUsersIdReviews(id?.toString() || res_user_profile.id, 10, 1).then((res) => {
          setReview(res.data);
        });
        getUsersIdReviews(id?.toString() || res_user_profile.id, 1, 1, 'likeCount').then(
          (res) => {
            setTopReview(res.data);
          },
        );
      } else {
        const res_user_profile: User = await getUsersProfile();

        setProfile(res_user_profile);
        getUsersIdReviews(id?.toString() || res_user_profile.id, 10, 1).then((res) => {
          setReview(res.data);
        });
        getUsersIdReviews(id?.toString() || res_user_profile.id, 1, 1, 'likeCount').then(
          (res) => {
            setTopReview(res.data);
          },
        );
      }
      setIsLoading(false);
    })();
  }, [id, isLoading]);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

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
                Say , Hello to {profile?.displayName} !
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
                    displayName={profile.displayName}
                    review={topReview}
                    loading={isLoading}
                    setLoading={setIsLoading}
                  />
                  <RecentReviewSection
                    displayName={profile.displayName}
                    review={review}
                    loading={isLoading}
                    setLoading={setIsLoading}
                  />
                </div>
              )}

              <div>
                <div
                  className="flex items-center justify-end mb-4 cursor-pointer"
                  role="presentation"
                  onClick={() => {
                    setIsModalVisible(true);
                  }}>
                  <FlagFilled className=" mr-2 ml-0 mx-auto" />
                  <div className="text-sm">report</div>
                </div>
                <Anchor className="overflow-hidden mt-2">
                  <ProfileCard profile={profile} />
                  {/* <TopReviewCard /> */}
                </Anchor>
              </div>
            </div>
          </div>
        </div>
        <Modal
          title="Report user"
          visible={isModalVisible}
          onOk={handleOk}
          footer
          onCancel={handleCancel}>
          <Form
            form={form}
            onFinish={(data) => {
              const params: CreateReportRequest = {
                targetUserID: profile?.id,
                message: data.message,
              };
              postReport(params).then(() => {
                form.resetFields();
                setIsModalVisible(false);
                toast.success('Report user Successfully', {
                  position: 'bottom-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              });
            }}>
            <Form.Item
              name="message"
              rules={[{ required: true, message: 'Please input your message!' }]}>
              <Input.TextArea rows={4} />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Modal>
      </Layouts>
    </div>
  );
};

export default Profile;
