"use client";

import { IUser } from "@/shared/ui/interfaces";
import { Avatar } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import ReservList from "@/components/reserv-list'/ReservList";
import { Content } from "antd/es/layout/layout";
import PrivateRoute from "@/shared/routes/private/PrivateRoute";

const Profile = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const strUser = localStorage.getItem("user");
    if (strUser) {
      setUser(JSON.parse(strUser));
    }
  }, []);

  return (
    <Content>
      {user ? (
        <div
          style={{
            textAlign: "center",
            padding: 10,
            margin: 30,
            border: "1px solid grey",
            borderRadius: 10,
          }}
        >
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            size={100}
            icon={<UserOutlined />}
          />
          <Title level={3}>Имя {user?.name}</Title>
          <Title level={4}>Возраст {user.age}</Title>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <div style={{ margin: 10, textAlign: "center" }}>
        <Title level={4}>Мои броны</Title>
        <ReservList />
      </div>
    </Content>
  );
};

export default PrivateRoute(Profile);
