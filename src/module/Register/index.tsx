/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Layout, message, Select, Upload } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';

import Bg from 'common/assets/images/register.svg';
import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Layouts/Navbar';
import Svg from 'common/components/Svg';
import authController from 'common/services/Controllers/authController';
import { CreateUserRequest } from 'common/services/postSchemas';
import { TOKEN_KEY } from 'common/utilities/constants';
import { handleItem } from 'common/utilities/local-storage';

const { Option } = Select;

const Register: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<any>();

  const Router = useRouter();

  const { postRegister } = authController();

  function getBase64(img: File, callback: (reader: string | ArrayBuffer | null) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file: File) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = (info: any) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      console.log(info);

      getBase64(info.file.originFileObj, (imageUrl: string | ArrayBuffer | null) => {
        setImageUrl(imageUrl);
      });
    }
  };

  const onFinish = (values: any) => {
    const params: CreateUserRequest = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      avatar: imageUrl,
      displayName: values.displayName,
      dateOfBirth: values.dateOfBirth,
      gender: values.gender,
    };
    console.log('Success:', params);
    postRegister(params)
      .then((res) => {
        console.log(res);
        handleItem(TOKEN_KEY, res.access_token);
        Router.push('/');
      })
      .catch((res) => {
        console.log(res);
        res.message.map((item: string) => {
          toast.error(item, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      });
  };

  return (
    <Layout className="max-h-screen  h-screen font-poppins">
      <Svg Icon={<Star className="absolute h-full w-full z-0" />} />
      <Svg Icon={<Bg className="absolute h-5/6 z-0 right-0 bottom-0" />} />

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
            onFinish={onFinish}
            wrapperCol={{ offset: 4, span: 16 }}
            labelCol={{ offset: 4, span: 16 }}
            autoComplete="off">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: 'Please input valid e-mail!',
                    },
                  ]}>
                  <Input
                    prefix={<UserOutlined style={{ color: '#7433FF' }} />}
                    className="rounded-lg"
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                    { min: 6, message: 'Password must be at least 6 characters' },
                    {
                      max: 50,
                      message: 'Password must be less than 50 characters',
                    },
                  ]}>
                  <Input.Password
                    prefix={<LockOutlined style={{ color: '#7433FF' }} />}
                    className="rounded-lg"
                  />
                </Form.Item>
                <Form.Item
                  label="Comfirm password"
                  name="conf-password"
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error('The two passwords that you entered do not match!'),
                        );
                      },
                    }),
                  ]}>
                  <Input.Password
                    prefix={<LockOutlined style={{ color: '#7433FF' }} />}
                    className="rounded-lg"
                  />
                </Form.Item>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <Form.Item name="avatar">
                  <Upload
                    name="avatar"
                    listType="picture"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                    onChange={handleChange}>
                    {imageUrl ? (
                      <div className="text-center">
                        <div className="w-44 h-44 rounded-full  border-2 border-primary-default">
                          <img
                            src={imageUrl}
                            alt="avatar"
                            className="rounded-full h-full w-full object-cover"
                          />
                        </div>
                        <Button
                          className="text-primary-default border-primary-default mt-3"
                          shape="round">
                          upload
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="w-44 h-44 rounded-full  border-2 border-primary-default"></div>
                        <Button
                          className="text-primary-default border-primary-default mt-3"
                          shape="round">
                          upload
                        </Button>
                      </div>
                    )}
                  </Upload>
                </Form.Item>
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
                    { min: 4, message: 'Display name must be at least 4 characters' },
                  ]}>
                  <Input className="rounded-lg" />
                </Form.Item>
                <Form.Item
                  label="Date of birth"
                  name="dateOfBirth"
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
                  <Select className="text-primary-default" placeholder="Select gender">
                    <Option value="Male" className="text-primary-default">
                      Male
                    </Option>
                    <Option value="Female " className="text-primary-default">
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
            <span className="gap-x-2 flex w-full text-gray-400 justify-center">
              Already have an account?
              <Link href="/login">Sign in</Link>
            </span>
          </Form>
          <ToastContainer />
        </section>
      </Content>
      <Footer className="text-center text-blue-900 z-10">
        Over Review ©2021 Created by Over Engineer
      </Footer>
    </Layout>
  );
};

export default Register;
