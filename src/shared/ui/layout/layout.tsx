/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Layout,
  Menu,
  theme,
  Button,
  Avatar,
  Dropdown,
  Space,
  Drawer,
  Col,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";
import {
  UserOutlined,
  DownOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { useAuthStore } from "@/shared/store/auth/auth";
import { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { getFromStoreg, setFromStorage } from "../../utils/utils";
import Link from "next/link";
import styles from "./layout.module.css";

const items: MenuProps["items"] = [
  {
    label: "Профиль",
    key: "/profile",
  },
  {
    label: "Выход",
    key: "/logout",
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
  const isAuth = useAuthStore((state) => state.isAuth);
  const setAuthUser = useAuthStore((state) => state.setAuthUser);
  const setLogOut = useAuthStore((state) => state.setLogOut);
  const user = useAuthStore((state) => state.user);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeKey, setActiveKey] = useState("/");

  useEffect(() => {
    if (getFromStoreg("user")) {
      setAuthUser(getFromStoreg("user"));
      // if (data) {
      //   setReservTable(data.filter((table) => table.personId == user.id));
      // }
    }
  }, [setAuthUser]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleClose = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleChangePage = (key: string) => {
    setActiveKey(key);
    setOpenMenu(false);
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
    if (e.key === "/logout") {
      setLogOut();
      setFromStorage("user", "");
    } else {
      route.push(e.key);
    }
  };

  const menuProps: MenuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Layout>
      <Header
        style={{
          // position: "sticky",
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
          src="/img/resto_logo.png"
          alt="example"
          onClick={() => {
            route.push("/");
          }}
        />
        <div className={styles.nav_wrapper}>
          <div className={styles.menu}>
            {menuList.map((link) => {
              return (
                <Link
                  onClick={() => {
                    handleChangePage(link.key);
                  }}
                  className={
                    activeKey === link.key
                      ? `${styles.activ_link} ${styles.menu_item}`
                      : styles.menu_item
                  }
                  key={link.key}
                  href={link.key}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <button onClick={handleClose} className={styles.burger_menu_btn}>
            <img
              className={styles.burger_menu_img}
              src="/img/main-menu.png"
              alt="menu"
            />
          </button>
          {isAuth ? (
            <div>
              <Dropdown menu={menuProps}>
                <Button>
                  <Space>
                    <Avatar
                      size={26}
                      style={{
                        backgroundColor: "#87d068",
                      }}
                      icon={<UserOutlined />}
                    />
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>
          ) : (
            <Button
              onClick={() => {
                route.push("/auth");
              }}
              icon={<UserOutlined />}
            >
              Войти
            </Button>
          )}
        </div>
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
          <Drawer
            style={{
              backgroundColor: "#e6e2d8",
            }}
            placement="top"
            onClose={handleClose}
            open={openMenu}
          >
            <div className={styles.drawer_menu}>
            <div className={styles.menu_burger}>
              {menuList.map((link) => {
                return (
                  <Link
                    onClick={() => {
                      handleChangePage(link.key);
                    }}
                    className={
                      activeKey === link.key
                        ? `${styles.activ_link} ${styles.menu_item}`
                        : styles.menu_item
                    }
                    key={link.key}
                    href={link.key}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
              <Col style={{ margin: "10px" }} xs={24} sm={24} md={8} lg={6}>
                <div style={{ fontSize: "28px", marginTop: 10 }}>
                  <FacebookOutlined
                    style={{
                      marginRight: "10px",
                      backgroundColor: "#1E90FF",
                      cursor: "pointer",
                    }}
                  />
                  <TwitterOutlined
                    style={{
                      marginRight: "10px",
                      color: "#1E90FF",
                      cursor: "pointer",
                    }}
                  />
                  <InstagramOutlined
                    style={{
                      marginRight: "10px",
                      backgroundImage:
                        "linear-gradient(to right, #DDA0DD, #FF00FF)",
                      cursor: "pointer",
                    }}
                  />
                  <LinkedinOutlined
                    style={{ backgroundColor: "#4169E1", cursor: "pointer" }}
                  />
                </div>
              </Col>
            </div>
          </Drawer>
        </div>
      </Content>
    </Layout>
  );
};

export default Layouts;
