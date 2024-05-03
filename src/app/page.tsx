"use client"
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MenuAndReserv from './pages/reserv_and_menu';
import { Provider } from "react-redux";
import { stores } from '@/store';

const { Header, Content, Footer } = Layout;

interface IItems {
  key: string,
  label: string
}

const items: Array<IItems> = [{ key: "/", label: "Главная" }, { key: "/reserv_and_menu", label: "Бронирование и меню" }, { key: "/about_us", label: "О нас" },];

const Home: React.FC = () => {
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleChangePage = (e: any) => {
    const key = e.key;
    console.log(key);

  }

  return (
    <Provider store={stores}>
      <Layout>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            onClick={handleChangePage}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{ padding: '0 10px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <MenuAndReserv />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Provider>
  );
};

export default Home;