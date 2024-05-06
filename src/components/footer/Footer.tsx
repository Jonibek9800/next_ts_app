"use client"

import React from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { goToRoute } from '../../shared/store/features/navigate/navigate';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { useRouter } from 'next/navigation';

const { Footer } = Layout;

const FooterComponent = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <Footer style={{ backgroundColor: '#e6e2d8', color: '#A9A9A9', textAlign: "center" }}>
      <div style={{ padding: '50px 0' }}>
        <Row justify="center">
          <Col style={{ margin: '10px' }} xs={24} sm={24} md={8} lg={6}>
            <h2>Подписывайтесь на нас</h2>
            <div style={{ fontSize: '28px', marginTop: 10 }}>
              <FacebookOutlined style={{ marginRight: '10px', backgroundColor: "#1E90FF", cursor: "pointer" }} />
              <TwitterOutlined style={{ marginRight: '10px', color: "#1E90FF", cursor: "pointer" }} />
              <InstagramOutlined style={{ marginRight: '10px', backgroundImage: "linear-gradient(to right, #DDA0DD, #FF00FF)", cursor: "pointer" }} />
              <LinkedinOutlined style={{ backgroundColor: "#4169E1", cursor: "pointer" }} />
            </div>
          </Col>
          <Col style={{ margin: '10px' }} xs={24} sm={24} md={8} lg={6}>
            <h2 style={{ paddingTop: "10px" }}>Контакты:</h2>
            <p style={{ paddingTop: "10px" }}>Телефон: +992 (12) 345 67 89</p>
            <p style={{ paddingTop: "10px" }}>Email: info@example.ru</p>
          </Col>
          <Col style={{ margin: '10px' }} xs={24} sm={24} md={8} lg={6}>
            <h2>Меню</h2>
            <Menu mode="vertical" style={{ backgroundColor: "#e6e2d0", }}>
              <Menu.Item key="1" onClick={() => { router.push("/"); dispatch(goToRoute("/")) }}>Главная</Menu.Item>
              <Menu.Item key="2" onClick={() => { router.push("/reserv_and_menu"); dispatch(goToRoute("/reserv_and_menu")) }}>Меню и Бронирование</Menu.Item>
              <Menu.Item key="4" onClick={() => { router.push("/about"); dispatch(goToRoute("/about")) }}>О нас</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
      <div style={{ textAlign: 'center', padding: '10px 0' }}>© 2024 Вкусные сюрпризы. Все права защищены.</div>
    </Footer>
  );
};

export default FooterComponent;