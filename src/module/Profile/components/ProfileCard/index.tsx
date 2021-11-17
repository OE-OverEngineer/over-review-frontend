import React from 'react';

import { EditFilled, GiftFilled, WomanOutlined } from '@ant-design/icons';
import { Avatar, Divider } from 'antd';

const ProfileCard: React.FC = () => {
  return (
    <section className="profile">
      <div className="max-w-xs h-full rounded-2xl bg-primary-defaultDark p-4 mb-4">
        <div className="flex justify-center mb-4">
          <Avatar
            className="border-2 border-primary-default"
            src="https://joeschmoe.io/api/v1/random"
            size={136}
          />
        </div>
        <div className="text-lg text-center">Nawakarn Leerattanachote</div>
        <Divider className="my-2 border-t-px border-primary-default" />
        <div className="flex items-center mb-2 mt-4">
          <GiftFilled className=" mr-2 ml-0 mx-auto" />
          <div className="text-sm">12 march 2001</div>
        </div>
        <div className="flex items-center mb-2">
          <WomanOutlined className=" mr-2 ml-0 mx-auto" />
          <div className="text-sm">female</div>
        </div>
        <div className="flex items-center mb-2">
          <EditFilled className=" mr-2 ml-0 mx-auto" />
          <div className="text-sm">describe</div>
        </div>
        <div className="w-full h-auto bg-primary-purpleDark2nd rounded-2xl px-4 py-2">
          Hi im Nawa Lee. I like to watching movie and talk about movie with my friend.
          nice to meet you all.
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
