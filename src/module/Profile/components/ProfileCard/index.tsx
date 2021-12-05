import React, { useEffect, useState } from 'react';

import { GiftFilled, WomanOutlined } from '@ant-design/icons';
import { Avatar, Divider, Skeleton } from 'antd';
import dayjs from 'dayjs';

import { User } from 'common/services/reponseInterface/user.interface';

interface ProfileCardProps {
  profile?: User;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (profile) {
      console.log(profile);

      setLoading(false);
    }
  }, [profile]);

  return (
    <section className="profile">
      <Skeleton loading={loading} avatar active>
        <div className="max-w-xs h-full rounded-2xl bg-primary-defaultDark opacity-90 p-4 mb-4">
          <div className="flex justify-center mb-4">
            <Avatar
              className="border-2 border-primary-default"
              src={profile?.avatarUrl}
              size={136}
            />
          </div>
          <div className="text-lg text-center">{`${profile?.firstName} ${profile?.lastName}`}</div>
          <Divider className="my-2 border-t-px border-primary-default" />
          <div className="flex items-center mb-2 mt-4">
            <GiftFilled className=" mr-2 ml-0 mx-auto" />
            <div className="text-sm">
              {dayjs(profile?.dateOfBirth).format('DD MMMM YYYY')}
            </div>
          </div>
          <div className="flex items-center mb-2">
            <WomanOutlined className=" mr-2 ml-0 mx-auto" />
            <div className="text-sm">{profile?.gender}</div>
          </div>
          {/* <div className="flex items-center mb-2">
            <EditFilled className=" mr-2 ml-0 mx-auto" />
            <div className="text-sm">describe</div>
          </div>
          <div className="w-full h-auto bg-primary-purpleDark2nd rounded-2xl px-4 py-2"></div> */}
        </div>
      </Skeleton>
    </section>
  );
};

export default ProfileCard;
