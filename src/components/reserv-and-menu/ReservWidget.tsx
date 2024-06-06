"use client";
import { Button, Card, Image } from "antd";
import Meta from "antd/es/card/Meta";
import Title from "antd/es/typography/Title";
import ReservMenu from "../reserv-modal/ReservModal";
import { useState } from "react";
import { IDataProps } from "../food-menu/FoodMenu";

const ReservAndMenu = ({ data }: { data: IDataProps }) => {
  const [open, setOpen] = useState(false);

  const toggleClose = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
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
      {open && <ReservMenu onClose={toggleClose} open={open} data={data} />}
    </>
  );
};

export default ReservAndMenu;
