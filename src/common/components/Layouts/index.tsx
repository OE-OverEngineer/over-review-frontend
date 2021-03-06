import React from 'react';

import { Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import StarIcon from 'common/assets/images/star.svg';
import Navbar from 'common/components/Layouts/Navbar';
import Svg from 'common/components/Svg';

const Layouts: React.FC<{ router?: string[] }> = ({ children, router }) => {
  return (
    <Layout className="min-h-screen h-full">
      <Svg Icon={<StarIcon className="absolute h-full w-full z-0" />} />
      <Navbar router={router} />
      <Content className="z-10">{children}</Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Layouts;
