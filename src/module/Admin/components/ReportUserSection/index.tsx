/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';

import { Button, Form, Input, Modal, Space, Table } from 'antd';
import dayjs from 'dayjs';
import { toast, ToastContainer } from 'react-toastify';

import moviesController from 'common/services/Controllers/moviesControllers';
import reportsController from 'common/services/Controllers/reportsController';
import userController from 'common/services/Controllers/userController';
import { CreateRequest } from 'common/services/postSchemas';
import { RequestMovieRespones } from 'common/services/reponseInterface/index.interface';
import { Report } from 'common/services/reponseInterface/report.interface';
import { User } from 'common/services/reponseInterface/user.interface';

const ReportUserSection = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reportUser, setReportUser] = useState<Report[]>([]);
  const [user, setUser] = useState<User[]>([]);

  const [form] = Form.useForm<CreateRequest>();

  const { getReport } = reportsController();
  const { postBanUsers, postUnbanUsers, getUsers } = userController();

  useEffect(() => {
    getReport().then((res) => {
      setReportUser(res);
    });
    getUsers().then((res) => {
      console.log(res);
      const banuser = res.filter((item) => item.banned === true);
      setUser(banuser);
    });
    setIsLoading(false);
  }, [isLoading]);

  const columns = [
    {
      title: 'First Name',
      dataIndex: ['targetUser', 'firstName'],
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: ['targetUser', 'lastName'],
      key: 'lastName',
    },
    {
      title: 'Display Name',
      dataIndex: ['targetUser', 'displayName'],
      key: 'displayName',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Action',
      dataIndex: ['targetUser', 'id'],
      key: 'action',

      render: (id: string) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              console.log(id);
              postBanUsers(id).then((res) => {
                console.log(res);
                setIsLoading(true);
                toast.success('Banned user Successfully', {
                  position: 'bottom-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              });
            }}>
            Banned
          </Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const columnsBanUser = [
    {
      title: 'First Name',
      dataIndex: ['firstName'],
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: ['lastName'],
      key: 'lastName',
    },
    {
      title: 'Display Name',
      dataIndex: ['displayName'],
      key: 'displayName',
    },

    {
      title: 'Action',
      dataIndex: ['id'],
      key: 'action',

      render: (id: string) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              console.log(id);
              postUnbanUsers(id).then((res) => {
                console.log(res);
                setIsLoading(true);
                toast.success('Banned user Successfully', {
                  position: 'bottom-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              });
            }}>
            Unbanned
          </Button>
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

  const onFinish = (values: CreateRequest) => {
    console.log('Success:', values);
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={reportUser}
        bordered
        loading={isLoading}
        rowKey="id"
        title={() => (
          <div className="flex justify-between">
            <div className="text-black text-xl">Report User</div>
          </div>
        )}
      />
      <Table
        columns={columnsBanUser}
        dataSource={user}
        bordered
        loading={isLoading}
        rowKey="id"
        title={() => (
          <div className="flex justify-between">
            <div className="text-black text-xl">Banned User</div>
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

export default ReportUserSection;
