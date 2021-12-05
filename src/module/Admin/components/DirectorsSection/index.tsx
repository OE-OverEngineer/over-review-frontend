/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';

import { Button, Form, Input, Modal, Space, Table } from 'antd';
import { toast, ToastContainer } from 'react-toastify';

import directorsController from 'common/services/Controllers/directorsControllers';
import { CreateDirectorRequest } from 'common/services/postSchemas';
import { Director } from 'common/services/reponseInterface/director.interface';

const DirectorsSection = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [director, setDirector] = useState<Director[]>();

  const [form] = Form.useForm<CreateDirectorRequest>();

  const { postDirectors, getDirectors } = directorsController();

  useEffect(() => {
    getDirectors().then((res: Director[]) => {
      setDirector(res);
    });
    setIsLoading(false);
  }, [isLoading]);

  const columns = [
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastName',
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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const onFinish = (values: CreateDirectorRequest) => {
    console.log('Success:', values);

    postDirectors(values)
      .then(() => {
        toast.success('Director Added Successfully', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        form.resetFields();
        setIsLoading(true);
      })
      .catch((err) => {
        err.message.forEach((error: string) =>
          toast.error(error, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }),
        );
      });
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={director}
        bordered
        loading={isLoading}
        rowKey="id"
        title={() => (
          <div className="flex justify-between">
            <div className="text-black text-xl">Director</div>
            <div className="">
              <Button type="primary" onClick={showModal}>
                Add +
              </Button>
            </div>
          </div>
        )}
      />
      <Modal
        title="Director Form"
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
          autoComplete="off"
          onFinish={onFinish}>
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

export default DirectorsSection;
