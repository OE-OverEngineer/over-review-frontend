import React from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';

import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Layouts/Navbar';
import Svg from 'common/components/Svg';
import authController from 'common/services/Controllers/authController';
import { LoginRequset } from 'common/services/postSchemas';
import { TOKEN_KEY } from 'common/utilities/constants';
import { handleItem } from 'common/utilities/local-storage';

const Auth: React.FC = () => {
  const { postLogin } = authController();
  const Router = useRouter();

  const onFinish = (values: Record<string, string>) => {
    const param: LoginRequset = {
      email: values.email,
      password: values.password,
    };

    postLogin(param)
      .then((res) => {
        handleItem(TOKEN_KEY, res.access_token);

        if (res.role === 'admin') {
          Router.push('/admin');
        } else {
          Router.push('/');
        }
      })
      .catch(() => {
        toast.error('Wrong email or password', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <Layout className="min-h-screen h-full font-poppins">
      <Svg Icon={<Star className="absolute h-full w-full z-0" />} />

      <Navbar />
      <Content className="z-10">
        <section className="max-w-screen-2xl m-auto mt-28">
          <Form
            name="loginForm"
            className="max-w-lg m-auto bg-white pt-3 pb-4 rounded-3xl "
            layout="vertical"
            initialValues={{ remember: true }}
            wrapperCol={{ offset: 4, span: 16 }}
            labelCol={{ offset: 4, span: 16 }}
            autoComplete="off"
            onFinish={onFinish}>
            <p className=" text-primary-default text-4xl text-center mt-4 ">Sign In</p>
            <Form.Item
              className="hidden-required"
              label="Email"
              name="email"
              rules={[
                { required: true, type: 'email', message: 'Please input valid e-mail!' },
              ]}>
              <Input
                prefix={<UserOutlined style={{ color: '#7433FF' }} />}
                className="rounded-lg"
              />
            </Form.Item>
            <Form.Item
              className="hidden-required"
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
            <div className=" text-purple-400 text-center">
              <Link href="/register">Create an account</Link>
              <span className="text-gray-400"> to join OVER review</span>
            </div>
          </Form>
        </section>
        <ToastContainer />
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default Auth;
