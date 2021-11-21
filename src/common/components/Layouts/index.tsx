import React from 'react';

import { Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import StarIcon from 'common/assets/images/star.svg';
import Navbar from 'common/components/Navbar';
import Svg from 'common/components/Svg';

const Layouts: React.FC = ({ children }) => {
  return (
    <Layout className="min-h-screen h-full">
      <Svg Icon={<StarIcon className="absolute h-full w-full z-0" />} />
      <Navbar />
      <Content>{children}</Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Layouts;
