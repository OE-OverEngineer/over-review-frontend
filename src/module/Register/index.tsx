import React from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Layout, Select } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

import Bg from 'common/assets/images/register.svg';
import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Layouts/Navbar';

const { Option } = Select;

const Register: React.FC = () => {
  return (
    <Layout className="max-h-screen  h-screen font-poppins">
      <Star className="absolute h-full w-full z-0" />
      <Bg className="absolute h-5/6 z-0 right-0 bottom-0" />

      <Navbar />
      <Content className="flex justify-between z-10">
        <div className="w-full">
          <p
            className="  text-center mt-64 text-transparent bg-clip-text  bg-gradient-to-r from-primary-default  to-primary-purple2nd"
            style={{ fontSize: '5rem', lineHeight: '5rem' }}>
            Create Account
            <br />
            <span className="" style={{ fontSize: '4rem' }}>
              สร้างบัญชี Over
            </span>
          </p>
        </div>
        <section className="max-w-screen-2xl m-auto w-full">
          <p className="text-3xl text-center from-primary-default"> </p>
          <Form
            name="loginForm"
            className="max-w-2xl m-auto pt-3 pb-4 mt-48"
            layout="vertical"
            initialValues={{ remember: true }}
            wrapperCol={{ offset: 4, span: 16 }}
            labelCol={{ offset: 4, span: 16 }}
            autoComplete="off">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <Form.Item
                  label="E-mail"
                  name="username"
                  rules={[{ required: true, message: 'Please input your e-mail!' }]}>
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
                <Form.Item
                  label="Comfirm password"
                  name="password"
                  rules={[{ required: true, message: 'Please comfirm your password!' }]}>
                  <Input.Password
                    prefix={<LockOutlined style={{ color: '#7433FF' }} />}
                    className="rounded-lg"
                  />
                </Form.Item>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <div className="w-44 h-44 rounded-full  border-2 border-primary-default"></div>
                <Button
                  className="text-primary-default border-primary-default mt-3"
                  shape="round">
                  upload
                </Button>
              </div>
              <div className="col-span-1 text-black">
                <Form.Item
                  label="Firstname"
                  name="firstName"
                  rules={[{ required: true, message: 'Please input your firstname' }]}>
                  <Input className="rounded-lg" />
                </Form.Item>
                <Form.Item
                  label="Display name"
                  name="displayName"
                  rules={[
                    { required: true, message: 'Please input your display name!' },
                  ]}>
                  <Input className="rounded-lg" />
                </Form.Item>
                <Form.Item
                  label="Date"
                  name="displayName"
                  rules={[{ required: true, message: 'Please select your birthdate!' }]}>
                  <DatePicker className="" />
                </Form.Item>
              </div>
              <div className="col-span-1 text-black">
                <Form.Item
                  label="Lastname"
                  name="lastName"
                  rules={[{ required: true, message: 'Please input your lastname' }]}>
                  <Input className="rounded-lg" />
                </Form.Item>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[{ required: true, message: 'Please select!' }]}>
                  <Select className="text-primary-default">
                    <Option value="male" className="text-primary-default">
                      Male
                    </Option>
                    <Option value="female " className="text-primary-default">
                      Female
                    </Option>
                  </Select>
                </Form.Item>
              </div>
            </div>

            <Form.Item className="text-center">
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                style={{ width: '128px' }}>
                Login
              </Button>
            </Form.Item>
            <span className="col-span-2 w-full block text-gray-400 text-center">
              Already have an account?
              <span className="text-purple-400"> Sign in</span>
            </span>
          </Form>
        </section>
      </Content>
      <Footer className="text-center text-blue-900 z-10">
        Over Review ©2021 Created by Over Engineer
      </Footer>
    </Layout>
  );
};

export default Register;
