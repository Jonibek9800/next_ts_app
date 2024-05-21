"use client";

import { Avatar } from "antd";
import Title from "antd/es/typography/Title";
import { UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { IUser } from "@/shared/ui/interfaces";
import { getFromStoreg } from "@/shared/utils/utils";

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
    </>
  );
};

export default UserInfo;
