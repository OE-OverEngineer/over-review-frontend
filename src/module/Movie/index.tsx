import React from 'react';

import { Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Navbar';

const Home: React.FC = () => {
  return (
    <Layout className="max-h-screen  h-screen">
      <Star className="absolute h-full w-full z-0" />
      <Navbar />
      <Content>
        <section className="slider-banner max-w-screen-2xl mx-auto">
          <div></div>
        </section>
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Home;
