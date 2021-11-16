import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Button, Input, Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import Search from 'common/assets/images/search.svg';
import Star from 'common/assets/images/star.svg';
import Test from 'common/assets/images/testtest.svg';
import Navbar from 'common/components/Navbar';

const Home: React.FC = () => {
  return (
    <Layout className="max-h-full ">
      <Star className="absolute h-full w-full z-0" />
      <Navbar />
      <Content>
        <section className="max-w-screen-2xl m-auto text-white">
          <div className=" text-center font-poppins italic mt-20 text-2xl">
            HI NAWAKARN LEE.
          </div>
          <div className="flex justify-end mt-14">
            <Input
              placeholder="search something here..."
              className="w-64 bg-transparent border-0 focus:border-0 input-transparent border-l border-white text-white font-poppins"
              prefix={<Search className=" w-8" />}
            />
          </div>
          <div className="text-center text-6xl font-poppins italic mt-10">LA LA LAND</div>
          <div>
            <Test className="mx-auto  mt-10" />
          </div>
          <div className="bg-gradient-to-b from-primary-default to-primary-purple2nd w-2 h-6 inline-block"></div>
          <span className="text-2xl ml-10 font-poppins">ACTOR</span>
        </section>
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Home;
