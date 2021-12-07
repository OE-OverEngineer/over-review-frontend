/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';

import { Button, Form, Input, Modal, Space, Table } from 'antd';
import dayjs from 'dayjs';
import { ToastContainer } from 'react-toastify';

import moviesController from 'common/services/Controllers/moviesControllers';
import { CreateRequest } from 'common/services/postSchemas';
import { RequestMovieRespones } from 'common/services/reponseInterface/index.interface';

const RequestSection = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requestMovie, setRequestMovie] = useState<RequestMovieRespones>({
    data: [],
    total: 0,
  });

  const [form] = Form.useForm<CreateRequest>();

  const { getMovieRequest } = moviesController();

  useEffect(() => {
    getMovieRequest(10, 1).then((res: RequestMovieRespones) => {
      setRequestMovie(res);
    });
    setIsLoading(false);
  }, [isLoading]);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (text: string) => <span>{dayjs(text).year()}</span>,
    },
    {
      title: 'Action',
      key: 'action',

      render: () => (
        <Space size="middle">
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={requestMovie.data}
        bordered
        loading={isLoading}
        rowKey="id"
        title={() => (
          <div className="flex justify-between">
            <div className="text-black text-xl">Request Movie</div>
          </div>
        )}
      />
      <Modal
        title="Request Movie Form"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancle" onClick={handleCancel}>
            Cancle
          </Button>,
          <Button form="adminForm" key="submit" htmlType="submit" type="primary">
            Submit
          </Button>,
        ]}>
        <Form
          form={form}
          name="cmsForm"
          id="adminForm"
          layout="vertical"
          autoComplete="off">
          <Form.Item
            label="FirstName"
            name="firstName"
            rules={[{ required: true, message: 'Please input your FirstName!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="LastName"
            name="lastName"
            rules={[{ required: true, message: 'Please input your LastName!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default RequestSection;
