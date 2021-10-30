import React from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

import Logo from 'common/assets/images/logoNav.svg';
import Star from 'common/assets/images/star.svg';

const NAV_CONTENT = [
  { key: '1', title: 'Home' },
  { key: '2', title: 'About' },
  { key: '3', title: 'News' },
  { key: '4', title: 'Discover' },
  { key: '5', title: 'Community' },
];

const Auth: React.FC = () => {
  return (
    <Layout className="max-h-screen  h-screen">
      <Star className="absolute h-full w-full z-0" />
      <Header className="flex items-center justify-between">
        <Logo />

        <Menu
          className="max-w-4xl items-center"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}>
          {NAV_CONTENT.map(({ key, title }) => (
            <Menu.Item className="px-10 py-0" key={key}>
              {title}
            </Menu.Item>
          ))}
          <Button className="px-10 py-0 order-5 mr-6" type="primary" shape="round">
            Login or Register
          </Button>
        </Menu>
      </Header>
      <Content>
        <section className="max-w-screen-2xl m-auto mt-16">
          <p className=" text-3xl text-center"># Welcome to Over review </p>
          <Form
            name="loginForm"
            className="max-w-lg m-auto bg-white pt-8 pb-4 rounded-2xl "
            layout="vertical"
            initialValues={{ remember: true }}
            wrapperCol={{ offset: 4, span: 16 }}
            labelCol={{ offset: 4, span: 16 }}
            autoComplete="off">
            <p className=" text-primary-default text-4xl text-center">Over review</p>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input prefix={<UserOutlined style={{ color: '#7433FF' }} />} />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password prefix={<LockOutlined style={{ color: '#7433FF' }} />} />
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
          </Form>
        </section>
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Auth;
