"use client";

import {
  Layout,
  Menu,
  theme,
  Button,
  Avatar,
  Dropdown,
  Space,
  Image,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { useAuthStore } from "@/shared/store/auth/auth";
import { useEffect } from "react";
import { IReserTable, IUser } from "./interfaces";
import type { MenuProps } from "antd";
import useSWR from "swr";
import { getReservTable } from "../services/dishes_service/dishes_service";
import { useTableStore } from "../store/table_reservation/table_reservation";
import { getFromStoreg, setFromStorage } from "../utils/utils";

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
  const setReservTable = useTableStore((state) => state.setReservList);
  const { data } = useSWR<IReserTable[]>("reserv_table", getReservTable);

  useEffect(() => {
    if (getFromStoreg("user")) {
      setAuthUser(getFromStoreg("user"));
      if (data) {
        setReservTable(data.filter((table) => table.personId == user.id));
      }
    }
  }, [data]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleChangePage = (e: any) => {
    const key = e.key;
    route.push(key);
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
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
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
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={menuList}
          onClick={handleChangePage}
          style={{ flex: 0.5, minWidth: 0 }}
        />
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
