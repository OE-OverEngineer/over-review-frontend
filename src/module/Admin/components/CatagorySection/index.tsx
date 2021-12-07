/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';

import { Button, Form, Input, Modal, Space, Table } from 'antd';
import { toast, ToastContainer } from 'react-toastify';

import categoriesController from 'common/services/Controllers/categoriesControllers';
import { CreateCategoryRequest } from 'common/services/postSchemas';
import { Category } from 'common/services/reponseInterface/category.interface';

const CatagorySection = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<Category[]>();

  const [form] = Form.useForm<CreateCategoryRequest>();

  const { postCategories, getCategories } = categoriesController();

  useEffect(() => {
    getCategories().then((res) => {
      setCategory(res);
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

  const onFinish = (values: CreateCategoryRequest) => {
    postCategories(values)
      .then(() => {
        toast.success('Catagory Added Successfully', {
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
        dataSource={category}
        bordered
        loading={isLoading}
        rowKey="id"
        title={() => (
          <div className="flex justify-between">
            <div className="text-black text-xl">Category</div>
            <div>
              <Button type="primary" onClick={showModal}>
                Add +
              </Button>
            </div>
          </div>
        )}
      />
      <Modal
        title="Category Form"
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
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: 'Please input your title!',
              },
            ]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default CatagorySection;
