/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Modal,
  Select,
  Space,
  Table,
  Upload,
} from 'antd';
import { toast, ToastContainer } from 'react-toastify';

import userController from 'common/services/Controllers/userController';
import { CreateAdminUserRequest } from 'common/services/postSchemas';
import { User } from 'common/services/reponseInterface/user.interface';

const UserSection = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User[]>();
  const [imageUrl, setImageUrl] = useState<any>();

  const [form] = Form.useForm<CreateAdminUserRequest>();

  const { getUsers, postUsers } = userController();

  useEffect(() => {
    getUsers().then((res: User[]) => {
      setUser(res);
    });
    setIsLoading(false);
  }, [isLoading]);

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

      getBase64(info.file.originFileObj, (imageUrl: string | ArrayBuffer | null) => {
        setImageUrl(imageUrl);
      });
    }
  };

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
      title: 'Display Name',
      dataIndex: 'displayName',
      key: 'displayName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Image',
      dataIndex: 'avatarUrl',
      key: 'avatarUrl',
      render: (text: string) => <img src={text} alt="user" width="100" />,
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

  const onFinish = (values: CreateAdminUserRequest) => {
    const params: CreateAdminUserRequest = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      avatarUrl: imageUrl,
      displayName: values.displayName,
      dateOfBirth: values.dateOfBirth,
      gender: values.gender,
      role: 0,
    };

    postUsers(params)
      .then(() => {
        toast.success('User Added Successfully', {
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
        dataSource={user}
        bordered
        loading={isLoading}
        rowKey="id"
        title={() => (
          <div className="flex justify-between">
            <div className="text-black text-xl">User</div>
            <div className="">
              <Button type="primary" onClick={showModal}>
                Add +
              </Button>
            </div>
          </div>
        )}
      />
      <Modal
        title="User Form"
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
          <Form.Item name="image">
            <Upload
              name="image"
              listType="picture"
              className="image-uploader flex justify-center"
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
            label="Firstname"
            name="firstName"
            rules={[{ required: true, message: 'Please input your firstname' }]}>
            <Input className="rounded-lg" />
          </Form.Item>
          <Form.Item
            label="Lastname"
            name="lastName"
            rules={[{ required: true, message: 'Please input your lastname' }]}>
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
            label="Gender"
            name="gender"
            rules={[{ required: true, message: 'Please select!' }]}>
            <Select className="text-primary-default" placeholder="Select gender">
              <Select.Option value="Male" className="text-primary-default">
                Male
              </Select.Option>
              <Select.Option value="Female " className="text-primary-default">
                Female
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Date of birth"
            name="dateOfBirth"
            rules={[{ required: true, message: 'Please select your birthdate!' }]}>
            <DatePicker className="" />
          </Form.Item>
        </Form>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default UserSection;
