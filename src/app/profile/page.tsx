"use client";
import Title from "antd/es/typography/Title";
import ReservList from "@/components/user-reservation-sheet/ReservList";
import { Content } from "antd/es/layout/layout";
import PrivateRoute from "@/shared/routes/private/PrivateRoute";
import UserInfo from "@/components/user-info/UserInfo";

const Profile = () => {
  return (
    <Content>
      <UserInfo />
      <div style={{ margin: 10, textAlign: "center" }}>
        <Title level={4}>Мои броны</Title>
        <ReservList />
      </div>
    </Content>
  );
};

export default PrivateRoute(Profile);
