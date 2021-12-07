/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';

import { Button, Form, Input, message, Modal, Space, Table, Upload } from 'antd';
import { toast, ToastContainer } from 'react-toastify';

import actorsController from 'common/services/Controllers/actorsControllers';
import { CreateActorRequest } from 'common/services/postSchemas';
import { Actor } from 'common/services/reponseInterface/actor.interface';

const ActorsSection = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [actor, setActor] = useState<Actor[]>();
  const [imageUrl, setImageUrl] = useState<any>();

  const [form] = Form.useForm<CreateActorRequest>();

  const { postActors, getActors } = actorsController();

  useEffect(() => {
    getActors().then((res: Actor[]) => {
      setActor(res);
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
      title: 'Image',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (text: string) => <img src={text} alt="actor" width="100" />,
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

  const onFinish = (values: CreateActorRequest) => {
    values.image = imageUrl;

    postActors(values)
      .then(() => {
        toast.success('Actor Added Successfully', {
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
        dataSource={actor}
        bordered
        loading={isLoading}
        rowKey="id"
        title={() => (
          <div className="flex justify-between">
            <div className="text-black text-xl">Actor</div>
            <div className="">
              <Button type="primary" onClick={showModal}>
                Add +
              </Button>
            </div>
          </div>
        )}
      />
      <Modal
        title="Actor Form"
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

export default ActorsSection;
