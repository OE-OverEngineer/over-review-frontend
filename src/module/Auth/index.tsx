import React from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Navbar';

const Auth: React.FC = () => {
  return (
    <Layout className="max-h-screen  h-screen">
      <Star className="absolute h-full w-full z-0" />

      <Navbar />
      <Content>
        <section className="max-w-screen-2xl m-auto mt-28">
          <p className=" text-3xl text-center"> </p>
          <Form
            name="loginForm"
            className="max-w-lg m-auto bg-white pt-3 pb-4 rounded-3xl "
            layout="vertical"
            initialValues={{ remember: true }}
            wrapperCol={{ offset: 4, span: 16 }}
            labelCol={{ offset: 4, span: 16 }}
            autoComplete="off">
            <p className=" text-primary-default text-4xl text-center mt-4 ">Sign In</p>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input
                prefix={<UserOutlined style={{ color: '#7433FF' }} />}
                className="rounded-lg"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password
                prefix={<LockOutlined style={{ color: '#7433FF' }} />}
                className="rounded-lg"
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox className="text-primary-default">Remember me</Checkbox>
            </Form.Item>
            <Form.Item className="text-center">
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                style={{ width: '128px' }}>
                Login
              </Button>
            </Form.Item>
            <p className=" text-purple-400 text-center">
              Create an account<span className="text-gray-400"> to join OVER review</span>
            </p>
          </Form>
        </section>
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Auth;
