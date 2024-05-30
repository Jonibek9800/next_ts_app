"use client";

import { Avatar } from "antd";
import Title from "antd/es/typography/Title";
import { UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { IUser } from "@/shared/ui/interfaces";
import { getFromStoreg } from "@/shared/utils/utils";
import { Content } from "antd/es/layout/layout";

const UserInfo = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (getFromStoreg("user")) {
      setUser(getFromStoreg("user"));
    }
  }, []);

  return (
    <>
      {user ? (
        <div
          style={{
            textAlign: "center",
            padding: 10,
            margin: "auto",
            display: "flex",
            border: "1px solid grey",
            borderRadius: 10,
            maxWidth: 500,
          }}
        >
          <Avatar
            style={{ backgroundColor: "#f56a00" }}
            size={200}
            src="/swat.png"
          />
          <Content>
            <Title level={3}>Имя {user?.name}</Title>
            <Title level={4}>Возраст {user.age}</Title>
          </Content>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default UserInfo;
