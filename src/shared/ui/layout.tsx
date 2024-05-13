"use client";

import { Layout, Menu, theme, Button, Avatar, Dropdown } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/hooks";
import {
  checkAuth,
  getUsersList,
  setLogout,
} from "@/shared/store/features/auth/auth";
import { goToRoute } from "@/shared/store/features/navigate/navigate";
import { useEffect, useState } from "react";
import { IUser } from "./interfaces";
import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
  // {
  //   label: "Профиль",
  //   key: "0",
  // },
  {
    label: "Выход",
    key: "1",
  },
];

interface IItems {
  key: string;
  label: string;
}

const menuList: Array<IItems> = [
  { key: "/", label: "Главная" },
  { key: "/reserv_and_menu", label: "Бронирование и меню" },
  { key: "/about", label: "О нас" },
];

const Layouts = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  let user: IUser = { id: 0, name: "", password: "", age: 0 };

  useEffect(() => {
    const strUser = localStorage.getItem("user");
    if (strUser) {
      user = JSON.parse(strUser);
    }
  }, [user]);
  console.log(user);

  useEffect(() => {
    dispatch(getUsersList());
    dispatch(checkAuth(user));
  }, [dispatch]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleChangePage = (e: any) => {
    const key = e.key;
    route.push(key);
  };

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{
            maxWidth: 60,
            backgroundColor: "#e6e2d8",
            cursor: "pointer",
            flex: 2,
          }}
          src="./img/resto_logo.png"
          alt="example"
          onClick={() => {
            route.push("/");
          }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={menuList}
          onClick={handleChangePage}
          style={{ flex: 0.5, minWidth: 0 }}
        />
        {auth.isAuth ? (
          <div>
            <Dropdown.Button
              onClick={() => route.push("/profile")}
              menu={{ items }}
            >
              <Avatar
                size={27}
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              />
            </Dropdown.Button>
          </div>
        ) : (
          <Button
            onClick={() => {
              route.push("/auth");
              dispatch(goToRoute("/auth"));
            }}
            icon={<UserOutlined />}
          >
            Войти
          </Button>
        )}
        {/* {auth.isAuth ? (
          <div>
            <Avatar
              style={{
                backgroundColor: "#87d068",
              }}
              icon={<UserOutlined />}
            />{" "}
            <Button onClick={() => dispatch(setLogout())}>Выйти</Button>
          </div>
        ) : (
          <Button
            onClick={() => {
              route.push("/auth");
              dispatch(goToRoute("/auth"));
            }}
            icon={<UserOutlined />}
          >
            Войти
          </Button>
        )} */}
      </Header>
      <Content>
        <div
          style={{
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default Layouts;
