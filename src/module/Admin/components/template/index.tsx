/* eslint-disable react/display-name */
import React, { useState } from 'react';

import { Button, Form, Input, Modal, Space, Table } from 'antd';

const ActorSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },

    {
      title: 'Action',
      key: 'action',

      render: () => (
        <Space size="middle">
          <Button
            onClick={() => {
              showModal();
            }}>
            Edit
          </Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => (
          <div className="flex justify-between">
            <div className="text-black text-xl">Category</div>
            <div className="">
              <Button type="primary">Add +</Button>
            </div>
          </div>
        )}
      />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancle">Cancle</Button>,
          <Button form="myForm" key="submit" htmlType="submit" type="primary">
            Submit
          </Button>,
        ]}>
        <Form
          name="loginForm"
          id="myForm"
          className=""
          layout="vertical"
          autoComplete="off">
          <Form.Item
            className=""
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            className=""
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ActorSection;
