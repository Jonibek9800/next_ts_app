"use client";
export const dynamic = "force-dynamic";
import FoodMenu from "@/components/FoodMenu";
import ReservMenu from "@/components/ReservMenu";
import { getReservList } from "@/shared/services/dishes_service/dishes_service";
import { IReserTable } from "@/shared/ui/interfaces";
import { Button, Image } from "antd";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import useSWR from "swr";

const MenuAndReserv = () => {
  const [open, setOpen] = useState(false);
  const { data, error } = useSWR<IReserTable[]>("/reservTable", getReservList);

  const toggleClose = () => {
    setOpen((prev) => !prev);
  };
  console.log(data);

  return (
    <>
      <Content style={{ textAlign: "center" }}>
        <Title level={3}>Бронирование</Title>
        <Card
          hoverable
          style={{
            width: 240,
            margin: "auto",
          }}
          cover={<Image alt="example" src="./img/table/table_on_two.jpg" />}
        >
          <Meta
            title={<Button onClick={toggleClose}>Забронировать столик</Button>}
          />
        </Card>
        {open && <ReservMenu onClose={toggleClose} open={open} />}
        <Title level={3}>Меню</Title>
        <FoodMenu />
      </Content>
    </>
  );
};

export default MenuAndReserv;
