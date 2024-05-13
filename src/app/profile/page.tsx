"use client"

import { IUser } from "@/shared/ui/interfaces";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const strUser = localStorage.getItem("user");
    if (strUser) {
      setUser(JSON.parse(strUser));
    }
  }, []);

  return <>
    {user ? <div>
        <Title level={3}>Имя {user?.name}</Title>
        <Title level={4}>Возраст {user.age}</Title>
    </div> : <div>Loading...</div>}
  </>;
};

export default Profile;
