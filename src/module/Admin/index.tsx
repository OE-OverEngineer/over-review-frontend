import React, { useEffect, useState } from 'react';

import { DesktopOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import userController from 'common/services/Controllers/userController';

import ActorsSection from './components/ActorsSection';
import CatagorySection from './components/CatagorySection';
import DirectorsSection from './components/DirectorsSection';
import MovieSection from './components/MovieSection';
import ReportUserSection from './components/ReportUserSection';
import RequestSection from './components/RequestSection';
import UserSection from './components/UserSection';

const Admin = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [tab, setTab] = useState<string>('catagories');

  const Router = useRouter();
  const { tabs } = Router.query;

  const { getUsersProfile } = userController();

  useEffect(() => {
    if (tabs) {
      setTab(tabs.toString());
    }
  }, [tabs]);

  useEffect(() => {
    getUsersProfile().then((res) => {
      if (res.role.title !== 'admin') {
        Router.push('/');
      }
    });
  }, []);

  const SectionTabs = () => {
    switch (tabs) {
      case 'actors':
        return <ActorsSection />;
      case 'directors':
        return <DirectorsSection />;
      case 'catagories':
        return <CatagorySection />;
      case 'movie':
        return <MovieSection />;
      case 'request-movie':
        return <RequestSection />;
      case 'user':
        return <UserSection />;
      case 'report-user':
        return <ReportUserSection />;

      default:
        return <CatagorySection />;
    }
  };

  return (
    <Layout className="min-h-screen h-full">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => {
          setCollapsed(!collapsed);
        }}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[tab]} mode="inline">
          <Menu.Item key="catagories" icon={<DesktopOutlined />}>
            <Link href="/admin/catagories">Category</Link>
          </Menu.Item>
          <Menu.Item key="directors" icon={<DesktopOutlined />}>
            <Link href="/admin/directors">Directors</Link>
          </Menu.Item>
          <Menu.Item key="actors" icon={<DesktopOutlined />}>
            <Link href="/admin/actors">Actors</Link>
          </Menu.Item>
          <Menu.Item key="movie" icon={<DesktopOutlined />}>
            <Link href="/admin/movie">Movie</Link>
          </Menu.Item>
          <Menu.Item key="request-movie" icon={<DesktopOutlined />}>
            <Link href="/admin/request-movie">Request Movie</Link>
          </Menu.Item>
          <Menu.Item key="user" icon={<DesktopOutlined />}>
            <Link href="/admin/user">User</Link>
          </Menu.Item>
          <Menu.Item key="report-user" icon={<DesktopOutlined />}>
            <Link href="/admin/report-user">Report User</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content className="py-4 ">
          <div className="site-layout-background p-6 min-h-full bg-white mx-4">
            {SectionTabs()}
          </div>
        </Content>

        <Footer className="text-center">
          Over Review ©2021 Created by Over Engineer
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
