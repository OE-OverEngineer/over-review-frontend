/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
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
  Tag,
  Upload,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import dayjs from 'dayjs';
import { toast, ToastContainer } from 'react-toastify';

import actorsController from 'common/services/Controllers/actorsControllers';
import categoriesController from 'common/services/Controllers/categoriesControllers';
import directorsController from 'common/services/Controllers/directorsControllers';
import moviesController from 'common/services/Controllers/moviesControllers';
import { CreateMovieRequest } from 'common/services/postSchemas';
import { Actor } from 'common/services/reponseInterface/actor.interface';
import { Category } from 'common/services/reponseInterface/category.interface';
import { Director } from 'common/services/reponseInterface/director.interface';
import { Movie } from 'common/services/reponseInterface/movie.interface';

const MovieSection = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false);
  const [movie, setMovie] = useState<Movie[]>();
  const [imageUrl, setImageUrl] = useState<any>();
  const [actors, setActors] = useState<Actor[]>([]);
  const [directors, setDirectors] = useState<Director[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [form] = Form.useForm<CreateMovieRequest>();

  const { postMovies, getMovies } = moviesController();
  const { getDirectors } = directorsController();
  const { getCategories } = categoriesController();
  const { getActors } = actorsController();

  useEffect(() => {
    getMovies(10, 1).then((res: Movie[]) => {
      console.log(res);

      setMovie(res);
    });
    setIsLoading(false);
  }, [isLoading]);

  useEffect(() => {
    getDirectors().then((res: Director[]) => {
      setDirectors(res);
    });
    getCategories().then((res: Category[]) => {
      setCategories(res);
    });
    getActors().then((res: Actor[]) => {
      setActors(res);
    });
  }, []);

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
    if (info.file.status === 'uploading') {
      setIsLoadingImage(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.

      getBase64(info.file.originFileObj, (imageUrl: string | ArrayBuffer | null) => {
        setImageUrl(imageUrl);
        setIsLoadingImage(false);
      });
    }
  };

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
      title: 'Category',
      dataIndex: 'categories',
      key: 'categories',
      render: (categories: Category[]) => (
        <>
          {categories.map((category) => (
            <Tag color="default" key={category.id} className="text-black">
              {category.title}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (text: string) => dayjs(text).format('DD/MM/YYYY'),
    },
    {
      title: 'Image',
      dataIndex: 'bannerImageUrl',
      key: 'bannerImageUrl',
      render: (text: string) => <img src={text} alt="movie" width="100" />,
    },
    {
      title: 'Trailer Link Url',
      dataIndex: 'trailerLinkUrl',
      key: 'trailerLinkUrl',
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

  const onFinish = (values: CreateMovieRequest) => {
    console.log('Success:', values);
    values.bannerImage = imageUrl;

    postMovies(values)
      .then(() => {
        toast.success('Movie Added Successfully', {
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
        dataSource={movie}
        bordered
        loading={isLoading}
        rowKey="id"
        title={() => (
          <div className="flex justify-between">
            <div className="text-black text-xl">Movie</div>
            <div className="">
              <Button type="primary" onClick={showModal}>
                Add +
              </Button>
            </div>
          </div>
        )}
      />
      <Modal
        title="Movie Form"
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
          <Form.Item name="bannerImage">
            <Upload
              name="bannerImage"
              listType="picture-card"
              className="image-uploader flex justify-center"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange}>
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: '196px' }} />
              ) : (
                <div className="flex flex-col justify-center items-center">
                  {isLoadingImage ? (
                    <LoadingOutlined className="text-black" />
                  ) : (
                    <PlusOutlined className="text-black" />
                  )}
                  <div className="mt-2 text-black">Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input your Title!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input your Description!' }]}>
            <TextArea showCount autoSize={{ minRows: 3 }} />
          </Form.Item>
          <Form.Item
            label="Category"
            name="categoriesID"
            rules={[
              {
                required: true,
                message: 'Please select an category',
              },
            ]}>
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select">
              {categories.map((category: Category) => {
                return (
                  <Select.Option
                    className="text-primary-default"
                    key={category.id}
                    value={category.id}>
                    {category.title}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="Actor"
            name="actorsID"
            rules={[
              {
                required: true,
                message: 'Please select an actor',
              },
            ]}>
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select">
              {actors.map((actor: Actor) => {
                return (
                  <Select.Option
                    className="text-primary-default"
                    key={actor.id}
                    value={actor.id}>
                    {actor.firstName} {actor.lastName}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="Director"
            name="directorID"
            rules={[
              {
                required: true,
                message: 'Please select an director',
              },
            ]}>
            <Select allowClear style={{ width: '100%' }} placeholder="Please select">
              {directors.map((director: Director) => {
                return (
                  <Select.Option
                    className="text-primary-default"
                    key={director.id}
                    value={director.id}>
                    {director.firstName} {director.lastName}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="FirstName"
            name="startDate"
            rules={[
              {
                required: true,
                message: 'Please input the start date',
              },
            ]}>
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="Trailer Link Url"
            name="trailerLinkUrl"
            rules={[{ required: true, message: 'Please input your Trailer Link Url!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default MovieSection;
