"use client"
import CarouselSlider from '@/components/carousel/Carousel';
import FooterComponent from '@/components/footer/Footer';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';

const Home: React.FC = () => {
  

  return (
    <Layout style={{ backgroundColor: "#754545" }}>
      <Content
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <CarouselSlider />
      </Content>
      <Content></Content>
      <FooterComponent />
    </Layout>
  );
};

export default Home;

