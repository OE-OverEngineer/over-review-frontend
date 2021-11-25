import React from 'react';

import { Button, DatePicker, Form, Input, Layout } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Content, Footer } from 'antd/lib/layout/layout';
import { useRouter } from 'next/dist/client/router';
import { ToastContainer, toast } from 'react-toastify';

import Star from 'common/assets/images/star.svg';
import Navbar from 'common/components/Layouts/Navbar';
import userController from 'common/services/Controllers/userController';
import { LoginRequset } from 'common/services/postSchemas';
import { TOKEN_KEY } from 'common/utilities/constants';
import { handleItem } from 'common/utilities/local-storage';

const RequestMovie: React.FC = () => {
  const { postAuth } = userController();
  const Router = useRouter();

  const onFinish = (values: Record<string, string>) => {
    console.log('Success:', values);
    const param: LoginRequset = {
      email: values.username,
      password: values.password,
    };

    postAuth(param)
      .then((res) => {
        handleItem(TOKEN_KEY, res.access_token);
        Router.push('/');
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
      <Star className="absolute h-full w-full z-0" />

      <Navbar />
      <Content>
        <section className="max-w-screen-2xl m-auto mt-28">
          <div className="text-center text-6xl font-poppins italic mt-10">
            Request Movie
          </div>
          <Form
            name="loginForm"
            className="max-w-2xl m-auto bg-white pt-3 pb-4 rounded-3xl mt-8"
            layout="horizontal"
            initialValues={{ remember: true }}
            wrapperCol={{ offset: 1, span: 15 }}
            labelCol={{ offset: 1, span: 5 }}
            autoComplete="off"
            onFinish={onFinish}>
            <Form.Item
              className="hidden-required mt-8"
              label="Title suggestion"
              name="title"
              rules={[{ required: true, message: 'Please input title' }]}>
              <Input className="rounded-lg" />
            </Form.Item>
            <Form.Item className="hidden-required" label="Year" name="year">
              <DatePicker picker="year" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              className="hidden-required "
              label="Description"
              name="description">
              <TextArea
                placeholder="input some description"
                className="mt-4 text-primary-default"
                showCount
                maxLength={1000}
                rows={5}
              />
            </Form.Item>
            <Form.Item className="text-center" wrapperCol={{ span: 24 }}>
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                style={{ width: '128px' }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </section>
        <ToastContainer />
      </Content>
      <Footer className="text-center">Over Review ©2021 Created by Over Engineer</Footer>
    </Layout>
  );
};

export default RequestMovie;
